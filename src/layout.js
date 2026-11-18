const LOGO =
  "https://images.squarespace-cdn.com/content/v1/67229609a2629e03152ed657/1730319924942-5UQCPHAF4EEUX69YQ8H8/imageedit_1_9453023828.png?format=1500w";

/** Exact folder structure from bigaustin.org overlay / desktop nav */
const menu = [
  {
    label: "The BiG Knight Awards Gala",
    items: [
      { label: "The BiG Knight Awards Gala", href: "/big-knight/" },
      { label: "The BiG Knight Honorees", href: "/big-knight/" },
    ],
  },
  {
    label: "About",
    items: [
      { label: "History", href: "/about/" },
      { label: "Vision - Mission", href: "/vision-mission/" },
      { label: "Dream Team", href: "/dream-team/" },
      { label: "Leadership", href: "/leadership/" },
      { label: "Big Heroes", href: "/dream-team/" },
      { label: "Partners", href: "/partners/" },
      { label: "Partnering with BiGAUSTIN", href: "/partners/" },
      { label: "Videos", href: "/videos/" },
    ],
  },
  {
    label: "Community Development",
    items: [{ label: "Community Development", href: "/community-development/" }],
  },
  {
    label: "Services",
    items: [
      { label: "Lending.Capital.Funding Solutions", href: "/lending/" },
      { label: "Education", href: "/education/" },
      { label: "Business Consulting", href: "/business-consulting/" },
      { label: "Find Your Path", href: "/find-your-path/" },
      { label: "Forms", href: "/schedule/" },
    ],
  },
  {
    label: "Programs",
    items: [
      { label: "Programs", href: "/programs/" },
      { label: "Start Smart", href: "/startsmart/" },
      { label: "Rise 2 Empower", href: "/programs/" },
      { label: "Women's BiZ Inc.", href: "/womens-biz/" },
      { label: "WBI Coffee Talk Series", href: "/calendar/" },
      { label: "Youth Entrepreneurship", href: "/programs/" },
    ],
  },
  { label: "Get Involved", href: "/volunteer/" },
  { label: "Calendar", href: "/calendar/" },
  {
    label: "Resources",
    items: [
      { label: "Small BiZ Blog", href: "/blog/" },
      { label: "Small BiZ Resources", href: "/resources/" },
    ],
  },
  { label: "Donate", href: "/donate/" },
  { label: "The BiG Knight Awards Gala Auction Donations", href: "/big-knight/" },
];

function announceHTML() {
  return `
  <div id="announce" class="announce-bar">
    <a href="/calendar/" class="announce-bar__link">
      <span class="announce-bar__label">Upcoming Events &amp; Workshops:</span>
      <span>December 2nd - Buying a Business Instead of Starting One (Virtual Workshop)</span>
    </a>
    <button id="announceClose" class="announce-bar__close" aria-label="Close Announcement">×</button>
  </div>`;
}

function desktopNavHTML() {
  const items = menu
    .map((item) => {
      if (item.items) {
        return `
        <div class="desk-nav__item desk-nav__folder">
          <button type="button" class="desk-nav__link" data-desk-folder>${item.label}</button>
          <div class="desk-nav__dropdown">
            ${item.items.map((sub) => `<a href="${sub.href}">${sub.label}</a>`).join("")}
          </div>
        </div>`;
      }
      return `<a class="desk-nav__link" href="${item.href}">${item.label}</a>`;
    })
    .join("");

  return `
  <nav class="desk-nav" aria-label="Main">
    ${items}
    <a class="btn btn-primary desk-nav__cta" href="/lending/">APPLY FOR FUNDING</a>
  </nav>`;
}

function headerHTML() {
  return `
  <header id="header" class="site-header">
    <div class="site-header__inner">
      <a href="/" aria-label="BiGAUSTIN home" class="site-header__brand">
        <img src="${LOGO}" alt="BiGAUSTIN" class="site-header__logo" />
      </a>
      ${desktopNavHTML()}
      <button id="menuToggle" class="menu-toggle" aria-label="Open Menu" aria-expanded="false">
        <span></span><span></span>
      </button>
    </div>
  </header>`;
}

