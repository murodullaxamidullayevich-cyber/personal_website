/* ============================================================
   SAYT LOGIKASI — data.js'dagi ma'lumotlarni sahifaga chiqaradi,
   tilni va mavzuni almashtiradi, "Ko'proq/Kamroq" ro'yxatlarini
   va feedback formasini boshqaradi.
   ============================================================ */

const LANGS = ["uz", "en", "ru"];
let lang = "uz";
const expanded = new Set();   // ochilgan ro'yxatlar ("Ko'proq ko'rsatish" bosilganlar)

try {
  const saved = localStorage.getItem("lang");
  if (LANGS.includes(saved)) lang = saved;
} catch (e) { /* xotira yopiq bo'lsa, o'zbekcha qoladi */ }

/* Matnni joriy tilda olish: {uz, en, ru} bo'lsa tanlaydi, oddiy matn bo'lsa o'zini qaytaradi */
const tr = (v) => (v && typeof v === "object" && !Array.isArray(v)) ? (v[lang] ?? v.uz) : v;

/* "projects.status.done" kabi kalit bo'yicha interfeys matnini olish */
const t = (key) => key.split(".").reduce((o, k) => (o ? o[k] : undefined), SITE.ui[lang]) ?? key;

/* Kichik yordamchi: element yaratish */
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === false || v == null) continue;
    if (k === "class") node.className = v;
    else if (k === "style") node.style.cssText = v;
    else node.setAttribute(k, v);
  }
  for (const c of children.flat()) {
    if (c == null || c === false) continue;
    node.append(c.nodeType ? c : document.createTextNode(c));
  }
  return node;
}

const $ = (id) => document.getElementById(id);

/* ---------- "Ko'proq / Kamroq" ----------
   items: tayyor elementlar ro'yxati; limit: dastlab nechtasi ko'rinadi.
   Qolganlari yashiriladi va ostida tugma chiqadi.                       */
function moreToggle(key, items, limit, rerender) {
  const hiddenCount = items.length - limit;
  if (hiddenCount <= 0) return null;
  const open = expanded.has(key);
  items.forEach((node, i) => { if (i >= limit) node.hidden = !open; });
  const btn = el("button", {
    type: "button", class: "more-btn", id: "more-" + key,
    "aria-expanded": String(open)
  },
    el("span", { class: "more-icon", "aria-hidden": "true" }, open ? "−" : "+"),
    open ? t("less") : t("more") + " (" + hiddenCount + ")"
  );
  btn.addEventListener("click", () => {
    if (expanded.has(key)) expanded.delete(key); else expanded.add(key);
    rerender();
    const again = $("more-" + key);
    if (again) again.focus({ preventScroll: true });
  });
  return btn;
}

/* ---------- Bo'limlarni chizish ---------- */

function renderStatic() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((n) => { n.textContent = t(n.dataset.i18n); });
  $("hero-name").textContent = SITE.name;
  $("footer-copy").textContent = "© " + new Date().getFullYear() + " " + SITE.name;
  document.querySelectorAll(".lang button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  renderThemeButton();
}

function renderTerminal() {
  const lines = (SITE.terminal[lang] || SITE.terminal.uz).map(([cmd, out]) => [
    el("span", { class: "cmd" }, cmd), "\n",
    el("span", { class: "out" }, out), "\n"
  ]);
  $("term-body").replaceChildren(...lines.flat(), el("span", { class: "cmd" }, "$ "), el("span", { class: "cursor" }, " "));
}

function renderFacts() {
  $("facts").replaceChildren(...SITE.facts.map((f) =>
    el("div", { class: "fact" }, el("dt", {}, tr(f.k)), el("dd", {}, tr(f.v)))
  ));
}

function renderSkills() {
  $("skills-list").replaceChildren(...SITE.skills.map((g) =>
    el("div", { class: "skill-group" },
      el("h3", {}, tr(g.group)),
      el("ul", { class: "tags" }, g.items.map((i) => el("li", {}, i)))
    )
  ));
}

