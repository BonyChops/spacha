!(function (t, e) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = e();
  else if ('function' == typeof define && define.amd) define([], e);
  else {
    var s = e();
    for (var i in s) ('object' == typeof exports ? exports : t)[i] = s[i];
  }
})('undefined' != typeof self ? self : this, () =>
  (() => {
    'use strict';
    var t = {
        105: (t, e, s) => {
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.Spacha = void 0);
          const i = s(750),
            o = s(287);
          class h extends i.SpachaCore {
            spc;
            upperDiv;
            baseDiv;
            constructor(t, e) {
              super(e),
                (this.spc = t),
                (this.upperDiv = document.createElement('div')),
                (this.baseDiv = document.createElement('div')),
                this.draw();
            }
            draw = () => {
              this.spc.innerHTML = '';
              const t = document.createElement('div');
              (this.upperDiv = document.createElement('div')),
                (this.upperDiv.id = 'spc-upper-div'),
                this.setUpperStyle(
                  this.upperDiv,
                  Boolean(this.options.message)
                ),
                this.setUpperInner(this.upperDiv),
                this.options.message &&
                  ((this.baseDiv = document.createElement('div')),
                  (this.baseDiv.id = 'spc-base-div'),
                  (this.baseDiv.innerHTML = this.options.message),
                  this.setMessageStyle(this.baseDiv)),
                t.appendChild(this.upperDiv),
                t.appendChild(this.baseDiv),
                this.options.shaddow &&
                  ((t.style.boxShadow =
                    '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'),
                  (t.style.borderRadius = 20 * this.scale + 'px')),
                this.spc.appendChild(t);
            };
            setUpperStyle = (t, e) => {
              const s = t.style,
                i = 20 * this.scale,
                h = 30 * this.scale,
                r = 20 * this.scale;
              (s.backgroundColor =
                this.options.themeOption?.color ?? o.themes.blue.color),
                (s.width = '100%'),
                (s.height = 150 * this.scale + 'px'),
                (s.display = 'inline-flex'),
                (s.boxSizing = 'border-box'),
                (s.borderRadius = e ? `${i}px ${i}px 0px 0px` : `${i}px`),
                (s.paddingLeft = `${h}px`),
                (s.paddingRight = `${h}px`),
                (s.paddingTop = `${r}px`),
                (s.paddingBottom = `${r}px`);
            };
            setMessageStyle = (t) => {
              const e = t.style,
                s = 20 * this.scale;
              (e.width = '100%'),
                (e.boxSizing = 'border-box'),
                (e.backgroundColor =
                  this.options.themeOption?.baseColor ??
                  o.themes.blue.baseColor),
                (e.font = 30 * this.scale + "px 'sans-serif'"),
                (e.padding = 10 * this.scale + 'px'),
                (e.borderRadius = `0px 0px ${s}px ${s}px`),
                (e.textOverflow = 'ellipsis'),
                (e.color =
                  this.options.themeOption?.txtColor ?? o.themes.blue.txtColor);
            };
            setUpperInner = (t) => {
              const e = document.createElement('div'),
                s = document.createElement('div');
              (e.id = 'spc-icon-div'),
                (s.id = 'spc-profile-div'),
                (e.style.width = 110 * this.scale + 'px'),
                (e.style.height = 110 * this.scale + 'px'),
                (s.style.paddingLeft = 10 * this.scale + 'px'),
                this.setIconInner(e),
                this.setProfileInner(s),
                t.appendChild(e),
                t.appendChild(s);
            };
            setIconInner = (t) => {
              const e = document.createElement('img');
              (e.width = 110 * this.scale),
                (e.height = 110 * this.scale),
                this.options.user?.img?.src
                  ? (e.src = String(this.options.user?.img?.src))
                  : (e.style.backgroundColor = 'black'),
                this.options.imgOption?.square ||
                  (e.style.borderRadius = (110 * this.scale) / 2 + 'px'),
                t.appendChild(e);
            };
            setProfileInner = (t) => {
              const e = document.createElement('p'),
                s = document.createElement('p'),
                i =
                  this.options.themeOption?.txtColor ?? o.themes.blue.txtColor;
              (e.style.color = i),
                (s.style.color = i),
                (e.style.opacity = '0.7'),
                (e.style.marginTop = '10px'),
                (e.style.marginBottom = '0px'),
                (s.style.marginTop = '0px'),
                (e.style.font = 20 * this.scale + "px 'sans-serif'"),
                (s.style.font = 50 * this.scale + "px 'sans-serif'"),
                (e.innerHTML = this.options.user?.name ?? 'YouTube User'),
                (s.innerHTML =
                  this.options.customPriceString ??
                  this.generatePriceString(this.options.price ?? 0)),
                t.appendChild(e),
                t.appendChild(s);
            };
          }
          e.Spacha = h;
        },
        750: (t, e, s) => {
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.SpachaCore = void 0);
          const i = s(287);
          e.SpachaCore = class {
            options;
            scale = 1;
            constructor(t) {
              (this.options = t ?? {}), this.init();
            }
            init = () => {
              const t = Object.keys(i.themes).map((t) => ({
                  ...i.themes[t],
                  name: t,
                })),
                e = t[Math.floor(Math.random() * t.length)];
              (this.options.price ??= e.price),
                (this.options.scale ??= 1),
                (this.scale = this.options.scale),
                (this.options.themeOption ??= this.options.theme
                  ? i.themes[this.options.theme ?? e.name]
                  : this.themeFromPrice(this.options.price)),
                (this.options.user ??= { name: 'YouTube User' }),
                (this.options.user.name ??= 'YouTube User'),
                (this.options.shaddow ??= !0);
            };
            themeFromPrice = (t) =>
              t < 0
                ? i.themes.blue
                : Object.keys(i.themes)
                    .map((t) => i.themes[t])
                    .reverse()
                    .find((e) => e.price <= t) ?? i.themes.blue;
            generatePriceString = (t) =>
              '￥' + Number(this.options.price).toLocaleString();
          };
        },
        698: (t, e, s) => {
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.SpachaImage = void 0);
          const i = s(750),
            o = s(287);
          class h extends i.SpachaCore {
            ctx;
            constructor(t, e) {
              super(e), (this.ctx = t), this.job();
            }
            job = () => {
              const t = this.ctx.canvas;
              (this.options.width ??= t.width),
                this.options.width !== t.width &&
                  (t.width = this.options.width),
                this.options.height || (this.options.heightAutoFix ??= !0),
                (this.options.height ??= t.clientHeight),
                this.options.height !== t.height &&
                  (t.height = this.options.height),
                this.draw();
            };
            draw = () => {
              const t = this.ctx.canvas;
              if (this.options.message) {
                let e;
                if (this.options.heightAutoFix) {
                  const s = 150 * this.scale,
                    i = 10 * this.scale;
                  (e = this.printString(
                    this.options.message ?? 'error',
                    0,
                    0,
                    32 * this.scale,
                    (this.options.width ?? 600) - 10,
                    !1
                  )),
                    (this.options.height = s + e + 2 * i),
                    (t.height = this.options.height);
                }
                this.drawRounedSq(!0), this.drawRoundedSqCm();
              } else
                this.options.heightAutoFix && (t.height = 150),
                  this.drawRounedSq(!1);
            };
            drawRounedSq = (t) => {
              const e = this.ctx,
                s = this.options.width ?? 600,
                i = t ? 150 * this.scale : this.options.height ?? 150,
                h = 20 * this.scale,
                r = this.options.themeOption?.color ?? o.themes.blue.baseColor;
              e.beginPath(),
                (e.lineWidth = 1),
                (e.strokeStyle = r),
                (e.fillStyle = r),
                e.moveTo(0, 0 + h / 2),
                t
                  ? (e.lineTo(0, 0 + i), e.lineTo(0 + s, 0 + i))
                  : (e.arc(0 + h, 0 + i - h, h, Math.PI, 0.5 * Math.PI, !0),
                    e.arc(0 + s - h, 0 + i - h, h, 0.5 * Math.PI, 0, !0)),
                e.arc(0 + s - h, 0 + h, h, 0, 1.5 * Math.PI, !0),
                e.arc(0 + h, 0 + h, h, 1.5 * Math.PI, Math.PI, !0),
                e.closePath(),
                e.stroke(),
                e.fill(),
                this.iconDraw(),
                this.profileDraw();
            };
            drawRoundedSqCm = () => {
              const t = this.ctx,
                e = 150 * this.scale,
                s = this.options.width ?? 600,
                i = this.options.height ?? 150,
                h = 20 * this.scale;
              (t.lineWidth = 1),
                (t.strokeStyle =
                  this.options.themeOption?.color ?? o.themes.blue.color),
                (t.fillStyle =
                  this.options.themeOption?.baseColor ??
                  o.themes.blue.baseColor),
                t.beginPath(),
                t.moveTo(0, e),
                t.arc(0 + h, i - h, h, Math.PI, 0.5 * Math.PI, !0),
                t.arc(0 + s - h, i - h, h, 0.5 * Math.PI, 0, !0),
                t.lineTo(0 + s, e),
                t.closePath(),
                t.stroke(),
                t.fill(),
                this.printString(
                  this.options.message ?? 'error',
                  0 + 20 * this.scale,
                  e + 32 * this.scale,
                  32 * this.scale,
                  (this.options.width ?? 600) - 10,
                  !0
                );
            };
            printString = (t, e, s, i, o, h) => {
              const r = this.ctx;
              if (
                ((r.font = 30 * this.scale + "px 'sans-serif'"),
                (r.fillStyle = this.options.themeOption?.txtColor ?? 'white'),
                (o = o || 0) <= 0)
              )
                return h && r.fillText(t, e, s), s + i;
              for (let n = 1; n <= t.length; n++) {
                let a = t.substring(0, n);
                if (r.measureText(a).width > o)
                  return (
                    h && r.fillText(t.substring(0, n - 1), e, s),
                    this.printString(t.substring(n - 1), e, s + i, i, o, h)
                  );
              }
              return h && r.fillText(t, e, s), s + i;
            };
            iconDraw = () => {
              const t = this.ctx,
                e = this.options.user?.img,
                s = 110 * this.scale;
              t.save();
              const i = 30 * this.scale,
                o = 20 * this.scale;
              this.options.imgOption?.square ||
                (t.beginPath(),
                t.arc(i + s / 2, o + s / 2, s / 2, 0, 2 * Math.PI),
                t.closePath()),
                t.clip(),
                e
                  ? t.drawImage(e, i, o, s, s)
                  : ((t.fillStyle = 'black'), t.fill()),
                t.restore();
            };
            profileDraw = () => {
              const t = this.ctx;
              (t.fillStyle = this.options.themeOption?.txtColor ?? 'white'),
                (t.font = 20 * this.scale + "px 'sans-serif'"),
                (t.globalAlpha = 0.7),
                t.fillText(
                  this.options.user?.name ?? 'error',
                  150 * this.scale,
                  45 * this.scale
                ),
                (t.globalAlpha = 1),
                (t.font = 50 * this.scale + "px 'sans-serif'"),
                t.fillText(
                  this.options.customPriceString ??
                    this.generatePriceString(this.options.price ?? 0),
                  150 * this.scale,
                  95 * this.scale
                );
            };
          }
          e.SpachaImage = h;
        },
        287: (t, e) => {
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.getRandomInt = e.themes = void 0),
            (e.themes = {
              blue: {
                color: '#134a9e',
                baseColor: '#113f85',
                txtColor: 'white',
                price: 0,
              },
              lightblue: {
                color: '#00b8d4',
                baseColor: '#00e5ff',
                txtColor: 'black',
                price: 200,
              },
              green: {
                color: '#00bfa5',
                baseColor: '#1de9b6',
                txtColor: 'black',
                price: 500,
              },
              yellow: {
                color: '#ffb300',
                baseColor: '#ffca28',
                txtColor: 'black',
                price: 1e3,
              },
              orange: {
                color: '#e65100',
                baseColor: '#f57c00',
                txtColor: 'black',
                price: 2e3,
              },
              pink: {
                color: '#c2185b',
                baseColor: '#e91e63',
                txtColor: 'white',
                price: 5e3,
              },
              red: {
                color: '#d00000',
                baseColor: '#e62117',
                txtColor: 'white',
                price: 1e4,
              },
            }),
            (e.getRandomInt = (t, e) => (
              (t = Math.ceil(t)),
              (e = Math.floor(e)),
              Math.floor(Math.random() * (e - t) + t)
            ));
        },
      },
      e = {};
    function s(i) {
      var o = e[i];
      if (void 0 !== o) return o.exports;
      var h = (e[i] = { exports: {} });
      return t[i](h, h.exports, s), h.exports;
    }
    var i = {};
    return (
      (() => {
        var t = i;
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SpachaImage = t.Spacha = void 0);
        const e = s(105);
        Object.defineProperty(t, 'Spacha', {
          enumerable: !0,
          get: function () {
            return e.Spacha;
          },
        });
        const o = s(698);
        Object.defineProperty(t, 'SpachaImage', {
          enumerable: !0,
          get: function () {
            return o.SpachaImage;
          },
        });
      })(),
      i
    );
  })()
);
