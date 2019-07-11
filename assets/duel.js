/*! duel v2.5.8 - Built 2016-01-14, 12:00 PM PST - Copyright (c) 2016 */
window.curl && alert("DUEL included more than once!"),
  (function() {
    var a = function(a) {
      return "undefined" != typeof a;
    };
    a(window.$sf) || (window.$sf = {});
    var b = window.$sf,
      c = (window.$sfConfig = {});
    for (var d in b) {
      var e = b[d],
        f = typeof e;
      ("number" == f || "string" == f || "boolean" == f) && (c[d] = e);
    }
    if (
      (a(b.env) || (b.env = "prod"),
      (b.env_cdn = "wsimg.com"),
      (b.proto = "https:" == document.location.protocol ? "https:" : "http:"),
      a(b.plabel) || (b.plabel = 1),
      (b.plabel = "" + b.plabel),
      a(b.skin) || (b.skin = "app"),
      !a(b.theme))
    )
      switch (b.skin) {
        case "app":
          b.theme = "1" == b.plabel ? "app" : "app.pl";
          break;
        case "fos":
          switch (b.plabel) {
            case "1":
              b.theme = "fos";
              break;
            case "2":
              b.theme = "fos.pl2";
              break;
            case "1387":
              b.theme = "fos.pl1387";
              break;
            default:
              b.theme = "fos.pl";
          }
          break;
        default:
          b.theme = b.skin;
      }
    a(b.culture) || (b.culture = "en"),
      a(b.preload) || (b.preload = 1),
      a(b.loader) || (b.loader = 2),
      a(b.base) || (b.base = {}),
      a(b.util) || (b.util = {}),
      a(b.getjQuery) ||
        (b.getjQuery = function() {
          return window.jQuery;
        }),
      a(b.require) || (b.require = {}),
      "string" == typeof b.require.local && ((b.preload = 0), (b.loader = 1)),
      a(b.require.js_root) || (b.require.js_root = "./assets/"),
      a(b.require.img5_root) || (b.require.img5_root = "./assets/"),
      a(b.require.jquery) || (b.require.jquery = "./assets/jquery.js"),
      a(b.require.css_root) || (b.require.css_root = "./assets/"),
      a(b.require.img_root) || (b.require.img_root = "./assets/"),
      a(b.require.core) || (b.require.core = b.require.js_root + "./assets"),
      a(b.require.core_css) ||
        (b.require.core_css =
          b.require.css_root + "/sf.core." + b.theme + ".css"),
      a(b.bundle) || (b.bundle = {});
    var g = b.bundle;
    g["sf.growl"] = g["sf.tabs"] = g["sf.dialog"] = g["sf.alerts"] = g[
      "sf.msg.overlay"
    ] = g["sf.base.dialog"] = g["sf.base.modal"] = g["sf.base.flyout"] = g[
      "sf.i18n/duel"
    ] = "sf.core.pkg";
    var h = {
      pluginPath: b.require.js_root + "/curl/plugin",
      paths: {},
      apiName: "require"
    };
    if (
      ("string" == typeof b.baseUrl && (h.baseUrl = b.baseUrl),
      "undefined" != typeof b.debug && (h.debug = b.debug),
      "object" == typeof b.require.paths)
    )
      for (p in b.require.paths) h.paths[p] = b.require.paths[p];
    window.curl = h;
  })(),
  (function(a) {
    function b() {}
    function c(a, b) {
      return 0 == E.call(a).indexOf("[object " + b);
    }
    function d(a) {
      var b, c;
      return (
        (b = a.path = f(a.path || a.location || "")),
        (c = a.main || "main"),
        (a.config = a.config),
        (a.main = "." == c.charAt(0) ? f(g(c, b)) : e(b, c)),
        a
      );
    }
    function e(a, b) {
      return f(a) + "/" + b;
    }
    function f(a) {
      return a && "/" == a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a;
    }
    function g(a, b) {
      var c, d, e;
      return (
        (d = 1),
        (a = a.replace(J, function(a, b, c) {
          return c && d++, (e = !0), "";
        })),
        e
          ? ((c = b.split("/")),
            c.splice(c.length - d, d),
            c.concat(a || []).join("/"))
          : a
      );
    }
    function h(a) {
      var b = a.indexOf("!");
      return {
        resourceId: a.substr(b + 1),
        pluginId: b >= 0 && a.substr(0, b)
      };
    }
    function i() {}
    function j(a) {
      i.prototype = a;
      var b = new i();
      return (i.prototype = D), b;
    }
    function k() {
      function a(a, b, c) {
        e.push([a, b, c]);
      }
      function c(a, b) {
        for (var c, d, f = 0; (c = e[f++]); ) (d = c[a]), d && d(b);
      }
      var d, e, f;
      (d = this),
        (e = []),
        (f = function(d, g) {
          (a = d
            ? function(a, b) {
                a && a(g);
              }
            : function(a, b) {
                b && b(g);
              }),
            (f = b),
            c(d ? 0 : 1, g),
            (c = b),
            (e = q);
        }),
        (this.then = function(b, c, e) {
          return a(b, c, e), d;
        }),
        (this.resolve = function(a) {
          (d.resolved = a), f(!0, a);
        }),
        (this.reject = function(a) {
          (d.rejected = a), f(!1, a);
        }),
        (this.progress = function(a) {
          c(2, a);
        });
    }
    function l(a) {
      return a instanceof k;
    }
    function m(a, b, c, d) {
      return l(a) ? a.then(b, c, d) : b(a);
    }
    function n(a, b, c) {
      return function() {
        var d;
        return (
          --a >= 0 && b && (d = b.apply(q, arguments)), 0 == a && c && c(d), d
        );
      };
    }
    function o() {
      function a(b, c, d) {
        var e, f;
        (f = t.createContext(v, q, [].concat(b))),
          (this.then = e = function(a, b) {
            return (
              m(
                f,
                function(b) {
                  a && a.apply(q, b);
                },
                function(a) {
                  if (!b) throw a;
                  b(a);
                }
              ),
              this
            );
          }),
          (this.next = function(b, c) {
            return new a(b, c, f);
          }),
          c && e(c),
          m(d, function() {
            t.getDeps(f);
          });
      }
      var b = [].slice.call(arguments);
      return (
        c(b[0], "Object") &&
          ((v = t.extractCfg(b.shift())), t.checkPreloads(v)),
        new a(b[0], b[1])
      );
    }
    function p(a) {
      var b = a.id;
      if (
        (b == q &&
          (r !== q
            ? (r = { ex: "Multiple anonymous defines in url" })
            : (b = t.getCurrentDefName()) || (r = a)),
        b != q)
      ) {
        var c = F[b];
        if (!(b in F)) {
          var d = t.resolvePathInfo(b, v).config;
          c = F[b] = t.createResourceDef(d, b);
        }
        l(c) && ((c.useNet = !1), t.defineResource(c, a));
      }
    }
    var q,
      r,
      s,
      t,
      u = "0.6.2a",
      v = a.curl,
      w = a.document,
      x = w && (w.head || w.getElementsByTagName("head")[0]),
      y = (x && x.getElementsByTagName("base")[0]) || null,
      z = {},
      A = {},
      B = {},
      C = "addEventListener" in a ? {} : { loaded: 1, complete: 1 },
      D = {},
      E = D.toString,
      F = {},
      G = !1,
      H = /\?/,
      I = /^\/|^[^:]+:\/\//,
      J = /(?:^|\/)(\.)(\.?)\/?/g,
      K = /\/\*[\s\S]*?\*\/|(?:[^\\])\/\/.*?[\n\r]/g,
      L = /require\s*\(\s*["']([^"']+)["']\s*\)|(?:[^\\]?)(["'])/g;
    if (
      ((t = {
        createContext: function(a, b, d, e) {
          function f(a) {
            return g(a, j.ctxId);
          }
          function h(b) {
            return t.resolvePathInfo(f(b), a).url;
          }
          function i(b, d) {
            var e, g, h, i;
            if (
              ((e =
                d &&
                function() {
                  d.apply(q, arguments[0]);
                }),
              c(b, "String"))
            ) {
              if (((g = f(b)), (h = F[g]), (i = l(h) && h.exports), !(g in F)))
                throw new Error("Module not resolved: " + g);
              if (e) throw new Error("require(id, callback) not allowed");
              return i || h;
            }
            m(t.getDeps(t.createContext(a, j.id, b)), e);
          }
          var j;
          return (
            (j = new k()),
            (j.ctxId = j.id = b || ""),
            (j.isPreload = e),
            (j.depNames = d),
            (j.require = i),
            (i.toUrl = h),
            (j.toAbsId = f),
            j
          );
        },
        createResourceDef: function(a, b, c, d) {
          var e, f, g, h;
          return (
            (e = t.createContext(a, b, q, c)),
            (e.ctxId = d == q ? b : d),
            (f = e.resolve),
            (g = n(1, function(a) {
              e.deps = a;
              try {
                h = t.executeDefFunc(e);
              } catch (b) {
                e.reject(b);
              }
            })),
            (e.resolve = function(a) {
              g(a), (F[e.id] = h), f(h);
            }),
            (e.exportsReady = function(a) {
              e.exports && (g(a), e.progress(A));
            }),
            e
          );
        },
        createPluginDef: function(a, b, c, d) {
          var e;
          return (e = t.createContext(a, b, q, c)), (e.ctxId = d), e;
        },
        getCjsRequire: function(a) {
          return a.require;
        },
        getCjsExports: function(a) {
          return a.exports || (a.exports = {});
        },
        getCjsModule: function(a) {
          var b = a.module;
          return (
            b ||
              ((b = a.module = {
                id: a.id,
                uri: t.getDefUrl(a),
                exports: t.getCjsExports(a)
              }),
              (b.exports = b.exports)),
            b
          );
        },
        getDefUrl: function(a) {
          return a.url || (a.url = t.checkToAddJsExt(a.require.toUrl(a.id)));
        },
        extractCfg: function(a) {
          function b(b, c) {
            var g, i, k, l, m, n;
            for (var o in b)
              (k = b[o]),
                (m = a),
                (l = h(f(k.id || k.name || o))),
                (g = l.resourceId),
                (i = l.pluginId),
                i &&
                  ((m = e[i]),
                  m ||
                    ((m = e[i] = j(a)),
                    (m.pathMap = j(a.pathMap)),
                    (m.pathList = [])),
                  delete b[o]),
                (n = c ? d(k) : { path: f(k) }),
                (n.specificity = g.split("/").length),
                g
                  ? ((m.pathMap[g] = n), m.pathList.push(g))
                  : (m.baseUrl = t.resolveUrl(k, a));
          }
          function c(a) {
            var b = a.pathMap;
            (a.pathRx = new RegExp(
              "^(" +
                a.pathList
                  .sort(function(a, c) {
                    return b[a].specificity < b[c].specificity;
                  })
                  .join("|")
                  .replace(/\//g, "\\/") +
                ")(?=\\/|$)"
            )),
              delete a.pathList;
          }
          var e;
          (a.baseUrl = a.baseUrl || ""),
            (a.pluginPath = "pluginPath" in a ? a.pluginPath : "curl/plugin"),
            (a.pathMap = {}),
            (e = a.plugins = a.plugins || {}),
            (a.pathList = []),
            b(a.paths, !1),
            b(a.packages, !0);
          for (var g in e) {
            var i = e[g].pathList;
            i && ((e[g].pathList = i.concat(a.pathList)), c(e[g]));
          }
          return c(a), a;
        },
        checkPreloads: function(a) {
          var b;
          (b = a.preloads),
            b &&
              b.length > 0 &&
              m(G, function() {
                G = t.getDeps(t.createContext(a, q, b, !0));
              });
        },
        resolvePathInfo: function(a, b, c) {
          var d, f, g, h, i;
          return (
            (d = b.pathMap),
            c &&
              b.pluginPath &&
              a.indexOf("/") < 0 &&
              !(a in d) &&
              (a = e(b.pluginPath, a)),
            (g = I.test(a)
              ? a
              : a.replace(b.pathRx, function(b) {
                  return (
                    (f = d[b] || {}),
                    (i = !0),
                    (h = f.config),
                    f.main && b == a ? f.main : f.path || ""
                  );
                })),
            { path: g, config: h || v, url: t.resolveUrl(g, b) }
          );
        },
        resolveUrl: function(a, b) {
          var c = b.baseUrl;
          return c && !I.test(a) ? e(c, a) : a;
        },
        checkToAddJsExt: function(a) {
          return a + (H.test(a) ? "" : ".js");
        },
        loadScript: function(b, c, d) {
          function e(d) {
            (d = d || a.event),
              ("load" == d.type || C[g.readyState]) &&
                (delete B[b.id],
                (g.onload = g.onreadystatechange = g.onerror = ""),
                c());
          }
          function f(a) {
            d(new Error("Syntax or http error: " + b.url));
          }
          var g = w.createElement("script");
          (g.onload = g.onreadystatechange = e),
            (g.onerror = f),
            (g.charset = "utf-8"),
            (g.async = !0),
            (g.src = b.url),
            (B[b.id] = g),
            x.insertBefore(g, y);
        },
        extractCjsDeps: function(a) {
          var b,
            c,
            d = [];
          return (
            (b =
              "string" == typeof a
                ? a
                : a.toSource
                ? a.toSource()
                : a.toString()),
            b.replace(K, "").replace(L, function(a, b, e) {
              return e ? (c = c == e ? q : c) : c || d.push(b), "";
            }),
            d
          );
        },
        fixArgs: function(a) {
          var b, d, e, f, g, h;
          return (
            (g = a.length),
            (e = a[g - 1]),
            (f = c(e, "Function") ? e.length : -1),
            2 == g
              ? c(a[0], "Array")
                ? (d = a[0])
                : (b = a[0])
              : 3 == g && ((b = a[0]), (d = a[1])),
            !d &&
              f > 0 &&
              ((h = !0),
              (d = ["require", "exports", "module"]
                .slice(0, f)
                .concat(t.extractCjsDeps(e)))),
            {
              id: b,
              deps: d || [],
              res:
                f >= 0
                  ? e
                  : function() {
                      return e;
                    },
              cjs: h
            }
          );
        },
        executeDefFunc: function(a) {
          var b, c;
          return (
            (c = a.cjs ? a.exports : q),
            (b = a.res.apply(c, a.deps)),
            b === q &&
              a.exports &&
              (b = a.module ? (a.exports = a.module.exports) : a.exports),
            b
          );
        },
        defineResource: function(a, b) {
          m(a.isPreload || G, function() {
            (a.res = b.res),
              (a.cjs = b.cjs),
              (a.depNames = b.deps),
              t.getDeps(a);
          });
        },
        getDeps: function(a) {
          function b(a, b, c) {
            (h[b] = a), c && k(a, b);
          }
          function c(b, c) {
            var d, e, f, g;
            (d = n(1, function(a) {
              e(a), o(a, c);
            })),
              (e = n(1, function(a) {
                k(a, c);
              })),
              (f = t.fetchDep(b, a)),
              (g = l(f) && f.exports),
              g && e(g),
              m(
                f,
                d,
                a.reject,
                a.exports &&
                  function(a) {
                    f.exports &&
                      (a == z ? e(f.exports) : a == A && d(f.exports));
                  }
              );
          }
          function d() {
            a.resolve(h);
          }
          function e() {
            a.exportsReady && a.exportsReady(h);
          }
          var f, g, h, i, j, k, o;
          for (
            h = [],
              g = a.depNames,
              i = g.length,
              0 == g.length && d(),
              k = n(i, b, e),
              o = n(i, b, d),
              f = 0;
            i > f;
            f++
          )
            (j = g[f]),
              j in s
                ? (o(s[j](a), f, !0), a.exports && a.progress(z))
                : j
                ? c(j, f)
                : o(q, f, !0);
          return a;
        },
        fetchResDef: function(a) {
          return (
            t.getDefUrl(a),
            t.loadScript(
              a,
              function() {
                var b = r;
                (r = q),
                  a.useNet !== !1 &&
                    (!b || b.ex
                      ? a.reject(
                          new Error(
                            (
                              (b && b.ex) ||
                              "define() missing or duplicated: url"
                            ).replace("url", a.url)
                          )
                        )
                      : t.defineResource(a, b));
              },
              a.reject
            ),
            a
          );
        },
        fetchDep: function(a, b) {
          var c, d, e, f, g, i, j, l, n, o;
          return (
            (c = b.toAbsId),
            (d = b.isPreload),
            (e = h(a)),
            (i = e.resourceId),
            (f = c(e.pluginId || i)),
            (j = t.resolvePathInfo(f, v, !!e.pluginId)),
            e.pluginId
              ? (g = f)
              : ((g = j.config.moduleLoader),
                g && ((i = f), (f = g), (j = t.resolvePathInfo(g, v)))),
            (l = F[f]),
            f in F ||
              ((l = F[f] = t.createResourceDef(
                j.config,
                f,
                d,
                e.pluginId ? j.path : q
              )),
              (l.url = t.checkToAddJsExt(j.url)),
              t.fetchResDef(l)),
            f == g &&
              ((n = new k()),
              (o = v.plugins[g] || v),
              m(
                l,
                function(a) {
                  var b, e, f;
                  if (
                    ((f = a.dynamic),
                    (i = "normalize" in a ? a.normalize(i, c, o) || "" : c(i)),
                    (e = g + "!" + i),
                    (b = F[e]),
                    !(e in F))
                  ) {
                    (b = t.createPluginDef(o, e, d, i)), f || (F[e] = b);
                    var h = function(a) {
                      b.resolve(a), f || (F[e] = a);
                    };
                    (h.resolve = h),
                      (h.reject = b.reject),
                      a.load(i, b.require, h, o);
                  }
                  n != b && m(b, n.resolve, n.reject, n.progress);
                },
                n.reject
              )),
            n || l
          );
        },
        getCurrentDefName: function() {
          var b;
          if (!c(a.opera, "Opera"))
            for (var d in B)
              if ("interactive" == B[d].readyState) {
                b = d;
                break;
              }
          return b;
        }
      }),
      (s = {
        require: t.getCjsRequire,
        exports: t.getCjsExports,
        module: t.getCjsModule
      }),
      !c(v, "Function"))
    ) {
      (v = t.extractCfg(v || {})), t.checkPreloads(v);
      var M, N, O;
      (M = v.apiName || "curl"),
        (N = v.apiContext || a),
        (N[M] = o),
        (F.curl = o),
        (O = a.define = function() {
          var a = t.fixArgs(arguments);
          p(a);
        }),
        (o.version = u),
        (O.amd = { plugins: !0, jQuery: !0, curl: u }),
        (F["curl/_privileged"] = {
          core: t,
          cache: F,
          cfg: v,
          _define: p,
          _curl: o,
          Promise: k
        });
    }
  })(this),
  (function(a, b) {
    function c() {
      for (p = !0, clearTimeout(i); (h = r.pop()); ) h();
      o && (b[l] = "complete");
      for (var a; (a = n.shift()); ) a();
    }
    function d() {
      if (!b.body) return !1;
      k || (k = b.createTextNode(""));
      try {
        return b.body.removeChild(b.body.appendChild(k)), (k = j), !0;
      } catch (a) {
        return !1;
      }
    }
    function e(a) {
      var e;
      return (e = m[b[l]] && d()), !p && e && c(), e;
    }
    function f() {
      e(), p || (i = setTimeout(f, q));
    }
    var g,
      h,
      i,
      j,
      k,
      l = "readyState",
      m = { loaded: 1, interactive: 1, complete: 1 },
      n = [],
      o = b && "string" != typeof b[l],
      p = !1,
      q = 10,
      r = [];
    (g =
      "addEventListener" in a
        ? function(a, b) {
            return (
              a.addEventListener(b, e, !1),
              function() {
                a.removeEventListener(b, e, !1);
              }
            );
          }
        : function(a, b) {
            return (
              a.attachEvent("on" + b, e),
              function() {
                a.detachEvent(b, e);
              }
            );
          }),
      b &&
        (e() ||
          ((r = [
            g(a, "load"),
            g(b, "readystatechange"),
            g(a, "DOMContentLoaded")
          ]),
          (i = setTimeout(f, q)))),
      define("curl/domReady", function() {
        function a(a) {
          p ? a() : n.push(a);
        }
        return (a.then = a), (a.amd = !0), a;
      });
  })(this, this.document),
  define("domReady", ["curl/domReady"], function(a) {
    return {
      load: function(b, c, d, e) {
        a(d);
      }
    };
  }),
  define("async", function() {
    return {
      load: function(a, b, c, d) {
        function e(a) {
          "function" == typeof c.resolve ? c.resolve(a) : c(a);
        }
        function f(a) {
          "function" == typeof c.reject && c.reject(a);
        }
        b([a], function(a) {
          "function" == typeof a.then
            ? a.then(function(b) {
                0 == arguments.length && (b = a), e(b);
              }, f)
            : e(a);
        });
      },
      analyze: function(a, b, c) {
        c(a);
      }
    };
  }),
  (function(a, b, c) {
    define("js", ["curl/_privileged"], function(a) {
      "use strict";
      function d(a, b) {
        return a.lastIndexOf(".") <= a.lastIndexOf("/") ? a + "." + b : a;
      }
      function e(b, d, e) {
        function f() {
          (j = !0),
            b.exports && (b.resolved = c(b.exports)),
            !b.exports || b.resolved ? d(k) : e();
        }
        function g(a) {
          (j = !0), e(a);
        }
        function h() {
          j || (i < new Date() ? e() : setTimeout(h, 10));
        }
        var i, j, k;
        (i = new Date().valueOf() + (b.timeoutMsec || 3e5)),
          e && b.exports && setTimeout(h, 10),
          (k = a.core.loadScript(b, f, g));
      }
      function f(a, b) {
        e(
          a,
          function() {
            var c = j.shift();
            (g = j.length > 0),
              c && f.apply(null, c),
              b.resolve(a.resolved || !0);
          },
          function(a) {
            b.reject(a);
          }
        );
      }
      var g,
        h,
        i = {},
        j = [],
        k = b && 1 == b.createElement("script").async;
      return {
        dynamic: !0,
        load: function(a, b, c, l) {
          var m, n, o, p, q, r;
          (m = a.indexOf("!order") > 0),
            (n = a.indexOf("!exports=")),
            (o = n > 0 && a.substr(n + 9)),
            (p = "prefetch" in l ? l.prefetch : !0),
            (a = m || n > 0 ? a.substr(0, a.indexOf("!")) : a),
            a in i
              ? c(i[a])
              : ((i[a] = h),
                (q = {
                  name: a,
                  url: b.toUrl(d(a, "js")),
                  order: m,
                  exports: o,
                  timeoutMsec: l.timeout
                }),
                (r = {
                  resolve: function(b) {
                    (i[a] = b), (c.resolve || c)(b);
                  },
                  reject:
                    c.reject ||
                    function(a) {
                      throw a;
                    }
                }),
                m && !k && g
                  ? (j.push([q, r]),
                    p &&
                      ((q.mimetype = "text/cache"),
                      e(
                        q,
                        function(a) {
                          a && a.parentNode.removeChild(a);
                        },
                        function() {}
                      ),
                      (q.mimetype = "")))
                  : ((g = g || m), f(q, r)));
        }
      };
    });
  })(this, this.document, function() {
    try {
      return eval(arguments[0]);
    } catch (ex) {
      return;
    }
  }),
  (function(a) {
    "use strict";
    function b(a) {
      return x[a];
    }
    function c(a, b) {
      var c = a.link;
      c[s] = c[t] = function() {
        (c.readyState && "complete" != c.readyState) ||
          ((x["event-link-onload"] = !0), k(a), b());
      };
    }
    function d(a, b) {
      return a.lastIndexOf(".") <= a.lastIndexOf("/") ? a + "." + b : a;
    }
    function e(a) {
      for (var b, c, d = a.split("!"), e = 1; (b = d[e++]); )
        (c = b.split("=", 2)), (d[c[0]] = 2 == c.length ? c[1] : !0);
      return d;
    }
    function f(a, b) {
      document.createStyleSheet &&
        (B || (B = document.createStyleSheet()),
        document.styleSheets.length >= 30 && l());
      var c = a[u]("link");
      return (
        (c.rel = "stylesheet"),
        (c.type = "text/css"),
        c.setAttribute("_curl_movable", !0),
        b && (c.href = b),
        c
      );
    }
    function g() {
      return (
        C || ((C = A[u]("div")), (C.id = "_cssx_load_test"), r.appendChild(C)),
        "-5px" == A.defaultView.getComputedStyle(C, null).marginTop
      );
    }
    function h(a) {
      var b,
        c,
        d = !1;
      try {
        (b = a.sheet || a.styleSheet),
          (c = b.cssRules || b.rules),
          (d = c ? c.length > 0 : c !== q),
          d &&
            "[object Chrome]" == {}.toString.call(window.chrome) &&
            (b.insertRule("#_cssx_load_test{margin-top:-5px;}", 0),
            (d = g()),
            b.deleteRule(0));
      } catch (e) {
        d =
          1e3 == e.code ||
          18 == e.code ||
          e.message.match(/security|denied|insecure/i);
      }
      return d;
    }
    function i(a, b) {
      h(a.link)
        ? (k(a), b())
        : v ||
          setTimeout(function() {
            i(a, b);
          }, a.wait);
    }
    function j(a, d) {
      function e() {
        f || ((f = !0), d());
      }
      var f;
      c(a, e), b("event-link-onload") || i(a, e);
    }
    function k(a) {
      var b = a.link;
      b[s] = b[t] = null;
    }
    function l() {
      var a,
        b,
        c,
        d = 0;
      for (
        c = B, B = null, b = document.getElementsByTagName("link");
        (a = b[d]);

      )
        a.getAttribute("_curl_movable")
          ? (c.addImport(a.href), a.parentNode && a.parentNode.removeChild(a))
          : d++;
    }
    function m(a, b) {
      return a.replace(z, function(a, c) {
        return 'url("' + n(c, b) + '")';
      });
    }
    function n(a, b) {
      return y.test(a) || (a = b + a), a;
    }
    function o(a) {
      return (
        clearTimeout(o.debouncer),
        o.accum
          ? o.accum.push(a)
          : ((o.accum = [a]),
            (D = A.createStyleSheet
              ? A.createStyleSheet()
              : r.appendChild(A.createElement("style")))),
        (o.debouncer = setTimeout(function() {
          var a, b;
          (a = D),
            (D = q),
            (b = o.accum.join("\n")),
            (o.accum = q),
            (b = b.replace(/.+charset[^;]+;/g, "")),
            "cssText" in a
              ? (a.cssText = b)
              : a.appendChild(A.createTextNode(b));
        }, 0)),
        D
      );
    }
    function p(a) {
      return {
        cssRules: function() {
          return a.cssRules || a.rules;
        },
        insertRule:
          a.insertRule ||
          function(b, c) {
            var d = b.split(/\{|\}/g);
            return a.addRule(d[0], d[1], c), c;
          },
        deleteRule:
          a.deleteRule ||
          function(b) {
            return a.removeRule(b), b;
          },
        sheet: function() {
          return a;
        }
      };
    }
    var q,
      r,
      s = "onreadystatechange",
      t = "onload",
      u = "createElement",
      v = !1,
      w = {},
      x = {},
      y = /^\/|^[^:]*:\/\//,
      z = /url\s*\(['"]?([^'"\)]*)['"]?\)/g,
      A = a.document;
    A && (r = A.head || (A.head = A.getElementsByTagName("head")[0]));
    var B, C, D;
    define("css", {
      normalize: function(a, b) {
        var c, d;
        if (!a) return a;
        (c = a.split(",")), (d = []);
        for (var e = 0, f = c.length; f > e; e++) d.push(b(c[e]));
        return d.join(",");
      },
      load: function(a, b, c, g) {
        function h() {
          0 == --k &&
            setTimeout(function() {
              c(p(u.sheet || u.styleSheet));
            }, 0);
        }
        var i = (a || "").split(","),
          k = i.length;
        if (a)
          for (var l, n = i.length - 1; n >= 0; n--, l = !0) {
            a = i[n];
            var q = e(a),
              s = q.shift(),
              t = b.toUrl(d(s, "css")),
              u = f(A),
              v = "nowait" in q ? "false" != q.nowait : !!g.cssDeferLoad,
              x = { link: u, url: t, wait: g.cssWatchPeriod || 50 };
            v ? c(p(u.sheet || u.styleSheet)) : j(x, h),
              (u.href = t),
              l ? r.insertBefore(u, w[l].previousSibling) : r.appendChild(u),
              (w[t] = u);
          }
        else
          c({
            translateUrls: function(a, c) {
              var d;
              return (
                (d = b.toUrl(c)),
                (d = d.substr(0, d.lastIndexOf("/") + 1)),
                m(a, d)
              );
            },
            injectStyle: function(a) {
              return o(a);
            },
            proxySheet: function(a) {
              return a.sheet && (a = a.sheet), p(a);
            }
          });
      },
      "plugin-builder": "./builder/css"
    });
  })(this),
  define("jq", ["js"], function() {
    return {
      load: function(a, b, c, d) {
        function e(a) {
          "undefined" == typeof a.expr[":"].focus &&
            (a.expr[":"].focus = function(a) {
              return a === document.activeElement && (a.type || a.href);
            }),
            "function" == typeof c.resolve ? c.resolve(a) : c(a);
        }
        function f(a) {
          "function" == typeof c.reject && c.reject(a);
        }
        return "undefined" != typeof jQuery
          ? void e(jQuery)
          : ((a = "js!" + a),
            void b([a], function(a) {
              "undefined" != typeof jQuery
                ? e(jQuery)
                : f("jQuery NOT defined!");
            }));
      }
    };
  }),
  define("text", function() {
    function a() {
      if ("undefined" != typeof XMLHttpRequest)
        a = function() {
          return new XMLHttpRequest();
        };
      else
        for (
          var b = (a = function() {
            throw new Error("getXhr(): XMLHttpRequest not available");
          });
          d.length > 0 && a === b;

        )
          (function(b) {
            try {
              new ActiveXObject(b),
                (a = function() {
                  return new ActiveXObject(b);
                });
            } catch (c) {}
          })(d.shift());
      return a();
    }
    function b(b, c, d) {
      var e = a();
      e.open("GET", b, !0),
        (e.onreadystatechange = function(a) {
          4 === e.readyState &&
            (e.status < 400
              ? c(e.responseText)
              : d(new Error("fetchText() failed. status: " + e.statusText)));
        }),
        e.send(null);
    }
    function c(a) {
      throw a;
    }
    var d = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"];
    return {
      load: function(a, d, e, f) {
        var g = e.resolve || e,
          h = e.reject || c;
        b(d.toUrl(a), g, h);
      },
      "plugin-builder": "./builder/text"
    };
  }),
  define("i18n", ["curl"], function(a) {
    return {
      load: function(b, c, d, e) {
        function f(a) {
          "function" == typeof d.resolve ? d.resolve(a) : d(a);
        }
        function g(a) {
          "function" == typeof d.reject && d.reject(a);
        }
        function h(a, c) {
          k.length > 1 && "object" == typeof c && i(c, a),
            "undefined" != typeof a ? f(a) : g("i18n failed on " + b);
        }
        function i(a, b) {
          if ("undefined" != typeof a && "undefined" != typeof b)
            for (var c in a)
              if ("undefined" != typeof c && a.hasOwnProperty(c)) {
                var d = a[c];
                if ("Object" === d.constructor.name) {
                  var e = b[c];
                  "undefined" == typeof e && (e = {}), i(d, e);
                } else b[c] = a[c];
              }
        }
        function j() {
          k.length > 1
            ? (k.pop(), a(k).then(h, j))
            : g("i18n cannot find " + b);
        }
        var k = [b];
        if ("en" != $sf.culture) {
          var l = b.lastIndexOf("/");
          k.push(b.substr(0, l) + "/" + $sf.culture + "/" + b.substr(l + 1));
        }
        a(k).then(h, j);
      }
    };
  }),
  ($sf.util.Base64 = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = "",
        j = 0;
      for (a = $sf.util.Base64._utf8_encode(a); j < a.length; )
        (b = a.charCodeAt(j++)),
          (c = a.charCodeAt(j++)),
          (d = a.charCodeAt(j++)),
          (e = b >> 2),
          (f = ((3 & b) << 4) | (c >> 4)),
          (g = ((15 & c) << 2) | (d >> 6)),
          (h = 63 & d),
          isNaN(c) ? (g = h = 64) : isNaN(d) && (h = 64),
          (i =
            i +
            this._keyStr.charAt(e) +
            this._keyStr.charAt(f) +
            this._keyStr.charAt(g) +
            this._keyStr.charAt(h));
      return i;
    },
    decode: function(a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = "",
        j = 0;
      for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); j < a.length; )
        (e = this._keyStr.indexOf(a.charAt(j++))),
          (f = this._keyStr.indexOf(a.charAt(j++))),
          (g = this._keyStr.indexOf(a.charAt(j++))),
          (h = this._keyStr.indexOf(a.charAt(j++))),
          (b = (e << 2) | (f >> 4)),
          (c = ((15 & f) << 4) | (g >> 2)),
          (d = ((3 & g) << 6) | h),
          (i += String.fromCharCode(b)),
          64 != g && (i += String.fromCharCode(c)),
          64 != h && (i += String.fromCharCode(d));
      return (i = $sf.util.Base64._utf8_decode(i));
    },
    _utf8_encode: function(a) {
      a = a.replace(/\r\n/g, "\n");
      for (var b = "", c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        128 > d
          ? (b += String.fromCharCode(d))
          : d > 127 && 2048 > d
          ? ((b += String.fromCharCode((d >> 6) | 192)),
            (b += String.fromCharCode((63 & d) | 128)))
          : ((b += String.fromCharCode((d >> 12) | 224)),
            (b += String.fromCharCode(((d >> 6) & 63) | 128)),
            (b += String.fromCharCode((63 & d) | 128)));
      }
      return b;
    },
    _utf8_decode: function(a) {
      for (var b = "", c = 0, d = (c1 = c2 = 0); c < a.length; )
        (d = a.charCodeAt(c)),
          128 > d
            ? ((b += String.fromCharCode(d)), c++)
            : d > 191 && 224 > d
            ? ((c2 = a.charCodeAt(c + 1)),
              (b += String.fromCharCode(((31 & d) << 6) | (63 & c2))),
              (c += 2))
            : ((c2 = a.charCodeAt(c + 1)),
              (c3 = a.charCodeAt(c + 2)),
              (b += String.fromCharCode(
                ((15 & d) << 12) | ((63 & c2) << 6) | (63 & c3)
              )),
              (c += 3));
      return b;
    }
  }),
  define("sf.curl.extend", ["curl/_privileged", "js"], function(a) {
    ($sf.version = "?"), ($sf.appid = "?");
    var b = a.core.resolvePathInfo,
      c = "string" == typeof $sf.require.local;
    a.core.resolvePathInfo = function(d, e) {
      var f,
        g = (d in a.cache, /^(starfield|duel)\/([^\s]*.?)/i.exec(d));
      if (g && g.length >= 3) {
        var h = g[2];
        if ($sf.loader >= 2 && !c) {
          var i = $sf.bundle[h];
          "undefined" != typeof i && (h = i);
        }
        var j = h.split("/"),
          k = "/",
          l = h.lastIndexOf("."),
          m = l > 0 ? h.substr(l) : "";
        ".js" != m && ".css" != m && ".pkg" != m && ((m = ""), (l = -1));
        var n = l > 0 ? h.substr(0, l) : h;
        1 == j.length &&
          ((k = "/" + n + "/"), ".css" == m && (h = $sf.theme + ".css")),
          (f = {
            config: e,
            url:
              (c
                ? $sf.require.local
                : ".css" == m
                ? $sf.require.css_root
                : $sf.require.js_root) +
              k +
              h
          }),
          "jquery.mod" == h && (f.url = $sf.require.jquery);
      } else f = b.apply(this, arguments);
      return f;
    };
  }),
  define("starfield/sf.util", [], function() {
    function a() {
      function a(a) {
        if ("static" == a.css("position")) return 0;
        var b = Number(a.css("zIndex"));
        return isNaN(b) && (b = 0), b;
      }
      function b(c, d, e) {
        if (((d = isNaN(d) ? 0 : d), 0 === c.length)) return d;
        var f = "body" != c.get(0).tagName.toLowerCase();
        if (c && c.length > 0 && f) {
          var g = a(c);
          if ((g > d && (d = g), 0 === d || (e && f)))
            return b(c.parent(), d, e);
        }
        return d;
      }
      function c(b) {
        var d = b.parent();
        if (0 === d.length) return null;
        var e = "body" !== d.get(0).tagName.toLowerCase(),
          f = "fixed" !== d.css("position").toLowerCase();
        if (d && d.length > 0 && e && f) {
          var g = a(d);
          if (0 === g) return c(d.parent());
        }
        return d;
      }
      function d(b) {
        var c =
            "undefined" != typeof b
              ? b.children(":visible")
              : $sf.util.ua.ie
              ? $("body *")
              : $("*:visible"),
          d = 0;
        return (
          c.each(function(b, c) {
            var e = $(c),
              f = a(e);
            f > d && (d = f);
          }),
          d
        );
      }
      function e(a) {
        var b = null;
        return (
          a.parentsUntil("body").each(function() {
            return "fixed" ===
              $(this)
                .css("position")
                .toLowerCase()
              ? ((b = $(this)), !1)
              : void 0;
          }),
          b
        );
      }
      function f(a, b, c) {
        var d = "page dialog flyout abstop";
        a = "undefined" == typeof a && d.indexOf(a) > -1 ? "page" : a;
        var e = "undefined" == typeof c || null === c ? b : g(c);
        e = null === e ? b : e;
        var f = e.attr("data-sflayerdeep") || "";
        f = ("" !== f ? f + "-" : "") + a;
        var h = "sflayer-" + f;
        if (0 === $("#" + h, b).length) {
          $("<div />")
            .addClass("sflayer sflayer-" + a)
            .attr({ "data-sflayer": a, "data-sflayerdeep": f, id: h })
            .appendTo(e);
        }
        return $("#" + h, b);
      }
      function g(a, b) {
        "jquery" in a || (a = $(a));
        var c = a.parents(".sflayer");
        return b === !0
          ? c.length > 0
            ? c.eq(0).attr("data-sflayer")
            : "page"
          : c.length > 0
          ? c.eq(0)
          : null;
      }
      return {
        get: function(a) {
          return b(a, 0, !1);
        },
        getTop: function(a) {
          return b(a, 0, !0);
        },
        getAssigned: a,
        getParent: c,
        getStackingParent: e,
        max: d,
        getLayer: f,
        getLayerForElement: g,
        maxForLayer: function(a) {
          return d(a);
        }
      };
    }
    function b(a, b) {
      var c = "string" == typeof a && a.length > 0 ? a + ": " : "",
        d = "undefined" != typeof window.console;
      b = "string" == typeof b && 0 === b.length ? void 0 : b;
      var e =
          ("string" == typeof b &&
            window.location.href.indexOf(b + "=true") > -1) ||
          "string" != typeof b,
        f = $sf.util.ua.ie && $sf.util.ua.major <= 7;
      return {
        log: function(a) {
          e &&
            (f ? alert(c + ": " + a) : d && console.log && console.log(c + a));
        },
        dir: function(a) {
          e && (f ? alert(JSON.parse(a)) : d && console.dir && console.dir(a));
        }
      };
    }
    function c(a, b) {
      function c() {
        if (!f) {
          var c = $("iframe", b.document);
          c.each(function() {
            this.contentWindow === a && (f = $(this));
          });
        }
        return f;
      }
      function d(d, e) {
        var f = d.offset();
        if (b !== a) {
          var g = c().offset(),
            h = "boolean" == typeof e ? e : "fixed" === d.css("position");
          (f.top = Math.ceil(
            f.top + g.top - (h ? $(b).scrollTop() : $(a).scrollTop())
          )),
            (f.left = Math.ceil(
              f.left + g.left - (h ? $(b).scrollLeft() : $(a).scrollLeft())
            ));
        }
        return f;
      }
      function e(e, f) {
        var g = d(e, f),
          h = b !== a,
          i = h ? c() : b,
          j = h ? i.offset() : { top: 0, left: 0 };
        (g.top += h ? $(a).scrollTop() : 0),
          (g.left += h ? $(a).scrollLeft() : 0),
          (g.right = Math.ceil(g.left + e.outerWidth())),
          (g.bottom = Math.ceil(g.top + e.outerHeight())),
          (j.left += $(a).scrollLeft()),
          (j.top += $(a).scrollTop()),
          (j.right = Math.ceil(j.left + $(i).width())),
          (j.bottom = Math.ceil(j.top + $(i).height()));
        var k =
          g.left >= j.left &&
          g.right <= j.right &&
          g.top >= j.top &&
          g.bottom <= j.bottom;
        return k;
      }
      var f = null;
      return {
        isSingle: function() {
          return b === a;
        },
        ext: {
          iframe: c,
          offset: d,
          window: function() {
            return b;
          },
          document: function() {
            return b.document;
          },
          body: function() {
            return b.document.body;
          }
        },
        intr: {
          isInBounds: e,
          window: function() {
            return a;
          },
          document: function() {
            return a.document;
          },
          body: function() {
            return a.document.body;
          }
        }
      };
    }
    function d() {
      function a() {
        if (null === d || 0 === d.major)
          if ("undefined" != typeof window.$) {
            var a = $(document).jquery,
              b = a.split("."),
              c = b.length >= 1 ? parseInt(b[0]) : 0;
            NaN === c && (c = 0);
            var e = b.length >= 2 ? parseInt(b[1]) : 0;
            NaN === e && (e = 0);
            var f = b.length >= 3 ? parseInt(b[2]) : 0;
            NaN === f && (f = 0);
            var g = 1e4 * c + 100 * e + f;
            d = { major: c, minor: e, sub: f, text: a, compare: g };
          } else d = { major: 0, minor: 0, sub: 0, text: "0", compare: 0 };
        return d;
      }
      function b(b, c) {
        var d = a();
        return d.compare >= 10600 ? b.is(c) : b.filter(c).length > 0;
      }
      function c(b, c) {
        var d = a();
        return d.compare >= 10600 ? b.find(c) : c.parents().filter(b);
      }
      var d = null;
      return { version: a, findEl: c, isEl: b };
    }
    "undefined" == typeof $sf.util && ($sf.util = {}),
      ($sf.util.zIndex = a()),
      ($sf.util.logger = b),
      ($sf.util.context = c),
      ($sf.util.jCompat = d());
  }),
  define("starfield/sf.module", ["jq!starfield/jquery.mod"], function() {
    $sf.util.module = function(a, b) {
      return (function(c) {
        function d(a, d, e) {
          var f = this;
          for (var g in b)
            if (b.hasOwnProperty(g)) {
              var h = b[g];
              c.isPlainObject(h)
                ? (f[g] = c.extend(!0, {}, f[g], h))
                : c.isArray(h) && (f[g] = c.merge([], h));
            }
          (f.options = c.extend(!0, {}, f.options, d)),
            (f.id = e),
            (f.element = a),
            f._create(),
            f._init();
        }
        var e = "sf" + a,
          f = "sf-" + a.toLowerCase();
        if (
          ($sf || ($sf = {}),
          $sf.modules || ($sf.modules = {}),
          $sf.modules.instances || ($sf.modules.instances = {}),
          $sf.modules.ids || ($sf.modules.ids = {}),
          !$sf.modules.base)
        ) {
          $sf.modules.base = function(a, b) {
            return (
              (this.baseClass = b),
              (this.pluginName = a),
              (this.options.logFlag = "duel"),
              this
            );
          };
          var g = {
            options: {},
            _create: function() {},
            _init: function() {},
            destroy: function(a) {
              var b = this.id,
                d = this.pluginName;
              delete $sf.modules.instances[d][b],
                ($sf.modules.ids[d] = c.grep($sf.modules.ids[d], function(a) {
                  return a.id != b;
                })),
                c.isFunction(a) && a();
            },
            _siblings: function() {
              var a = this.id,
                b = this.pluginName,
                d = c.map($sf.modules.ids[b], function(c) {
                  return c === a ? null : $sf.modules.instances[b][c].module;
                });
              return d;
            },
            _log: function(a) {
              window.location.href.indexOf(this.options.logFlag + "=") > -1 &&
                ($sf.util.ua.ie && $sf.util.ua.major <= 7
                  ? alert(this.id + ": " + a)
                  : window.console &&
                    console.log &&
                    console.log(this.id + ": " + a));
            },
            _dir: function(a, b) {
              window.location.href.indexOf(this.options.logFlag + "=") > -1 &&
                ("string" == typeof b && b.length > 0 && this._log(b),
                $sf.util.ua.ie && $sf.util.ua.major <= 7
                  ? alert(JSON.parse(a))
                  : window.console && console.dir && console.dir(a));
            },
            _initElementId: function(a, b) {
              var c = a.attr("id");
              (null == c || 0 == c.length) &&
                ((c = this._generateId(b)), a.attr("id", c));
            },
            _generateId: function(a) {
              return (
                (a = a ? a : this.baseClass.toLowerCase()),
                a + "-" + Math.round(65535 * Math.random())
              );
            }
          };
          c.extend(!0, $sf.modules.base.prototype, g),
            ($sf.modules.base.prototype._super = $sf.modules.base.prototype),
            ($sf.modules.base.prototype._execSuper = function(a) {
              var b = [];
              if (arguments.length > 1)
                for (var c = 1; c < arguments.length; c++) b.push(arguments[c]);
              this._super[a].apply(this, b);
            });
        }
        ($sf.modules[e] = d),
          (d.prototype = new $sf.modules.base(e, f)),
          (d.prototype.constructor = d),
          (d.constructor = $sf.modules.base),
          c.extend(!0, d.prototype, b);
        var h = (c.fn[e] = function(a, b) {
          var f = "create";
          (a = "undefined" == typeof a ? {} : a),
            a.constructor === String && ((f = a), (a = b));
          var g = {
            initInstance: function(a) {
              var b = c(a),
                d = b.attr("id");
              (null == d || 0 == d.length) &&
                ((d = e.toLowerCase() + Math.round(65535 * Math.random())),
                b.attr("id", d));
              var f = ($sf.modules.instances[e][d] = {});
              return $sf.modules.ids[e].push(d), (f.me = b), (f.meId = d), d;
            },
            initPlugin: function(a, b, f, h) {
              var i = function() {
                (b = g.initInstance(f)),
                  ($sf.modules.instances[e][b].module = new d(c(f), h, b));
              };
              if (a && a.module) {
                var j = a.module;
                j.supportLegacyOptions === !0 ? j._init(h) : j.destroy(i);
              } else i();
            },
            getOrDo: function(b, d, e) {
              if (d && d.module) {
                var f = d.module;
                if ("option" === b || "options" === b) {
                  var i = f.options[a];
                  return (
                    c.isPlainObject(i) && (i = c.extend(!0, {}, i)), (h = i), !1
                  );
                }
                if ("_" !== b.slice(0, 1) && c.isFunction(f[b])) {
                  var j = !1;
                  return (
                    c.isArray(a) || (a = [a]),
                    (j = f[b].apply(f, a)),
                    "undefined" != typeof j && (h = j),
                    !1
                  );
                }
                g.log("invalid command/property: " + b);
              } else
                g.log("couldn't find instance for [" + e + "] to execute " + b);
            },
            log: function(a) {
              $sf.util.logger("module", "duel").log(a);
            },
            dir: function(a) {
              $sf.util.logger("module", "duel").dir(a);
            }
          };
          $sf.modules.instances[e] || ($sf.modules.instances[e] = {}),
            $sf.modules.ids[e] || ($sf.modules.ids[e] = []);
          var h = this;
          return (
            this.each(function(b) {
              var d = c(this).attr("id"),
                h = $sf.modules.instances[e][d];
              if ("create" === f) g.initPlugin(h, d, this, a);
              else if ("destroy" === f) h && h.module && h.module.destroy();
              else if (h && h.module) {
                if ((h.module._init(), !g.getOrDo(f, h, d))) return !1;
              } else
                g.log("couldn't find instance for [" + d + "] to execute " + f);
            }),
            h
          );
        });
        return h;
      })($sf.getjQuery());
    };
  }),
  define("starfield/sf.position", [], function() {
    function a(a) {
      function c(a) {
        (a.t = a.t ? a.t : Math.floor(a.top - (r.t - p.top))),
          (a.l = a.l ? a.l : Math.floor(a.left - (r.l - p.left))),
          (a.w = a.w ? a.w : Math.floor(t.outerWidth())),
          (a.h = a.h ? a.h : Math.floor(t.outerHeight())),
          (a.width = function() {
            return a.w;
          }),
          (a.height = function() {
            return a.h;
          }),
          (a.r = a.l + a.w),
          (a.b = a.t + a.h),
          (a.hh = Math.floor(a.h / 2)),
          (a.m = a.t + a.hh),
          (a.mt = a.m - Math.floor(s.height / 2)),
          (a.mb = a.m + Math.floor(s.height / 2)),
          (a.hw = Math.floor(a.w / 2)),
          (a.mc = a.m),
          (a.c = a.l + a.hw),
          (a.cl = a.c - Math.floor(s.width / 2)),
          (a.cr = a.c + Math.floor(s.width / 2)),
          (a.so = function(b) {
            return a[b] + r.scrollOffset(b);
          });
      }
      function d(a, b, c, d) {
        var e = a.replace("m", "").replace("c", ""),
          f = y.get(e),
          g = y.direction(e),
          i = 1 === d ? 1 : -1,
          j = "tb".indexOf(e) > -1 ? "height" : "width",
          k = s[j] + c[j](b, a) * i,
          l = u[e] + r.scrollOffset(e);
        k = a.length > 1 ? Math.floor(k / 2) : k;
        var m = f.name,
          n = h(
            "x" === m ? f.v : y.opposite(e).v,
            "y" === m ? f.v : y.opposite(e).v,
            m
          ),
          o = Math.floor(l + k * g + n);
        return o;
      }
      function e(a, b) {
        return function() {
          a._values = a._values || {};
          var c = "";
          if (void 0 === b || 0 === b.length)
            c = Array.prototype.join.call(arguments, "-");
          else
            for (var d = 0, e = b.length; e > d; d++)
              (c += arguments[b[d]]), e - 1 > d && (c += "-");
          return void 0 !== a._values[c]
            ? a._values[c]
            : (a._values[c] = a.apply(a, arguments));
        };
      }
      function f(a, b, c) {
        c = "undefined" == typeof c ? !0 : c;
        var d = y.movementAxis(a),
          e = y.getOpp(a, b);
        (e.y = y.get(e.y).res(e.y)), (e.x = y.get(e.x).res(e.x));
        var f = e.y + e.x,
          g = function(a) {
            return B(a, f, z, d, c);
          },
          h = function(a) {
            return B(a, f, A, d);
          },
          i = "ufc".indexOf(a) > -1 ? h(e.y) : g(e.y),
          j = "ufc".indexOf(a) > -1 ? g(e.x) : h(e.x);
        return (y.tries[a + b] = { y: i, x: j }), i && j;
      }
      function g(a, b, c) {
        var d = f(a, b, c);
        return d && ((x.v = a), (w.v = b)), d;
      }
      function h(b, c, d, e) {
        function f(a) {
          var b = 0,
            c = y.get(a),
            d = c.res(a),
            f = y.direction(d),
            g = r[d],
            h = -1 === f ? e : e + s["x" === c.name ? "width" : "height"] * f;
          return (-1 === f ? g * f > h : h > g * f) && (b = g - h), b;
        }
        var g = 0;
        return (
          a.centerAgainstAnchor === !0
            ? (g =
                "x" === d
                  ? "fu".indexOf(c) > -1 && "lr".indexOf(b) > -1
                    ? u.hw * ("r" === b ? -1 : 1)
                    : 0
                  : "lr".indexOf(b) > -1 && "tb".indexOf(c) > -1
                  ? u.hh * ("b" === c ? -1 : 1)
                  : 0)
            : a.slideAgainstAnchor === !0 &&
              "undefined" != typeof e &&
              (g =
                "x" === d && b === w.mid
                  ? f("l") + f("r")
                  : "y" === d && c === x.mid
                  ? f("t") + f("b")
                  : f("x" === d ? w.opp(b) : x.opp(c))),
          g
        );
      }
      function i(b) {
        b = 1 !== b ? 0 : b;
        for (
          var c = 0 === b,
            d = g(x.v, w.v, c),
            e = !(
              (!y.tries[x.v + w.v].y && y.direction(x.v) < 0) ||
              (!y.tries[x.v + w.v].x && y.direction(w.v) > 0)
            ),
            f = a.forceIdeal
              ? { y: x.v, x: w.v }
              : y.getNeighbor(x.v, w.v, e, a.path),
            h = 1;
          !d && 12 > h && f.y + f.x !== x.ideal + w.ideal;

        )
          (d = g(f.y, f.x, c)),
            h++,
            !d &&
              12 > h &&
              ("clock" === a.path &&
                6 === h &&
                ((e = !e), (f.y = x.ideal), (f.x = w.ideal)),
              (f = y.getNeighbor(f.y, f.x, e, a.path)));
        if (!d)
          if (0 === b) i(1);
          else {
            var k = u.w > s.width || u.h > s.height,
              l = a.fallbackOnFailPosition;
            (l = k ? l : "ideal"),
              "ideal" !== l &&
                ((l = "auto" === l ? "center viewport" : l),
                x.v + w.v !== "mc" &&
                  ((w.v = "c"), (x.v = "m"), "center viewport" === l && j()));
          }
        return d;
      }
      function j() {
        (o = l.containerOffset),
          (p = l.anchorOffset),
          (u = $.extend(!0, { top: r.t, left: r.l }, r)),
          c(u),
          (a.forceIdeal = !0),
          (n = "mc"),
          (a.centerAgainstAnchor = !1),
          (a.slideAgainstAnchor = !1),
          i();
      }
      function k(a) {
        var b = "x" === a ? "left" : "top",
          c = b + "Adj",
          d = y.get(a);
        C[c] = h(w.v, x.v, a, C[b]);
        var e =
          Math.abs(C[c]) - Math.abs(s[d.dimension] / (d.mid === d.v ? 2 : 1));
        e > 0 && (C[c] += e * (C[c] > 0 ? -1 : 1)), (C[b] += C[c]);
      }
      var l = {
        anchor: void 0,
        container: void 0,
        ideal: "tl",
        anchorOffset: { top: 0, left: 0 },
        containerOffset: {
          width: function(a) {
            return 0;
          },
          height: function(a) {
            return 0;
          }
        },
        forceIdeal: !1,
        centerAgainstAnchor: !1,
        slideAgainstAnchor: !1,
        context: self,
        viewPort: void 0,
        fallbackOnFailPosition: "auto",
        path: "clock",
        sticky: !1
      };
      a = $.extend(!0, l, a);
      var m = a.container,
        n = "l" === a.ideal.substr(0, 1) ? "f" + a.ideal.substr(1) : a.ideal,
        o = a.containerOffset,
        p = a.anchorOffset,
        q = "undefined" != typeof a.viewPort ? a.viewPort : b(a.context),
        r = {
          t: q.top,
          b: q.bottom,
          l: q.left,
          r: q.right,
          w: q.width,
          h: q.height,
          scrollOffset: function(a) {
            return "lrc".indexOf(a) > -1 ? r.l : r.t;
          }
        },
        s = {
          el: m,
          width: m.outerWidth(!0),
          height: m.outerHeight(!0),
          fixedPos: "fixed" === m.css("position")
        },
        t = a.anchor,
        u = t.offset();
      c(u);
      var v =
          "m" === n.substr(0, 1) || "c" === n.substr(1, 1)
            ? "cross"
            : "corners",
        w = {
          name: "x",
          v: n.substr(1, 1),
          ideal: n.substr(1, 1),
          mid: "c",
          rel: ["lr"],
          res: function(a) {
            return a;
          },
          opp: function(a) {
            return (a = a ? a : w.v), a === w.mid ? a : w.rel[0].replace(a, "");
          },
          dimension: "width"
        },
        x = {
          name: "y",
          v: n.substr(0, 1),
          ideal: n.substr(0, 1),
          mid: "m",
          rel: ["tb", "fu"],
          res: function(a) {
            return "f" === a ? "b" : "u" === a ? "t" : a;
          },
          opp: function(a) {
            if (((a = a ? a : x.v), a === x.mid)) return a;
            for (var b = "", c = -1, d = 0; d < x.rel.length; d++) {
              var e = x.rel[d].indexOf(a);
              if (e > -1) {
                (b = x.rel[d]), (c = e);
                break;
              }
            }
            return (c = 0 === c ? 1 : 0), b.substr(c, 1);
          },
          dimension: "height"
        },
        y = {
          tries: {},
          spots: [
            { y: "b", x: "l" },
            { y: "m", x: "l" },
            { y: "t", x: "l" },
            { y: "u", x: "l" },
            { y: "u", x: "c" },
            { y: "u", x: "r" },
            { y: "t", x: "r" },
            { y: "m", x: "r" },
            { y: "b", x: "r" },
            { y: "f", x: "r" },
            { y: "f", x: "c" },
            { y: "f", x: "l" }
          ],
          get: function(a) {
            return "tbmufy".indexOf(a) > -1 ? x : w;
          },
          opposite: function(a) {
            return "tbmufy".indexOf(a) > -1 ? w : x;
          },
          direction: function(a) {
            return "tfl".indexOf(a) > -1 ? -1 : 1;
          },
          centerLimits: function(a) {
            return "mc".indexOf(a) < 0
              ? null
              : "m" === a
              ? ["t", "b"]
              : ["l", "r"];
          },
          movementAxis: function(a) {
            return "tmb".indexOf(a) > -1
              ? "y"
              : "fcu".indexOf(a) > -1
              ? "x"
              : "";
          },
          getOpp: function(a, b) {
            var c = a === x.mid ? a : x.opp(a),
              d = b === w.mid ? b : w.opp(b);
            return { y: c, x: d };
          },
          getNeighbor: function(a, b, c, d) {
            var e = { y: x.ideal, x: w.ideal };
            if ("corners" === v && "axis corner".indexOf(d) > -1) {
              var f = y.movementAxis(x.ideal);
              (e = "y" === f ? { y: a, x: w.opp(b) } : { y: x.opp(a), x: b }),
                "corner" === d &&
                  (e.y === x.ideal && e.x === w.ideal
                    ? "y" === f
                      ? (e.y = x.opp(e.y))
                      : (e.x = w.opp(e.x))
                    : a === x.opp(x.ideal) &&
                      b === w.opp(w.ideal) &&
                      ((e.y = x.ideal), (e.x = w.ideal)));
            } else {
              var g = -1;
              c = "boolean" == typeof c ? c : !0;
              for (var h = 0; h < y.spots.length; h++)
                if (y.spots[h].y === a && y.spots[h].x === b) {
                  g = h;
                  break;
                }
              var i = "corner" === d ? 3 : "axis" === d ? 6 : 1;
              (g = (12 + g + i * (c === !0 ? 1 : -1)) % 12),
                (e = { y: y.spots[g].y, x: y.spots[g].x });
            }
            return e;
          }
        },
        z = e(
          function(a, b) {
            return d(a, b, u, -1);
          },
          [0]
        ),
        A = e(
          function(a, b) {
            return d(a, b, o, 1);
          },
          [0]
        ),
        B = function(b, c, d, e, f) {
          var g = !1,
            h = y.centerLimits(b);
          if (null !== h) {
            g = B(b + h[0], c, d, e, f);
            var i = B(b + h[1], c, d, e, f);
            g =
              a.slideAgainstAnchor && y.get(b.substr(0, 1)).name == e
                ? g || i
                : g && i;
          } else {
            var j = b.replace("m", "").replace("c", ""),
              k = y.direction(j),
              l = d(b, c) * k,
              m = y.get(j).name === e;
            if (
              ((g = r[j] * k >= l),
              (g && f === !0) || (!g && a.slideAgainstAnchor === !0 && m))
            ) {
              var n = y.get(j).opp(j),
                o =
                  b.length > 1 && a.slideAgainstAnchor !== !0
                    ? d(n, c) * k
                    : (u[n] + r.scrollOffset(j)) * k;
              g = r[n] * k <= o;
            }
          }
          return g;
        };
      i();
      var C = {
        top:
          "t" === x.v
            ? u.t + o.height(x.v + w.v, x.v)
            : "b" === x.v
            ? u.b - s.height - o.height(x.v + w.v, x.v)
            : "u" === x.v
            ? u.b + o.height(x.v + w.v, x.v)
            : "f" === x.v
            ? u.t - s.height - o.height(x.v + w.v, x.v)
            : u.mt,
        left: "r" === w.v ? u.l : u.r
      };
      return (
        "tbm".indexOf(x.v) > -1
          ? (C.left =
              "r" === w.v
                ? u.l - (s.width + o.width(x.v + w.v, w.v))
                : "l" === w.v
                ? u.r + o.width(x.v + w.v, w.v)
                : u.cl)
          : (C.left = "r" === w.v ? u.r - s.width : "l" === w.v ? u.l : u.cl),
        k(y.movementAxis(x.v)),
        (C.left += s.fixedPos ? 0 : r.l),
        (C.top += s.fixedPos ? 0 : r.t),
        a.sticky &&
          (u.so("b") > r.b &&
            (C.top = r.b - (s.height + o.height(x.v + w.v, x.v))),
          (u.so("t") < r.t || C.top < r.t) &&
            (C.top = (s.fixedPos ? 0 : r.t) + o.height(x.v + w.v, x.v)),
          u.so("r") > r.r &&
            (C.left = r.r - (s.width + o.width(x.v + w.v, w.v))),
          u.so("l") < r.l &&
            (C.left = (s.fixedPos ? 0 : r.l) + o.width(x.v + w.v, w.v))),
        { coords: C, y: "f" === x.v ? "l" : x.v, x: w.v }
      );
    }
    function b(a) {
      a = "undefined" == typeof a ? self : a;
      var b = $(a.window),
        c = { top: 0, left: 0, width: b.width(), height: b.height() };
      return (
        $sf.util.ua.ie6 && (c.width -= 4),
        "number" == typeof a.window.pageYOffset
          ? ((c.top = a.window.pageYOffset), (c.left = a.window.pageXOffset))
          : a.document.body && a.document.body.scrollTop
          ? ((c.top = a.document.body.scrollTop),
            (c.left = a.document.body.scrollLeft))
          : a.document.documentElement &&
            a.document.documentElement.scrollTop &&
            ((c.top = a.document.documentElement.scrollTop),
            (c.left = a.document.documentElement.scrollLeft)),
        (c.bottom = c.top + c.height),
        (c.right = c.left + c.width),
        c
      );
    }
    "undefined" == typeof $sf.util && ($sf.util = {}),
      ($sf.util.position = { get: a, viewPort: b });
  }),
  "object" != typeof String.prototype.sfFormat &&
    (String.prototype.sfFormat = function() {
      var a = arguments;
      return this.replace(/{(\d+)}/g, function(b, c) {
        return "undefined" != typeof a[c] ? a[c] : b;
      });
    }),
  define("starfield/sf.ua", [], function() {
    var a = ($sf.uas = {
        win: /Windows NT ([0-9\.a-z]*)/i,
        osx: /Mac OS X ([0-9\.a-z\_]*)/i,
        ie: /MSIE\s([0-9\.a-z]*)/i,
        trident: /Trident\/([0-9\.a-z]*)/i,
        ff: /Firefox\/([0-9\.a-z]*)/i,
        webkit: /AppleWebKit\/([0-9\.a-z]*)/i,
        mobile: /iPhone|Android|PlayBook|BlackBerry|Windows Phone/i
      }),
      b = ($sf.UA = function(a, b) {
        "string" != typeof b && (b = navigator.userAgent), (this.exp = a);
        var c = a.exec(b);
        if (
          ((this.major = this.minor = 0),
          (this.found = c ? !0 : !1),
          this.found && c.length >= 2)
        ) {
          var d = (this.version = c[1]),
            e = d.split(".");
          0 == e.length && (e = d.split("_")),
            (this.major = e.length >= 1 ? parseInt(e[0]) : 0),
            NaN === this.major && (this.major = 0),
            (this.minor = e.length >= 2 ? parseInt(e[1]) : 0),
            NaN === this.minor && (this.minor = 0);
        }
      }),
      c = b.prototype;
    (c.compare = function(a, b) {
      return (
        "number" != typeof a && (a = 0),
        "number" != typeof b && (b = 0),
        this.major > a
          ? 1
          : this.major < a
          ? -1
          : this.minor > b
          ? 1
          : this.minor < b
          ? -1
          : 0
      );
    }),
      (c.toString = function() {
        return this.version;
      });
    var d = ($sf.util.ua = { version: "?" }),
      e = function(a, c) {
        var e = new b(a);
        (d[c] = e.found),
          e.found &&
            ((d.version = e.version), (d.major = e.major), (d.minor = e.minor));
      };
    return (
      e(a.win, "win"),
      e(a.osx, "osx"),
      e(a.ff, "firefox"),
      e(a.webkit, "webkit"),
      (d.chrome = "[object Chrome]" == {}.toString.call(window.chrome)),
      e(a.trident, "trident"),
      d.trident && d.major <= 7 && (d.ieCompat = !0),
      e(a.ie, "ie"),
      (d.ie6 = d.ie && d.major <= 6),
      (d.ie7 = d.ie && 7 == d.major),
      (d.hasFixed = d.ie6 !== !0),
      d
    );
  }),
  define("starfield/sf.selector", ["jq!starfield/jquery.mod"], function() {
    return (
      ($sf.util.selector = function(a, b) {
        !(function(c) {
          var d = {};
          (d[a] = function(a, d, e) {
            if (b.root) {
              var f = c(a),
                g = e[3],
                h = f.is(b.root.selector);
              if (!g || "" == g) return h;
              var i = g.split(","),
                j = !1,
                k = "root";
              for (var l in b) {
                if (b.hasOwnProperty(l) && "root" !== l) {
                  var m = c.grep(i, function(a) {
                    return a != l;
                  });
                  m.length < i.length &&
                    ((i = m), (j = f.is(b[l].selector)), (k = l));
                }
                if (j) break;
              }
              if (
                ("root" === k && h && (j = !0),
                j && (b[k].states || b[k].tests))
              ) {
                j = 0 == i.length;
                for (var d = 0; d < i.length; d++) {
                  var n = i[d],
                    o = n.split("=");
                  if (o.length > 1) {
                    var p =
                      b[k].tests && b[k].tests[o[0]] ? b[k].tests[o[0]] : null;
                    c.isFunction(p) && (j = p(f, o[1]));
                  } else {
                    var p =
                      b[k].states && b[k].states[n] ? b[k].states[n] : null;
                    c.isFunction(p) && (j = p(f));
                  }
                  if (!j) break;
                }
              }
              return j;
            }
          }),
            c.extend(c.expr[":"], d);
        })($sf.getjQuery());
      }),
      $sf.util.selector
    );
  }),
  ($sf.util.storage = function(a) {
    return this instanceof $sf.util.storage
      ? ((this.cookiesDisabled = !1),
        (this.cookieTimeout = 365),
        (this.localStorageDisabled = !1),
        void (
          "object" == typeof a &&
          ("undefined" != typeof a.cookiesDisabled &&
            (this.cookiesDisabled = a.cookiesDisabled),
          "undefined" != typeof a.localStorageDisabled &&
            (this.localStorageDisabled = a.localStorageDisabled),
          "undefined" != typeof a.cookieTimeout &&
            (this.cookieTimeout = a.cookieTimeout))
        ))
      : new $sf.util.storage(a);
  }),
  ($sf.util.storage.prototype.getItem = function(a, b) {
    var c = b;
    if (
      ((a = "sf-" + a), window.localStorage && this.localStorageDisabled === !1)
    )
      c = window.localStorage[a];
    else if (this.cookiesDisabled === !1) {
      var d,
        e,
        f,
        g = document.cookie.split(";");
      for (d = 0; d < g.length; d++)
        if (
          ((e = g[d].substr(0, g[d].indexOf("="))),
          (f = g[d].substr(g[d].indexOf("=") + 1)),
          (e = e.replace(/^\s+|\s+$/g, "")),
          e == a)
        ) {
          c = unescape(f);
          break;
        }
    }
    return "undefined" == typeof c || null === c ? b : c;
  }),
  ($sf.util.storage.prototype.setItem = function(a, b) {
    if (
      ((a = "sf-" + a), window.localStorage && this.localStorageDisabled === !1)
    )
      window.localStorage.setItem(a, b);
    else if (this.cookiesDisabled === !1) {
      var c = new Date();
      c.setDate(c.getDate() + this.cookieTimeout),
        (b =
          escape(b) +
          (null == this.cookieTimeout ? "" : "; expires=" + c.toUTCString())),
        (document.cookie = a + "=" + b);
    }
  }),
  ($sf.util.storage.prototype.getLength = function() {
    return window.localStorage && this.localStorageDisabled === !1
      ? window.localStorage.length
      : this.cookiesDisabled === !1
      ? document.cookie.split(";").length
      : 0;
  }),
  ($sf.util.storage.prototype.removeItem = function(a) {
    if (
      ((a = "sf-" + a), window.localStorage && this.localStorageDisabled === !1)
    )
      window.localStorage.removeItem(a);
    else if (this.cookiesDisabled === !1) {
      var b = new Date();
      b.setDate(b.getDate() - 1);
      var c = "; expires=" + b.toUTCString();
      document.cookie = a + "=" + c;
    }
  }),
  ($sf.util.storage.prototype.isEnabled = function() {
    var a = !1;
    try {
      if (
        ((a = window.localStorage && this.localStorageDisabled),
        !a && this.cookiesDisabled === !1)
      ) {
        var b = navigator.cookieEnabled ? !0 : !1;
        "undefined" != typeof navigator.cookieEnabled ||
          b ||
          ((document.cookie = "testcookie"),
          (b = -1 != document.cookie.indexOf("testcookie") ? !0 : !1)),
          (a = b);
      }
    } catch (c) {}
    return a;
  }),
  define("starfield/sf.event", [], function() {
    function a(a) {
      return (a = Object.prototype.toString.call(a)), a.substr(8, a.length - 9);
    }
    function b(a) {
      var b = "_ns_",
        d = 0;
      if (c[a]) for (; c[a][b + d]; ) d++;
      return b + d;
    }
    var c = {};
    return ($sf.util.event = {
      on: function() {
        var d = [].slice.call(arguments),
          e = d.length,
          f = !1,
          g = !1;
        if (e > 1 && 4 > e) {
          var h = d[e - 1];
          if (
            (3 === e && (g = d[1]),
            "Function" === a(h) &&
              ("String" === a(d[0]) && (d[0] = d[0].split(" ")),
              "Array" === a(d[0])))
          )
            for (var i = 0; i < d[0].length; i++) {
              var j = d[0][i],
                k = g;
              if (j) {
                if (!k && j.split(".", 2).length >= 2) {
                  var l = j.split(".", 2);
                  (j = l.shift()), (k = l.shift());
                }
                k || (k = b(j)),
                  c[j] || (c[j] = {}),
                  c[j][k] || (c[j][k] = []),
                  f || (f = []),
                  f.push(j + "." + k),
                  c[j][k].push(h);
              }
            }
        }
        return f;
      },
      off: function(b) {
        var d = a(b);
        if (
          ("String" === d ? (b = b.split(" ")) : "Function" === d && (b = [b]),
          "Array" === a(b))
        )
          for (var e = 0; e < b.length; e++) {
            var f = b[e];
            if ("String" === (d = a(f)))
              if (f.split(".", 2).length >= 2) {
                var g = f.split(".", 2);
                (f = g.shift()), c[f] && delete c[f][g.shift()];
              } else c[f] && delete c[f];
            else if ("Function" === d)
              for (var h in c)
                for (var i in c[h])
                  for (var j in c[h][i]) f === c[h][i][j] && delete c[h][i][j];
          }
      },
      trigger: function(b) {
        if (("String" === a(b) && (b = b.split(" ")), "Array" === a(b)))
          for (var d = [].slice.call(arguments, 1), e = 0; e < b.length; e++) {
            var f,
              g = b[e];
            if (g.split(".", 2).length >= 2) {
              var h = g.split(".", 2);
              if (((g = h.shift()), (f = h.shift()), c[g] && c[g][f]))
                for (var i in c[g][f])
                  c[g][f][i]({ event: g + "." + f, args: d });
            } else if (c[g])
              for (var j in c[g])
                for (var i in c[g][j])
                  c[g][j][i]({ event: g + "." + j, args: d });
          }
      }
    });
  }),
  $sf.preload >= 1 && require("css!starfield/sf.core.css"),
  $sf.preload >= 2 && require("starfield/sf.core.pkg"),
  1 != $sf.plabel &&
    require("domReady!", function() {
      document.body.className +=
        ("" == document.body.className ? "" : " ") + "sf-pl";
    });