function renderProjects() {
  $("projects-list").replaceChildren(...SITE.projects.map((p, idx) => {
    const links = [];
    if (p.github) links.push(el("a", { href: p.github, target: "_blank", rel: "noopener" }, t("projects.code") + " ↗"));
    if (p.demo) links.push(el("a", { href: p.demo, target: "_blank", rel: "noopener" }, t("projects.demo") + " ↗"));

    let highlights = null;
    if (p.highlights) {
      const items = p.highlights.map((h) => el("li", {}, tr(h)));
      highlights = el("div", { class: "highlights" },
        el("h4", {}, t("projects.features")),
        el("ul", {}, items),
        moreToggle("hl-" + idx, items, SITE.limits.highlights, renderProjects)
      );
    }

    const body = [
      el("div", { class: "project-head" },
        el("h3", {}, tr(p.title)),
        el("span", { class: "status s-" + p.status }, t("projects.status." + p.status))
      ),
      p.context ? el("p", { class: "project-context" }, tr(p.context)) : null,
      el("p", { class: "project-desc" }, tr(p.desc)),
      highlights,
      el("ul", { class: "tags small" }, p.tech.map((x) => el("li", {}, x))),
      links.length ? el("div", { class: "project-links" }, links) : null
    ];
    if (!p.featured || !p.images) return el("article", { class: "project" }, body);
    return el("article", { class: "project featured" + (p.portrait ? " portrait" : "") },
      el("div", { class: "project-text" }, body),
      renderGallery(p, idx)
    );
  }));
}

/* Loyiha skrinshotlari: katta rasm + kichik rasmlar */
function renderGallery(p, idx) {
  const main = el("img", { src: p.images[0].src, alt: tr(p.images[0].alt), loading: "lazy" });
  const link = el("a", { class: "shot-main", href: p.images[0].src, target: "_blank", rel: "noopener" }, main);
  const caption = el("figcaption", {}, tr(p.images[0].alt));
  const thumbs = p.images.map((img, i) => {
    const b = el("button", {
      type: "button", class: "shot-thumb", id: "shot-" + idx + "-" + i,
      "aria-pressed": String(i === 0), "aria-label": tr(img.alt)
    }, el("img", { src: img.src, alt: "", loading: "lazy" }));
    b.addEventListener("click", () => {
      main.src = img.src; main.alt = tr(img.alt);
      link.href = img.src; caption.textContent = tr(img.alt);
      b.parentNode.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    });
    return b;
  });
  return el("figure", { class: "gallery" }, link, caption,
    el("div", { class: "shot-thumbs", style: "--n:" + p.images.length }, thumbs));
}

function renderEducation() {
  const items = SITE.education.map((e) =>
    el("li", { class: "tl" + (e.current ? " is-current" : "") },
      el("div", { class: "tl-meta" },
        el("time", {}, e.years + (e.current ? t("education.current") : "")),
        e.level ? el("span", {}, tr(e.level)) : null
      ),
      el("h3", {}, tr(e.place)),
      e.text ? el("p", {}, tr(e.text)) : null
    )
  );
  $("education-list").replaceChildren(...[
    el("ol", { class: "timeline" }, items),
    moreToggle("edu", items, SITE.limits.education, renderEducation)
  ].filter(Boolean));
}

function renderCertificates() {
  const items = SITE.certificates.map((c) =>
    el("article", { class: "cert" },
      el("div", { class: "cert-top" },
        el("span", { class: "cert-issuer" }, tr(c.issuer)),
        el("time", {}, c.date)
      ),
      el("h3", {}, tr(c.title)),
      c.text ? el("p", {}, tr(c.text)) : null,
      c.link ? el("a", { class: "cert-link", href: c.link, target: "_blank", rel: "noopener" }, t("certificates.view") + " ↗") : null
    )
  );
  $("certificates-list").replaceChildren(...[
    el("div", { class: "certs" }, items),
    moreToggle("certs", items, SITE.limits.certificates, renderCertificates)
  ].filter(Boolean));
}

function renderAchievements() {
  const list = SITE.achievements || [];
  $("achievements").hidden = list.length === 0;
  if (!list.length) return;
  const items = list.map((a) =>
    el("li", { class: "tl" },
      el("div", { class: "tl-meta" }, el("time", {}, a.date)),
      el("h3", {}, tr(a.title)),
      a.text ? el("p", {}, tr(a.text)) : null,
      a.link ? el("a", { href: a.link, target: "_blank", rel: "noopener" }, t("certificates.view") + " ↗") : null
    )
  );
  $("achievements-list").replaceChildren(...[
    el("ol", { class: "timeline" }, items),
    moreToggle("ach", items, SITE.limits.certificates, renderAchievements)
  ].filter(Boolean));
}

