// Scroll motion shared by every page. Plain JS, no build step, runs on any static host.
(function () {
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var io = null;
  function show(el) {
    el.style.opacity = "1";
    el.style.transform = "none";
  }
  window.TVC_MOTION = {
    reduced: reduced,
    // Fades up any [data-reveal] element the first time it enters view. data-delay (ms) staggers siblings.
    reveal: function (root) {
      root = root || document;
      var els = root.querySelectorAll("[data-reveal]:not([data-rv])");
      if (!els.length) return;
      if (reduced || !("IntersectionObserver" in window)) {
        els.forEach(function (el) { el.setAttribute("data-rv", "1"); });
        return;
      }
      if (!io) {
        io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
          });
        }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
      }
      els.forEach(function (el) {
        el.setAttribute("data-rv", "1");
        var d = parseInt(el.getAttribute("data-delay") || "0", 10);
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity .8s cubic-bezier(.2,.7,.2,1) " + d + "ms, transform .8s cubic-bezier(.2,.7,.2,1) " + d + "ms";
        io.observe(el);
      });
    },
    stagger: function (list, cols, step) {
      return list.map(function (x, i) {
        var o = Object.assign({}, x);
        o.delay = String((i % (cols || 4)) * (step || 90));
        return o;
      });
    }
  };
})();