function overlayHTML() {
  const folders = menu
    .map((item) => {
      if (item.items) {
        return `
        <div class="menu-folder">
          <button type="button" class="menu-folder__btn" data-folder-open>${item.label}</button>
          <div class="menu-folder__panel hidden">
            <button type="button" class="menu-folder__back" data-folder-back>← Back</button>
            ${item.items.map((sub) => `<a href="${sub.href}">${sub.label}</a>`).join("")}
          </div>
        </div>`;
      }
      return `<a class="menu-link" href="${item.href}">${item.label}</a>`;
    })
    .join("");

  return `
  <nav id="overlayNav" class="overlay-nav" aria-hidden="true">
    <button id="menuClose" class="overlay-nav__close" aria-label="Close Menu">×</button>
    <div id="menuRoot" class="overlay-nav__list">${folders}
      <a class="menu-link" href="/lending/">Apply for Funding</a>
    </div>
  </nav>`;
}

function footerHTML() {
  return `
  <footer class="site-footer" id="site-footer">
    <div class="container-site site-footer__grid">
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/about/">About</a></li>
          <li><a href="/donate/">Donate now</a></li>
          <li><a href="/volunteer/">Volunteer</a></li>
          <li><a href="/programs/">Programs</a></li>
          <li><a href="/calendar/">Calendar</a></li>
          <li><a href="/resources/">Resources</a></li>
        </ul>
      </div>
      <div>
        <h4>About</h4>
        <ul>
          <li><a href="/about/">History</a></li>
          <li><a href="/vision-mission/">Vision - Mission</a></li>
          <li><a href="/dream-team/">Dream Team</a></li>
          <li><a href="/leadership/">Leadership</a></li>
          <li><a href="/partners/">Partnering with BiGAUSTIN</a></li>
          <li><a href="/videos/">Videos</a></li>
        </ul>
      </div>
      <div>
        <h4>Programs</h4>
        <ul>
          <li><a href="/startsmart/">Start Smart</a></li>
          <li><a href="/womens-biz/">Women's BiZ Inc</a></li>
          <li><a href="/calendar/">WBI Coffee Talk Series</a></li>
        </ul>
      </div>
      <div>
        <h4>Our Office</h4>
        <p><a href="https://maps.google.com/?q=8000+Centre+Park+Dr,+Suite+200,+Austin,+TX+78754" target="_blank" rel="noopener">8000 Centre Park Dr., Suite 200<br />Austin, TX 78754<br />United States</a></p>
        <div class="socials">
          <a href="https://www.facebook.com/BiGAUSTINTX/" target="_blank" rel="noopener">Facebook</a>
          <a href="https://www.youtube.com/@BigaustinOrg" target="_blank" rel="noopener">YouTube</a>
          <a href="https://www.instagram.com/bigaustintx/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.tiktok.com/@bigaustintx" target="_blank" rel="noopener">TikTok</a>
        </div>
      </div>
    </div>
    <div class="container-site site-footer__bottom">
      <p class="privacy">Privacy Notice: BiGAUSTIN respects your privacy. Information submitted through this website may be used to respond to inquiries, provide services, process program registrations, evaluate eligibility, meet grant and compliance requirements, and improve our programs. BiGAUSTIN does not sell personal information. Please review our full Privacy Policy for more information.</p>
    </div>
  </footer>
  <div class="copy-bar"><p>© 2026 | All Rights Reserved.</p></div>`;
}

export function mountLayout() {
  const root = document.getElementById("layout-root");
  if (!root) return;
  root.insertAdjacentHTML("afterbegin", overlayHTML());
  root.insertAdjacentHTML("afterbegin", headerHTML());
  root.insertAdjacentHTML("afterbegin", announceHTML());
  // Homepage embeds Ready + footer columns together
  if (!document.getElementById("home-bottom")) {
    root.insertAdjacentHTML("beforeend", footerHTML());
  } else {
    root.insertAdjacentHTML("beforeend", `<div class="copy-bar"><p>© 2026 | All Rights Reserved.</p></div>`);
  }
}
