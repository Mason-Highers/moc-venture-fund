/* ==========================================================================
   MOC VENTURE FUND · SITE SCRIPT
   1. Fills every page from content.js (data-c, data-list attributes)
   2. Builds the shared header, footer, menu, and page wipe
   3. Runs interactions: menus, tabs, accordions, filters, forms
   4. Runs animations with GSAP when the visitor allows motion
   You shouldn't need to edit this file to change words. Use content.js.
   ========================================================================== */
(function () {
  "use strict";
  window.__mvfReady = true;

  var C = window.MVF || {};
  var S = C.settings || {};
  var root = document.documentElement;
  var page = document.body.getAttribute("data-page") || "";
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGsap = !!(window.gsap && window.ScrollTrigger);
  var motion = hasGsap && !reduceMotion;
  if (!motion) root.classList.remove("motion-ok", "wipe-in");
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);
  if (hasGsap && window.Flip) gsap.registerPlugin(Flip);
  if (S.highlightPlaceholders === false) root.classList.add("no-ph");

  /* ------------------------------------------------------------ helpers */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function get(path, obj) {
    if (path === "." || path === "") return obj;
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj === undefined ? C : obj);
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function rich(v) {
    if (v == null) return "";
    var s = esc(v);
    s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/==(.+?)==/g, '<span class="hl">$1</span>');
    s = s.replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>');
    s = s.replace(/\n/g, "<br>");
    return s;
  }
  function plain(v) { return String(v == null ? "" : v).replace(/\*\*|==/g, ""); }
  function slug(v) { return plain(v).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
  function initials(v) {
    var t = plain(v).replace(/[\[\]]/g, "").trim();
    var w = t.split(/\s+/).filter(function (x) { return x && !/^(dr|prof|mr|mrs|ms|mx)\.?$/i.test(x); });
    if (!w.length) return "";
    return (w[0][0] + (w.length > 1 ? w[w.length - 1][0] : "")).toUpperCase();
  }
  function isPlaceholder(v) { return /\[[^\]]+\]/.test(String(v)); }
  function safe(fn, name) { try { fn(); } catch (e) { if (window.console) console.warn("[MVF] " + name + " skipped:", e); } }
  var uidN = 0;
  function uid(p) { uidN += 1; return (p || "u") + uidN; }

  /* ------------------------------------------------------------ icons */
  var I = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrowL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 13.4c0-3.1-1.65-4.54-3.86-4.54-1.78 0-2.58.98-3.02 1.67V8.5h-3.37c.04.95 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.69.13-.93.27-.69.9-1.4 1.95-1.4 1.38 0 1.93 1.05 1.93 2.6V20h3.37v-6.6Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5" stroke-width="1.6"/><path d="m8 12.4 2.7 2.6L16.2 9.6"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5" stroke-width="1.6"/><path d="m9 9 6 6M15 9l-6 6"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5" stroke-width="1.6"/><path d="M12 11v5.5M12 7.6v.2"/></svg>',
    upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V4M7 9l5-5 5 5M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1" fill="currentColor"/><circle cx="4.5" cy="12" r="1" fill="currentColor"/><circle cx="4.5" cy="18" r="1" fill="currentColor"/></svg>',
    person: '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="18" r="8" fill="rgba(255,255,255,.85)"/><path d="M9 42c1.8-8.4 8-13 15-13s13.2 4.6 15 13" fill="rgba(255,255,255,.85)"/></svg>',
    stairs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 20h5v-5h5v-5h5V5h3"/></svg>',
    trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7Z"/><path d="M19 16.5c.25 1.6.9 2.25 2.5 2.5-1.6.25-2.25.9-2.5 2.5-.25-1.6-.9-2.25-2.5-2.5 1.6-.25 2.25-.9 2.5-2.5Z"/></svg>',
    handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="9" cy="12" r="5.6"/><circle cx="15" cy="12" r="5.6"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>'
  };
  function hydrateIcons(scope) {
    $$("[data-icon]", scope).forEach(function (el) {
      var n = el.getAttribute("data-icon");
      if (I[n] && !el.firstChild) el.innerHTML = I[n];
    });
  }

  /* ------------------------------------------------------------ the mark */
  var MARK = {
    viewBox: "-0.64 -29.24 121.27 131.24",
    legL: "M22.79 100 L34.45 42.09 L26.96 -27.15 L1.36 100 Z",
    legR: "M85.55 42.09 L97.21 100 L118.64 100 L93.04 -27.15 Z",
    v: "M84.66 41.99 L92.14 -27.24 L60 45.9 L27.86 -27.24 L35.34 41.99 L48.53 72.01 L60 45.91 L71.47 72.01 Z",
    seed: "M60 98.1 L49.5 74.21 L60 50.31 L70.5 74.21 Z",
    silhouette: "M85.26 40.62 L97.21 100 L118.64 100 L92.74 -28.62 L60 45.9 L27.26 -28.62 L1.36 100 L22.79 100 L34.74 40.62 L60 98.1 Z"
  };
  function markSVG(opts) {
    opts = opts || {};
    var legs = opts.reversed ? "#FFFFFF" : "#112E51";
    var id = uid("mk");
    return '<svg class="mark-svg" viewBox="' + MARK.viewBox + '" role="img" aria-label="Moc Venture Fund mark">' +
      '<defs><clipPath id="' + id + '"><rect x="-60" y="-80" width="240" height="180.4"/></clipPath></defs>' +
      '<g class="part p-legs" clip-path="url(#' + id + ')"><path class="leg leg-l" fill="' + legs + '" d="' + MARK.legL + '"/>' +
      '<path class="leg leg-r" fill="' + legs + '" d="' + MARK.legR + '"/></g>' +
      '<g class="part p-v"><path class="mk-v" fill="#FDB736" d="' + MARK.v + '"/></g>' +
      '<g class="part p-seed"><path class="mk-seed" fill="#FDB736" d="' + MARK.seed + '"/></g></svg>';
  }
  /* Utah-style echo lines, drawn from our own M */
  function contoursSVG(n, opts) {
    opts = opts || {};
    var cx = 60, cy = 50, step = opts.step || 0.22, base = opts.base || 1.16, op0 = opts.opacity || 0.16;
    var maxS = base + step * (n - 1);
    var w = 121 * maxS, h = 131 * maxS;
    var vb = (cx - w / 2) + " " + (cy - h * 0.6) + " " + w + " " + h;
    var paths = "";
    for (var i = 0; i < n; i++) {
      var s = base + step * i;
      var op = (op0 * (1 - i / (n + 2))).toFixed(3);
      paths += '<path d="' + MARK.silhouette + '" transform="translate(' + cx + " " + cy + ") scale(" + s.toFixed(3) + ") translate(" + (-cx) + " " + (-cy) + ')" stroke-width="' + (0.55 / s).toFixed(3) + '" stroke-opacity="' + op + '"/>';
    }
    return '<svg class="contours" viewBox="' + vb + '" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' + paths + "</svg>";
  }
  /* layered ridgelines: Chattanooga's mountains as placeholder art */
  function rng(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function ridgesSVG(seed, opts) {
    opts = opts || {};
    var W = 400, H = opts.h || 300, r = rng(seed), layers = opts.layers || 4;
    var cols = opts.colors || ["#2A5A8F", "#1E4673", "#163A63", "#0B2440"];
    var out = '<svg class="ridges" viewBox="0 0 ' + W + " " + H + '" preserveAspectRatio="' + (opts.stretch ? "none" : "xMidYMax slice") + '" aria-hidden="true">';
    if (opts.sun) out += '<circle cx="' + (W * 0.72) + '" cy="' + (H * 0.3) + '" r="' + (H * 0.12) + '" fill="#FDB736" opacity=".9"/>';
    for (var L = 0; L < layers; L++) {
      var baseY = H * (0.38 + L * (0.5 / layers)), amp = H * (0.16 - L * 0.025), pts = [];
      var plateau = opts.plateau && L === 1;
      for (var x = -40; x <= W + 40; x += 40) {
        var y = baseY - r() * amp;
        if (plateau && x > W * 0.15 && x < W * 0.55) y = baseY - amp * 0.95 + r() * 4;
        pts.push([x, y]);
      }
      var d = "M-40 " + H + " L" + pts[0][0] + " " + pts[0][1].toFixed(1);
      for (var i = 1; i < pts.length; i++) {
        var p0 = pts[i - 1], p1 = pts[i], mx = (p0[0] + p1[0]) / 2;
        d += " Q" + p0[0] + " " + p0[1].toFixed(1) + " " + mx + " " + ((p0[1] + p1[1]) / 2).toFixed(1);
      }
      d += " L" + (W + 40) + " " + H + " Z";
      out += '<path class="ridge ridge-' + L + '" fill="' + cols[L % cols.length] + '" d="' + d + '"/>';
    }
    return out + "</svg>";
  }

  /* ------------------------------------------------------------ rendering */
  function applyFilter(val, f, idx) {
    if (f === "initials") return initials(val);
    if (f === "slug") return slug(val);
    if (f === "upper") return plain(val).toUpperCase();
    if (f === "n") return String(idx + 1);
    if (f === "nn") return (idx + 1 < 10 ? "0" : "") + (idx + 1);
    if (f === "partkey") return ["legs", "v", "seed"][idx] || "";
    if (f === "bg") return "background:" + val;
    if (f === "font") return "font-family:'" + plain(val) + "', serif";
    if (f === "pvclass") return val ? "pv dark" : "pv";
    return val;
  }
  function fieldVal(item, spec, idx) {
    var parts = spec.split("|"), key = parts[0], f = parts[1];
    var v = key === "$i" ? idx : get(key, item);
    return f ? applyFilter(v, f, idx) : v;
  }
  function fill(scope, item, idx) {
    $$("[data-f]", scope).forEach(function (el) {
      var v = fieldVal(item, el.getAttribute("data-f"), idx);
      el.innerHTML = rich(v);
      el.removeAttribute("data-f");
    });
    $$("[data-f-href]", scope).forEach(function (el) {
      var v = fieldVal(item, el.getAttribute("data-f-href"), idx);
      if (v) el.setAttribute("href", v); else el.removeAttribute("href");
      el.removeAttribute("data-f-href");
    });
    $$("[data-f-attr]", scope).forEach(function (el) {
      el.getAttribute("data-f-attr").split(",").forEach(function (pair) {
        var bits = pair.split(":"), attr = bits[0].trim(), spec = bits.slice(1).join(":").trim();
        var v = fieldVal(item, spec, idx);
        if (v != null) el.setAttribute(attr, plain(v));
      });
      el.removeAttribute("data-f-attr");
    });
    $$("[data-f-if]", scope).forEach(function (el) {
      var v = fieldVal(item, el.getAttribute("data-f-if"), idx);
      if (!v) el.parentNode.removeChild(el); else el.removeAttribute("data-f-if");
    });
    $$("[data-f-list]", scope).forEach(function (el) {
      renderList(el, fieldVal(item, el.getAttribute("data-f-list"), idx));
      el.removeAttribute("data-f-list");
    });
  }
  function renderList(container, items) {
    var tpl = $(":scope > template", container) || container.querySelector("template");
    if (!tpl || !Array.isArray(items)) return;
    var frag = document.createDocumentFragment();
    items.forEach(function (item, idx) {
      var node = tpl.content.cloneNode(true);
      var wrap = document.createElement("div");
      wrap.appendChild(node);
      fill(wrap, item, idx);
      while (wrap.firstChild) frag.appendChild(wrap.firstChild);
    });
    container.appendChild(frag);
  }
  function renderBindings(scope) {
    $$("[data-c]", scope).forEach(function (el) {
      var v = get(el.getAttribute("data-c"));
      if (v !== undefined) el.innerHTML = rich(v);
    });
    $$("[data-c-href]", scope).forEach(function (el) {
      var v = get(el.getAttribute("data-c-href"));
      if (v) el.setAttribute("href", v);
    });
    $$("[data-list]", scope).forEach(function (el) { renderList(el, get(el.getAttribute("data-list"))); });
  }

  /* ------------------------------------------------------------ chrome */
  function btn(label, href, cls) {
    return '<a class="btn ' + (cls || "") + '" href="' + esc(href) + '"><span>' + rich(label) + '</span><span class="btn-dot">' + I.arrow + "</span></a>";
  }
  function buildChrome() {
    var site = C.site || {};
    var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    var navHtml = (C.nav || []).map(function (n) {
      var cur = n.href.toLowerCase() === here ? ' aria-current="page"' : "";
      return '<li><a class="nav-link" href="' + esc(n.href) + '"' + cur + ">" + esc(n.label) + "</a></li>";
    }).join("");
    var cta = C.navCta || { label: "Pitch us", href: "founders.html#apply" };
    var head = $("[data-site-header]");
    if (head) {
      head.outerHTML =
        '<header class="site-header"><div class="container bar">' +
        '<a class="brand" href="index.html" aria-label="' + esc(site.name || "Home") + ' home"><img src="assets/img/logo.svg" alt="' + esc(site.name || "") + '" width="190" height="78"></a>' +
        '<nav class="main-nav" aria-label="Main"><span class="nav-indicator" aria-hidden="true"></span><ul>' + navHtml + "</ul>" +
        '<span class="nav-cta">' + btn(cta.label, cta.href, "btn--sm") + "</span>" +
        '<button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span><span></span></button>' +
        "</nav></div></header>" +
        '<div class="mobile-nav" id="mobile-nav" role="dialog" aria-modal="true" aria-label="Menu">' +
        '<div class="top"><img src="assets/img/logo-reversed.svg" alt="' + esc(site.name || "") + '" width="160" height="66"><button class="close" type="button" aria-label="Close menu">' + I.close + "</button></div>" +
        "<ol>" + (C.nav || []).map(function (n) { return '<li><a href="' + esc(n.href) + '">' + esc(n.label) + "</a></li>"; }).join("") + "</ol>" +
        '<div class="mn-foot">' + btn(cta.label, cta.href, "btn--gold") + '<p class="label" style="color:rgba(255,255,255,.6)">' + esc(site.tagline || "") + "</p></div></div>" +
        '<div class="page-wipe" aria-hidden="true"><img src="assets/img/mark-reversed.svg" alt=""></div>';
    }
    var foot = $("[data-site-footer]");
    if (foot) {
      var F = C.footer || {};
      var cols = (F.columns || []).map(function (c) {
        return '<div class="f-col"><h3>' + esc(c.title) + "</h3><ul>" + c.links.map(function (l) {
          return '<li><a href="' + esc(l.href) + '">' + rich(l.label) + "</a></li>";
        }).join("") + "</ul></div>";
      }).join("");
      foot.outerHTML =
        '<footer class="site-footer on-dark"><div class="container">' +
        '<div class="f-top"><div class="f-brand"><img src="assets/img/logo-reversed.svg" alt="' + esc(site.name || "") + '" width="200" height="82"><p>' + rich(F.blurb) + "</p></div>" + cols + "</div>" +
        '<div class="f-mid"><div class="partners">' + (F.partners || []).map(function (p) { return "<span>" + rich(p) + "</span>"; }).join("") + "</div>" +
        '<a class="to-top" href="#top"><i aria-hidden="true"></i>Back to top</a></div>' +
        '<div class="f-bottom"><p>' + rich(F.disclaimer) + '</p><div class="row"><span>&copy; ' + new Date().getFullYear() + " " + esc(site.name || "") + '</span>' + (S.privateDraft !== false ? '<span class="draft-tag">Private draft · not for publication</span>' : "") + "</div></div>" +
        "</div></footer>";
    }
    hydrateIcons(document);
  }

  /* ------------------------------------------------------------ decor */
  function buildDecor() {
    $$("[data-mark]").forEach(function (el) {
      el.innerHTML = markSVG({ reversed: el.getAttribute("data-mark") === "reversed" });
    });
    $$("[data-contours]").forEach(function (el) {
      var n = parseInt(el.getAttribute("data-contours"), 10) || 9;
      var wrap = document.createElement("div");
      wrap.innerHTML = contoursSVG(n, { step: parseFloat(el.getAttribute("data-step")) || 0.22, opacity: parseFloat(el.getAttribute("data-opacity")) || 0.16 });
      var svg = wrap.firstChild;
      var cls = el.getAttribute("data-class");
      if (cls) svg.setAttribute("class", "contours " + cls);
      el.parentNode.replaceChild(svg, el);
    });
    $$("[data-ridges]").forEach(function (el) {
      var seed = parseInt(el.getAttribute("data-ridges"), 10) || 7;
      el.innerHTML = ridgesSVG(seed, { sun: el.hasAttribute("data-sun"), plateau: el.hasAttribute("data-plateau"), stretch: el.hasAttribute("data-stretch"), layers: parseInt(el.getAttribute("data-layers"), 10) || 4 });
    });
  }

  /* ------------------------------------------------------------ header behavior */
  function headerBehavior() {
    var header = $(".site-header");
    if (!header) return;
    var lastY = window.scrollY, ticking = false;
    function onScroll() {
      var y = window.scrollY;
      header.classList.toggle("is-scrolled", y > 24);
      if (y > 320 && y > lastY + 4 && !document.body.classList.contains("menu-open")) header.classList.add("is-hidden");
      else if (y < lastY - 4 || y < 320) header.classList.remove("is-hidden");
      lastY = y; ticking = false;
    }
    window.addEventListener("scroll", function () { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
    onScroll();

    // gold bar that slides between nav items (Utah's active-page bar)
    var nav = $(".main-nav"), ind = $(".nav-indicator", nav), links = $$(".nav-link", nav);
    var current = $('.nav-link[aria-current="page"]', nav);
    function moveTo(a) {
      if (!a) { ind.classList.remove("is-on"); return; }
      var nr = nav.getBoundingClientRect(), ar = a.getBoundingClientRect();
      ind.style.width = (ar.width - 16) + "px";
      ind.style.transform = "translateX(" + (ar.left - nr.left + 8) + "px)";
      ind.classList.add("is-on");
    }
    links.forEach(function (a) {
      a.addEventListener("mouseenter", function () { moveTo(a); });
      a.addEventListener("focus", function () { moveTo(a); });
    });
    nav.addEventListener("mouseleave", function () { moveTo(current); });
    window.addEventListener("resize", function () { moveTo(current); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { moveTo(current); });
    moveTo(current);

    // mobile menu
    var burger = $(".burger"), menu = $("#mobile-nav"), close = $(".close", menu);
    function openMenu() {
      menu.classList.add("is-open"); document.body.classList.add("menu-open");
      burger.setAttribute("aria-expanded", "true"); document.body.style.overflow = "hidden";
      if (motion) gsap.fromTo($$("ol a, .mn-foot > *", menu), { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .7, ease: "expo.out", stagger: .05, delay: .08 });
      setTimeout(function () { close.focus(); }, 60);
    }
    function closeMenu() {
      menu.classList.remove("is-open"); document.body.classList.remove("menu-open");
      burger.setAttribute("aria-expanded", "false"); document.body.style.overflow = "";
      burger.focus();
    }
    burger.addEventListener("click", openMenu);
    close.addEventListener("click", closeMenu);
    menu.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
    $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { menu.classList.remove("is-open"); document.body.classList.remove("menu-open"); document.body.style.overflow = ""; }); });
  }

  /* ------------------------------------------------------------ page wipe */
  function pageWipe() {
    var wipe = $(".page-wipe");
    if (!wipe) return;
    var useWipe = motion && S.pageTransitions !== false;
    if (useWipe && root.classList.contains("wipe-in")) {
      gsap.to(wipe, { yPercent: -101, duration: .85, ease: "expo.inOut", delay: .12, onComplete: function () {
        root.classList.remove("wipe-in"); gsap.set(wipe, { clearProps: "transform", visibility: "hidden" });
      } });
    } else {
      root.classList.remove("wipe-in");
    }
    window.addEventListener("pageshow", function (e) {
      if (e.persisted) { root.classList.remove("wipe-in"); gsap && gsap.set(wipe, { clearProps: "all" }); }
    });
    if (!useWipe) return;
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[href]");
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;
      var href = a.getAttribute("href");
      if (!href || href.charAt(0) === "#" || /^(mailto:|tel:|https?:)/i.test(href)) return;
      var url = new URL(a.href, location.href);
      if (url.pathname === location.pathname && url.hash) return;
      e.preventDefault();
      gsap.set(wipe, { visibility: "visible" });
      gsap.fromTo(wipe, { yPercent: 101 }, { yPercent: 0, duration: .55, ease: "expo.in", onComplete: function () { location.href = a.href; } });
    });
  }

  /* ------------------------------------------------------------ in-page anchors */
  function anchors() {
    $$('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href").slice(1);
        var t = id === "top" ? document.body : document.getElementById(id);
        if (!t) return;
        e.preventDefault();
        if (id === "top") window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
        else t.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        if (history.replaceState) history.replaceState(null, "", "#" + id);
      });
    });
    if (location.hash.length > 1) {
      var t = document.getElementById(location.hash.slice(1));
      if (t) setTimeout(function () { t.scrollIntoView({ block: "start" }); }, 80);
    }
  }

  /* ------------------------------------------------------------ components */
  function accordions() {
    $$(".accordion").forEach(function (acc, ai) {
      $$(".acc-item", acc).forEach(function (item, i) {
        var b = $(".acc-btn", item), p = $(".acc-panel", item);
        var pid = "acc-" + ai + "-" + i;
        p.id = pid; b.setAttribute("aria-controls", pid); b.setAttribute("aria-expanded", "false");
        p.setAttribute("role", "region");
        b.addEventListener("click", function () {
          var open = b.getAttribute("aria-expanded") === "true";
          b.setAttribute("aria-expanded", String(!open));
          if (!open) {
            p.style.height = p.scrollHeight + "px";
            p.addEventListener("transitionend", function te() { if (b.getAttribute("aria-expanded") === "true") p.style.height = "auto"; p.removeEventListener("transitionend", te); });
          } else {
            p.style.height = p.scrollHeight + "px";
            requestAnimationFrame(function () { p.style.height = "0px"; });
          }
        });
      });
    });
  }

  function tabs() {
    $$("[data-tabs]").forEach(function (box, bi) {
      var list = $("[role=tablist]", box), tabsEls = $$("[role=tab]", box), panels = $$("[role=tabpanel]", box);
      var ink = $(".tab-ink", box);
      function select(i, focus) {
        tabsEls.forEach(function (t, j) {
          var on = i === j;
          t.setAttribute("aria-selected", String(on)); t.tabIndex = on ? 0 : -1;
          if (panels[j]) panels[j].hidden = !on;
        });
        if (ink) {
          var t = tabsEls[i];
          ink.style.width = t.offsetWidth + "px";
          ink.style.transform = "translateX(" + t.offsetLeft + "px)";
        }
        if (focus) tabsEls[i].focus();
        box.dispatchEvent(new CustomEvent("tabchange", { detail: i }));
        if (motion && panels[i]) gsap.fromTo(panels[i], { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .55, ease: "expo.out" });
      }
      tabsEls.forEach(function (t, i) {
        var tid = "tab-" + bi + "-" + i;
        t.id = tid;
        if (panels[i]) { panels[i].id = tid + "-p"; panels[i].setAttribute("aria-labelledby", tid); t.setAttribute("aria-controls", tid + "-p"); }
        t.addEventListener("click", function () { select(i); });
        t.addEventListener("keydown", function (e) {
          if (e.key === "ArrowRight") select((i + 1) % tabsEls.length, true);
          if (e.key === "ArrowLeft") select((i - 1 + tabsEls.length) % tabsEls.length, true);
        });
      });
      select(0);
      window.addEventListener("resize", function () {
        var cur = tabsEls.findIndex(function (t) { return t.getAttribute("aria-selected") === "true"; });
        if (ink && cur > -1) { ink.style.width = tabsEls[cur].offsetWidth + "px"; ink.style.transform = "translateX(" + tabsEls[cur].offsetLeft + "px)"; }
      });
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { select(0); });
    });
  }

  function filters() {
    $$("[data-filter-for]").forEach(function (bar) {
      var target = document.getElementById(bar.getAttribute("data-filter-for"));
      if (!target) return;
      var key = bar.getAttribute("data-filter-key") || "data-group";
      var chips = $$(".chip", bar);
      chips.forEach(function (chip) {
        chip.addEventListener("click", function () {
          chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
          var val = chip.getAttribute("data-value");
          var items = $$(":scope > *:not(template)", target);
          if (motion) gsap.set(items, { opacity: 1, x: 0, y: 0, scale: 1 }); // the grid is in view; finish any pending reveals
          var state = motion && window.Flip ? Flip.getState(items) : null;
          items.forEach(function (it) { it.hidden = !(val === "all" || it.getAttribute(key) === val); });
          if (state) Flip.from(state, { duration: .6, ease: "expo.out", scale: true, absolute: true,
            onEnter: function (els) { return gsap.fromTo(els, { opacity: 0, scale: .92 }, { opacity: 1, scale: 1, duration: .5 }); } });
          if (hasGsap) ScrollTrigger.refresh();
        });
      });
    });
  }

  function viewToggle() {
    $$("[data-view-for]").forEach(function (box) {
      var target = document.getElementById(box.getAttribute("data-view-for"));
      var bs = $$("button", box);
      bs.forEach(function (b) {
        b.addEventListener("click", function () {
          bs.forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
          var items = $$(".co", target);
          if (motion) gsap.set(items, { opacity: 1, x: 0, y: 0, scale: 1 });
          var state = motion && window.Flip ? Flip.getState(items) : null;
          target.classList.toggle("is-list", b.getAttribute("data-view") === "list");
          if (state) Flip.from(state, { duration: .6, ease: "expo.inOut", absolute: false });
          if (hasGsap) ScrollTrigger.refresh();
        });
      });
    });
  }

  function quotes() {
    $$("[data-quotes]").forEach(function (box) {
      var qs = $$(".quote", box), dots = $(".quote-dots", box), i = 0, timer = null;
      if (!qs.length) return;
      dots.innerHTML = qs.map(function (_, j) { return '<button type="button" role="tab" aria-label="Quote ' + (j + 1) + '"></button>'; }).join("");
      var ds = $$("button", dots);
      function show(n) {
        i = (n + qs.length) % qs.length;
        qs.forEach(function (q, j) { q.classList.toggle("is-current", j === i); q.setAttribute("aria-hidden", String(j !== i)); });
        ds.forEach(function (d, j) { d.setAttribute("aria-selected", String(j === i)); });
      }
      function play() { if (!reduceMotion) { stop(); timer = setInterval(function () { show(i + 1); }, 7000); } }
      function stop() { if (timer) clearInterval(timer); }
      ds.forEach(function (d, j) { d.addEventListener("click", function () { show(j); play(); }); });
      box.addEventListener("mouseenter", stop); box.addEventListener("mouseleave", play);
      box.addEventListener("focusin", stop); box.addEventListener("focusout", play);
      show(0); play();
    });
  }

  function marquee() {
    $$("[data-marquee]").forEach(function (m) {
      var track = $(".marquee-track", m);
      if (!track) return;
      var items = $$(".marquee-item", track);
      items.forEach(function (it) { var c = it.cloneNode(true); c.setAttribute("aria-hidden", "true"); track.appendChild(c); });
    });
  }

  function journey() {
    $$("[data-journey]").forEach(function (box) {
      var track = $(".journey-track", box), bar = $(".journey-progress i", box);
      var prev = $("[data-dir=prev]", box), next = $("[data-dir=next]", box);
      function upd() {
        var max = track.scrollWidth - track.clientWidth;
        var p = max > 0 ? track.scrollLeft / max : 1;
        bar.style.setProperty("--jp", Math.max(.12, p).toFixed(3));
      }
      function stepW() { var c = $(".jcard", track); return c ? c.getBoundingClientRect().width + 22 : 300; }
      prev.addEventListener("click", function () { track.scrollBy({ left: -stepW(), behavior: "smooth" }); });
      next.addEventListener("click", function () { track.scrollBy({ left: stepW(), behavior: "smooth" }); });
      track.addEventListener("scroll", upd, { passive: true });
      var down = false, sx = 0, sl = 0, moved = false;
      track.addEventListener("pointerdown", function (e) { if (e.pointerType !== "mouse") return; down = true; moved = false; sx = e.clientX; sl = track.scrollLeft; track.classList.add("is-dragging"); });
      window.addEventListener("pointermove", function (e) { if (!down) return; var dx = e.clientX - sx; if (Math.abs(dx) > 4) moved = true; track.scrollLeft = sl - dx; });
      window.addEventListener("pointerup", function () { if (!down) return; down = false; track.classList.remove("is-dragging"); });
      track.addEventListener("click", function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
      upd();
    });
  }

  function bios() {
    var dlg = $("dialog.bio");
    if (!dlg) return;
    var members = get("team.members") || [];
    $$("[data-bio]").forEach(function (b) {
      b.addEventListener("click", function () {
        var m = members[parseInt(b.getAttribute("data-bio"), 10) - 1];
        if (!m) return;
        $(".bio-role", dlg).innerHTML = rich(m.role);
        $(".bio-name", dlg).innerHTML = rich(m.name);
        $(".bio-detail", dlg).innerHTML = rich(m.detail);
        $(".bio-body", dlg).innerHTML = rich(m.bio);
        var pi = $(".initials", dlg);
        pi.innerHTML = isPlaceholder(m.name) ? I.person : esc(initials(m.name));
        var li = $(".bio-linkedin", dlg); li.setAttribute("href", m.linkedin || "#");
        if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
        if (motion) gsap.fromTo(dlg, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .5, ease: "expo.out" });
      });
    });
    $(".bio-close", dlg).addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  }

  function forms() {
    $$("form[data-demo]").forEach(function (f) {
      var note = $(".form-note", f);
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!f.checkValidity()) { f.reportValidity(); return; }
        if (S.formsAreDemos !== false && note) {
          note.innerHTML = rich(get(f.getAttribute("data-demo")) || "Thanks! This form is a preview.");
          note.classList.add("is-shown");
          if (motion) gsap.fromTo(note, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: .5, ease: "expo.out" });
        }
      });
    });
    $$(".dropzone").forEach(function (z) {
      var input = $("input[type=file]", z), label = $(".dz-label", z);
      input.addEventListener("change", function () { if (input.files && input.files[0]) label.innerHTML = "<strong>" + esc(input.files[0].name) + "</strong> selected"; });
      ["dragenter", "dragover"].forEach(function (ev) { z.addEventListener(ev, function () { z.classList.add("is-over"); }); });
      ["dragleave", "drop"].forEach(function (ev) { z.addEventListener(ev, function () { z.classList.remove("is-over"); }); });
    });
  }

  function brandPage() {
    var stage = $(".brand-mark");
    if (stage) {
      $$(".part-card").forEach(function (c) {
        var on = function () { stage.setAttribute("data-focus", c.getAttribute("data-part")); $$(".part-card").forEach(function (x) { x.classList.toggle("is-on", x === c); }); };
        var off = function () { stage.removeAttribute("data-focus"); c.classList.remove("is-on"); };
        c.addEventListener("mouseenter", on); c.addEventListener("focus", on);
        c.addEventListener("mouseleave", off); c.addEventListener("blur", off);
      });
    }
    var toast = $(".toast");
    $$("[data-copy]").forEach(function (b) {
      b.addEventListener("click", function () {
        var v = b.getAttribute("data-copy");
        var done = function () { if (!toast) return; toast.textContent = v + " copied"; toast.classList.add("is-on"); setTimeout(function () { toast.classList.remove("is-on"); }, 1600); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(v).then(done, done); else done();
      });
    });
  }

  /* placeholder names get a silhouette instead of initials */
  function avatars() {
    $$(".initials[data-name]").forEach(function (el) {
      if (isPlaceholder(el.getAttribute("data-name"))) el.innerHTML = I.person;
    });
  }

  /* founders page: one table per stage, built from the shared row labels */
  function stageTables() {
    var st = get("founders.stages");
    if (!st) return;
    $$("[data-stage-table]").forEach(function (dl) {
      var tab = st.tabs[parseInt(dl.getAttribute("data-stage-table"), 10)];
      if (!tab) return;
      dl.innerHTML = st.rows.map(function (label, i) {
        return '<div class="stage-row"><dt>' + rich(label) + '</dt><dd><span class="val">' + rich(tab.values[i]) + "</span></dd></div>";
      }).join("");
    });
    $$("[data-stage-explorer]").forEach(function (box) {
      var track = $(".stage-track", box);
      box.addEventListener("tabchange", function (e) { track.style.setProperty("--s", (e.detail / 2).toFixed(3)); });
    });
  }

  /* contact page: the giant word, split into letters, with the gold seed last */
  function connectWord() {
    $$("[data-connect]").forEach(function (h) {
      var w = plain(get("contact.word") || "Connect");
      h.setAttribute("aria-label", w);
      h.innerHTML = w.split("").map(function (ch) { return '<span class="ch" aria-hidden="true">' + esc(ch) + "</span>"; }).join("") + '<span class="seed" aria-hidden="true"></span>';
    });
    $$("[data-email]").forEach(function (a) {
      var em = get("site.email") || "";
      a.innerHTML = rich(em);
      if (em && !isPlaceholder(em)) a.setAttribute("href", "mailto:" + plain(em)); else a.setAttribute("href", "#");
    });
  }

  /* first chip in each filter bar starts pressed */
  function chipsDefault() {
    $$("[data-filter-for]").forEach(function (bar) {
      var chips = $$(".chip", bar);
      if (chips.length && !chips.some(function (c) { return c.getAttribute("aria-pressed") === "true"; })) chips[0].setAttribute("aria-pressed", "true");
    });
  }

  function companyTouch() {
    $$(".co").forEach(function (co) {
      co.addEventListener("click", function (e) {
        if (e.target.closest("a")) return;
        if (window.matchMedia("(hover: none)").matches) co.classList.toggle("is-open");
      });
    });
  }

  /* ------------------------------------------------------------ stats (no motion: final values) */
  function statsStatic() {
    $$("[data-count]").forEach(function (el) {
      var v = el.getAttribute("data-count");
      if (v === null || v === "") return;
      el.innerHTML = rich(v) + (el.getAttribute("data-suffix") ? esc(el.getAttribute("data-suffix")) : "");
    });
  }

  /* ------------------------------------------------------------ thread lines */
  var threads = [];
  function layoutThreads() {
    threads.forEach(function (t) {
      var step = t.step, svg = t.svg, path = t.path;
      var r = step.getBoundingClientRect(), a = $(".t-start", step), b = $(".t-end", step);
      if (!a || !b || !r.width) return;
      var ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
      var x1 = ra.left - r.left + 14, y1 = ra.bottom - r.top + 12;
      var x2 = rb.left - r.left + 14, y2 = rb.top - r.top - 12;
      var ym = Math.round(y1 + (y2 - y1) * 0.55);
      svg.setAttribute("viewBox", "0 0 " + r.width + " " + r.height);
      path.setAttribute("d", "M" + x1 + " " + y1 + " V" + ym + " H" + x2 + " V" + y2);
      t.dot.setAttribute("cx", x2); t.dot.setAttribute("cy", y2 + 2);
      var len = path.getTotalLength();
      t.len = len;
      path.style.strokeDasharray = len;
      if (!motion) path.style.strokeDashoffset = 0;
      else path.style.strokeDashoffset = len * (1 - (t.progress || 0));
    });
  }
  function setupThreads() {
    $$(".thread-step").forEach(function (step) {
      var NS = "http://www.w3.org/2000/svg";
      var svg = document.createElementNS(NS, "svg");
      svg.setAttribute("class", "thread-svg"); svg.setAttribute("aria-hidden", "true");
      var path = document.createElementNS(NS, "path");
      var dot = document.createElementNS(NS, "circle"); dot.setAttribute("r", "5");
      svg.appendChild(path); svg.appendChild(dot);
      step.insertBefore(svg, step.firstChild);
      var t = { step: step, svg: svg, path: path, dot: dot, progress: motion ? 0 : 1 };
      threads.push(t);
      if (motion) {
        gsap.set(dot, { scale: 0, transformOrigin: "50% 50%" });
        ScrollTrigger.create({
          trigger: step, start: "top 82%", end: "bottom 58%", scrub: .6,
          onUpdate: function (st) {
            t.progress = st.progress;
            if (t.len) path.style.strokeDashoffset = t.len * (1 - st.progress);
            gsap.set(dot, { scale: st.progress > .97 ? 1 : 0 });
          }
        });
      }
    });
    layoutThreads();
    var ro = window.ResizeObserver ? new ResizeObserver(function () { layoutThreads(); }) : null;
    if (ro) threads.forEach(function (t) { ro.observe(t.step); });
    else window.addEventListener("resize", layoutThreads);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutThreads);
  }

  /* ------------------------------------------------------------ text splitting */
  function splitWords(el) {
    if (el.__split) return el.__split;
    var words = [];
    function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (ch) {
        if (ch.nodeType === 3) {
          var parts = ch.textContent.split(/(\s+)/);
          var frag = document.createDocumentFragment();
          parts.forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(" ")); return; }
            var w = document.createElement("span"); w.className = "split-word";
            var inner = document.createElement("span"); inner.textContent = p;
            w.appendChild(inner); frag.appendChild(w); words.push(inner);
          });
          node.replaceChild(frag, ch);
        } else if (ch.nodeType === 1 && ch.tagName !== "BR") {
          walk(ch);
        }
      });
    }
    walk(el);
    el.__split = words;
    return words;
  }

  /* ------------------------------------------------------------ animations */
  function animate() {
    if (!motion) {
      $$(".tl-item").forEach(function (i) { i.classList.add("is-active"); });
      $$(".hl").forEach(function (h) { h.classList.add("is-in"); });
      statsStatic();
      return;
    }
    var E = "expo.out";
    var D = (root.classList.contains("wipe-in") && S.pageTransitions !== false) ? .7 : 0; // wait for the page wipe

    // generic reveals, batched so neighbors stagger
    ScrollTrigger.batch("[data-reveal]", {
      start: "top 88%", once: true,
      onEnter: function (els) { gsap.to(els, { opacity: 1, x: 0, y: 0, scale: 1, duration: 1, ease: E, stagger: .09, overwrite: true }); }
    });

    // headline word reveals
    $$("[data-split]").forEach(function (el) {
      var words = splitWords(el);
      var hero = el.hasAttribute("data-split-now");
      gsap.set(words, { yPercent: 110 });
      var cfg = { yPercent: 0, duration: 1.15, ease: E, stagger: .055, delay: hero ? .55 + D : 0 };
      if (hero) gsap.to(words, cfg);
      else ScrollTrigger.create({ trigger: el, start: "top 86%", once: true, onEnter: function () { gsap.to(words, cfg); } });
    });

    // gold highlights draw when seen
    $$(".hl").forEach(function (h) {
      ScrollTrigger.create({ trigger: h, start: "top 84%", once: true, onEnter: function () { setTimeout(function () { h.classList.add("is-in"); }, 350); } });
    });

    // big mark intro: peaks rise, the V drops in, the seed lands
    $$("[data-mark-intro] .mark-svg").forEach(function (svg) {
      var legs = $$(".leg", svg), v = $(".mk-v", svg), seed = $(".mk-seed", svg);
      var tl = gsap.timeline({ delay: .35 + D });
      tl.from(legs, { y: 135, duration: 1.3, ease: "expo.out", stagger: .14 })
        .from(v, { y: -70, opacity: 0, duration: 1.1, ease: "back.out(1.5)" }, "-=.85")
        .from(seed, { scale: 0, rotation: -90, transformOrigin: "50% 50%", duration: .9, ease: "back.out(2)" }, "-=.45");
      var host = svg.closest("[data-mark-intro]");
      var area = host.closest("section") || host;
      if (window.matchMedia("(hover: hover)").matches) {
        var qx = [gsap.quickTo(legs, "x", { duration: .9, ease: "power3" }), gsap.quickTo(v, "x", { duration: .9, ease: "power3" }), gsap.quickTo(seed, "x", { duration: .9, ease: "power3" })];
        var qy = [gsap.quickTo(legs, "y", { duration: .9, ease: "power3" }), gsap.quickTo(v, "y", { duration: .9, ease: "power3" }), gsap.quickTo(seed, "y", { duration: .9, ease: "power3" })];
        area.addEventListener("mousemove", function (e) {
          if (tl.isActive()) return;
          var r = area.getBoundingClientRect();
          var nx = (e.clientX - r.left) / r.width - .5, ny = (e.clientY - r.top) / r.height - .5;
          qx[0](nx * -4); qy[0](ny * -3); qx[1](nx * 7); qy[1](ny * 5); qx[2](nx * 12); qy[2](ny * 9);
        });
      }
    });

    // echo lines draw themselves, then drift with scroll
    $$(".contours").forEach(function (svg) {
      var paths = $$("path", svg);
      paths.forEach(function (p) { var L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; });
      var inHero = svg.closest(".hero, .block-hero, .mega-hero");
      var draw = function () { gsap.to(paths, { strokeDashoffset: 0, duration: 2.4, ease: "power2.inOut", stagger: .07 }); };
      if (inHero) gsap.delayedCall(.2 + D, draw);
      else ScrollTrigger.create({ trigger: svg.parentNode, start: "top 85%", once: true, onEnter: draw });
      gsap.to(svg, { yPercent: inHero ? 12 : -8, ease: "none", scrollTrigger: { trigger: svg.parentNode, start: "top bottom", end: "bottom top", scrub: true } });
    });

    // North Dakota's diagonal break gets steeper as you scroll
    $$(".band").forEach(function (band) {
      gsap.fromTo(band, { "--slant": "scaleY(1.35)" }, { "--slant": "scaleY(.55)", ease: "none", scrollTrigger: { trigger: band, start: "top bottom", end: "top 20%", scrub: true } });
    });

    // arch cards: numerals drift for depth
    $$(".arch-photo").forEach(function (ph) {
      var num = $(".num", ph), ridges = $$(".ridge", ph);
      if (num) gsap.fromTo(num, { yPercent: -18 }, { yPercent: 18, ease: "none", scrollTrigger: { trigger: ph, start: "top bottom", end: "bottom top", scrub: true } });
      ridges.forEach(function (rg, i) { gsap.fromTo(rg, { y: 6 * (i + 1) }, { y: -6 * (i + 1), ease: "none", scrollTrigger: { trigger: ph, start: "top bottom", end: "bottom top", scrub: true } }); });
    });

    // approach timeline (Utah): line fills, circles light up
    $$(".timeline").forEach(function (tlEl) {
      ScrollTrigger.create({ trigger: tlEl, start: "top 62%", end: "bottom 62%", scrub: .4,
        onUpdate: function (st) { tlEl.style.setProperty("--fill", st.progress.toFixed(4)); } });
      $$(".tl-item", tlEl).forEach(function (it) {
        ScrollTrigger.create({ trigger: it, start: "top 62%", onEnter: function () { it.classList.add("is-active"); }, onLeaveBack: function () { it.classList.remove("is-active"); } });
      });
    });
    $$(".highlights").forEach(function (h) {
      ScrollTrigger.create({ trigger: h, start: "top 75%", end: "bottom 60%", scrub: .4, onUpdate: function (st) { h.style.setProperty("--fill", st.progress.toFixed(4)); } });
    });

    // counters
    $$("[data-count]").forEach(function (el) {
      var raw = el.getAttribute("data-count"), suf = el.getAttribute("data-suffix") || "";
      var n = parseFloat(raw);
      if (isNaN(n) || isPlaceholder(raw)) { el.innerHTML = rich(raw) + esc(suf); return; }
      var o = { v: 0 };
      el.textContent = "0" + suf;
      ScrollTrigger.create({ trigger: el, start: "top 88%", once: true, onEnter: function () {
        gsap.to(o, { v: n, duration: 1.8, ease: "power3.out", onUpdate: function () { el.textContent = Math.round(o.v) + suf; } });
      } });
    });

    // giant statement: lines rise one by one
    $$("[data-lines]").forEach(function (el) {
      var lines = $$(".split-line > span", el);
      gsap.set(lines, { yPercent: 105 });
      ScrollTrigger.create({ trigger: el, start: "top 80%", once: true, onEnter: function () {
        gsap.to(lines, { yPercent: 0, duration: 1.3, ease: E, stagger: .14 });
      } });
    });

    // double rules draw outward
    $$(".double-rule").forEach(function (d) {
      gsap.from($$(".ln", d), { scaleX: 0, duration: 1.4, ease: E, scrollTrigger: { trigger: d, start: "top 88%" } });
    });

    // priority bars (thesis)
    $$(".rank .bar i").forEach(function (b) {
      gsap.to(b, { scaleX: 1, duration: 1.4, ease: E, scrollTrigger: { trigger: b, start: "top 90%" } });
    });

    // rings (thesis)
    $$(".rings").forEach(function (r) {
      var tl = gsap.timeline({ scrollTrigger: { trigger: r, start: "top 80%" } });
      tl.from($(".ring--outer", r), { scale: .7, opacity: 0, duration: 1.1, ease: E })
        .from($(".ring--inner", r), { scale: .5, opacity: 0, duration: 1, ease: "back.out(1.6)" }, "-=.7")
        .from($(".pin", r), { y: -40, opacity: 0, duration: .7, ease: "bounce.out" }, "-=.3");
    });

    // flow arrows (thesis)
    $$(".flow").forEach(function (f) {
      gsap.from($$(".flow-arrow i", f), { scaleX: 0, duration: .9, ease: E, stagger: .3, scrollTrigger: { trigger: f, start: "top 82%" } });
    });

    // block-hero overlapping card rises in
    $$(".float-card").forEach(function (c) { gsap.from(c, { y: 70, opacity: 0, duration: 1.2, ease: E, delay: .5 + D }); });

    // founders hero: ridges move at different speeds
    $$(".ridge-hero").forEach(function (h) {
      $$(".ridge", h).forEach(function (rg, i) {
        gsap.to(rg, { y: (i + 1) * 26, ease: "none", scrollTrigger: { trigger: h, start: "top top", end: "bottom top", scrub: true } });
      });
      var sun = $(".sun", h);
      if (sun) gsap.to(sun, { y: 120, ease: "none", scrollTrigger: { trigger: h, start: "top top", end: "bottom top", scrub: true } });
      gsap.from($$(".inner > *", h), { y: 40, opacity: 0, duration: 1.1, ease: E, stagger: .1, delay: .5 + D });
    });

    // contact: CONNECT letters rise, the seed lands last
    $$(".connect-word").forEach(function (w) {
      gsap.from($$(".ch", w), { yPercent: 100, opacity: 0, rotate: 8, duration: 1.1, ease: E, stagger: .05, delay: .45 + D });
      gsap.from($(".seed", w), { y: -120, opacity: 0, rotation: 180, duration: 1.1, ease: "bounce.out", delay: 1.15 + D });
    });

    // magnetic buttons
    if (window.matchMedia("(hover: hover)").matches) {
      $$("[data-magnetic]").forEach(function (b) {
        var qx = gsap.quickTo(b, "x", { duration: .5, ease: "power3" }), qy = gsap.quickTo(b, "y", { duration: .5, ease: "power3" });
        b.addEventListener("mousemove", function (e) { var r = b.getBoundingClientRect(); qx((e.clientX - r.left - r.width / 2) * .28); qy((e.clientY - r.top - r.height / 2) * .38); });
        b.addEventListener("mouseleave", function () { qx(0); qy(0); });
      });
    }

    // thesis table of contents: scrollspy and progress line
    var toc = $(".toc");
    if (toc) {
      var links = $$("a", toc);
      var secs = links.map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); });
      var setActive = function () {
        var line = window.innerHeight * 0.45, cur = 0;
        secs.forEach(function (sec, i) { if (sec && sec.getBoundingClientRect().top < line) cur = i; });
        links.forEach(function (x, i) { x.classList.toggle("is-active", i === cur); });
      };
      ScrollTrigger.create({ trigger: ".doc-content", start: "top 45%", end: "bottom 45%",
        onUpdate: function (st) { toc.style.setProperty("--p", st.progress.toFixed(4)); setActive(); },
        onLeaveBack: setActive, onRefresh: setActive });
      setActive();
    }

    // brand mark breathes when idle (only parts, very subtle)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); layoutThreads(); });
    window.addEventListener("load", function () { ScrollTrigger.refresh(); });
  }

  /* ------------------------------------------------------------ run */
  safe(buildChrome, "chrome");
  safe(function () { renderBindings(document); }, "content");
  safe(stageTables, "stage tables");
  safe(connectWord, "contact word");
  safe(avatars, "avatars");
  safe(chipsDefault, "chips");
  safe(buildDecor, "decor");
  safe(function () { hydrateIcons(document); }, "icons");
  safe(headerBehavior, "header");
  safe(marquee, "marquee");
  safe(accordions, "accordions");
  safe(tabs, "tabs");
  safe(filters, "filters");
  safe(viewToggle, "view toggle");
  safe(quotes, "quotes");
  safe(journey, "journey");
  safe(bios, "bios");
  safe(forms, "forms");
  safe(brandPage, "brand");
  safe(companyTouch, "companies");
  safe(setupThreads, "threads");
  safe(animate, "animations");
  safe(pageWipe, "page wipe");
  safe(anchors, "anchors");
})();