function renderContacts() {
  const rows = [
    ["Telegram", SITE.links.telegram],
    ["LinkedIn", SITE.links.linkedin],
    ["GitHub", SITE.links.github],
    ["Email", SITE.links.email]
  ];
  $("contacts").replaceChildren(...rows.map(([name, value]) => {
    let body;
    if (!value) {
      body = el("span", { class: "missing" }, t("contact.missing"));
    } else if (name === "Email") {
      const btn = el("button", { type: "button", class: "copy", id: "copy-email" }, t("contact.copy"));
      btn.addEventListener("click", async () => {
        try { await navigator.clipboard.writeText(value); btn.textContent = t("contact.copied"); }
        catch (e) { window.getSelection().selectAllChildren(btn.previousSibling); }
        setTimeout(() => { btn.textContent = t("contact.copy"); }, 1600);
      });
      body = el("span", { class: "email-row" }, el("span", { class: "value" }, value), btn);
    } else {
      body = el("a", { class: "value", href: value, target: "_blank", rel: "noopener" },
        value.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") + " ↗");
    }
    return el("li", {}, el("span", { class: "c-name" }, name), body);
  }));
}

/* ---------- Kunduzgi / tungi rejim ---------- */
function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function renderThemeButton() {
  const next = currentTheme() === "dark" ? "light" : "dark";
  const btn = $("theme-btn");
  btn.textContent = next === "light" ? "☀" : "☾";
  btn.setAttribute("aria-label", t("theme." + next));
  btn.title = t("theme." + next);
}

$("theme-btn").addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
  renderThemeButton();
});

/* ---------- Feedback formasi ---------- */
let fbRating = 0;

function renderStars() {
  const box = $("fb-stars");
  box.replaceChildren(...[1, 2, 3, 4, 5].map((n) => {
    const b = el("button", {
      type: "button", class: "star", id: "fb-star-" + n, role: "radio",
      "aria-checked": String(fbRating === n), "aria-label": n + " " + t("feedback.star"),
      "data-on": String(n <= fbRating)
    }, "★");
    b.addEventListener("click", () => { fbRating = fbRating === n ? 0 : n; renderStars(); });
    return b;
  }));
}

function setStatus(key, kind) {
  const s = $("fb-status");
  s.textContent = key ? t(key) : "";
  s.dataset.kind = kind || "";
}

function formData() {
  return {
    name: $("fb-name").value.trim(),
    contact: $("fb-contact").value.trim(),
    rating: fbRating,
    message: $("fb-message").value.trim(),
    lang
  };
}

/* 1) Telegram bot (Vercel funksiyasi) → 2) ishlamasa, FormSubmit orqali email */
async function sendFeedback(d) {
  if (SITE.feedbackApi) try {
    const res = await fetch(SITE.feedbackApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(d)
    });
    const j = await res.json().catch(() => ({}));
    if (res.ok && j.ok) return true;
  } catch (e) { /* email'ga o'tamiz */ }

  const res = await fetch("https://formsubmit.co/ajax/" + SITE.feedbackEmail, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({
      _subject: "Saytdan yangi fikr" + (d.rating ? " (" + d.rating + "★)" : ""),
      _template: "table",
      Ism: d.name || "—",
      Aloqa: d.contact || "—",
      Baho: d.rating ? d.rating + " / 5" : "—",
      Xabar: d.message,
      Til: d.lang
    })
  });
  return res.ok;
}

function resetForm() {
  $("fb-form").reset();
  fbRating = 0;
  renderStars();
}

$("fb-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const d = formData();
  if (!d.message) { setStatus("feedback.empty", "error"); $("fb-message").focus(); return; }
  if ($("fb-honey").value) return; // bot

  const btn = $("fb-submit");
  btn.disabled = true;
  btn.textContent = t("feedback.sending");
  setStatus("", "");
  try {
    if (!(await sendFeedback(d))) throw new Error("send failed");
    resetForm();
    setStatus("feedback.ok", "ok");
  } catch (err) {
    setStatus("feedback.fail", "error");
  } finally {
    btn.disabled = false;
    btn.textContent = t("feedback.send");
  }
});

/* Telegram'ni xabar tayyor holda ochadi; xabar tashrif buyuruvchining o'z akkauntidan ketadi */
$("fb-telegram").addEventListener("click", () => {
  const d = formData();
  const parts = [t("feedback.tgIntro")];
  if (d.rating) parts.push("★".repeat(d.rating) + " (" + d.rating + "/5)");
  if (d.message) parts.push(d.message);
  if (d.name) parts.push("— " + d.name);
  const url = "https://t.me/" + SITE.telegramUser + "?text=" + encodeURIComponent(parts.join("\n\n"));
  window.open(url, "_blank", "noopener");
});

/* ---------- Hammasini chizish ---------- */
function renderAll() {
  renderStatic();
  renderStars();
  renderTerminal();
  renderFacts();
  renderSkills();
  renderProjects();
  renderEducation();
  renderCertificates();
  renderAchievements();
  renderContacts();
}

/* ---------- Tilni almashtirish ---------- */
document.querySelectorAll(".lang button").forEach((b) => {
  b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    renderAll();
  });
});

renderAll();
