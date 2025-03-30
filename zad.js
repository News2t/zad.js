function __ZAd(e, r, ca, x) {
    function da(a) {
        function b(l, m) {
            a: {
                if ("string" === typeof m) {
                    if (/^https?:\/\//.test(m)) {
                        var q = r.createElement("script");
                        q.src = m;
                        m = q;
                        break a;
                    }
                } else if ("object" === typeof m) {
                    q = r.createElement("div");
                    m.class && (q.className = m.class);
                    m.zadType && q.setAttribute("data-zadtype", m.zadType);
                    m.suffix && q.setAttribute("data-suffix", m.suffix);
                    m = q;
                    break a;
                }
                m = null;
            }
            m && l.parentNode.insertBefore(m, l);
        }

        function c(l) {
            for (let m of l.childNodes)
                if (m.nodeType === Node.TEXT_NODE && 0 < m.nodeValue.trim().length) return !0;
            return !1;
        }
        p("Starting injectAds function with adObject:", null, a);
        if (a && "object" === typeof a) {
            var d = r.getElementById("id_text");
            if (d) {
                var f = d.getElementsByTagName("p");
                p(`Found ${f.length} paragraphs`);
                d = !1;
                var g = a.paragraphs || 2;
                p(`Paragraph interval set to ${g}`);
                var h = [];
                for (let l = 0; l < f.length; l++) c(f[l]) && h.push(f[l]);
                p(`Found ${h.length} eligible text paragraphs`);
                if (2 > h.length) p("Not enough text paragraphs for ad injection. Exiting function.");
                else
                    for (f = 1; f < h.length; f++)
                        if (0 === f % g)
                            if (a.onlyOnce && !d) b(h[f], a.onlyOnce), d = !0;
                            else if (a.repeat) b(h[f], a.repeat);
                            else if (a.onlyOnce && d) break;
            } else p('Text element with id "id_text" not found. Exiting function.');
        } else p("Invalid adObject. Exiting function.");
    }

    var K = e._ZDAKGEO && e._ZDAKGEO.cc ? e._ZDAKGEO.cc : null;
    e.ICMS && e.ICMS.geoCC && (K = e.ICMS.geoCC);
    var L = e && e.zad && e.zad.cmd ? e.zad.cmd : [],
        n = {},
        ea = [],
        D = {},
        fa = 480 >= screen.width ? !0 : !1,
        z = null,
        M = !1;
    try {
        z = r.cookie.match(/geoCC=([^;&]+)/) ? r.cookie.match(/geoCC=([^;&]+)/)[1].toUpperCase() : null;
    } catch (a) {}
    var N = !1,
        k = {
            dfp: "",
            OOPs: ["stitials"],
            OOPs1x1: [],
            OOPsAppendSuffix: !1,
            autorefresh: 30,
            pageTargeting: null,
            screensizeTargeting: !1,
            lazy: !1,
            dependencies: [],
            libs: [],
            gdprLibs: [],
            inject: {}
        },
        A = {
            billboard: [
                [
                    [990, 250],
                    [
                        [970, 250],
                        [970, 200],
                        [970, 180],
                        [980, 90],
                        [970, 90],
                        [728, 90],
                        [120, 30]
                    ]
                ],
                [
                    [750, 200],
                    [
                        [728, 90],
                        [120, 30]
                    ]
                ],
                [
                    [0, 0],
                    [
                        [300, 100],
                        [320, 100],
                        [320, 50],
                        [120, 30]
                    ]
                ]
            ],
            leaderboard: [
                [
                    [750, 200],
                    [[728, 90]]
                ],
                [
                    [0, 0],
                    [
                        [300, 250],
                        [300, 100],
                        [320, 100],
                        [320, 50]
                    ]
                ]
            ],
            footer: [
                [
                    [990, 250],
                    [
                        [970, 90],
                        [728, 90]
                    ]
                ],
                [
                    [750, 200],
                    [
                        [728, 90],
                        [468, 60]
                    ]
                ],
                [
                    [0, 0],
                    [
                        [300, 250],
                        [300, 100],
                        [320, 100],
                        [320, 50]
                    ]
                ]
            ],
            halfpage: null,
            mrec: null
        };
    x && x.sizemappingTemplates && (A = Object.assign(A, x.sizemappingTemplates));
    var t = {
        billboard: {
            size: [
                [970, 250],
                [970, 200],
                [970, 180],
                [980, 90],
                [970, 90],
                [728, 90],
                [120, 30]
            ],
            sizemap: "billboard",
            adunit: ""
        },
        leaderboard: {
            size: [728, 90],
            sizemap: "leaderboard",
            adunit: ""
        },
        mrec: {
            size: [300, 250],
            sizemap: "mrec",
            adunit: ""
        },
        halfpage: {
            size: [
                [300, 600],
                [300, 250]
            ],
            sizemap: "halfpage",
            adunit: ""
        },
        skyscraper: {
            size: [160, 600],
            sizemap: null,
            adunit: ""
        },
        footer: {
            size: [
                [970, 90],
                [728, 90]
            ],
            sizemap: "footer",
            adunit: ""
        },
        "native": {
            size: "fluid",
            sizemap: null,
            adunit: ""
        }
    };
    x && x.adslotTemplates && (t = Object.assign(t, x.adslotTemplates));

    var E = function(a) {
            return a + "-" + Math.random().toString(16).slice(2);
        },
        p = function(a, b, c, d, f) {
            if (M && "undefined" !== typeof console && console.log) {
                var g = (new Date).toJSON();
                try {
                    var h = b && b.id ? "[" + b.id + "]" : "string" === typeof b ? "[" + b + "]" : "";
                    f ? console.log("[ZAD][" + g + "]" + h + ": " + a, b, c, d, f) :
                        d ? console.log("[ZAD][" + g + "]" + h + ": " + a, b, c, d) :
                        c ? console.log("[ZAD][" + g + "]" + h + ": " + a, b, c) :
                        b && "string" !== typeof b ? console.log("[ZAD][" + g + "]" + h + ": " + a, b) :
                        console.log("[ZAD][" + g + "]" + h + ": " + a);
                } catch (l) {
                    console.log(l);
                }
            }
        },


        ha = function(a) {
            return (a = r.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)")) ? a.pop() : "";
        },
        y = function(a, b, c, d, f) {
            d || (d = e);
            d = d.document;
            var g = d.getElementsByTagName("head")[0] || d.documentElement,
                h = !1,
                l = d.createElement("script");
            l.async = f ? !1 : !0;
            b && (l.id = b);
            if (c) {
                function q() {
                    l.onload = l.onreadystatechange = null;
                    try {
                        c && c();
                    } catch (v) {}
                }
                l.onreadystatechange = function() {
                    h || "loaded" != this.readyState && "complete" != this.readyState || (h = !0, q());
                };
                l.onload = q;
            }
            if ("string" === typeof a) l.src = a;
            else
                for (var m in a) l.setAttribute(m, a[m]);
            g.insertBefore(l, g.firstChild);
        },


        R = function(a) {

            p("Can render ads: passed");
            return !0;
        },
        u = function(a, b) {
            "string" === typeof a && (a = e.document.getElementById(a));

            if (!a.dataset.hasOwnProperty(b)) return null;

            if (!a.dataset[b]) return a.dataset[b];
            try {
                return JSON.parse(a.dataset[b]);
            } catch (c) {
                return a.dataset[b];
            }
        },


        w = function(a) {
            return a.getAttribute("data-zadtype") || null;
        },
        ka = function(a, b) {

            b = u(a, "suffix") || "";

            return u(a, "path") || k.dfp + b;
        },
        V = function(a, b) {
            var c = u(a, "size");
            if (!c) return b || (b = w(a)), t[b] && "undefined" !== typeof t[b].size ? t[b].size : null;
            a = [];
            if ("string" === typeof c) {
                c = -1 != c.indexOf(",") ? c.split(",") : c.split(";");
                for (b = 0; b < c.length; b++) {
                    var d = c[b].split("x");
                    a.push([parseInt(d[0]), parseInt(d[1])]);
                }
                if (1 == a.length) return a[0];
            } else c && (a = c);
            return a;
        },
        O = function(a) {
            var b = V(a),
                c = w(a);
            a = W(a, c);
            c = top;
            var d = e.screen.width,
                f = e.screen.height;
            try {
                d = Math.max(c.document.documentElement.clientWidth, c.innerWidth || 0),
                    f = Math.max(c.document.documentElement.clientHeight, c.innerHeight || 0);
            } catch (h) {}
            c = [d, f];
            if (!a || !c || !c[0]) return b;
            d = 0;
            for (var g in a)
                f = parseInt(a[g][0]), f <= c[0] && f >= d && (b = a[g][1], d = f);
            return b;
        },


        la = function(a, b) {

            var c = u(a, "targeting");
            return c ? c : (b || (b = w(a)), "undefined" !== typeof t[b].targeting ? t[b].targeting : null);
        },
        W = function(a, b) {
            var c;

            if (-1 != (null == a ? void 0 : null == (c = a.parentElement) ? void 0 : c.className.indexOf("forcemrec")))
                return [
                    [
                        [990, 250],
                        [
                            [300, 600],
                            [300, 250]
                        ]
                    ],
                    [
                        [750, 200],
                        [[300, 250]]
                    ],
                    [
                        [0, 0],
                        [[300, 250]]
                    ]
                ];
            c = u(a, "sizemap");
            if (!c) return b || (b = w(a)), "undefined" !== typeof t[b].sizemap && t[b].sizemap ? "string" === typeof t[b].sizemap ? A[t[b].sizemap] : t[b].sizemap : null;
            if ("string" === typeof c) return "undefined" !== typeof A[c] ? A[c] : JSON.parse(c);
            a = e.googletag.sizeMapping();
            for (b = 0; b < c.length; b++) a = a.addSize(c[b][0], c[b][1]);
            return a ? a.build() : null;


        },
        C = function(a) {
            "string" !== typeof a && (a = el.id);
            for (var b = e.googletag.pubads().getSlots(), c = 0; c < b.length; c++)
                if (b[c].getSlotElementId() == a) return b[c];
            return null;
        },
        ma = function(a, b) {

            b = u(a, "pos");
            if (null !== b) return b;
            a = a.getBoundingClientRect();
            b = r.body;
            var c = r.documentElement;
            a = Math.round(a.top + (e.pageYOffset || c.scrollTop || b.scrollTop) - (c.clientTop || b.clientTop || 0));
            try {
                return a < k.atfthreshold || a < screen.height / 2 ? ["atf", "top"] : ["btf", "bottom"];
            } catch (d) {
                return null;
            }
        },

        P = function(a, b) {

            var c = u(a, "npos");
            if (c) return c;
            a = a.id;
            return "undefined" !== typeof n[a] && "undefined" !== typeof n[a].npos && null !== n[a].npos ? n[a].npos :
                D[b].length + 1;
        },

        F = function() {
            return e.document.getElementsByClassName("zad");
        },
        I = function(a) {
            var b = [];
            a || (a = F());
            for (var c = 0; c < a.length; c++) {
                var d = a[c];


                if (!(d.id && C(d.id) || "undefined" !== typeof d.offsetWidth && !d.offsetWidth && !d.offsetHeight &&
                        d.getClientRects && !d.getClientRects().length)) {
                    var f = w(d);

                    if (f) {
                        var g = ka(d),
                            h = d.id || E("zad-" + f);
                        d.id != h && (d.id = h);
                        "undefined" === typeof D[f] && (D[f] = []);
                        "undefined" === typeof n[h] && (n[h] = {});

                        var l = V(d, f);
                        if (g && l) {
                            p("Setting up GPT Adunit", d);
                            var m = W(d, f),
                                q = la(d, f),

                                v = ma(d, f),
                                H = P(d, f);

                            g = e.googletag.defineSlot(g, l, h).setTargeting("slot", f).setTargeting("rfr", "false")
                                .setTargeting("pos", v).setTargeting("npos", H);
                            m && (g = g.defineSizeMapping(m));
                            if (q)
                                for (var B in q) g = g.setTargeting(B, q[B]);

                            l && l.find(function(X) {
                                return 120 === X[0] && 30 === X[1];
                            }) && (g.setTargeting("pos", [v, "0", "masthead", "quickslider"]).setTargeting("OOP_type", [
                                "masthead", "quickslider"
                            ]), g.setTargeting("gto", ["true"]));
                            f && "halfpage" === f && 1 == g.getTargeting("npos") && g.setTargeting("gto", ["true"]);
                            g = g.addService(e.googletag.pubads());
                            e.googletag.display(h);
                            Object.assign(n[h], {
                                name: f,
                                sizemap: m,
                                targeting: q,
                                pos: v,
                                npos: H,
                                rfr: !1
                            });

                            b.push(h);

                            D[f].push(h);

                            ea.push(h);
                        } else p("Missing info for this adunit", d);
                    }
                }
            }

            b && p("Added GPT Adunits", null, b);
            return b;
        },
        Y = function() {


            if (0 !== k.OOPs.concat(k.OOPs1x1).length)

                if (e.document && e.document.body)


                    for (var a = k.OOPs.concat(k.OOPs1x1), b, c, d, f, g = 0; g < a.length; g++) b = a[g], c = "zad-oop-" +
                        b, e.document.getElementById(c) || (d = r.createElement("div"), d.id = c, d.className =
                            "zad-oop", d.style.position = "absolute", d.style.top = g + "px", d.style.right = "1px",
                            d.style.zIndex = 10000002, e.document.body.appendChild(d), f = k.dfp, k.OOPsAppendSuffix &&
                            (f += b), f = g >= k.OOPs.length ? e.googletag.defineSlot(f, [1, 1], c).addService(
                                googletag.pubads()) : e.googletag.defineOutOfPageSlot(f, c).addService(googletag
                                .pubads()), f.setTargeting("oop_type", b).setTargeting("pos", b).setTargeting(
                                "position", b), e.googletag.display(c), n[c] = {
                                name: "oop",
                                oop_type: b,
                                rfr: !1
                            }, p("Added GPT OOP", d));




                else setTimeout(Y, 50);
        },



        Z = function() {
            if (k.GPTWebInterstitial)

                if (e.document && e.document.body) {

                    var a = googletag.defineOutOfPageSlot(k.GPTWebInterstitial, googletag.enums.OutOfPageFormat
                        .INTERSTITIAL);

                    a.addService(googletag.pubads());


                    n[a.getSlotElementId()] = {
                        name: "oop",

                        oop_type: "webInterstitial",
                        rfr: !1
                    };

                } else setTimeout(Z, 50);
        },

        na = function() {
            try {
                e.document && e.googletag.pubads().setTargeting("ref", r.referrer);
            } catch (f) {
                p("Failed setting referrer: " + f);
            }
            try {
                e.location && e.googletag.pubads().setTargeting("locationpath", e.location.pathname);
            } catch (f) {
                p("Failed setting referrer: " + f);
            }
            "undefined" !== typeof e.gdprApplies && e.googletag.pubads().setTargeting("gdpr", e.gdprApplies ? "1" :
                "0");
            var a;
            (null == (a = e.document) ? 0 : a.querySelector(".vplayer")) && e.googletag.pubads().setTargeting(
                "has_video", "1");
            if (e.location && e.location.search && -1 != e.location.search.indexOf("special") || e.location &&
                e.location.hash && -1 != e.location.hash.indexOf("special")) a = e.location.search.match(RegExp(
                "(\\?|&)special=([^&]*)")), !a && e.location.hash && (a = e.location.hash.match(RegExp(
                "(#|&)special=([^&]*)"))), a = a ? a[2] : "", e.googletag.pubads().setTargeting("special", a);
            k.pageTargeting && Object.keys(k.pageTargeting).forEach(function(f) {
                null !== k.pageTargeting[f] && e.googletag.pubads().setTargeting(f, k.pageTargeting[f]);
            });
            if (k.screensizeTargeting && e.screen && e.screen.width) {
                a = [];
                for (var b = [2560, 1920, 1600, 1280, 1024, 375], c = e.screen.width, d = 0; d < b.length; d++) b[d] <=
                    c && a.push(b[d]);
                a && e.googletag.pubads().setTargeting("screen", a.join(","));
            }

            try {

                e.__ZDDMP && e.__ZDDMP.GetUSegs && googletag.pubads().setTargeting("s", __ZDDMP.GetUSegs())
                    .setTargeting("p", __ZDDMP.GetPSegs()).setTargeting("zc", __ZDDMP.NewCorrelator()).setTargeting(
                        "zcp", __ZDDMP.PageCorrelator()).setTargeting("zdbb", __ZDDMP.GetZDBB()), e.__ZDGC &&
                    googletag.pubads().setTargeting("zcp", e.__ZDGC), e.__ZD_SEG_ && googletag.pubads()
                    .setTargeting("s", e.__ZD_SEG_), e.__ZD_CPID_ && (googletag.pubads().setTargeting("cpid", e
                        .__ZD_CPID_), e.ga && e.ga("send", "event", "cpid", e.__ZD_CPID_));

            } catch (f) {
                console.error(f);
            }


        },
        G = function(a, b) {
            a || (a = F());
            for (var c = [], d = [], f = [], g = 0; g < a.length; g++) {
                var h = null,
                    l = null,
                    m = a[g];

                "string" === typeof m ? (l = m, e.document.getElementById(l), h = C(l)) :

                    m.setTargeting ? (h = m, l = h.getSlotElementId(), e.document.getElementById(l)) :

                    m.id && (l = m.id, h = C(l));



                if (h._rendered && (h._rendered = null, h.setTargeting("rfr", "true"), -1 != l.indexOf("zad-oop") || h
                        .getOutOfPage() || -1 != l.indexOf("zad-native"))) continue;
                if (h._refreshTimeout) try {
                    clearTimeout(h._refreshTimeout);
                } catch (q) {}



                (b) && c.push(h);
            }


            c.length && (p("Refreshing slots", c), googletag.pubads().refresh(c));

        },
        J = function(a) {
            if (a)



                for (a.tagName && "IFRAME" === a.tagName.toUpperCase() ? a = [e.document.getElementById(a.id).closest(
                        ".zad")] : "string" === typeof b && (a = [a]), c = 0; c < a.length; c++) {

                    d = null;
                    var b = a[c];


                    "string" === typeof b ? (d = b, d = C(d)) :

                        b.setTargeting ? d = b :

                        b.id && (d = b.id, d = C(d));



                    p("Disabling autorefresh", d);


                    if (d && (d._disableAutoRefresh = !0, d._refreshTimeout)) try {
                        clearTimeout(d._refreshTimeout);
                    } catch (f) {}

                }

            else {

                k.autorefresh = !1;


                a = e.googletag.pubads().getSlots();

                for (var c = 0; c < a.length; c++) {


                    var d = a[c];

                    if (d._refreshTimeout) try {
                        clearTimeout(d._refreshTimeout);
                    } catch (f) {}

                }


                p("Disabled autorefresh for all slots on page");
            }

        },
        oa = function(a) {
            var b = a.slot;
            p("GPT Slot Rendered", a);
            b._rendered || (b._rendered = Math.floor(Date.now() / 1E3));
        },
        pa = function(a) {
            var b = a.slot,
                c = b.getSlotElementId();
            p("Slot Viewable", c, a);
            b._rendered || (b._rendered = Math.floor(Date.now() / 1E3));
            if (k.autorefresh && -1 == c.indexOf("-oop") && !b.getOutOfPage() && !b._disableAutoRefresh) {
                a = k.autorefresh - (Math.floor(Date.now() / 1E3) - b._rendered);
                0 > a && (a = 1);
                if (b._refreshTimeout) try {
                    clearTimeout(b._refreshTimeout);
                } catch (d) {}
                b._refreshTimeout = setTimeout(function() {
                    G([b]);
                }, 1E3 * a);
                p("Slot Scheduled for autorefresh in " + a + " secs", c);
            }
        },
        qa = function() {
            var a = e.googletag.pubads();
            a.disableInitialLoad();
            a.enableAsyncRendering();
            a.enableSingleRequest();
            a.addEventListener("slotRenderEnded", oa);
            a.addEventListener("impressionViewable", pa);
            na();
            Y();

            k.lazy && !0 === k.lazy && googletag.pubads().enableLazyLoad({
                renderMarginPercent: 200,
                mobileScaling: 2
            });

            I();

            Z();
            googletag.enableServices();
        },


        aa = function(a) {

            e.googletag.cmd.push(function() {



                I();
                for (var b = [], c = [], d = [], f = e.googletag.pubads().getSlots(), g = 0; g < f.length; g++) {



                    var h = f[g].getSlotElementId();






                    d.push(f[g]);


                }



                d.length && (e.googletag.pubadsReady ? e.googletag.pubads().refresh(d, {
                    changeCorrelator: !1
                }) : setTimeout(ra, 30));
            });
        },

        ra = function() {
            aa("skipPrebid");
        },

        sa = function(a, b) {
            if (a)
                for (var c in a) k[c] = a[c];
            if (b)
                for (c in b) t[c] = b[c];
        },

        ba = function() {

            z || (z = ha("geoCC"));
            e.googletag = e.googletag || {
                cmd: []
            };
            if (-1 != e.location.search.indexOf("zadebug=") || -1 != e.location.search.indexOf("pbjs_debug=")) M = !0;
            if (e.zad && e.zad.inited) return !1;

            sa(ca, x);
            e.googletag.cmd.push(qa);


            k.inject && da(k.inject);

            if (k.dependencies && k.dependencies.length)
                for (var a = 0; a < k.dependencies; a++) y(k.dependencies[a]);


            if (k.libs && k.libs.length)

                for (a = 0; a < k.libs; a++) y(k.libs[a]);



            if (k.gdprLibs && k.gdprLibs.length && !0 !== e.gdprApplies)

                for (a = 0; a < k.gdprLibs.length; a++) y(k.gdprLibs[a]);


            e.addEventListener && e.addEventListener("message", function(b) {

                (b = b.data) && b.event && "stopadrefresh" === b.event && b.name && J([b.name]);
            }, !1);
        };
    ba();
    return {
        inited: !0,
        init: ba,
        start: aa,
        renderNewAds: function(a) {


            a = I(a);

            G(a);
        },
        stopAutoRefresh: J,
        stopRefresh: J,
        __processQueue: function() {
            var a = e.zad ? e.zad.cmd : L;
            if (!a.processed) {
                if ("undefined" !== typeof a.length && "undefined" === typeof a.processed) {
                    p("Processing ZAd queue: " + a.length);
                    for (var b = 0; b < a.length; b++) {


                        var c = a[b];


                        if (!c || "boolean" === typeof c) return;
                        try {


                            "[object Function]" == {}.toString.call(c) ? c(e) : y(c);


                        } catch (d) {
                            p(" queue error: " + d, c);
                        }
                    }
                }
                e.zad = e.zad || {};
                e.zad.cmd = {
                    processed: !0,
                    push: function(d) {
                        if (d && "boolean" !== typeof d) try {

                            "[object Function]" === {}.toString.call(d) ? d(e) : y(d);
                        } catch (f) {
                            p("ZAD queue error: " + f, d);
                        }
                    }
                };

                return e.zad.cmd;

            }
        },
        cmd: L,
        loadJS: y,
        loadCSS: function(a, b, c) {
            function d() {
                h.onload = h.onreadystatechange = null;
                b && b();
            }
            c = c ? c.document : e.document;

            var f = c.getElementsByTagName("head")[0] || c.documentElement,
                g = !1,
                h = c.createElement("link");
            h.rel = "stylesheet";
            h.type = "text/css";
            h.onreadystatechange = function() {
                g || "loaded" != this.readyState && "complete" != this.readyState || (g = !0, d());
            };
            h.onload = d;
            h.href = a;
            f.appendChild(h);
        },
        geoCC: K,
        log: p,
        debug: p,
        opts: k
    };
}

if (!window.zad && window == window.top || !window.zad.inited && window == window.top) window.zad = __ZAd(window, window
    .document, window.zadConfig, window.zadSlotConfig), window.zad.__processQueue();
