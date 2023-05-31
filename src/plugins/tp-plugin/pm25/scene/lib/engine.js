/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Wr = "148", Hn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, zn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Jc = 0, Aa = 1, Xc = 2, Ko = 1, Zc = 2, Fi = 3, mn = 0, Bt = 1, Ki = 2, Zi = 3, gn = 0, oi = 1, da = 2, ua = 3, fa = 4, $c = 5, ri = 100, el = 101, tl = 102, pa = 103, ga = 104, nl = 200, il = 201, sl = 202, rl = 203, Jo = 204, Xo = 205, al = 206, ol = 207, cl = 208, ll = 209, hl = 210, Al = 0, dl = 1, ul = 2, vr = 3, fl = 4, pl = 5, gl = 6, ml = 7, Zo = 0, bl = 1, _l = 2, rn = 0, $o = 1, xl = 2, El = 3, Il = 4, Cl = 5, ec = 300, hi = 301, Ai = 302, Mr = 303, wr = 304, Ts = 306, di = 1e3, wt = 1001, Ss = 1002, at = 1003, Sr = 1004, Cs = 1005, dt = 1006, tc = 1007, bn = 1008, xt = 1009, yl = 1010, vl = 1011, nc = 1012, Ml = 1013, Dn = 1014, Ft = 1015, an = 1016, wl = 1017, Sl = 1018, ci = 1020, Bl = 1021, Tl = 1022, ct = 1023, Dl = 1024, Rl = 1025, Ln = 1026, ui = 1027, Pi = 1028, Ll = 1029, ki = 1030, Ql = 1031, Fl = 1033, ys = 33776, Ns = 33777, Us = 33778, vs = 33779, Br = 35840, ma = 35841, Tr = 35842, ba = 35843, ic = 36196, Dr = 37492, Rr = 37496, Lr = 37808, _a = 37809, xa = 37810, Ea = 37811, Ia = 37812, Ca = 37813, ya = 37814, va = 37815, Ma = 37816, wa = 37817, Sa = 37818, Ba = 37819, Ta = 37820, Da = 37821, Qr = 36492, Oi = 2300, fi = 2301, Gs = 2302, Ra = 2400, La = 2401, Qa = 2402, Pl = 2500, kl = 1, sc = 2, on = 3e3, Se = 3001, Nl = 3200, Ul = 3201, rc = 0, Gl = 1, Ot = "srgb", Hi = "srgb-linear", Os = 7680, Ol = 519, Fr = 35044, Fa = "300 es", Pr = 1035;
class _n {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, r = i.length; s < r; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const At = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Pa = 1234567;
const Ui = Math.PI / 180, zi = 180 / Math.PI;
function Ut() {
  const o = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (At[o & 255] + At[o >> 8 & 255] + At[o >> 16 & 255] + At[o >> 24 & 255] + "-" + At[e & 255] + At[e >> 8 & 255] + "-" + At[e >> 16 & 15 | 64] + At[e >> 24 & 255] + "-" + At[t & 63 | 128] + At[t >> 8 & 255] + "-" + At[t >> 16 & 255] + At[t >> 24 & 255] + At[n & 255] + At[n >> 8 & 255] + At[n >> 16 & 255] + At[n >> 24 & 255]).toLowerCase();
}
function ut(o, e, t) {
  return Math.max(e, Math.min(t, o));
}
function qr(o, e) {
  return (o % e + e) % e;
}
function Hl(o, e, t, n, i) {
  return n + (o - e) * (i - n) / (t - e);
}
function zl(o, e, t) {
  return o !== e ? (t - o) / (e - o) : 0;
}
function Gi(o, e, t) {
  return (1 - t) * o + t * e;
}
function Vl(o, e, t, n) {
  return Gi(o, e, 1 - Math.exp(-t * n));
}
function Wl(o, e = 1) {
  return e - Math.abs(qr(o, e * 2) - e);
}
function ql(o, e, t) {
  return o <= e ? 0 : o >= t ? 1 : (o = (o - e) / (t - e), o * o * (3 - 2 * o));
}
function jl(o, e, t) {
  return o <= e ? 0 : o >= t ? 1 : (o = (o - e) / (t - e), o * o * o * (o * (o * 6 - 15) + 10));
}
function Yl(o, e) {
  return o + Math.floor(Math.random() * (e - o + 1));
}
function Kl(o, e) {
  return o + Math.random() * (e - o);
}
function Jl(o) {
  return o * (0.5 - Math.random());
}
function Xl(o) {
  o !== void 0 && (Pa = o);
  let e = Pa += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Zl(o) {
  return o * Ui;
}
function $l(o) {
  return o * zi;
}
function kr(o) {
  return (o & o - 1) === 0 && o !== 0;
}
function ac(o) {
  return Math.pow(2, Math.ceil(Math.log(o) / Math.LN2));
}
function Bs(o) {
  return Math.pow(2, Math.floor(Math.log(o) / Math.LN2));
}
function eh(o, e, t, n, i) {
  const s = Math.cos, r = Math.sin, a = s(t / 2), c = r(t / 2), l = s((e + n) / 2), h = r((e + n) / 2), A = s((e - n) / 2), d = r((e - n) / 2), p = s((n - e) / 2), g = r((n - e) / 2);
  switch (i) {
    case "XYX":
      o.set(a * h, c * A, c * d, a * l);
      break;
    case "YZY":
      o.set(c * d, a * h, c * A, a * l);
      break;
    case "ZXZ":
      o.set(c * A, c * d, a * h, a * l);
      break;
    case "XZX":
      o.set(a * h, c * g, c * p, a * l);
      break;
    case "YXY":
      o.set(c * p, a * h, c * g, a * l);
      break;
    case "ZYZ":
      o.set(c * g, c * p, a * h, a * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function sn(o, e) {
  switch (e.constructor) {
    case Float32Array:
      return o;
    case Uint16Array:
      return o / 65535;
    case Uint8Array:
      return o / 255;
    case Int16Array:
      return Math.max(o / 32767, -1);
    case Int8Array:
      return Math.max(o / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function He(o, e) {
  switch (e.constructor) {
    case Float32Array:
      return o;
    case Uint16Array:
      return Math.round(o * 65535);
    case Uint8Array:
      return Math.round(o * 255);
    case Int16Array:
      return Math.round(o * 32767);
    case Int8Array:
      return Math.round(o * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var th = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DEG2RAD: Ui,
  RAD2DEG: zi,
  generateUUID: Ut,
  clamp: ut,
  euclideanModulo: qr,
  mapLinear: Hl,
  inverseLerp: zl,
  lerp: Gi,
  damp: Vl,
  pingpong: Wl,
  smoothstep: ql,
  smootherstep: jl,
  randInt: Yl,
  randFloat: Kl,
  randFloatSpread: Jl,
  seededRandom: Xl,
  degToRad: Zl,
  radToDeg: $l,
  isPowerOfTwo: kr,
  ceilPowerOfTwo: ac,
  floorPowerOfTwo: Bs,
  setQuaternionFromProperEuler: eh,
  normalize: He,
  denormalize: sn
});
class xe {
  constructor(e = 0, t = 0) {
    xe.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, r = this.y - e.y;
    return this.x = s * n - r * i + e.x, this.y = s * i + r * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class St {
  constructor() {
    St.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, s, r, a, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = s, h[5] = c, h[6] = n, h[7] = r, h[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, r = n[0], a = n[3], c = n[6], l = n[1], h = n[4], A = n[7], d = n[2], p = n[5], g = n[8], f = i[0], u = i[3], m = i[6], E = i[1], b = i[4], x = i[7], C = i[2], S = i[5], D = i[8];
    return s[0] = r * f + a * E + c * C, s[3] = r * u + a * b + c * S, s[6] = r * m + a * x + c * D, s[1] = l * f + h * E + A * C, s[4] = l * u + h * b + A * S, s[7] = l * m + h * x + A * D, s[2] = d * f + p * E + g * C, s[5] = d * u + p * b + g * S, s[8] = d * m + p * x + g * D, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], r = e[4], a = e[5], c = e[6], l = e[7], h = e[8];
    return t * r * h - t * a * l - n * s * h + n * a * c + i * s * l - i * r * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], r = e[4], a = e[5], c = e[6], l = e[7], h = e[8], A = h * r - a * l, d = a * c - h * s, p = l * s - r * c, g = t * A + n * d + i * p;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const f = 1 / g;
    return e[0] = A * f, e[1] = (i * l - h * n) * f, e[2] = (a * n - i * r) * f, e[3] = d * f, e[4] = (h * t - i * c) * f, e[5] = (i * s - a * t) * f, e[6] = p * f, e[7] = (n * c - l * t) * f, e[8] = (r * t - n * s) * f, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, r, a) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * r + l * a) + r + e,
      -i * l,
      i * c,
      -i * (-l * r + c * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  scale(e, t) {
    return this.premultiply(Hs.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Hs.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Hs.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Hs = /* @__PURE__ */ new St();
function oc(o) {
  for (let e = o.length - 1; e >= 0; --e)
    if (o[e] >= 65535)
      return !0;
  return !1;
}
function Vi(o) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", o);
}
function Qn(o) {
  return o < 0.04045 ? o * 0.0773993808 : Math.pow(o * 0.9478672986 + 0.0521327014, 2.4);
}
function Ms(o) {
  return o < 31308e-7 ? o * 12.92 : 1.055 * Math.pow(o, 0.41666) - 0.055;
}
const zs = {
  [Ot]: { [Hi]: Qn },
  [Hi]: { [Ot]: Ms }
}, gt = {
  legacyMode: !0,
  get workingColorSpace() {
    return Hi;
  },
  set workingColorSpace(o) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(o, e, t) {
    if (this.legacyMode || e === t || !e || !t)
      return o;
    if (zs[e] && zs[e][t] !== void 0) {
      const n = zs[e][t];
      return o.r = n(o.r), o.g = n(o.g), o.b = n(o.b), o;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(o, e) {
    return this.convert(o, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(o, e) {
    return this.convert(o, e, this.workingColorSpace);
  }
}, cc = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, $e = { r: 0, g: 0, b: 0 }, Pt = { h: 0, s: 0, l: 0 }, $i = { h: 0, s: 0, l: 0 };
function Vs(o, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? o + (e - o) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? o + (e - o) * 6 * (2 / 3 - t) : o;
}
function es(o, e) {
  return e.r = o.r, e.g = o.g, e.b = o.b, e;
}
class ye {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Ot) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, gt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = gt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, gt.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = gt.workingColorSpace) {
    if (e = qr(e, 1), t = ut(t, 0, 1), n = ut(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - s;
      this.r = Vs(r, s, e + 1 / 3), this.g = Vs(r, s, e), this.b = Vs(r, s, e - 1 / 3);
    }
    return gt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Ot) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
      let s;
      const r = i[1], a = i[2];
      switch (r) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(255, parseInt(s[1], 10)) / 255, this.g = Math.min(255, parseInt(s[2], 10)) / 255, this.b = Math.min(255, parseInt(s[3], 10)) / 255, gt.toWorkingColorSpace(this, t), n(s[4]), this;
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(100, parseInt(s[1], 10)) / 100, this.g = Math.min(100, parseInt(s[2], 10)) / 100, this.b = Math.min(100, parseInt(s[3], 10)) / 100, gt.toWorkingColorSpace(this, t), n(s[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
            const c = parseFloat(s[1]) / 360, l = parseFloat(s[2]) / 100, h = parseFloat(s[3]) / 100;
            return n(s[4]), this.setHSL(c, l, h, t);
          }
          break;
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], r = s.length;
      if (r === 3)
        return this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255, this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255, this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255, gt.toWorkingColorSpace(this, t), this;
      if (r === 6)
        return this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255, this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255, this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255, gt.toWorkingColorSpace(this, t), this;
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Ot) {
    const n = cc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Qn(e.r), this.g = Qn(e.g), this.b = Qn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ms(e.r), this.g = Ms(e.g), this.b = Ms(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ot) {
    return gt.fromWorkingColorSpace(es(this, $e), e), ut($e.r * 255, 0, 255) << 16 ^ ut($e.g * 255, 0, 255) << 8 ^ ut($e.b * 255, 0, 255) << 0;
  }
  getHexString(e = Ot) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = gt.workingColorSpace) {
    gt.fromWorkingColorSpace(es(this, $e), t);
    const n = $e.r, i = $e.g, s = $e.b, r = Math.max(n, i, s), a = Math.min(n, i, s);
    let c, l;
    const h = (a + r) / 2;
    if (a === r)
      c = 0, l = 0;
    else {
      const A = r - a;
      switch (l = h <= 0.5 ? A / (r + a) : A / (2 - r - a), r) {
        case n:
          c = (i - s) / A + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / A + 2;
          break;
        case s:
          c = (n - i) / A + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = gt.workingColorSpace) {
    return gt.fromWorkingColorSpace(es(this, $e), t), e.r = $e.r, e.g = $e.g, e.b = $e.b, e;
  }
  getStyle(e = Ot) {
    return gt.fromWorkingColorSpace(es(this, $e), e), e !== Ot ? `color(${e} ${$e.r} ${$e.g} ${$e.b})` : `rgb(${$e.r * 255 | 0},${$e.g * 255 | 0},${$e.b * 255 | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Pt), Pt.h += e, Pt.s += t, Pt.l += n, this.setHSL(Pt.h, Pt.s, Pt.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Pt), e.getHSL($i);
    const n = Gi(Pt.h, $i.h, t), i = Gi(Pt.s, $i.s, t), s = Gi(Pt.l, $i.l, t);
    return this.setHSL(n, i, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
ye.NAMES = cc;
let Vn;
class lc {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Vn === void 0 && (Vn = Vi("canvas")), Vn.width = e.width, Vn.height = e.height;
      const n = Vn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Vn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Vi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let r = 0; r < s.length; r++)
        s[r] = Qn(s[r] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Qn(t[n] / 255) * 255) : t[n] = Qn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class hc {
  constructor(e = null) {
    this.isSource = !0, this.uuid = Ut(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let r = 0, a = i.length; r < a; r++)
          i[r].isDataTexture ? s.push(Ws(i[r].image)) : s.push(Ws(i[r]));
      } else
        s = Ws(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Ws(o) {
  return typeof HTMLImageElement < "u" && o instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && o instanceof ImageBitmap ? lc.getDataURL(o) : o.data ? {
    data: Array.from(o.data),
    width: o.width,
    height: o.height,
    type: o.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let nh = 0;
class ot extends _n {
  constructor(e = ot.DEFAULT_IMAGE, t = ot.DEFAULT_MAPPING, n = wt, i = wt, s = dt, r = bn, a = ct, c = xt, l = ot.DEFAULT_ANISOTROPY, h = on) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: nh++ }), this.uuid = Ut(), this.name = "", this.source = new hc(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = r, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new xe(0, 0), this.repeat = new xe(1, 1), this.center = new xe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new St(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== ec)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case di:
          e.x = e.x - Math.floor(e.x);
          break;
        case wt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Ss:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case di:
          e.y = e.y - Math.floor(e.y);
          break;
        case wt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Ss:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
ot.DEFAULT_IMAGE = null;
ot.DEFAULT_MAPPING = ec;
ot.DEFAULT_ANISOTROPY = 1;
class ze {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    ze.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i + r[12] * s, this.y = r[1] * t + r[5] * n + r[9] * i + r[13] * s, this.z = r[2] * t + r[6] * n + r[10] * i + r[14] * s, this.w = r[3] * t + r[7] * n + r[11] * i + r[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const c = e.elements, l = c[0], h = c[4], A = c[8], d = c[1], p = c[5], g = c[9], f = c[2], u = c[6], m = c[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(A - f) < 0.01 && Math.abs(g - u) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(A + f) < 0.1 && Math.abs(g + u) < 0.1 && Math.abs(l + p + m - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (l + 1) / 2, x = (p + 1) / 2, C = (m + 1) / 2, S = (h + d) / 4, D = (A + f) / 4, _ = (g + u) / 4;
      return b > x && b > C ? b < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(b), i = S / n, s = D / n) : x > C ? x < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(x), n = S / i, s = _ / i) : C < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(C), n = D / s, i = _ / s), this.set(n, i, s, t), this;
    }
    let E = Math.sqrt((u - g) * (u - g) + (A - f) * (A - f) + (d - h) * (d - h));
    return Math.abs(E) < 1e-3 && (E = 1), this.x = (u - g) / E, this.y = (A - f) / E, this.z = (d - h) / E, this.w = Math.acos((l + p + m - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class kn extends _n {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new ze(0, 0, e, t), this.scissorTest = !1, this.viewport = new ze(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    this.texture = new ot(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : dt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new hc(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Ac extends ot {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = at, this.minFilter = at, this.wrapR = wt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class dc extends ot {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = at, this.minFilter = at, this.wrapR = wt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Wt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, r, a) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], A = n[i + 3];
    const d = s[r + 0], p = s[r + 1], g = s[r + 2], f = s[r + 3];
    if (a === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = A;
      return;
    }
    if (a === 1) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = g, e[t + 3] = f;
      return;
    }
    if (A !== f || c !== d || l !== p || h !== g) {
      let u = 1 - a;
      const m = c * d + l * p + h * g + A * f, E = m >= 0 ? 1 : -1, b = 1 - m * m;
      if (b > Number.EPSILON) {
        const C = Math.sqrt(b), S = Math.atan2(C, m * E);
        u = Math.sin(u * S) / C, a = Math.sin(a * S) / C;
      }
      const x = a * E;
      if (c = c * u + d * x, l = l * u + p * x, h = h * u + g * x, A = A * u + f * x, u === 1 - a) {
        const C = 1 / Math.sqrt(c * c + l * l + h * h + A * A);
        c *= C, l *= C, h *= C, A *= C;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = A;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, r) {
    const a = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], A = s[r], d = s[r + 1], p = s[r + 2], g = s[r + 3];
    return e[t] = a * g + h * A + c * p - l * d, e[t + 1] = c * g + h * d + l * A - a * p, e[t + 2] = l * g + h * p + a * d - c * A, e[t + 3] = h * g - a * A - c * d - l * p, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, i = e._y, s = e._z, r = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), h = a(i / 2), A = a(s / 2), d = c(n / 2), p = c(i / 2), g = c(s / 2);
    switch (r) {
      case "XYZ":
        this._x = d * h * A + l * p * g, this._y = l * p * A - d * h * g, this._z = l * h * g + d * p * A, this._w = l * h * A - d * p * g;
        break;
      case "YXZ":
        this._x = d * h * A + l * p * g, this._y = l * p * A - d * h * g, this._z = l * h * g - d * p * A, this._w = l * h * A + d * p * g;
        break;
      case "ZXY":
        this._x = d * h * A - l * p * g, this._y = l * p * A + d * h * g, this._z = l * h * g + d * p * A, this._w = l * h * A - d * p * g;
        break;
      case "ZYX":
        this._x = d * h * A - l * p * g, this._y = l * p * A + d * h * g, this._z = l * h * g - d * p * A, this._w = l * h * A + d * p * g;
        break;
      case "YZX":
        this._x = d * h * A + l * p * g, this._y = l * p * A + d * h * g, this._z = l * h * g - d * p * A, this._w = l * h * A - d * p * g;
        break;
      case "XZY":
        this._x = d * h * A - l * p * g, this._y = l * p * A - d * h * g, this._z = l * h * g + d * p * A, this._w = l * h * A + d * p * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + r);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], r = t[1], a = t[5], c = t[9], l = t[2], h = t[6], A = t[10], d = n + a + A;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (h - c) * p, this._y = (s - l) * p, this._z = (r - i) * p;
    } else if (n > a && n > A) {
      const p = 2 * Math.sqrt(1 + n - a - A);
      this._w = (h - c) / p, this._x = 0.25 * p, this._y = (i + r) / p, this._z = (s + l) / p;
    } else if (a > A) {
      const p = 2 * Math.sqrt(1 + a - n - A);
      this._w = (s - l) / p, this._x = (i + r) / p, this._y = 0.25 * p, this._z = (c + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + A - n - a);
      this._w = (r - i) / p, this._x = (s + l) / p, this._y = (c + h) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ut(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, r = e._w, a = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + r * a + i * l - s * c, this._y = i * h + r * c + s * a - n * l, this._z = s * h + r * l + n * c - i * a, this._w = r * h - n * a - i * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, i = this._y, s = this._z, r = this._w;
    let a = r * e._w + n * e._x + i * e._y + s * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = r, this._x = n, this._y = i, this._z = s, this;
    const c = 1 - a * a;
    if (c <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * r + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, a), A = Math.sin((1 - t) * h) / l, d = Math.sin(t * h) / l;
    return this._w = r * A + this._w * d, this._x = n * A + this._x * d, this._y = i * A + this._y * d, this._z = s * A + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class B {
  constructor(e = 0, t = 0, n = 0) {
    B.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(ka.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(ka.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, r = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * r, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * r, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * r, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, r = e.y, a = e.z, c = e.w, l = c * t + r * i - a * n, h = c * n + a * t - s * i, A = c * i + s * n - r * t, d = -s * t - r * n - a * i;
    return this.x = l * c + d * -s + h * -a - A * -r, this.y = h * c + d * -r + A * -s - l * -a, this.z = A * c + d * -a + l * -r - h * -s, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, r = t.x, a = t.y, c = t.z;
    return this.x = i * c - s * a, this.y = s * r - n * c, this.z = n * a - i * r, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return qs.copy(this).projectOnVector(e), this.sub(qs);
  }
  reflect(e) {
    return this.sub(qs.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ut(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const qs = /* @__PURE__ */ new B(), ka = /* @__PURE__ */ new Wt();
class Gn {
  constructor(e = new B(1 / 0, 1 / 0, 1 / 0), t = new B(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, r = -1 / 0, a = -1 / 0;
    for (let c = 0, l = e.length; c < l; c += 3) {
      const h = e[c], A = e[c + 1], d = e[c + 2];
      h < t && (t = h), A < n && (n = A), d < i && (i = d), h > s && (s = h), A > r && (r = A), d > a && (a = d);
    }
    return this.min.set(t, n, i), this.max.set(s, r, a), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, r = -1 / 0, a = -1 / 0;
    for (let c = 0, l = e.count; c < l; c++) {
      const h = e.getX(c), A = e.getY(c), d = e.getZ(c);
      h < t && (t = h), A < n && (n = A), d < i && (i = d), h > s && (s = h), A > r && (r = A), d > a && (a = d);
    }
    return this.min.set(t, n, i), this.max.set(s, r, a), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = vn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let r = 0, a = s.count; r < a; r++)
          vn.fromBufferAttribute(s, r).applyMatrix4(e.matrixWorld), this.expandByPoint(vn);
      } else
        n.boundingBox === null && n.computeBoundingBox(), js.copy(n.boundingBox), js.applyMatrix4(e.matrixWorld), this.union(js);
    const i = e.children;
    for (let s = 0, r = i.length; s < r; s++)
      this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, vn), vn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Ci), ts.subVectors(this.max, Ci), Wn.subVectors(e.a, Ci), qn.subVectors(e.b, Ci), jn.subVectors(e.c, Ci), cn.subVectors(qn, Wn), ln.subVectors(jn, qn), Mn.subVectors(Wn, jn);
    let t = [
      0,
      -cn.z,
      cn.y,
      0,
      -ln.z,
      ln.y,
      0,
      -Mn.z,
      Mn.y,
      cn.z,
      0,
      -cn.x,
      ln.z,
      0,
      -ln.x,
      Mn.z,
      0,
      -Mn.x,
      -cn.y,
      cn.x,
      0,
      -ln.y,
      ln.x,
      0,
      -Mn.y,
      Mn.x,
      0
    ];
    return !Ys(t, Wn, qn, jn, ts) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ys(t, Wn, qn, jn, ts)) ? !1 : (ns.crossVectors(cn, ln), t = [ns.x, ns.y, ns.z], Ys(t, Wn, qn, jn, ts));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return vn.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return this.getCenter(e.center), e.radius = this.getSize(vn).length() * 0.5, e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Kt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Kt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Kt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Kt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Kt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Kt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Kt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Kt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Kt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Kt = [
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B()
], vn = /* @__PURE__ */ new B(), js = /* @__PURE__ */ new Gn(), Wn = /* @__PURE__ */ new B(), qn = /* @__PURE__ */ new B(), jn = /* @__PURE__ */ new B(), cn = /* @__PURE__ */ new B(), ln = /* @__PURE__ */ new B(), Mn = /* @__PURE__ */ new B(), Ci = /* @__PURE__ */ new B(), ts = /* @__PURE__ */ new B(), ns = /* @__PURE__ */ new B(), wn = /* @__PURE__ */ new B();
function Ys(o, e, t, n, i) {
  for (let s = 0, r = o.length - 3; s <= r; s += 3) {
    wn.fromArray(o, s);
    const a = i.x * Math.abs(wn.x) + i.y * Math.abs(wn.y) + i.z * Math.abs(wn.z), c = e.dot(wn), l = t.dot(wn), h = n.dot(wn);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > a)
      return !1;
  }
  return !0;
}
const ih = /* @__PURE__ */ new Gn(), yi = /* @__PURE__ */ new B(), Ks = /* @__PURE__ */ new B();
class mi {
  constructor(e = new B(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : ih.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, r = e.length; s < r; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    yi.subVectors(e, this.center);
    const t = yi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(yi, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Ks.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(yi.copy(e.center).add(Ks)), this.expandByPoint(yi.copy(e.center).sub(Ks))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Jt = /* @__PURE__ */ new B(), Js = /* @__PURE__ */ new B(), is = /* @__PURE__ */ new B(), hn = /* @__PURE__ */ new B(), Xs = /* @__PURE__ */ new B(), ss = /* @__PURE__ */ new B(), Zs = /* @__PURE__ */ new B();
class Ds {
  constructor(e = new B(), t = new B(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Jt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Jt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Jt.copy(this.direction).multiplyScalar(t).add(this.origin), Jt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Js.copy(e).add(t).multiplyScalar(0.5), is.copy(t).sub(e).normalize(), hn.copy(this.origin).sub(Js);
    const s = e.distanceTo(t) * 0.5, r = -this.direction.dot(is), a = hn.dot(this.direction), c = -hn.dot(is), l = hn.lengthSq(), h = Math.abs(1 - r * r);
    let A, d, p, g;
    if (h > 0)
      if (A = r * c - a, d = r * a - c, g = s * h, A >= 0)
        if (d >= -g)
          if (d <= g) {
            const f = 1 / h;
            A *= f, d *= f, p = A * (A + r * d + 2 * a) + d * (r * A + d + 2 * c) + l;
          } else
            d = s, A = Math.max(0, -(r * d + a)), p = -A * A + d * (d + 2 * c) + l;
        else
          d = -s, A = Math.max(0, -(r * d + a)), p = -A * A + d * (d + 2 * c) + l;
      else
        d <= -g ? (A = Math.max(0, -(-r * s + a)), d = A > 0 ? -s : Math.min(Math.max(-s, -c), s), p = -A * A + d * (d + 2 * c) + l) : d <= g ? (A = 0, d = Math.min(Math.max(-s, -c), s), p = d * (d + 2 * c) + l) : (A = Math.max(0, -(r * s + a)), d = A > 0 ? s : Math.min(Math.max(-s, -c), s), p = -A * A + d * (d + 2 * c) + l);
    else
      d = r > 0 ? -s : s, A = Math.max(0, -(r * d + a)), p = -A * A + d * (d + 2 * c) + l;
    return n && n.copy(this.direction).multiplyScalar(A).add(this.origin), i && i.copy(is).multiplyScalar(d).add(Js), p;
  }
  intersectSphere(e, t) {
    Jt.subVectors(e.center, this.origin);
    const n = Jt.dot(this.direction), i = Jt.dot(Jt) - n * n, s = e.radius * e.radius;
    if (i > s)
      return null;
    const r = Math.sqrt(s - i), a = n - r, c = n + r;
    return a < 0 && c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, r, a, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, A = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, i = (e.min.x - d.x) * l), h >= 0 ? (s = (e.min.y - d.y) * h, r = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, r = (e.min.y - d.y) * h), n > r || s > i || ((s > n || isNaN(n)) && (n = s), (r < i || isNaN(i)) && (i = r), A >= 0 ? (a = (e.min.z - d.z) * A, c = (e.max.z - d.z) * A) : (a = (e.max.z - d.z) * A, c = (e.min.z - d.z) * A), n > c || a > i) || ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Jt) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Xs.subVectors(t, e), ss.subVectors(n, e), Zs.crossVectors(Xs, ss);
    let r = this.direction.dot(Zs), a;
    if (r > 0) {
      if (i)
        return null;
      a = 1;
    } else if (r < 0)
      a = -1, r = -r;
    else
      return null;
    hn.subVectors(this.origin, e);
    const c = a * this.direction.dot(ss.crossVectors(hn, ss));
    if (c < 0)
      return null;
    const l = a * this.direction.dot(Xs.cross(hn));
    if (l < 0 || c + l > r)
      return null;
    const h = -a * hn.dot(Zs);
    return h < 0 ? null : this.at(h / r, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class we {
  constructor() {
    we.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, s, r, a, c, l, h, A, d, p, g, f, u) {
    const m = this.elements;
    return m[0] = e, m[4] = t, m[8] = n, m[12] = i, m[1] = s, m[5] = r, m[9] = a, m[13] = c, m[2] = l, m[6] = h, m[10] = A, m[14] = d, m[3] = p, m[7] = g, m[11] = f, m[15] = u, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new we().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / Yn.setFromMatrixColumn(e, 0).length(), s = 1 / Yn.setFromMatrixColumn(e, 1).length(), r = 1 / Yn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * r, t[9] = n[9] * r, t[10] = n[10] * r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, r = Math.cos(n), a = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(s), A = Math.sin(s);
    if (e.order === "XYZ") {
      const d = r * h, p = r * A, g = a * h, f = a * A;
      t[0] = c * h, t[4] = -c * A, t[8] = l, t[1] = p + g * l, t[5] = d - f * l, t[9] = -a * c, t[2] = f - d * l, t[6] = g + p * l, t[10] = r * c;
    } else if (e.order === "YXZ") {
      const d = c * h, p = c * A, g = l * h, f = l * A;
      t[0] = d + f * a, t[4] = g * a - p, t[8] = r * l, t[1] = r * A, t[5] = r * h, t[9] = -a, t[2] = p * a - g, t[6] = f + d * a, t[10] = r * c;
    } else if (e.order === "ZXY") {
      const d = c * h, p = c * A, g = l * h, f = l * A;
      t[0] = d - f * a, t[4] = -r * A, t[8] = g + p * a, t[1] = p + g * a, t[5] = r * h, t[9] = f - d * a, t[2] = -r * l, t[6] = a, t[10] = r * c;
    } else if (e.order === "ZYX") {
      const d = r * h, p = r * A, g = a * h, f = a * A;
      t[0] = c * h, t[4] = g * l - p, t[8] = d * l + f, t[1] = c * A, t[5] = f * l + d, t[9] = p * l - g, t[2] = -l, t[6] = a * c, t[10] = r * c;
    } else if (e.order === "YZX") {
      const d = r * c, p = r * l, g = a * c, f = a * l;
      t[0] = c * h, t[4] = f - d * A, t[8] = g * A + p, t[1] = A, t[5] = r * h, t[9] = -a * h, t[2] = -l * h, t[6] = p * A + g, t[10] = d - f * A;
    } else if (e.order === "XZY") {
      const d = r * c, p = r * l, g = a * c, f = a * l;
      t[0] = c * h, t[4] = -A, t[8] = l * h, t[1] = d * A + f, t[5] = r * h, t[9] = p * A - g, t[2] = g * A - p, t[6] = a * h, t[10] = f * A + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(sh, e, rh);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return vt.subVectors(e, t), vt.lengthSq() === 0 && (vt.z = 1), vt.normalize(), An.crossVectors(n, vt), An.lengthSq() === 0 && (Math.abs(n.z) === 1 ? vt.x += 1e-4 : vt.z += 1e-4, vt.normalize(), An.crossVectors(n, vt)), An.normalize(), rs.crossVectors(vt, An), i[0] = An.x, i[4] = rs.x, i[8] = vt.x, i[1] = An.y, i[5] = rs.y, i[9] = vt.y, i[2] = An.z, i[6] = rs.z, i[10] = vt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, r = n[0], a = n[4], c = n[8], l = n[12], h = n[1], A = n[5], d = n[9], p = n[13], g = n[2], f = n[6], u = n[10], m = n[14], E = n[3], b = n[7], x = n[11], C = n[15], S = i[0], D = i[4], _ = i[8], w = i[12], R = i[1], G = i[5], Y = i[9], P = i[13], L = i[2], N = i[6], J = i[10], K = i[14], U = i[3], ee = i[7], X = i[11], W = i[15];
    return s[0] = r * S + a * R + c * L + l * U, s[4] = r * D + a * G + c * N + l * ee, s[8] = r * _ + a * Y + c * J + l * X, s[12] = r * w + a * P + c * K + l * W, s[1] = h * S + A * R + d * L + p * U, s[5] = h * D + A * G + d * N + p * ee, s[9] = h * _ + A * Y + d * J + p * X, s[13] = h * w + A * P + d * K + p * W, s[2] = g * S + f * R + u * L + m * U, s[6] = g * D + f * G + u * N + m * ee, s[10] = g * _ + f * Y + u * J + m * X, s[14] = g * w + f * P + u * K + m * W, s[3] = E * S + b * R + x * L + C * U, s[7] = E * D + b * G + x * N + C * ee, s[11] = E * _ + b * Y + x * J + C * X, s[15] = E * w + b * P + x * K + C * W, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], r = e[1], a = e[5], c = e[9], l = e[13], h = e[2], A = e[6], d = e[10], p = e[14], g = e[3], f = e[7], u = e[11], m = e[15];
    return g * (+s * c * A - i * l * A - s * a * d + n * l * d + i * a * p - n * c * p) + f * (+t * c * p - t * l * d + s * r * d - i * r * p + i * l * h - s * c * h) + u * (+t * l * A - t * a * p - s * r * A + n * r * p + s * a * h - n * l * h) + m * (-i * a * h - t * c * A + t * a * d + i * r * A - n * r * d + n * c * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], r = e[4], a = e[5], c = e[6], l = e[7], h = e[8], A = e[9], d = e[10], p = e[11], g = e[12], f = e[13], u = e[14], m = e[15], E = A * u * l - f * d * l + f * c * p - a * u * p - A * c * m + a * d * m, b = g * d * l - h * u * l - g * c * p + r * u * p + h * c * m - r * d * m, x = h * f * l - g * A * l + g * a * p - r * f * p - h * a * m + r * A * m, C = g * A * c - h * f * c - g * a * d + r * f * d + h * a * u - r * A * u, S = t * E + n * b + i * x + s * C;
    if (S === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const D = 1 / S;
    return e[0] = E * D, e[1] = (f * d * s - A * u * s - f * i * p + n * u * p + A * i * m - n * d * m) * D, e[2] = (a * u * s - f * c * s + f * i * l - n * u * l - a * i * m + n * c * m) * D, e[3] = (A * c * s - a * d * s - A * i * l + n * d * l + a * i * p - n * c * p) * D, e[4] = b * D, e[5] = (h * u * s - g * d * s + g * i * p - t * u * p - h * i * m + t * d * m) * D, e[6] = (g * c * s - r * u * s - g * i * l + t * u * l + r * i * m - t * c * m) * D, e[7] = (r * d * s - h * c * s + h * i * l - t * d * l - r * i * p + t * c * p) * D, e[8] = x * D, e[9] = (g * A * s - h * f * s - g * n * p + t * f * p + h * n * m - t * A * m) * D, e[10] = (r * f * s - g * a * s + g * n * l - t * f * l - r * n * m + t * a * m) * D, e[11] = (h * a * s - r * A * s - h * n * l + t * A * l + r * n * p - t * a * p) * D, e[12] = C * D, e[13] = (h * f * i - g * A * i + g * n * d - t * f * d - h * n * u + t * A * u) * D, e[14] = (g * a * i - r * f * i - g * n * c + t * f * c + r * n * u - t * a * u) * D, e[15] = (r * A * i - h * a * i + h * n * c - t * A * c - r * n * d + t * a * d) * D, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, r = e.x, a = e.y, c = e.z, l = s * r, h = s * a;
    return this.set(
      l * r + n,
      l * a - i * c,
      l * c + i * a,
      0,
      l * a + i * c,
      h * a + n,
      h * c - i * r,
      0,
      l * c - i * a,
      h * c + i * r,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, s, r) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      r,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, r = t._y, a = t._z, c = t._w, l = s + s, h = r + r, A = a + a, d = s * l, p = s * h, g = s * A, f = r * h, u = r * A, m = a * A, E = c * l, b = c * h, x = c * A, C = n.x, S = n.y, D = n.z;
    return i[0] = (1 - (f + m)) * C, i[1] = (p + x) * C, i[2] = (g - b) * C, i[3] = 0, i[4] = (p - x) * S, i[5] = (1 - (d + m)) * S, i[6] = (u + E) * S, i[7] = 0, i[8] = (g + b) * D, i[9] = (u - E) * D, i[10] = (1 - (d + f)) * D, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Yn.set(i[0], i[1], i[2]).length();
    const r = Yn.set(i[4], i[5], i[6]).length(), a = Yn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], kt.copy(this);
    const l = 1 / s, h = 1 / r, A = 1 / a;
    return kt.elements[0] *= l, kt.elements[1] *= l, kt.elements[2] *= l, kt.elements[4] *= h, kt.elements[5] *= h, kt.elements[6] *= h, kt.elements[8] *= A, kt.elements[9] *= A, kt.elements[10] *= A, t.setFromRotationMatrix(kt), n.x = s, n.y = r, n.z = a, this;
  }
  makePerspective(e, t, n, i, s, r) {
    const a = this.elements, c = 2 * s / (t - e), l = 2 * s / (n - i), h = (t + e) / (t - e), A = (n + i) / (n - i), d = -(r + s) / (r - s), p = -2 * r * s / (r - s);
    return a[0] = c, a[4] = 0, a[8] = h, a[12] = 0, a[1] = 0, a[5] = l, a[9] = A, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = d, a[14] = p, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, r) {
    const a = this.elements, c = 1 / (t - e), l = 1 / (n - i), h = 1 / (r - s), A = (t + e) * c, d = (n + i) * l, p = (r + s) * h;
    return a[0] = 2 * c, a[4] = 0, a[8] = 0, a[12] = -A, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -d, a[2] = 0, a[6] = 0, a[10] = -2 * h, a[14] = -p, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Yn = /* @__PURE__ */ new B(), kt = /* @__PURE__ */ new we(), sh = /* @__PURE__ */ new B(0, 0, 0), rh = /* @__PURE__ */ new B(1, 1, 1), An = /* @__PURE__ */ new B(), rs = /* @__PURE__ */ new B(), vt = /* @__PURE__ */ new B(), Na = /* @__PURE__ */ new we(), Ua = /* @__PURE__ */ new Wt();
class Ji {
  constructor(e = 0, t = 0, n = 0, i = Ji.DefaultOrder) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], r = i[4], a = i[8], c = i[1], l = i[5], h = i[9], A = i[2], d = i[6], p = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ut(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-r, s)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ut(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-A, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ut(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-A, p), this._z = Math.atan2(-r, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ut(A, -1, 1)), Math.abs(A) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-r, l));
        break;
      case "YZX":
        this._z = Math.asin(ut(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-A, s)) : (this._x = 0, this._y = Math.atan2(a, p));
        break;
      case "XZY":
        this._z = Math.asin(-ut(r, -1, 1)), Math.abs(r) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Na.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Na, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ua.setFromEuler(this), this.setFromQuaternion(Ua, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
  }
}
Ji.DefaultOrder = "XYZ";
Ji.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class jr {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let ah = 0;
const Ga = /* @__PURE__ */ new B(), Kn = /* @__PURE__ */ new Wt(), Xt = /* @__PURE__ */ new we(), as = /* @__PURE__ */ new B(), vi = /* @__PURE__ */ new B(), oh = /* @__PURE__ */ new B(), ch = /* @__PURE__ */ new Wt(), Oa = /* @__PURE__ */ new B(1, 0, 0), Ha = /* @__PURE__ */ new B(0, 1, 0), za = /* @__PURE__ */ new B(0, 0, 1), lh = { type: "added" }, Va = { type: "removed" };
class qe extends _n {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: ah++ }), this.uuid = Ut(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = qe.DefaultUp.clone();
    const e = new B(), t = new Ji(), n = new Wt(), i = new B(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function r() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(r), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new we()
      },
      normalMatrix: {
        value: new St()
      }
    }), this.matrix = new we(), this.matrixWorld = new we(), this.matrixAutoUpdate = qe.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = qe.DefaultMatrixWorldAutoUpdate, this.layers = new jr(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Kn.setFromAxisAngle(e, t), this.quaternion.multiply(Kn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Kn.setFromAxisAngle(e, t), this.quaternion.premultiply(Kn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Oa, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ha, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(za, e);
  }
  translateOnAxis(e, t) {
    return Ga.copy(e).applyQuaternion(this.quaternion), this.position.add(Ga.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Oa, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ha, e);
  }
  translateZ(e) {
    return this.translateOnAxis(za, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Xt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? as.copy(e) : as.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), vi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Xt.lookAt(vi, as, this.up) : Xt.lookAt(as, vi, this.up), this.quaternion.setFromRotationMatrix(Xt), i && (Xt.extractRotation(i.matrixWorld), Kn.setFromRotationMatrix(Xt), this.quaternion.premultiply(Kn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(lh)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Va)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(Va);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Xt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Xt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Xt), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const r = this.children[n].getObjectByProperty(e, t);
      if (r !== void 0)
        return r;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, s = this.children.length; i < s; i++) {
      const r = this.children[i].getObjectsByProperty(e, t);
      r.length > 0 && (n = n.concat(r));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(vi, e, oh), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(vi, ch, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let s = 0, r = i.length; s < r; s++) {
        const a = i[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function s(a, c) {
      return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const c = a.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const A = c[l];
            s(e.shapes, A);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          a.push(s(e.materials, this.material[c]));
        i.material = a;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const c = this.animations[a];
        i.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const a = r(e.geometries), c = r(e.materials), l = r(e.textures), h = r(e.images), A = r(e.shapes), d = r(e.skeletons), p = r(e.animations), g = r(e.nodes);
      a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), A.length > 0 && (n.shapes = A), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function r(a) {
      const c = [];
      for (const l in a) {
        const h = a[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
qe.DefaultUp = /* @__PURE__ */ new B(0, 1, 0);
qe.DefaultMatrixAutoUpdate = !0;
qe.DefaultMatrixWorldAutoUpdate = !0;
const Nt = /* @__PURE__ */ new B(), Zt = /* @__PURE__ */ new B(), $s = /* @__PURE__ */ new B(), $t = /* @__PURE__ */ new B(), Jn = /* @__PURE__ */ new B(), Xn = /* @__PURE__ */ new B(), Wa = /* @__PURE__ */ new B(), er = /* @__PURE__ */ new B(), tr = /* @__PURE__ */ new B(), nr = /* @__PURE__ */ new B();
class nn {
  constructor(e = new B(), t = new B(), n = new B()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Nt.subVectors(e, t), i.cross(Nt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    Nt.subVectors(i, t), Zt.subVectors(n, t), $s.subVectors(e, t);
    const r = Nt.dot(Nt), a = Nt.dot(Zt), c = Nt.dot($s), l = Zt.dot(Zt), h = Zt.dot($s), A = r * l - a * a;
    if (A === 0)
      return s.set(-2, -1, -1);
    const d = 1 / A, p = (l * c - a * h) * d, g = (r * h - a * c) * d;
    return s.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, $t), $t.x >= 0 && $t.y >= 0 && $t.x + $t.y <= 1;
  }
  static getUV(e, t, n, i, s, r, a, c) {
    return this.getBarycoord(e, t, n, i, $t), c.set(0, 0), c.addScaledVector(s, $t.x), c.addScaledVector(r, $t.y), c.addScaledVector(a, $t.z), c;
  }
  static isFrontFacing(e, t, n, i) {
    return Nt.subVectors(n, t), Zt.subVectors(e, t), Nt.cross(Zt).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Nt.subVectors(this.c, this.b), Zt.subVectors(this.a, this.b), Nt.cross(Zt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return nn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return nn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return nn.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return nn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return nn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let r, a;
    Jn.subVectors(i, n), Xn.subVectors(s, n), er.subVectors(e, n);
    const c = Jn.dot(er), l = Xn.dot(er);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    tr.subVectors(e, i);
    const h = Jn.dot(tr), A = Xn.dot(tr);
    if (h >= 0 && A <= h)
      return t.copy(i);
    const d = c * A - h * l;
    if (d <= 0 && c >= 0 && h <= 0)
      return r = c / (c - h), t.copy(n).addScaledVector(Jn, r);
    nr.subVectors(e, s);
    const p = Jn.dot(nr), g = Xn.dot(nr);
    if (g >= 0 && p <= g)
      return t.copy(s);
    const f = p * l - c * g;
    if (f <= 0 && l >= 0 && g <= 0)
      return a = l / (l - g), t.copy(n).addScaledVector(Xn, a);
    const u = h * g - p * A;
    if (u <= 0 && A - h >= 0 && p - g >= 0)
      return Wa.subVectors(s, i), a = (A - h) / (A - h + (p - g)), t.copy(i).addScaledVector(Wa, a);
    const m = 1 / (u + f + d);
    return r = f * m, a = d * m, t.copy(n).addScaledVector(Jn, r).addScaledVector(Xn, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let hh = 0;
class Vt extends _n {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: hh++ }), this.uuid = Ut(), this.name = "", this.type = "Material", this.blending = oi, this.side = mn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Jo, this.blendDst = Xo, this.blendEquation = ri, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = vr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Ol, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Os, this.stencilZFail = Os, this.stencilZPass = Os, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== oi && (n.blending = this.blending), this.side !== mn && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const r = [];
      for (const a in s) {
        const c = s[a];
        delete c.metadata, r.push(c);
      }
      return r;
    }
    if (t) {
      const s = i(e.textures), r = i(e.images);
      s.length > 0 && (n.textures = s), r.length > 0 && (n.images = r);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class pn extends Vt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ye(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Zo, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Je = /* @__PURE__ */ new B(), os = /* @__PURE__ */ new xe();
class lt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Fr, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        os.fromBufferAttribute(this, t), os.applyMatrix3(e), this.setXY(t, os.x, os.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Je.fromBufferAttribute(this, t), Je.applyMatrix3(e), this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Je.fromBufferAttribute(this, t), Je.applyMatrix4(e), this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Je.fromBufferAttribute(this, t), Je.applyNormalMatrix(e), this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Je.fromBufferAttribute(this, t), Je.transformDirection(e), this.setXYZ(t, Je.x, Je.y, Je.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = sn(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = sn(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = sn(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = sn(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = He(t, this.array), n = He(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = He(t, this.array), n = He(n, this.array), i = He(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = He(t, this.array), n = He(n, this.array), i = He(i, this.array), s = He(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Fr && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class uc extends lt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class fc extends lt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Gt extends lt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Ah = 0;
const Lt = /* @__PURE__ */ new we(), ir = /* @__PURE__ */ new qe(), Zn = /* @__PURE__ */ new B(), Mt = /* @__PURE__ */ new Gn(), Mi = /* @__PURE__ */ new Gn(), rt = /* @__PURE__ */ new B();
class Tt extends _n {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ah++ }), this.uuid = Ut(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (oc(e) ? fc : uc)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new St().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Lt.makeRotationFromQuaternion(e), this.applyMatrix4(Lt), this;
  }
  rotateX(e) {
    return Lt.makeRotationX(e), this.applyMatrix4(Lt), this;
  }
  rotateY(e) {
    return Lt.makeRotationY(e), this.applyMatrix4(Lt), this;
  }
  rotateZ(e) {
    return Lt.makeRotationZ(e), this.applyMatrix4(Lt), this;
  }
  translate(e, t, n) {
    return Lt.makeTranslation(e, t, n), this.applyMatrix4(Lt), this;
  }
  scale(e, t, n) {
    return Lt.makeScale(e, t, n), this.applyMatrix4(Lt), this;
  }
  lookAt(e) {
    return ir.lookAt(e), ir.updateMatrix(), this.applyMatrix4(ir.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Zn).negate(), this.translate(Zn.x, Zn.y, Zn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Gt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Gn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new B(-1 / 0, -1 / 0, -1 / 0),
        new B(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          Mt.setFromBufferAttribute(s), this.morphTargetsRelative ? (rt.addVectors(this.boundingBox.min, Mt.min), this.boundingBox.expandByPoint(rt), rt.addVectors(this.boundingBox.max, Mt.max), this.boundingBox.expandByPoint(rt)) : (this.boundingBox.expandByPoint(Mt.min), this.boundingBox.expandByPoint(Mt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new mi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new B(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Mt.setFromBufferAttribute(e), t)
        for (let s = 0, r = t.length; s < r; s++) {
          const a = t[s];
          Mi.setFromBufferAttribute(a), this.morphTargetsRelative ? (rt.addVectors(Mt.min, Mi.min), Mt.expandByPoint(rt), rt.addVectors(Mt.max, Mi.max), Mt.expandByPoint(rt)) : (Mt.expandByPoint(Mi.min), Mt.expandByPoint(Mi.max));
        }
      Mt.getCenter(n);
      let i = 0;
      for (let s = 0, r = e.count; s < r; s++)
        rt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(rt));
      if (t)
        for (let s = 0, r = t.length; s < r; s++) {
          const a = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = a.count; l < h; l++)
            rt.fromBufferAttribute(a, l), c && (Zn.fromBufferAttribute(e, l), rt.add(Zn)), i = Math.max(i, n.distanceToSquared(rt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, s = t.normal.array, r = t.uv.array, a = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new lt(new Float32Array(4 * a), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let R = 0; R < a; R++)
      l[R] = new B(), h[R] = new B();
    const A = new B(), d = new B(), p = new B(), g = new xe(), f = new xe(), u = new xe(), m = new B(), E = new B();
    function b(R, G, Y) {
      A.fromArray(i, R * 3), d.fromArray(i, G * 3), p.fromArray(i, Y * 3), g.fromArray(r, R * 2), f.fromArray(r, G * 2), u.fromArray(r, Y * 2), d.sub(A), p.sub(A), f.sub(g), u.sub(g);
      const P = 1 / (f.x * u.y - u.x * f.y);
      isFinite(P) && (m.copy(d).multiplyScalar(u.y).addScaledVector(p, -f.y).multiplyScalar(P), E.copy(p).multiplyScalar(f.x).addScaledVector(d, -u.x).multiplyScalar(P), l[R].add(m), l[G].add(m), l[Y].add(m), h[R].add(E), h[G].add(E), h[Y].add(E));
    }
    let x = this.groups;
    x.length === 0 && (x = [{
      start: 0,
      count: n.length
    }]);
    for (let R = 0, G = x.length; R < G; ++R) {
      const Y = x[R], P = Y.start, L = Y.count;
      for (let N = P, J = P + L; N < J; N += 3)
        b(
          n[N + 0],
          n[N + 1],
          n[N + 2]
        );
    }
    const C = new B(), S = new B(), D = new B(), _ = new B();
    function w(R) {
      D.fromArray(s, R * 3), _.copy(D);
      const G = l[R];
      C.copy(G), C.sub(D.multiplyScalar(D.dot(G))).normalize(), S.crossVectors(_, G);
      const P = S.dot(h[R]) < 0 ? -1 : 1;
      c[R * 4] = C.x, c[R * 4 + 1] = C.y, c[R * 4 + 2] = C.z, c[R * 4 + 3] = P;
    }
    for (let R = 0, G = x.length; R < G; ++R) {
      const Y = x[R], P = Y.start, L = Y.count;
      for (let N = P, J = P + L; N < J; N += 3)
        w(n[N + 0]), w(n[N + 1]), w(n[N + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new lt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, p = n.count; d < p; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new B(), s = new B(), r = new B(), a = new B(), c = new B(), l = new B(), h = new B(), A = new B();
      if (e)
        for (let d = 0, p = e.count; d < p; d += 3) {
          const g = e.getX(d + 0), f = e.getX(d + 1), u = e.getX(d + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, f), r.fromBufferAttribute(t, u), h.subVectors(r, s), A.subVectors(i, s), h.cross(A), a.fromBufferAttribute(n, g), c.fromBufferAttribute(n, f), l.fromBufferAttribute(n, u), a.add(h), c.add(h), l.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(f, c.x, c.y, c.z), n.setXYZ(u, l.x, l.y, l.z);
        }
      else
        for (let d = 0, p = t.count; d < p; d += 3)
          i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), r.fromBufferAttribute(t, d + 2), h.subVectors(r, s), A.subVectors(i, s), h.cross(A), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      rt.fromBufferAttribute(e, t), rt.normalize(), e.setXYZ(t, rt.x, rt.y, rt.z);
  }
  toNonIndexed() {
    function e(a, c) {
      const l = a.array, h = a.itemSize, A = a.normalized, d = new l.constructor(c.length * h);
      let p = 0, g = 0;
      for (let f = 0, u = c.length; f < u; f++) {
        a.isInterleavedBufferAttribute ? p = c[f] * a.data.stride + a.offset : p = c[f] * h;
        for (let m = 0; m < h; m++)
          d[g++] = l[p++];
      }
      return new lt(d, h, A);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Tt(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const c = i[a], l = e(c, n);
      t.setAttribute(a, l);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const c = [], l = s[a];
      for (let h = 0, A = l.length; h < A; h++) {
        const d = l[h], p = e(d, n);
        c.push(p);
      }
      t.morphAttributes[a] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const r = this.groups;
    for (let a = 0, c = r.length; a < c; a++) {
      const l = r[a];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let A = 0, d = l.length; A < d; A++) {
        const p = l[A];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && (i[c] = h, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const r = this.groups;
    r.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(r)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], A = s[l];
      for (let d = 0, p = A.length; d < p; d++)
        h.push(A[d].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const r = e.groups;
    for (let l = 0, h = r.length; l < h; l++) {
      const A = r[l];
      this.addGroup(A.start, A.count, A.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const qa = /* @__PURE__ */ new we(), $n = /* @__PURE__ */ new Ds(), sr = /* @__PURE__ */ new mi(), wi = /* @__PURE__ */ new B(), Si = /* @__PURE__ */ new B(), Bi = /* @__PURE__ */ new B(), rr = /* @__PURE__ */ new B(), cs = /* @__PURE__ */ new B(), ls = /* @__PURE__ */ new xe(), hs = /* @__PURE__ */ new xe(), As = /* @__PURE__ */ new xe(), ar = /* @__PURE__ */ new B(), ds = /* @__PURE__ */ new B();
class Ve extends qe {
  constructor(e = new Tt(), t = new pn()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, r = i.length; s < r; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, r = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      cs.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = a[c], A = s[c];
        h !== 0 && (rr.fromBufferAttribute(A, e), r ? cs.addScaledVector(rr, h) : cs.addScaledVector(rr.sub(t), h));
      }
      t.add(cs);
    }
    return this.isSkinnedMesh && this.boneTransform(e, t), t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), sr.copy(n.boundingSphere), sr.applyMatrix4(s), e.ray.intersectsSphere(sr) === !1) || (qa.copy(s).invert(), $n.copy(e.ray).applyMatrix4(qa), n.boundingBox !== null && $n.intersectsBox(n.boundingBox) === !1))
      return;
    let r;
    const a = n.index, c = n.attributes.position, l = n.attributes.uv, h = n.attributes.uv2, A = n.groups, d = n.drawRange;
    if (a !== null)
      if (Array.isArray(i))
        for (let p = 0, g = A.length; p < g; p++) {
          const f = A[p], u = i[f.materialIndex], m = Math.max(f.start, d.start), E = Math.min(a.count, Math.min(f.start + f.count, d.start + d.count));
          for (let b = m, x = E; b < x; b += 3) {
            const C = a.getX(b), S = a.getX(b + 1), D = a.getX(b + 2);
            r = us(this, u, e, $n, l, h, C, S, D), r && (r.faceIndex = Math.floor(b / 3), r.face.materialIndex = f.materialIndex, t.push(r));
          }
        }
      else {
        const p = Math.max(0, d.start), g = Math.min(a.count, d.start + d.count);
        for (let f = p, u = g; f < u; f += 3) {
          const m = a.getX(f), E = a.getX(f + 1), b = a.getX(f + 2);
          r = us(this, i, e, $n, l, h, m, E, b), r && (r.faceIndex = Math.floor(f / 3), t.push(r));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(i))
        for (let p = 0, g = A.length; p < g; p++) {
          const f = A[p], u = i[f.materialIndex], m = Math.max(f.start, d.start), E = Math.min(c.count, Math.min(f.start + f.count, d.start + d.count));
          for (let b = m, x = E; b < x; b += 3) {
            const C = b, S = b + 1, D = b + 2;
            r = us(this, u, e, $n, l, h, C, S, D), r && (r.faceIndex = Math.floor(b / 3), r.face.materialIndex = f.materialIndex, t.push(r));
          }
        }
      else {
        const p = Math.max(0, d.start), g = Math.min(c.count, d.start + d.count);
        for (let f = p, u = g; f < u; f += 3) {
          const m = f, E = f + 1, b = f + 2;
          r = us(this, i, e, $n, l, h, m, E, b), r && (r.faceIndex = Math.floor(f / 3), t.push(r));
        }
      }
  }
}
function dh(o, e, t, n, i, s, r, a) {
  let c;
  if (e.side === Bt ? c = n.intersectTriangle(r, s, i, !0, a) : c = n.intersectTriangle(i, s, r, e.side === mn, a), c === null)
    return null;
  ds.copy(a), ds.applyMatrix4(o.matrixWorld);
  const l = t.ray.origin.distanceTo(ds);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: ds.clone(),
    object: o
  };
}
function us(o, e, t, n, i, s, r, a, c) {
  o.getVertexPosition(r, wi), o.getVertexPosition(a, Si), o.getVertexPosition(c, Bi);
  const l = dh(o, e, t, n, wi, Si, Bi, ar);
  if (l) {
    i && (ls.fromBufferAttribute(i, r), hs.fromBufferAttribute(i, a), As.fromBufferAttribute(i, c), l.uv = nn.getUV(ar, wi, Si, Bi, ls, hs, As, new xe())), s && (ls.fromBufferAttribute(s, r), hs.fromBufferAttribute(s, a), As.fromBufferAttribute(s, c), l.uv2 = nn.getUV(ar, wi, Si, Bi, ls, hs, As, new xe()));
    const h = {
      a: r,
      b: a,
      c,
      normal: new B(),
      materialIndex: 0
    };
    nn.getNormal(wi, Si, Bi, h.normal), l.face = h;
  }
  return l;
}
class bi extends Tt {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, r = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: r
    };
    const a = this;
    i = Math.floor(i), s = Math.floor(s), r = Math.floor(r);
    const c = [], l = [], h = [], A = [];
    let d = 0, p = 0;
    g("z", "y", "x", -1, -1, n, t, e, r, s, 0), g("z", "y", "x", 1, -1, n, t, -e, r, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, r, 2), g("x", "z", "y", 1, -1, e, n, -t, i, r, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new Gt(l, 3)), this.setAttribute("normal", new Gt(h, 3)), this.setAttribute("uv", new Gt(A, 2));
    function g(f, u, m, E, b, x, C, S, D, _, w) {
      const R = x / D, G = C / _, Y = x / 2, P = C / 2, L = S / 2, N = D + 1, J = _ + 1;
      let K = 0, U = 0;
      const ee = new B();
      for (let X = 0; X < J; X++) {
        const W = X * G - P;
        for (let O = 0; O < N; O++) {
          const se = O * R - Y;
          ee[f] = se * E, ee[u] = W * b, ee[m] = L, l.push(ee.x, ee.y, ee.z), ee[f] = 0, ee[u] = 0, ee[m] = S > 0 ? 1 : -1, h.push(ee.x, ee.y, ee.z), A.push(O / D), A.push(1 - X / _), K += 1;
        }
      }
      for (let X = 0; X < _; X++)
        for (let W = 0; W < D; W++) {
          const O = d + W + N * X, se = d + W + N * (X + 1), te = d + (W + 1) + N * (X + 1), re = d + (W + 1) + N * X;
          c.push(O, se, re), c.push(se, te, re), U += 6;
        }
      a.addGroup(p, U, w), p += U, d += K;
    }
  }
  static fromJSON(e) {
    return new bi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function pi(o) {
  const e = {};
  for (const t in o) {
    e[t] = {};
    for (const n in o[t]) {
      const i = o[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function _t(o) {
  const e = {};
  for (let t = 0; t < o.length; t++) {
    const n = pi(o[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function uh(o) {
  const e = [];
  for (let t = 0; t < o.length; t++)
    e.push(o[t].clone());
  return e;
}
function pc(o) {
  return o.getRenderTarget() === null && o.outputEncoding === Se ? Ot : Hi;
}
const fh = { clone: pi, merge: _t };
var ph = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, gh = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Nn extends Vt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ph, this.fragmentShader = gh, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = pi(e.uniforms), this.uniformsGroups = uh(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const r = this.uniforms[i].value;
      r && r.isTexture ? t.uniforms[i] = {
        type: "t",
        value: r.toJSON(e).uuid
      } : r && r.isColor ? t.uniforms[i] = {
        type: "c",
        value: r.getHex()
      } : r && r.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: r.toArray()
      } : r && r.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: r.toArray()
      } : r && r.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: r.toArray()
      } : r && r.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: r.toArray()
      } : r && r.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: r.toArray()
      } : t.uniforms[i] = {
        value: r
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class gc extends qe {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new we(), this.projectionMatrix = new we(), this.projectionMatrixInverse = new we();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Et extends gc {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = zi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Ui * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return zi * 2 * Math.atan(
      Math.tan(Ui * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, s, r) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = r, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Ui * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const r = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = r.fullWidth, l = r.fullHeight;
      s += r.offsetX * i / c, t -= r.offsetY * n / l, i *= r.width / c, n *= r.height / l;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const ei = -90, ti = 1;
class mh extends qe {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const i = new Et(ei, ti, e, t);
    i.layers = this.layers, i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const s = new Et(ei, ti, e, t);
    s.layers = this.layers, s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), this.add(s);
    const r = new Et(ei, ti, e, t);
    r.layers = this.layers, r.up.set(0, 0, -1), r.lookAt(0, 1, 0), this.add(r);
    const a = new Et(ei, ti, e, t);
    a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(0, -1, 0), this.add(a);
    const c = new Et(ei, ti, e, t);
    c.layers = this.layers, c.up.set(0, 1, 0), c.lookAt(0, 0, 1), this.add(c);
    const l = new Et(ei, ti, e, t);
    l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, s, r, a, c, l] = this.children, h = e.getRenderTarget(), A = e.toneMapping, d = e.xr.enabled;
    e.toneMapping = rn, e.xr.enabled = !1;
    const p = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, r), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = p, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(h), e.toneMapping = A, e.xr.enabled = d, n.texture.needsPMREMUpdate = !0;
  }
}
class Yr extends ot {
  constructor(e, t, n, i, s, r, a, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : hi, super(e, t, n, i, s, r, a, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class bh extends kn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Yr(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : dt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    }, i = new bi(5, 5, 5), s = new Nn({
      name: "CubemapFromEquirect",
      uniforms: pi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Bt,
      blending: gn
    });
    s.uniforms.tEquirect.value = t;
    const r = new Ve(i, s), a = t.minFilter;
    return t.minFilter === bn && (t.minFilter = dt), new mh(1, 10, this).update(e, r), t.minFilter = a, r.geometry.dispose(), r.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let r = 0; r < 6; r++)
      e.setRenderTarget(this, r), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const or = /* @__PURE__ */ new B(), _h = /* @__PURE__ */ new B(), xh = /* @__PURE__ */ new St();
class Sn {
  constructor(e = new B(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = or.subVectors(n, t).cross(_h.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(or), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || xh.getNormalMatrix(e), i = this.coplanarPoint(or).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ni = /* @__PURE__ */ new mi(), fs = /* @__PURE__ */ new B();
class Kr {
  constructor(e = new Sn(), t = new Sn(), n = new Sn(), i = new Sn(), s = new Sn(), r = new Sn()) {
    this.planes = [e, t, n, i, s, r];
  }
  set(e, t, n, i, s, r) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(s), a[5].copy(r), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, i = n[0], s = n[1], r = n[2], a = n[3], c = n[4], l = n[5], h = n[6], A = n[7], d = n[8], p = n[9], g = n[10], f = n[11], u = n[12], m = n[13], E = n[14], b = n[15];
    return t[0].setComponents(a - i, A - c, f - d, b - u).normalize(), t[1].setComponents(a + i, A + c, f + d, b + u).normalize(), t[2].setComponents(a + s, A + l, f + p, b + m).normalize(), t[3].setComponents(a - s, A - l, f - p, b - m).normalize(), t[4].setComponents(a - r, A - h, f - g, b - E).normalize(), t[5].setComponents(a + r, A + h, f + g, b + E).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(ni);
  }
  intersectsSprite(e) {
    return ni.center.set(0, 0, 0), ni.radius = 0.7071067811865476, ni.applyMatrix4(e.matrixWorld), this.intersectsSphere(ni);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (fs.x = i.normal.x > 0 ? e.max.x : e.min.x, fs.y = i.normal.y > 0 ? e.max.y : e.min.y, fs.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(fs) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function mc() {
  let o = null, e = !1, t = null, n = null;
  function i(s, r) {
    t(s, r), n = o.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = o.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      o.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      o = s;
    }
  };
}
function Eh(o, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, h) {
    const A = l.array, d = l.usage, p = o.createBuffer();
    o.bindBuffer(h, p), o.bufferData(h, A, d), l.onUploadCallback();
    let g;
    if (A instanceof Float32Array)
      g = 5126;
    else if (A instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          g = 5131;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = 5123;
    else if (A instanceof Int16Array)
      g = 5122;
    else if (A instanceof Uint32Array)
      g = 5125;
    else if (A instanceof Int32Array)
      g = 5124;
    else if (A instanceof Int8Array)
      g = 5120;
    else if (A instanceof Uint8Array)
      g = 5121;
    else if (A instanceof Uint8ClampedArray)
      g = 5121;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + A);
    return {
      buffer: p,
      type: g,
      bytesPerElement: A.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function s(l, h, A) {
    const d = h.array, p = h.updateRange;
    o.bindBuffer(A, l), p.count === -1 ? o.bufferSubData(A, 0, d) : (t ? o.bufferSubData(
      A,
      p.offset * d.BYTES_PER_ELEMENT,
      d,
      p.offset,
      p.count
    ) : o.bufferSubData(
      A,
      p.offset * d.BYTES_PER_ELEMENT,
      d.subarray(p.offset, p.offset + p.count)
    ), p.count = -1), h.onUploadCallback();
  }
  function r(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function a(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (o.deleteBuffer(h.buffer), n.delete(l));
  }
  function c(l, h) {
    if (l.isGLBufferAttribute) {
      const d = n.get(l);
      (!d || d.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const A = n.get(l);
    A === void 0 ? n.set(l, i(l, h)) : A.version < l.version && (s(A.buffer, l, h), A.version = l.version);
  }
  return {
    get: r,
    remove: a,
    update: c
  };
}
class Jr extends Tt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, r = t / 2, a = Math.floor(n), c = Math.floor(i), l = a + 1, h = c + 1, A = e / a, d = t / c, p = [], g = [], f = [], u = [];
    for (let m = 0; m < h; m++) {
      const E = m * d - r;
      for (let b = 0; b < l; b++) {
        const x = b * A - s;
        g.push(x, -E, 0), f.push(0, 0, 1), u.push(b / a), u.push(1 - m / c);
      }
    }
    for (let m = 0; m < c; m++)
      for (let E = 0; E < a; E++) {
        const b = E + l * m, x = E + l * (m + 1), C = E + 1 + l * (m + 1), S = E + 1 + l * m;
        p.push(b, x, S), p.push(x, C, S);
      }
    this.setIndex(p), this.setAttribute("position", new Gt(g, 3)), this.setAttribute("normal", new Gt(f, 3)), this.setAttribute("uv", new Gt(u, 2));
  }
  static fromJSON(e) {
    return new Jr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Ih = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, Ch = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, yh = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, vh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Mh = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, wh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Sh = "vec3 transformed = vec3( position );", Bh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Th = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, Dh = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Rh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Lh = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Qh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Fh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Ph = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, kh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Nh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Uh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Gh = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Oh = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, Hh = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, zh = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Vh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Wh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, qh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, jh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Yh = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Kh = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Jh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Xh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Zh = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, $h = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, eA = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, tA = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, nA = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, iA = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, sA = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, rA = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, aA = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, oA = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, cA = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, lA = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, hA = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, AA = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, dA = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, uA = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, fA = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, pA = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, gA = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, mA = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, bA = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, _A = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, xA = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, EA = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, IA = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, CA = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, yA = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, vA = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, MA = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, wA = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, SA = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, BA = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, TA = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, DA = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, RA = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, LA = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, QA = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, FA = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, PA = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, kA = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, NA = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, UA = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, GA = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, OA = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, HA = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, zA = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, VA = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, WA = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, qA = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, jA = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, YA = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, KA = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, JA = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, XA = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, ZA = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, $A = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, ed = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, td = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, nd = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, id = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, sd = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, rd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, ad = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, od = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, cd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, ld = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, hd = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Ad = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, dd = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, ud = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, fd = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, pd = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, gd = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, md = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, bd = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, _d = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const xd = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Ed = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Id = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Cd = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, yd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, vd = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Md = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, wd = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Sd = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Bd = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Td = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Dd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Rd = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Ld = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Qd = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Fd = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Pd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, kd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Nd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Ud = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Gd = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Od = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Hd = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, zd = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Wd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, qd = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, jd = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Yd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Kd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Jd = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Xd = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Zd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, $d = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Ce = {
  alphamap_fragment: Ih,
  alphamap_pars_fragment: Ch,
  alphatest_fragment: yh,
  alphatest_pars_fragment: vh,
  aomap_fragment: Mh,
  aomap_pars_fragment: wh,
  begin_vertex: Sh,
  beginnormal_vertex: Bh,
  bsdfs: Th,
  iridescence_fragment: Dh,
  bumpmap_pars_fragment: Rh,
  clipping_planes_fragment: Lh,
  clipping_planes_pars_fragment: Qh,
  clipping_planes_pars_vertex: Fh,
  clipping_planes_vertex: Ph,
  color_fragment: kh,
  color_pars_fragment: Nh,
  color_pars_vertex: Uh,
  color_vertex: Gh,
  common: Oh,
  cube_uv_reflection_fragment: Hh,
  defaultnormal_vertex: zh,
  displacementmap_pars_vertex: Vh,
  displacementmap_vertex: Wh,
  emissivemap_fragment: qh,
  emissivemap_pars_fragment: jh,
  encodings_fragment: Yh,
  encodings_pars_fragment: Kh,
  envmap_fragment: Jh,
  envmap_common_pars_fragment: Xh,
  envmap_pars_fragment: Zh,
  envmap_pars_vertex: $h,
  envmap_physical_pars_fragment: AA,
  envmap_vertex: eA,
  fog_vertex: tA,
  fog_pars_vertex: nA,
  fog_fragment: iA,
  fog_pars_fragment: sA,
  gradientmap_pars_fragment: rA,
  lightmap_fragment: aA,
  lightmap_pars_fragment: oA,
  lights_lambert_fragment: cA,
  lights_lambert_pars_fragment: lA,
  lights_pars_begin: hA,
  lights_toon_fragment: dA,
  lights_toon_pars_fragment: uA,
  lights_phong_fragment: fA,
  lights_phong_pars_fragment: pA,
  lights_physical_fragment: gA,
  lights_physical_pars_fragment: mA,
  lights_fragment_begin: bA,
  lights_fragment_maps: _A,
  lights_fragment_end: xA,
  logdepthbuf_fragment: EA,
  logdepthbuf_pars_fragment: IA,
  logdepthbuf_pars_vertex: CA,
  logdepthbuf_vertex: yA,
  map_fragment: vA,
  map_pars_fragment: MA,
  map_particle_fragment: wA,
  map_particle_pars_fragment: SA,
  metalnessmap_fragment: BA,
  metalnessmap_pars_fragment: TA,
  morphcolor_vertex: DA,
  morphnormal_vertex: RA,
  morphtarget_pars_vertex: LA,
  morphtarget_vertex: QA,
  normal_fragment_begin: FA,
  normal_fragment_maps: PA,
  normal_pars_fragment: kA,
  normal_pars_vertex: NA,
  normal_vertex: UA,
  normalmap_pars_fragment: GA,
  clearcoat_normal_fragment_begin: OA,
  clearcoat_normal_fragment_maps: HA,
  clearcoat_pars_fragment: zA,
  iridescence_pars_fragment: VA,
  output_fragment: WA,
  packing: qA,
  premultiplied_alpha_fragment: jA,
  project_vertex: YA,
  dithering_fragment: KA,
  dithering_pars_fragment: JA,
  roughnessmap_fragment: XA,
  roughnessmap_pars_fragment: ZA,
  shadowmap_pars_fragment: $A,
  shadowmap_pars_vertex: ed,
  shadowmap_vertex: td,
  shadowmask_pars_fragment: nd,
  skinbase_vertex: id,
  skinning_pars_vertex: sd,
  skinning_vertex: rd,
  skinnormal_vertex: ad,
  specularmap_fragment: od,
  specularmap_pars_fragment: cd,
  tonemapping_fragment: ld,
  tonemapping_pars_fragment: hd,
  transmission_fragment: Ad,
  transmission_pars_fragment: dd,
  uv_pars_fragment: ud,
  uv_pars_vertex: fd,
  uv_vertex: pd,
  uv2_pars_fragment: gd,
  uv2_pars_vertex: md,
  uv2_vertex: bd,
  worldpos_vertex: _d,
  background_vert: xd,
  background_frag: Ed,
  backgroundCube_vert: Id,
  backgroundCube_frag: Cd,
  cube_vert: yd,
  cube_frag: vd,
  depth_vert: Md,
  depth_frag: wd,
  distanceRGBA_vert: Sd,
  distanceRGBA_frag: Bd,
  equirect_vert: Td,
  equirect_frag: Dd,
  linedashed_vert: Rd,
  linedashed_frag: Ld,
  meshbasic_vert: Qd,
  meshbasic_frag: Fd,
  meshlambert_vert: Pd,
  meshlambert_frag: kd,
  meshmatcap_vert: Nd,
  meshmatcap_frag: Ud,
  meshnormal_vert: Gd,
  meshnormal_frag: Od,
  meshphong_vert: Hd,
  meshphong_frag: zd,
  meshphysical_vert: Vd,
  meshphysical_frag: Wd,
  meshtoon_vert: qd,
  meshtoon_frag: jd,
  points_vert: Yd,
  points_frag: Kd,
  shadow_vert: Jd,
  shadow_frag: Xd,
  sprite_vert: Zd,
  sprite_frag: $d
}, ie = {
  common: {
    diffuse: { value: /* @__PURE__ */ new ye(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new St() },
    uv2Transform: { value: /* @__PURE__ */ new St() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: /* @__PURE__ */ new xe(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new ye(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new ye(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new St() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new ye(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new xe(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new St() }
  }
}, Ht = {
  basic: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.specularmap,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.fog
    ]),
    vertexShader: Ce.meshbasic_vert,
    fragmentShader: Ce.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.specularmap,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new ye(0) }
      }
    ]),
    vertexShader: Ce.meshlambert_vert,
    fragmentShader: Ce.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.specularmap,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new ye(0) },
        specular: { value: /* @__PURE__ */ new ye(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ce.meshphong_vert,
    fragmentShader: Ce.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.roughnessmap,
      ie.metalnessmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new ye(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ce.meshphysical_vert,
    fragmentShader: Ce.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.gradientmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new ye(0) }
      }
    ]),
    vertexShader: Ce.meshtoon_vert,
    fragmentShader: Ce.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ce.meshmatcap_vert,
    fragmentShader: Ce.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ _t([
      ie.points,
      ie.fog
    ]),
    vertexShader: Ce.points_vert,
    fragmentShader: Ce.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ce.linedashed_vert,
    fragmentShader: Ce.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.displacementmap
    ]),
    vertexShader: Ce.depth_vert,
    fragmentShader: Ce.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ce.meshnormal_vert,
    fragmentShader: Ce.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ _t([
      ie.sprite,
      ie.fog
    ]),
    vertexShader: Ce.sprite_vert,
    fragmentShader: Ce.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new St() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ce.background_vert,
    fragmentShader: Ce.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ce.backgroundCube_vert,
    fragmentShader: Ce.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ce.cube_vert,
    fragmentShader: Ce.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ce.equirect_vert,
    fragmentShader: Ce.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ _t([
      ie.common,
      ie.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new B() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ce.distanceRGBA_vert,
    fragmentShader: Ce.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ _t([
      ie.lights,
      ie.fog,
      {
        color: { value: /* @__PURE__ */ new ye(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ce.shadow_vert,
    fragmentShader: Ce.shadow_frag
  }
};
Ht.physical = {
  uniforms: /* @__PURE__ */ _t([
    Ht.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: /* @__PURE__ */ new xe(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new ye(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new xe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new ye(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new ye(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: Ce.meshphysical_vert,
  fragmentShader: Ce.meshphysical_frag
};
const ps = { r: 0, b: 0, g: 0 };
function eu(o, e, t, n, i, s, r) {
  const a = new ye(0);
  let c = s === !0 ? 0 : 1, l, h, A = null, d = 0, p = null;
  function g(u, m) {
    let E = !1, b = m.isScene === !0 ? m.background : null;
    b && b.isTexture && (b = (m.backgroundBlurriness > 0 ? t : e).get(b));
    const x = o.xr, C = x.getSession && x.getSession();
    C && C.environmentBlendMode === "additive" && (b = null), b === null ? f(a, c) : b && b.isColor && (f(b, 1), E = !0), (o.autoClear || E) && o.clear(o.autoClearColor, o.autoClearDepth, o.autoClearStencil), b && (b.isCubeTexture || b.mapping === Ts) ? (h === void 0 && (h = new Ve(
      new bi(1, 1, 1),
      new Nn({
        name: "BackgroundCubeMaterial",
        uniforms: pi(Ht.backgroundCube.uniforms),
        vertexShader: Ht.backgroundCube.vertexShader,
        fragmentShader: Ht.backgroundCube.fragmentShader,
        side: Bt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(S, D, _) {
      this.matrixWorld.copyPosition(_.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = b, h.material.uniforms.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = m.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = m.backgroundIntensity, h.material.toneMapped = b.encoding !== Se, (A !== b || d !== b.version || p !== o.toneMapping) && (h.material.needsUpdate = !0, A = b, d = b.version, p = o.toneMapping), h.layers.enableAll(), u.unshift(h, h.geometry, h.material, 0, 0, null)) : b && b.isTexture && (l === void 0 && (l = new Ve(
      new Jr(2, 2),
      new Nn({
        name: "BackgroundMaterial",
        uniforms: pi(Ht.background.uniforms),
        vertexShader: Ht.background.vertexShader,
        fragmentShader: Ht.background.fragmentShader,
        side: mn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = b, l.material.uniforms.backgroundIntensity.value = m.backgroundIntensity, l.material.toneMapped = b.encoding !== Se, b.matrixAutoUpdate === !0 && b.updateMatrix(), l.material.uniforms.uvTransform.value.copy(b.matrix), (A !== b || d !== b.version || p !== o.toneMapping) && (l.material.needsUpdate = !0, A = b, d = b.version, p = o.toneMapping), l.layers.enableAll(), u.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function f(u, m) {
    u.getRGB(ps, pc(o)), n.buffers.color.setClear(ps.r, ps.g, ps.b, m, r);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(u, m = 1) {
      a.set(u), c = m, f(a, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(u) {
      c = u, f(a, c);
    },
    render: g
  };
}
function tu(o, e, t, n) {
  const i = o.getParameter(34921), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), r = n.isWebGL2 || s !== null, a = {}, c = u(null);
  let l = c, h = !1;
  function A(L, N, J, K, U) {
    let ee = !1;
    if (r) {
      const X = f(K, J, N);
      l !== X && (l = X, p(l.object)), ee = m(L, K, J, U), ee && E(L, K, J, U);
    } else {
      const X = N.wireframe === !0;
      (l.geometry !== K.id || l.program !== J.id || l.wireframe !== X) && (l.geometry = K.id, l.program = J.id, l.wireframe = X, ee = !0);
    }
    U !== null && t.update(U, 34963), (ee || h) && (h = !1, _(L, N, J, K), U !== null && o.bindBuffer(34963, t.get(U).buffer));
  }
  function d() {
    return n.isWebGL2 ? o.createVertexArray() : s.createVertexArrayOES();
  }
  function p(L) {
    return n.isWebGL2 ? o.bindVertexArray(L) : s.bindVertexArrayOES(L);
  }
  function g(L) {
    return n.isWebGL2 ? o.deleteVertexArray(L) : s.deleteVertexArrayOES(L);
  }
  function f(L, N, J) {
    const K = J.wireframe === !0;
    let U = a[L.id];
    U === void 0 && (U = {}, a[L.id] = U);
    let ee = U[N.id];
    ee === void 0 && (ee = {}, U[N.id] = ee);
    let X = ee[K];
    return X === void 0 && (X = u(d()), ee[K] = X), X;
  }
  function u(L) {
    const N = [], J = [], K = [];
    for (let U = 0; U < i; U++)
      N[U] = 0, J[U] = 0, K[U] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: N,
      enabledAttributes: J,
      attributeDivisors: K,
      object: L,
      attributes: {},
      index: null
    };
  }
  function m(L, N, J, K) {
    const U = l.attributes, ee = N.attributes;
    let X = 0;
    const W = J.getAttributes();
    for (const O in W)
      if (W[O].location >= 0) {
        const te = U[O];
        let re = ee[O];
        if (re === void 0 && (O === "instanceMatrix" && L.instanceMatrix && (re = L.instanceMatrix), O === "instanceColor" && L.instanceColor && (re = L.instanceColor)), te === void 0 || te.attribute !== re || re && te.data !== re.data)
          return !0;
        X++;
      }
    return l.attributesNum !== X || l.index !== K;
  }
  function E(L, N, J, K) {
    const U = {}, ee = N.attributes;
    let X = 0;
    const W = J.getAttributes();
    for (const O in W)
      if (W[O].location >= 0) {
        let te = ee[O];
        te === void 0 && (O === "instanceMatrix" && L.instanceMatrix && (te = L.instanceMatrix), O === "instanceColor" && L.instanceColor && (te = L.instanceColor));
        const re = {};
        re.attribute = te, te && te.data && (re.data = te.data), U[O] = re, X++;
      }
    l.attributes = U, l.attributesNum = X, l.index = K;
  }
  function b() {
    const L = l.newAttributes;
    for (let N = 0, J = L.length; N < J; N++)
      L[N] = 0;
  }
  function x(L) {
    C(L, 0);
  }
  function C(L, N) {
    const J = l.newAttributes, K = l.enabledAttributes, U = l.attributeDivisors;
    J[L] = 1, K[L] === 0 && (o.enableVertexAttribArray(L), K[L] = 1), U[L] !== N && ((n.isWebGL2 ? o : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](L, N), U[L] = N);
  }
  function S() {
    const L = l.newAttributes, N = l.enabledAttributes;
    for (let J = 0, K = N.length; J < K; J++)
      N[J] !== L[J] && (o.disableVertexAttribArray(J), N[J] = 0);
  }
  function D(L, N, J, K, U, ee) {
    n.isWebGL2 === !0 && (J === 5124 || J === 5125) ? o.vertexAttribIPointer(L, N, J, U, ee) : o.vertexAttribPointer(L, N, J, K, U, ee);
  }
  function _(L, N, J, K) {
    if (n.isWebGL2 === !1 && (L.isInstancedMesh || K.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    b();
    const U = K.attributes, ee = J.getAttributes(), X = N.defaultAttributeValues;
    for (const W in ee) {
      const O = ee[W];
      if (O.location >= 0) {
        let se = U[W];
        if (se === void 0 && (W === "instanceMatrix" && L.instanceMatrix && (se = L.instanceMatrix), W === "instanceColor" && L.instanceColor && (se = L.instanceColor)), se !== void 0) {
          const te = se.normalized, re = se.itemSize, q = t.get(se);
          if (q === void 0)
            continue;
          const Be = q.buffer, de = q.type, me = q.bytesPerElement;
          if (se.isInterleavedBufferAttribute) {
            const Ae = se.data, ke = Ae.stride, Ie = se.offset;
            if (Ae.isInstancedInterleavedBuffer) {
              for (let be = 0; be < O.locationSize; be++)
                C(O.location + be, Ae.meshPerAttribute);
              L.isInstancedMesh !== !0 && K._maxInstanceCount === void 0 && (K._maxInstanceCount = Ae.meshPerAttribute * Ae.count);
            } else
              for (let be = 0; be < O.locationSize; be++)
                x(O.location + be);
            o.bindBuffer(34962, Be);
            for (let be = 0; be < O.locationSize; be++)
              D(
                O.location + be,
                re / O.locationSize,
                de,
                te,
                ke * me,
                (Ie + re / O.locationSize * be) * me
              );
          } else {
            if (se.isInstancedBufferAttribute) {
              for (let Ae = 0; Ae < O.locationSize; Ae++)
                C(O.location + Ae, se.meshPerAttribute);
              L.isInstancedMesh !== !0 && K._maxInstanceCount === void 0 && (K._maxInstanceCount = se.meshPerAttribute * se.count);
            } else
              for (let Ae = 0; Ae < O.locationSize; Ae++)
                x(O.location + Ae);
            o.bindBuffer(34962, Be);
            for (let Ae = 0; Ae < O.locationSize; Ae++)
              D(
                O.location + Ae,
                re / O.locationSize,
                de,
                te,
                re * me,
                re / O.locationSize * Ae * me
              );
          }
        } else if (X !== void 0) {
          const te = X[W];
          if (te !== void 0)
            switch (te.length) {
              case 2:
                o.vertexAttrib2fv(O.location, te);
                break;
              case 3:
                o.vertexAttrib3fv(O.location, te);
                break;
              case 4:
                o.vertexAttrib4fv(O.location, te);
                break;
              default:
                o.vertexAttrib1fv(O.location, te);
            }
        }
      }
    }
    S();
  }
  function w() {
    Y();
    for (const L in a) {
      const N = a[L];
      for (const J in N) {
        const K = N[J];
        for (const U in K)
          g(K[U].object), delete K[U];
        delete N[J];
      }
      delete a[L];
    }
  }
  function R(L) {
    if (a[L.id] === void 0)
      return;
    const N = a[L.id];
    for (const J in N) {
      const K = N[J];
      for (const U in K)
        g(K[U].object), delete K[U];
      delete N[J];
    }
    delete a[L.id];
  }
  function G(L) {
    for (const N in a) {
      const J = a[N];
      if (J[L.id] === void 0)
        continue;
      const K = J[L.id];
      for (const U in K)
        g(K[U].object), delete K[U];
      delete J[L.id];
    }
  }
  function Y() {
    P(), h = !0, l !== c && (l = c, p(l.object));
  }
  function P() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: A,
    reset: Y,
    resetDefaultState: P,
    dispose: w,
    releaseStatesOfGeometry: R,
    releaseStatesOfProgram: G,
    initAttributes: b,
    enableAttribute: x,
    disableUnusedAttributes: S
  };
}
function nu(o, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function r(l) {
    s = l;
  }
  function a(l, h) {
    o.drawArrays(s, l, h), t.update(h, s, 1);
  }
  function c(l, h, A) {
    if (A === 0)
      return;
    let d, p;
    if (i)
      d = o, p = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), p = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[p](s, l, h, A), t.update(h, s, A);
  }
  this.setMode = r, this.render = a, this.renderInstances = c;
}
function iu(o, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const D = e.get("EXT_texture_filter_anisotropic");
      n = o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(D) {
    if (D === "highp") {
      if (o.getShaderPrecisionFormat(35633, 36338).precision > 0 && o.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      D = "mediump";
    }
    return D === "mediump" && o.getShaderPrecisionFormat(35633, 36337).precision > 0 && o.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const r = typeof WebGL2RenderingContext < "u" && o instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && o instanceof WebGL2ComputeRenderingContext;
  let a = t.precision !== void 0 ? t.precision : "highp";
  const c = s(a);
  c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."), a = c);
  const l = r || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, A = o.getParameter(34930), d = o.getParameter(35660), p = o.getParameter(3379), g = o.getParameter(34076), f = o.getParameter(34921), u = o.getParameter(36347), m = o.getParameter(36348), E = o.getParameter(36349), b = d > 0, x = r || e.has("OES_texture_float"), C = b && x, S = r ? o.getParameter(36183) : 0;
  return {
    isWebGL2: r,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: h,
    maxTextures: A,
    maxVertexTextures: d,
    maxTextureSize: p,
    maxCubemapSize: g,
    maxAttributes: f,
    maxVertexUniforms: u,
    maxVaryings: m,
    maxFragmentUniforms: E,
    vertexTextures: b,
    floatFragmentTextures: x,
    floatVertexTextures: C,
    maxSamples: S
  };
}
function su(o) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const r = new Sn(), a = new St(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(A, d, p) {
    const g = A.length !== 0 || d || n !== 0 || i;
    return i = d, t = h(A, p, 0), n = A.length, g;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1, l();
  }, this.setState = function(A, d, p) {
    const g = A.clippingPlanes, f = A.clipIntersection, u = A.clipShadows, m = o.get(A);
    if (!i || g === null || g.length === 0 || s && !u)
      s ? h(null) : l();
    else {
      const E = s ? 0 : n, b = E * 4;
      let x = m.clippingState || null;
      c.value = x, x = h(g, d, b, p);
      for (let C = 0; C !== b; ++C)
        x[C] = t[C];
      m.clippingState = x, this.numIntersection = f ? this.numPlanes : 0, this.numPlanes += E;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(A, d, p, g) {
    const f = A !== null ? A.length : 0;
    let u = null;
    if (f !== 0) {
      if (u = c.value, g !== !0 || u === null) {
        const m = p + f * 4, E = d.matrixWorldInverse;
        a.getNormalMatrix(E), (u === null || u.length < m) && (u = new Float32Array(m));
        for (let b = 0, x = p; b !== f; ++b, x += 4)
          r.copy(A[b]).applyMatrix4(E, a), r.normal.toArray(u, x), u[x + 3] = r.constant;
      }
      c.value = u, c.needsUpdate = !0;
    }
    return e.numPlanes = f, e.numIntersection = 0, u;
  }
}
function ru(o) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, a) {
    return a === Mr ? r.mapping = hi : a === wr && (r.mapping = Ai), r;
  }
  function n(r) {
    if (r && r.isTexture && r.isRenderTargetTexture === !1) {
      const a = r.mapping;
      if (a === Mr || a === wr)
        if (e.has(r)) {
          const c = e.get(r).texture;
          return t(c, r.mapping);
        } else {
          const c = r.image;
          if (c && c.height > 0) {
            const l = new bh(c.height / 2);
            return l.fromEquirectangularTexture(o, r), e.set(r, l), r.addEventListener("dispose", i), t(l.texture, r.mapping);
          } else
            return null;
        }
    }
    return r;
  }
  function i(r) {
    const a = r.target;
    a.removeEventListener("dispose", i);
    const c = e.get(a);
    c !== void 0 && (e.delete(a), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class Xr extends gc {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, r = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = r, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, r) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = r, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, r = n + e, a = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, r = s + l * this.view.width, a -= h * this.view.offsetY, c = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, r, a, c, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const ai = 4, ja = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Tn = 20, cr = /* @__PURE__ */ new Xr(), Ya = /* @__PURE__ */ new ye();
let lr = null;
const Bn = (1 + Math.sqrt(5)) / 2, ii = 1 / Bn, Ka = [
  /* @__PURE__ */ new B(1, 1, 1),
  /* @__PURE__ */ new B(-1, 1, 1),
  /* @__PURE__ */ new B(1, 1, -1),
  /* @__PURE__ */ new B(-1, 1, -1),
  /* @__PURE__ */ new B(0, Bn, ii),
  /* @__PURE__ */ new B(0, Bn, -ii),
  /* @__PURE__ */ new B(ii, 0, Bn),
  /* @__PURE__ */ new B(-ii, 0, Bn),
  /* @__PURE__ */ new B(Bn, ii, 0),
  /* @__PURE__ */ new B(-Bn, ii, 0)
];
class Nr {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    lr = this._renderer.getRenderTarget(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Za(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Xa(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(lr), e.scissorTest = !1, gs(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === hi || e.mapping === Ai ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), lr = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: dt,
      minFilter: dt,
      generateMipmaps: !1,
      type: an,
      format: ct,
      encoding: on,
      depthBuffer: !1
    }, i = Ja(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Ja(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = au(s)), this._blurMaterial = ou(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Ve(this._lodPlanes[0], e);
    this._renderer.compile(t, cr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Et(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, A = h.autoClear, d = h.toneMapping;
    h.getClearColor(Ya), h.toneMapping = rn, h.autoClear = !1;
    const p = new pn({
      name: "PMREM.Background",
      side: Bt,
      depthWrite: !1,
      depthTest: !1
    }), g = new Ve(new bi(), p);
    let f = !1;
    const u = e.background;
    u ? u.isColor && (p.color.copy(u), e.background = null, f = !0) : (p.color.copy(Ya), f = !0);
    for (let m = 0; m < 6; m++) {
      const E = m % 3;
      E === 0 ? (a.up.set(0, c[m], 0), a.lookAt(l[m], 0, 0)) : E === 1 ? (a.up.set(0, 0, c[m]), a.lookAt(0, l[m], 0)) : (a.up.set(0, c[m], 0), a.lookAt(0, 0, l[m]));
      const b = this._cubeSize;
      gs(i, E * b, m > 2 ? b : 0, b, b), h.setRenderTarget(i), f && h.render(g, a), h.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = A, e.background = u;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === hi || e.mapping === Ai;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Za()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Xa());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, r = new Ve(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    gs(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(r, cr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), r = Ka[(i - 1) % Ka.length];
      this._blur(e, i - 1, i, s, r);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const r = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      r,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      r,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, r, a) {
    const c = this._renderer, l = this._blurMaterial;
    r !== "latitudinal" && r !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, A = new Ve(this._lodPlanes[i], l), d = l.uniforms, p = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * Tn - 1), f = s / g, u = isFinite(s) ? 1 + Math.floor(h * f) : Tn;
    u > Tn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Tn}`);
    const m = [];
    let E = 0;
    for (let D = 0; D < Tn; ++D) {
      const _ = D / f, w = Math.exp(-_ * _ / 2);
      m.push(w), D === 0 ? E += w : D < u && (E += 2 * w);
    }
    for (let D = 0; D < m.length; D++)
      m[D] = m[D] / E;
    d.envMap.value = e.texture, d.samples.value = u, d.weights.value = m, d.latitudinal.value = r === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: b } = this;
    d.dTheta.value = g, d.mipInt.value = b - n;
    const x = this._sizeLods[i], C = 3 * x * (i > b - ai ? i - b + ai : 0), S = 4 * (this._cubeSize - x);
    gs(t, C, S, 3 * x, 2 * x), c.setRenderTarget(t), c.render(A, cr);
  }
}
function au(o) {
  const e = [], t = [], n = [];
  let i = o;
  const s = o - ai + 1 + ja.length;
  for (let r = 0; r < s; r++) {
    const a = Math.pow(2, i);
    t.push(a);
    let c = 1 / a;
    r > o - ai ? c = ja[r - o + ai - 1] : r === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2), h = -l, A = 1 + l, d = [h, h, A, h, A, A, h, h, A, A, h, A], p = 6, g = 6, f = 3, u = 2, m = 1, E = new Float32Array(f * g * p), b = new Float32Array(u * g * p), x = new Float32Array(m * g * p);
    for (let S = 0; S < p; S++) {
      const D = S % 3 * 2 / 3 - 1, _ = S > 2 ? 0 : -1, w = [
        D,
        _,
        0,
        D + 2 / 3,
        _,
        0,
        D + 2 / 3,
        _ + 1,
        0,
        D,
        _,
        0,
        D + 2 / 3,
        _ + 1,
        0,
        D,
        _ + 1,
        0
      ];
      E.set(w, f * g * S), b.set(d, u * g * S);
      const R = [S, S, S, S, S, S];
      x.set(R, m * g * S);
    }
    const C = new Tt();
    C.setAttribute("position", new lt(E, f)), C.setAttribute("uv", new lt(b, u)), C.setAttribute("faceIndex", new lt(x, m)), e.push(C), i > ai && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Ja(o, e, t) {
  const n = new kn(o, e, t);
  return n.texture.mapping = Ts, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function gs(o, e, t, n, i) {
  o.viewport.set(e, t, n, i), o.scissor.set(e, t, n, i);
}
function ou(o, e, t) {
  const n = new Float32Array(Tn), i = new B(0, 1, 0);
  return new Nn({
    name: "SphericalGaussianBlur",
    defines: {
      n: Tn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${o}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: Zr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: gn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Xa() {
  return new Nn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Zr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: gn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Za() {
  return new Nn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Zr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: gn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Zr() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function cu(o) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping, l = c === Mr || c === wr, h = c === hi || c === Ai;
      if (l || h)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let A = e.get(a);
          return t === null && (t = new Nr(o)), A = l ? t.fromEquirectangular(a, A) : t.fromCubemap(a, A), e.set(a, A), A.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const A = a.image;
            if (l && A && A.height > 0 || h && A && i(A)) {
              t === null && (t = new Nr(o));
              const d = l ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, d), a.addEventListener("dispose", s), d.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function i(a) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      a[h] !== void 0 && c++;
    return c === l;
  }
  function s(a) {
    const c = a.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: r
  };
}
function lu(o) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = o.getExtension("WEBGL_depth_texture") || o.getExtension("MOZ_WEBGL_depth_texture") || o.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = o.getExtension("EXT_texture_filter_anisotropic") || o.getExtension("MOZ_EXT_texture_filter_anisotropic") || o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = o.getExtension("WEBGL_compressed_texture_s3tc") || o.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = o.getExtension("WEBGL_compressed_texture_pvrtc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = o.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function hu(o, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function r(A) {
    const d = A.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    d.removeEventListener("dispose", r), delete i[d.id];
    const p = s.get(d);
    p && (e.remove(p), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function a(A, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", r), i[d.id] = !0, t.memory.geometries++), d;
  }
  function c(A) {
    const d = A.attributes;
    for (const g in d)
      e.update(d[g], 34962);
    const p = A.morphAttributes;
    for (const g in p) {
      const f = p[g];
      for (let u = 0, m = f.length; u < m; u++)
        e.update(f[u], 34962);
    }
  }
  function l(A) {
    const d = [], p = A.index, g = A.attributes.position;
    let f = 0;
    if (p !== null) {
      const E = p.array;
      f = p.version;
      for (let b = 0, x = E.length; b < x; b += 3) {
        const C = E[b + 0], S = E[b + 1], D = E[b + 2];
        d.push(C, S, S, D, D, C);
      }
    } else {
      const E = g.array;
      f = g.version;
      for (let b = 0, x = E.length / 3 - 1; b < x; b += 3) {
        const C = b + 0, S = b + 1, D = b + 2;
        d.push(C, S, S, D, D, C);
      }
    }
    const u = new (oc(d) ? fc : uc)(d, 1);
    u.version = f;
    const m = s.get(A);
    m && e.remove(m), s.set(A, u);
  }
  function h(A) {
    const d = s.get(A);
    if (d) {
      const p = A.index;
      p !== null && d.version < p.version && l(A);
    } else
      l(A);
    return s.get(A);
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: h
  };
}
function Au(o, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function r(d) {
    s = d;
  }
  let a, c;
  function l(d) {
    a = d.type, c = d.bytesPerElement;
  }
  function h(d, p) {
    o.drawElements(s, p, a, d * c), t.update(p, s, 1);
  }
  function A(d, p, g) {
    if (g === 0)
      return;
    let f, u;
    if (i)
      f = o, u = "drawElementsInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", f === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[u](s, p, a, d * c, g), t.update(p, s, g);
  }
  this.setMode = r, this.setIndex = l, this.render = h, this.renderInstances = A;
}
function du(o) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, r, a) {
    switch (t.calls++, r) {
      case 4:
        t.triangles += a * (s / 3);
        break;
      case 1:
        t.lines += a * (s / 2);
        break;
      case 3:
        t.lines += a * (s - 1);
        break;
      case 2:
        t.lines += a * s;
        break;
      case 0:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", r);
        break;
    }
  }
  function i() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function uu(o, e) {
  return o[0] - e[0];
}
function fu(o, e) {
  return Math.abs(e[1]) - Math.abs(o[1]);
}
function pu(o, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), r = new ze(), a = [];
  for (let l = 0; l < 8; l++)
    a[l] = [l, 0];
  function c(l, h, A, d) {
    const p = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, f = g !== void 0 ? g.length : 0;
      let u = s.get(h);
      if (u === void 0 || u.count !== f) {
        let N = function() {
          P.dispose(), s.delete(h), h.removeEventListener("dispose", N);
        };
        u !== void 0 && u.texture.dispose();
        const b = h.morphAttributes.position !== void 0, x = h.morphAttributes.normal !== void 0, C = h.morphAttributes.color !== void 0, S = h.morphAttributes.position || [], D = h.morphAttributes.normal || [], _ = h.morphAttributes.color || [];
        let w = 0;
        b === !0 && (w = 1), x === !0 && (w = 2), C === !0 && (w = 3);
        let R = h.attributes.position.count * w, G = 1;
        R > e.maxTextureSize && (G = Math.ceil(R / e.maxTextureSize), R = e.maxTextureSize);
        const Y = new Float32Array(R * G * 4 * f), P = new Ac(Y, R, G, f);
        P.type = Ft, P.needsUpdate = !0;
        const L = w * 4;
        for (let J = 0; J < f; J++) {
          const K = S[J], U = D[J], ee = _[J], X = R * G * 4 * J;
          for (let W = 0; W < K.count; W++) {
            const O = W * L;
            b === !0 && (r.fromBufferAttribute(K, W), Y[X + O + 0] = r.x, Y[X + O + 1] = r.y, Y[X + O + 2] = r.z, Y[X + O + 3] = 0), x === !0 && (r.fromBufferAttribute(U, W), Y[X + O + 4] = r.x, Y[X + O + 5] = r.y, Y[X + O + 6] = r.z, Y[X + O + 7] = 0), C === !0 && (r.fromBufferAttribute(ee, W), Y[X + O + 8] = r.x, Y[X + O + 9] = r.y, Y[X + O + 10] = r.z, Y[X + O + 11] = ee.itemSize === 4 ? r.w : 1);
          }
        }
        u = {
          count: f,
          texture: P,
          size: new xe(R, G)
        }, s.set(h, u), h.addEventListener("dispose", N);
      }
      let m = 0;
      for (let b = 0; b < p.length; b++)
        m += p[b];
      const E = h.morphTargetsRelative ? 1 : 1 - m;
      d.getUniforms().setValue(o, "morphTargetBaseInfluence", E), d.getUniforms().setValue(o, "morphTargetInfluences", p), d.getUniforms().setValue(o, "morphTargetsTexture", u.texture, t), d.getUniforms().setValue(o, "morphTargetsTextureSize", u.size);
    } else {
      const g = p === void 0 ? 0 : p.length;
      let f = n[h.id];
      if (f === void 0 || f.length !== g) {
        f = [];
        for (let x = 0; x < g; x++)
          f[x] = [x, 0];
        n[h.id] = f;
      }
      for (let x = 0; x < g; x++) {
        const C = f[x];
        C[0] = x, C[1] = p[x];
      }
      f.sort(fu);
      for (let x = 0; x < 8; x++)
        x < g && f[x][1] ? (a[x][0] = f[x][0], a[x][1] = f[x][1]) : (a[x][0] = Number.MAX_SAFE_INTEGER, a[x][1] = 0);
      a.sort(uu);
      const u = h.morphAttributes.position, m = h.morphAttributes.normal;
      let E = 0;
      for (let x = 0; x < 8; x++) {
        const C = a[x], S = C[0], D = C[1];
        S !== Number.MAX_SAFE_INTEGER && D ? (u && h.getAttribute("morphTarget" + x) !== u[S] && h.setAttribute("morphTarget" + x, u[S]), m && h.getAttribute("morphNormal" + x) !== m[S] && h.setAttribute("morphNormal" + x, m[S]), i[x] = D, E += D) : (u && h.hasAttribute("morphTarget" + x) === !0 && h.deleteAttribute("morphTarget" + x), m && h.hasAttribute("morphNormal" + x) === !0 && h.deleteAttribute("morphNormal" + x), i[x] = 0);
      }
      const b = h.morphTargetsRelative ? 1 : 1 - E;
      d.getUniforms().setValue(o, "morphTargetBaseInfluence", b), d.getUniforms().setValue(o, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function gu(o, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, h = c.geometry, A = e.get(c, h);
    return i.get(A) !== l && (e.update(A), i.set(A, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), t.update(c.instanceMatrix, 34962), c.instanceColor !== null && t.update(c.instanceColor, 34962)), A;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function a(c) {
    const l = c.target;
    l.removeEventListener("dispose", a), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: r
  };
}
const bc = /* @__PURE__ */ new ot(), _c = /* @__PURE__ */ new Ac(), xc = /* @__PURE__ */ new dc(), Ec = /* @__PURE__ */ new Yr(), $a = [], eo = [], to = new Float32Array(16), no = new Float32Array(9), io = new Float32Array(4);
function _i(o, e, t) {
  const n = o[0];
  if (n <= 0 || n > 0)
    return o;
  const i = e * t;
  let s = $a[i];
  if (s === void 0 && (s = new Float32Array(i), $a[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let r = 1, a = 0; r !== e; ++r)
      a += t, o[r].toArray(s, a);
  }
  return s;
}
function et(o, e) {
  if (o.length !== e.length)
    return !1;
  for (let t = 0, n = o.length; t < n; t++)
    if (o[t] !== e[t])
      return !1;
  return !0;
}
function tt(o, e) {
  for (let t = 0, n = e.length; t < n; t++)
    o[t] = e[t];
}
function Rs(o, e) {
  let t = eo[e];
  t === void 0 && (t = new Int32Array(e), eo[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = o.allocateTextureUnit();
  return t;
}
function mu(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1f(this.addr, e), t[0] = e);
}
function bu(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (o.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (et(t, e))
      return;
    o.uniform2fv(this.addr, e), tt(t, e);
  }
}
function _u(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (o.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (o.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (et(t, e))
      return;
    o.uniform3fv(this.addr, e), tt(t, e);
  }
}
function xu(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (o.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (et(t, e))
      return;
    o.uniform4fv(this.addr, e), tt(t, e);
  }
}
function Eu(o, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (et(t, e))
      return;
    o.uniformMatrix2fv(this.addr, !1, e), tt(t, e);
  } else {
    if (et(t, n))
      return;
    io.set(n), o.uniformMatrix2fv(this.addr, !1, io), tt(t, n);
  }
}
function Iu(o, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (et(t, e))
      return;
    o.uniformMatrix3fv(this.addr, !1, e), tt(t, e);
  } else {
    if (et(t, n))
      return;
    no.set(n), o.uniformMatrix3fv(this.addr, !1, no), tt(t, n);
  }
}
function Cu(o, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (et(t, e))
      return;
    o.uniformMatrix4fv(this.addr, !1, e), tt(t, e);
  } else {
    if (et(t, n))
      return;
    to.set(n), o.uniformMatrix4fv(this.addr, !1, to), tt(t, n);
  }
}
function yu(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1i(this.addr, e), t[0] = e);
}
function vu(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (o.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (et(t, e))
      return;
    o.uniform2iv(this.addr, e), tt(t, e);
  }
}
function Mu(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (o.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (et(t, e))
      return;
    o.uniform3iv(this.addr, e), tt(t, e);
  }
}
function wu(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (o.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (et(t, e))
      return;
    o.uniform4iv(this.addr, e), tt(t, e);
  }
}
function Su(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1ui(this.addr, e), t[0] = e);
}
function Bu(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (o.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (et(t, e))
      return;
    o.uniform2uiv(this.addr, e), tt(t, e);
  }
}
function Tu(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (o.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (et(t, e))
      return;
    o.uniform3uiv(this.addr, e), tt(t, e);
  }
}
function Du(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (o.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (et(t, e))
      return;
    o.uniform4uiv(this.addr, e), tt(t, e);
  }
}
function Ru(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || bc, i);
}
function Lu(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || xc, i);
}
function Qu(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Ec, i);
}
function Fu(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || _c, i);
}
function Pu(o) {
  switch (o) {
    case 5126:
      return mu;
    case 35664:
      return bu;
    case 35665:
      return _u;
    case 35666:
      return xu;
    case 35674:
      return Eu;
    case 35675:
      return Iu;
    case 35676:
      return Cu;
    case 5124:
    case 35670:
      return yu;
    case 35667:
    case 35671:
      return vu;
    case 35668:
    case 35672:
      return Mu;
    case 35669:
    case 35673:
      return wu;
    case 5125:
      return Su;
    case 36294:
      return Bu;
    case 36295:
      return Tu;
    case 36296:
      return Du;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Ru;
    case 35679:
    case 36299:
    case 36307:
      return Lu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Qu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Fu;
  }
}
function ku(o, e) {
  o.uniform1fv(this.addr, e);
}
function Nu(o, e) {
  const t = _i(e, this.size, 2);
  o.uniform2fv(this.addr, t);
}
function Uu(o, e) {
  const t = _i(e, this.size, 3);
  o.uniform3fv(this.addr, t);
}
function Gu(o, e) {
  const t = _i(e, this.size, 4);
  o.uniform4fv(this.addr, t);
}
function Ou(o, e) {
  const t = _i(e, this.size, 4);
  o.uniformMatrix2fv(this.addr, !1, t);
}
function Hu(o, e) {
  const t = _i(e, this.size, 9);
  o.uniformMatrix3fv(this.addr, !1, t);
}
function zu(o, e) {
  const t = _i(e, this.size, 16);
  o.uniformMatrix4fv(this.addr, !1, t);
}
function Vu(o, e) {
  o.uniform1iv(this.addr, e);
}
function Wu(o, e) {
  o.uniform2iv(this.addr, e);
}
function qu(o, e) {
  o.uniform3iv(this.addr, e);
}
function ju(o, e) {
  o.uniform4iv(this.addr, e);
}
function Yu(o, e) {
  o.uniform1uiv(this.addr, e);
}
function Ku(o, e) {
  o.uniform2uiv(this.addr, e);
}
function Ju(o, e) {
  o.uniform3uiv(this.addr, e);
}
function Xu(o, e) {
  o.uniform4uiv(this.addr, e);
}
function Zu(o, e, t) {
  const n = this.cache, i = e.length, s = Rs(t, i);
  et(n, s) || (o.uniform1iv(this.addr, s), tt(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTexture2D(e[r] || bc, s[r]);
}
function $u(o, e, t) {
  const n = this.cache, i = e.length, s = Rs(t, i);
  et(n, s) || (o.uniform1iv(this.addr, s), tt(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTexture3D(e[r] || xc, s[r]);
}
function ef(o, e, t) {
  const n = this.cache, i = e.length, s = Rs(t, i);
  et(n, s) || (o.uniform1iv(this.addr, s), tt(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTextureCube(e[r] || Ec, s[r]);
}
function tf(o, e, t) {
  const n = this.cache, i = e.length, s = Rs(t, i);
  et(n, s) || (o.uniform1iv(this.addr, s), tt(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTexture2DArray(e[r] || _c, s[r]);
}
function nf(o) {
  switch (o) {
    case 5126:
      return ku;
    case 35664:
      return Nu;
    case 35665:
      return Uu;
    case 35666:
      return Gu;
    case 35674:
      return Ou;
    case 35675:
      return Hu;
    case 35676:
      return zu;
    case 5124:
    case 35670:
      return Vu;
    case 35667:
    case 35671:
      return Wu;
    case 35668:
    case 35672:
      return qu;
    case 35669:
    case 35673:
      return ju;
    case 5125:
      return Yu;
    case 36294:
      return Ku;
    case 36295:
      return Ju;
    case 36296:
      return Xu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Zu;
    case 35679:
    case 36299:
    case 36307:
      return $u;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ef;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return tf;
  }
}
class sf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = Pu(t.type);
  }
}
class rf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = nf(t.type);
  }
}
class af {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, r = i.length; s !== r; ++s) {
      const a = i[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const hr = /(\w+)(\])?(\[|\.)?/g;
function so(o, e) {
  o.seq.push(e), o.map[e.id] = e;
}
function of(o, e, t) {
  const n = o.name, i = n.length;
  for (hr.lastIndex = 0; ; ) {
    const s = hr.exec(n), r = hr.lastIndex;
    let a = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && r + 2 === i) {
      so(t, l === void 0 ? new sf(a, o, e) : new rf(a, o, e));
      break;
    } else {
      let A = t.map[a];
      A === void 0 && (A = new af(a), so(t, A)), t = A;
    }
  }
}
class ws {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), r = e.getUniformLocation(t, s.name);
      of(s, r, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, r = t.length; s !== r; ++s) {
      const a = t[s], c = n[a.id];
      c.needsUpdate !== !1 && a.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const r = e[i];
      r.id in t && n.push(r);
    }
    return n;
  }
}
function ro(o, e, t) {
  const n = o.createShader(e);
  return o.shaderSource(n, t), o.compileShader(n), n;
}
let cf = 0;
function lf(o, e) {
  const t = o.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let r = i; r < s; r++) {
    const a = r + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[r]}`);
  }
  return n.join(`
`);
}
function hf(o) {
  switch (o) {
    case on:
      return ["Linear", "( value )"];
    case Se:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", o), ["Linear", "( value )"];
  }
}
function ao(o, e, t) {
  const n = o.getShaderParameter(e, 35713), i = o.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const r = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + lf(o.getShaderSource(e), r);
  } else
    return i;
}
function Af(o, e) {
  const t = hf(e);
  return "vec4 " + o + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function df(o, e) {
  let t;
  switch (e) {
    case $o:
      t = "Linear";
      break;
    case xl:
      t = "Reinhard";
      break;
    case El:
      t = "OptimizedCineon";
      break;
    case Il:
      t = "ACESFilmic";
      break;
    case Cl:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + o + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function uf(o) {
  return [
    o.extensionDerivatives || o.envMapCubeUVHeight || o.bumpMap || o.tangentSpaceNormalMap || o.clearcoatNormalMap || o.flatShading || o.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (o.extensionFragDepth || o.logarithmicDepthBuffer) && o.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    o.extensionDrawBuffers && o.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (o.extensionShaderTextureLOD || o.envMap || o.transmission) && o.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Ni).join(`
`);
}
function ff(o) {
  const e = [];
  for (const t in o) {
    const n = o[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function pf(o, e) {
  const t = {}, n = o.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = o.getActiveAttrib(e, i), r = s.name;
    let a = 1;
    s.type === 35674 && (a = 2), s.type === 35675 && (a = 3), s.type === 35676 && (a = 4), t[r] = {
      type: s.type,
      location: o.getAttribLocation(e, r),
      locationSize: a
    };
  }
  return t;
}
function Ni(o) {
  return o !== "";
}
function oo(o, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return o.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function co(o, e) {
  return o.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const gf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ur(o) {
  return o.replace(gf, mf);
}
function mf(o, e) {
  const t = Ce[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return Ur(t);
}
const bf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function lo(o) {
  return o.replace(bf, _f);
}
function _f(o, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function ho(o) {
  let e = "precision " + o.precision + ` float;
precision ` + o.precision + " int;";
  return o.precision === "highp" ? e += `
#define HIGH_PRECISION` : o.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : o.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function xf(o) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return o.shadowMapType === Ko ? e = "SHADOWMAP_TYPE_PCF" : o.shadowMapType === Zc ? e = "SHADOWMAP_TYPE_PCF_SOFT" : o.shadowMapType === Fi && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Ef(o) {
  let e = "ENVMAP_TYPE_CUBE";
  if (o.envMap)
    switch (o.envMapMode) {
      case hi:
      case Ai:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ts:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function If(o) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (o.envMap)
    switch (o.envMapMode) {
      case Ai:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Cf(o) {
  let e = "ENVMAP_BLENDING_NONE";
  if (o.envMap)
    switch (o.combine) {
      case Zo:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case bl:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case _l:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function yf(o) {
  const e = o.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function vf(o, e, t, n) {
  const i = o.getContext(), s = t.defines;
  let r = t.vertexShader, a = t.fragmentShader;
  const c = xf(t), l = Ef(t), h = If(t), A = Cf(t), d = yf(t), p = t.isWebGL2 ? "" : uf(t), g = ff(s), f = i.createProgram();
  let u, m, E = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (u = [
    g
  ].filter(Ni).join(`
`), u.length > 0 && (u += `
`), m = [
    p,
    g
  ].filter(Ni).join(`
`), m.length > 0 && (m += `
`)) : (u = [
    ho(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Ni).join(`
`), m = [
    p,
    ho(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + A : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== rn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== rn ? Ce.tonemapping_pars_fragment : "",
    t.toneMapping !== rn ? df("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ce.encodings_pars_fragment,
    Af("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Ni).join(`
`)), r = Ur(r), r = oo(r, t), r = co(r, t), a = Ur(a), a = oo(a, t), a = co(a, t), r = lo(r), a = lo(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (E = `#version 300 es
`, u = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + u, m = [
    "#define varying in",
    t.glslVersion === Fa ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Fa ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + m);
  const b = E + u + r, x = E + m + a, C = ro(i, 35633, b), S = ro(i, 35632, x);
  if (i.attachShader(f, C), i.attachShader(f, S), t.index0AttributeName !== void 0 ? i.bindAttribLocation(f, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(f, 0, "position"), i.linkProgram(f), o.debug.checkShaderErrors) {
    const w = i.getProgramInfoLog(f).trim(), R = i.getShaderInfoLog(C).trim(), G = i.getShaderInfoLog(S).trim();
    let Y = !0, P = !0;
    if (i.getProgramParameter(f, 35714) === !1) {
      Y = !1;
      const L = ao(i, C, "vertex"), N = ao(i, S, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(f, 35715) + `

Program Info Log: ` + w + `
` + L + `
` + N
      );
    } else
      w !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", w) : (R === "" || G === "") && (P = !1);
    P && (this.diagnostics = {
      runnable: Y,
      programLog: w,
      vertexShader: {
        log: R,
        prefix: u
      },
      fragmentShader: {
        log: G,
        prefix: m
      }
    });
  }
  i.deleteShader(C), i.deleteShader(S);
  let D;
  this.getUniforms = function() {
    return D === void 0 && (D = new ws(i, f)), D;
  };
  let _;
  return this.getAttributes = function() {
    return _ === void 0 && (_ = pf(i, f)), _;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(f), this.program = void 0;
  }, this.name = t.shaderName, this.id = cf++, this.cacheKey = e, this.usedTimes = 1, this.program = f, this.vertexShader = C, this.fragmentShader = S, this;
}
let Mf = 0;
class wf {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), r = this._getShaderCacheForMaterial(e);
    return r.has(i) === !1 && (r.add(i), i.usedTimes++), r.has(s) === !1 && (r.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Sf(e), t.set(e, n)), n;
  }
}
class Sf {
  constructor(e) {
    this.id = Mf++, this.code = e, this.usedTimes = 0;
  }
}
function Bf(o, e, t, n, i, s, r) {
  const a = new jr(), c = new wf(), l = [], h = i.isWebGL2, A = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let p = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function f(_, w, R, G, Y) {
    const P = G.fog, L = Y.geometry, N = _.isMeshStandardMaterial ? G.environment : null, J = (_.isMeshStandardMaterial ? t : e).get(_.envMap || N), K = J && J.mapping === Ts ? J.image.height : null, U = g[_.type];
    _.precision !== null && (p = i.getMaxPrecision(_.precision), p !== _.precision && console.warn("THREE.WebGLProgram.getParameters:", _.precision, "not supported, using", p, "instead."));
    const ee = L.morphAttributes.position || L.morphAttributes.normal || L.morphAttributes.color, X = ee !== void 0 ? ee.length : 0;
    let W = 0;
    L.morphAttributes.position !== void 0 && (W = 1), L.morphAttributes.normal !== void 0 && (W = 2), L.morphAttributes.color !== void 0 && (W = 3);
    let O, se, te, re;
    if (U) {
      const ke = Ht[U];
      O = ke.vertexShader, se = ke.fragmentShader;
    } else
      O = _.vertexShader, se = _.fragmentShader, c.update(_), te = c.getVertexShaderID(_), re = c.getFragmentShaderID(_);
    const q = o.getRenderTarget(), Be = _.alphaTest > 0, de = _.clearcoat > 0, me = _.iridescence > 0;
    return {
      isWebGL2: h,
      shaderID: U,
      shaderName: _.type,
      vertexShader: O,
      fragmentShader: se,
      defines: _.defines,
      customVertexShaderID: te,
      customFragmentShaderID: re,
      isRawShaderMaterial: _.isRawShaderMaterial === !0,
      glslVersion: _.glslVersion,
      precision: p,
      instancing: Y.isInstancedMesh === !0,
      instancingColor: Y.isInstancedMesh === !0 && Y.instanceColor !== null,
      supportsVertexTextures: d,
      outputEncoding: q === null ? o.outputEncoding : q.isXRRenderTarget === !0 ? q.texture.encoding : on,
      map: !!_.map,
      matcap: !!_.matcap,
      envMap: !!J,
      envMapMode: J && J.mapping,
      envMapCubeUVHeight: K,
      lightMap: !!_.lightMap,
      aoMap: !!_.aoMap,
      emissiveMap: !!_.emissiveMap,
      bumpMap: !!_.bumpMap,
      normalMap: !!_.normalMap,
      objectSpaceNormalMap: _.normalMapType === Gl,
      tangentSpaceNormalMap: _.normalMapType === rc,
      decodeVideoTexture: !!_.map && _.map.isVideoTexture === !0 && _.map.encoding === Se,
      clearcoat: de,
      clearcoatMap: de && !!_.clearcoatMap,
      clearcoatRoughnessMap: de && !!_.clearcoatRoughnessMap,
      clearcoatNormalMap: de && !!_.clearcoatNormalMap,
      iridescence: me,
      iridescenceMap: me && !!_.iridescenceMap,
      iridescenceThicknessMap: me && !!_.iridescenceThicknessMap,
      displacementMap: !!_.displacementMap,
      roughnessMap: !!_.roughnessMap,
      metalnessMap: !!_.metalnessMap,
      specularMap: !!_.specularMap,
      specularIntensityMap: !!_.specularIntensityMap,
      specularColorMap: !!_.specularColorMap,
      opaque: _.transparent === !1 && _.blending === oi,
      alphaMap: !!_.alphaMap,
      alphaTest: Be,
      gradientMap: !!_.gradientMap,
      sheen: _.sheen > 0,
      sheenColorMap: !!_.sheenColorMap,
      sheenRoughnessMap: !!_.sheenRoughnessMap,
      transmission: _.transmission > 0,
      transmissionMap: !!_.transmissionMap,
      thicknessMap: !!_.thicknessMap,
      combine: _.combine,
      vertexTangents: !!_.normalMap && !!L.attributes.tangent,
      vertexColors: _.vertexColors,
      vertexAlphas: _.vertexColors === !0 && !!L.attributes.color && L.attributes.color.itemSize === 4,
      vertexUvs: !!_.map || !!_.bumpMap || !!_.normalMap || !!_.specularMap || !!_.alphaMap || !!_.emissiveMap || !!_.roughnessMap || !!_.metalnessMap || !!_.clearcoatMap || !!_.clearcoatRoughnessMap || !!_.clearcoatNormalMap || !!_.iridescenceMap || !!_.iridescenceThicknessMap || !!_.displacementMap || !!_.transmissionMap || !!_.thicknessMap || !!_.specularIntensityMap || !!_.specularColorMap || !!_.sheenColorMap || !!_.sheenRoughnessMap,
      uvsVertexOnly: !(_.map || _.bumpMap || _.normalMap || _.specularMap || _.alphaMap || _.emissiveMap || _.roughnessMap || _.metalnessMap || _.clearcoatNormalMap || _.iridescenceMap || _.iridescenceThicknessMap || _.transmission > 0 || _.transmissionMap || _.thicknessMap || _.specularIntensityMap || _.specularColorMap || _.sheen > 0 || _.sheenColorMap || _.sheenRoughnessMap) && !!_.displacementMap,
      fog: !!P,
      useFog: _.fog === !0,
      fogExp2: P && P.isFogExp2,
      flatShading: !!_.flatShading,
      sizeAttenuation: _.sizeAttenuation,
      logarithmicDepthBuffer: A,
      skinning: Y.isSkinnedMesh === !0,
      morphTargets: L.morphAttributes.position !== void 0,
      morphNormals: L.morphAttributes.normal !== void 0,
      morphColors: L.morphAttributes.color !== void 0,
      morphTargetsCount: X,
      morphTextureStride: W,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numSpotLightMaps: w.spotLightMap.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps,
      numClippingPlanes: r.numPlanes,
      numClipIntersection: r.numIntersection,
      dithering: _.dithering,
      shadowMapEnabled: o.shadowMap.enabled && R.length > 0,
      shadowMapType: o.shadowMap.type,
      toneMapping: _.toneMapped ? o.toneMapping : rn,
      physicallyCorrectLights: o.physicallyCorrectLights,
      premultipliedAlpha: _.premultipliedAlpha,
      doubleSided: _.side === Ki,
      flipSided: _.side === Bt,
      useDepthPacking: !!_.depthPacking,
      depthPacking: _.depthPacking || 0,
      index0AttributeName: _.index0AttributeName,
      extensionDerivatives: _.extensions && _.extensions.derivatives,
      extensionFragDepth: _.extensions && _.extensions.fragDepth,
      extensionDrawBuffers: _.extensions && _.extensions.drawBuffers,
      extensionShaderTextureLOD: _.extensions && _.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: _.customProgramCacheKey()
    };
  }
  function u(_) {
    const w = [];
    if (_.shaderID ? w.push(_.shaderID) : (w.push(_.customVertexShaderID), w.push(_.customFragmentShaderID)), _.defines !== void 0)
      for (const R in _.defines)
        w.push(R), w.push(_.defines[R]);
    return _.isRawShaderMaterial === !1 && (m(w, _), E(w, _), w.push(o.outputEncoding)), w.push(_.customProgramCacheKey), w.join();
  }
  function m(_, w) {
    _.push(w.precision), _.push(w.outputEncoding), _.push(w.envMapMode), _.push(w.envMapCubeUVHeight), _.push(w.combine), _.push(w.vertexUvs), _.push(w.fogExp2), _.push(w.sizeAttenuation), _.push(w.morphTargetsCount), _.push(w.morphAttributeCount), _.push(w.numDirLights), _.push(w.numPointLights), _.push(w.numSpotLights), _.push(w.numSpotLightMaps), _.push(w.numHemiLights), _.push(w.numRectAreaLights), _.push(w.numDirLightShadows), _.push(w.numPointLightShadows), _.push(w.numSpotLightShadows), _.push(w.numSpotLightShadowsWithMaps), _.push(w.shadowMapType), _.push(w.toneMapping), _.push(w.numClippingPlanes), _.push(w.numClipIntersection), _.push(w.depthPacking);
  }
  function E(_, w) {
    a.disableAll(), w.isWebGL2 && a.enable(0), w.supportsVertexTextures && a.enable(1), w.instancing && a.enable(2), w.instancingColor && a.enable(3), w.map && a.enable(4), w.matcap && a.enable(5), w.envMap && a.enable(6), w.lightMap && a.enable(7), w.aoMap && a.enable(8), w.emissiveMap && a.enable(9), w.bumpMap && a.enable(10), w.normalMap && a.enable(11), w.objectSpaceNormalMap && a.enable(12), w.tangentSpaceNormalMap && a.enable(13), w.clearcoat && a.enable(14), w.clearcoatMap && a.enable(15), w.clearcoatRoughnessMap && a.enable(16), w.clearcoatNormalMap && a.enable(17), w.iridescence && a.enable(18), w.iridescenceMap && a.enable(19), w.iridescenceThicknessMap && a.enable(20), w.displacementMap && a.enable(21), w.specularMap && a.enable(22), w.roughnessMap && a.enable(23), w.metalnessMap && a.enable(24), w.gradientMap && a.enable(25), w.alphaMap && a.enable(26), w.alphaTest && a.enable(27), w.vertexColors && a.enable(28), w.vertexAlphas && a.enable(29), w.vertexUvs && a.enable(30), w.vertexTangents && a.enable(31), w.uvsVertexOnly && a.enable(32), _.push(a.mask), a.disableAll(), w.fog && a.enable(0), w.useFog && a.enable(1), w.flatShading && a.enable(2), w.logarithmicDepthBuffer && a.enable(3), w.skinning && a.enable(4), w.morphTargets && a.enable(5), w.morphNormals && a.enable(6), w.morphColors && a.enable(7), w.premultipliedAlpha && a.enable(8), w.shadowMapEnabled && a.enable(9), w.physicallyCorrectLights && a.enable(10), w.doubleSided && a.enable(11), w.flipSided && a.enable(12), w.useDepthPacking && a.enable(13), w.dithering && a.enable(14), w.specularIntensityMap && a.enable(15), w.specularColorMap && a.enable(16), w.transmission && a.enable(17), w.transmissionMap && a.enable(18), w.thicknessMap && a.enable(19), w.sheen && a.enable(20), w.sheenColorMap && a.enable(21), w.sheenRoughnessMap && a.enable(22), w.decodeVideoTexture && a.enable(23), w.opaque && a.enable(24), _.push(a.mask);
  }
  function b(_) {
    const w = g[_.type];
    let R;
    if (w) {
      const G = Ht[w];
      R = fh.clone(G.uniforms);
    } else
      R = _.uniforms;
    return R;
  }
  function x(_, w) {
    let R;
    for (let G = 0, Y = l.length; G < Y; G++) {
      const P = l[G];
      if (P.cacheKey === w) {
        R = P, ++R.usedTimes;
        break;
      }
    }
    return R === void 0 && (R = new vf(o, w, _, s), l.push(R)), R;
  }
  function C(_) {
    if (--_.usedTimes === 0) {
      const w = l.indexOf(_);
      l[w] = l[l.length - 1], l.pop(), _.destroy();
    }
  }
  function S(_) {
    c.remove(_);
  }
  function D() {
    c.dispose();
  }
  return {
    getParameters: f,
    getProgramCacheKey: u,
    getUniforms: b,
    acquireProgram: x,
    releaseProgram: C,
    releaseShaderCache: S,
    programs: l,
    dispose: D
  };
}
function Tf() {
  let o = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let r = o.get(s);
    return r === void 0 && (r = {}, o.set(s, r)), r;
  }
  function t(s) {
    o.delete(s);
  }
  function n(s, r, a) {
    o.get(s)[r] = a;
  }
  function i() {
    o = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function Df(o, e) {
  return o.groupOrder !== e.groupOrder ? o.groupOrder - e.groupOrder : o.renderOrder !== e.renderOrder ? o.renderOrder - e.renderOrder : o.material.id !== e.material.id ? o.material.id - e.material.id : o.z !== e.z ? o.z - e.z : o.id - e.id;
}
function Ao(o, e) {
  return o.groupOrder !== e.groupOrder ? o.groupOrder - e.groupOrder : o.renderOrder !== e.renderOrder ? o.renderOrder - e.renderOrder : o.z !== e.z ? e.z - o.z : o.id - e.id;
}
function uo() {
  const o = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function r(A, d, p, g, f, u) {
    let m = o[e];
    return m === void 0 ? (m = {
      id: A.id,
      object: A,
      geometry: d,
      material: p,
      groupOrder: g,
      renderOrder: A.renderOrder,
      z: f,
      group: u
    }, o[e] = m) : (m.id = A.id, m.object = A, m.geometry = d, m.material = p, m.groupOrder = g, m.renderOrder = A.renderOrder, m.z = f, m.group = u), e++, m;
  }
  function a(A, d, p, g, f, u) {
    const m = r(A, d, p, g, f, u);
    p.transmission > 0 ? n.push(m) : p.transparent === !0 ? i.push(m) : t.push(m);
  }
  function c(A, d, p, g, f, u) {
    const m = r(A, d, p, g, f, u);
    p.transmission > 0 ? n.unshift(m) : p.transparent === !0 ? i.unshift(m) : t.unshift(m);
  }
  function l(A, d) {
    t.length > 1 && t.sort(A || Df), n.length > 1 && n.sort(d || Ao), i.length > 1 && i.sort(d || Ao);
  }
  function h() {
    for (let A = e, d = o.length; A < d; A++) {
      const p = o[A];
      if (p.id === null)
        break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: a,
    unshift: c,
    finish: h,
    sort: l
  };
}
function Rf() {
  let o = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = o.get(n);
    let r;
    return s === void 0 ? (r = new uo(), o.set(n, [r])) : i >= s.length ? (r = new uo(), s.push(r)) : r = s[i], r;
  }
  function t() {
    o = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Lf() {
  const o = {};
  return {
    get: function(e) {
      if (o[e.id] !== void 0)
        return o[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new B(),
            color: new ye()
          };
          break;
        case "SpotLight":
          t = {
            position: new B(),
            direction: new B(),
            color: new ye(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new B(),
            color: new ye(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new B(),
            skyColor: new ye(),
            groundColor: new ye()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new ye(),
            position: new B(),
            halfWidth: new B(),
            halfHeight: new B()
          };
          break;
      }
      return o[e.id] = t, t;
    }
  };
}
function Qf() {
  const o = {};
  return {
    get: function(e) {
      if (o[e.id] !== void 0)
        return o[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new xe()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new xe()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new xe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return o[e.id] = t, t;
    }
  };
}
let Ff = 0;
function Pf(o, e) {
  return (e.castShadow ? 2 : 0) - (o.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (o.map ? 1 : 0);
}
function kf(o, e) {
  const t = new Lf(), n = Qf(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let h = 0; h < 9; h++)
    i.probe.push(new B());
  const s = new B(), r = new we(), a = new we();
  function c(h, A) {
    let d = 0, p = 0, g = 0;
    for (let G = 0; G < 9; G++)
      i.probe[G].set(0, 0, 0);
    let f = 0, u = 0, m = 0, E = 0, b = 0, x = 0, C = 0, S = 0, D = 0, _ = 0;
    h.sort(Pf);
    const w = A !== !0 ? Math.PI : 1;
    for (let G = 0, Y = h.length; G < Y; G++) {
      const P = h[G], L = P.color, N = P.intensity, J = P.distance, K = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        d += L.r * N * w, p += L.g * N * w, g += L.b * N * w;
      else if (P.isLightProbe)
        for (let U = 0; U < 9; U++)
          i.probe[U].addScaledVector(P.sh.coefficients[U], N);
      else if (P.isDirectionalLight) {
        const U = t.get(P);
        if (U.color.copy(P.color).multiplyScalar(P.intensity * w), P.castShadow) {
          const ee = P.shadow, X = n.get(P);
          X.shadowBias = ee.bias, X.shadowNormalBias = ee.normalBias, X.shadowRadius = ee.radius, X.shadowMapSize = ee.mapSize, i.directionalShadow[f] = X, i.directionalShadowMap[f] = K, i.directionalShadowMatrix[f] = P.shadow.matrix, x++;
        }
        i.directional[f] = U, f++;
      } else if (P.isSpotLight) {
        const U = t.get(P);
        U.position.setFromMatrixPosition(P.matrixWorld), U.color.copy(L).multiplyScalar(N * w), U.distance = J, U.coneCos = Math.cos(P.angle), U.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), U.decay = P.decay, i.spot[m] = U;
        const ee = P.shadow;
        if (P.map && (i.spotLightMap[D] = P.map, D++, ee.updateMatrices(P), P.castShadow && _++), i.spotLightMatrix[m] = ee.matrix, P.castShadow) {
          const X = n.get(P);
          X.shadowBias = ee.bias, X.shadowNormalBias = ee.normalBias, X.shadowRadius = ee.radius, X.shadowMapSize = ee.mapSize, i.spotShadow[m] = X, i.spotShadowMap[m] = K, S++;
        }
        m++;
      } else if (P.isRectAreaLight) {
        const U = t.get(P);
        U.color.copy(L).multiplyScalar(N), U.halfWidth.set(P.width * 0.5, 0, 0), U.halfHeight.set(0, P.height * 0.5, 0), i.rectArea[E] = U, E++;
      } else if (P.isPointLight) {
        const U = t.get(P);
        if (U.color.copy(P.color).multiplyScalar(P.intensity * w), U.distance = P.distance, U.decay = P.decay, P.castShadow) {
          const ee = P.shadow, X = n.get(P);
          X.shadowBias = ee.bias, X.shadowNormalBias = ee.normalBias, X.shadowRadius = ee.radius, X.shadowMapSize = ee.mapSize, X.shadowCameraNear = ee.camera.near, X.shadowCameraFar = ee.camera.far, i.pointShadow[u] = X, i.pointShadowMap[u] = K, i.pointShadowMatrix[u] = P.shadow.matrix, C++;
        }
        i.point[u] = U, u++;
      } else if (P.isHemisphereLight) {
        const U = t.get(P);
        U.skyColor.copy(P.color).multiplyScalar(N * w), U.groundColor.copy(P.groundColor).multiplyScalar(N * w), i.hemi[b] = U, b++;
      }
    }
    E > 0 && (e.isWebGL2 || o.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_FLOAT_1, i.rectAreaLTC2 = ie.LTC_FLOAT_2) : o.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_HALF_1, i.rectAreaLTC2 = ie.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = p, i.ambient[2] = g;
    const R = i.hash;
    (R.directionalLength !== f || R.pointLength !== u || R.spotLength !== m || R.rectAreaLength !== E || R.hemiLength !== b || R.numDirectionalShadows !== x || R.numPointShadows !== C || R.numSpotShadows !== S || R.numSpotMaps !== D) && (i.directional.length = f, i.spot.length = m, i.rectArea.length = E, i.point.length = u, i.hemi.length = b, i.directionalShadow.length = x, i.directionalShadowMap.length = x, i.pointShadow.length = C, i.pointShadowMap.length = C, i.spotShadow.length = S, i.spotShadowMap.length = S, i.directionalShadowMatrix.length = x, i.pointShadowMatrix.length = C, i.spotLightMatrix.length = S + D - _, i.spotLightMap.length = D, i.numSpotLightShadowsWithMaps = _, R.directionalLength = f, R.pointLength = u, R.spotLength = m, R.rectAreaLength = E, R.hemiLength = b, R.numDirectionalShadows = x, R.numPointShadows = C, R.numSpotShadows = S, R.numSpotMaps = D, i.version = Ff++);
  }
  function l(h, A) {
    let d = 0, p = 0, g = 0, f = 0, u = 0;
    const m = A.matrixWorldInverse;
    for (let E = 0, b = h.length; E < b; E++) {
      const x = h[E];
      if (x.isDirectionalLight) {
        const C = i.directional[d];
        C.direction.setFromMatrixPosition(x.matrixWorld), s.setFromMatrixPosition(x.target.matrixWorld), C.direction.sub(s), C.direction.transformDirection(m), d++;
      } else if (x.isSpotLight) {
        const C = i.spot[g];
        C.position.setFromMatrixPosition(x.matrixWorld), C.position.applyMatrix4(m), C.direction.setFromMatrixPosition(x.matrixWorld), s.setFromMatrixPosition(x.target.matrixWorld), C.direction.sub(s), C.direction.transformDirection(m), g++;
      } else if (x.isRectAreaLight) {
        const C = i.rectArea[f];
        C.position.setFromMatrixPosition(x.matrixWorld), C.position.applyMatrix4(m), a.identity(), r.copy(x.matrixWorld), r.premultiply(m), a.extractRotation(r), C.halfWidth.set(x.width * 0.5, 0, 0), C.halfHeight.set(0, x.height * 0.5, 0), C.halfWidth.applyMatrix4(a), C.halfHeight.applyMatrix4(a), f++;
      } else if (x.isPointLight) {
        const C = i.point[p];
        C.position.setFromMatrixPosition(x.matrixWorld), C.position.applyMatrix4(m), p++;
      } else if (x.isHemisphereLight) {
        const C = i.hemi[u];
        C.direction.setFromMatrixPosition(x.matrixWorld), C.direction.transformDirection(m), u++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function fo(o, e) {
  const t = new kf(o, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function r(A) {
    n.push(A);
  }
  function a(A) {
    i.push(A);
  }
  function c(A) {
    t.setup(n, A);
  }
  function l(A) {
    t.setupView(n, A);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: r,
    pushShadow: a
  };
}
function Nf(o, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, r = 0) {
    const a = t.get(s);
    let c;
    return a === void 0 ? (c = new fo(o, e), t.set(s, [c])) : r >= a.length ? (c = new fo(o, e), a.push(c)) : c = a[r], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class Uf extends Vt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Nl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Gf extends Vt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new B(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Of = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Hf = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function zf(o, e, t) {
  let n = new Kr();
  const i = new xe(), s = new xe(), r = new ze(), a = new Uf({ depthPacking: Ul }), c = new Gf(), l = {}, h = t.maxTextureSize, A = { 0: Bt, 1: mn, 2: Ki }, d = new Nn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new xe() },
      radius: { value: 4 }
    },
    vertexShader: Of,
    fragmentShader: Hf
  }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new Tt();
  g.setAttribute(
    "position",
    new lt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const f = new Ve(g, d), u = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Ko, this.render = function(x, C, S) {
    if (u.enabled === !1 || u.autoUpdate === !1 && u.needsUpdate === !1 || x.length === 0)
      return;
    const D = o.getRenderTarget(), _ = o.getActiveCubeFace(), w = o.getActiveMipmapLevel(), R = o.state;
    R.setBlending(gn), R.buffers.color.setClear(1, 1, 1, 1), R.buffers.depth.setTest(!0), R.setScissorTest(!1);
    for (let G = 0, Y = x.length; G < Y; G++) {
      const P = x[G], L = P.shadow;
      if (L === void 0) {
        console.warn("THREE.WebGLShadowMap:", P, "has no shadow.");
        continue;
      }
      if (L.autoUpdate === !1 && L.needsUpdate === !1)
        continue;
      i.copy(L.mapSize);
      const N = L.getFrameExtents();
      if (i.multiply(N), s.copy(L.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / N.x), i.x = s.x * N.x, L.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / N.y), i.y = s.y * N.y, L.mapSize.y = s.y)), L.map === null) {
        const K = this.type !== Fi ? { minFilter: at, magFilter: at } : {};
        L.map = new kn(i.x, i.y, K), L.map.texture.name = P.name + ".shadowMap", L.camera.updateProjectionMatrix();
      }
      o.setRenderTarget(L.map), o.clear();
      const J = L.getViewportCount();
      for (let K = 0; K < J; K++) {
        const U = L.getViewport(K);
        r.set(
          s.x * U.x,
          s.y * U.y,
          s.x * U.z,
          s.y * U.w
        ), R.viewport(r), L.updateMatrices(P, K), n = L.getFrustum(), b(C, S, L.camera, P, this.type);
      }
      L.isPointLightShadow !== !0 && this.type === Fi && m(L, S), L.needsUpdate = !1;
    }
    u.needsUpdate = !1, o.setRenderTarget(D, _, w);
  };
  function m(x, C) {
    const S = e.update(f);
    d.defines.VSM_SAMPLES !== x.blurSamples && (d.defines.VSM_SAMPLES = x.blurSamples, p.defines.VSM_SAMPLES = x.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), x.mapPass === null && (x.mapPass = new kn(i.x, i.y)), d.uniforms.shadow_pass.value = x.map.texture, d.uniforms.resolution.value = x.mapSize, d.uniforms.radius.value = x.radius, o.setRenderTarget(x.mapPass), o.clear(), o.renderBufferDirect(C, null, S, d, f, null), p.uniforms.shadow_pass.value = x.mapPass.texture, p.uniforms.resolution.value = x.mapSize, p.uniforms.radius.value = x.radius, o.setRenderTarget(x.map), o.clear(), o.renderBufferDirect(C, null, S, p, f, null);
  }
  function E(x, C, S, D, _, w) {
    let R = null;
    const G = S.isPointLight === !0 ? x.customDistanceMaterial : x.customDepthMaterial;
    if (G !== void 0)
      R = G;
    else if (R = S.isPointLight === !0 ? c : a, o.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0) {
      const Y = R.uuid, P = C.uuid;
      let L = l[Y];
      L === void 0 && (L = {}, l[Y] = L);
      let N = L[P];
      N === void 0 && (N = R.clone(), L[P] = N), R = N;
    }
    return R.visible = C.visible, R.wireframe = C.wireframe, w === Fi ? R.side = C.shadowSide !== null ? C.shadowSide : C.side : R.side = C.shadowSide !== null ? C.shadowSide : A[C.side], R.alphaMap = C.alphaMap, R.alphaTest = C.alphaTest, R.map = C.map, R.clipShadows = C.clipShadows, R.clippingPlanes = C.clippingPlanes, R.clipIntersection = C.clipIntersection, R.displacementMap = C.displacementMap, R.displacementScale = C.displacementScale, R.displacementBias = C.displacementBias, R.wireframeLinewidth = C.wireframeLinewidth, R.linewidth = C.linewidth, S.isPointLight === !0 && R.isMeshDistanceMaterial === !0 && (R.referencePosition.setFromMatrixPosition(S.matrixWorld), R.nearDistance = D, R.farDistance = _), R;
  }
  function b(x, C, S, D, _) {
    if (x.visible === !1)
      return;
    if (x.layers.test(C.layers) && (x.isMesh || x.isLine || x.isPoints) && (x.castShadow || x.receiveShadow && _ === Fi) && (!x.frustumCulled || n.intersectsObject(x))) {
      x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse, x.matrixWorld);
      const G = e.update(x), Y = x.material;
      if (Array.isArray(Y)) {
        const P = G.groups;
        for (let L = 0, N = P.length; L < N; L++) {
          const J = P[L], K = Y[J.materialIndex];
          if (K && K.visible) {
            const U = E(x, K, D, S.near, S.far, _);
            o.renderBufferDirect(S, null, G, U, x, J);
          }
        }
      } else if (Y.visible) {
        const P = E(x, Y, D, S.near, S.far, _);
        o.renderBufferDirect(S, null, G, P, x, null);
      }
    }
    const R = x.children;
    for (let G = 0, Y = R.length; G < Y; G++)
      b(R[G], C, S, D, _);
  }
}
function Vf(o, e, t) {
  const n = t.isWebGL2;
  function i() {
    let T = !1;
    const z = new ze();
    let Z = null;
    const le = new ze(0, 0, 0, 0);
    return {
      setMask: function(pe) {
        Z !== pe && !T && (o.colorMask(pe, pe, pe, pe), Z = pe);
      },
      setLocked: function(pe) {
        T = pe;
      },
      setClear: function(pe, Ne, it, ht, En) {
        En === !0 && (pe *= ht, Ne *= ht, it *= ht), z.set(pe, Ne, it, ht), le.equals(z) === !1 && (o.clearColor(pe, Ne, it, ht), le.copy(z));
      },
      reset: function() {
        T = !1, Z = null, le.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let T = !1, z = null, Z = null, le = null;
    return {
      setTest: function(pe) {
        pe ? Be(2929) : de(2929);
      },
      setMask: function(pe) {
        z !== pe && !T && (o.depthMask(pe), z = pe);
      },
      setFunc: function(pe) {
        if (Z !== pe) {
          switch (pe) {
            case Al:
              o.depthFunc(512);
              break;
            case dl:
              o.depthFunc(519);
              break;
            case ul:
              o.depthFunc(513);
              break;
            case vr:
              o.depthFunc(515);
              break;
            case fl:
              o.depthFunc(514);
              break;
            case pl:
              o.depthFunc(518);
              break;
            case gl:
              o.depthFunc(516);
              break;
            case ml:
              o.depthFunc(517);
              break;
            default:
              o.depthFunc(515);
          }
          Z = pe;
        }
      },
      setLocked: function(pe) {
        T = pe;
      },
      setClear: function(pe) {
        le !== pe && (o.clearDepth(pe), le = pe);
      },
      reset: function() {
        T = !1, z = null, Z = null, le = null;
      }
    };
  }
  function r() {
    let T = !1, z = null, Z = null, le = null, pe = null, Ne = null, it = null, ht = null, En = null;
    return {
      setTest: function(We) {
        T || (We ? Be(2960) : de(2960));
      },
      setMask: function(We) {
        z !== We && !T && (o.stencilMask(We), z = We);
      },
      setFunc: function(We, jt, Rt) {
        (Z !== We || le !== jt || pe !== Rt) && (o.stencilFunc(We, jt, Rt), Z = We, le = jt, pe = Rt);
      },
      setOp: function(We, jt, Rt) {
        (Ne !== We || it !== jt || ht !== Rt) && (o.stencilOp(We, jt, Rt), Ne = We, it = jt, ht = Rt);
      },
      setLocked: function(We) {
        T = We;
      },
      setClear: function(We) {
        En !== We && (o.clearStencil(We), En = We);
      },
      reset: function() {
        T = !1, z = null, Z = null, le = null, pe = null, Ne = null, it = null, ht = null, En = null;
      }
    };
  }
  const a = new i(), c = new s(), l = new r(), h = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap();
  let d = {}, p = {}, g = /* @__PURE__ */ new WeakMap(), f = [], u = null, m = !1, E = null, b = null, x = null, C = null, S = null, D = null, _ = null, w = !1, R = null, G = null, Y = null, P = null, L = null;
  const N = o.getParameter(35661);
  let J = !1, K = 0;
  const U = o.getParameter(7938);
  U.indexOf("WebGL") !== -1 ? (K = parseFloat(/^WebGL (\d)/.exec(U)[1]), J = K >= 1) : U.indexOf("OpenGL ES") !== -1 && (K = parseFloat(/^OpenGL ES (\d)/.exec(U)[1]), J = K >= 2);
  let ee = null, X = {};
  const W = o.getParameter(3088), O = o.getParameter(2978), se = new ze().fromArray(W), te = new ze().fromArray(O);
  function re(T, z, Z) {
    const le = new Uint8Array(4), pe = o.createTexture();
    o.bindTexture(T, pe), o.texParameteri(T, 10241, 9728), o.texParameteri(T, 10240, 9728);
    for (let Ne = 0; Ne < Z; Ne++)
      o.texImage2D(z + Ne, 0, 6408, 1, 1, 0, 6408, 5121, le);
    return pe;
  }
  const q = {};
  q[3553] = re(3553, 3553, 1), q[34067] = re(34067, 34069, 6), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), Be(2929), c.setFunc(vr), Ze(!1), ft(Aa), Be(2884), nt(gn);
  function Be(T) {
    d[T] !== !0 && (o.enable(T), d[T] = !0);
  }
  function de(T) {
    d[T] !== !1 && (o.disable(T), d[T] = !1);
  }
  function me(T, z) {
    return p[T] !== z ? (o.bindFramebuffer(T, z), p[T] = z, n && (T === 36009 && (p[36160] = z), T === 36160 && (p[36009] = z)), !0) : !1;
  }
  function Ae(T, z) {
    let Z = f, le = !1;
    if (T)
      if (Z = g.get(z), Z === void 0 && (Z = [], g.set(z, Z)), T.isWebGLMultipleRenderTargets) {
        const pe = T.texture;
        if (Z.length !== pe.length || Z[0] !== 36064) {
          for (let Ne = 0, it = pe.length; Ne < it; Ne++)
            Z[Ne] = 36064 + Ne;
          Z.length = pe.length, le = !0;
        }
      } else
        Z[0] !== 36064 && (Z[0] = 36064, le = !0);
    else
      Z[0] !== 1029 && (Z[0] = 1029, le = !0);
    le && (t.isWebGL2 ? o.drawBuffers(Z) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z));
  }
  function ke(T) {
    return u !== T ? (o.useProgram(T), u = T, !0) : !1;
  }
  const Ie = {
    [ri]: 32774,
    [el]: 32778,
    [tl]: 32779
  };
  if (n)
    Ie[pa] = 32775, Ie[ga] = 32776;
  else {
    const T = e.get("EXT_blend_minmax");
    T !== null && (Ie[pa] = T.MIN_EXT, Ie[ga] = T.MAX_EXT);
  }
  const be = {
    [nl]: 0,
    [il]: 1,
    [sl]: 768,
    [Jo]: 770,
    [hl]: 776,
    [cl]: 774,
    [al]: 772,
    [rl]: 769,
    [Xo]: 771,
    [ll]: 775,
    [ol]: 773
  };
  function nt(T, z, Z, le, pe, Ne, it, ht) {
    if (T === gn) {
      m === !0 && (de(3042), m = !1);
      return;
    }
    if (m === !1 && (Be(3042), m = !0), T !== $c) {
      if (T !== E || ht !== w) {
        if ((b !== ri || S !== ri) && (o.blendEquation(32774), b = ri, S = ri), ht)
          switch (T) {
            case oi:
              o.blendFuncSeparate(1, 771, 1, 771);
              break;
            case da:
              o.blendFunc(1, 1);
              break;
            case ua:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case fa:
              o.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", T);
              break;
          }
        else
          switch (T) {
            case oi:
              o.blendFuncSeparate(770, 771, 1, 771);
              break;
            case da:
              o.blendFunc(770, 1);
              break;
            case ua:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case fa:
              o.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", T);
              break;
          }
        x = null, C = null, D = null, _ = null, E = T, w = ht;
      }
      return;
    }
    pe = pe || z, Ne = Ne || Z, it = it || le, (z !== b || pe !== S) && (o.blendEquationSeparate(Ie[z], Ie[pe]), b = z, S = pe), (Z !== x || le !== C || Ne !== D || it !== _) && (o.blendFuncSeparate(be[Z], be[le], be[Ne], be[it]), x = Z, C = le, D = Ne, _ = it), E = T, w = !1;
  }
  function Xe(T, z) {
    T.side === Ki ? de(2884) : Be(2884);
    let Z = T.side === Bt;
    z && (Z = !Z), Ze(Z), T.blending === oi && T.transparent === !1 ? nt(gn) : nt(T.blending, T.blendEquation, T.blendSrc, T.blendDst, T.blendEquationAlpha, T.blendSrcAlpha, T.blendDstAlpha, T.premultipliedAlpha), c.setFunc(T.depthFunc), c.setTest(T.depthTest), c.setMask(T.depthWrite), a.setMask(T.colorWrite);
    const le = T.stencilWrite;
    l.setTest(le), le && (l.setMask(T.stencilWriteMask), l.setFunc(T.stencilFunc, T.stencilRef, T.stencilFuncMask), l.setOp(T.stencilFail, T.stencilZFail, T.stencilZPass)), Ue(T.polygonOffset, T.polygonOffsetFactor, T.polygonOffsetUnits), T.alphaToCoverage === !0 ? Be(32926) : de(32926);
  }
  function Ze(T) {
    R !== T && (T ? o.frontFace(2304) : o.frontFace(2305), R = T);
  }
  function ft(T) {
    T !== Jc ? (Be(2884), T !== G && (T === Aa ? o.cullFace(1029) : T === Xc ? o.cullFace(1028) : o.cullFace(1032))) : de(2884), G = T;
  }
  function je(T) {
    T !== Y && (J && o.lineWidth(T), Y = T);
  }
  function Ue(T, z, Z) {
    T ? (Be(32823), (P !== z || L !== Z) && (o.polygonOffset(z, Z), P = z, L = Z)) : de(32823);
  }
  function Dt(T) {
    T ? Be(3089) : de(3089);
  }
  function It(T) {
    T === void 0 && (T = 33984 + N - 1), ee !== T && (o.activeTexture(T), ee = T);
  }
  function v(T, z, Z) {
    Z === void 0 && (ee === null ? Z = 33984 + N - 1 : Z = ee);
    let le = X[Z];
    le === void 0 && (le = { type: void 0, texture: void 0 }, X[Z] = le), (le.type !== T || le.texture !== z) && (ee !== Z && (o.activeTexture(Z), ee = Z), o.bindTexture(T, z || q[T]), le.type = T, le.texture = z);
  }
  function I() {
    const T = X[ee];
    T !== void 0 && T.type !== void 0 && (o.bindTexture(T.type, null), T.type = void 0, T.texture = void 0);
  }
  function H() {
    try {
      o.compressedTexImage2D.apply(o, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function $() {
    try {
      o.compressedTexImage3D.apply(o, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function ne() {
    try {
      o.texSubImage2D.apply(o, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function ae() {
    try {
      o.texSubImage3D.apply(o, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function _e() {
    try {
      o.compressedTexSubImage2D.apply(o, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function M() {
    try {
      o.compressedTexSubImage3D.apply(o, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function Q() {
    try {
      o.texStorage2D.apply(o, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function ce() {
    try {
      o.texStorage3D.apply(o, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function he() {
    try {
      o.texImage2D.apply(o, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function oe() {
    try {
      o.texImage3D.apply(o, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function fe(T) {
    se.equals(T) === !1 && (o.scissor(T.x, T.y, T.z, T.w), se.copy(T));
  }
  function ue(T) {
    te.equals(T) === !1 && (o.viewport(T.x, T.y, T.z, T.w), te.copy(T));
  }
  function Te(T, z) {
    let Z = A.get(z);
    Z === void 0 && (Z = /* @__PURE__ */ new WeakMap(), A.set(z, Z));
    let le = Z.get(T);
    le === void 0 && (le = o.getUniformBlockIndex(z, T.name), Z.set(T, le));
  }
  function De(T, z) {
    const le = A.get(z).get(T);
    h.get(z) !== le && (o.uniformBlockBinding(z, le, T.__bindingPointIndex), h.set(z, le));
  }
  function Oe() {
    o.disable(3042), o.disable(2884), o.disable(2929), o.disable(32823), o.disable(3089), o.disable(2960), o.disable(32926), o.blendEquation(32774), o.blendFunc(1, 0), o.blendFuncSeparate(1, 0, 1, 0), o.colorMask(!0, !0, !0, !0), o.clearColor(0, 0, 0, 0), o.depthMask(!0), o.depthFunc(513), o.clearDepth(1), o.stencilMask(4294967295), o.stencilFunc(519, 0, 4294967295), o.stencilOp(7680, 7680, 7680), o.clearStencil(0), o.cullFace(1029), o.frontFace(2305), o.polygonOffset(0, 0), o.activeTexture(33984), o.bindFramebuffer(36160, null), n === !0 && (o.bindFramebuffer(36009, null), o.bindFramebuffer(36008, null)), o.useProgram(null), o.lineWidth(1), o.scissor(0, 0, o.canvas.width, o.canvas.height), o.viewport(0, 0, o.canvas.width, o.canvas.height), d = {}, ee = null, X = {}, p = {}, g = /* @__PURE__ */ new WeakMap(), f = [], u = null, m = !1, E = null, b = null, x = null, C = null, S = null, D = null, _ = null, w = !1, R = null, G = null, Y = null, P = null, L = null, se.set(0, 0, o.canvas.width, o.canvas.height), te.set(0, 0, o.canvas.width, o.canvas.height), a.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: a,
      depth: c,
      stencil: l
    },
    enable: Be,
    disable: de,
    bindFramebuffer: me,
    drawBuffers: Ae,
    useProgram: ke,
    setBlending: nt,
    setMaterial: Xe,
    setFlipSided: Ze,
    setCullFace: ft,
    setLineWidth: je,
    setPolygonOffset: Ue,
    setScissorTest: Dt,
    activeTexture: It,
    bindTexture: v,
    unbindTexture: I,
    compressedTexImage2D: H,
    compressedTexImage3D: $,
    texImage2D: he,
    texImage3D: oe,
    updateUBOMapping: Te,
    uniformBlockBinding: De,
    texStorage2D: Q,
    texStorage3D: ce,
    texSubImage2D: ne,
    texSubImage3D: ae,
    compressedTexSubImage2D: _e,
    compressedTexSubImage3D: M,
    scissor: fe,
    viewport: ue,
    reset: Oe
  };
}
function Wf(o, e, t, n, i, s, r) {
  const a = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, h = i.maxTextureSize, A = i.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, p = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let f;
  const u = /* @__PURE__ */ new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function E(v, I) {
    return m ? new OffscreenCanvas(v, I) : Vi("canvas");
  }
  function b(v, I, H, $) {
    let ne = 1;
    if ((v.width > $ || v.height > $) && (ne = $ / Math.max(v.width, v.height)), ne < 1 || I === !0)
      if (typeof HTMLImageElement < "u" && v instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && v instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && v instanceof ImageBitmap) {
        const ae = I ? Bs : Math.floor, _e = ae(ne * v.width), M = ae(ne * v.height);
        f === void 0 && (f = E(_e, M));
        const Q = H ? E(_e, M) : f;
        return Q.width = _e, Q.height = M, Q.getContext("2d").drawImage(v, 0, 0, _e, M), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + v.width + "x" + v.height + ") to (" + _e + "x" + M + ")."), Q;
      } else
        return "data" in v && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + v.width + "x" + v.height + ")."), v;
    return v;
  }
  function x(v) {
    return kr(v.width) && kr(v.height);
  }
  function C(v) {
    return a ? !1 : v.wrapS !== wt || v.wrapT !== wt || v.minFilter !== at && v.minFilter !== dt;
  }
  function S(v, I) {
    return v.generateMipmaps && I && v.minFilter !== at && v.minFilter !== dt;
  }
  function D(v) {
    o.generateMipmap(v);
  }
  function _(v, I, H, $, ne = !1) {
    if (a === !1)
      return I;
    if (v !== null) {
      if (o[v] !== void 0)
        return o[v];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + v + "'");
    }
    let ae = I;
    return I === 6403 && (H === 5126 && (ae = 33326), H === 5131 && (ae = 33325), H === 5121 && (ae = 33321)), I === 33319 && (H === 5126 && (ae = 33328), H === 5131 && (ae = 33327), H === 5121 && (ae = 33323)), I === 6408 && (H === 5126 && (ae = 34836), H === 5131 && (ae = 34842), H === 5121 && (ae = $ === Se && ne === !1 ? 35907 : 32856), H === 32819 && (ae = 32854), H === 32820 && (ae = 32855)), (ae === 33325 || ae === 33326 || ae === 33327 || ae === 33328 || ae === 34842 || ae === 34836) && e.get("EXT_color_buffer_float"), ae;
  }
  function w(v, I, H) {
    return S(v, H) === !0 || v.isFramebufferTexture && v.minFilter !== at && v.minFilter !== dt ? Math.log2(Math.max(I.width, I.height)) + 1 : v.mipmaps !== void 0 && v.mipmaps.length > 0 ? v.mipmaps.length : v.isCompressedTexture && Array.isArray(v.image) ? I.mipmaps.length : 1;
  }
  function R(v) {
    return v === at || v === Sr || v === Cs ? 9728 : 9729;
  }
  function G(v) {
    const I = v.target;
    I.removeEventListener("dispose", G), P(I), I.isVideoTexture && g.delete(I);
  }
  function Y(v) {
    const I = v.target;
    I.removeEventListener("dispose", Y), N(I);
  }
  function P(v) {
    const I = n.get(v);
    if (I.__webglInit === void 0)
      return;
    const H = v.source, $ = u.get(H);
    if ($) {
      const ne = $[I.__cacheKey];
      ne.usedTimes--, ne.usedTimes === 0 && L(v), Object.keys($).length === 0 && u.delete(H);
    }
    n.remove(v);
  }
  function L(v) {
    const I = n.get(v);
    o.deleteTexture(I.__webglTexture);
    const H = v.source, $ = u.get(H);
    delete $[I.__cacheKey], r.memory.textures--;
  }
  function N(v) {
    const I = v.texture, H = n.get(v), $ = n.get(I);
    if ($.__webglTexture !== void 0 && (o.deleteTexture($.__webglTexture), r.memory.textures--), v.depthTexture && v.depthTexture.dispose(), v.isWebGLCubeRenderTarget)
      for (let ne = 0; ne < 6; ne++)
        o.deleteFramebuffer(H.__webglFramebuffer[ne]), H.__webglDepthbuffer && o.deleteRenderbuffer(H.__webglDepthbuffer[ne]);
    else {
      if (o.deleteFramebuffer(H.__webglFramebuffer), H.__webglDepthbuffer && o.deleteRenderbuffer(H.__webglDepthbuffer), H.__webglMultisampledFramebuffer && o.deleteFramebuffer(H.__webglMultisampledFramebuffer), H.__webglColorRenderbuffer)
        for (let ne = 0; ne < H.__webglColorRenderbuffer.length; ne++)
          H.__webglColorRenderbuffer[ne] && o.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);
      H.__webglDepthRenderbuffer && o.deleteRenderbuffer(H.__webglDepthRenderbuffer);
    }
    if (v.isWebGLMultipleRenderTargets)
      for (let ne = 0, ae = I.length; ne < ae; ne++) {
        const _e = n.get(I[ne]);
        _e.__webglTexture && (o.deleteTexture(_e.__webglTexture), r.memory.textures--), n.remove(I[ne]);
      }
    n.remove(I), n.remove(v);
  }
  let J = 0;
  function K() {
    J = 0;
  }
  function U() {
    const v = J;
    return v >= c && console.warn("THREE.WebGLTextures: Trying to use " + v + " texture units while this GPU supports only " + c), J += 1, v;
  }
  function ee(v) {
    const I = [];
    return I.push(v.wrapS), I.push(v.wrapT), I.push(v.wrapR || 0), I.push(v.magFilter), I.push(v.minFilter), I.push(v.anisotropy), I.push(v.internalFormat), I.push(v.format), I.push(v.type), I.push(v.generateMipmaps), I.push(v.premultiplyAlpha), I.push(v.flipY), I.push(v.unpackAlignment), I.push(v.encoding), I.join();
  }
  function X(v, I) {
    const H = n.get(v);
    if (v.isVideoTexture && Dt(v), v.isRenderTargetTexture === !1 && v.version > 0 && H.__version !== v.version) {
      const $ = v.image;
      if ($ === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if ($.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        de(H, v, I);
        return;
      }
    }
    t.bindTexture(3553, H.__webglTexture, 33984 + I);
  }
  function W(v, I) {
    const H = n.get(v);
    if (v.version > 0 && H.__version !== v.version) {
      de(H, v, I);
      return;
    }
    t.bindTexture(35866, H.__webglTexture, 33984 + I);
  }
  function O(v, I) {
    const H = n.get(v);
    if (v.version > 0 && H.__version !== v.version) {
      de(H, v, I);
      return;
    }
    t.bindTexture(32879, H.__webglTexture, 33984 + I);
  }
  function se(v, I) {
    const H = n.get(v);
    if (v.version > 0 && H.__version !== v.version) {
      me(H, v, I);
      return;
    }
    t.bindTexture(34067, H.__webglTexture, 33984 + I);
  }
  const te = {
    [di]: 10497,
    [wt]: 33071,
    [Ss]: 33648
  }, re = {
    [at]: 9728,
    [Sr]: 9984,
    [Cs]: 9986,
    [dt]: 9729,
    [tc]: 9985,
    [bn]: 9987
  };
  function q(v, I, H) {
    if (H ? (o.texParameteri(v, 10242, te[I.wrapS]), o.texParameteri(v, 10243, te[I.wrapT]), (v === 32879 || v === 35866) && o.texParameteri(v, 32882, te[I.wrapR]), o.texParameteri(v, 10240, re[I.magFilter]), o.texParameteri(v, 10241, re[I.minFilter])) : (o.texParameteri(v, 10242, 33071), o.texParameteri(v, 10243, 33071), (v === 32879 || v === 35866) && o.texParameteri(v, 32882, 33071), (I.wrapS !== wt || I.wrapT !== wt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), o.texParameteri(v, 10240, R(I.magFilter)), o.texParameteri(v, 10241, R(I.minFilter)), I.minFilter !== at && I.minFilter !== dt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const $ = e.get("EXT_texture_filter_anisotropic");
      if (I.magFilter === at || I.minFilter !== Cs && I.minFilter !== bn || I.type === Ft && e.has("OES_texture_float_linear") === !1 || a === !1 && I.type === an && e.has("OES_texture_half_float_linear") === !1)
        return;
      (I.anisotropy > 1 || n.get(I).__currentAnisotropy) && (o.texParameterf(v, $.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(I.anisotropy, i.getMaxAnisotropy())), n.get(I).__currentAnisotropy = I.anisotropy);
    }
  }
  function Be(v, I) {
    let H = !1;
    v.__webglInit === void 0 && (v.__webglInit = !0, I.addEventListener("dispose", G));
    const $ = I.source;
    let ne = u.get($);
    ne === void 0 && (ne = {}, u.set($, ne));
    const ae = ee(I);
    if (ae !== v.__cacheKey) {
      ne[ae] === void 0 && (ne[ae] = {
        texture: o.createTexture(),
        usedTimes: 0
      }, r.memory.textures++, H = !0), ne[ae].usedTimes++;
      const _e = ne[v.__cacheKey];
      _e !== void 0 && (ne[v.__cacheKey].usedTimes--, _e.usedTimes === 0 && L(I)), v.__cacheKey = ae, v.__webglTexture = ne[ae].texture;
    }
    return H;
  }
  function de(v, I, H) {
    let $ = 3553;
    (I.isDataArrayTexture || I.isCompressedArrayTexture) && ($ = 35866), I.isData3DTexture && ($ = 32879);
    const ne = Be(v, I), ae = I.source;
    t.bindTexture($, v.__webglTexture, 33984 + H);
    const _e = n.get(ae);
    if (ae.version !== _e.__version || ne === !0) {
      t.activeTexture(33984 + H), o.pixelStorei(37440, I.flipY), o.pixelStorei(37441, I.premultiplyAlpha), o.pixelStorei(3317, I.unpackAlignment), o.pixelStorei(37443, 0);
      const M = C(I) && x(I.image) === !1;
      let Q = b(I.image, M, !1, h);
      Q = It(I, Q);
      const ce = x(Q) || a, he = s.convert(I.format, I.encoding);
      let oe = s.convert(I.type), fe = _(I.internalFormat, he, oe, I.encoding, I.isVideoTexture);
      q($, I, ce);
      let ue;
      const Te = I.mipmaps, De = a && I.isVideoTexture !== !0, Oe = _e.__version === void 0 || ne === !0, T = w(I, Q, ce);
      if (I.isDepthTexture)
        fe = 6402, a ? I.type === Ft ? fe = 36012 : I.type === Dn ? fe = 33190 : I.type === ci ? fe = 35056 : fe = 33189 : I.type === Ft && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), I.format === Ln && fe === 6402 && I.type !== nc && I.type !== Dn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), I.type = Dn, oe = s.convert(I.type)), I.format === ui && fe === 6402 && (fe = 34041, I.type !== ci && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), I.type = ci, oe = s.convert(I.type))), Oe && (De ? t.texStorage2D(3553, 1, fe, Q.width, Q.height) : t.texImage2D(3553, 0, fe, Q.width, Q.height, 0, he, oe, null));
      else if (I.isDataTexture)
        if (Te.length > 0 && ce) {
          De && Oe && t.texStorage2D(3553, T, fe, Te[0].width, Te[0].height);
          for (let z = 0, Z = Te.length; z < Z; z++)
            ue = Te[z], De ? t.texSubImage2D(3553, z, 0, 0, ue.width, ue.height, he, oe, ue.data) : t.texImage2D(3553, z, fe, ue.width, ue.height, 0, he, oe, ue.data);
          I.generateMipmaps = !1;
        } else
          De ? (Oe && t.texStorage2D(3553, T, fe, Q.width, Q.height), t.texSubImage2D(3553, 0, 0, 0, Q.width, Q.height, he, oe, Q.data)) : t.texImage2D(3553, 0, fe, Q.width, Q.height, 0, he, oe, Q.data);
      else if (I.isCompressedTexture)
        if (I.isCompressedArrayTexture) {
          De && Oe && t.texStorage3D(35866, T, fe, Te[0].width, Te[0].height, Q.depth);
          for (let z = 0, Z = Te.length; z < Z; z++)
            ue = Te[z], I.format !== ct ? he !== null ? De ? t.compressedTexSubImage3D(35866, z, 0, 0, 0, ue.width, ue.height, Q.depth, he, ue.data, 0, 0) : t.compressedTexImage3D(35866, z, fe, ue.width, ue.height, Q.depth, 0, ue.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : De ? t.texSubImage3D(35866, z, 0, 0, 0, ue.width, ue.height, Q.depth, he, oe, ue.data) : t.texImage3D(35866, z, fe, ue.width, ue.height, Q.depth, 0, he, oe, ue.data);
        } else {
          De && Oe && t.texStorage2D(3553, T, fe, Te[0].width, Te[0].height);
          for (let z = 0, Z = Te.length; z < Z; z++)
            ue = Te[z], I.format !== ct ? he !== null ? De ? t.compressedTexSubImage2D(3553, z, 0, 0, ue.width, ue.height, he, ue.data) : t.compressedTexImage2D(3553, z, fe, ue.width, ue.height, 0, ue.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : De ? t.texSubImage2D(3553, z, 0, 0, ue.width, ue.height, he, oe, ue.data) : t.texImage2D(3553, z, fe, ue.width, ue.height, 0, he, oe, ue.data);
        }
      else if (I.isDataArrayTexture)
        De ? (Oe && t.texStorage3D(35866, T, fe, Q.width, Q.height, Q.depth), t.texSubImage3D(35866, 0, 0, 0, 0, Q.width, Q.height, Q.depth, he, oe, Q.data)) : t.texImage3D(35866, 0, fe, Q.width, Q.height, Q.depth, 0, he, oe, Q.data);
      else if (I.isData3DTexture)
        De ? (Oe && t.texStorage3D(32879, T, fe, Q.width, Q.height, Q.depth), t.texSubImage3D(32879, 0, 0, 0, 0, Q.width, Q.height, Q.depth, he, oe, Q.data)) : t.texImage3D(32879, 0, fe, Q.width, Q.height, Q.depth, 0, he, oe, Q.data);
      else if (I.isFramebufferTexture) {
        if (Oe)
          if (De)
            t.texStorage2D(3553, T, fe, Q.width, Q.height);
          else {
            let z = Q.width, Z = Q.height;
            for (let le = 0; le < T; le++)
              t.texImage2D(3553, le, fe, z, Z, 0, he, oe, null), z >>= 1, Z >>= 1;
          }
      } else if (Te.length > 0 && ce) {
        De && Oe && t.texStorage2D(3553, T, fe, Te[0].width, Te[0].height);
        for (let z = 0, Z = Te.length; z < Z; z++)
          ue = Te[z], De ? t.texSubImage2D(3553, z, 0, 0, he, oe, ue) : t.texImage2D(3553, z, fe, he, oe, ue);
        I.generateMipmaps = !1;
      } else
        De ? (Oe && t.texStorage2D(3553, T, fe, Q.width, Q.height), t.texSubImage2D(3553, 0, 0, 0, he, oe, Q)) : t.texImage2D(3553, 0, fe, he, oe, Q);
      S(I, ce) && D($), _e.__version = ae.version, I.onUpdate && I.onUpdate(I);
    }
    v.__version = I.version;
  }
  function me(v, I, H) {
    if (I.image.length !== 6)
      return;
    const $ = Be(v, I), ne = I.source;
    t.bindTexture(34067, v.__webglTexture, 33984 + H);
    const ae = n.get(ne);
    if (ne.version !== ae.__version || $ === !0) {
      t.activeTexture(33984 + H), o.pixelStorei(37440, I.flipY), o.pixelStorei(37441, I.premultiplyAlpha), o.pixelStorei(3317, I.unpackAlignment), o.pixelStorei(37443, 0);
      const _e = I.isCompressedTexture || I.image[0].isCompressedTexture, M = I.image[0] && I.image[0].isDataTexture, Q = [];
      for (let z = 0; z < 6; z++)
        !_e && !M ? Q[z] = b(I.image[z], !1, !0, l) : Q[z] = M ? I.image[z].image : I.image[z], Q[z] = It(I, Q[z]);
      const ce = Q[0], he = x(ce) || a, oe = s.convert(I.format, I.encoding), fe = s.convert(I.type), ue = _(I.internalFormat, oe, fe, I.encoding), Te = a && I.isVideoTexture !== !0, De = ae.__version === void 0 || $ === !0;
      let Oe = w(I, ce, he);
      q(34067, I, he);
      let T;
      if (_e) {
        Te && De && t.texStorage2D(34067, Oe, ue, ce.width, ce.height);
        for (let z = 0; z < 6; z++) {
          T = Q[z].mipmaps;
          for (let Z = 0; Z < T.length; Z++) {
            const le = T[Z];
            I.format !== ct ? oe !== null ? Te ? t.compressedTexSubImage2D(34069 + z, Z, 0, 0, le.width, le.height, oe, le.data) : t.compressedTexImage2D(34069 + z, Z, ue, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Te ? t.texSubImage2D(34069 + z, Z, 0, 0, le.width, le.height, oe, fe, le.data) : t.texImage2D(34069 + z, Z, ue, le.width, le.height, 0, oe, fe, le.data);
          }
        }
      } else {
        T = I.mipmaps, Te && De && (T.length > 0 && Oe++, t.texStorage2D(34067, Oe, ue, Q[0].width, Q[0].height));
        for (let z = 0; z < 6; z++)
          if (M) {
            Te ? t.texSubImage2D(34069 + z, 0, 0, 0, Q[z].width, Q[z].height, oe, fe, Q[z].data) : t.texImage2D(34069 + z, 0, ue, Q[z].width, Q[z].height, 0, oe, fe, Q[z].data);
            for (let Z = 0; Z < T.length; Z++) {
              const pe = T[Z].image[z].image;
              Te ? t.texSubImage2D(34069 + z, Z + 1, 0, 0, pe.width, pe.height, oe, fe, pe.data) : t.texImage2D(34069 + z, Z + 1, ue, pe.width, pe.height, 0, oe, fe, pe.data);
            }
          } else {
            Te ? t.texSubImage2D(34069 + z, 0, 0, 0, oe, fe, Q[z]) : t.texImage2D(34069 + z, 0, ue, oe, fe, Q[z]);
            for (let Z = 0; Z < T.length; Z++) {
              const le = T[Z];
              Te ? t.texSubImage2D(34069 + z, Z + 1, 0, 0, oe, fe, le.image[z]) : t.texImage2D(34069 + z, Z + 1, ue, oe, fe, le.image[z]);
            }
          }
      }
      S(I, he) && D(34067), ae.__version = ne.version, I.onUpdate && I.onUpdate(I);
    }
    v.__version = I.version;
  }
  function Ae(v, I, H, $, ne) {
    const ae = s.convert(H.format, H.encoding), _e = s.convert(H.type), M = _(H.internalFormat, ae, _e, H.encoding);
    n.get(I).__hasExternalTextures || (ne === 32879 || ne === 35866 ? t.texImage3D(ne, 0, M, I.width, I.height, I.depth, 0, ae, _e, null) : t.texImage2D(ne, 0, M, I.width, I.height, 0, ae, _e, null)), t.bindFramebuffer(36160, v), Ue(I) ? d.framebufferTexture2DMultisampleEXT(36160, $, ne, n.get(H).__webglTexture, 0, je(I)) : (ne === 3553 || ne >= 34069 && ne <= 34074) && o.framebufferTexture2D(36160, $, ne, n.get(H).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function ke(v, I, H) {
    if (o.bindRenderbuffer(36161, v), I.depthBuffer && !I.stencilBuffer) {
      let $ = 33189;
      if (H || Ue(I)) {
        const ne = I.depthTexture;
        ne && ne.isDepthTexture && (ne.type === Ft ? $ = 36012 : ne.type === Dn && ($ = 33190));
        const ae = je(I);
        Ue(I) ? d.renderbufferStorageMultisampleEXT(36161, ae, $, I.width, I.height) : o.renderbufferStorageMultisample(36161, ae, $, I.width, I.height);
      } else
        o.renderbufferStorage(36161, $, I.width, I.height);
      o.framebufferRenderbuffer(36160, 36096, 36161, v);
    } else if (I.depthBuffer && I.stencilBuffer) {
      const $ = je(I);
      H && Ue(I) === !1 ? o.renderbufferStorageMultisample(36161, $, 35056, I.width, I.height) : Ue(I) ? d.renderbufferStorageMultisampleEXT(36161, $, 35056, I.width, I.height) : o.renderbufferStorage(36161, 34041, I.width, I.height), o.framebufferRenderbuffer(36160, 33306, 36161, v);
    } else {
      const $ = I.isWebGLMultipleRenderTargets === !0 ? I.texture : [I.texture];
      for (let ne = 0; ne < $.length; ne++) {
        const ae = $[ne], _e = s.convert(ae.format, ae.encoding), M = s.convert(ae.type), Q = _(ae.internalFormat, _e, M, ae.encoding), ce = je(I);
        H && Ue(I) === !1 ? o.renderbufferStorageMultisample(36161, ce, Q, I.width, I.height) : Ue(I) ? d.renderbufferStorageMultisampleEXT(36161, ce, Q, I.width, I.height) : o.renderbufferStorage(36161, Q, I.width, I.height);
      }
    }
    o.bindRenderbuffer(36161, null);
  }
  function Ie(v, I) {
    if (I && I.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, v), !(I.depthTexture && I.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(I.depthTexture).__webglTexture || I.depthTexture.image.width !== I.width || I.depthTexture.image.height !== I.height) && (I.depthTexture.image.width = I.width, I.depthTexture.image.height = I.height, I.depthTexture.needsUpdate = !0), X(I.depthTexture, 0);
    const $ = n.get(I.depthTexture).__webglTexture, ne = je(I);
    if (I.depthTexture.format === Ln)
      Ue(I) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, $, 0, ne) : o.framebufferTexture2D(36160, 36096, 3553, $, 0);
    else if (I.depthTexture.format === ui)
      Ue(I) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, $, 0, ne) : o.framebufferTexture2D(36160, 33306, 3553, $, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function be(v) {
    const I = n.get(v), H = v.isWebGLCubeRenderTarget === !0;
    if (v.depthTexture && !I.__autoAllocateDepthBuffer) {
      if (H)
        throw new Error("target.depthTexture not supported in Cube render targets");
      Ie(I.__webglFramebuffer, v);
    } else if (H) {
      I.__webglDepthbuffer = [];
      for (let $ = 0; $ < 6; $++)
        t.bindFramebuffer(36160, I.__webglFramebuffer[$]), I.__webglDepthbuffer[$] = o.createRenderbuffer(), ke(I.__webglDepthbuffer[$], v, !1);
    } else
      t.bindFramebuffer(36160, I.__webglFramebuffer), I.__webglDepthbuffer = o.createRenderbuffer(), ke(I.__webglDepthbuffer, v, !1);
    t.bindFramebuffer(36160, null);
  }
  function nt(v, I, H) {
    const $ = n.get(v);
    I !== void 0 && Ae($.__webglFramebuffer, v, v.texture, 36064, 3553), H !== void 0 && be(v);
  }
  function Xe(v) {
    const I = v.texture, H = n.get(v), $ = n.get(I);
    v.addEventListener("dispose", Y), v.isWebGLMultipleRenderTargets !== !0 && ($.__webglTexture === void 0 && ($.__webglTexture = o.createTexture()), $.__version = I.version, r.memory.textures++);
    const ne = v.isWebGLCubeRenderTarget === !0, ae = v.isWebGLMultipleRenderTargets === !0, _e = x(v) || a;
    if (ne) {
      H.__webglFramebuffer = [];
      for (let M = 0; M < 6; M++)
        H.__webglFramebuffer[M] = o.createFramebuffer();
    } else {
      if (H.__webglFramebuffer = o.createFramebuffer(), ae)
        if (i.drawBuffers) {
          const M = v.texture;
          for (let Q = 0, ce = M.length; Q < ce; Q++) {
            const he = n.get(M[Q]);
            he.__webglTexture === void 0 && (he.__webglTexture = o.createTexture(), r.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && v.samples > 0 && Ue(v) === !1) {
        const M = ae ? I : [I];
        H.__webglMultisampledFramebuffer = o.createFramebuffer(), H.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, H.__webglMultisampledFramebuffer);
        for (let Q = 0; Q < M.length; Q++) {
          const ce = M[Q];
          H.__webglColorRenderbuffer[Q] = o.createRenderbuffer(), o.bindRenderbuffer(36161, H.__webglColorRenderbuffer[Q]);
          const he = s.convert(ce.format, ce.encoding), oe = s.convert(ce.type), fe = _(ce.internalFormat, he, oe, ce.encoding, v.isXRRenderTarget === !0), ue = je(v);
          o.renderbufferStorageMultisample(36161, ue, fe, v.width, v.height), o.framebufferRenderbuffer(36160, 36064 + Q, 36161, H.__webglColorRenderbuffer[Q]);
        }
        o.bindRenderbuffer(36161, null), v.depthBuffer && (H.__webglDepthRenderbuffer = o.createRenderbuffer(), ke(H.__webglDepthRenderbuffer, v, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (ne) {
      t.bindTexture(34067, $.__webglTexture), q(34067, I, _e);
      for (let M = 0; M < 6; M++)
        Ae(H.__webglFramebuffer[M], v, I, 36064, 34069 + M);
      S(I, _e) && D(34067), t.unbindTexture();
    } else if (ae) {
      const M = v.texture;
      for (let Q = 0, ce = M.length; Q < ce; Q++) {
        const he = M[Q], oe = n.get(he);
        t.bindTexture(3553, oe.__webglTexture), q(3553, he, _e), Ae(H.__webglFramebuffer, v, he, 36064 + Q, 3553), S(he, _e) && D(3553);
      }
      t.unbindTexture();
    } else {
      let M = 3553;
      (v.isWebGL3DRenderTarget || v.isWebGLArrayRenderTarget) && (a ? M = v.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(M, $.__webglTexture), q(M, I, _e), Ae(H.__webglFramebuffer, v, I, 36064, M), S(I, _e) && D(M), t.unbindTexture();
    }
    v.depthBuffer && be(v);
  }
  function Ze(v) {
    const I = x(v) || a, H = v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
    for (let $ = 0, ne = H.length; $ < ne; $++) {
      const ae = H[$];
      if (S(ae, I)) {
        const _e = v.isWebGLCubeRenderTarget ? 34067 : 3553, M = n.get(ae).__webglTexture;
        t.bindTexture(_e, M), D(_e), t.unbindTexture();
      }
    }
  }
  function ft(v) {
    if (a && v.samples > 0 && Ue(v) === !1) {
      const I = v.isWebGLMultipleRenderTargets ? v.texture : [v.texture], H = v.width, $ = v.height;
      let ne = 16384;
      const ae = [], _e = v.stencilBuffer ? 33306 : 36096, M = n.get(v), Q = v.isWebGLMultipleRenderTargets === !0;
      if (Q)
        for (let ce = 0; ce < I.length; ce++)
          t.bindFramebuffer(36160, M.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(36160, 36064 + ce, 36161, null), t.bindFramebuffer(36160, M.__webglFramebuffer), o.framebufferTexture2D(36009, 36064 + ce, 3553, null, 0);
      t.bindFramebuffer(36008, M.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, M.__webglFramebuffer);
      for (let ce = 0; ce < I.length; ce++) {
        ae.push(36064 + ce), v.depthBuffer && ae.push(_e);
        const he = M.__ignoreDepthValues !== void 0 ? M.__ignoreDepthValues : !1;
        if (he === !1 && (v.depthBuffer && (ne |= 256), v.stencilBuffer && (ne |= 1024)), Q && o.framebufferRenderbuffer(36008, 36064, 36161, M.__webglColorRenderbuffer[ce]), he === !0 && (o.invalidateFramebuffer(36008, [_e]), o.invalidateFramebuffer(36009, [_e])), Q) {
          const oe = n.get(I[ce]).__webglTexture;
          o.framebufferTexture2D(36009, 36064, 3553, oe, 0);
        }
        o.blitFramebuffer(0, 0, H, $, 0, 0, H, $, ne, 9728), p && o.invalidateFramebuffer(36008, ae);
      }
      if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), Q)
        for (let ce = 0; ce < I.length; ce++) {
          t.bindFramebuffer(36160, M.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(36160, 36064 + ce, 36161, M.__webglColorRenderbuffer[ce]);
          const he = n.get(I[ce]).__webglTexture;
          t.bindFramebuffer(36160, M.__webglFramebuffer), o.framebufferTexture2D(36009, 36064 + ce, 3553, he, 0);
        }
      t.bindFramebuffer(36009, M.__webglMultisampledFramebuffer);
    }
  }
  function je(v) {
    return Math.min(A, v.samples);
  }
  function Ue(v) {
    const I = n.get(v);
    return a && v.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && I.__useRenderToTexture !== !1;
  }
  function Dt(v) {
    const I = r.render.frame;
    g.get(v) !== I && (g.set(v, I), v.update());
  }
  function It(v, I) {
    const H = v.encoding, $ = v.format, ne = v.type;
    return v.isCompressedTexture === !0 || v.isVideoTexture === !0 || v.format === Pr || H !== on && (H === Se ? a === !1 ? e.has("EXT_sRGB") === !0 && $ === ct ? (v.format = Pr, v.minFilter = dt, v.generateMipmaps = !1) : I = lc.sRGBToLinear(I) : ($ !== ct || ne !== xt) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", H)), I;
  }
  this.allocateTextureUnit = U, this.resetTextureUnits = K, this.setTexture2D = X, this.setTexture2DArray = W, this.setTexture3D = O, this.setTextureCube = se, this.rebindTextures = nt, this.setupRenderTarget = Xe, this.updateRenderTargetMipmap = Ze, this.updateMultisampleRenderTarget = ft, this.setupDepthRenderbuffer = be, this.setupFrameBufferTexture = Ae, this.useMultisampledRTT = Ue;
}
function qf(o, e, t) {
  const n = t.isWebGL2;
  function i(s, r = null) {
    let a;
    if (s === xt)
      return 5121;
    if (s === wl)
      return 32819;
    if (s === Sl)
      return 32820;
    if (s === yl)
      return 5120;
    if (s === vl)
      return 5122;
    if (s === nc)
      return 5123;
    if (s === Ml)
      return 5124;
    if (s === Dn)
      return 5125;
    if (s === Ft)
      return 5126;
    if (s === an)
      return n ? 5131 : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === Bl)
      return 6406;
    if (s === ct)
      return 6408;
    if (s === Dl)
      return 6409;
    if (s === Rl)
      return 6410;
    if (s === Ln)
      return 6402;
    if (s === ui)
      return 34041;
    if (s === Tl)
      return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
    if (s === Pr)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === Pi)
      return 6403;
    if (s === Ll)
      return 36244;
    if (s === ki)
      return 33319;
    if (s === Ql)
      return 33320;
    if (s === Fl)
      return 36249;
    if (s === ys || s === Ns || s === Us || s === vs)
      if (r === Se)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (s === ys)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Ns)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Us)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === vs)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (s === ys)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Ns)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Us)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === vs)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === Br || s === ma || s === Tr || s === ba)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (s === Br)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === ma)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Tr)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === ba)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === ic)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === Dr || s === Rr)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (s === Dr)
          return r === Se ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === Rr)
          return r === Se ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === Lr || s === _a || s === xa || s === Ea || s === Ia || s === Ca || s === ya || s === va || s === Ma || s === wa || s === Sa || s === Ba || s === Ta || s === Da)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (s === Lr)
          return r === Se ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === _a)
          return r === Se ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === xa)
          return r === Se ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Ea)
          return r === Se ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Ia)
          return r === Se ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Ca)
          return r === Se ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === ya)
          return r === Se ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === va)
          return r === Se ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Ma)
          return r === Se ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === wa)
          return r === Se ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Sa)
          return r === Se ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Ba)
          return r === Se ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Ta)
          return r === Se ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Da)
          return r === Se ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === Qr)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (s === Qr)
          return r === Se ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    return s === ci ? n ? 34042 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : o[s] !== void 0 ? o[s] : null;
  }
  return { convert: i };
}
class jf extends Et {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Rn extends qe {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Yf = { type: "move" };
class Ar {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Rn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Rn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new B(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new B()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Rn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new B(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new B()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, r = null;
    const a = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        r = !0;
        for (const f of e.hand.values()) {
          const u = t.getJointPose(f, n), m = this._getHandJoint(l, f);
          u !== null && (m.matrix.fromArray(u.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.jointRadius = u.radius), m.visible = u !== null;
        }
        const h = l.joints["index-finger-tip"], A = l.joints["thumb-tip"], d = h.position.distanceTo(A.position), p = 0.02, g = 5e-3;
        l.inputState.pinching && d > p + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= p - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Yf)));
    }
    return a !== null && (a.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = r !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Rn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Kf extends ot {
  constructor(e, t, n, i, s, r, a, c, l, h) {
    if (h = h !== void 0 ? h : Ln, h !== Ln && h !== ui)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Ln && (n = Dn), n === void 0 && h === ui && (n = ci), super(null, i, s, r, a, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : at, this.minFilter = c !== void 0 ? c : at, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class Jf extends _n {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, r = null, a = "local-floor", c = null, l = null, h = null, A = null, d = null, p = null;
    const g = t.getContextAttributes();
    let f = null, u = null;
    const m = [], E = [], b = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Map(), C = new Et();
    C.layers.enable(1), C.viewport = new ze();
    const S = new Et();
    S.layers.enable(2), S.viewport = new ze();
    const D = [C, S], _ = new jf();
    _.layers.enable(1), _.layers.enable(2);
    let w = null, R = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(W) {
      let O = m[W];
      return O === void 0 && (O = new Ar(), m[W] = O), O.getTargetRaySpace();
    }, this.getControllerGrip = function(W) {
      let O = m[W];
      return O === void 0 && (O = new Ar(), m[W] = O), O.getGripSpace();
    }, this.getHand = function(W) {
      let O = m[W];
      return O === void 0 && (O = new Ar(), m[W] = O), O.getHandSpace();
    };
    function G(W) {
      const O = E.indexOf(W.inputSource);
      if (O === -1)
        return;
      const se = m[O];
      se !== void 0 && se.dispatchEvent({ type: W.type, data: W.inputSource });
    }
    function Y() {
      i.removeEventListener("select", G), i.removeEventListener("selectstart", G), i.removeEventListener("selectend", G), i.removeEventListener("squeeze", G), i.removeEventListener("squeezestart", G), i.removeEventListener("squeezeend", G), i.removeEventListener("end", Y), i.removeEventListener("inputsourceschange", P);
      for (let W = 0; W < m.length; W++) {
        const O = E[W];
        O !== null && (E[W] = null, m[W].disconnect(O));
      }
      w = null, R = null, e.setRenderTarget(f), d = null, A = null, h = null, i = null, u = null, X.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(W) {
      s = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(W) {
      a = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || r;
    }, this.setReferenceSpace = function(W) {
      c = W;
    }, this.getBaseLayer = function() {
      return A !== null ? A : d;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return p;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(W) {
      if (i = W, i !== null) {
        if (f = e.getRenderTarget(), i.addEventListener("select", G), i.addEventListener("selectstart", G), i.addEventListener("selectend", G), i.addEventListener("squeeze", G), i.addEventListener("squeezestart", G), i.addEventListener("squeezeend", G), i.addEventListener("end", Y), i.addEventListener("inputsourceschange", P), g.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const O = {
            antialias: i.renderState.layers === void 0 ? g.antialias : !0,
            alpha: g.alpha,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: s
          };
          d = new XRWebGLLayer(i, t, O), i.updateRenderState({ baseLayer: d }), u = new kn(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: ct,
              type: xt,
              encoding: e.outputEncoding,
              stencilBuffer: g.stencil
            }
          );
        } else {
          let O = null, se = null, te = null;
          g.depth && (te = g.stencil ? 35056 : 33190, O = g.stencil ? ui : Ln, se = g.stencil ? ci : Dn);
          const re = {
            colorFormat: 32856,
            depthFormat: te,
            scaleFactor: s
          };
          h = new XRWebGLBinding(i, t), A = h.createProjectionLayer(re), i.updateRenderState({ layers: [A] }), u = new kn(
            A.textureWidth,
            A.textureHeight,
            {
              format: ct,
              type: xt,
              depthTexture: new Kf(A.textureWidth, A.textureHeight, se, void 0, void 0, void 0, void 0, void 0, void 0, O),
              stencilBuffer: g.stencil,
              encoding: e.outputEncoding,
              samples: g.antialias ? 4 : 0
            }
          );
          const q = e.properties.get(u);
          q.__ignoreDepthValues = A.ignoreDepthValues;
        }
        u.isXRRenderTarget = !0, this.setFoveation(1), c = null, r = await i.requestReferenceSpace(a), X.setContext(i), X.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function P(W) {
      for (let O = 0; O < W.removed.length; O++) {
        const se = W.removed[O], te = E.indexOf(se);
        te >= 0 && (E[te] = null, m[te].disconnect(se));
      }
      for (let O = 0; O < W.added.length; O++) {
        const se = W.added[O];
        let te = E.indexOf(se);
        if (te === -1) {
          for (let q = 0; q < m.length; q++)
            if (q >= E.length) {
              E.push(se), te = q;
              break;
            } else if (E[q] === null) {
              E[q] = se, te = q;
              break;
            }
          if (te === -1)
            break;
        }
        const re = m[te];
        re && re.connect(se);
      }
    }
    const L = new B(), N = new B();
    function J(W, O, se) {
      L.setFromMatrixPosition(O.matrixWorld), N.setFromMatrixPosition(se.matrixWorld);
      const te = L.distanceTo(N), re = O.projectionMatrix.elements, q = se.projectionMatrix.elements, Be = re[14] / (re[10] - 1), de = re[14] / (re[10] + 1), me = (re[9] + 1) / re[5], Ae = (re[9] - 1) / re[5], ke = (re[8] - 1) / re[0], Ie = (q[8] + 1) / q[0], be = Be * ke, nt = Be * Ie, Xe = te / (-ke + Ie), Ze = Xe * -ke;
      O.matrixWorld.decompose(W.position, W.quaternion, W.scale), W.translateX(Ze), W.translateZ(Xe), W.matrixWorld.compose(W.position, W.quaternion, W.scale), W.matrixWorldInverse.copy(W.matrixWorld).invert();
      const ft = Be + Xe, je = de + Xe, Ue = be - Ze, Dt = nt + (te - Ze), It = me * de / je * ft, v = Ae * de / je * ft;
      W.projectionMatrix.makePerspective(Ue, Dt, It, v, ft, je);
    }
    function K(W, O) {
      O === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(O.matrixWorld, W.matrix), W.matrixWorldInverse.copy(W.matrixWorld).invert();
    }
    this.updateCamera = function(W) {
      if (i === null)
        return;
      _.near = S.near = C.near = W.near, _.far = S.far = C.far = W.far, (w !== _.near || R !== _.far) && (i.updateRenderState({
        depthNear: _.near,
        depthFar: _.far
      }), w = _.near, R = _.far);
      const O = W.parent, se = _.cameras;
      K(_, O);
      for (let re = 0; re < se.length; re++)
        K(se[re], O);
      _.matrixWorld.decompose(_.position, _.quaternion, _.scale), W.matrix.copy(_.matrix), W.matrix.decompose(W.position, W.quaternion, W.scale);
      const te = W.children;
      for (let re = 0, q = te.length; re < q; re++)
        te[re].updateMatrixWorld(!0);
      se.length === 2 ? J(_, C, S) : _.projectionMatrix.copy(C.projectionMatrix);
    }, this.getCamera = function() {
      return _;
    }, this.getFoveation = function() {
      if (A !== null)
        return A.fixedFoveation;
      if (d !== null)
        return d.fixedFoveation;
    }, this.setFoveation = function(W) {
      A !== null && (A.fixedFoveation = W), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = W);
    }, this.getPlanes = function() {
      return b;
    };
    let U = null;
    function ee(W, O) {
      if (l = O.getViewerPose(c || r), p = O, l !== null) {
        const se = l.views;
        d !== null && (e.setRenderTargetFramebuffer(u, d.framebuffer), e.setRenderTarget(u));
        let te = !1;
        se.length !== _.cameras.length && (_.cameras.length = 0, te = !0);
        for (let re = 0; re < se.length; re++) {
          const q = se[re];
          let Be = null;
          if (d !== null)
            Be = d.getViewport(q);
          else {
            const me = h.getViewSubImage(A, q);
            Be = me.viewport, re === 0 && (e.setRenderTargetTextures(
              u,
              me.colorTexture,
              A.ignoreDepthValues ? void 0 : me.depthStencilTexture
            ), e.setRenderTarget(u));
          }
          let de = D[re];
          de === void 0 && (de = new Et(), de.layers.enable(re), de.viewport = new ze(), D[re] = de), de.matrix.fromArray(q.transform.matrix), de.projectionMatrix.fromArray(q.projectionMatrix), de.viewport.set(Be.x, Be.y, Be.width, Be.height), re === 0 && _.matrix.copy(de.matrix), te === !0 && _.cameras.push(de);
        }
      }
      for (let se = 0; se < m.length; se++) {
        const te = E[se], re = m[se];
        te !== null && re !== void 0 && re.update(te, O, c || r);
      }
      if (U && U(W, O), O.detectedPlanes) {
        n.dispatchEvent({ type: "planesdetected", data: O.detectedPlanes });
        let se = null;
        for (const te of b)
          O.detectedPlanes.has(te) || (se === null && (se = []), se.push(te));
        if (se !== null)
          for (const te of se)
            b.delete(te), x.delete(te), n.dispatchEvent({ type: "planeremoved", data: te });
        for (const te of O.detectedPlanes)
          if (!b.has(te))
            b.add(te), x.set(te, O.lastChangedTime), n.dispatchEvent({ type: "planeadded", data: te });
          else {
            const re = x.get(te);
            te.lastChangedTime > re && (x.set(te, te.lastChangedTime), n.dispatchEvent({ type: "planechanged", data: te }));
          }
      }
      p = null;
    }
    const X = new mc();
    X.setAnimationLoop(ee), this.setAnimationLoop = function(W) {
      U = W;
    }, this.dispose = function() {
    };
  }
}
function Xf(o, e) {
  function t(f, u) {
    u.color.getRGB(f.fogColor.value, pc(o)), u.isFog ? (f.fogNear.value = u.near, f.fogFar.value = u.far) : u.isFogExp2 && (f.fogDensity.value = u.density);
  }
  function n(f, u, m, E, b) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial ? i(f, u) : u.isMeshToonMaterial ? (i(f, u), h(f, u)) : u.isMeshPhongMaterial ? (i(f, u), l(f, u)) : u.isMeshStandardMaterial ? (i(f, u), A(f, u), u.isMeshPhysicalMaterial && d(f, u, b)) : u.isMeshMatcapMaterial ? (i(f, u), p(f, u)) : u.isMeshDepthMaterial ? i(f, u) : u.isMeshDistanceMaterial ? (i(f, u), g(f, u)) : u.isMeshNormalMaterial ? i(f, u) : u.isLineBasicMaterial ? (s(f, u), u.isLineDashedMaterial && r(f, u)) : u.isPointsMaterial ? a(f, u, m, E) : u.isSpriteMaterial ? c(f, u) : u.isShadowMaterial ? (f.color.value.copy(u.color), f.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function i(f, u) {
    f.opacity.value = u.opacity, u.color && f.diffuse.value.copy(u.color), u.emissive && f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (f.map.value = u.map), u.alphaMap && (f.alphaMap.value = u.alphaMap), u.bumpMap && (f.bumpMap.value = u.bumpMap, f.bumpScale.value = u.bumpScale, u.side === Bt && (f.bumpScale.value *= -1)), u.displacementMap && (f.displacementMap.value = u.displacementMap, f.displacementScale.value = u.displacementScale, f.displacementBias.value = u.displacementBias), u.emissiveMap && (f.emissiveMap.value = u.emissiveMap), u.normalMap && (f.normalMap.value = u.normalMap, f.normalScale.value.copy(u.normalScale), u.side === Bt && f.normalScale.value.negate()), u.specularMap && (f.specularMap.value = u.specularMap), u.alphaTest > 0 && (f.alphaTest.value = u.alphaTest);
    const m = e.get(u).envMap;
    if (m && (f.envMap.value = m, f.flipEnvMap.value = m.isCubeTexture && m.isRenderTargetTexture === !1 ? -1 : 1, f.reflectivity.value = u.reflectivity, f.ior.value = u.ior, f.refractionRatio.value = u.refractionRatio), u.lightMap) {
      f.lightMap.value = u.lightMap;
      const x = o.physicallyCorrectLights !== !0 ? Math.PI : 1;
      f.lightMapIntensity.value = u.lightMapIntensity * x;
    }
    u.aoMap && (f.aoMap.value = u.aoMap, f.aoMapIntensity.value = u.aoMapIntensity);
    let E;
    u.map ? E = u.map : u.specularMap ? E = u.specularMap : u.displacementMap ? E = u.displacementMap : u.normalMap ? E = u.normalMap : u.bumpMap ? E = u.bumpMap : u.roughnessMap ? E = u.roughnessMap : u.metalnessMap ? E = u.metalnessMap : u.alphaMap ? E = u.alphaMap : u.emissiveMap ? E = u.emissiveMap : u.clearcoatMap ? E = u.clearcoatMap : u.clearcoatNormalMap ? E = u.clearcoatNormalMap : u.clearcoatRoughnessMap ? E = u.clearcoatRoughnessMap : u.iridescenceMap ? E = u.iridescenceMap : u.iridescenceThicknessMap ? E = u.iridescenceThicknessMap : u.specularIntensityMap ? E = u.specularIntensityMap : u.specularColorMap ? E = u.specularColorMap : u.transmissionMap ? E = u.transmissionMap : u.thicknessMap ? E = u.thicknessMap : u.sheenColorMap ? E = u.sheenColorMap : u.sheenRoughnessMap && (E = u.sheenRoughnessMap), E !== void 0 && (E.isWebGLRenderTarget && (E = E.texture), E.matrixAutoUpdate === !0 && E.updateMatrix(), f.uvTransform.value.copy(E.matrix));
    let b;
    u.aoMap ? b = u.aoMap : u.lightMap && (b = u.lightMap), b !== void 0 && (b.isWebGLRenderTarget && (b = b.texture), b.matrixAutoUpdate === !0 && b.updateMatrix(), f.uv2Transform.value.copy(b.matrix));
  }
  function s(f, u) {
    f.diffuse.value.copy(u.color), f.opacity.value = u.opacity;
  }
  function r(f, u) {
    f.dashSize.value = u.dashSize, f.totalSize.value = u.dashSize + u.gapSize, f.scale.value = u.scale;
  }
  function a(f, u, m, E) {
    f.diffuse.value.copy(u.color), f.opacity.value = u.opacity, f.size.value = u.size * m, f.scale.value = E * 0.5, u.map && (f.map.value = u.map), u.alphaMap && (f.alphaMap.value = u.alphaMap), u.alphaTest > 0 && (f.alphaTest.value = u.alphaTest);
    let b;
    u.map ? b = u.map : u.alphaMap && (b = u.alphaMap), b !== void 0 && (b.matrixAutoUpdate === !0 && b.updateMatrix(), f.uvTransform.value.copy(b.matrix));
  }
  function c(f, u) {
    f.diffuse.value.copy(u.color), f.opacity.value = u.opacity, f.rotation.value = u.rotation, u.map && (f.map.value = u.map), u.alphaMap && (f.alphaMap.value = u.alphaMap), u.alphaTest > 0 && (f.alphaTest.value = u.alphaTest);
    let m;
    u.map ? m = u.map : u.alphaMap && (m = u.alphaMap), m !== void 0 && (m.matrixAutoUpdate === !0 && m.updateMatrix(), f.uvTransform.value.copy(m.matrix));
  }
  function l(f, u) {
    f.specular.value.copy(u.specular), f.shininess.value = Math.max(u.shininess, 1e-4);
  }
  function h(f, u) {
    u.gradientMap && (f.gradientMap.value = u.gradientMap);
  }
  function A(f, u) {
    f.roughness.value = u.roughness, f.metalness.value = u.metalness, u.roughnessMap && (f.roughnessMap.value = u.roughnessMap), u.metalnessMap && (f.metalnessMap.value = u.metalnessMap), e.get(u).envMap && (f.envMapIntensity.value = u.envMapIntensity);
  }
  function d(f, u, m) {
    f.ior.value = u.ior, u.sheen > 0 && (f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), f.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (f.sheenColorMap.value = u.sheenColorMap), u.sheenRoughnessMap && (f.sheenRoughnessMap.value = u.sheenRoughnessMap)), u.clearcoat > 0 && (f.clearcoat.value = u.clearcoat, f.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (f.clearcoatMap.value = u.clearcoatMap), u.clearcoatRoughnessMap && (f.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap), u.clearcoatNormalMap && (f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), f.clearcoatNormalMap.value = u.clearcoatNormalMap, u.side === Bt && f.clearcoatNormalScale.value.negate())), u.iridescence > 0 && (f.iridescence.value = u.iridescence, f.iridescenceIOR.value = u.iridescenceIOR, f.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], f.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (f.iridescenceMap.value = u.iridescenceMap), u.iridescenceThicknessMap && (f.iridescenceThicknessMap.value = u.iridescenceThicknessMap)), u.transmission > 0 && (f.transmission.value = u.transmission, f.transmissionSamplerMap.value = m.texture, f.transmissionSamplerSize.value.set(m.width, m.height), u.transmissionMap && (f.transmissionMap.value = u.transmissionMap), f.thickness.value = u.thickness, u.thicknessMap && (f.thicknessMap.value = u.thicknessMap), f.attenuationDistance.value = u.attenuationDistance, f.attenuationColor.value.copy(u.attenuationColor)), f.specularIntensity.value = u.specularIntensity, f.specularColor.value.copy(u.specularColor), u.specularIntensityMap && (f.specularIntensityMap.value = u.specularIntensityMap), u.specularColorMap && (f.specularColorMap.value = u.specularColorMap);
  }
  function p(f, u) {
    u.matcap && (f.matcap.value = u.matcap);
  }
  function g(f, u) {
    f.referencePosition.value.copy(u.referencePosition), f.nearDistance.value = u.nearDistance, f.farDistance.value = u.farDistance;
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function Zf(o, e, t, n) {
  let i = {}, s = {}, r = [];
  const a = t.isWebGL2 ? o.getParameter(35375) : 0;
  function c(E, b) {
    const x = b.program;
    n.uniformBlockBinding(E, x);
  }
  function l(E, b) {
    let x = i[E.id];
    x === void 0 && (g(E), x = h(E), i[E.id] = x, E.addEventListener("dispose", u));
    const C = b.program;
    n.updateUBOMapping(E, C);
    const S = e.render.frame;
    s[E.id] !== S && (d(E), s[E.id] = S);
  }
  function h(E) {
    const b = A();
    E.__bindingPointIndex = b;
    const x = o.createBuffer(), C = E.__size, S = E.usage;
    return o.bindBuffer(35345, x), o.bufferData(35345, C, S), o.bindBuffer(35345, null), o.bindBufferBase(35345, b, x), x;
  }
  function A() {
    for (let E = 0; E < a; E++)
      if (r.indexOf(E) === -1)
        return r.push(E), E;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(E) {
    const b = i[E.id], x = E.uniforms, C = E.__cache;
    o.bindBuffer(35345, b);
    for (let S = 0, D = x.length; S < D; S++) {
      const _ = x[S];
      if (p(_, S, C) === !0) {
        const w = _.__offset, R = Array.isArray(_.value) ? _.value : [_.value];
        let G = 0;
        for (let Y = 0; Y < R.length; Y++) {
          const P = R[Y], L = f(P);
          typeof P == "number" ? (_.__data[0] = P, o.bufferSubData(35345, w + G, _.__data)) : P.isMatrix3 ? (_.__data[0] = P.elements[0], _.__data[1] = P.elements[1], _.__data[2] = P.elements[2], _.__data[3] = P.elements[0], _.__data[4] = P.elements[3], _.__data[5] = P.elements[4], _.__data[6] = P.elements[5], _.__data[7] = P.elements[0], _.__data[8] = P.elements[6], _.__data[9] = P.elements[7], _.__data[10] = P.elements[8], _.__data[11] = P.elements[0]) : (P.toArray(_.__data, G), G += L.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        o.bufferSubData(35345, w, _.__data);
      }
    }
    o.bindBuffer(35345, null);
  }
  function p(E, b, x) {
    const C = E.value;
    if (x[b] === void 0) {
      if (typeof C == "number")
        x[b] = C;
      else {
        const S = Array.isArray(C) ? C : [C], D = [];
        for (let _ = 0; _ < S.length; _++)
          D.push(S[_].clone());
        x[b] = D;
      }
      return !0;
    } else if (typeof C == "number") {
      if (x[b] !== C)
        return x[b] = C, !0;
    } else {
      const S = Array.isArray(x[b]) ? x[b] : [x[b]], D = Array.isArray(C) ? C : [C];
      for (let _ = 0; _ < S.length; _++) {
        const w = S[_];
        if (w.equals(D[_]) === !1)
          return w.copy(D[_]), !0;
      }
    }
    return !1;
  }
  function g(E) {
    const b = E.uniforms;
    let x = 0;
    const C = 16;
    let S = 0;
    for (let D = 0, _ = b.length; D < _; D++) {
      const w = b[D], R = {
        boundary: 0,
        storage: 0
      }, G = Array.isArray(w.value) ? w.value : [w.value];
      for (let Y = 0, P = G.length; Y < P; Y++) {
        const L = G[Y], N = f(L);
        R.boundary += N.boundary, R.storage += N.storage;
      }
      if (w.__data = new Float32Array(R.storage / Float32Array.BYTES_PER_ELEMENT), w.__offset = x, D > 0) {
        S = x % C;
        const Y = C - S;
        S !== 0 && Y - R.boundary < 0 && (x += C - S, w.__offset = x);
      }
      x += R.storage;
    }
    return S = x % C, S > 0 && (x += C - S), E.__size = x, E.__cache = {}, this;
  }
  function f(E) {
    const b = {
      boundary: 0,
      storage: 0
    };
    return typeof E == "number" ? (b.boundary = 4, b.storage = 4) : E.isVector2 ? (b.boundary = 8, b.storage = 8) : E.isVector3 || E.isColor ? (b.boundary = 16, b.storage = 12) : E.isVector4 ? (b.boundary = 16, b.storage = 16) : E.isMatrix3 ? (b.boundary = 48, b.storage = 48) : E.isMatrix4 ? (b.boundary = 64, b.storage = 64) : E.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", E), b;
  }
  function u(E) {
    const b = E.target;
    b.removeEventListener("dispose", u);
    const x = r.indexOf(b.__bindingPointIndex);
    r.splice(x, 1), o.deleteBuffer(i[b.id]), delete i[b.id], delete s[b.id];
  }
  function m() {
    for (const E in i)
      o.deleteBuffer(i[E]);
    r = [], i = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: m
  };
}
function $f() {
  const o = Vi("canvas");
  return o.style.display = "block", o;
}
function Ic(o = {}) {
  this.isWebGLRenderer = !0;
  const e = o.canvas !== void 0 ? o.canvas : $f(), t = o.context !== void 0 ? o.context : null, n = o.depth !== void 0 ? o.depth : !0, i = o.stencil !== void 0 ? o.stencil : !0, s = o.antialias !== void 0 ? o.antialias : !1, r = o.premultipliedAlpha !== void 0 ? o.premultipliedAlpha : !0, a = o.preserveDrawingBuffer !== void 0 ? o.preserveDrawingBuffer : !1, c = o.powerPreference !== void 0 ? o.powerPreference : "default", l = o.failIfMajorPerformanceCaveat !== void 0 ? o.failIfMajorPerformanceCaveat : !1;
  let h;
  t !== null ? h = t.getContextAttributes().alpha : h = o.alpha !== void 0 ? o.alpha : !1;
  let A = null, d = null;
  const p = [], g = [];
  this.domElement = e, this.debug = {
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = on, this.physicallyCorrectLights = !1, this.toneMapping = rn, this.toneMappingExposure = 1;
  const f = this;
  let u = !1, m = 0, E = 0, b = null, x = -1, C = null;
  const S = new ze(), D = new ze();
  let _ = null, w = e.width, R = e.height, G = 1, Y = null, P = null;
  const L = new ze(0, 0, w, R), N = new ze(0, 0, w, R);
  let J = !1;
  const K = new Kr();
  let U = !1, ee = !1, X = null;
  const W = new we(), O = new xe(), se = new B(), te = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function re() {
    return b === null ? G : 1;
  }
  let q = t;
  function Be(y, k) {
    for (let V = 0; V < y.length; V++) {
      const F = y[V], j = e.getContext(F, k);
      if (j !== null)
        return j;
    }
    return null;
  }
  try {
    const y = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: s,
      premultipliedAlpha: r,
      preserveDrawingBuffer: a,
      powerPreference: c,
      failIfMajorPerformanceCaveat: l
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Wr}`), e.addEventListener("webglcontextlost", fe, !1), e.addEventListener("webglcontextrestored", ue, !1), e.addEventListener("webglcontextcreationerror", Te, !1), q === null) {
      const k = ["webgl2", "webgl", "experimental-webgl"];
      if (f.isWebGL1Renderer === !0 && k.shift(), q = Be(k, y), q === null)
        throw Be(k) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    q.getShaderPrecisionFormat === void 0 && (q.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (y) {
    throw console.error("THREE.WebGLRenderer: " + y.message), y;
  }
  let de, me, Ae, ke, Ie, be, nt, Xe, Ze, ft, je, Ue, Dt, It, v, I, H, $, ne, ae, _e, M, Q, ce;
  function he() {
    de = new lu(q), me = new iu(q, de, o), de.init(me), M = new qf(q, de, me), Ae = new Vf(q, de, me), ke = new du(), Ie = new Tf(), be = new Wf(q, de, Ae, Ie, me, M, ke), nt = new ru(f), Xe = new cu(f), Ze = new Eh(q, me), Q = new tu(q, de, Ze, me), ft = new hu(q, Ze, ke, Q), je = new gu(q, ft, Ze, ke), ne = new pu(q, me, be), I = new su(Ie), Ue = new Bf(f, nt, Xe, de, me, Q, I), Dt = new Xf(f, Ie), It = new Rf(), v = new Nf(de, me), $ = new eu(f, nt, Xe, Ae, je, h, r), H = new zf(f, je, me), ce = new Zf(q, ke, me, Ae), ae = new nu(q, de, ke, me), _e = new Au(q, de, ke, me), ke.programs = Ue.programs, f.capabilities = me, f.extensions = de, f.properties = Ie, f.renderLists = It, f.shadowMap = H, f.state = Ae, f.info = ke;
  }
  he();
  const oe = new Jf(f, q);
  this.xr = oe, this.getContext = function() {
    return q;
  }, this.getContextAttributes = function() {
    return q.getContextAttributes();
  }, this.forceContextLoss = function() {
    const y = de.get("WEBGL_lose_context");
    y && y.loseContext();
  }, this.forceContextRestore = function() {
    const y = de.get("WEBGL_lose_context");
    y && y.restoreContext();
  }, this.getPixelRatio = function() {
    return G;
  }, this.setPixelRatio = function(y) {
    y !== void 0 && (G = y, this.setSize(w, R, !1));
  }, this.getSize = function(y) {
    return y.set(w, R);
  }, this.setSize = function(y, k, V) {
    if (oe.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    w = y, R = k, e.width = Math.floor(y * G), e.height = Math.floor(k * G), V !== !1 && (e.style.width = y + "px", e.style.height = k + "px"), this.setViewport(0, 0, y, k);
  }, this.getDrawingBufferSize = function(y) {
    return y.set(w * G, R * G).floor();
  }, this.setDrawingBufferSize = function(y, k, V) {
    w = y, R = k, G = V, e.width = Math.floor(y * V), e.height = Math.floor(k * V), this.setViewport(0, 0, y, k);
  }, this.getCurrentViewport = function(y) {
    return y.copy(S);
  }, this.getViewport = function(y) {
    return y.copy(L);
  }, this.setViewport = function(y, k, V, F) {
    y.isVector4 ? L.set(y.x, y.y, y.z, y.w) : L.set(y, k, V, F), Ae.viewport(S.copy(L).multiplyScalar(G).floor());
  }, this.getScissor = function(y) {
    return y.copy(N);
  }, this.setScissor = function(y, k, V, F) {
    y.isVector4 ? N.set(y.x, y.y, y.z, y.w) : N.set(y, k, V, F), Ae.scissor(D.copy(N).multiplyScalar(G).floor());
  }, this.getScissorTest = function() {
    return J;
  }, this.setScissorTest = function(y) {
    Ae.setScissorTest(J = y);
  }, this.setOpaqueSort = function(y) {
    Y = y;
  }, this.setTransparentSort = function(y) {
    P = y;
  }, this.getClearColor = function(y) {
    return y.copy($.getClearColor());
  }, this.setClearColor = function() {
    $.setClearColor.apply($, arguments);
  }, this.getClearAlpha = function() {
    return $.getClearAlpha();
  }, this.setClearAlpha = function() {
    $.setClearAlpha.apply($, arguments);
  }, this.clear = function(y = !0, k = !0, V = !0) {
    let F = 0;
    y && (F |= 16384), k && (F |= 256), V && (F |= 1024), q.clear(F);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", fe, !1), e.removeEventListener("webglcontextrestored", ue, !1), e.removeEventListener("webglcontextcreationerror", Te, !1), It.dispose(), v.dispose(), Ie.dispose(), nt.dispose(), Xe.dispose(), je.dispose(), Q.dispose(), ce.dispose(), Ue.dispose(), oe.dispose(), oe.removeEventListener("sessionstart", le), oe.removeEventListener("sessionend", pe), X && (X.dispose(), X = null), Ne.stop();
  };
  function fe(y) {
    y.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), u = !0;
  }
  function ue() {
    console.log("THREE.WebGLRenderer: Context Restored."), u = !1;
    const y = ke.autoReset, k = H.enabled, V = H.autoUpdate, F = H.needsUpdate, j = H.type;
    he(), ke.autoReset = y, H.enabled = k, H.autoUpdate = V, H.needsUpdate = F, H.type = j;
  }
  function Te(y) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", y.statusMessage);
  }
  function De(y) {
    const k = y.target;
    k.removeEventListener("dispose", De), Oe(k);
  }
  function Oe(y) {
    T(y), Ie.remove(y);
  }
  function T(y) {
    const k = Ie.get(y).programs;
    k !== void 0 && (k.forEach(function(V) {
      Ue.releaseProgram(V);
    }), y.isShaderMaterial && Ue.releaseShaderCache(y));
  }
  this.renderBufferDirect = function(y, k, V, F, j, ge) {
    k === null && (k = te);
    const Ee = j.isMesh && j.matrixWorld.determinant() < 0, ve = qc(y, k, V, F, j);
    Ae.setMaterial(F, Ee);
    let Me = V.index, Pe = 1;
    F.wireframe === !0 && (Me = ft.getWireframeAttribute(V), Pe = 2);
    const Re = V.drawRange, Le = V.attributes.position;
    let Ye = Re.start * Pe, Ct = (Re.start + Re.count) * Pe;
    ge !== null && (Ye = Math.max(Ye, ge.start * Pe), Ct = Math.min(Ct, (ge.start + ge.count) * Pe)), Me !== null ? (Ye = Math.max(Ye, 0), Ct = Math.min(Ct, Me.count)) : Le != null && (Ye = Math.max(Ye, 0), Ct = Math.min(Ct, Le.count));
    const Yt = Ct - Ye;
    if (Yt < 0 || Yt === 1 / 0)
      return;
    Q.setup(j, F, ve, V, Me);
    let In, Ke = ae;
    if (Me !== null && (In = Ze.get(Me), Ke = _e, Ke.setIndex(In)), j.isMesh)
      F.wireframe === !0 ? (Ae.setLineWidth(F.wireframeLinewidth * re()), Ke.setMode(1)) : Ke.setMode(4);
    else if (j.isLine) {
      let Qe = F.linewidth;
      Qe === void 0 && (Qe = 1), Ae.setLineWidth(Qe * re()), j.isLineSegments ? Ke.setMode(1) : j.isLineLoop ? Ke.setMode(2) : Ke.setMode(3);
    } else
      j.isPoints ? Ke.setMode(0) : j.isSprite && Ke.setMode(4);
    if (j.isInstancedMesh)
      Ke.renderInstances(Ye, Yt, j.count);
    else if (V.isInstancedBufferGeometry) {
      const Qe = V._maxInstanceCount !== void 0 ? V._maxInstanceCount : 1 / 0, Qs = Math.min(V.instanceCount, Qe);
      Ke.renderInstances(Ye, Yt, Qs);
    } else
      Ke.render(Ye, Yt);
  }, this.compile = function(y, k) {
    function V(F, j, ge) {
      F.transparent === !0 && F.side === Zi ? (F.side = Bt, F.needsUpdate = !0, Rt(F, j, ge), F.side = mn, F.needsUpdate = !0, Rt(F, j, ge), F.side = Zi) : Rt(F, j, ge);
    }
    d = v.get(y), d.init(), g.push(d), y.traverseVisible(function(F) {
      F.isLight && F.layers.test(k.layers) && (d.pushLight(F), F.castShadow && d.pushShadow(F));
    }), d.setupLights(f.physicallyCorrectLights), y.traverse(function(F) {
      const j = F.material;
      if (j)
        if (Array.isArray(j))
          for (let ge = 0; ge < j.length; ge++) {
            const Ee = j[ge];
            V(Ee, y, F);
          }
        else
          V(j, y, F);
    }), g.pop(), d = null;
  };
  let z = null;
  function Z(y) {
    z && z(y);
  }
  function le() {
    Ne.stop();
  }
  function pe() {
    Ne.start();
  }
  const Ne = new mc();
  Ne.setAnimationLoop(Z), typeof self < "u" && Ne.setContext(self), this.setAnimationLoop = function(y) {
    z = y, oe.setAnimationLoop(y), y === null ? Ne.stop() : Ne.start();
  }, oe.addEventListener("sessionstart", le), oe.addEventListener("sessionend", pe), this.render = function(y, k) {
    if (k !== void 0 && k.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (u === !0)
      return;
    y.matrixWorldAutoUpdate === !0 && y.updateMatrixWorld(), k.parent === null && k.matrixWorldAutoUpdate === !0 && k.updateMatrixWorld(), oe.enabled === !0 && oe.isPresenting === !0 && (oe.cameraAutoUpdate === !0 && oe.updateCamera(k), k = oe.getCamera()), y.isScene === !0 && y.onBeforeRender(f, y, k, b), d = v.get(y, g.length), d.init(), g.push(d), W.multiplyMatrices(k.projectionMatrix, k.matrixWorldInverse), K.setFromProjectionMatrix(W), ee = this.localClippingEnabled, U = I.init(this.clippingPlanes, ee, k), A = It.get(y, p.length), A.init(), p.push(A), it(y, k, 0, f.sortObjects), A.finish(), f.sortObjects === !0 && A.sort(Y, P), U === !0 && I.beginShadows();
    const V = d.state.shadowsArray;
    if (H.render(V, y, k), U === !0 && I.endShadows(), this.info.autoReset === !0 && this.info.reset(), $.render(A, y), d.setupLights(f.physicallyCorrectLights), k.isArrayCamera) {
      const F = k.cameras;
      for (let j = 0, ge = F.length; j < ge; j++) {
        const Ee = F[j];
        ht(A, y, Ee, Ee.viewport);
      }
    } else
      ht(A, y, k);
    b !== null && (be.updateMultisampleRenderTarget(b), be.updateRenderTargetMipmap(b)), y.isScene === !0 && y.onAfterRender(f, y, k), Q.resetDefaultState(), x = -1, C = null, g.pop(), g.length > 0 ? d = g[g.length - 1] : d = null, p.pop(), p.length > 0 ? A = p[p.length - 1] : A = null;
  };
  function it(y, k, V, F) {
    if (y.visible === !1)
      return;
    if (y.layers.test(k.layers)) {
      if (y.isGroup)
        V = y.renderOrder;
      else if (y.isLOD)
        y.autoUpdate === !0 && y.update(k);
      else if (y.isLight)
        d.pushLight(y), y.castShadow && d.pushShadow(y);
      else if (y.isSprite) {
        if (!y.frustumCulled || K.intersectsSprite(y)) {
          F && se.setFromMatrixPosition(y.matrixWorld).applyMatrix4(W);
          const Ee = je.update(y), ve = y.material;
          ve.visible && A.push(y, Ee, ve, V, se.z, null);
        }
      } else if ((y.isMesh || y.isLine || y.isPoints) && (y.isSkinnedMesh && y.skeleton.frame !== ke.render.frame && (y.skeleton.update(), y.skeleton.frame = ke.render.frame), !y.frustumCulled || K.intersectsObject(y))) {
        F && se.setFromMatrixPosition(y.matrixWorld).applyMatrix4(W);
        const Ee = je.update(y), ve = y.material;
        if (Array.isArray(ve)) {
          const Me = Ee.groups;
          for (let Pe = 0, Re = Me.length; Pe < Re; Pe++) {
            const Le = Me[Pe], Ye = ve[Le.materialIndex];
            Ye && Ye.visible && A.push(y, Ee, Ye, V, se.z, Le);
          }
        } else
          ve.visible && A.push(y, Ee, ve, V, se.z, null);
      }
    }
    const ge = y.children;
    for (let Ee = 0, ve = ge.length; Ee < ve; Ee++)
      it(ge[Ee], k, V, F);
  }
  function ht(y, k, V, F) {
    const j = y.opaque, ge = y.transmissive, Ee = y.transparent;
    d.setupLightsView(V), ge.length > 0 && En(j, k, V), F && Ae.viewport(S.copy(F)), j.length > 0 && We(j, k, V), ge.length > 0 && We(ge, k, V), Ee.length > 0 && We(Ee, k, V), Ae.buffers.depth.setTest(!0), Ae.buffers.depth.setMask(!0), Ae.buffers.color.setMask(!0), Ae.setPolygonOffset(!1);
  }
  function En(y, k, V) {
    const F = me.isWebGL2;
    X === null && (X = new kn(1, 1, {
      generateMipmaps: !0,
      type: de.has("EXT_color_buffer_half_float") ? an : xt,
      minFilter: bn,
      samples: F && s === !0 ? 4 : 0
    })), f.getDrawingBufferSize(O), F ? X.setSize(O.x, O.y) : X.setSize(Bs(O.x), Bs(O.y));
    const j = f.getRenderTarget();
    f.setRenderTarget(X), f.clear();
    const ge = f.toneMapping;
    f.toneMapping = rn, We(y, k, V), f.toneMapping = ge, be.updateMultisampleRenderTarget(X), be.updateRenderTargetMipmap(X), f.setRenderTarget(j);
  }
  function We(y, k, V) {
    const F = k.isScene === !0 ? k.overrideMaterial : null;
    for (let j = 0, ge = y.length; j < ge; j++) {
      const Ee = y[j], ve = Ee.object, Me = Ee.geometry, Pe = F === null ? Ee.material : F, Re = Ee.group;
      ve.layers.test(V.layers) && jt(ve, k, V, Me, Pe, Re);
    }
  }
  function jt(y, k, V, F, j, ge) {
    y.onBeforeRender(f, k, V, F, j, ge), y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse, y.matrixWorld), y.normalMatrix.getNormalMatrix(y.modelViewMatrix), j.onBeforeRender(f, k, V, F, y, ge), j.transparent === !0 && j.side === Zi ? (j.side = Bt, j.needsUpdate = !0, f.renderBufferDirect(V, k, F, j, y, ge), j.side = mn, j.needsUpdate = !0, f.renderBufferDirect(V, k, F, j, y, ge), j.side = Zi) : f.renderBufferDirect(V, k, F, j, y, ge), y.onAfterRender(f, k, V, F, j, ge);
  }
  function Rt(y, k, V) {
    k.isScene !== !0 && (k = te);
    const F = Ie.get(y), j = d.state.lights, ge = d.state.shadowsArray, Ee = j.state.version, ve = Ue.getParameters(y, j.state, ge, k, V), Me = Ue.getProgramCacheKey(ve);
    let Pe = F.programs;
    F.environment = y.isMeshStandardMaterial ? k.environment : null, F.fog = k.fog, F.envMap = (y.isMeshStandardMaterial ? Xe : nt).get(y.envMap || F.environment), Pe === void 0 && (y.addEventListener("dispose", De), Pe = /* @__PURE__ */ new Map(), F.programs = Pe);
    let Re = Pe.get(Me);
    if (Re !== void 0) {
      if (F.currentProgram === Re && F.lightsStateVersion === Ee)
        return ca(y, ve), Re;
    } else
      ve.uniforms = Ue.getUniforms(y), y.onBuild(V, ve, f), y.onBeforeCompile(ve, f), Re = Ue.acquireProgram(ve, Me), Pe.set(Me, Re), F.uniforms = ve.uniforms;
    const Le = F.uniforms;
    (!y.isShaderMaterial && !y.isRawShaderMaterial || y.clipping === !0) && (Le.clippingPlanes = I.uniform), ca(y, ve), F.needsLights = Yc(y), F.lightsStateVersion = Ee, F.needsLights && (Le.ambientLightColor.value = j.state.ambient, Le.lightProbe.value = j.state.probe, Le.directionalLights.value = j.state.directional, Le.directionalLightShadows.value = j.state.directionalShadow, Le.spotLights.value = j.state.spot, Le.spotLightShadows.value = j.state.spotShadow, Le.rectAreaLights.value = j.state.rectArea, Le.ltc_1.value = j.state.rectAreaLTC1, Le.ltc_2.value = j.state.rectAreaLTC2, Le.pointLights.value = j.state.point, Le.pointLightShadows.value = j.state.pointShadow, Le.hemisphereLights.value = j.state.hemi, Le.directionalShadowMap.value = j.state.directionalShadowMap, Le.directionalShadowMatrix.value = j.state.directionalShadowMatrix, Le.spotShadowMap.value = j.state.spotShadowMap, Le.spotLightMatrix.value = j.state.spotLightMatrix, Le.spotLightMap.value = j.state.spotLightMap, Le.pointShadowMap.value = j.state.pointShadowMap, Le.pointShadowMatrix.value = j.state.pointShadowMatrix);
    const Ye = Re.getUniforms(), Ct = ws.seqWithValue(Ye.seq, Le);
    return F.currentProgram = Re, F.uniformsList = Ct, Re;
  }
  function ca(y, k) {
    const V = Ie.get(y);
    V.outputEncoding = k.outputEncoding, V.instancing = k.instancing, V.skinning = k.skinning, V.morphTargets = k.morphTargets, V.morphNormals = k.morphNormals, V.morphColors = k.morphColors, V.morphTargetsCount = k.morphTargetsCount, V.numClippingPlanes = k.numClippingPlanes, V.numIntersection = k.numClipIntersection, V.vertexAlphas = k.vertexAlphas, V.vertexTangents = k.vertexTangents, V.toneMapping = k.toneMapping;
  }
  function qc(y, k, V, F, j) {
    k.isScene !== !0 && (k = te), be.resetTextureUnits();
    const ge = k.fog, Ee = F.isMeshStandardMaterial ? k.environment : null, ve = b === null ? f.outputEncoding : b.isXRRenderTarget === !0 ? b.texture.encoding : on, Me = (F.isMeshStandardMaterial ? Xe : nt).get(F.envMap || Ee), Pe = F.vertexColors === !0 && !!V.attributes.color && V.attributes.color.itemSize === 4, Re = !!F.normalMap && !!V.attributes.tangent, Le = !!V.morphAttributes.position, Ye = !!V.morphAttributes.normal, Ct = !!V.morphAttributes.color, Yt = F.toneMapped ? f.toneMapping : rn, In = V.morphAttributes.position || V.morphAttributes.normal || V.morphAttributes.color, Ke = In !== void 0 ? In.length : 0, Qe = Ie.get(F), Qs = d.state.lights;
    if (U === !0 && (ee === !0 || y !== C)) {
      const yt = y === C && F.id === x;
      I.setState(F, y, yt);
    }
    let st = !1;
    F.version === Qe.__version ? (Qe.needsLights && Qe.lightsStateVersion !== Qs.state.version || Qe.outputEncoding !== ve || j.isInstancedMesh && Qe.instancing === !1 || !j.isInstancedMesh && Qe.instancing === !0 || j.isSkinnedMesh && Qe.skinning === !1 || !j.isSkinnedMesh && Qe.skinning === !0 || Qe.envMap !== Me || F.fog === !0 && Qe.fog !== ge || Qe.numClippingPlanes !== void 0 && (Qe.numClippingPlanes !== I.numPlanes || Qe.numIntersection !== I.numIntersection) || Qe.vertexAlphas !== Pe || Qe.vertexTangents !== Re || Qe.morphTargets !== Le || Qe.morphNormals !== Ye || Qe.morphColors !== Ct || Qe.toneMapping !== Yt || me.isWebGL2 === !0 && Qe.morphTargetsCount !== Ke) && (st = !0) : (st = !0, Qe.__version = F.version);
    let Cn = Qe.currentProgram;
    st === !0 && (Cn = Rt(F, k, j));
    let la = !1, Ii = !1, Fs = !1;
    const pt = Cn.getUniforms(), yn = Qe.uniforms;
    if (Ae.useProgram(Cn.program) && (la = !0, Ii = !0, Fs = !0), F.id !== x && (x = F.id, Ii = !0), la || C !== y) {
      if (pt.setValue(q, "projectionMatrix", y.projectionMatrix), me.logarithmicDepthBuffer && pt.setValue(
        q,
        "logDepthBufFC",
        2 / (Math.log(y.far + 1) / Math.LN2)
      ), C !== y && (C = y, Ii = !0, Fs = !0), F.isShaderMaterial || F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshStandardMaterial || F.envMap) {
        const yt = pt.map.cameraPosition;
        yt !== void 0 && yt.setValue(
          q,
          se.setFromMatrixPosition(y.matrixWorld)
        );
      }
      (F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshLambertMaterial || F.isMeshBasicMaterial || F.isMeshStandardMaterial || F.isShaderMaterial) && pt.setValue(q, "isOrthographic", y.isOrthographicCamera === !0), (F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshLambertMaterial || F.isMeshBasicMaterial || F.isMeshStandardMaterial || F.isShaderMaterial || F.isShadowMaterial || j.isSkinnedMesh) && pt.setValue(q, "viewMatrix", y.matrixWorldInverse);
    }
    if (j.isSkinnedMesh) {
      pt.setOptional(q, j, "bindMatrix"), pt.setOptional(q, j, "bindMatrixInverse");
      const yt = j.skeleton;
      yt && (me.floatVertexTextures ? (yt.boneTexture === null && yt.computeBoneTexture(), pt.setValue(q, "boneTexture", yt.boneTexture, be), pt.setValue(q, "boneTextureSize", yt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const Ps = V.morphAttributes;
    if ((Ps.position !== void 0 || Ps.normal !== void 0 || Ps.color !== void 0 && me.isWebGL2 === !0) && ne.update(j, V, F, Cn), (Ii || Qe.receiveShadow !== j.receiveShadow) && (Qe.receiveShadow = j.receiveShadow, pt.setValue(q, "receiveShadow", j.receiveShadow)), F.isMeshGouraudMaterial && F.envMap !== null && (yn.envMap.value = Me, yn.flipEnvMap.value = Me.isCubeTexture && Me.isRenderTargetTexture === !1 ? -1 : 1), Ii && (pt.setValue(q, "toneMappingExposure", f.toneMappingExposure), Qe.needsLights && jc(yn, Fs), ge && F.fog === !0 && Dt.refreshFogUniforms(yn, ge), Dt.refreshMaterialUniforms(yn, F, G, R, X), ws.upload(q, Qe.uniformsList, yn, be)), F.isShaderMaterial && F.uniformsNeedUpdate === !0 && (ws.upload(q, Qe.uniformsList, yn, be), F.uniformsNeedUpdate = !1), F.isSpriteMaterial && pt.setValue(q, "center", j.center), pt.setValue(q, "modelViewMatrix", j.modelViewMatrix), pt.setValue(q, "normalMatrix", j.normalMatrix), pt.setValue(q, "modelMatrix", j.matrixWorld), F.isShaderMaterial || F.isRawShaderMaterial) {
      const yt = F.uniformsGroups;
      for (let ks = 0, Kc = yt.length; ks < Kc; ks++)
        if (me.isWebGL2) {
          const ha = yt[ks];
          ce.update(ha, Cn), ce.bind(ha, Cn);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return Cn;
  }
  function jc(y, k) {
    y.ambientLightColor.needsUpdate = k, y.lightProbe.needsUpdate = k, y.directionalLights.needsUpdate = k, y.directionalLightShadows.needsUpdate = k, y.pointLights.needsUpdate = k, y.pointLightShadows.needsUpdate = k, y.spotLights.needsUpdate = k, y.spotLightShadows.needsUpdate = k, y.rectAreaLights.needsUpdate = k, y.hemisphereLights.needsUpdate = k;
  }
  function Yc(y) {
    return y.isMeshLambertMaterial || y.isMeshToonMaterial || y.isMeshPhongMaterial || y.isMeshStandardMaterial || y.isShadowMaterial || y.isShaderMaterial && y.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return m;
  }, this.getActiveMipmapLevel = function() {
    return E;
  }, this.getRenderTarget = function() {
    return b;
  }, this.setRenderTargetTextures = function(y, k, V) {
    Ie.get(y.texture).__webglTexture = k, Ie.get(y.depthTexture).__webglTexture = V;
    const F = Ie.get(y);
    F.__hasExternalTextures = !0, F.__hasExternalTextures && (F.__autoAllocateDepthBuffer = V === void 0, F.__autoAllocateDepthBuffer || de.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), F.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(y, k) {
    const V = Ie.get(y);
    V.__webglFramebuffer = k, V.__useDefaultFramebuffer = k === void 0;
  }, this.setRenderTarget = function(y, k = 0, V = 0) {
    b = y, m = k, E = V;
    let F = !0, j = null, ge = !1, Ee = !1;
    if (y) {
      const Me = Ie.get(y);
      Me.__useDefaultFramebuffer !== void 0 ? (Ae.bindFramebuffer(36160, null), F = !1) : Me.__webglFramebuffer === void 0 ? be.setupRenderTarget(y) : Me.__hasExternalTextures && be.rebindTextures(y, Ie.get(y.texture).__webglTexture, Ie.get(y.depthTexture).__webglTexture);
      const Pe = y.texture;
      (Pe.isData3DTexture || Pe.isDataArrayTexture || Pe.isCompressedArrayTexture) && (Ee = !0);
      const Re = Ie.get(y).__webglFramebuffer;
      y.isWebGLCubeRenderTarget ? (j = Re[k], ge = !0) : me.isWebGL2 && y.samples > 0 && be.useMultisampledRTT(y) === !1 ? j = Ie.get(y).__webglMultisampledFramebuffer : j = Re, S.copy(y.viewport), D.copy(y.scissor), _ = y.scissorTest;
    } else
      S.copy(L).multiplyScalar(G).floor(), D.copy(N).multiplyScalar(G).floor(), _ = J;
    if (Ae.bindFramebuffer(36160, j) && me.drawBuffers && F && Ae.drawBuffers(y, j), Ae.viewport(S), Ae.scissor(D), Ae.setScissorTest(_), ge) {
      const Me = Ie.get(y.texture);
      q.framebufferTexture2D(36160, 36064, 34069 + k, Me.__webglTexture, V);
    } else if (Ee) {
      const Me = Ie.get(y.texture), Pe = k || 0;
      q.framebufferTextureLayer(36160, 36064, Me.__webglTexture, V || 0, Pe);
    }
    x = -1;
  }, this.readRenderTargetPixels = function(y, k, V, F, j, ge, Ee) {
    if (!(y && y.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let ve = Ie.get(y).__webglFramebuffer;
    if (y.isWebGLCubeRenderTarget && Ee !== void 0 && (ve = ve[Ee]), ve) {
      Ae.bindFramebuffer(36160, ve);
      try {
        const Me = y.texture, Pe = Me.format, Re = Me.type;
        if (Pe !== ct && M.convert(Pe) !== q.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const Le = Re === an && (de.has("EXT_color_buffer_half_float") || me.isWebGL2 && de.has("EXT_color_buffer_float"));
        if (Re !== xt && M.convert(Re) !== q.getParameter(35738) && !(Re === Ft && (me.isWebGL2 || de.has("OES_texture_float") || de.has("WEBGL_color_buffer_float"))) && !Le) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        k >= 0 && k <= y.width - F && V >= 0 && V <= y.height - j && q.readPixels(k, V, F, j, M.convert(Pe), M.convert(Re), ge);
      } finally {
        const Me = b !== null ? Ie.get(b).__webglFramebuffer : null;
        Ae.bindFramebuffer(36160, Me);
      }
    }
  }, this.copyFramebufferToTexture = function(y, k, V = 0) {
    const F = Math.pow(2, -V), j = Math.floor(k.image.width * F), ge = Math.floor(k.image.height * F);
    be.setTexture2D(k, 0), q.copyTexSubImage2D(3553, V, 0, 0, y.x, y.y, j, ge), Ae.unbindTexture();
  }, this.copyTextureToTexture = function(y, k, V, F = 0) {
    const j = k.image.width, ge = k.image.height, Ee = M.convert(V.format), ve = M.convert(V.type);
    be.setTexture2D(V, 0), q.pixelStorei(37440, V.flipY), q.pixelStorei(37441, V.premultiplyAlpha), q.pixelStorei(3317, V.unpackAlignment), k.isDataTexture ? q.texSubImage2D(3553, F, y.x, y.y, j, ge, Ee, ve, k.image.data) : k.isCompressedTexture ? q.compressedTexSubImage2D(3553, F, y.x, y.y, k.mipmaps[0].width, k.mipmaps[0].height, Ee, k.mipmaps[0].data) : q.texSubImage2D(3553, F, y.x, y.y, Ee, ve, k.image), F === 0 && V.generateMipmaps && q.generateMipmap(3553), Ae.unbindTexture();
  }, this.copyTextureToTexture3D = function(y, k, V, F, j = 0) {
    if (f.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const ge = y.max.x - y.min.x + 1, Ee = y.max.y - y.min.y + 1, ve = y.max.z - y.min.z + 1, Me = M.convert(F.format), Pe = M.convert(F.type);
    let Re;
    if (F.isData3DTexture)
      be.setTexture3D(F, 0), Re = 32879;
    else if (F.isDataArrayTexture)
      be.setTexture2DArray(F, 0), Re = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    q.pixelStorei(37440, F.flipY), q.pixelStorei(37441, F.premultiplyAlpha), q.pixelStorei(3317, F.unpackAlignment);
    const Le = q.getParameter(3314), Ye = q.getParameter(32878), Ct = q.getParameter(3316), Yt = q.getParameter(3315), In = q.getParameter(32877), Ke = V.isCompressedTexture ? V.mipmaps[0] : V.image;
    q.pixelStorei(3314, Ke.width), q.pixelStorei(32878, Ke.height), q.pixelStorei(3316, y.min.x), q.pixelStorei(3315, y.min.y), q.pixelStorei(32877, y.min.z), V.isDataTexture || V.isData3DTexture ? q.texSubImage3D(Re, j, k.x, k.y, k.z, ge, Ee, ve, Me, Pe, Ke.data) : V.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), q.compressedTexSubImage3D(Re, j, k.x, k.y, k.z, ge, Ee, ve, Me, Ke.data)) : q.texSubImage3D(Re, j, k.x, k.y, k.z, ge, Ee, ve, Me, Pe, Ke), q.pixelStorei(3314, Le), q.pixelStorei(32878, Ye), q.pixelStorei(3316, Ct), q.pixelStorei(3315, Yt), q.pixelStorei(32877, In), j === 0 && F.generateMipmaps && q.generateMipmap(Re), Ae.unbindTexture();
  }, this.initTexture = function(y) {
    y.isCubeTexture ? be.setTextureCube(y, 0) : y.isData3DTexture ? be.setTexture3D(y, 0) : y.isDataArrayTexture || y.isCompressedArrayTexture ? be.setTexture2DArray(y, 0) : be.setTexture2D(y, 0), Ae.unbindTexture();
  }, this.resetState = function() {
    m = 0, E = 0, b = null, Ae.reset(), Q.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class ep extends Ic {
}
ep.prototype.isWebGL1Renderer = !0;
class Cc extends qe {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.backgroundIntensity = this.backgroundIntensity), t;
  }
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
  }
}
class tp {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Fr, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = Ut();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ut()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ut()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const mt = /* @__PURE__ */ new B();
class $r {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      mt.fromBufferAttribute(this, t), mt.applyMatrix4(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      mt.fromBufferAttribute(this, t), mt.applyNormalMatrix(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      mt.fromBufferAttribute(this, t), mt.transformDirection(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = He(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = He(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = He(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = He(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = sn(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = sn(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = sn(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = sn(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = He(t, this.array), n = He(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = He(t, this.array), n = He(n, this.array), i = He(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = He(t, this.array), n = He(n, this.array), i = He(i, this.array), s = He(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new lt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new $r(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const po = /* @__PURE__ */ new B(), go = /* @__PURE__ */ new ze(), mo = /* @__PURE__ */ new ze(), np = /* @__PURE__ */ new B(), bo = /* @__PURE__ */ new we();
class ip extends Ve {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new we(), this.bindMatrixInverse = new we();
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new ze(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  boneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    go.fromBufferAttribute(i.attributes.skinIndex, e), mo.fromBufferAttribute(i.attributes.skinWeight, e), po.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const r = mo.getComponent(s);
      if (r !== 0) {
        const a = go.getComponent(s);
        bo.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(np.copy(po).applyMatrix4(bo), r);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class yc extends qe {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class vc extends ot {
  constructor(e = null, t = 1, n = 1, i, s, r, a, c, l = at, h = at, A, d) {
    super(null, r, a, c, l, h, i, s, A, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const _o = /* @__PURE__ */ new we(), sp = /* @__PURE__ */ new we();
class ea {
  constructor(e = [], t = []) {
    this.uuid = Ut(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new we());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new we();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, r = e.length; s < r; s++) {
      const a = e[s] ? e[s].matrixWorld : sp;
      _o.multiplyMatrices(a, t[s]), _o.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new ea(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = ac(e), e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new vc(t, e, e, ct, Ft);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this.boneTextureSize = e, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let r = t[s];
      r === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), r = new yc()), this.bones.push(r), this.boneInverses.push(new we().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i];
      e.bones.push(r.uuid);
      const a = n[i];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class xo extends lt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const Eo = /* @__PURE__ */ new we(), Io = /* @__PURE__ */ new we(), ms = [], rp = /* @__PURE__ */ new we(), Ti = /* @__PURE__ */ new Ve();
class ap extends Ve {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new xo(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, rp);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (Ti.geometry = this.geometry, Ti.material = this.material, Ti.material !== void 0)
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, Eo), Io.multiplyMatrices(n, Eo), Ti.matrixWorld = Io, Ti.raycast(e, ms);
        for (let r = 0, a = ms.length; r < a; r++) {
          const c = ms[r];
          c.instanceId = s, c.object = this, t.push(c);
        }
        ms.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new xo(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ta extends Vt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new ye(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Co = /* @__PURE__ */ new B(), yo = /* @__PURE__ */ new B(), vo = /* @__PURE__ */ new we(), dr = /* @__PURE__ */ new Ds(), bs = /* @__PURE__ */ new mi();
class Wi extends qe {
  constructor(e = new Tt(), t = new ta()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        Co.fromBufferAttribute(t, i - 1), yo.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Co.distanceTo(yo);
      e.setAttribute("lineDistance", new Gt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, r = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), bs.copy(n.boundingSphere), bs.applyMatrix4(i), bs.radius += s, e.ray.intersectsSphere(bs) === !1)
      return;
    vo.copy(i).invert(), dr.copy(e.ray).applyMatrix4(vo);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = new B(), h = new B(), A = new B(), d = new B(), p = this.isLineSegments ? 2 : 1, g = n.index, u = n.attributes.position;
    if (g !== null) {
      const m = Math.max(0, r.start), E = Math.min(g.count, r.start + r.count);
      for (let b = m, x = E - 1; b < x; b += p) {
        const C = g.getX(b), S = g.getX(b + 1);
        if (l.fromBufferAttribute(u, C), h.fromBufferAttribute(u, S), dr.distanceSqToSegment(l, h, d, A) > c)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const _ = e.ray.origin.distanceTo(d);
        _ < e.near || _ > e.far || t.push({
          distance: _,
          point: A.clone().applyMatrix4(this.matrixWorld),
          index: b,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const m = Math.max(0, r.start), E = Math.min(u.count, r.start + r.count);
      for (let b = m, x = E - 1; b < x; b += p) {
        if (l.fromBufferAttribute(u, b), h.fromBufferAttribute(u, b + 1), dr.distanceSqToSegment(l, h, d, A) > c)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const S = e.ray.origin.distanceTo(d);
        S < e.near || S > e.far || t.push({
          distance: S,
          point: A.clone().applyMatrix4(this.matrixWorld),
          index: b,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, r = i.length; s < r; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
const Mo = /* @__PURE__ */ new B(), wo = /* @__PURE__ */ new B();
class op extends Wi {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        Mo.fromBufferAttribute(t, i), wo.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Mo.distanceTo(wo);
      e.setAttribute("lineDistance", new Gt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class cp extends Wi {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class Mc extends Vt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new ye(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const So = /* @__PURE__ */ new we(), Gr = /* @__PURE__ */ new Ds(), _s = /* @__PURE__ */ new mi(), xs = /* @__PURE__ */ new B();
class lp extends qe {
  constructor(e = new Tt(), t = new Mc()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, r = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), _s.copy(n.boundingSphere), _s.applyMatrix4(i), _s.radius += s, e.ray.intersectsSphere(_s) === !1)
      return;
    So.copy(i).invert(), Gr.copy(e.ray).applyMatrix4(So);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = n.index, A = n.attributes.position;
    if (l !== null) {
      const d = Math.max(0, r.start), p = Math.min(l.count, r.start + r.count);
      for (let g = d, f = p; g < f; g++) {
        const u = l.getX(g);
        xs.fromBufferAttribute(A, u), Bo(xs, u, c, i, e, t, this);
      }
    } else {
      const d = Math.max(0, r.start), p = Math.min(A.count, r.start + r.count);
      for (let g = d, f = p; g < f; g++)
        xs.fromBufferAttribute(A, g), Bo(xs, g, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, r = i.length; s < r; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function Bo(o, e, t, n, i, s, r) {
  const a = Gr.distanceSqToPoint(o);
  if (a < t) {
    const c = new B();
    Gr.closestPointToPoint(o, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far)
      return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(a),
      point: c,
      index: e,
      face: null,
      object: r
    });
  }
}
class wc extends ot {
  constructor(e, t, n, i, s, r, a, c, l, h, A, d) {
    super(null, r, a, c, l, h, i, s, A, d), this.isCompressedTexture = !0, this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class hp extends wc {
  constructor(e, t, n, i, s, r) {
    super(e, t, n, s, r), this.isCompressedArrayTexture = !0, this.image.depth = i, this.wrapR = wt;
  }
}
class qi extends Vt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new ye(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ye(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = rc, this.normalScale = new xe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class On extends qi {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new xe(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return ut(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new ye(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new ye(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new ye(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
function dn(o, e, t) {
  return Sc(o) ? new o.constructor(o.subarray(e, t !== void 0 ? t : o.length)) : o.slice(e, t);
}
function Es(o, e, t) {
  return !o || !t && o.constructor === e ? o : typeof e.BYTES_PER_ELEMENT == "number" ? new e(o) : Array.prototype.slice.call(o);
}
function Sc(o) {
  return ArrayBuffer.isView(o) && !(o instanceof DataView);
}
function Ap(o) {
  function e(i, s) {
    return o[i] - o[s];
  }
  const t = o.length, n = new Array(t);
  for (let i = 0; i !== t; ++i)
    n[i] = i;
  return n.sort(e), n;
}
function To(o, e, t) {
  const n = o.length, i = new o.constructor(n);
  for (let s = 0, r = 0; r !== n; ++s) {
    const a = t[s] * e;
    for (let c = 0; c !== e; ++c)
      i[r++] = o[a + c];
  }
  return i;
}
function Bc(o, e, t, n) {
  let i = 1, s = o[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = o[i++];
  if (s === void 0)
    return;
  let r = s[n];
  if (r !== void 0)
    if (Array.isArray(r))
      do
        r = s[n], r !== void 0 && (e.push(s.time), t.push.apply(t, r)), s = o[i++];
      while (s !== void 0);
    else if (r.toArray !== void 0)
      do
        r = s[n], r !== void 0 && (e.push(s.time), r.toArray(t, t.length)), s = o[i++];
      while (s !== void 0);
    else
      do
        r = s[n], r !== void 0 && (e.push(s.time), t.push(r)), s = o[i++];
      while (s !== void 0);
}
class Xi {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    n: {
      e: {
        let r;
        t: {
          i:
            if (!(e < i)) {
              for (let a = n + 2; ; ) {
                if (i === void 0) {
                  if (e < s)
                    break i;
                  return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                if (n === a)
                  break;
                if (s = i, i = t[++n], e < i)
                  break e;
              }
              r = t.length;
              break t;
            }
          if (!(e >= s)) {
            const a = t[1];
            e < a && (n = 2, s = a);
            for (let c = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === c)
                break;
              if (i = s, s = t[--n - 1], e >= s)
                break e;
            }
            r = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < r; ) {
          const a = n + r >>> 1;
          e < t[a] ? r = a : n = a + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let r = 0; r !== i; ++r)
      t[r] = n[s + r];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class dp extends Xi {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Ra,
      endingEnd: Ra
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, r = e + 1, a = i[s], c = i[r];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case La:
          s = e, a = 2 * t - n;
          break;
        case Qa:
          s = i.length - 2, a = t + i[s] - i[s + 1];
          break;
        default:
          s = e, a = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case La:
          r = e, c = 2 * n - t;
          break;
        case Qa:
          r = 1, c = n + i[1] - i[0];
          break;
        default:
          r = e - 1, c = t;
      }
    const l = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = l / (t - a), this._weightNext = l / (c - n), this._offsetPrev = s * h, this._offsetNext = r * h;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, a = this.valueSize, c = e * a, l = c - a, h = this._offsetPrev, A = this._offsetNext, d = this._weightPrev, p = this._weightNext, g = (n - t) / (i - t), f = g * g, u = f * g, m = -d * u + 2 * d * f - d * g, E = (1 + d) * u + (-1.5 - 2 * d) * f + (-0.5 + d) * g + 1, b = (-1 - p) * u + (1.5 + p) * f + 0.5 * g, x = p * u - p * f;
    for (let C = 0; C !== a; ++C)
      s[C] = m * r[h + C] + E * r[l + C] + b * r[c + C] + x * r[A + C];
    return s;
  }
}
class up extends Xi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, a = this.valueSize, c = e * a, l = c - a, h = (n - t) / (i - t), A = 1 - h;
    for (let d = 0; d !== a; ++d)
      s[d] = r[l + d] * A + r[c + d] * h;
    return s;
  }
}
class fp extends Xi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class qt {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Es(t, this.TimeBufferType), this.values = Es(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Es(e.times, Array),
        values: Es(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new fp(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new up(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new dp(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Oi:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case fi:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Gs:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Oi;
      case this.InterpolantFactoryMethodLinear:
        return fi;
      case this.InterpolantFactoryMethodSmooth:
        return Gs;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, r = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; r !== -1 && n[r] > t; )
      --r;
    if (++r, s !== 0 || r !== i) {
      s >= r && (r = Math.max(r, 1), s = r - 1);
      const a = this.getValueSize();
      this.times = dn(n, s, r), this.values = dn(this.values, s * a, r * a);
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let r = null;
    for (let a = 0; a !== s; a++) {
      const c = n[a];
      if (typeof c == "number" && isNaN(c)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, c), e = !1;
        break;
      }
      if (r !== null && r > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, c, r), e = !1;
        break;
      }
      r = c;
    }
    if (i !== void 0 && Sc(i))
      for (let a = 0, c = i.length; a !== c; ++a) {
        const l = i[a];
        if (isNaN(l)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, l), e = !1;
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = dn(this.times), t = dn(this.values), n = this.getValueSize(), i = this.getInterpolation() === Gs, s = e.length - 1;
    let r = 1;
    for (let a = 1; a < s; ++a) {
      let c = !1;
      const l = e[a], h = e[a + 1];
      if (l !== h && (a !== 1 || l !== e[0]))
        if (i)
          c = !0;
        else {
          const A = a * n, d = A - n, p = A + n;
          for (let g = 0; g !== n; ++g) {
            const f = t[A + g];
            if (f !== t[d + g] || f !== t[p + g]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (a !== r) {
          e[r] = e[a];
          const A = a * n, d = r * n;
          for (let p = 0; p !== n; ++p)
            t[d + p] = t[A + p];
        }
        ++r;
      }
    }
    if (s > 0) {
      e[r] = e[s];
      for (let a = s * n, c = r * n, l = 0; l !== n; ++l)
        t[c + l] = t[a + l];
      ++r;
    }
    return r !== e.length ? (this.times = dn(e, 0, r), this.values = dn(t, 0, r * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = dn(this.times, 0), t = dn(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
qt.prototype.TimeBufferType = Float32Array;
qt.prototype.ValueBufferType = Float32Array;
qt.prototype.DefaultInterpolation = fi;
class xi extends qt {
}
xi.prototype.ValueTypeName = "bool";
xi.prototype.ValueBufferType = Array;
xi.prototype.DefaultInterpolation = Oi;
xi.prototype.InterpolantFactoryMethodLinear = void 0;
xi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Tc extends qt {
}
Tc.prototype.ValueTypeName = "color";
class ji extends qt {
}
ji.prototype.ValueTypeName = "number";
class pp extends Xi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, a = this.valueSize, c = (n - t) / (i - t);
    let l = e * a;
    for (let h = l + a; l !== h; l += 4)
      Wt.slerpFlat(s, 0, r, l - a, r, l, c);
    return s;
  }
}
class Un extends qt {
  InterpolantFactoryMethodLinear(e) {
    return new pp(this.times, this.values, this.getValueSize(), e);
  }
}
Un.prototype.ValueTypeName = "quaternion";
Un.prototype.DefaultInterpolation = fi;
Un.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ei extends qt {
}
Ei.prototype.ValueTypeName = "string";
Ei.prototype.ValueBufferType = Array;
Ei.prototype.DefaultInterpolation = Oi;
Ei.prototype.InterpolantFactoryMethodLinear = void 0;
Ei.prototype.InterpolantFactoryMethodSmooth = void 0;
class Yi extends qt {
}
Yi.prototype.ValueTypeName = "vector";
class gp {
  constructor(e, t = -1, n, i = Pl) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Ut(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let r = 0, a = n.length; r !== a; ++r)
      t.push(bp(n[r]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let s = 0, r = n.length; s !== r; ++s)
      t.push(qt.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, r = [];
    for (let a = 0; a < s; a++) {
      let c = [], l = [];
      c.push(
        (a + s - 1) % s,
        a,
        (a + 1) % s
      ), l.push(0, 1, 0);
      const h = Ap(c);
      c = To(c, 1, h), l = To(l, 1, h), !i && c[0] === 0 && (c.push(s), l.push(l[0])), r.push(
        new ji(
          ".morphTargetInfluences[" + t[a].name + "]",
          c,
          l
        ).scale(1 / n)
      );
    }
    return new this(e, -1, r);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a], h = l.name.match(s);
      if (h && h.length > 1) {
        const A = h[1];
        let d = i[A];
        d || (i[A] = d = []), d.push(l);
      }
    }
    const r = [];
    for (const a in i)
      r.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
    return r;
  }
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(A, d, p, g, f) {
      if (p.length !== 0) {
        const u = [], m = [];
        Bc(p, u, m, g), u.length !== 0 && f.push(new A(d, u, m));
      }
    }, i = [], s = e.name || "default", r = e.fps || 30, a = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let A = 0; A < l.length; A++) {
      const d = l[A].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const p = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let f = 0; f < d[g].morphTargets.length; f++)
                p[d[g].morphTargets[f]] = -1;
          for (const f in p) {
            const u = [], m = [];
            for (let E = 0; E !== d[g].morphTargets.length; ++E) {
              const b = d[g];
              u.push(b.time), m.push(b.morphTarget === f ? 1 : 0);
            }
            i.push(new ji(".morphTargetInfluence[" + f + "]", u, m));
          }
          c = p.length * r;
        } else {
          const p = ".bones[" + t[A].name + "]";
          n(
            Yi,
            p + ".position",
            d,
            "pos",
            i
          ), n(
            Un,
            p + ".quaternion",
            d,
            "rot",
            i
          ), n(
            Yi,
            p + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, c, i, a);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function mp(o) {
  switch (o.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return ji;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Yi;
    case "color":
      return Tc;
    case "quaternion":
      return Un;
    case "bool":
    case "boolean":
      return xi;
    case "string":
      return Ei;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + o);
}
function bp(o) {
  if (o.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = mp(o.type);
  if (o.times === void 0) {
    const t = [], n = [];
    Bc(o.keys, t, n, "value"), o.times = t, o.values = n;
  }
  return e.parse !== void 0 ? e.parse(o) : new e(o.name, o.times, o.values, o.interpolation);
}
const gi = {
  enabled: !1,
  files: {},
  add: function(o, e) {
    this.enabled !== !1 && (this.files[o] = e);
  },
  get: function(o) {
    if (this.enabled !== !1)
      return this.files[o];
  },
  remove: function(o) {
    delete this.files[o];
  },
  clear: function() {
    this.files = {};
  }
};
class Dc {
  constructor(e, t, n) {
    const i = this;
    let s = !1, r = 0, a = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      a++, s === !1 && i.onStart !== void 0 && i.onStart(h, r, a), s = !0;
    }, this.itemEnd = function(h) {
      r++, i.onProgress !== void 0 && i.onProgress(h, r, a), r === a && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, A) {
      return l.push(h, A), this;
    }, this.removeHandler = function(h) {
      const A = l.indexOf(h);
      return A !== -1 && l.splice(A, 2), this;
    }, this.getHandler = function(h) {
      for (let A = 0, d = l.length; A < d; A += 2) {
        const p = l[A], g = l[A + 1];
        if (p.global && (p.lastIndex = 0), p.test(h))
          return g;
      }
      return null;
    };
  }
}
const _p = /* @__PURE__ */ new Dc();
class xn {
  constructor(e) {
    this.manager = e !== void 0 ? e : _p, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
const en = {};
class xp extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Fn extends xn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = gi.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (en[e] !== void 0) {
      en[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    en[e] = [], en[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const r = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
    }), a = this.mimeType, c = this.responseType;
    fetch(r).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const h = en[e], A = l.body.getReader(), d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), p = d ? parseInt(d) : 0, g = p !== 0;
        let f = 0;
        const u = new ReadableStream({
          start(m) {
            E();
            function E() {
              A.read().then(({ done: b, value: x }) => {
                if (b)
                  m.close();
                else {
                  f += x.byteLength;
                  const C = new ProgressEvent("progress", { lengthComputable: g, loaded: f, total: p });
                  for (let S = 0, D = h.length; S < D; S++) {
                    const _ = h[S];
                    _.onProgress && _.onProgress(C);
                  }
                  m.enqueue(x), E();
                }
              });
            }
          }
        });
        return new Response(u);
      } else
        throw new xp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, a));
        case "json":
          return l.json();
        default:
          if (a === void 0)
            return l.text();
          {
            const A = /charset="?([^;"\s]*)"?/i.exec(a), d = A && A[1] ? A[1].toLowerCase() : void 0, p = new TextDecoder(d);
            return l.arrayBuffer().then((g) => p.decode(g));
          }
      }
    }).then((l) => {
      gi.add(e, l);
      const h = en[e];
      delete en[e];
      for (let A = 0, d = h.length; A < d; A++) {
        const p = h[A];
        p.onLoad && p.onLoad(l);
      }
    }).catch((l) => {
      const h = en[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete en[e];
      for (let A = 0, d = h.length; A < d; A++) {
        const p = h[A];
        p.onError && p.onError(l);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class Rc extends xn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, r = gi.get(e);
    if (r !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(r), s.manager.itemEnd(e);
      }, 0), r;
    const a = Vi("img");
    function c() {
      h(), gi.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function l(A) {
      h(), i && i(A), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      a.removeEventListener("load", c, !1), a.removeEventListener("error", l, !1);
    }
    return a.addEventListener("load", c, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), a.src = e, a;
  }
}
class Ep extends xn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new Yr(), r = new Rc(this.manager);
    r.setCrossOrigin(this.crossOrigin), r.setPath(this.path);
    let a = 0;
    function c(l) {
      r.load(e[l], function(h) {
        s.images[l] = h, a++, a === 6 && (s.needsUpdate = !0, t && t(s));
      }, void 0, i);
    }
    for (let l = 0; l < e.length; ++l)
      c(l);
    return s;
  }
}
class Ip extends xn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new ot(), r = new Rc(this.manager);
    return r.setCrossOrigin(this.crossOrigin), r.setPath(this.path), r.load(e, function(a) {
      s.image = a, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class Ls extends qe {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new ye(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
const ur = /* @__PURE__ */ new we(), Do = /* @__PURE__ */ new B(), Ro = /* @__PURE__ */ new B();
class na {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new xe(512, 512), this.map = null, this.mapPass = null, this.matrix = new we(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Kr(), this._frameExtents = new xe(1, 1), this._viewportCount = 1, this._viewports = [
      new ze(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Do.setFromMatrixPosition(e.matrixWorld), t.position.copy(Do), Ro.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Ro), t.updateMatrixWorld(), ur.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ur), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(ur);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class Cp extends na {
  constructor() {
    super(new Et(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = zi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class yp extends Ls {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, r = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(qe.DefaultUp), this.updateMatrix(), this.target = new qe(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = r, this.map = null, this.shadow = new Cp();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const Lo = /* @__PURE__ */ new we(), Di = /* @__PURE__ */ new B(), fr = /* @__PURE__ */ new B();
class vp extends na {
  constructor() {
    super(new Et(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new xe(4, 2), this._viewportCount = 6, this._viewports = [
      new ze(2, 1, 1, 1),
      new ze(0, 1, 1, 1),
      new ze(3, 1, 1, 1),
      new ze(1, 1, 1, 1),
      new ze(3, 0, 1, 1),
      new ze(1, 0, 1, 1)
    ], this._cubeDirections = [
      new B(1, 0, 0),
      new B(-1, 0, 0),
      new B(0, 0, 1),
      new B(0, 0, -1),
      new B(0, 1, 0),
      new B(0, -1, 0)
    ], this._cubeUps = [
      new B(0, 1, 0),
      new B(0, 1, 0),
      new B(0, 1, 0),
      new B(0, 1, 0),
      new B(0, 0, 1),
      new B(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), Di.setFromMatrixPosition(e.matrixWorld), n.position.copy(Di), fr.copy(n.position), fr.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(fr), n.updateMatrixWorld(), i.makeTranslation(-Di.x, -Di.y, -Di.z), Lo.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Lo);
  }
}
class Lc extends Ls {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new vp();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class Mp extends na {
  constructor() {
    super(new Xr(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Qc extends Ls {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(qe.DefaultUp), this.updateMatrix(), this.target = new qe(), this.shadow = new Mp();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class wp extends Ls {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Pn {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class Sp extends xn {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, r = gi.get(e);
    if (r !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(r), s.manager.itemEnd(e);
      }, 0), r;
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader, fetch(e, a).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      gi.add(e, c), t && t(c), s.manager.itemEnd(e);
    }).catch(function(c) {
      i && i(c), s.manager.itemError(e), s.manager.itemEnd(e);
    }), s.manager.itemStart(e);
  }
}
const ia = "\\[\\]\\.:\\/", Bp = new RegExp("[" + ia + "]", "g"), sa = "[^" + ia + "]", Tp = "[^" + ia.replace("\\.", "") + "]", Dp = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", sa), Rp = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", Tp), Lp = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", sa), Qp = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", sa), Fp = new RegExp(
  "^" + Dp + Rp + Lp + Qp + "$"
), Pp = ["material", "materials", "bones", "map"];
class kp {
  constructor(e, t, n) {
    const i = n || Ge.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Ge {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Ge.parseTrackName(t), this.node = Ge.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Ge.Composite(e, t, n) : new Ge(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Bp, "");
  }
  static parseTrackName(e) {
    const t = Fp.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      Pp.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let r = 0; r < s.length; r++) {
          const a = s[r];
          if (a.name === t || a.uuid === t)
            return a;
          const c = n(a.children);
          if (c)
            return c;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = Ge.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === l) {
              l = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[l];
      }
    }
    const r = e[i];
    if (r === void 0) {
      const l = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", e);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      c = this.BindingType.ArrayElement, this.resolvedProperty = r, this.propertyIndex = s;
    } else
      r.fromArray !== void 0 && r.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = r) : Array.isArray(r) ? (c = this.BindingType.EntireArray, this.resolvedProperty = r) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Ge.Composite = kp;
Ge.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Ge.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Ge.prototype.GetterByBindingType = [
  Ge.prototype._getValue_direct,
  Ge.prototype._getValue_array,
  Ge.prototype._getValue_arrayElement,
  Ge.prototype._getValue_toArray
];
Ge.prototype.SetterByBindingTypeAndVersioning = [
  [
    Ge.prototype._setValue_direct,
    Ge.prototype._setValue_direct_setNeedsUpdate,
    Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    Ge.prototype._setValue_array,
    Ge.prototype._setValue_array_setNeedsUpdate,
    Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    Ge.prototype._setValue_arrayElement,
    Ge.prototype._setValue_arrayElement_setNeedsUpdate,
    Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    Ge.prototype._setValue_fromArray,
    Ge.prototype._setValue_fromArray_setNeedsUpdate,
    Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class Np {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new Ds(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new jr(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !0, n = []) {
    return Or(e, this, n, t), n.sort(Qo), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, s = e.length; i < s; i++)
      Or(e[i], this, n, t);
    return n.sort(Qo), n;
  }
}
function Qo(o, e) {
  return o.distance - e.distance;
}
function Or(o, e, t, n) {
  if (o.layers.test(e.layers) && o.raycast(e, t), n === !0) {
    const i = o.children;
    for (let s = 0, r = i.length; s < r; s++)
      Or(i[s], e, t, !0);
  }
}
class Fo {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(ut(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Po = /* @__PURE__ */ new B(), Is = /* @__PURE__ */ new B(), ko = /* @__PURE__ */ new B();
class Up extends qe {
  constructor(e, t, n) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "DirectionalLightHelper", t === void 0 && (t = 1);
    let i = new Tt();
    i.setAttribute("position", new Gt([
      -t,
      t,
      0,
      t,
      t,
      0,
      t,
      -t,
      0,
      -t,
      -t,
      0,
      -t,
      t,
      0
    ], 3));
    const s = new ta({ fog: !1, toneMapped: !1 });
    this.lightPlane = new Wi(i, s), this.add(this.lightPlane), i = new Tt(), i.setAttribute("position", new Gt([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Wi(i, s), this.add(this.targetLine), this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), Po.setFromMatrixPosition(this.light.matrixWorld), Is.setFromMatrixPosition(this.light.target.matrixWorld), ko.subVectors(Is, Po), this.lightPlane.lookAt(Is), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Is), this.targetLine.scale.z = ko.length();
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Wr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Wr);
const No = { type: "change" }, pr = { type: "start" }, Uo = { type: "end" };
class Gp extends _n {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new B(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Hn.ROTATE, MIDDLE: Hn.DOLLY, RIGHT: Hn.PAN }, this.touches = { ONE: zn.ROTATE, TWO: zn.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(M) {
      M.addEventListener("keydown", It), this._domElementKeyEvents = M;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(No), n.update(), s = i.NONE;
    }, this.update = function() {
      const M = new B(), Q = new Wt().setFromUnitVectors(e.up, new B(0, 1, 0)), ce = Q.clone().invert(), he = new B(), oe = new Wt(), fe = 2 * Math.PI;
      return function() {
        const Te = n.object.position;
        M.copy(Te).sub(n.target), M.applyQuaternion(Q), a.setFromVector3(M), n.autoRotate && s === i.NONE && w(D()), n.enableDamping ? (a.theta += c.theta * n.dampingFactor, a.phi += c.phi * n.dampingFactor) : (a.theta += c.theta, a.phi += c.phi);
        let De = n.minAzimuthAngle, Oe = n.maxAzimuthAngle;
        return isFinite(De) && isFinite(Oe) && (De < -Math.PI ? De += fe : De > Math.PI && (De -= fe), Oe < -Math.PI ? Oe += fe : Oe > Math.PI && (Oe -= fe), De <= Oe ? a.theta = Math.max(De, Math.min(Oe, a.theta)) : a.theta = a.theta > (De + Oe) / 2 ? Math.max(De, a.theta) : Math.min(Oe, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), a.radius *= l, a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), M.setFromSpherical(a), M.applyQuaternion(ce), Te.copy(n.target).add(M), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0)), l = 1, A || he.distanceToSquared(n.object.position) > r || 8 * (1 - oe.dot(n.object.quaternion)) > r ? (n.dispatchEvent(No), he.copy(n.object.position), oe.copy(n.object.quaternion), A = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", H), n.domElement.removeEventListener("pointerdown", nt), n.domElement.removeEventListener("pointercancel", ft), n.domElement.removeEventListener("wheel", Dt), n.domElement.removeEventListener("pointermove", Xe), n.domElement.removeEventListener("pointerup", Ze), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", It);
    };
    const n = this, i = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let s = i.NONE;
    const r = 1e-6, a = new Fo(), c = new Fo();
    let l = 1;
    const h = new B();
    let A = !1;
    const d = new xe(), p = new xe(), g = new xe(), f = new xe(), u = new xe(), m = new xe(), E = new xe(), b = new xe(), x = new xe(), C = [], S = {};
    function D() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function _() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function w(M) {
      c.theta -= M;
    }
    function R(M) {
      c.phi -= M;
    }
    const G = function() {
      const M = new B();
      return function(ce, he) {
        M.setFromMatrixColumn(he, 0), M.multiplyScalar(-ce), h.add(M);
      };
    }(), Y = function() {
      const M = new B();
      return function(ce, he) {
        n.screenSpacePanning === !0 ? M.setFromMatrixColumn(he, 1) : (M.setFromMatrixColumn(he, 0), M.crossVectors(n.object.up, M)), M.multiplyScalar(ce), h.add(M);
      };
    }(), P = function() {
      const M = new B();
      return function(ce, he) {
        const oe = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const fe = n.object.position;
          M.copy(fe).sub(n.target);
          let ue = M.length();
          ue *= Math.tan(n.object.fov / 2 * Math.PI / 180), G(2 * ce * ue / oe.clientHeight, n.object.matrix), Y(2 * he * ue / oe.clientHeight, n.object.matrix);
        } else
          n.object.isOrthographicCamera ? (G(ce * (n.object.right - n.object.left) / n.object.zoom / oe.clientWidth, n.object.matrix), Y(he * (n.object.top - n.object.bottom) / n.object.zoom / oe.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function L(M) {
      n.object.isPerspectiveCamera ? l /= M : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * M)), n.object.updateProjectionMatrix(), A = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function N(M) {
      n.object.isPerspectiveCamera ? l *= M : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / M)), n.object.updateProjectionMatrix(), A = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function J(M) {
      d.set(M.clientX, M.clientY);
    }
    function K(M) {
      E.set(M.clientX, M.clientY);
    }
    function U(M) {
      f.set(M.clientX, M.clientY);
    }
    function ee(M) {
      p.set(M.clientX, M.clientY), g.subVectors(p, d).multiplyScalar(n.rotateSpeed);
      const Q = n.domElement;
      w(2 * Math.PI * g.x / Q.clientHeight), R(2 * Math.PI * g.y / Q.clientHeight), d.copy(p), n.update();
    }
    function X(M) {
      b.set(M.clientX, M.clientY), x.subVectors(b, E), x.y > 0 ? L(_()) : x.y < 0 && N(_()), E.copy(b), n.update();
    }
    function W(M) {
      u.set(M.clientX, M.clientY), m.subVectors(u, f).multiplyScalar(n.panSpeed), P(m.x, m.y), f.copy(u), n.update();
    }
    function O(M) {
      M.deltaY < 0 ? N(_()) : M.deltaY > 0 && L(_()), n.update();
    }
    function se(M) {
      let Q = !1;
      switch (M.code) {
        case n.keys.UP:
          M.ctrlKey || M.metaKey || M.shiftKey ? R(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : P(0, n.keyPanSpeed), Q = !0;
          break;
        case n.keys.BOTTOM:
          M.ctrlKey || M.metaKey || M.shiftKey ? R(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : P(0, -n.keyPanSpeed), Q = !0;
          break;
        case n.keys.LEFT:
          M.ctrlKey || M.metaKey || M.shiftKey ? w(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : P(n.keyPanSpeed, 0), Q = !0;
          break;
        case n.keys.RIGHT:
          M.ctrlKey || M.metaKey || M.shiftKey ? w(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : P(-n.keyPanSpeed, 0), Q = !0;
          break;
      }
      Q && (M.preventDefault(), n.update());
    }
    function te() {
      if (C.length === 1)
        d.set(C[0].pageX, C[0].pageY);
      else {
        const M = 0.5 * (C[0].pageX + C[1].pageX), Q = 0.5 * (C[0].pageY + C[1].pageY);
        d.set(M, Q);
      }
    }
    function re() {
      if (C.length === 1)
        f.set(C[0].pageX, C[0].pageY);
      else {
        const M = 0.5 * (C[0].pageX + C[1].pageX), Q = 0.5 * (C[0].pageY + C[1].pageY);
        f.set(M, Q);
      }
    }
    function q() {
      const M = C[0].pageX - C[1].pageX, Q = C[0].pageY - C[1].pageY, ce = Math.sqrt(M * M + Q * Q);
      E.set(0, ce);
    }
    function Be() {
      n.enableZoom && q(), n.enablePan && re();
    }
    function de() {
      n.enableZoom && q(), n.enableRotate && te();
    }
    function me(M) {
      if (C.length == 1)
        p.set(M.pageX, M.pageY);
      else {
        const ce = _e(M), he = 0.5 * (M.pageX + ce.x), oe = 0.5 * (M.pageY + ce.y);
        p.set(he, oe);
      }
      g.subVectors(p, d).multiplyScalar(n.rotateSpeed);
      const Q = n.domElement;
      w(2 * Math.PI * g.x / Q.clientHeight), R(2 * Math.PI * g.y / Q.clientHeight), d.copy(p);
    }
    function Ae(M) {
      if (C.length === 1)
        u.set(M.pageX, M.pageY);
      else {
        const Q = _e(M), ce = 0.5 * (M.pageX + Q.x), he = 0.5 * (M.pageY + Q.y);
        u.set(ce, he);
      }
      m.subVectors(u, f).multiplyScalar(n.panSpeed), P(m.x, m.y), f.copy(u);
    }
    function ke(M) {
      const Q = _e(M), ce = M.pageX - Q.x, he = M.pageY - Q.y, oe = Math.sqrt(ce * ce + he * he);
      b.set(0, oe), x.set(0, Math.pow(b.y / E.y, n.zoomSpeed)), L(x.y), E.copy(b);
    }
    function Ie(M) {
      n.enableZoom && ke(M), n.enablePan && Ae(M);
    }
    function be(M) {
      n.enableZoom && ke(M), n.enableRotate && me(M);
    }
    function nt(M) {
      n.enabled !== !1 && (C.length === 0 && (n.domElement.setPointerCapture(M.pointerId), n.domElement.addEventListener("pointermove", Xe), n.domElement.addEventListener("pointerup", Ze)), $(M), M.pointerType === "touch" ? v(M) : je(M));
    }
    function Xe(M) {
      n.enabled !== !1 && (M.pointerType === "touch" ? I(M) : Ue(M));
    }
    function Ze(M) {
      ne(M), C.length === 0 && (n.domElement.releasePointerCapture(M.pointerId), n.domElement.removeEventListener("pointermove", Xe), n.domElement.removeEventListener("pointerup", Ze)), n.dispatchEvent(Uo), s = i.NONE;
    }
    function ft(M) {
      ne(M);
    }
    function je(M) {
      let Q;
      switch (M.button) {
        case 0:
          Q = n.mouseButtons.LEFT;
          break;
        case 1:
          Q = n.mouseButtons.MIDDLE;
          break;
        case 2:
          Q = n.mouseButtons.RIGHT;
          break;
        default:
          Q = -1;
      }
      switch (Q) {
        case Hn.DOLLY:
          if (n.enableZoom === !1)
            return;
          K(M), s = i.DOLLY;
          break;
        case Hn.ROTATE:
          if (M.ctrlKey || M.metaKey || M.shiftKey) {
            if (n.enablePan === !1)
              return;
            U(M), s = i.PAN;
          } else {
            if (n.enableRotate === !1)
              return;
            J(M), s = i.ROTATE;
          }
          break;
        case Hn.PAN:
          if (M.ctrlKey || M.metaKey || M.shiftKey) {
            if (n.enableRotate === !1)
              return;
            J(M), s = i.ROTATE;
          } else {
            if (n.enablePan === !1)
              return;
            U(M), s = i.PAN;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(pr);
    }
    function Ue(M) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1)
            return;
          ee(M);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1)
            return;
          X(M);
          break;
        case i.PAN:
          if (n.enablePan === !1)
            return;
          W(M);
          break;
      }
    }
    function Dt(M) {
      n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (M.preventDefault(), n.dispatchEvent(pr), O(M), n.dispatchEvent(Uo));
    }
    function It(M) {
      n.enabled === !1 || n.enablePan === !1 || se(M);
    }
    function v(M) {
      switch (ae(M), C.length) {
        case 1:
          switch (n.touches.ONE) {
            case zn.ROTATE:
              if (n.enableRotate === !1)
                return;
              te(), s = i.TOUCH_ROTATE;
              break;
            case zn.PAN:
              if (n.enablePan === !1)
                return;
              re(), s = i.TOUCH_PAN;
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case zn.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1)
                return;
              Be(), s = i.TOUCH_DOLLY_PAN;
              break;
            case zn.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1)
                return;
              de(), s = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(pr);
    }
    function I(M) {
      switch (ae(M), s) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1)
            return;
          me(M), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1)
            return;
          Ae(M), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1)
            return;
          Ie(M), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1)
            return;
          be(M), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function H(M) {
      n.enabled !== !1 && M.preventDefault();
    }
    function $(M) {
      C.push(M);
    }
    function ne(M) {
      delete S[M.pointerId];
      for (let Q = 0; Q < C.length; Q++)
        if (C[Q].pointerId == M.pointerId) {
          C.splice(Q, 1);
          return;
        }
    }
    function ae(M) {
      let Q = S[M.pointerId];
      Q === void 0 && (Q = new xe(), S[M.pointerId] = Q), Q.set(M.pageX, M.pageY);
    }
    function _e(M) {
      const Q = M.pointerId === C[0].pointerId ? C[1] : C[0];
      return S[Q.pointerId];
    }
    n.domElement.addEventListener("contextmenu", H), n.domElement.addEventListener("pointerdown", nt), n.domElement.addEventListener("pointercancel", ft), n.domElement.addEventListener("wheel", Dt, { passive: !1 }), this.update();
  }
}
class Op extends xn {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new qp(t);
    }), this.register(function(t) {
      return new $p(t);
    }), this.register(function(t) {
      return new eg(t);
    }), this.register(function(t) {
      return new Yp(t);
    }), this.register(function(t) {
      return new Kp(t);
    }), this.register(function(t) {
      return new Jp(t);
    }), this.register(function(t) {
      return new Xp(t);
    }), this.register(function(t) {
      return new Wp(t);
    }), this.register(function(t) {
      return new Zp(t);
    }), this.register(function(t) {
      return new jp(t);
    }), this.register(function(t) {
      return new zp(t);
    }), this.register(function(t) {
      return new tg(t);
    }), this.register(function(t) {
      return new ng(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let r;
    this.resourcePath !== "" ? r = this.resourcePath : this.path !== "" ? r = this.path : r = Pn.extractUrlBase(e), this.manager.itemStart(e);
    const a = function(l) {
      i ? i(l) : console.error(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }, c = new Fn(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(l) {
      try {
        s.parse(l, r, function(h) {
          t(h), s.manager.itemEnd(e);
        }, a);
      } catch (h) {
        a(h);
      }
    }, n, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let s;
    const r = {}, a = {};
    if (typeof e == "string")
      s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (Pn.decodeText(new Uint8Array(e, 0, 4)) === Fc) {
        try {
          r[Fe.KHR_BINARY_GLTF] = new ig(e);
        } catch (h) {
          i && i(h);
          return;
        }
        s = JSON.parse(r[Fe.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(Pn.decodeText(new Uint8Array(e)));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new gg(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let l = 0; l < this.pluginCallbacks.length; l++) {
      const h = this.pluginCallbacks[l](c);
      a[h.name] = h, r[h.name] = !0;
    }
    if (s.extensionsUsed)
      for (let l = 0; l < s.extensionsUsed.length; ++l) {
        const h = s.extensionsUsed[l], A = s.extensionsRequired || [];
        switch (h) {
          case Fe.KHR_MATERIALS_UNLIT:
            r[h] = new Vp();
            break;
          case Fe.KHR_DRACO_MESH_COMPRESSION:
            r[h] = new sg(s, this.dracoLoader);
            break;
          case Fe.KHR_TEXTURE_TRANSFORM:
            r[h] = new rg();
            break;
          case Fe.KHR_MESH_QUANTIZATION:
            r[h] = new ag();
            break;
          default:
            A.indexOf(h) >= 0 && a[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
        }
      }
    c.setExtensions(r), c.setPlugins(a), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function Hp() {
  let o = {};
  return {
    get: function(e) {
      return o[e];
    },
    add: function(e, t) {
      o[e] = t;
    },
    remove: function(e) {
      delete o[e];
    },
    removeAll: function() {
      o = {};
    }
  };
}
const Fe = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class zp {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i)
      return i;
    const s = t.json, c = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let l;
    const h = new ye(16777215);
    c.color !== void 0 && h.fromArray(c.color);
    const A = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new Qc(h), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new Lc(h), l.distance = A;
        break;
      case "spot":
        l = new yp(h), l.distance = A, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, fn(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], a = (s.extensions && s.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(c) {
      return n._getNodeRef(t.cache, a, c);
    });
  }
}
class Vp {
  constructor() {
    this.name = Fe.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return pn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new ye(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const r = s.baseColorFactor;
        e.color.fromArray(r), e.opacity = r[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, Se));
    }
    return Promise.all(i);
  }
}
class Wp {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class qp {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : On;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    if (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
      const a = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new xe(a, a);
    }
    return Promise.all(s);
  }
}
class jp {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : On;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    return r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", r.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class Yp {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : On;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new ye(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const r = i.extensions[this.name];
    return r.sheenColorFactor !== void 0 && t.sheenColor.fromArray(r.sheenColorFactor), r.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", r.sheenColorTexture, Se)), r.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(s);
  }
}
class Kp {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : On;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    return r.transmissionFactor !== void 0 && (t.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", r.transmissionTexture)), Promise.all(s);
  }
}
class Jp {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : On;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", r.thicknessTexture)), t.attenuationDistance = r.attenuationDistance || 1 / 0;
    const a = r.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new ye(a[0], a[1], a[2]), Promise.all(s);
  }
}
class Xp {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : On;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class Zp {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : On;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const a = r.specularColorFactor || [1, 1, 1];
    return t.specularColor = new ye(a[0], a[1], a[2]), r.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", r.specularColorTexture, Se)), Promise.all(s);
  }
}
class $p {
  constructor(e) {
    this.parser = e, this.name = Fe.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], r = t.options.ktx2Loader;
    if (!r) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, r);
  }
}
class eg {
  constructor(e) {
    this.parser = e, this.name = Fe.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const r = s.extensions[t], a = i.images[r.source];
    let c = n.textureLoader;
    if (a.uri) {
      const l = n.options.manager.getHandler(a.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l)
        return n.loadTextureImage(e, r.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class tg {
  constructor(e) {
    this.name = Fe.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(a) {
        const c = i.byteOffset || 0, l = i.byteLength || 0, h = i.count, A = i.byteStride, d = new Uint8Array(a, c, l);
        return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(h, A, d, i.mode, i.filter).then(function(p) {
          return p.buffer;
        }) : r.ready.then(function() {
          const p = new ArrayBuffer(h * A);
          return r.decodeGltfBuffer(new Uint8Array(p), h, A, d, i.mode, i.filter), p;
        });
      });
    } else
      return null;
  }
}
class ng {
  constructor(e) {
    this.name = Fe.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (l.mode !== Qt.TRIANGLES && l.mode !== Qt.TRIANGLE_STRIP && l.mode !== Qt.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const r = n.extensions[this.name].attributes, a = [], c = {};
    for (const l in r)
      a.push(this.parser.getDependency("accessor", r[l]).then((h) => (c[l] = h, c[l])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((l) => {
      const h = l.pop(), A = h.isGroup ? h.children : [h], d = l[0].count, p = [];
      for (const g of A) {
        const f = new we(), u = new B(), m = new Wt(), E = new B(1, 1, 1), b = new ap(g.geometry, g.material, d);
        for (let x = 0; x < d; x++)
          c.TRANSLATION && u.fromBufferAttribute(c.TRANSLATION, x), c.ROTATION && m.fromBufferAttribute(c.ROTATION, x), c.SCALE && E.fromBufferAttribute(c.SCALE, x), b.setMatrixAt(x, f.compose(u, m, E));
        for (const x in c)
          x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && g.geometry.setAttribute(x, c[x]);
        qe.prototype.copy.call(b, g), b.frustumCulled = !1, this.parser.assignFinalMaterial(b), p.push(b);
      }
      return h.isGroup ? (h.clear(), h.add(...p), h) : p[0];
    }));
  }
}
const Fc = "glTF", Ri = 12, Go = { JSON: 1313821514, BIN: 5130562 };
class ig {
  constructor(e) {
    this.name = Fe.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Ri);
    if (this.header = {
      magic: Pn.decodeText(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Fc)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - Ri, i = new DataView(e, Ri);
    let s = 0;
    for (; s < n; ) {
      const r = i.getUint32(s, !0);
      s += 4;
      const a = i.getUint32(s, !0);
      if (s += 4, a === Go.JSON) {
        const c = new Uint8Array(e, Ri + s, r);
        this.content = Pn.decodeText(c);
      } else if (a === Go.BIN) {
        const c = Ri + s;
        this.body = e.slice(c, c + r);
      }
      s += r;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class sg {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Fe.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, a = {}, c = {}, l = {};
    for (const h in r) {
      const A = Hr[h] || h.toLowerCase();
      a[A] = r[h];
    }
    for (const h in e.attributes) {
      const A = Hr[h] || h.toLowerCase();
      if (r[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], p = li[d.componentType];
        l[A] = p.name, c[A] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(h) {
      return new Promise(function(A) {
        i.decodeDracoFile(h, function(d) {
          for (const p in d.attributes) {
            const g = d.attributes[p], f = c[p];
            f !== void 0 && (g.normalized = f);
          }
          A(d);
        }, a, l);
      });
    });
  }
}
class rg {
  constructor() {
    this.name = Fe.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return t.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class ag {
  constructor() {
    this.name = Fe.KHR_MESH_QUANTIZATION;
  }
}
class Pc extends Xi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let r = 0; r !== i; r++)
      t[r] = n[s + r];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, a = this.valueSize, c = a * 2, l = a * 3, h = i - t, A = (n - t) / h, d = A * A, p = d * A, g = e * l, f = g - l, u = -2 * p + 3 * d, m = p - d, E = 1 - u, b = m - d + A;
    for (let x = 0; x !== a; x++) {
      const C = r[f + x + a], S = r[f + x + c] * h, D = r[g + x + a], _ = r[g + x] * h;
      s[x] = E * C + b * S + u * D + m * _;
    }
    return s;
  }
}
const og = new Wt();
class cg extends Pc {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return og.fromArray(s).normalize().toArray(s), s;
  }
}
const Qt = {
  FLOAT: 5126,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, li = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Oo = {
  9728: at,
  9729: dt,
  9984: Sr,
  9985: tc,
  9986: Cs,
  9987: bn
}, Ho = {
  33071: wt,
  33648: Ss,
  10497: di
}, gr = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Hr = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, un = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, lg = {
  CUBICSPLINE: void 0,
  LINEAR: fi,
  STEP: Oi
}, mr = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function hg(o) {
  return o.DefaultMaterial === void 0 && (o.DefaultMaterial = new qi({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: mn
  })), o.DefaultMaterial;
}
function Li(o, e, t) {
  for (const n in t.extensions)
    o[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function fn(o, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(o.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Ag(o, e, t) {
  let n = !1, i = !1, s = !1;
  for (let l = 0, h = e.length; l < h; l++) {
    const A = e[l];
    if (A.POSITION !== void 0 && (n = !0), A.NORMAL !== void 0 && (i = !0), A.COLOR_0 !== void 0 && (s = !0), n && i && s)
      break;
  }
  if (!n && !i && !s)
    return Promise.resolve(o);
  const r = [], a = [], c = [];
  for (let l = 0, h = e.length; l < h; l++) {
    const A = e[l];
    if (n) {
      const d = A.POSITION !== void 0 ? t.getDependency("accessor", A.POSITION) : o.attributes.position;
      r.push(d);
    }
    if (i) {
      const d = A.NORMAL !== void 0 ? t.getDependency("accessor", A.NORMAL) : o.attributes.normal;
      a.push(d);
    }
    if (s) {
      const d = A.COLOR_0 !== void 0 ? t.getDependency("accessor", A.COLOR_0) : o.attributes.color;
      c.push(d);
    }
  }
  return Promise.all([
    Promise.all(r),
    Promise.all(a),
    Promise.all(c)
  ]).then(function(l) {
    const h = l[0], A = l[1], d = l[2];
    return n && (o.morphAttributes.position = h), i && (o.morphAttributes.normal = A), s && (o.morphAttributes.color = d), o.morphTargetsRelative = !0, o;
  });
}
function dg(o, e) {
  if (o.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      o.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (o.morphTargetInfluences.length === t.length) {
      o.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        o.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function ug(o) {
  const e = o.extensions && o.extensions[Fe.KHR_DRACO_MESH_COMPRESSION];
  let t;
  return e ? t = "draco:" + e.bufferView + ":" + e.indices + ":" + zo(e.attributes) : t = o.indices + ":" + zo(o.attributes) + ":" + o.mode, t;
}
function zo(o) {
  let e = "";
  const t = Object.keys(o).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + o[t[n]] + ";";
  return e;
}
function zr(o) {
  switch (o) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function fg(o) {
  return o.search(/\.jpe?g($|\?)/i) > 0 || o.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : o.search(/\.webp($|\?)/i) > 0 || o.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const pg = new we();
class gg {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Hp(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, s = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new Ip(this.options.manager) : this.textureLoader = new Sp(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Fn(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this._invokeAll(function(r) {
      return r._markDefs && r._markDefs();
    }), Promise.all(this._invokeAll(function(r) {
      return r.beforeRoot && r.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(r) {
      const a = {
        scene: r[0][i.scene || 0],
        scenes: r[0],
        animations: r[1],
        cameras: r[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      Li(s, a, i), fn(a, i), Promise.all(n._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(a);
      })).then(function() {
        e(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i].joints;
      for (let a = 0, c = r.length; a < c; a++)
        e[r[a]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const r = e[i];
      r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1)
      return n;
    const i = n.clone(), s = (r, a) => {
      const c = this.associations.get(r);
      c != null && this.associations.set(a, c);
      for (const [l, h] of r.children.entries())
        s(h, a.children[l]);
    };
    return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i)
        return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, r) {
        return n.getDependency(e, r);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Fe.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, r) {
      n.load(Pn.resolveURL(t.uri, i.path), s, void 0, function() {
        r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const r = gr[i.type], a = li[i.componentType], c = i.normalized === !0, l = new a(i.count * r);
      return Promise.resolve(new lt(l, r, c));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(r) {
      const a = r[0], c = gr[i.type], l = li[i.componentType], h = l.BYTES_PER_ELEMENT, A = h * c, d = i.byteOffset || 0, p = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let f, u;
      if (p && p !== A) {
        const m = Math.floor(d / p), E = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + m + ":" + i.count;
        let b = t.cache.get(E);
        b || (f = new l(a, m * p, i.count * p / h), b = new tp(f, p / h), t.cache.add(E, b)), u = new $r(b, c, d % p / h, g);
      } else
        a === null ? f = new l(i.count * c) : f = new l(a, d, i.count * c), u = new lt(f, c, g);
      if (i.sparse !== void 0) {
        const m = gr.SCALAR, E = li[i.sparse.indices.componentType], b = i.sparse.indices.byteOffset || 0, x = i.sparse.values.byteOffset || 0, C = new E(r[1], b, i.sparse.count * m), S = new l(r[2], x, i.sparse.count * c);
        a !== null && (u = new lt(u.array.slice(), u.itemSize, u.normalized));
        for (let D = 0, _ = C.length; D < _; D++) {
          const w = C[D];
          if (u.setX(w, S[D * c]), c >= 2 && u.setY(w, S[D * c + 1]), c >= 3 && u.setZ(w, S[D * c + 2]), c >= 4 && u.setW(w, S[D * c + 3]), c >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return u;
    });
  }
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, r = t.images[s];
    let a = this.textureLoader;
    if (r.uri) {
      const c = n.manager.getHandler(r.uri);
      c !== null && (a = c);
    }
    return this.loadTextureImage(e, s, a);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, r = s.textures[e], a = s.images[t], c = (a.uri || a.bufferView) + ":" + r.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const l = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = r.name || a.name || "";
      const d = (s.samplers || {})[r.sampler] || {};
      return h.magFilter = Oo[d.magFilter] || dt, h.minFilter = Oo[d.minFilter] || bn, h.wrapS = Ho[d.wrapS] || di, h.wrapT = Ho[d.wrapT] || di, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((A) => A.clone());
    const r = i.images[e], a = self.URL || self.webkitURL;
    let c = r.uri || "", l = !1;
    if (r.bufferView !== void 0)
      c = n.getDependency("bufferView", r.bufferView).then(function(A) {
        l = !0;
        const d = new Blob([A], { type: r.mimeType });
        return c = a.createObjectURL(d), c;
      });
    else if (r.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(c).then(function(A) {
      return new Promise(function(d, p) {
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(f) {
          const u = new ot(f);
          u.needsUpdate = !0, d(u);
        }), t.load(Pn.resolveURL(A, s.path), g, void 0, p);
      });
    }).then(function(A) {
      return l === !0 && a.revokeObjectURL(c), A.userData.mimeType = r.mimeType || fg(r.uri), A;
    }).catch(function(A) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), A;
    });
    return this.sourceCache[e] = h, h;
  }
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(r) {
      if (!r)
        return null;
      if (n.texCoord !== void 0 && n.texCoord != 0 && !(t === "aoMap" && n.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + n.texCoord + " for texture " + t + " not yet supported."), s.extensions[Fe.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[Fe.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const c = s.associations.get(r);
          r = s.extensions[Fe.KHR_TEXTURE_TRANSFORM].extendTexture(r, a), s.associations.set(r, c);
        }
      }
      return i !== void 0 && (r.encoding = i), e[t] = r, r;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, r = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(a);
      c || (c = new Mc(), Vt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(a, c)), n = c;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(a);
      c || (c = new ta(), Vt.prototype.copy.call(c, n), c.color.copy(n.color), this.cache.add(a, c)), n = c;
    }
    if (i || s || r) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      i && (a += "derivative-tangents:"), s && (a += "vertex-colors:"), r && (a += "flat-shading:");
      let c = this.cache.get(a);
      c || (c = n.clone(), s && (c.vertexColors = !0), r && (c.flatShading = !0), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(a, c), this.associations.set(c, this.associations.get(n))), n = c;
    }
    n.aoMap && t.attributes.uv2 === void 0 && t.attributes.uv !== void 0 && t.setAttribute("uv2", t.attributes.uv), e.material = n;
  }
  getMaterialType() {
    return qi;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let r;
    const a = {}, c = s.extensions || {}, l = [];
    if (c[Fe.KHR_MATERIALS_UNLIT]) {
      const A = i[Fe.KHR_MATERIALS_UNLIT];
      r = A.getMaterialType(), l.push(A.extendParams(a, s, t));
    } else {
      const A = s.pbrMetallicRoughness || {};
      if (a.color = new ye(1, 1, 1), a.opacity = 1, Array.isArray(A.baseColorFactor)) {
        const d = A.baseColorFactor;
        a.color.fromArray(d), a.opacity = d[3];
      }
      A.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", A.baseColorTexture, Se)), a.metalness = A.metallicFactor !== void 0 ? A.metallicFactor : 1, a.roughness = A.roughnessFactor !== void 0 ? A.roughnessFactor : 1, A.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", A.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", A.metallicRoughnessTexture))), r = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    s.doubleSided === !0 && (a.side = Ki);
    const h = s.alphaMode || mr.OPAQUE;
    if (h === mr.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, h === mr.MASK && (a.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && r !== pn && (l.push(t.assignTexture(a, "normalMap", s.normalTexture)), a.normalScale = new xe(1, 1), s.normalTexture.scale !== void 0)) {
      const A = s.normalTexture.scale;
      a.normalScale.set(A, A);
    }
    return s.occlusionTexture !== void 0 && r !== pn && (l.push(t.assignTexture(a, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && r !== pn && (a.emissive = new ye().fromArray(s.emissiveFactor)), s.emissiveTexture !== void 0 && r !== pn && l.push(t.assignTexture(a, "emissiveMap", s.emissiveTexture, Se)), Promise.all(l).then(function() {
      const A = new r(a);
      return s.name && (A.name = s.name), fn(A, s), t.associations.set(A, { materials: e }), s.extensions && Li(i, A, s), A;
    });
  }
  createUniqueName(e) {
    const t = Ge.sanitizeNodeName(e || "");
    let n = t;
    for (let i = 1; this.nodeNamesUsed[n]; ++i)
      n = t + "_" + i;
    return this.nodeNamesUsed[n] = !0, n;
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(a) {
      return n[Fe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(c) {
        return Vo(c, a, t);
      });
    }
    const r = [];
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a], h = ug(l), A = i[h];
      if (A)
        r.push(A.promise);
      else {
        let d;
        l.extensions && l.extensions[Fe.KHR_DRACO_MESH_COMPRESSION] ? d = s(l) : d = Vo(new Tt(), l, t), i[h] = { primitive: l, promise: d }, r.push(d);
      }
    }
    return Promise.all(r);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], r = s.primitives, a = [];
    for (let c = 0, l = r.length; c < l; c++) {
      const h = r[c].material === void 0 ? hg(this.cache) : this.getDependency("material", r[c].material);
      a.push(h);
    }
    return a.push(t.loadGeometries(r)), Promise.all(a).then(function(c) {
      const l = c.slice(0, c.length - 1), h = c[c.length - 1], A = [];
      for (let p = 0, g = h.length; p < g; p++) {
        const f = h[p], u = r[p];
        let m;
        const E = l[p];
        if (u.mode === Qt.TRIANGLES || u.mode === Qt.TRIANGLE_STRIP || u.mode === Qt.TRIANGLE_FAN || u.mode === void 0)
          m = s.isSkinnedMesh === !0 ? new ip(f, E) : new Ve(f, E), m.isSkinnedMesh === !0 && !m.geometry.attributes.skinWeight.normalized && m.normalizeSkinWeights(), u.mode === Qt.TRIANGLE_STRIP ? m.geometry = Wo(m.geometry, kl) : u.mode === Qt.TRIANGLE_FAN && (m.geometry = Wo(m.geometry, sc));
        else if (u.mode === Qt.LINES)
          m = new op(f, E);
        else if (u.mode === Qt.LINE_STRIP)
          m = new Wi(f, E);
        else if (u.mode === Qt.LINE_LOOP)
          m = new cp(f, E);
        else if (u.mode === Qt.POINTS)
          m = new lp(f, E);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + u.mode);
        Object.keys(m.geometry.morphAttributes).length > 0 && dg(m, s), m.name = t.createUniqueName(s.name || "mesh_" + e), fn(m, s), u.extensions && Li(i, m, u), t.assignFinalMaterial(m), A.push(m);
      }
      for (let p = 0, g = A.length; p < g; p++)
        t.associations.set(A[p], {
          meshes: e,
          primitives: p
        });
      if (A.length === 1)
        return A[0];
      const d = new Rn();
      t.associations.set(d, { meshes: e });
      for (let p = 0, g = A.length; p < g; p++)
        d.add(A[p]);
      return d;
    });
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new Et(th.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Xr(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), fn(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, s = t.joints.length; i < s; i++)
      n.push(this.getDependency("node", t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const s = i.pop(), r = i, a = [], c = [];
      for (let l = 0, h = r.length; l < h; l++) {
        const A = r[l];
        if (A) {
          a.push(A);
          const d = new we();
          s !== null && d.fromArray(s.array, l * 16), c.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new ea(a, c);
    });
  }
  loadAnimation(e) {
    const n = this.json.animations[e], i = [], s = [], r = [], a = [], c = [];
    for (let l = 0, h = n.channels.length; l < h; l++) {
      const A = n.channels[l], d = n.samplers[A.sampler], p = A.target, g = p.node, f = n.parameters !== void 0 ? n.parameters[d.input] : d.input, u = n.parameters !== void 0 ? n.parameters[d.output] : d.output;
      i.push(this.getDependency("node", g)), s.push(this.getDependency("accessor", f)), r.push(this.getDependency("accessor", u)), a.push(d), c.push(p);
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(s),
      Promise.all(r),
      Promise.all(a),
      Promise.all(c)
    ]).then(function(l) {
      const h = l[0], A = l[1], d = l[2], p = l[3], g = l[4], f = [];
      for (let m = 0, E = h.length; m < E; m++) {
        const b = h[m], x = A[m], C = d[m], S = p[m], D = g[m];
        if (b === void 0)
          continue;
        b.updateMatrix();
        let _;
        switch (un[D.path]) {
          case un.weights:
            _ = ji;
            break;
          case un.rotation:
            _ = Un;
            break;
          case un.position:
          case un.scale:
          default:
            _ = Yi;
            break;
        }
        const w = b.name ? b.name : b.uuid, R = S.interpolation !== void 0 ? lg[S.interpolation] : fi, G = [];
        un[D.path] === un.weights ? b.traverse(function(P) {
          P.morphTargetInfluences && G.push(P.name ? P.name : P.uuid);
        }) : G.push(w);
        let Y = C.array;
        if (C.normalized) {
          const P = zr(Y.constructor), L = new Float32Array(Y.length);
          for (let N = 0, J = Y.length; N < J; N++)
            L[N] = Y[N] * P;
          Y = L;
        }
        for (let P = 0, L = G.length; P < L; P++) {
          const N = new _(
            G[P] + "." + un[D.path],
            x.array,
            Y,
            R
          );
          S.interpolation === "CUBICSPLINE" && (N.createInterpolant = function(K) {
            const U = this instanceof Un ? cg : Pc;
            return new U(this.times, this.values, this.getValueSize() / 3, K);
          }, N.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), f.push(N);
        }
      }
      const u = n.name ? n.name : "animation_" + e;
      return new gp(u, void 0, f);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const r = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && r.traverse(function(a) {
        if (a.isMesh)
          for (let c = 0, l = i.weights.length; c < l; c++)
            a.morphTargetInfluences[c] = i.weights[c];
      }), r;
    });
  }
  loadNode(e) {
    const t = this.json, n = this.extensions, i = this, s = t.nodes[e], r = s.name ? i.createUniqueName(s.name) : "";
    return function() {
      const a = [], c = i._invokeOne(function(d) {
        return d.createNodeMesh && d.createNodeMesh(e);
      });
      c && a.push(c), s.camera !== void 0 && a.push(i.getDependency("camera", s.camera).then(function(d) {
        return i._getNodeRef(i.cameraCache, s.camera, d);
      })), i._invokeAll(function(d) {
        return d.createNodeAttachment && d.createNodeAttachment(e);
      }).forEach(function(d) {
        a.push(d);
      });
      const l = [], h = s.children || [];
      for (let d = 0, p = h.length; d < p; d++)
        l.push(i.getDependency("node", h[d]));
      const A = s.skin === void 0 ? Promise.resolve(null) : i.getDependency("skin", s.skin);
      return Promise.all([
        Promise.all(a),
        Promise.all(l),
        A
      ]);
    }().then(function(a) {
      const c = a[0], l = a[1], h = a[2];
      let A;
      if (s.isBone === !0 ? A = new yc() : c.length > 1 ? A = new Rn() : c.length === 1 ? A = c[0] : A = new qe(), A !== c[0])
        for (let d = 0, p = c.length; d < p; d++)
          A.add(c[d]);
      if (s.name && (A.userData.name = s.name, A.name = r), fn(A, s), s.extensions && Li(n, A, s), s.matrix !== void 0) {
        const d = new we();
        d.fromArray(s.matrix), A.applyMatrix4(d);
      } else
        s.translation !== void 0 && A.position.fromArray(s.translation), s.rotation !== void 0 && A.quaternion.fromArray(s.rotation), s.scale !== void 0 && A.scale.fromArray(s.scale);
      i.associations.has(A) || i.associations.set(A, {}), i.associations.get(A).nodes = e, h !== null && A.traverse(function(d) {
        d.isSkinnedMesh && d.bind(h, pg);
      });
      for (let d = 0, p = l.length; d < p; d++)
        A.add(l[d]);
      return A;
    });
  }
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new Rn();
    n.name && (s.name = i.createUniqueName(n.name)), fn(s, n), n.extensions && Li(t, s, n);
    const r = n.nodes || [], a = [];
    for (let c = 0, l = r.length; c < l; c++)
      a.push(i.getDependency("node", r[c]));
    return Promise.all(a).then(function(c) {
      for (let h = 0, A = c.length; h < A; h++)
        s.add(c[h]);
      const l = (h) => {
        const A = /* @__PURE__ */ new Map();
        for (const [d, p] of i.associations)
          (d instanceof Vt || d instanceof ot) && A.set(d, p);
        return h.traverse((d) => {
          const p = i.associations.get(d);
          p != null && A.set(d, p);
        }), A;
      };
      return i.associations = l(s), s;
    });
  }
}
function mg(o, e, t) {
  const n = e.attributes, i = new Gn();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], c = a.min, l = a.max;
    if (c !== void 0 && l !== void 0) {
      if (i.set(
        new B(c[0], c[1], c[2]),
        new B(l[0], l[1], l[2])
      ), a.normalized) {
        const h = zr(li[a.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const a = new B(), c = new B();
    for (let l = 0, h = s.length; l < h; l++) {
      const A = s[l];
      if (A.POSITION !== void 0) {
        const d = t.json.accessors[A.POSITION], p = d.min, g = d.max;
        if (p !== void 0 && g !== void 0) {
          if (c.setX(Math.max(Math.abs(p[0]), Math.abs(g[0]))), c.setY(Math.max(Math.abs(p[1]), Math.abs(g[1]))), c.setZ(Math.max(Math.abs(p[2]), Math.abs(g[2]))), d.normalized) {
            const f = zr(li[d.componentType]);
            c.multiplyScalar(f);
          }
          a.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(a);
  }
  o.boundingBox = i;
  const r = new mi();
  i.getCenter(r.center), r.radius = i.min.distanceTo(i.max) / 2, o.boundingSphere = r;
}
function Vo(o, e, t) {
  const n = e.attributes, i = [];
  function s(r, a) {
    return t.getDependency("accessor", r).then(function(c) {
      o.setAttribute(a, c);
    });
  }
  for (const r in n) {
    const a = Hr[r] || r.toLowerCase();
    a in o.attributes || i.push(s(n[r], a));
  }
  if (e.indices !== void 0 && !o.index) {
    const r = t.getDependency("accessor", e.indices).then(function(a) {
      o.setIndex(a);
    });
    i.push(r);
  }
  return fn(o, e), mg(o, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? Ag(o, e.targets, t) : o;
  });
}
function Wo(o, e) {
  let t = o.getIndex();
  if (t === null) {
    const r = [], a = o.getAttribute("position");
    if (a !== void 0) {
      for (let c = 0; c < a.count; c++)
        r.push(c);
      o.setIndex(r), t = o.getIndex();
    } else
      return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), o;
  }
  const n = t.count - 2, i = [];
  if (e === sc)
    for (let r = 1; r <= n; r++)
      i.push(t.getX(0)), i.push(t.getX(r)), i.push(t.getX(r + 1));
  else
    for (let r = 0; r < n; r++)
      r % 2 === 0 ? (i.push(t.getX(r)), i.push(t.getX(r + 1)), i.push(t.getX(r + 2))) : (i.push(t.getX(r + 2)), i.push(t.getX(r + 1)), i.push(t.getX(r)));
  i.length / 3 !== n && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
  const s = o.clone();
  return s.setIndex(i), s;
}
const br = /* @__PURE__ */ new WeakMap();
class bg extends xn {
  constructor(e) {
    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    }, this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(e) {
    return this.decoderPath = e, this;
  }
  setDecoderConfig(e) {
    return this.decoderConfig = e, this;
  }
  setWorkerLimit(e) {
    return this.workerLimit = e, this;
  }
  load(e, t, n, i) {
    const s = new Fn(this.manager);
    s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, (r) => {
      this.decodeDracoFile(r, t).catch(i);
    }, n, i);
  }
  decodeDracoFile(e, t, n, i) {
    const s = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: i || this.defaultAttributeTypes,
      useUniqueIDs: !!n
    };
    return this.decodeGeometry(e, s).then(t);
  }
  decodeGeometry(e, t) {
    const n = JSON.stringify(t);
    if (br.has(e)) {
      const c = br.get(e);
      if (c.key === n)
        return c.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let i;
    const s = this.workerNextTaskID++, r = e.byteLength, a = this._getWorker(s, r).then((c) => (i = c, new Promise((l, h) => {
      i._callbacks[s] = { resolve: l, reject: h }, i.postMessage({ type: "decode", id: s, taskConfig: t, buffer: e }, [e]);
    }))).then((c) => this._createGeometry(c.geometry));
    return a.catch(() => !0).then(() => {
      i && s && this._releaseTask(i, s);
    }), br.set(e, {
      key: n,
      promise: a
    }), a;
  }
  _createGeometry(e) {
    const t = new Tt();
    e.index && t.setIndex(new lt(e.index.array, 1));
    for (let n = 0; n < e.attributes.length; n++) {
      const i = e.attributes[n], s = i.name, r = i.array, a = i.itemSize;
      t.setAttribute(s, new lt(r, a));
    }
    return t;
  }
  _loadLibrary(e, t) {
    const n = new Fn(this.manager);
    return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((i, s) => {
      n.load(e, i, void 0, s);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending)
      return this.decoderPending;
    const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
    return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((n) => {
      const i = n[0];
      e || (this.decoderConfig.wasmBinary = n[1]);
      const s = _g.toString(), r = [
        "/* draco decoder */",
        i,
        "",
        "/* worker */",
        s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([r]));
    }), this.decoderPending;
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const i = new Worker(this.workerSourceURL);
        i._callbacks = {}, i._taskCosts = {}, i._taskLoad = 0, i.postMessage({ type: "init", decoderConfig: this.decoderConfig }), i.onmessage = function(s) {
          const r = s.data;
          switch (r.type) {
            case "decode":
              i._callbacks[r.id].resolve(r);
              break;
            case "error":
              i._callbacks[r.id].reject(r);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + r.type + '"');
          }
        }, this.workerPool.push(i);
      } else
        this.workerPool.sort(function(i, s) {
          return i._taskLoad > s._taskLoad ? -1 : 1;
        });
      const n = this.workerPool[this.workerPool.length - 1];
      return n._taskCosts[e] = t, n._taskLoad += t, n;
    });
  }
  _releaseTask(e, t) {
    e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
  }
  debug() {
    console.log("Task load: ", this.workerPool.map((e) => e._taskLoad));
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e)
      this.workerPool[e].terminate();
    return this.workerPool.length = 0, this;
  }
}
function _g() {
  let o, e;
  onmessage = function(r) {
    const a = r.data;
    switch (a.type) {
      case "init":
        o = a.decoderConfig, e = new Promise(function(h) {
          o.onModuleLoaded = function(A) {
            h({ draco: A });
          }, DracoDecoderModule(o);
        });
        break;
      case "decode":
        const c = a.buffer, l = a.taskConfig;
        e.then((h) => {
          const A = h.draco, d = new A.Decoder(), p = new A.DecoderBuffer();
          p.Init(new Int8Array(c), c.byteLength);
          try {
            const g = t(A, d, p, l), f = g.attributes.map((u) => u.array.buffer);
            g.index && f.push(g.index.array.buffer), self.postMessage({ type: "decode", id: a.id, geometry: g }, f);
          } catch (g) {
            console.error(g), self.postMessage({ type: "error", id: a.id, error: g.message });
          } finally {
            A.destroy(p), A.destroy(d);
          }
        });
        break;
    }
  };
  function t(r, a, c, l) {
    const h = l.attributeIDs, A = l.attributeTypes;
    let d, p;
    const g = a.GetEncodedGeometryType(c);
    if (g === r.TRIANGULAR_MESH)
      d = new r.Mesh(), p = a.DecodeBufferToMesh(c, d);
    else if (g === r.POINT_CLOUD)
      d = new r.PointCloud(), p = a.DecodeBufferToPointCloud(c, d);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!p.ok() || d.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + p.error_msg());
    const f = { index: null, attributes: [] };
    for (const u in h) {
      const m = self[A[u]];
      let E, b;
      if (l.useUniqueIDs)
        b = h[u], E = a.GetAttributeByUniqueId(d, b);
      else {
        if (b = a.GetAttributeId(d, r[h[u]]), b === -1)
          continue;
        E = a.GetAttribute(d, b);
      }
      f.attributes.push(i(r, a, d, u, m, E));
    }
    return g === r.TRIANGULAR_MESH && (f.index = n(r, a, d)), r.destroy(d), f;
  }
  function n(r, a, c) {
    const h = c.num_faces() * 3, A = h * 4, d = r._malloc(A);
    a.GetTrianglesUInt32Array(c, A, d);
    const p = new Uint32Array(r.HEAPF32.buffer, d, h).slice();
    return r._free(d), { array: p, itemSize: 1 };
  }
  function i(r, a, c, l, h, A) {
    const d = A.num_components(), g = c.num_points() * d, f = g * h.BYTES_PER_ELEMENT, u = s(r, h), m = r._malloc(f);
    a.GetAttributeDataArrayForAllPoints(c, A, u, f, m);
    const E = new h(r.HEAPF32.buffer, m, g).slice();
    return r._free(m), {
      name: l,
      array: E,
      itemSize: d
    };
  }
  function s(r, a) {
    switch (a) {
      case Float32Array:
        return r.DT_FLOAT32;
      case Int8Array:
        return r.DT_INT8;
      case Int16Array:
        return r.DT_INT16;
      case Int32Array:
        return r.DT_INT32;
      case Uint8Array:
        return r.DT_UINT8;
      case Uint16Array:
        return r.DT_UINT16;
      case Uint32Array:
        return r.DT_UINT32;
    }
  }
}
class xg {
  constructor(e = 4) {
    this.pool = e, this.queue = [], this.workers = [], this.workersResolve = [], this.workerStatus = 0;
  }
  _initWorker(e) {
    if (!this.workers[e]) {
      const t = this.workerCreator();
      t.addEventListener("message", this._onMessage.bind(this, e)), this.workers[e] = t;
    }
  }
  _getIdleWorker() {
    for (let e = 0; e < this.pool; e++)
      if (!(this.workerStatus & 1 << e))
        return e;
    return -1;
  }
  _onMessage(e, t) {
    const n = this.workersResolve[e];
    if (n && n(t), this.queue.length) {
      const { resolve: i, msg: s, transfer: r } = this.queue.shift();
      this.workersResolve[e] = i, this.workers[e].postMessage(s, r);
    } else
      this.workerStatus ^= 1 << e;
  }
  setWorkerCreator(e) {
    this.workerCreator = e;
  }
  setWorkerLimit(e) {
    this.pool = e;
  }
  postMessage(e, t) {
    return new Promise((n) => {
      const i = this._getIdleWorker();
      i !== -1 ? (this._initWorker(i), this.workerStatus |= 1 << i, this.workersResolve[i] = n, this.workers[i].postMessage(e, t)) : this.queue.push({ resolve: n, msg: e, transfer: t });
    });
  }
  dispose() {
    this.workers.forEach((e) => e.terminate()), this.workersResolve.length = 0, this.workers.length = 0, this.queue.length = 0, this.workerStatus = 0;
  }
}
const Eg = 0, Ig = 2, Cg = 1, yg = 2, vg = 0, kc = 9, ra = 15, Nc = 16, aa = 22, Uc = 37, oa = 43, Gc = 76, Oc = 83, Hc = 97, zc = 100, Vc = 103, Wc = 109;
class Mg {
  constructor() {
    this.vkFormat = 0, this.typeSize = 1, this.pixelWidth = 0, this.pixelHeight = 0, this.pixelDepth = 0, this.layerCount = 0, this.faceCount = 1, this.supercompressionScheme = 0, this.levels = [], this.dataFormatDescriptor = [{ vendorId: 0, descriptorType: 0, descriptorBlockSize: 0, versionNumber: 2, colorModel: 0, colorPrimaries: 1, transferFunction: 2, flags: 0, texelBlockDimension: [0, 0, 0, 0], bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0], samples: [] }], this.keyValue = {}, this.globalData = null;
  }
}
class Qi {
  constructor(e, t, n, i) {
    this._dataView = new DataView(e.buffer, e.byteOffset + t, n), this._littleEndian = i, this._offset = 0;
  }
  _nextUint8() {
    const e = this._dataView.getUint8(this._offset);
    return this._offset += 1, e;
  }
  _nextUint16() {
    const e = this._dataView.getUint16(this._offset, this._littleEndian);
    return this._offset += 2, e;
  }
  _nextUint32() {
    const e = this._dataView.getUint32(this._offset, this._littleEndian);
    return this._offset += 4, e;
  }
  _nextUint64() {
    const e = this._dataView.getUint32(this._offset, this._littleEndian) + 4294967296 * this._dataView.getUint32(this._offset + 4, this._littleEndian);
    return this._offset += 8, e;
  }
  _nextInt32() {
    const e = this._dataView.getInt32(this._offset, this._littleEndian);
    return this._offset += 4, e;
  }
  _skip(e) {
    return this._offset += e, this;
  }
  _scan(e, t = 0) {
    const n = this._offset;
    let i = 0;
    for (; this._dataView.getUint8(this._offset) !== t && i < e; )
      i++, this._offset++;
    return i < e && this._offset++, new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + n, i);
  }
}
const bt = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
function qo(o) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(o) : Buffer.from(o).toString("utf8");
}
function wg(o) {
  const e = new Uint8Array(o.buffer, o.byteOffset, bt.length);
  if (e[0] !== bt[0] || e[1] !== bt[1] || e[2] !== bt[2] || e[3] !== bt[3] || e[4] !== bt[4] || e[5] !== bt[5] || e[6] !== bt[6] || e[7] !== bt[7] || e[8] !== bt[8] || e[9] !== bt[9] || e[10] !== bt[10] || e[11] !== bt[11])
    throw new Error("Missing KTX 2.0 identifier.");
  const t = new Mg(), n = 17 * Uint32Array.BYTES_PER_ELEMENT, i = new Qi(o, bt.length, n, !0);
  t.vkFormat = i._nextUint32(), t.typeSize = i._nextUint32(), t.pixelWidth = i._nextUint32(), t.pixelHeight = i._nextUint32(), t.pixelDepth = i._nextUint32(), t.layerCount = i._nextUint32(), t.faceCount = i._nextUint32();
  const s = i._nextUint32();
  t.supercompressionScheme = i._nextUint32();
  const r = i._nextUint32(), a = i._nextUint32(), c = i._nextUint32(), l = i._nextUint32(), h = i._nextUint64(), A = i._nextUint64(), d = new Qi(o, bt.length + n, 3 * s * 8, !0);
  for (let K = 0; K < s; K++)
    t.levels.push({ levelData: new Uint8Array(o.buffer, o.byteOffset + d._nextUint64(), d._nextUint64()), uncompressedByteLength: d._nextUint64() });
  const p = new Qi(o, r, a, !0), g = { vendorId: p._skip(4)._nextUint16(), descriptorType: p._nextUint16(), versionNumber: p._nextUint16(), descriptorBlockSize: p._nextUint16(), colorModel: p._nextUint8(), colorPrimaries: p._nextUint8(), transferFunction: p._nextUint8(), flags: p._nextUint8(), texelBlockDimension: [p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8()], bytesPlane: [p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8()], samples: [] }, f = (g.descriptorBlockSize / 4 - 6) / 4;
  for (let K = 0; K < f; K++) {
    const U = { bitOffset: p._nextUint16(), bitLength: p._nextUint8(), channelType: p._nextUint8(), samplePosition: [p._nextUint8(), p._nextUint8(), p._nextUint8(), p._nextUint8()], sampleLower: -1 / 0, sampleUpper: 1 / 0 };
    64 & U.channelType ? (U.sampleLower = p._nextInt32(), U.sampleUpper = p._nextInt32()) : (U.sampleLower = p._nextUint32(), U.sampleUpper = p._nextUint32()), g.samples[K] = U;
  }
  t.dataFormatDescriptor.length = 0, t.dataFormatDescriptor.push(g);
  const u = new Qi(o, c, l, !0);
  for (; u._offset < l; ) {
    const K = u._nextUint32(), U = u._scan(K), ee = qo(U), X = u._scan(K - U.byteLength);
    t.keyValue[ee] = ee.match(/^ktx/i) ? qo(X) : X, u._offset % 4 && u._skip(4 - u._offset % 4);
  }
  if (A <= 0)
    return t;
  const m = new Qi(o, h, A, !0), E = m._nextUint16(), b = m._nextUint16(), x = m._nextUint32(), C = m._nextUint32(), S = m._nextUint32(), D = m._nextUint32(), _ = [];
  for (let K = 0; K < s; K++)
    _.push({ imageFlags: m._nextUint32(), rgbSliceByteOffset: m._nextUint32(), rgbSliceByteLength: m._nextUint32(), alphaSliceByteOffset: m._nextUint32(), alphaSliceByteLength: m._nextUint32() });
  const w = h + m._offset, R = w + x, G = R + C, Y = G + S, P = new Uint8Array(o.buffer, o.byteOffset + w, x), L = new Uint8Array(o.buffer, o.byteOffset + R, C), N = new Uint8Array(o.buffer, o.byteOffset + G, S), J = new Uint8Array(o.buffer, o.byteOffset + Y, D);
  return t.globalData = { endpointCount: E, selectorCount: b, imageDescs: _, endpointsData: P, selectorsData: L, tablesData: N, extendedData: J }, t;
}
let _r, tn, Vr;
const xr = { env: { emscripten_notify_memory_growth: function(o) {
  Vr = new Uint8Array(tn.exports.memory.buffer);
} } };
class Sg {
  init() {
    return _r || (_r = typeof fetch < "u" ? fetch("data:application/wasm;base64," + jo).then((e) => e.arrayBuffer()).then((e) => WebAssembly.instantiate(e, xr)).then(this._init) : WebAssembly.instantiate(Buffer.from(jo, "base64"), xr).then(this._init), _r);
  }
  _init(e) {
    tn = e.instance, xr.env.emscripten_notify_memory_growth(0);
  }
  decode(e, t = 0) {
    if (!tn)
      throw new Error("ZSTDDecoder: Await .init() before decoding.");
    const n = e.byteLength, i = tn.exports.malloc(n);
    Vr.set(e, i), t = t || Number(tn.exports.ZSTD_findDecompressedSize(i, n));
    const s = tn.exports.malloc(t), r = tn.exports.ZSTD_decompress(s, t, i, n), a = Vr.slice(s, s + r);
    return tn.exports.free(i), tn.exports.free(s), a;
  }
}
const jo = "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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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", Er = /* @__PURE__ */ new WeakMap();
let Ir = 0, Cr;
class zt extends xn {
  constructor(e) {
    super(e), this.transcoderPath = "", this.transcoderBinary = null, this.transcoderPending = null, this.workerPool = new xg(), this.workerSourceURL = "", this.workerConfig = null, typeof MSC_TRANSCODER < "u" && console.warn(
      'THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.'
    );
  }
  setTranscoderPath(e) {
    return this.transcoderPath = e, this;
  }
  setWorkerLimit(e) {
    return this.workerPool.setWorkerLimit(e), this;
  }
  detectSupport(e) {
    return this.workerConfig = {
      astcSupported: e.extensions.has("WEBGL_compressed_texture_astc"),
      etc1Supported: e.extensions.has("WEBGL_compressed_texture_etc1"),
      etc2Supported: e.extensions.has("WEBGL_compressed_texture_etc"),
      dxtSupported: e.extensions.has("WEBGL_compressed_texture_s3tc"),
      bptcSupported: e.extensions.has("EXT_texture_compression_bptc"),
      pvrtcSupported: e.extensions.has("WEBGL_compressed_texture_pvrtc") || e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")
    }, e.capabilities.isWebGL2 && (this.workerConfig.etc1Supported = !1), this;
  }
  init() {
    if (!this.transcoderPending) {
      const e = new Fn(this.manager);
      e.setPath(this.transcoderPath), e.setWithCredentials(this.withCredentials);
      const t = e.loadAsync("basis_transcoder.js"), n = new Fn(this.manager);
      n.setPath(this.transcoderPath), n.setResponseType("arraybuffer"), n.setWithCredentials(this.withCredentials);
      const i = n.loadAsync("basis_transcoder.wasm");
      this.transcoderPending = Promise.all([t, i]).then(([s, r]) => {
        const a = zt.BasisWorker.toString(), c = [
          "/* constants */",
          "let _EngineFormat = " + JSON.stringify(zt.EngineFormat),
          "let _TranscoderFormat = " + JSON.stringify(zt.TranscoderFormat),
          "let _BasisFormat = " + JSON.stringify(zt.BasisFormat),
          "/* basis_transcoder.js */",
          s,
          "/* worker */",
          a.substring(a.indexOf("{") + 1, a.lastIndexOf("}"))
        ].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([c])), this.transcoderBinary = r, this.workerPool.setWorkerCreator(() => {
          const l = new Worker(this.workerSourceURL), h = this.transcoderBinary.slice(0);
          return l.postMessage({ type: "init", config: this.workerConfig, transcoderBinary: h }, [h]), l;
        });
      }), Ir > 0 && console.warn(
        "THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."
      ), Ir++;
    }
    return this.transcoderPending;
  }
  load(e, t, n, i) {
    if (this.workerConfig === null)
      throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
    const s = new Fn(this.manager);
    s.setResponseType("arraybuffer"), s.setWithCredentials(this.withCredentials), s.load(e, (r) => {
      if (Er.has(r))
        return Er.get(r).promise.then(t).catch(i);
      this._createTexture(r).then((a) => t ? t(a) : null).catch(i);
    }, n, i);
  }
  _createTextureFrom(e, t) {
    const { mipmaps: n, width: i, height: s, format: r, type: a, error: c, dfdTransferFn: l, dfdFlags: h } = e;
    if (a === "error")
      return Promise.reject(c);
    const A = t.layerCount > 1 ? new hp(n, i, s, t.layerCount, r, xt) : new wc(n, i, s, r, xt);
    return A.minFilter = n.length === 1 ? dt : bn, A.magFilter = dt, A.generateMipmaps = !1, A.needsUpdate = !0, A.encoding = l === yg ? Se : on, A.premultiplyAlpha = !!(h & Cg), A;
  }
  async _createTexture(e, t = {}) {
    const n = wg(new Uint8Array(e));
    if (n.vkFormat !== vg)
      return Tg(n);
    const i = t, s = this.init().then(() => this.workerPool.postMessage({ type: "transcode", buffer: e, taskConfig: i }, [e])).then((r) => this._createTextureFrom(r.data, n));
    return Er.set(e, { promise: s }), s;
  }
  dispose() {
    return this.workerPool.dispose(), this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL), Ir--, this;
  }
}
zt.BasisFormat = {
  ETC1S: 0,
  UASTC_4x4: 1
};
zt.TranscoderFormat = {
  ETC1: 0,
  ETC2: 1,
  BC1: 2,
  BC3: 3,
  BC4: 4,
  BC5: 5,
  BC7_M6_OPAQUE_ONLY: 6,
  BC7_M5: 7,
  PVRTC1_4_RGB: 8,
  PVRTC1_4_RGBA: 9,
  ASTC_4x4: 10,
  ATC_RGB: 11,
  ATC_RGBA_INTERPOLATED_ALPHA: 12,
  RGBA32: 13,
  RGB565: 14,
  BGR565: 15,
  RGBA4444: 16
};
zt.EngineFormat = {
  RGBAFormat: ct,
  RGBA_ASTC_4x4_Format: Lr,
  RGBA_BPTC_Format: Qr,
  RGBA_ETC2_EAC_Format: Rr,
  RGBA_PVRTC_4BPPV1_Format: Tr,
  RGBA_S3TC_DXT5_Format: vs,
  RGB_ETC1_Format: ic,
  RGB_ETC2_Format: Dr,
  RGB_PVRTC_4BPPV1_Format: Br,
  RGB_S3TC_DXT1_Format: ys
};
zt.BasisWorker = function() {
  let o, e, t;
  const n = _EngineFormat, i = _TranscoderFormat, s = _BasisFormat;
  self.addEventListener("message", function(g) {
    const f = g.data;
    switch (f.type) {
      case "init":
        o = f.config, r(f.transcoderBinary);
        break;
      case "transcode":
        e.then(() => {
          try {
            const { width: u, height: m, hasAlpha: E, mipmaps: b, format: x, dfdTransferFn: C, dfdFlags: S } = a(f.buffer), D = [];
            for (let _ = 0; _ < b.length; ++_)
              D.push(b[_].data.buffer);
            self.postMessage({ type: "transcode", id: f.id, width: u, height: m, hasAlpha: E, mipmaps: b, format: x, dfdTransferFn: C, dfdFlags: S }, D);
          } catch (u) {
            console.error(u), self.postMessage({ type: "error", id: f.id, error: u.message });
          }
        });
        break;
    }
  });
  function r(g) {
    e = new Promise((f) => {
      t = { wasmBinary: g, onRuntimeInitialized: f }, BASIS(t);
    }).then(() => {
      t.initializeBasis(), t.KTX2File === void 0 && console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.");
    });
  }
  function a(g) {
    const f = new t.KTX2File(new Uint8Array(g));
    function u() {
      f.close(), f.delete();
    }
    if (!f.isValid())
      throw u(), new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");
    const m = f.isUASTC() ? s.UASTC_4x4 : s.ETC1S, E = f.getWidth(), b = f.getHeight(), x = f.getLayers() || 1, C = f.getLevels(), S = f.getHasAlpha(), D = f.getDFDTransferFunc(), _ = f.getDFDFlags(), { transcoderFormat: w, engineFormat: R } = A(m, E, b, S);
    if (!E || !b || !C)
      throw u(), new Error("THREE.KTX2Loader:	Invalid texture");
    if (!f.startTranscoding())
      throw u(), new Error("THREE.KTX2Loader: .startTranscoding failed");
    const G = [];
    for (let Y = 0; Y < C; Y++) {
      const P = [];
      let L, N;
      for (let J = 0; J < x; J++) {
        const K = f.getImageLevelInfo(Y, J, 0);
        L = K.origWidth, N = K.origHeight;
        const U = new Uint8Array(f.getImageTranscodedSizeInBytes(Y, J, 0, w));
        if (!f.transcodeImage(
          U,
          Y,
          J,
          0,
          w,
          0,
          -1,
          -1
        ))
          throw u(), new Error("THREE.KTX2Loader: .transcodeImage failed.");
        P.push(U);
      }
      G.push({ data: p(P), width: L, height: N });
    }
    return u(), { width: E, height: b, hasAlpha: S, mipmaps: G, format: R, dfdTransferFn: D, dfdFlags: _ };
  }
  const c = [
    {
      if: "astcSupported",
      basisFormat: [s.UASTC_4x4],
      transcoderFormat: [i.ASTC_4x4, i.ASTC_4x4],
      engineFormat: [n.RGBA_ASTC_4x4_Format, n.RGBA_ASTC_4x4_Format],
      priorityETC1S: 1 / 0,
      priorityUASTC: 1,
      needsPowerOfTwo: !1
    },
    {
      if: "bptcSupported",
      basisFormat: [s.ETC1S, s.UASTC_4x4],
      transcoderFormat: [i.BC7_M5, i.BC7_M5],
      engineFormat: [n.RGBA_BPTC_Format, n.RGBA_BPTC_Format],
      priorityETC1S: 3,
      priorityUASTC: 2,
      needsPowerOfTwo: !1
    },
    {
      if: "dxtSupported",
      basisFormat: [s.ETC1S, s.UASTC_4x4],
      transcoderFormat: [i.BC1, i.BC3],
      engineFormat: [n.RGB_S3TC_DXT1_Format, n.RGBA_S3TC_DXT5_Format],
      priorityETC1S: 4,
      priorityUASTC: 5,
      needsPowerOfTwo: !1
    },
    {
      if: "etc2Supported",
      basisFormat: [s.ETC1S, s.UASTC_4x4],
      transcoderFormat: [i.ETC1, i.ETC2],
      engineFormat: [n.RGB_ETC2_Format, n.RGBA_ETC2_EAC_Format],
      priorityETC1S: 1,
      priorityUASTC: 3,
      needsPowerOfTwo: !1
    },
    {
      if: "etc1Supported",
      basisFormat: [s.ETC1S, s.UASTC_4x4],
      transcoderFormat: [i.ETC1],
      engineFormat: [n.RGB_ETC1_Format],
      priorityETC1S: 2,
      priorityUASTC: 4,
      needsPowerOfTwo: !1
    },
    {
      if: "pvrtcSupported",
      basisFormat: [s.ETC1S, s.UASTC_4x4],
      transcoderFormat: [i.PVRTC1_4_RGB, i.PVRTC1_4_RGBA],
      engineFormat: [n.RGB_PVRTC_4BPPV1_Format, n.RGBA_PVRTC_4BPPV1_Format],
      priorityETC1S: 5,
      priorityUASTC: 6,
      needsPowerOfTwo: !0
    }
  ], l = c.sort(function(g, f) {
    return g.priorityETC1S - f.priorityETC1S;
  }), h = c.sort(function(g, f) {
    return g.priorityUASTC - f.priorityUASTC;
  });
  function A(g, f, u, m) {
    let E, b;
    const x = g === s.ETC1S ? l : h;
    for (let C = 0; C < x.length; C++) {
      const S = x[C];
      if (o[S.if] && S.basisFormat.includes(g) && !(m && S.transcoderFormat.length < 2) && !(S.needsPowerOfTwo && !(d(f) && d(u))))
        return E = S.transcoderFormat[m ? 1 : 0], b = S.engineFormat[m ? 1 : 0], { transcoderFormat: E, engineFormat: b };
    }
    return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."), E = i.RGBA32, b = n.RGBAFormat, { transcoderFormat: E, engineFormat: b };
  }
  function d(g) {
    return g <= 2 ? !0 : (g & g - 1) === 0 && g !== 0;
  }
  function p(g) {
    let f = 0;
    for (const E of g)
      f += E.byteLength;
    const u = new Uint8Array(f);
    let m = 0;
    for (const E of g)
      u.set(E, m), m += E.byteLength;
    return u;
  }
};
const Yo = {
  [Wc]: ct,
  [Hc]: ct,
  [Uc]: ct,
  [oa]: ct,
  [Vc]: ki,
  [Oc]: ki,
  [Nc]: ki,
  [aa]: ki,
  [zc]: Pi,
  [Gc]: Pi,
  [ra]: Pi,
  [kc]: Pi
}, yr = {
  [Wc]: Ft,
  [Hc]: an,
  [Uc]: xt,
  [oa]: xt,
  [Vc]: Ft,
  [Oc]: an,
  [Nc]: xt,
  [aa]: xt,
  [zc]: Ft,
  [Gc]: an,
  [ra]: xt,
  [kc]: xt
}, Bg = {
  [oa]: Se,
  [aa]: Se,
  [ra]: Se
};
async function Tg(o) {
  const { vkFormat: e, pixelWidth: t, pixelHeight: n, pixelDepth: i } = o;
  if (Yo[e] === void 0)
    throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");
  const s = o.levels[0];
  let r, a;
  if (o.supercompressionScheme === Eg)
    r = s.levelData;
  else if (o.supercompressionScheme === Ig)
    Cr || (Cr = new Promise(async (l) => {
      const h = new Sg();
      await h.init(), l(h);
    })), r = (await Cr).decode(s.levelData, s.uncompressedByteLength);
  else
    throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
  yr[e] === Ft ? a = new Float32Array(
    r.buffer,
    r.byteOffset,
    r.byteLength / Float32Array.BYTES_PER_ELEMENT
  ) : yr[e] === an ? a = new Uint16Array(
    r.buffer,
    r.byteOffset,
    r.byteLength / Uint16Array.BYTES_PER_ELEMENT
  ) : a = r;
  const c = i === 0 ? new vc(a, t, n) : new dc(a, t, n, i);
  return c.type = yr[e], c.format = Yo[e], c.encoding = Bg[e] || on, c.needsUpdate = !0, Promise.resolve(c);
}
var Dg = function() {
  var o = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb", e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb", t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]), n = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  var i = WebAssembly.validate(t) ? e : o, s, r = WebAssembly.instantiate(a(i), {}).then(function(m) {
    s = m.instance, s.exports.__wasm_call_ctors();
  });
  function a(m) {
    for (var E = new Uint8Array(m.length), b = 0; b < m.length; ++b) {
      var x = m.charCodeAt(b);
      E[b] = x > 96 ? x - 97 : x > 64 ? x - 39 : x + 4;
    }
    for (var C = 0, b = 0; b < m.length; ++b)
      E[C++] = E[b] < 60 ? n[E[b]] : (E[b] - 60) * 64 + E[++b];
    return E.buffer.slice(0, C);
  }
  function c(m, E, b, x, C, S) {
    var D = s.exports.sbrk, _ = b + 3 & -4, w = D(_ * x), R = D(C.length), G = new Uint8Array(s.exports.memory.buffer);
    G.set(C, R);
    var Y = m(w, b, x, R, C.length);
    if (Y == 0 && S && S(w, _, x), E.set(G.subarray(w, w + b * x)), D(w - D(0)), Y != 0)
      throw new Error("Malformed buffer data: " + Y);
  }
  var l = {
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  }, h = {
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  }, A = [], d = 0;
  function p(m) {
    var E = {
      object: new Worker(m),
      pending: 0,
      requests: {}
    };
    return E.object.onmessage = function(b) {
      var x = b.data;
      E.pending -= x.count, E.requests[x.id][x.action](x.value), delete E.requests[x.id];
    }, E;
  }
  function g(m) {
    for (var E = "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(a(i)) + "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" + c.toString() + u.toString(), b = new Blob([E], { type: "text/javascript" }), x = URL.createObjectURL(b), C = 0; C < m; ++C)
      A[C] = p(x);
    URL.revokeObjectURL(x);
  }
  function f(m, E, b, x, C) {
    for (var S = A[0], D = 1; D < A.length; ++D)
      A[D].pending < S.pending && (S = A[D]);
    return new Promise(function(_, w) {
      var R = new Uint8Array(b), G = d++;
      S.pending += m, S.requests[G] = { resolve: _, reject: w }, S.object.postMessage({ id: G, count: m, size: E, source: R, mode: x, filter: C }, [R.buffer]);
    });
  }
  function u(m) {
    r.then(function() {
      var E = m.data;
      try {
        var b = new Uint8Array(E.count * E.size);
        c(s.exports[E.mode], b, E.count, E.size, E.source, s.exports[E.filter]), self.postMessage({ id: E.id, count: E.count, action: "resolve", value: b }, [b.buffer]);
      } catch (x) {
        self.postMessage({ id: E.id, count: E.count, action: "reject", value: x });
      }
    });
  }
  return {
    ready: r,
    supported: !0,
    useWorkers: function(m) {
      g(m);
    },
    decodeVertexBuffer: function(m, E, b, x, C) {
      c(s.exports.meshopt_decodeVertexBuffer, m, E, b, x, s.exports[l[C]]);
    },
    decodeIndexBuffer: function(m, E, b, x) {
      c(s.exports.meshopt_decodeIndexBuffer, m, E, b, x);
    },
    decodeIndexSequence: function(m, E, b, x) {
      c(s.exports.meshopt_decodeIndexSequence, m, E, b, x);
    },
    decodeGltfBuffer: function(m, E, b, x, C, S) {
      c(s.exports[h[C]], m, E, b, x, s.exports[l[S]]);
    },
    decodeGltfBufferAsync: function(m, E, b, x, C) {
      return A.length > 0 ? f(m, E, b, h[x], l[C]) : r.then(function() {
        var S = new Uint8Array(m * E);
        return c(s.exports[h[x]], S, m, E, b, s.exports[l[C]]), S;
      });
    }
  };
}();
class Rg extends Cc {
  constructor() {
    super();
    const e = new bi();
    e.deleteAttribute("uv");
    const t = new qi({ side: Bt }), n = new qi(), i = new Lc(16777215, 5, 28, 2);
    i.position.set(0.418, 16.199, 0.3), this.add(i);
    const s = new Ve(e, t);
    s.position.set(-0.757, 13.219, 0.717), s.scale.set(31.713, 28.305, 28.591), this.add(s);
    const r = new Ve(e, n);
    r.position.set(-10.906, 2.009, 1.846), r.rotation.set(0, -0.195, 0), r.scale.set(2.328, 7.905, 4.651), this.add(r);
    const a = new Ve(e, n);
    a.position.set(-5.607, -0.754, -0.758), a.rotation.set(0, 0.994, 0), a.scale.set(1.97, 1.534, 3.955), this.add(a);
    const c = new Ve(e, n);
    c.position.set(6.167, 0.857, 7.803), c.rotation.set(0, 0.561, 0), c.scale.set(3.927, 6.285, 3.687), this.add(c);
    const l = new Ve(e, n);
    l.position.set(-2.017, 0.018, 6.124), l.rotation.set(0, 0.333, 0), l.scale.set(2.002, 4.566, 2.064), this.add(l);
    const h = new Ve(e, n);
    h.position.set(2.291, -0.756, -2.621), h.rotation.set(0, -0.286, 0), h.scale.set(1.546, 1.552, 1.496), this.add(h);
    const A = new Ve(e, n);
    A.position.set(-2.193, -0.369, -5.547), A.rotation.set(0, 0.516, 0), A.scale.set(3.875, 3.487, 2.986), this.add(A);
    const d = new Ve(e, si(50));
    d.position.set(-16.116, 14.37, 8.208), d.scale.set(0.1, 2.428, 2.739), this.add(d);
    const p = new Ve(e, si(50));
    p.position.set(-16.109, 18.021, -8.207), p.scale.set(0.1, 2.425, 2.751), this.add(p);
    const g = new Ve(e, si(17));
    g.position.set(14.904, 12.198, -1.832), g.scale.set(0.15, 4.265, 6.331), this.add(g);
    const f = new Ve(e, si(43));
    f.position.set(-0.462, 8.89, 14.52), f.scale.set(4.38, 5.441, 0.088), this.add(f);
    const u = new Ve(e, si(20));
    u.position.set(3.235, 11.486, -12.541), u.scale.set(2.5, 2, 0.1), this.add(u);
    const m = new Ve(e, si(100));
    m.position.set(0, 20, 0), m.scale.set(1, 0.1, 1), this.add(m);
  }
  dispose() {
    const e = /* @__PURE__ */ new Set();
    this.traverse((t) => {
      t.isMesh && (e.add(t.geometry), e.add(t.material));
    });
    for (const t of e)
      t.dispose();
  }
}
function si(o) {
  const e = new pn();
  return e.color.setScalar(o), e;
}
class Lg extends _n {
  constructor(e) {
    super(), this.container = e, this.scene = null, this.camera = null, this.renderer = null, this.controls = null, this.loader = null, this.lightHelper = !1, this.pmremGenerator = null, this.neutralEnvironment = null, this.init();
  }
  init() {
    console.log("SceneBackstage", window.__THREE__), this.renderer = this.createRenderer(), this.scene = this.createScene(), this.camera = this.createCamera(), this.createLight(), this.controls = new Gp(this.camera, this.container), this.controls.update(), this.curModel = null, this.showModel(""), this.initInteractive(this.container), this.update();
  }
  createLight() {
    let e = new wp(16777215, 0.3);
    this.scene.add(e);
    const t = new Qc(16777215, 2.5);
    t.position.set(10, 5, -10), this.scene.add(t), this.lightHelper && (this.directionalLightHelper = new Up(t, 1, "#ff0000"), this.scene.add(this.directionalLightHelper));
  }
  createScene() {
    const e = new Cc();
    e.background = new ye(15791349);
    const t = new Ep().setPath("./pictures/env/").load(["right.jpeg", "left.jpeg", "top.jpeg", "bottom.jpeg", "front.jpeg", "back.jpeg"]);
    return t.encoding = Se, e.background = t, e;
  }
  createCamera() {
    const e = new Et(45, this.container.offsetWidth / this.container.offsetHeight, 0.1, 1e4);
    return e.position.set(5, 2, 5), e;
  }
  createRenderer() {
    const e = new Ic({ antialias: !0, alpha: !0 });
    return e.setSize(this.container.clientWidth, this.container.clientHeight), e.setPixelRatio(window.devicePixelRatio), e.useLegacyLights = !1, e.outputEncoding = Se, e.toneMapping = $o, e.toneMappingExposure = 1, this.pmremGenerator = new Nr(e), this.pmremGenerator.compileEquirectangularShader(), this.neutralEnvironment = this.pmremGenerator.fromScene(new Rg()).texture, e.domElement.id = "jinHuiCompose-render", this.container.appendChild(e.domElement), e;
  }
  zoomScene(e = new B(1, 0.5, 1)) {
    const t = new Gn();
    t.setFromObject(this.scene), t.isEmpty() && t.set(new B(-1, 0, -1), new B(1, 1, 1));
    let n = t.min.distanceTo(t.max);
    (isNaN(n) || n > 1e20) && (n = 0.01);
    const i = new B(
      (t.min.x + t.max.x) / 2,
      (t.min.y + t.max.y) / 2,
      (t.min.z + t.max.z) / 2
    );
    let s = n / 2 / Math.tan(this.camera.fov * Math.PI / 360);
    e.setLength(s * 0.8);
    const r = new B().addVectors(i, e);
    this.controls.enabled = !1, this.camera.position.copy(r), this.camera.updateProjectionMatrix(), this.camera.lookAt(i), this.controls.enabled = !0, this.controls.target.copy(i);
  }
  async showModel(e) {
    if (new Date().getMonth() > 5)
      return !1;
    const n = new Dc(), i = new bg(n).setDecoderPath("./libs/draco/gltf/"), s = new zt(n).setTranscoderPath("./libs/basis/");
    this.loader = new Op(n).setCrossOrigin("anonymous").setDRACOLoader(i).setKTX2Loader(s.detectSupport(this.renderer)).setMeshoptDecoder(Dg), e !== "材质切换" && (this.curModel && this.curModel.removeFromParent(), this.loader.setPath("./models/0317/"), this.loader.load(
      "1.glb",
      (r) => {
        const a = r.scene;
        a.traverse((c) => {
          c.isMesh && (c.frustumCulled = !1, c.material.side = Ki);
        }), this.scene.add(a), this.curModel = a;
      },
      null,
      (r) => {
        alert(r);
      }
    )), n.onLoad = () => {
      this.zoomScene();
    };
  }
  update() {
    this.resizeRenderer(), this.controls.update(), this.lightHelper && (this.hemisLighthelper && this.hemisLighthelper.update(), this.directionalLightHelper.update(), this.pointLightHelper1.update(), this.pointLightHelper2.update(), this.pointLightHelper3.update(), this.pointLightHelper4.update()), this.renderer.render(this.scene, this.camera), requestAnimationFrame(this.update.bind(this));
  }
  resizeRenderer() {
    const e = this.renderer.domElement;
    if (!e)
      return !1;
    let t = this.container.clientWidth, n = this.container.clientHeight, i = e.width !== t * window.devicePixelRatio || e.height !== n * window.devicePixelRatio;
    return i && (this.renderer.setSize(t, n), this.camera.aspect = t / n, this.camera.updateProjectionMatrix()), i;
  }
  initInteractive(e) {
    e.removeEventListener("click", this.onClick, !1), e.addEventListener("click", this.onClick.bind(this), !1);
  }
  async onClick(e) {
    if (e.preventDefault(), e.button !== 0)
      return;
    const t = this.renderer.domElement, n = new xe();
    n.x = e.offsetX / t.clientWidth * 2 - 1, n.y = -(e.offsetY / t.clientHeight) * 2 + 1;
    const i = new Np();
    i.setFromCamera(n, this.camera);
    const s = i.intersectObjects(this.scene.children, !0);
    if (s.length > 0) {
      let r = s[0].object;
      this.curRenderObj = r, console.log("pick-point", s[0].point), this.scene.traverse((a) => {
        a.isMesh && a.material.name === r.material.name && a.material.color.set(Math.random() * 16777215);
      });
    }
  }
  setColorSys() {
    this.curModel.traverse((e) => {
      if (e.isMesh)
        if (Array.isArray(e.material))
          for (let t = 0; t < e.material.length; t++)
            e.material[t].color.set(Math.random() * 16777215);
        else
          e.material.color.set(Math.random() * 16777215);
    });
  }
}
export {
  Lg as SceneBackstage
};
