(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1: function (t, e, r) {
      "use strict";
      r.d(e, "k", function () {
        return y;
      }),
        r.d(e, "m", function () {
          return _;
        }),
        r.d(e, "l", function () {
          return C;
        }),
        r.d(e, "e", function () {
          return k;
        }),
        r.d(e, "b", function () {
          return O;
        }),
        r.d(e, "s", function () {
          return j;
        }),
        r.d(e, "g", function () {
          return $;
        }),
        r.d(e, "h", function () {
          return P;
        }),
        r.d(e, "d", function () {
          return E;
        }),
        r.d(e, "r", function () {
          return S;
        }),
        r.d(e, "j", function () {
          return R;
        }),
        r.d(e, "t", function () {
          return T;
        }),
        r.d(e, "o", function () {
          return N;
        }),
        r.d(e, "q", function () {
          return A;
        }),
        r.d(e, "f", function () {
          return I;
        }),
        r.d(e, "c", function () {
          return M;
        }),
        r.d(e, "i", function () {
          return z;
        }),
        r.d(e, "p", function () {
          return B;
        }),
        r.d(e, "a", function () {
          return K;
        }),
        r.d(e, "u", function () {
          return Y;
        }),
        r.d(e, "n", function () {
          return W;
        });
      r(15), r(35), r(41), r(42);
      var n = r(16),
        o = r(2),
        c = r(11),
        l = r(3),
        h =
          (r(27),
          r(23),
          r(97),
          r(17),
          r(20),
          r(18),
          r(24),
          r(28),
          r(29),
          r(21),
          r(45),
          r(73),
          r(128),
          r(109),
          r(101),
          r(102),
          r(169),
          r(40),
          r(36),
          r(0)),
        f = r.n(h),
        d = r(25);
      function v(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function m(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? v(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source))
            : v(Object(source)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e));
              });
        }
        return t;
      }
      function w(t, e) {
        var r = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
        if (!r) {
          if (
            Array.isArray(t) ||
            (r = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return x(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === r && t.constructor && (r = t.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(t);
              if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return x(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            r && (t = r);
            var i = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            r = r.call(t);
          },
          n: function () {
            var t = r.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == r.return || r.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function x(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
        return r;
      }
      function y(t) {
        f.a.config.errorHandler && f.a.config.errorHandler(t);
      }
      function _(t) {
        return t.then(function (t) {
          return t.default || t;
        });
      }
      function C(t) {
        return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length;
      }
      function k(t) {
        var e,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = t.$children || [],
          o = w(n);
        try {
          for (o.s(); !(e = o.n()).done; ) {
            var c = e.value;
            c.$fetch ? r.push(c) : c.$children && k(c, r);
          }
        } catch (t) {
          o.e(t);
        } finally {
          o.f();
        }
        return r;
      }
      function O(t, e) {
        if (e || !t.options.__hasNuxtData) {
          var r =
            t.options._originDataFn ||
            t.options.data ||
            function () {
              return {};
            };
          (t.options._originDataFn = r),
            (t.options.data = function () {
              var data = r.call(this, this);
              return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), m(m({}, data), e);
            }),
            (t.options.__hasNuxtData = !0),
            t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data);
        }
      }
      function j(t) {
        return (
          (t.options && t._Ctor === t) ||
            (t.options ? ((t._Ctor = t), (t.extendOptions = t.options)) : ((t = f.a.extend(t))._Ctor = t),
            !t.options.name && t.options.__file && (t.options.name = t.options.__file)),
          t
        );
      }
      function $(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, n) {
            return Object.keys(t[r]).map(function (o) {
              return e && e.push(n), t[r][o];
            });
          })
        );
      }
      function P(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return $(t, e, "instances");
      }
      function E(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, r) {
            return Object.keys(t.components).reduce(function (n, o) {
              return t.components[o] ? n.push(e(t.components[o], t.instances[o], t, o, r)) : delete t.components[o], n;
            }, []);
          })
        );
      }
      function S(t, e) {
        return Promise.all(
          E(
            t,
            (function () {
              var t = Object(o.a)(
                regeneratorRuntime.mark(function t(r, n, o, c) {
                  var l, h;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("function" != typeof r || r.options) {
                              t.next = 11;
                              break;
                            }
                            return (t.prev = 1), (t.next = 4), r();
                          case 4:
                            (r = t.sent), (t.next = 11);
                            break;
                          case 7:
                            throw (
                              ((t.prev = 7),
                              (t.t0 = t.catch(1)),
                              t.t0 &&
                                "ChunkLoadError" === t.t0.name &&
                                "undefined" != typeof window &&
                                window.sessionStorage &&
                                ((l = Date.now()),
                                (!(h = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || h + 6e4 < l) &&
                                  (window.sessionStorage.setItem("nuxt-reload", l), window.location.reload(!0))),
                              t.t0)
                            );
                          case 11:
                            return (o.components[c] = r = j(r)), t.abrupt("return", "function" == typeof e ? e(r, n, o, c) : r);
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[1, 7]]
                  );
                })
              );
              return function (e, r, n, o) {
                return t.apply(this, arguments);
              };
            })()
          )
        );
      }
      function R(t) {
        return L.apply(this, arguments);
      }
      function L() {
        return (L = Object(o.a)(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    return (t.next = 4), S(e);
                  case 4:
                    return t.abrupt(
                      "return",
                      m(
                        m({}, e),
                        {},
                        {
                          meta: $(e).map(function (t, r) {
                            return m(m({}, t.options.meta), (e.matched[r] || {}).meta);
                          }),
                        }
                      )
                    );
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function T(t, e) {
        return D.apply(this, arguments);
      }
      function D() {
        return (D = Object(o.a)(
          regeneratorRuntime.mark(function t(e, r) {
            var o, c, h, f;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      e.context ||
                        ((e.context = {
                          isStatic: !0,
                          isDev: !1,
                          isHMR: !1,
                          app: e,
                          store: e.store,
                          payload: r.payload,
                          error: r.error,
                          base: e.router.options.base,
                          env: { NUXT_ENV_DEPLOY: "asf" },
                        }),
                        r.req && (e.context.req = r.req),
                        r.res && (e.context.res = r.res),
                        r.ssrContext && (e.context.ssrContext = r.ssrContext),
                        (e.context.redirect = function (t, path, r) {
                          if (t) {
                            e.context._redirected = !0;
                            var o = Object(n.a)(path);
                            if (
                              ("number" == typeof t ||
                                ("undefined" !== o && "object" !== o) ||
                                ((r = path || {}), (path = t), (o = Object(n.a)(path)), (t = 302)),
                              "object" === o && (path = e.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw ((path = Object(d.d)(path, r)), window.location.replace(path), new Error("ERR_REDIRECT"));
                            e.context.next({ path: path, query: r, status: t });
                          }
                        }),
                        (e.context.nuxtState = window.__NUXT__)),
                      (t.next = 3),
                      Promise.all([R(r.route), R(r.from)])
                    );
                  case 3:
                    (o = t.sent),
                      (c = Object(l.a)(o, 2)),
                      (h = c[0]),
                      (f = c[1]),
                      r.route && (e.context.route = h),
                      r.from && (e.context.from = f),
                      (e.context.next = r.next),
                      (e.context._redirected = !1),
                      (e.context._errored = !1),
                      (e.context.isHMR = !1),
                      (e.context.params = e.context.route.params || {}),
                      (e.context.query = e.context.route.query || {});
                  case 15:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function N(t, e) {
        return !t.length || e._redirected || e._errored
          ? Promise.resolve()
          : A(t[0], e).then(function () {
              return N(t.slice(1), e);
            });
      }
      function A(t, e) {
        var r;
        return (r =
          2 === t.length
            ? new Promise(function (r) {
                t(e, function (t, data) {
                  t && e.error(t), r((data = data || {}));
                });
              })
            : t(e)) &&
          r instanceof Promise &&
          "function" == typeof r.then
          ? r
          : Promise.resolve(r);
      }
      function I(base, t) {
        if ("hash" === t) return window.location.hash.replace(/^#\//, "");
        base = decodeURI(base).slice(0, -1);
        var path = decodeURI(window.location.pathname);
        base && path.startsWith(base) && (path = path.slice(base.length));
        var e = (path || "/") + window.location.search + window.location.hash;
        return Object(d.c)(e);
      }
      function M(t, e) {
        return (function (t, e) {
          for (var r = new Array(t.length), i = 0; i < t.length; i++)
            "object" === Object(n.a)(t[i]) && (r[i] = new RegExp("^(?:" + t[i].pattern + ")$", X(e)));
          return function (e, n) {
            for (var path = "", data = e || {}, o = (n || {}).pretty ? U : encodeURIComponent, c = 0; c < t.length; c++) {
              var l = t[c];
              if ("string" != typeof l) {
                var h = data[l.name || "pathMatch"],
                  f = void 0;
                if (null == h) {
                  if (l.optional) {
                    l.partial && (path += l.prefix);
                    continue;
                  }
                  throw new TypeError('Expected "' + l.name + '" to be defined');
                }
                if (Array.isArray(h)) {
                  if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(h) + "`");
                  if (0 === h.length) {
                    if (l.optional) continue;
                    throw new TypeError('Expected "' + l.name + '" to not be empty');
                  }
                  for (var d = 0; d < h.length; d++) {
                    if (((f = o(h[d])), !r[c].test(f)))
                      throw new TypeError(
                        'Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(f) + "`"
                      );
                    path += (0 === d ? l.prefix : l.delimiter) + f;
                  }
                } else {
                  if (((f = l.asterisk ? G(h) : o(h)), !r[c].test(f)))
                    throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + f + '"');
                  path += l.prefix + f;
                }
              } else path += l;
            }
            return path;
          };
        })(
          (function (t, e) {
            var r,
              n = [],
              o = 0,
              c = 0,
              path = "",
              l = (e && e.delimiter) || "/";
            for (; null != (r = F.exec(t)); ) {
              var h = r[0],
                f = r[1],
                d = r.index;
              if (((path += t.slice(c, d)), (c = d + h.length), f)) path += f[1];
              else {
                var v = t[c],
                  m = r[2],
                  w = r[3],
                  x = r[4],
                  y = r[5],
                  _ = r[6],
                  C = r[7];
                path && (n.push(path), (path = ""));
                var k = null != m && null != v && v !== m,
                  O = "+" === _ || "*" === _,
                  j = "?" === _ || "*" === _,
                  $ = r[2] || l,
                  pattern = x || y;
                n.push({
                  name: w || o++,
                  prefix: m || "",
                  delimiter: $,
                  optional: j,
                  repeat: O,
                  partial: k,
                  asterisk: Boolean(C),
                  pattern: pattern ? V(pattern) : C ? ".*" : "[^" + H($) + "]+?",
                });
              }
            }
            c < t.length && (path += t.substr(c));
            path && n.push(path);
            return n;
          })(t, e),
          e
        );
      }
      function z(t, e) {
        var r = {},
          n = m(m({}, t), e);
        for (var o in n) String(t[o]) !== String(e[o]) && (r[o] = !0);
        return r;
      }
      function B(t) {
        var e;
        if (t.message || "string" == typeof t) e = t.message || t;
        else
          try {
            e = JSON.stringify(t, null, 2);
          } catch (r) {
            e = "[".concat(t.constructor.name, "]");
          }
        return m(m({}, t), {}, { message: e, statusCode: t.statusCode || t.status || (t.response && t.response.status) || 500 });
      }
      (window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function (t) {
          window.onNuxtReadyCbs.push(t);
        });
      var F = new RegExp(
        ["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),
        "g"
      );
      function U(t, e) {
        var r = e ? /[?#]/g : /[/?#]/g;
        return encodeURI(t).replace(r, function (t) {
          return "%" + t.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function G(t) {
        return U(t, !0);
      }
      function H(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function V(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
      }
      function X(t) {
        return t && t.sensitive ? "" : "i";
      }
      function K(t, e, r) {
        t.$options[e] || (t.$options[e] = []), t.$options[e].includes(r) || t.$options[e].push(r);
      }
      var Y = d.b,
        W = (d.e, d.a);
    },
    108: function (t, e, r) {
      "use strict";
      var n = {
        gh: {
          routerBase: "/echarts-handbook",
          rootPath: "https://apache.github.io/echarts-handbook/",
          exampleViewPath: "https://echarts.apache.org/examples/${lang}/view.html?c=",
          exampleEditorPath: "https://echarts.apache.org/examples/${lang}/editor.html?c=",
          mainSitePath: "https://echarts.apache.org/",
          optionPath: "https://echarts.apache.org/option.html#",
          gitRepo: "apache/echarts-handbook",
        },
        asf: {
          routerBase: "/handbook",
          rootPath: "https://echarts.apache.org/handbook/",
          exampleViewPath: "https://echarts.apache.org/examples/${lang}/view.html?c=",
          exampleEditorPath: "https://echarts.apache.org/examples/${lang}/editor.html?c=",
          mainSitePath: "https://echarts.apache.org/",
          optionPath: "https://echarts.apache.org/option.html#",
          gitRepo: "apache/echarts-handbook",
        },
        local: {
          routerBase: "/echarts-handbook/dist",
          rootPath: "http://localhost/echarts-handbook/dist/",
          exampleViewPath: "http://localhost/echarts-website/examples/${lang}/view.html?c=",
          exampleEditorPath: "http://localhost/echarts-website/examples/${lang}/editor.html?c=",
          mainSitePath: "http://localhost/echarts-website/",
          optionPath: "http://localhost/echarts-website/option.html#",
          gitRepo: "apache/echarts-handbook",
        },
        localsite: {
          routerBase: "/echarts-website/handbook",
          rootPath: "http://localhost/echarts-website/handbook",
          exampleViewPath: "http://localhost/echarts-website/examples/${lang}/view.html?c=",
          exampleEditorPath: "http://localhost/echarts-website/examples/${lang}/editor.html?c=",
          mainSitePath: "http://localhost/echarts-website/",
          optionPath: "http://localhost/echarts-website/option.html#",
          gitRepo: "apache/echarts-handbook",
        },
      };
      var o = (function () {
        var t = "asf";
        if (!n.asf) throw "Deploy config ".concat(t, " not exits");
        return n.asf;
      })();
      e.a = o;
    },
    129: function (t, e, r) {
      t.exports = {};
    },
    130: function (t, e, r) {
      t.exports = {};
    },
    131: function (t, e, r) {
      t.exports = {};
    },
    132: function (t, e, r) {
      t.exports = {};
    },
    133: function (t, e, r) {
      t.exports = {};
    },
    134: function (t, e, r) {
      t.exports = {};
    },
    138: function (t, e) {
      const r = [
        [
          { title: "快速上手", dir: "get-started" },
          {
            title: "入门篇",
            dir: "basics",
            children: [
              { title: "获取 ECharts", dir: "download" },
              { title: "在项目中引入 ECharts", dir: "import" },
              { title: "资源列表", dir: "resource", draft: !0 },
              { title: "寻求帮助", dir: "help" },
              {
                title: "版本特性",
                dir: "release-note",
                children: [
                  { title: "ECharts 5 特性介绍", dir: "v5-feature" },
                  { title: "v4 升级 v5 指南", dir: "v5-upgrade-guide" },
                  { title: 5.2, dir: "5-2-0" },
                  { title: 5.3, dir: "5-3-0" },
                  { title: 5.4, dir: "5-4-0" },
                  { title: 5.5, dir: "5-5-0" },
                ],
              },
            ],
          },
          {
            title: "概念篇",
            dir: "concepts",
            children: [
              { title: "图表容器及大小", dir: "chart-size" },
              { title: "配置项", dir: "options", draft: !0 },
              { title: "系列", dir: "series", draft: !0 },
              { title: "样式", dir: "style" },
              { title: "数据集", dir: "dataset" },
              { title: "数据转换", dir: "data-transform" },
              { title: "坐标系", dir: "coordinate", draft: !0 },
              { title: "坐标轴", dir: "axis" },
              { title: "视觉映射", dir: "visual-map" },
              { title: "图例", dir: "legend" },
              { title: "事件与行为", dir: "event" },
            ],
          },
          {
            title: "应用篇",
            dir: "how-to",
            children: [
              {
                title: "常用图表类型",
                dir: "chart-types",
                children: [
                  {
                    title: "柱状图",
                    dir: "bar",
                    children: [
                      { title: "基础柱状图", dir: "basic-bar" },
                      { title: "堆叠柱状图", dir: "stacked-bar" },
                      { title: "动态排序柱状图", dir: "bar-race" },
                      { title: "极坐标系柱状图", dir: "polar-bar", draft: !0 },
                      { title: "阶梯瀑布图", dir: "waterfall" },
                      { title: "视觉映射的柱状图", dir: "visual-map", draft: !0 },
                    ],
                  },
                  {
                    title: "折线图",
                    dir: "line",
                    children: [
                      { title: "基础折线图", dir: "basic-line" },
                      { title: "堆叠折线图", dir: "stacked-line" },
                      { title: "区域面积图", dir: "area-line" },
                      { title: "平滑曲线图", dir: "smooth-line" },
                      { title: "阶梯线图", dir: "step-line" },
                    ],
                  },
                  {
                    title: "饼图",
                    dir: "pie",
                    children: [
                      { title: "基础饼图", dir: "basic-pie" },
                      { title: "圆环图", dir: "doughnut" },
                      { title: "南丁格尔图（玫瑰图）", dir: "rose" },
                    ],
                  },
                  { title: "散点图", dir: "scatter", children: [{ title: "基础散点图", dir: "basic-scatter" }] },
                ],
              },
              { title: "移动端优化", dir: "mobile", draft: !0 },
              {
                title: "跨平台方案",
                dir: "cross-platform",
                children: [
                  { title: "服务端渲染", dir: "server" },
                  { title: "微信小程序", dir: "wechat-app" },
                  { title: "百度智能小程序", dir: "baidu-app" },
                ],
              },
              {
                title: "数据处理",
                dir: "data",
                children: [
                  { title: "动态的异步数据", dir: "dynamic-data" },
                  { title: "数据下钻", dir: "drilldown", draft: !0 },
                ],
              },
              { title: "标签", dir: "label", children: [{ title: "富文本标签", dir: "rich-text" }] },
              { title: "动画", dir: "animation", children: [{ title: "数据过渡动画", dir: "transition" }] },
              {
                title: "交互",
                dir: "interaction",
                children: [
                  { title: "拖拽的实现", dir: "drag" },
                  { title: "多图联动", dir: "connect", draft: !0 },
                  { title: "智能指针吸附", dir: "coarse-pointer" },
                ],
              },
            ],
          },
          {
            title: "最佳实践",
            dir: "best-practices",
            children: [
              { title: "移动端优化", dir: "mobile", draft: !0 },
              { title: "Canvas vs. SVG", dir: "canvas-vs-svg" },
              { title: "无障碍访问", dir: "aria" },
            ],
          },
          { title: "编辑本文档", dir: "meta", children: [{ title: "文档编辑指南", dir: "edit-guide" }] },
        ],
      ];
      t.exports = r.length <= 1 ? r[0] : r;
    },
    139: function (t, e) {
      const r = [
        [
          { title: "Get Started", dir: "get-started" },
          {
            title: "Basics",
            dir: "basics",
            children: [
              { title: "Download ECharts", dir: "download" },
              { title: "Import ECharts", dir: "import" },
              { title: "Resources", dir: "resource", draft: !0 },
              { title: "Get Help", dir: "help" },
              {
                title: "What's New",
                dir: "release-note",
                children: [
                  { title: "ECharts 5 Features", dir: "v5-feature" },
                  { title: "Migration from v4 to v5", dir: "v5-upgrade-guide" },
                  { title: 5.2, dir: "5-2-0" },
                  { title: 5.3, dir: "5-3-0" },
                  { title: 5.4, dir: "5-4-0" },
                  { title: 5.5, dir: "5-5-0" },
                ],
              },
            ],
          },
          {
            title: "Concepts",
            dir: "concepts",
            children: [
              { title: "Chart Container", dir: "chart-size" },
              { title: "Chart Option", dir: "options", draft: !0 },
              { title: "Series", dir: "series", draft: !0 },
              { title: "Style", dir: "style" },
              { title: "Dataset", dir: "dataset" },
              { title: "Data Transform", dir: "data-transform" },
              { title: "Coordinate", dir: "coordinate", draft: !0 },
              { title: "Axis", dir: "axis" },
              { title: "Visual Mapping", dir: "visual-map" },
              { title: "Legend", dir: "legend" },
              { title: "Event and Action", dir: "event" },
            ],
          },
          {
            title: "How To Guides",
            dir: "how-to",
            children: [
              {
                title: "Common Charts",
                dir: "chart-types",
                children: [
                  {
                    title: "Bar",
                    dir: "bar",
                    children: [
                      { title: "Basic Bar", dir: "basic-bar" },
                      { title: "Stacked Bar", dir: "stacked-bar" },
                      { title: "Bar Racing", dir: "bar-race" },
                      { title: "Bar Polar", dir: "polar-bar", draft: !0 },
                      { title: "Waterfall", dir: "waterfall" },
                    ],
                  },
                  {
                    title: "Line",
                    dir: "line",
                    children: [
                      { title: "Basic Line", dir: "basic-line" },
                      { title: "Stacked Line", dir: "stacked-line" },
                      { title: "Area Chart", dir: "area-line" },
                      { title: "Smoothed Line", dir: "smooth-line" },
                      { title: "Step Line", dir: "step-line" },
                    ],
                  },
                  {
                    title: "Pie",
                    dir: "pie",
                    children: [
                      { title: "Basic Pie", dir: "basic-pie" },
                      { title: "Ring Style", dir: "doughnut" },
                      { title: "Rose Style", dir: "rose" },
                    ],
                  },
                  { title: "Scatter", dir: "scatter", children: [{ title: "Basic Scatter", dir: "basic-scatter" }] },
                ],
              },
              { title: "Mobile", dir: "mobile", draft: !0 },
              { title: "Cross Platform", dir: "cross-platform", children: [{ title: "Server Side Rendering", dir: "server" }] },
              {
                title: "Data",
                dir: "data",
                children: [
                  { title: "Dynamic Data", dir: "dynamic-data" },
                  { title: "Drilldown", dir: "drilldown", draft: !0 },
                ],
              },
              { title: "Label", dir: "label", children: [{ title: "Rich Text", dir: "rich-text" }] },
              { title: "Animation", dir: "animation", children: [{ title: "Data Transition", dir: "transition" }] },
              {
                title: "Interaction",
                dir: "interaction",
                children: [
                  { title: "Drag", dir: "drag" },
                  { title: "Connect", dir: "connect", draft: !0 },
                  { title: "Intelligent Pointer Snapping", dir: "coarse-pointer" },
                ],
              },
            ],
          },
          {
            title: "Best Practices",
            dir: "best-practices",
            children: [
              { title: "Mobile Optimization", dir: "mobile", draft: !0 },
              { title: "Canvas vs. SVG", dir: "canvas-vs-svg" },
              { title: "Aria", dir: "aria" },
            ],
          },
          { title: "Edit Handbook", dir: "meta", children: [{ title: "Edit Guide", dir: "edit-guide" }] },
        ],
      ];
      t.exports = r.length <= 1 ? r[0] : r;
    },
    140: function (t, e, r) {
      "use strict";
      var n = r(2),
        o = (r(27), r(17), r(0)),
        c = r.n(o),
        l = r(1),
        h = window.__NUXT__;
      function f() {
        if (!this._hydrated) return this.$fetch();
      }
      function d() {
        if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
          var t;
          (this._hydrated = !0), (this._fetchKey = this.$vnode.elm.dataset.fetchKey);
          var data = h.fetch[this._fetchKey];
          if (data && data._error) this.$fetchState.error = data._error;
          else for (var e in data) c.a.set(this.$data, e, data[e]);
        }
      }
      function v() {
        var t = this;
        return (
          this._fetchPromise ||
            (this._fetchPromise = m.call(this).then(function () {
              delete t._fetchPromise;
            })),
          this._fetchPromise
        );
      }
      function m() {
        return w.apply(this, arguments);
      }
      function w() {
        return (w = Object(n.a)(
          regeneratorRuntime.mark(function t() {
            var e,
              r,
              n,
              o = this;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.$nuxt.nbFetching++,
                        (this.$fetchState.pending = !0),
                        (this.$fetchState.error = null),
                        (this._hydrated = !1),
                        (e = null),
                        (r = Date.now()),
                        (t.prev = 6),
                        (t.next = 9),
                        this.$options.fetch.call(this)
                      );
                    case 9:
                      t.next = 15;
                      break;
                    case 11:
                      (t.prev = 11), (t.t0 = t.catch(6)), (e = Object(l.p)(t.t0));
                    case 15:
                      if (!((n = this._fetchDelay - (Date.now() - r)) > 0)) {
                        t.next = 19;
                        break;
                      }
                      return (
                        (t.next = 19),
                        new Promise(function (t) {
                          return setTimeout(t, n);
                        })
                      );
                    case 19:
                      (this.$fetchState.error = e),
                        (this.$fetchState.pending = !1),
                        (this.$fetchState.timestamp = Date.now()),
                        this.$nextTick(function () {
                          return o.$nuxt.nbFetching--;
                        });
                    case 23:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[6, 11]]
            );
          })
        )).apply(this, arguments);
      }
      e.a = {
        beforeCreate: function () {
          Object(l.l)(this) &&
            ((this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200),
            c.a.util.defineReactive(this, "$fetchState", { pending: !1, error: null, timestamp: Date.now() }),
            (this.$fetch = v.bind(this)),
            Object(l.a)(this, "created", d),
            Object(l.a)(this, "beforeMount", f));
        },
      };
    },
    144: function (t, e, r) {
      t.exports = r(145);
    },
    145: function (t, e, r) {
      "use strict";
      r.r(e),
        function (t) {
          r(21), r(15), r(35);
          var e = r(16),
            n = r(2),
            o = (r(120), r(153), r(158), r(160), r(27), r(20), r(23), r(24), r(40), r(36), r(18), r(28), r(17), r(29), r(0)),
            c = r.n(o),
            l = r(136),
            h = r(59),
            f = r(1),
            d = r(26),
            v = r(140),
            m = r(78);
          function w(t, e) {
            var r = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
            if (!r) {
              if (
                Array.isArray(t) ||
                (r = (function (t, e) {
                  if (!t) return;
                  if ("string" == typeof t) return x(t, e);
                  var r = Object.prototype.toString.call(t).slice(8, -1);
                  "Object" === r && t.constructor && (r = t.constructor.name);
                  if ("Map" === r || "Set" === r) return Array.from(t);
                  if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return x(t, e);
                })(t)) ||
                (e && t && "number" == typeof t.length)
              ) {
                r && (t = r);
                var i = 0,
                  n = function () {};
                return {
                  s: n,
                  n: function () {
                    return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
                  },
                  e: function (t) {
                    throw t;
                  },
                  f: n,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              c = !0,
              l = !1;
            return {
              s: function () {
                r = r.call(t);
              },
              n: function () {
                var t = r.next();
                return (c = t.done), t;
              },
              e: function (t) {
                (l = !0), (o = t);
              },
              f: function () {
                try {
                  c || null == r.return || r.return();
                } finally {
                  if (l) throw o;
                }
              },
            };
          }
          function x(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
            return r;
          }
          c.a.__nuxt__fetch__mixin__ || (c.a.mixin(v.a), (c.a.__nuxt__fetch__mixin__ = !0)),
            c.a.component(m.a.name, m.a),
            c.a.component("NLink", m.a),
            t.fetch || (t.fetch = l.a);
          var y,
            _,
            C = [],
            k = window.__NUXT__ || {},
            O = k.config || {};
          O._app && (r.p = Object(f.u)(O._app.cdnURL, O._app.assetsPath)), Object.assign(c.a.config, { silent: !0, performance: !1 });
          var j = c.a.config.errorHandler || console.error;
          function $(t, e, r) {
            for (
              var n = function (component) {
                  var t =
                    (function (component, t) {
                      if (!component || !component.options || !component.options[t]) return {};
                      var option = component.options[t];
                      if ("function" == typeof option) {
                        for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), n = 2; n < e; n++) r[n - 2] = arguments[n];
                        return option.apply(void 0, r);
                      }
                      return option;
                    })(component, "transition", e, r) || {};
                  return "string" == typeof t ? { name: t } : t;
                },
                o = r ? Object(f.g)(r) : [],
                c = Math.max(t.length, o.length),
                l = [],
                h = function (i) {
                  var e = Object.assign({}, n(t[i])),
                    r = Object.assign({}, n(o[i]));
                  Object.keys(e)
                    .filter(function (t) {
                      return void 0 !== e[t] && !t.toLowerCase().includes("leave");
                    })
                    .forEach(function (t) {
                      r[t] = e[t];
                    }),
                    l.push(r);
                },
                i = 0;
              i < c;
              i++
            )
              h(i);
            return l;
          }
          function P(t, e, r) {
            return E.apply(this, arguments);
          }
          function E() {
            return (E = Object(n.a)(
              regeneratorRuntime.mark(function t(e, r, n) {
                var o,
                  c,
                  l,
                  h,
                  d = this;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((this._routeChanged = Boolean(y.nuxt.err) || r.name !== e.name),
                            (this._paramChanged = !this._routeChanged && r.path !== e.path),
                            (this._queryChanged = !this._paramChanged && r.fullPath !== e.fullPath),
                            (this._diffQuery = this._queryChanged ? Object(f.i)(e.query, r.query) : []),
                            (this._routeChanged || this._paramChanged) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (t.prev = 5),
                            !this._queryChanged)
                          ) {
                            t.next = 12;
                            break;
                          }
                          return (
                            (t.next = 9),
                            Object(f.r)(e, function (t, e) {
                              return { Component: t, instance: e };
                            })
                          );
                        case 9:
                          (o = t.sent),
                            o.some(function (t) {
                              var n = t.Component,
                                o = t.instance,
                                c = n.options.watchQuery;
                              return (
                                !0 === c ||
                                (Array.isArray(c)
                                  ? c.some(function (t) {
                                      return d._diffQuery[t];
                                    })
                                  : "function" == typeof c && c.apply(o, [e.query, r.query]))
                              );
                            }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start();
                        case 12:
                          n(), (t.next = 26);
                          break;
                        case 15:
                          if (
                            ((t.prev = 15),
                            (t.t0 = t.catch(5)),
                            (c = t.t0 || {}),
                            (l = c.statusCode || c.status || (c.response && c.response.status) || 500),
                            (h = c.message || ""),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(h))
                          ) {
                            t.next = 23;
                            break;
                          }
                          return window.location.reload(!0), t.abrupt("return");
                        case 23:
                          this.error({ statusCode: l, message: h }), this.$nuxt.$emit("routeChanged", e, r, c), n();
                        case 26:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[5, 15]]
                );
              })
            )).apply(this, arguments);
          }
          function S(t, e) {
            return k.serverRendered && e && Object(f.b)(t, e), (t._Ctor = t), t;
          }
          function R(t) {
            return Object(f.d)(
              t,
              (function () {
                var t = Object(n.a)(
                  regeneratorRuntime.mark(function t(e, r, n, o, c) {
                    var l;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("function" != typeof e || e.options) {
                              t.next = 4;
                              break;
                            }
                            return (t.next = 3), e();
                          case 3:
                            e = t.sent;
                          case 4:
                            return (l = S(Object(f.s)(e), k.data ? k.data[c] : null)), (n.components[o] = l), t.abrupt("return", l);
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e, r, n, o, c) {
                  return t.apply(this, arguments);
                };
              })()
            );
          }
          function L(t, e, r) {
            var n = this,
              o = ["nuxti18n"],
              c = !1;
            if (
              (void 0 !== r &&
                ((o = []),
                (r = Object(f.s)(r)).options.middleware && (o = o.concat(r.options.middleware)),
                t.forEach(function (t) {
                  t.options.middleware && (o = o.concat(t.options.middleware));
                })),
              (o = o.map(function (t) {
                return "function" == typeof t
                  ? t
                  : ("function" != typeof h.a[t] && ((c = !0), n.error({ statusCode: 500, message: "Unknown middleware " + t })), h.a[t]);
              })),
              !c)
            )
              return Object(f.o)(o, e);
          }
          function T(t, e, r) {
            return D.apply(this, arguments);
          }
          function D() {
            return (
              (D = Object(n.a)(
                regeneratorRuntime.mark(function t(e, r, o) {
                  var c,
                    l,
                    h,
                    v,
                    m,
                    x,
                    _,
                    k,
                    O,
                    j,
                    P,
                    E,
                    S,
                    R,
                    T,
                    D = this;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return", o());
                          case 2:
                            return (
                              !1,
                              e === r
                                ? ((C = []), !0)
                                : ((c = []),
                                  (C = Object(f.g)(r, c).map(function (t, i) {
                                    return Object(f.c)(r.matched[c[i]].path)(r.params);
                                  }))),
                              (l = !1),
                              (h = function (path) {
                                r.path === path.path && D.$loading.finish && D.$loading.finish(),
                                  r.path !== path.path && D.$loading.pause && D.$loading.pause(),
                                  l || ((l = !0), o(path));
                              }),
                              (t.next = 8),
                              Object(f.t)(y, { route: e, from: r, next: h.bind(this) })
                            );
                          case 8:
                            if (
                              ((this._dateLastError = y.nuxt.dateErr),
                              (this._hadError = Boolean(y.nuxt.err)),
                              (v = []),
                              (m = Object(f.g)(e, v)).length)
                            ) {
                              t.next = 27;
                              break;
                            }
                            return (t.next = 15), L.call(this, m, y.context);
                          case 15:
                            if (!l) {
                              t.next = 17;
                              break;
                            }
                            return t.abrupt("return");
                          case 17:
                            return (
                              (x = (d.a.options || d.a).layout),
                              (t.next = 20),
                              this.loadLayout("function" == typeof x ? x.call(d.a, y.context) : x)
                            );
                          case 20:
                            return (_ = t.sent), (t.next = 23), L.call(this, m, y.context, _);
                          case 23:
                            if (!l) {
                              t.next = 25;
                              break;
                            }
                            return t.abrupt("return");
                          case 25:
                            return y.context.error({ statusCode: 404, message: "This page could not be found" }), t.abrupt("return", o());
                          case 27:
                            return (
                              m.forEach(function (t) {
                                t._Ctor &&
                                  t._Ctor.options &&
                                  ((t.options.asyncData = t._Ctor.options.asyncData), (t.options.fetch = t._Ctor.options.fetch));
                              }),
                              this.setTransitions($(m, e, r)),
                              (t.prev = 29),
                              (t.next = 32),
                              L.call(this, m, y.context)
                            );
                          case 32:
                            if (!l) {
                              t.next = 34;
                              break;
                            }
                            return t.abrupt("return");
                          case 34:
                            if (!y.context._errored) {
                              t.next = 36;
                              break;
                            }
                            return t.abrupt("return", o());
                          case 36:
                            return "function" == typeof (k = m[0].options.layout) && (k = k(y.context)), (t.next = 40), this.loadLayout(k);
                          case 40:
                            return (k = t.sent), (t.next = 43), L.call(this, m, y.context, k);
                          case 43:
                            if (!l) {
                              t.next = 45;
                              break;
                            }
                            return t.abrupt("return");
                          case 45:
                            if (!y.context._errored) {
                              t.next = 47;
                              break;
                            }
                            return t.abrupt("return", o());
                          case 47:
                            (O = !0), (t.prev = 48), (j = w(m)), (t.prev = 50), j.s();
                          case 52:
                            if ((P = j.n()).done) {
                              t.next = 63;
                              break;
                            }
                            if ("function" == typeof (E = P.value).options.validate) {
                              t.next = 56;
                              break;
                            }
                            return t.abrupt("continue", 61);
                          case 56:
                            return (t.next = 58), E.options.validate(y.context);
                          case 58:
                            if ((O = t.sent)) {
                              t.next = 61;
                              break;
                            }
                            return t.abrupt("break", 63);
                          case 61:
                            t.next = 52;
                            break;
                          case 63:
                            t.next = 68;
                            break;
                          case 65:
                            (t.prev = 65), (t.t0 = t.catch(50)), j.e(t.t0);
                          case 68:
                            return (t.prev = 68), j.f(), t.finish(68);
                          case 71:
                            t.next = 77;
                            break;
                          case 73:
                            return (
                              (t.prev = 73),
                              (t.t1 = t.catch(48)),
                              this.error({ statusCode: t.t1.statusCode || "500", message: t.t1.message }),
                              t.abrupt("return", o())
                            );
                          case 77:
                            if (O) {
                              t.next = 80;
                              break;
                            }
                            return this.error({ statusCode: 404, message: "This page could not be found" }), t.abrupt("return", o());
                          case 80:
                            return (
                              (t.next = 82),
                              Promise.all(
                                m.map(
                                  (function () {
                                    var t = Object(n.a)(
                                      regeneratorRuntime.mark(function t(n, i) {
                                        var o, c, l, h, d, m, w, x, p;
                                        return regeneratorRuntime.wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                if (
                                                  ((n._path = Object(f.c)(e.matched[v[i]].path)(e.params)),
                                                  (n._dataRefresh = !1),
                                                  (o = n._path !== C[i]),
                                                  D._routeChanged && o
                                                    ? (n._dataRefresh = !0)
                                                    : D._paramChanged && o
                                                    ? ((c = n.options.watchParam), (n._dataRefresh = !1 !== c))
                                                    : D._queryChanged &&
                                                      (!0 === (l = n.options.watchQuery)
                                                        ? (n._dataRefresh = !0)
                                                        : Array.isArray(l)
                                                        ? (n._dataRefresh = l.some(function (t) {
                                                            return D._diffQuery[t];
                                                          }))
                                                        : "function" == typeof l &&
                                                          (S || (S = Object(f.h)(e)),
                                                          (n._dataRefresh = l.apply(S[i], [e.query, r.query])))),
                                                  D._hadError || !D._isMounted || n._dataRefresh)
                                                ) {
                                                  t.next = 6;
                                                  break;
                                                }
                                                return t.abrupt("return");
                                              case 6:
                                                return (
                                                  (h = []),
                                                  (d = n.options.asyncData && "function" == typeof n.options.asyncData),
                                                  (m = Boolean(n.options.fetch) && n.options.fetch.length),
                                                  (w = d && m ? 30 : 45),
                                                  d &&
                                                    ((x = Object(f.q)(n.options.asyncData, y.context)).then(function (t) {
                                                      Object(f.b)(n, t), D.$loading.increase && D.$loading.increase(w);
                                                    }),
                                                    h.push(x)),
                                                  (D.$loading.manual = !1 === n.options.loading),
                                                  m &&
                                                    (((p = n.options.fetch(y.context)) &&
                                                      (p instanceof Promise || "function" == typeof p.then)) ||
                                                      (p = Promise.resolve(p)),
                                                    p.then(function (t) {
                                                      D.$loading.increase && D.$loading.increase(w);
                                                    }),
                                                    h.push(p)),
                                                  t.abrupt("return", Promise.all(h))
                                                );
                                              case 14:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                      })
                                    );
                                    return function (e, r) {
                                      return t.apply(this, arguments);
                                    };
                                  })()
                                )
                              )
                            );
                          case 82:
                            l || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), o()), (t.next = 99);
                            break;
                          case 85:
                            if (((t.prev = 85), (t.t2 = t.catch(29)), "ERR_REDIRECT" !== (R = t.t2 || {}).message)) {
                              t.next = 90;
                              break;
                            }
                            return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, r, R));
                          case 90:
                            return (
                              (C = []),
                              Object(f.k)(R),
                              "function" == typeof (T = (d.a.options || d.a).layout) && (T = T(y.context)),
                              (t.next = 96),
                              this.loadLayout(T)
                            );
                          case 96:
                            this.error(R), this.$nuxt.$emit("routeChanged", e, r, R), o();
                          case 99:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [
                      [29, 85],
                      [48, 73],
                      [50, 65, 68, 71],
                    ]
                  );
                })
              )),
              D.apply(this, arguments)
            );
          }
          function N(t, r) {
            Object(f.d)(t, function (t, r, n, o) {
              return "object" !== Object(e.a)(t) || t.options || (((t = c.a.extend(t))._Ctor = t), (n.components[o] = t)), t;
            });
          }
          function A(t) {
            var e = Boolean(this.$options.nuxt.err);
            this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
            var r = e ? (d.a.options || d.a).layout : t.matched[0].components.default.options.layout;
            "function" == typeof r && (r = r(y.context)), this.setLayout(r);
          }
          function I(t) {
            t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error();
          }
          function M(t, e) {
            var r = this;
            if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
              var n = Object(f.h)(t),
                o = Object(f.g)(t),
                l = !1;
              c.a.nextTick(function () {
                n.forEach(function (t, i) {
                  if (
                    t &&
                    !t._isDestroyed &&
                    t.constructor._dataRefresh &&
                    o[i] === t.constructor &&
                    !0 !== t.$vnode.data.keepAlive &&
                    "function" == typeof t.constructor.options.data
                  ) {
                    var e = t.constructor.options.data.call(t);
                    for (var r in e) c.a.set(t.$data, r, e[r]);
                    l = !0;
                  }
                }),
                  l &&
                    window.$nuxt.$nextTick(function () {
                      window.$nuxt.$emit("triggerScroll");
                    }),
                  I(r);
              });
            }
          }
          function z(t) {
            window.onNuxtReadyCbs.forEach(function (e) {
              "function" == typeof e && e(t);
            }),
              "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t),
              _.afterEach(function (e, r) {
                c.a.nextTick(function () {
                  return t.$nuxt.$emit("routeChanged", e, r);
                });
              });
          }
          function B() {
            return (B = Object(n.a)(
              regeneratorRuntime.mark(function t(e) {
                var r, n, o, l, h;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (y = e.app), (_ = e.router), e.store, (r = new c.a(y)), (n = k.layout || "default"), (t.next = 7), r.loadLayout(n)
                        );
                      case 7:
                        return (
                          r.setLayout(n),
                          (o = function () {
                            r.$mount("#__nuxt"),
                              _.afterEach(N),
                              _.afterEach(A.bind(r)),
                              _.afterEach(M.bind(r)),
                              c.a.nextTick(function () {
                                z(r);
                              });
                          }),
                          (t.next = 11),
                          Promise.all(R(y.context.route))
                        );
                      case 11:
                        if (
                          ((l = t.sent),
                          (r.setTransitions = r.$options.nuxt.setTransitions.bind(r)),
                          l.length &&
                            (r.setTransitions($(l, _.currentRoute)),
                            (C = _.currentRoute.matched.map(function (t) {
                              return Object(f.c)(t.path)(_.currentRoute.params);
                            }))),
                          (r.$loading = {}),
                          k.error && r.error(k.error),
                          _.beforeEach(P.bind(r)),
                          _.beforeEach(T.bind(r)),
                          !k.serverRendered || !Object(f.n)(k.routePath, r.context.route.path))
                        ) {
                          t.next = 20;
                          break;
                        }
                        return t.abrupt("return", o());
                      case 20:
                        return (
                          (h = function () {
                            N(_.currentRoute, _.currentRoute), A.call(r, _.currentRoute), I(r), o();
                          }),
                          (t.next = 23),
                          new Promise(function (t) {
                            return setTimeout(t, 0);
                          })
                        );
                      case 23:
                        T.call(r, _.currentRoute, _.currentRoute, function (path) {
                          if (path) {
                            var t = _.afterEach(function (e, r) {
                              t(), h();
                            });
                            _.push(path, void 0, function (t) {
                              t && j(t);
                            });
                          } else h();
                        });
                      case 24:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
          }
          Object(d.b)(null, k.config)
            .then(function (t) {
              return B.apply(this, arguments);
            })
            .catch(j);
        }.call(this, r(44));
    },
    175: function (t, e, r) {
      "use strict";
      r(129);
    },
    176: function (t, e, r) {
      "use strict";
      r(130);
    },
    180: function (t, e, r) {
      "use strict";
      r(131);
    },
    181: function (t, e, r) {
      "use strict";
      r(132);
    },
    182: function (t, e, r) {
      "use strict";
      r(133);
    },
    183: function (t, e, r) {
      "use strict";
      r(134);
    },
    184: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, "state", function () {
          return f;
        }),
        r.d(e, "mutations", function () {
          return d;
        }),
        r.d(e, "actions", function () {
          return m;
        });
      var n = r(138),
        o = r.n(n),
        c = r(139),
        l = r.n(c),
        h = r(108),
        f = function () {
          return {
            filled: !1,
            docVersion: "",
            ghVersion: "",
            visibleAffix: !1,
            homepage: {},
            adBlocked: !1,
            focusMode: !1,
            posts: { zh: o.a, en: l.a },
            config: h.a,
          };
        },
        d = {
          toggle: function (t, e) {
            t[e] = !t[e];
          },
          setDocVersion: function (t, e) {
            t.docVersion = e;
          },
          setGhVersion: function (t, e) {
            t.ghVersion = e;
          },
          setHomepage: function (t, e) {
            t.homepage = e;
          },
          setFilled: function (t) {
            t.filled = !0;
          },
          setAdBlocked: function (t, e) {
            t.adBlocked = e;
          },
          setFocusMode: function (t, e) {
            t.focusMode = e;
          },
        },
        v = null,
        m = {
          focusMode: function (t) {
            var e = t.commit;
            v ||
              (v = setTimeout(function () {
                return e("setFocusMode", !0);
              }, 1300));
          },
          clearFocusMode: function (t) {
            var e = t.commit;
            v && (clearTimeout(v), (v = null)), e("setFocusMode", !1);
          },
        };
    },
    26: function (t, e, r) {
      "use strict";
      r.d(e, "b", function () {
        return he;
      }),
        r.d(e, "a", function () {
          return N;
        });
      r(24), r(15), r(23), r(41), r(42);
      var n = r(2),
        o = r(11),
        c = (r(27), r(20), r(18), r(17), r(45), r(0)),
        l = r.n(c),
        h = r(62),
        f = r(61),
        d = r(104),
        v = r.n(d),
        m = r(47),
        w = r.n(m),
        x = r(105),
        y = r(25),
        _ = r(1);
      function C(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function k(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? C(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source))
            : C(Object(source)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e));
              });
        }
        return t;
      }
      var O = function () {
          return Object(_.m)(r.e(3).then(r.bind(null, 439)));
        },
        j = function () {
          return Object(_.m)(Promise.all([r.e(6), r.e(2)]).then(r.bind(null, 438)));
        },
        $ = function () {};
      l.a.use(x.a);
      var P = {
        mode: "history",
        base: "/handbook/",
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior: function (t) {
          if (t.hash) {
            var e = t.hash.substr(1),
              r = document.getElementById(decodeURIComponent(e)) || document.getElementById(e);
            r && r.scrollIntoView && r.scrollIntoView({ behavior: "smooth" });
          } else document.getElementsByClassName("page-main")[0].scrollTo({ top: 0, left: 0, behavior: "smooth" });
        },
        routes: [
          { path: "/en", component: O, name: "index___en" },
          { path: "/zh", component: O, name: "index___zh" },
          { path: "/zh/*", component: j, name: "all___zh" },
          { path: "/en/*", component: j, name: "all___en" },
          { path: "/", component: O, name: "index" },
          { path: "/*", component: j, name: "all" },
        ],
        fallback: !1,
      };
      function E(t, e) {
        var base = (e._app && e._app.basePath) || P.base,
          r = new x.a(k(k({}, P), {}, { base: base })),
          n = r.push;
        r.push = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $,
            r = arguments.length > 2 ? arguments[2] : void 0;
          return n.call(this, t, e, r);
        };
        var o = r.resolve.bind(r);
        return (
          (r.resolve = function (t, e, r) {
            return "string" == typeof t && (t = Object(y.c)(t)), o(t, e, r);
          }),
          r
        );
      }
      var S = {
          name: "NuxtChild",
          functional: !0,
          props: { nuxtChildKey: { type: String, default: "" }, keepAlive: Boolean, keepAliveProps: { type: Object, default: void 0 } },
          render: function (t, e) {
            var r = e.parent,
              data = e.data,
              n = e.props,
              o = r.$createElement;
            data.nuxtChild = !0;
            for (var c = r, l = r.$nuxt.nuxt.transitions, h = r.$nuxt.nuxt.defaultTransition, f = 0; r; )
              r.$vnode && r.$vnode.data.nuxtChild && f++, (r = r.$parent);
            data.nuxtChildDepth = f;
            var d = l[f] || h,
              v = {};
            R.forEach(function (t) {
              void 0 !== d[t] && (v[t] = d[t]);
            });
            var m = {};
            L.forEach(function (t) {
              "function" == typeof d[t] && (m[t] = d[t].bind(c));
            });
            var w = m.beforeEnter;
            if (
              ((m.beforeEnter = function (t) {
                if (
                  (window.$nuxt.$nextTick(function () {
                    window.$nuxt.$emit("triggerScroll");
                  }),
                  w)
                )
                  return w.call(c, t);
              }),
              !1 === d.css)
            ) {
              var x = m.leave;
              (!x || x.length < 2) &&
                (m.leave = function (t, e) {
                  x && x.call(c, t), c.$nextTick(e);
                });
            }
            var y = o("routerView", data);
            return n.keepAlive && (y = o("keep-alive", { props: n.keepAliveProps }, [y])), o("transition", { props: v, on: m }, [y]);
          },
        },
        R = [
          "name",
          "mode",
          "appear",
          "css",
          "type",
          "duration",
          "enterClass",
          "leaveClass",
          "appearClass",
          "enterActiveClass",
          "enterActiveClass",
          "leaveActiveClass",
          "appearActiveClass",
          "enterToClass",
          "leaveToClass",
          "appearToClass",
        ],
        L = [
          "beforeEnter",
          "enter",
          "afterEnter",
          "enterCancelled",
          "beforeLeave",
          "leave",
          "afterLeave",
          "leaveCancelled",
          "beforeAppear",
          "appear",
          "afterAppear",
          "appearCancelled",
        ],
        T = {
          name: "NuxtError",
          props: { error: { type: Object, default: null } },
          computed: {
            statusCode: function () {
              return (this.error && this.error.statusCode) || 500;
            },
            message: function () {
              return this.error.message || "Error";
            },
          },
          head: function () {
            return { title: this.message, meta: [{ name: "viewport", content: "width=device-width,initial-scale=1.0,minimum-scale=1.0" }] };
          },
        },
        D = (r(175), r(7)),
        N = Object(D.a)(
          T,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("div", { staticClass: "__nuxt-error-page" }, [
              r("div", { staticClass: "error" }, [
                r(
                  "svg",
                  { attrs: { xmlns: "http://www.w3.org/2000/svg", width: "90", height: "90", fill: "#DBE1EC", viewBox: "0 0 48 48" } },
                  [
                    r("path", {
                      attrs: {
                        d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z",
                      },
                    }),
                  ]
                ),
                t._v(" "),
                r("div", { staticClass: "title" }, [t._v(t._s(t.message))]),
                t._v(" "),
                404 === t.statusCode
                  ? r(
                      "p",
                      { staticClass: "description" },
                      [
                        void 0 === t.$route
                          ? r("a", { staticClass: "error-link", attrs: { href: "/" } })
                          : r("NuxtLink", { staticClass: "error-link", attrs: { to: "/" } }, [t._v("Back to the home page")]),
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                t._m(0),
              ]),
            ]);
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "logo" }, [
                r("a", { attrs: { href: "https://nuxtjs.org", target: "_blank", rel: "noopener" } }, [t._v("Nuxt")]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        A = r(3),
        I =
          (r(101),
          r(102),
          {
            name: "Nuxt",
            components: { NuxtChild: S, NuxtError: N },
            props: {
              nuxtChildKey: { type: String, default: void 0 },
              keepAlive: Boolean,
              keepAliveProps: { type: Object, default: void 0 },
              name: { type: String, default: "default" },
            },
            errorCaptured: function (t) {
              this.displayingNuxtError && ((this.errorFromNuxtError = t), this.$forceUpdate());
            },
            computed: {
              routerViewKey: function () {
                if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1)
                  return this.nuxtChildKey || Object(_.c)(this.$route.matched[0].path)(this.$route.params);
                var t = Object(A.a)(this.$route.matched, 1)[0];
                if (!t) return this.$route.path;
                var e = t.components.default;
                if (e && e.options) {
                  var r = e.options;
                  if (r.key) return "function" == typeof r.key ? r.key(this.$route) : r.key;
                }
                return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "");
              },
            },
            beforeCreate: function () {
              l.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
            },
            render: function (t) {
              var e = this;
              return this.nuxt.err
                ? this.errorFromNuxtError
                  ? (this.$nextTick(function () {
                      return (e.errorFromNuxtError = !1);
                    }),
                    t("div", {}, [
                      t("h2", "An error occurred while showing the error page"),
                      t("p", "Unfortunately an error occurred and while showing the error page another error occurred"),
                      t("p", "Error details: ".concat(this.errorFromNuxtError.toString())),
                      t("nuxt-link", { props: { to: "/" } }, "Go back to home"),
                    ]))
                  : ((this.displayingNuxtError = !0),
                    this.$nextTick(function () {
                      return (e.displayingNuxtError = !1);
                    }),
                    t(N, { props: { error: this.nuxt.err } }))
                : t("NuxtChild", { key: this.routerViewKey, props: this.$props });
            },
          }),
        M =
          (r(21),
          r(35),
          r(28),
          r(29),
          {
            name: "NuxtLoading",
            data: function () {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !0,
              };
            },
            computed: {
              left: function () {
                return !(!this.continuous && !this.rtl) && (this.rtl ? (this.reversed ? "0px" : "auto") : this.reversed ? "auto" : "0px");
              },
            },
            beforeDestroy: function () {
              this.clear();
            },
            methods: {
              clear: function () {
                clearInterval(this._timer), clearTimeout(this._throttle), (this._timer = null);
              },
              start: function () {
                var t = this;
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function () {
                        return t.startTimer();
                      }, this.throttle))
                    : this.startTimer(),
                  this
                );
              },
              set: function (t) {
                return (this.show = !0), (this.canSucceed = !0), (this.percent = Math.min(100, Math.max(0, Math.floor(t)))), this;
              },
              get: function () {
                return this.percent;
              },
              increase: function (t) {
                return (this.percent = Math.min(100, Math.floor(this.percent + t))), this;
              },
              decrease: function (t) {
                return (this.percent = Math.max(0, Math.floor(this.percent - t))), this;
              },
              pause: function () {
                return clearInterval(this._timer), this;
              },
              resume: function () {
                return this.startTimer(), this;
              },
              finish: function () {
                return (this.percent = this.reversed ? 0 : 100), this.hide(), this;
              },
              hide: function () {
                var t = this;
                return (
                  this.clear(),
                  setTimeout(function () {
                    (t.show = !1),
                      t.$nextTick(function () {
                        (t.percent = 0), (t.reversed = !1);
                      });
                  }, 500),
                  this
                );
              },
              fail: function (t) {
                return (this.canSucceed = !1), this;
              },
              startTimer: function () {
                var t = this;
                this.show || (this.show = !0),
                  void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function () {
                    t.skipTimerCount > 0
                      ? t.skipTimerCount--
                      : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous && (t.percent >= 100 || t.percent <= 0) && ((t.skipTimerCount = 1), (t.reversed = !t.reversed)));
                  }, 100));
              },
            },
            render: function (t) {
              var e = t(!1);
              return (
                this.show &&
                  (e = t("div", {
                    staticClass: "nuxt-progress",
                    class: { "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed },
                    style: { width: this.percent + "%", left: this.left },
                  })),
                e
              );
            },
          }),
        z = (r(176), Object(D.a)(M, undefined, undefined, !1, null, null, null).exports),
        B = (r(177), r(77)),
        F =
          (r(142),
          r(73),
          l.a.extend({
            name: "SidebarNavItem",
            props: { item: { type: Object }, parentPath: { type: String }, level: { type: Number } },
            computed: {
              link: function () {
                return "/" + this.$i18n.locale + "/" + this.path;
              },
            },
            data: function () {
              var path = this.parentPath ? this.parentPath + "/" + this.item.dir : this.item.dir,
                t = (this.$route.params.pathMatch || "").startsWith(path);
              return {
                get path() {
                  return path;
                },
                collapsed: this.level >= 2 && !t,
              };
            },
            methods: {
              toggleCollapsed: function () {
                this.collapsed = !this.collapsed;
              },
            },
          })),
        U =
          (r(180),
          Object(D.a)(
            F,
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return t.item.draft
                ? t._e()
                : r(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      t.item.children
                        ? t.level > 1
                          ? r("a", { staticClass: "nav-link", on: { click: t.toggleCollapsed } }, [
                              r("span", { staticClass: "title" }, [t._v(t._s(t.item.title))]),
                              t._v(" "),
                              r("span", { class: ["glyphicon", t.collapsed ? "glyphicon-menu-down" : "glyphicon-menu-up"] }),
                            ])
                          : r("div", { staticClass: "nav-link" }, [r("span", { staticClass: "title" }, [t._v(t._s(t.item.title))])])
                        : r("nuxt-link", { staticClass: "nav-link", attrs: { to: t.link } }, [
                            r("span", { staticClass: "title" }, [t._v(t._s(t.item.title))]),
                          ]),
                      t._v(" "),
                      r(
                        "ul",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !t.item.draft && t.item.children && !t.collapsed,
                              expression: "!item.draft && item.children && !collapsed",
                            },
                          ],
                          class: ["nav", "bd-sidenav", "level" + t.level],
                        },
                        t._l(t.item.children, function (e) {
                          return r("SidebarNavItem", { key: e.dir, attrs: { parentPath: t.path, item: e, level: t.level + 1 } });
                        }),
                        1
                      ),
                    ],
                    1
                  );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        G = "14SYRIFETO",
        H = l.a.extend({
          components: { SidebarNavItem: U },
          head: { link: [{ rel: "preconnect", href: "https://".concat(G.toLowerCase(), "-dsn.algolia.net"), crossOrigin: "" }] },
          data: function () {
            return { sidebarOpen: !1 };
          },
          watch: {
            $route: function () {
              this.sidebarOpen = !1;
            },
          },
          mounted: function () {
            var t,
              e = this.$el.querySelector(".nav-link.nuxt-link-active");
            null === (t = null == e ? void 0 : e.scrollIntoView) || void 0 === t || t.call(e, { block: "nearest", inline: "start" }),
              docsearch({
                appId: G,
                apiKey: atob("MDY2ZGZiZDg3MTVlN2E0NGNjNjA4N2UyOTE0Njk1ZDE"),
                indexName: "apache_echarts",
                inputSelector: "#handbook-search-input",
                algoliaOptions: { facetFilters: ["lang:".concat(this.$i18n.locale)] },
              });
          },
        }),
        V =
          (r(181),
          Object(D.a)(
            H,
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { class: "bd-sidebar col-sm-3 col-md-2  " + (t.sidebarOpen ? "" : "closed") }, [
                r("div", { staticClass: "sidebar-search" }, [
                  r("input", { attrs: { id: "handbook-search-input", type: "search", placeholder: t.$t("searchHandbook") } }),
                  t._v(" "),
                  r("div", { staticClass: "search-icon" }, [
                    r(
                      "svg",
                      {
                        staticClass: "h-6 w-6",
                        attrs: { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                      },
                      [
                        r("path", {
                          attrs: {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                          },
                        }),
                      ]
                    ),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "bd-docs-nav" }, [
                  r(
                    "ul",
                    { staticClass: "nav bd-sidenav nav-root level0" },
                    t._l(t.$store.state.posts[t.$i18n.locale], function (t) {
                      return r("SidebarNavItem", { key: t.dir, attrs: { item: t, parentPath: "", level: 1 } });
                    }),
                    1
                  ),
                ]),
                t._v(" "),
                r(
                  "div",
                  {
                    staticClass: "open-sidebar",
                    on: {
                      click: function (e) {
                        t.sidebarOpen = !t.sidebarOpen;
                      },
                    },
                  },
                  [
                    t.sidebarOpen
                      ? r(
                          "svg",
                          {
                            staticClass: "h-6 w-6",
                            attrs: { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                          },
                          [
                            r("path", {
                              attrs: { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M15 19l-7-7 7-7" },
                            }),
                          ]
                        )
                      : r(
                          "svg",
                          {
                            staticClass: "h-6 w-6",
                            attrs: { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                          },
                          [
                            r("path", {
                              attrs: { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9 5l7 7-7 7" },
                            }),
                          ]
                        ),
                  ]
                ),
              ]);
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        X = Object(D.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("nav", { staticClass: "navbar navbar-default navbar-fixed-top", attrs: { role: "navigation" } }, [
              r("div", { staticClass: "container-fluid" }, [
                t._m(0),
                r("div", { staticClass: "collapse navbar-collapse", attrs: { id: "navbar-collapse" } }, [
                  r("ul", { staticClass: "nav navbar-nav navbar-left" }, [
                    t._m(1),
                    t._m(2),
                    t._m(3),
                    t._m(4),
                    t._m(5),
                    r("li", { attrs: { id: "nav-contribute" } }, [
                      t._m(6),
                      r("ul", { staticClass: "dropdown-menu" }, [
                        t._m(7),
                        t._m(8),
                        t._m(9),
                        t._m(10),
                        t._m(11),
                        t._m(12),
                        r("li", [
                          r("a", { attrs: { href: "https://github.com/apache/echarts", target: "_blank" } }, [
                            t._v("源码（GitHub）"),
                            r(
                              "svg",
                              {
                                staticClass: "icon-external-link",
                                attrs: {
                                  width: "15px",
                                  height: "15px",
                                  viewbox: "0 0 100 100",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                },
                              },
                              [
                                r("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
                                  },
                                }),
                                r("polygon", {
                                  attrs: {
                                    fill: "currentColor",
                                    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]),
                        r("li", [
                          r("a", { attrs: { href: "https://github.com/apache/echarts/issues", target: "_blank" } }, [
                            t._v("Issues（GitHub）"),
                            r(
                              "svg",
                              {
                                staticClass: "icon-external-link",
                                attrs: {
                                  width: "15px",
                                  height: "15px",
                                  viewbox: "0 0 100 100",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                },
                              },
                              [
                                r("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
                                  },
                                }),
                                r("polygon", {
                                  attrs: {
                                    fill: "currentColor",
                                    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    r("li", { attrs: { id: "nav-others" } }, [
                      t._m(13),
                      r("ul", { staticClass: "dropdown-menu" }, [
                        r("li", [
                          r("a", { attrs: { href: "https://www.apache.org/", target: "_blank" } }, [
                            t._v("Apache Software Foundation"),
                            r(
                              "svg",
                              {
                                staticClass: "icon-external-link",
                                attrs: {
                                  width: "15px",
                                  height: "15px",
                                  viewbox: "0 0 100 100",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                },
                              },
                              [
                                r("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
                                  },
                                }),
                                r("polygon", {
                                  attrs: {
                                    fill: "currentColor",
                                    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]),
                        t._m(14),
                        r("li", [
                          r("a", { attrs: { href: "https://www.apache.org/licenses/", target: "_blank" } }, [
                            t._v("版权"),
                            r(
                              "svg",
                              {
                                staticClass: "icon-external-link",
                                attrs: {
                                  width: "15px",
                                  height: "15px",
                                  viewbox: "0 0 100 100",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                },
                              },
                              [
                                r("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
                                  },
                                }),
                                r("polygon", {
                                  attrs: {
                                    fill: "currentColor",
                                    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]),
                        r("li", [
                          r("a", { attrs: { href: "https://www.apache.org/events/current-event", target: "_blank" } }, [
                            t._v("活动"),
                            r(
                              "svg",
                              {
                                staticClass: "icon-external-link",
                                attrs: {
                                  width: "15px",
                                  height: "15px",
                                  viewbox: "0 0 100 100",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                },
                              },
                              [
                                r("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
                                  },
                                }),
                                r("polygon", {
                                  attrs: {
                                    fill: "currentColor",
                                    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]),
                        r("li", [
                          r("a", { attrs: { href: "https://www.apache.org/foundation/sponsorship.html", target: "_blank" } }, [
                            t._v("捐赠"),
                            r(
                              "svg",
                              {
                                staticClass: "icon-external-link",
                                attrs: {
                                  width: "15px",
                                  height: "15px",
                                  viewbox: "0 0 100 100",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                },
                              },
                              [
                                r("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
                                  },
                                }),
                                r("polygon", {
                                  attrs: {
                                    fill: "currentColor",
                                    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]),
                        r("li", [
                          r("a", { attrs: { href: "https://www.apache.org/foundation/thanks.html", target: "_blank" } }, [
                            t._v("鸣谢"),
                            r(
                              "svg",
                              {
                                staticClass: "icon-external-link",
                                attrs: {
                                  width: "15px",
                                  height: "15px",
                                  viewbox: "0 0 100 100",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                },
                              },
                              [
                                r("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
                                  },
                                }),
                                r("polygon", {
                                  attrs: {
                                    fill: "currentColor",
                                    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._m(15),
                ]),
              ]),
            ]);
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "navbar-header" }, [
                r(
                  "button",
                  {
                    staticClass: "navbar-toggle collapsed",
                    attrs: { type: "button", "data-toggle": "collapse", "data-target": "#navbar-collapse", "aria-expanded": "false" },
                  },
                  [
                    r("span", { staticClass: "sr-only" }, [t._v("Toggle navigation")]),
                    r("span", { staticClass: "icon-bar" }),
                    r("span", { staticClass: "icon-bar" }),
                    r("span", { staticClass: "icon-bar" }),
                  ]
                ),
                r("a", { staticClass: "navbar-brand", attrs: { href: "https://echarts.apache.org/zh/index.html" } }, [
                  r("img", {
                    staticClass: "navbar-logo",
                    attrs: { src: "https://echarts.apache.org/zh/images/logo.png?_v_=20240226", alt: "echarts logo" },
                  }),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", { attrs: { id: "nav-index" } }, [
                r("a", { attrs: { href: "https://echarts.apache.org/zh/index.html" } }, [t._v("首页")]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", { staticClass: "dropdown", attrs: { id: "nav-doc" } }, [
                r("a", { staticClass: "dropdown-toggle", attrs: { href: "#", "data-toggle": "dropdown" } }, [
                  t._v("文档"),
                  r("b", { staticClass: "caret" }),
                ]),
                r("ul", { staticClass: "dropdown-menu" }, [
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/feature.html" } }, [t._v("特性")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/handbook/zh/get-started/" } }, [t._v("使用手册")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/api.html" } }, [t._v("API")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/option.html" } }, [t._v("配置项手册")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/changelog.html" } }, [t._v("版本记录")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/faq.html" } }, [t._v("常见问题")])]),
                  r("li", [
                    r("a", { attrs: { href: "https://echarts.apache.org/handbook/zh/basics/release-note/v5-upgrade-guide" } }, [
                      t._v("v5 升级指南"),
                    ]),
                  ]),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", { staticClass: "dropdown", attrs: { id: "nav-download" } }, [
                r("a", { staticClass: "dropdown-toggle", attrs: { href: "#", "data-toggle": "dropdown" } }, [
                  t._v("下载"),
                  r("b", { staticClass: "caret" }),
                ]),
                r("ul", { staticClass: "dropdown-menu" }, [
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/download.html" } }, [t._v("下载")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/download-theme.html" } }, [t._v("主题下载")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/download-extension.html" } }, [t._v("扩展下载")])]),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", { attrs: { id: "nav-examples" } }, [
                r("a", { attrs: { href: "https://echarts.apache.org/examples/zh/index.html" } }, [t._v("示例")]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", { attrs: { id: "nav-resources" } }, [
                r("a", { staticClass: "dropdown-toggle", attrs: { href: "#", "data-toggle": "dropdown" } }, [
                  t._v("资源"),
                  r("b", { staticClass: "caret" }),
                ]),
                r("ul", { staticClass: "dropdown-menu" }, [
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/spreadsheet.html" } }, [t._v("表格工具")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/theme-builder.html" } }, [t._v("主题构建工具")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/cheat-sheet.html" } }, [t._v("术语速查手册")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/resources.html" } }, [t._v("更多资源")])]),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("a", { staticClass: "dropdown-toggle", attrs: { href: "#", "data-toggle": "dropdown" } }, [
                t._v("社区"),
                r("b", { staticClass: "caret" }),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/events.html" } }, [t._v("活动")])]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/committers.html" } }, [t._v("贡献者列表")])]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/maillist.html" } }, [t._v("邮件列表")])]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/contributing.html" } }, [t._v("如何贡献")])]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/dependencies.html" } }, [t._v("依赖项")])]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/coding-standard.html" } }, [t._v("代码规范")])]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("a", { staticClass: "dropdown-toggle", attrs: { href: "#", "data-toggle": "dropdown" } }, [
                t._v("ASF"),
                r("b", { staticClass: "caret" }),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", [r("a", { attrs: { href: "https://echarts.apache.org/zh/security.html" } }, [t._v("安全")])]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("ul", { staticClass: "nav navbar-nav navbar-right" }, [
                r("li", { attrs: { id: "nav-homeen" } }, [
                  r("a", { attrs: { href: "javascript:;", onclick: "changeLang('en')" } }, [t._v("EN")]),
                ]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        K = Object(D.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("nav", { staticClass: "navbar navbar-default navbar-fixed-top", attrs: { role: "navigation" } }, [
              r("div", { staticClass: "container-fluid" }, [
                t._m(0),
                r("div", { staticClass: "collapse navbar-collapse", attrs: { id: "navbar-collapse" } }, [
                  r("ul", { staticClass: "nav navbar-nav navbar-left" }, [
                    t._m(1),
                    t._m(2),
                    t._m(3),
                    t._m(4),
                    t._m(5),
                    r("li", { attrs: { id: "nav-contribute" } }, [
                      t._m(6),
                      r("ul", { staticClass: "dropdown-menu" }, [
                        t._m(7),
                        t._m(8),
                        t._m(9),
                        t._m(10),
                        t._m(11),
                        t._m(12),
                        r("li", [
                          r("a", { attrs: { href: "https://github.com/apache/echarts", target: "_blank" } }, [
                            t._v("Source Code (GitHub)"),
                            r(
                              "svg",
                              {
                                staticClass: "icon-external-link",
                                attrs: {
                                  width: "15px",
                                  height: "15px",
                                  viewbox: "0 0 100 100",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                },
                              },
                              [
                                r("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
                                  },
                                }),
                                r("polygon", {
                                  attrs: {
                                    fill: "currentColor",
                                    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]),
                        r("li", [
                          r("a", { attrs: { href: "https://github.com/apache/echarts/issues", target: "_blank" } }, [
                            t._v("Issues (GitHub)"),
                            r(
                              "svg",
                              {
                                staticClass: "icon-external-link",
                                attrs: {
                                  width: "15px",
                                  height: "15px",
                                  viewbox: "0 0 100 100",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                },
                              },
                              [
                                r("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
                                  },
                                }),
                                r("polygon", {
                                  attrs: {
                                    fill: "currentColor",
                                    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    r("li", { attrs: { id: "nav-others" } }, [
                      t._m(13),
                      r("ul", { staticClass: "dropdown-menu" }, [
                        r("li", [
                          r("a", { attrs: { href: "https://www.apache.org/", target: "_blank" } }, [
                            t._v("Apache Software Foundation"),
                            r(
                              "svg",
                              {
                                staticClass: "icon-external-link",
                                attrs: {
                                  width: "15px",
                                  height: "15px",
                                  viewbox: "0 0 100 100",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                },
                              },
                              [
                                r("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
                                  },
                                }),
                                r("polygon", {
                                  attrs: {
                                    fill: "currentColor",
                                    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]),
                        t._m(14),
                        r("li", [
                          r("a", { attrs: { href: "https://www.apache.org/licenses/", target: "_blank" } }, [
                            t._v("License"),
                            r(
                              "svg",
                              {
                                staticClass: "icon-external-link",
                                attrs: {
                                  width: "15px",
                                  height: "15px",
                                  viewbox: "0 0 100 100",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                },
                              },
                              [
                                r("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
                                  },
                                }),
                                r("polygon", {
                                  attrs: {
                                    fill: "currentColor",
                                    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]),
                        r("li", [
                          r("a", { attrs: { href: "https://www.apache.org/events/current-event", target: "_blank" } }, [
                            t._v("Events"),
                            r(
                              "svg",
                              {
                                staticClass: "icon-external-link",
                                attrs: {
                                  width: "15px",
                                  height: "15px",
                                  viewbox: "0 0 100 100",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                },
                              },
                              [
                                r("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
                                  },
                                }),
                                r("polygon", {
                                  attrs: {
                                    fill: "currentColor",
                                    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]),
                        r("li", [
                          r("a", { attrs: { href: "https://www.apache.org/foundation/sponsorship.html", target: "_blank" } }, [
                            t._v("Sponsorship"),
                            r(
                              "svg",
                              {
                                staticClass: "icon-external-link",
                                attrs: {
                                  width: "15px",
                                  height: "15px",
                                  viewbox: "0 0 100 100",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                },
                              },
                              [
                                r("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
                                  },
                                }),
                                r("polygon", {
                                  attrs: {
                                    fill: "currentColor",
                                    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]),
                        r("li", [
                          r("a", { attrs: { href: "https://www.apache.org/foundation/thanks.html", target: "_blank" } }, [
                            t._v("Thanks"),
                            r(
                              "svg",
                              {
                                staticClass: "icon-external-link",
                                attrs: {
                                  width: "15px",
                                  height: "15px",
                                  viewbox: "0 0 100 100",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                },
                              },
                              [
                                r("path", {
                                  attrs: {
                                    fill: "currentColor",
                                    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
                                  },
                                }),
                                r("polygon", {
                                  attrs: {
                                    fill: "currentColor",
                                    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._m(15),
                ]),
              ]),
            ]);
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "navbar-header" }, [
                r(
                  "button",
                  {
                    staticClass: "navbar-toggle collapsed",
                    attrs: { type: "button", "data-toggle": "collapse", "data-target": "#navbar-collapse", "aria-expanded": "false" },
                  },
                  [
                    r("span", { staticClass: "sr-only" }, [t._v("Toggle navigation")]),
                    r("span", { staticClass: "icon-bar" }),
                    r("span", { staticClass: "icon-bar" }),
                    r("span", { staticClass: "icon-bar" }),
                  ]
                ),
                r("a", { staticClass: "navbar-brand", attrs: { href: "https://echarts.apache.org/en/index.html" } }, [
                  r("img", {
                    staticClass: "navbar-logo",
                    attrs: { src: "https://echarts.apache.org/en/images/logo.png?_v_=20240226", alt: "echarts logo" },
                  }),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", { attrs: { id: "nav-index" } }, [
                r("a", { attrs: { href: "https://echarts.apache.org/en/index.html" } }, [t._v("Home")]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", { staticClass: "dropdown", attrs: { id: "nav-doc" } }, [
                r("a", { staticClass: "dropdown-toggle", attrs: { href: "#", "data-toggle": "dropdown" } }, [
                  t._v("Docs"),
                  r("b", { staticClass: "caret" }),
                ]),
                r("ul", { staticClass: "dropdown-menu" }, [
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/feature.html" } }, [t._v("Features")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/handbook/en/get-started/" } }, [t._v("Handbook")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/api.html" } }, [t._v("API")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/option.html" } }, [t._v("Chart Configuration")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/changelog.html" } }, [t._v("Changelog")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/faq.html" } }, [t._v("FAQ")])]),
                  r("li", [
                    r("a", { attrs: { href: "https://echarts.apache.org/handbook/en/basics/release-note/v5-upgrade-guide" } }, [
                      t._v("V5 Upgrade Guide"),
                    ]),
                  ]),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", { staticClass: "dropdown", attrs: { id: "nav-download" } }, [
                r("a", { staticClass: "dropdown-toggle", attrs: { href: "#", "data-toggle": "dropdown" } }, [
                  t._v("Download"),
                  r("b", { staticClass: "caret" }),
                ]),
                r("ul", { staticClass: "dropdown-menu" }, [
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/download.html" } }, [t._v("Download")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/download-theme.html" } }, [t._v("Download Themes")])]),
                  r("li", [
                    r("a", { attrs: { href: "https://echarts.apache.org/en/download-extension.html" } }, [t._v("Download Extensions")]),
                  ]),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", { attrs: { id: "nav-examples" } }, [
                r("a", { attrs: { href: "https://echarts.apache.org/examples/en/index.html" } }, [t._v("Examples")]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", { attrs: { id: "nav-resources" } }, [
                r("a", { staticClass: "dropdown-toggle", attrs: { href: "#", "data-toggle": "dropdown" } }, [
                  t._v("Resources"),
                  r("b", { staticClass: "caret" }),
                ]),
                r("ul", { staticClass: "dropdown-menu" }, [
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/spreadsheet.html" } }, [t._v("Spread Sheet Tool")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/theme-builder.html" } }, [t._v("Theme Builder")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/cheat-sheet.html" } }, [t._v("Cheat Sheet")])]),
                  r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/resources.html" } }, [t._v("More Resources")])]),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("a", { staticClass: "dropdown-toggle", attrs: { href: "#", "data-toggle": "dropdown" } }, [
                t._v("Community"),
                r("b", { staticClass: "caret" }),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/events.html" } }, [t._v("Events")])]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/committers.html" } }, [t._v("Committers")])]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/maillist.html" } }, [t._v("Mailing List")])]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/contributing.html" } }, [t._v("How to Contribute")])]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/dependencies.html" } }, [t._v("Dependencies")])]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/coding-standard.html" } }, [t._v("Code Standard")])]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("a", { staticClass: "dropdown-toggle", attrs: { href: "#", "data-toggle": "dropdown" } }, [
                t._v("ASF"),
                r("b", { staticClass: "caret" }),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("li", [r("a", { attrs: { href: "https://echarts.apache.org/en/security.html" } }, [t._v("Security")])]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("ul", { staticClass: "nav navbar-nav navbar-right" }, [
                r("li", { attrs: { id: "nav-homeen" } }, [
                  r("a", { attrs: { href: "javascript:;", onclick: "changeLang('zh')" } }, [t._v("中文")]),
                ]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        Y = l.a.extend({
          components: {},
          mounted: function () {
            var t = this.$i18n.locale;
            window.changeLang = function () {
              window.location.href = window.location.href.replace("/".concat(t, "/"), "zh" === t ? "/en/" : "/zh/");
            };
          },
          computed: {
            navComponent: function () {
              return "zh" === this.$i18n.locale ? X : K;
            },
          },
        }),
        W =
          (r(182),
          {
            components: {
              Sidebar: V,
              Navbar: Object(D.a)(
                Y,
                function () {
                  var t = this,
                    e = t.$createElement;
                  return (t._self._c || e)(t.navComponent, { tag: "div" });
                },
                [],
                !1,
                null,
                null,
                null
              ).exports,
            },
            head: function () {
              var t = this.$i18n.locale,
                e = "zh" === t,
                r = e ? "使用手册" : "Handbook";
              return {
                titleTemplate: function (t) {
                  return "".concat(t ? t + " - " : "").concat(r, " - Apache ECharts");
                },
                htmlAttrs: { lang: e ? "zh-CN" : "en" },
                link: [
                  { rel: "shortcut icon", type: "image/png", href: "https://echarts.apache.org/".concat(t, "/images/favicon.png") },
                ].concat(
                  Object(B.a)(
                    (e
                      ? ["https://lib.baomitu.com", "https://registry.npmmirror.com"]
                      : ["https://fastly.jsdelivr.net", "https://cdn.jsdelivr.net"]
                    )
                      .concat("https://avatars.githubusercontent.com")
                      .map(function (t) {
                        return { rel: "dns-prefetch", href: t };
                      })
                  ),
                  [
                    {
                      rel: "stylesheet",
                      href: e ? "/css/bootstrap.min.css" : "/css/bootstrap.min.css",
                    },
                    { rel: "stylesheet", href: "https://echarts.apache.org/".concat(t, "/css/main.css") },
                    {
                      rel: "stylesheet",
                      href: e ? "https://lib.baomitu.com/docsearch.js/2.6.3/docsearch.min.css" : "/examples/css/docsearch.min.css",
                    },
                  ]
                ),
                script: [
                  {
                    src: e ? "/js/jquery.min.js" : "/examples/js/jquery.min.js",
                  },
                  {
                    src: e ? "/js/bootstrap.min.js" : "/js/bootstrap.min.js",
                  },
                  {
                    src: e ? "https://lib.baomitu.com/docsearch.js/2.6.3/docsearch.min.js" : "/examples/js/docsearch.min.js",
                  },
                ],
                noscript: [
                  {
                    body: !0,
                    innerHTML: "",
                  },
                ],
                __dangerouslyDisableSanitizers: ["noscript"],
              };
            },
            mounted: function () {
              var t = location.hash;
              (location.hash = ""), (location.hash = t);
            },
          }),
        J =
          (r(183),
          Object(D.a)(
            W,
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "div",
                [
                  r("navbar"),
                  t._v(" "),
                  r("div", { staticClass: "page-main" }, [
                    r(
                      "div",
                      { staticClass: "page-content handbook-content single-page container-fluid row flex-xl-nowrap" },
                      [
                        r("sidebar"),
                        t._v(" "),
                        r("div", { staticClass: "bd-content col-sm-7 pl-sm-2 col-12" }, [
                          r("div", { staticClass: "post-content content" }, [r("nuxt")], 1),
                        ]),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports);
      function Q(t, e) {
        var r = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
        if (!r) {
          if (
            Array.isArray(t) ||
            (r = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return Z(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === r && t.constructor && (r = t.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(t);
              if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Z(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            r && (t = r);
            var i = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            r = r.call(t);
          },
          n: function () {
            var t = r.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == r.return || r.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function Z(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
        return r;
      }
      var tt = { _default: Object(_.s)(J) },
        et = {
          render: function (t, e) {
            var r = t("NuxtLoading", { ref: "loading" }),
              n = t(this.layout || "nuxt"),
              o = t("div", { domProps: { id: "__layout" }, key: this.layoutName }, [n]),
              c = t(
                "transition",
                {
                  props: { name: "layout", mode: "out-in" },
                  on: {
                    beforeEnter: function (t) {
                      window.$nuxt.$nextTick(function () {
                        window.$nuxt.$emit("triggerScroll");
                      });
                    },
                  },
                },
                [o]
              );
            return t("div", { domProps: { id: "__nuxt" } }, [r, c]);
          },
          data: function () {
            return { isOnline: !0, layout: null, layoutName: "", nbFetching: 0 };
          },
          beforeCreate: function () {
            l.a.util.defineReactive(this, "nuxt", this.$options.nuxt);
          },
          created: function () {
            (this.$root.$options.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener("online", this.refreshOnlineStatus),
              window.addEventListener("offline", this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context);
          },
          mounted: function () {
            var t = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.$loading = t.$refs.loading;
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          watch: { "nuxt.err": "errorChanged" },
          computed: {
            isOffline: function () {
              return !this.isOnline;
            },
            isFetching: function () {
              return this.nbFetching > 0;
            },
            isPreview: function () {
              return Boolean(this.$options.previewData);
            },
          },
          methods: {
            refreshOnlineStatus: function () {
              void 0 === window.navigator.onLine ? (this.isOnline = !0) : (this.isOnline = window.navigator.onLine);
            },
            refresh: function () {
              var t = this;
              return Object(n.a)(
                regeneratorRuntime.mark(function e() {
                  var r, n;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((r = Object(_.h)(t.$route)).length) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              t.$loading.start(),
                              (n = r.map(function (e) {
                                var p = [];
                                if (
                                  (e.$options.fetch && e.$options.fetch.length && p.push(Object(_.q)(e.$options.fetch, t.context)),
                                  e.$fetch)
                                )
                                  p.push(e.$fetch());
                                else {
                                  var r,
                                    n = Q(Object(_.e)(e.$vnode.componentInstance));
                                  try {
                                    for (n.s(); !(r = n.n()).done; ) {
                                      var component = r.value;
                                      p.push(component.$fetch());
                                    }
                                  } catch (t) {
                                    n.e(t);
                                  } finally {
                                    n.f();
                                  }
                                }
                                return (
                                  e.$options.asyncData &&
                                    p.push(
                                      Object(_.q)(e.$options.asyncData, t.context).then(function (t) {
                                        for (var r in t) l.a.set(e.$data, r, t[r]);
                                      })
                                    ),
                                  Promise.all(p)
                                );
                              })),
                              (e.prev = 5),
                              (e.next = 8),
                              Promise.all(n)
                            );
                          case 8:
                            e.next = 15;
                            break;
                          case 10:
                            (e.prev = 10), (e.t0 = e.catch(5)), t.$loading.fail(e.t0), Object(_.k)(e.t0), t.error(e.t0);
                          case 15:
                            t.$loading.finish();
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 10]]
                  );
                })
              )();
            },
            errorChanged: function () {
              if (this.nuxt.err) {
                this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                var t = (N.options || N).layout;
                "function" == typeof t && (t = t(this.context)), this.setLayout(t);
              }
            },
            setLayout: function (t) {
              return (t && tt["_" + t]) || (t = "default"), (this.layoutName = t), (this.layout = tt["_" + t]), this.layout;
            },
            loadLayout: function (t) {
              return (t && tt["_" + t]) || (t = "default"), Promise.resolve(tt["_" + t]);
            },
          },
          components: { NuxtLoading: z },
        };
      l.a.use(h.a);
      var nt = {};
      (nt = (function (t, e) {
        if ((t = t.default || t).commit) throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
        return (
          "function" != typeof t && (t = Object.assign({}, t)),
          (function (t, e) {
            if (t.state && "function" != typeof t.state) {
              console.warn("'state' should be a method that returns an object in ".concat(e));
              var r = Object.assign({}, t.state);
              t = Object.assign({}, t, {
                state: function () {
                  return r;
                },
              });
            }
            return t;
          })(t, e)
        );
      })(r(184), "store/index.js")).modules = nt.modules || {};
      var at =
        nt instanceof Function
          ? nt
          : function () {
              return new h.a.Store(Object.assign({ strict: !1 }, nt));
            };
      var ot = r(16),
        it =
          (r(103),
          r(49),
          r(97),
          r(40),
          r(36),
          {
            COMPONENT_OPTIONS_KEY: "nuxtI18n",
            STRATEGIES: {
              PREFIX: "prefix",
              PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
              PREFIX_AND_DEFAULT: "prefix_and_default",
              NO_PREFIX: "no_prefix",
            },
          }),
        st = !0,
        ct = void 0,
        lt = {
          vueI18n: {
            fallbackLocale: "en",
            messages: {
              en: {
                inThisPage: "In This Page",
                searchHandbook: "Search Handbook",
                contributorsWithThisDocument: "Contributors",
                editInThisDocumentTip: "Edit this Document",
                editInGithub: "Edit this page on GitHub",
              },
              zh: {
                inThisPage: "本页目录",
                searchHandbook: "搜索手册",
                contributorsWithThisDocument: "本文贡献者",
                editInThisDocumentTip: "编辑本文",
                editInGithub: "在 GitHub 上编辑本页",
              },
            },
          },
          vueI18nLoader: !1,
          locales: ["en", "zh"],
          defaultLocale: "en",
          defaultDirection: "ltr",
          routesNameSeparator: "___",
          defaultLocaleRouteNameSuffix: "default",
          sortRoutes: !0,
          strategy: "prefix",
          lazy: !1,
          langDir: null,
          rootRedirect: null,
          detectBrowserLanguage: {
            alwaysRedirect: !1,
            cookieCrossOrigin: !1,
            cookieDomain: null,
            cookieKey: "i18n_redirected",
            cookieSecure: !1,
            fallbackLocale: "",
            onlyOnNoPrefix: !1,
            onlyOnRoot: !0,
            useCookie: !0,
          },
          differentDomains: !1,
          seo: !1,
          baseUrl: "",
          vuex: { moduleName: "i18n", syncLocale: !1, syncMessages: !1, syncRouteParams: !0 },
          parsePages: !0,
          pages: {},
          skipSettingLocaleOnNavigate: !1,
          beforeLanguageSwitch: function () {
            return null;
          },
          onBeforeLanguageSwitch: function () {},
          onLanguageSwitched: function () {
            return null;
          },
          normalizedLocales: [{ code: "en" }, { code: "zh" }],
          localeCodes: ["en", "zh"],
        },
        ut = (r(109), r(63), r(185), r(106)),
        ht = r.n(ut);
      function ft(t, e) {
        var r = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
        if (!r) {
          if (
            Array.isArray(t) ||
            (r = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return pt(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === r && t.constructor && (r = t.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(t);
              if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pt(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            r && (t = r);
            var i = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            r = r.call(t);
          },
          n: function () {
            var t = r.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == r.return || r.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function pt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
        return r;
      }
      function vt(text) {
        return "[nuxt-i18n] ".concat(text);
      }
      function mt(t, e) {
        var r,
          n = [],
          o = [],
          c = ft(t);
        try {
          for (c.s(); !(r = c.n()).done; ) {
            var l = r.value,
              code = l.code,
              h = l.iso || code;
            o.push({ code: code, iso: h });
          }
        } catch (t) {
          c.e(t);
        } finally {
          c.f();
        }
        var f,
          d = ft(e.entries());
        try {
          var v = function () {
            var t = Object(A.a)(f.value, 2),
              r = t[0],
              c = t[1],
              l = o.find(function (t) {
                return t.iso.toLowerCase() === c.toLowerCase();
              });
            if (l) return n.push({ code: l.code, score: 1 - r / e.length }), "break";
          };
          for (d.s(); !(f = d.n()).done; ) {
            if ("break" === v()) break;
          }
        } catch (t) {
          d.e(t);
        } finally {
          d.f();
        }
        var m,
          w = ft(e.entries());
        try {
          var x = function () {
            var t = Object(A.a)(m.value, 2),
              r = t[0],
              c = t[1].split("-")[0].toLowerCase(),
              l = o.find(function (t) {
                return t.iso.split("-")[0].toLowerCase() === c;
              });
            if (l) return n.push({ code: l.code, score: 0.999 - r / e.length }), "break";
          };
          for (w.s(); !(m = w.n()).done; ) {
            if ("break" === x()) break;
          }
        } catch (t) {
          w.e(t);
        } finally {
          w.f();
        }
        return (
          n.length > 1 &&
            n.sort(function (t, e) {
              return t.score === e.score ? e.code.length - t.code.length : e.score - t.score;
            }),
          n.length ? n[0].code : void 0
        );
      }
      function gt(t, e) {
        var r;
        if ((r = window.location.host)) {
          var n = t.find(function (t) {
            return t.domain === r;
          });
          if (n) return n.code;
        }
        return "";
      }
      function bt(t) {
        return new RegExp("^/(".concat(t.join("|"), ")(?:/|$)"), "i");
      }
      function wt(t, e) {
        var r = e.routesNameSeparator,
          n = e.defaultLocaleRouteNameSuffix,
          o = "(".concat(t.join("|"), ")"),
          c = "(?:".concat(r).concat(n, ")?"),
          l = new RegExp("".concat(r).concat(o).concat(c, "$"), "i"),
          h = bt(t);
        return function (t) {
          if (t.name) {
            var e = t.name.match(l);
            if (e && e.length > 1) return e[1];
          } else if (t.path) {
            var r = t.path.match(h);
            if (r && r.length > 1) return r[1];
          }
          return "";
        };
      }
      function xt(t, e) {
        var r,
          n = e.useCookie,
          o = e.cookieKey,
          c = e.localeCodes;
        if (n && (r = ht.a.get(o)) && c.includes(r)) return r;
      }
      function yt(t, e, r) {
        var n = r.useCookie,
          o = r.cookieDomain,
          c = r.cookieKey,
          l = r.cookieSecure,
          h = r.cookieCrossOrigin;
        if (n) {
          var f = new Date(),
            d = { expires: new Date(f.setDate(f.getDate() + 365)), path: "/", sameSite: h ? "none" : "lax", secure: h || l };
          o && (d.domain = o), ht.a.set(c, t, d);
        }
      }
      var _t = r(43);
      function Ct(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function kt(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Ct(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source))
            : Ct(Object(source)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e));
              });
        }
        return t;
      }
      function Ot(t, e) {
        return jt.apply(this, arguments);
      }
      function jt() {
        return (jt = Object(n.a)(
          regeneratorRuntime.mark(function t(e, r) {
            var n, o, c;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (n = e.app),
                      (o = n.i18n).loadedLanguages || (o.loadedLanguages = []),
                      o.loadedLanguages.includes(r) ||
                        ((c = lt.normalizedLocales.find(function (t) {
                          return t.code === r;
                        }))
                          ? c.file || console.warn(vt("Could not find lang file for locale ".concat(r)))
                          : console.warn(vt('Attempted to load messages for non-existant locale code "'.concat(r, '"'))));
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function $t(t, e, r, n) {
        var o = n.differentDomains,
          c = n.normalizedLocales;
        if ("function" == typeof t) return t(e);
        if (o && r) {
          var l = Pt(r, e.req, { normalizedLocales: c });
          if (l) return l;
        }
        return t;
      }
      function Pt(t, e, r) {
        var n,
          o = r.normalizedLocales.find(function (e) {
            return e.code === t;
          });
        if (o && o.domain)
          return Object(_t.hasProtocol)(o.domain)
            ? o.domain
            : ((n = window.location.protocol.split(":")[0]), "".concat(n, "://").concat(o.domain));
        console.warn(vt("Could not find domain name for locale ".concat(t)));
      }
      function Et(t, e, r) {
        var n = {
          namespaced: !0,
          state: function () {
            return kt(
              kt(kt({}, e.syncLocale ? { locale: "" } : {}), e.syncMessages ? { messages: {} } : {}),
              e.syncRouteParams ? { routeParams: {} } : {}
            );
          },
          actions: kt(
            kt(
              kt(
                {},
                e.syncLocale
                  ? {
                      setLocale: function (t, e) {
                        (0, t.commit)("setLocale", e);
                      },
                    }
                  : {}
              ),
              e.syncMessages
                ? {
                    setMessages: function (t, e) {
                      (0, t.commit)("setMessages", e);
                    },
                  }
                : {}
            ),
            e.syncRouteParams
              ? {
                  setRouteParams: function (t, e) {
                    (0, t.commit)("setRouteParams", e);
                  },
                }
              : {}
          ),
          mutations: kt(
            kt(
              kt(
                {},
                e.syncLocale
                  ? {
                      setLocale: function (t, e) {
                        t.locale = e;
                      },
                    }
                  : {}
              ),
              e.syncMessages
                ? {
                    setMessages: function (t, e) {
                      t.messages = e;
                    },
                  }
                : {}
            ),
            e.syncRouteParams
              ? {
                  setRouteParams: function (t, e) {
                    t.routeParams = e;
                  },
                }
              : {}
          ),
          getters: kt(
            {},
            e.syncRouteParams
              ? {
                  localeRouteParams: function (t) {
                    var e = t.routeParams;
                    return function (t) {
                      return (e && e[t]) || {};
                    };
                  },
                }
              : {}
          ),
        };
        t.registerModule(e.moduleName, n, { preserveState: !!t.state[e.moduleName] });
      }
      function St(t) {
        return Rt.apply(this, arguments);
      }
      function Rt() {
        return (
          (Rt = Object(n.a)(
            regeneratorRuntime.mark(function t(e) {
              var r,
                n,
                o,
                c = arguments;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((r = c.length > 1 && void 0 !== c[1] ? c[1] : null),
                        (n = c.length > 2 && void 0 !== c[2] ? c[2] : null),
                        !(o = c.length > 3 ? c[3] : void 0) || !e)
                      ) {
                        t.next = 10;
                        break;
                      }
                      if (null === r || !o.syncLocale) {
                        t.next = 7;
                        break;
                      }
                      return (t.next = 7), e.dispatch(o.moduleName + "/setLocale", r);
                    case 7:
                      if (null === n || !o.syncMessages) {
                        t.next = 10;
                        break;
                      }
                      return (t.next = 10), e.dispatch(o.moduleName + "/setMessages", n);
                    case 10:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          Rt.apply(this, arguments)
        );
      }
      var Lt = r(141),
        Tt = r(59),
        Dt = (function () {
          var t = Object(n.a)(
            regeneratorRuntime.mark(function t(e) {
              var r, n, o, c, l, h, f;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((r = e.app), !e.isHMR)) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return");
                    case 3:
                      return (t.next = 5), r.i18n.__onNavigate(e.route);
                    case 5:
                      (n = t.sent),
                        (o = Object(A.a)(n, 3)),
                        (c = o[0]),
                        (l = o[1]),
                        (h = o[2]),
                        c && l && ((f = h ? e.route.query : void 0), e.redirect(c, l, f));
                    case 11:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      Tt.a.nuxti18n = Dt;
      var Nt = ["params"];
      function At(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function It(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? At(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source))
            : At(Object(source)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e));
              });
        }
        return t;
      }
      function Mt(t, e) {
        var r = Ft.call(this, t, e);
        return r ? r.route.fullPath : "";
      }
      function zt(t, e) {
        var r = Ft.call(this, t, e);
        return r ? r.route : void 0;
      }
      function Bt(t, e) {
        var r = Ft.call(this, t, e);
        return r ? r.location : void 0;
      }
      function Ft(t, e) {
        if (t) {
          var r = this.i18n;
          if ((e = e || r.locale)) {
            "string" == typeof t && (t = "/" === t[0] ? { path: t } : { name: t });
            var n = Object.assign({}, t);
            if (n.path && !n.name) {
              var o = this.router.resolve(n).route,
                c = this.getRouteBaseName(o);
              if (c) n = { name: Gt(c, e), params: o.params, query: o.query, hash: o.hash };
              else
                !(
                  (e === lt.defaultLocale &&
                    [it.STRATEGIES.PREFIX_EXCEPT_DEFAULT, it.STRATEGIES.PREFIX_AND_DEFAULT].includes(lt.strategy)) ||
                  lt.strategy === it.STRATEGIES.NO_PREFIX ||
                  r.differentDomains
                ) && (n.path = "/".concat(e).concat(n.path)),
                  (n.path = ct ? Object(_t.withTrailingSlash)(n.path, !0) : Object(_t.withoutTrailingSlash)(n.path, !0));
            } else {
              n.name || n.path || (n.name = this.getRouteBaseName()), (n.name = Gt(n.name, e));
              var l = n.params;
              l && void 0 === l[0] && l.pathMatch && (l[0] = l.pathMatch);
            }
            var h = this.router.resolve(n);
            return h.route.name ? h : this.router.resolve(t);
          }
        }
      }
      function qt(t) {
        var e = this.getRouteBaseName();
        if (!e) return "";
        var r = this.i18n,
          n = this.route,
          o = this.store,
          c = n.params,
          l = Object(Lt.a)(n, Nt),
          h = {};
        lt.vuex && lt.vuex.syncRouteParams && o && (h = o.getters["".concat(lt.vuex.moduleName, "/localeRouteParams")](t));
        var f = Object.assign({}, l, { name: e, params: It(It(It({}, c), h), {}, { 0: c.pathMatch }) }),
          path = this.localePath(f, t);
        if (r.differentDomains) {
          var d = { differentDomains: r.differentDomains, normalizedLocales: lt.normalizedLocales },
            v = Pt(t, this.req, d);
          v && (path = v + path);
        }
        return path;
      }
      function Ut(t) {
        var e = void 0 !== t ? t : this.route;
        if (e && e.name) return e.name.split(lt.routesNameSeparator)[0];
      }
      function Gt(t, e) {
        var r = t + (lt.strategy === it.STRATEGIES.NO_PREFIX ? "" : lt.routesNameSeparator + e);
        return (
          e === lt.defaultLocale &&
            lt.strategy === it.STRATEGIES.PREFIX_AND_DEFAULT &&
            (r += lt.routesNameSeparator + lt.defaultLocaleRouteNameSuffix),
          r
        );
      }
      var Ht = function (t) {
          return function () {
            var e = {
              getRouteBaseName: this.getRouteBaseName,
              i18n: this.$i18n,
              localePath: this.localePath,
              localeRoute: this.localeRoute,
              localeLocation: this.localeLocation,
              req: null,
              route: this.$route,
              router: this.$router,
              store: this.$store,
            };
            return t.call.apply(t, [e].concat(Array.prototype.slice.call(arguments)));
          };
        },
        Vt = function (t, e) {
          return function () {
            var r = t.app,
              n = (t.req, t.route),
              o = t.store,
              c = {
                getRouteBaseName: r.getRouteBaseName,
                i18n: r.i18n,
                localePath: r.localePath,
                localeLocation: r.localeLocation,
                localeRoute: r.localeRoute,
                req: null,
                route: n,
                router: r.router,
                store: o,
              };
            return e.call.apply(e, [c].concat(Array.prototype.slice.call(arguments)));
          };
        },
        Xt = {
          install: function (t) {
            t.mixin({
              methods: {
                localePath: Ht(Mt),
                localeRoute: Ht(zt),
                localeLocation: Ht(Bt),
                switchLocalePath: Ht(qt),
                getRouteBaseName: Ht(Ut),
              },
            });
          },
        },
        Kt = function (t) {
          l.a.use(Xt);
          var e = t.app,
            r = t.store;
          (e.localePath = t.localePath = Vt(t, Mt)),
            (e.localeRoute = t.localeRoute = Vt(t, zt)),
            (e.localeLocation = t.localeLocation = Vt(t, Bt)),
            (e.switchLocalePath = t.switchLocalePath = Vt(t, qt)),
            (e.getRouteBaseName = t.getRouteBaseName = Vt(t, Ut)),
            r &&
              ((r.localePath = e.localePath),
              (r.localeRoute = e.localeRoute),
              (r.localeLocation = e.localeLocation),
              (r.switchLocalePath = e.switchLocalePath),
              (r.getRouteBaseName = e.getRouteBaseName));
        },
        Yt = r(107);
      r(186);
      function Wt(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function Jt(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Wt(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source))
            : Wt(Object(source)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e));
              });
        }
        return t;
      }
      function Qt(t, e) {
        var r = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
        if (!r) {
          if (
            Array.isArray(t) ||
            (r = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return Zt(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === r && t.constructor && (r = t.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(t);
              if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zt(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            r && (t = r);
            var i = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            r = r.call(t);
          },
          n: function () {
            var t = r.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == r.return || r.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function Zt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
        return r;
      }
      function te() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.addDirAttribute,
          r = void 0 === e || e,
          n = t.addSeoAttributes,
          o = void 0 !== n && n;
        if (!this.$i18n) return {};
        var c = { htmlAttrs: {}, link: [], meta: [] },
          l = this.$i18n.localeProperties,
          h = l.iso,
          d = l.dir || lt.defaultDirection;
        if (
          (r && (c.htmlAttrs.dir = d),
          o &&
            (f.a.hasMetaInfo ? f.a.hasMetaInfo(this) : this._hasMetaInfo) &&
            this.$i18n.locale &&
            this.$i18n.locales &&
            !1 !== this.$options[it.COMPONENT_OPTIONS_KEY] &&
            (!this.$options[it.COMPONENT_OPTIONS_KEY] || !1 !== this.$options[it.COMPONENT_OPTIONS_KEY].seo))
        ) {
          h && (c.htmlAttrs.lang = h);
          var v = this.$i18n.locales;
          m.bind(this)(v, this.$i18n.__baseUrl, c.link),
            w.bind(this)(this.$i18n.__baseUrl, c.link),
            x.bind(this)(l, h, c.meta),
            y.bind(this)(v, h, c.meta);
        }
        function m(t, e, link) {
          if (lt.strategy !== it.STRATEGIES.NO_PREFIX) {
            var r,
              n = new Map(),
              o = Qt(t);
            try {
              for (o.s(); !(r = o.n()).done; ) {
                var c = r.value,
                  l = c.iso;
                if (l) {
                  var h = l.split("-"),
                    f = Object(A.a)(h, 2),
                    d = f[0],
                    v = f[1];
                  d && v && (c.isCatchallLocale || !n.has(d)) && n.set(d, c), n.set(l, c);
                } else console.warn(vt("Locale ISO code is required to generate alternate link"));
              }
            } catch (t) {
              o.e(t);
            } finally {
              o.f();
            }
            var m,
              w = Qt(n.entries());
            try {
              for (w.s(); !(m = w.n()).done; ) {
                var x = Object(A.a)(m.value, 2),
                  y = x[0],
                  _ = x[1],
                  k = this.switchLocalePath(_.code);
                k && link.push({ hid: "i18n-alt-".concat(y), rel: "alternate", href: C(k, e), hreflang: y });
              }
            } catch (t) {
              w.e(t);
            } finally {
              w.f();
            }
            if (lt.defaultLocale) {
              var O = this.switchLocalePath(lt.defaultLocale);
              O && link.push({ hid: "i18n-xd", rel: "alternate", href: C(O, e), hreflang: "x-default" });
            }
          }
        }
        function w(t, link) {
          var e = this.localeRoute(Jt(Jt({}, this.$route), {}, { name: this.getRouteBaseName() })),
            r = e ? e.path : null;
          r && link.push({ hid: "i18n-can", rel: "canonical", href: C(r, t) });
        }
        function x(t, e, meta) {
          t && e && meta.push({ hid: "i18n-og", property: "og:locale", content: _(e) });
        }
        function y(t, e, meta) {
          var r = t.filter(function (t) {
            var r = t.iso;
            return r && r !== e;
          });
          if (r.length) {
            var n = r.map(function (t) {
              return { hid: "i18n-og-alt-".concat(t.iso), property: "og:locale:alternate", content: _(t.iso) };
            });
            meta.push.apply(meta, Object(B.a)(n));
          }
        }
        function _(t) {
          return (t || "").replace(/-/g, "_");
        }
        function C(t, e) {
          return t.match(/^https?:\/\//) ? t : e + t;
        }
        return c;
      }
      function ee() {
        return te.call(this, { addDirAttribute: !1, addSeoAttributes: !0 });
      }
      var re = r(48);
      function ne(t, e) {
        var r = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
        if (!r) {
          if (
            Array.isArray(t) ||
            (r = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return ae(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === r && t.constructor && (r = t.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(t);
              if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ae(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            r && (t = r);
            var i = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            r = r.call(t);
          },
          n: function () {
            var t = r.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == r.return || r.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function ae(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
        return r;
      }
      l.a.use(Yt.a);
      var oe = (function () {
        var t = Object(n.a)(
          regeneratorRuntime.mark(function t(e) {
            var r, o, c, h, f, d, v, m, w, x, y, _, C, k, O, j, $, P, E, S, R, L, T, D, N, I, M, z, B, F, U, G, H, V, X, K, Y, W;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (r = e.app),
                        (o = e.route),
                        (c = e.store),
                        (h = e.req),
                        e.res,
                        (f = e.redirect),
                        lt.vuex && c && Et(c, lt.vuex, lt.localeCodes),
                        (d = lt.lazy),
                        d && (!0 === d || !0 !== d.skipNuxtState),
                        (t.next = 9);
                      break;
                    case 7:
                      (v = t.sent.default),
                        e.beforeNuxtRender(function (t) {
                          var e = t.nuxtState,
                            n = {},
                            o = r.i18n,
                            c = o.fallbackLocale,
                            l = o.locale;
                          if (l && l !== c) {
                            var h = r.i18n._getMessages()[l];
                            if (h)
                              try {
                                v(h), (n[l] = h);
                              } catch (t) {}
                          }
                          e.__i18n = { langs: n };
                        });
                    case 9:
                      if (
                        ((m = lt.detectBrowserLanguage),
                        (w = m.alwaysRedirect),
                        (x = m.fallbackLocale),
                        (y = m.onlyOnNoPrefix),
                        (_ = m.onlyOnRoot),
                        (C = m.useCookie),
                        (k = m.cookieKey),
                        (O = m.cookieDomain),
                        (j = m.cookieSecure),
                        ($ = m.cookieCrossOrigin),
                        (P = (function () {
                          var t = Object(n.a)(
                            regeneratorRuntime.mark(function t(n) {
                              var o,
                                h,
                                d,
                                v,
                                m,
                                w,
                                x,
                                y,
                                _,
                                k,
                                O,
                                j,
                                $,
                                P,
                                E,
                                R,
                                L,
                                T,
                                D = arguments;
                              return regeneratorRuntime.wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (
                                        ((o = D.length > 1 && void 0 !== D[1] ? D[1] : {}),
                                        (h = o.initialSetup),
                                        (d = void 0 !== h && h),
                                        n)
                                      ) {
                                        t.next = 3;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 3:
                                      if (d || !r.i18n.differentDomains) {
                                        t.next = 5;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 5:
                                      if (((v = r.i18n.locale), n !== v)) {
                                        t.next = 8;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 8:
                                      if (!(m = r.i18n.onBeforeLanguageSwitch(v, n, d, e)) || !r.i18n.localeCodes.includes(m)) {
                                        t.next = 13;
                                        break;
                                      }
                                      if (m !== v) {
                                        t.next = 12;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 12:
                                      n = m;
                                    case 13:
                                      if ((d || r.i18n.beforeLanguageSwitch(v, n), C && r.i18n.setLocaleCookie(n), !lt.langDir)) {
                                        t.next = 29;
                                        break;
                                      }
                                      if (((w = r.i18n.fallbackLocale), !lt.lazy)) {
                                        t.next = 27;
                                        break;
                                      }
                                      if (!w) {
                                        t.next = 23;
                                        break;
                                      }
                                      return (
                                        (x = []),
                                        Array.isArray(w)
                                          ? (x = w.map(function (t) {
                                              return Ot(e, t);
                                            }))
                                          : "object" === Object(ot.a)(w)
                                          ? (w[n] &&
                                              (x = x.concat(
                                                w[n].map(function (t) {
                                                  return Ot(e, t);
                                                })
                                              )),
                                            w.default &&
                                              (x = x.concat(
                                                w.default.map(function (t) {
                                                  return Ot(e, t);
                                                })
                                              )))
                                          : n !== w && x.push(Ot(e, w)),
                                        (t.next = 23),
                                        Promise.all(x)
                                      );
                                    case 23:
                                      return (t.next = 25), Ot(e, n);
                                    case 25:
                                      t.next = 29;
                                      break;
                                    case 27:
                                      return (
                                        (t.next = 29),
                                        Promise.all(
                                          lt.localeCodes.map(function (t) {
                                            return Ot(e, t);
                                          })
                                        )
                                      );
                                    case 29:
                                      for (
                                        r.i18n.locale = n,
                                          y = lt.normalizedLocales.find(function (t) {
                                            return t.code === n;
                                          }) || { code: n },
                                          _ = 0,
                                          k = Object.keys(r.i18n.localeProperties);
                                        _ < k.length;
                                        _++
                                      )
                                        (O = k[_]), (r.i18n.localeProperties[O] = void 0);
                                      for (j = 0, $ = Object.entries(y); j < $.length; j++)
                                        (P = Object(A.a)($[j], 2)),
                                          (E = P[0]),
                                          (R = P[1]),
                                          l.a.set(r.i18n.localeProperties, E, Object(re.a)(R));
                                      if (!lt.vuex) {
                                        t.next = 36;
                                        break;
                                      }
                                      return (t.next = 36), St(c, n, r.i18n.getLocaleMessage(n), lt.vuex);
                                    case 36:
                                      (L = e.route),
                                        (T = S(L, n)),
                                        d ? (r.i18n.__redirect = T) : (r.i18n.onLanguageSwitched(v, n), T && f(T));
                                    case 39:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (E = wt(lt.localeCodes, {
                          routesNameSeparator: lt.routesNameSeparator,
                          defaultLocaleRouteNameSuffix: lt.defaultLocaleRouteNameSuffix,
                        })),
                        (S = function (t, e) {
                          if (!e || r.i18n.differentDomains || lt.strategy === it.STRATEGIES.NO_PREFIX) return "";
                          if (E(t) === e && ((!_ && !y) || e !== lt.defaultLocale || lt.strategy !== it.STRATEGIES.PREFIX_AND_DEFAULT))
                            return "";
                          var n = r.switchLocalePath(e);
                          return n || (n = r.localePath(t.fullPath, e)), !n || n === t.fullPath || n.startsWith("//") ? "" : n;
                        }),
                        (R = (function () {
                          var t = Object(n.a)(
                            regeneratorRuntime.mark(function t(n) {
                              var o, path, c, l, h;
                              return regeneratorRuntime.wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if ("/" !== n.path || !lt.rootRedirect) {
                                        t.next = 5;
                                        break;
                                      }
                                      return (
                                        (o = 302),
                                        (path = lt.rootRedirect),
                                        "string" != typeof lt.rootRedirect &&
                                          ((o = lt.rootRedirect.statusCode), (path = lt.rootRedirect.path)),
                                        t.abrupt("return", [o, "/".concat(path), !0])
                                      );
                                    case 5:
                                      if (!(c = r.i18n.__redirect)) {
                                        t.next = 9;
                                        break;
                                      }
                                      return (r.i18n.__redirect = null), t.abrupt("return", [302, c]);
                                    case 9:
                                      if (
                                        ((l = { differentDomains: lt.differentDomains, normalizedLocales: lt.normalizedLocales }),
                                        (r.i18n.__baseUrl = $t(lt.baseUrl, e, r.i18n.locale, l)),
                                        (h = (lt.detectBrowserLanguage && N(n)) || E(n) || r.i18n.locale || r.i18n.defaultLocale || ""),
                                        !lt.skipSettingLocaleOnNavigate)
                                      ) {
                                        t.next = 17;
                                        break;
                                      }
                                      (r.i18n.__pendingLocale = h),
                                        (r.i18n.__pendingLocalePromise = new Promise(function (t) {
                                          r.i18n.__resolvePendingLocalePromise = t;
                                        })),
                                        (t.next = 19);
                                      break;
                                    case 17:
                                      return (t.next = 19), r.i18n.setLocale(h);
                                    case 19:
                                      return t.abrupt("return", [null, null]);
                                    case 20:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (L = (function () {
                          var t = Object(n.a)(
                            regeneratorRuntime.mark(function t() {
                              return regeneratorRuntime.wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (r.i18n.__pendingLocale) {
                                        t.next = 2;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 2:
                                      return (t.next = 4), r.i18n.setLocale(r.i18n.__pendingLocale);
                                    case 4:
                                      r.i18n.__resolvePendingLocalePromise(""), (r.i18n.__pendingLocale = null);
                                    case 6:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (T = (function () {
                          var t = Object(n.a)(
                            regeneratorRuntime.mark(function t() {
                              return regeneratorRuntime.wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (!r.i18n.__pendingLocale) {
                                        t.next = 3;
                                        break;
                                      }
                                      return (t.next = 3), r.i18n.__pendingLocalePromise;
                                    case 3:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (D = function () {
                          return "undefined" != typeof navigator && navigator.languages
                            ? mt(lt.normalizedLocales, navigator.languages)
                            : h && void 0 !== h.headers["accept-language"]
                            ? mt(
                                lt.normalizedLocales,
                                h.headers["accept-language"].split(",").map(function (t) {
                                  return t.split(";")[0];
                                })
                              )
                            : void 0;
                        }),
                        (N = function (t) {
                          if (lt.strategy !== it.STRATEGIES.NO_PREFIX)
                            if (_) {
                              if ("/" !== t.path) return "";
                            } else if (y && !w && t.path.match(bt(lt.localeCodes))) return "";
                          var e;
                          (C && (e = r.i18n.getLocaleCookie())) || (e = D());
                          var n = e || x;
                          return !n || (C && !w && r.i18n.getLocaleCookie()) || n === r.i18n.locale ? "" : n;
                        }),
                        (I = function (t) {
                          (t.locales = Object(re.a)(lt.locales)),
                            (t.localeCodes = Object(re.a)(lt.localeCodes)),
                            (t.localeProperties = l.a.observable(
                              Object(re.a)(
                                lt.normalizedLocales.find(function (e) {
                                  return e.code === t.locale;
                                }) || { code: t.locale }
                              )
                            )),
                            (t.defaultLocale = lt.defaultLocale),
                            (t.differentDomains = lt.differentDomains),
                            (t.beforeLanguageSwitch = lt.beforeLanguageSwitch),
                            (t.onBeforeLanguageSwitch = lt.onBeforeLanguageSwitch),
                            (t.onLanguageSwitched = lt.onLanguageSwitched),
                            (t.setLocaleCookie = function (t) {
                              return yt(t, 0, { useCookie: C, cookieDomain: O, cookieKey: k, cookieSecure: j, cookieCrossOrigin: $ });
                            }),
                            (t.getLocaleCookie = function () {
                              return xt(0, { useCookie: C, cookieKey: k, localeCodes: lt.localeCodes });
                            }),
                            (t.setLocale = function (t) {
                              return P(t);
                            }),
                            (t.getBrowserLocale = function () {
                              return D();
                            }),
                            (t.finalizePendingLocaleChange = L),
                            (t.waitForPendingLocaleChange = T),
                            (t.__baseUrl = r.i18n.__baseUrl),
                            (t.__pendingLocale = r.i18n.__pendingLocale),
                            (t.__pendingLocalePromise = r.i18n.__pendingLocalePromise),
                            (t.__resolvePendingLocalePromise = r.i18n.__resolvePendingLocalePromise);
                        }),
                        "function" != typeof lt.vueI18n)
                      ) {
                        t.next = 25;
                        break;
                      }
                      return (t.next = 22), lt.vueI18n(e);
                    case 22:
                      (t.t0 = t.sent), (t.next = 26);
                      break;
                    case 25:
                      t.t0 = Object(re.a)(lt.vueI18n);
                    case 26:
                      if (
                        (((M = t.t0).componentInstanceCreatedListener = I),
                        (r.i18n = e.i18n = new Yt.a(M)),
                        (r.i18n.locale = ""),
                        (r.i18n.fallbackLocale = M.fallbackLocale || ""),
                        I(r.i18n),
                        (z = { differentDomains: lt.differentDomains, normalizedLocales: lt.normalizedLocales }),
                        (r.i18n.__baseUrl = $t(lt.baseUrl, e, "", z)),
                        (r.i18n.__onNavigate = R),
                        (l.a.prototype.$nuxtI18nSeo = ee),
                        (l.a.prototype.$nuxtI18nHead = te),
                        !c)
                      ) {
                        t.next = 58;
                        break;
                      }
                      if (((c.$i18n = r.i18n), !c.state.localeDomains)) {
                        t.next = 58;
                        break;
                      }
                      (B = ne(r.i18n.locales)), (t.prev = 41), B.s();
                    case 43:
                      if ((F = B.n()).done) {
                        t.next = 50;
                        break;
                      }
                      if ("string" != typeof (U = F.value)) {
                        t.next = 47;
                        break;
                      }
                      return t.abrupt("continue", 48);
                    case 47:
                      U.domain = c.state.localeDomains[U.code];
                    case 48:
                      t.next = 43;
                      break;
                    case 50:
                      t.next = 55;
                      break;
                    case 52:
                      (t.prev = 52), (t.t1 = t.catch(41)), B.e(t.t1);
                    case 55:
                      return (t.prev = 55), B.f(), t.finish(55);
                    case 58:
                      return (
                        (G = lt.detectBrowserLanguage ? N(o) : "") ||
                          ((H = lt.vuex) && H.syncLocale && c && "" !== c.state[H.moduleName].locale
                            ? (G = c.state[H.moduleName].locale)
                            : r.i18n.differentDomains
                            ? ((V = gt(lt.normalizedLocales)), (G = V))
                            : lt.strategy !== it.STRATEGIES.NO_PREFIX && ((X = E(o)), (G = X))),
                        !G && C && (G = r.i18n.getLocaleCookie()),
                        G || (G = r.i18n.defaultLocale || ""),
                        (t.next = 64),
                        P(G, { initialSetup: !0 })
                      );
                    case 64:
                      if (!st) {
                        t.next = 72;
                        break;
                      }
                      return (t.next = 67), R(e.route);
                    case 67:
                      (K = t.sent), (Y = Object(A.a)(K, 2)), Y[0], (W = Y[1]) && location.assign(Object(_t.joinURL)(e.base, W));
                    case 72:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[41, 52, 55, 58]]
            );
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
      function ie(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function se(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ie(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source))
            : ie(Object(source)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e));
              });
        }
        return t;
      }
      l.a.component(v.a.name, v.a),
        l.a.component(
          w.a.name,
          se(
            se({}, w.a),
            {},
            {
              render: function (t, e) {
                return (
                  w.a._warned ||
                    ((w.a._warned = !0),
                    console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),
                  w.a.render(t, e)
                );
              },
            }
          )
        ),
        l.a.component(S.name, S),
        l.a.component("NChild", S),
        l.a.component(I.name, I),
        Object.defineProperty(l.a.prototype, "$nuxt", {
          get: function () {
            var t = this.$root.$options.$nuxt;
            return t || "undefined" == typeof window ? t : window.$nuxt;
          },
          configurable: !0,
        }),
        l.a.use(f.a, { keyName: "head", attribute: "data-n-head", ssrAttribute: "data-n-head-ssr", tagIDKeyName: "hid" });
      var ce = {
          name: "page",
          mode: "out-in",
          appear: !1,
          appearClass: "appear",
          appearActiveClass: "appear-active",
          appearToClass: "appear-to",
        },
        le = h.a.Store.prototype.registerModule;
      function ue(path, t) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = Array.isArray(path)
            ? !!path.reduce(function (t, path) {
                return t && t[path];
              }, this.state)
            : path in this.state;
        return le.call(this, path, t, se({ preserveState: r }, e));
      }
      function he(t) {
        return fe.apply(this, arguments);
      }
      function fe() {
        return (
          (fe = Object(n.a)(
            regeneratorRuntime.mark(function t(e) {
              var r,
                o,
                c,
                h,
                f,
                d,
                path,
                v,
                m = arguments;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (v = function (t, e) {
                          if (!t) throw new Error("inject(key, value) has no key provided");
                          if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                          (h[(t = "$" + t)] = e), h.context[t] || (h.context[t] = e), (c[t] = h[t]);
                          var r = "__nuxt_" + t + "_installed__";
                          l.a[r] ||
                            ((l.a[r] = !0),
                            l.a.use(function () {
                              Object.prototype.hasOwnProperty.call(l.a.prototype, t) ||
                                Object.defineProperty(l.a.prototype, t, {
                                  get: function () {
                                    return this.$root.$options[t];
                                  },
                                });
                            }));
                        }),
                        (r = m.length > 1 && void 0 !== m[1] ? m[1] : {}),
                        (t.next = 4),
                        E(0, r)
                      );
                    case 4:
                      return (
                        (o = t.sent),
                        ((c = at(e)).$router = o),
                        (c.registerModule = ue),
                        (h = se(
                          {
                            head: { meta: [], link: [], style: [], script: [] },
                            store: c,
                            router: o,
                            nuxt: {
                              defaultTransition: ce,
                              transitions: [ce],
                              setTransitions: function (t) {
                                return (
                                  Array.isArray(t) || (t = [t]),
                                  (t = t.map(function (t) {
                                    return (t = t
                                      ? "string" == typeof t
                                        ? Object.assign({}, ce, { name: t })
                                        : Object.assign({}, ce, t)
                                      : ce);
                                  })),
                                  (this.$options.nuxt.transitions = t),
                                  t
                                );
                              },
                              err: null,
                              dateErr: null,
                              error: function (t) {
                                (t = t || null), (h.context._errored = Boolean(t)), (t = t ? Object(_.p)(t) : null);
                                var r = h.nuxt;
                                return (
                                  this && (r = this.nuxt || this.$options.nuxt),
                                  (r.dateErr = Date.now()),
                                  (r.err = t),
                                  e && (e.nuxt.error = t),
                                  t
                                );
                              },
                            },
                          },
                          et
                        )),
                        (c.app = h),
                        (f = e
                          ? e.next
                          : function (t) {
                              return h.router.push(t);
                            }),
                        e
                          ? (d = o.resolve(e.url).route)
                          : ((path = Object(_.f)(o.options.base, o.options.mode)), (d = o.resolve(path).route)),
                        (t.next = 14),
                        Object(_.t)(h, {
                          store: c,
                          route: d,
                          next: f,
                          error: h.nuxt.error.bind(h),
                          payload: e ? e.payload : void 0,
                          req: e ? e.req : void 0,
                          res: e ? e.res : void 0,
                          beforeRenderFns: e ? e.beforeRenderFns : void 0,
                          ssrContext: e,
                        })
                      );
                    case 14:
                      v("config", r),
                        window.__NUXT__ && window.__NUXT__.state && c.replaceState(window.__NUXT__.state),
                        (h.context.enablePreview = function () {
                          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                          (h.previewData = Object.assign({}, t)), v("preview", t);
                        }),
                        (t.next = 20);
                      break;
                    case 20:
                      return (t.next = 23), Kt(h.context);
                    case 23:
                      if ("function" != typeof oe) {
                        t.next = 26;
                        break;
                      }
                      return (t.next = 26), oe(h.context, v);
                    case 26:
                      return (
                        (h.context.enablePreview = function () {
                          console.warn("You cannot call enablePreview() outside a plugin.");
                        }),
                        (t.next = 29),
                        new Promise(function (t, e) {
                          if (!o.resolve(h.context.route.fullPath).route.matched.length) return t();
                          o.replace(h.context.route.fullPath, t, function (r) {
                            if (!r._isRouter) return e(r);
                            if (2 !== r.type) return t();
                            var c = o.afterEach(
                              (function () {
                                var e = Object(n.a)(
                                  regeneratorRuntime.mark(function e(r, n) {
                                    return regeneratorRuntime.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 3), Object(_.j)(r);
                                          case 3:
                                            (h.context.route = e.sent),
                                              (h.context.params = r.params || {}),
                                              (h.context.query = r.query || {}),
                                              c(),
                                              t();
                                          case 8:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t, r) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            );
                          });
                        })
                      );
                    case 29:
                      return t.abrupt("return", { store: c, app: h, router: o });
                    case 30:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          fe.apply(this, arguments)
        );
      }
    },
    59: function (t, e, r) {
      "use strict";
      e.a = {};
    },
    78: function (t, e, r) {
      "use strict";
      r(40), r(36), r(18), r(23), r(17), r(21), r(20), r(15), r(35), r(28), r(29);
      var n = r(0),
        o = r.n(n);
      function c(t, e) {
        var r = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
        if (!r) {
          if (
            Array.isArray(t) ||
            (r = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return l(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === r && t.constructor && (r = t.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(t);
              if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            r && (t = r);
            var i = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          h = !1;
        return {
          s: function () {
            r = r.call(t);
          },
          n: function () {
            var t = r.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (h = !0), (o = t);
          },
          f: function () {
            try {
              c || null == r.return || r.return();
            } finally {
              if (h) throw o;
            }
          },
        };
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
        return r;
      }
      var h =
          window.requestIdleCallback ||
          function (t) {
            var e = Date.now();
            return setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        f =
          window.cancelIdleCallback ||
          function (t) {
            clearTimeout(t);
          },
        d =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function (t) {
            t.forEach(function (t) {
              var e = t.intersectionRatio,
                link = t.target;
              e <= 0 || !link.__prefetch || link.__prefetch();
            });
          });
      e.a = {
        name: "NuxtLink",
        extends: o.a.component("RouterLink"),
        props: { prefetch: { type: Boolean, default: !0 }, noPrefetch: { type: Boolean, default: !1 } },
        mounted: function () {
          this.prefetch && !this.noPrefetch && (this.handleId = h(this.observe, { timeout: 2e3 }));
        },
        beforeDestroy: function () {
          f(this.handleId), this.__observed && (d.unobserve(this.$el), delete this.$el.__prefetch);
        },
        methods: {
          observe: function () {
            d &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)), d.observe(this.$el), (this.__observed = !0));
          },
          shouldPrefetch: function () {
            return this.getPrefetchComponents().length > 0;
          },
          canPrefetch: function () {
            var t = navigator.connection;
            return !(this.$nuxt.isOffline || (t && ((t.effectiveType || "").includes("2g") || t.saveData)));
          },
          getPrefetchComponents: function () {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function (t) {
                return t.components.default;
              })
              .filter(function (t) {
                return "function" == typeof t && !t.options && !t.__prefetched;
              });
          },
          prefetchLink: function () {
            if (this.canPrefetch()) {
              d.unobserve(this.$el);
              var t,
                e = c(this.getPrefetchComponents());
              try {
                for (e.s(); !(t = e.n()).done; ) {
                  var r = t.value,
                    n = r();
                  n instanceof Promise && n.catch(function () {}), (r.__prefetched = !0);
                }
              } catch (t) {
                e.e(t);
              } finally {
                e.f();
              }
            }
          },
        },
      };
    },
  },
  [[144, 4, 1, 5]],
]);
