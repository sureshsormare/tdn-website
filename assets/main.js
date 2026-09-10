/* TransDataNexus — progressive enhancement only. Every page reads fine with JS off. */
document.addEventListener('DOMContentLoaded', function () {

  /* ---------- mobile navigation ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* ---------- tabs (lens switcher, screenshot switcher) ---------- */
  document.querySelectorAll('[data-tabs]').forEach(function (root) {
    var tabs = root.querySelectorAll('[role="tab"]');
    var panels = root.querySelectorAll('[role="tabpanel"]');
    function activate(i) {
      tabs.forEach(function (t, j) {
        var on = i === j;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
      });
      panels.forEach(function (p, j) { p.hidden = i !== j; });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { activate(i); });
      t.addEventListener('keydown', function (e) {
        var n = i;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (i + 1) % tabs.length;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i - 1 + tabs.length) % tabs.length;
        else return;
        e.preventDefault(); activate(n); tabs[n].focus();
      });
    });
    activate(0);
  });

  /* ---------- demo-request form: light validation + honeypot ---------- */
  var form = document.querySelector('form.form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var honey = form.querySelector('input[name="_honey"]');
      if (honey && honey.value) { e.preventDefault(); return; }
      var required = form.querySelectorAll('[required]');
      for (var i = 0; i < required.length; i++) {
        if (!required[i].value.trim()) { required[i].focus(); e.preventDefault(); return; }
      }
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    });
  }

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- typed question (NLQ page) ---------- */
  document.querySelectorAll('[data-type]').forEach(function (el) {
    var full = el.getAttribute('data-type');
    var answer = el.closest('[data-typed-demo]') ? el.closest('[data-typed-demo]').querySelector('[data-answer]') : null;
    if (reduced) { el.textContent = full; if (answer) answer.classList.add('is-in'); return; }
    el.textContent = '';
    var i = 0;
    function tick() {
      el.textContent = full.slice(0, ++i);
      if (i < full.length) setTimeout(tick, 28 + Math.random() * 40);
      else if (answer) setTimeout(function () { answer.classList.add('is-in'); }, 420);
    }
    var started = false;
    var start = function () { if (!started) { started = true; setTimeout(tick, 500); } };
    if ('IntersectionObserver' in window) {
      var tio = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { start(); tio.disconnect(); } }, { threshold: .4 });
      tio.observe(el);
    } else start();
  });

  if (reduced || !('IntersectionObserver' in window)) return;

  /* ---------- scroll reveal ---------- */
  var els = document.querySelectorAll('.card, .frame, .shot, .step, .metric, .stack-card, .panel, .adds, .lens, .svc, .split > *, .stat');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('revealed'); io.unobserve(en.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
  els.forEach(function (el, i) { el.classList.add('will-reveal'); el.style.transitionDelay = ((i % 4) * 60) + 'ms'; io.observe(el); });

  /* ---------- count-up numbers: <strong data-count="13.4" data-suffix="bn"> ---------- */
  var nums = document.querySelectorAll('[data-count]');
  var nio = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target; nio.unobserve(el);
      var target = parseFloat(el.getAttribute('data-count'));
      var decimals = (el.getAttribute('data-count').split('.')[1] || '').length;
      var prefix = el.getAttribute('data-prefix') || '';
      var suffix = el.getAttribute('data-suffix') || '';
      var t0 = null, dur = 1400;
      function frame(ts) {
        if (!t0) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur);
        var eased = 1 - Math.pow(1 - p, 3);
        var v = target * eased;
        el.textContent = prefix + v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
  }, { threshold: 0.6 });
  nums.forEach(function (el) { nio.observe(el); });
});
