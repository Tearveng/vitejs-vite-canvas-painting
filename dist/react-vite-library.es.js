import Ie, { useRef as fr, useState as De, useCallback as ie, useEffect as K } from "react";
var ue = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function lr() {
  if (Fe)
    return N;
  Fe = 1;
  var I = Ie, O = Symbol.for("react.element"), W = Symbol.for("react.fragment"), x = Object.prototype.hasOwnProperty, C = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(b, i, R) {
    var p, E = {}, y = null, P = null;
    R !== void 0 && (y = "" + R), i.key !== void 0 && (y = "" + i.key), i.ref !== void 0 && (P = i.ref);
    for (p in i)
      x.call(i, p) && !S.hasOwnProperty(p) && (E[p] = i[p]);
    if (b && b.defaultProps)
      for (p in i = b.defaultProps, i)
        E[p] === void 0 && (E[p] = i[p]);
    return { $$typeof: O, type: b, key: y, ref: P, props: E, _owner: C.current };
  }
  return N.Fragment = W, N.jsx = j, N.jsxs = j, N;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function vr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var I = Ie, O = Symbol.for("react.element"), W = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), b = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), F = Symbol.iterator, k = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[k];
      return typeof r == "function" ? r : null;
    }
    var w = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        X("error", e, t);
      }
    }
    function X(e, r, t) {
      {
        var n = w.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var c = t.map(function(o) {
          return String(o);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var H = !1, s = !1, v = !1, M = !1, m = !1, se;
    se = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === x || e === S || m || e === C || e === R || e === p || M || e === P || H || s || v || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === E || e.$$typeof === j || e.$$typeof === b || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case x:
          return "Fragment";
        case W:
          return "Portal";
        case S:
          return "Profiler";
        case C:
          return "StrictMode";
        case R:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return ce(r) + ".Consumer";
          case j:
            var t = e;
            return ce(t._context) + ".Provider";
          case i:
            return $e(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : _(e.type) || "Memo";
          case y: {
            var u = e, c = u._payload, o = u._init;
            try {
              return _(o(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, $ = 0, fe, le, ve, de, pe, me, ge;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ye() {
      {
        if ($ === 0) {
          fe = console.log, le = console.info, ve = console.warn, de = console.error, pe = console.group, me = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
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
        $++;
      }
    }
    function Ne() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: fe
            }),
            info: D({}, e, {
              value: le
            }),
            warn: D({}, e, {
              value: ve
            }),
            error: D({}, e, {
              value: de
            }),
            group: D({}, e, {
              value: pe
            }),
            groupCollapsed: D({}, e, {
              value: me
            }),
            groupEnd: D({}, e, {
              value: ge
            })
          });
        }
        $ < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = w.ReactCurrentDispatcher, Q;
    function B(e, r, t) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            Q = n && n[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var ee = !1, q;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      q = new Ue();
    }
    function he(e, r) {
      if (!e || ee)
        return "";
      {
        var t = q.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ee = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = Z.current, Z.current = null, Ye();
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
`), g = n.stack.split(`
`), f = a.length - 1, l = g.length - 1; f >= 1 && l >= 0 && a[f] !== g[l]; )
            l--;
          for (; f >= 1 && l >= 0; f--, l--)
            if (a[f] !== g[l]) {
              if (f !== 1 || l !== 1)
                do
                  if (f--, l--, l < 0 || a[f] !== g[l]) {
                    var h = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, h), h;
                  }
                while (f >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Z.current = c, Ne(), Error.prepareStackTrace = u;
      }
      var L = e ? e.displayName || e.name : "", ke = L ? B(L) : "";
      return typeof e == "function" && q.set(e, ke), ke;
    }
    function Ve(e, r, t) {
      return he(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Me(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case R:
          return B("Suspense");
        case p:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return Ve(e.render);
          case E:
            return J(e.type, r, t);
          case y: {
            var n = e, u = n._payload, c = n._init;
            try {
              return J(c(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, ye = {}, be = w.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, u) {
      {
        var c = Function.call.bind(G);
        for (var o in e)
          if (c(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (z(u), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), z(null)), a instanceof Error && !(a.message in ye) && (ye[a.message] = !0, z(u), d("Failed %s type: %s", t, a.message), z(null));
          }
      }
    }
    var qe = Array.isArray;
    function re(e) {
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
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function _e(e) {
      if (Ge(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), Re(e);
    }
    var Y = w.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Pe, te;
    te = {};
    function Ke(e) {
      if (G.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (G.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = _(Y.current.type);
        te[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _(Y.current.type), e.ref), te[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Te || (Te = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Pe || (Pe = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, u, c, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: O,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: c
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
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, u) {
      {
        var c, o = {}, a = null, g = null;
        t !== void 0 && (_e(t), a = "" + t), Xe(r) && (_e(r.key), a = "" + r.key), Ke(r) && (g = r.ref, He(r, u));
        for (c in r)
          G.call(r, c) && !ze.hasOwnProperty(c) && (o[c] = r[c]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (c in f)
            o[c] === void 0 && (o[c] = f[c]);
        }
        if (a || g) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, l), g && Qe(o, l);
        }
        return er(e, a, g, u, n, Y.current, o);
      }
    }
    var ne = w.ReactCurrentOwner, we = w.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === O;
    }
    function Oe() {
      {
        if (ne.current) {
          var e = _(ne.current.type);
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
    var xe = {};
    function nr(e) {
      {
        var r = Oe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ce(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ne.current && (n = " It was passed a child from " + _(e._owner.type) + "."), A(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            oe(n) && Ce(n, r);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = V(e);
          if (typeof u == "function" && u !== e.entries)
            for (var c = u.call(e), o; !(o = c.next()).done; )
              oe(o.value) && Ce(o.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = _(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ae) {
          ae = !0;
          var u = _(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function je(e, r, t, n, u, c) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = tr(u);
          g ? a += g : a += Oe();
          var f;
          e === null ? f = "null" : re(e) ? f = "array" : e !== void 0 && e.$$typeof === O ? (f = "<" + (_(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var l = rr(e, r, t, u, c);
        if (l == null)
          return l;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (re(h)) {
                for (var L = 0; L < h.length; L++)
                  Se(h[L], e);
                Object.freeze && Object.freeze(h);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(h, e);
        }
        return e === x ? or(l) : ar(l), l;
      }
    }
    function ir(e, r, t) {
      return je(e, r, t, !0);
    }
    function ur(e, r, t) {
      return je(e, r, t, !1);
    }
    var sr = ur, cr = ir;
    U.Fragment = x, U.jsx = sr, U.jsxs = cr;
  }()), U;
}
process.env.NODE_ENV === "production" ? ue.exports = lr() : ue.exports = vr();
var Le = ue.exports;
const pr = ({
  width: I,
  height: O,
  containerStyle: W,
  canvasStyle: x,
  buttonComponent: C,
  submitComponent: S,
  paintWeight: j,
  paintColor: b
}) => {
  const i = fr(null), [R, p] = De(!1), [E, y] = De(
    void 0
  ), P = ie((s) => {
    const v = V(s);
    v && (y(v), p(!0));
  }, []);
  K(() => {
    if (!i.current)
      return;
    const s = i.current;
    return s.addEventListener("mousedown", P), () => {
      s.removeEventListener("mousedown", P);
    };
  }, [P]);
  const F = ie(
    (s) => {
      if (R) {
        const v = V(s);
        E && v && (w(E, v), y(v));
      }
    },
    [R, E]
  );
  K(() => {
    if (!i.current)
      return;
    const s = i.current;
    s.width = I, s.height = O;
  }, []), K(() => {
    if (!i.current)
      return;
    const s = i.current;
    return s.addEventListener("mousemove", F), () => {
      s.removeEventListener("mousemove", F);
    };
  }, [F]);
  const k = ie(() => {
    p(!1), y(void 0);
  }, []);
  K(() => {
    if (!i.current)
      return;
    const s = i.current;
    return s.addEventListener("mouseup", k), s.addEventListener("mouseleave", k), () => {
      s.removeEventListener("mouseup", k), s.removeEventListener("mouseleave", k);
    };
  }, [k]);
  const V = (s) => {
    if (!i.current)
      return;
    const v = i.current;
    return {
      x: s.pageX - v.offsetLeft,
      y: s.pageY - v.offsetTop
    };
  }, w = (s, v) => {
    if (!i.current)
      return;
    const m = i.current.getContext("2d");
    m && (m.strokeStyle = b ?? "red", m.lineJoin = "round", m.lineWidth = j ?? 4, m.beginPath(), m.moveTo(s.x, s.y), m.lineTo(v.x, v.y), m.closePath(), m.stroke());
  }, d = () => {
    if (!i.current)
      return;
    const v = i.current.toDataURL("image/png").replace("image/png", "image/octet-stream");
    H(v, "jpeg");
  }, X = () => i.current ? i.current.toDataURL("image/png") : void 0;
  function H(s, v, M = "name") {
    let m = document.createElement("a");
    m.download = M + "." + v, m.href = s, m.click();
  }
  return /* @__PURE__ */ Le.jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        ...W
      },
      children: [
        /* @__PURE__ */ Le.jsx(
          "canvas",
          {
            id: "canvas",
            ref: i,
            style: {
              border: "1px solid red"
            }
          }
        ),
        C && C(d),
        S && S(X)
      ]
    }
  );
};
export {
  pr as Canvas
};
