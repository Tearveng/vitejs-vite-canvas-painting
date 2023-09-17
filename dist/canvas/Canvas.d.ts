import { CSSProperties } from "react";
export interface CanvasProps {
    width: number;
    height: number;
    containerStyle?: CSSProperties;
    canvasStyle?: CSSProperties;
    buttonComponent?: (e: () => void) => JSX.Element;
    submitComponent?: (e: () => string | undefined) => JSX.Element;
    paintWeight?: number;
    paintColor?: string;
}
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
export declare const Canvas: ({ width, height, containerStyle, canvasStyle, buttonComponent, submitComponent, paintWeight, paintColor }: CanvasProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Canvas.d.ts.map