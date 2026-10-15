// No Teleprompter — reading shelf.
//
// THE ONLY FILE TO EDIT WHEN ADDING PRODUCTS. One entry per product:
//   { section, name, why, url, img }
//   section : one of the SECTIONS ids below
//   name    : product title as shown
//   why     : one line tying it to the page — who/what clip it connects to
//   url     : Amazon link WITH the Associates tag (SiteStripe "Text" link)
//   img     : SiteStripe image URL (Amazon's rules: use their image links,
//             never a downloaded copy of a product photo)
const SECTIONS = [
  { id: "witness",  icon: "🎙️", tone: "blue",
    title: "From the witness table",
    sub: "Books by and about the people in our clips" },
  { id: "record",   icon: "📜", tone: "red",
    title: "Know the record",
    sub: "The Constitution, the founders, how Congress works" },
  { id: "history",  icon: "🏛️", tone: "blue",
    title: "Hearings that made history",
    sub: "Watergate, Iran-Contra, McCarthy — the stories behind the tape" },
  { id: "reading",  icon: "🔎", tone: "red",
    title: "Read along",
    sub: "Large-print editions and reading aids" },
];

const PRODUCTS = [
  // { section: "witness", name: "...", why: "Seen in our <b>...</b> clip", url: "https://www.amazon.com/dp/...?tag=...", img: "https://m.media-amazon.com/images/..." },
];

function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function card(p) {
  const art = p.img
    ? `<img src="${esc(p.img)}" alt="" loading="lazy">`
    : `<div class="cover">${esc(p.name)}</div>`;
  // `why` may carry <b> for the clip reference; it is authored here, not user input.
  return `<a class="card" href="${esc(p.url)}" target="_blank" rel="nofollow sponsored noopener">
    ${art}
    <div class="info">
      <div class="name">${esc(p.name)}</div>
      <div class="why">${p.why || ""}</div>
      <span class="btn">View on Amazon</span>
    </div>
  </a>`;
}

function render(products) {
  const root = document.getElementById("shelf");
  root.innerHTML = SECTIONS.map((s, i) => {
    const items = products.filter(p => p.section === s.id);
    const body = items.length
      ? items.map(card).join("")
      : `<div class="empty">First picks coming soon.</div>`;
    return `<details data-tone="${s.tone}"${i === 0 ? " open" : ""}>
      <summary>
        <span class="s-icon">${s.icon}</span>
        <span class="s-text">
          <span class="s-title">${esc(s.title)}</span><br>
          <span class="s-sub">${esc(s.sub)}</span>
        </span>
        <span class="chev">›</span>
      </summary>
      <div class="items">${body}</div>
    </details>`;
  }).join("");
}

render(window.PREVIEW_PRODUCTS || PRODUCTS);
