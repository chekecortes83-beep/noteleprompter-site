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
 {
  "section": "witness",
  "name": "America (The Book)",
  "img": "assets/covers/america.jpg",
  "by": "Jon Stewart & The Daily Show",
  "why": "Jon Stewart told the Pentagon's No. 2 <b>\"that's corruption\"</b>",
  "url": "https://www.amazon.com/dp/0446532681?tag=noteleprompter-20"
 },
 {
  "section": "witness",
  "name": "One Vote Away",
  "img": "assets/covers/onevoteaway.jpg",
  "by": "Ted Cruz",
  "why": "Cruz asked a witness <b>who founded the KKK</b>",
  "url": "https://www.amazon.com/dp/1684511348?tag=noteleprompter-20"
 },
 {
  "section": "witness",
  "name": "Every Day Is a Gift",
  "img": "assets/covers/everyday.jpg",
  "by": "Tammy Duckworth",
  "why": "Duckworth <b>ripped into her own party's leadership</b>",
  "url": "https://www.amazon.com/dp/1538718502?tag=noteleprompter-20"
 },
 {
  "section": "witness",
  "name": "Persist",
  "img": "assets/covers/persist.jpg",
  "by": "Elizabeth Warren",
  "why": "Warren asked a general if <b>questioning orders is sedition</b>",
  "url": "https://www.amazon.com/dp/1250799244?tag=noteleprompter-20"
 },
 {
  "section": "witness",
  "name": "Manhood",
  "img": "assets/covers/manhood.jpg",
  "by": "Josh Hawley",
  "why": "Hawley <b>read Jack Smith's own notes</b> back to him",
  "url": "https://www.amazon.com/dp/168451357X?tag=noteleprompter-20"
 },
 {
  "section": "witness",
  "name": "Kiss and Make-Up",
  "img": "assets/covers/kiss.jpg",
  "by": "Gene Simmons",
  "why": "Gene Simmons told Congress opposing the bill is <b>\"un-American\"</b>",
  "url": "https://www.amazon.com/dp/0099436140?tag=noteleprompter-20"
 },
 {
  "section": "witness",
  "name": "107 Days",
  "img": "assets/covers/107days.jpg",
  "by": "Kamala Harris",
  "why": "Harris asked Kavanaugh about <b>Trump's lawyer's firm</b>",
  "url": "https://www.amazon.com/dp/1668211653?tag=noteleprompter-20"
 },
 {
  "section": "witness",
  "name": "For Love of Country",
  "img": "assets/covers/forlove.jpg",
  "by": "Tulsi Gabbard",
  "why": "Gabbard got <b>cut off mid-answer</b> about the raid",
  "url": "https://www.amazon.com/dp/1684514851?tag=noteleprompter-20"
 },
 {
  "section": "witness",
  "name": "There Is Nothing for You Here",
  "img": "assets/covers/nothingforyou.jpg",
  "by": "Fiona Hill",
  "why": "Fiona Hill on why <b>women's anger gets dismissed</b>",
  "url": "https://www.amazon.com/dp/0063269082?tag=noteleprompter-20"
 },
 {
  "section": "witness",
  "name": "Government Gangsters",
  "img": "assets/covers/gangsters.jpg",
  "by": "Kash Patel",
  "why": "Patel <b>never answered</b> Welch's FBI question",
  "url": "https://www.amazon.com/dp/B0DBYN1T9J?tag=noteleprompter-20"
 },
 {
  "section": "witness",
  "name": "Compromised",
  "img": "assets/covers/compromised.jpg",
  "by": "Peter Strzok",
  "why": "Gowdy made Strzok <b>own his texts</b>",
  "url": "https://www.amazon.com/dp/0358237068?tag=noteleprompter-20"
 },
 {
  "section": "witness",
  "name": "Doesn't Hurt to Ask",
  "by": "Trey Gowdy",
  "why": "Gowdy made Strzok <b>own his texts</b> — his book on asking the right questions",
  "url": "https://www.amazon.com/dp/0593138910?tag=noteleprompter-20"
 },
 {
  "section": "witness",
  "name": "Midnight in Washington",
  "img": "assets/covers/midnight.jpg",
  "by": "Adam Schiff",
  "why": "Schiff read <b>Trump's live tweet</b> in the hearing",
  "url": "https://www.amazon.com/dp/059323152X?tag=noteleprompter-20"
 },
 {
  "section": "witness",
  "name": "No Going Back",
  "img": "assets/covers/nogoingback.jpg",
  "by": "Kristi Noem",
  "why": "Moskowitz waved a <b>leaked report</b> at Noem",
  "url": "https://www.amazon.com/dp/1546008160?tag=noteleprompter-20"
 },
 {
  "section": "witness",
  "name": "Decades of Decadence",
  "img": "assets/covers/decades.jpg",
  "by": "Marco Rubio",
  "why": "Rubio read <b>Kushner's own quote</b> back to him",
  "url": "https://www.amazon.com/dp/0063296977?tag=noteleprompter-20"
 },
 {
  "section": "record",
  "name": "Pocket U.S. Constitution",
  "img": "assets/covers/pocketconst.jpg",
  "by": "Pocket edition",
  "why": "The document half our clips end up arguing about",
  "url": "https://www.amazon.com/dp/1631581481?tag=noteleprompter-20"
 },
 {
  "section": "record",
  "name": "The Federalist Papers",
  "img": "assets/covers/federalist.jpg",
  "by": "Hamilton, Madison & Jay",
  "why": "What the founders said Congress was for",
  "url": "https://www.amazon.com/dp/0486496368?tag=noteleprompter-20"
 },
 {
  "section": "history",
  "name": "All the President's Men",
  "img": "assets/covers/presidentsmen.jpg",
  "by": "Bob Woodward & Carl Bernstein",
  "why": "The Watergate story from the reporters who broke it",
  "url": "https://www.amazon.com/dp/1476770514?tag=noteleprompter-20"
 },
 {
  "section": "history",
  "name": "The Final Days",
  "img": "assets/covers/finaldays.jpg",
  "by": "Bob Woodward & Carl Bernstein",
  "why": "Nixon's last months, from the same two reporters",
  "url": "https://www.amazon.com/dp/0743274067?tag=noteleprompter-20"
 },
 {
  "section": "reading",
  "name": "Large-Print U.S. Constitution",
  "by": "Large print",
  "why": "Same text, easier on the eyes",
  "url": "https://www.amazon.com/dp/B0CJB379RS?tag=noteleprompter-20"
 },
 {
  "section": "reading",
  "name": "Lighted Magnifying Glass",
  "by": "Reading aid",
  "why": "For fine print — and C-SPAN chyrons",
  "url": "https://www.amazon.com/dp/B08XXF1VCS?tag=noteleprompter-20"
 }
];

function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function card(p) {
  const art = p.img
    ? `<img src="${esc(p.img)}" alt="" loading="lazy">`
    : `<div class="cover"><span>${esc(p.name)}</span><small>${esc(p.by || "")}</small></div>`;
  // `why` may carry <b> for the clip reference; it is authored here, not user input.
  return `<a class="card" href="${esc(p.url)}" target="_blank" rel="nofollow sponsored noopener">
    ${art}
    <div class="info">
      <div class="name">${esc(p.name)}</div>
      ${p.by ? `<div class="by">${esc(p.by)}</div>` : ""}
      <div class="why">${p.section === "witness" ? "🎬 " : ""}${p.why || ""}</div>
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
