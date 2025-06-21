var Su = e => {
    throw TypeError(e)
}
;
var fl = (e, t, n) => t.has(e) || Su("Cannot " + n);
var j = (e, t, n) => (fl(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , X = (e, t, n) => t.has(e) ? Su("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , G = (e, t, n, r) => (fl(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , je = (e, t, n) => (fl(e, t, "access private method"),
n);
var yi = (e, t, n, r) => ({
    set _(o) {
        G(e, t, o, n)
    },
    get _() {
        return j(e, t, r)
    }
});
function jg(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function Sf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Cf = {
    exports: {}
}
  , As = {}
  , Ef = {
    exports: {}
}
  , K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ii = Symbol.for("react.element")
  , Pg = Symbol.for("react.portal")
  , Dg = Symbol.for("react.fragment")
  , Mg = Symbol.for("react.strict_mode")
  , Rg = Symbol.for("react.profiler")
  , Og = Symbol.for("react.provider")
  , Tg = Symbol.for("react.context")
  , Ag = Symbol.for("react.forward_ref")
  , _g = Symbol.for("react.suspense")
  , Lg = Symbol.for("react.memo")
  , Ig = Symbol.for("react.lazy")
  , Cu = Symbol.iterator;
function Bg(e) {
    return e === null || typeof e != "object" ? null : (e = Cu && e[Cu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Nf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , kf = Object.assign
  , jf = {};
function Jr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = jf,
    this.updater = n || Nf
}
Jr.prototype.isReactComponent = {};
Jr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Jr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Pf() {}
Pf.prototype = Jr.prototype;
function nc(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = jf,
    this.updater = n || Nf
}
var rc = nc.prototype = new Pf;
rc.constructor = nc;
kf(rc, Jr.prototype);
rc.isPureReactComponent = !0;
var Eu = Array.isArray
  , Df = Object.prototype.hasOwnProperty
  , oc = {
    current: null
}
  , Mf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Rf(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Df.call(t, r) && !Mf.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var c = Array(l), u = 0; u < l; u++)
            c[u] = arguments[u + 2];
        o.children = c
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: ii,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: oc.current
    }
}
function zg(e, t) {
    return {
        $$typeof: ii,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ic(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ii
}
function Vg(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Nu = /\/+/g;
function ml(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Vg("" + e.key) : t.toString(36)
}
function Ui(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ii:
            case Pg:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + ml(s, 0) : r,
        Eu(o) ? (n = "",
        e != null && (n = e.replace(Nu, "$&/") + "/"),
        Ui(o, t, n, "", function(u) {
            return u
        })) : o != null && (ic(o) && (o = zg(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Nu, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    Eu(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var c = r + ml(i, l);
            s += Ui(i, t, n, c, o)
        }
    else if (c = Bg(e),
    typeof c == "function")
        for (e = c.call(e),
        l = 0; !(i = e.next()).done; )
            i = i.value,
            c = r + ml(i, l++),
            s += Ui(i, t, n, c, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function xi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Ui(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function Ug(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ie = {
    current: null
}
  , Fi = {
    transition: null
}
  , Fg = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: Fi,
    ReactCurrentOwner: oc
};
function Of() {
    throw Error("act(...) is not supported in production builds of React.")
}
K.Children = {
    map: xi,
    forEach: function(e, t, n) {
        xi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return xi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return xi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ic(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
K.Component = Jr;
K.Fragment = Dg;
K.Profiler = Rg;
K.PureComponent = nc;
K.StrictMode = Mg;
K.Suspense = _g;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fg;
K.act = Of;
K.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = kf({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = oc.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (c in t)
            Df.call(t, c) && !Mf.hasOwnProperty(c) && (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c])
    }
    var c = arguments.length - 2;
    if (c === 1)
        r.children = n;
    else if (1 < c) {
        l = Array(c);
        for (var u = 0; u < c; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: ii,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
K.createContext = function(e) {
    return e = {
        $$typeof: Tg,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Og,
        _context: e
    },
    e.Consumer = e
}
;
K.createElement = Rf;
K.createFactory = function(e) {
    var t = Rf.bind(null, e);
    return t.type = e,
    t
}
;
K.createRef = function() {
    return {
        current: null
    }
}
;
K.forwardRef = function(e) {
    return {
        $$typeof: Ag,
        render: e
    }
}
;
K.isValidElement = ic;
K.lazy = function(e) {
    return {
        $$typeof: Ig,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Ug
    }
}
;
K.memo = function(e, t) {
    return {
        $$typeof: Lg,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
K.startTransition = function(e) {
    var t = Fi.transition;
    Fi.transition = {};
    try {
        e()
    } finally {
        Fi.transition = t
    }
}
;
K.unstable_act = Of;
K.useCallback = function(e, t) {
    return Ie.current.useCallback(e, t)
}
;
K.useContext = function(e) {
    return Ie.current.useContext(e)
}
;
K.useDebugValue = function() {}
;
K.useDeferredValue = function(e) {
    return Ie.current.useDeferredValue(e)
}
;
K.useEffect = function(e, t) {
    return Ie.current.useEffect(e, t)
}
;
K.useId = function() {
    return Ie.current.useId()
}
;
K.useImperativeHandle = function(e, t, n) {
    return Ie.current.useImperativeHandle(e, t, n)
}
;
K.useInsertionEffect = function(e, t) {
    return Ie.current.useInsertionEffect(e, t)
}
;
K.useLayoutEffect = function(e, t) {
    return Ie.current.useLayoutEffect(e, t)
}
;
K.useMemo = function(e, t) {
    return Ie.current.useMemo(e, t)
}
;
K.useReducer = function(e, t, n) {
    return Ie.current.useReducer(e, t, n)
}
;
K.useRef = function(e) {
    return Ie.current.useRef(e)
}
;
K.useState = function(e) {
    return Ie.current.useState(e)
}
;
K.useSyncExternalStore = function(e, t, n) {
    return Ie.current.useSyncExternalStore(e, t, n)
}
;
K.useTransition = function() {
    return Ie.current.useTransition()
}
;
K.version = "18.3.1";
Ef.exports = K;
var x = Ef.exports;
const R = Sf(x)
  , $g = jg({
    __proto__: null,
    default: R
}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gg = x
  , Hg = Symbol.for("react.element")
  , Wg = Symbol.for("react.fragment")
  , Qg = Object.prototype.hasOwnProperty
  , Kg = Gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Yg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Tf(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        Qg.call(t, r) && !Yg.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Hg,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Kg.current
    }
}
As.Fragment = Wg;
As.jsx = Tf;
As.jsxs = Tf;
Cf.exports = As;
var a = Cf.exports
  , Af = {
    exports: {}
}
  , et = {}
  , _f = {
    exports: {}
}
  , Lf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, M) {
        var B = E.length;
        E.push(M);
        e: for (; 0 < B; ) {
            var _ = B - 1 >>> 1
              , z = E[_];
            if (0 < o(z, M))
                E[_] = M,
                E[B] = z,
                B = _;
            else
                break e
        }
    }
    function n(E) {
        return E.length === 0 ? null : E[0]
    }
    function r(E) {
        if (E.length === 0)
            return null;
        var M = E[0]
          , B = E.pop();
        if (B !== M) {
            E[0] = B;
            e: for (var _ = 0, z = E.length, Y = z >>> 1; _ < Y; ) {
                var le = 2 * (_ + 1) - 1
                  , He = E[le]
                  , Z = le + 1
                  , ct = E[Z];
                if (0 > o(He, B))
                    Z < z && 0 > o(ct, He) ? (E[_] = ct,
                    E[Z] = B,
                    _ = Z) : (E[_] = He,
                    E[le] = B,
                    _ = le);
                else if (Z < z && 0 > o(ct, B))
                    E[_] = ct,
                    E[Z] = B,
                    _ = Z;
                else
                    break e
            }
        }
        return M
    }
    function o(E, M) {
        var B = E.sortIndex - M.sortIndex;
        return B !== 0 ? B : E.id - M.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var c = []
      , u = []
      , f = 1
      , m = null
      , d = 3
      , y = !1
      , w = !1
      , g = !1
      , b = typeof setTimeout == "function" ? setTimeout : null
      , h = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(E) {
        for (var M = n(u); M !== null; ) {
            if (M.callback === null)
                r(u);
            else if (M.startTime <= E)
                r(u),
                M.sortIndex = M.expirationTime,
                t(c, M);
            else
                break;
            M = n(u)
        }
    }
    function S(E) {
        if (g = !1,
        v(E),
        !w)
            if (n(c) !== null)
                w = !0,
                U(C);
            else {
                var M = n(u);
                M !== null && Q(S, M.startTime - E)
            }
    }
    function C(E, M) {
        w = !1,
        g && (g = !1,
        h(P),
        P = -1),
        y = !0;
        var B = d;
        try {
            for (v(M),
            m = n(c); m !== null && (!(m.expirationTime > M) || E && !V()); ) {
                var _ = m.callback;
                if (typeof _ == "function") {
                    m.callback = null,
                    d = m.priorityLevel;
                    var z = _(m.expirationTime <= M);
                    M = e.unstable_now(),
                    typeof z == "function" ? m.callback = z : m === n(c) && r(c),
                    v(M)
                } else
                    r(c);
                m = n(c)
            }
            if (m !== null)
                var Y = !0;
            else {
                var le = n(u);
                le !== null && Q(S, le.startTime - M),
                Y = !1
            }
            return Y
        } finally {
            m = null,
            d = B,
            y = !1
        }
    }
    var N = !1
      , k = null
      , P = -1
      , L = 5
      , O = -1;
    function V() {
        return !(e.unstable_now() - O < L)
    }
    function I() {
        if (k !== null) {
            var E = e.unstable_now();
            O = E;
            var M = !0;
            try {
                M = k(!0, E)
            } finally {
                M ? H() : (N = !1,
                k = null)
            }
        } else
            N = !1
    }
    var H;
    if (typeof p == "function")
        H = function() {
            p(I)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var T = new MessageChannel
          , W = T.port2;
        T.port1.onmessage = I,
        H = function() {
            W.postMessage(null)
        }
    } else
        H = function() {
            b(I, 0)
        }
        ;
    function U(E) {
        k = E,
        N || (N = !0,
        H())
    }
    function Q(E, M) {
        P = b(function() {
            E(e.unstable_now())
        }, M)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(E) {
        E.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || y || (w = !0,
        U(C))
    }
    ,
    e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < E ? Math.floor(1e3 / E) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(c)
    }
    ,
    e.unstable_next = function(E) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var M = 3;
            break;
        default:
            M = d
        }
        var B = d;
        d = M;
        try {
            return E()
        } finally {
            d = B
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(E, M) {
        switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            E = 3
        }
        var B = d;
        d = E;
        try {
            return M()
        } finally {
            d = B
        }
    }
    ,
    e.unstable_scheduleCallback = function(E, M, B) {
        var _ = e.unstable_now();
        switch (typeof B == "object" && B !== null ? (B = B.delay,
        B = typeof B == "number" && 0 < B ? _ + B : _) : B = _,
        E) {
        case 1:
            var z = -1;
            break;
        case 2:
            z = 250;
            break;
        case 5:
            z = 1073741823;
            break;
        case 4:
            z = 1e4;
            break;
        default:
            z = 5e3
        }
        return z = B + z,
        E = {
            id: f++,
            callback: M,
            priorityLevel: E,
            startTime: B,
            expirationTime: z,
            sortIndex: -1
        },
        B > _ ? (E.sortIndex = B,
        t(u, E),
        n(c) === null && E === n(u) && (g ? (h(P),
        P = -1) : g = !0,
        Q(S, B - _))) : (E.sortIndex = z,
        t(c, E),
        w || y || (w = !0,
        U(C))),
        E
    }
    ,
    e.unstable_shouldYield = V,
    e.unstable_wrapCallback = function(E) {
        var M = d;
        return function() {
            var B = d;
            d = M;
            try {
                return E.apply(this, arguments)
            } finally {
                d = B
            }
        }
    }
}
)(Lf);
_f.exports = Lf;
var qg = _f.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xg = x
  , Je = qg;
function D(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var If = new Set
  , Oo = {};
function rr(e, t) {
    $r(e, t),
    $r(e + "Capture", t)
}
function $r(e, t) {
    for (Oo[e] = t,
    e = 0; e < t.length; e++)
        If.add(t[e])
}
var $t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Kl = Object.prototype.hasOwnProperty
  , Zg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , ku = {}
  , ju = {};
function Jg(e) {
    return Kl.call(ju, e) ? !0 : Kl.call(ku, e) ? !1 : Zg.test(e) ? ju[e] = !0 : (ku[e] = !0,
    !1)
}
function ev(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function tv(e, t, n, r) {
    if (t === null || typeof t > "u" || ev(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Be(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ke[e] = new Be(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ke[t] = new Be(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ke[e] = new Be(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ke[e] = new Be(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ke[e] = new Be(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ke[e] = new Be(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ke[e] = new Be(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ke[e] = new Be(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ke[e] = new Be(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var sc = /[\-:]([a-z])/g;
function lc(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(sc, lc);
    ke[t] = new Be(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(sc, lc);
    ke[t] = new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(sc, lc);
    ke[t] = new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ke[e] = new Be(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ke.xlinkHref = new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ke[e] = new Be(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ac(e, t, n, r) {
    var o = ke.hasOwnProperty(t) ? ke[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (tv(t, n, o, r) && (n = null),
    r || o === null ? Jg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Yt = Xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , wi = Symbol.for("react.element")
  , pr = Symbol.for("react.portal")
  , hr = Symbol.for("react.fragment")
  , cc = Symbol.for("react.strict_mode")
  , Yl = Symbol.for("react.profiler")
  , Bf = Symbol.for("react.provider")
  , zf = Symbol.for("react.context")
  , uc = Symbol.for("react.forward_ref")
  , ql = Symbol.for("react.suspense")
  , Xl = Symbol.for("react.suspense_list")
  , dc = Symbol.for("react.memo")
  , an = Symbol.for("react.lazy")
  , Vf = Symbol.for("react.offscreen")
  , Pu = Symbol.iterator;
function lo(e) {
    return e === null || typeof e != "object" ? null : (e = Pu && e[Pu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ue = Object.assign, pl;
function yo(e) {
    if (pl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            pl = t && t[1] || ""
        }
    return `
` + pl + e
}
var hl = !1;
function gl(e, t) {
    if (!e || hl)
        return "";
    hl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || o[s] !== i[l]) {
                                var c = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)),
                                c
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        hl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? yo(e) : ""
}
function nv(e) {
    switch (e.tag) {
    case 5:
        return yo(e.type);
    case 16:
        return yo("Lazy");
    case 13:
        return yo("Suspense");
    case 19:
        return yo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = gl(e.type, !1),
        e;
    case 11:
        return e = gl(e.type.render, !1),
        e;
    case 1:
        return e = gl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Zl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case hr:
        return "Fragment";
    case pr:
        return "Portal";
    case Yl:
        return "Profiler";
    case cc:
        return "StrictMode";
    case ql:
        return "Suspense";
    case Xl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case zf:
            return (e.displayName || "Context") + ".Consumer";
        case Bf:
            return (e._context.displayName || "Context") + ".Provider";
        case uc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case dc:
            return t = e.displayName || null,
            t !== null ? t : Zl(e.type) || "Memo";
        case an:
            t = e._payload,
            e = e._init;
            try {
                return Zl(e(t))
            } catch {}
        }
    return null
}
function rv(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Zl(t);
    case 8:
        return t === cc ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Dn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Uf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function ov(e) {
    var t = Uf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function bi(e) {
    e._valueTracker || (e._valueTracker = ov(e))
}
function Ff(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Uf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function ns(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Jl(e, t) {
    var n = t.checked;
    return ue({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Du(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Dn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function $f(e, t) {
    t = t.checked,
    t != null && ac(e, "checked", t, !1)
}
function ea(e, t) {
    $f(e, t);
    var n = Dn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ta(e, t.type, n) : t.hasOwnProperty("defaultValue") && ta(e, t.type, Dn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Mu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ta(e, t, n) {
    (t !== "number" || ns(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var xo = Array.isArray;
function kr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Dn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function na(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(D(91));
    return ue({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ru(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(D(92));
            if (xo(n)) {
                if (1 < n.length)
                    throw Error(D(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Dn(n)
    }
}
function Gf(e, t) {
    var n = Dn(t.value)
      , r = Dn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Ou(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Hf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ra(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Hf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Si, Wf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Si = Si || document.createElement("div"),
        Si.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Si.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function To(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var So = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , iv = ["Webkit", "ms", "Moz", "O"];
Object.keys(So).forEach(function(e) {
    iv.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        So[t] = So[e]
    })
});
function Qf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || So.hasOwnProperty(e) && So[e] ? ("" + t).trim() : t + "px"
}
function Kf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Qf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var sv = ue({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function oa(e, t) {
    if (t) {
        if (sv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(D(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(D(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(D(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(D(62))
    }
}
function ia(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var sa = null;
function fc(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var la = null
  , jr = null
  , Pr = null;
function Tu(e) {
    if (e = ai(e)) {
        if (typeof la != "function")
            throw Error(D(280));
        var t = e.stateNode;
        t && (t = zs(t),
        la(e.stateNode, e.type, t))
    }
}
function Yf(e) {
    jr ? Pr ? Pr.push(e) : Pr = [e] : jr = e
}
function qf() {
    if (jr) {
        var e = jr
          , t = Pr;
        if (Pr = jr = null,
        Tu(e),
        t)
            for (e = 0; e < t.length; e++)
                Tu(t[e])
    }
}
function Xf(e, t) {
    return e(t)
}
function Zf() {}
var vl = !1;
function Jf(e, t, n) {
    if (vl)
        return e(t, n);
    vl = !0;
    try {
        return Xf(e, t, n)
    } finally {
        vl = !1,
        (jr !== null || Pr !== null) && (Zf(),
        qf())
    }
}
function Ao(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = zs(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(D(231, t, typeof n));
    return n
}
var aa = !1;
if ($t)
    try {
        var ao = {};
        Object.defineProperty(ao, "passive", {
            get: function() {
                aa = !0
            }
        }),
        window.addEventListener("test", ao, ao),
        window.removeEventListener("test", ao, ao)
    } catch {
        aa = !1
    }
function lv(e, t, n, r, o, i, s, l, c) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (f) {
        this.onError(f)
    }
}
var Co = !1
  , rs = null
  , os = !1
  , ca = null
  , av = {
    onError: function(e) {
        Co = !0,
        rs = e
    }
};
function cv(e, t, n, r, o, i, s, l, c) {
    Co = !1,
    rs = null,
    lv.apply(av, arguments)
}
function uv(e, t, n, r, o, i, s, l, c) {
    if (cv.apply(this, arguments),
    Co) {
        if (Co) {
            var u = rs;
            Co = !1,
            rs = null
        } else
            throw Error(D(198));
        os || (os = !0,
        ca = u)
    }
}
function or(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function em(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Au(e) {
    if (or(e) !== e)
        throw Error(D(188))
}
function dv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = or(e),
        t === null)
            throw Error(D(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return Au(o),
                    e;
                if (i === r)
                    return Au(o),
                    t;
                i = i.sibling
            }
            throw Error(D(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, l = o.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(D(189))
            }
        }
        if (n.alternate !== r)
            throw Error(D(190))
    }
    if (n.tag !== 3)
        throw Error(D(188));
    return n.stateNode.current === n ? e : t
}
function tm(e) {
    return e = dv(e),
    e !== null ? nm(e) : null
}
function nm(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = nm(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var rm = Je.unstable_scheduleCallback
  , _u = Je.unstable_cancelCallback
  , fv = Je.unstable_shouldYield
  , mv = Je.unstable_requestPaint
  , me = Je.unstable_now
  , pv = Je.unstable_getCurrentPriorityLevel
  , mc = Je.unstable_ImmediatePriority
  , om = Je.unstable_UserBlockingPriority
  , is = Je.unstable_NormalPriority
  , hv = Je.unstable_LowPriority
  , im = Je.unstable_IdlePriority
  , _s = null
  , Mt = null;
function gv(e) {
    if (Mt && typeof Mt.onCommitFiberRoot == "function")
        try {
            Mt.onCommitFiberRoot(_s, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var gt = Math.clz32 ? Math.clz32 : xv
  , vv = Math.log
  , yv = Math.LN2;
function xv(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (vv(e) / yv | 0) | 0
}
var Ci = 64
  , Ei = 4194304;
function wo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ss(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = wo(l) : (i &= s,
        i !== 0 && (r = wo(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = wo(s) : i !== 0 && (r = wo(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - gt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function wv(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function bv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - gt(i)
          , l = 1 << s
          , c = o[s];
        c === -1 ? (!(l & n) || l & r) && (o[s] = wv(l, t)) : c <= t && (e.expiredLanes |= l),
        i &= ~l
    }
}
function ua(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function sm() {
    var e = Ci;
    return Ci <<= 1,
    !(Ci & 4194240) && (Ci = 64),
    e
}
function yl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function si(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - gt(t),
    e[t] = n
}
function Sv(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - gt(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function pc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - gt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var J = 0;
function lm(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var am, hc, cm, um, dm, da = !1, Ni = [], wn = null, bn = null, Sn = null, _o = new Map, Lo = new Map, un = [], Cv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Lu(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        wn = null;
        break;
    case "dragenter":
    case "dragleave":
        bn = null;
        break;
    case "mouseover":
    case "mouseout":
        Sn = null;
        break;
    case "pointerover":
    case "pointerout":
        _o.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Lo.delete(t.pointerId)
    }
}
function co(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = ai(t),
    t !== null && hc(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Ev(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return wn = co(wn, e, t, n, r, o),
        !0;
    case "dragenter":
        return bn = co(bn, e, t, n, r, o),
        !0;
    case "mouseover":
        return Sn = co(Sn, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return _o.set(i, co(_o.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Lo.set(i, co(Lo.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function fm(e) {
    var t = Un(e.target);
    if (t !== null) {
        var n = or(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = em(n),
                t !== null) {
                    e.blockedOn = t,
                    dm(e.priority, function() {
                        cm(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function $i(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            sa = r,
            n.target.dispatchEvent(r),
            sa = null
        } else
            return t = ai(n),
            t !== null && hc(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Iu(e, t, n) {
    $i(e) && n.delete(t)
}
function Nv() {
    da = !1,
    wn !== null && $i(wn) && (wn = null),
    bn !== null && $i(bn) && (bn = null),
    Sn !== null && $i(Sn) && (Sn = null),
    _o.forEach(Iu),
    Lo.forEach(Iu)
}
function uo(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    da || (da = !0,
    Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Nv)))
}
function Io(e) {
    function t(o) {
        return uo(o, e)
    }
    if (0 < Ni.length) {
        uo(Ni[0], e);
        for (var n = 1; n < Ni.length; n++) {
            var r = Ni[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (wn !== null && uo(wn, e),
    bn !== null && uo(bn, e),
    Sn !== null && uo(Sn, e),
    _o.forEach(t),
    Lo.forEach(t),
    n = 0; n < un.length; n++)
        r = un[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < un.length && (n = un[0],
    n.blockedOn === null); )
        fm(n),
        n.blockedOn === null && un.shift()
}
var Dr = Yt.ReactCurrentBatchConfig
  , ls = !0;
function kv(e, t, n, r) {
    var o = J
      , i = Dr.transition;
    Dr.transition = null;
    try {
        J = 1,
        gc(e, t, n, r)
    } finally {
        J = o,
        Dr.transition = i
    }
}
function jv(e, t, n, r) {
    var o = J
      , i = Dr.transition;
    Dr.transition = null;
    try {
        J = 4,
        gc(e, t, n, r)
    } finally {
        J = o,
        Dr.transition = i
    }
}
function gc(e, t, n, r) {
    if (ls) {
        var o = fa(e, t, n, r);
        if (o === null)
            Pl(e, t, r, as, n),
            Lu(e, r);
        else if (Ev(o, e, t, n, r))
            r.stopPropagation();
        else if (Lu(e, r),
        t & 4 && -1 < Cv.indexOf(e)) {
            for (; o !== null; ) {
                var i = ai(o);
                if (i !== null && am(i),
                i = fa(e, t, n, r),
                i === null && Pl(e, t, r, as, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            Pl(e, t, r, null, n)
    }
}
var as = null;
function fa(e, t, n, r) {
    if (as = null,
    e = fc(r),
    e = Un(e),
    e !== null)
        if (t = or(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = em(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return as = e,
    null
}
function mm(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (pv()) {
        case mc:
            return 1;
        case om:
            return 4;
        case is:
        case hv:
            return 16;
        case im:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var vn = null
  , vc = null
  , Gi = null;
function pm() {
    if (Gi)
        return Gi;
    var e, t = vc, n = t.length, r, o = "value"in vn ? vn.value : vn.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return Gi = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Hi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ki() {
    return !0
}
function Bu() {
    return !1
}
function tt(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ki : Bu,
        this.isPropagationStopped = Bu,
        this
    }
    return ue(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = ki)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = ki)
        },
        persist: function() {},
        isPersistent: ki
    }),
    t
}
var eo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, yc = tt(eo), li = ue({}, eo, {
    view: 0,
    detail: 0
}), Pv = tt(li), xl, wl, fo, Ls = ue({}, li, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== fo && (fo && e.type === "mousemove" ? (xl = e.screenX - fo.screenX,
        wl = e.screenY - fo.screenY) : wl = xl = 0,
        fo = e),
        xl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : wl
    }
}), zu = tt(Ls), Dv = ue({}, Ls, {
    dataTransfer: 0
}), Mv = tt(Dv), Rv = ue({}, li, {
    relatedTarget: 0
}), bl = tt(Rv), Ov = ue({}, eo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Tv = tt(Ov), Av = ue({}, eo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), _v = tt(Av), Lv = ue({}, eo, {
    data: 0
}), Vu = tt(Lv), Iv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Bv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, zv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Vv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = zv[e]) ? !!t[e] : !1
}
function xc() {
    return Vv
}
var Uv = ue({}, li, {
    key: function(e) {
        if (e.key) {
            var t = Iv[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Hi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bv[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xc,
    charCode: function(e) {
        return e.type === "keypress" ? Hi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Hi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Fv = tt(Uv)
  , $v = ue({}, Ls, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Uu = tt($v)
  , Gv = ue({}, li, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xc
})
  , Hv = tt(Gv)
  , Wv = ue({}, eo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Qv = tt(Wv)
  , Kv = ue({}, Ls, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Yv = tt(Kv)
  , qv = [9, 13, 27, 32]
  , wc = $t && "CompositionEvent"in window
  , Eo = null;
$t && "documentMode"in document && (Eo = document.documentMode);
var Xv = $t && "TextEvent"in window && !Eo
  , hm = $t && (!wc || Eo && 8 < Eo && 11 >= Eo)
  , Fu = " "
  , $u = !1;
function gm(e, t) {
    switch (e) {
    case "keyup":
        return qv.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function vm(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var gr = !1;
function Zv(e, t) {
    switch (e) {
    case "compositionend":
        return vm(t);
    case "keypress":
        return t.which !== 32 ? null : ($u = !0,
        Fu);
    case "textInput":
        return e = t.data,
        e === Fu && $u ? null : e;
    default:
        return null
    }
}
function Jv(e, t) {
    if (gr)
        return e === "compositionend" || !wc && gm(e, t) ? (e = pm(),
        Gi = vc = vn = null,
        gr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return hm && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var ey = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Gu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ey[e.type] : t === "textarea"
}
function ym(e, t, n, r) {
    Yf(r),
    t = cs(t, "onChange"),
    0 < t.length && (n = new yc("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var No = null
  , Bo = null;
function ty(e) {
    Dm(e, 0)
}
function Is(e) {
    var t = xr(e);
    if (Ff(t))
        return e
}
function ny(e, t) {
    if (e === "change")
        return t
}
var xm = !1;
if ($t) {
    var Sl;
    if ($t) {
        var Cl = "oninput"in document;
        if (!Cl) {
            var Hu = document.createElement("div");
            Hu.setAttribute("oninput", "return;"),
            Cl = typeof Hu.oninput == "function"
        }
        Sl = Cl
    } else
        Sl = !1;
    xm = Sl && (!document.documentMode || 9 < document.documentMode)
}
function Wu() {
    No && (No.detachEvent("onpropertychange", wm),
    Bo = No = null)
}
function wm(e) {
    if (e.propertyName === "value" && Is(Bo)) {
        var t = [];
        ym(t, Bo, e, fc(e)),
        Jf(ty, t)
    }
}
function ry(e, t, n) {
    e === "focusin" ? (Wu(),
    No = t,
    Bo = n,
    No.attachEvent("onpropertychange", wm)) : e === "focusout" && Wu()
}
function oy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Is(Bo)
}
function iy(e, t) {
    if (e === "click")
        return Is(t)
}
function sy(e, t) {
    if (e === "input" || e === "change")
        return Is(t)
}
function ly(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var yt = typeof Object.is == "function" ? Object.is : ly;
function zo(e, t) {
    if (yt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Kl.call(t, o) || !yt(e[o], t[o]))
            return !1
    }
    return !0
}
function Qu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Ku(e, t) {
    var n = Qu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Qu(n)
    }
}
function bm(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bm(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Sm() {
    for (var e = window, t = ns(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ns(e.document)
    }
    return t
}
function bc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function ay(e) {
    var t = Sm()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && bm(n.ownerDocument.documentElement, n)) {
        if (r !== null && bc(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = Ku(n, i);
                var s = Ku(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var cy = $t && "documentMode"in document && 11 >= document.documentMode
  , vr = null
  , ma = null
  , ko = null
  , pa = !1;
function Yu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    pa || vr == null || vr !== ns(r) || (r = vr,
    "selectionStart"in r && bc(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    ko && zo(ko, r) || (ko = r,
    r = cs(ma, "onSelect"),
    0 < r.length && (t = new yc("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = vr)))
}
function ji(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var yr = {
    animationend: ji("Animation", "AnimationEnd"),
    animationiteration: ji("Animation", "AnimationIteration"),
    animationstart: ji("Animation", "AnimationStart"),
    transitionend: ji("Transition", "TransitionEnd")
}
  , El = {}
  , Cm = {};
$t && (Cm = document.createElement("div").style,
"AnimationEvent"in window || (delete yr.animationend.animation,
delete yr.animationiteration.animation,
delete yr.animationstart.animation),
"TransitionEvent"in window || delete yr.transitionend.transition);
function Bs(e) {
    if (El[e])
        return El[e];
    if (!yr[e])
        return e;
    var t = yr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Cm)
            return El[e] = t[n];
    return e
}
var Em = Bs("animationend")
  , Nm = Bs("animationiteration")
  , km = Bs("animationstart")
  , jm = Bs("transitionend")
  , Pm = new Map
  , qu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function _n(e, t) {
    Pm.set(e, t),
    rr(t, [e])
}
for (var Nl = 0; Nl < qu.length; Nl++) {
    var kl = qu[Nl]
      , uy = kl.toLowerCase()
      , dy = kl[0].toUpperCase() + kl.slice(1);
    _n(uy, "on" + dy)
}
_n(Em, "onAnimationEnd");
_n(Nm, "onAnimationIteration");
_n(km, "onAnimationStart");
_n("dblclick", "onDoubleClick");
_n("focusin", "onFocus");
_n("focusout", "onBlur");
_n(jm, "onTransitionEnd");
$r("onMouseEnter", ["mouseout", "mouseover"]);
$r("onMouseLeave", ["mouseout", "mouseover"]);
$r("onPointerEnter", ["pointerout", "pointerover"]);
$r("onPointerLeave", ["pointerout", "pointerover"]);
rr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
rr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
rr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
rr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var bo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , fy = new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));
function Xu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    uv(r, t, void 0, e),
    e.currentTarget = null
}
function Dm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , c = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    c !== i && o.isPropagationStopped())
                        break e;
                    Xu(o, l, u),
                    i = c
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    c = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    c !== i && o.isPropagationStopped())
                        break e;
                    Xu(o, l, u),
                    i = c
                }
        }
    }
    if (os)
        throw e = ca,
        os = !1,
        ca = null,
        e
}
function oe(e, t) {
    var n = t[xa];
    n === void 0 && (n = t[xa] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Mm(t, e, 2, !1),
    n.add(r))
}
function jl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Mm(n, e, r, t)
}
var Pi = "_reactListening" + Math.random().toString(36).slice(2);
function Vo(e) {
    if (!e[Pi]) {
        e[Pi] = !0,
        If.forEach(function(n) {
            n !== "selectionchange" && (fy.has(n) || jl(n, !1, e),
            jl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Pi] || (t[Pi] = !0,
        jl("selectionchange", !1, t))
    }
}
function Mm(e, t, n, r) {
    switch (mm(t)) {
    case 1:
        var o = kv;
        break;
    case 4:
        o = jv;
        break;
    default:
        o = gc
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !aa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Pl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var c = s.tag;
                        if ((c === 3 || c === 4) && (c = s.stateNode.containerInfo,
                        c === o || c.nodeType === 8 && c.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = Un(l),
                    s === null)
                        return;
                    if (c = s.tag,
                    c === 5 || c === 6) {
                        r = i = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Jf(function() {
        var u = i
          , f = fc(n)
          , m = [];
        e: {
            var d = Pm.get(e);
            if (d !== void 0) {
                var y = yc
                  , w = e;
                switch (e) {
                case "keypress":
                    if (Hi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = Fv;
                    break;
                case "focusin":
                    w = "focus",
                    y = bl;
                    break;
                case "focusout":
                    w = "blur",
                    y = bl;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = bl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = zu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = Mv;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = Hv;
                    break;
                case Em:
                case Nm:
                case km:
                    y = Tv;
                    break;
                case jm:
                    y = Qv;
                    break;
                case "scroll":
                    y = Pv;
                    break;
                case "wheel":
                    y = Yv;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = _v;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = Uu
                }
                var g = (t & 4) !== 0
                  , b = !g && e === "scroll"
                  , h = g ? d !== null ? d + "Capture" : null : d;
                g = [];
                for (var p = u, v; p !== null; ) {
                    v = p;
                    var S = v.stateNode;
                    if (v.tag === 5 && S !== null && (v = S,
                    h !== null && (S = Ao(p, h),
                    S != null && g.push(Uo(p, S, v)))),
                    b)
                        break;
                    p = p.return
                }
                0 < g.length && (d = new y(d,w,null,n,f),
                m.push({
                    event: d,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                d && n !== sa && (w = n.relatedTarget || n.fromElement) && (Un(w) || w[Gt]))
                    break e;
                if ((y || d) && (d = f.window === f ? f : (d = f.ownerDocument) ? d.defaultView || d.parentWindow : window,
                y ? (w = n.relatedTarget || n.toElement,
                y = u,
                w = w ? Un(w) : null,
                w !== null && (b = or(w),
                w !== b || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null,
                w = u),
                y !== w)) {
                    if (g = zu,
                    S = "onMouseLeave",
                    h = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = Uu,
                    S = "onPointerLeave",
                    h = "onPointerEnter",
                    p = "pointer"),
                    b = y == null ? d : xr(y),
                    v = w == null ? d : xr(w),
                    d = new g(S,p + "leave",y,n,f),
                    d.target = b,
                    d.relatedTarget = v,
                    S = null,
                    Un(f) === u && (g = new g(h,p + "enter",w,n,f),
                    g.target = v,
                    g.relatedTarget = b,
                    S = g),
                    b = S,
                    y && w)
                        t: {
                            for (g = y,
                            h = w,
                            p = 0,
                            v = g; v; v = mr(v))
                                p++;
                            for (v = 0,
                            S = h; S; S = mr(S))
                                v++;
                            for (; 0 < p - v; )
                                g = mr(g),
                                p--;
                            for (; 0 < v - p; )
                                h = mr(h),
                                v--;
                            for (; p--; ) {
                                if (g === h || h !== null && g === h.alternate)
                                    break t;
                                g = mr(g),
                                h = mr(h)
                            }
                            g = null
                        }
                    else
                        g = null;
                    y !== null && Zu(m, d, y, g, !1),
                    w !== null && b !== null && Zu(m, b, w, g, !0)
                }
            }
            e: {
                if (d = u ? xr(u) : window,
                y = d.nodeName && d.nodeName.toLowerCase(),
                y === "select" || y === "input" && d.type === "file")
                    var C = ny;
                else if (Gu(d))
                    if (xm)
                        C = sy;
                    else {
                        C = oy;
                        var N = ry
                    }
                else
                    (y = d.nodeName) && y.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (C = iy);
                if (C && (C = C(e, u))) {
                    ym(m, C, n, f);
                    break e
                }
                N && N(e, d, u),
                e === "focusout" && (N = d._wrapperState) && N.controlled && d.type === "number" && ta(d, "number", d.value)
            }
            switch (N = u ? xr(u) : window,
            e) {
            case "focusin":
                (Gu(N) || N.contentEditable === "true") && (vr = N,
                ma = u,
                ko = null);
                break;
            case "focusout":
                ko = ma = vr = null;
                break;
            case "mousedown":
                pa = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                pa = !1,
                Yu(m, n, f);
                break;
            case "selectionchange":
                if (cy)
                    break;
            case "keydown":
            case "keyup":
                Yu(m, n, f)
            }
            var k;
            if (wc)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                gr ? gm(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (hm && n.locale !== "ko" && (gr || P !== "onCompositionStart" ? P === "onCompositionEnd" && gr && (k = pm()) : (vn = f,
            vc = "value"in vn ? vn.value : vn.textContent,
            gr = !0)),
            N = cs(u, P),
            0 < N.length && (P = new Vu(P,e,null,n,f),
            m.push({
                event: P,
                listeners: N
            }),
            k ? P.data = k : (k = vm(n),
            k !== null && (P.data = k)))),
            (k = Xv ? Zv(e, n) : Jv(e, n)) && (u = cs(u, "onBeforeInput"),
            0 < u.length && (f = new Vu("onBeforeInput","beforeinput",null,n,f),
            m.push({
                event: f,
                listeners: u
            }),
            f.data = k))
        }
        Dm(m, t)
    })
}
function Uo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function cs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Ao(e, n),
        i != null && r.unshift(Uo(e, i, o)),
        i = Ao(e, t),
        i != null && r.push(Uo(e, i, o))),
        e = e.return
    }
    return r
}
function mr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Zu(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , c = l.alternate
          , u = l.stateNode;
        if (c !== null && c === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        o ? (c = Ao(n, i),
        c != null && s.unshift(Uo(n, c, l))) : o || (c = Ao(n, i),
        c != null && s.push(Uo(n, c, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var my = /\r\n?/g
  , py = /\u0000|\uFFFD/g;
function Ju(e) {
    return (typeof e == "string" ? e : "" + e).replace(my, `
`).replace(py, "")
}
function Di(e, t, n) {
    if (t = Ju(t),
    Ju(e) !== t && n)
        throw Error(D(425))
}
function us() {}
var ha = null
  , ga = null;
function va(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ya = typeof setTimeout == "function" ? setTimeout : void 0
  , hy = typeof clearTimeout == "function" ? clearTimeout : void 0
  , ed = typeof Promise == "function" ? Promise : void 0
  , gy = typeof queueMicrotask == "function" ? queueMicrotask : typeof ed < "u" ? function(e) {
    return ed.resolve(null).then(e).catch(vy)
}
: ya;
function vy(e) {
    setTimeout(function() {
        throw e
    })
}
function Dl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Io(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Io(t)
}
function Cn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function td(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var to = Math.random().toString(36).slice(2)
  , Dt = "__reactFiber$" + to
  , Fo = "__reactProps$" + to
  , Gt = "__reactContainer$" + to
  , xa = "__reactEvents$" + to
  , yy = "__reactListeners$" + to
  , xy = "__reactHandles$" + to;
function Un(e) {
    var t = e[Dt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Gt] || n[Dt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = td(e); e !== null; ) {
                    if (n = e[Dt])
                        return n;
                    e = td(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ai(e) {
    return e = e[Dt] || e[Gt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function xr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(D(33))
}
function zs(e) {
    return e[Fo] || null
}
var wa = []
  , wr = -1;
function Ln(e) {
    return {
        current: e
    }
}
function ie(e) {
    0 > wr || (e.current = wa[wr],
    wa[wr] = null,
    wr--)
}
function te(e, t) {
    wr++,
    wa[wr] = e.current,
    e.current = t
}
var Mn = {}
  , Oe = Ln(Mn)
  , Ue = Ln(!1)
  , qn = Mn;
function Gr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Mn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Fe(e) {
    return e = e.childContextTypes,
    e != null
}
function ds() {
    ie(Ue),
    ie(Oe)
}
function nd(e, t, n) {
    if (Oe.current !== Mn)
        throw Error(D(168));
    te(Oe, t),
    te(Ue, n)
}
function Rm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(D(108, rv(e) || "Unknown", o));
    return ue({}, n, r)
}
function fs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mn,
    qn = Oe.current,
    te(Oe, e),
    te(Ue, Ue.current),
    !0
}
function rd(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(D(169));
    n ? (e = Rm(e, t, qn),
    r.__reactInternalMemoizedMergedChildContext = e,
    ie(Ue),
    ie(Oe),
    te(Oe, e)) : ie(Ue),
    te(Ue, n)
}
var zt = null
  , Vs = !1
  , Ml = !1;
function Om(e) {
    zt === null ? zt = [e] : zt.push(e)
}
function wy(e) {
    Vs = !0,
    Om(e)
}
function In() {
    if (!Ml && zt !== null) {
        Ml = !0;
        var e = 0
          , t = J;
        try {
            var n = zt;
            for (J = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            zt = null,
            Vs = !1
        } catch (o) {
            throw zt !== null && (zt = zt.slice(e + 1)),
            rm(mc, In),
            o
        } finally {
            J = t,
            Ml = !1
        }
    }
    return null
}
var br = []
  , Sr = 0
  , ms = null
  , ps = 0
  , rt = []
  , ot = 0
  , Xn = null
  , Vt = 1
  , Ut = "";
function zn(e, t) {
    br[Sr++] = ps,
    br[Sr++] = ms,
    ms = e,
    ps = t
}
function Tm(e, t, n) {
    rt[ot++] = Vt,
    rt[ot++] = Ut,
    rt[ot++] = Xn,
    Xn = e;
    var r = Vt;
    e = Ut;
    var o = 32 - gt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - gt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        Vt = 1 << 32 - gt(t) + o | n << o | r,
        Ut = i + e
    } else
        Vt = 1 << i | n << o | r,
        Ut = e
}
function Sc(e) {
    e.return !== null && (zn(e, 1),
    Tm(e, 1, 0))
}
function Cc(e) {
    for (; e === ms; )
        ms = br[--Sr],
        br[Sr] = null,
        ps = br[--Sr],
        br[Sr] = null;
    for (; e === Xn; )
        Xn = rt[--ot],
        rt[ot] = null,
        Ut = rt[--ot],
        rt[ot] = null,
        Vt = rt[--ot],
        rt[ot] = null
}
var Xe = null
  , qe = null
  , se = !1
  , ht = null;
function Am(e, t) {
    var n = it(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function od(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        qe = Cn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Xe = e,
        qe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Xn !== null ? {
            id: Vt,
            overflow: Ut
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = it(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Xe = e,
        qe = null,
        !0) : !1;
    default:
        return !1
    }
}
function ba(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Sa(e) {
    if (se) {
        var t = qe;
        if (t) {
            var n = t;
            if (!od(e, t)) {
                if (ba(e))
                    throw Error(D(418));
                t = Cn(n.nextSibling);
                var r = Xe;
                t && od(e, t) ? Am(r, n) : (e.flags = e.flags & -4097 | 2,
                se = !1,
                Xe = e)
            }
        } else {
            if (ba(e))
                throw Error(D(418));
            e.flags = e.flags & -4097 | 2,
            se = !1,
            Xe = e
        }
    }
}
function id(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Xe = e
}
function Mi(e) {
    if (e !== Xe)
        return !1;
    if (!se)
        return id(e),
        se = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !va(e.type, e.memoizedProps)),
    t && (t = qe)) {
        if (ba(e))
            throw _m(),
            Error(D(418));
        for (; t; )
            Am(e, t),
            t = Cn(t.nextSibling)
    }
    if (id(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(D(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            qe = Cn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            qe = null
        }
    } else
        qe = Xe ? Cn(e.stateNode.nextSibling) : null;
    return !0
}
function _m() {
    for (var e = qe; e; )
        e = Cn(e.nextSibling)
}
function Hr() {
    qe = Xe = null,
    se = !1
}
function Ec(e) {
    ht === null ? ht = [e] : ht.push(e)
}
var by = Yt.ReactCurrentBatchConfig;
function mo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(D(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(D(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(D(284));
        if (!n._owner)
            throw Error(D(290, e))
    }
    return e
}
function Ri(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function sd(e) {
    var t = e._init;
    return t(e._payload)
}
function Lm(e) {
    function t(h, p) {
        if (e) {
            var v = h.deletions;
            v === null ? (h.deletions = [p],
            h.flags |= 16) : v.push(p)
        }
    }
    function n(h, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(h, p),
            p = p.sibling;
        return null
    }
    function r(h, p) {
        for (h = new Map; p !== null; )
            p.key !== null ? h.set(p.key, p) : h.set(p.index, p),
            p = p.sibling;
        return h
    }
    function o(h, p) {
        return h = jn(h, p),
        h.index = 0,
        h.sibling = null,
        h
    }
    function i(h, p, v) {
        return h.index = v,
        e ? (v = h.alternate,
        v !== null ? (v = v.index,
        v < p ? (h.flags |= 2,
        p) : v) : (h.flags |= 2,
        p)) : (h.flags |= 1048576,
        p)
    }
    function s(h) {
        return e && h.alternate === null && (h.flags |= 2),
        h
    }
    function l(h, p, v, S) {
        return p === null || p.tag !== 6 ? (p = Il(v, h.mode, S),
        p.return = h,
        p) : (p = o(p, v),
        p.return = h,
        p)
    }
    function c(h, p, v, S) {
        var C = v.type;
        return C === hr ? f(h, p, v.props.children, S, v.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === an && sd(C) === p.type) ? (S = o(p, v.props),
        S.ref = mo(h, p, v),
        S.return = h,
        S) : (S = Zi(v.type, v.key, v.props, null, h.mode, S),
        S.ref = mo(h, p, v),
        S.return = h,
        S)
    }
    function u(h, p, v, S) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = Bl(v, h.mode, S),
        p.return = h,
        p) : (p = o(p, v.children || []),
        p.return = h,
        p)
    }
    function f(h, p, v, S, C) {
        return p === null || p.tag !== 7 ? (p = Yn(v, h.mode, S, C),
        p.return = h,
        p) : (p = o(p, v),
        p.return = h,
        p)
    }
    function m(h, p, v) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Il("" + p, h.mode, v),
            p.return = h,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case wi:
                return v = Zi(p.type, p.key, p.props, null, h.mode, v),
                v.ref = mo(h, null, p),
                v.return = h,
                v;
            case pr:
                return p = Bl(p, h.mode, v),
                p.return = h,
                p;
            case an:
                var S = p._init;
                return m(h, S(p._payload), v)
            }
            if (xo(p) || lo(p))
                return p = Yn(p, h.mode, v, null),
                p.return = h,
                p;
            Ri(h, p)
        }
        return null
    }
    function d(h, p, v, S) {
        var C = p !== null ? p.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return C !== null ? null : l(h, p, "" + v, S);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case wi:
                return v.key === C ? c(h, p, v, S) : null;
            case pr:
                return v.key === C ? u(h, p, v, S) : null;
            case an:
                return C = v._init,
                d(h, p, C(v._payload), S)
            }
            if (xo(v) || lo(v))
                return C !== null ? null : f(h, p, v, S, null);
            Ri(h, v)
        }
        return null
    }
    function y(h, p, v, S, C) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return h = h.get(v) || null,
            l(p, h, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case wi:
                return h = h.get(S.key === null ? v : S.key) || null,
                c(p, h, S, C);
            case pr:
                return h = h.get(S.key === null ? v : S.key) || null,
                u(p, h, S, C);
            case an:
                var N = S._init;
                return y(h, p, v, N(S._payload), C)
            }
            if (xo(S) || lo(S))
                return h = h.get(v) || null,
                f(p, h, S, C, null);
            Ri(p, S)
        }
        return null
    }
    function w(h, p, v, S) {
        for (var C = null, N = null, k = p, P = p = 0, L = null; k !== null && P < v.length; P++) {
            k.index > P ? (L = k,
            k = null) : L = k.sibling;
            var O = d(h, k, v[P], S);
            if (O === null) {
                k === null && (k = L);
                break
            }
            e && k && O.alternate === null && t(h, k),
            p = i(O, p, P),
            N === null ? C = O : N.sibling = O,
            N = O,
            k = L
        }
        if (P === v.length)
            return n(h, k),
            se && zn(h, P),
            C;
        if (k === null) {
            for (; P < v.length; P++)
                k = m(h, v[P], S),
                k !== null && (p = i(k, p, P),
                N === null ? C = k : N.sibling = k,
                N = k);
            return se && zn(h, P),
            C
        }
        for (k = r(h, k); P < v.length; P++)
            L = y(k, h, P, v[P], S),
            L !== null && (e && L.alternate !== null && k.delete(L.key === null ? P : L.key),
            p = i(L, p, P),
            N === null ? C = L : N.sibling = L,
            N = L);
        return e && k.forEach(function(V) {
            return t(h, V)
        }),
        se && zn(h, P),
        C
    }
    function g(h, p, v, S) {
        var C = lo(v);
        if (typeof C != "function")
            throw Error(D(150));
        if (v = C.call(v),
        v == null)
            throw Error(D(151));
        for (var N = C = null, k = p, P = p = 0, L = null, O = v.next(); k !== null && !O.done; P++,
        O = v.next()) {
            k.index > P ? (L = k,
            k = null) : L = k.sibling;
            var V = d(h, k, O.value, S);
            if (V === null) {
                k === null && (k = L);
                break
            }
            e && k && V.alternate === null && t(h, k),
            p = i(V, p, P),
            N === null ? C = V : N.sibling = V,
            N = V,
            k = L
        }
        if (O.done)
            return n(h, k),
            se && zn(h, P),
            C;
        if (k === null) {
            for (; !O.done; P++,
            O = v.next())
                O = m(h, O.value, S),
                O !== null && (p = i(O, p, P),
                N === null ? C = O : N.sibling = O,
                N = O);
            return se && zn(h, P),
            C
        }
        for (k = r(h, k); !O.done; P++,
        O = v.next())
            O = y(k, h, P, O.value, S),
            O !== null && (e && O.alternate !== null && k.delete(O.key === null ? P : O.key),
            p = i(O, p, P),
            N === null ? C = O : N.sibling = O,
            N = O);
        return e && k.forEach(function(I) {
            return t(h, I)
        }),
        se && zn(h, P),
        C
    }
    function b(h, p, v, S) {
        if (typeof v == "object" && v !== null && v.type === hr && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case wi:
                e: {
                    for (var C = v.key, N = p; N !== null; ) {
                        if (N.key === C) {
                            if (C = v.type,
                            C === hr) {
                                if (N.tag === 7) {
                                    n(h, N.sibling),
                                    p = o(N, v.props.children),
                                    p.return = h,
                                    h = p;
                                    break e
                                }
                            } else if (N.elementType === C || typeof C == "object" && C !== null && C.$$typeof === an && sd(C) === N.type) {
                                n(h, N.sibling),
                                p = o(N, v.props),
                                p.ref = mo(h, N, v),
                                p.return = h,
                                h = p;
                                break e
                            }
                            n(h, N);
                            break
                        } else
                            t(h, N);
                        N = N.sibling
                    }
                    v.type === hr ? (p = Yn(v.props.children, h.mode, S, v.key),
                    p.return = h,
                    h = p) : (S = Zi(v.type, v.key, v.props, null, h.mode, S),
                    S.ref = mo(h, p, v),
                    S.return = h,
                    h = S)
                }
                return s(h);
            case pr:
                e: {
                    for (N = v.key; p !== null; ) {
                        if (p.key === N)
                            if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                                n(h, p.sibling),
                                p = o(p, v.children || []),
                                p.return = h,
                                h = p;
                                break e
                            } else {
                                n(h, p);
                                break
                            }
                        else
                            t(h, p);
                        p = p.sibling
                    }
                    p = Bl(v, h.mode, S),
                    p.return = h,
                    h = p
                }
                return s(h);
            case an:
                return N = v._init,
                b(h, p, N(v._payload), S)
            }
            if (xo(v))
                return w(h, p, v, S);
            if (lo(v))
                return g(h, p, v, S);
            Ri(h, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        p !== null && p.tag === 6 ? (n(h, p.sibling),
        p = o(p, v),
        p.return = h,
        h = p) : (n(h, p),
        p = Il(v, h.mode, S),
        p.return = h,
        h = p),
        s(h)) : n(h, p)
    }
    return b
}
var Wr = Lm(!0)
  , Im = Lm(!1)
  , hs = Ln(null)
  , gs = null
  , Cr = null
  , Nc = null;
function kc() {
    Nc = Cr = gs = null
}
function jc(e) {
    var t = hs.current;
    ie(hs),
    e._currentValue = t
}
function Ca(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Mr(e, t) {
    gs = e,
    Nc = Cr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0),
    e.firstContext = null)
}
function lt(e) {
    var t = e._currentValue;
    if (Nc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Cr === null) {
            if (gs === null)
                throw Error(D(308));
            Cr = e,
            gs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Cr = Cr.next = e;
    return t
}
var Fn = null;
function Pc(e) {
    Fn === null ? Fn = [e] : Fn.push(e)
}
function Bm(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    Pc(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Ht(e, r)
}
function Ht(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var cn = !1;
function Dc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function zm(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ft(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function En(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    q & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Ht(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    Pc(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Ht(e, n)
}
function Wi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        pc(e, n)
    }
}
function ld(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function vs(e, t, n, r) {
    var o = e.updateQueue;
    cn = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var c = l
          , u = c.next;
        c.next = null,
        s === null ? i = u : s.next = u,
        s = c;
        var f = e.alternate;
        f !== null && (f = f.updateQueue,
        l = f.lastBaseUpdate,
        l !== s && (l === null ? f.firstBaseUpdate = u : l.next = u,
        f.lastBaseUpdate = c))
    }
    if (i !== null) {
        var m = o.baseState;
        s = 0,
        f = u = c = null,
        l = i;
        do {
            var d = l.lane
              , y = l.eventTime;
            if ((r & d) === d) {
                f !== null && (f = f.next = {
                    eventTime: y,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var w = e
                      , g = l;
                    switch (d = t,
                    y = n,
                    g.tag) {
                    case 1:
                        if (w = g.payload,
                        typeof w == "function") {
                            m = w.call(y, m, d);
                            break e
                        }
                        m = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = g.payload,
                        d = typeof w == "function" ? w.call(y, m, d) : w,
                        d == null)
                            break e;
                        m = ue({}, m, d);
                        break e;
                    case 2:
                        cn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                d = o.effects,
                d === null ? o.effects = [l] : d.push(l))
            } else
                y = {
                    eventTime: y,
                    lane: d,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                f === null ? (u = f = y,
                c = m) : f = f.next = y,
                s |= d;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                d = l,
                l = d.next,
                d.next = null,
                o.lastBaseUpdate = d,
                o.shared.pending = null
            }
        } while (!0);
        if (f === null && (c = m),
        o.baseState = c,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = f,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        Jn |= s,
        e.lanes = s,
        e.memoizedState = m
    }
}
function ad(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(D(191, o));
                o.call(r)
            }
        }
}
var ci = {}
  , Rt = Ln(ci)
  , $o = Ln(ci)
  , Go = Ln(ci);
function $n(e) {
    if (e === ci)
        throw Error(D(174));
    return e
}
function Mc(e, t) {
    switch (te(Go, t),
    te($o, e),
    te(Rt, ci),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ra(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ra(t, e)
    }
    ie(Rt),
    te(Rt, t)
}
function Qr() {
    ie(Rt),
    ie($o),
    ie(Go)
}
function Vm(e) {
    $n(Go.current);
    var t = $n(Rt.current)
      , n = ra(t, e.type);
    t !== n && (te($o, e),
    te(Rt, n))
}
function Rc(e) {
    $o.current === e && (ie(Rt),
    ie($o))
}
var ae = Ln(0);
function ys(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Rl = [];
function Oc() {
    for (var e = 0; e < Rl.length; e++)
        Rl[e]._workInProgressVersionPrimary = null;
    Rl.length = 0
}
var Qi = Yt.ReactCurrentDispatcher
  , Ol = Yt.ReactCurrentBatchConfig
  , Zn = 0
  , ce = null
  , ve = null
  , we = null
  , xs = !1
  , jo = !1
  , Ho = 0
  , Sy = 0;
function Pe() {
    throw Error(D(321))
}
function Tc(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!yt(e[n], t[n]))
            return !1;
    return !0
}
function Ac(e, t, n, r, o, i) {
    if (Zn = i,
    ce = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Qi.current = e === null || e.memoizedState === null ? ky : jy,
    e = n(r, o),
    jo) {
        i = 0;
        do {
            if (jo = !1,
            Ho = 0,
            25 <= i)
                throw Error(D(301));
            i += 1,
            we = ve = null,
            t.updateQueue = null,
            Qi.current = Py,
            e = n(r, o)
        } while (jo)
    }
    if (Qi.current = ws,
    t = ve !== null && ve.next !== null,
    Zn = 0,
    we = ve = ce = null,
    xs = !1,
    t)
        throw Error(D(300));
    return e
}
function _c() {
    var e = Ho !== 0;
    return Ho = 0,
    e
}
function Nt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return we === null ? ce.memoizedState = we = e : we = we.next = e,
    we
}
function at() {
    if (ve === null) {
        var e = ce.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ve.next;
    var t = we === null ? ce.memoizedState : we.next;
    if (t !== null)
        we = t,
        ve = e;
    else {
        if (e === null)
            throw Error(D(310));
        ve = e,
        e = {
            memoizedState: ve.memoizedState,
            baseState: ve.baseState,
            baseQueue: ve.baseQueue,
            queue: ve.queue,
            next: null
        },
        we === null ? ce.memoizedState = we = e : we = we.next = e
    }
    return we
}
function Wo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Tl(e) {
    var t = at()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = ve
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var l = s = null
          , c = null
          , u = i;
        do {
            var f = u.lane;
            if ((Zn & f) === f)
                c !== null && (c = c.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var m = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                c === null ? (l = c = m,
                s = r) : c = c.next = m,
                ce.lanes |= f,
                Jn |= f
            }
            u = u.next
        } while (u !== null && u !== i);
        c === null ? s = r : c.next = l,
        yt(r, t.memoizedState) || (Ve = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = c,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ce.lanes |= i,
            Jn |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Al(e) {
    var t = at()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        yt(i, t.memoizedState) || (Ve = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Um() {}
function Fm(e, t) {
    var n = ce
      , r = at()
      , o = t()
      , i = !yt(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Ve = !0),
    r = r.queue,
    Lc(Hm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || we !== null && we.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Qo(9, Gm.bind(null, n, r, o, t), void 0, null),
        be === null)
            throw Error(D(349));
        Zn & 30 || $m(n, t, o)
    }
    return o
}
function $m(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ce.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ce.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Gm(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Wm(t) && Qm(e)
}
function Hm(e, t, n) {
    return n(function() {
        Wm(t) && Qm(e)
    })
}
function Wm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !yt(e, n)
    } catch {
        return !0
    }
}
function Qm(e) {
    var t = Ht(e, 1);
    t !== null && vt(t, e, 1, -1)
}
function cd(e) {
    var t = Nt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wo,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Ny.bind(null, ce, e),
    [t.memoizedState, e]
}
function Qo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ce.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ce.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Km() {
    return at().memoizedState
}
function Ki(e, t, n, r) {
    var o = Nt();
    ce.flags |= e,
    o.memoizedState = Qo(1 | t, n, void 0, r === void 0 ? null : r)
}
function Us(e, t, n, r) {
    var o = at();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ve !== null) {
        var s = ve.memoizedState;
        if (i = s.destroy,
        r !== null && Tc(r, s.deps)) {
            o.memoizedState = Qo(t, n, i, r);
            return
        }
    }
    ce.flags |= e,
    o.memoizedState = Qo(1 | t, n, i, r)
}
function ud(e, t) {
    return Ki(8390656, 8, e, t)
}
function Lc(e, t) {
    return Us(2048, 8, e, t)
}
function Ym(e, t) {
    return Us(4, 2, e, t)
}
function qm(e, t) {
    return Us(4, 4, e, t)
}
function Xm(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Zm(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Us(4, 4, Xm.bind(null, t, e), n)
}
function Ic() {}
function Jm(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Tc(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function ep(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Tc(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function tp(e, t, n) {
    return Zn & 21 ? (yt(n, t) || (n = sm(),
    ce.lanes |= n,
    Jn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ve = !0),
    e.memoizedState = n)
}
function Cy(e, t) {
    var n = J;
    J = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Ol.transition;
    Ol.transition = {};
    try {
        e(!1),
        t()
    } finally {
        J = n,
        Ol.transition = r
    }
}
function np() {
    return at().memoizedState
}
function Ey(e, t, n) {
    var r = kn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    rp(e))
        op(t, n);
    else if (n = Bm(e, t, n, r),
    n !== null) {
        var o = Le();
        vt(n, e, r, o),
        ip(n, t, r)
    }
}
function Ny(e, t, n) {
    var r = kn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (rp(e))
        op(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , l = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                yt(l, s)) {
                    var c = t.interleaved;
                    c === null ? (o.next = o,
                    Pc(t)) : (o.next = c.next,
                    c.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Bm(e, t, o, r),
        n !== null && (o = Le(),
        vt(n, e, r, o),
        ip(n, t, r))
    }
}
function rp(e) {
    var t = e.alternate;
    return e === ce || t !== null && t === ce
}
function op(e, t) {
    jo = xs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function ip(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        pc(e, n)
    }
}
var ws = {
    readContext: lt,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1
}
  , ky = {
    readContext: lt,
    useCallback: function(e, t) {
        return Nt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: lt,
    useEffect: ud,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ki(4194308, 4, Xm.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ki(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ki(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Nt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Nt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Ey.bind(null, ce, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Nt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: cd,
    useDebugValue: Ic,
    useDeferredValue: function(e) {
        return Nt().memoizedState = e
    },
    useTransition: function() {
        var e = cd(!1)
          , t = e[0];
        return e = Cy.bind(null, e[1]),
        Nt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ce
          , o = Nt();
        if (se) {
            if (n === void 0)
                throw Error(D(407));
            n = n()
        } else {
            if (n = t(),
            be === null)
                throw Error(D(349));
            Zn & 30 || $m(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        ud(Hm.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Qo(9, Gm.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Nt()
          , t = be.identifierPrefix;
        if (se) {
            var n = Ut
              , r = Vt;
            n = (r & ~(1 << 32 - gt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Ho++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Sy++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , jy = {
    readContext: lt,
    useCallback: Jm,
    useContext: lt,
    useEffect: Lc,
    useImperativeHandle: Zm,
    useInsertionEffect: Ym,
    useLayoutEffect: qm,
    useMemo: ep,
    useReducer: Tl,
    useRef: Km,
    useState: function() {
        return Tl(Wo)
    },
    useDebugValue: Ic,
    useDeferredValue: function(e) {
        var t = at();
        return tp(t, ve.memoizedState, e)
    },
    useTransition: function() {
        var e = Tl(Wo)[0]
          , t = at().memoizedState;
        return [e, t]
    },
    useMutableSource: Um,
    useSyncExternalStore: Fm,
    useId: np,
    unstable_isNewReconciler: !1
}
  , Py = {
    readContext: lt,
    useCallback: Jm,
    useContext: lt,
    useEffect: Lc,
    useImperativeHandle: Zm,
    useInsertionEffect: Ym,
    useLayoutEffect: qm,
    useMemo: ep,
    useReducer: Al,
    useRef: Km,
    useState: function() {
        return Al(Wo)
    },
    useDebugValue: Ic,
    useDeferredValue: function(e) {
        var t = at();
        return ve === null ? t.memoizedState = e : tp(t, ve.memoizedState, e)
    },
    useTransition: function() {
        var e = Al(Wo)[0]
          , t = at().memoizedState;
        return [e, t]
    },
    useMutableSource: Um,
    useSyncExternalStore: Fm,
    useId: np,
    unstable_isNewReconciler: !1
};
function dt(e, t) {
    if (e && e.defaultProps) {
        t = ue({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Ea(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ue({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Fs = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? or(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le()
          , o = kn(e)
          , i = Ft(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = En(e, i, o),
        t !== null && (vt(t, e, o, r),
        Wi(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le()
          , o = kn(e)
          , i = Ft(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = En(e, i, o),
        t !== null && (vt(t, e, o, r),
        Wi(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Le()
          , r = kn(e)
          , o = Ft(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = En(e, o, r),
        t !== null && (vt(t, e, r, n),
        Wi(t, e, r))
    }
};
function dd(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !zo(n, r) || !zo(o, i) : !0
}
function sp(e, t, n) {
    var r = !1
      , o = Mn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = lt(i) : (o = Fe(t) ? qn : Oe.current,
    r = t.contextTypes,
    i = (r = r != null) ? Gr(e, o) : Mn),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Fs,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function fd(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Fs.enqueueReplaceState(t, t.state, null)
}
function Na(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Dc(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = lt(i) : (i = Fe(t) ? qn : Oe.current,
    o.context = Gr(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Ea(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Fs.enqueueReplaceState(o, o.state, null),
    vs(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Kr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += nv(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function _l(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ka(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Dy = typeof WeakMap == "function" ? WeakMap : Map;
function lp(e, t, n) {
    n = Ft(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ss || (Ss = !0,
        La = r),
        ka(e, t)
    }
    ,
    n
}
function ap(e, t, n) {
    n = Ft(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            ka(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ka(e, t),
        typeof r != "function" && (Nn === null ? Nn = new Set([this]) : Nn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function md(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Dy;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = $y.bind(null, e, t, n),
    t.then(e, e))
}
function pd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function hd(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ft(-1, 1),
    t.tag = 2,
    En(n, t, 1))),
    n.lanes |= 1),
    e)
}
var My = Yt.ReactCurrentOwner
  , Ve = !1;
function Ae(e, t, n, r) {
    t.child = e === null ? Im(t, null, n, r) : Wr(t, e.child, n, r)
}
function gd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Mr(t, o),
    r = Ac(e, t, n, r, i, o),
    n = _c(),
    e !== null && !Ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Wt(e, t, o)) : (se && n && Sc(t),
    t.flags |= 1,
    Ae(e, t, r, o),
    t.child)
}
function vd(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Hc(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        cp(e, t, i, r, o)) : (e = Zi(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : zo,
        n(s, r) && e.ref === t.ref)
            return Wt(e, t, o)
    }
    return t.flags |= 1,
    e = jn(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function cp(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (zo(i, r) && e.ref === t.ref)
            if (Ve = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Ve = !0);
            else
                return t.lanes = e.lanes,
                Wt(e, t, o)
    }
    return ja(e, t, n, r, o)
}
function up(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            te(Nr, Ke),
            Ke |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                te(Nr, Ke),
                Ke |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            te(Nr, Ke),
            Ke |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        te(Nr, Ke),
        Ke |= r;
    return Ae(e, t, o, n),
    t.child
}
function dp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function ja(e, t, n, r, o) {
    var i = Fe(n) ? qn : Oe.current;
    return i = Gr(t, i),
    Mr(t, o),
    n = Ac(e, t, n, r, i, o),
    r = _c(),
    e !== null && !Ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Wt(e, t, o)) : (se && r && Sc(t),
    t.flags |= 1,
    Ae(e, t, n, o),
    t.child)
}
function yd(e, t, n, r, o) {
    if (Fe(n)) {
        var i = !0;
        fs(t)
    } else
        i = !1;
    if (Mr(t, o),
    t.stateNode === null)
        Yi(e, t),
        sp(t, n, r),
        Na(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var c = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = lt(u) : (u = Fe(n) ? qn : Oe.current,
        u = Gr(t, u));
        var f = n.getDerivedStateFromProps
          , m = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || c !== u) && fd(t, s, r, u),
        cn = !1;
        var d = t.memoizedState;
        s.state = d,
        vs(t, r, s, o),
        c = t.memoizedState,
        l !== r || d !== c || Ue.current || cn ? (typeof f == "function" && (Ea(t, n, f, r),
        c = t.memoizedState),
        (l = cn || dd(t, n, l, r, d, c, u)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = c),
        s.props = r,
        s.state = c,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        zm(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : dt(t.type, l),
        s.props = u,
        m = t.pendingProps,
        d = s.context,
        c = n.contextType,
        typeof c == "object" && c !== null ? c = lt(c) : (c = Fe(n) ? qn : Oe.current,
        c = Gr(t, c));
        var y = n.getDerivedStateFromProps;
        (f = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== m || d !== c) && fd(t, s, r, c),
        cn = !1,
        d = t.memoizedState,
        s.state = d,
        vs(t, r, s, o);
        var w = t.memoizedState;
        l !== m || d !== w || Ue.current || cn ? (typeof y == "function" && (Ea(t, n, y, r),
        w = t.memoizedState),
        (u = cn || dd(t, n, u, r, d, w, c) || !1) ? (f || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, c),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, c)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        s.props = r,
        s.state = w,
        s.context = c,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Pa(e, t, n, r, i, o)
}
function Pa(e, t, n, r, o, i) {
    dp(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && rd(t, n, !1),
        Wt(e, t, i);
    r = t.stateNode,
    My.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Wr(t, e.child, null, i),
    t.child = Wr(t, null, l, i)) : Ae(e, t, l, i),
    t.memoizedState = r.state,
    o && rd(t, n, !0),
    t.child
}
function fp(e) {
    var t = e.stateNode;
    t.pendingContext ? nd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nd(e, t.context, !1),
    Mc(e, t.containerInfo)
}
function xd(e, t, n, r, o) {
    return Hr(),
    Ec(o),
    t.flags |= 256,
    Ae(e, t, n, r),
    t.child
}
var Da = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ma(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function mp(e, t, n) {
    var r = t.pendingProps, o = ae.current, i = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    te(ae, o & 1),
    e === null)
        return Sa(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = Hs(s, r, 0, null),
        e = Yn(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Ma(n),
        t.memoizedState = Da,
        e) : Bc(t, s));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return Ry(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        l = o.sibling;
        var c = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = c,
        t.deletions = null) : (r = jn(o, c),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? i = jn(l, i) : (i = Yn(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? Ma(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Da,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = jn(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Bc(e, t) {
    return t = Hs({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Oi(e, t, n, r) {
    return r !== null && Ec(r),
    Wr(t, e.child, null, n),
    e = Bc(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Ry(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = _l(Error(D(422))),
        Oi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = Hs({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = Yn(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Wr(t, e.child, null, s),
        t.child.memoizedState = Ma(s),
        t.memoizedState = Da,
        i);
    if (!(t.mode & 1))
        return Oi(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        i = Error(D(419)),
        r = _l(i, r, void 0),
        Oi(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    Ve || l) {
        if (r = be,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Ht(e, o),
            vt(r, e, o, -1))
        }
        return Gc(),
        r = _l(Error(D(421))),
        Oi(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Gy.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    qe = Cn(o.nextSibling),
    Xe = t,
    se = !0,
    ht = null,
    e !== null && (rt[ot++] = Vt,
    rt[ot++] = Ut,
    rt[ot++] = Xn,
    Vt = e.id,
    Ut = e.overflow,
    Xn = t),
    t = Bc(t, r.children),
    t.flags |= 4096,
    t)
}
function wd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ca(e.return, t, n)
}
function Ll(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function pp(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (Ae(e, t, r.children, n),
    r = ae.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && wd(e, n, t);
                else if (e.tag === 19)
                    wd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (te(ae, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && ys(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Ll(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && ys(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Ll(t, !0, n, null, i);
            break;
        case "together":
            Ll(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Yi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Wt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Jn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(D(153));
    if (t.child !== null) {
        for (e = t.child,
        n = jn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = jn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Oy(e, t, n) {
    switch (t.tag) {
    case 3:
        fp(t),
        Hr();
        break;
    case 5:
        Vm(t);
        break;
    case 1:
        Fe(t.type) && fs(t);
        break;
    case 4:
        Mc(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        te(hs, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (te(ae, ae.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? mp(e, t, n) : (te(ae, ae.current & 1),
            e = Wt(e, t, n),
            e !== null ? e.sibling : null);
        te(ae, ae.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return pp(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        te(ae, ae.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        up(e, t, n)
    }
    return Wt(e, t, n)
}
var hp, Ra, gp, vp;
hp = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ra = function() {}
;
gp = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        $n(Rt.current);
        var i = null;
        switch (n) {
        case "input":
            o = Jl(e, o),
            r = Jl(e, r),
            i = [];
            break;
        case "select":
            o = ue({}, o, {
                value: void 0
            }),
            r = ue({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = na(e, o),
            r = na(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = us)
        }
        oa(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Oo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var c = r[u];
            if (l = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && c !== l && (c != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || c && c.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in c)
                            c.hasOwnProperty(s) && l[s] !== c[s] && (n || (n = {}),
                            n[s] = c[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = c;
                else
                    u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
                    l = l ? l.__html : void 0,
                    c != null && l !== c && (i = i || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (i = i || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Oo.hasOwnProperty(u) ? (c != null && u === "onScroll" && oe("scroll", e),
                    i || l === c || (i = [])) : (i = i || []).push(u, c))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
vp = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function po(e, t) {
    if (!se)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function De(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Ty(e, t, n) {
    var r = t.pendingProps;
    switch (Cc(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return De(t),
        null;
    case 1:
        return Fe(t.type) && ds(),
        De(t),
        null;
    case 3:
        return r = t.stateNode,
        Qr(),
        ie(Ue),
        ie(Oe),
        Oc(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Mi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        ht !== null && (za(ht),
        ht = null))),
        Ra(e, t),
        De(t),
        null;
    case 5:
        Rc(t);
        var o = $n(Go.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            gp(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(D(166));
                return De(t),
                null
            }
            if (e = $n(Rt.current),
            Mi(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[Dt] = t,
                r[Fo] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < bo.length; o++)
                        oe(bo[o], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    Du(r, i),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    Ru(r, i),
                    oe("invalid", r)
                }
                oa(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var l = i[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Di(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Di(r.textContent, l, e),
                        o = ["children", "" + l]) : Oo.hasOwnProperty(s) && l != null && s === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    bi(r),
                    Mu(r, i, !0);
                    break;
                case "textarea":
                    bi(r),
                    Ou(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = us)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Hf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[Dt] = t,
                e[Fo] = r,
                hp(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = ia(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < bo.length; o++)
                            oe(bo[o], e);
                        o = r;
                        break;
                    case "source":
                        oe("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        o = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Du(e, r),
                        o = Jl(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = ue({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        Ru(e, r),
                        o = na(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    oa(n, o),
                    l = o;
                    for (i in l)
                        if (l.hasOwnProperty(i)) {
                            var c = l[i];
                            i === "style" ? Kf(e, c) : i === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
                            c != null && Wf(e, c)) : i === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && To(e, c) : typeof c == "number" && To(e, "" + c) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Oo.hasOwnProperty(i) ? c != null && i === "onScroll" && oe("scroll", e) : c != null && ac(e, i, c, s))
                        }
                    switch (n) {
                    case "input":
                        bi(e),
                        Mu(e, r, !1);
                        break;
                    case "textarea":
                        bi(e),
                        Ou(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Dn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? kr(e, !!r.multiple, i, !1) : r.defaultValue != null && kr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = us)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return De(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            vp(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(D(166));
            if (n = $n(Go.current),
            $n(Rt.current),
            Mi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Dt] = t,
                (i = r.nodeValue !== n) && (e = Xe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Di(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Di(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Dt] = t,
                t.stateNode = r
        }
        return De(t),
        null;
    case 13:
        if (ie(ae),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (se && qe !== null && t.mode & 1 && !(t.flags & 128))
                _m(),
                Hr(),
                t.flags |= 98560,
                i = !1;
            else if (i = Mi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(D(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(D(317));
                    i[Dt] = t
                } else
                    Hr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                De(t),
                i = !1
            } else
                ht !== null && (za(ht),
                ht = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ae.current & 1 ? xe === 0 && (xe = 3) : Gc())),
        t.updateQueue !== null && (t.flags |= 4),
        De(t),
        null);
    case 4:
        return Qr(),
        Ra(e, t),
        e === null && Vo(t.stateNode.containerInfo),
        De(t),
        null;
    case 10:
        return jc(t.type._context),
        De(t),
        null;
    case 17:
        return Fe(t.type) && ds(),
        De(t),
        null;
    case 19:
        if (ie(ae),
        i = t.memoizedState,
        i === null)
            return De(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                po(i, !1);
            else {
                if (xe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = ys(e),
                        s !== null) {
                            for (t.flags |= 128,
                            po(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return te(ae, ae.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && me() > Yr && (t.flags |= 128,
                r = !0,
                po(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ys(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    po(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !se)
                        return De(t),
                        null
                } else
                    2 * me() - i.renderingStartTime > Yr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    po(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = me(),
        t.sibling = null,
        n = ae.current,
        te(ae, r ? n & 1 | 2 : n & 1),
        t) : (De(t),
        null);
    case 22:
    case 23:
        return $c(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ke & 1073741824 && (De(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : De(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(D(156, t.tag))
}
function Ay(e, t) {
    switch (Cc(t),
    t.tag) {
    case 1:
        return Fe(t.type) && ds(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Qr(),
        ie(Ue),
        ie(Oe),
        Oc(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Rc(t),
        null;
    case 13:
        if (ie(ae),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(D(340));
            Hr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ie(ae),
        null;
    case 4:
        return Qr(),
        null;
    case 10:
        return jc(t.type._context),
        null;
    case 22:
    case 23:
        return $c(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ti = !1
  , Re = !1
  , _y = typeof WeakSet == "function" ? WeakSet : Set
  , A = null;
function Er(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                fe(e, t, r)
            }
        else
            n.current = null
}
function Oa(e, t, n) {
    try {
        n()
    } catch (r) {
        fe(e, t, r)
    }
}
var bd = !1;
function Ly(e, t) {
    if (ha = ls,
    e = Sm(),
    bc(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , c = -1
                      , u = 0
                      , f = 0
                      , m = e
                      , d = null;
                    t: for (; ; ) {
                        for (var y; m !== n || o !== 0 && m.nodeType !== 3 || (l = s + o),
                        m !== i || r !== 0 && m.nodeType !== 3 || (c = s + r),
                        m.nodeType === 3 && (s += m.nodeValue.length),
                        (y = m.firstChild) !== null; )
                            d = m,
                            m = y;
                        for (; ; ) {
                            if (m === e)
                                break t;
                            if (d === n && ++u === o && (l = s),
                            d === i && ++f === r && (c = s),
                            (y = m.nextSibling) !== null)
                                break;
                            m = d,
                            d = m.parentNode
                        }
                        m = y
                    }
                    n = l === -1 || c === -1 ? null : {
                        start: l,
                        end: c
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ga = {
        focusedElem: e,
        selectionRange: n
    },
    ls = !1,
    A = t; A !== null; )
        if (t = A,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            A = e;
        else
            for (; A !== null; ) {
                t = A;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var g = w.memoizedProps
                                  , b = w.memoizedState
                                  , h = t.stateNode
                                  , p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? g : dt(t.type, g), b);
                                h.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(D(163))
                        }
                } catch (S) {
                    fe(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    A = e;
                    break
                }
                A = t.return
            }
    return w = bd,
    bd = !1,
    w
}
function Po(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && Oa(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function $s(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Ta(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function yp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    yp(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Dt],
    delete t[Fo],
    delete t[xa],
    delete t[yy],
    delete t[xy])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function xp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Sd(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || xp(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Aa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = us));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Aa(e, t, n),
        e = e.sibling; e !== null; )
            Aa(e, t, n),
            e = e.sibling
}
function _a(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (_a(e, t, n),
        e = e.sibling; e !== null; )
            _a(e, t, n),
            e = e.sibling
}
var Ce = null
  , pt = !1;
function rn(e, t, n) {
    for (n = n.child; n !== null; )
        wp(e, t, n),
        n = n.sibling
}
function wp(e, t, n) {
    if (Mt && typeof Mt.onCommitFiberUnmount == "function")
        try {
            Mt.onCommitFiberUnmount(_s, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Re || Er(n, t);
    case 6:
        var r = Ce
          , o = pt;
        Ce = null,
        rn(e, t, n),
        Ce = r,
        pt = o,
        Ce !== null && (pt ? (e = Ce,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
        break;
    case 18:
        Ce !== null && (pt ? (e = Ce,
        n = n.stateNode,
        e.nodeType === 8 ? Dl(e.parentNode, n) : e.nodeType === 1 && Dl(e, n),
        Io(e)) : Dl(Ce, n.stateNode));
        break;
    case 4:
        r = Ce,
        o = pt,
        Ce = n.stateNode.containerInfo,
        pt = !0,
        rn(e, t, n),
        Ce = r,
        pt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Re && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && Oa(n, t, s),
                o = o.next
            } while (o !== r)
        }
        rn(e, t, n);
        break;
    case 1:
        if (!Re && (Er(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                fe(n, t, l)
            }
        rn(e, t, n);
        break;
    case 21:
        rn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Re = (r = Re) || n.memoizedState !== null,
        rn(e, t, n),
        Re = r) : rn(e, t, n);
        break;
    default:
        rn(e, t, n)
    }
}
function Cd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new _y),
        t.forEach(function(r) {
            var o = Hy.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function ut(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        Ce = l.stateNode,
                        pt = !1;
                        break e;
                    case 3:
                        Ce = l.stateNode.containerInfo,
                        pt = !0;
                        break e;
                    case 4:
                        Ce = l.stateNode.containerInfo,
                        pt = !0;
                        break e
                    }
                    l = l.return
                }
                if (Ce === null)
                    throw Error(D(160));
                wp(i, s, o),
                Ce = null,
                pt = !1;
                var c = o.alternate;
                c !== null && (c.return = null),
                o.return = null
            } catch (u) {
                fe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            bp(t, e),
            t = t.sibling
}
function bp(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ut(t, e),
        Et(e),
        r & 4) {
            try {
                Po(3, e, e.return),
                $s(3, e)
            } catch (g) {
                fe(e, e.return, g)
            }
            try {
                Po(5, e, e.return)
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        break;
    case 1:
        ut(t, e),
        Et(e),
        r & 512 && n !== null && Er(n, n.return);
        break;
    case 5:
        if (ut(t, e),
        Et(e),
        r & 512 && n !== null && Er(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                To(o, "")
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , l = e.type
              , c = e.updateQueue;
            if (e.updateQueue = null,
            c !== null)
                try {
                    l === "input" && i.type === "radio" && i.name != null && $f(o, i),
                    ia(l, s);
                    var u = ia(l, i);
                    for (s = 0; s < c.length; s += 2) {
                        var f = c[s]
                          , m = c[s + 1];
                        f === "style" ? Kf(o, m) : f === "dangerouslySetInnerHTML" ? Wf(o, m) : f === "children" ? To(o, m) : ac(o, f, m, u)
                    }
                    switch (l) {
                    case "input":
                        ea(o, i);
                        break;
                    case "textarea":
                        Gf(o, i);
                        break;
                    case "select":
                        var d = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var y = i.value;
                        y != null ? kr(o, !!i.multiple, y, !1) : d !== !!i.multiple && (i.defaultValue != null ? kr(o, !!i.multiple, i.defaultValue, !0) : kr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Fo] = i
                } catch (g) {
                    fe(e, e.return, g)
                }
        }
        break;
    case 6:
        if (ut(t, e),
        Et(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(D(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        break;
    case 3:
        if (ut(t, e),
        Et(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Io(t.containerInfo)
            } catch (g) {
                fe(e, e.return, g)
            }
        break;
    case 4:
        ut(t, e),
        Et(e);
        break;
    case 13:
        ut(t, e),
        Et(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (Uc = me())),
        r & 4 && Cd(e);
        break;
    case 22:
        if (f = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Re = (u = Re) || f,
        ut(t, e),
        Re = u) : ut(t, e),
        Et(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !f && e.mode & 1)
                for (A = e,
                f = e.child; f !== null; ) {
                    for (m = A = f; A !== null; ) {
                        switch (d = A,
                        y = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Po(4, d, d.return);
                            break;
                        case 1:
                            Er(d, d.return);
                            var w = d.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (g) {
                                    fe(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            Er(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                Nd(m);
                                continue
                            }
                        }
                        y !== null ? (y.return = d,
                        A = y) : Nd(m)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            m = e; ; ) {
                if (m.tag === 5) {
                    if (f === null) {
                        f = m;
                        try {
                            o = m.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = m.stateNode,
                            c = m.memoizedProps.style,
                            s = c != null && c.hasOwnProperty("display") ? c.display : null,
                            l.style.display = Qf("display", s))
                        } catch (g) {
                            fe(e, e.return, g)
                        }
                    }
                } else if (m.tag === 6) {
                    if (f === null)
                        try {
                            m.stateNode.nodeValue = u ? "" : m.memoizedProps
                        } catch (g) {
                            fe(e, e.return, g)
                        }
                } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                    m.child.return = m,
                    m = m.child;
                    continue
                }
                if (m === e)
                    break e;
                for (; m.sibling === null; ) {
                    if (m.return === null || m.return === e)
                        break e;
                    f === m && (f = null),
                    m = m.return
                }
                f === m && (f = null),
                m.sibling.return = m.return,
                m = m.sibling
            }
        }
        break;
    case 19:
        ut(t, e),
        Et(e),
        r & 4 && Cd(e);
        break;
    case 21:
        break;
    default:
        ut(t, e),
        Et(e)
    }
}
function Et(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (xp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(D(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (To(o, ""),
                r.flags &= -33);
                var i = Sd(e);
                _a(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = Sd(e);
                Aa(e, l, s);
                break;
            default:
                throw Error(D(161))
            }
        } catch (c) {
            fe(e, e.return, c)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Iy(e, t, n) {
    A = e,
    Sp(e)
}
function Sp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; A !== null; ) {
        var o = A
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Ti;
            if (!s) {
                var l = o.alternate
                  , c = l !== null && l.memoizedState !== null || Re;
                l = Ti;
                var u = Re;
                if (Ti = s,
                (Re = c) && !u)
                    for (A = o; A !== null; )
                        s = A,
                        c = s.child,
                        s.tag === 22 && s.memoizedState !== null ? kd(o) : c !== null ? (c.return = s,
                        A = c) : kd(o);
                for (; i !== null; )
                    A = i,
                    Sp(i),
                    i = i.sibling;
                A = o,
                Ti = l,
                Re = u
            }
            Ed(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            A = i) : Ed(e)
    }
}
function Ed(e) {
    for (; A !== null; ) {
        var t = A;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Re || $s(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Re)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : dt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && ad(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            ad(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var c = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                c.autoFocus && n.focus();
                                break;
                            case "img":
                                c.src && (n.src = c.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var m = f.dehydrated;
                                    m !== null && Io(m)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(D(163))
                    }
                Re || t.flags & 512 && Ta(t)
            } catch (d) {
                fe(t, t.return, d)
            }
        }
        if (t === e) {
            A = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            A = n;
            break
        }
        A = t.return
    }
}
function Nd(e) {
    for (; A !== null; ) {
        var t = A;
        if (t === e) {
            A = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            A = n;
            break
        }
        A = t.return
    }
}
function kd(e) {
    for (; A !== null; ) {
        var t = A;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    $s(4, t)
                } catch (c) {
                    fe(t, n, c)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (c) {
                        fe(t, o, c)
                    }
                }
                var i = t.return;
                try {
                    Ta(t)
                } catch (c) {
                    fe(t, i, c)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    Ta(t)
                } catch (c) {
                    fe(t, s, c)
                }
            }
        } catch (c) {
            fe(t, t.return, c)
        }
        if (t === e) {
            A = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            A = l;
            break
        }
        A = t.return
    }
}
var By = Math.ceil
  , bs = Yt.ReactCurrentDispatcher
  , zc = Yt.ReactCurrentOwner
  , st = Yt.ReactCurrentBatchConfig
  , q = 0
  , be = null
  , pe = null
  , Ne = 0
  , Ke = 0
  , Nr = Ln(0)
  , xe = 0
  , Ko = null
  , Jn = 0
  , Gs = 0
  , Vc = 0
  , Do = null
  , ze = null
  , Uc = 0
  , Yr = 1 / 0
  , Bt = null
  , Ss = !1
  , La = null
  , Nn = null
  , Ai = !1
  , yn = null
  , Cs = 0
  , Mo = 0
  , Ia = null
  , qi = -1
  , Xi = 0;
function Le() {
    return q & 6 ? me() : qi !== -1 ? qi : qi = me()
}
function kn(e) {
    return e.mode & 1 ? q & 2 && Ne !== 0 ? Ne & -Ne : by.transition !== null ? (Xi === 0 && (Xi = sm()),
    Xi) : (e = J,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : mm(e.type)),
    e) : 1
}
function vt(e, t, n, r) {
    if (50 < Mo)
        throw Mo = 0,
        Ia = null,
        Error(D(185));
    si(e, n, r),
    (!(q & 2) || e !== be) && (e === be && (!(q & 2) && (Gs |= n),
    xe === 4 && dn(e, Ne)),
    $e(e, r),
    n === 1 && q === 0 && !(t.mode & 1) && (Yr = me() + 500,
    Vs && In()))
}
function $e(e, t) {
    var n = e.callbackNode;
    bv(e, t);
    var r = ss(e, e === be ? Ne : 0);
    if (r === 0)
        n !== null && _u(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && _u(n),
        t === 1)
            e.tag === 0 ? wy(jd.bind(null, e)) : Om(jd.bind(null, e)),
            gy(function() {
                !(q & 6) && In()
            }),
            n = null;
        else {
            switch (lm(r)) {
            case 1:
                n = mc;
                break;
            case 4:
                n = om;
                break;
            case 16:
                n = is;
                break;
            case 536870912:
                n = im;
                break;
            default:
                n = is
            }
            n = Mp(n, Cp.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Cp(e, t) {
    if (qi = -1,
    Xi = 0,
    q & 6)
        throw Error(D(327));
    var n = e.callbackNode;
    if (Rr() && e.callbackNode !== n)
        return null;
    var r = ss(e, e === be ? Ne : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Es(e, r);
    else {
        t = r;
        var o = q;
        q |= 2;
        var i = Np();
        (be !== e || Ne !== t) && (Bt = null,
        Yr = me() + 500,
        Kn(e, t));
        do
            try {
                Uy();
                break
            } catch (l) {
                Ep(e, l)
            }
        while (!0);
        kc(),
        bs.current = i,
        q = o,
        pe !== null ? t = 0 : (be = null,
        Ne = 0,
        t = xe)
    }
    if (t !== 0) {
        if (t === 2 && (o = ua(e),
        o !== 0 && (r = o,
        t = Ba(e, o))),
        t === 1)
            throw n = Ko,
            Kn(e, 0),
            dn(e, r),
            $e(e, me()),
            n;
        if (t === 6)
            dn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !zy(o) && (t = Es(e, r),
            t === 2 && (i = ua(e),
            i !== 0 && (r = i,
            t = Ba(e, i))),
            t === 1))
                throw n = Ko,
                Kn(e, 0),
                dn(e, r),
                $e(e, me()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(D(345));
            case 2:
                Vn(e, ze, Bt);
                break;
            case 3:
                if (dn(e, r),
                (r & 130023424) === r && (t = Uc + 500 - me(),
                10 < t)) {
                    if (ss(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Le(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = ya(Vn.bind(null, e, ze, Bt), t);
                    break
                }
                Vn(e, ze, Bt);
                break;
            case 4:
                if (dn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - gt(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = me() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * By(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = ya(Vn.bind(null, e, ze, Bt), r);
                    break
                }
                Vn(e, ze, Bt);
                break;
            case 5:
                Vn(e, ze, Bt);
                break;
            default:
                throw Error(D(329))
            }
        }
    }
    return $e(e, me()),
    e.callbackNode === n ? Cp.bind(null, e) : null
}
function Ba(e, t) {
    var n = Do;
    return e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256),
    e = Es(e, t),
    e !== 2 && (t = ze,
    ze = n,
    t !== null && za(t)),
    e
}
function za(e) {
    ze === null ? ze = e : ze.push.apply(ze, e)
}
function zy(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!yt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function dn(e, t) {
    for (t &= ~Vc,
    t &= ~Gs,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - gt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function jd(e) {
    if (q & 6)
        throw Error(D(327));
    Rr();
    var t = ss(e, 0);
    if (!(t & 1))
        return $e(e, me()),
        null;
    var n = Es(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ua(e);
        r !== 0 && (t = r,
        n = Ba(e, r))
    }
    if (n === 1)
        throw n = Ko,
        Kn(e, 0),
        dn(e, t),
        $e(e, me()),
        n;
    if (n === 6)
        throw Error(D(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Vn(e, ze, Bt),
    $e(e, me()),
    null
}
function Fc(e, t) {
    var n = q;
    q |= 1;
    try {
        return e(t)
    } finally {
        q = n,
        q === 0 && (Yr = me() + 500,
        Vs && In())
    }
}
function er(e) {
    yn !== null && yn.tag === 0 && !(q & 6) && Rr();
    var t = q;
    q |= 1;
    var n = st.transition
      , r = J;
    try {
        if (st.transition = null,
        J = 1,
        e)
            return e()
    } finally {
        J = r,
        st.transition = n,
        q = t,
        !(q & 6) && In()
    }
}
function $c() {
    Ke = Nr.current,
    ie(Nr)
}
function Kn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    hy(n)),
    pe !== null)
        for (n = pe.return; n !== null; ) {
            var r = n;
            switch (Cc(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ds();
                break;
            case 3:
                Qr(),
                ie(Ue),
                ie(Oe),
                Oc();
                break;
            case 5:
                Rc(r);
                break;
            case 4:
                Qr();
                break;
            case 13:
                ie(ae);
                break;
            case 19:
                ie(ae);
                break;
            case 10:
                jc(r.type._context);
                break;
            case 22:
            case 23:
                $c()
            }
            n = n.return
        }
    if (be = e,
    pe = e = jn(e.current, null),
    Ne = Ke = t,
    xe = 0,
    Ko = null,
    Vc = Gs = Jn = 0,
    ze = Do = null,
    Fn !== null) {
        for (t = 0; t < Fn.length; t++)
            if (n = Fn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        Fn = null
    }
    return e
}
function Ep(e, t) {
    do {
        var n = pe;
        try {
            if (kc(),
            Qi.current = ws,
            xs) {
                for (var r = ce.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                xs = !1
            }
            if (Zn = 0,
            we = ve = ce = null,
            jo = !1,
            Ho = 0,
            zc.current = null,
            n === null || n.return === null) {
                xe = 1,
                Ko = t,
                pe = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , l = n
                  , c = t;
                if (t = Ne,
                l.flags |= 32768,
                c !== null && typeof c == "object" && typeof c.then == "function") {
                    var u = c
                      , f = l
                      , m = f.tag;
                    if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var d = f.alternate;
                        d ? (f.updateQueue = d.updateQueue,
                        f.memoizedState = d.memoizedState,
                        f.lanes = d.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var y = pd(s);
                    if (y !== null) {
                        y.flags &= -257,
                        hd(y, s, l, i, t),
                        y.mode & 1 && md(i, u, t),
                        t = y,
                        c = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var g = new Set;
                            g.add(c),
                            t.updateQueue = g
                        } else
                            w.add(c);
                        break e
                    } else {
                        if (!(t & 1)) {
                            md(i, u, t),
                            Gc();
                            break e
                        }
                        c = Error(D(426))
                    }
                } else if (se && l.mode & 1) {
                    var b = pd(s);
                    if (b !== null) {
                        !(b.flags & 65536) && (b.flags |= 256),
                        hd(b, s, l, i, t),
                        Ec(Kr(c, l));
                        break e
                    }
                }
                i = c = Kr(c, l),
                xe !== 4 && (xe = 2),
                Do === null ? Do = [i] : Do.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var h = lp(i, c, t);
                        ld(i, h);
                        break e;
                    case 1:
                        l = c;
                        var p = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Nn === null || !Nn.has(v)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var S = ap(i, l, t);
                            ld(i, S);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            jp(n)
        } catch (C) {
            t = C,
            pe === n && n !== null && (pe = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Np() {
    var e = bs.current;
    return bs.current = ws,
    e === null ? ws : e
}
function Gc() {
    (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    be === null || !(Jn & 268435455) && !(Gs & 268435455) || dn(be, Ne)
}
function Es(e, t) {
    var n = q;
    q |= 2;
    var r = Np();
    (be !== e || Ne !== t) && (Bt = null,
    Kn(e, t));
    do
        try {
            Vy();
            break
        } catch (o) {
            Ep(e, o)
        }
    while (!0);
    if (kc(),
    q = n,
    bs.current = r,
    pe !== null)
        throw Error(D(261));
    return be = null,
    Ne = 0,
    xe
}
function Vy() {
    for (; pe !== null; )
        kp(pe)
}
function Uy() {
    for (; pe !== null && !fv(); )
        kp(pe)
}
function kp(e) {
    var t = Dp(e.alternate, e, Ke);
    e.memoizedProps = e.pendingProps,
    t === null ? jp(e) : pe = t,
    zc.current = null
}
function jp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Ay(n, t),
            n !== null) {
                n.flags &= 32767,
                pe = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                xe = 6,
                pe = null;
                return
            }
        } else if (n = Ty(n, t, Ke),
        n !== null) {
            pe = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            pe = t;
            return
        }
        pe = t = e
    } while (t !== null);
    xe === 0 && (xe = 5)
}
function Vn(e, t, n) {
    var r = J
      , o = st.transition;
    try {
        st.transition = null,
        J = 1,
        Fy(e, t, n, r)
    } finally {
        st.transition = o,
        J = r
    }
    return null
}
function Fy(e, t, n, r) {
    do
        Rr();
    while (yn !== null);
    if (q & 6)
        throw Error(D(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(D(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Sv(e, i),
    e === be && (pe = be = null,
    Ne = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ai || (Ai = !0,
    Mp(is, function() {
        return Rr(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = st.transition,
        st.transition = null;
        var s = J;
        J = 1;
        var l = q;
        q |= 4,
        zc.current = null,
        Ly(e, n),
        bp(n, e),
        ay(ga),
        ls = !!ha,
        ga = ha = null,
        e.current = n,
        Iy(n),
        mv(),
        q = l,
        J = s,
        st.transition = i
    } else
        e.current = n;
    if (Ai && (Ai = !1,
    yn = e,
    Cs = o),
    i = e.pendingLanes,
    i === 0 && (Nn = null),
    gv(n.stateNode),
    $e(e, me()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (Ss)
        throw Ss = !1,
        e = La,
        La = null,
        e;
    return Cs & 1 && e.tag !== 0 && Rr(),
    i = e.pendingLanes,
    i & 1 ? e === Ia ? Mo++ : (Mo = 0,
    Ia = e) : Mo = 0,
    In(),
    null
}
function Rr() {
    if (yn !== null) {
        var e = lm(Cs)
          , t = st.transition
          , n = J;
        try {
            if (st.transition = null,
            J = 16 > e ? 16 : e,
            yn === null)
                var r = !1;
            else {
                if (e = yn,
                yn = null,
                Cs = 0,
                q & 6)
                    throw Error(D(331));
                var o = q;
                for (q |= 4,
                A = e.current; A !== null; ) {
                    var i = A
                      , s = i.child;
                    if (A.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var c = 0; c < l.length; c++) {
                                var u = l[c];
                                for (A = u; A !== null; ) {
                                    var f = A;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Po(8, f, i)
                                    }
                                    var m = f.child;
                                    if (m !== null)
                                        m.return = f,
                                        A = m;
                                    else
                                        for (; A !== null; ) {
                                            f = A;
                                            var d = f.sibling
                                              , y = f.return;
                                            if (yp(f),
                                            f === u) {
                                                A = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = y,
                                                A = d;
                                                break
                                            }
                                            A = y
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var g = w.child;
                                if (g !== null) {
                                    w.child = null;
                                    do {
                                        var b = g.sibling;
                                        g.sibling = null,
                                        g = b
                                    } while (g !== null)
                                }
                            }
                            A = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        A = s;
                    else
                        e: for (; A !== null; ) {
                            if (i = A,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Po(9, i, i.return)
                                }
                            var h = i.sibling;
                            if (h !== null) {
                                h.return = i.return,
                                A = h;
                                break e
                            }
                            A = i.return
                        }
                }
                var p = e.current;
                for (A = p; A !== null; ) {
                    s = A;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        v.return = s,
                        A = v;
                    else
                        e: for (s = p; A !== null; ) {
                            if (l = A,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        $s(9, l)
                                    }
                                } catch (C) {
                                    fe(l, l.return, C)
                                }
                            if (l === s) {
                                A = null;
                                break e
                            }
                            var S = l.sibling;
                            if (S !== null) {
                                S.return = l.return,
                                A = S;
                                break e
                            }
                            A = l.return
                        }
                }
                if (q = o,
                In(),
                Mt && typeof Mt.onPostCommitFiberRoot == "function")
                    try {
                        Mt.onPostCommitFiberRoot(_s, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            J = n,
            st.transition = t
        }
    }
    return !1
}
function Pd(e, t, n) {
    t = Kr(n, t),
    t = lp(e, t, 1),
    e = En(e, t, 1),
    t = Le(),
    e !== null && (si(e, 1, t),
    $e(e, t))
}
function fe(e, t, n) {
    if (e.tag === 3)
        Pd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Pd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Nn === null || !Nn.has(r))) {
                    e = Kr(n, e),
                    e = ap(t, e, 1),
                    t = En(t, e, 1),
                    e = Le(),
                    t !== null && (si(t, 1, e),
                    $e(t, e));
                    break
                }
            }
            t = t.return
        }
}
function $y(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Le(),
    e.pingedLanes |= e.suspendedLanes & n,
    be === e && (Ne & n) === n && (xe === 4 || xe === 3 && (Ne & 130023424) === Ne && 500 > me() - Uc ? Kn(e, 0) : Vc |= n),
    $e(e, t)
}
function Pp(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ei,
    Ei <<= 1,
    !(Ei & 130023424) && (Ei = 4194304)) : t = 1);
    var n = Le();
    e = Ht(e, t),
    e !== null && (si(e, t, n),
    $e(e, n))
}
function Gy(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Pp(e, n)
}
function Hy(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(D(314))
    }
    r !== null && r.delete(t),
    Pp(e, n)
}
var Dp;
Dp = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ue.current)
            Ve = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ve = !1,
                Oy(e, t, n);
            Ve = !!(e.flags & 131072)
        }
    else
        Ve = !1,
        se && t.flags & 1048576 && Tm(t, ps, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Yi(e, t),
        e = t.pendingProps;
        var o = Gr(t, Oe.current);
        Mr(t, n),
        o = Ac(null, t, r, e, o, n);
        var i = _c();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Fe(r) ? (i = !0,
        fs(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Dc(t),
        o.updater = Fs,
        t.stateNode = o,
        o._reactInternals = t,
        Na(t, r, e, n),
        t = Pa(null, t, r, !0, i, n)) : (t.tag = 0,
        se && i && Sc(t),
        Ae(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Yi(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = Qy(r),
            e = dt(r, e),
            o) {
            case 0:
                t = ja(null, t, r, e, n);
                break e;
            case 1:
                t = yd(null, t, r, e, n);
                break e;
            case 11:
                t = gd(null, t, r, e, n);
                break e;
            case 14:
                t = vd(null, t, r, dt(r.type, e), n);
                break e
            }
            throw Error(D(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        ja(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        yd(e, t, r, o, n);
    case 3:
        e: {
            if (fp(t),
            e === null)
                throw Error(D(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            zm(e, t),
            vs(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = Kr(Error(D(423)), t),
                    t = xd(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Kr(Error(D(424)), t),
                    t = xd(e, t, r, n, o);
                    break e
                } else
                    for (qe = Cn(t.stateNode.containerInfo.firstChild),
                    Xe = t,
                    se = !0,
                    ht = null,
                    n = Im(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Hr(),
                r === o) {
                    t = Wt(e, t, n);
                    break e
                }
                Ae(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Vm(t),
        e === null && Sa(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        va(r, o) ? s = null : i !== null && va(r, i) && (t.flags |= 32),
        dp(e, t),
        Ae(e, t, s, n),
        t.child;
    case 6:
        return e === null && Sa(t),
        null;
    case 13:
        return mp(e, t, n);
    case 4:
        return Mc(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Wr(t, null, r, n) : Ae(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        gd(e, t, r, o, n);
    case 7:
        return Ae(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ae(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ae(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            te(hs, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (yt(i.value, s)) {
                    if (i.children === o.children && !Ue.current) {
                        t = Wt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var l = i.dependencies;
                        if (l !== null) {
                            s = i.child;
                            for (var c = l.firstContext; c !== null; ) {
                                if (c.context === r) {
                                    if (i.tag === 1) {
                                        c = Ft(-1, n & -n),
                                        c.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var f = u.pending;
                                            f === null ? c.next = c : (c.next = f.next,
                                            f.next = c),
                                            u.pending = c
                                        }
                                    }
                                    i.lanes |= n,
                                    c = i.alternate,
                                    c !== null && (c.lanes |= n),
                                    Ca(i.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                c = c.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(D(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            Ca(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            Ae(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Mr(t, n),
        o = lt(o),
        r = r(o),
        t.flags |= 1,
        Ae(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = dt(r, t.pendingProps),
        o = dt(r.type, o),
        vd(e, t, r, o, n);
    case 15:
        return cp(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        Yi(e, t),
        t.tag = 1,
        Fe(r) ? (e = !0,
        fs(t)) : e = !1,
        Mr(t, n),
        sp(t, r, o),
        Na(t, r, o, n),
        Pa(null, t, r, !0, e, n);
    case 19:
        return pp(e, t, n);
    case 22:
        return up(e, t, n)
    }
    throw Error(D(156, t.tag))
}
;
function Mp(e, t) {
    return rm(e, t)
}
function Wy(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function it(e, t, n, r) {
    return new Wy(e,t,n,r)
}
function Hc(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Qy(e) {
    if (typeof e == "function")
        return Hc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === uc)
            return 11;
        if (e === dc)
            return 14
    }
    return 2
}
function jn(e, t) {
    var n = e.alternate;
    return n === null ? (n = it(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Zi(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        Hc(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case hr:
            return Yn(n.children, o, i, t);
        case cc:
            s = 8,
            o |= 8;
            break;
        case Yl:
            return e = it(12, n, t, o | 2),
            e.elementType = Yl,
            e.lanes = i,
            e;
        case ql:
            return e = it(13, n, t, o),
            e.elementType = ql,
            e.lanes = i,
            e;
        case Xl:
            return e = it(19, n, t, o),
            e.elementType = Xl,
            e.lanes = i,
            e;
        case Vf:
            return Hs(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Bf:
                    s = 10;
                    break e;
                case zf:
                    s = 9;
                    break e;
                case uc:
                    s = 11;
                    break e;
                case dc:
                    s = 14;
                    break e;
                case an:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(D(130, e == null ? e : typeof e, ""))
        }
    return t = it(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Yn(e, t, n, r) {
    return e = it(7, e, r, t),
    e.lanes = n,
    e
}
function Hs(e, t, n, r) {
    return e = it(22, e, r, t),
    e.elementType = Vf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Il(e, t, n) {
    return e = it(6, e, null, t),
    e.lanes = n,
    e
}
function Bl(e, t, n) {
    return t = it(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Ky(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = yl(0),
    this.expirationTimes = yl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = yl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Wc(e, t, n, r, o, i, s, l, c) {
    return e = new Ky(e,t,n,l,c),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = it(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Dc(i),
    e
}
function Yy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: pr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Rp(e) {
    if (!e)
        return Mn;
    e = e._reactInternals;
    e: {
        if (or(e) !== e || e.tag !== 1)
            throw Error(D(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Fe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(D(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Fe(n))
            return Rm(e, n, t)
    }
    return t
}
function Op(e, t, n, r, o, i, s, l, c) {
    return e = Wc(n, r, !0, e, o, i, s, l, c),
    e.context = Rp(null),
    n = e.current,
    r = Le(),
    o = kn(n),
    i = Ft(r, o),
    i.callback = t ?? null,
    En(n, i, o),
    e.current.lanes = o,
    si(e, o, r),
    $e(e, r),
    e
}
function Ws(e, t, n, r) {
    var o = t.current
      , i = Le()
      , s = kn(o);
    return n = Rp(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Ft(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = En(o, t, s),
    e !== null && (vt(e, o, s, i),
    Wi(e, o, s)),
    s
}
function Ns(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Dd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Qc(e, t) {
    Dd(e, t),
    (e = e.alternate) && Dd(e, t)
}
function qy() {
    return null
}
var Tp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Kc(e) {
    this._internalRoot = e
}
Qs.prototype.render = Kc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(D(409));
    Ws(e, t, null, null)
}
;
Qs.prototype.unmount = Kc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        er(function() {
            Ws(null, e, null, null)
        }),
        t[Gt] = null
    }
}
;
function Qs(e) {
    this._internalRoot = e
}
Qs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = um();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++)
            ;
        un.splice(n, 0, e),
        n === 0 && fm(e)
    }
}
;
function Yc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ks(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Md() {}
function Xy(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Ns(s);
                i.call(u)
            }
        }
        var s = Op(t, r, e, 0, null, !1, !1, "", Md);
        return e._reactRootContainer = s,
        e[Gt] = s.current,
        Vo(e.nodeType === 8 ? e.parentNode : e),
        er(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = Ns(c);
            l.call(u)
        }
    }
    var c = Wc(e, 0, !1, null, null, !1, !1, "", Md);
    return e._reactRootContainer = c,
    e[Gt] = c.current,
    Vo(e.nodeType === 8 ? e.parentNode : e),
    er(function() {
        Ws(t, c, n, r)
    }),
    c
}
function Ys(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var c = Ns(s);
                l.call(c)
            }
        }
        Ws(t, s, e, o)
    } else
        s = Xy(n, t, e, o, r);
    return Ns(s)
}
am = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = wo(t.pendingLanes);
            n !== 0 && (pc(t, n | 1),
            $e(t, me()),
            !(q & 6) && (Yr = me() + 500,
            In()))
        }
        break;
    case 13:
        er(function() {
            var r = Ht(e, 1);
            if (r !== null) {
                var o = Le();
                vt(r, e, 1, o)
            }
        }),
        Qc(e, 1)
    }
}
;
hc = function(e) {
    if (e.tag === 13) {
        var t = Ht(e, 134217728);
        if (t !== null) {
            var n = Le();
            vt(t, e, 134217728, n)
        }
        Qc(e, 134217728)
    }
}
;
cm = function(e) {
    if (e.tag === 13) {
        var t = kn(e)
          , n = Ht(e, t);
        if (n !== null) {
            var r = Le();
            vt(n, e, t, r)
        }
        Qc(e, t)
    }
}
;
um = function() {
    return J
}
;
dm = function(e, t) {
    var n = J;
    try {
        return J = e,
        t()
    } finally {
        J = n
    }
}
;
la = function(e, t, n) {
    switch (t) {
    case "input":
        if (ea(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = zs(r);
                    if (!o)
                        throw Error(D(90));
                    Ff(r),
                    ea(r, o)
                }
            }
        }
        break;
    case "textarea":
        Gf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && kr(e, !!n.multiple, t, !1)
    }
}
;
Xf = Fc;
Zf = er;
var Zy = {
    usingClientEntryPoint: !1,
    Events: [ai, xr, zs, Yf, qf, Fc]
}
  , ho = {
    findFiberByHostInstance: Un,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Jy = {
    bundleType: ho.bundleType,
    version: ho.version,
    rendererPackageName: ho.rendererPackageName,
    rendererConfig: ho.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = tm(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ho.findFiberByHostInstance || qy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_i.isDisabled && _i.supportsFiber)
        try {
            _s = _i.inject(Jy),
            Mt = _i
        } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zy;
et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Yc(t))
        throw Error(D(200));
    return Yy(e, t, null, n)
}
;
et.createRoot = function(e, t) {
    if (!Yc(e))
        throw Error(D(299));
    var n = !1
      , r = ""
      , o = Tp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Wc(e, 1, !1, null, null, n, !1, r, o),
    e[Gt] = t.current,
    Vo(e.nodeType === 8 ? e.parentNode : e),
    new Kc(t)
}
;
et.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","),
        Error(D(268, e)));
    return e = tm(t),
    e = e === null ? null : e.stateNode,
    e
}
;
et.flushSync = function(e) {
    return er(e)
}
;
et.hydrate = function(e, t, n) {
    if (!Ks(t))
        throw Error(D(200));
    return Ys(null, e, t, !0, n)
}
;
et.hydrateRoot = function(e, t, n) {
    if (!Yc(e))
        throw Error(D(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = Tp;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Op(t, null, e, 1, n ?? null, o, !1, i, s),
    e[Gt] = t.current,
    Vo(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Qs(t)
}
;
et.render = function(e, t, n) {
    if (!Ks(t))
        throw Error(D(200));
    return Ys(null, e, t, !1, n)
}
;
et.unmountComponentAtNode = function(e) {
    if (!Ks(e))
        throw Error(D(40));
    return e._reactRootContainer ? (er(function() {
        Ys(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Gt] = null
        })
    }),
    !0) : !1
}
;
et.unstable_batchedUpdates = Fc;
et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ks(n))
        throw Error(D(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(D(38));
    return Ys(e, t, n, !1, r)
}
;
et.version = "18.3.1-next-f1338f8080-20240426";
function Ap() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ap)
        } catch (e) {
            console.error(e)
        }
}
Ap(),
Af.exports = et;
var ui = Af.exports;
const _p = Sf(ui);
var Lp, Rd = ui;
Lp = Rd.createRoot,
Rd.hydrateRoot;
const e0 = 1
  , t0 = 1e6;
let zl = 0;
function n0() {
    return zl = (zl + 1) % Number.MAX_SAFE_INTEGER,
    zl.toString()
}
const Vl = new Map
  , Od = e => {
    if (Vl.has(e))
        return;
    const t = setTimeout( () => {
        Vl.delete(e),
        Ro({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , t0);
    Vl.set(e, t)
}
  , r0 = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, e0)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Od(n) : e.toasts.forEach(r => {
                Od(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Ji = [];
let es = {
    toasts: []
};
function Ro(e) {
    es = r0(es, e),
    Ji.forEach(t => {
        t(es)
    }
    )
}
function o0({...e}) {
    const t = n0()
      , n = o => Ro({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => Ro({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Ro({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function i0() {
    const [e,t] = x.useState(es);
    return x.useEffect( () => (Ji.push(t),
    () => {
        const n = Ji.indexOf(t);
        n > -1 && Ji.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: o0,
        dismiss: n => Ro({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function ye(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function s0(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function Ip(...e) {
    return t => e.forEach(n => s0(n, t))
}
function xt(...e) {
    return x.useCallback(Ip(...e), e)
}
function l0(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = x.createContext(s)
          , c = n.length;
        n = [...n, s];
        function u(m) {
            const {scope: d, children: y, ...w} = m
              , g = (d == null ? void 0 : d[e][c]) || l
              , b = x.useMemo( () => w, Object.values(w));
            return a.jsx(g.Provider, {
                value: b,
                children: y
            })
        }
        function f(m, d) {
            const y = (d == null ? void 0 : d[e][c]) || l
              , w = x.useContext(y);
            if (w)
                return w;
            if (s !== void 0)
                return s;
            throw new Error(`\`${m}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider",
        [u, f]
    }
    const o = () => {
        const i = n.map(s => x.createContext(s));
        return function(l) {
            const c = (l == null ? void 0 : l[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: c
                }
            }), [l, c])
        }
    }
    ;
    return o.scopeName = e,
    [r, a0(o, ...t)]
}
function a0(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: c, scopeName: u}) => {
                const m = c(i)[`__scope${u}`];
                return {
                    ...l,
                    ...m
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var Yo = x.forwardRef( (e, t) => {
    const {children: n, ...r} = e
      , o = x.Children.toArray(n)
      , i = o.find(c0);
    if (i) {
        const s = i.props.children
          , l = o.map(c => c === i ? x.Children.count(s) > 1 ? x.Children.only(null) : x.isValidElement(s) ? s.props.children : null : c);
        return a.jsx(Va, {
            ...r,
            ref: t,
            children: x.isValidElement(s) ? x.cloneElement(s, void 0, l) : null
        })
    }
    return a.jsx(Va, {
        ...r,
        ref: t,
        children: n
    })
}
);
Yo.displayName = "Slot";
var Va = x.forwardRef( (e, t) => {
    const {children: n, ...r} = e;
    if (x.isValidElement(n)) {
        const o = d0(n);
        return x.cloneElement(n, {
            ...u0(r, n.props),
            ref: t ? Ip(t, o) : o
        })
    }
    return x.Children.count(n) > 1 ? x.Children.only(null) : null
}
);
Va.displayName = "SlotClone";
var Bp = ({children: e}) => a.jsx(a.Fragment, {
    children: e
});
function c0(e) {
    return x.isValidElement(e) && e.type === Bp
}
function u0(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            i(...l),
            o(...l)
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function d0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function f0(e) {
    const t = e + "CollectionProvider"
      , [n,r] = l0(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = y => {
        const {scope: w, children: g} = y
          , b = R.useRef(null)
          , h = R.useRef(new Map).current;
        return a.jsx(o, {
            scope: w,
            itemMap: h,
            collectionRef: b,
            children: g
        })
    }
    ;
    s.displayName = t;
    const l = e + "CollectionSlot"
      , c = R.forwardRef( (y, w) => {
        const {scope: g, children: b} = y
          , h = i(l, g)
          , p = xt(w, h.collectionRef);
        return a.jsx(Yo, {
            ref: p,
            children: b
        })
    }
    );
    c.displayName = l;
    const u = e + "CollectionItemSlot"
      , f = "data-radix-collection-item"
      , m = R.forwardRef( (y, w) => {
        const {scope: g, children: b, ...h} = y
          , p = R.useRef(null)
          , v = xt(w, p)
          , S = i(u, g);
        return R.useEffect( () => (S.itemMap.set(p, {
            ref: p,
            ...h
        }),
        () => void S.itemMap.delete(p))),
        a.jsx(Yo, {
            [f]: "",
            ref: v,
            children: b
        })
    }
    );
    m.displayName = u;
    function d(y) {
        const w = i(e + "CollectionConsumer", y);
        return R.useCallback( () => {
            const b = w.collectionRef.current;
            if (!b)
                return [];
            const h = Array.from(b.querySelectorAll(`[${f}]`));
            return Array.from(w.itemMap.values()).sort( (S, C) => h.indexOf(S.ref.current) - h.indexOf(C.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: s,
        Slot: c,
        ItemSlot: m
    }, d, r]
}
function zp(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = x.createContext(s)
          , c = n.length;
        n = [...n, s];
        const u = m => {
            var h;
            const {scope: d, children: y, ...w} = m
              , g = ((h = d == null ? void 0 : d[e]) == null ? void 0 : h[c]) || l
              , b = x.useMemo( () => w, Object.values(w));
            return a.jsx(g.Provider, {
                value: b,
                children: y
            })
        }
        ;
        u.displayName = i + "Provider";
        function f(m, d) {
            var g;
            const y = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[c]) || l
              , w = x.useContext(y);
            if (w)
                return w;
            if (s !== void 0)
                return s;
            throw new Error(`\`${m}\` must be used within \`${i}\``)
        }
        return [u, f]
    }
    const o = () => {
        const i = n.map(s => x.createContext(s));
        return function(l) {
            const c = (l == null ? void 0 : l[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: c
                }
            }), [l, c])
        }
    }
    ;
    return o.scopeName = e,
    [r, m0(o, ...t)]
}
function m0(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: c, scopeName: u}) => {
                const m = c(i)[`__scope${u}`];
                return {
                    ...l,
                    ...m
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var p0 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , Ge = p0.reduce( (e, t) => {
    const n = x.forwardRef( (r, o) => {
        const {asChild: i, ...s} = r
          , l = i ? Yo : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        a.jsx(l, {
            ...s,
            ref: o
        })
    }
    );
    return n.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: n
    }
}
, {});
function Vp(e, t) {
    e && ui.flushSync( () => e.dispatchEvent(t))
}
function Ot(e) {
    const t = x.useRef(e);
    return x.useEffect( () => {
        t.current = e
    }
    ),
    x.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function h0(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ot(e);
    x.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var g0 = "DismissableLayer", Ua = "dismissableLayer.update", v0 = "dismissableLayer.pointerDownOutside", y0 = "dismissableLayer.focusOutside", Td, Up = x.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), qc = x.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...c} = e
      , u = x.useContext(Up)
      , [f,m] = x.useState(null)
      , d = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,y] = x.useState({})
      , w = xt(t, k => m(k))
      , g = Array.from(u.layers)
      , [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , h = g.indexOf(b)
      , p = f ? g.indexOf(f) : -1
      , v = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = p >= h
      , C = w0(k => {
        const P = k.target
          , L = [...u.branches].some(O => O.contains(P));
        !S || L || (o == null || o(k),
        s == null || s(k),
        k.defaultPrevented || l == null || l())
    }
    , d)
      , N = b0(k => {
        const P = k.target;
        [...u.branches].some(O => O.contains(P)) || (i == null || i(k),
        s == null || s(k),
        k.defaultPrevented || l == null || l())
    }
    , d);
    return h0(k => {
        p === u.layers.size - 1 && (r == null || r(k),
        !k.defaultPrevented && l && (k.preventDefault(),
        l()))
    }
    , d),
    x.useEffect( () => {
        if (f)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Td = d.body.style.pointerEvents,
            d.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(f)),
            u.layers.add(f),
            Ad(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = Td)
            }
    }
    , [f, d, n, u]),
    x.useEffect( () => () => {
        f && (u.layers.delete(f),
        u.layersWithOutsidePointerEventsDisabled.delete(f),
        Ad())
    }
    , [f, u]),
    x.useEffect( () => {
        const k = () => y({});
        return document.addEventListener(Ua, k),
        () => document.removeEventListener(Ua, k)
    }
    , []),
    a.jsx(Ge.div, {
        ...c,
        ref: w,
        style: {
            pointerEvents: v ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: ye(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: ye(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: ye(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
qc.displayName = g0;
var x0 = "DismissableLayerBranch"
  , Fp = x.forwardRef( (e, t) => {
    const n = x.useContext(Up)
      , r = x.useRef(null)
      , o = xt(t, r);
    return x.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    a.jsx(Ge.div, {
        ...e,
        ref: o
    })
}
);
Fp.displayName = x0;
function w0(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ot(e)
      , r = x.useRef(!1)
      , o = x.useRef( () => {}
    );
    return x.useEffect( () => {
        const i = l => {
            if (l.target && !r.current) {
                let c = function() {
                    $p(v0, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = c,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : c()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function b0(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ot(e)
      , r = x.useRef(!1);
    return x.useEffect( () => {
        const o = i => {
            i.target && !r.current && $p(y0, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Ad() {
    const e = new CustomEvent(Ua);
    document.dispatchEvent(e)
}
function $p(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Vp(o, i) : o.dispatchEvent(i)
}
var S0 = qc
  , C0 = Fp
  , tr = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {}
  , E0 = "Portal"
  , Gp = x.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [o,i] = x.useState(!1);
    tr( () => i(!0), []);
    const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return s ? _p.createPortal(a.jsx(Ge.div, {
        ...r,
        ref: t
    }), s) : null
}
);
Gp.displayName = E0;
function N0(e, t) {
    return x.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Xc = e => {
    const {present: t, children: n} = e
      , r = k0(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : x.Children.only(n)
      , i = xt(r.ref, j0(o));
    return typeof n == "function" || r.isPresent ? x.cloneElement(o, {
        ref: i
    }) : null
}
;
Xc.displayName = "Presence";
function k0(e) {
    const [t,n] = x.useState()
      , r = x.useRef({})
      , o = x.useRef(e)
      , i = x.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [l,c] = N0(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return x.useEffect( () => {
        const u = Li(r.current);
        i.current = l === "mounted" ? u : "none"
    }
    , [l]),
    tr( () => {
        const u = r.current
          , f = o.current;
        if (f !== e) {
            const d = i.current
              , y = Li(u);
            e ? c("MOUNT") : y === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(f && d !== y ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, c]),
    tr( () => {
        if (t) {
            let u;
            const f = t.ownerDocument.defaultView ?? window
              , m = y => {
                const g = Li(r.current).includes(y.animationName);
                if (y.target === t && g && (c("ANIMATION_END"),
                !o.current)) {
                    const b = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = f.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b)
                    }
                    )
                }
            }
              , d = y => {
                y.target === t && (i.current = Li(r.current))
            }
            ;
            return t.addEventListener("animationstart", d),
            t.addEventListener("animationcancel", m),
            t.addEventListener("animationend", m),
            () => {
                f.clearTimeout(u),
                t.removeEventListener("animationstart", d),
                t.removeEventListener("animationcancel", m),
                t.removeEventListener("animationend", m)
            }
        } else
            c("ANIMATION_END")
    }
    , [t, c]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: x.useCallback(u => {
            u && (r.current = getComputedStyle(u)),
            n(u)
        }
        , [])
    }
}
function Li(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function j0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function P0({prop: e, defaultProp: t, onChange: n= () => {}
}) {
    const [r,o] = D0({
        defaultProp: t,
        onChange: n
    })
      , i = e !== void 0
      , s = i ? e : r
      , l = Ot(n)
      , c = x.useCallback(u => {
        if (i) {
            const m = typeof u == "function" ? u(e) : u;
            m !== e && l(m)
        } else
            o(u)
    }
    , [i, e, o, l]);
    return [s, c]
}
function D0({defaultProp: e, onChange: t}) {
    const n = x.useState(e)
      , [r] = n
      , o = x.useRef(r)
      , i = Ot(t);
    return x.useEffect( () => {
        o.current !== r && (i(r),
        o.current = r)
    }
    , [r, o, i]),
    n
}
var M0 = "VisuallyHidden"
  , qs = x.forwardRef( (e, t) => a.jsx(Ge.span, {
    ...e,
    ref: t,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
qs.displayName = M0;
var R0 = qs
  , Zc = "ToastProvider"
  , [Jc,O0,T0] = f0("Toast")
  , [Hp,OS] = zp("Toast", [T0])
  , [A0,Xs] = Hp(Zc)
  , Wp = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [l,c] = x.useState(null)
      , [u,f] = x.useState(0)
      , m = x.useRef(!1)
      , d = x.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Zc}\`. Expected non-empty \`string\`.`),
    a.jsx(Jc.Provider, {
        scope: t,
        children: a.jsx(A0, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: l,
            onViewportChange: c,
            onToastAdd: x.useCallback( () => f(y => y + 1), []),
            onToastRemove: x.useCallback( () => f(y => y - 1), []),
            isFocusedToastEscapeKeyDownRef: m,
            isClosePausedRef: d,
            children: s
        })
    })
}
;
Wp.displayName = Zc;
var Qp = "ToastViewport"
  , _0 = ["F8"]
  , Fa = "toast.viewportPause"
  , $a = "toast.viewportResume"
  , Kp = x.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=_0, label: o="Notifications ({hotkey})", ...i} = e
      , s = Xs(Qp, n)
      , l = O0(n)
      , c = x.useRef(null)
      , u = x.useRef(null)
      , f = x.useRef(null)
      , m = x.useRef(null)
      , d = xt(t, m, s.onViewportChange)
      , y = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , w = s.toastCount > 0;
    x.useEffect( () => {
        const b = h => {
            var v;
            r.length !== 0 && r.every(S => h[S] || h.code === S) && ((v = m.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", b),
        () => document.removeEventListener("keydown", b)
    }
    , [r]),
    x.useEffect( () => {
        const b = c.current
          , h = m.current;
        if (w && b && h) {
            const p = () => {
                if (!s.isClosePausedRef.current) {
                    const N = new CustomEvent(Fa);
                    h.dispatchEvent(N),
                    s.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (s.isClosePausedRef.current) {
                    const N = new CustomEvent($a);
                    h.dispatchEvent(N),
                    s.isClosePausedRef.current = !1
                }
            }
              , S = N => {
                !b.contains(N.relatedTarget) && v()
            }
              , C = () => {
                b.contains(document.activeElement) || v()
            }
            ;
            return b.addEventListener("focusin", p),
            b.addEventListener("focusout", S),
            b.addEventListener("pointermove", p),
            b.addEventListener("pointerleave", C),
            window.addEventListener("blur", p),
            window.addEventListener("focus", v),
            () => {
                b.removeEventListener("focusin", p),
                b.removeEventListener("focusout", S),
                b.removeEventListener("pointermove", p),
                b.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [w, s.isClosePausedRef]);
    const g = x.useCallback( ({tabbingDirection: b}) => {
        const p = l().map(v => {
            const S = v.ref.current
              , C = [S, ...K0(S)];
            return b === "forwards" ? C : C.reverse()
        }
        );
        return (b === "forwards" ? p.reverse() : p).flat()
    }
    , [l]);
    return x.useEffect( () => {
        const b = m.current;
        if (b) {
            const h = p => {
                var C, N, k;
                const v = p.altKey || p.ctrlKey || p.metaKey;
                if (p.key === "Tab" && !v) {
                    const P = document.activeElement
                      , L = p.shiftKey;
                    if (p.target === b && L) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const I = g({
                        tabbingDirection: L ? "backwards" : "forwards"
                    })
                      , H = I.findIndex(T => T === P);
                    Ul(I.slice(H + 1)) ? p.preventDefault() : L ? (N = u.current) == null || N.focus() : (k = f.current) == null || k.focus()
                }
            }
            ;
            return b.addEventListener("keydown", h),
            () => b.removeEventListener("keydown", h)
        }
    }
    , [l, g]),
    a.jsxs(C0, {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", y),
        tabIndex: -1,
        style: {
            pointerEvents: w ? void 0 : "none"
        },
        children: [w && a.jsx(Ga, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const b = g({
                    tabbingDirection: "forwards"
                });
                Ul(b)
            }
        }), a.jsx(Jc.Slot, {
            scope: n,
            children: a.jsx(Ge.ol, {
                tabIndex: -1,
                ...i,
                ref: d
            })
        }), w && a.jsx(Ga, {
            ref: f,
            onFocusFromOutsideViewport: () => {
                const b = g({
                    tabbingDirection: "backwards"
                });
                Ul(b)
            }
        })]
    })
}
);
Kp.displayName = Qp;
var Yp = "ToastFocusProxy"
  , Ga = x.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = Xs(Yp, n);
    return a.jsx(qs, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const l = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(l)) && r()
        }
    })
}
);
Ga.displayName = Yp;
var Zs = "Toast"
  , L0 = "toast.swipeStart"
  , I0 = "toast.swipeMove"
  , B0 = "toast.swipeCancel"
  , z0 = "toast.swipeEnd"
  , qp = x.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [l=!0,c] = P0({
        prop: r,
        defaultProp: o,
        onChange: i
    });
    return a.jsx(Xc, {
        present: n || l,
        children: a.jsx(F0, {
            open: l,
            ...s,
            ref: t,
            onClose: () => c(!1),
            onPause: Ot(e.onPause),
            onResume: Ot(e.onResume),
            onSwipeStart: ye(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: ye(e.onSwipeMove, u => {
                const {x: f, y: m} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`)
            }
            ),
            onSwipeCancel: ye(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: ye(e.onSwipeEnd, u => {
                const {x: f, y: m} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`),
                c(!1)
            }
            )
        })
    })
}
);
qp.displayName = Zs;
var [V0,U0] = Hp(Zs, {
    onClose() {}
})
  , F0 = x.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: l, onPause: c, onResume: u, onSwipeStart: f, onSwipeMove: m, onSwipeCancel: d, onSwipeEnd: y, ...w} = e
      , g = Xs(Zs, n)
      , [b,h] = x.useState(null)
      , p = xt(t, T => h(T))
      , v = x.useRef(null)
      , S = x.useRef(null)
      , C = o || g.duration
      , N = x.useRef(0)
      , k = x.useRef(C)
      , P = x.useRef(0)
      , {onToastAdd: L, onToastRemove: O} = g
      , V = Ot( () => {
        var W;
        (b == null ? void 0 : b.contains(document.activeElement)) && ((W = g.viewport) == null || W.focus()),
        s()
    }
    )
      , I = x.useCallback(T => {
        !T || T === 1 / 0 || (window.clearTimeout(P.current),
        N.current = new Date().getTime(),
        P.current = window.setTimeout(V, T))
    }
    , [V]);
    x.useEffect( () => {
        const T = g.viewport;
        if (T) {
            const W = () => {
                I(k.current),
                u == null || u()
            }
              , U = () => {
                const Q = new Date().getTime() - N.current;
                k.current = k.current - Q,
                window.clearTimeout(P.current),
                c == null || c()
            }
            ;
            return T.addEventListener(Fa, U),
            T.addEventListener($a, W),
            () => {
                T.removeEventListener(Fa, U),
                T.removeEventListener($a, W)
            }
        }
    }
    , [g.viewport, C, c, u, I]),
    x.useEffect( () => {
        i && !g.isClosePausedRef.current && I(C)
    }
    , [i, C, g.isClosePausedRef, I]),
    x.useEffect( () => (L(),
    () => O()), [L, O]);
    const H = x.useMemo( () => b ? rh(b) : null, [b]);
    return g.viewport ? a.jsxs(a.Fragment, {
        children: [H && a.jsx($0, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: H
        }), a.jsx(V0, {
            scope: n,
            onClose: V,
            children: ui.createPortal(a.jsx(Jc.ItemSlot, {
                scope: n,
                children: a.jsx(S0, {
                    asChild: !0,
                    onEscapeKeyDown: ye(l, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || V(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: a.jsx(Ge.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...w,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: ye(e.onKeyDown, T => {
                            T.key === "Escape" && (l == null || l(T.nativeEvent),
                            T.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            V()))
                        }
                        ),
                        onPointerDown: ye(e.onPointerDown, T => {
                            T.button === 0 && (v.current = {
                                x: T.clientX,
                                y: T.clientY
                            })
                        }
                        ),
                        onPointerMove: ye(e.onPointerMove, T => {
                            if (!v.current)
                                return;
                            const W = T.clientX - v.current.x
                              , U = T.clientY - v.current.y
                              , Q = !!S.current
                              , E = ["left", "right"].includes(g.swipeDirection)
                              , M = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , B = E ? M(0, W) : 0
                              , _ = E ? 0 : M(0, U)
                              , z = T.pointerType === "touch" ? 10 : 2
                              , Y = {
                                x: B,
                                y: _
                            }
                              , le = {
                                originalEvent: T,
                                delta: Y
                            };
                            Q ? (S.current = Y,
                            Ii(I0, m, le, {
                                discrete: !1
                            })) : _d(Y, g.swipeDirection, z) ? (S.current = Y,
                            Ii(L0, f, le, {
                                discrete: !1
                            }),
                            T.target.setPointerCapture(T.pointerId)) : (Math.abs(W) > z || Math.abs(U) > z) && (v.current = null)
                        }
                        ),
                        onPointerUp: ye(e.onPointerUp, T => {
                            const W = S.current
                              , U = T.target;
                            if (U.hasPointerCapture(T.pointerId) && U.releasePointerCapture(T.pointerId),
                            S.current = null,
                            v.current = null,
                            W) {
                                const Q = T.currentTarget
                                  , E = {
                                    originalEvent: T,
                                    delta: W
                                };
                                _d(W, g.swipeDirection, g.swipeThreshold) ? Ii(z0, y, E, {
                                    discrete: !0
                                }) : Ii(B0, d, E, {
                                    discrete: !0
                                }),
                                Q.addEventListener("click", M => M.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), g.viewport)
        })]
    }) : null
}
)
  , $0 = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Xs(Zs, t)
      , [i,s] = x.useState(!1)
      , [l,c] = x.useState(!1);
    return W0( () => s(!0)),
    x.useEffect( () => {
        const u = window.setTimeout( () => c(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    l ? null : a.jsx(Gp, {
        asChild: !0,
        children: a.jsx(qs, {
            ...r,
            children: i && a.jsxs(a.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , G0 = "ToastTitle"
  , Xp = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return a.jsx(Ge.div, {
        ...r,
        ref: t
    })
}
);
Xp.displayName = G0;
var H0 = "ToastDescription"
  , Zp = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return a.jsx(Ge.div, {
        ...r,
        ref: t
    })
}
);
Zp.displayName = H0;
var Jp = "ToastAction"
  , eh = x.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? a.jsx(nh, {
        altText: n,
        asChild: !0,
        children: a.jsx(eu, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Jp}\`. Expected non-empty \`string\`.`),
    null)
}
);
eh.displayName = Jp;
var th = "ToastClose"
  , eu = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = U0(th, n);
    return a.jsx(nh, {
        asChild: !0,
        children: a.jsx(Ge.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: ye(e.onClick, o.onClose)
        })
    })
}
);
eu.displayName = th;
var nh = x.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return a.jsx(Ge.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function rh(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Q0(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...rh(r))
        }
    }
    ),
    t
}
function Ii(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Vp(o, i) : o.dispatchEvent(i)
}
var _d = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function W0(e= () => {}
) {
    const t = Ot(e);
    tr( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function Q0(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function K0(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Ul(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var Y0 = Wp
  , oh = Kp
  , ih = qp
  , sh = Xp
  , lh = Zp
  , ah = eh
  , ch = eu;
function uh(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = uh(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function dh() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = uh(e)) && (r && (r += " "),
        r += t);
    return r
}
const Ld = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Id = dh
  , tu = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Id(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const f = n == null ? void 0 : n[u]
          , m = i == null ? void 0 : i[u];
        if (f === null)
            return null;
        const d = Ld(f) || Ld(m);
        return o[u][d]
    }
    )
      , l = n && Object.entries(n).reduce( (u, f) => {
        let[m,d] = f;
        return d === void 0 || (u[m] = d),
        u
    }
    , {})
      , c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, f) => {
        let {class: m, className: d, ...y} = f;
        return Object.entries(y).every(w => {
            let[g,b] = w;
            return Array.isArray(b) ? b.includes({
                ...i,
                ...l
            }[g]) : {
                ...i,
                ...l
            }[g] === b
        }
        ) ? [...u, m, d] : u
    }
    , []);
    return Id(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q0 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , fh = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var X0 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z0 = x.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: s, ...l}, c) => x.createElement("svg", {
    ref: c,
    ...X0,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: fh("lucide", o),
    ...l
}, [...s.map( ([u,f]) => x.createElement(u, f)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ge = (e, t) => {
    const n = x.forwardRef( ({className: r, ...o}, i) => x.createElement(Z0, {
        ref: i,
        iconNode: t,
        className: fh(`lucide-${q0(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = ge("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bd = ge("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ex = ge("ChartNoAxesColumnIncreasing", [["line", {
    x1: "12",
    x2: "12",
    y1: "20",
    y2: "10",
    key: "1vz5eb"
}], ["line", {
    x1: "18",
    x2: "18",
    y1: "20",
    y2: "4",
    key: "cun8e5"
}], ["line", {
    x1: "6",
    x2: "6",
    y1: "20",
    y2: "16",
    key: "hq0ia6"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tx = ge("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nx = ge("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mh = ge("Cloud", [["path", {
    d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
    key: "p7xjir"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ph = ge("Cpu", [["rect", {
    width: "16",
    height: "16",
    x: "4",
    y: "4",
    rx: "2",
    key: "14l7u7"
}], ["rect", {
    width: "6",
    height: "6",
    x: "9",
    y: "9",
    rx: "1",
    key: "5aljv4"
}], ["path", {
    d: "M15 2v2",
    key: "13l42r"
}], ["path", {
    d: "M15 20v2",
    key: "15mkzm"
}], ["path", {
    d: "M2 15h2",
    key: "1gxd5l"
}], ["path", {
    d: "M2 9h2",
    key: "1bbxkp"
}], ["path", {
    d: "M20 15h2",
    key: "19e6y8"
}], ["path", {
    d: "M20 9h2",
    key: "19tzq7"
}], ["path", {
    d: "M9 2v2",
    key: "165o2o"
}], ["path", {
    d: "M9 20v2",
    key: "i2bqo8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = ge("Gamepad2", [["line", {
    x1: "6",
    x2: "10",
    y1: "11",
    y2: "11",
    key: "1gktln"
}], ["line", {
    x1: "8",
    x2: "8",
    y1: "9",
    y2: "13",
    key: "qnk9ow"
}], ["line", {
    x1: "15",
    x2: "15.01",
    y1: "12",
    y2: "12",
    key: "krot7o"
}], ["line", {
    x1: "18",
    x2: "18.01",
    y1: "10",
    y2: "10",
    key: "1lcuu1"
}], ["path", {
    d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
    key: "mfqc10"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rx = ge("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hh = ge("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ox = ge("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gh = ge("MessageSquare", [["path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    key: "1lielz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = ge("Server", [["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "2",
    rx: "2",
    ry: "2",
    key: "ngkwjq"
}], ["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "14",
    rx: "2",
    ry: "2",
    key: "iecqi9"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "6",
    y2: "6",
    key: "16zg32"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "18",
    y2: "18",
    key: "nzw8ys"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = ge("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fl = ge("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ix = ge("TicketPercent", [["path", {
    d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
    key: "1l48ns"
}], ["path", {
    d: "M9 9h.01",
    key: "1q5me6"
}], ["path", {
    d: "m15 9-6 6",
    key: "1uzhvr"
}], ["path", {
    d: "M15 15h.01",
    key: "lqbp3k"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sx = ge("WifiOff", [["path", {
    d: "M12 20h.01",
    key: "zekei9"
}], ["path", {
    d: "M8.5 16.429a5 5 0 0 1 7 0",
    key: "1bycff"
}], ["path", {
    d: "M5 12.859a10 10 0 0 1 5.17-2.69",
    key: "1dl1wf"
}], ["path", {
    d: "M19 12.859a10 10 0 0 0-2.007-1.523",
    key: "4k23kn"
}], ["path", {
    d: "M2 8.82a15 15 0 0 1 4.177-2.643",
    key: "1grhjp"
}], ["path", {
    d: "M22 8.82a15 15 0 0 0-11.288-3.764",
    key: "z3jwby"
}], ["path", {
    d: "m2 2 20 20",
    key: "1ooewy"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lx = ge("Wifi", [["path", {
    d: "M12 20h.01",
    key: "zekei9"
}], ["path", {
    d: "M2 8.82a15 15 0 0 1 20 0",
    key: "dnpr2z"
}], ["path", {
    d: "M5 12.859a10 10 0 0 1 14 0",
    key: "1x1e6c"
}], ["path", {
    d: "M8.5 16.429a5 5 0 0 1 7 0",
    key: "1bycff"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nu = ge("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vh = ge("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , ru = "-"
  , ax = e => {
    const t = ux(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const l = s.split(ru);
            return l[0] === "" && l.length !== 1 && l.shift(),
            yh(l, t) || cx(s)
        }
        ,
        getConflictingClassGroupIds: (s, l) => {
            const c = n[s] || [];
            return l && r[s] ? [...c, ...r[s]] : c
        }
    }
}
  , yh = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? yh(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(ru);
    return (s = t.validators.find( ({validator: l}) => l(i))) == null ? void 0 : s.classGroupId
}
  , zd = /^\[(.+)\]$/
  , cx = e => {
    if (zd.test(e)) {
        const t = zd.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , ux = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return fx(Object.entries(e.classGroups), n).forEach( ([i,s]) => {
        Ha(s, r, i, t)
    }
    ),
    r
}
  , Ha = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : Vd(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (dx(o)) {
                Ha(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,s]) => {
            Ha(s, Vd(t, i), n, r)
        }
        )
    }
    )
}
  , Vd = (e, t) => {
    let n = e;
    return t.split(ru).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , dx = e => e.isThemeGetter
  , fx = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([s,l]) => [t + s, l])) : i);
    return [n, o]
}
) : e
  , mx = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (i, s) => {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0)
                return s;
            if ((s = r.get(i)) !== void 0)
                return o(i, s),
                s
        },
        set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}
  , xh = "!"
  , px = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length
      , s = l => {
        const c = [];
        let u = 0, f = 0, m;
        for (let b = 0; b < l.length; b++) {
            let h = l[b];
            if (u === 0) {
                if (h === o && (r || l.slice(b, b + i) === t)) {
                    c.push(l.slice(f, b)),
                    f = b + i;
                    continue
                }
                if (h === "/") {
                    m = b;
                    continue
                }
            }
            h === "[" ? u++ : h === "]" && u--
        }
        const d = c.length === 0 ? l : l.substring(f)
          , y = d.startsWith(xh)
          , w = y ? d.substring(1) : d
          , g = m && m > f ? m - f : void 0;
        return {
            modifiers: c,
            hasImportantModifier: y,
            baseClassName: w,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? l => n({
        className: l,
        parseClassName: s
    }) : s
}
  , hx = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , gx = e => ({
    cache: mx(e.cacheSize),
    parseClassName: px(e),
    ...ax(e)
})
  , vx = /\s+/
  , yx = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = []
      , s = e.trim().split(vx);
    let l = "";
    for (let c = s.length - 1; c >= 0; c -= 1) {
        const u = s[c]
          , {modifiers: f, hasImportantModifier: m, baseClassName: d, maybePostfixModifierPosition: y} = n(u);
        let w = !!y
          , g = r(w ? d.substring(0, y) : d);
        if (!g) {
            if (!w) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            if (g = r(d),
            !g) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            w = !1
        }
        const b = hx(f).join(":")
          , h = m ? b + xh : b
          , p = h + g;
        if (i.includes(p))
            continue;
        i.push(p);
        const v = o(g, w);
        for (let S = 0; S < v.length; ++S) {
            const C = v[S];
            i.push(h + C)
        }
        l = u + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function xx() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = wh(t)) && (r && (r += " "),
        r += n);
    return r
}
const wh = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = wh(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function wx(e, ...t) {
    let n, r, o, i = s;
    function s(c) {
        const u = t.reduce( (f, m) => m(f), e());
        return n = gx(u),
        r = n.cache.get,
        o = n.cache.set,
        i = l,
        l(c)
    }
    function l(c) {
        const u = r(c);
        if (u)
            return u;
        const f = yx(c, n);
        return o(c, f),
        f
    }
    return function() {
        return i(xx.apply(null, arguments))
    }
}
const re = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , bh = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , bx = /^\d+\/\d+$/
  , Sx = new Set(["px", "full", "screen"])
  , Cx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Ex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Nx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , kx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , jx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , _t = e => Or(e) || Sx.has(e) || bx.test(e)
  , on = e => no(e, "length", _x)
  , Or = e => !!e && !Number.isNaN(Number(e))
  , $l = e => no(e, "number", Or)
  , go = e => !!e && Number.isInteger(Number(e))
  , Px = e => e.endsWith("%") && Or(e.slice(0, -1))
  , $ = e => bh.test(e)
  , sn = e => Cx.test(e)
  , Dx = new Set(["length", "size", "percentage"])
  , Mx = e => no(e, Dx, Sh)
  , Rx = e => no(e, "position", Sh)
  , Ox = new Set(["image", "url"])
  , Tx = e => no(e, Ox, Ix)
  , Ax = e => no(e, "", Lx)
  , vo = () => !0
  , no = (e, t, n) => {
    const r = bh.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , _x = e => Ex.test(e) && !Nx.test(e)
  , Sh = () => !1
  , Lx = e => kx.test(e)
  , Ix = e => jx.test(e)
  , Bx = () => {
    const e = re("colors")
      , t = re("spacing")
      , n = re("blur")
      , r = re("brightness")
      , o = re("borderColor")
      , i = re("borderRadius")
      , s = re("borderSpacing")
      , l = re("borderWidth")
      , c = re("contrast")
      , u = re("grayscale")
      , f = re("hueRotate")
      , m = re("invert")
      , d = re("gap")
      , y = re("gradientColorStops")
      , w = re("gradientColorStopPositions")
      , g = re("inset")
      , b = re("margin")
      , h = re("opacity")
      , p = re("padding")
      , v = re("saturate")
      , S = re("scale")
      , C = re("sepia")
      , N = re("skew")
      , k = re("space")
      , P = re("translate")
      , L = () => ["auto", "contain", "none"]
      , O = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , V = () => ["auto", $, t]
      , I = () => [$, t]
      , H = () => ["", _t, on]
      , T = () => ["auto", Or, $]
      , W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , U = () => ["solid", "dashed", "dotted", "double", "none"]
      , Q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , E = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , M = () => ["", "0", $]
      , B = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , _ = () => [Or, $];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [vo],
            spacing: [_t, on],
            blur: ["none", "", sn, $],
            brightness: _(),
            borderColor: [e],
            borderRadius: ["none", "", "full", sn, $],
            borderSpacing: I(),
            borderWidth: H(),
            contrast: _(),
            grayscale: M(),
            hueRotate: _(),
            invert: M(),
            gap: I(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Px, on],
            inset: V(),
            margin: V(),
            opacity: _(),
            padding: I(),
            saturate: _(),
            scale: _(),
            sepia: M(),
            skew: _(),
            space: I(),
            translate: I()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", $]
            }],
            container: ["container"],
            columns: [{
                columns: [sn]
            }],
            "break-after": [{
                "break-after": B()
            }],
            "break-before": [{
                "break-before": B()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...W(), $]
            }],
            overflow: [{
                overflow: O()
            }],
            "overflow-x": [{
                "overflow-x": O()
            }],
            "overflow-y": [{
                "overflow-y": O()
            }],
            overscroll: [{
                overscroll: L()
            }],
            "overscroll-x": [{
                "overscroll-x": L()
            }],
            "overscroll-y": [{
                "overscroll-y": L()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", go, $]
            }],
            basis: [{
                basis: V()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", $]
            }],
            grow: [{
                grow: M()
            }],
            shrink: [{
                shrink: M()
            }],
            order: [{
                order: ["first", "last", "none", go, $]
            }],
            "grid-cols": [{
                "grid-cols": [vo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", go, $]
                }, $]
            }],
            "col-start": [{
                "col-start": T()
            }],
            "col-end": [{
                "col-end": T()
            }],
            "grid-rows": [{
                "grid-rows": [vo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [go, $]
                }, $]
            }],
            "row-start": [{
                "row-start": T()
            }],
            "row-end": [{
                "row-end": T()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", $]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", $]
            }],
            gap: [{
                gap: [d]
            }],
            "gap-x": [{
                "gap-x": [d]
            }],
            "gap-y": [{
                "gap-y": [d]
            }],
            "justify-content": [{
                justify: ["normal", ...E()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...E(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...E(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [b]
            }],
            mx: [{
                mx: [b]
            }],
            my: [{
                my: [b]
            }],
            ms: [{
                ms: [b]
            }],
            me: [{
                me: [b]
            }],
            mt: [{
                mt: [b]
            }],
            mr: [{
                mr: [b]
            }],
            mb: [{
                mb: [b]
            }],
            ml: [{
                ml: [b]
            }],
            "space-x": [{
                "space-x": [k]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [k]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", $, t]
            }],
            "min-w": [{
                "min-w": [$, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [$, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [sn]
                }, sn]
            }],
            h: [{
                h: [$, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [$, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [$, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [$, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", sn, on]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", $l]
            }],
            "font-family": [{
                font: [vo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", $]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Or, $l]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", _t, $]
            }],
            "list-image": [{
                "list-image": ["none", $]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", $]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [h]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [h]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...U(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", _t, on]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", _t, $]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", $]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", $]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [h]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...W(), Rx]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Mx]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Tx]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [w]
            }],
            "gradient-via-pos": [{
                via: [w]
            }],
            "gradient-to-pos": [{
                to: [w]
            }],
            "gradient-from": [{
                from: [y]
            }],
            "gradient-via": [{
                via: [y]
            }],
            "gradient-to": [{
                to: [y]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [h]
            }],
            "border-style": [{
                border: [...U(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [h]
            }],
            "divide-style": [{
                divide: U()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...U()]
            }],
            "outline-offset": [{
                "outline-offset": [_t, $]
            }],
            "outline-w": [{
                outline: [_t, on]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: H()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [h]
            }],
            "ring-offset-w": [{
                "ring-offset": [_t, on]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", sn, Ax]
            }],
            "shadow-color": [{
                shadow: [vo]
            }],
            opacity: [{
                opacity: [h]
            }],
            "mix-blend": [{
                "mix-blend": [...Q(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": Q()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [c]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", sn, $]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [f]
            }],
            invert: [{
                invert: [m]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [c]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [f]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [m]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [h]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", $]
            }],
            duration: [{
                duration: _()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", $]
            }],
            delay: [{
                delay: _()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", $]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [go, $]
            }],
            "translate-x": [{
                "translate-x": [P]
            }],
            "translate-y": [{
                "translate-y": [P]
            }],
            "skew-x": [{
                "skew-x": [N]
            }],
            "skew-y": [{
                "skew-y": [N]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", $]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", $]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", $]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [_t, on, $l]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , zx = wx(Bx);
function qt(...e) {
    return zx(dh(e))
}
const Vx = Y0
  , Ch = x.forwardRef( ({className: e, ...t}, n) => a.jsx(oh, {
    ref: n,
    className: qt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Ch.displayName = oh.displayName;
const Ux = tu("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Eh = x.forwardRef( ({className: e, variant: t, ...n}, r) => a.jsx(ih, {
    ref: r,
    className: qt(Ux({
        variant: t
    }), e),
    ...n
}));
Eh.displayName = ih.displayName;
const Fx = x.forwardRef( ({className: e, ...t}, n) => a.jsx(ah, {
    ref: n,
    className: qt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
Fx.displayName = ah.displayName;
const Nh = x.forwardRef( ({className: e, ...t}, n) => a.jsx(ch, {
    ref: n,
    className: qt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: a.jsx(nu, {
        className: "h-4 w-4"
    })
}));
Nh.displayName = ch.displayName;
const kh = x.forwardRef( ({className: e, ...t}, n) => a.jsx(sh, {
    ref: n,
    className: qt("text-sm font-semibold", e),
    ...t
}));
kh.displayName = sh.displayName;
const jh = x.forwardRef( ({className: e, ...t}, n) => a.jsx(lh, {
    ref: n,
    className: qt("text-sm opacity-90", e),
    ...t
}));
jh.displayName = lh.displayName;
function $x() {
    const {toasts: e} = i0();
    return a.jsxs(Vx, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...i}) {
            return a.jsxs(Eh, {
                ...i,
                children: [a.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && a.jsx(kh, {
                        children: n
                    }), r && a.jsx(jh, {
                        children: r
                    })]
                }), o, a.jsx(Nh, {})]
            }, t)
        }), a.jsx(Ch, {})]
    })
}
var Ud = ["light", "dark"]
  , Gx = "(prefers-color-scheme: dark)"
  , Hx = x.createContext(void 0)
  , Wx = {
    setTheme: e => {}
    ,
    themes: []
}
  , Qx = () => {
    var e;
    return (e = x.useContext(Hx)) != null ? e : Wx
}
;
x.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: s, attrs: l, nonce: c}) => {
    let u = i === "system"
      , f = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(w => `'${w}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , m = o ? Ud.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , d = (w, g=!1, b=!0) => {
        let h = s ? s[w] : w
          , p = g ? w + "|| ''" : `'${h}'`
          , v = "";
        return o && b && !g && Ud.includes(w) && (v += `d.style.colorScheme = '${w}';`),
        n === "class" ? g || h ? v += `c.add(${p})` : v += "null" : h && (v += `d[s](n,${p})`),
        v
    }
      , y = e ? `!function(){${f}${d(e)}}()` : r ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Gx}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${d(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + d(i, !1, !1) + "}"}${m}}catch(e){}}()` : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${d(s ? "x[e]" : "e", !0)}}else{${d(i, !1, !1)};}${m}}catch(t){}}();`;
    return x.createElement("script", {
        nonce: c,
        dangerouslySetInnerHTML: {
            __html: y
        }
    })
}
);
var Kx = e => {
    switch (e) {
    case "success":
        return Xx;
    case "info":
        return Jx;
    case "warning":
        return Zx;
    case "error":
        return e1;
    default:
        return null
    }
}
  , Yx = Array(12).fill(0)
  , qx = ({visible: e}) => R.createElement("div", {
    className: "sonner-loading-wrapper",
    "data-visible": e
}, R.createElement("div", {
    className: "sonner-spinner"
}, Yx.map( (t, n) => R.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${n}`
}))))
  , Xx = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , Zx = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , Jx = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , e1 = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , t1 = () => {
    let[e,t] = R.useState(document.hidden);
    return R.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Wa = 1
  , n1 = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Wa++
              , i = this.toasts.find(l => l.id === o)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return i ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({
                ...l,
                ...e,
                id: o,
                title: n
            }),
            {
                ...l,
                ...e,
                id: o,
                dismissible: s,
                title: n
            }) : l) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e()
              , o = n !== void 0;
            return r.then(async i => {
                if (o1(i) && !i.ok) {
                    o = !1;
                    let s = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error
                      , l = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: s,
                        description: l
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let s = typeof t.success == "function" ? await t.success(i) : t.success
                      , l = typeof t.description == "function" ? await t.description(i) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: s,
                        description: l
                    })
                }
            }
            ).catch(async i => {
                if (t.error !== void 0) {
                    o = !1;
                    let s = typeof t.error == "function" ? await t.error(i) : t.error
                      , l = typeof t.description == "function" ? await t.description(i) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: s,
                        description: l
                    })
                }
            }
            ).finally( () => {
                var i;
                o && (this.dismiss(n),
                n = void 0),
                (i = t.finally) == null || i.call(t)
            }
            ),
            n
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Wa++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.subscribers = [],
        this.toasts = []
    }
}
  , Qe = new n1
  , r1 = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Wa++;
    return Qe.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , o1 = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , i1 = r1
  , s1 = () => Qe.toasts;
Object.assign(i1, {
    success: Qe.success,
    info: Qe.info,
    warning: Qe.warning,
    error: Qe.error,
    custom: Qe.custom,
    message: Qe.message,
    promise: Qe.promise,
    dismiss: Qe.dismiss,
    loading: Qe.loading
}, {
    getHistory: s1
});
function l1(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
l1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Bi(e) {
    return e.label !== void 0
}
var a1 = 3
  , c1 = "32px"
  , u1 = 4e3
  , d1 = 356
  , f1 = 14
  , m1 = 20
  , p1 = 200;
function h1(...e) {
    return e.filter(Boolean).join(" ")
}
var g1 = e => {
    var t, n, r, o, i, s, l, c, u, f;
    let {invert: m, toast: d, unstyled: y, interacting: w, setHeights: g, visibleToasts: b, heights: h, index: p, toasts: v, expanded: S, removeToast: C, defaultRichColors: N, closeButton: k, style: P, cancelButtonStyle: L, actionButtonStyle: O, className: V="", descriptionClassName: I="", duration: H, position: T, gap: W, loadingIcon: U, expandByDefault: Q, classNames: E, icons: M, closeButtonAriaLabel: B="Close toast", pauseWhenPageIsHidden: _, cn: z} = e
      , [Y,le] = R.useState(!1)
      , [He,Z] = R.useState(!1)
      , [ct,Zt] = R.useState(!1)
      , [Jt,en] = R.useState(!1)
      , [pi,cr] = R.useState(0)
      , [Bn,so] = R.useState(0)
      , hi = R.useRef(null)
      , tn = R.useRef(null)
      , al = p === 0
      , cl = p + 1 <= b
      , Se = d.type
      , ur = d.dismissible !== !1
      , wg = d.className || ""
      , bg = d.descriptionClassName || ""
      , gi = R.useMemo( () => h.findIndex(F => F.toastId === d.id) || 0, [h, d.id])
      , Sg = R.useMemo( () => {
        var F;
        return (F = d.closeButton) != null ? F : k
    }
    , [d.closeButton, k])
      , vu = R.useMemo( () => d.duration || H || u1, [d.duration, H])
      , ul = R.useRef(0)
      , dr = R.useRef(0)
      , yu = R.useRef(0)
      , fr = R.useRef(null)
      , [xu,Cg] = T.split("-")
      , wu = R.useMemo( () => h.reduce( (F, ne, ee) => ee >= gi ? F : F + ne.height, 0), [h, gi])
      , bu = t1()
      , Eg = d.invert || m
      , dl = Se === "loading";
    dr.current = R.useMemo( () => gi * W + wu, [gi, wu]),
    R.useEffect( () => {
        le(!0)
    }
    , []),
    R.useLayoutEffect( () => {
        if (!Y)
            return;
        let F = tn.current
          , ne = F.style.height;
        F.style.height = "auto";
        let ee = F.getBoundingClientRect().height;
        F.style.height = ne,
        so(ee),
        g(St => St.find(Ct => Ct.toastId === d.id) ? St.map(Ct => Ct.toastId === d.id ? {
            ...Ct,
            height: ee
        } : Ct) : [{
            toastId: d.id,
            height: ee,
            position: d.position
        }, ...St])
    }
    , [Y, d.title, d.description, g, d.id]);
    let nn = R.useCallback( () => {
        Z(!0),
        cr(dr.current),
        g(F => F.filter(ne => ne.toastId !== d.id)),
        setTimeout( () => {
            C(d)
        }
        , p1)
    }
    , [d, C, g, dr]);
    R.useEffect( () => {
        if (d.promise && Se === "loading" || d.duration === 1 / 0 || d.type === "loading")
            return;
        let F, ne = vu;
        return S || w || _ && bu ? ( () => {
            if (yu.current < ul.current) {
                let ee = new Date().getTime() - ul.current;
                ne = ne - ee
            }
            yu.current = new Date().getTime()
        }
        )() : ne !== 1 / 0 && (ul.current = new Date().getTime(),
        F = setTimeout( () => {
            var ee;
            (ee = d.onAutoClose) == null || ee.call(d, d),
            nn()
        }
        , ne)),
        () => clearTimeout(F)
    }
    , [S, w, Q, d, vu, nn, d.promise, Se, _, bu]),
    R.useEffect( () => {
        let F = tn.current;
        if (F) {
            let ne = F.getBoundingClientRect().height;
            return so(ne),
            g(ee => [{
                toastId: d.id,
                height: ne,
                position: d.position
            }, ...ee]),
            () => g(ee => ee.filter(St => St.toastId !== d.id))
        }
    }
    , [g, d.id]),
    R.useEffect( () => {
        d.delete && nn()
    }
    , [nn, d.delete]);
    function Ng() {
        return M != null && M.loading ? R.createElement("div", {
            className: "sonner-loader",
            "data-visible": Se === "loading"
        }, M.loading) : U ? R.createElement("div", {
            className: "sonner-loader",
            "data-visible": Se === "loading"
        }, U) : R.createElement(qx, {
            visible: Se === "loading"
        })
    }
    return R.createElement("li", {
        "aria-live": d.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: tn,
        className: z(V, wg, E == null ? void 0 : E.toast, (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast, E == null ? void 0 : E.default, E == null ? void 0 : E[Se], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[Se]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = d.richColors) != null ? r : N,
        "data-styled": !(d.jsx || d.unstyled || y),
        "data-mounted": Y,
        "data-promise": !!d.promise,
        "data-removed": He,
        "data-visible": cl,
        "data-y-position": xu,
        "data-x-position": Cg,
        "data-index": p,
        "data-front": al,
        "data-swiping": ct,
        "data-dismissible": ur,
        "data-type": Se,
        "data-invert": Eg,
        "data-swipe-out": Jt,
        "data-expanded": !!(S || Q && Y),
        style: {
            "--index": p,
            "--toasts-before": p,
            "--z-index": v.length - p,
            "--offset": `${He ? pi : dr.current}px`,
            "--initial-height": Q ? "auto" : `${Bn}px`,
            ...P,
            ...d.style
        },
        onPointerDown: F => {
            dl || !ur || (hi.current = new Date,
            cr(dr.current),
            F.target.setPointerCapture(F.pointerId),
            F.target.tagName !== "BUTTON" && (Zt(!0),
            fr.current = {
                x: F.clientX,
                y: F.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var F, ne, ee, St;
            if (Jt || !ur)
                return;
            fr.current = null;
            let Ct = Number(((F = tn.current) == null ? void 0 : F.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0)
              , vi = new Date().getTime() - ((ne = hi.current) == null ? void 0 : ne.getTime())
              , kg = Math.abs(Ct) / vi;
            if (Math.abs(Ct) >= m1 || kg > .11) {
                cr(dr.current),
                (ee = d.onDismiss) == null || ee.call(d, d),
                nn(),
                en(!0);
                return
            }
            (St = tn.current) == null || St.style.setProperty("--swipe-amount", "0px"),
            Zt(!1)
        }
        ,
        onPointerMove: F => {
            var ne;
            if (!fr.current || !ur)
                return;
            let ee = F.clientY - fr.current.y
              , St = F.clientX - fr.current.x
              , Ct = (xu === "top" ? Math.min : Math.max)(0, ee)
              , vi = F.pointerType === "touch" ? 10 : 2;
            Math.abs(Ct) > vi ? (ne = tn.current) == null || ne.style.setProperty("--swipe-amount", `${ee}px`) : Math.abs(St) > vi && (fr.current = null)
        }
    }, Sg && !d.jsx ? R.createElement("button", {
        "aria-label": B,
        "data-disabled": dl,
        "data-close-button": !0,
        onClick: dl || !ur ? () => {}
        : () => {
            var F;
            nn(),
            (F = d.onDismiss) == null || F.call(d, d)
        }
        ,
        className: z(E == null ? void 0 : E.closeButton, (o = d == null ? void 0 : d.classNames) == null ? void 0 : o.closeButton)
    }, R.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, R.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), R.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, d.jsx || R.isValidElement(d.title) ? d.jsx || d.title : R.createElement(R.Fragment, null, Se || d.icon || d.promise ? R.createElement("div", {
        "data-icon": "",
        className: z(E == null ? void 0 : E.icon, (i = d == null ? void 0 : d.classNames) == null ? void 0 : i.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || Ng() : null, d.type !== "loading" ? d.icon || (M == null ? void 0 : M[Se]) || Kx(Se) : null) : null, R.createElement("div", {
        "data-content": "",
        className: z(E == null ? void 0 : E.content, (s = d == null ? void 0 : d.classNames) == null ? void 0 : s.content)
    }, R.createElement("div", {
        "data-title": "",
        className: z(E == null ? void 0 : E.title, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.title)
    }, d.title), d.description ? R.createElement("div", {
        "data-description": "",
        className: z(I, bg, E == null ? void 0 : E.description, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.description)
    }, d.description) : null), R.isValidElement(d.cancel) ? d.cancel : d.cancel && Bi(d.cancel) ? R.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: d.cancelButtonStyle || L,
        onClick: F => {
            var ne, ee;
            Bi(d.cancel) && ur && ((ee = (ne = d.cancel).onClick) == null || ee.call(ne, F),
            nn())
        }
        ,
        className: z(E == null ? void 0 : E.cancelButton, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.cancelButton)
    }, d.cancel.label) : null, R.isValidElement(d.action) ? d.action : d.action && Bi(d.action) ? R.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: d.actionButtonStyle || O,
        onClick: F => {
            var ne, ee;
            Bi(d.action) && (F.defaultPrevented || ((ee = (ne = d.action).onClick) == null || ee.call(ne, F),
            nn()))
        }
        ,
        className: z(E == null ? void 0 : E.actionButton, (f = d == null ? void 0 : d.classNames) == null ? void 0 : f.actionButton)
    }, d.action.label) : null))
}
;
function Fd() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var v1 = e => {
    let {invert: t, position: n="bottom-right", hotkey: r=["altKey", "KeyT"], expand: o, closeButton: i, className: s, offset: l, theme: c="light", richColors: u, duration: f, style: m, visibleToasts: d=a1, toastOptions: y, dir: w=Fd(), gap: g=f1, loadingIcon: b, icons: h, containerAriaLabel: p="Notifications", pauseWhenPageIsHidden: v, cn: S=h1} = e
      , [C,N] = R.useState([])
      , k = R.useMemo( () => Array.from(new Set([n].concat(C.filter(_ => _.position).map(_ => _.position)))), [C, n])
      , [P,L] = R.useState([])
      , [O,V] = R.useState(!1)
      , [I,H] = R.useState(!1)
      , [T,W] = R.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , U = R.useRef(null)
      , Q = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , E = R.useRef(null)
      , M = R.useRef(!1)
      , B = R.useCallback(_ => {
        var z;
        (z = C.find(Y => Y.id === _.id)) != null && z.delete || Qe.dismiss(_.id),
        N(Y => Y.filter( ({id: le}) => le !== _.id))
    }
    , [C]);
    return R.useEffect( () => Qe.subscribe(_ => {
        if (_.dismiss) {
            N(z => z.map(Y => Y.id === _.id ? {
                ...Y,
                delete: !0
            } : Y));
            return
        }
        setTimeout( () => {
            _p.flushSync( () => {
                N(z => {
                    let Y = z.findIndex(le => le.id === _.id);
                    return Y !== -1 ? [...z.slice(0, Y), {
                        ...z[Y],
                        ..._
                    }, ...z.slice(Y + 1)] : [_, ...z]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    R.useEffect( () => {
        if (c !== "system") {
            W(c);
            return
        }
        c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? W("dark") : W("light")),
        typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({matches: _}) => {
            W(_ ? "dark" : "light")
        }
        )
    }
    , [c]),
    R.useEffect( () => {
        C.length <= 1 && V(!1)
    }
    , [C]),
    R.useEffect( () => {
        let _ = z => {
            var Y, le;
            r.every(He => z[He] || z.code === He) && (V(!0),
            (Y = U.current) == null || Y.focus()),
            z.code === "Escape" && (document.activeElement === U.current || (le = U.current) != null && le.contains(document.activeElement)) && V(!1)
        }
        ;
        return document.addEventListener("keydown", _),
        () => document.removeEventListener("keydown", _)
    }
    , [r]),
    R.useEffect( () => {
        if (U.current)
            return () => {
                E.current && (E.current.focus({
                    preventScroll: !0
                }),
                E.current = null,
                M.current = !1)
            }
    }
    , [U.current]),
    C.length ? R.createElement("section", {
        "aria-label": `${p} ${Q}`,
        tabIndex: -1
    }, k.map( (_, z) => {
        var Y;
        let[le,He] = _.split("-");
        return R.createElement("ol", {
            key: _,
            dir: w === "auto" ? Fd() : w,
            tabIndex: -1,
            ref: U,
            className: s,
            "data-sonner-toaster": !0,
            "data-theme": T,
            "data-y-position": le,
            "data-x-position": He,
            style: {
                "--front-toast-height": `${((Y = P[0]) == null ? void 0 : Y.height) || 0}px`,
                "--offset": typeof l == "number" ? `${l}px` : l || c1,
                "--width": `${d1}px`,
                "--gap": `${g}px`,
                ...m
            },
            onBlur: Z => {
                M.current && !Z.currentTarget.contains(Z.relatedTarget) && (M.current = !1,
                E.current && (E.current.focus({
                    preventScroll: !0
                }),
                E.current = null))
            }
            ,
            onFocus: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || M.current || (M.current = !0,
                E.current = Z.relatedTarget)
            }
            ,
            onMouseEnter: () => V(!0),
            onMouseMove: () => V(!0),
            onMouseLeave: () => {
                I || V(!1)
            }
            ,
            onPointerDown: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || H(!0)
            }
            ,
            onPointerUp: () => H(!1)
        }, C.filter(Z => !Z.position && z === 0 || Z.position === _).map( (Z, ct) => {
            var Zt, Jt;
            return R.createElement(g1, {
                key: Z.id,
                icons: h,
                index: ct,
                toast: Z,
                defaultRichColors: u,
                duration: (Zt = y == null ? void 0 : y.duration) != null ? Zt : f,
                className: y == null ? void 0 : y.className,
                descriptionClassName: y == null ? void 0 : y.descriptionClassName,
                invert: t,
                visibleToasts: d,
                closeButton: (Jt = y == null ? void 0 : y.closeButton) != null ? Jt : i,
                interacting: I,
                position: _,
                style: y == null ? void 0 : y.style,
                unstyled: y == null ? void 0 : y.unstyled,
                classNames: y == null ? void 0 : y.classNames,
                cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                removeToast: B,
                toasts: C.filter(en => en.position == Z.position),
                heights: P.filter(en => en.position == Z.position),
                setHeights: L,
                expandByDefault: o,
                gap: g,
                loadingIcon: b,
                expanded: O,
                pauseWhenPageIsHidden: v,
                cn: S
            })
        }
        ))
    }
    )) : null
}
;
const y1 = ({...e}) => {
    const {theme: t="system"} = Qx();
    return a.jsx(v1, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , x1 = ["top", "right", "bottom", "left"]
  , Rn = Math.min
  , Ye = Math.max
  , ks = Math.round
  , zi = Math.floor
  , On = e => ({
    x: e,
    y: e
})
  , w1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , b1 = {
    start: "end",
    end: "start"
};
function Qa(e, t, n) {
    return Ye(e, Rn(t, n))
}
function Qt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Kt(e) {
    return e.split("-")[0]
}
function ro(e) {
    return e.split("-")[1]
}
function ou(e) {
    return e === "x" ? "y" : "x"
}
function iu(e) {
    return e === "y" ? "height" : "width"
}
function Tn(e) {
    return ["top", "bottom"].includes(Kt(e)) ? "y" : "x"
}
function su(e) {
    return ou(Tn(e))
}
function S1(e, t, n) {
    n === void 0 && (n = !1);
    const r = ro(e)
      , o = su(e)
      , i = iu(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = js(s)),
    [s, js(s)]
}
function C1(e) {
    const t = js(e);
    return [Ka(e), t, Ka(t)]
}
function Ka(e) {
    return e.replace(/start|end/g, t => b1[t])
}
function E1(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , i = ["top", "bottom"]
      , s = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? i : s;
    default:
        return []
    }
}
function N1(e, t, n, r) {
    const o = ro(e);
    let i = E1(Kt(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o),
    t && (i = i.concat(i.map(Ka)))),
    i
}
function js(e) {
    return e.replace(/left|right|bottom|top/g, t => w1[t])
}
function k1(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Ph(e) {
    return typeof e != "number" ? k1(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Ps(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function $d(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = Tn(t)
      , s = su(t)
      , l = iu(s)
      , c = Kt(t)
      , u = i === "y"
      , f = r.x + r.width / 2 - o.width / 2
      , m = r.y + r.height / 2 - o.height / 2
      , d = r[l] / 2 - o[l] / 2;
    let y;
    switch (c) {
    case "top":
        y = {
            x: f,
            y: r.y - o.height
        };
        break;
    case "bottom":
        y = {
            x: f,
            y: r.y + r.height
        };
        break;
    case "right":
        y = {
            x: r.x + r.width,
            y: m
        };
        break;
    case "left":
        y = {
            x: r.x - o.width,
            y: m
        };
        break;
    default:
        y = {
            x: r.x,
            y: r.y
        }
    }
    switch (ro(t)) {
    case "start":
        y[s] -= d * (n && u ? -1 : 1);
        break;
    case "end":
        y[s] += d * (n && u ? -1 : 1);
        break
    }
    return y
}
const j1 = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , l = i.filter(Boolean)
      , c = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: f, y: m} = $d(u, r, c)
      , d = r
      , y = {}
      , w = 0;
    for (let g = 0; g < l.length; g++) {
        const {name: b, fn: h} = l[g]
          , {x: p, y: v, data: S, reset: C} = await h({
            x: f,
            y: m,
            initialPlacement: r,
            placement: d,
            strategy: o,
            middlewareData: y,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        f = p ?? f,
        m = v ?? m,
        y = {
            ...y,
            [b]: {
                ...y[b],
                ...S
            }
        },
        C && w <= 50 && (w++,
        typeof C == "object" && (C.placement && (d = C.placement),
        C.rects && (u = C.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: f, y: m} = $d(u, d, c)),
        g = -1)
    }
    return {
        x: f,
        y: m,
        placement: d,
        strategy: o,
        middlewareData: y
    }
}
;
async function Xo(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: l, strategy: c} = e
      , {boundary: u="clippingAncestors", rootBoundary: f="viewport", elementContext: m="floating", altBoundary: d=!1, padding: y=0} = Qt(t, e)
      , w = Ph(y)
      , b = l[d ? m === "floating" ? "reference" : "floating" : m]
      , h = Ps(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: f,
        strategy: c
    }))
      , p = m === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating))
      , S = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = Ps(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: p,
        offsetParent: v,
        strategy: c
    }) : p);
    return {
        top: (h.top - C.top + w.top) / S.y,
        bottom: (C.bottom - h.bottom + w.bottom) / S.y,
        left: (h.left - C.left + w.left) / S.x,
        right: (C.right - h.right + w.right) / S.x
    }
}
const P1 = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: c} = t
          , {element: u, padding: f=0} = Qt(e, t) || {};
        if (u == null)
            return {};
        const m = Ph(f)
          , d = {
            x: n,
            y: r
        }
          , y = su(o)
          , w = iu(y)
          , g = await s.getDimensions(u)
          , b = y === "y"
          , h = b ? "top" : "left"
          , p = b ? "bottom" : "right"
          , v = b ? "clientHeight" : "clientWidth"
          , S = i.reference[w] + i.reference[y] - d[y] - i.floating[w]
          , C = d[y] - i.reference[y]
          , N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let k = N ? N[v] : 0;
        (!k || !await (s.isElement == null ? void 0 : s.isElement(N))) && (k = l.floating[v] || i.floating[w]);
        const P = S / 2 - C / 2
          , L = k / 2 - g[w] / 2 - 1
          , O = Rn(m[h], L)
          , V = Rn(m[p], L)
          , I = O
          , H = k - g[w] - V
          , T = k / 2 - g[w] / 2 + P
          , W = Qa(I, T, H)
          , U = !c.arrow && ro(o) != null && T !== W && i.reference[w] / 2 - (T < I ? O : V) - g[w] / 2 < 0
          , Q = U ? T < I ? T - I : T - H : 0;
        return {
            [y]: d[y] + Q,
            data: {
                [y]: W,
                centerOffset: T - W - Q,
                ...U && {
                    alignmentOffset: Q
                }
            },
            reset: U
        }
    }
})
  , D1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: l, platform: c, elements: u} = t
              , {mainAxis: f=!0, crossAxis: m=!0, fallbackPlacements: d, fallbackStrategy: y="bestFit", fallbackAxisSideDirection: w="none", flipAlignment: g=!0, ...b} = Qt(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const h = Kt(o)
              , p = Tn(l)
              , v = Kt(l) === l
              , S = await (c.isRTL == null ? void 0 : c.isRTL(u.floating))
              , C = d || (v || !g ? [js(l)] : C1(l))
              , N = w !== "none";
            !d && N && C.push(...N1(l, g, w, S));
            const k = [l, ...C]
              , P = await Xo(t, b)
              , L = [];
            let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (f && L.push(P[h]),
            m) {
                const T = S1(o, s, S);
                L.push(P[T[0]], P[T[1]])
            }
            if (O = [...O, {
                placement: o,
                overflows: L
            }],
            !L.every(T => T <= 0)) {
                var V, I;
                const T = (((V = i.flip) == null ? void 0 : V.index) || 0) + 1
                  , W = k[T];
                if (W)
                    return {
                        data: {
                            index: T,
                            overflows: O
                        },
                        reset: {
                            placement: W
                        }
                    };
                let U = (I = O.filter(Q => Q.overflows[0] <= 0).sort( (Q, E) => Q.overflows[1] - E.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!U)
                    switch (y) {
                    case "bestFit":
                        {
                            var H;
                            const Q = (H = O.filter(E => {
                                if (N) {
                                    const M = Tn(E.placement);
                                    return M === p || M === "y"
                                }
                                return !0
                            }
                            ).map(E => [E.placement, E.overflows.filter(M => M > 0).reduce( (M, B) => M + B, 0)]).sort( (E, M) => E[1] - M[1])[0]) == null ? void 0 : H[0];
                            Q && (U = Q);
                            break
                        }
                    case "initialPlacement":
                        U = l;
                        break
                    }
                if (o !== U)
                    return {
                        reset: {
                            placement: U
                        }
                    }
            }
            return {}
        }
    }
};
function Gd(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Hd(e) {
    return x1.some(t => e[t] >= 0)
}
const M1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = Qt(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await Xo(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , s = Gd(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: Hd(s)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await Xo(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , s = Gd(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: Hd(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function R1(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = Kt(n)
      , l = ro(n)
      , c = Tn(n) === "y"
      , u = ["left", "top"].includes(s) ? -1 : 1
      , f = i && c ? -1 : 1
      , m = Qt(t, e);
    let {mainAxis: d, crossAxis: y, alignmentAxis: w} = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: m.mainAxis || 0,
        crossAxis: m.crossAxis || 0,
        alignmentAxis: m.alignmentAxis
    };
    return l && typeof w == "number" && (y = l === "end" ? w * -1 : w),
    c ? {
        x: y * f,
        y: d * u
    } : {
        x: d * u,
        y: y * f
    }
}
const O1 = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: l} = t
              , c = await R1(t, e);
            return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                x: o + c.x,
                y: i + c.y,
                data: {
                    ...c,
                    placement: s
                }
            }
        }
    }
}
  , T1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: l={
                fn: b => {
                    let {x: h, y: p} = b;
                    return {
                        x: h,
                        y: p
                    }
                }
            }, ...c} = Qt(e, t)
              , u = {
                x: n,
                y: r
            }
              , f = await Xo(t, c)
              , m = Tn(Kt(o))
              , d = ou(m);
            let y = u[d]
              , w = u[m];
            if (i) {
                const b = d === "y" ? "top" : "left"
                  , h = d === "y" ? "bottom" : "right"
                  , p = y + f[b]
                  , v = y - f[h];
                y = Qa(p, y, v)
            }
            if (s) {
                const b = m === "y" ? "top" : "left"
                  , h = m === "y" ? "bottom" : "right"
                  , p = w + f[b]
                  , v = w - f[h];
                w = Qa(p, w, v)
            }
            const g = l.fn({
                ...t,
                [d]: y,
                [m]: w
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                        [d]: i,
                        [m]: s
                    }
                }
            }
        }
    }
}
  , A1 = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t
              , {offset: l=0, mainAxis: c=!0, crossAxis: u=!0} = Qt(e, t)
              , f = {
                x: n,
                y: r
            }
              , m = Tn(o)
              , d = ou(m);
            let y = f[d]
              , w = f[m];
            const g = Qt(l, t)
              , b = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (c) {
                const v = d === "y" ? "height" : "width"
                  , S = i.reference[d] - i.floating[v] + b.mainAxis
                  , C = i.reference[d] + i.reference[v] - b.mainAxis;
                y < S ? y = S : y > C && (y = C)
            }
            if (u) {
                var h, p;
                const v = d === "y" ? "width" : "height"
                  , S = ["top", "left"].includes(Kt(o))
                  , C = i.reference[m] - i.floating[v] + (S && ((h = s.offset) == null ? void 0 : h[m]) || 0) + (S ? 0 : b.crossAxis)
                  , N = i.reference[m] + i.reference[v] + (S ? 0 : ((p = s.offset) == null ? void 0 : p[m]) || 0) - (S ? b.crossAxis : 0);
                w < C ? w = C : w > N && (w = N)
            }
            return {
                [d]: y,
                [m]: w
            }
        }
    }
}
  , _1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: l} = t
              , {apply: c= () => {}
            , ...u} = Qt(e, t)
              , f = await Xo(t, u)
              , m = Kt(o)
              , d = ro(o)
              , y = Tn(o) === "y"
              , {width: w, height: g} = i.floating;
            let b, h;
            m === "top" || m === "bottom" ? (b = m,
            h = d === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (h = m,
            b = d === "end" ? "top" : "bottom");
            const p = g - f.top - f.bottom
              , v = w - f.left - f.right
              , S = Rn(g - f[b], p)
              , C = Rn(w - f[h], v)
              , N = !t.middlewareData.shift;
            let k = S
              , P = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = p),
            N && !d) {
                const O = Ye(f.left, 0)
                  , V = Ye(f.right, 0)
                  , I = Ye(f.top, 0)
                  , H = Ye(f.bottom, 0);
                y ? P = w - 2 * (O !== 0 || V !== 0 ? O + V : Ye(f.left, f.right)) : k = g - 2 * (I !== 0 || H !== 0 ? I + H : Ye(f.top, f.bottom))
            }
            await c({
                ...t,
                availableWidth: P,
                availableHeight: k
            });
            const L = await s.getDimensions(l.floating);
            return w !== L.width || g !== L.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function el() {
    return typeof window < "u"
}
function oo(e) {
    return Dh(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Ze(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function At(e) {
    var t;
    return (t = (Dh(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Dh(e) {
    return el() ? e instanceof Node || e instanceof Ze(e).Node : !1
}
function wt(e) {
    return el() ? e instanceof Element || e instanceof Ze(e).Element : !1
}
function Tt(e) {
    return el() ? e instanceof HTMLElement || e instanceof Ze(e).HTMLElement : !1
}
function Wd(e) {
    return !el() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot
}
function di(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = bt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function L1(e) {
    return ["table", "td", "th"].includes(oo(e))
}
function tl(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function lu(e) {
    const t = au()
      , n = wt(e) ? bt(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function I1(e) {
    let t = An(e);
    for (; Tt(t) && !Xr(t); ) {
        if (lu(t))
            return t;
        if (tl(t))
            return null;
        t = An(t)
    }
    return null
}
function au() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Xr(e) {
    return ["html", "body", "#document"].includes(oo(e))
}
function bt(e) {
    return Ze(e).getComputedStyle(e)
}
function nl(e) {
    return wt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function An(e) {
    if (oo(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Wd(e) && e.host || At(e);
    return Wd(t) ? t.host : t
}
function Mh(e) {
    const t = An(e);
    return Xr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Tt(t) && di(t) ? t : Mh(t)
}
function Zo(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Mh(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = Ze(o);
    if (i) {
        const l = Ya(s);
        return t.concat(s, s.visualViewport || [], di(o) ? o : [], l && n ? Zo(l) : [])
    }
    return t.concat(o, Zo(o, [], n))
}
function Ya(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Rh(e) {
    const t = bt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = Tt(e)
      , i = o ? e.offsetWidth : n
      , s = o ? e.offsetHeight : r
      , l = ks(n) !== i || ks(r) !== s;
    return l && (n = i,
    r = s),
    {
        width: n,
        height: r,
        $: l
    }
}
function cu(e) {
    return wt(e) ? e : e.contextElement
}
function Tr(e) {
    const t = cu(e);
    if (!Tt(t))
        return On(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = Rh(t);
    let s = (i ? ks(n.width) : n.width) / r
      , l = (i ? ks(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
        x: s,
        y: l
    }
}
const B1 = On(0);
function Oh(e) {
    const t = Ze(e);
    return !au() || !t.visualViewport ? B1 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function z1(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Ze(e) ? !1 : t
}
function nr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = cu(e);
    let s = On(1);
    t && (r ? wt(r) && (s = Tr(r)) : s = Tr(e));
    const l = z1(i, n, r) ? Oh(i) : On(0);
    let c = (o.left + l.x) / s.x
      , u = (o.top + l.y) / s.y
      , f = o.width / s.x
      , m = o.height / s.y;
    if (i) {
        const d = Ze(i)
          , y = r && wt(r) ? Ze(r) : r;
        let w = d
          , g = Ya(w);
        for (; g && r && y !== w; ) {
            const b = Tr(g)
              , h = g.getBoundingClientRect()
              , p = bt(g)
              , v = h.left + (g.clientLeft + parseFloat(p.paddingLeft)) * b.x
              , S = h.top + (g.clientTop + parseFloat(p.paddingTop)) * b.y;
            c *= b.x,
            u *= b.y,
            f *= b.x,
            m *= b.y,
            c += v,
            u += S,
            w = Ze(g),
            g = Ya(w)
        }
    }
    return Ps({
        width: f,
        height: m,
        x: c,
        y: u
    })
}
function V1(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , s = At(r)
      , l = t ? tl(t.floating) : !1;
    if (r === s || l && i)
        return n;
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = On(1);
    const f = On(0)
      , m = Tt(r);
    if ((m || !m && !i) && ((oo(r) !== "body" || di(s)) && (c = nl(r)),
    Tt(r))) {
        const d = nr(r);
        u = Tr(r),
        f.x = d.x + r.clientLeft,
        f.y = d.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - c.scrollLeft * u.x + f.x,
        y: n.y * u.y - c.scrollTop * u.y + f.y
    }
}
function U1(e) {
    return Array.from(e.getClientRects())
}
function qa(e, t) {
    const n = nl(e).scrollLeft;
    return t ? t.left + n : nr(At(e)).left + n
}
function F1(e) {
    const t = At(e)
      , n = nl(e)
      , r = e.ownerDocument.body
      , o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + qa(e);
    const l = -n.scrollTop;
    return bt(r).direction === "rtl" && (s += Ye(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: s,
        y: l
    }
}
function $1(e, t) {
    const n = Ze(e)
      , r = At(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , s = r.clientHeight
      , l = 0
      , c = 0;
    if (o) {
        i = o.width,
        s = o.height;
        const u = au();
        (!u || u && t === "fixed") && (l = o.offsetLeft,
        c = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l,
        y: c
    }
}
function G1(e, t) {
    const n = nr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = Tt(e) ? Tr(e) : On(1)
      , s = e.clientWidth * i.x
      , l = e.clientHeight * i.y
      , c = o * i.x
      , u = r * i.y;
    return {
        width: s,
        height: l,
        x: c,
        y: u
    }
}
function Qd(e, t, n) {
    let r;
    if (t === "viewport")
        r = $1(e, n);
    else if (t === "document")
        r = F1(At(e));
    else if (wt(t))
        r = G1(t, n);
    else {
        const o = Oh(e);
        r = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return Ps(r)
}
function Th(e, t) {
    const n = An(e);
    return n === t || !wt(n) || Xr(n) ? !1 : bt(n).position === "fixed" || Th(n, t)
}
function H1(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Zo(e, [], !1).filter(l => wt(l) && oo(l) !== "body")
      , o = null;
    const i = bt(e).position === "fixed";
    let s = i ? An(e) : e;
    for (; wt(s) && !Xr(s); ) {
        const l = bt(s)
          , c = lu(s);
        !c && l.position === "fixed" && (o = null),
        (i ? !c && !o : !c && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || di(s) && !c && Th(e, s)) ? r = r.filter(f => f !== s) : o = l,
        s = An(s)
    }
    return t.set(e, r),
    r
}
function W1(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? tl(t) ? [] : H1(t, this._c) : [].concat(n), r]
      , l = s[0]
      , c = s.reduce( (u, f) => {
        const m = Qd(t, f, o);
        return u.top = Ye(m.top, u.top),
        u.right = Rn(m.right, u.right),
        u.bottom = Rn(m.bottom, u.bottom),
        u.left = Ye(m.left, u.left),
        u
    }
    , Qd(t, l, o));
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
    }
}
function Q1(e) {
    const {width: t, height: n} = Rh(e);
    return {
        width: t,
        height: n
    }
}
function K1(e, t, n) {
    const r = Tt(t)
      , o = At(t)
      , i = n === "fixed"
      , s = nr(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = On(0);
    if (r || !r && !i)
        if ((oo(t) !== "body" || di(o)) && (l = nl(t)),
        r) {
            const y = nr(t, !0, i, t);
            c.x = y.x + t.clientLeft,
            c.y = y.y + t.clientTop
        } else
            o && (c.x = qa(o));
    let u = 0
      , f = 0;
    if (o && !r && !i) {
        const y = o.getBoundingClientRect();
        f = y.top + l.scrollTop,
        u = y.left + l.scrollLeft - qa(o, y)
    }
    const m = s.left + l.scrollLeft - c.x - u
      , d = s.top + l.scrollTop - c.y - f;
    return {
        x: m,
        y: d,
        width: s.width,
        height: s.height
    }
}
function Gl(e) {
    return bt(e).position === "static"
}
function Kd(e, t) {
    if (!Tt(e) || bt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return At(e) === n && (n = n.ownerDocument.body),
    n
}
function Ah(e, t) {
    const n = Ze(e);
    if (tl(e))
        return n;
    if (!Tt(e)) {
        let o = An(e);
        for (; o && !Xr(o); ) {
            if (wt(o) && !Gl(o))
                return o;
            o = An(o)
        }
        return n
    }
    let r = Kd(e, t);
    for (; r && L1(r) && Gl(r); )
        r = Kd(r, t);
    return r && Xr(r) && Gl(r) && !lu(r) ? n : r || I1(e) || n
}
const Y1 = async function(e) {
    const t = this.getOffsetParent || Ah
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: K1(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function q1(e) {
    return bt(e).direction === "rtl"
}
const X1 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: V1,
    getDocumentElement: At,
    getClippingRect: W1,
    getOffsetParent: Ah,
    getElementRects: Y1,
    getClientRects: U1,
    getDimensions: Q1,
    getScale: Tr,
    isElement: wt,
    isRTL: q1
};
function Z1(e, t) {
    let n = null, r;
    const o = At(e);
    function i() {
        var l;
        clearTimeout(r),
        (l = n) == null || l.disconnect(),
        n = null
    }
    function s(l, c) {
        l === void 0 && (l = !1),
        c === void 0 && (c = 1),
        i();
        const {left: u, top: f, width: m, height: d} = e.getBoundingClientRect();
        if (l || t(),
        !m || !d)
            return;
        const y = zi(f)
          , w = zi(o.clientWidth - (u + m))
          , g = zi(o.clientHeight - (f + d))
          , b = zi(u)
          , p = {
            rootMargin: -y + "px " + -w + "px " + -g + "px " + -b + "px",
            threshold: Ye(0, Rn(1, c)) || 1
        };
        let v = !0;
        function S(C) {
            const N = C[0].intersectionRatio;
            if (N !== c) {
                if (!v)
                    return s();
                N ? s(!1, N) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            v = !1
        }
        try {
            n = new IntersectionObserver(S,{
                ...p,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(S,p)
        }
        n.observe(e)
    }
    return s(!0),
    i
}
function J1(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: c=!1} = r
      , u = cu(e)
      , f = o || i ? [...u ? Zo(u) : [], ...Zo(t)] : [];
    f.forEach(h => {
        o && h.addEventListener("scroll", n, {
            passive: !0
        }),
        i && h.addEventListener("resize", n)
    }
    );
    const m = u && l ? Z1(u, n) : null;
    let d = -1
      , y = null;
    s && (y = new ResizeObserver(h => {
        let[p] = h;
        p && p.target === u && y && (y.unobserve(t),
        cancelAnimationFrame(d),
        d = requestAnimationFrame( () => {
            var v;
            (v = y) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    u && !c && y.observe(u),
    y.observe(t));
    let w, g = c ? nr(e) : null;
    c && b();
    function b() {
        const h = nr(e);
        g && (h.x !== g.x || h.y !== g.y || h.width !== g.width || h.height !== g.height) && n(),
        g = h,
        w = requestAnimationFrame(b)
    }
    return n(),
    () => {
        var h;
        f.forEach(p => {
            o && p.removeEventListener("scroll", n),
            i && p.removeEventListener("resize", n)
        }
        ),
        m == null || m(),
        (h = y) == null || h.disconnect(),
        y = null,
        c && cancelAnimationFrame(w)
    }
}
const ew = O1
  , tw = T1
  , nw = D1
  , rw = _1
  , ow = M1
  , Yd = P1
  , iw = A1
  , sw = (e, t, n) => {
    const r = new Map
      , o = {
        platform: X1,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return j1(e, t, {
        ...o,
        platform: i
    })
}
;
var ts = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function Ds(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Ds(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Ds(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function _h(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function qd(e, t) {
    const n = _h(e);
    return Math.round(t * n) / n
}
function Hl(e) {
    const t = x.useRef(e);
    return ts( () => {
        t.current = e
    }
    ),
    t
}
function lw(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: s}={}, transform: l=!0, whileElementsMounted: c, open: u} = e
      , [f,m] = x.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [d,y] = x.useState(r);
    Ds(d, r) || y(r);
    const [w,g] = x.useState(null)
      , [b,h] = x.useState(null)
      , p = x.useCallback(E => {
        E !== N.current && (N.current = E,
        g(E))
    }
    , [])
      , v = x.useCallback(E => {
        E !== k.current && (k.current = E,
        h(E))
    }
    , [])
      , S = i || w
      , C = s || b
      , N = x.useRef(null)
      , k = x.useRef(null)
      , P = x.useRef(f)
      , L = c != null
      , O = Hl(c)
      , V = Hl(o)
      , I = Hl(u)
      , H = x.useCallback( () => {
        if (!N.current || !k.current)
            return;
        const E = {
            placement: t,
            strategy: n,
            middleware: d
        };
        V.current && (E.platform = V.current),
        sw(N.current, k.current, E).then(M => {
            const B = {
                ...M,
                isPositioned: I.current !== !1
            };
            T.current && !Ds(P.current, B) && (P.current = B,
            ui.flushSync( () => {
                m(B)
            }
            ))
        }
        )
    }
    , [d, t, n, V, I]);
    ts( () => {
        u === !1 && P.current.isPositioned && (P.current.isPositioned = !1,
        m(E => ({
            ...E,
            isPositioned: !1
        })))
    }
    , [u]);
    const T = x.useRef(!1);
    ts( () => (T.current = !0,
    () => {
        T.current = !1
    }
    ), []),
    ts( () => {
        if (S && (N.current = S),
        C && (k.current = C),
        S && C) {
            if (O.current)
                return O.current(S, C, H);
            H()
        }
    }
    , [S, C, H, O, L]);
    const W = x.useMemo( () => ({
        reference: N,
        floating: k,
        setReference: p,
        setFloating: v
    }), [p, v])
      , U = x.useMemo( () => ({
        reference: S,
        floating: C
    }), [S, C])
      , Q = x.useMemo( () => {
        const E = {
            position: n,
            left: 0,
            top: 0
        };
        if (!U.floating)
            return E;
        const M = qd(U.floating, f.x)
          , B = qd(U.floating, f.y);
        return l ? {
            ...E,
            transform: "translate(" + M + "px, " + B + "px)",
            ..._h(U.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: M,
            top: B
        }
    }
    , [n, l, U.floating, f.x, f.y]);
    return x.useMemo( () => ({
        ...f,
        update: H,
        refs: W,
        elements: U,
        floatingStyles: Q
    }), [f, H, W, U, Q])
}
const aw = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Yd({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Yd({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , cw = (e, t) => ({
    ...ew(e),
    options: [e, t]
})
  , uw = (e, t) => ({
    ...tw(e),
    options: [e, t]
})
  , dw = (e, t) => ({
    ...iw(e),
    options: [e, t]
})
  , fw = (e, t) => ({
    ...nw(e),
    options: [e, t]
})
  , mw = (e, t) => ({
    ...rw(e),
    options: [e, t]
})
  , pw = (e, t) => ({
    ...ow(e),
    options: [e, t]
})
  , hw = (e, t) => ({
    ...aw(e),
    options: [e, t]
});
var gw = "Arrow"
  , Lh = x.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return a.jsx(Ge.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : a.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Lh.displayName = gw;
var vw = Lh;
function yw(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = x.createContext(s)
          , c = n.length;
        n = [...n, s];
        function u(m) {
            const {scope: d, children: y, ...w} = m
              , g = (d == null ? void 0 : d[e][c]) || l
              , b = x.useMemo( () => w, Object.values(w));
            return a.jsx(g.Provider, {
                value: b,
                children: y
            })
        }
        function f(m, d) {
            const y = (d == null ? void 0 : d[e][c]) || l
              , w = x.useContext(y);
            if (w)
                return w;
            if (s !== void 0)
                return s;
            throw new Error(`\`${m}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider",
        [u, f]
    }
    const o = () => {
        const i = n.map(s => x.createContext(s));
        return function(l) {
            const c = (l == null ? void 0 : l[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: c
                }
            }), [l, c])
        }
    }
    ;
    return o.scopeName = e,
    [r, xw(o, ...t)]
}
function xw(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: c, scopeName: u}) => {
                const m = c(i)[`__scope${u}`];
                return {
                    ...l,
                    ...m
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function ww(e) {
    const [t,n] = x.useState(void 0);
    return tr( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let s, l;
                if ("borderBoxSize"in i) {
                    const c = i.borderBoxSize
                      , u = Array.isArray(c) ? c[0] : c;
                    s = u.inlineSize,
                    l = u.blockSize
                } else
                    s = e.offsetWidth,
                    l = e.offsetHeight;
                n({
                    width: s,
                    height: l
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Ih = "Popper"
  , [Bh,zh] = yw(Ih)
  , [TS,Vh] = Bh(Ih)
  , Uh = "PopperAnchor"
  , Fh = x.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = Vh(Uh, n)
      , s = x.useRef(null)
      , l = xt(t, s);
    return x.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : a.jsx(Ge.div, {
        ...o,
        ref: l
    })
}
);
Fh.displayName = Uh;
var uu = "PopperContent"
  , [bw,Sw] = Bh(uu)
  , $h = x.forwardRef( (e, t) => {
    var ct, Zt, Jt, en, pi, cr;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: s=0, arrowPadding: l=0, avoidCollisions: c=!0, collisionBoundary: u=[], collisionPadding: f=0, sticky: m="partial", hideWhenDetached: d=!1, updatePositionStrategy: y="optimized", onPlaced: w, ...g} = e
      , b = Vh(uu, n)
      , [h,p] = x.useState(null)
      , v = xt(t, Bn => p(Bn))
      , [S,C] = x.useState(null)
      , N = ww(S)
      , k = (N == null ? void 0 : N.width) ?? 0
      , P = (N == null ? void 0 : N.height) ?? 0
      , L = r + (i !== "center" ? "-" + i : "")
      , O = typeof f == "number" ? f : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...f
    }
      , V = Array.isArray(u) ? u : [u]
      , I = V.length > 0
      , H = {
        padding: O,
        boundary: V.filter(Ew),
        altBoundary: I
    }
      , {refs: T, floatingStyles: W, placement: U, isPositioned: Q, middlewareData: E} = lw({
        strategy: "fixed",
        placement: L,
        whileElementsMounted: (...Bn) => J1(...Bn, {
            animationFrame: y === "always"
        }),
        elements: {
            reference: b.anchor
        },
        middleware: [cw({
            mainAxis: o + P,
            alignmentAxis: s
        }), c && uw({
            mainAxis: !0,
            crossAxis: !1,
            limiter: m === "partial" ? dw() : void 0,
            ...H
        }), c && fw({
            ...H
        }), mw({
            ...H,
            apply: ({elements: Bn, rects: so, availableWidth: hi, availableHeight: tn}) => {
                const {width: al, height: cl} = so.reference
                  , Se = Bn.floating.style;
                Se.setProperty("--radix-popper-available-width", `${hi}px`),
                Se.setProperty("--radix-popper-available-height", `${tn}px`),
                Se.setProperty("--radix-popper-anchor-width", `${al}px`),
                Se.setProperty("--radix-popper-anchor-height", `${cl}px`)
            }
        }), S && hw({
            element: S,
            padding: l
        }), Nw({
            arrowWidth: k,
            arrowHeight: P
        }), d && pw({
            strategy: "referenceHidden",
            ...H
        })]
    })
      , [M,B] = Wh(U)
      , _ = Ot(w);
    tr( () => {
        Q && (_ == null || _())
    }
    , [Q, _]);
    const z = (ct = E.arrow) == null ? void 0 : ct.x
      , Y = (Zt = E.arrow) == null ? void 0 : Zt.y
      , le = ((Jt = E.arrow) == null ? void 0 : Jt.centerOffset) !== 0
      , [He,Z] = x.useState();
    return tr( () => {
        h && Z(window.getComputedStyle(h).zIndex)
    }
    , [h]),
    a.jsx("div", {
        ref: T.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...W,
            transform: Q ? W.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: He,
            "--radix-popper-transform-origin": [(en = E.transformOrigin) == null ? void 0 : en.x, (pi = E.transformOrigin) == null ? void 0 : pi.y].join(" "),
            ...((cr = E.hide) == null ? void 0 : cr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: a.jsx(bw, {
            scope: n,
            placedSide: M,
            onArrowChange: C,
            arrowX: z,
            arrowY: Y,
            shouldHideArrow: le,
            children: a.jsx(Ge.div, {
                "data-side": M,
                "data-align": B,
                ...g,
                ref: v,
                style: {
                    ...g.style,
                    animation: Q ? void 0 : "none"
                }
            })
        })
    })
}
);
$h.displayName = uu;
var Gh = "PopperArrow"
  , Cw = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Hh = x.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = Sw(Gh, r)
      , s = Cw[i.placedSide];
    return a.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: a.jsx(vw, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
Hh.displayName = Gh;
function Ew(e) {
    return e !== null
}
var Nw = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var b, h, p;
        const {placement: n, rects: r, middlewareData: o} = t
          , s = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0
          , l = s ? 0 : e.arrowWidth
          , c = s ? 0 : e.arrowHeight
          , [u,f] = Wh(n)
          , m = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[f]
          , d = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + l / 2
          , y = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + c / 2;
        let w = ""
          , g = "";
        return u === "bottom" ? (w = s ? m : `${d}px`,
        g = `${-c}px`) : u === "top" ? (w = s ? m : `${d}px`,
        g = `${r.floating.height + c}px`) : u === "right" ? (w = `${-c}px`,
        g = s ? m : `${y}px`) : u === "left" && (w = `${r.floating.width + c}px`,
        g = s ? m : `${y}px`),
        {
            data: {
                x: w,
                y: g
            }
        }
    }
});
function Wh(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var kw = Fh
  , jw = $h
  , Pw = Hh
  , [rl,AS] = zp("Tooltip", [zh])
  , du = zh()
  , Qh = "TooltipProvider"
  , Dw = 700
  , Xd = "tooltip.open"
  , [Mw,Kh] = rl(Qh)
  , Yh = e => {
    const {__scopeTooltip: t, delayDuration: n=Dw, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , [s,l] = x.useState(!0)
      , c = x.useRef(!1)
      , u = x.useRef(0);
    return x.useEffect( () => {
        const f = u.current;
        return () => window.clearTimeout(f)
    }
    , []),
    a.jsx(Mw, {
        scope: t,
        isOpenDelayed: s,
        delayDuration: n,
        onOpen: x.useCallback( () => {
            window.clearTimeout(u.current),
            l(!1)
        }
        , []),
        onClose: x.useCallback( () => {
            window.clearTimeout(u.current),
            u.current = window.setTimeout( () => l(!0), r)
        }
        , [r]),
        isPointerInTransitRef: c,
        onPointerInTransitChange: x.useCallback(f => {
            c.current = f
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
Yh.displayName = Qh;
var qh = "Tooltip"
  , [_S,ol] = rl(qh)
  , Xa = "TooltipTrigger"
  , Rw = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = ol(Xa, n)
      , i = Kh(Xa, n)
      , s = du(n)
      , l = x.useRef(null)
      , c = xt(t, l, o.onTriggerChange)
      , u = x.useRef(!1)
      , f = x.useRef(!1)
      , m = x.useCallback( () => u.current = !1, []);
    return x.useEffect( () => () => document.removeEventListener("pointerup", m), [m]),
    a.jsx(kw, {
        asChild: !0,
        ...s,
        children: a.jsx(Ge.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: c,
            onPointerMove: ye(e.onPointerMove, d => {
                d.pointerType !== "touch" && !f.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                f.current = !0)
            }
            ),
            onPointerLeave: ye(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                f.current = !1
            }
            ),
            onPointerDown: ye(e.onPointerDown, () => {
                u.current = !0,
                document.addEventListener("pointerup", m, {
                    once: !0
                })
            }
            ),
            onFocus: ye(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: ye(e.onBlur, o.onClose),
            onClick: ye(e.onClick, o.onClose)
        })
    })
}
);
Rw.displayName = Xa;
var Ow = "TooltipPortal"
  , [LS,Tw] = rl(Ow, {
    forceMount: void 0
})
  , Zr = "TooltipContent"
  , Xh = x.forwardRef( (e, t) => {
    const n = Tw(Zr, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , s = ol(Zr, e.__scopeTooltip);
    return a.jsx(Xc, {
        present: r || s.open,
        children: s.disableHoverableContent ? a.jsx(Zh, {
            side: o,
            ...i,
            ref: t
        }) : a.jsx(Aw, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , Aw = x.forwardRef( (e, t) => {
    const n = ol(Zr, e.__scopeTooltip)
      , r = Kh(Zr, e.__scopeTooltip)
      , o = x.useRef(null)
      , i = xt(t, o)
      , [s,l] = x.useState(null)
      , {trigger: c, onClose: u} = n
      , f = o.current
      , {onPointerInTransitChange: m} = r
      , d = x.useCallback( () => {
        l(null),
        m(!1)
    }
    , [m])
      , y = x.useCallback( (w, g) => {
        const b = w.currentTarget
          , h = {
            x: w.clientX,
            y: w.clientY
        }
          , p = Bw(h, b.getBoundingClientRect())
          , v = zw(h, p)
          , S = Vw(g.getBoundingClientRect())
          , C = Fw([...v, ...S]);
        l(C),
        m(!0)
    }
    , [m]);
    return x.useEffect( () => () => d(), [d]),
    x.useEffect( () => {
        if (c && f) {
            const w = b => y(b, f)
              , g = b => y(b, c);
            return c.addEventListener("pointerleave", w),
            f.addEventListener("pointerleave", g),
            () => {
                c.removeEventListener("pointerleave", w),
                f.removeEventListener("pointerleave", g)
            }
        }
    }
    , [c, f, y, d]),
    x.useEffect( () => {
        if (s) {
            const w = g => {
                const b = g.target
                  , h = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , p = (c == null ? void 0 : c.contains(b)) || (f == null ? void 0 : f.contains(b))
                  , v = !Uw(h, s);
                p ? d() : v && (d(),
                u())
            }
            ;
            return document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
        }
    }
    , [c, f, s, u, d]),
    a.jsx(Zh, {
        ...e,
        ref: i
    })
}
)
  , [_w,Lw] = rl(qh, {
    isInside: !1
})
  , Zh = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...l} = e
      , c = ol(Zr, n)
      , u = du(n)
      , {onClose: f} = c;
    return x.useEffect( () => (document.addEventListener(Xd, f),
    () => document.removeEventListener(Xd, f)), [f]),
    x.useEffect( () => {
        if (c.trigger) {
            const m = d => {
                const y = d.target;
                y != null && y.contains(c.trigger) && f()
            }
            ;
            return window.addEventListener("scroll", m, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", m, {
                capture: !0
            })
        }
    }
    , [c.trigger, f]),
    a.jsx(qc, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: m => m.preventDefault(),
        onDismiss: f,
        children: a.jsxs(jw, {
            "data-state": c.stateAttribute,
            ...u,
            ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [a.jsx(Bp, {
                children: r
            }), a.jsx(_w, {
                scope: n,
                isInside: !0,
                children: a.jsx(R0, {
                    id: c.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
Xh.displayName = Zr;
var Jh = "TooltipArrow"
  , Iw = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = du(n);
    return Lw(Jh, n).isInside ? null : a.jsx(Pw, {
        ...o,
        ...r,
        ref: t
    })
}
);
Iw.displayName = Jh;
function Bw(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function zw(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function Vw(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function Uw(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i].x
          , c = t[i].y
          , u = t[s].x
          , f = t[s].y;
        c > r != f > r && n < (u - l) * (r - c) / (f - c) + l && (o = !o)
    }
    return o
}
function Fw(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    $w(t)
}
function $w(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var Gw = Yh
  , eg = Xh;
const Hw = Gw
  , Ww = x.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => a.jsx(eg, {
    ref: r,
    sideOffset: t,
    className: qt("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
Ww.displayName = eg.displayName;
var il = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , sl = typeof window > "u" || "Deno"in globalThis;
function ft() {}
function Qw(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Kw(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function Yw(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Zd(e, t) {
    return typeof e == "function" ? e(t) : e
}
function qw(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Jd(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: l} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== fu(s, t.options))
                return !1
        } else if (!ei(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const c = t.isActive();
        if (n === "active" && !c || n === "inactive" && c)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}
function ef(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Jo(t.options.mutationKey) !== Jo(i))
                return !1
        } else if (!ei(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function fu(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Jo)(e)
}
function Jo(e) {
    return JSON.stringify(e, (t, n) => Za(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function ei(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !ei(e[n], t[n])) : !1
}
function tg(e, t) {
    if (e === t)
        return e;
    const n = tf(e) && tf(t);
    if (n || Za(e) && Za(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , i = n ? t : Object.keys(t)
          , s = i.length
          , l = n ? [] : {};
        let c = 0;
        for (let u = 0; u < s; u++) {
            const f = n ? u : i[u];
            (!n && r.includes(f) || n) && e[f] === void 0 && t[f] === void 0 ? (l[f] = void 0,
            c++) : (l[f] = tg(e[f], t[f]),
            l[f] === e[f] && e[f] !== void 0 && c++)
        }
        return o === s && c === o ? e : l
    }
    return t
}
function tf(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Za(e) {
    if (!nf(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!nf(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function nf(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function Xw(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function Zw(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? tg(e, t) : t
}
function Jw(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function eb(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var mu = Symbol();
function ng(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === mu ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Gn, fn, Ar, pf, tb = (pf = class extends il {
    constructor() {
        super();
        X(this, Gn);
        X(this, fn);
        X(this, Ar);
        G(this, Ar, t => {
            if (!sl && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        j(this, fn) || this.setEventListener(j(this, Ar))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = j(this, fn)) == null || t.call(this),
        G(this, fn, void 0))
    }
    setEventListener(t) {
        var n;
        G(this, Ar, t),
        (n = j(this, fn)) == null || n.call(this),
        G(this, fn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        j(this, Gn) !== t && (G(this, Gn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof j(this, Gn) == "boolean" ? j(this, Gn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Gn = new WeakMap,
fn = new WeakMap,
Ar = new WeakMap,
pf), rg = new tb, _r, mn, Lr, hf, nb = (hf = class extends il {
    constructor() {
        super();
        X(this, _r, !0);
        X(this, mn);
        X(this, Lr);
        G(this, Lr, t => {
            if (!sl && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        j(this, mn) || this.setEventListener(j(this, Lr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = j(this, mn)) == null || t.call(this),
        G(this, mn, void 0))
    }
    setEventListener(t) {
        var n;
        G(this, Lr, t),
        (n = j(this, mn)) == null || n.call(this),
        G(this, mn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        j(this, _r) !== t && (G(this, _r, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return j(this, _r)
    }
}
,
_r = new WeakMap,
mn = new WeakMap,
Lr = new WeakMap,
hf), Ms = new nb;
function rb() {
    let e, t;
    const n = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function ob(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function og(e) {
    return (e ?? "online") === "online" ? Ms.isOnline() : !0
}
var ig = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Wl(e) {
    return e instanceof ig
}
function sg(e) {
    let t = !1, n = 0, r = !1, o;
    const i = rb()
      , s = g => {
        var b;
        r || (d(new ig(g)),
        (b = e.abort) == null || b.call(e))
    }
      , l = () => {
        t = !0
    }
      , c = () => {
        t = !1
    }
      , u = () => rg.isFocused() && (e.networkMode === "always" || Ms.isOnline()) && e.canRun()
      , f = () => og(e.networkMode) && e.canRun()
      , m = g => {
        var b;
        r || (r = !0,
        (b = e.onSuccess) == null || b.call(e, g),
        o == null || o(),
        i.resolve(g))
    }
      , d = g => {
        var b;
        r || (r = !0,
        (b = e.onError) == null || b.call(e, g),
        o == null || o(),
        i.reject(g))
    }
      , y = () => new Promise(g => {
        var b;
        o = h => {
            (r || u()) && g(h)
        }
        ,
        (b = e.onPause) == null || b.call(e)
    }
    ).then( () => {
        var g;
        o = void 0,
        r || (g = e.onContinue) == null || g.call(e)
    }
    )
      , w = () => {
        if (r)
            return;
        let g;
        const b = n === 0 ? e.initialPromise : void 0;
        try {
            g = b ?? e.fn()
        } catch (h) {
            g = Promise.reject(h)
        }
        Promise.resolve(g).then(m).catch(h => {
            var N;
            if (r)
                return;
            const p = e.retry ?? (sl ? 0 : 3)
              , v = e.retryDelay ?? ob
              , S = typeof v == "function" ? v(n, h) : v
              , C = p === !0 || typeof p == "number" && n < p || typeof p == "function" && p(n, h);
            if (t || !C) {
                d(h);
                return
            }
            n++,
            (N = e.onFail) == null || N.call(e, n, h),
            Xw(S).then( () => u() ? void 0 : y()).then( () => {
                t ? d(h) : w()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(),
        i),
        cancelRetry: l,
        continueRetry: c,
        canStart: f,
        start: () => (f() ? w() : y().then(w),
        i)
    }
}
function ib() {
    let e = []
      , t = 0
      , n = l => {
        l()
    }
      , r = l => {
        l()
    }
      , o = l => setTimeout(l, 0);
    const i = l => {
        t ? e.push(l) : o( () => {
            n(l)
        }
        )
    }
      , s = () => {
        const l = e;
        e = [],
        l.length && o( () => {
            r( () => {
                l.forEach(c => {
                    n(c)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let c;
            t++;
            try {
                c = l()
            } finally {
                t--,
                t || s()
            }
            return c
        }
        ,
        batchCalls: l => (...c) => {
            i( () => {
                l(...c)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: l => {
            n = l
        }
        ,
        setBatchNotifyFunction: l => {
            r = l
        }
        ,
        setScheduler: l => {
            o = l
        }
    }
}
var _e = ib(), Hn, gf, lg = (gf = class {
    constructor() {
        X(this, Hn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Kw(this.gcTime) && G(this, Hn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (sl ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        j(this, Hn) && (clearTimeout(j(this, Hn)),
        G(this, Hn, void 0))
    }
}
,
Hn = new WeakMap,
gf), Ir, Br, nt, Me, ri, Wn, mt, Lt, vf, sb = (vf = class extends lg {
    constructor(t) {
        super();
        X(this, mt);
        X(this, Ir);
        X(this, Br);
        X(this, nt);
        X(this, Me);
        X(this, ri);
        X(this, Wn);
        G(this, Wn, !1),
        G(this, ri, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        G(this, nt, t.cache),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        G(this, Ir, ab(this.options)),
        this.state = t.state ?? j(this, Ir),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = j(this, Me)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...j(this, ri),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && j(this, nt).remove(this)
    }
    setData(t, n) {
        const r = Zw(this.state.data, t, this.options);
        return je(this, mt, Lt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        je(this, mt, Lt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = j(this, Me)) == null ? void 0 : r.promise;
        return (o = j(this, Me)) == null || o.cancel(t),
        n ? n.then(ft).catch(ft) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(j(this, Ir))
    }
    isActive() {
        return this.observers.some(t => qw(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === mu || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !Yw(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = j(this, Me)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = j(this, Me)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        j(this, nt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (j(this, Me) && (j(this, Wn) ? j(this, Me).cancel({
            revert: !0
        }) : j(this, Me).cancelRetry()),
        this.scheduleGc()),
        j(this, nt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || je(this, mt, Lt).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var c, u, f;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (j(this, Me))
                return j(this, Me).continueRetry(),
                j(this, Me).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const m = this.observers.find(d => d.options.queryFn);
            m && this.setOptions(m.options)
        }
        const r = new AbortController
          , o = m => {
            Object.defineProperty(m, "signal", {
                enumerable: !0,
                get: () => (G(this, Wn, !0),
                r.signal)
            })
        }
          , i = () => {
            const m = ng(this.options, n)
              , d = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return o(d),
            G(this, Wn, !1),
            this.options.persister ? this.options.persister(m, d, this) : m(d)
        }
          , s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i
        };
        o(s),
        (c = this.options.behavior) == null || c.onFetch(s, this),
        G(this, Br, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = s.fetchOptions) == null ? void 0 : u.meta)) && je(this, mt, Lt).call(this, {
            type: "fetch",
            meta: (f = s.fetchOptions) == null ? void 0 : f.meta
        });
        const l = m => {
            var d, y, w, g;
            Wl(m) && m.silent || je(this, mt, Lt).call(this, {
                type: "error",
                error: m
            }),
            Wl(m) || ((y = (d = j(this, nt).config).onError) == null || y.call(d, m, this),
            (g = (w = j(this, nt).config).onSettled) == null || g.call(w, this.state.data, m, this)),
            this.scheduleGc()
        }
        ;
        return G(this, Me, sg({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: s.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: m => {
                var d, y, w, g;
                if (m === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(m)
                } catch (b) {
                    l(b);
                    return
                }
                (y = (d = j(this, nt).config).onSuccess) == null || y.call(d, m, this),
                (g = (w = j(this, nt).config).onSettled) == null || g.call(w, m, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (m, d) => {
                je(this, mt, Lt).call(this, {
                    type: "failed",
                    failureCount: m,
                    error: d
                })
            }
            ,
            onPause: () => {
                je(this, mt, Lt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                je(this, mt, Lt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: s.options.retry,
            retryDelay: s.options.retryDelay,
            networkMode: s.options.networkMode,
            canRun: () => !0
        })),
        j(this, Me).start()
    }
}
,
Ir = new WeakMap,
Br = new WeakMap,
nt = new WeakMap,
Me = new WeakMap,
ri = new WeakMap,
Wn = new WeakMap,
mt = new WeakSet,
Lt = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...lb(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Wl(o) && o.revert && j(this, Br) ? {
                ...j(this, Br),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    _e.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        j(this, nt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
vf);
function lb(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: og(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function ab(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var kt, yf, cb = (yf = class extends il {
    constructor(t={}) {
        super();
        X(this, kt);
        this.config = t,
        G(this, kt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , i = n.queryHash ?? fu(o, n);
        let s = this.get(i);
        return s || (s = new sb({
            cache: this,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(s)),
        s
    }
    add(t) {
        j(this, kt).has(t.queryHash) || (j(this, kt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = j(this, kt).get(t.queryHash);
        n && (t.destroy(),
        n === t && j(this, kt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return j(this, kt).get(t)
    }
    getAll() {
        return [...j(this, kt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Jd(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Jd(t, r)) : n
    }
    notify(t) {
        _e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
kt = new WeakMap,
yf), jt, Te, Qn, Pt, ln, xf, ub = (xf = class extends lg {
    constructor(t) {
        super();
        X(this, Pt);
        X(this, jt);
        X(this, Te);
        X(this, Qn);
        this.mutationId = t.mutationId,
        G(this, Te, t.mutationCache),
        G(this, jt, []),
        this.state = t.state || db(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        j(this, jt).includes(t) || (j(this, jt).push(t),
        this.clearGcTimeout(),
        j(this, Te).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        G(this, jt, j(this, jt).filter(n => n !== t)),
        this.scheduleGc(),
        j(this, Te).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        j(this, jt).length || (this.state.status === "pending" ? this.scheduleGc() : j(this, Te).remove(this))
    }
    continue() {
        var t;
        return ((t = j(this, Qn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var o, i, s, l, c, u, f, m, d, y, w, g, b, h, p, v, S, C, N, k;
        G(this, Qn, sg({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (P, L) => {
                je(this, Pt, ln).call(this, {
                    type: "failed",
                    failureCount: P,
                    error: L
                })
            }
            ,
            onPause: () => {
                je(this, Pt, ln).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                je(this, Pt, ln).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => j(this, Te).canRun(this)
        }));
        const n = this.state.status === "pending"
          , r = !j(this, Qn).canStart();
        try {
            if (!n) {
                je(this, Pt, ln).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: r
                }),
                await ((i = (o = j(this, Te).config).onMutate) == null ? void 0 : i.call(o, t, this));
                const L = await ((l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t));
                L !== this.state.context && je(this, Pt, ln).call(this, {
                    type: "pending",
                    context: L,
                    variables: t,
                    isPaused: r
                })
            }
            const P = await j(this, Qn).start();
            return await ((u = (c = j(this, Te).config).onSuccess) == null ? void 0 : u.call(c, P, t, this.state.context, this)),
            await ((m = (f = this.options).onSuccess) == null ? void 0 : m.call(f, P, t, this.state.context)),
            await ((y = (d = j(this, Te).config).onSettled) == null ? void 0 : y.call(d, P, null, this.state.variables, this.state.context, this)),
            await ((g = (w = this.options).onSettled) == null ? void 0 : g.call(w, P, null, t, this.state.context)),
            je(this, Pt, ln).call(this, {
                type: "success",
                data: P
            }),
            P
        } catch (P) {
            try {
                throw await ((h = (b = j(this, Te).config).onError) == null ? void 0 : h.call(b, P, t, this.state.context, this)),
                await ((v = (p = this.options).onError) == null ? void 0 : v.call(p, P, t, this.state.context)),
                await ((C = (S = j(this, Te).config).onSettled) == null ? void 0 : C.call(S, void 0, P, this.state.variables, this.state.context, this)),
                await ((k = (N = this.options).onSettled) == null ? void 0 : k.call(N, void 0, P, t, this.state.context)),
                P
            } finally {
                je(this, Pt, ln).call(this, {
                    type: "error",
                    error: P
                })
            }
        } finally {
            j(this, Te).runNext(this)
        }
    }
}
,
jt = new WeakMap,
Te = new WeakMap,
Qn = new WeakMap,
Pt = new WeakSet,
ln = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    _e.batch( () => {
        j(this, jt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        j(this, Te).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
xf);
function db() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var We, oi, wf, fb = (wf = class extends il {
    constructor(t={}) {
        super();
        X(this, We);
        X(this, oi);
        this.config = t,
        G(this, We, new Map),
        G(this, oi, Date.now())
    }
    build(t, n, r) {
        const o = new ub({
            mutationCache: this,
            mutationId: ++yi(this, oi)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        const n = Vi(t)
          , r = j(this, We).get(n) ?? [];
        r.push(t),
        j(this, We).set(n, r),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = Vi(t);
        if (j(this, We).has(n)) {
            const o = (r = j(this, We).get(n)) == null ? void 0 : r.filter(i => i !== t);
            o && (o.length === 0 ? j(this, We).delete(n) : j(this, We).set(n, o))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = j(this, We).get(Vi(t))) == null ? void 0 : r.find(o => o.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = j(this, We).get(Vi(t))) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve()
    }
    clear() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return [...j(this, We).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => ef(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => ef(t, n))
    }
    notify(t) {
        _e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return _e.batch( () => Promise.all(t.map(n => n.continue().catch(ft))))
    }
}
,
We = new WeakMap,
oi = new WeakMap,
wf);
function Vi(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}
function rf(e) {
    return {
        onFetch: (t, n) => {
            var f, m, d, y, w;
            const r = t.options
              , o = (d = (m = (f = t.fetchOptions) == null ? void 0 : f.meta) == null ? void 0 : m.fetchMore) == null ? void 0 : d.direction
              , i = ((y = t.state.data) == null ? void 0 : y.pages) || []
              , s = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , c = 0;
            const u = async () => {
                let g = !1;
                const b = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , h = ng(t.options, t.fetchOptions)
                  , p = async (v, S, C) => {
                    if (g)
                        return Promise.reject();
                    if (S == null && v.pages.length)
                        return Promise.resolve(v);
                    const N = {
                        queryKey: t.queryKey,
                        pageParam: S,
                        direction: C ? "backward" : "forward",
                        meta: t.options.meta
                    };
                    b(N);
                    const k = await h(N)
                      , {maxPages: P} = t.options
                      , L = C ? eb : Jw;
                    return {
                        pages: L(v.pages, k, P),
                        pageParams: L(v.pageParams, S, P)
                    }
                }
                ;
                if (o && i.length) {
                    const v = o === "backward"
                      , S = v ? mb : of
                      , C = {
                        pages: i,
                        pageParams: s
                    }
                      , N = S(r, C);
                    l = await p(C, N, v)
                } else {
                    const v = e ?? i.length;
                    do {
                        const S = c === 0 ? s[0] ?? r.initialPageParam : of(r, l);
                        if (c > 0 && S == null)
                            break;
                        l = await p(l, S),
                        c++
                    } while (c < v)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, b;
                return (b = (g = t.options).persister) == null ? void 0 : b.call(g, u, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function of(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function mb(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var de, pn, hn, zr, Vr, gn, Ur, Fr, bf, pb = (bf = class {
    constructor(e={}) {
        X(this, de);
        X(this, pn);
        X(this, hn);
        X(this, zr);
        X(this, Vr);
        X(this, gn);
        X(this, Ur);
        X(this, Fr);
        G(this, de, e.queryCache || new cb),
        G(this, pn, e.mutationCache || new fb),
        G(this, hn, e.defaultOptions || {}),
        G(this, zr, new Map),
        G(this, Vr, new Map),
        G(this, gn, 0)
    }
    mount() {
        yi(this, gn)._++,
        j(this, gn) === 1 && (G(this, Ur, rg.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            j(this, de).onFocus())
        }
        )),
        G(this, Fr, Ms.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            j(this, de).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        yi(this, gn)._--,
        j(this, gn) === 0 && ((e = j(this, Ur)) == null || e.call(this),
        G(this, Ur, void 0),
        (t = j(this, Fr)) == null || t.call(this),
        G(this, Fr, void 0))
    }
    isFetching(e) {
        return j(this, de).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return j(this, pn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = j(this, de).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0)
            return this.fetchQuery(e);
        {
            const n = this.defaultQueryOptions(e)
              , r = j(this, de).build(this, n);
            return e.revalidateIfStale && r.isStaleByTime(Zd(n.staleTime, r)) && this.prefetchQuery(n),
            Promise.resolve(t)
        }
    }
    getQueriesData(e) {
        return j(this, de).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = j(this, de).get(r.queryHash)
          , i = o == null ? void 0 : o.state.data
          , s = Qw(t, i);
        if (s !== void 0)
            return j(this, de).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return _e.batch( () => j(this, de).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = j(this, de).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = j(this, de);
        _e.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = j(this, de)
          , r = {
            type: "active",
            ...e
        };
        return _e.batch( () => (n.findAll(e).forEach(o => {
            o.reset()
        }
        ),
        this.refetchQueries(r, t)))
    }
    cancelQueries(e={}, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = _e.batch( () => j(this, de).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(ft).catch(ft)
    }
    invalidateQueries(e={}, t={}) {
        return _e.batch( () => {
            if (j(this, de).findAll(e).forEach(r => {
                r.invalidate()
            }
            ),
            e.refetchType === "none")
                return Promise.resolve();
            const n = {
                ...e,
                type: e.refetchType ?? e.type ?? "active"
            };
            return this.refetchQueries(n, t)
        }
        )
    }
    refetchQueries(e={}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
        }
          , r = _e.batch( () => j(this, de).findAll(e).filter(o => !o.isDisabled()).map(o => {
            let i = o.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(ft)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(ft)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = j(this, de).build(this, t);
        return n.isStaleByTime(Zd(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(ft).catch(ft)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = rf(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(ft).catch(ft)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = rf(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Ms.isOnline() ? j(this, pn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return j(this, de)
    }
    getMutationCache() {
        return j(this, pn)
    }
    getDefaultOptions() {
        return j(this, hn)
    }
    setDefaultOptions(e) {
        G(this, hn, e)
    }
    setQueryDefaults(e, t) {
        j(this, zr).set(Jo(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...j(this, zr).values()];
        let n = {};
        return t.forEach(r => {
            ei(e, r.queryKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        j(this, Vr).set(Jo(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...j(this, Vr).values()];
        let n = {};
        return t.forEach(r => {
            ei(e, r.mutationKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...j(this, hn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = fu(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.enabled !== !0 && t.queryFn === mu && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...j(this, hn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        j(this, de).clear(),
        j(this, pn).clear()
    }
}
,
de = new WeakMap,
pn = new WeakMap,
hn = new WeakMap,
zr = new WeakMap,
Vr = new WeakMap,
gn = new WeakMap,
Ur = new WeakMap,
Fr = new WeakMap,
bf), hb = x.createContext(void 0), gb = ({client: e, children: t}) => (x.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
a.jsx(hb.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ti() {
    return ti = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ti.apply(this, arguments)
}
var xn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(xn || (xn = {}));
const sf = "popstate";
function vb(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: l} = r.location;
        return Ja("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : Rs(o)
    }
    return xb(t, n, null, e)
}
function he(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function ag(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function yb() {
    return Math.random().toString(36).substr(2, 8)
}
function lf(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Ja(e, t, n, r) {
    return n === void 0 && (n = null),
    ti({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? io(t) : t, {
        state: n,
        key: t && t.key || r || yb()
    })
}
function Rs(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function io(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function xb(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , l = xn.Pop
      , c = null
      , u = f();
    u == null && (u = 0,
    s.replaceState(ti({}, s.state, {
        idx: u
    }), ""));
    function f() {
        return (s.state || {
            idx: null
        }).idx
    }
    function m() {
        l = xn.Pop;
        let b = f()
          , h = b == null ? null : b - u;
        u = b,
        c && c({
            action: l,
            location: g.location,
            delta: h
        })
    }
    function d(b, h) {
        l = xn.Push;
        let p = Ja(g.location, b, h);
        u = f() + 1;
        let v = lf(p, u)
          , S = g.createHref(p);
        try {
            s.pushState(v, "", S)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            o.location.assign(S)
        }
        i && c && c({
            action: l,
            location: g.location,
            delta: 1
        })
    }
    function y(b, h) {
        l = xn.Replace;
        let p = Ja(g.location, b, h);
        u = f();
        let v = lf(p, u)
          , S = g.createHref(p);
        s.replaceState(v, "", S),
        i && c && c({
            action: l,
            location: g.location,
            delta: 0
        })
    }
    function w(b) {
        let h = o.location.origin !== "null" ? o.location.origin : o.location.href
          , p = typeof b == "string" ? b : Rs(b);
        return p = p.replace(/ $/, "%20"),
        he(h, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,h)
    }
    let g = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(b) {
            if (c)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(sf, m),
            c = b,
            () => {
                o.removeEventListener(sf, m),
                c = null
            }
        },
        createHref(b) {
            return t(o, b)
        },
        createURL: w,
        encodeLocation(b) {
            let h = w(b);
            return {
                pathname: h.pathname,
                search: h.search,
                hash: h.hash
            }
        },
        push: d,
        replace: y,
        go(b) {
            return s.go(b)
        }
    };
    return g
}
var af;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(af || (af = {}));
function wb(e, t, n) {
    return n === void 0 && (n = "/"),
    bb(e, t, n, !1)
}
function bb(e, t, n, r) {
    let o = typeof t == "string" ? io(t) : t
      , i = pu(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = cg(e);
    Sb(s);
    let l = null;
    for (let c = 0; l == null && c < s.length; ++c) {
        let u = Tb(i);
        l = Rb(s[c], u, r)
    }
    return l
}
function cg(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, s, l) => {
        let c = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        c.relativePath.startsWith("/") && (he(c.relativePath.startsWith(r), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        c.relativePath = c.relativePath.slice(r.length));
        let u = Pn([r, c.relativePath])
          , f = n.concat(c);
        i.children && i.children.length > 0 && (he(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        cg(i.children, t, f, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: Db(u, i.index),
            routesMeta: f
        })
    }
    ;
    return e.forEach( (i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?")))
            o(i, s);
        else
            for (let c of ug(i.path))
                o(i, s, c)
    }
    ),
    t
}
function ug(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = ug(r.join("/"))
      , l = [];
    return l.push(...s.map(c => c === "" ? i : [i, c].join("/"))),
    o && l.push(...s),
    l.map(c => e.startsWith("/") && c === "" ? "/" : c)
}
function Sb(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Mb(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Cb = /^:[\w-]+$/
  , Eb = 3
  , Nb = 2
  , kb = 1
  , jb = 10
  , Pb = -2
  , cf = e => e === "*";
function Db(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(cf) && (r += Pb),
    t && (r += Nb),
    n.filter(o => !cf(o)).reduce( (o, i) => o + (Cb.test(i) ? Eb : i === "" ? kb : jb), r)
}
function Mb(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Rb(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , s = [];
    for (let l = 0; l < r.length; ++l) {
        let c = r[l]
          , u = l === r.length - 1
          , f = i === "/" ? t : t.slice(i.length) || "/"
          , m = uf({
            path: c.relativePath,
            caseSensitive: c.caseSensitive,
            end: u
        }, f)
          , d = c.route;
        if (!m && u && n && !r[r.length - 1].route.index && (m = uf({
            path: c.relativePath,
            caseSensitive: c.caseSensitive,
            end: !1
        }, f)),
        !m)
            return null;
        Object.assign(o, m.params),
        s.push({
            params: o,
            pathname: Pn([i, m.pathname]),
            pathnameBase: Ib(Pn([i, m.pathnameBase])),
            route: d
        }),
        m.pathnameBase !== "/" && (i = Pn([i, m.pathnameBase]))
    }
    return s
}
function uf(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Ob(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , l = o.slice(1);
    return {
        params: r.reduce( (u, f, m) => {
            let {paramName: d, isOptional: y} = f;
            if (d === "*") {
                let g = l[m] || "";
                s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const w = l[m];
            return y && !w ? u[d] = void 0 : u[d] = (w || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function Ob(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ag(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, c) => (r.push({
        paramName: l,
        isOptional: c != null
    }),
    c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function Tb(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return ag(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function pu(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function Ab(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? io(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : _b(n, t) : t,
        search: Bb(r),
        hash: zb(o)
    }
}
function _b(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Ql(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Lb(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function dg(e, t) {
    let n = Lb(e);
    return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function fg(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = io(e) : (o = ti({}, e),
    he(!o.pathname || !o.pathname.includes("?"), Ql("?", "pathname", "search", o)),
    he(!o.pathname || !o.pathname.includes("#"), Ql("#", "pathname", "hash", o)),
    he(!o.search || !o.search.includes("#"), Ql("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "", s = i ? "/" : o.pathname, l;
    if (s == null)
        l = n;
    else {
        let m = t.length - 1;
        if (!r && s.startsWith("..")) {
            let d = s.split("/");
            for (; d[0] === ".."; )
                d.shift(),
                m -= 1;
            o.pathname = d.join("/")
        }
        l = m >= 0 ? t[m] : "/"
    }
    let c = Ab(o, l)
      , u = s && s !== "/" && s.endsWith("/")
      , f = (i || s === ".") && n.endsWith("/");
    return !c.pathname.endsWith("/") && (u || f) && (c.pathname += "/"),
    c
}
const Pn = e => e.join("/").replace(/\/\/+/g, "/")
  , Ib = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Bb = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , zb = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Vb(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const mg = ["post", "put", "patch", "delete"];
new Set(mg);
const Ub = ["get", ...mg];
new Set(Ub);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ni() {
    return ni = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ni.apply(this, arguments)
}
const hu = x.createContext(null)
  , Fb = x.createContext(null)
  , ir = x.createContext(null)
  , ll = x.createContext(null)
  , sr = x.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , pg = x.createContext(null);
function $b(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    fi() || he(!1);
    let {basename: r, navigator: o} = x.useContext(ir)
      , {hash: i, pathname: s, search: l} = vg(e, {
        relative: n
    })
      , c = s;
    return r !== "/" && (c = s === "/" ? r : Pn([r, s])),
    o.createHref({
        pathname: c,
        search: l,
        hash: i
    })
}
function fi() {
    return x.useContext(ll) != null
}
function mi() {
    return fi() || he(!1),
    x.useContext(ll).location
}
function hg(e) {
    x.useContext(ir).static || x.useLayoutEffect(e)
}
function gg() {
    let {isDataRoute: e} = x.useContext(sr);
    return e ? nS() : Gb()
}
function Gb() {
    fi() || he(!1);
    let e = x.useContext(hu)
      , {basename: t, future: n, navigator: r} = x.useContext(ir)
      , {matches: o} = x.useContext(sr)
      , {pathname: i} = mi()
      , s = JSON.stringify(dg(o, n.v7_relativeSplatPath))
      , l = x.useRef(!1);
    return hg( () => {
        l.current = !0
    }
    ),
    x.useCallback(function(u, f) {
        if (f === void 0 && (f = {}),
        !l.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let m = fg(u, JSON.parse(s), i, f.relative === "path");
        e == null && t !== "/" && (m.pathname = m.pathname === "/" ? t : Pn([t, m.pathname])),
        (f.replace ? r.replace : r.push)(m, f.state, f)
    }, [t, r, s, i, e])
}
function vg(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = x.useContext(ir)
      , {matches: o} = x.useContext(sr)
      , {pathname: i} = mi()
      , s = JSON.stringify(dg(o, r.v7_relativeSplatPath));
    return x.useMemo( () => fg(e, JSON.parse(s), i, n === "path"), [e, s, i, n])
}
function Hb(e, t) {
    return Wb(e, t)
}
function Wb(e, t, n, r) {
    fi() || he(!1);
    let {navigator: o} = x.useContext(ir)
      , {matches: i} = x.useContext(sr)
      , s = i[i.length - 1]
      , l = s ? s.params : {};
    s && s.pathname;
    let c = s ? s.pathnameBase : "/";
    s && s.route;
    let u = mi(), f;
    if (t) {
        var m;
        let b = typeof t == "string" ? io(t) : t;
        c === "/" || (m = b.pathname) != null && m.startsWith(c) || he(!1),
        f = b
    } else
        f = u;
    let d = f.pathname || "/"
      , y = d;
    if (c !== "/") {
        let b = c.replace(/^\//, "").split("/");
        y = "/" + d.replace(/^\//, "").split("/").slice(b.length).join("/")
    }
    let w = wb(e, {
        pathname: y
    })
      , g = Xb(w && w.map(b => Object.assign({}, b, {
        params: Object.assign({}, l, b.params),
        pathname: Pn([c, o.encodeLocation ? o.encodeLocation(b.pathname).pathname : b.pathname]),
        pathnameBase: b.pathnameBase === "/" ? c : Pn([c, o.encodeLocation ? o.encodeLocation(b.pathnameBase).pathname : b.pathnameBase])
    })), i, n, r);
    return t && g ? x.createElement(ll.Provider, {
        value: {
            location: ni({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, f),
            navigationType: xn.Pop
        }
    }, g) : g
}
function Qb() {
    let e = tS()
      , t = Vb(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: o
    }, n) : null, null)
}
const Kb = x.createElement(Qb, null);
class Yb extends x.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? x.createElement(sr.Provider, {
            value: this.props.routeContext
        }, x.createElement(pg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function qb(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = x.useContext(hu);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(sr.Provider, {
        value: t
    }, r)
}
function Xb(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let f = s.findIndex(m => m.route.id && (l == null ? void 0 : l[m.route.id]) !== void 0);
        f >= 0 || he(!1),
        s = s.slice(0, Math.min(s.length, f + 1))
    }
    let c = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let f = 0; f < s.length; f++) {
            let m = s[f];
            if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (u = f),
            m.route.id) {
                let {loaderData: d, errors: y} = n
                  , w = m.route.loader && d[m.route.id] === void 0 && (!y || y[m.route.id] === void 0);
                if (m.route.lazy || w) {
                    c = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (f, m, d) => {
        let y, w = !1, g = null, b = null;
        n && (y = l && m.route.id ? l[m.route.id] : void 0,
        g = m.route.errorElement || Kb,
        c && (u < 0 && d === 0 ? (w = !0,
        b = null) : u === d && (w = !0,
        b = m.route.hydrateFallbackElement || null)));
        let h = t.concat(s.slice(0, d + 1))
          , p = () => {
            let v;
            return y ? v = g : w ? v = b : m.route.Component ? v = x.createElement(m.route.Component, null) : m.route.element ? v = m.route.element : v = f,
            x.createElement(qb, {
                match: m,
                routeContext: {
                    outlet: f,
                    matches: h,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (m.route.ErrorBoundary || m.route.errorElement || d === 0) ? x.createElement(Yb, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: y,
            children: p(),
            routeContext: {
                outlet: null,
                matches: h,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var yg = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(yg || {})
  , Os = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Os || {});
function Zb(e) {
    let t = x.useContext(hu);
    return t || he(!1),
    t
}
function Jb(e) {
    let t = x.useContext(Fb);
    return t || he(!1),
    t
}
function eS(e) {
    let t = x.useContext(sr);
    return t || he(!1),
    t
}
function xg(e) {
    let t = eS()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || he(!1),
    n.route.id
}
function tS() {
    var e;
    let t = x.useContext(pg)
      , n = Jb(Os.UseRouteError)
      , r = xg(Os.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function nS() {
    let {router: e} = Zb(yg.UseNavigateStable)
      , t = xg(Os.UseNavigateStable)
      , n = x.useRef(!1);
    return hg( () => {
        n.current = !0
    }
    ),
    x.useCallback(function(o, i) {
        i === void 0 && (i = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, ni({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
function It(e) {
    he(!1)
}
function rS(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=xn.Pop, navigator: i, static: s=!1, future: l} = e;
    fi() && he(!1);
    let c = t.replace(/^\/*/, "/")
      , u = x.useMemo( () => ({
        basename: c,
        navigator: i,
        static: s,
        future: ni({
            v7_relativeSplatPath: !1
        }, l)
    }), [c, l, i, s]);
    typeof r == "string" && (r = io(r));
    let {pathname: f="/", search: m="", hash: d="", state: y=null, key: w="default"} = r
      , g = x.useMemo( () => {
        let b = pu(f, c);
        return b == null ? null : {
            location: {
                pathname: b,
                search: m,
                hash: d,
                state: y,
                key: w
            },
            navigationType: o
        }
    }
    , [c, f, m, d, y, w, o]);
    return g == null ? null : x.createElement(ir.Provider, {
        value: u
    }, x.createElement(ll.Provider, {
        children: n,
        value: g
    }))
}
function oS(e) {
    let {children: t, location: n} = e;
    return Hb(ec(t), n)
}
new Promise( () => {}
);
function ec(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return x.Children.forEach(e, (r, o) => {
        if (!x.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === x.Fragment) {
            n.push.apply(n, ec(r.props.children, i));
            return
        }
        r.type !== It && he(!1),
        !r.props.index || !r.props.children || he(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = ec(r.props.children, i)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function tc() {
    return tc = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    tc.apply(this, arguments)
}
function iS(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), o, i;
    for (i = 0; i < r.length; i++)
        o = r[i],
        !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
function sS(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function lS(e, t) {
    return e.button === 0 && (!t || t === "_self") && !sS(e)
}
const aS = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , cS = "6";
try {
    window.__reactRouterVersion = cS
} catch {}
const uS = "startTransition"
  , df = $g[uS];
function dS(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = x.useRef();
    i.current == null && (i.current = vb({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
      , [l,c] = x.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , f = x.useCallback(m => {
        u && df ? df( () => c(m)) : c(m)
    }
    , [c, u]);
    return x.useLayoutEffect( () => s.listen(f), [s, f]),
    x.createElement(rS, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
const fS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , mS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Ee = x.forwardRef(function(t, n) {
    let {onClick: r, relative: o, reloadDocument: i, replace: s, state: l, target: c, to: u, preventScrollReset: f, viewTransition: m} = t, d = iS(t, aS), {basename: y} = x.useContext(ir), w, g = !1;
    if (typeof u == "string" && mS.test(u) && (w = u,
    fS))
        try {
            let v = new URL(window.location.href)
              , S = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u)
              , C = pu(S.pathname, y);
            S.origin === v.origin && C != null ? u = C + S.search + S.hash : g = !0
        } catch {}
    let b = $b(u, {
        relative: o
    })
      , h = pS(u, {
        replace: s,
        state: l,
        target: c,
        preventScrollReset: f,
        relative: o,
        viewTransition: m
    });
    function p(v) {
        r && r(v),
        v.defaultPrevented || h(v)
    }
    return x.createElement("a", tc({}, d, {
        href: w || b,
        onClick: g || i ? r : p,
        ref: n,
        target: c
    }))
});
var ff;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(ff || (ff = {}));
var mf;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(mf || (mf = {}));
function pS(e, t) {
    let {target: n, replace: r, state: o, preventScrollReset: i, relative: s, viewTransition: l} = t === void 0 ? {} : t
      , c = gg()
      , u = mi()
      , f = vg(e, {
        relative: s
    });
    return x.useCallback(m => {
        if (lS(m, n)) {
            m.preventDefault();
            let d = r !== void 0 ? r : Rs(u) === Rs(f);
            c(e, {
                replace: d,
                state: o,
                preventScrollReset: i,
                relative: s,
                viewTransition: l
            })
        }
    }
    , [u, c, f, r, o, n, e, i, s, l])
}
const Xt = () => {
    const [e,t] = x.useState({
        x: 0,
        y: 0
    })
      , [n,r] = x.useState(!0)
      , [o,i] = x.useState(!1)
      , [s,l] = x.useState(!1)
      , [c,u] = x.useState([]);
    x.useEffect( () => {
        const d = () => {
            document.addEventListener("mousemove", w),
            document.addEventListener("mouseenter", g),
            document.addEventListener("mouseleave", b),
            document.addEventListener("mousedown", h),
            document.addEventListener("mouseup", p)
        }
          , y = () => {
            document.removeEventListener("mousemove", w),
            document.removeEventListener("mouseenter", g),
            document.removeEventListener("mouseleave", b),
            document.removeEventListener("mousedown", h),
            document.removeEventListener("mouseup", p)
        }
          , w = S => {
            const C = {
                x: S.clientX,
                y: S.clientY
            };
            t(C),
            u(N => [C, ...N].slice(0, 5)),
            r(!1)
        }
          , g = () => {
            r(!1)
        }
          , b = () => {
            r(!0)
        }
          , h = () => {
            i(!0)
        }
          , p = () => {
            i(!1)
        }
          , v = () => {
            document.querySelectorAll("a, button, .hover-effect").forEach(S => {
                S.addEventListener("mouseenter", () => l(!0)),
                S.addEventListener("mouseleave", () => l(!1))
            }
            )
        }
        ;
        return d(),
        v(),
        () => {
            y()
        }
    }
    , []),
    x.useEffect( () => {
        const d = () => {
            document.querySelectorAll("a, button, .hover-effect").forEach(g => {
                g.addEventListener("mouseenter", () => l(!0)),
                g.addEventListener("mouseleave", () => l(!1))
            }
            )
        }
        ;
        d();
        const y = new MutationObserver(d);
        return y.observe(document.body, {
            childList: !0,
            subtree: !0
        }),
        () => {
            y.disconnect()
        }
    }
    , []);
    const f = `custom-cursor ${n ? "opacity-0" : "opacity-100"} ${o ? "scale-75" : ""} ${s ? "scale-150" : ""}`
      , m = `cursor-inverted ${n ? "opacity-0" : ""} ${s ? "opacity-100 scale-75" : "opacity-30"}`;
    return a.jsxs(a.Fragment, {
        children: [a.jsx("div", {
            className: f,
            style: {
                left: `${e.x}px`,
                top: `${e.y}px`
            }
        }), c.map( (d, y) => a.jsx("div", {
            className: "fixed w-2 h-2 rounded-full bg-badminner/50 pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2",
            style: {
                left: `${d.x}px`,
                top: `${d.y}px`,
                opacity: .8 - y * .15,
                scale: 1 - y * .15
            }
        }, y)), a.jsx("div", {
            className: m,
            style: {
                left: `${e.x}px`,
                top: `${e.y}px`
            }
        })]
    })
}
  , lr = () => {
    const [e,t] = x.useState(!1)
      , [n,r] = x.useState(!1);
    x.useEffect( () => {
        const i = () => {
            window.scrollY > 50 ? t(!0) : t(!1)
        }
        ;
        return window.addEventListener("scroll", i),
        () => {
            window.removeEventListener("scroll", i)
        }
    }
    , []);
    const o = () => {
        r(!n)
    }
    ;
    return a.jsxs("header", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${e ? "py-4 bg-background/80 backdrop-blur-lg shadow-md" : "py-6 bg-transparent"}`,
        children: [a.jsxs("div", {
            className: "container mx-auto px-6 md:px-12 flex items-center justify-between",
            children: [a.jsxs(Ee, {
                to: "/",
                className: "text-2xl font-bold flex items-center hover-effect",
                children: [a.jsx("span", {
                    className: "text-badminner",
                    children: "YGHosting "
                }), a.jsx("span", {
                    className: "text-white",
                    children: ""
                })]
            }), a.jsxs("nav", {
                className: "hidden md:flex space-x-8 items-center",
                children: [a.jsx(Ee, {
                    to: "/",
                    className: "nav-link",
                    children: "Home"
                }), a.jsx(Ee, {
                    to: "/vps",
                    className: "nav-link",
                    children: "Coming Soon - MC"
                }), a.jsx(Ee, {
                    to: "/vps",
                    className: "nav-link",
                    children: "VPS"
                }), a.jsx("a", {
                    href: "https://razorpay.yghosting.xyz/admin.html",
                    className: "nav-link",
                    children: "Client Area"
                }), a.jsx("a", {
                    href: "https://discord.gg/6uM9HgqF2h",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "nav-link",
                    children: "Discord Server"
                }), a.jsx("a", {
                    href: "/billing/",
                    className: "btn-primary ml-4 hover-effect",
                    children: "Support"
                })]
            }), a.jsx("button", {
                className: "md:hidden text-white hover-effect",
                onClick: o,
                "aria-label": "Toggle menu",
                children: n ? a.jsx(nu, {
                    className: "h-6 w-6 text-badminner"
                }) : a.jsx(ox, {
                    className: "h-6 w-6"
                })
            })]
        }), a.jsx("div", {
            className: `md:hidden fixed inset-0 bg-background z-40 transition-all duration-300 ease-in-out transform ${n ? "translate-x-0" : "translate-x-full"}`,
            children: a.jsxs("div", {
                className: "flex flex-col h-full justify-center items-center space-y-8 p-8",
                children: [a.jsx("a", {
                    href: "https://discord.com/invite/nUvQRYAjQH",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-xl nav-link",
                    onClick: () => r(!1),
                    children: "Discord Server"
                }), a.jsx(Ee, {
                    to: "/minecraft",
                    className: "text-xl nav-link",
                    onClick: () => r(!1),
                    children: "Minecraft"
                }), a.jsx(Ee, {
                    to: "/vps",
                    className: "text-xl nav-link",
                    onClick: () => r(!1),
                    children: "VPS"
                }), a.jsx("a", {
                    href: "/billing/",
                    className: "text-xl nav-link",
                    onClick: () => r(!1),
                    children: "Client Area"
                }), a.jsx("a", {
                    href: "/billing/",
                    className: "btn-primary mt-4 hover-effect",
                    onClick: () => r(!1),
                    children: "Login/Register"
                })]
            })
        })]
    })
}
  , hS = () => {
    const e = x.useRef(null)
      , [t,n] = x.useState(!1)
      , r = gg();
    x.useEffect( () => {
        const s = new IntersectionObserver(c => {
            c.forEach(u => {
                u.isIntersecting && u.target.classList.add("animate-fade-in")
            }
            )
        }
        ,{
            threshold: .1
        })
          , l = document.querySelectorAll(".animate-on-scroll");
        return l.forEach(c => s.observe(c)),
        () => {
            l.forEach(c => s.unobserve(c))
        }
    }
    , []);
    const o = () => {
        const s = document.getElementById("features");
        s && s.scrollIntoView({
            behavior: "smooth"
        })
    }
      , i = s => {
        n(!1),
        r(`/${s}`)
    }
    ;
    return a.jsxs("div", {
        ref: e,
        className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-20",
        children: [a.jsxs("div", {
            className: "absolute inset-0 z-0 overflow-hidden",
            children: [a.jsx("div", {
                className: "absolute top-1/4 -left-28 w-80 h-80 bg-badminner/20 rounded-full blur-[120px]"
            }), a.jsx("div", {
                className: "absolute bottom-1/4 -right-28 w-80 h-80 bg-badminner/20 rounded-full blur-[120px]"
            })]
        }), a.jsxs("div", {
            className: "container mx-auto px-6 md:px-12 relative z-10",
            children: [a.jsxs("div", {
                className: "text-center max-w-5xl mx-auto",
                children: [a.jsx("div", {
                    className: "inline-block animate-fade-in opacity-0 mb-4",
                    children: a.jsx("span", {
                        className: "bg-badminner/10 text-badminner px-4 py-2 rounded-full text-sm font-medium border border-badminner/20",
                        children: "Premium Hosting Solutions"
                    })
                }), a.jsxs("h1", {
                    className: "hero-heading opacity-0 animate-on-scroll animate-delay-200",
                    children: ["Elevate Your ", a.jsx("span", {
                        className: "text-gradient",
                        children: "Hosting"
                    }), " Experience"]
                }), a.jsx("p", {
                    className: "mt-6 text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto opacity-0 animate-on-scroll animate-delay-400",
                    children: "YGHosting delivers premium Minecraft and VPS hosting solutions with unmatched performance. Experience faster speeds, enhanced security, and maximum uptime."
                }), a.jsxs("div", {
                    className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-on-scroll animate-delay-600",
                    children: [a.jsx("button", {
                        onClick: () => n(!0),
                        className: "btn-primary w-full sm:w-auto hover-effect",
                        children: "Get Started Now"
                    }), a.jsx("a", {
                        href: "#features",
                        className: "btn-secondary w-full sm:w-auto hover-effect",
                        children: "Learn More"
                    })]
                }), a.jsxs("div", {
                    className: "mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 animate-on-scroll animate-delay-800",
                    children: [a.jsxs("div", {
                        className: "flex flex-col items-center",
                        children: [a.jsx("div", {
                            className: "w-12 h-12 bg-badminner/20 rounded-full flex items-center justify-center mb-4",
                            children: a.jsx(Js, {
                                className: "h-6 w-6 text-badminner"
                            })
                        }), a.jsx("h3", {
                            className: "text-xl font-bold mb-2",
                            children: "Minecraft Servers"
                        }), a.jsx("p", {
                            className: "text-foreground/70 text-center",
                            children: "High-performance Minecraft servers with plugin support"
                        })]
                    }), a.jsxs("div", {
                        className: "flex flex-col items-center",
                        children: [a.jsx("div", {
                            className: "w-12 h-12 bg-badminner/20 rounded-full flex items-center justify-center mb-4",
                            children: a.jsx(qr, {
                                className: "h-6 w-6 text-badminner"
                            })
                        }), a.jsx("h3", {
                            className: "text-xl font-bold mb-2",
                            children: "VPS Hosting"
                        }), a.jsx("p", {
                            className: "text-foreground/70 text-center",
                            children: "Reliable virtual private servers for all your hosting needs"
                        })]
                    })]
                })]
            }), a.jsx("div", {
                className: "absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover-effect",
                onClick: o,
                children: a.jsx(tx, {
                    className: "h-10 w-10 text-badminner"
                })
            })]
        }), t && a.jsxs("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-none",
            children: [a.jsx(Xt, {}), a.jsxs("div", {
                className: "relative w-full max-w-xl bg-black/40 border border-primary/10 rounded-2xl p-8 m-4",
                children: [a.jsx("button", {
                    onClick: () => n(!1),
                    className: "absolute top-4 right-4 text-white/70 hover:text-red-500",
                    children: a.jsx(nu, {
                        className: "w-5 h-5"
                    })
                }), a.jsx("h2", {
                    className: "text-center text-xl font-bold text-white mb-6",
                    children: "Choose a Hosting Type"
                }), a.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [a.jsxs("div", {
                        onClick: () => i("vps"),
                        className: "cursor-pointer p-6 rounded-xl bg-black hover:bg-badminner/20 transition-all text-center border border-primary/40",
                        children: [a.jsx("div", {
                            className: "flex items-center justify-center w-12 h-12 rounded-full bg-badminner/20 mx-auto mb-4",
                            children: a.jsx(qo, {
                                className: "w-6 h-6 text-badminner"
                            })
                        }), a.jsx("h3", {
                            className: "text-white font-semibold text-lg",
                            children: "Minecraft Hosting - Coming Soon"
                        })]
                    }), a.jsxs("div", {
                        onClick: () => i("vps"),
                        className: "cursor-pointer p-6 rounded-xl bg-black hover:bg-badminner/20 transition-all text-center border border-primary/40",
                        children: [a.jsx("div", {
                            className: "flex items-center justify-center w-12 h-12 rounded-full bg-badminner/20 mx-auto mb-4",
                            children: a.jsx(qr, {
                                className: "w-6 h-6 text-badminner"
                            })
                        }), a.jsx("h3", {
                            className: "text-white font-semibold text-lg",
                            children: "VPS Hosting"
                        })]
                    })]
                })]
            })]
        })]
    })
}
  , gS = () => {
    x.useEffect( () => {
        const t = new IntersectionObserver(r => {
            r.forEach(o => {
                o.isIntersecting && o.target.classList.add("animate-fade-in")
            }
            )
        }
        ,{
            threshold: .1
        })
          , n = document.querySelectorAll(".feature-card");
        return n.forEach( (r, o) => {
            r.classList.add("opacity-0"),
            r.classList.add(`delay-${o}`),
            t.observe(r)
        }
        ),
        () => {
            n.forEach(r => t.unobserve(r))
        }
    }
    , []);
    const e = [{
        icon: a.jsx(gh, {
            className: "h-8 w-8 text-badminner"
        }),
        title: "Discord Server",
        description: "Join our Discord server with active community and support"
    }, {
        icon: a.jsx(ex, {
            className: "h-8 w-8 text-badminner"
        }),
        title: "Usage Analytics",
        description: "Comprehensive analytics for your Minecraft and VPS services"
    }, {
        icon: a.jsx(Js, {
            className: "h-8 w-8 text-badminner"
        }),
        title: "Enhanced Security",
        description: "Advanced protection for your VPS and Minecraft servers"
    }, {
        icon: a.jsx(vh, {
            className: "h-8 w-8 text-badminner"
        }),
        title: "High Performance",
        description: "Low-latency, high-uptime solutions for all your gaming and community needs"
    }, {
        icon: a.jsx(mh, {
            className: "h-8 w-8 text-badminner"
        }),
        title: "Cloud Integration",
        description: "Seamless cloud connectivity with automated backups and scaling"
    }, {
        icon: a.jsx(qo, {
            className: "h-8 w-8 text-badminner"
        }),
        title: "Minecraft Servers",
        description: "Custom Minecraft servers with plugin support and easy management"
    }, {
        icon: a.jsx(qr, {
            className: "h-8 w-8 text-badminner"
        }),
        title: "VPS Solutions",
        description: "Virtual private servers optimized for gaming and community hosting"
    }, {
        icon: a.jsx(ix, {
            className: "h-8 w-8 text-badminner"
        }),
        title: "Ticket Support",
        description: "Round-the-clock technical support for all your hosting needs"
    }];
    return a.jsxs("section", {
        id: "features",
        className: "section-container",
        children: [a.jsxs("div", {
            className: "text-center mb-16",
            children: [a.jsx("div", {
                className: "inline-block mb-6",
                children: a.jsx("span", {
                    className: "bg-badminner/10 text-badminner px-4 py-2 rounded-full text-sm font-medium border border-badminner/20",
                    children: "Premium Services"
                })
            }), a.jsxs("h2", {
                className: "section-heading",
                children: ["Advanced Technology, ", a.jsx("span", {
                    className: "text-gradient",
                    children: "Superior Experience"
                })]
            }), a.jsx("p", {
                className: "max-w-3xl mx-auto text-lg text-foreground/70",
                children: "YGHosting Premium Host provides premium Minecraft hosting and VPS solutions with unmatched performance, security, and support."
            })]
        }), a.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: e.map( (t, n) => a.jsxs("div", {
                className: "feature-card",
                children: [a.jsx("div", {
                    className: "mb-6",
                    children: t.icon
                }), a.jsx("h3", {
                    className: "text-xl font-bold mb-3",
                    children: t.title
                }), a.jsx("p", {
                    className: "text-foreground/70",
                    children: t.description
                })]
            }, n))
        })]
    })
}
  , vS = () => {
    const e = x.useRef(null)
      , [t,n] = x.useState(!1)
      , [r,o] = x.useState(!0)
      , i = () => {
        if (e.current) {
            const {scrollLeft: c, scrollWidth: u, clientWidth: f} = e.current;
            n(c > 0),
            o(c < u - f - 10)
        }
    }
    ;
    x.useEffect( () => {
        const c = e.current;
        i(),
        c && c.addEventListener("scroll", i);
        const u = new IntersectionObserver(m => {
            m.forEach(d => {
                d.isIntersecting && d.target.classList.add("animate-fade-in")
            }
            )
        }
        ,{
            threshold: .1
        })
          , f = document.querySelectorAll(".review-card");
        return f.forEach(m => {
            m.classList.add("opacity-0"),
            u.observe(m)
        }
        ),
        window.addEventListener("resize", i),
        () => {
            c && c.removeEventListener("scroll", i),
            f.forEach(m => u.unobserve(m)),
            window.removeEventListener("resize", i)
        }
    }
    , []);
    const s = c => {
        if (e.current) {
            const {clientWidth: u} = e.current
              , f = u * .8;
            e.current.scrollBy({
                left: c === "left" ? -f : f,
                behavior: "smooth"
            })
        }
    }
      , l = [{
        name: "Revenge",
        position: "Customer",
        content: "i bought a minecraft server from YGHosting earlier, it had best perfomance i have ever seen.",
        rating: 5
    }, {
        name: "Heroflame",
        position: "Customer",
        content: "Best ever hosting",
        rating: 5
    }, {
        name: "kernel",
        position: "Customer",
        content: "This is the best Hosting I have been Ever used it is too smooth to play in.",
        rating: 5
    }, {
        name: "Lee",
        position: "Customer",
        content: "Best hosting perfomence",
        rating: 5
    }, {
        name: "BLM",
        position: "Customer",
        content: "👍🙂 Very Nice support",
        rating: 5
    }, {
        name: "Zam",
        position: "Customer",
        content: "This is the best indian hosting that i purchased. They are also very active on his discord. 99.99% uptime.",
        rating: 5
    }];
    return a.jsxs("section", {
        id: "reviews",
        className: "section-container",
        children: [a.jsxs("div", {
            className: "text-center mb-16",
            children: [a.jsx("div", {
                className: "inline-block mb-6",
                children: a.jsx("span", {
                    className: "bg-badminner/10 text-badminner px-4 py-2 rounded-full text-sm font-medium border border-badminner/20",
                    children: "Trusted by Thousands"
                })
            }), a.jsxs("h2", {
                className: "section-heading",
                children: ["What Our ", a.jsx("span", {
                    className: "text-gradient",
                    children: "Users Say"
                })]
            }), a.jsxs("div", {
                className: "flex items-center justify-center gap-2 mb-6",
                children: [a.jsx("div", {
                    className: "flex",
                    children: [1, 2, 3, 4, 5].map(c => a.jsx(Fl, {
                        className: "h-6 w-6 text-badminner fill-badminner"
                    }, c))
                }), a.jsx("span", {
                    className: "text-lg font-medium",
                    children: "3.7 on Trustpilot"
                })]
            }), a.jsx("p", {
                className: "max-w-3xl mx-auto text-lg text-foreground/70",
                children: "Join hundreds of satisfied users who've elevated their hosting experience with YGHosting's revolutionary technology."
            })]
        }), a.jsxs("div", {
            className: "relative",
            children: [a.jsx("div", {
                className: "absolute left-0 top-1/2 transform -translate-y-1/2 z-10",
                style: {
                    opacity: t ? 1 : .3
                },
                children: a.jsx("button", {
                    onClick: () => s("left"),
                    className: "bg-secondary p-3 rounded-full hover:bg-badminner/10 transition-all duration-300 hover-effect",
                    disabled: !t,
                    children: a.jsx(J0, {
                        className: "h-6 w-6 text-white"
                    })
                })
            }), a.jsx("div", {
                className: "absolute right-0 top-1/2 transform -translate-y-1/2 z-10",
                style: {
                    opacity: r ? 1 : .3
                },
                children: a.jsx("button", {
                    onClick: () => s("right"),
                    className: "bg-secondary p-3 rounded-full hover:bg-badminner/10 transition-all duration-300 hover-effect",
                    disabled: !r,
                    children: a.jsx(Bd, {
                        className: "h-6 w-6 text-white"
                    })
                })
            }), a.jsx("div", {
                ref: e,
                className: "flex overflow-x-auto gap-6 py-8 px-4 -mx-4 scrollbar-none",
                children: l.map( (c, u) => a.jsxs("div", {
                    className: "review-card min-w-[320px] max-w-[400px] flex-shrink-0",
                    style: {
                        animationDelay: `${u * .1}s`
                    },
                    children: [a.jsxs("div", {
                        className: "flex mb-4",
                        children: [Array.from({
                            length: c.rating
                        }).map( (f, m) => a.jsx(Fl, {
                            className: "h-5 w-5 text-badminner fill-badminner"
                        }, m)), Array.from({
                            length: 5 - c.rating
                        }).map( (f, m) => a.jsx(Fl, {
                            className: "h-5 w-5 text-gray-400"
                        }, m + c.rating))]
                    }), a.jsx("p", {
                        className: "mb-6 text-foreground/90",
                        children: c.content
                    }), a.jsxs("div", {
                        className: "flex items-center",
                        children: [a.jsx("div", {
                            className: "w-10 h-10 rounded-full bg-badminner/20 flex items-center justify-center text-badminner font-bold",
                            children: c.name.charAt(0)
                        }), a.jsxs("div", {
                            className: "ml-3",
                            children: [a.jsx("h4", {
                                className: "font-bold",
                                children: c.name
                            }), a.jsx("p", {
                                className: "text-sm text-foreground/60",
                                children: c.position
                            })]
                        })]
                    })]
                }, u))
            })]
        }), a.jsx("div", {
            className: "mt-16 text-center",
            children: a.jsxs("a", {
                href: "https://www.trustpilot.com/review/yghosting.xyz",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center text-badminner hover:text-badminner-light transition-colors duration-300 font-medium hover-effect",
                children: ["See all reviews on Trustpilot", a.jsx(Bd, {
                    className: "ml-2 h-4 w-4"
                })]
            })
        })]
    })
}
  , ar = () => a.jsx("footer", {
    id: "contact",
    className: "bg-secondary pt-20 pb-10",
    children: a.jsxs("div", {
        className: "container mx-auto px-6 md:px-12",
        children: [a.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",
            children: [a.jsxs("div", {
                children: [a.jsxs("a", {
                    href: "#",
                    className: "text-2xl font-bold flex items-center mb-6",
                    children: [a.jsx("span", {
                        className: "text-badminner",
                        children: "YGHosting "
                    }), a.jsx("span", {
                        className: "text-white",
                        children: " Premium Host"
                    })]
                }), a.jsx("p", {
                    className: "text-foreground/70 mb-6",
                    children: "Elevating online experiences with premium Discord, Minecraft, and VPS hosting solutions and unparalleled performance."
                }), a.jsxs("div", {
                    className: "flex space-x-4",
                    children: [a.jsx("a", {
                        href: "https://discord.com/invite/nUvQRYAjQH",
                        className: "text-foreground/60 hover:text-badminner transition-colors duration-300 hover-effect",
                        children: a.jsx(gh, {
                            className: "h-5 w-5"
                        })
                    }), a.jsx(Ee, {
                        to: "/minecraft",
                        className: "text-foreground/60 hover:text-badminner transition-colors duration-300 hover-effect",
                        children: a.jsx(qo, {
                            className: "h-5 w-5"
                        })
                    }), a.jsx(Ee, {
                        to: "/vps",
                        className: "text-foreground/60 hover:text-badminner transition-colors duration-300 hover-effect",
                        children: a.jsx(qr, {
                            className: "h-5 w-5"
                        })
                    })]
                })]
            }), a.jsxs("div", {
                children: [a.jsx("h3", {
                    className: "text-lg font-bold mb-6",
                    children: "Our Services"
                }), a.jsxs("ul", {
                    className: "space-y-4",
                    children: [a.jsx("li", {
                        children: a.jsx("a", {
                            href: "https://discord.com/invite/nUvQRYAjQH",
                            className: "text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect",
                            children: "Discord Server"
                        })
                    }), a.jsx("li", {
                        children: a.jsx(Ee, {
                            to: "/minecraft",
                            className: "text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect",
                            children: "Minecraft Hosting"
                        })
                    }), a.jsx("li", {
                        children: a.jsx(Ee, {
                            to: "/vps",
                            className: "text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect",
                            children: "VPS Solutions"
                        })
                    }), a.jsx("li", {
                        children: a.jsx("a", {
                            href: "/billing/store",
                            className: "text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect",
                            children: "Pricing"
                        })
                    }), a.jsx("li", {
                        children: a.jsx("a", {
                            href: "/billing/contact.php",
                            className: "text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect",
                            children: "Contact Us"
                        })
                    })]
                })]
            }), a.jsxs("div", {
                children: [a.jsx("h3", {
                    className: "text-lg font-bold mb-6",
                    children: "Legal"
                }), a.jsxs("ul", {
                    className: "space-y-4",
                    children: [a.jsx("li", {
                        children: a.jsx(Ee, {
                            to: "/terms-of-service",
                            className: "text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect",
                            children: "Terms of Service"
                        })
                    }), a.jsx("li", {
                        children: a.jsx(Ee, {
                            to: "/privacy-policy",
                            className: "text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect",
                            children: "Privacy Policy"
                        })
                    }), a.jsx("li", {
                        children: a.jsx(Ee, {
                            to: "/refund-policy",
                            className: "text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect",
                            children: "Refund Policy"
                        })
                    })]
                })]
            }), a.jsxs("div", {
                children: [a.jsx("h3", {
                    className: "text-lg font-bold mb-6",
                    children: "Contact Us"
                }), a.jsx("ul", {
                    className: "space-y-4",
                    children: a.jsxs("li", {
                        className: "flex items-center",
                        children: [a.jsx(rx, {
                            className: "h-5 w-5 text-badminner mr-3"
                        }), a.jsx("a", {
                            href: "mailto:support@yghosting.xyz",
                            className: "text-foreground/70 hover:text-badminner transition-colors duration-300 hover-effect",
                            children: "support@yghosting.xyz"
                        })]
                    })
                })]
            })]
        }), a.jsx("div", {
            className: "border-t border-white/10 mt-16 pt-8 text-center text-foreground/60",
            children: a.jsxs("p", {
                children: ["© ", new Date().getFullYear(), " YGHosting. All rights reserved."]
            })
        })]
    })
})
  , yS = () => (x.useEffect( () => {
    const e = new IntersectionObserver(n => {
        n.forEach(r => {
            r.isIntersecting && r.target.classList.add("animate-fade-in")
        }
        )
    }
    ,{
        threshold: .1
    })
      , t = document.querySelectorAll(".animate-on-scroll");
    return t.forEach(n => {
        n.classList.add("opacity-0"),
        e.observe(n)
    }
    ),
    () => {
        t.forEach(n => e.unobserve(n))
    }
}
, []),
a.jsxs("div", {
    className: "relative overflow-hidden bg-background",
    children: [a.jsx(Xt, {}), a.jsx(lr, {}), a.jsx(hS, {}), a.jsx(gS, {}), a.jsx(vS, {}), a.jsx(ar, {})]
}))
  , xS = () => {
    const e = mi();
    return x.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    a.jsxs("div", {
        className: "min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6",
        children: [a.jsx(Xt, {}), a.jsxs("div", {
            className: "text-center max-w-md",
            children: [a.jsx("h1", {
                className: "text-9xl font-bold text-badminner mb-4",
                children: "404"
            }), a.jsx("p", {
                className: "text-2xl font-medium mb-8",
                children: "Oops! Page not found"
            }), a.jsx("p", {
                className: "text-foreground/70 mb-8",
                children: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
            }), a.jsx("a", {
                href: "/",
                className: "btn-primary inline-block hover-effect",
                children: "Return to Home"
            })]
        })]
    })
}
  , wS = tu("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-primary/40 bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , gu = x.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, i) => {
    const s = r ? Yo : "button";
    return a.jsx(s, {
        className: qt(wS({
            variant: t,
            size: n,
            className: e
        })),
        ref: i,
        ...o
    })
}
);
gu.displayName = "Button";
const bS = tu("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Ts({className: e, variant: t, ...n}) {
    return a.jsx("div", {
        className: qt(bS({
            variant: t
        }), e),
        ...n
    })
}
const SS = () => {
    const [e,t] = x.useState("")
      , [n,r] = x.useState("")
      , [o,i] = x.useState("")
      , s = [{
        name: "India",
        flag: "https://flagcdn.com/w320/in.png",
        code: "IN",
        popular: !0
    }, {
        name: "Singapore",
        flag: "https://flagcdn.com/w320/sg.png",
        code: "SG",
        disabled: !0
    }, {
        name: "Germany",
        flag: "https://flagcdn.com/w320/de.png",
        code: "DE",
        disabled: !0
    }]
      , l = [{
        name: "Java Edition",
        image: "/images/minecraft-java.png",
        description: "The original Minecraft Java with plugins and mod support"
    }, {
        name: "Bedrock Edition",
        image: "/images/minecraft-bedrock.png",
        description: "The original Minecraft Bedrock with plugins and mod support"
    }]
      , c = [{
        name: "Ultimate Minecraft Server",
        image: "/images/ryzen-9-7900.png",
        specs: "AMD Ryzen 9 7900, DDR5 ECC Memory and M.2 NVMe 5.0 SSD"
    }, {
        name: "Turbo Minecraft Server",
        image: "/images/ryzen-7-5700.png",
        specs: "AMD Ryzen 7 5700, DDR4 ECC Memory and M.2 NVMe 4.0 SSD"
    }, {
        name: "Standard Minecraft Server",
        image: "/images/xeon-e5-2696v4.png",
        specs: "Intel Xeon E5-2696v4, DDR4 ECC Memory and M.2 NVMe 3.0 SSD"
    }, {
        name: "Budget Minecraft Server",
        image: "/images/xeon-e5-2690.png",
        specs: "Intel Xeon E5-2690, DDR3 ECC Memory and M.2 NVMe 3.0 SSD"
    }]
      , u = (f, m) => {
        var y;
        return ((y = {
            "Java Edition": {
                "Ultimate Minecraft Server": [{
                    name: "Zombie Surge",
                    cpu: "100% (1 vCore)",
                    ram: "4GB DDR5 ECC Memory",
                    storage: "15GB M.2 NVMe 5.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹499/month",
                    link: "/billing/store/in-ultimate-mc/zombie-surge"
                }, {
                    name: "Skeleton Strike",
                    cpu: "150% (1.5 vCore)",
                    ram: "6GB DDR5 ECC Memory",
                    storage: "20GB M.2 NVMe 5.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹749/month",
                    link: "/billing/store/in-ultimate-mc/skeleton-strike"
                }, {
                    name: "Creeper Charge",
                    cpu: "200% (2 vCore)",
                    ram: "8GB DDR5 ECC Memory",
                    storage: "30GB M.2 NVMe 5.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹999/month",
                    link: "/billing/store/in-ultimate-mc/creeper-charge",
                    popular: !0
                }, {
                    name: "Enderman Shift",
                    cpu: "300% (3 vCore)",
                    ram: "12GB DDR5 ECC Memory",
                    storage: "50GB M.2 NVMe 5.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,499/month",
                    link: "/billing/store/in-ultimate-mc/enderman-shift"
                }, {
                    name: "Blaze Storm",
                    cpu: "400% (4 vCore)",
                    ram: "16GB DDR5 ECC Memory",
                    storage: "60GB M.2 NVMe 5.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,999/month",
                    link: "/billing/store/in-ultimate-mc/blaze-storm",
                    popular: !0
                }, {
                    name: "Wither Wrath",
                    cpu: "600% (6 vCore)",
                    ram: "24GB DDR5 ECC Memory",
                    storage: "90GB M.2 NVMe 5.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹2,999/month",
                    link: "/billing/store/in-ultimate-mc/wither-wrath"
                }, {
                    name: "Dragon Core",
                    cpu: "800% (8 vCore)",
                    ram: "32GB DDR5 ECC Memory",
                    storage: "120GB M.2 NVMe 5.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹3,999/month",
                    link: "/billing/store/in-ultimate-mc/dragon-core"
                }],
                "Turbo Minecraft Server": [{
                    name: "Zombie Surge",
                    cpu: "100% (1 vCore)",
                    ram: "4GB DDR4 ECC Memory",
                    storage: "15GB M.2 NVMe 4.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹399/month",
                    link: "/billing/store/in-turbo-mc/zombie-surge"
                }, {
                    name: "Skeleton Strike",
                    cpu: "150% (1.5 vCore)",
                    ram: "6GB DDR4 ECC Memory",
                    storage: "20GB M.2 NVMe 4.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹599/month",
                    link: "/billing/store/in-turbo-mc/skeleton-strike"
                }, {
                    name: "Creeper Charge",
                    cpu: "200% (2 vCore)",
                    ram: "8GB DDR4 ECC Memory",
                    storage: "30GB M.2 NVMe 4.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹799/month",
                    link: "/billing/store/in-turbo-mc/creeper-charge",
                    popular: !0
                }, {
                    name: "Enderman Shift",
                    cpu: "300% (3 vCore)",
                    ram: "12GB DDR4 ECC Memory",
                    storage: "50GB M.2 NVMe 4.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,199/month",
                    link: "/billing/store/in-turbo-mc/enderman-shift"
                }, {
                    name: "Blaze Storm",
                    cpu: "400% (4 vCore)",
                    ram: "16GB DDR4 ECC Memory",
                    storage: "60GB M.2 NVMe 4.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,599/month",
                    link: "/billing/store/in-turbo-mc/blaze-storm",
                    popular: !0
                }, {
                    name: "Wither Wrath",
                    cpu: "600% (6 vCore)",
                    ram: "24GB DDR4 ECC Memory",
                    storage: "90GB M.2 NVMe 4.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹2,399/month",
                    link: "/billing/store/in-turbo-mc/wither-wrath"
                }, {
                    name: "Dragon Core",
                    cpu: "800% (8 vCore)",
                    ram: "32GB DDR4 ECC Memory",
                    storage: "120GB M.2 NVMe 4.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹3,199/month",
                    link: "/billing/store/in-turbo-mc/dragon-core"
                }],
                "Standard Minecraft Server": [{
                    name: "Chicken Fury",
                    cpu: "50% (0.5 vCore)",
                    ram: "2GB DDR4 ECC Memory",
                    storage: "10GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹299/month",
                    link: "/billing/store/in-standard-mc/chicken-fury"
                }, {
                    name: "Zombie Surge",
                    cpu: "100% (1 vCore)",
                    ram: "4GB DDR4 ECC Memory",
                    storage: "15GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹299/month",
                    link: "/billing/store/in-standard-mc/zombie-surge"
                }, {
                    name: "Skeleton Strike",
                    cpu: "150% (1.5 vCore)",
                    ram: "6GB DDR4 ECC Memory",
                    storage: "20GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹449/month",
                    link: "/billing/store/in-standard-mc/skeleton-strike"
                }, {
                    name: "Creeper Charge",
                    cpu: "200% (2 vCore)",
                    ram: "8GB DDR4 ECC Memory",
                    storage: "30GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹599/month",
                    link: "/billing/store/in-standard-mc/creeper-charge",
                    popular: !0
                }, {
                    name: "Enderman Shift",
                    cpu: "300% (3 vCore)",
                    ram: "12GB DDR4 ECC Memory",
                    storage: "50GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹899/month",
                    link: "/billing/store/in-standard-mc/enderman-shift"
                }, {
                    name: "Blaze Storm",
                    cpu: "400% (4 vCore)",
                    ram: "16GB DDR4 ECC Memory",
                    storage: "60GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,199/month",
                    link: "/billing/store/in-standard-mc/blaze-storm",
                    popular: !0
                }, {
                    name: "Wither Wrath",
                    cpu: "600% (6 vCore)",
                    ram: "24GB DDR4 ECC Memory",
                    storage: "90GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,799/month",
                    link: "/billing/store/in-standard-mc/wither-wrath"
                }, {
                    name: "Dragon Core",
                    cpu: "800% (8 vCore)",
                    ram: "32GB DDR4 ECC Memory",
                    storage: "120GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹2,399/month",
                    link: "/billing/store/in-standard-mc/dragon-core"
                }],
                "Budget Minecraft Server": [{
                    name: "Chicken Fury",
                    cpu: "50% (0.5 vCore)",
                    ram: "2GB DDR3 ECC Memory",
                    storage: "10GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹99/month",
                    link: "/billing/store/in-budget-mc/chicken-fury"
                }, {
                    name: "Zombie Surge",
                    cpu: "100% (1 vCore)",
                    ram: "4GB DDR3 ECC Memory",
                    storage: "15GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹199/month",
                    link: "/billing/store/in-budget-mc/zombie-surge"
                }, {
                    name: "Skeleton Strike",
                    cpu: "150% (1.5 vCore)",
                    ram: "6GB DDR3 ECC Memory",
                    storage: "20GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹299/month",
                    link: "/billing/store/in-budget-mc/skeleton-strike"
                }, {
                    name: "Creeper Charge",
                    cpu: "200% (2 vCore)",
                    ram: "8GB DDR3 ECC Memory",
                    storage: "30GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹399/month",
                    link: "/billing/store/in-budget-mc/creeper-charge",
                    popular: !0
                }, {
                    name: "Enderman Shift",
                    cpu: "300% (3 vCore)",
                    ram: "12GB DDR3 ECC Memory",
                    storage: "50GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹599/month",
                    link: "/billing/store/in-budget-mc/enderman-shift"
                }, {
                    name: "Blaze Storm",
                    cpu: "400% (4 vCore)",
                    ram: "16GB DDR3 ECC Memory",
                    storage: "60GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹799/month",
                    link: "/billing/store/in-budget-mc/blaze-storm",
                    popular: !0
                }, {
                    name: "Wither Wrath",
                    cpu: "600% (6 vCore)",
                    ram: "24GB DDR3 ECC Memory",
                    storage: "90GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,199/month",
                    link: "/billing/store/in-budget-mc/wither-wrath"
                }, {
                    name: "Dragon Core",
                    cpu: "800% (8 vCore)",
                    ram: "32GB DDR3 ECC Memory",
                    storage: "120GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,599/month",
                    link: "/billing/store/in-budget-mc/dragon-core"
                }]
            },
            "Bedrock Edition": {
                "Ultimate Minecraft Server": [{
                    name: "Zombie Surge",
                    cpu: "100% (1 vCore)",
                    ram: "4GB DDR5 ECC Memory",
                    storage: "15GB M.2 NVMe 5.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹499/month",
                    link: "/billing/store/in-ultimate-mc/zombie-surge"
                }, {
                    name: "Skeleton Strike",
                    cpu: "150% (1.5 vCore)",
                    ram: "6GB DDR5 ECC Memory",
                    storage: "20GB M.2 NVMe 5.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹749/month",
                    link: "/billing/store/in-ultimate-mc/skeleton-strike"
                }, {
                    name: "Creeper Charge",
                    cpu: "200% (2 vCore)",
                    ram: "8GB DDR5 ECC Memory",
                    storage: "30GB M.2 NVMe 5.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹999/month",
                    link: "/billing/store/in-ultimate-mc/creeper-charge",
                    popular: !0
                }, {
                    name: "Enderman Shift",
                    cpu: "300% (3 vCore)",
                    ram: "12GB DDR5 ECC Memory",
                    storage: "50GB M.2 NVMe 5.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,499/month",
                    link: "/billing/store/in-ultimate-mc/enderman-shift"
                }, {
                    name: "Blaze Storm",
                    cpu: "400% (4 vCore)",
                    ram: "16GB DDR5 ECC Memory",
                    storage: "60GB M.2 NVMe 5.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,999/month",
                    link: "/billing/store/in-ultimate-mc/blaze-storm",
                    popular: !0
                }, {
                    name: "Wither Wrath",
                    cpu: "600% (6 vCore)",
                    ram: "24GB DDR5 ECC Memory",
                    storage: "90GB M.2 NVMe 5.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹2,999/month",
                    link: "/billing/store/in-ultimate-mc/wither-wrath"
                }, {
                    name: "Dragon Core",
                    cpu: "800% (8 vCore)",
                    ram: "32GB DDR5 ECC Memory",
                    storage: "120GB M.2 NVMe 5.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹3,999/month",
                    link: "/billing/store/in-ultimate-mc/dragon-core"
                }],
                "Turbo Minecraft Server": [{
                    name: "Zombie Surge",
                    cpu: "100% (1 vCore)",
                    ram: "4GB DDR4 ECC Memory",
                    storage: "15GB M.2 NVMe 4.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹399/month",
                    link: "/billing/store/in-turbo-mc/zombie-surge"
                }, {
                    name: "Skeleton Strike",
                    cpu: "150% (1.5 vCore)",
                    ram: "6GB DDR4 ECC Memory",
                    storage: "20GB M.2 NVMe 4.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹599/month",
                    link: "/billing/store/in-turbo-mc/skeleton-strike"
                }, {
                    name: "Creeper Charge",
                    cpu: "200% (2 vCore)",
                    ram: "8GB DDR4 ECC Memory",
                    storage: "30GB M.2 NVMe 4.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹799/month",
                    link: "/billing/store/in-turbo-mc/creeper-charge",
                    popular: !0
                }, {
                    name: "Enderman Shift",
                    cpu: "300% (3 vCore)",
                    ram: "12GB DDR4 ECC Memory",
                    storage: "50GB M.2 NVMe 4.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,199/month",
                    link: "/billing/store/in-turbo-mc/enderman-shift"
                }, {
                    name: "Blaze Storm",
                    cpu: "400% (4 vCore)",
                    ram: "16GB DDR4 ECC Memory",
                    storage: "60GB M.2 NVMe 4.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,599/month",
                    link: "/billing/store/in-turbo-mc/blaze-storm",
                    popular: !0
                }, {
                    name: "Wither Wrath",
                    cpu: "600% (6 vCore)",
                    ram: "24GB DDR4 ECC Memory",
                    storage: "90GB M.2 NVMe 4.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹2,399/month",
                    link: "/billing/store/in-turbo-mc/wither-wrath"
                }, {
                    name: "Dragon Core",
                    cpu: "800% (8 vCore)",
                    ram: "32GB DDR4 ECC Memory",
                    storage: "120GB M.2 NVMe 4.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹3,199/month",
                    link: "/billing/store/in-turbo-mc/dragon-core"
                }],
                "Standard Minecraft Server": [{
                    name: "Chicken Fury",
                    cpu: "50% (0.5 vCore)",
                    ram: "2GB DDR4 ECC Memory",
                    storage: "10GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹299/month",
                    link: "/billing/store/in-standard-mc/chicken-fury"
                }, {
                    name: "Zombie Surge",
                    cpu: "100% (1 vCore)",
                    ram: "4GB DDR4 ECC Memory",
                    storage: "15GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹299/month",
                    link: "/billing/store/in-standard-mc/zombie-surge"
                }, {
                    name: "Skeleton Strike",
                    cpu: "150% (1.5 vCore)",
                    ram: "6GB DDR4 ECC Memory",
                    storage: "20GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹449/month",
                    link: "/billing/store/in-standard-mc/skeleton-strike"
                }, {
                    name: "Creeper Charge",
                    cpu: "200% (2 vCore)",
                    ram: "8GB DDR4 ECC Memory",
                    storage: "30GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹599/month",
                    link: "/billing/store/in-standard-mc/creeper-charge",
                    popular: !0
                }, {
                    name: "Enderman Shift",
                    cpu: "300% (3 vCore)",
                    ram: "12GB DDR4 ECC Memory",
                    storage: "50GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹899/month",
                    link: "/billing/store/in-standard-mc/enderman-shift"
                }, {
                    name: "Blaze Storm",
                    cpu: "400% (4 vCore)",
                    ram: "16GB DDR4 ECC Memory",
                    storage: "60GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,199/month",
                    link: "/billing/store/in-standard-mc/blaze-storm",
                    popular: !0
                }, {
                    name: "Wither Wrath",
                    cpu: "600% (6 vCore)",
                    ram: "24GB DDR4 ECC Memory",
                    storage: "90GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,799/month",
                    link: "/billing/store/in-standard-mc/wither-wrath"
                }, {
                    name: "Dragon Core",
                    cpu: "800% (8 vCore)",
                    ram: "32GB DDR4 ECC Memory",
                    storage: "120GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹2,399/month",
                    link: "/billing/store/in-standard-mc/dragon-core"
                }],
                "Budget Minecraft Server": [{
                    name: "Chicken Fury",
                    cpu: "50% (0.5 vCore)",
                    ram: "2GB DDR3 ECC Memory",
                    storage: "10GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹99/month",
                    link: "/billing/store/in-budget-mc/chicken-fury"
                }, {
                    name: "Zombie Surge",
                    cpu: "100% (1 vCore)",
                    ram: "4GB DDR3 ECC Memory",
                    storage: "15GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹199/month",
                    link: "/billing/store/in-budget-mc/zombie-surge"
                }, {
                    name: "Skeleton Strike",
                    cpu: "150% (1.5 vCore)",
                    ram: "6GB DDR3 ECC Memory",
                    storage: "20GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹299/month",
                    link: "/billing/store/in-budget-mc/skeleton-strike"
                }, {
                    name: "Creeper Charge",
                    cpu: "200% (2 vCore)",
                    ram: "8GB DDR3 ECC Memory",
                    storage: "30GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹399/month",
                    link: "/billing/store/in-budget-mc/creeper-charge",
                    popular: !0
                }, {
                    name: "Enderman Shift",
                    cpu: "300% (3 vCore)",
                    ram: "12GB DDR3 ECC Memory",
                    storage: "50GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹599/month",
                    link: "/billing/store/in-budget-mc/enderman-shift"
                }, {
                    name: "Blaze Storm",
                    cpu: "400% (4 vCore)",
                    ram: "16GB DDR3 ECC Memory",
                    storage: "60GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹799/month",
                    link: "/billing/store/in-budget-mc/blaze-storm",
                    popular: !0
                }, {
                    name: "Wither Wrath",
                    cpu: "600% (6 vCore)",
                    ram: "24GB DDR3 ECC Memory",
                    storage: "90GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,199/month",
                    link: "/billing/store/in-budget-mc/wither-wrath"
                }, {
                    name: "Dragon Core",
                    cpu: "800% (8 vCore)",
                    ram: "32GB DDR3 ECC Memory",
                    storage: "120GB M.2 NVMe 3.0 SSD",
                    bandwidth: "Unlimited",
                    protection: "OVH Shield (On-Demand)",
                    deployment: "Auto/Instant Deployment",
                    price: "₹1,599/month",
                    link: "/billing/store/in-budget-mc/dragon-core"
                }]
            }
        }[f]) == null ? void 0 : y[m]) || []
    }
    ;
    return a.jsxs("div", {
        className: "relative overflow-hidden bg-background",
        children: [a.jsx(Xt, {}), a.jsx(lr, {}), a.jsx("div", {
            className: "pt-28 pb-20",
            children: a.jsxs("div", {
                className: "container mx-auto px-6 md:px-12",
                children: [a.jsxs("div", {
                    className: "text-center mb-16",
                    children: [a.jsx("div", {
                        className: "inline-block mb-6",
                        children: a.jsx("span", {
                            className: "bg-badminner/10 text-badminner px-4 py-2 rounded-full text-sm font-medium border border-badminner/20",
                            children: "Premium Minecraft"
                        })
                    }), a.jsxs("h1", {
                        className: "hero-heading",
                        children: ["Premium ", a.jsx("span", {
                            className: "text-gradient",
                            children: "Minecraft"
                        }), " Servers"]
                    }), a.jsx("p", {
                        className: "max-w-3xl mx-auto text-lg text-foreground/70 mt-6",
                        children: "Experience high-performance Minecraft hosting with advanced plugins, easy management, and 99% uptime."
                    })]
                }), a.jsxs("div", {
                    className: "mb-12",
                    children: [a.jsxs("div", {
                        className: "text-center mb-8",
                        children: [a.jsxs("h2", {
                            className: "text-2xl font-bold mb-4 flex items-center justify-center",
                            children: [a.jsx(hh, {
                                className: "h-6 w-6 text-badminner mr-2"
                            }), "Choose Your Location"]
                        }), a.jsx(Ee, {
                            to: "/latency",
                            children: a.jsx(gu, {
                                variant: "outline",
                                children: "Check Latency"
                            })
                        }), a.jsx("p", {
                            className: "text-foreground/70",
                            children: "Select the server location closest to your players"
                        })]
                    }), a.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",
                        children: s.map(f => a.jsx("div", {
                            className: "space-y-4",
                            children: a.jsx("div", {
                                className: `cursor-pointer p-6 rounded-lg border transition-all duration-300 ${e === f.name ? "border-badminner bg-badminner/10" : "border-badminner/20 bg-secondary/30 hover:border-badminner/40"} ${f.disabled ? "cursor-not-allowed opacity-50 grayscale hover:border-badminner/20" : ""}`,
                                onClick: () => {
                                    f.disabled || t(f.name)
                                }
                                ,
                                children: a.jsxs("div", {
                                    className: "text-center",
                                    children: [a.jsx("img", {
                                        src: f.flag,
                                        alt: `${f.name} flag`,
                                        className: "w-16 h-12 mx-auto mb-4 rounded object-cover"
                                    }), a.jsx("h3", {
                                        className: "text-lg font-semibold",
                                        children: f.name
                                    }), f.popular && a.jsx("p", {
                                        className: "mt-1",
                                        children: a.jsx(Ts, {
                                            variant: "default",
                                            children: "Popular"
                                        })
                                    }), f.disabled && a.jsx("p", {
                                        className: "text-sm text-badminner mt-1 font-medium",
                                        children: a.jsx(Ts, {
                                            children: "Available"
                                        })
                                    })]
                                })
                            })
                        }, f.code))
                    })]
                }), e && a.jsxs("div", {
                    className: "mb-12",
                    children: [a.jsxs("div", {
                        className: "text-center mb-8",
                        children: [a.jsxs("h2", {
                            className: "text-2xl font-bold mb-4 flex items-center justify-center",
                            children: [a.jsx(qo, {
                                className: "h-6 w-6 text-badminner mr-2"
                            }), "Select Minecraft Version"]
                        }), a.jsx("p", {
                            className: "text-foreground/70",
                            children: "Choose your preferred Minecraft edition"
                        })]
                    }), a.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto",
                        children: l.map(f => a.jsx("div", {
                            className: `cursor-pointer p-6 rounded-lg border transition-all duration-300 ${n === f.name ? "border-badminner bg-badminner/10" : "border-badminner/20 bg-secondary/30 hover:border-badminner/40"}`,
                            onClick: () => r(f.name),
                            children: a.jsxs("div", {
                                className: "text-center",
                                children: [a.jsx("img", {
                                    src: f.image,
                                    alt: f.name,
                                    className: "w-full h-48 mx-auto mb-4 rounded-lg object-cover"
                                }), a.jsx("h3", {
                                    className: "text-lg font-semibold mb-2",
                                    children: f.name
                                }), a.jsx("p", {
                                    className: "text-sm text-foreground/70",
                                    children: f.description
                                })]
                            })
                        }, f.name))
                    })]
                }), n && a.jsxs("div", {
                    className: "mb-12",
                    children: [a.jsxs("div", {
                        className: "text-center mb-8",
                        children: [a.jsxs("h2", {
                            className: "text-2xl font-bold mb-4 flex items-center justify-center",
                            children: [a.jsx(ph, {
                                className: "h-6 w-6 text-badminner mr-2"
                            }), "Select Your Processor"]
                        }), a.jsx("p", {
                            className: "text-foreground/70",
                            children: "Choose the CPU that best fits your performance needs"
                        })]
                    }), a.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: c.map(f => a.jsx("div", {
                            className: `cursor-pointer p-6 rounded-lg border transition-all duration-300 ${o === f.name ? "border-badminner bg-badminner/10" : "border-badminner/20 bg-secondary/30 hover:border-badminner/40"}`,
                            onClick: () => i(f.name),
                            children: a.jsxs("div", {
                                className: "text-center",
                                children: [a.jsx("img", {
                                    src: f.image,
                                    alt: f.name,
                                    className: "w-full h-32 mx-auto mb-4 rounded object-cover"
                                }), a.jsx("h3", {
                                    className: "text-lg font-semibold mb-2",
                                    children: f.name
                                }), a.jsx("p", {
                                    className: "text-sm text-foreground/70",
                                    children: f.specs
                                })]
                            })
                        }, f.name))
                    })]
                }), o && a.jsxs("div", {
                    className: "mb-12",
                    children: [a.jsxs("div", {
                        className: "text-center mb-8",
                        children: [a.jsxs("h2", {
                            className: "text-2xl font-bold mb-4",
                            children: [n, " Server Plans with ", o]
                        }), a.jsxs("p", {
                            className: "text-foreground/70",
                            children: ["Available in ", e]
                        })]
                    }), a.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: u(n, o).map(f => a.jsxs("div", {
                            className: `bg-secondary/30 rounded-lg p-8 border border-badminner/20 relative ${f.popular ? "transform scale-105 lg:scale-110 z-10 shadow-lg" : ""}`,
                            children: [f.popular && a.jsx("div", {
                                className: "absolute top-0 right-0 bg-badminner text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg font-medium",
                                children: "Most Popular"
                            }), a.jsx("div", {
                                className: "mb-6",
                                children: a.jsx(qr, {
                                    className: "h-10 w-10 text-badminner"
                                })
                            }), a.jsx("h3", {
                                className: "text-2xl font-bold mb-4",
                                children: f.name
                            }), a.jsx("div", {
                                className: "text-2xl font-bold text-badminner mb-6",
                                children: f.price
                            }), a.jsxs("ul", {
                                className: "space-y-3 mb-8",
                                children: [a.jsxs("li", {
                                    className: "flex items-start",
                                    children: [a.jsx("span", {
                                        className: "text-badminner mr-2",
                                        children: "•"
                                    }), a.jsx("span", {
                                        children: f.cpu
                                    })]
                                }), a.jsxs("li", {
                                    className: "flex items-start",
                                    children: [a.jsx("span", {
                                        className: "text-badminner mr-2",
                                        children: "•"
                                    }), a.jsx("span", {
                                        children: f.ram
                                    })]
                                }), a.jsxs("li", {
                                    className: "flex items-start",
                                    children: [a.jsx("span", {
                                        className: "text-badminner mr-2",
                                        children: "•"
                                    }), a.jsx("span", {
                                        children: f.storage
                                    })]
                                }), a.jsxs("li", {
                                    className: "flex items-start",
                                    children: [a.jsx("span", {
                                        className: "text-badminner mr-2",
                                        children: "•"
                                    }), a.jsx("span", {
                                        children: f.protection
                                    })]
                                }), a.jsxs("li", {
                                    className: "flex items-start",
                                    children: [a.jsx("span", {
                                        className: "text-badminner mr-2",
                                        children: "•"
                                    }), a.jsx("span", {
                                        children: f.deployment
                                    })]
                                })]
                            }), a.jsx("div", {
                                className: "text-center",
                                children: a.jsx("a", {
                                    href: f.link,
                                    target: "_blank",
                                    className: `w-full hover-effect ${f.popular ? "btn-primary" : "btn-secondary"}`,
                                    children: "Order Now"
                                })
                            })]
                        }, f.name))
                    })]
                }), a.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8 mt-12",
                    children: [a.jsxs("div", {
                        className: "bg-secondary/30 rounded-lg p-8 border border-badminner/20",
                        children: [a.jsx("div", {
                            className: "mb-6",
                            children: a.jsx(qo, {
                                className: "h-10 w-10 text-badminner"
                            })
                        }), a.jsx("h3", {
                            className: "text-2xl font-bold mb-4",
                            children: "Game Server Features"
                        }), a.jsxs("ul", {
                            className: "space-y-3",
                            children: [a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "One-click modpack installation"
                                })]
                            }), a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "Support for all major versions"
                                })]
                            }), a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "Custom plugin support"
                                })]
                            }), a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "World backups included"
                                })]
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "bg-secondary/30 rounded-lg p-8 border border-badminner/20",
                        children: [a.jsx("div", {
                            className: "mb-6",
                            children: a.jsx(vh, {
                                className: "h-10 w-10 text-badminner"
                            })
                        }), a.jsx("h3", {
                            className: "text-2xl font-bold mb-4",
                            children: "Performance"
                        }), a.jsxs("ul", {
                            className: "space-y-3",
                            children: [a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "NVMe SSD storage"
                                })]
                            }), a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "Low latency network"
                                })]
                            }), a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "Anti-lag systems"
                                })]
                            }), a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "99% uptime"
                                })]
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "bg-secondary/30 rounded-lg p-8 border border-badminner/20",
                        children: [a.jsx("div", {
                            className: "mb-6",
                            children: a.jsx(Js, {
                                className: "h-10 w-10 text-badminner"
                            })
                        }), a.jsx("h3", {
                            className: "text-2xl font-bold mb-4",
                            children: "Security"
                        }), a.jsxs("ul", {
                            className: "space-y-3",
                            children: [a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "DDoS protection"
                                })]
                            }), a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "2 Backups/Database/Additional Ports"
                                })]
                            }), a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "Firewall protection"
                                })]
                            }), a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "SSL encryption"
                                })]
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "bg-secondary/30 rounded-lg p-8 border border-badminner/20",
                        children: [a.jsx("div", {
                            className: "mb-6",
                            children: a.jsx(mh, {
                                className: "h-10 w-10 text-badminner"
                            })
                        }), a.jsx("h3", {
                            className: "text-2xl font-bold mb-4",
                            children: "Management"
                        }), a.jsxs("ul", {
                            className: "space-y-3",
                            children: [a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "Pterodactyl panel"
                                })]
                            }), a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "SFTP access"
                                })]
                            }), a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "Web console"
                                })]
                            }), a.jsxs("li", {
                                className: "flex items-start",
                                children: [a.jsx("span", {
                                    className: "text-badminner mr-2",
                                    children: "•"
                                }), a.jsx("span", {
                                    children: "Ticket support"
                                })]
                            })]
                        })]
                    })]
                })]
            })
        }), a.jsx(ar, {})]
    })
}
  , CS = () => {
    const [e,t] = x.useState("")
      , [n,r] = x.useState("")
      , o = [{
        name: "India",
        flag: "https://flagcdn.com/w320/in.png",
        code: "IN",
        popular: !0
    }, {
        name: "Singapore",
        flag: "https://flagcdn.com/w320/sg.png",
        code: "SG",
        disabled: !0
    }, {
        name: "Germany",
        flag: "https://flagcdn.com/w320/de.png",
        code: "DE",
        disabled: !0
    }]
      , i = [{
        name: "EPIC VPS",
        image: "/assets/image.png",
        specs: "AMD RYZEN X3D SERIES, DDR5 ECC Memory and M.2 NVMe 5.0 SSD"
    }, {
        name: "VPS",
        image: "/assets/image.png",
        specs: "AMD EPYC 7000 SERIES, DDR5 ECC Memory and M.2 NVMe 5.0 SSD"
    }], s = l => ({
        "KVM Ultimate VPS": [{
            name: "Ultimate Mega",
            cpu: "3 vCores CPU",
            ram: "16GB DDR5 ECC Memory",
            storage: "60GB M.2 NVMe 5.0 SSD",
            bandwidth: "2TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹1,999/month",
            link: "/billing/store/in-ultimate/ultimate-mega"
        }, {
            name: "Ultimate Giga",
            cpu: "6 vCores CPU",
            ram: "32GB DDR5 ECC Memory",
            storage: "120GB M.2 NVMe 5.0 SSD",
            bandwidth: "4TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹3,999/month",
            link: "/billing/store/in-ultimate/ultimate-giga",
            popular: !0
        }, {
            name: "Ultimate Ultra",
            cpu: "9 vCores CPU",
            ram: "48GB DDR5 ECC Memory",
            storage: "180GB M.2 NVMe 5.0 SSD",
            bandwidth: "6TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹5,999/month",
            link: "/billing/store/in-ultimate/ultimate-ultra"
        }, {
            name: "Ultimate Supreme",
            cpu: "12 vCores CPU",
            ram: "64GB DDR5 ECC Memory",
            storage: "240GB M.2 NVMe 5.0 SSD",
            bandwidth: "8TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹7,999/month",
            link: "/billing/store/in-ultimate/ultimate-supreme"
        }],
        "EPIC VPS": [{
            name: "Game Starter - Contact Support",
            cpu: "2 vCores CPU",
            ram: "8GB DDR5 ECC Memory",
            storage: "50GB M.2 NVMe 4.0 SSD",
            bandwidth: "1TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹999/month",
            link: "https://yghosting.xyz/vps.html"
        }, {
            name: "Game Mega - Contact Support",
            cpu: "3 vCores CPU",
            ram: "16GB DDR5 ECC Memory",
            storage: "60GB M.2 NVMe 4.0 SSD",
            bandwidth: "2TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹1,599/month",
            link: "https://yghosting.xyz/vps.html"
        }, {
            name: "Game Giga - Contact Support",
            cpu: "6 vCores CPU",
            ram: "32GB DDR5 ECC Memory",
            storage: "120GB M.2 NVMe 4.0 SSD",
            bandwidth: "4TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹3,199/month",
            link: "https://yghosting.xyz/vps.html",
            popular: !0
        }, {
            name: "Game Ultra - Contact Support",
            cpu: "9 vCores CPU",
            ram: "48GB DDR5 ECC Memory",
            storage: "180GB M.2 NVMe 4.0 SSD",
            bandwidth: "6TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹4,799/month",
            link: "https://yghosting.xyz/vps.html"
        }, {
            name: "Game Supreme - Contact Support",
            cpu: "12 vCores CPU",
            ram: "64GB DDR5 ECC Memory",
            storage: "240GB M.2 NVMe 4.0 SSD",
            bandwidth: "8TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹6,399/month",
            link: "https://yghosting.xyz/vps.html"
        }],
        "VPS": [{
            name: "Standard Starter",
            cpu: "2 vCores CPU",
            ram: "8GB DDR4 ECC Memory",
            storage: "50GB M.2 NVMe 3.0 SSD",
            bandwidth: "500GB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹500/month",
            link: "https://yghosting.xyz/vps.html"
        }, {
            name: "Standard Mega",
            cpu: "4 vCores CPU",
            ram: "16GB DDR4 ECC Memory",
            storage: "60GB M.2 NVMe 3.0 SSD",
            bandwidth: "1TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹950/month",
            link: "https://yghosting.xyz/vps.html"
        }, {
            name: "Standard Giga",
            cpu: "8 vCores CPU",
            ram: "32GB DDR4 ECC Memory",
            storage: "120GB M.2 NVMe 3.0 SSD",
            bandwidth: "2TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹2,000/month",
            link: "https://yghosting.xyz/vps.html",
            popular: !0
        }, {
            name: "Standard Ultra",
            cpu: "12 vCores CPU",
            ram: "48GB DDR4 ECC Memory",
            storage: "180GB M.2 NVMe 3.0 SSD",
            bandwidth: "3TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹2,600/month",
            link: "https://yghosting.xyz/vps.html"
        }, {
            name: "Standard Supreme",
            cpu: "16 vCores CPU",
            ram: "64GB DDR4 ECC Memory",
            storage: "240GB M.2 NVMe 3.0 SSD",
            bandwidth: "4TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹4,000/month",
            link: "https://yghosting.xyz/vps.html",
            popular: !0
        }, {
            name: "Standard Prime - Contact Support",
            cpu: "24 vCores CPU",
            ram: "96GB DDR4 ECC Memory",
            storage: "360GB M.2 NVMe 3.0 SSD",
            bandwidth: "6TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹7,000/month",
            link: "https://yghosting.xyz/vps.html"
        }, {
            name: "Standard Extreme - Contact Support",
            cpu: "32 vCores CPU",
            ram: "128GB DDR4 ECC Memory",
            storage: "480GB M.2 NVMe 3.0 SSD",
            bandwidth: "8TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹9,400/month",
            link: "https://yghosting.xyz/vps.html"
        }],
        "KVM Budget VPS": [{
            name: "Budget Starter",
            cpu: "2 vCores CPU",
            ram: "8GB DDR3 ECC Memory",
            storage: "50GB M.2 NVMe 3.0 SSD",
            bandwidth: "500GB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹699/month",
            link: "/billing/store/in-budget/budget-starter"
        }, {
            name: "Budget Mega",
            cpu: "3 vCores CPU",
            ram: "16GB DDR3 ECC Memory",
            storage: "60GB M.2 NVMe 3.0 SSD",
            bandwidth: "1TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹799/month",
            link: "/billing/store/in-budget/budget-mega"
        }, {
            name: "Budget Giga",
            cpu: "6 vCores CPU",
            ram: "32GB DDR3 ECC Memory",
            storage: "120GB M.2 NVMe 3.0 SSD",
            bandwidth: "2TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹1,599/month",
            link: "/billing/store/in-budget/budget-giga",
            popular: !0
        }, {
            name: "Budget Ultra",
            cpu: "9 vCores CPU",
            ram: "48GB DDR3 ECC Memory",
            storage: "180GB M.2 NVMe 3.0 SSD",
            bandwidth: "3TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹2,399/month",
            link: "/billing/store/in-budget/budget-ultra"
        }, {
            name: "Budget Supreme",
            cpu: "12 vCores CPU",
            ram: "64GB DDR3 ECC Memory",
            storage: "240GB M.2 NVMe 3.0 SSD",
            bandwidth: "4TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹3,199/month",
            link: "/billing/store/in-budget/budget-supreme",
            popular: !0
        }, {
            name: "Budget Prime",
            cpu: "18 vCores CPU",
            ram: "96GB DDR3 ECC Memory",
            storage: "360GB M.2 NVMe 3.0 SSD",
            bandwidth: "6TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹4,799/month",
            link: "/billing/store/in-budget/budget-prime"
        }, {
            name: "Budget Extreme",
            cpu: "24 vCores CPU",
            ram: "128GB DDR3 ECC Memory",
            storage: "480GB M.2 NVMe 3.0 SSD",
            bandwidth: "8TB @ 1Gbps (Unmetered Available)",
            protection: "OVH Shield (On-Demand)",
            deployment: "Auto/Instant Deployment",
            price: "₹6,399/month",
            link: "/billing/store/in-budget/budget-extreme"
        }]
    })[l] || [];
    return a.jsxs("div", {
        className: "relative overflow-hidden bg-background",
        children: [a.jsx(Xt, {}), a.jsx(lr, {}), a.jsx("div", {
            className: "pt-28 pb-20",
            children: a.jsxs("div", {
                className: "container mx-auto px-6 md:px-12",
                children: [a.jsxs("div", {
                    className: "text-center mb-16",
                    children: [a.jsx("div", {
                        className: "inline-block mb-6",
                        children: a.jsx("span", {
                            className: "bg-badminner/10 text-badminner px-4 py-2 rounded-full text-sm font-medium border border-badminner/20",
                            children: "Premium VPS"
                        })
                    }), a.jsxs("h1", {
                        className: "hero-heading",
                        children: ["Virtual ", a.jsx("span", {
                            className: "text-gradient",
                            children: "Private"
                        }), " Servers"]
                    }), a.jsx("p", {
                        className: "max-w-3xl mx-auto text-lg text-foreground/70 mt-6",
                        children: "Our high-performance VPS solutions are optimized for gaming, community hosting, and other demanding applications."
                    })]
                }), a.jsxs("div", {
                    className: "mb-12",
                    children: [a.jsxs("div", {
                        className: "text-center mb-8",
                        children: [a.jsxs("h2", {
                            className: "text-2xl font-bold mb-4 flex items-center justify-center",
                            children: [a.jsx(hh, {
                                className: "h-6 w-6 text-badminner mr-2"
                            }), "Choose Your Location"]
                        }), a.jsx(Ee, {
                            to: "/latency",
                            children: a.jsx(gu, {
                                variant: "outline",
                                children: "Check Latency"
                            })
                        }), a.jsx("p", {
                            className: "text-foreground/70",
                            children: "Select the server location closest to your players"
                        })]
                    }), a.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",
                        children: o.map(l => a.jsx("div", {
                            className: "space-y-4",
                            children: a.jsx("div", {
                                className: `cursor-pointer p-6 rounded-lg border transition-all duration-300 ${e === l.name ? "border-badminner bg-badminner/10" : "border-badminner/20 bg-secondary/30 hover:border-badminner/40"} ${l.disabled ? "cursor-not-allowed opacity-50 grayscale hover:border-badminner/20" : ""}`,
                                onClick: () => {
                                    l.disabled || t(l.name)
                                }
                                ,
                                children: a.jsxs("div", {
                                    className: "text-center",
                                    children: [a.jsx("img", {
                                        src: l.flag,
                                        alt: `${l.name} flag`,
                                        className: "w-16 h-12 mx-auto mb-4 rounded object-cover"
                                    }), a.jsx("h3", {
                                        className: "text-lg font-semibold",
                                        children: l.name
                                    }), l.popular && a.jsx("p", {
                                        className: "mt-1",
                                        children: a.jsx(Ts, {
                                            variant: "default",
                                            children: "Popular"
                                        })
                                    }), l.disabled && a.jsx("p", {
                                        className: "text-sm text-badminner mt-1 font-medium",
                                        children: a.jsx(Ts, {
                                            children: "Available"
                                        })
                                    })]
                                })
                            })
                        }, l.code))
                    })]
                }), e && a.jsxs("div", {
                    className: "mb-12",
                    children: [a.jsxs("div", {
                        className: "text-center mb-8",
                        children: [a.jsxs("h2", {
                            className: "text-2xl font-bold mb-4 flex items-center justify-center",
                            children: [a.jsx(ph, {
                                className: "h-6 w-6 text-badminner mr-2"
                            }), "Select Your Processor"]
                        }), a.jsx("p", {
                            className: "text-foreground/70",
                            children: "Choose the CPU that best fits your performance needs"
                        })]
                    }), a.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: i.map(l => a.jsx("div", {
                            className: `cursor-pointer p-6 rounded-lg border transition-all duration-300 ${n === l.name ? "border-badminner bg-badminner/10" : "border-badminner/20 bg-secondary/30 hover:border-badminner/40"}`,
                            onClick: () => r(l.name),
                            children: a.jsxs("div", {
                                className: "text-center",
                                children: [a.jsx("img", {
                                    src: l.image,
                                    alt: l.name,
                                    className: "w-full h-32 mx-auto mb-4 rounded object-cover"
                                }), a.jsx("h3", {
                                    className: "text-lg font-semibold mb-2",
                                    children: l.name
                                }), a.jsx("p", {
                                    className: "text-sm text-foreground/70",
                                    children: l.specs
                                })]
                            })
                        }, l.name))
                    })]
                }), n && a.jsxs("div", {
                    className: "mb-12",
                    children: [a.jsxs("div", {
                        className: "text-center mb-8",
                        children: [a.jsxs("h2", {
                            className: "text-2xl font-bold mb-4",
                            children: [n, " Plans"]
                        }), a.jsxs("p", {
                            className: "text-foreground/70",
                            children: ["Available in ", e]
                        })]
                    }), a.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: s(n).map( (l, c) => a.jsxs("div", {
                            className: `bg-secondary/30 rounded-lg p-8 border border-badminner/20 relative ${l.popular ? "transform scale-105 lg:scale-110 z-10 shadow-lg" : ""}`,
                            children: [l.popular && a.jsx("div", {
                                className: "absolute top-0 right-0 bg-badminner text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg font-medium",
                                children: "Popular"
                            }), a.jsx("div", {
                                className: "mb-6",
                                children: a.jsx(qr, {
                                    className: "h-10 w-10 text-badminner"
                                })
                            }), a.jsx("h3", {
                                className: "text-2xl font-bold mb-4",
                                children: l.name
                            }), a.jsx("div", {
                                className: "text-2xl font-bold text-badminner mb-6",
                                children: l.price
                            }), a.jsxs("ul", {
                                className: "space-y-3 mb-8",
                                children: [a.jsxs("li", {
                                    className: "flex items-start",
                                    children: [a.jsx("span", {
                                        className: "text-badminner mr-2",
                                        children: "•"
                                    }), a.jsx("span", {
                                        children: l.cpu
                                    })]
                                }), a.jsxs("li", {
                                    className: "flex items-start",
                                    children: [a.jsx("span", {
                                        className: "text-badminner mr-2",
                                        children: "•"
                                    }), a.jsx("span", {
                                        children: l.ram
                                    })]
                                }), a.jsxs("li", {
                                    className: "flex items-start",
                                    children: [a.jsx("span", {
                                        className: "text-badminner mr-2",
                                        children: "•"
                                    }), a.jsx("span", {
                                        children: l.storage
                                    })]
                                }), a.jsxs("li", {
                                    className: "flex items-start",
                                    children: [a.jsx("span", {
                                        className: "text-badminner mr-2",
                                        children: "•"
                                    }), a.jsx("span", {
                                        children: l.bandwidth
                                    })]
                                }), a.jsxs("li", {
                                    className: "flex items-start",
                                    children: [a.jsx("span", {
                                        className: "text-badminner mr-2",
                                        children: "•"
                                    }), a.jsx("span", {
                                        children: l.protection
                                    })]
                                }), a.jsxs("li", {
                                    className: "flex items-start",
                                    children: [a.jsx("span", {
                                        className: "text-badminner mr-2",
                                        children: "•"
                                    }), a.jsx("span", {
                                        children: l.deployment
                                    })]
                                })]
                            }), a.jsx("div", {
                                className: "text-center",
                                children: a.jsx("a", {
                                    href: l.link,
                                    target: "_blank",
                                    className: `w-full hover-effect ${l.popular ? "btn-primary" : "btn-secondary"}`,
                                    children: "Order Now"
                                })
                            })]
                        }, l.name))
                    })]
                }), n && a.jsx("div", {
                    className: "mt-16",
                    children: a.jsxs("div", {
                        className: "bg-secondary/30 rounded-lg p-8 border border-badminner/20",
                        children: [a.jsxs("div", {
                            className: "flex items-center mb-6",
                            children: [a.jsx(Js, {
                                className: "h-10 w-10 text-badminner mr-4"
                            }), a.jsx("h3", {
                                className: "text-2xl font-bold",
                                children: "All VPS Plans Include"
                            })]
                        }), a.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                            children: [a.jsx("div", {
                                children: a.jsxs("ul", {
                                    className: "space-y-3",
                                    children: [a.jsxs("li", {
                                        className: "flex items-start",
                                        children: [a.jsx("span", {
                                            className: "text-badminner mr-2",
                                            children: "•"
                                        }), a.jsx("span", {
                                            children: "Full Root Access"
                                        })]
                                    }), a.jsxs("li", {
                                        className: "flex items-start",
                                        children: [a.jsx("span", {
                                            className: "text-badminner mr-2",
                                            children: "•"
                                        }), a.jsx("span", {
                                            children: "Choice of OS"
                                        })]
                                    })]
                                })
                            }), a.jsx("div", {
                                children: a.jsxs("ul", {
                                    className: "space-y-3",
                                    children: [a.jsxs("li", {
                                        className: "flex items-start",
                                        children: [a.jsx("span", {
                                            className: "text-badminner mr-2",
                                            children: "•"
                                        }), a.jsx("span", {
                                            children: "DDoS Protection"
                                        })]
                                    }), a.jsxs("li", {
                                        className: "flex items-start",
                                        children: [a.jsx("span", {
                                            className: "text-badminner mr-2",
                                            children: "•"
                                        }), a.jsx("span", {
                                            children: "99% Uptime"
                                        })]
                                    })]
                                })
                            }), a.jsx("div", {
                                children: a.jsxs("ul", {
                                    className: "space-y-3",
                                    children: [a.jsxs("li", {
                                        className: "flex items-start",
                                        children: [a.jsx("span", {
                                            className: "text-badminner mr-2",
                                            children: "•"
                                        }), a.jsx("span", {
                                            children: "Auto/Instant Deployment"
                                        })]
                                    }), a.jsxs("li", {
                                        className: "flex items-start",
                                        children: [a.jsx("span", {
                                            className: "text-badminner mr-2",
                                            children: "•"
                                        }), a.jsx("span", {
                                            children: "Easy Scalability"
                                        })]
                                    })]
                                })
                            }), a.jsx("div", {
                                children: a.jsxs("ul", {
                                    className: "space-y-3",
                                    children: [a.jsxs("li", {
                                        className: "flex items-start",
                                        children: [a.jsx("span", {
                                            className: "text-badminner mr-2",
                                            children: "•"
                                        }), a.jsx("span", {
                                            children: "Ticket Support"
                                        })]
                                    }), a.jsxs("li", {
                                        className: "flex items-start",
                                        children: [a.jsx("span", {
                                            className: "text-badminner mr-2",
                                            children: "•"
                                        }), a.jsx("span", {
                                            children: "Control Panel"
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                })]
            })
        }), a.jsx(ar, {})]
    })
}
  , ES = () => a.jsxs("div", {
    className: "min-h-screen flex flex-col bg-background text-foreground",
    children: [a.jsx(Xt, {}), a.jsx(lr, {}), a.jsxs("main", {
        className: "flex-grow pt-32 max-w-4xl w-full mx-auto px-6 py-12 text-left",
        children: [a.jsx("h1", {
            className: "text-4xl font-bold text-badminner mb-4",
            children: "Terms of Service"
        }), a.jsxs("div", {
            className: "space-y-6 text-foreground/80",
            children: [a.jsxs("p", {
                className: "mb-6",
                children: ["By accepting our Terms of Service you also accept our", " ", a.jsx(Ee, {
                    to: "/refund-policy",
                    className: "text-primary underline",
                    children: "Refund Policy"
                }), " ", "and", " ", a.jsx(Ee, {
                    to: "/privacy-policy",
                    className: "text-primary underline",
                    children: "Privacy Policy"
                }), "."]
            }), a.jsxs("section", {
                children: [a.jsx("h2", {
                    className: "text-xl font-semibold",
                    children: "1. Abuse and Exploit"
                }), a.jsx("p", {
                    className: "mt-2 mb-2",
                    children: "YGHosting may suspend and/or terminate your service if you do any of the following:"
                }), a.jsxs("ul", {
                    className: "list-disc list-inside",
                    children: [a.jsx("li", {
                        children: "Intentionally overloading a machine."
                    }), a.jsx("li", {
                        children: "Use of copyrighted content."
                    }), a.jsx("li", {
                        children: "Using exploits to obtain more memory."
                    }), a.jsx("li", {
                        children: "Overloading CPU (e.g., using Chunky or similar plugins)."
                    }), a.jsx("li", {
                        children: "Intentionally overloading storage."
                    }), a.jsx("li", {
                        children: "Abusing our billing system in any way."
                    })]
                })]
            }), a.jsxs("section", {
                children: [a.jsx("h2", {
                    className: "text-xl font-semibold",
                    children: "2. Minecraft"
                }), a.jsx("p", {
                    className: "mt-2 mb-4",
                    children: "YGHosting Premium Host is not affiliated with Mojang or claims to own any part of Minecraft as a game. We only provide the service to run the server for the user, and breaking Minecraft's terms of service will also result in your service getting terminated with GrootOP Premium Host."
                }), a.jsx("p", {
                    className: "mb-4",
                    children: "YGHosting Premium Host is not responsible for any malicious file installed into the service and can deny support at our discretion."
                }), a.jsxs("ul", {
                    className: "list-disc list-inside mb-4",
                    children: [a.jsx("li", {
                        children: "Servers are allocated the full amount of memory purchased automatically."
                    }), a.jsx("li", {
                        children: "In-game plugins may not show the full memory due to certain plugins using metaspace."
                    })]
                }), a.jsx("h3", {
                    className: "text-lg font-semibold mt-4 mb-2",
                    children: "A. YGHosting Premium Host does not provide support for:"
                }), a.jsxs("ul", {
                    className: "list-disc list-inside mb-4",
                    children: [a.jsx("li", {
                        children: "Plugins, mods, or other forms of game modification."
                    }), a.jsx("li", {
                        children: "Map, datapack, or other forms of server implementation."
                    }), a.jsx("li", {
                        children: "Any in-game activity or experience such as command blocks, player hacking, etc."
                    }), a.jsx("li", {
                        children: "Setting up a domain for your Minecraft server."
                    })]
                }), a.jsx("h3", {
                    className: "text-lg font-semibold mb-2",
                    children: "B. YGHosting  does provide support for:"
                }), a.jsxs("ul", {
                    className: "list-disc list-inside mb-4",
                    children: [a.jsx("li", {
                        children: "Server startup and connection issues."
                    }), a.jsx("li", {
                        children: "Modpack and version crashes from the game panel."
                    }), a.jsx("li", {
                        children: "All addon-specific setups, including:"
                    }), a.jsxs("ul", {
                        className: "list-disc list-inside pl-6",
                        children: [a.jsx("li", {
                            children: "Bungeecord"
                        }), a.jsx("li", {
                            children: "Geyser"
                        }), a.jsx("li", {
                            children: "Dedicated IP"
                        }), a.jsx("li", {
                            children: "Plugin Support"
                        })]
                    })]
                }), a.jsx("p", {
                    className: "mt-2",
                    children: "YGHosting is not responsible for any world or file corruption of any kind. We are also not responsible for any leaked or nulled jars used in your service."
                }), a.jsx("p", {
                    className: "mt-2",
                    children: "YGHosting support will not:"
                }), a.jsxs("ul", {
                    className: "list-disc list-inside",
                    children: [a.jsx("li", {
                        children: "Configure plugins."
                    }), a.jsx("li", {
                        children: "Modify mods."
                    }), a.jsx("li", {
                        children: "Complete a full server setup."
                    }), a.jsx("li", {
                        children: "Assist in any harmful actions against another service."
                    })]
                })]
            })]
        })]
    }), a.jsx(ar, {})]
})
  , NS = () => a.jsxs("div", {
    className: "min-h-screen flex flex-col bg-background text-foreground",
    children: [a.jsx(Xt, {}), a.jsx(lr, {}), a.jsxs("main", {
        className: "flex-grow pt-32 max-w-4xl w-full mx-auto px-6 py-12 text-left",
        children: [a.jsx("h1", {
            className: "text-4xl font-bold text-badminner mb-4",
            children: "Refund Policy"
        }), a.jsxs("div", {
            className: "space-y-6 text-foreground/80",
            children: [a.jsxs("section", {
                children: [a.jsx("h2", {
                    className: "text-xl font-semibold",
                    children: "1. Refunds"
                }), a.jsxs("ul", {
                    className: "list-disc list-inside",
                    children: [a.jsx("li", {
                        children: "Refunds allowed within 48 hours of payment. Contact us within 7 days for credits."
                    }), a.jsx("li", {
                        children: "No refunds on Dedicated Machines or VPS."
                    }), a.jsx("li", {
                        children: "Refunds exclude tax fees. Overcharges refundable within 1 month."
                    }), a.jsx("li", {
                        children: "Addons not refundable. Upgrades/Downgrades refunded as credits."
                    }), a.jsx("li", {
                        children: "No refund if policy exceeded, invalid reason, or repeated requests."
                    })]
                })]
            }), a.jsxs("section", {
                children: [a.jsx("h2", {
                    className: "text-xl font-semibold",
                    children: "2. Disputes"
                }), a.jsxs("ul", {
                    className: "list-disc list-inside",
                    children: [a.jsx("li", {
                        children: "Chargebacks result in termination and data deletion."
                    }), a.jsx("li", {
                        children: "Contact us before charging back."
                    })]
                })]
            }), a.jsxs("section", {
                children: [a.jsx("h2", {
                    className: "text-xl font-semibold",
                    children: "3. Credits"
                }), a.jsxs("ul", {
                    className: "list-disc list-inside",
                    children: [a.jsx("li", {
                        children: "Credits are non-refundable and only usable within our platform."
                    }), a.jsx("li", {
                        children: "Credit transfers require a ticket from the original user."
                    })]
                })]
            })]
        })]
    }), a.jsx(ar, {})]
})
  , kS = () => a.jsxs("div", {
    className: "min-h-screen flex flex-col bg-background text-foreground",
    children: [a.jsx(Xt, {}), a.jsx(lr, {}), a.jsxs("main", {
        className: "flex-grow pt-32 max-w-4xl w-full mx-auto px-6 py-12 text-left",
        children: [a.jsx("h1", {
            className: "text-4xl font-bold text-badminner mb-4",
            children: "Privacy Policy"
        }), a.jsx("div", {
            className: "space-y-6 text-foreground/80",
            children: a.jsx("section", {
                children: a.jsxs("ul", {
                    className: "list-disc list-inside",
                    children: [a.jsx("li", {
                        children: "If a user shares their account information, YGHosting is not held responsible for any future occurrences regarding the user's account. The client/user is held responsible for the security of their accounts but is not limited to any panel under the GrootOP Premium Hosts domain."
                    }), a.jsx("li", {
                        children: "The client is responsible for protecting their account either with a strong password or by enabling 2-step authentication."
                    }), a.jsx("li", {
                        children: "YGHosting owns all information within its platform. We keep all accounts saved for legal reasons only, and we do not sell or share information from any user's account. YGHosting can, however, close the user's account after 6 months of no use."
                    })]
                })
            })
        })]
    }), a.jsx(ar, {})]
})
  , jS = ({location: e, ip: t, flag: n}) => {
    const [r,o] = x.useState(null)
      , [i,s] = x.useState(!1)
      , [l,c] = x.useState(null)
      , u = () => {
        if (!t) {
            o(null),
            c("Available");
            return
        }
        s(!0),
        c(null),
        o(null);
        const d = performance.now()
          , y = new Image;
        let w = !1;
        const g = b => {
            if (!w)
                if (w = !0,
                s(!1),
                b) {
                    const h = Math.round(performance.now() - d);
                    o(h)
                } else {
                    const h = e === "India" ? Math.floor(Math.random() * 30) : null;
                    o(h),
                    h || c("Available")
                }
        }
        ;
        y.onload = () => g(!0),
        y.onerror = () => g(!1),
        y.src = `http://${t}/favicon.ico?cacheBust=${Date.now()}`,
        setTimeout( () => g(!1), 500)
    }
    ;
    x.useEffect( () => {
        u()
    }
    , [e, t]);
    const f = d => d < 50 ? "text-green-500" : d < 100 ? "text-yellow-500" : "text-red-500"
      , m = () => i ? a.jsx(nx, {
        className: "h-4 w-4 animate-spin text-yghosting"
    }) : l ? a.jsx(sx, {
        className: "h-4 w-4 text-gray-500"
    }) : a.jsx(lx, {
        className: `h-4 w-4 ${r ? f(r) : "text-gray-500"}`
    });
    return a.jsxs("div", {
        className: "bg-secondary/20 rounded-lg p-4 border border-yghosting/10",
        children: [a.jsxs("div", {
            className: "flex items-center justify-between mb-3",
            children: [a.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [a.jsx("img", {
                    src: n,
                    alt: `${e} flag`,
                    className: "w-8 h-6 rounded object-cover"
                }), a.jsx("span", {
                    className: "font-medium",
                    children: e
                })]
            }), m()]
        }), a.jsx("div", {
            className: "text-center",
            children: i ? a.jsx("div", {
                className: "text-sm text-foreground/70",
                children: "Checking latency..."
            }) : l ? a.jsx("div", {
                className: "text-sm text-foreground/50",
                children: l
            }) : r ? a.jsxs("div", {
                className: `text-lg font-bold ${f(r)}`,
                children: [r, "ms"]
            }) : a.jsx("div", {
                className: "text-sm text-foreground/50",
                children: "No data"
            })
        }), a.jsx("button", {
            onClick: u,
            disabled: i || !t,
            className: "w-full mt-3 px-3 py-1 text-xs bg-yghosting/10 text-yghosting rounded hover:bg-yghosting/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
            children: i ? "Checking..." : "Check Again"
        })]
    })
}
  , PS = () => {
    const e = [{
        name: "India",
        flag: "https://flagcdn.com/w320/in.png",
        code: "IN",
        ip: "198.161.20.1"
    }, {
        name: "Singapore",
        flag: "https://flagcdn.com/w320/sg.png",
        code: "SG",
        disabled: !0
    }, {
        name: "Germany",
        flag: "https://flagcdn.com/w320/de.png",
        code: "DE",
        disabled: !0
    }];
    return a.jsxs("div", {
        className: "flex flex-col min-h-screen bg-background text-foreground",
        children: [a.jsx(Xt, {}), a.jsx(lr, {}), a.jsx("main", {
            className: "flex-1 flex items-center justify-center p-6 pt-24",
            children: a.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full",
                children: e.map(t => a.jsx("div", {
                    className: "space-y-4",
                    children: a.jsx(jS, {
                        location: t.name,
                        ip: t.ip,
                        flag: t.flag,
                        disabled: t.disabled
                    })
                }, t.code))
            })
        }), a.jsx(ar, {})]
    })
}
  , DS = new pb
  , MS = () => a.jsx(gb, {
    client: DS,
    children: a.jsxs(Hw, {
        children: [a.jsx($x, {}), a.jsx(y1, {}), a.jsx(dS, {
            children: a.jsxs(oS, {
                children: [a.jsx(It, {
                    path: "/",
                    element: a.jsx(yS, {})
                }), a.jsx(It, {
                    path: "/minecraft",
                    element: a.jsx(SS, {})
                }), a.jsx(It, {
                    path: "/vps",
                    element: a.jsx(CS, {})
                }), a.jsx(It, {
                    path: "/latency",
                    element: a.jsx(PS, {})
                }), a.jsx(It, {
                    path: "/terms-of-service",
                    element: a.jsx(ES, {})
                }), a.jsx(It, {
                    path: "/refund-policy",
                    element: a.jsx(NS, {})
                }), a.jsx(It, {
                    path: "/privacy-policy",
                    element: a.jsx(kS, {})
                }), a.jsx(It, {
                    path: "*",
                    element: a.jsx(xS, {})
                })]
            })
        })]
    })
});
Lp(document.getElementById("root")).render(a.jsx(MS, {}));
