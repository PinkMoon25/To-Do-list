(() => {
  'use strict';
  var e = {
      426: (e, n, t) => {
        t.d(n, { Z: () => c });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          e.id,
          '@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);',
        ]),
          i.push([
            e.id,
            "*,\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  color: #fff;\n}\n\nbody {\n  background-color: black;\n}\n\nmain {\n  margin: 15px auto;\n  max-width: 65vw;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nheader {\n  padding: 12px 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid rebeccapurple;\n}\n\nbutton {\n  border: none;\n  background-color: inherit;\n  transition: all 0.3s ease;\n}\n\nheader > button {\n  padding: 5px 10px;\n}\n\nmain > div {\n  width: 100%;\n  padding: 8px 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 2px solid rebeccapurple;\n  opacity: 0.7;\n}\n\ninput[name=listInput] {\n  width: 100%;\n  padding: 5px 8px;\n  border: none;\n  background-color: transparent;\n  font-size: 1.1em;\n}\n\n.addtask {\n  margin: 0 8px;\n  padding: 5px 8px;\n  background-color: rebeccapurple;\n  border-radius: 2px;\n  color: #fff;\n}\n\nli > button {\n  display: flex;\n  gap: 8px;\n}\n\nbutton > i {\n  padding: 5px 8px;\n  transition: all 0.3s ease;\n}\n\nbutton > i:hover {\n  transform: scale(1.2);\n}\n\nul {\n  list-style-type: none;\n}\n\nli > div {\n  width: 100%;\n  display: flex;\n  gap: 12px;\n}\n\ndiv > p {\n  width: 100%;\n  padding: 2px;\n  word-wrap: anywhere;\n}\n\nli {\n  padding: 12px 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid rebeccapurple;\n}\n\n.clear {\n  width: 100%;\n  padding: 12px 10px;\n  text-align: center;\n  border: 1px solid rebeccapurple;\n  font-size: 1em;\n  transition: all 0.3s ease;\n}\n\n.clear:hover {\n  transform: scale(0.99);\n  opacity: 0.7;\n}\n\nbutton:hover {\n  transform: scale(1.2);\n}\n\n.completed {\n  text-decoration: line-through;\n  opacity: 0.6;\n  background: cornflowerblue;\n}\n\n.refresh:hover {\n  transform: rotate(360deg);\n}\n\nfooter {\npadding: 8px 0;\ntext-align: center;\nbackground: rebeccapurple;\n}\n\na > i {\n  font-size: large;\n  transition: 0.3s ease;\n}\n\na > i:hover {\n  transform: scale(1.1) rotate(360deg);\n}\n\n@media screen and (max-width: 768px) {\n  main {\n    max-width: 90vw;\n  }\n}",
            '',
          ]);
        const c = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = '',
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += '@supports ('.concat(n[4], ') {')),
                  n[2] && (t += '@media '.concat(n[2], ' {')),
                  r &&
                    (t += '@layer'.concat(
                      n[5].length > 0 ? ' '.concat(n[5]) : '',
                      ' {'
                    )),
                  (t += e(n)),
                  r && (t += '}'),
                  n[2] && (t += '}'),
                  n[4] && (t += '}'),
                  t
                );
              }).join('');
            }),
            (n.i = function (e, t, r, o, a) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var l = [].concat(e[d]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'
                        .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                        .concat(l[1], '}')),
                    (l[5] = a)),
                  t &&
                    (l[2]
                      ? ((l[1] = '@media '
                          .concat(l[2], ' {')
                          .concat(l[1], '}')),
                        (l[2] = t))
                      : (l[2] = t)),
                  o &&
                    (l[4]
                      ? ((l[1] = '@supports ('
                          .concat(l[4], ') {')
                          .concat(l[1], '}')),
                        (l[4] = o))
                      : (l[4] = ''.concat(o))),
                  n.push(l));
              }
            }),
            n
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              d = r.base ? s[0] + r.base : s[0],
              l = a[d] || 0,
              p = ''.concat(d, ' ').concat(l);
            a[d] = l + 1;
            var u = t(p),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== u) n[u].references++, n[u].updater(f);
            else {
              var m = o(f, r);
              (r.byIndex = c),
                n.splice(c, 0, { identifier: p, updater: m, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              n[c].references--;
            }
            for (var s = r(e, o), d = 0; d < a.length; d++) {
              var l = t(a[d]);
              0 === n[l].references && (n[l].updater(), n.splice(l, 1));
            }
            a = s;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement('style');
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute('nonce', n);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = '';
                t.supports && (r += '@supports ('.concat(t.supports, ') {')),
                  t.media && (r += '@media '.concat(t.media, ' {'));
                var o = void 0 !== t.layer;
                o &&
                  (r += '@layer'.concat(
                    t.layer.length > 0 ? ' '.concat(t.layer) : '',
                    ' {'
                  )),
                  (r += t.css),
                  o && (r += '}'),
                  t.media && (r += '}'),
                  t.supports && (r += '}');
                var a = t.sourceMap;
                a &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */'
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0),
    (() => {
      var e = t(379),
        n = t.n(e),
        r = t(795),
        o = t.n(r),
        a = t(569),
        i = t.n(a),
        c = t(565),
        s = t.n(c),
        d = t(216),
        l = t.n(d),
        p = t(589),
        u = t.n(p),
        f = t(426),
        m = {};
      (m.styleTagTransform = u()),
        (m.setAttributes = s()),
        (m.insert = i().bind(null, 'head')),
        (m.domAPI = o()),
        (m.insertStyleElement = l()),
        n()(f.Z, m),
        f.Z && f.Z.locals && f.Z.locals;
      const h = document.querySelector('#listInput');
      let v = [];
      function x() {
        localStorage.setItem('taskCollection', JSON.stringify(v));
      }
      function b() {
        v = JSON.parse(localStorage.getItem('taskCollection')) || [];
      }
      const g = document.querySelector('.clear');
      function y(e, n) {
        !1 === v[e].completed
          ? ((v[e].completed = !0),
            (n.checked = !0),
            n.parentElement.parentElement.classList.add('completed'))
          : ((v[e].completed = !1),
            (n.checked = !1),
            n.parentElement.parentElement.classList.remove('completed'));
      }
      const E = document.querySelector('.tasklist'),
        k = document.querySelector('#listInput'),
        w = document.querySelector('.addtask'),
        L = document.querySelector('.refresh');
      function C() {
        E.innerHTML = '';
        for (let e = 0; e < v.length; e += 1) {
          v[e].index = e;
          const n = document.createElement('li'),
            t = document.createElement('div'),
            r = document.createElement('p'),
            o = document.createElement('input');
          o.setAttribute('type', 'checkbox');
          const a = document.createElement('button');
          a.setAttribute('type', 'button');
          const i = document.createElement('i');
          i.classList.add('fa-solid', 'fa-trash-can');
          const c = document.createElement('i');
          c.classList.add('fa-solid', 'fa-pen-to-square'),
            t.appendChild(o),
            (r.innerHTML = `${v[e].description}`),
            t.appendChild(r),
            a.appendChild(c),
            a.appendChild(i),
            n.appendChild(t),
            n.appendChild(a),
            E.appendChild(n),
            i.addEventListener('click', () => {
              var n;
              (n = v[e].index),
                v.forEach((e, t) => {
                  e.index === n && v.splice(t, 1);
                }),
                C(),
                x(),
                b();
            }),
            c.addEventListener('click', () => {
              r.setAttribute('contentEditable', 'true'),
                r.focus(),
                r.addEventListener('focusout', () => {
                  (v[e].description = r.textContent), x(), b(), C();
                });
            }),
            o.addEventListener('change', () => {
              y(e, o), x(), b();
            }),
            !0 === v[e].completed
              ? ((o.checked = !0),
                o.parentElement.parentElement.classList.add('completed'))
              : ((o.checked = !1),
                o.parentElement.parentElement.classList.remove('completed'));
        }
      }
      w.addEventListener('click', () => {
        '' !== k.value &&
          ((function () {
            const e = { description: h.value, completed: !1, index: v.length };
            v.push(e);
          })(),
          x(),
          b(),
          C(),
          (k.value = ''));
      }),
        k.addEventListener('keypress', (e) => {
          13 === e.keyCode && w.click();
        }),
        L.addEventListener('click', () => {
          b(), C();
        }),
        g.addEventListener('click', () => {
          !(function () {
            const e = [];
            v.forEach((n) => {
              !0 === n.completed && e.push(n);
            }),
              (v = v.filter((n) => !e.includes(n)));
          })(),
            x(),
            b(),
            C();
        }),
        document.addEventListener('DOMContentLoaded', () => {
          b(), C();
        });
    })();
})();
