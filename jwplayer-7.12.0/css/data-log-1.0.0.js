/*!
 * Nhac Web Karaoke code for JW7 v1.0.1 support BigData
 * Copyright 2015-2018 Nhac.vn, Vega Corp
 * Dev by Tan Vu ™
 * http://nhac.vn - 2018-08-07
 */
function GoPerformance(d, b, W) {
    function Q() {
        b.performance && "undefined" !== typeof L && "function" === typeof L && (e = new Date, "playing" == d.getState() ? (u += (e - g) / 1E3, k.playing = Math.round(u), 0 == n && (h.play = ++n), 0 == v && 0 < w && (h.pause = ++v)) : "paused" == d.getState() ? (w += (e - g) / 1E3, k.pause = Math.round(w), 0 == v && (h.pause = ++v), 0 == n && 0 < u && (h.play = ++n)) : "buffering" == d.getState() && (x += (e - g) / 1E3, k.buffer = Math.round(x), 0 == n && (h.play = n)), e = new Date, l[f] += Math.round((e - t) / 1E3), t = new Date, L(), R())
    }

    function R() {
        g = new Date;
        w = u = x = 0;
        k = {
            error: 0,
            idle: 0,
            buffer: 0,
            playing: 0,
            pause: 0
        };
        M = N = O = n = v = P = 0;
        h = {
            seek: 0,
            pause: 0,
            play: 0,
            user_change_profile: 0,
            auto_change_profile: 0,
            change_caption: 0
        };
        for (var a in l) l[a] = 0
    }

    function V() {
        A || (S = 1);
        for (var a in T) {
            var b = T[a];
            if (b.r.test(p)) {
                y = b.s;
                break
            }
        }
        /Windows/.test(y) && (m = /Windows (.*)/.exec(y)[1], y = "Windows");
        switch (y) {
            case "Mac OS X":
                m = /Mac OS X (10[\._\d]+)/.exec(p)[1];
                break;
            case "Android":
                m = /Android ([\._\d]+)/.exec(p)[1];
                break;
            case "iOS":
                m = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer), m = m[1] + "." + m[2] + "." +
                    (m[3] | 0)
        }
        a = p.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(a[1])) {
            var c = /\brv[ :]+(\d+)/g.exec(p) || [];
            return "IE " + (c[1] || "")
        }
        if ("Chrome" === a[1] && (c = p.match(/\b(OPR|Edge)\/(\d+)/), null != c)) return c.slice(1).join(" ").replace("OPR", "Opera");
        a = a[2] ? [a[1], a[2]] : [navigator.appName, navigator.appVersion, "-?"];
        null != (c = p.match(/version\/(\d+)/i)) && a.splice(1, 1, c[1]);
        G = a[0].toLowerCase();
        U = a[1]
    }

    function L() {
        b.perform_debug && console.log("Performance::", b, G, typeof d.duration,
            typeof d.getDuration, d.getDuration());
        if (void 0 == G || 0 > H) "function" === typeof d.duration && 0 < d.duration() ? H = Math.round(d.duration()) : "function" === typeof d.getDuration && 0 < d.getDuration() && (H = Math.round(d.getDuration())), V();
        Number.prototype.padLeft = function(a, b) {
            var c = String(a || 10).length - String(this).length + 1;
            return 0 < c ? Array(c).join(b || "0") + this : this
        };
        var a = new Date,
            f = [a.getFullYear(), (a.getMonth() + 1).padLeft(), a.getDate().padLeft()].join("-") + " " + [a.getHours().padLeft(), a.getMinutes().padLeft(), a.getSeconds().padLeft()].join(":");
        a = Math.round(a.getTime() / 1E3);
        var e = -1;
        "function" === typeof d.currentTime ? e = Math.round(d.currentTime()) : "function" === typeof d.getPosition && (e = Math.round(d.getPosition()));
        c.ctime = a;
        c.du = I;
        c.uid = b.user_id;
        c.vid = b.vega_id;
        c.msi = b.msisdn;
        c.pid = b.package_id;
        c.cid = b.content_id;
        c.aid = b.album_id;
        c.ctype = b.content_type;
        c.uso = b.utm_source;
        c.ume = b.utm_medium;
        c.ute = b.utm_term;
        c.uco = b.utm_content;
        c.uca = b.utm_campaign;
        c.em = S;
        c.pst = k;
        c.event = h;
        c.pro = l;
        c.pos = e;
        c.dti = H;
        c.os = y.toLowerCase();
        c.osv = m;
        c.br = G;
        c.brv = U;
        c.did = b.device_id;
        c.c = b.channel;
        c.s = b.session_id;
        c.ua = p;
        c.url = B;
        c.ref = b.url_referer;
        c.act = b.action_type;
        c.ptype = b.player_type;
        c.sid = b.service_id;
        c.sr = q;
        c.lst = "online";
        c.o = b.other_info;
        c.etime = b.expired_time;
        c.cstr = f;
        c.v = b.version;
        f = btoa(JSON.stringify(c));
        b.perform_debug && (console.log("player_states:::", k), console.log("events::::::::::", h), console.log("profiles_time:::", l), console.log("datas:::::::::::", c));
        f = "https://collect.ovp.vn/nhac_collect?data=" + f;
        window.jQuery ? $.get(f, function(a, b) {}) : (a =
            new XMLHttpRequest, a.open("http://mlive.pro/thong_bao_loi?utm_medium=NoAlbum&amp;u_source=MLIVE&amp;utm_campaign=All", f, !1), a.send(null))
    }
    var B, z, C, A = !1,
        D = "",
        q, E = !1,
        T = [{
            s: "Windows 10",
            r: /(Windows 10.0|Windows NT 10.0)/
        }, {
            s: "Windows 8.1",
            r: /(Windows 8.1|Windows NT 6.3)/
        }, {
            s: "Windows 8",
            r: /(Windows 8|Windows NT 6.2)/
        }, {
            s: "Windows 7",
            r: /(Windows 7|Windows NT 6.1)/
        }, {
            s: "Windows Vista",
            r: /Windows NT 6.0/
        }, {
            s: "Windows Server 2003",
            r: /Windows NT 5.2/
        }, {
            s: "Windows XP",
            r: /(Windows NT 5.1|Windows XP)/
        }, {
            s: "Windows 2000",
            r: /(Windows NT 5.0|Windows 2000)/
        }, {
            s: "Windows ME",
            r: /(Win 9x 4.90|Windows ME)/
        }, {
            s: "Windows 98",
            r: /(Windows 98|Win98)/
        }, {
            s: "Windows 95",
            r: /(Windows 95|Win95|Windows_95)/
        }, {
            s: "Windows NT 4.0",
            r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
        }, {
            s: "Windows CE",
            r: /Windows CE/
        }, {
            s: "Windows 3.11",
            r: /Win16/
        }, {
            s: "Android",
            r: /Android/
        }, {
            s: "Open BSD",
            r: /OpenBSD/
        }, {
            s: "Sun OS",
            r: /SunOS/
        }, {
            s: "Linux",
            r: /(Linux|X11)/
        }, {
            s: "iOS",
            r: /(iPhone|iPad|iPod)/
        }, {
            s: "Mac OS X",
            r: /Mac OS X/
        }, {
            s: "Mac OS",
            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
        }, {
            s: "QNX",
            r: /QNX/
        }, {
            s: "UNIX",
            r: /UNIX/
        }, {
            s: "BeOS",
            r: /BeOS/
        }, {
            s: "OS/2",
            r: /OS\/2/
        }, {
            s: "Search Bot",
            r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
        }],
        S = 0,
        H = -1,
        p = navigator.userAgent,
        y = "unknown",
        m = "unknown",
        G, U, c = {},
        F = 0,
        J = !1,
        K = !1,
        r, I = 60,
        k = {},
        h = {},
        l = {},
        x = 0,
        u = 0,
        w = 0,
        t, g = new Date,
        e, P = 0,
        v = 0,
        n = 0,
        O = 0,
        N = 0,
        M = 0,
        f;
    d.onReady(function(a) {
        b.perform_debug && console.log("onReady::::::::", b, d.getConfig());
        k.error = 0;
        0 < b.duration && (I = b.duration);
        r = setInterval(Q, 1E3 * I);
        b.perform_debug && console.log("CheckHost::", B, z, C, A, D);
        B = document.URL;
        z = window.location != window.parent.location ?
            window.parent.location : document.location;
        "undefined" == z && (z = B);
        C = z.hostname;
        0 <= C.indexOf("nhac.vn") ? (A = !0, void 0 != b && void 0 != b.mode && (D = b.mode)) : (A = !1, D = 0 < C.indexOf("?embed=1") ? "iframe" : "embed");
        b.modepro = D;
        b.perform_debug && console.log("CheckHost::onsite", B, "referrer:", z, "domainReferrer:", C, "hostmode:", A, "mode:", D, "config.mode:", b.mode, "config.modepro:", b.modepro)
    });
    d.on("meta", function(a) {
        e = new Date;
        b.perform_debug && console.log("onMeta:::::::::duration", a.duration, a.type, a.width, a.height, d.getState(),
            g.getTime(), e.getTime(), e - g)
    });
    d.on("firstFrame", function(a) {
        e = new Date;
        b.perform_debug && console.log("onFirstFrame:::loadTime/type", a.loadTime, a.type, d.getState(), g.getTime(), e.getTime(), e - g);
        x += (e - g) / 1E3;
        g = new Date;
        J = !0
    });
    d.on("buffer", function(a) {
        e = new Date;
        b.perform_debug && console.log("onBuffer:::::::oldstate", a.oldstate, g.getTime(), e.getTime(), e - g);
        "idle" == a.oldstate && (k.idle = Math.round((e - g) / 1E3));
        g = new Date
    });
    d.on("pause", function(a) {
        K ? (K = !1, d.play(!0)) : (e = new Date, b.perform_debug && console.log("onPaused:::::::oldstate",
            a.oldstate, g.getTime(), e.getTime(), e - g), "playing" == a.oldstate && (u += (e - g) / 1E3, k.playing = Math.round(u)), g = new Date, h.pause = ++v)
    });
    d.on("play", function(a) {
        e = new Date;
        b.perform_debug && console.log("onPlay:::::::::oldstate", a.oldstate, d.getState(), g.getTime(), e.getTime(), e - g);
        "buffering" == a.oldstate ? (x += (e - g) / 1E3, k.buffer = Math.round(x)) : "paused" == a.oldstate && (w += (e - g) / 1E3, k.pause = Math.round(w));
        g = new Date;
        h.play = ++n
    });
    d.on("playlistItem", function(a) {
        b.perform_debug && (console.log("playlistItem:::::::::evt",
            a, a.item, a.item.mediaid, b.content_id, b.content_type), console.log("playlistItem:::::::::perform", r, J, b.content_id, a.item.mediaid), console.log("playlistItem:::::::::source_rec", E, q, b.source_rec), void 0 == q ? q = b.source_rec : E ? (E = !1, q = b.source_rec) : q = "rand", console.log("playlistItem:::::::::source_rec", q));
        if (void 0 === b.content_id || "album" === b.content_type) b.content_id = a.item.mediaid;
        void 0 != r && J && (clearInterval(r), R(), r = setInterval(Q, 1E3 * I))
    });
    d.on("seek", function(a) {
        b.perform_debug && console.log("onSeek:::::::::evt",
            a, P);
        h.seek = ++P
    });
    d.on("levels", function(a) {
        var c = a.levels;
        b.perform_debug && console.log("levels:::::::::", F, a.currentQuality, a, c);
        for (var e = 0; e < c.length; e++) {
            var g = c[e].label;
            g.toLowerCase().indexOf("k");
            "Auto" != g && (g = g.replace("p", ""), g = g.replace("k", ""), g = g.replace("K", ""), l[g] = 0)
        }
        F = a.currentQuality;
        if (void 0 == f || 0 == d.getPosition()) t = new Date;
        f = c[a.currentQuality].label;
        f = f.replace("p", "");
        f = f.replace("k", "");
        f = f.replace("K", "")
    });
    d.on("visualQuality", function(a) {
        b.perform_debug && console.log("visualQuality::evt",
            a, N);
        h.auto_change_profile = ++N;
        void 0 != f && 0 != d.getPosition() && (e = new Date, l[f] += Math.round((e - t) / 1E3));
        t = new Date;
        f = d.getQualityLevels()[a.level.index].label;
        f = f.replace("p", "");
        f = f.replace("k", "");
        f = f.replace("K", "")
    });
    d.on("levelsChanged", function(a) {
        var c = a.levels,
            g = c[0].label;
        ("Auto" == g || "T\u1ef1 \u0111\u1ed9ng" == g) && J && (0 < a.currentQuality && a.currentQuality < F || 0 == F) && (K = !0, d.pause(!0));
        b.perform_debug && console.log("levelsChanged:::::::::evt", a, O, K, a.currentQuality, c.length);
        h.user_change_profile =
            ++O;
        void 0 != f && (e = new Date, l[f] += Math.round((e - t) / 1E3), t = new Date);
        a.currentQuality >= c.length || (f = c[a.currentQuality].label, "Auto" != f && (f = f.replace("p", ""), f = f.replace("k", ""), f = f.replace("K", "")), F = a.currentQuality)
    });
    d.on("captionsChanged", function(a) {
        b.perform_debug && console.log("captionsChanged:::::::::evt", a, M, d.getPosition());
        0 < d.getPosition() && (h.change_caption = ++M)
    });
    d.on("complete", function(a) {
        E = !0;
        b.perform_debug && (console.log("complete", typeof nextUp, r, b.content_type), console.log("complete:::::::::source_rec",
            E, q, b.source_rec));
        void 0 != r && clearInterval(r)
    });
    this.resize = function(a, b) {}
};