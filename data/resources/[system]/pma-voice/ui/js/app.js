(function(e) {
    function o(o) {
        for (var t, c, r = o[0], l = o[1], d = o[2], s = 0, f = []; s < r.length; s++) c = r[s], Object.prototype.hasOwnProperty.call(i, c) && i[c] && f.push(i[c][0]), i[c] = 0;
        for (t in l) Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t]);
        u && u(o);
        while (f.length) f.shift()();
        return a.push.apply(a, d || []), n()
    }

    function n() {
        for (var e, o = 0; o < a.length; o++) {
            for (var n = a[o], t = !0, r = 1; r < n.length; r++) {
                var l = n[r];
                0 !== i[l] && (t = !1)
            }
            t && (a.splice(o--, 1), e = c(c.s = n[0]))
        }
        return e
    }
    var t = {},
        i = {
            app: 0
        },
        a = [];

    function c(o) {
        if (t[o]) return t[o].exports;
        var n = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(n.exports, n, n.exports, c), n.l = !0, n.exports
    }
    c.m = e, c.c = t, c.d = function(e, o, n) {
        c.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: n
        })
    }, c.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.t = function(e, o) {
        if (1 & o && (e = c(e)), 8 & o) return e;
        if (4 & o && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (c.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & o && "string" != typeof e)
            for (var t in e) c.d(n, t, function(o) {
                return e[o]
            }.bind(null, t));
        return n
    }, c.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return c.d(o, "a", o), o
    }, c.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, c.p = "";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = r.push.bind(r);
    r.push = o, r = r.slice();
    for (var d = 0; d < r.length; d++) o(r[d]);
    var u = l;
    a.push([0, "chunk-vendors"]), n()
})({
    0: function(e, o, n) {
        e.exports = n("56d7")
    },
    "2a08": function(e, o, n) {},
    "56d7": function(e, o, n) {
        "use strict";
        n.r(o);
        var t = n("7a23");
        const i = Object(t["d"])("audio", {
                id: "audio_on",
                src: "mic_click_on.ogg"
            }, null, -1),
            a = Object(t["d"])("audio", {
                id: "audio_off",
                src: "mic_click_off.ogg"
            }, null, -1),
            c = {
                class: "voiceInfo"
            };

        function r(e, o, n, r, l, d) {
            return Object(t["e"])(), Object(t["b"])("body", null, [i, a, Object(t["d"])("div", c, [0 !== r.voice.callInfo ? (Object(t["e"])(), Object(t["b"])("p", {
                key: 0,
                class: {
                    talking: r.voice.talking
                }
            }, " [Call] ", 2)) : Object(t["c"])("", !0), r.voice.radioEnabled && 0 !== r.voice.radioChannel ? (Object(t["e"])(), Object(t["b"])("p", {
                key: 1,
                class: {
                    talking: r.voice.usingRadio
                }
            }, Object(t["g"])(r.voice.radioChannel) + " Mhz [Radio] ", 3)) : Object(t["c"])("", !0), r.voice.voiceModes.length ? (Object(t["e"])(), Object(t["b"])("p", {
                key: 2,
                class: {
                    talking: r.voice.talking
                }
            }, Object(t["g"])(r.voice.voiceModes[r.voice.voiceMode][1]) + " [Range] ", 3)) : Object(t["c"])("", !0)])])
        }
        var l = {
            name: "App",
            setup() {
                const e = Object(t["f"])({
                    voiceModes: [],
                    voiceMode: 0,
                    radioChannel: 0,
                    radioEnabled: !1,
                    usingRadio: !1,
                    callInfo: 0,
                    talking: !1
                });
                let o = !1;
                return window.addEventListener("message", (function(n) {
                    const t = n.data;
                    if (void 0 !== t.voiceModes && (e.voiceModes = JSON.parse(t.voiceModes)), void 0 !== t.voiceMode && (e.voiceMode = t.voiceMode), void 0 !== t.radioChannel && (e.radioChannel = t.radioChannel), void 0 !== t.radioEnabled && (e.radioEnabled = t.radioEnabled), void 0 !== t.callInfo && (e.callInfo = t.callInfo), t.usingRadio !== e.usingRadio && (o = !0, e.usingRadio = t.usingRadio, setTimeout((function() {
                            o = !1
                        }), 100)), void 0 === t.talking || e.usingRadio || o || (e.talking = t.talking), t.sound && e.radioEnabled) {
                        let e = document.getElementById(t.sound);
                        e.load(), e.volume = t.volume, e.play().catch(e => {})
                    }
                })), {
                    voice: e
                }
            }
        };
        n("ba00");
        l.render = r;
        var d = l;
        Object(t["a"])(d).mount("#app")
    },
    ba00: function(e, o, n) {
        "use strict";
        n("2a08")
    }
});