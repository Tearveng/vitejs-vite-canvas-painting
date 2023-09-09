import Le, { useRef as fr, useState as ke, useCallback as ae, useEffect as oe } from "react";
var ie = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function lr() {
  if (De)
    return Y;
  De = 1;
  var L = Le, x = Symbol.for("react.element"), I = Symbol.for("react.fragment"), w = Object.prototype.hasOwnProperty, k = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(c, d, R) {
    var p, h = {}, b = null, P = null;
    R !== void 0 && (b = "" + R), d.key !== void 0 && (b = "" + d.key), d.ref !== void 0 && (P = d.ref);
    for (p in d)
      w.call(d, p) && !D.hasOwnProperty(p) && (h[p] = d[p]);
    if (c && c.defaultProps)
      for (p in d = c.defaultProps, d)
        h[p] === void 0 && (h[p] = d[p]);
    return { $$typeof: x, type: c, key: b, ref: P, props: h, _owner: k.current };
  }
  return Y.Fragment = I, Y.jsx = S, Y.jsxs = S, Y;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function vr() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var L = Le, x = Symbol.for("react.element"), I = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), C = Symbol.iterator, U = "@@iterator";
    function z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = C && e[C] || e[U];
      return typeof r == "function" ? r : null;
    }
    var O = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        H("error", e, t);
      }
    }
    function H(e, r, t) {
      {
        var n = O.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var s = !1, v = !1, V = !1, g = !1, Ie = !1, ue;
    ue = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === w || e === D || Ie || e === k || e === R || e === p || g || e === P || s || v || V || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === h || e.$$typeof === S || e.$$typeof === c || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case w:
          return "Fragment";
        case I:
          return "Portal";
        case D:
          return "Profiler";
        case k:
          return "StrictMode";
        case R:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var r = e;
            return se(r) + ".Consumer";
          case S:
            var t = e;
            return se(t._context) + ".Provider";
          case d:
            return $e(e, e.render, "ForwardRef");
          case h:
            var n = e.displayName || null;
            return n !== null ? n : _(e.type) || "Memo";
          case b: {
            var i = e, u = i._payload, o = i._init;
            try {
              return _(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, W = 0, ce, fe, le, ve, de, pe, me;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Ye() {
      {
        if (W === 0) {
          ce = console.log, fe = console.info, le = console.warn, ve = console.error, de = console.group, pe = console.groupCollapsed, me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Ne() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ce
            }),
            info: j({}, e, {
              value: fe
            }),
            warn: j({}, e, {
              value: le
            }),
            error: j({}, e, {
              value: ve
            }),
            group: j({}, e, {
              value: de
            }),
            groupCollapsed: j({}, e, {
              value: pe
            }),
            groupEnd: j({}, e, {
              value: me
            })
          });
        }
        W < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = O.ReactCurrentDispatcher, X;
    function M(e, r, t) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            X = n && n[1] || "";
          }
        return `
` + X + e;
      }
    }
    var Z = !1, B;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ue();
    }
    function Ee(e, r) {
      if (!e || Z)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = K.current, K.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (T) {
              n = T;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (T) {
              n = T;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            n = T;
          }
          e();
        }
      } catch (T) {
        if (T && n && typeof T.stack == "string") {
          for (var a = T.stack.split(`
`), E = n.stack.split(`
`), f = a.length - 1, l = E.length - 1; f >= 1 && l >= 0 && a[f] !== E[l]; )
            l--;
          for (; f >= 1 && l >= 0; f--, l--)
            if (a[f] !== E[l]) {
              if (f !== 1 || l !== 1)
                do
                  if (f--, l--, l < 0 || a[f] !== E[l]) {
                    var y = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, y), y;
                  }
                while (f >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        Z = !1, K.current = u, Ne(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", je = A ? M(A) : "";
      return typeof e == "function" && B.set(e, je), je;
    }
    function Ve(e, r, t) {
      return Ee(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, Me(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case R:
          return M("Suspense");
        case p:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ve(e.render);
          case h:
            return q(e.type, r, t);
          case b: {
            var n = e, i = n._payload, u = n._init;
            try {
              return q(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, he = {}, ye = O.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var u = Function.call.bind(J);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (G(i), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), G(null)), a instanceof Error && !(a.message in he) && (he[a.message] = !0, G(i), m("Failed %s type: %s", t, a.message), G(null));
          }
      }
    }
    var qe = Array.isArray;
    function Q(e) {
      return qe(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function Re(e) {
      if (Ge(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), be(e);
    }
    var $ = O.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Te, ee;
    ee = {};
    function He(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = _($.current.type);
        ee[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _($.current.type), e.ref), ee[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          _e || (_e = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Te || (Te = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: x,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, E = null;
        t !== void 0 && (Re(t), a = "" + t), Ke(r) && (Re(r.key), a = "" + r.key), He(r) && (E = r.ref, Xe(r, i));
        for (u in r)
          J.call(r, u) && !ze.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (u in f)
            o[u] === void 0 && (o[u] = f[u]);
        }
        if (a || E) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, l), E && Qe(o, l);
        }
        return er(e, a, E, i, n, $.current, o);
      }
    }
    var re = O.ReactCurrentOwner, we = O.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === x;
    }
    function Pe() {
      {
        if (re.current) {
          var e = _(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ce = {};
    function nr(e) {
      {
        var r = Pe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var n = "";
        e && e._owner && e._owner !== re.current && (n = " It was passed a child from " + _(e._owner.type) + "."), F(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ne(n) && Oe(n, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = z(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              ne(o.value) && Oe(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = _(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var i = _(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function Se(e, r, t, n, i, u) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = tr(i);
          E ? a += E : a += Pe();
          var f;
          e === null ? f = "null" : Q(e) ? f = "array" : e !== void 0 && e.$$typeof === x ? (f = "<" + (_(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var l = rr(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (Q(y)) {
                for (var A = 0; A < y.length; A++)
                  xe(y[A], e);
                Object.freeze && Object.freeze(y);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(y, e);
        }
        return e === w ? or(l) : ar(l), l;
      }
    }
    function ir(e, r, t) {
      return Se(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Se(e, r, t, !1);
    }
    var sr = ur, cr = ir;
    N.Fragment = w, N.jsx = sr, N.jsxs = cr;
  }()), N;
}
process.env.NODE_ENV === "production" ? ie.exports = lr() : ie.exports = vr();
var Ae = ie.exports;
const dr = ({
  width: L,
  height: x,
  containerStyle: I,
  canvasStyle: w,
  buttonComponent: k,
  submitComponent: D,
  paintWeight: S
}) => {
  const c = fr(null), [d, R] = ke(!1), [p, h] = ke(
    void 0
  ), b = ae((s) => {
    const v = U(s);
    v && (h(v), R(!0));
  }, []);
  oe(() => {
    if (!c.current)
      return;
    const s = c.current;
    return s.addEventListener("mousedown", b), () => {
      s.removeEventListener("mousedown", b);
    };
  }, [b]);
  const P = ae(
    (s) => {
      if (d) {
        const v = U(s);
        p && v && (z(p, v), h(v));
      }
    },
    [d, p]
  );
  oe(() => {
    if (!c.current)
      return;
    const s = c.current;
    return s.addEventListener("mousemove", P), () => {
      s.removeEventListener("mousemove", P);
    };
  }, [P]);
  const C = ae(() => {
    R(!1), h(void 0);
  }, []);
  oe(() => {
    if (!c.current)
      return;
    const s = c.current;
    return s.addEventListener("mouseup", C), s.addEventListener("mouseleave", C), () => {
      s.removeEventListener("mouseup", C), s.removeEventListener("mouseleave", C);
    };
  }, [C]);
  const U = (s) => {
    if (!c.current)
      return;
    const v = c.current;
    return {
      x: s.pageX - v.offsetLeft,
      y: s.pageY - v.offsetTop
    };
  }, z = (s, v) => {
    if (!c.current)
      return;
    const g = c.current.getContext("2d");
    g && (g.strokeStyle = "red", g.lineJoin = "round", g.lineWidth = S ?? 4, g.beginPath(), g.moveTo(s.x, s.y), g.lineTo(v.x, v.y), g.closePath(), g.stroke());
  }, O = () => {
    if (!c.current)
      return;
    const v = c.current.toDataURL("image/png").replace("image/png", "image/octet-stream");
    H(v, "jpeg");
  }, m = () => c.current ? c.current.toDataURL("image/png") : void 0;
  function H(s, v, V = "name") {
    let g = document.createElement("a");
    g.download = V + "." + v, g.href = s, g.click();
  }
  return /* @__PURE__ */ Ae.jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        ...I
      },
      children: [
        /* @__PURE__ */ Ae.jsx(
          "canvas",
          {
            ref: c,
            height: x,
            width: L,
            style: {
              border: "1px solid red",
              ...w
            }
          }
        ),
        k(O),
        D(m)
      ]
    }
  );
};
dr.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight
};
export {
  dr as Canvas
};
