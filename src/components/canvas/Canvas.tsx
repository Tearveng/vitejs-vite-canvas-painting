import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";

interface CanvasProps {
  width: number;
  height: number;
  containerStyle?: CSSProperties;
  canvasStyle?: CSSProperties;
  buttonComponent?: (e: () => void) => JSX.Element;
  submitComponent?: (e: () => string | undefined) => JSX.Element;
  paintWeight?: number
}

type Coordinate = {
  x: number;
  y: number;
};

/**
 * @example: <Canvas
    width={1000}
    height={500}
    buttonComponent={(e) => <button onClick={e}>Save</button>}
    submitComponent={(e) => (
       <button onClick={() => getImg(e)}>Submit</button>
    )}
  />
 */
const Canvas = ({
  width,
  height,
  containerStyle,
  canvasStyle,
  buttonComponent,
  submitComponent,
  paintWeight
}: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(
    undefined
  );

  const startPaint = useCallback((event: MouseEvent) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setMousePosition(coordinates);
      setIsPainting(true);
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener("mousedown", startPaint);
    return () => {
      canvas.removeEventListener("mousedown", startPaint);
    };
  }, [startPaint]);

  const paint = useCallback(
    (event: MouseEvent) => {
      if (isPainting) {
        const newMousePosition = getCoordinates(event);
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
        }
      }
    },
    [isPainting, mousePosition]
  );

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener("mousemove", paint);
    return () => {
      canvas.removeEventListener("mousemove", paint);
    };
  }, [paint]);

  const exitPaint = useCallback(() => {
    setIsPainting(false);
    setMousePosition(undefined);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener("mouseup", exitPaint);
    canvas.addEventListener("mouseleave", exitPaint);
    return () => {
      canvas.removeEventListener("mouseup", exitPaint);
      canvas.removeEventListener("mouseleave", exitPaint);
    };
  }, [exitPaint]);

  const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    return {
      x: event.pageX - canvas.offsetLeft,
      y: event.pageY - canvas.offsetTop,
    };
  };

  const drawLine = (
    originalMousePosition: Coordinate,
    newMousePosition: Coordinate
  ) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext("2d");
    if (context) {
      context.strokeStyle = "red";
      context.lineJoin = "round";
      context.lineWidth = paintWeight ?? 4;

      context.beginPath();
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      context.lineTo(newMousePosition.x, newMousePosition.y);
      context.closePath();

      context.stroke();
    }
  };

  const saveImg = () => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;

    const img = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    saveFile(img, "jpeg");
  };

  const viewImg = (): string | undefined => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const img = canvas.toDataURL("image/png");
    // .replace("image/png", "image/octet-stream");
    return img;
  };

  function saveFile(strData: string, fileType: string, fileName = "name") {
    // document.location.href = strData;
    let saveLink = document.createElement("a");
    // download file name
    saveLink.download = fileName + "." + fileType;
    // download file data
    saveLink.href = strData;
    // start download
    saveLink.click();
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...containerStyle,
      }}
    >
      <canvas
        ref={canvasRef}
        height={height}
        width={width}
        style={{
          border: "1px solid red",
          ...canvasStyle,
        }}
      />

      {buttonComponent!(saveImg)}

      {submitComponent!(viewImg)}

    </div>
  );
};

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default Canvas;
