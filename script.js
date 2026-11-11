/* ============================================================
   SAYT LOGIKASI — data.js'dagi ma'lumotlarni sahifaga chiqaradi,
   tilni almashtiradi va filtrlarni boshqaradi.
   ============================================================ */

let lang = "uz";
let journeyFilter = "all";

try {
  const saved = localStorage.getItem("lang");
  if (saved === "uz" || saved === "en") lang = saved;
} catch (e) { /* xotira yopiq bo'lsa, o'zbekcha qoladi */ }

/* Matnni joriy tilda olish: {uz, en} bo'lsa tanlaydi, oddiy matn bo'lsa o'zini qaytaradi */
const tr = (v) => (v && typeof v === "object" && !Array.isArray(v)) ? (v[lang] ?? v.uz) : v;

/* "projects.status.done" kabi kalit bo'yicha interfeys matnini olish */
const t = (key) => key.split(".").reduce((o, k) => (o ? o[k] : undefined), SITE.ui[lang]) ?? key;

/* Kichik yordamchi: element yaratish */
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === false || v == null) continue;
    if (k === "class") node.className = v;
    else node.setAttribute(k, v);
  }
  for (const c of children.flat()) {
    if (c == null || c === false) continue;
    node.append(c.nodeType ? c : document.createTextNode(c));
  }
  return node;
}

const $ = (id) => document.getElementById(id);

/* ---------- Bo'limlarni chizish ---------- */

function renderStatic() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((n) => { n.textContent = t(n.dataset.i18n); });
  $("hero-name").textContent = SITE.name;
  $("footer-copy").textContent = "© " + new Date().getFullYear() + " " + SITE.name;
  document.querySelectorAll(".lang button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
}

function renderTerminal() {
  const lines = SITE.terminal[lang].map(([cmd, out]) => [
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
  $("projects-list").replaceChildren(...SITE.projects.map((p) => {
    const links = [];
    if (p.github) links.push(el("a", { href: p.github, target: "_blank", rel: "noopener" }, t("projects.code") + " ↗"));
    if (p.demo) links.push(el("a", { href: p.demo, target: "_blank", rel: "noopener" }, t("projects.demo") + " ↗"));
    const body = [
      el("div", { class: "project-head" },
        el("h3", {}, tr(p.title)),
        el("span", { class: "status s-" + p.status }, t("projects.status." + p.status))
      ),
      p.context ? el("p", { class: "project-context" }, tr(p.context)) : null,
      el("p", { class: "project-desc" }, tr(p.desc)),
      p.highlights ? el("div", { class: "highlights" },
        el("h4", {}, t("projects.features")),
        el("ul", {}, p.highlights.map((h) => el("li", {}, tr(h))))
      ) : null,
      el("ul", { class: "tags small" }, p.tech.map((x) => el("li", {}, x))),
      links.length ? el("div", { class: "project-links" }, links) : null
    ];
    if (!p.featured || !p.images) return el("article", { class: "project" }, body);
    return el("article", { class: "project featured" },
      el("div", { class: "project-text" }, body),
      renderGallery(p)
    );
  }));
}

/* Loyiha skrinshotlari: katta rasm + kichik rasmlar */
function renderGallery(p) {
  const main = el("img", { src: p.images[0].src, alt: tr(p.images[0].alt), loading: "lazy" });
  const link = el("a", { class: "shot-main", href: p.images[0].src, target: "_blank", rel: "noopener" }, main);
  const caption = el("figcaption", {}, tr(p.images[0].alt));
  const thumbs = p.images.map((img, i) => {
    const b = el("button", {
      type: "button", class: "shot-thumb", id: "shot-" + i,
      "aria-pressed": String(i === 0), "aria-label": tr(img.alt)
    }, el("img", { src: img.src, alt: "", loading: "lazy" }));
    b.addEventListener("click", () => {
      main.src = img.src; main.alt = tr(img.alt);
      link.href = img.src; caption.textContent = tr(img.alt);
      b.parentNode.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    });
    return b;
  });
  return el("figure", { class: "gallery" }, link, caption, el("div", { class: "shot-thumbs" }, thumbs));
}

function renderJourney() {
  const types = ["all", "education", "certificate", "achievement", "project"];
  $("filters").setAttribute("aria-label", t("journey.title"));
  $("filters").replaceChildren(...types.map((ty) => {
    const b = el("button", {
      type: "button", id: "filter-" + ty, class: "chip",
      "aria-pressed": String(journeyFilter === ty)
    }, ty === "all" ? t("journey.all") : t("journey.types." + ty));
    b.addEventListener("click", () => { journeyFilter = ty; renderJourney(); });
    return b;
  }));

  const items = SITE.journey.filter((j) => journeyFilter === "all" || j.type === journeyFilter);
  $("timeline").replaceChildren(...items.map((j) =>
    el("li", { class: "tl t-" + j.type + (j.example ? " is-example" : "") },
      el("div", { class: "tl-meta" },
        el("time", {}, j.date),
        el("span", { class: "tl-type" }, t("journey.types." + j.type)),
        j.example ? el("span", { class: "tl-example" }, t("journey.example")) : null
      ),
      el("h3", {}, tr(j.title)),
      el("p", {}, tr(j.text)),
      j.link ? el("a", { href: j.link, target: "_blank", rel: "noopener" }, t("journey.view") + " ↗") : null
    )
  ));
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
        value.replace(/^https?:\/\/(www\.)?/, "") + " ↗");
    }
    return el("li", {}, el("span", { class: "c-name" }, name), body);
  }));
}

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

$("fb-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = $("fb-message").value.trim();
  if (!message) { setStatus("feedback.empty", "error"); $("fb-message").focus(); return; }
  if ($("fb-honey").value) return; // bot

  const btn = $("fb-submit");
  btn.disabled = true;
  btn.textContent = t("feedback.sending");
  setStatus("", "");
  try {
    const res = await fetch("https://formsubmit.co/ajax/" + SITE.feedbackEmail, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        _subject: "Saytdan yangi fikr" + (fbRating ? " (" + fbRating + "★)" : ""),
        _template: "table",
        Ism: $("fb-name").value.trim() || "—",
        Baho: fbRating ? fbRating + " / 5" : "—",
        Xabar: message,
        Til: lang
      })
    });
    if (!res.ok) throw new Error(res.status);
    $("fb-form").reset();
    fbRating = 0;
    renderStars();
    setStatus("feedback.ok", "ok");
  } catch (err) {
    setStatus("feedback.fail", "error");
  } finally {
    btn.disabled = false;
    btn.textContent = t("feedback.send");
  }
});

function renderAll() {
  renderStatic();
  renderStars();
  renderTerminal();
  renderFacts();
  renderSkills();
  renderProjects();
  renderJourney();
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
