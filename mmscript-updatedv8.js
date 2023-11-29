/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = {},
    l = "1.11.3",
    m = function (a, b) {
      return new m.fn.init(a, b);
    },
    n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    o = /^-ms-/,
    p = /-([\da-z])/gi,
    q = function (a, b) {
      return b.toUpperCase();
    };
  (m.fn = m.prototype =
    {
      jquery: l,
      constructor: m,
      selector: "",
      length: 0,
      toArray: function () {
        return d.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : d.call(this);
      },
      pushStack: function (a) {
        var b = m.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a, b) {
        return m.each(this, a, b);
      },
      map: function (a) {
        return this.pushStack(
          m.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(d.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: f,
      sort: c.sort,
      splice: c.splice,
    }),
    (m.extend = m.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || m.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (e = arguments[h]))
            for (d in e)
              (a = g[d]),
                (c = e[d]),
                g !== c &&
                  (j && c && (m.isPlainObject(c) || (b = m.isArray(c)))
                    ? (b
                        ? ((b = !1), (f = a && m.isArray(a) ? a : []))
                        : (f = a && m.isPlainObject(a) ? a : {}),
                      (g[d] = m.extend(j, f, c)))
                    : void 0 !== c && (g[d] = c));
        return g;
      }),
    m.extend({
      expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === m.type(a);
      },
      isArray:
        Array.isArray ||
        function (a) {
          return "array" === m.type(a);
        },
      isWindow: function (a) {
        return null != a && a == a.window;
      },
      isNumeric: function (a) {
        return !m.isArray(a) && a - parseFloat(a) + 1 >= 0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      isPlainObject: function (a) {
        var b;
        if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !j.call(a, "constructor") &&
            !j.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        if (k.ownLast) for (b in a) return j.call(a, b);
        for (b in a);
        return void 0 === b || j.call(a, b);
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? h[i.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (b) {
        b &&
          m.trim(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(o, "ms-").replace(p, q);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b, c) {
        var d,
          e = 0,
          f = a.length,
          g = r(a);
        if (c) {
          if (g) {
            for (; f > e; e++) if (((d = b.apply(a[e], c)), d === !1)) break;
          } else for (e in a) if (((d = b.apply(a[e], c)), d === !1)) break;
        } else if (g) {
          for (; f > e; e++) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        } else for (e in a) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(n, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (r(Object(a))
              ? m.merge(c, "string" == typeof a ? [a] : a)
              : f.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (g) return g.call(b, a, c);
          for (
            d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0;
            d > c;
            c++
          )
            if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, b) {
        var c = +b.length,
          d = 0,
          e = a.length;
        while (c > d) a[e++] = b[d++];
        if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          f = 0,
          g = a.length,
          h = r(a),
          i = [];
        if (h) for (; g > f; f++) (d = b(a[f], f, c)), null != d && i.push(d);
        else for (f in a) (d = b(a[f], f, c)), null != d && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, e, f;
        return (
          "string" == typeof b && ((f = a[b]), (b = a), (a = f)),
          m.isFunction(a)
            ? ((c = d.call(arguments, 2)),
              (e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)));
              }),
              (e.guid = a.guid = a.guid || m.guid++),
              e)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: k,
    }),
    m.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function r(a) {
    var b = "length" in a && a.length,
      c = m.type(a);
    return "function" === c || m.isWindow(a)
      ? !1
      : 1 === a.nodeType && b
      ? !0
      : "array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var s = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = M.replace("w", "w#"),
      O =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        N +
        "))|)" +
        L +
        "*\\]",
      P =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        O +
        ")*)|.*)\\)|)",
      Q = new RegExp(L + "+", "g"),
      R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      S = new RegExp("^" + L + "*," + L + "*"),
      T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      V = new RegExp(P),
      W = new RegExp("^" + N + "$"),
      X = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + O),
        PSEUDO: new RegExp("^" + P),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      aa = /[+~]/,
      ba = /'|\\/g,
      ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      da = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      ea = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (fa) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if (
        ((b ? b.ownerDocument || b : v) !== n && m(b),
        (b = b || n),
        (d = d || []),
        (k = b.nodeType),
        "string" != typeof a || !a || (1 !== k && 9 !== k && 11 !== k))
      )
        return d;
      if (!e && p) {
        if (11 !== k && (f = _.exec(a)))
          if ((j = f[1])) {
            if (9 === k) {
              if (((h = b.getElementById(j)), !h || !h.parentNode)) return d;
              if (h.id === j) return d.push(h), d;
            } else if (
              b.ownerDocument &&
              (h = b.ownerDocument.getElementById(j)) &&
              t(b, h) &&
              h.id === j
            )
              return d.push(h), d;
          } else {
            if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((j = f[3]) && c.getElementsByClassName)
              return H.apply(d, b.getElementsByClassName(j)), d;
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (
            ((s = r = u),
            (w = b),
            (x = 1 !== k && a),
            1 === k && "object" !== b.nodeName.toLowerCase())
          ) {
            (o = g(a)),
              (r = b.getAttribute("id"))
                ? (s = r.replace(ba, "\\$&"))
                : b.setAttribute("id", s),
              (s = "[id='" + s + "'] "),
              (l = o.length);
            while (l--) o[l] = s + ra(o[l]);
            (w = (aa.test(a) && pa(b.parentNode)) || b), (x = o.join(","));
          }
          if (x)
            try {
              return H.apply(d, w.querySelectorAll(x)), d;
            } catch (y) {
            } finally {
              r || b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(R, "$1"), b, d, e);
    }
    function ha() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ia(a) {
      return (a[u] = !0), a;
    }
    function ja(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ka(a, b) {
      var c = a.split("|"),
        e = a.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function la(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function oa(a) {
      return ia(function (b) {
        return (
          (b = +b),
          ia(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function pa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = ga.support = {}),
      (f = ga.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (m = ga.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = g.documentElement),
              (e = g.defaultView),
              e &&
                e !== e.top &&
                (e.addEventListener
                  ? e.addEventListener("unload", ea, !1)
                  : e.attachEvent && e.attachEvent("onunload", ea)),
              (p = !f(g)),
              (c.attributes = ja(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ja(function (a) {
                return (
                  a.appendChild(g.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = $.test(g.getElementsByClassName)),
              (c.getById = ja(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !g.getElementsByName || !g.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c && c.parentNode ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ca, da);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ca, da);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return p ? b.getElementsByClassName(a) : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = $.test(g.querySelectorAll)) &&
                (ja(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\f]' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + L + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + L + "*(?:value|" + K + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ja(function (a) {
                  var b = g.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + L + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = $.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ja(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", P);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = $.test(o.compareDocumentPosition)),
              (t =
                b || $.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === g || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === g || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? J(k, a) - J(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      h = [a],
                      i = [b];
                    if (!e || !f)
                      return a === g
                        ? -1
                        : b === g
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? J(k, a) - J(k, b)
                        : 0;
                    if (e === f) return la(a, b);
                    c = a;
                    while ((c = c.parentNode)) h.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) i.unshift(c);
                    while (h[d] === i[d]) d++;
                    return d
                      ? la(h[d], i[d])
                      : h[d] === v
                      ? -1
                      : i[d] === v
                      ? 1
                      : 0;
                  }),
              g)
            : n;
        }),
      (ga.matches = function (a, b) {
        return ga(a, null, null, b);
      }),
      (ga.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(U, "='$1']")),
          !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return ga(b, n, null, [a]).length > 0;
      }),
      (ga.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ga.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (ga.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (ga.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = ga.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = ga.selectors =
        {
          cacheLength: 50,
          createPseudo: ia,
          match: X,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ca, da)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || ga.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && ga.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return X.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      V.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ca, da).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = ga.attr(d, a);
                return null == e
                  ? "!=" === b
                  : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1
                      : "|=" === b
                      ? e === c || e.slice(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h;
                    if (q) {
                      if (f) {
                        while (p) {
                          l = b;
                          while ((l = l[p]))
                            if (
                              h
                                ? l.nodeName.toLowerCase() === r
                                : 1 === l.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (k = q[u] || (q[u] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (m = j[0] === w && j[2]),
                          (l = n && q.childNodes[n]);
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [w, n, m];
                            break;
                          }
                      } else if (
                        s &&
                        (j = (b[u] || (b[u] = {}))[a]) &&
                        j[0] === w
                      )
                        m = j[1];
                      else
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? l.nodeName.toLowerCase() === r
                              : 1 === l.nodeType) &&
                            ++m &&
                            (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)
                          )
                            break;
                      return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  ga.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ia(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ia(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(R, "$1"));
              return d[u]
                ? ia(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ia(function (a) {
              return function (b) {
                return ga(a, b).length > 0;
              };
            }),
            contains: ia(function (a) {
              return (
                (a = a.replace(ca, da)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ia(function (a) {
              return (
                W.test(a || "") || ga.error("unsupported lang: " + a),
                (a = a.replace(ca, da).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Z.test(a.nodeName);
            },
            input: function (a) {
              return Y.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: oa(function () {
              return [0];
            }),
            last: oa(function (a, b) {
              return [b - 1];
            }),
            eq: oa(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: oa(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: oa(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: oa(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: oa(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = ma(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
    function qa() {}
    (qa.prototype = d.filters = d.pseudos),
      (d.setFilters = new qa()),
      (g = ga.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (!c || (e = S.exec(h))) &&
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = T.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(R, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = X[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        });
    function ra(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function sa(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((i = b[u] || (b[u] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (j[2] = h[2]);
                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function ta(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
      return c;
    }
    function va(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function wa(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = wa(d)),
        e && !e[u] && (e = wa(e, f)),
        ia(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ua(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : va(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = va(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = va(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function xa(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = sa(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = sa(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [sa(ta(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return wa(
              i > 1 && ta(m),
              i > 1 &&
                ra(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(R, "$1"),
              c,
              e > i && xa(a.slice(i, e)),
              f > e && xa((a = a.slice(e))),
              f > e && ra(a)
            );
          }
          m.push(c);
        }
      return ta(m);
    }
    function ya(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            m,
            o,
            p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = j,
            u = f || (e && d.find.TAG("*", k)),
            v = (w += null == t ? 1 : Math.random() || 0.1),
            x = u.length;
          for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              m = 0;
              while ((o = a[m++]))
                if (o(l, g, h)) {
                  i.push(l);
                  break;
                }
              k && (w = v);
            }
            c && ((l = !o && l) && p--, f && r.push(l));
          }
          if (((p += q), c && q !== p)) {
            m = 0;
            while ((o = b[m++])) o(r, s, g, h);
            if (f) {
              if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
              s = va(s);
            }
            H.apply(i, s),
              k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
          }
          return k && ((w = v), (j = t)), r;
        };
      return c ? ia(f) : f;
    }
    return (
      (h = ga.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = xa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, ya(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = ga.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = X.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ca, da),
                  (aa.test(j[0].type) && pa(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && ra(j)), !a))
                  return H.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(f, b, !p, e, (aa.test(a) && pa(b.parentNode)) || b),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ja(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ja(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ka("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ja(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ka("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ja(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ka(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      ga
    );
  })(a);
  (m.find = s),
    (m.expr = s.selectors),
    (m.expr[":"] = m.expr.pseudos),
    (m.unique = s.uniqueSort),
    (m.text = s.getText),
    (m.isXMLDoc = s.isXML),
    (m.contains = s.contains);
  var t = m.expr.match.needsContext,
    u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    v = /^.[^:#\[\.,]*$/;
  function w(a, b, c) {
    if (m.isFunction(b))
      return m.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return m.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (v.test(b)) return m.filter(b, a, c);
      b = m.filter(b, a);
    }
    return m.grep(a, function (a) {
      return m.inArray(a, b) >= 0 !== c;
    });
  }
  (m.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? m.find.matchesSelector(d, a)
          ? [d]
          : []
        : m.find.matches(
            a,
            m.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    m.fn.extend({
      find: function (a) {
        var b,
          c = [],
          d = this,
          e = d.length;
        if ("string" != typeof a)
          return this.pushStack(
            m(a).filter(function () {
              for (b = 0; e > b; b++) if (m.contains(d[b], this)) return !0;
            })
          );
        for (b = 0; e > b; b++) m.find(a, d[b], c);
        return (
          (c = this.pushStack(e > 1 ? m.unique(c) : c)),
          (c.selector = this.selector ? this.selector + " " + a : a),
          c
        );
      },
      filter: function (a) {
        return this.pushStack(w(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(w(this, a || [], !0));
      },
      is: function (a) {
        return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1)
          .length;
      },
    });
  var x,
    y = a.document,
    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    A = (m.fn.init = function (a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (
          ((c =
            "<" === a.charAt(0) &&
            ">" === a.charAt(a.length - 1) &&
            a.length >= 3
              ? [null, a, null]
              : z.exec(a)),
          !c || (!c[1] && b))
        )
          return !b || b.jquery
            ? (b || x).find(a)
            : this.constructor(b).find(a);
        if (c[1]) {
          if (
            ((b = b instanceof m ? b[0] : b),
            m.merge(
              this,
              m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)
            ),
            u.test(c[1]) && m.isPlainObject(b))
          )
            for (c in b)
              m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        if (((d = y.getElementById(c[2])), d && d.parentNode)) {
          if (d.id !== c[2]) return x.find(a);
          (this.length = 1), (this[0] = d);
        }
        return (this.context = y), (this.selector = a), this;
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : m.isFunction(a)
        ? "undefined" != typeof x.ready
          ? x.ready(a)
          : a(m)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          m.makeArray(a, this));
    });
  (A.prototype = m.fn), (x = m(y));
  var B = /^(?:parents|prev(?:Until|All))/,
    C = { children: !0, contents: !0, next: !0, prev: !0 };
  m.extend({
    dir: function (a, b, c) {
      var d = [],
        e = a[b];
      while (
        e &&
        9 !== e.nodeType &&
        (void 0 === c || 1 !== e.nodeType || !m(e).is(c))
      )
        1 === e.nodeType && d.push(e), (e = e[b]);
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
  }),
    m.fn.extend({
      has: function (a) {
        var b,
          c = m(a, this),
          d = c.length;
        return this.filter(function () {
          for (b = 0; d > b; b++) if (m.contains(this, c[b])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && m.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? m.unique(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? m.inArray(this[0], m(a))
            : m.inArray(a.jquery ? a[0] : a, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    });
  function D(a, b) {
    do a = a[b];
    while (a && 1 !== a.nodeType);
    return a;
  }
  m.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return m.dir(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return m.dir(a, "parentNode", c);
      },
      next: function (a) {
        return D(a, "nextSibling");
      },
      prev: function (a) {
        return D(a, "previousSibling");
      },
      nextAll: function (a) {
        return m.dir(a, "nextSibling");
      },
      prevAll: function (a) {
        return m.dir(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return m.dir(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return m.dir(a, "previousSibling", c);
      },
      siblings: function (a) {
        return m.sibling((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return m.sibling(a.firstChild);
      },
      contents: function (a) {
        return m.nodeName(a, "iframe")
          ? a.contentDocument || a.contentWindow.document
          : m.merge([], a.childNodes);
      },
    },
    function (a, b) {
      m.fn[a] = function (c, d) {
        var e = m.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = m.filter(d, e)),
          this.length > 1 &&
            (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())),
          this.pushStack(e)
        );
      };
    }
  );
  var E = /\S+/g,
    F = {};
  function G(a) {
    var b = (F[a] = {});
    return (
      m.each(a.match(E) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (m.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
    var b,
      c,
      d,
      e,
      f,
      g,
      h = [],
      i = !a.once && [],
      j = function (l) {
        for (
          c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0;
          h && e > f;
          f++
        )
          if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            c = !1;
            break;
          }
        (b = !1),
          h && (i ? i.length && j(i.shift()) : c ? (h = []) : k.disable());
      },
      k = {
        add: function () {
          if (h) {
            var d = h.length;
            !(function f(b) {
              m.each(b, function (b, c) {
                var d = m.type(c);
                "function" === d
                  ? (a.unique && k.has(c)) || h.push(c)
                  : c && c.length && "string" !== d && f(c);
              });
            })(arguments),
              b ? (e = h.length) : c && ((g = d), j(c));
          }
          return this;
        },
        remove: function () {
          return (
            h &&
              m.each(arguments, function (a, c) {
                var d;
                while ((d = m.inArray(c, h, d)) > -1)
                  h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
              }),
            this
          );
        },
        has: function (a) {
          return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function () {
          return (h = []), (e = 0), this;
        },
        disable: function () {
          return (h = i = c = void 0), this;
        },
        disabled: function () {
          return !h;
        },
        lock: function () {
          return (i = void 0), c || k.disable(), this;
        },
        locked: function () {
          return !i;
        },
        fireWith: function (a, c) {
          return (
            !h ||
              (d && !i) ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              b ? i.push(c) : j(c)),
            this
          );
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return k;
  }),
    m.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", m.Callbacks("once memory"), "resolved"],
            ["reject", "fail", m.Callbacks("once memory"), "rejected"],
            ["notify", "progress", m.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return m
                .Deferred(function (c) {
                  m.each(b, function (b, f) {
                    var g = m.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && m.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(c.resolve)
                            .fail(c.reject)
                            .progress(c.notify)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? m.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          m.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || (a && m.isFunction(a.promise)) ? e : 0,
          g = 1 === f ? a : m.Deferred(),
          h = function (a, b, c) {
            return function (e) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && m.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(h(b, k, c))
                  .fail(g.reject)
                  .progress(h(b, j, i))
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var H;
  (m.fn.ready = function (a) {
    return m.ready.promise().done(a), this;
  }),
    m.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? m.readyWait++ : m.ready(!0);
      },
      ready: function (a) {
        if (a === !0 ? !--m.readyWait : !m.isReady) {
          if (!y.body) return setTimeout(m.ready);
          (m.isReady = !0),
            (a !== !0 && --m.readyWait > 0) ||
              (H.resolveWith(y, [m]),
              m.fn.triggerHandler &&
                (m(y).triggerHandler("ready"), m(y).off("ready")));
        }
      },
    });
  function I() {
    y.addEventListener
      ? (y.removeEventListener("DOMContentLoaded", J, !1),
        a.removeEventListener("load", J, !1))
      : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
  }
  function J() {
    (y.addEventListener ||
      "load" === event.type ||
      "complete" === y.readyState) &&
      (I(), m.ready());
  }
  m.ready.promise = function (b) {
    if (!H)
      if (((H = m.Deferred()), "complete" === y.readyState))
        setTimeout(m.ready);
      else if (y.addEventListener)
        y.addEventListener("DOMContentLoaded", J, !1),
          a.addEventListener("load", J, !1);
      else {
        y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
        var c = !1;
        try {
          c = null == a.frameElement && y.documentElement;
        } catch (d) {}
        c &&
          c.doScroll &&
          !(function e() {
            if (!m.isReady) {
              try {
                c.doScroll("left");
              } catch (a) {
                return setTimeout(e, 50);
              }
              I(), m.ready();
            }
          })();
      }
    return H.promise(b);
  };
  var K = "undefined",
    L;
  for (L in m(k)) break;
  (k.ownLast = "0" !== L),
    (k.inlineBlockNeedsLayout = !1),
    m(function () {
      var a, b, c, d;
      (c = y.getElementsByTagName("body")[0]),
        c &&
          c.style &&
          ((b = y.createElement("div")),
          (d = y.createElement("div")),
          (d.style.cssText =
            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
          c.appendChild(d).appendChild(b),
          typeof b.style.zoom !== K &&
            ((b.style.cssText =
              "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
            (k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth),
            a && (c.style.zoom = 1)),
          c.removeChild(d));
    }),
    (function () {
      var a = y.createElement("div");
      if (null == k.deleteExpando) {
        k.deleteExpando = !0;
        try {
          delete a.test;
        } catch (b) {
          k.deleteExpando = !1;
        }
      }
      a = null;
    })(),
    (m.acceptData = function (a) {
      var b = m.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c
        ? !1
        : !b || (b !== !0 && a.getAttribute("classid") === b);
    });
  var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    N = /([A-Z])/g;
  function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(N, "-$1").toLowerCase();
      if (((c = a.getAttribute(d)), "string" == typeof c)) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : M.test(c)
              ? m.parseJSON(c)
              : c;
        } catch (e) {}
        m.data(a, b, c);
      } else c = void 0;
    }
    return c;
  }
  function P(a) {
    var b;
    for (b in a)
      if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;

    return !0;
  }
  function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f,
        g,
        h = m.expando,
        i = a.nodeType,
        j = i ? m.cache : a,
        k = i ? a[h] : a[h] && h;
      if (
        (k && j[k] && (e || j[k].data)) ||
        void 0 !== d ||
        "string" != typeof b
      )
        return (
          k || (k = i ? (a[h] = c.pop() || m.guid++) : h),
          j[k] || (j[k] = i ? {} : { toJSON: m.noop }),
          ("object" == typeof b || "function" == typeof b) &&
            (e
              ? (j[k] = m.extend(j[k], b))
              : (j[k].data = m.extend(j[k].data, b))),
          (g = j[k]),
          e || (g.data || (g.data = {}), (g = g.data)),
          void 0 !== d && (g[m.camelCase(b)] = d),
          "string" == typeof b
            ? ((f = g[b]), null == f && (f = g[m.camelCase(b)]))
            : (f = g),
          f
        );
    }
  }
  function R(a, b, c) {
    if (m.acceptData(a)) {
      var d,
        e,
        f = a.nodeType,
        g = f ? m.cache : a,
        h = f ? a[m.expando] : m.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          m.isArray(b)
            ? (b = b.concat(m.map(b, m.camelCase)))
            : b in d
            ? (b = [b])
            : ((b = m.camelCase(b)), (b = b in d ? [b] : b.split(" "))),
            (e = b.length);
          while (e--) delete d[b[e]];
          if (c ? !P(d) : !m.isEmptyObject(d)) return;
        }
        (c || (delete g[h].data, P(g[h]))) &&
          (f
            ? m.cleanData([a], !0)
            : k.deleteExpando || g != g.window
            ? delete g[h]
            : (g[h] = null));
      }
    }
  }
  m.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (a) {
      return (
        (a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando]), !!a && !P(a)
      );
    },
    data: function (a, b, c) {
      return Q(a, b, c);
    },
    removeData: function (a, b) {
      return R(a, b);
    },
    _data: function (a, b, c) {
      return Q(a, b, c, !0);
    },
    _removeData: function (a, b) {
      return R(a, b, !0);
    },
  }),
    m.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = m.data(f)), 1 === f.nodeType && !m._data(f, "parsedAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = m.camelCase(d.slice(5))), O(f, d, e[d])));
            m._data(f, "parsedAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              m.data(this, a);
            })
          : arguments.length > 1
          ? this.each(function () {
              m.data(this, a, b);
            })
          : f
          ? O(f, a, m.data(f, a))
          : void 0;
      },
      removeData: function (a) {
        return this.each(function () {
          m.removeData(this, a);
        });
      },
    }),
    m.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = m._data(a, b)),
            c &&
              (!d || m.isArray(c)
                ? (d = m._data(a, b, m.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = m.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = m._queueHooks(a, b),
          g = function () {
            m.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          m._data(a, c) ||
          m._data(a, c, {
            empty: m.Callbacks("once memory").add(function () {
              m._removeData(a, b + "queue"), m._removeData(a, c);
            }),
          })
        );
      },
    }),
    m.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? m.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          m.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = m.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = m._data(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = ["Top", "Right", "Bottom", "Left"],
    U = function (a, b) {
      return (
        (a = b || a),
        "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
      );
    },
    V = (m.access = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === m.type(c)) {
        e = !0;
        for (h in c) m.access(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        m.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(m(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }),
    W = /^(?:checkbox|radio)$/i;
  !(function () {
    var a = y.createElement("input"),
      b = y.createElement("div"),
      c = y.createDocumentFragment();
    if (
      ((b.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (k.leadingWhitespace = 3 === b.firstChild.nodeType),
      (k.tbody = !b.getElementsByTagName("tbody").length),
      (k.htmlSerialize = !!b.getElementsByTagName("link").length),
      (k.html5Clone =
        "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML),
      (a.type = "checkbox"),
      (a.checked = !0),
      c.appendChild(a),
      (k.appendChecked = a.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue),
      c.appendChild(b),
      (b.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
      (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (k.noCloneEvent = !0),
      b.attachEvent &&
        (b.attachEvent("onclick", function () {
          k.noCloneEvent = !1;
        }),
        b.cloneNode(!0).click()),
      null == k.deleteExpando)
    ) {
      k.deleteExpando = !0;
      try {
        delete b.test;
      } catch (d) {
        k.deleteExpando = !1;
      }
    }
  })(),
    (function () {
      var b,
        c,
        d = y.createElement("div");
      for (b in { submit: !0, change: !0, focusin: !0 })
        (c = "on" + b),
          (k[b + "Bubbles"] = c in a) ||
            (d.setAttribute(c, "t"),
            (k[b + "Bubbles"] = d.attributes[c].expando === !1));
      d = null;
    })();
  var X = /^(?:input|select|textarea)$/i,
    Y = /^key/,
    Z = /^(?:mouse|pointer|contextmenu)|click/,
    $ = /^(?:focusinfocus|focusoutblur)$/,
    _ = /^([^.]*)(?:\.(.+)|)$/;
  function aa() {
    return !0;
  }
  function ba() {
    return !1;
  }
  function ca() {
    try {
      return y.activeElement;
    } catch (a) {}
  }
  (m.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        n,
        o,
        p,
        q,
        r = m._data(a);
      if (r) {
        c.handler && ((i = c), (c = i.handler), (e = i.selector)),
          c.guid || (c.guid = m.guid++),
          (g = r.events) || (g = r.events = {}),
          (k = r.handle) ||
            ((k = r.handle =
              function (a) {
                return typeof m === K || (a && m.event.triggered === a.type)
                  ? void 0
                  : m.event.dispatch.apply(k.elem, arguments);
              }),
            (k.elem = a)),
          (b = (b || "").match(E) || [""]),
          (h = b.length);
        while (h--)
          (f = _.exec(b[h]) || []),
            (o = q = f[1]),
            (p = (f[2] || "").split(".").sort()),
            o &&
              ((j = m.event.special[o] || {}),
              (o = (e ? j.delegateType : j.bindType) || o),
              (j = m.event.special[o] || {}),
              (l = m.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && m.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                i
              )),
              (n = g[o]) ||
                ((n = g[o] = []),
                (n.delegateCount = 0),
                (j.setup && j.setup.call(a, d, p, k) !== !1) ||
                  (a.addEventListener
                    ? a.addEventListener(o, k, !1)
                    : a.attachEvent && a.attachEvent("on" + o, k))),
              j.add &&
                (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)),
              e ? n.splice(n.delegateCount++, 0, l) : n.push(l),
              (m.event.global[o] = !0));
        a = null;
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        n,
        o,
        p,
        q,
        r = m.hasData(a) && m._data(a);
      if (r && (k = r.events)) {
        (b = (b || "").match(E) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = _.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = m.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (n = k[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (i = f = n.length);
            while (f--)
              (g = n[f]),
                (!e && q !== g.origType) ||
                  (c && c.guid !== g.guid) ||
                  (h && !h.test(g.namespace)) ||
                  (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                  (n.splice(f, 1),
                  g.selector && n.delegateCount--,
                  l.remove && l.remove.call(a, g));
            i &&
              !n.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                m.removeEvent(a, o, r.handle),
              delete k[o]);
          } else for (o in k) m.event.remove(a, o + b[j], c, d, !0);
        m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
      }
    },
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        k,
        l,
        n,
        o = [d || y],
        p = j.call(b, "type") ? b.type : b,
        q = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = l = d = d || y),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !$.test(p + m.event.triggered) &&
          (p.indexOf(".") >= 0 &&
            ((q = p.split(".")), (p = q.shift()), q.sort()),
          (g = p.indexOf(":") < 0 && "on" + p),
          (b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = q.join(".")),
          (b.namespace_re = b.namespace
            ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : m.makeArray(c, [b])),
          (k = m.event.special[p] || {}),
          e || !k.trigger || k.trigger.apply(d, c) !== !1))
      ) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (
            i = k.delegateType || p, $.test(i + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            o.push(h), (l = h);
          l === (d.ownerDocument || y) &&
            o.push(l.defaultView || l.parentWindow || a);
        }
        n = 0;
        while ((h = o[n++]) && !b.isPropagationStopped())
          (b.type = n > 1 ? i : k.bindType || p),
            (f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle")),
            f && f.apply(h, c),
            (f = g && h[g]),
            f &&
              f.apply &&
              m.acceptData(h) &&
              ((b.result = f.apply(h, c)),
              b.result === !1 && b.preventDefault());
        if (
          ((b.type = p),
          !e &&
            !b.isDefaultPrevented() &&
            (!k._default || k._default.apply(o.pop(), c) === !1) &&
            m.acceptData(d) &&
            g &&
            d[p] &&
            !m.isWindow(d))
        ) {
          (l = d[g]), l && (d[g] = null), (m.event.triggered = p);
          try {
            d[p]();
          } catch (r) {}
          (m.event.triggered = void 0), l && (d[g] = l);
        }
        return b.result;
      }
    },
    dispatch: function (a) {
      a = m.event.fix(a);
      var b,
        c,
        e,
        f,
        g,
        h = [],
        i = d.call(arguments),
        j = (m._data(this, "events") || {})[a.type] || [],
        k = m.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = m.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (g = 0);
          while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
            (!a.namespace_re || a.namespace_re.test(e.namespace)) &&
              ((a.handleObj = e),
              (a.data = e.data),
              (c = (
                (m.event.special[e.origType] || {}).handle || e.handler
              ).apply(f.elem, i)),
              void 0 !== c &&
                (a.result = c) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (e = [], f = 0; h > f; f++)
              (d = b[f]),
                (c = d.selector + " "),
                void 0 === e[c] &&
                  (e[c] = d.needsContext
                    ? m(c, this).index(i) >= 0
                    : m.find(c, this, null, [i]).length),
                e[c] && e.push(d);
            e.length && g.push({ elem: i, handlers: e });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    fix: function (a) {
      if (a[m.expando]) return a;
      var b,
        c,
        d,
        e = a.type,
        f = a,
        g = this.fixHooks[e];
      g ||
        (this.fixHooks[e] = g =
          Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}),
        (d = g.props ? this.props.concat(g.props) : this.props),
        (a = new m.Event(f)),
        (b = d.length);
      while (b--) (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = f.srcElement || y),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        g.filter ? g.filter(a, f) : a
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          d,
          e,
          f = b.button,
          g = b.fromElement;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((d = a.target.ownerDocument || y),
            (e = d.documentElement),
            (c = d.body),
            (a.pageX =
              b.clientX +
              ((e && e.scrollLeft) || (c && c.scrollLeft) || 0) -
              ((e && e.clientLeft) || (c && c.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((e && e.scrollTop) || (c && c.scrollTop) || 0) -
              ((e && e.clientTop) || (c && c.clientTop) || 0))),
          !a.relatedTarget &&
            g &&
            (a.relatedTarget = g === a.target ? b.toElement : g),
          a.which ||
            void 0 === f ||
            (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== ca() && this.focus)
            try {
              return this.focus(), !1;
            } catch (a) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === ca() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return m.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return m.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = m.extend(new m.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (m.removeEvent = y.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent &&
            (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c));
        }),
    (m.Event = function (a, b) {
      return this instanceof m.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? aa
                  : ba))
            : (this.type = a),
          b && m.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || m.now()),
          void (this[m.expando] = !0))
        : new m.Event(a, b);
    }),
    (m.Event.prototype = {
      isDefaultPrevented: ba,
      isPropagationStopped: ba,
      isImmediatePropagationStopped: ba,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = aa),
          a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = aa),
          a &&
            (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = aa),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    m.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        m.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !m.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    k.submitBubbles ||
      (m.event.special.submit = {
        setup: function () {
          return m.nodeName(this, "form")
            ? !1
            : void m.event.add(
                this,
                "click._submit keypress._submit",
                function (a) {
                  var b = a.target,
                    c =
                      m.nodeName(b, "input") || m.nodeName(b, "button")
                        ? b.form
                        : void 0;
                  c &&
                    !m._data(c, "submitBubbles") &&
                    (m.event.add(c, "submit._submit", function (a) {
                      a._submit_bubble = !0;
                    }),
                    m._data(c, "submitBubbles", !0));
                }
              );
        },
        postDispatch: function (a) {
          a._submit_bubble &&
            (delete a._submit_bubble,
            this.parentNode &&
              !a.isTrigger &&
              m.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function () {
          return m.nodeName(this, "form")
            ? !1
            : void m.event.remove(this, "._submit");
        },
      }),
    k.changeBubbles ||
      (m.event.special.change = {
        setup: function () {
          return X.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (m.event.add(this, "propertychange._change", function (a) {
                  "checked" === a.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                m.event.add(this, "click._change", function (a) {
                  this._just_changed &&
                    !a.isTrigger &&
                    (this._just_changed = !1),
                    m.event.simulate("change", this, a, !0);
                })),
              !1)
            : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                X.test(b.nodeName) &&
                  !m._data(b, "changeBubbles") &&
                  (m.event.add(b, "change._change", function (a) {
                    !this.parentNode ||
                      a.isSimulated ||
                      a.isTrigger ||
                      m.event.simulate("change", this.parentNode, a, !0);
                  }),
                  m._data(b, "changeBubbles", !0));
              });
        },
        handle: function (a) {
          var b = a.target;
          return this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            ("radio" !== b.type && "checkbox" !== b.type)
            ? a.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return m.event.remove(this, "._change"), !X.test(this.nodeName);
        },
      }),
    k.focusinBubbles ||
      m.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          m.event.simulate(b, a.target, m.event.fix(a), !0);
        };
        m.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = m._data(d, b);
            e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = m._data(d, b) - 1;
            e
              ? m._data(d, b, e)
              : (d.removeEventListener(a, c, !0), m._removeData(d, b));
          },
        };
      }),
    m.fn.extend({
      on: function (a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && ((c = c || b), (b = void 0));
          for (f in a) this.on(f, b, c, a[f], e);
          return this;
        }
        if (
          (null == c && null == d
            ? ((d = b), (c = b = void 0))
            : null == d &&
              ("string" == typeof b
                ? ((d = c), (c = void 0))
                : ((d = c), (c = b), (b = void 0))),
          d === !1)
        )
          d = ba;
        else if (!d) return this;
        return (
          1 === e &&
            ((g = d),
            (d = function (a) {
              return m().off(a), g.apply(this, arguments);
            }),
            (d.guid = g.guid || (g.guid = m.guid++))),
          this.each(function () {
            m.event.add(this, a, d, c, b);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            m(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
          c === !1 && (c = ba),
          this.each(function () {
            m.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          m.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? m.event.trigger(a, b, c, !0) : void 0;
      },
    });
  function da(a) {
    var b = ea.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  var ea =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    fa = / jQuery\d+="(?:null|\d+)"/g,
    ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"),
    ha = /^\s+/,
    ia =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ja = /<([\w:]+)/,
    ka = /<tbody/i,
    la = /<|&#?\w+;/,
    ma = /<(?:script|style|link)/i,
    na = /checked\s*(?:[^=]|=\s*.checked.)/i,
    oa = /^$|\/(?:java|ecma)script/i,
    pa = /^true\/(.*)/,
    qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ra = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    },
    sa = da(y),
    ta = sa.appendChild(y.createElement("div"));
  (ra.optgroup = ra.option),
    (ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead),
    (ra.th = ra.td);
  function ua(a, b) {
    var c,
      d,
      e = 0,
      f =
        typeof a.getElementsByTagName !== K
          ? a.getElementsByTagName(b || "*")
          : typeof a.querySelectorAll !== K
          ? a.querySelectorAll(b || "*")
          : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
        !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
    return void 0 === b || (b && m.nodeName(a, b)) ? m.merge([a], f) : f;
  }
  function va(a) {
    W.test(a.type) && (a.defaultChecked = a.checked);
  }
  function wa(a, b) {
    return m.nodeName(a, "table") &&
      m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function xa(a) {
    return (a.type = (null !== m.find.attr(a, "type")) + "/" + a.type), a;
  }
  function ya(a) {
    var b = pa.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function za(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++)
      m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
  }
  function Aa(a, b) {
    if (1 === b.nodeType && m.hasData(a)) {
      var c,
        d,
        e,
        f = m._data(a),
        g = m._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, (g.events = {});
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = m.extend({}, g.data));
    }
  }
  function Ba(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (((c = b.nodeName.toLowerCase()), !k.noCloneEvent && b[m.expando])) {
        e = m._data(b);
        for (d in e.events) m.removeEvent(b, d, e.handle);
        b.removeAttribute(m.expando);
      }
      "script" === c && b.text !== a.text
        ? ((xa(b).text = a.text), ya(b))
        : "object" === c
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          k.html5Clone &&
            a.innerHTML &&
            !m.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : "input" === c && W.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value))
        : "option" === c
        ? (b.defaultSelected = b.selected = a.defaultSelected)
        : ("input" === c || "textarea" === c) &&
          (b.defaultValue = a.defaultValue);
    }
  }
  m.extend({
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = m.contains(a.ownerDocument, a);
      if (
        (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">")
          ? (f = a.cloneNode(!0))
          : ((ta.innerHTML = a.outerHTML), ta.removeChild((f = ta.firstChild))),
        !(
          (k.noCloneEvent && k.noCloneChecked) ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          m.isXMLDoc(a)
        ))
      )
        for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g)
          d[g] && Ba(e, d[g]);
      if (b)
        if (c)
          for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++)
            Aa(e, d[g]);
        else Aa(a, f);
      return (
        (d = ua(f, "script")),
        d.length > 0 && za(d, !i && ua(a, "script")),
        (d = h = e = null),
        f
      );
    },
    buildFragment: function (a, b, c, d) {
      for (
        var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0;
        n > q;
        q++
      )
        if (((f = a[q]), f || 0 === f))
          if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
          else if (la.test(f)) {
            (h = h || o.appendChild(b.createElement("div"))),
              (i = (ja.exec(f) || ["", ""])[1].toLowerCase()),
              (l = ra[i] || ra._default),
              (h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2]),
              (e = l[0]);
            while (e--) h = h.lastChild;
            if (
              (!k.leadingWhitespace &&
                ha.test(f) &&
                p.push(b.createTextNode(ha.exec(f)[0])),
              !k.tbody)
            ) {
              (f =
                "table" !== i || ka.test(f)
                  ? "<table>" !== l[1] || ka.test(f)
                    ? 0
                    : h
                  : h.firstChild),
                (e = f && f.childNodes.length);
              while (e--)
                m.nodeName((j = f.childNodes[e]), "tbody") &&
                  !j.childNodes.length &&
                  f.removeChild(j);
            }
            m.merge(p, h.childNodes), (h.textContent = "");
            while (h.firstChild) h.removeChild(h.firstChild);
            h = o.lastChild;
          } else p.push(b.createTextNode(f));
      h && o.removeChild(h),
        k.appendChecked || m.grep(ua(p, "input"), va),
        (q = 0);
      while ((f = p[q++]))
        if (
          (!d || -1 === m.inArray(f, d)) &&
          ((g = m.contains(f.ownerDocument, f)),
          (h = ua(o.appendChild(f), "script")),
          g && za(h),
          c)
        ) {
          e = 0;
          while ((f = h[e++])) oa.test(f.type || "") && c.push(f);
        }
      return (h = null), o;
    },
    cleanData: function (a, b) {
      for (
        var d,
          e,
          f,
          g,
          h = 0,
          i = m.expando,
          j = m.cache,
          l = k.deleteExpando,
          n = m.event.special;
        null != (d = a[h]);
        h++
      )
        if ((b || m.acceptData(d)) && ((f = d[i]), (g = f && j[f]))) {
          if (g.events)
            for (e in g.events)
              n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
          j[f] &&
            (delete j[f],
            l
              ? delete d[i]
              : typeof d.removeAttribute !== K
              ? d.removeAttribute(i)
              : (d[i] = null),
            c.push(f));
        }
    },
  }),
    m.fn.extend({
      text: function (a) {
        return V(
          this,
          function (a) {
            return void 0 === a
              ? m.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || y).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = wa(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = wa(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function (a, b) {
        for (
          var c, d = a ? m.filter(a, this) : this, e = 0;
          null != (c = d[e]);
          e++
        )
          b || 1 !== c.nodeType || m.cleanData(ua(c)),
            c.parentNode &&
              (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")),
              c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) {
          1 === a.nodeType && m.cleanData(ua(a, !1));
          while (a.firstChild) a.removeChild(a.firstChild);
          a.options && m.nodeName(a, "select") && (a.options.length = 0);
        }
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return m.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return V(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a)
              return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
            if (
              !(
                "string" != typeof a ||
                ma.test(a) ||
                (!k.htmlSerialize && ga.test(a)) ||
                (!k.leadingWhitespace && ha.test(a)) ||
                ra[(ja.exec(a) || ["", ""])[1].toLowerCase()]
              )
            ) {
              a = a.replace(ia, "<$1></$2>");
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (m.cleanData(ua(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode),
              m.cleanData(ua(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, b) {
        a = e.apply([], a);
        var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          n = this,
          o = l - 1,
          p = a[0],
          q = m.isFunction(p);
        if (q || (l > 1 && "string" == typeof p && !k.checkClone && na.test(p)))
          return this.each(function (c) {
            var d = n.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          l &&
          ((i = m.buildFragment(a, this[0].ownerDocument, !1, this)),
          (c = i.firstChild),
          1 === i.childNodes.length && (i = c),
          c)
        ) {
          for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++)
            (d = i),
              j !== o &&
                ((d = m.clone(d, !0, !0)), f && m.merge(g, ua(d, "script"))),
              b.call(this[j], d, j);
          if (f)
            for (
              h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0;
              f > j;
              j++
            )
              (d = g[j]),
                oa.test(d.type || "") &&
                  !m._data(d, "globalEval") &&
                  m.contains(h, d) &&
                  (d.src
                    ? m._evalUrl && m._evalUrl(d.src)
                    : m.globalEval(
                        (d.text || d.textContent || d.innerHTML || "").replace(
                          qa,
                          ""
                        )
                      ));
          i = c = null;
        }
        return this;
      },
    }),
    m.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        m.fn[a] = function (a) {
          for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
            (c = d === h ? this : this.clone(!0)),
              m(g[d])[b](c),
              f.apply(e, c.get());
          return this.pushStack(e);
        };
      }
    );
  var Ca,
    Da = {};
  function Ea(b, c) {
    var d,
      e = m(c.createElement(b)).appendTo(c.body),
      f =
        a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
          ? d.display
          : m.css(e[0], "display");
    return e.detach(), f;
  }
  function Fa(a) {
    var b = y,
      c = Da[a];
    return (
      c ||
        ((c = Ea(a, b)),
        ("none" !== c && c) ||
          ((Ca = (
            Ca || m("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = (Ca[0].contentWindow || Ca[0].contentDocument).document),
          b.write(),
          b.close(),
          (c = Ea(a, b)),
          Ca.detach()),
        (Da[a] = c)),
      c
    );
  }
  !(function () {
    var a;
    k.shrinkWrapBlocks = function () {
      if (null != a) return a;
      a = !1;
      var b, c, d;
      return (
        (c = y.getElementsByTagName("body")[0]),
        c && c.style
          ? ((b = y.createElement("div")),
            (d = y.createElement("div")),
            (d.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            c.appendChild(d).appendChild(b),
            typeof b.style.zoom !== K &&
              ((b.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
              (b.appendChild(y.createElement("div")).style.width = "5px"),
              (a = 3 !== b.offsetWidth)),
            c.removeChild(d),
            a)
          : void 0
      );
    };
  })();
  var Ga = /^margin/,
    Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
    Ia,
    Ja,
    Ka = /^(top|right|bottom|left)$/;
  a.getComputedStyle
    ? ((Ia = function (b) {
        return b.ownerDocument.defaultView.opener
          ? b.ownerDocument.defaultView.getComputedStyle(b, null)
          : a.getComputedStyle(b, null);
      }),
      (Ja = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ia(a)),
          (g = c ? c.getPropertyValue(b) || c[b] : void 0),
          c &&
            ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)),
            Ha.test(g) &&
              Ga.test(b) &&
              ((d = h.width),
              (e = h.minWidth),
              (f = h.maxWidth),
              (h.minWidth = h.maxWidth = h.width = g),
              (g = c.width),
              (h.width = d),
              (h.minWidth = e),
              (h.maxWidth = f))),
          void 0 === g ? g : g + ""
        );
      }))
    : y.documentElement.currentStyle &&
      ((Ia = function (a) {
        return a.currentStyle;
      }),
      (Ja = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ia(a)),
          (g = c ? c[b] : void 0),
          null == g && h && h[b] && (g = h[b]),
          Ha.test(g) &&
            !Ka.test(b) &&
            ((d = h.left),
            (e = a.runtimeStyle),
            (f = e && e.left),
            f && (e.left = a.currentStyle.left),
            (h.left = "fontSize" === b ? "1em" : g),
            (g = h.pixelLeft + "px"),
            (h.left = d),
            f && (e.left = f)),
          void 0 === g ? g : g + "" || "auto"
        );
      }));
  function La(a, b) {
    return {
      get: function () {
        var c = a();
        if (null != c)
          return c
            ? void delete this.get
            : (this.get = b).apply(this, arguments);
      },
    };
  }
  !(function () {
    var b, c, d, e, f, g, h;
    if (
      ((b = y.createElement("div")),
      (b.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (d = b.getElementsByTagName("a")[0]),
      (c = d && d.style))
    ) {
      (c.cssText = "float:left;opacity:.5"),
        (k.opacity = "0.5" === c.opacity),
        (k.cssFloat = !!c.cssFloat),
        (b.style.backgroundClip = "content-box"),
        (b.cloneNode(!0).style.backgroundClip = ""),
        (k.clearCloneStyle = "content-box" === b.style.backgroundClip),
        (k.boxSizing =
          "" === c.boxSizing ||
          "" === c.MozBoxSizing ||
          "" === c.WebkitBoxSizing),
        m.extend(k, {
          reliableHiddenOffsets: function () {
            return null == g && i(), g;
          },
          boxSizingReliable: function () {
            return null == f && i(), f;
          },
          pixelPosition: function () {
            return null == e && i(), e;
          },
          reliableMarginRight: function () {
            return null == h && i(), h;
          },
        });
      function i() {
        var b, c, d, i;
        (c = y.getElementsByTagName("body")[0]),
          c &&
            c.style &&
            ((b = y.createElement("div")),
            (d = y.createElement("div")),
            (d.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            c.appendChild(d).appendChild(b),
            (b.style.cssText =
              "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
            (e = f = !1),
            (h = !0),
            a.getComputedStyle &&
              ((e = "1%" !== (a.getComputedStyle(b, null) || {}).top),
              (f =
                "4px" ===
                (a.getComputedStyle(b, null) || { width: "4px" }).width),
              (i = b.appendChild(y.createElement("div"))),
              (i.style.cssText = b.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (i.style.marginRight = i.style.width = "0"),
              (b.style.width = "1px"),
              (h = !parseFloat(
                (a.getComputedStyle(i, null) || {}).marginRight
              )),
              b.removeChild(i)),
            (b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (i = b.getElementsByTagName("td")),
            (i[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
            (g = 0 === i[0].offsetHeight),
            g &&
              ((i[0].style.display = ""),
              (i[1].style.display = "none"),
              (g = 0 === i[0].offsetHeight)),
            c.removeChild(d));
      }
    }
  })(),
    (m.swap = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  var Ma = /alpha\([^)]*\)/i,
    Na = /opacity\s*=\s*([^)]*)/,
    Oa = /^(none|table(?!-c[ea]).+)/,
    Pa = new RegExp("^(" + S + ")(.*)$", "i"),
    Qa = new RegExp("^([+-])=(" + S + ")", "i"),
    Ra = { position: "absolute", visibility: "hidden", display: "block" },
    Sa = { letterSpacing: "0", fontWeight: "400" },
    Ta = ["Webkit", "O", "Moz", "ms"];
  function Ua(a, b) {
    if (b in a) return b;
    var c = b.charAt(0).toUpperCase() + b.slice(1),
      d = b,
      e = Ta.length;
    while (e--) if (((b = Ta[e] + c), b in a)) return b;
    return d;
  }
  function Va(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = m._data(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                U(d) &&
                (f[g] = m._data(d, "olddisplay", Fa(d.nodeName))))
            : ((e = U(d)),
              ((c && "none" !== c) || !e) &&
                m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function Wa(a, b, c) {
    var d = Pa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function Xa(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += m.css(a, c + T[f], !0, e)),
        d
          ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)),
            "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e)))
          : ((g += m.css(a, "padding" + T[f], !0, e)),
            "padding" !== c &&
              (g += m.css(a, "border" + T[f] + "Width", !0, e)));
    return g;
  }
  function Ya(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ia(a),
      g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = Ja(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        Ha.test(e))
      )
        return e;
      (d = g && (k.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  m.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Ja(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: k.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = m.camelCase(b),
          i = a.style;
        if (
          ((b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h))),
          (g = m.cssHooks[b] || m.cssHooks[h]),
          void 0 === c)
        )
          return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (
          ((f = typeof c),
          "string" === f &&
            (e = Qa.exec(c)) &&
            ((c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b))), (f = "number")),
          null != c &&
            c === c &&
            ("number" !== f || m.cssNumber[h] || (c += "px"),
            k.clearCloneStyle ||
              "" !== c ||
              0 !== b.indexOf("background") ||
              (i[b] = "inherit"),
            !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
        )
          try {
            i[b] = c;
          } catch (j) {}
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = m.camelCase(b);
      return (
        (b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h))),
        (g = m.cssHooks[b] || m.cssHooks[h]),
        g && "get" in g && (f = g.get(a, !0, c)),
        void 0 === f && (f = Ja(a, b, d)),
        "normal" === f && b in Sa && (f = Sa[b]),
        "" === c || c
          ? ((e = parseFloat(f)), c === !0 || m.isNumeric(e) ? e || 0 : f)
          : f
      );
    },
  }),
    m.each(["height", "width"], function (a, b) {
      m.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth
              ? m.swap(a, Ra, function () {
                  return Ya(a, b, d);
                })
              : Ya(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && Ia(a);
          return Wa(
            a,
            c,
            d
              ? Xa(
                  a,
                  b,
                  d,
                  k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e),
                  e
                )
              : 0
          );
        },
      };
    }),
    k.opacity ||
      (m.cssHooks.opacity = {
        get: function (a, b) {
          return Na.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = (d && d.filter) || c.filter || "";
          (c.zoom = 1),
            ((b >= 1 || "" === b) &&
              "" === m.trim(f.replace(Ma, "")) &&
              c.removeAttribute &&
              (c.removeAttribute("filter"), "" === b || (d && !d.filter))) ||
              (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e);
        },
      }),
    (m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) {
      return b
        ? m.swap(a, { display: "inline-block" }, Ja, [a, "marginRight"])
        : void 0;
    })),
    m.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (m.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Ga.test(a) || (m.cssHooks[a + b].set = Wa);
    }),
    m.fn.extend({
      css: function (a, b) {
        return V(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (m.isArray(b)) {
              for (d = Ia(a), e = b.length; e > g; g++)
                f[b[g]] = m.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Va(this, !0);
      },
      hide: function () {
        return Va(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              U(this) ? m(this).show() : m(this).hide();
            });
      },
    });
  function Za(a, b, c, d, e) {
    return new Za.prototype.init(a, b, c, d, e);
  }
  (m.Tween = Za),
    (Za.prototype = {
      constructor: Za,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (m.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = Za.propHooks[this.prop];
        return a && a.get ? a.get(this) : Za.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Za.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                m.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Za.propHooks._default.set(this),
          this
        );
      },
    }),
    (Za.prototype.init.prototype = Za.prototype),
    (Za.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = m.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function (a) {
          m.fx.step[a.prop]
            ? m.fx.step[a.prop](a)
            : a.elem.style &&
              (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop])
            ? m.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (Za.propHooks.scrollTop = Za.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (m.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (m.fx = Za.prototype.init),
    (m.fx.step = {});
  var $a,
    _a,
    ab = /^(?:toggle|show|hide)$/,
    bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
    cb = /queueHooks$/,
    db = [ib],
    eb = {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = bb.exec(b),
            f = (e && e[3]) || (m.cssNumber[a] ? "" : "px"),
            g =
              (m.cssNumber[a] || ("px" !== f && +d)) &&
              bb.exec(m.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            (f = f || g[3]), (e = e || []), (g = +d || 1);
            do (h = h || ".5"), (g /= h), m.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return (
            e &&
              ((g = c.start = +g || +d || 0),
              (c.unit = f),
              (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
            c
          );
        },
      ],
    };
  function fb() {
    return (
      setTimeout(function () {
        $a = void 0;
      }),
      ($a = m.now())
    );
  }
  function gb(a, b) {
    var c,
      d = { height: a },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b)
      (c = T[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function hb(a, b, c) {
    for (
      var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ib(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      l,
      n = this,
      o = {},
      p = a.style,
      q = a.nodeType && U(a),
      r = m._data(a, "fxshow");
    c.queue ||
      ((h = m._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      n.always(function () {
        n.always(function () {
          h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [p.overflow, p.overflowX, p.overflowY]),
        (j = m.css(a, "display")),
        (l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j),
        "inline" === l &&
          "none" === m.css(a, "float") &&
          (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName)
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
      c.overflow &&
        ((p.overflow = "hidden"),
        k.shrinkWrapBlocks() ||
          n.always(function () {
            (p.overflow = c.overflow[0]),
              (p.overflowX = c.overflow[1]),
              (p.overflowY = c.overflow[2]);
          }));
    for (d in b)
      if (((e = b[d]), ab.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (q ? "hide" : "show"))
        ) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }
        o[d] = (r && r[d]) || m.style(a, d);
      } else j = void 0;
    if (m.isEmptyObject(o))
      "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);
    else {
      r ? "hidden" in r && (q = r.hidden) : (r = m._data(a, "fxshow", {})),
        f && (r.hidden = !q),
        q
          ? m(a).show()
          : n.done(function () {
              m(a).hide();
            }),
        n.done(function () {
          var b;
          m._removeData(a, "fxshow");
          for (b in o) m.style(a, b, o[b]);
        });
      for (d in o)
        (g = hb(q ? r[d] : 0, d, n)),
          d in r ||
            ((r[d] = g.start),
            q &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function jb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = m.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        m.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = m.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function kb(a, b, c) {
    var d,
      e,
      f = 0,
      g = db.length,
      h = m.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = $a || fb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: m.extend({}, b),
        opts: m.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: $a || fb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = m.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    for (jb(k, j.opts.specialEasing); g > f; f++)
      if ((d = db[f].call(j, a, k, j.opts))) return d;
    return (
      m.map(k, hb, j),
      m.isFunction(j.opts.start) && j.opts.start.call(a, j),
      m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (m.Animation = m.extend(kb, {
    tweener: function (a, b) {
      m.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), (eb[c] = eb[c] || []), eb[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? db.unshift(a) : db.push(a);
    },
  })),
    (m.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? m.extend({}, a)
          : {
              complete: c || (!c && b) || (m.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !m.isFunction(b) && b),
            };
      return (
        (d.duration = m.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in m.fx.speeds
          ? m.fx.speeds[d.duration]
          : m.fx.speeds._default),
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          m.isFunction(d.old) && d.old.call(this),
            d.queue && m.dequeue(this, d.queue);
        }),
        d
      );
    }),
    m.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(U)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = m.isEmptyObject(a),
          f = m.speed(b, c, d),
          g = function () {
            var b = kb(this, m.extend({}, a), f);
            (e || m._data(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = m.timers,
              g = m._data(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && m.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = m._data(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = m.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                m.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    m.each(["toggle", "show", "hide"], function (a, b) {
      var c = m.fn[b];
      m.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(gb(b, !0), a, d, e);
      };
    }),
    m.each(
      {
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        m.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (m.timers = []),
    (m.fx.tick = function () {
      var a,
        b = m.timers,
        c = 0;
      for ($a = m.now(); c < b.length; c++)
        (a = b[c]), a() || b[c] !== a || b.splice(c--, 1);
      b.length || m.fx.stop(), ($a = void 0);
    }),
    (m.fx.timer = function (a) {
      m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
    }),
    (m.fx.interval = 13),
    (m.fx.start = function () {
      _a || (_a = setInterval(m.fx.tick, m.fx.interval));
    }),
    (m.fx.stop = function () {
      clearInterval(_a), (_a = null);
    }),
    (m.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (m.fn.delay = function (a, b) {
      return (
        (a = m.fx ? m.fx.speeds[a] || a : a),
        (b = b || "fx"),
        this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (function () {
      var a, b, c, d, e;
      (b = y.createElement("div")),
        b.setAttribute("className", "t"),
        (b.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (d = b.getElementsByTagName("a")[0]),
        (c = y.createElement("select")),
        (e = c.appendChild(y.createElement("option"))),
        (a = b.getElementsByTagName("input")[0]),
        (d.style.cssText = "top:1px"),
        (k.getSetAttribute = "t" !== b.className),
        (k.style = /top/.test(d.getAttribute("style"))),
        (k.hrefNormalized = "/a" === d.getAttribute("href")),
        (k.checkOn = !!a.value),
        (k.optSelected = e.selected),
        (k.enctype = !!y.createElement("form").enctype),
        (c.disabled = !0),
        (k.optDisabled = !e.disabled),
        (a = y.createElement("input")),
        a.setAttribute("value", ""),
        (k.input = "" === a.getAttribute("value")),
        (a.value = "t"),
        a.setAttribute("type", "radio"),
        (k.radioValue = "t" === a.value);
    })();
  var lb = /\r/g;
  m.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = m.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, m(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : m.isArray(e) &&
                    (e = m.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  m.valHooks[this.type] ||
                  m.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    m.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = m.find.attr(a, "value");
            return null != b ? b : m.trim(m.text(a));
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                !(
                  (!c.selected && i !== e) ||
                  (k.optDisabled
                    ? c.disabled
                    : null !== c.getAttribute("disabled")) ||
                  (c.parentNode.disabled &&
                    m.nodeName(c.parentNode, "optgroup"))
                ))
              ) {
                if (((b = m(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = m.makeArray(b),
              g = e.length;
            while (g--)
              if (((d = e[g]), m.inArray(m.valHooks.option.get(d), f) >= 0))
                try {
                  d.selected = c = !0;
                } catch (h) {
                  d.scrollHeight;
                }
              else d.selected = !1;
            return c || (a.selectedIndex = -1), e;
          },
        },
      },
    }),
    m.each(["radio", "checkbox"], function () {
      (m.valHooks[this] = {
        set: function (a, b) {
          return m.isArray(b)
            ? (a.checked = m.inArray(m(a).val(), b) >= 0)
            : void 0;
        },
      }),
        k.checkOn ||
          (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var mb,
    nb,
    ob = m.expr.attrHandle,
    pb = /^(?:checked|selected)$/i,
    qb = k.getSetAttribute,
    rb = k.input;
  m.fn.extend({
    attr: function (a, b) {
      return V(this, m.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        m.removeAttr(this, a);
      });
    },
  }),
    m.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === K
            ? m.prop(a, b, c)
            : ((1 === f && m.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb))),
              void 0 === c
                ? d && "get" in d && null !== (e = d.get(a, b))
                  ? e
                  : ((e = m.find.attr(a, b)), null == e ? void 0 : e)
                : null !== c
                ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                  ? e
                  : (a.setAttribute(b, c + ""), c)
                : void m.removeAttr(a, b));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(E);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = m.propFix[c] || c),
              m.expr.match.bool.test(c)
                ? (rb && qb) || !pb.test(c)
                  ? (a[d] = !1)
                  : (a[m.camelCase("default-" + c)] = a[d] = !1)
                : m.attr(a, c, ""),
              a.removeAttribute(qb ? c : d);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (nb = {
      set: function (a, b, c) {
        return (
          b === !1
            ? m.removeAttr(a, c)
            : (rb && qb) || !pb.test(c)
            ? a.setAttribute((!qb && m.propFix[c]) || c, c)
            : (a[m.camelCase("default-" + c)] = a[c] = !0),
          c
        );
      },
    }),
    m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = ob[b] || m.find.attr;
      ob[b] =
        (rb && qb) || !pb.test(b)
          ? function (a, b, d) {
              var e, f;
              return (
                d ||
                  ((f = ob[b]),
                  (ob[b] = e),
                  (e = null != c(a, b, d) ? b.toLowerCase() : null),
                  (ob[b] = f)),
                e
              );
            }
          : function (a, b, c) {
              return c
                ? void 0
                : a[m.camelCase("default-" + b)]
                ? b.toLowerCase()
                : null;
            };
    }),
    (rb && qb) ||
      (m.attrHooks.value = {
        set: function (a, b, c) {
          return m.nodeName(a, "input")
            ? void (a.defaultValue = b)
            : mb && mb.set(a, b, c);
        },
      }),
    qb ||
      ((mb = {
        set: function (a, b, c) {
          var d = a.getAttributeNode(c);
          return (
            d || a.setAttributeNode((d = a.ownerDocument.createAttribute(c))),
            (d.value = b += ""),
            "value" === c || b === a.getAttribute(c) ? b : void 0
          );
        },
      }),
      (ob.id =
        ob.name =
        ob.coords =
          function (a, b, c) {
            var d;
            return c
              ? void 0
              : (d = a.getAttributeNode(b)) && "" !== d.value
              ? d.value
              : null;
          }),
      (m.valHooks.button = {
        get: function (a, b) {
          var c = a.getAttributeNode(b);
          return c && c.specified ? c.value : void 0;
        },
        set: mb.set,
      }),
      (m.attrHooks.contenteditable = {
        set: function (a, b, c) {
          mb.set(a, "" === b ? !1 : b, c);
        },
      }),
      m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {
          set: function (a, c) {
            return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
          },
        };
      })),
    k.style ||
      (m.attrHooks.style = {
        get: function (a) {
          return a.style.cssText || void 0;
        },
        set: function (a, b) {
          return (a.style.cssText = b + "");
        },
      });
  var sb = /^(?:input|select|textarea|button|object)$/i,
    tb = /^(?:a|area)$/i;
  m.fn.extend({
    prop: function (a, b) {
      return V(this, m.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = m.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = void 0), delete this[a];
          } catch (b) {}
        })
      );
    },
  }),
    m.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (a, b, c) {
        var d,
          e,
          f,
          g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return (
            (f = 1 !== g || !m.isXMLDoc(a)),
            f && ((b = m.propFix[b] || b), (e = m.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = m.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : sb.test(a.nodeName) || (tb.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
    }),
    k.hrefNormalized ||
      m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {
          get: function (a) {
            return a.getAttribute(b, 4);
          },
        };
      }),
    k.optSelected ||
      (m.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return (
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
          );
        },
      }),
    m.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        m.propFix[this.toLowerCase()] = this;
      }
    ),
    k.enctype || (m.propFix.enctype = "encoding");
  var ub = /[\t\r\n\f]/g;
  m.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0,
        i = this.length,
        j = "string" == typeof a && a;
      if (m.isFunction(a))
        return this.each(function (b) {
          m(this).addClass(a.call(this, b, this.className));
        });
      if (j)
        for (b = (a || "").match(E) || []; i > h; h++)
          if (
            ((c = this[h]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")))
          ) {
            f = 0;
            while ((e = b[f++])) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            (g = m.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0,
        i = this.length,
        j = 0 === arguments.length || ("string" == typeof a && a);
      if (m.isFunction(a))
        return this.each(function (b) {
          m(this).removeClass(a.call(this, b, this.className));
        });
      if (j)
        for (b = (a || "").match(E) || []; i > h; h++)
          if (
            ((c = this[h]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ub, " ") : "")))
          ) {
            f = 0;
            while ((e = b[f++]))
              while (d.indexOf(" " + e + " ") >= 0)
                d = d.replace(" " + e + " ", " ");
            (g = a ? m.trim(d) : ""), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            m.isFunction(a)
              ? function (c) {
                  m(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function () {
                  if ("string" === c) {
                    var b,
                      d = 0,
                      e = m(this),
                      f = a.match(E) || [];
                    while ((b = f[d++]))
                      e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                  } else
                    (c === K || "boolean" === c) &&
                      (this.className &&
                        m._data(this, "__className__", this.className),
                      (this.className =
                        this.className || a === !1
                          ? ""
                          : m._data(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
  }),
    m.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        m.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    m.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    });
  var vb = m.now(),
    wb = /\?/,
    xb =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (m.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
      d = null,
      e = m.trim(b + "");
    return e &&
      !m.trim(
        e.replace(xb, function (a, b, e, f) {
          return (
            c && b && (d = 0), 0 === d ? a : ((c = e || b), (d += !f - !e), "")
          );
        })
      )
      ? Function("return " + e)()
      : m.error("Invalid JSON: " + b);
  }),
    (m.parseXML = function (b) {
      var c, d;
      if (!b || "string" != typeof b) return null;
      try {
        a.DOMParser
          ? ((d = new DOMParser()), (c = d.parseFromString(b, "text/xml")))
          : ((c = new ActiveXObject("Microsoft.XMLDOM")),
            (c.async = "false"),
            c.loadXML(b));
      } catch (e) {
        c = void 0;
      }
      return (
        (c &&
          c.documentElement &&
          !c.getElementsByTagName("parsererror").length) ||
          m.error("Invalid XML: " + b),
        c
      );
    });
  var yb,
    zb,
    Ab = /#.*$/,
    Bb = /([?&])_=[^&]*/,
    Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Eb = /^(?:GET|HEAD)$/,
    Fb = /^\/\//,
    Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Hb = {},
    Ib = {},
    Jb = "*/".concat("*");
  try {
    zb = location.href;
  } catch (Kb) {
    (zb = y.createElement("a")), (zb.href = ""), (zb = zb.href);
  }
  yb = Gb.exec(zb.toLowerCase()) || [];
  function Lb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(E) || [];
      if (m.isFunction(c))
        while ((d = f[e++]))
          "+" === d.charAt(0)
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Mb(a, b, c, d) {
    var e = {},
      f = a === Ib;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        m.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Nb(a, b) {
    var c,
      d,
      e = m.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && m.extend(!0, a, c), a;
  }
  function Ob(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }
        d || (d = g);
      }
      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Pb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  m.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: zb,
      type: "GET",
      isLocal: Db.test(yb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Jb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": m.parseJSON,
        "text xml": m.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a);
    },
    ajaxPrefilter: Lb(Hb),
    ajaxTransport: Lb(Ib),
    ajax: function (a, b) {
      "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = m.ajaxSetup({}, b),
        l = k.context || k,
        n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
        o = m.Deferred(),
        p = m.Callbacks("once memory"),
        q = k.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!j) {
                j = {};
                while ((b = Cb.exec(f))) j[b[1].toLowerCase()] = b[2];
              }
              b = j[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === t ? f : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return t || (k.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > t) for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this;
          },
          abort: function (a) {
            var b = a || u;
            return i && i.abort(b), x(0, b), this;
          },
        };
      if (
        ((o.promise(v).complete = p.add),
        (v.success = v.done),
        (v.error = v.fail),
        (k.url = ((a || k.url || zb) + "")
          .replace(Ab, "")
          .replace(Fb, yb[1] + "//")),
        (k.type = b.method || b.type || k.method || k.type),
        (k.dataTypes = m
          .trim(k.dataType || "*")
          .toLowerCase()
          .match(E) || [""]),
        null == k.crossDomain &&
          ((c = Gb.exec(k.url.toLowerCase())),
          (k.crossDomain = !(
            !c ||
            (c[1] === yb[1] &&
              c[2] === yb[2] &&
              (c[3] || ("http:" === c[1] ? "80" : "443")) ===
                (yb[3] || ("http:" === yb[1] ? "80" : "443")))
          ))),
        k.data &&
          k.processData &&
          "string" != typeof k.data &&
          (k.data = m.param(k.data, k.traditional)),
        Mb(Hb, k, b, v),
        2 === t)
      )
        return v;
      (h = m.event && k.global),
        h && 0 === m.active++ && m.event.trigger("ajaxStart"),
        (k.type = k.type.toUpperCase()),
        (k.hasContent = !Eb.test(k.type)),
        (e = k.url),
        k.hasContent ||
          (k.data &&
            ((e = k.url += (wb.test(e) ? "&" : "?") + k.data), delete k.data),
          k.cache === !1 &&
            (k.url = Bb.test(e)
              ? e.replace(Bb, "$1_=" + vb++)
              : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)),
        k.ifModified &&
          (m.lastModified[e] &&
            v.setRequestHeader("If-Modified-Since", m.lastModified[e]),
          m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])),
        ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) &&
          v.setRequestHeader("Content-Type", k.contentType),
        v.setRequestHeader(
          "Accept",
          k.dataTypes[0] && k.accepts[k.dataTypes[0]]
            ? k.accepts[k.dataTypes[0]] +
                ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "")
            : k.accepts["*"]
        );
      for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
        return v.abort();
      u = "abort";
      for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]);
      if ((i = Mb(Ib, k, b, v))) {
        (v.readyState = 1),
          h && n.trigger("ajaxSend", [v, k]),
          k.async &&
            k.timeout > 0 &&
            (g = setTimeout(function () {
              v.abort("timeout");
            }, k.timeout));
        try {
          (t = 1), i.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, "No Transport");
      function x(a, b, c, d) {
        var j,
          r,
          s,
          u,
          w,
          x = b;
        2 !== t &&
          ((t = 2),
          g && clearTimeout(g),
          (i = void 0),
          (f = d || ""),
          (v.readyState = a > 0 ? 4 : 0),
          (j = (a >= 200 && 300 > a) || 304 === a),
          c && (u = Ob(k, v, c)),
          (u = Pb(k, u, v, j)),
          j
            ? (k.ifModified &&
                ((w = v.getResponseHeader("Last-Modified")),
                w && (m.lastModified[e] = w),
                (w = v.getResponseHeader("etag")),
                w && (m.etag[e] = w)),
              204 === a || "HEAD" === k.type
                ? (x = "nocontent")
                : 304 === a
                ? (x = "notmodified")
                : ((x = u.state), (r = u.data), (s = u.error), (j = !s)))
            : ((s = x), (a || !x) && ((x = "error"), 0 > a && (a = 0))),
          (v.status = a),
          (v.statusText = (b || x) + ""),
          j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
          v.statusCode(q),
          (q = void 0),
          h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
          p.fireWith(l, [v, x]),
          h &&
            (n.trigger("ajaxComplete", [v, k]),
            --m.active || m.event.trigger("ajaxStop")));
      }
      return v;
    },
    getJSON: function (a, b, c) {
      return m.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return m.get(a, void 0, b, "script");
    },
  }),
    m.each(["get", "post"], function (a, b) {
      m[b] = function (a, c, d, e) {
        return (
          m.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          m.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    (m._evalUrl = function (a) {
      return m.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    m.fn.extend({
      wrapAll: function (a) {
        if (m.isFunction(a))
          return this.each(function (b) {
            m(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && 1 === a.firstChild.nodeType)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return this.each(
          m.isFunction(a)
            ? function (b) {
                m(this).wrapInner(a.call(this, b));
              }
            : function () {
                var b = m(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              }
        );
      },
      wrap: function (a) {
        var b = m.isFunction(a);
        return this.each(function (c) {
          m(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (m.expr.filters.hidden = function (a) {
      return (
        (a.offsetWidth <= 0 && a.offsetHeight <= 0) ||
        (!k.reliableHiddenOffsets() &&
          "none" === ((a.style && a.style.display) || m.css(a, "display")))
      );
    }),
    (m.expr.filters.visible = function (a) {
      return !m.expr.filters.hidden(a);
    });
  var Qb = /%20/g,
    Rb = /\[\]$/,
    Sb = /\r?\n/g,
    Tb = /^(?:submit|button|image|reset|file)$/i,
    Ub = /^(?:input|select|textarea|keygen)/i;
  function Vb(a, b, c, d) {
    var e;
    if (m.isArray(b))
      m.each(b, function (b, e) {
        c || Rb.test(a)
          ? d(a, e)
          : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== m.type(b)) d(a, b);
    else for (e in b) Vb(a + "[" + e + "]", b[e], c, d);
  }
  (m.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = m.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional),
      m.isArray(a) || (a.jquery && !m.isPlainObject(a)))
    )
      m.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Vb(c, a[c], b, e);
    return d.join("&").replace(Qb, "+");
  }),
    m.fn.extend({
      serialize: function () {
        return m.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = m.prop(this, "elements");
          return a ? m.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !m(this).is(":disabled") &&
              Ub.test(this.nodeName) &&
              !Tb.test(a) &&
              (this.checked || !W.test(a))
            );
          })
          .map(function (a, b) {
            var c = m(this).val();
            return null == c
              ? null
              : m.isArray(c)
              ? m.map(c, function (a) {
                  return { name: b.name, value: a.replace(Sb, "\r\n") };
                })
              : { name: b.name, value: c.replace(Sb, "\r\n") };
          })
          .get();
      },
    }),
    (m.ajaxSettings.xhr =
      void 0 !== a.ActiveXObject
        ? function () {
            return (
              (!this.isLocal &&
                /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                Zb()) ||
              $b()
            );
          }
        : Zb);
  var Wb = 0,
    Xb = {},
    Yb = m.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent("onunload", function () {
      for (var a in Xb) Xb[a](void 0, !0);
    }),
    (k.cors = !!Yb && "withCredentials" in Yb),
    (Yb = k.ajax = !!Yb),
    Yb &&
      m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
          var b;
          return {
            send: function (c, d) {
              var e,
                f = a.xhr(),
                g = ++Wb;
              if (
                (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType &&
                f.overrideMimeType &&
                f.overrideMimeType(a.mimeType),
                a.crossDomain ||
                  c["X-Requested-With"] ||
                  (c["X-Requested-With"] = "XMLHttpRequest");
              for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
              f.send((a.hasContent && a.data) || null),
                (b = function (c, e) {
                  var h, i, j;
                  if (b && (e || 4 === f.readyState))
                    if (
                      (delete Xb[g],
                      (b = void 0),
                      (f.onreadystatechange = m.noop),
                      e)
                    )
                      4 !== f.readyState && f.abort();
                    else {
                      (j = {}),
                        (h = f.status),
                        "string" == typeof f.responseText &&
                          (j.text = f.responseText);
                      try {
                        i = f.statusText;
                      } catch (k) {
                        i = "";
                      }
                      h || !a.isLocal || a.crossDomain
                        ? 1223 === h && (h = 204)
                        : (h = j.text ? 200 : 404);
                    }
                  j && d(h, i, j, f.getAllResponseHeaders());
                }),
                a.async
                  ? 4 === f.readyState
                    ? setTimeout(b)
                    : (f.onreadystatechange = Xb[g] = b)
                  : b();
            },
            abort: function () {
              b && b(void 0, !0);
            },
          };
        }
      });
  function Zb() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function $b() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  m.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      "text script": function (a) {
        return m.globalEval(a), a;
      },
    },
  }),
    m.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    m.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b,
          c = y.head || m("head")[0] || y.documentElement;
        return {
          send: function (d, e) {
            (b = y.createElement("script")),
              (b.async = !0),
              a.scriptCharset && (b.charset = a.scriptCharset),
              (b.src = a.url),
              (b.onload = b.onreadystatechange =
                function (a, c) {
                  (c ||
                    !b.readyState ||
                    /loaded|complete/.test(b.readyState)) &&
                    ((b.onload = b.onreadystatechange = null),
                    b.parentNode && b.parentNode.removeChild(b),
                    (b = null),
                    c || e(200, "success"));
                }),
              c.insertBefore(b, c.firstChild);
          },
          abort: function () {
            b && b.onload(void 0, !0);
          },
        };
      }
    });
  var _b = [],
    ac = /(=)\?(?=&|$)|\?\?/;
  m.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = _b.pop() || m.expando + "_" + vb++;
      return (this[a] = !0), a;
    },
  }),
    m.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (ac.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              !(b.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              ac.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            m.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(ac, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), _b.push(e)),
              g && m.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (m.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || y);
      var d = u.exec(a),
        e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = m.buildFragment([a], b, e)),
          e && e.length && m(e).remove(),
          m.merge([], d.childNodes));
    });
  var bc = m.fn.load;
  (m.fn.load = function (a, b, c) {
    if ("string" != typeof a && bc) return bc.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h >= 0 && ((d = m.trim(a.slice(h, a.length))), (a = a.slice(0, h))),
      m.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (f = "POST"),
      g.length > 0 &&
        m
          .ajax({ url: a, type: f, dataType: "html", data: b })
          .done(function (a) {
            (e = arguments),
              g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
          })
          .complete(
            c &&
              function (a, b) {
                g.each(c, e || [a.responseText, b, a]);
              }
          ),
      this
    );
  }),
    m.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        m.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (m.expr.filters.animated = function (a) {
      return m.grep(m.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  var cc = a.document.documentElement;
  function dc(a) {
    return m.isWindow(a)
      ? a
      : 9 === a.nodeType
      ? a.defaultView || a.parentWindow
      : !1;
  }
  (m.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = m.css(a, "position"),
        l = m(a),
        n = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = m.css(a, "top")),
        (i = m.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) &&
          m.inArray("auto", [f, i]) > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        m.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (n.top = b.top - h.top + g),
        null != b.left && (n.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, n) : l.css(n);
    },
  }),
    m.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                m.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            m.contains(b, e)
              ? (typeof e.getBoundingClientRect !== K &&
                  (d = e.getBoundingClientRect()),
                (c = dc(f)),
                {
                  top:
                    d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                  left:
                    d.left +
                    (c.pageXOffset || b.scrollLeft) -
                    (b.clientLeft || 0),
                })
              : d
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];
          return (
            "fixed" === m.css(d, "position")
              ? (b = d.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                m.nodeName(a[0], "html") || (c = a.offset()),
                (c.top += m.css(a[0], "borderTopWidth", !0)),
                (c.left += m.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - c.top - m.css(d, "marginTop", !0),
              left: b.left - c.left - m.css(d, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || cc;
          while (
            a &&
            !m.nodeName(a, "html") &&
            "static" === m.css(a, "position")
          )
            a = a.offsetParent;
          return a || cc;
        });
      },
    }),
    m.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
          return V(
            this,
            function (a, d, e) {
              var f = dc(a);
              return void 0 === e
                ? f
                  ? b in f
                    ? f[b]
                    : f.document.documentElement[d]
                  : a[d]
                : void (f
                    ? f.scrollTo(
                        c ? m(f).scrollLeft() : e,
                        c ? e : m(f).scrollTop()
                      )
                    : (a[d] = e));
            },
            a,
            d,
            arguments.length,
            null
          );
        };
      }
    ),
    m.each(["top", "left"], function (a, b) {
      m.cssHooks[b] = La(k.pixelPosition, function (a, c) {
        return c
          ? ((c = Ja(a, b)), Ha.test(c) ? m(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    m.each({ Height: "height", Width: "width" }, function (a, b) {
      m.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          m.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return V(
              this,
              function (b, c, d) {
                var e;
                return m.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? m.css(b, c, g)
                  : m.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    (m.fn.size = function () {
      return this.length;
    }),
    (m.fn.andSelf = m.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return m;
      });
  var ec = a.jQuery,
    fc = a.$;
  return (
    (m.noConflict = function (b) {
      return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m;
    }),
    typeof b === K && (a.jQuery = a.$ = m),
    m
  );
});

var $mj = jQuery.noConflict();

$mj(document).ready(function () {
  var arrayOfElem = [
    "calculateForGrade",
    "BasicSal_mon",
    "BasicSal_an",
    "adhocPay_mon",
    "adhocPay_an",
    "pfBase_mon",
    "pfBase_an",
    "pf_mon",
    "pf_ann",
    "gratuity_mon",
    "gratuity_ann",
    "superannuation_mon",
    "superannuation_ann",
    "retirals_mon",
    "retirals_ann",
    "totalFixed_mon",
    "totalFixed_ann",
    "flexiPay_mon",
    "flexiPay_an",
    "bonusExgratia_mon",
    "bonusExgratia_an",
    "totalGuaranteed_mon",
    "totalGuaranteed_an",
    "performancePay_mon",
    "performancePay_an",
    "ctc_mon",
    "ctc_an",
    "grossPay_mon",
    "grossPay_an",
  ];

  for (var l = 0; l < arrayOfElem.length; l++) {
    $mj('[name="' + arrayOfElem[l] + '"]').prop("readonly", true);
  }

  var calcCTC = function (offerCtc, inputlevel, inputcompany) {
    var inputCTC_an = offerCtc;
    var level = inputlevel;
    var company = inputcompany;
    var selectedGrade = $mj("#selectLevel option:selected").text();
    var selecteddomain = $mj("#domain option:selected").text();
    var inputBU = $mj("#businessUnit").val();
    var inputTHP = $mj("#THP").val();

    var val_dec = (0).toFixed(2);

    CTCcalculation = {
      BasicSal_mon: val_dec,
      BasicSal_an: val_dec,
      adhocPay_mon: val_dec,
      adhocPay_an: val_dec,
      pfBase_mon: val_dec,
      pfBase_an: val_dec,
      pf_mon: val_dec,
      pf_ann: val_dec,
      gratuity_mon: val_dec,
      gratuity_ann: val_dec,
      superannuation_mon: val_dec,
      superannuation_ann: val_dec,
      retirals_mon: val_dec,
      retirals_ann: val_dec,
      totalFixed_mon: val_dec,
      totalFixed_ann: val_dec,
      hra_mon: val_dec,
      hra_ann: val_dec,
      conveyance_mon: val_dec,
      conveyance_ann: val_dec,
      medical_mon: val_dec,
      medical_ann: val_dec,
      education_mon: val_dec,
      education_ann: val_dec,
      field_mon: val_dec,
      field_ann: val_dec,
      lta_mon: val_dec,
      lta_ann: val_dec,
      cea_an: val_dec,
      cea_mon: val_dec,
      specialPay_mon: val_dec,
      specialPay_an: val_dec,
      totalAllow_mon: val_dec,
      totalAllow_ann: val_dec,
      flexiPay_mon: val_dec,
      flexiPay_an: val_dec,
      bonusExgratia_mon: val_dec,
      bonusExgratia_an: val_dec,
      totalGuaranteed_mon: val_dec,
      totalGuaranteed_an: val_dec,
      performancePay_mon: val_dec,
      performancePay_an: val_dec,
      esic_mon: val_dec,
      esic_an: val_dec,
      ctc_mon: val_dec,
      ctc_an: val_dec,
      grossPay_mon: val_dec,
      grossPay_an: val_dec,
    };

    if (company == "1037") {
      var fixedPer = {
        exl2: (25 / 100) * inputCTC_an,
        exl3: (25 / 100) * inputCTC_an,
        dhl3: (28 / 100) * inputCTC_an,
        dhl4: (30 / 100) * inputCTC_an,
        dhl5: (35 / 100) * inputCTC_an,
        ml5: (40 / 100) * inputCTC_an,
        ml6: (48 / 100) * inputCTC_an,
        ml7: (50 / 100) * inputCTC_an,
        ol7: (50 / 100) * inputCTC_an,
        ol8: (50 / 100) * inputCTC_an,
        ol9: (50 / 100) * inputCTC_an,
        ol10: (50 / 100) * inputCTC_an,
      };

      var fixed = fixedPer[level];

      var pfbase = {
        exl2: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
        exl3: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
        dhl3: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
        dhl4: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
        dhl5: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
        ml5: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
        ml6: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
        ml7: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
        ol7: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
        ol8: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
        ol9: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
        ol10: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
      };

      var bonusExgratia = {
        exl2: 0,

        exl3: 0,
        dhl3: 0,
        dhl4: 0,
        dhl5: 0,
        ml5: 0,
        ml6: 0,
        ml7: 0,
        ol7: 36000,
        ol8: 36000,
        ol9: 36000,
        ol10: 36000,
      };

      var performanceP = {
        exl2: 22 / 100,
        exl3: 20 / 100,
        dhl3: 20 / 100,
        dhl4: 18 / 100,
        dhl5: 15 / 100,
        ml5: 15 / 100,
        ml6: 12 / 100,
        ml7: 10 / 100,
        ol7: 10 / 100,
        ol8: 8 / 100,
        ol9: 7 / 100,
        ol10: 6 / 100,
      };

      var business = {
        exl2: 50,
        exl3: 50,
        dhl3: 50,
        dhl4: 40,
        dhl5: 40,
        ml5: 20,
        ml6: 20,
        ml7: 20,
        ol7: 20,
        ol8: 20,
        ol9: 20,
        ol10: 20,
      };

      var individual = {
        exl2: 50,
        exl3: 50,
        dhl3: 60,
        dhl4: 60,
        dhl5: 60,
        ml5: 80,
        ml6: 80,
        ml7: 80,
        ol7: 80,
        ol8: 80,
        ol9: 80,
        ol10: 80,
      };

      ASFDGRID_MIN = {
        exl2: 9500000,
        exl3: 7400000,
        dhl3: 5300000,
        dhl4: 4200000,
        dhl5: 3200000,
        ml5: 2300000,
        ml6: 1800000,
        ml7: 1300000,
        ol7: 1000000,
        ol8: 800000,
        ol9: 500000,
        ol10: 350000,
      };

      ASFDGRID_MAX = {
        exl2: 12500000,
        exl3: 9500000,
        dhl3: 7100000,
        dhl4: 5700000,
        dhl5: 4200000,
        ml5: 3200000,
        ml6: 2400000,
        ml7: 1900000,
        ol7: 1500000,
        ol8: 1100000,
        ol9: 700000,
        ol10: 500000,
      };

      TH_MIN = {
        exl2: 10000000,
        exl3: 7900000,
        dhl3: 5500000,
        dhl4: 4400000,
        dhl5: 3400000,
        ml5: 2400000,
        ml6: 1900000,
        ml7: 1500000,
        ol7: 1050000,
      };

      TH_MAX = {
        exl2: 15000000,
        exl3: 10900000,
        dhl3: 8200000,
        dhl4: 6400000,
        dhl5: 5000000,
        ml5: 4000000,
        ml6: 3000000,
        ml7: 2500000,
        ol7: 1800000,
      };

      PT_MIN = {
        exl2: 10000000,
        exl3: 7900000,
        dhl3: 5500000,
        dhl4: 4400000,
        dhl5: 3400000,
        ml5: 2400000,
        ml6: 1900000,
        ml7: 1500000,
        ol7: 1050000,
      };

      PT_MAX = {
        exl2: 15000000,
        exl3: 10900000,
        dhl3: 8200000,
        dhl4: 6400000,
        dhl5: 5000000,
        ml5: 4000000,
        ml6: 3000000,
        ml7: 2500000,
        ol7: 1800000,
      };

      if (
        inputTHP == "Technical" &&
        (level == "ol8" || level == "ol9" || level == "ol10")
      ) {
        alert("Technincal Skills is not Applicable for Band-O ");
      }

      var Normal_min = ASFDGRID_MIN[level];
      var Normal_max = ASFDGRID_MAX[level];
      var THP_min =
        inputTHP == "Normal"
          ? Normal_min
          : inputTHP == "Technical" || inputTHP == "HotSkills"
          ? TH_MIN[level]
          : PT_MIN[level];
      var THP_max =
        inputTHP == "Normal"
          ? Normal_max
          : inputTHP == "Technical" || inputTHP == "HotSkills"
          ? TH_MAX[level]
          : PT_MAX[level];
      if (inputCTC_an < Normal_min || inputCTC_an > THP_max) {
        CTCcalculation["gridmatrix"] =
          "Additional Approver Required-Outside Hiring Grid";
      } else {
        CTCcalculation["gridmatrix"] = "Within Hiring Grid";
      }

      CTCcalculation["pfBase_an"] = pfbase[level];
      CTCcalculation["pfBase_mon"] = CTCcalculation["pfBase_an"] / 12;
      CTCcalculation["BasicSal_an"] = CTCcalculation["pfBase_an"];
      CTCcalculation["BasicSal_mon"] = CTCcalculation["BasicSal_an"] / 12;
      /*CTCcalculation["adhocPay_an"] = 0.00;*/

      CTCcalculation["adhocPay_mon"] = CTCcalculation["adhocPay_an"] / 12;
	if (CTCcalculation["adhocPay_mon"] == 0)
      {
	 CTCcalculation["adhocPay_mon"] = val_dec;
	}

      CTCcalculation["pf_ann"] = 0.12 * CTCcalculation["pfBase_an"];
      CTCcalculation["pf_mon"] = CTCcalculation["pf_ann"] / 12;
      CTCcalculation["gratuity_ann"] = Math.round(
        0.0481 * CTCcalculation["pfBase_an"]
      );
      CTCcalculation["gratuity_mon"] = CTCcalculation["gratuity_ann"] / 12;
      CTCcalculation["superannuation_ann"] = 0;
      CTCcalculation["superannuation_mon"] =
        CTCcalculation["superannuation_ann"] / 12;
      CTCcalculation["retirals_ann"] = Math.round(
        (16.81 * CTCcalculation["pfBase_an"]) / 100
      );
      CTCcalculation["retirals_mon"] = CTCcalculation["retirals_ann"] / 12;
      CTCcalculation["totalFixed_ann"] =
        CTCcalculation["pfBase_an"] + CTCcalculation["retirals_ann"];
      CTCcalculation["totalFixed_mon"] = CTCcalculation["totalFixed_ann"] / 12;
      CTCcalculation["bonusExgratia_an"] = bonusExgratia[level];

      CTCcalculation["bonusExgratia_mon"] =
        CTCcalculation["bonusExgratia_an"] / 12;


      
      CTCcalculation["performancePay_an"] =
        Math.round((performanceP[level] * inputCTC_an) / 100) * 100;
      CTCcalculation["performancePay_mon"] =
        CTCcalculation["performancePay_an"] / 12;
      CTCcalculation["flexiPay_an"] =
        inputCTC_an -
        CTCcalculation["pfBase_an"] -
        CTCcalculation["retirals_ann"] -
        CTCcalculation["performancePay_an"] -
        CTCcalculation["bonusExgratia_an"];
      CTCcalculation["flexiPay_mon"] = CTCcalculation["flexiPay_an"] / 12;
      CTCcalculation["totalGuaranteed_an"] =
        CTCcalculation["pfBase_an"] +
        CTCcalculation["retirals_ann"] +
        CTCcalculation["flexiPay_an"] +
        CTCcalculation["bonusExgratia_an"];
      CTCcalculation["totalGuaranteed_mon"] =
        CTCcalculation["totalGuaranteed_an"] / 12;
      CTCcalculation["ctc_an"] =
        CTCcalculation["pfBase_an"] +
        CTCcalculation["retirals_ann"] +
        CTCcalculation["flexiPay_an"] +
        CTCcalculation["bonusExgratia_an"] +
        CTCcalculation["performancePay_an"];
      CTCcalculation["ctc_mon"] = CTCcalculation["ctc_an"] / 12;
      CTCcalculation["grossPay_mon"] =
        CTCcalculation["pfBase_mon"] +
        CTCcalculation["flexiPay_mon"] +
        CTCcalculation["bonusExgratia_mon"];

      CTCcalculation["grossPay_an"] = CTCcalculation["grossPay_mon"] * 12;
      CTCcalculation["calculateForGrade"] = selectedGrade;
      CTCcalculation["sectorBusinessXMatrix"] = business[level];
      CTCcalculation["individualScore"] = individual[level];
      CTCcalculation["graduityPercent"] = 4.81;
      CTCcalculation["level5PP"] =
        Math.round((CTCcalculation["performancePay_an"] * 170) / 100 / 100) *
        100;
      CTCcalculation["calculateForDomain"] = selecteddomain;
    } else if (
      company == "1001" ||
      company == "9026" ||
      company == "9025" ||
      company == "1019" ||
      company == "1020" ||
      company == "1081" ||
      company == "1021"
    ) {
      var fixedPer = {
        l1s: (25 / 100) * inputCTC_an,
        l2s: (25 / 100) * inputCTC_an,

        exl2: (25 / 100) * inputCTC_an,
        exl3: (25 / 100) * inputCTC_an,
        dhl3: (28 / 100) * inputCTC_an,
        dhl4: (30 / 100) * inputCTC_an,
        dhl5: (35 / 100) * inputCTC_an,
        ml5: (40 / 100) * inputCTC_an,
        ml6: (48 / 100) * inputCTC_an,
        ml7: (50 / 100) * inputCTC_an,
        ol7: (50 / 100) * inputCTC_an,
        ol8: (50 / 100) * inputCTC_an,
        ol9: (50 / 100) * inputCTC_an,
        ol10: (50 / 100) * inputCTC_an,
      };

      var fixed = fixedPer[level];

      var pfbase = {
        l1s: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        l2s: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        exl2: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        exl3: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        dhl3: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        dhl4: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        dhl5: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        ml5: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        ml6: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        ml7: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        ol7: Math.round(fixed / (1 + 17.56 / 100) / 12) * 12,
        ol8: Math.round(fixed / (1 + 17.56 / 100) / 12) * 12,
        ol9: Math.round(fixed / (1 + 17.56 / 100) / 12) * 12,
        ol10: Math.round(fixed / (1 + 17.56 / 100) / 12) * 12,
      };

      var bonusExgratia = {
        l1s: 0,
        l2s: 0,
        exl2: 0,
        exl3: 0,
        dhl3: 0,
        dhl4: 0,
        dhl5: 0,
        ml5: 0,
        ml6: 0,
        ml7: 0,
        ol7: 36000,
        ol8: 36000,
        ol9: 36000,
        ol10: 36000,
      };

      var performanceP = {
        l1s: 25 / 100,
        l2s: 22 / 100,

        exl2: 22 / 100,
        exl3: 20 / 100,
        dhl3: 20 / 100,
        dhl4: 18 / 100,
        dhl5: 15 / 100,
        ml5: 15 / 100,
        ml6: 12 / 100,
        ml7: 10 / 100,
        ol7: 10 / 100,
        ol8: 8 / 100,
        ol9: 7 / 100,
        ol10: 6 / 100,
      };

      var retirals = {
        l1s: 32.56,
        l2s: 32.56,
        exl2: 32.56,
        exl3: 32.56,

        dhl3: 32.56,
        dhl4: 32.56,
        dhl5: 32.56,
        ml5: 32.56,
        ml6: 32.56,
        ml7: 32.56,
        ol7: 17.56,
        ol8: 17.56,
        ol9: 17.56,
        ol10: 17.56,
      };

      var basic = {
        l1s: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        l2s: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        exl2: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        exl3: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        dhl3: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        dhl4: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        dhl5: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        ml5: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        ml6: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        ml7: Math.round(fixed / (1 + 32.56 / 100) / 12) * 12,
        ol7: 16800,
        ol8: 15600,
        ol9: 14400,
        ol10: 13200,
      };

      var business = {
        l1s: 50,
        l2s: 50,
        exl2: 40,
        exl3: 40,
        dhl3: 30,
        dhl4: 30,
        dhl5: 30,
        ml5: 20,
        ml6: 20,
        ml7: 20,
        ol7: 20,
        ol8: 20,
        ol9: 20,
        ol10: 20,
      };

      var individual = {
        l1s: 50,
        l2s: 50,
        exl2: 60,
        exl3: 60,
        dhl3: 70,
        dhl4: 70,
        dhl5: 70,
        ml5: 80,
        ml6: 80,
        ml7: 80,
        ol7: 80,
        ol8: 80,
        ol9: 80,
        ol10: 80,
      };

      SDAPPLIGRID_MIN = {
        'exl2': 7176000,
        'exl3': 5336000,
        'dhl3': 3680000,
        'dhl4': 2944000,
        'dhl5': 2208000,
        'ml5' : 1656000,
        'ml6' : 1196000,
        'ml7' : 920000,
        'ol7' : 736000,
        'ol8' : 529000,
        'ol9' : 372600,
        'ol10': 303600
      }

      SDAPPLIGRID_MAX = {
        'exl2': 7800000,
        'exl3': 5800000,
        'dhl3': 4600000,
        'dhl4': 3400000,
        'dhl5': 2650000,
        'ml5' : 2200000,
        'ml6' : 1650000,
        'ml7' : 1400000,
        'ol7' : 1050000,
        'ol8' : 850000,
        'ol9' : 550000,
        'ol10': 400000
      }
      
      AGFDMTWLGRID_MIN = {
        exl2: 9000000,
        exl3: 7000000,
        dhl3: 5000000,
        dhl4: 4200000,
        dhl5: 3200000,
        ml5: 2200000,
        ml6: 1500000,
        ml7: 1300000,
        ol7: 1000000,
        ol8: 650000,
        ol9: 500000,
        ol10: 350800,
      };

      AGFDMTWLGRID_MAX = {
        exl2: 11900000,
        exl3: 9000000,
        dhl3: 6800000,
        dhl4: 5400000,
        dhl5: 4000000,
        ml5: 3100000,
        ml6: 2200000,
        ml7: 1700000,
        ol7: 1350000,
        ol8: 1050000,
        ol9: 700000,
        ol10: 500000,
      };

      ADMINGRID_MIN = {
        exl2: 6240000,
        exl3: 4640000,
        dhl3: 3200000,
        dhl4: 2560000,
        dhl5: 1920000,
        ml5: 1440000,
        ml6: 1040000,
        ml7: 800000,
        ol7: 640000,
        ol8: 460000,
        ol9: 324000,
        ol10: 264000,
      };

      ADMINGRID_MAX = {
        exl2: 9040000,
        exl3: 6560000,
        dhl3: 4800000,
        dhl4: 3600000,
        dhl5: 2800000,
        ml5: 2160000,
        ml6: 1680000,
        ml7: 1280000,
        ol7: 960000,
        ol8: 720000,
        ol9: 476000,
        ol10: 360000,
      };

      ASFDGRID_MIN = {
        exl2: 9500000,
        exl3: 7400000,
        dhl3: 5300000,
        dhl4: 4200000,
        dhl5: 3200000,
        ml5: 2300000,
        ml6: 1800000,
        ml7: 1300000,
        ol7: 1000000,
        ol8: 800000,
        ol9: 500000,
        ol10: 350000,
      };

      ASFDGRID_MAX = {
        exl2: 12500000,
        exl3: 9500000,
        dhl3: 7100000,
        dhl4: 5700000,
        dhl5: 4200000,
        ml5: 3200000,
        ml6: 2400000,
        ml7: 1900000,
        ol7: 1500000,
        ol8: 1100000,
        ol9: 700000,
        ol10: 500000,
      };

      TH_MIN = {
        exl2: 10000000,
        exl3: 7900000,
        dhl3: 5500000,
        dhl4: 4400000,
        dhl5: 3400000,
        ml5: 2400000,
        ml6: 1900000,
        ml7: 1500000,
        ol7: 1050000,
      };

      TH_MAX = {
        exl2: 15000000,
        exl3: 10900000,
        dhl3: 8200000,
        dhl4: 6400000,
        dhl5: 5000000,
        ml5: 4000000,
        ml6: 3000000,
        ml7: 2500000,
        ol7: 1800000,
      };

      PT_MIN = {
        exl2: 10000000,
        exl3: 7900000,
        dhl3: 5500000,
        dhl4: 4400000,
        dhl5: 3400000,
        ml5: 2400000,
        ml6: 1900000,
        ml7: 1500000,
        ol7: 1050000,
      };

      PT_MAX = {
        exl2: 15000000,
        exl3: 10900000,
        dhl3: 8200000,
        dhl4: 6400000,
        dhl5: 5000000,
        ml5: 4000000,
        ml6: 3000000,
        ml7: 2500000,
        ol7: 1800000,
      };

      if (
        inputTHP == "Technical" &&
        (level == "ol8" || level == "ol9" || level == "ol10")
      ) {
        alert("Technincal Skills is not Applicable for Band-O ");
      }

      if (
        inputBU == "ImplemntBusiness" ) {
        var Normal_min = SDAPPLIGRID_MIN[level];
        var Normal_max = SDAPPLIGRID_MAX[level];
        var THP_min =
          inputTHP == "Normal"
            ? Normal_min
            : inputTHP == "Technical" || inputTHP == "HotSkills"
            ? TH_MIN[level]
            : PT_MIN[level];
        var THP_max =
          inputTHP == "Normal"
            ? Normal_max
            : inputTHP == "Technical" || inputTHP == "HotSkills"
            ? TH_MAX[level]
            : PT_MAX[level];
        if (inputCTC_an < Normal_min || inputCTC_an > THP_max) {
          CTCcalculation["gridmatrix"] =
            "Additional Approver Required-Outside Hiring Grid";
        } else {
          CTCcalculation["gridmatrix"] = "Within Hiring Grid";
        }
      } else if (
        inputBU == "FarmDivision" ||
        inputBU == "MahindraUsa" ||
        inputBU == "MYYTCL" ||
        inputBU == "FesPresidentOffice" ||
        inputBU == "precisionFarming" || 
        inputBU == "InternationalOperations" ||
        inputBU == "ProductPlanning" ||
        inputBU == "FarmMachineryBusiness" ||
        inputBU == "FES" ||
        inputBU == "SwarajDivision" ||
        inputBU == "Strategy" ||
        inputBU == "IO" ||
        inputBU == "FESQuality" ||
        inputBU == "SwarajEngines" ||
        inputBU == "GROMAXAGRIEQUIPMENTLTD" ||
        inputBU == "RentalSolutions" ||
        inputBU == "GotoMarket" ||
        inputBU == "FESDigitalCentre" ||
        inputBU == "FESGlobalManufacturing" ||
        inputBU == "CommonFunctions" ||
        inputBU == "DigitalSolutions"
      ) {
        var Normal_min = AGFDMTWLGRID_MIN[level];
        var Normal_max = AGFDMTWLGRID_MAX[level];
        var THP_min =
          inputTHP == "Normal"
            ? Normal_min
            : inputTHP == "Technical" || inputTHP == "HotSkills"
            ? TH_MIN[level]
            : PT_MIN[level];
        var THP_max =
          inputTHP == "Normal"
            ? Normal_max
            : inputTHP == "Technical" || inputTHP == "HotSkills"
            ? TH_MAX[level]
            : PT_MAX[level];
        if (inputCTC_an < Normal_min || inputCTC_an > THP_max) {
          CTCcalculation["gridmatrix"] = "Outside Hiring Grid";
        } else {
          CTCcalculation["gridmatrix"] = "Within Hiring Grid";
        }
      } else if (inputBU == "administration") {
        var Normal_min = ADMINGRID_MIN[level];
        var Normal_max = ADMINGRID_MAX[level];
        var THP_min =
          inputTHP == "Normal"
            ? Normal_min
            : inputTHP == "Technical" || inputTHP == "HotSkills"
            ? TH_MIN[level]
            : PT_MIN[level];
        var THP_max =
          inputTHP == "Normal"
            ? Normal_max
            : inputTHP == "Technical" || inputTHP == "HotSkills"
            ? TH_MAX[level]
            : PT_MAX[level];
        if (inputCTC_an < Normal_min || inputCTC_an > THP_max) {
          CTCcalculation["gridmatrix"] = "Outside Hiring Grid";
        } else {
          CTCcalculation["gridmatrix"] = "Within Hiring Grid";
        }
      } else {
        var Normal_min = ASFDGRID_MIN[level];
        var Normal_max = ASFDGRID_MAX[level];
        var THP_min =
          inputTHP == "Normal"
            ? Normal_min
            : inputTHP == "Technical" || inputTHP == "HotSkills"
            ? TH_MIN[level]
            : PT_MIN[level];
        var THP_max =
          inputTHP == "Normal"
            ? Normal_max
            : inputTHP == "Technical" || inputTHP == "HotSkills"
            ? TH_MAX[level]
            : PT_MAX[level];
        if (inputCTC_an < Normal_min || inputCTC_an > THP_max) {
          CTCcalculation["gridmatrix"] =
            "Additional Approver Required-Outside Hiring Grid";
        } else {
          CTCcalculation["gridmatrix"] = "Within Hiring Grid";
        }
      }

      CTCcalculation["pfBase_an"] = pfbase[level];
      CTCcalculation["pfBase_mon"] = CTCcalculation["pfBase_an"] / 12;
      CTCcalculation["BasicSal_an"] = basic[level];
      CTCcalculation["BasicSal_mon"] = CTCcalculation["BasicSal_an"] / 12;
      CTCcalculation["adhocPay_an"] =
        Math.round(
          (CTCcalculation["pfBase_an"] - CTCcalculation["BasicSal_an"]) / 12
        ) * 12;


	if (CTCcalculation["adhocPay_an"] == 0)
      {
	 CTCcalculation["adhocPay_an"] = val_dec;
	}
      CTCcalculation["adhocPay_mon"] = CTCcalculation["adhocPay_an"] / 12;
      if (CTCcalculation["adhocPay_mon"] == 0)
      {
	 CTCcalculation["adhocPay_mon"] = val_dec;
	}

      CTCcalculation["pf_ann"] = 0.12 * CTCcalculation["pfBase_an"];
      CTCcalculation["pf_mon"] = CTCcalculation["pf_ann"] / 12;
      CTCcalculation["gratuity_ann"] = Math.round(
        0.0556 * CTCcalculation["pfBase_an"]
      );
      CTCcalculation["gratuity_mon"] = CTCcalculation["gratuity_ann"] / 12;

      CTCcalculation["retirals_ann"] =
        (retirals[level] * CTCcalculation["pfBase_an"]) / 100;
      CTCcalculation["retirals_mon"] = CTCcalculation["retirals_ann"] / 12;

      CTCcalculation["superannuation_ann"] = Math.abs(
        Math.round(
          CTCcalculation["retirals_ann"] -
            CTCcalculation["pf_ann"] -
            CTCcalculation["gratuity_ann"]
        )
      );
      CTCcalculation["superannuation_mon"] =
        CTCcalculation["superannuation_ann"] / 12;

      CTCcalculation["totalFixed_ann"] =
        CTCcalculation["pfBase_an"] + CTCcalculation["retirals_ann"];
      CTCcalculation["totalFixed_mon"] = CTCcalculation["totalFixed_ann"] / 12;
      CTCcalculation["bonusExgratia_an"] = bonusExgratia[level];
	
      CTCcalculation["bonusExgratia_mon"] =
        CTCcalculation["bonusExgratia_an"] / 12;


      CTCcalculation["performancePay_an"] =
        Math.round((performanceP[level] * inputCTC_an) / 100) * 100;
      CTCcalculation["performancePay_mon"] =
        CTCcalculation["performancePay_an"] / 12;
      CTCcalculation["flexiPay_an"] =
        inputCTC_an -
        CTCcalculation["pfBase_an"] -
        CTCcalculation["retirals_ann"] -
        CTCcalculation["performancePay_an"] -
        CTCcalculation["bonusExgratia_an"];
      CTCcalculation["flexiPay_mon"] = CTCcalculation["flexiPay_an"] / 12;
      CTCcalculation["totalGuaranteed_an"] =
        CTCcalculation["pfBase_an"] +
        CTCcalculation["retirals_ann"] +
        CTCcalculation["flexiPay_an"] +
        CTCcalculation["bonusExgratia_an"];
      CTCcalculation["totalGuaranteed_mon"] =
        CTCcalculation["totalGuaranteed_an"] / 12;
      CTCcalculation["ctc_an"] =
        CTCcalculation["pfBase_an"] +
        CTCcalculation["retirals_ann"] +
        CTCcalculation["flexiPay_an"] +
        CTCcalculation["bonusExgratia_an"] +
        CTCcalculation["performancePay_an"];
      CTCcalculation["ctc_mon"] = CTCcalculation["ctc_an"] / 12;
      CTCcalculation["grossPay_mon"] =
        CTCcalculation["pfBase_mon"] +
        CTCcalculation["superannuation_mon"] +
        CTCcalculation["flexiPay_mon"] +
        CTCcalculation["bonusExgratia_mon"];

      CTCcalculation["grossPay_an"] = CTCcalculation["grossPay_mon"] * 12;
      
      CTCcalculation["calculateForGrade"] = selectedGrade;
      CTCcalculation["sectorBusinessXMatrix"] = business[level];
      CTCcalculation["individualScore"] = individual[level];
      CTCcalculation["graduityPercent"] = 5.56;
      CTCcalculation["level5PP"] =
        Math.round((CTCcalculation["performancePay_an"] * 170) / 100 / 100) *
        100;
      CTCcalculation["level2PP"] = Math.round(
        CTCcalculation["performancePay_an"] / 65
      );
      CTCcalculation["level3PP"] = CTCcalculation["performancePay_an"];
      CTCcalculation["level4PP"] =
        Math.round((CTCcalculation["performancePay_an"] * 135) / 100 / 100) *
        100;
      CTCcalculation["calculateForDomain"] = selecteddomain;
    } else if (company == "1024") {
      var fixedPer = {
        exl2: 0,
        exl3: 0,
        dhl3: 0,
        dhl4: 0,
        dhl5: 0,
        ml5: 0,
        ml6: 0,
        ml7: 0,
        ol7: 0,
        ol8: 0,
        ol9: 0,
        ol10: 0,
      };

      var fixed = fixedPer[level];

      var pfbase = {
        exl2: Math.round((15 * inputCTC_an) / 100),
        exl3: Math.round((15 * inputCTC_an) / 100),
        dhl3: Math.round((20 * inputCTC_an) / 100),
        dhl4: Math.round((20 * inputCTC_an) / 100),
        dhl5: Math.round((25 * inputCTC_an) / 100),
        ml5: Math.round((25 * inputCTC_an) / 100),
        ml6: Math.round((30 * inputCTC_an) / 100),
        ml7: Math.round((30 * inputCTC_an) / 100),
        ol7: Math.round((35 * inputCTC_an) / 100),
        ol8: Math.round((40 * inputCTC_an) / 100),
        ol9: Math.round((40 * inputCTC_an) / 100),
        ol10: Math.round((40 * inputCTC_an) / 100),
      };

      var bonusExgratia = {
        exl2: 0,

        exl3: 0,
        dhl3: 0,
        dhl4: 0,
        dhl5: 0,
        ml5: 0,
        ml6: 0,
        ml7: 0,
        ol7: 36000,
        ol8: 36000,
        ol9: 36000,
        ol10: 36000,
      };

      var performanceP = {
        exl2: 22 / 100,
        exl3: 20 / 100,
        dhl3: 20 / 100,
        dhl4: 18 / 100,
        dhl5: 15 / 100,
        ml5: 15 / 100,
        ml6: 12 / 100,
        ml7: 10 / 100,
        ol7: 10 / 100,
        ol8: 8 / 100,
        ol9: 7 / 100,
        ol10: 6 / 100,
      };

      /*
					var retirals = {

						'exl2': 32.56,
						'exl3': 32.56,
						'dhl3': 32.56,
						'dhl4': 32.56,
						'dhl5': 32.56,
						'ml5' : 32.56,
						'ml6' : 32.56,
						'ml7' : 32.56,
						'ol7' : 17.56,
						'ol8' : 17.56,
						'ol9' : 17.56,
						'ol10': 17.56
					}

					*/

      /*

					var basic = {

						'exl2': Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,						
						'exl3': Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'dhl3': Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'dhl4': Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'dhl5': Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'ml5' : Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'ml6' : Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'ml7' : Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'ol7' : 16800,
						'ol8' : 15600,
						'ol9' : 14400,
						'ol10': 13200
					}

					*/

      var superann = {
        exl2: 15 / 100,

        exl3: 15 / 100,
        dhl3: 15 / 100,
        dhl4: 15 / 100,
        dhl5: 15 / 100,
        ml5: 0,
        ml6: 0,
        ml7: 0,
        ol7: 0,
        ol8: 0,
        ol9: 0,
        ol10: 0,
      };

      var business = {
        exl2: 50,
        exl3: 50,
        dhl3: 40,
        dhl4: 40,
        dhl5: 40,
        ml5: 20,
        ml6: 20,
        ml7: 20,
        ol7: 20,
        ol8: 20,
        ol9: 20,
        ol10: 20,
      };

      var individual = {
        exl2: 50,
        exl3: 50,
        dhl3: 60,
        dhl4: 60,
        dhl5: 60,
        ml5: 80,
        ml6: 80,
        ml7: 80,
        ol7: 80,
        ol8: 80,
        ol9: 80,
        ol10: 80,
      };

      ASFDGRID_MIN = {
        exl2: 9500000,
        exl3: 7400000,
        dhl3: 5300000,
        dhl4: 4200000,
        dhl5: 3200000,
        ml5: 2300000,
        ml6: 1800000,
        ml7: 1300000,
        ol7: 1000000,
        ol8: 800000,
        ol9: 500000,
        ol10: 350000,
      };

      ASFDGRID_MAX = {
        exl2: 12500000,
        exl3: 9500000,
        dhl3: 7100000,
        dhl4: 5700000,
        dhl5: 4200000,
        ml5: 3200000,
        ml6: 2400000,
        ml7: 1900000,
        ol7: 1500000,
        ol8: 1100000,
        ol9: 700000,
        ol10: 500000,
      };

      TH_MIN = {
        exl2: 10000000,
        exl3: 7900000,
        dhl3: 5500000,
        dhl4: 4400000,
        dhl5: 3400000,
        ml5: 2400000,
        ml6: 1900000,
        ml7: 1500000,
        ol7: 1050000,
      };

      TH_MAX = {
        exl2: 15000000,
        exl3: 10900000,
        dhl3: 8200000,
        dhl4: 6400000,
        dhl5: 5000000,
        ml5: 4000000,
        ml6: 3000000,
        ml7: 2500000,
        ol7: 1800000,
      };

      PT_MIN = {
        exl2: 10000000,
        exl3: 7900000,
        dhl3: 5500000,
        dhl4: 4400000,
        dhl5: 3400000,
        ml5: 2400000,
        ml6: 1900000,
        ml7: 1500000,
        ol7: 1050000,
      };

      PT_MAX = {
        exl2: 15000000,
        exl3: 10900000,
        dhl3: 8200000,
        dhl4: 6400000,
        dhl5: 5000000,
        ml5: 4000000,
        ml6: 3000000,
        ml7: 2500000,
        ol7: 1800000,
      };

      if (
        inputTHP == "Technical" &&
        (level == "ol8" || level == "ol9" || level == "ol10")
      ) {
        alert("Technincal Skills is not Applicable for Band-O ");
      }

      var Normal_min = ASFDGRID_MIN[level];
      var Normal_max = ASFDGRID_MAX[level];
      var THP_min =
        inputTHP == "Normal"
          ? Normal_min
          : inputTHP == "Technical" || inputTHP == "HotSkills"
          ? TH_MIN[level]
          : PT_MIN[level];
      var THP_max =
        inputTHP == "Normal"
          ? Normal_max
          : inputTHP == "Technical" || inputTHP == "HotSkills"
          ? TH_MAX[level]
          : PT_MAX[level];
      if (inputCTC_an < Normal_min || inputCTC_an > THP_max) {
        CTCcalculation["gridmatrix"] =
          "Additional Approver Required-Outside Hiring Grid";
      } else {
        CTCcalculation["gridmatrix"] = "Within Hiring Grid";
      }

      CTCcalculation["pfBase_an"] = pfbase[level];
      CTCcalculation["pfBase_mon"] = CTCcalculation["pfBase_an"] / 12;
      CTCcalculation["BasicSal_an"] = CTCcalculation["pfBase_an"];
      CTCcalculation["BasicSal_mon"] = CTCcalculation["BasicSal_an"] / 12;
      CTCcalculation["adhocPay_an"] =
        Math.round(
          (CTCcalculation["pfBase_an"] - CTCcalculation["BasicSal_an"]) / 12
        ) * 12;
      if(CTCcalculation["adhocPay_an"] == 0)
	{
		CTCcalculation["adhocPay_an"] = val_dec;
	}

      CTCcalculation["adhocPay_mon"] = CTCcalculation["adhocPay_an"] / 12;
      if (CTCcalculation["adhocPay_mon"] == 0)
      {
	 CTCcalculation["adhocPay_mon"] = val_dec;
	}

      CTCcalculation["pf_ann"] = 0.12 * CTCcalculation["pfBase_an"];
      CTCcalculation["pf_mon"] = CTCcalculation["pf_ann"] / 12;
      CTCcalculation["gratuity_ann"] = Math.round(
        0.0481 * CTCcalculation["pfBase_an"]
      );
      CTCcalculation["gratuity_mon"] = CTCcalculation["gratuity_ann"] / 12;

      CTCcalculation["superannuation_ann"] = Math.abs(
        Math.abs(Math.round(superann[level] * CTCcalculation["pfBase_an"]))
      );
      CTCcalculation["superannuation_mon"] =
        CTCcalculation["superannuation_ann"] / 12;

      CTCcalculation["retirals_ann"] =
        CTCcalculation["pf_ann"] +
        CTCcalculation["gratuity_ann"] +
        CTCcalculation["superannuation_ann"];
      CTCcalculation["retirals_mon"] = CTCcalculation["retirals_ann"] / 12;

      CTCcalculation["totalFixed_ann"] =
        CTCcalculation["pfBase_an"] + CTCcalculation["retirals_ann"];
      CTCcalculation["totalFixed_mon"] = CTCcalculation["totalFixed_ann"] / 12;
      CTCcalculation["bonusExgratia_an"] = bonusExgratia[level];
	
      CTCcalculation["bonusExgratia_mon"] =
        CTCcalculation["bonusExgratia_an"] / 12;



      CTCcalculation["performancePay_an"] =
        Math.round((performanceP[level] * inputCTC_an) / 100) * 100;
      CTCcalculation["performancePay_mon"] =
        CTCcalculation["performancePay_an"] / 12;
      CTCcalculation["flexiPay_an"] =
        inputCTC_an -
        CTCcalculation["pfBase_an"] -
        CTCcalculation["retirals_ann"] -
        CTCcalculation["performancePay_an"] -
        CTCcalculation["bonusExgratia_an"];
      CTCcalculation["flexiPay_mon"] = CTCcalculation["flexiPay_an"] / 12;
      CTCcalculation["totalGuaranteed_an"] =
        CTCcalculation["pfBase_an"] +
        CTCcalculation["retirals_ann"] +
        CTCcalculation["flexiPay_an"] +
        CTCcalculation["bonusExgratia_an"];
      CTCcalculation["totalGuaranteed_mon"] =
        CTCcalculation["totalGuaranteed_an"] / 12;
      CTCcalculation["ctc_an"] =
        CTCcalculation["pfBase_an"] +
        CTCcalculation["retirals_ann"] +
        CTCcalculation["flexiPay_an"] +
        CTCcalculation["bonusExgratia_an"] +
        CTCcalculation["performancePay_an"];
      CTCcalculation["ctc_mon"] = CTCcalculation["ctc_an"] / 12;
      CTCcalculation["grossPay_mon"] =
        CTCcalculation["pfBase_mon"] +
        CTCcalculation["superannuation_mon"] +
        CTCcalculation["flexiPay_mon"] +
        CTCcalculation["bonusExgratia_mon"];

      CTCcalculation["grossPay_an"] = CTCcalculation["grossPay_mon"] * 12;
      CTCcalculation["calculateForGrade"] = selectedGrade;
      CTCcalculation["sectorBusinessXMatrix"] = business[level];
      CTCcalculation["individualScore"] = individual[level];
      CTCcalculation["graduityPercent"] = 4.81;
      CTCcalculation["level5PP"] =
        Math.round((CTCcalculation["performancePay_an"] * 170) / 100 / 100) *
        100;
      CTCcalculation["calculateForDomain"] = selecteddomain;
    } else if (
      company == "1049" ||
      company == "1070" ||
      company == "1054" ||
      company == "1055"
    ) {
      var fixedPer = {
        DL1: (25 / 100) * inputCTC_an,
        DL2: (25 / 100) * inputCTC_an,
        DL3: (28 / 100) * inputCTC_an,
        TL1: (30 / 100) * inputCTC_an,
        TL2: (35 / 100) * inputCTC_an,
        TL3: (40 / 100) * inputCTC_an,
        TL4: (48 / 100) * inputCTC_an,
        TM1: (50 / 100) * inputCTC_an,
        TM2: (50 / 100) * inputCTC_an,
        TM3: (50 / 100) * inputCTC_an,
        TM4: (50 / 100) * inputCTC_an,
      };

      var fixed = fixedPer[level];

      var pfbase = {
        DL1: Math.round(fixed / (1 + 17.56 / 100) / 12) * 12,
        DL2: Math.round(fixed / (1 + 17.56 / 100) / 12) * 12,
        DL3: Math.round(fixed / (1 + 17.56 / 100) / 12) * 12,
        TL1: Math.round(fixed / (1 + 17.56 / 100) / 12) * 12,
        TL2: Math.round(fixed / (1 + 17.56 / 100) / 12) * 12,
        TL3: Math.round(fixed / (1 + 17.56 / 100) / 12) * 12,
        TL4: Math.round(fixed / (1 + 17.56 / 100) / 12) * 12,
        TM1: Math.round(fixed / (1 + 17.56 / 100) / 12) * 12,
        TM2: Math.round(fixed / (1 + 17.56 / 100) / 12) * 12,
        TM3: Math.round(fixed / (1 + 17.56 / 100) / 12) * 12,
        TM4: Math.round(fixed / (1 + 17.56 / 100) / 12) * 12,
      };

      var bonusExgratia = {
        DL1: 0,
        DL2: 0,
        DL3: 0,
        TL1: 0,
        TL2: 0,
        TL3: 0,
        TL4: 0,
        TM1: 36000,
        TM2: 36000,
        TM3: 36000,
        TM4: 36000,
      };

      var performanceP = {
        DL1: 22 / 100,
        DL2: 20 / 100,
        DL3: 20 / 100,
        TL1: 18 / 100,
        TL2: 15 / 100,
        TL3: 15 / 100,
        TL4: 12 / 100,
        TM1: 10 / 100,
        TM2: 8 / 100,
        TM3: 7 / 100,
        TM4: 6 / 100,
      };

      var retirals = {
        DL1: 17.56,
        DL2: 17.56,
        DL3: 17.56,
        TL1: 17.56,
        TL2: 17.56,
        TL3: 17.56,
        TL4: 17.56,
        TM1: 17.56,
        TM2: 17.56,
        TM3: 17.56,
        TM4: 17.56,
      };

      /*

					var basic = {

						'exl2': Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,						
						'exl3': Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'dhl3': Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'dhl4': Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'dhl5': Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'ml5' : Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'ml6' : Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'ml7' : Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'ol7' : 16800,
						'ol8' : 15600,
						'ol9' : 14400,
						'ol10': 13200
					}

					*/

      var business = {
        DL1: 50,
        DL2: 50,
        DL3: 40,
        TL1: 40,
        TL2: 40,
        TL3: 20,
        TL4: 20,
        TM1: 20,
        TM2: 20,
        TM3: 20,
        TM4: 20,
      };

      var individual = {
        DL1: 50,
        DL2: 50,
        DL3: 60,
        TL1: 60,
        TL2: 60,
        TL3: 80,
        TL4: 80,
        TM1: 80,
        TM2: 80,
        TM3: 80,
        TM4: 80,
      };

      ASFDGRID_MIN = {
        DL1: 7488000,
        DL2: 5568000,
        DL3: 3840000,
        TL1: 3072000,
        TL2: 2304000,
        TL3: 1728000,
        TL4: 960000,
        TM1: 768000,
        TM2: 552000,
        TM3: 400000,
        TM4: 316800,
      };

      ASFDGRID_MAX = {
        DL1: 10848000,
        DL2: 7872000,
        DL3: 5760000,
        TL1: 4320000,
        TL2: 3360000,
        TL3: 2592000,
        TL4: 2016000,
        TM1: 1152000,
        TM2: 864000,
        TM3: 571000,
        TM4: 432000,
      };

      TH_MIN = {
        DL1: 8190000,
        DL2: 6090000,
        DL3: 4200000,
        TL1: 3360000,
        TL2: 2520000,
        TL3: 1890000,
        TL4: 1050000,
      };

      TH_MAX = {
        DL1: 12995000,
        DL2: 9430000,
        DL3: 6900000,
        TL1: 5175000,
        TL2: 4025000,
        TL3: 3105000,
        TL4: 2415000,
      };

      PT_MIN = {
        DL1: 8580000,
        DL2: 6380000,
        DL3: 4400000,
        TL1: 3520000,
        TL2: 2640000,
        TL3: 1980000,
        TL4: 1100000,
      };

      PT_MAX = {
        DL1: 13560000,
        DL2: 9840000,
        DL3: 7200000,
        TL1: 5400000,
        TL2: 4200000,
        TL3: 3240000,
        TL4: 2520000,
      };

      var Normal_min = ASFDGRID_MIN[level];
      var Normal_max = ASFDGRID_MAX[level];
      var THP_min =
        inputTHP == "Normal"
          ? Normal_min
          : inputTHP == "Technical" || inputTHP == "HotSkills"
          ? TH_MIN[level]
          : PT_MIN[level];
      var THP_max =
        inputTHP == "Normal"
          ? Normal_max
          : inputTHP == "Technical" || inputTHP == "HotSkills"
          ? TH_MAX[level]
          : PT_MAX[level];
      if (inputCTC_an < Normal_min || inputCTC_an > THP_max) {
        CTCcalculation["gridmatrix"] =
          "Additional Approver Required-Outside Hiring Grid";
      } else {
        CTCcalculation["gridmatrix"] = "Within Hiring Grid";
      }

      CTCcalculation["pfBase_an"] = pfbase[level];
      CTCcalculation["pfBase_mon"] = CTCcalculation["pfBase_an"] / 12;
      CTCcalculation["BasicSal_an"] = CTCcalculation["pfBase_an"];
      CTCcalculation["BasicSal_mon"] = CTCcalculation["BasicSal_an"] / 12;
      CTCcalculation["adhocPay_an"] =
        Math.round(
          (CTCcalculation["pfBase_an"] - CTCcalculation["BasicSal_an"]) / 12
        ) * 12;
	if (CTCcalculation["adhocPay_an"] == 0)
      {
	 CTCcalculation["adhocPay_an"] = val_dec;
	}


      

      CTCcalculation["adhocPay_mon"] = CTCcalculation["adhocPay_an"] / 12;

      if (CTCcalculation["adhocPay_mon"] == 0)
      {
	 CTCcalculation["adhocPay_mon"] = val_dec;
	}

      CTCcalculation["pf_ann"] = 0.12 * CTCcalculation["pfBase_an"];
      CTCcalculation["pf_mon"] = CTCcalculation["pf_ann"] / 12;
      CTCcalculation["gratuity_ann"] = Math.round(
        0.0556 * CTCcalculation["pfBase_an"]
      );
      CTCcalculation["gratuity_mon"] = CTCcalculation["gratuity_ann"] / 12;

      CTCcalculation["retirals_ann"] = Math.round(
        (retirals[level] * CTCcalculation["pfBase_an"]) / 100
      );
      CTCcalculation["retirals_mon"] = CTCcalculation["retirals_ann"] / 12;

      CTCcalculation["superannuation_ann"] = 0;
      CTCcalculation["superannuation_mon"] =
        CTCcalculation["superannuation_ann"] / 12;

      CTCcalculation["totalFixed_ann"] =
        CTCcalculation["pfBase_an"] + CTCcalculation["retirals_ann"];
      CTCcalculation["totalFixed_mon"] = CTCcalculation["totalFixed_ann"] / 12;
      CTCcalculation["bonusExgratia_an"] = bonusExgratia[level];
	    CTCcalculation["bonusExgratia_mon"] =
        CTCcalculation["bonusExgratia_an"] / 12;
    
      CTCcalculation["performancePay_an"] =
        Math.round((performanceP[level] * inputCTC_an) / 100) * 100;
      CTCcalculation["performancePay_mon"] =
        CTCcalculation["performancePay_an"] / 12;
      CTCcalculation["flexiPay_an"] =
        inputCTC_an -
        CTCcalculation["pfBase_an"] -
        CTCcalculation["retirals_ann"] -
        CTCcalculation["performancePay_an"] -
        CTCcalculation["bonusExgratia_an"];
      CTCcalculation["flexiPay_mon"] = CTCcalculation["flexiPay_an"] / 12;
      CTCcalculation["totalGuaranteed_an"] =
        CTCcalculation["pfBase_an"] +
        CTCcalculation["retirals_ann"] +
        CTCcalculation["flexiPay_an"] +
        CTCcalculation["bonusExgratia_an"];
      CTCcalculation["totalGuaranteed_mon"] =
        CTCcalculation["totalGuaranteed_an"] / 12;
      CTCcalculation["ctc_an"] =
        CTCcalculation["pfBase_an"] +
        CTCcalculation["retirals_ann"] +
        CTCcalculation["flexiPay_an"] +
        CTCcalculation["bonusExgratia_an"] +
        CTCcalculation["performancePay_an"];
      CTCcalculation["ctc_mon"] = CTCcalculation["ctc_an"] / 12;
      CTCcalculation["grossPay_mon"] =
        CTCcalculation["pfBase_mon"] +
        CTCcalculation["superannuation_mon"] +
        CTCcalculation["flexiPay_mon"] +
        CTCcalculation["bonusExgratia_mon"];

      CTCcalculation["grossPay_an"] = CTCcalculation["grossPay_mon"] * 12;
      CTCcalculation["calculateForGrade"] = selectedGrade;
      CTCcalculation["sectorBusinessXMatrix"] = business[level];
      CTCcalculation["individualScore"] = individual[level];
      CTCcalculation["graduityPercent"] = 5.56;
      CTCcalculation["level5PP"] =
        Math.round((CTCcalculation["performancePay_an"] * 170) / 100 / 100) *
        100;
      CTCcalculation["calculateForDomain"] = selecteddomain;
    } else if (company == "1058") {
      var fixedPer = {
        Band1: (25 / 100) * inputCTC_an,
        Band2: (28 / 100) * inputCTC_an,
        Band3: (40 / 100) * inputCTC_an,
        Band4: (48 / 100) * inputCTC_an,
        Band5: (50 / 100) * inputCTC_an,
      };

      var fixed = fixedPer[level];

      var pfbase = {
        Band1: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
        Band2: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
        Band3: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
        Band4: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
        Band5: Math.round(fixed / (1 + 16.81 / 100) / 12) * 12,
      };

      var bonusExgratia = {
        Band1: 0,
        Band2: 0,
        Band3: 24000,
        Band4: 24000,
        Band5: 24000,
      };

      var performanceP = {
        Band1: 20 / 100,
        Band2: 18 / 100,
        Band3: 15 / 100,
        Band4: 11 / 100,
        Band5: 8 / 100,
      };

      var retirals = {
        Band1: 16.81,
        Band2: 16.81,
        Band3: 16.81,
        Band4: 16.81,
        Band5: 16.81,
      };

      /*

					var basic = {

						'exl2': Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,						
						'exl3': Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'dhl3': Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'dhl4': Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'dhl5': Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'ml5' : Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'ml6' : Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'ml7' : Math.round( (fixed / (1+((32.56)/100)))/12 ) * 12,
						'ol7' : 16800,
						'ol8' : 15600,
						'ol9' : 14400,
						'ol10': 13200
					}

					*/

      ASFDGRID_MIN = {
        Band1: 3000000,
        Band2: 2000000,
        Band3: 1200000,
        Band4: 600000,
        Band5: 300000,
      };

      ASFDGRID_MAX = {
        Band1: 4500000,
        Band2: 3500000,
        Band3: 2500000,
        Band4: 1400000,
        Band5: 700000,
      };

      TH_MIN = {
        Band1: 3000000,
        Band2: 2000000,
        Band3: 1200000,
        Band4: 600000,
        Band5: 300000,
      };

      TH_MAX = {
        Band1: 4500000,
        Band2: 3500000,
        Band3: 2500000,
        Band4: 1400000,
        Band5: 700000,
      };

      PT_MIN = {
        Band1: 3000000,
        Band2: 2000000,
        Band3: 1200000,
        Band4: 600000,
        Band5: 300000,
      };

      PT_MAX = {
        Band1: 4500000,
        Band2: 3500000,
        Band3: 2500000,
        Band4: 1400000,
        Band5: 700000,
      };

      var Normal_min = ASFDGRID_MIN[level];
      var Normal_max = ASFDGRID_MAX[level];
      var THP_min =
        inputTHP == "Normal"
          ? Normal_min
          : inputTHP == "Technical" || inputTHP == "HotSkills"
          ? TH_MIN[level]
          : PT_MIN[level];
      var THP_max =
        inputTHP == "Normal"
          ? Normal_max
          : inputTHP == "Technical" || inputTHP == "HotSkills"
          ? TH_MAX[level]
          : PT_MAX[level];
      if (inputCTC_an < Normal_min || inputCTC_an > THP_max) {
        CTCcalculation["gridmatrix"] =
          "Additional Approver Required-Outside Hiring Grid";
      } else {
        CTCcalculation["gridmatrix"] = "Within Hiring Grid";
      }

      CTCcalculation["pfBase_an"] = pfbase[level];
      CTCcalculation["pfBase_mon"] = CTCcalculation["pfBase_an"] / 12;
      CTCcalculation["BasicSal_an"] = CTCcalculation["pfBase_an"];
      CTCcalculation["BasicSal_mon"] = CTCcalculation["BasicSal_an"] / 12;
      CTCcalculation["adhocPay_an"] =
        Math.round(
          (CTCcalculation["pfBase_an"] - CTCcalculation["BasicSal_an"]) / 12
        ) * 12;
	if (CTCcalculation["adhocPay_an"] == 0)
      {
	 CTCcalculation["adhocPay_an"] = val_dec;
	}

      CTCcalculation["adhocPay_mon"] = CTCcalculation["adhocPay_an"] / 12;
	if (CTCcalculation["adhocPay_mon"] == 0)
      {
	 CTCcalculation["adhocPay_mon"] = val_dec;
	}

      CTCcalculation["pf_ann"] = 0.12 * CTCcalculation["pfBase_an"];
      CTCcalculation["pf_mon"] = CTCcalculation["pf_ann"] / 12;
      CTCcalculation["gratuity_ann"] = Math.round(
        0.0481 * CTCcalculation["pfBase_an"]
      );
      CTCcalculation["gratuity_mon"] = CTCcalculation["gratuity_ann"] / 12;

      CTCcalculation["retirals_ann"] = Math.round(
        (retirals[level] * CTCcalculation["pfBase_an"]) / 100
      );
      CTCcalculation["retirals_mon"] = CTCcalculation["retirals_ann"] / 12;

      CTCcalculation["superannuation_ann"] = 0;
      CTCcalculation["superannuation_mon"] =
        CTCcalculation["superannuation_ann"] / 12;

      CTCcalculation["totalFixed_ann"] =
        CTCcalculation["pfBase_an"] + CTCcalculation["retirals_ann"];
      CTCcalculation["totalFixed_mon"] = CTCcalculation["totalFixed_ann"] / 12;
      CTCcalculation["bonusExgratia_an"] = bonusExgratia[level];
	
      CTCcalculation["bonusExgratia_mon"] =
        CTCcalculation["bonusExgratia_an"] / 12;
      

      CTCcalculation["performancePay_an"] =
        Math.round((performanceP[level] * inputCTC_an) / 100) * 100;
      CTCcalculation["performancePay_mon"] =
        CTCcalculation["performancePay_an"] / 12;
      CTCcalculation["flexiPay_an"] =
        inputCTC_an -
        CTCcalculation["pfBase_an"] -
        CTCcalculation["retirals_ann"] -
        CTCcalculation["performancePay_an"] -
        CTCcalculation["bonusExgratia_an"];
      CTCcalculation["flexiPay_mon"] = CTCcalculation["flexiPay_an"] / 12;
      CTCcalculation["totalGuaranteed_an"] =
        CTCcalculation["pfBase_an"] +
        CTCcalculation["retirals_ann"] +
        CTCcalculation["flexiPay_an"] +
        CTCcalculation["bonusExgratia_an"];
      CTCcalculation["totalGuaranteed_mon"] =
        CTCcalculation["totalGuaranteed_an"] / 12;
      CTCcalculation["ctc_an"] =
        CTCcalculation["pfBase_an"] +
        CTCcalculation["retirals_ann"] +
        CTCcalculation["flexiPay_an"] +
        CTCcalculation["bonusExgratia_an"] +
        CTCcalculation["performancePay_an"];
      CTCcalculation["ctc_mon"] = CTCcalculation["ctc_an"] / 12;
      CTCcalculation["grossPay_mon"] =
        CTCcalculation["pfBase_mon"] +
        CTCcalculation["superannuation_mon"] +
        CTCcalculation["flexiPay_mon"] +
        CTCcalculation["bonusExgratia_mon"];

      CTCcalculation["grossPay_an"] = CTCcalculation["grossPay_mon"] * 12;
      CTCcalculation["calculateForGrade"] = selectedGrade;
      CTCcalculation["sectorBusinessXMatrix"] = 0;
      CTCcalculation["individualScore"] = 0;
      CTCcalculation["graduityPercent"] = 4.81;
      CTCcalculation["level5PP"] =
        Math.round((CTCcalculation["performancePay_an"] * 170) / 100 / 100) *
        100;
      CTCcalculation["calculateForDomain"] = selecteddomain;
    } else if (company == "1065") {
      var fixedPer = {
        jr_Officer: (20 / 100) * inputCTC_an,
        Officer: (20 / 100) * inputCTC_an,
        sr_Officer: (20 / 100) * inputCTC_an,
        executive: (20 / 100) * inputCTC_an,
        sr_executive: (20 / 100) * inputCTC_an,
        manager: (30 / 100) * inputCTC_an,
        sr_Manager: (30 / 100) * inputCTC_an,
        dgm: (30 / 100) * inputCTC_an,
        gm: (30 / 100) * inputCTC_an,
        asst_VP: (30 / 100) * inputCTC_an,
        VP: (30 / 100) * inputCTC_an,
        sr_VP: (30 / 100) * inputCTC_an,
      };

      var bonusExgratia = {
        jr_Officer: 36000,
        Officer: 36000,
        sr_Officer: 36000,
        executive: 36000,
        sr_executive: 36000,
        manager: 0,
        sr_Manager: 0,
        dgm: 0,
        gm: 0,
        asst_VP: 0,
        VP: 0,
        sr_VP: 0,
      };

      var performanceP = {
        Band1: 20 / 100,
        Band2: 18 / 100,
        Band3: 15 / 100,
        Band4: 11 / 100,
        Band5: 8 / 100,
      };

      var lta = {
        jr_Officer: 0,
        Officer: 0,
        sr_Officer: 0,
        executive: 0,
        sr_executive: 0,
        manager: 40000,
        sr_Manager: 40000,
        dgm: 50000,
        gm: 50000,
        asst_VP: 50000,
        VP: 75000,
        sr_VP: 75000,
      };

      var retirals = {
        jr_Officer: 16.81 / 100,
        Officer: 16.81 / 100,
        sr_Officer: 16.81 / 100,
        executive: 16.81 / 100,
        sr_executive: 16.81 / 100,
        manager: 16.81 / 100,
        sr_Manager: 16.81 / 100,
        dgm: 16.81 / 100,
        gm: 16.81 / 100,
        asst_VP: 16.81 / 100,
        VP: 16.81 / 100,
        sr_VP: 16.81 / 100,
      };

      var esic = {
        jr_Officer:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        Officer:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        sr_Officer:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        executive:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        sr_executive:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        manager:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        sr_Manager:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        dgm:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        gm:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        asst_VP:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        VP:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        sr_VP:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
      };

      ASFDGRID_MIN = {
        jr_Officer: 350000,
        Officer: 350000,
        sr_Officer: 350000,
        executive: 350000,
        sr_executive: 350000,
        manager: 350000,
        sr_Manager: 350000,
        dgm: 390000,
        gm: 500000,
        asst_VP: 600000,
        VP: 660000,
        sr_VP: 960000,
      };

      ASFDGRID_MAX = {
        jr_Officer: 500000,
        Officer: 500000,
        sr_Officer: 500000,
        executive: 500000,
        sr_executive: 500000,
        manager: 500000,
        sr_Manager: 500000,
        dgm: 550000,
        gm: 660000,
        asst_VP: 840000,
        VP: 980000,
        sr_VP: 1400000,
      };

      TH_MIN = {
        jr_Officer: 350000,
        Officer: 350000,
        sr_Officer: 350000,
        executive: 350000,
        sr_executive: 350000,
        manager: 350000,
        sr_Manager: 350000,
        dgm: 390000,
        gm: 500000,
        asst_VP: 600000,
        VP: 660000,
        sr_VP: 960000,
      };

      TH_MAX = {
        jr_Officer: 500000,
        Officer: 500000,
        sr_Officer: 500000,
        executive: 500000,
        sr_executive: 500000,
        manager: 500000,
        sr_Manager: 500000,
        dgm: 550000,
        gm: 660000,
        asst_VP: 840000,
        VP: 980000,
        sr_VP: 1400000,
      };

      PT_MIN = {
        jr_Officer: 350000,
        Officer: 350000,
        sr_Officer: 350000,
        executive: 350000,
        sr_executive: 350000,
        manager: 350000,
        sr_Manager: 350000,
        dgm: 390000,
        gm: 500000,
        asst_VP: 600000,
        VP: 660000,
        sr_VP: 960000,
      };

      PT_MAX = {
        jr_Officer: 500000,
        Officer: 500000,
        sr_Officer: 500000,
        executive: 500000,
        sr_executive: 500000,
        manager: 500000,
        sr_Manager: 500000,
        dgm: 550000,
        gm: 660000,
        asst_VP: 840000,
        VP: 980000,
        sr_VP: 1400000,
      };

      var Normal_min = ASFDGRID_MIN[level];
      var Normal_max = ASFDGRID_MAX[level];
      var THP_min =
        inputTHP == "Normal"
          ? Normal_min
          : inputTHP == "Technical" || inputTHP == "HotSkills"
          ? TH_MIN[level]
          : PT_MIN[level];
      var THP_max =
        inputTHP == "Normal"
          ? Normal_max
          : inputTHP == "Technical" || inputTHP == "HotSkills"
          ? TH_MAX[level]
          : PT_MAX[level];
      if (inputCTC_an < Normal_min || inputCTC_an > THP_max) {
        CTCcalculation["gridmatrix"] =
          "Additional Approver Required-Outside Hiring Grid";
      } else {
        CTCcalculation["gridmatrix"] = "Within Hiring Grid";
      }

      CTCcalculation["pfBase_an"] = fixedPer[level];
      CTCcalculation["pfBase_mon"] = CTCcalculation["pfBase_an"] / 12;
      CTCcalculation["BasicSal_an"] = CTCcalculation["pfBase_an"];
      CTCcalculation["BasicSal_mon"] = CTCcalculation["BasicSal_an"] / 12;
      /*CTCcalculation["adhocPay_an"] = 0;*/

      CTCcalculation["adhocPay_mon"] = CTCcalculation["adhocPay_an"] / 12;
      if (CTCcalculation["adhocPay_mon"] == 0)
      {
	 CTCcalculation["adhocPay_mon"] = val_dec;
	}

      CTCcalculation["pf_ann"] = 0.12 * CTCcalculation["pfBase_an"];
      CTCcalculation["pf_mon"] = CTCcalculation["pf_ann"] / 12;
      CTCcalculation["gratuity_ann"] = Math.round(
        0.0481 * CTCcalculation["pfBase_an"]
      );
      CTCcalculation["gratuity_mon"] = CTCcalculation["gratuity_ann"] / 12;

      CTCcalculation["retirals_ann"] =
        CTCcalculation["pf_ann"] + CTCcalculation["gratuity_ann"];
      CTCcalculation["retirals_mon"] = CTCcalculation["retirals_ann"] / 12;

      CTCcalculation["superannuation_ann"] = 0;
      CTCcalculation["superannuation_mon"] =
        CTCcalculation["superannuation_ann"] / 12;

      CTCcalculation["totalFixed_ann"] =
        CTCcalculation["pfBase_an"] + CTCcalculation["retirals_ann"];
      CTCcalculation["totalFixed_mon"] = CTCcalculation["totalFixed_ann"] / 12;

      CTCcalculation["hra_ann"] = (CTCcalculation["pfBase_an"] * 50) / 100;
      CTCcalculation["hra_mon"] = CTCcalculation["hra_ann"] / 12;
      CTCcalculation["conveyance_ann"] = 19200;
      CTCcalculation["conveyance_mon"] = CTCcalculation["conveyance_ann"] / 12;
      CTCcalculation["medical_ann"] = 15000;
      CTCcalculation["medical_mon"] = CTCcalculation["medical_ann"] / 12;
      CTCcalculation["education_ann"] = 2400;
      CTCcalculation["education_mon"] = CTCcalculation["education_ann"] / 12;
      CTCcalculation["lta_ann"] = lta[level];
      CTCcalculation["lta_mon"] = CTCcalculation["lta_ann"] / 12;
      CTCcalculation["bonusExgratia_an"] = bonusExgratia[level];

      CTCcalculation["bonusExgratia_mon"] =
        CTCcalculation["bonusExgratia_an"] / 12;
     
	
      CTCcalculation["performancePay_an"] = 0;
      CTCcalculation["performancePay_mon"] =
        CTCcalculation["performancePay_an"] / 12;
      CTCcalculation["flexiPay_an"] =
        inputCTC_an -
        CTCcalculation["pfBase_an"] -
        retirals[level] * CTCcalculation["pfBase_an"] -
        CTCcalculation["performancePay_an"] -
        CTCcalculation["bonusExgratia_an"] -
        esic[level];

      CTCcalculation["flexiPay_mon"] = CTCcalculation["flexiPay_an"] / 12;
      CTCcalculation["field_ann"] =
        CTCcalculation["flexiPay_an"] -
        CTCcalculation["hra_ann"] -
        CTCcalculation["conveyance_ann"] -
        CTCcalculation["medical_ann"] -
        CTCcalculation["education_ann"] -
        CTCcalculation["lta_ann"];
      CTCcalculation["field_mon"] = CTCcalculation["field_ann"] / 12;

      CTCcalculation["totalAllow_ann"] =
        CTCcalculation["hra_ann"] +
        CTCcalculation["conveyance_ann"] +
        CTCcalculation["medical_ann"] +
        CTCcalculation["education_ann"] +
        CTCcalculation["lta_ann"] +
        CTCcalculation["field_ann"];
      CTCcalculation["totalAllow_mon"] = CTCcalculation["totalAllow_ann"] / 12;
      CTCcalculation["totalGuaranteed_an"] =
        CTCcalculation["pfBase_an"] +
        CTCcalculation["retirals_ann"] +
        CTCcalculation["flexiPay_an"] +
        CTCcalculation["bonusExgratia_an"];
      CTCcalculation["totalGuaranteed_mon"] =
        CTCcalculation["totalGuaranteed_an"] / 12;
      CTCcalculation["esic_an"] = esic[level];
      CTCcalculation["esic_mon"] = CTCcalculation["esic_an"] / 12;
      CTCcalculation["ctc_an"] =
        CTCcalculation["pfBase_an"] +
        CTCcalculation["retirals_ann"] +
        CTCcalculation["totalAllow_ann"] +
        CTCcalculation["bonusExgratia_an"];
      CTCcalculation["ctc_mon"] = CTCcalculation["ctc_an"] / 12;
      CTCcalculation["grossPay_mon"] =
        CTCcalculation["pfBase_mon"] +
        CTCcalculation["hra_mon"] +
        CTCcalculation["conveyance_mon"] +
        CTCcalculation["bonusExgratia_mon"] +
        CTCcalculation["medical_mon"] +
        CTCcalculation["education_mon"] +
        CTCcalculation["field_mon"];

      CTCcalculation["grossPay_an"] = CTCcalculation["grossPay_mon"] * 12;
      CTCcalculation["calculateForGrade"] = selectedGrade;
      CTCcalculation["sectorBusinessXMatrix"] = 0;
      CTCcalculation["individualScore"] = 0;
      CTCcalculation["graduityPercent"] = 4.81;
      CTCcalculation["level5PP"] = 0;
      CTCcalculation["calculateForDomain"] = selecteddomain;
    } else if (company == "1068") {
      var fixedPer = {
        executive: (30 / 100) * inputCTC_an,
        sr_executive: (30 / 100) * inputCTC_an,
        manager: (30 / 100) * inputCTC_an,
        sr_Manager: (30 / 100) * inputCTC_an,
        dgm: (25 / 100) * inputCTC_an,
        gm: (25 / 100) * inputCTC_an,
        asst_manager: (30 / 100) * inputCTC_an,
        VP: (25 / 100) * inputCTC_an,
        sr_VP: (25 / 100) * inputCTC_an,
      };

      var bonusExgratia = {
        executive: 36000,
        sr_executive: 36000,
        manager: 0,
        sr_Manager: 0,
        dgm: 0,
        gm: 0,
        asst_manager: 36000,
        VP: 0,
        sr_VP: 0,
      };

      var performanceP = {
        executive: (7 / 100) * inputCTC_an,
        sr_executive: (8 / 100) * inputCTC_an,
        manager: (12 / 100) * inputCTC_an,
        sr_Manager: (15 / 100) * inputCTC_an,
        dgm: (18 / 100) * inputCTC_an,
        gm: (20 / 100) * inputCTC_an,
        asst_manager: (10 / 100) * inputCTC_an,
        VP: (22 / 100) * inputCTC_an,
        sr_VP: (22 / 100) * inputCTC_an,
      };

      var lta = {
        executive: 30000,
        sr_executive: 30000,
        manager: 40000,
        sr_Manager: 40000,
        dgm: 50000,
        gm: 50000,
        asst_manager: 30000,
        VP: 75000,
        sr_VP: 75000,
      };

      var CEA = {
        executive: 2400,
        sr_executive: 2400,
        manager: 2400,
        sr_Manager: 2400,
        dgm: 2400,
        gm: 2400,
        asst_manager: 2400,
        VP: 2400,
        sr_VP: 2400,
      };

      var retirals = {
        executive: 16.81 / 100,
        sr_executive: 16.81 / 100,
        manager: 16.81 / 100,
        sr_Manager: 16.81 / 100,
        dgm: 16.81 / 100,
        gm: 16.81 / 100,
        asst_manager: 16.81 / 100,
        VP: 16.81 / 100,
        sr_VP: 16.81 / 100,
      };

      var esic = {
        jr_Officer:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        Officer:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        sr_Officer:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        executive:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        sr_executive:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        manager:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        sr_Manager:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        dgm:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        gm:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        asst_manager:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        VP:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
        sr_VP:
          inputCTC_an - retirals[level] * fixedPer[level] < 252000
            ? ((inputCTC_an - retirals[level] * fixedPer[level]) / 1.0475) *
              0.0475
            : 0,
      };

      var business = {
        jr_Officer: 350000,
        Officer: 350000,
        sr_Officer: 20,
        executive: 20,
        sr_executive: 20,
        asst_manager: 20,
        manager: 20,
        sr_Manager: 20,
        dgm: 40,
        gm: 40,

        VP: 50,
        sr_VP: 50,
      };

      var individual = {
        jr_Officer: 350000,
        Officer: 350000,
        sr_Officer: 350000,
        executive: 80,
        sr_executive: 80,
        asst_manager: 80,
        manager: 80,
        sr_Manager: 80,
        dgm: 60,
        gm: 60,

        VP: 50,
        sr_VP: 50,
      };

      ASFDGRID_MIN = {
        jr_Officer: 350000,
        Officer: 350000,
        sr_Officer: 350000,
        executive: 350000,
        sr_executive: 350000,
        manager: 350000,
        sr_Manager: 350000,
        dgm: 390000,
        gm: 500000,
        asst_manager: 600000,
        VP: 660000,
        sr_VP: 960000,
      };

      ASFDGRID_MAX = {
        jr_Officer: 500000,
        Officer: 500000,
        sr_Officer: 500000,
        executive: 500000,
        sr_executive: 500000,
        manager: 500000,
        sr_Manager: 500000,
        dgm: 550000,
        gm: 660000,
        asst_manager: 840000,
        VP: 980000,
        sr_VP: 1400000,
      };

      TH_MIN = {
        jr_Officer: 350000,
        Officer: 350000,
        sr_Officer: 350000,
        executive: 350000,
        sr_executive: 350000,
        manager: 350000,
        sr_Manager: 350000,
        dgm: 390000,
        gm: 500000,
        asst_manager: 600000,
        VP: 660000,
        sr_VP: 960000,
      };

      TH_MAX = {
        jr_Officer: 500000,
        Officer: 500000,
        sr_Officer: 500000,
        executive: 500000,
        sr_executive: 500000,
        manager: 500000,
        sr_Manager: 500000,
        dgm: 550000,
        gm: 660000,
        asst_manager: 840000,
        VP: 980000,
        sr_VP: 1400000,
      };

      PT_MIN = {
        jr_Officer: 350000,
        Officer: 350000,
        sr_Officer: 350000,
        executive: 350000,
        sr_executive: 350000,
        manager: 350000,
        sr_Manager: 350000,
        dgm: 390000,
        gm: 500000,
        asst_manager: 600000,
        VP: 660000,
        sr_VP: 960000,
      };

      PT_MAX = {
        jr_Officer: 500000,
        Officer: 500000,
        sr_Officer: 500000,
        executive: 500000,
        sr_executive: 500000,
        manager: 500000,
        sr_Manager: 500000,
        dgm: 550000,
        gm: 660000,
        asst_manager: 840000,
        VP: 980000,
        sr_VP: 1400000,
      };

      var Normal_min = ASFDGRID_MIN[level];
      var Normal_max = ASFDGRID_MAX[level];
      var THP_min =
        inputTHP == "Normal"
          ? Normal_min
          : inputTHP == "Technical" || inputTHP == "HotSkills"
          ? TH_MIN[level]
          : PT_MIN[level];
      var THP_max =
        inputTHP == "Normal"
          ? Normal_max
          : inputTHP == "Technical" || inputTHP == "HotSkills"
          ? TH_MAX[level]
          : PT_MAX[level];
      if (inputCTC_an < Normal_min || inputCTC_an > THP_max) {
        alert("Outside Hiring Grid");
      }

      CTCcalculation["pfBase_an"] = fixedPer[level];
      CTCcalculation["pfBase_mon"] = CTCcalculation["pfBase_an"] / 12;
      CTCcalculation["BasicSal_an"] = CTCcalculation["pfBase_an"];
      CTCcalculation["BasicSal_mon"] = CTCcalculation["BasicSal_an"] / 12;
      /*CTCcalculation["adhocPay_an"] = 0;*/

      CTCcalculation["adhocPay_mon"] = CTCcalculation["adhocPay_an"] / 12;
	if (CTCcalculation["adhocPay_mon"] == 0)
      {
	 CTCcalculation["adhocPay_mon"] = val_dec;
	}

      CTCcalculation["pf_ann"] = 0.12 * CTCcalculation["pfBase_an"];
      CTCcalculation["pf_mon"] = CTCcalculation["pf_ann"] / 12;
      CTCcalculation["gratuity_ann"] = Math.round(
        0.0481 * CTCcalculation["pfBase_an"]
      );
      CTCcalculation["gratuity_mon"] = CTCcalculation["gratuity_ann"] / 12;

      CTCcalculation["retirals_ann"] =
        CTCcalculation["pf_ann"] + CTCcalculation["gratuity_ann"];
      CTCcalculation["retirals_mon"] = CTCcalculation["retirals_ann"] / 12;

      CTCcalculation["superannuation_ann"] = 0;
      CTCcalculation["superannuation_mon"] =
        CTCcalculation["superannuation_ann"] / 12;

      CTCcalculation["totalFixed_ann"] =
        CTCcalculation["pfBase_an"] + CTCcalculation["retirals_ann"];
      CTCcalculation["totalFixed_mon"] = CTCcalculation["totalFixed_ann"] / 12;

      CTCcalculation["hra_ann"] = (CTCcalculation["pfBase_an"] * 50) / 100;
      CTCcalculation["hra_mon"] = CTCcalculation["hra_ann"] / 12;
      CTCcalculation["conveyance_ann"] = 19200;
      CTCcalculation["conveyance_mon"] = CTCcalculation["conveyance_ann"] / 12;
      CTCcalculation["medical_ann"] = 15000;
      CTCcalculation["medical_mon"] = CTCcalculation["medical_ann"] / 12;
      CTCcalculation["education_ann"] = 2400;
      CTCcalculation["education_mon"] = CTCcalculation["education_ann"] / 12;
      CTCcalculation["lta_ann"] = lta[level];
      CTCcalculation["lta_mon"] = CTCcalculation["lta_ann"] / 12;
      CTCcalculation["bonusExgratia_an"] = bonusExgratia[level];
	

      CTCcalculation["bonusExgratia_mon"] =
        CTCcalculation["bonusExgratia_an"] / 12;
     

      CTCcalculation["performancePay_an"] = performanceP[level];
      CTCcalculation["performancePay_mon"] =
        CTCcalculation["performancePay_an"] / 12;
      CTCcalculation["flexiPay_an"] =
        inputCTC_an -
        CTCcalculation["pfBase_an"] -
        retirals[level] * CTCcalculation["pfBase_an"] -
        CTCcalculation["performancePay_an"] -
        CTCcalculation["bonusExgratia_an"] -
        esic[level];
	

      CTCcalculation["flexiPay_mon"] = CTCcalculation["flexiPay_an"] / 12;
      //CTCcalculation['field_ann'] = CTCcalculation['flexiPay_an'] - CTCcalculation['hra_ann'] - CTCcalculation['conveyance_ann'] - CTCcalculation['medical_ann'] - CTCcalculation['education_ann'] - CTCcalculation['lta_ann'];
      CTCcalculation["field_mon"] = CTCcalculation["field_ann"] / 12;

      CTCcalculation["totalAllow_ann"] = CTCcalculation["flexiPay_an"];
      CTCcalculation["totalAllow_mon"] = CTCcalculation["totalAllow_ann"] / 12;
      CTCcalculation["totalGuaranteed_an"] =
        CTCcalculation["pfBase_an"] +
        CTCcalculation["retirals_ann"] +
        CTCcalculation["flexiPay_an"] +
        CTCcalculation["bonusExgratia_an"];
      CTCcalculation["totalGuaranteed_mon"] =
        CTCcalculation["totalGuaranteed_an"] / 12;
      CTCcalculation["cea_an"] = CEA[level];
      CTCcalculation["cea_mon"] = CTCcalculation["cea_an"] / 12;

      CTCcalculation["specialPay_an"] =
        CTCcalculation["flexiPay_an"] -
        (CTCcalculation["hra_ann"] +
          CTCcalculation["conveyance_ann"] +
          CTCcalculation["education_ann"] +
          CTCcalculation["cea_an"] +
          CTCcalculation["lta_ann"]);
      CTCcalculation["specialPay_mon"] = CTCcalculation["specialPay_an"] / 12;
      CTCcalculation["esic_an"] = esic[level];
      CTCcalculation["esic_mon"] = CTCcalculation["esic_an"] / 12;
      CTCcalculation["ctc_an"] =
        CTCcalculation["pfBase_an"] +
        CTCcalculation["retirals_ann"] +
        CTCcalculation["totalAllow_ann"] +
        CTCcalculation["bonusExgratia_an"] +
        CTCcalculation["performancePay_an"];
      CTCcalculation["ctc_mon"] = CTCcalculation["ctc_an"] / 12;
      CTCcalculation["grossPay_mon"] =
        CTCcalculation["pfBase_mon"] +
        CTCcalculation["hra_mon"] +
        CTCcalculation["conveyance_mon"] +
        CTCcalculation["bonusExgratia_mon"] +
        CTCcalculation["education_mon"] +
        CTCcalculation["cea_mon"] +
        CTCcalculation["specialPay_mon"];

      CTCcalculation["grossPay_an"] = CTCcalculation["grossPay_mon"] * 12;
      CTCcalculation["calculateForGrade"] = selectedGrade;
      CTCcalculation["sectorBusinessXMatrix"] = business[level];
      CTCcalculation["individualScore"] = individual[level];
      CTCcalculation["graduityPercent"] = 4.81;
      CTCcalculation["level5PP"] =
        (CTCcalculation["performancePay_an"] * 170) / 100;
      CTCcalculation["calculateForDomain"] = selecteddomain;
    }

    return CTCcalculation;
  };

  $mj("#calculateButton").click(function (event) {
    event.preventDefault();

    var inputCTC = $mj("#inputCTC").val();
    var inputlevel = $mj("#selectLevel").val();
    var inputcompany = $mj("#company").val();

    if ($mj.isNumeric(inputCTC)) {
      if (inputlevel != "selectlevel" && inputcompany != " selectcompany") {
        var sal = calcCTC(inputCTC, inputlevel, inputcompany);
	
	if(sal.bonusExgratia_an == 0){
	   sal.bonusExgratia_an = (0).toFixed(2);
	}
	
	if(sal.bonusExgratia_mon == 0){
	   sal.bonusExgratia_mon = (0).toFixed(2);
	}

	
	if(sal.superannuation_mon == 0)
	{
	   sal.superannuation_mon = (0).toFixed(2);
	}
	if(sal.superannuation_ann == 0)
	{
	   sal.superannuation_ann = (0).toFixed(2);
	}

  for (let abc = 0; abc < arrayOfElem.length; abc++) {
    console.log(arrayOfElem[abc])
    console.log("Before Change")
    console.log($mj('[name="' + arrayOfElem[abc] + '"]').val())
    console.log("After Change")
    console.log($mj('[name="' + arrayOfElem[abc] + '"]').val().replaceAll(",",""))
    $mj('[name="' + arrayOfElem[abc] + '"]').val($mj('[name="' + arrayOfElem[abc] + '"]').val().replaceAll(",",""));
  }

	

        for (var key in sal) {
          if (
            key == "calculateForGrade" ||
            key == "graduityPercent" ||
            key == "gridmatrix" ||
            key == "calculateForDomain"
          ) {
            var salComponent = sal[key];
            var round = salComponent;
            $mj('[name="' + key + '"]').val(round);
          } else {
            var salComponent = sal[key];
            var round = salComponent.toLocaleString("en-IN");
            $mj('[name="' + key + '"]').val(round);
          }

          var baseId_mon = $mj('[name="' + key + '"]').attr("id");

          $mj('[name="' + key + '"]').addClass("unsaved");
          juic.fire(baseId_mon, "_onChange", event);
        }
      } else {
        alert("Please Select Compnay Code & Level!");
      }
    } else {
      alert("Please enter a numeric value!");
    }
  });

  $mj("#company").on("change", function () {
    //console.log($mj('#typeOfGlass').val());
    $mj("#selectLevel").html("");
    if (
      $mj("#company").val() == "1049" ||
      $mj("#company").val() == "1070" ||
      $mj("#company").val() == "1054" ||
      $mj("#company").val() == "1055"
    ) {
      $mj("#selectLevel").append(
        '<option value="selectlevel">Select Level</option>'
      );
      $mj("#selectLevel").append(
        '<option value="DL1">Division Leader-DL1</option>'
      );
      $mj("#selectLevel").append(
        '<option value="DL2">Division Leader-DL2</option>'
      );
      $mj("#selectLevel").append(
        '<option value="DL3">Division Leader-DL3</option>'
      );
      $mj("#selectLevel").append(
        '<option value="TL1">Team Leader-TL 1</option>'
      );
      $mj("#selectLevel").append(
        '<option value="TL2">Team Leader-TL 2</option>'
      );
      $mj("#selectLevel").append(
        '<option value="TL3">Team Leader-TL 3</option>'
      );
      $mj("#selectLevel").append(
        '<option value="TL4">Team Leader-TL 4</option>'
      );
      $mj("#selectLevel").append(
        '<option value="TM1">Team Member-TM 1</option>'
      );
      $mj("#selectLevel").append(
        '<option value="TM2">Team Member-TM 2</option>'
      );
      $mj("#selectLevel").append(
        '<option value="TM3">Team Member-TM 3</option>'
      );
      $mj("#selectLevel").append(
        '<option value="TM4">Team Member-TM 4</option>'
      );

      // Sector

      $mj("#sector").html("");

      $mj("#sector").append(
        '<option value="agricultureSector">Agriculture Sector</option>'
      );

      // Business Unit
      $mj("#businessUnit").html("");
      $mj("#businessUnit").append(
        '<option value="agricultureSectorPresident">Agriculture Sector</option>'
      );
      $mj("#businessUnit").append(
        '<option value="mahindraAgriSolution">Mahindra Agri Solution</option>'
      );

      $mj("#businessUnit").append(
        '<option value="mahindraSumitAgr">Mahindra Summit Agriscience</option>'
      );
    } else if (
      $mj("#company").val() == "9025" ||
      $mj("#company").val() == "1001" ||
      $mj("#company").val() == "9026" ||
      $mj("#company").val() == "1019" ||
      $mj("#company").val() == "1020" ||
      $mj("#company").val() == "1081" ||
      $mj("#company").val() == "1021"
    ) {
      $mj("#selectLevel").append(
        '<option value="selectlevel">Select Level</option>'
      );

      $mj("#selectLevel").append('<option value="l1s">L1-Strategic</option>');
      $mj("#selectLevel").append('<option value="l2s">L2-Strategic</option>');

      $mj("#selectLevel").append('<option value="exl2">L2-Executive</option>');
      $mj("#selectLevel").append('<option value="exl3">L3-Executive</option>');
      $mj("#selectLevel").append(
        '<option value="dhl3">L3-Department Head</option>'
      );
      $mj("#selectLevel").append(
        '<option value="dhl4">L4-Department Head</option>'
      );
      $mj("#selectLevel").append(
        '<option value="dhl5">L5-Department Head</option>'
      );
      $mj("#selectLevel").append('<option value="ml5">L5-Managerial</option>');
      $mj("#selectLevel").append('<option value="ml6">L6-Managerial</option>');
      $mj("#selectLevel").append('<option value="ml7">L7-Managerial</option>');
      $mj("#selectLevel").append('<option value="ol7">L7-Operational</option>');
      $mj("#selectLevel").append('<option value="ol8">L8-Operational</option>');
      $mj("#selectLevel").append('<option value="ol9">L9-Operational</option>');
      $mj("#selectLevel").append(
        '<option value="ol10">L10-Operational</option>'
      );

      $mj("#sector").html("");
      $mj("#sector").append(
        '<option value="selectsector">Select Sector</option>'
      );
      $mj("#sector").append(
        '<option value="agricultureSector">Agriculture Sector</option>'
      );
      $mj("#sector").append(
        '<option value="automotiveSector">Automotive Sector</option>'
      );
      $mj("#sector").append(
        '<option value="commonServices">Common Services</option>'
      );
      $mj("#sector").append(
        '<option value="executiveDirector">Executive Director</option>'
      );
      $mj("#sector").append(
        '<option value="farmEquipemnentSector">Farm Equipment Sector</option>'
      );
      
      $mj("#sector").append(
        '<option value="otherBusiness">Other Business</option>'
      );
      

      $mj("#sector").on("change", function () {
        $mj("#businessUnit").html("");

        if ($mj("#sector").val() == "farmEquipemnentSector") {
          $mj("#businessUnit").append('<option value="selectbusinessUnit">Select Business Unit</option>');
          $mj("#businessUnit").append('<option value="FarmDivision">Farm Division</option>');
          $mj("#businessUnit").append('<option value="MahindraUsa">Mahindra USA (MUSA)</option>');
          $mj("#businessUnit").append('<option value="InternationalOperations">International Operations</option>');
          $mj("#businessUnit").append('<option value="ProductPlanning">Product Planning</option>');
          $mj("#businessUnit").append('<option value="FarmMachineryBusiness">Farm Machinery Business</option>');
          $mj("#businessUnit").append('<option value="FES">FES</option>');
          $mj("#businessUnit").append('<option value="SwarajDivision">Swaraj Division</option>');
          $mj("#businessUnit").append('<option value="Strategy">Strategy</option>');
          $mj("#businessUnit").append('<option value="IO">IO</option>');
          $mj("#businessUnit").append('<option value="precisionFarming">Precision Farming Solutions (FaaS)</option>');
          $mj("#businessUnit").append('<option value="FESQuality">FES Quality</option>');
          $mj("#businessUnit").append('<option value="SwarajEngines">Swaraj Engines</option>');
          $mj("#businessUnit").append('<option value="GROMAXAGRIEQUIPMENTLTD">GROMAX AGRI EQUIPMENT LTD</option>');
          $mj("#businessUnit").append('<option value="RentalSolutions">Rental Solutions (FaaS)</option>');
          $mj("#businessUnit").append('<option value="GotoMarket">Go to Market (FaaS)</option>');
          $mj("#businessUnit").append('<option value="FESDigitalCentre">FES Digital Centre</option>');
          $mj("#businessUnit").append('<option value="FESGlobalManufacturing">FES Global Manufacturing</option>');
          $mj("#businessUnit").append('<option value="CommonFunctions">Common Functions (FaaS)</option>');
          $mj("#businessUnit").append('<option value="DigitalSolutions">Digital Solutions (FaaS)</option>');
        } else if ($mj("#sector").val() == "automotiveSector") {
          $mj("#businessUnit").append('<option value="selectbusinessUnit">Select Business Unit</option>');
          $mj("#businessUnit").append('<option value="AutomotiveDivision">Automotive Division</option>');
          $mj("#businessUnit").append('<option value="TruckBuses">Truck & Buses</option>');
          $mj("#businessUnit").append('<option value="AS">AS</option>');
          $mj("#businessUnit").append('<option value="ASPresidentOffice">AS President Office</option>');
          $mj("#businessUnit").append('<option value="ConstructionEquipment">Construction Equipment</option>');
          $mj("#businessUnit").append('<option value="ElectricMobility">Electric Mobility</option>');
          $mj("#businessUnit").append('<option value="HeavyEngines">Heavy Engines</option>');
          $mj("#businessUnit").append('<option value="DigitalCenter">Digital Center</option>');
          $mj("#businessUnit").append('<option value="CommercialVehicleBusinessUnit">Commercial Vehicle Business Unit</option>');
          $mj("#businessUnit").append('<option value="AutoDivisionCEOOffice">Auto Division CEO Office</option>');
          $mj("#businessUnit").append('<option value="InternationalOperationsAuto">International Operations Auto</option>');
          $mj("#businessUnit").append('<option value="DeputationtoSusten">Deputation to Susten</option>');
          $mj("#businessUnit").append('<option value="DeputationtoMANA">Deputation to MANA</option>');    
	  $mj("#businessUnit").append('<option value="NewBusinessSolution">New Business Solution</option>');
          $mj("#businessUnit").append('<option value="ElectricMobility-LMM">Electric Mobility-LMM</option>');
          $mj("#businessUnit").append('<option value="ElectricMobility-EVTechCentre">Electric Mobility- EV Tech Centre</option>');
          $mj("#businessUnit").append('<option value="DeputationtoMFCSL">Deputation to MFCSL</option>');
          $mj("#businessUnit").append('<option value="MahindraLastMileMobility">Mahindra Last Mile Mobility</option>');







        } else if ($mj("#sector").val() == "commonServices") {
          $mj("#businessUnit").append('<option value="selectbusinessUnit">Select Business Unit</option>');
          $mj("#businessUnit").append('<option value="BSSIT">BSS & IT</option>');
          $mj("#businessUnit").append('<option value="GST">GST</option>');
          $mj("#businessUnit").append('<option value="CommonServices">Common Services </option>');
          $mj("#businessUnit").append('<option value="Administration">Administration</option>');
          $mj("#businessUnit").append('<option value="MRVCommonServices">MRV Common Services</option>');
          $mj("#businessUnit").append('<option value="CorporateSocialResponsibility">Corporate Social Responsibility</option>');
          $mj("#businessUnit").append('<option value="HumanResources">Human Resources</option>');
          $mj("#businessUnit").append('<option value="BusinessExcellence">Business Excellence</option>');
          $mj("#businessUnit").append('<option value="InformationTechnology">Information Technology</option>');
          $mj("#businessUnit").append('<option value="PowerTrainDivision">Power Train Division</option>');
          $mj("#businessUnit").append('<option value="Sustainability">Sustainability</option>');
          $mj("#businessUnit").append('<option value="OfficeofChiefPurchaseOfficer">Office of Chief Purchase Officer</option>');
          $mj("#businessUnit").append('<option value="CentralMedicalServices">Central Medical Services</option>');
          $mj("#businessUnit").append('<option value="InternationalOperations">International Operations</option>');
          $mj("#businessUnit").append('<option value="InsightsandAnalytics">Insights and Analytics</option>');
          $mj("#businessUnit").append('<option value="Finance&Accounts">Finance & Accounts</option>');
          $mj("#businessUnit").append('<option value="DesignAFS">Design AFS</option>');
          $mj("#businessUnit").append('<option value="Ethics&Governance">Ethics & Governance</option>');
        } else if ($mj("#sector").val() == "otherBusiness") {
          $mj("#businessUnit").append('<option value="selectbusinessUnit">Select Business Unit</option>');
          $mj("#businessUnit").append('<option value="InternationalOperationsAuto">International Operations Auto</option>');
          $mj("#businessUnit").append('<option value="AutomobiliPininfarina">Automobili Pininfarina</option>');
          $mj("#businessUnit").append('<option value="Powerol">Powerol</option>');
          $mj("#businessUnit").append('<option value="TwoWheelers">Two Wheelers</option>');
          $mj("#businessUnit").append('<option value="NA">N/A</option>');
          $mj("#businessUnit").append('<option value="SparesBusiness">Spares Business</option>');
          $mj("#businessUnit").append('<option value="CLPL">CLPL</option>');
        } else if ($mj("#sector").val() == "agricultureSector") {
          $mj("#businessUnit").append('<option value="selectbusinessUnit">Select Business Unit</option>');
          $mj("#businessUnit").append('<option value="AgricutureSector">Agricuture Sector </option>');
          $mj("#businessUnit").append('<option value="MahindraAgriSolutions">Mahindra Agri Solutions</option>');
          $mj("#businessUnit").append('<option value="EPC">EPC</option>');
        } else if ($mj("#sector").val() == "executiveDirector") {
          $mj("#businessUnit").append('<option value="selectbusinessUnit">Select Business Unit</option>');
          $mj("#businessUnit").append('<option value="ExecutiveDirectoroffice">Executive Director office</option>');
        }
      });
    } else if ($mj("#company").val() == "1024") {
      $mj("#selectLevel").append(
        '<option value="selectlevel">Select Level</option>'
      );
      $mj("#selectLevel").append('<option value="exl2">L2-Executive</option>');
      $mj("#selectLevel").append('<option value="exl3">L3-Executive</option>');
      $mj("#selectLevel").append(
        '<option value="dhl3">L3-Department Head</option>'
      );
      $mj("#selectLevel").append(
        '<option value="dhl4">L4-Department Head</option>'
      );
      $mj("#selectLevel").append(
        '<option value="dhl5">L5-Department Head</option>'
      );
      $mj("#selectLevel").append('<option value="ml5">L5-Managerial</option>');
      $mj("#selectLevel").append('<option value="ml6">L6-Managerial</option>');
      $mj("#selectLevel").append('<option value="ml7">L7-Managerial</option>');
      $mj("#selectLevel").append('<option value="ol7">L7-Operational</option>');
      $mj("#selectLevel").append('<option value="ol8">L8-Operational</option>');
      $mj("#selectLevel").append('<option value="ol9">L9-Operational</option>');
      $mj("#selectLevel").append(
        '<option value="ol10">L10-Operational</option>'
      );

      //Sector

      $mj("#sector").html("");
      $mj("#sector").append(
        '<option value="otherBusiness">Other Business</option>'
      );

      // Business Unit
      $mj("#businessUnit").html("");
      $mj("#businessUnit").append(
        '<option value="twoWheelers">Two Wheelers</option>'
      );
    } else if ($mj("#company").val() == "1037") {
      $mj("#selectLevel").append(
        '<option value="selectlevel">Select Level</option>'
      );
      $mj("#selectLevel").append('<option value="exl2">L2-Executive</option>');
      $mj("#selectLevel").append('<option value="exl3">L3-Executive</option>');
      $mj("#selectLevel").append(
        '<option value="dhl3">L3-Department Head</option>'
      );
      $mj("#selectLevel").append(
        '<option value="dhl4">L4-Department Head</option>'
      );
      $mj("#selectLevel").append(
        '<option value="dhl5">L5-Department Head</option>'
      );
      $mj("#selectLevel").append('<option value="ml5">L5-Managerial</option>');
      $mj("#selectLevel").append('<option value="ml6">L6-Managerial</option>');
      $mj("#selectLevel").append('<option value="ml7">L7-Managerial</option>');
      $mj("#selectLevel").append('<option value="ol7">L7-Operational</option>');
      $mj("#selectLevel").append('<option value="ol8">L8-Operational</option>');
      $mj("#selectLevel").append('<option value="ol9">L9-Operational</option>');
      $mj("#selectLevel").append(
        '<option value="ol10">L10-Operational</option>'
      );

      //Sector

      $mj("#sector").html("");
      $mj("#sector").append('<option value="automotiveSector">Automotive Sector</option>');
      $mj("#sector").append('<option value="commonServices">Common Services</option>');
      if ($mj("#sector").val() == "automotiveSector") { 
        $mj("#businessUnit").html("");
        $mj("#businessUnit").append('<option value="selectbusinessUnit">Select Business Unit</option>');
        $mj("#businessUnit").append('<option value="electricMobility">Electric Mobility</option>');
      } else if ($mj("#sector").val() == "commonServices") {
        $mj("#businessUnit").html("");
        $mj("#businessUnit").append('<option value="selectbusinessUnit">Select Business Unit</option>');
        $mj("#businessUnit").append('<option value="GST">GST</option>');
        $mj("#businessUnit").append('<option value="BusinessExcellence">Business Excellence</option>');
      }
    
    } else if ($mj("#company").val() == "1058") {
      $mj("#selectLevel").append(
        '<option value="selectlevel">Select Level</option>'
      );
      $mj("#selectLevel").append('<option value="Band1">Band-1</option>');
      $mj("#selectLevel").append('<option value="Band2">Band-2</option>');
      $mj("#selectLevel").append('<option value="Band3">Band-3</option>');
      $mj("#selectLevel").append('<option value="Band4">Band-4</option>');
      $mj("#selectLevel").append('<option value="Band5">Band-5</option>');

      //Sector

      $mj("#sector").html("");
      $mj("#sector").append(
        '<option value="notRequired">Not Required</option>'
      );

      // Business Unit
      $mj("#businessUnit").html("");
      $mj("#businessUnit").append(
        '<option value="smartShift">Smart Shift</option>'
      );
    } else if ($mj("#company").val() == "1065") {
      $mj("#selectLevel").append(
        '<option value="selectlevel">Select Level</option>'
      );
      $mj("#selectLevel").append(
        '<option value="jr_Officer">Jr. Officer</option>'
      );
      $mj("#selectLevel").append('<option value="Officer">Officer</option>');
      $mj("#selectLevel").append(
        '<option value="sr_Officer">Sr. Officer</option>'
      );
      $mj("#selectLevel").append(
        '<option value="executive">Executive</option>'
      );
      $mj("#selectLevel").append(
        '<option value="sr_executive">Sr. Executive</option>'
      );
      $mj("#selectLevel").append('<option value="manager">Manager</option>');
      $mj("#selectLevel").append(
        '<option value="sr_Manager">Sr. Manager</option>'
      );
      $mj("#selectLevel").append(
        '<option value="dgm">Deputy Gen Manager</option>'
      );
      $mj("#selectLevel").append('<option value="gm">Gen. Manager</option>');
      $mj("#selectLevel").append('<option value="asst_VP">Asst VP</option>');
      $mj("#selectLevel").append('<option value="VP">VP</option>');
      $mj("#selectLevel").append('<option value="sr_VP">Sr. VP</option>');

      //Sector

      $mj("#sector").html("");
      $mj("#sector").append(
        '<option value="notRequired">Not Required</option>'
      );

      // Business Unit
      $mj("#businessUnit").html("");
      $mj("#businessUnit").append('<option value="trringo">Trringo</option>');
    } else if ($mj("#company").val() == "1068") {
      $mj("#selectLevel").append(
        '<option value="selectlevel">Select Level</option>'
      );

      $mj("#selectLevel").append(
        '<option value="executive">Executive</option>'
      );
      $mj("#selectLevel").append(
        '<option value="sr_executive">Sr.Executive</option>'
      );
      $mj("#selectLevel").append('<option value="manager">Manager</option>');
      $mj("#selectLevel").append(
        '<option value="asst_manager">Asst.manager</option>'
      );
      $mj("#selectLevel").append(
        '<option value="sr_Manager">Sr.Manager</option>'
      );
      $mj("#selectLevel").append('<option value="dgm">DGM</option>');
      $mj("#selectLevel").append('<option value="gm">GM</option>');

      $mj("#selectLevel").append('<option value="VP">VP</option>');
      $mj("#selectLevel").append('<option value="sr_VP">Sr.VP</option>');

      //Sector

      $mj("#sector").html("");
      $mj("#sector").append(
        '<option value="OtherBusiness">Other Business</option>'
      );

      // Business Unit
      $mj("#businessUnit").html("");
      $mj("#businessUnit").append('<option value="NA">N/A</option>');
    }
  });

  $mj("#THP").on("change", function () {
    //console.log($mj('#typeOfGlass').val());
    $mj("#domain").html("");
    if ($mj("#THP").val() == "Technical") {
      $mj('#domain').append('<option value="0">Select Domain</option>');
        $mj('#domain').append('<option value="1">Manufacturing Engg/Plant Engg (T)</option>');
        $mj('#domain').append('<option value="2">Heat Treatment (T)</option>');
        $mj('#domain').append('<option value="3">Die design/ Die Tryout/ Pattern matching (T)</option>');
        $mj('#domain').append('<option value="4">Electronics Maintenance / Mechatronics (T)</option>');
        $mj('#domain').append('<option value="5">Plant Engineering (T)</option>');
        $mj('#domain').append('<option value="6">Plant Quality (T)</option>');
        $mj('#domain').append('<option value="7">Foundry (Only SME) (T)</option>');
        $mj('#domain').append('<option value="8">All Vehicle System CoEs (T)</option>');
        $mj('#domain').append('<option value="9">Digital Manufacturing (T)</option>');
        $mj('#domain').append('<option value="10">EngineDesign/ Dev./ Testing/ Perf Simu (T)</option>');
        $mj('#domain').append('<option value="11">Paint Technologists (only SME) (T)</option>');
        $mj('#domain').append('<option value="12">Validation & Testing (T)</option>');
        $mj('#domain').append('<option value="13">Tool Design (T)</option>');
        $mj('#domain').append('<option value="14">Advance Technology Group (T)</option>');
        $mj('#domain').append('<option value="15">Quality Planning (T)</option>');
        $mj('#domain').append('<option value="16">Connected Vehicles (T)</option>');
        $mj('#domain').append('<option value="17">Vehicle Integration (T)</option>');
        $mj('#domain').append('<option value="18">Others (T)</option>');
        $mj('#domain').append('<option value="19">Head Customer Relations and Warranty (T)</option>');
        $mj('#domain').append('<option value="20">TransmissionDesign/Dev/Testg/Perf Simu (T)</option>');
        $mj('#domain').append('<option value="21">Hardware in Loop/ Electronic Reliability (T)</option>');
        $mj('#domain').append('<option value="22">Infotainment (T)</option>');
        $mj('#domain').append('<option value="23">Electrical/ Electronics Maintenance (T)</option>');
        $mj('#domain').append('<option value="24">Engine Calibration (T)</option>');
        $mj('#domain').append('<option value="25">Vehicle Integration/CAE/Validation (T)</option>');
        $mj('#domain').append('<option value="26">Mechanical Maintenance /Tooling Maintenance (T)</option>');
        $mj('#domain').append('<option value="27">Logistics and Supply chain Management (T)</option>');
        $mj('#domain').append('<option value="28">IVN/ Diagnostic & EOL (T)</option>');
        $mj('#domain').append('<option value="29">Chief Platform Head (CPH) / Chief Engineer (T)</option>');
        $mj('#domain').append('<option value="30">Robotics/ Mechatronics/ Automation Maintenance (T)</option>');
        $mj('#domain').append('<option value="31">Assembly (T)</option>');
        $mj('#domain').append('<option value="32">Not Applicable (T)</option>');

    } else if ($mj("#THP").val() == "HotSkills") {
      $mj('#domain').append('<option value="0">Select Domain</option>');
        $mj('#domain').append('<option value="1">From SSU "Commodity Heads / Sub Heads with commercial expertise. (H)</option>');
        $mj('#domain').append('<option value="2">Supplier Technical Assitance (STA) (H)</option>');
        $mj('#domain').append('<option value="3">Development Engineering (component / system experts). (H)</option>');
        $mj('#domain').append('<option value="4">Brand Management (H)</option>');
        $mj('#domain').append('<option value="5">Product Planning (H)</option>');
        $mj('#domain').append('<option value="6">Market Research (H)</option>');
        $mj('#domain').append('<option value="7">Product Managers (H)</option>');
        $mj('#domain').append('<option value="8">Customer Care (Technical Hub & Training cell) (H)</option>');
        $mj('#domain').append('<option value="9">Head Customer Relations and Warranty (H)</option>');
        $mj('#domain').append('<option value="10">Product Support Head (H)</option>');
        $mj('#domain').append('<option value="11">PLM (Product Life Cycle Management) in IT (H)</option>');
        $mj('#domain').append('<option value="12">CA / ICWA / CFA (H)</option>');
        $mj('#domain').append('<option value="13">Field Quality Electrical & Electronics, Engines, Transmission (H)</option>');
        $mj('#domain').append('<option value="14">Costing (H)</option>');
        $mj('#domain').append('<option value="15">FP&A (H)</option>');
        $mj('#domain').append('<option value="16">Others (H)</option>');
    } else if ($mj("#THP").val() == "PremiumTechnical") {
      $mj('#domain').append('<option value="0">Select Domain</option>');
      $mj('#domain').append('<option value="1">Vehicle Performance Simulation (PT)</option>');
      $mj('#domain').append('<option value="2">Design COE (PT)</option>');
      $mj('#domain').append('<option value="3">Engine Calibration (PT)</option>');
      $mj('#domain').append('<option value="4">Infotainment (PT)</option>');
      $mj('#domain').append('<option value="5">IVN/ Diagnostic & EOL (PT)</option>');
      $mj('#domain').append('<option value="6">Security and Immobilizer (PT)</option>');
      $mj('#domain').append('<option value="7">Hardware in Loop/ Electronic Reliability (PT)</option>');
      $mj('#domain').append('<option value="8">EngineDesign/ Dev./ Testing/ Perf Simu (PT)</option>');
      $mj('#domain').append('<option value="9">Transmission Calibration (PT)</option>');
      $mj('#domain').append('<option value="10">Gasoline Eng & Veh Performance Systems (PT)</option>');
      $mj('#domain').append('<option value="11">Connected Vehicles (PT)</option>');
      $mj('#domain').append('<option value="12">Performance Simulation CalibrationOptimization & Calibration (PT)</option>');
      $mj('#domain').append('<option value="13">Electric Drivetrain (PT)</option>');
      $mj('#domain').append('<option value="14">Energy Storage Systems (PT)</option>');
      $mj('#domain').append('<option value="15">LV HVWiring Harness (PT)</option>');
      $mj('#domain').append('<option value="16">Hybrid Software/ Calibration&Simulation (PT)</option>');
      $mj('#domain').append('<option value="17">System Integration (PT)</option>');
      $mj('#domain').append('<option value="18">All Vehicle System CoEs (PT)</option>');
      $mj('#domain').append('<option value="19">Energy Storage SystemsBattery Packaging (PT)</option>');
      $mj('#domain').append('<option value="20">Embedded SystemsSoftware (PT)</option>');
      $mj('#domain').append('<option value="21">Functional Safety (PT)</option>');
      $mj('#domain').append('<option value="22">Not Applicable (PT)</option>');
    } else if ($mj("#THP").val() == "Normal") {
      $mj('#domain').append('<option value="0">Select Domain</option>');
      $mj('#domain').append('<option value="1">Assets Management</option>');
      $mj('#domain').append('<option value="2">Plant Quality</option>');
      $mj('#domain').append('<option value="3">Customer Quality</option>');
      $mj('#domain').append('<option value="4">Central Services</option>');
      $mj('#domain').append('<option value="5">Assembly</option>');
      $mj('#domain').append('<option value="6">Product Cost Management</option>');
      $mj('#domain').append('<option value="7">Logistics and Supply chain Management</option>');
      $mj('#domain').append('<option value="8">Supplier Technical Assitance (STA)</option>');
      $mj('#domain').append('<option value="9">ENGINE PU</option>');
      $mj('#domain').append('<option value="10">Indirect Material Purchase</option>');
      $mj('#domain').append('<option value="11">Supplier Quality</option>');
      $mj('#domain').append('<option value="12">Supply Chain Planning & Control</option>');
      $mj('#domain').append('<option value="13">SQE Electrical & Electronics, Engines, Transmission, Paints</option>');
      $mj('#domain').append('<option value="14">Machining</option>');
      $mj('#domain').append('<option value="15">Quality Planning</option>');
      $mj('#domain').append('<option value="16">Maintenance</option>');
      $mj('#domain').append('<option value="17">Welding</option>');
      $mj('#domain').append('<option value="18">Mechanical Maintenance /Tooling Maintenance</option>');
      $mj('#domain').append('<option value="19">Field sales</option>');
      $mj('#domain').append('<option value="20">Manufacturing Head</option>');
      $mj('#domain').append('<option value="21">Vehicle Engineering</option>');
      $mj('#domain').append('<option value="22">Field Quality Electrical & Electronics, Engines, Transmission</option>');
      $mj('#domain').append('<option value="23">Electrical/ Electronics Maintenance</option>');
      $mj('#domain').append('<option value="24">Conformity Of Product ( CoP)</option>');
      $mj('#domain').append('<option value="25">New Product Development ( NPD) Quality Planning Powertrain</option>');
      $mj('#domain').append('<option value="26">Transmission PU</option>');
      $mj('#domain').append('<option value="27">COE  Centre of Excellence</option>');
      $mj('#domain').append('<option value="28">Material Quality</option>');
      $mj('#domain').append('<option value="29">State Head / Territory Head / Zonal Head</option>');
      $mj('#domain').append('<option value="30">Hydraulics Mfg.</option>');
      $mj('#domain').append('<option value="31">Strategic Sourcing ( SSU)</option>');
      $mj('#domain').append('<option value="32">Channel Development</option>');
      $mj('#domain').append('<option value="33">International Sales</option>');
      $mj('#domain').append('<option value="34">Marketing Accounts</option>');
      $mj('#domain').append('<option value="35">Reliability Engineering</option>');
      $mj('#domain').append('<option value="36">Procurement</option>');
      $mj('#domain').append('<option value="37">Farm  Sales Planning</option>');
      $mj('#domain').append('<option value="38">Homologation</option>');
      $mj('#domain').append('<option value="39">Customer Care Managers</option>');
      $mj('#domain').append('<option value="40">EngineDesign/ Dev./ Testing/ Perf Simu</option>');
      $mj('#domain').append('<option value="41">MQA Powertrain</option>');
      $mj('#domain').append('<option value="42">Plant/Manufacturing Accounts</option>');
      $mj('#domain').append('<option value="43">Controller & Compliance</option>');
      $mj('#domain').append('<option value="44">Business Analytics / Consulting</option>');
      $mj('#domain').append('<option value="45">Institutional Sales</option>');
      $mj('#domain').append('<option value="46">CDMM New Technologies</option>');
      $mj('#domain').append('<option value="47">Technology Roles</option>');
      $mj('#domain').append('<option value="48">SSU Commodity Heads</option>');
      $mj('#domain').append('<option value="49">CSR</option>');
      $mj('#domain').append('<option value="50">Farm  Head  Sales</option>');
      $mj('#domain').append('<option value="51">CRM   Customer Relationship Management</option>');
      $mj('#domain').append('<option value="52">Operations</option>');
      $mj('#domain').append('<option value="53">Paint Technologists (only SME)</option>');
      $mj('#domain').append('<option value="54">Manufacturing Engg/Plant Engg</option>');
      $mj('#domain').append('<option value="55">Warehouse Operations Management</option>');
      $mj('#domain').append('<option value="56">ER/IR Specialist</option>');
      $mj('#domain').append('<option value="57">Import, Exports & Logistics</option>');
      $mj('#domain').append('<option value="58">CDMM  Component Development and Materia</option>');
      $mj('#domain').append('<option value="59">Agronomy</option>');
      $mj('#domain').append('<option value="60">Plant Engineering</option>');
      $mj('#domain').append('<option value="61">Quality</option>');
      $mj('#domain').append('<option value="62">Dev.Engineering (comp/system expert)</option>');
      $mj('#domain').append('<option value="64">Spares & Warranty</option>');
      $mj('#domain').append('<option value="64">Commodity Hedging</option>');
      $mj('#domain').append('<option value="65">Business Head</option>');
      $mj('#domain').append('<option value="66">Vehicle Integration</option>');
      $mj('#domain').append('<option value="67">Aeroponics</option>');
      $mj('#domain').append('<option value="69">All Vehicle System CoEs</option>');
      $mj('#domain').append('<option value="70">Hardware in Loop/ Electronic Reliability</option>');
      $mj('#domain').append('<option value="71">International</option>');
      $mj('#domain').append('<option value="72">Spare Parts Prcing</option>');
      $mj('#domain').append('<option value="73">Commercial</option>');
      $mj('#domain').append('<option value="74">Seeds R&D</option>');
      $mj('#domain').append('<option value="75">Crop Care Manufacturing</option>');
      $mj('#domain').append('<option value="76">Corporate Sales</option>');
      $mj('#domain').append('<option value="77">Engine Calibration</option>');
      $mj('#domain').append('<option value="78">COE   Center of Excellence</option>');
      $mj('#domain').append('<option value="79">Internal and External Communication</option>');
      $mj('#domain').append('<option value="80">Program Managers</option>');
      $mj('#domain').append('<option value="81">Safety</option>');
      $mj('#domain').append('<option value="82">Supply Operations</option>');
      $mj('#domain').append('<option value="83">Farm  Head  CC</option>');
      $mj('#domain').append('<option value="84">Costing</option>');
      $mj('#domain').append('<option value="85">Sales Strategy</option>');
      $mj('#domain').append('<option value="86">Advance Technology Group</option>');
      $mj('#domain').append('<option value="87">Product Planning</option>');
      $mj('#domain').append('<option value="88">Vehicle Performance Simulation</option>');
      $mj('#domain').append('<option value="89">Customer Care (Tech Hub&Training cell)</option>');
      $mj('#domain').append('<option value="90">Electronics Maintenance / Mechatronics</option>');
      $mj('#domain').append('<option value="91">Robotics/ Mechatronics/ Automation Maintenance</option>');
      $mj('#domain').append('<option value="92">Industrial Engineering</option>');
      $mj('#domain').append('<option value="93">Not Applicable</option>');
    }
  });
});
