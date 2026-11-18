import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function page({ title, description, body, scriptDepth = 1 }) {
  const cssPath = `${"../".repeat(scriptDepth)}src/main.js`;
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title} | BiGAUSTIN</title>
    <meta name="description" content="${description}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
    <link rel="icon" href="https://images.squarespace-cdn.com/content/v1/67229609a2629e03152ed657/9ad8ed3a-13a2-424e-80a2-c92537e54c4f/favicon.ico?format=100w" />
  </head>
  <body>
    <div id="layout-root">
      <main>
${body}
      </main>
    </div>
    <script type="module" src="${cssPath}"></script>
  </body>
</html>
`;
}

const desc =
  "We foster small Business opportunities, facilitate Investment, and promote economic and community Growth through entrepreneur resources, microloans, workforce development education, and affordable housing support.";

const hero = (h1, p = "") => `
        <section class="page-hero">
          <h1>${h1}</h1>
          ${p ? `<p>${p}</p>` : ""}
        </section>`;

const ctaBand = `
        <section class="bg-black py-14 text-white">
          <div class="container-site flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 class="mb-1 text-3xl text-white md:text-4xl">Ready?</h2>
              <p class="text-white/90">Let’s take the next step together.</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <a href="/schedule/" class="btn btn-primary">Schedule an Appointment</a>
              <a href="/education/" class="btn btn-primary">Explore Classes</a>
              <a href="/lending/" class="btn btn-primary">Apply for Funding</a>
            </div>
          </div>
        </section>`;

const pages = {
  "about/index.html": page({
    title: "Our History",
    description: desc,
    body: `
        ${hero("Our History", "BiGAUSTIN: History of Empowering Entrepreneurs")}
        <section class="py-16 md:py-20">
          <div class="container-site prose-site mx-auto">
            <h2 class="reveal text-2xl text-brand">It’s simple. We love what we do.</h2>
            <p class="reveal">BiGAUSTIN, a non-profit organization, was founded in 1992 as a City of Austin-funded initiative aimed at assisting individuals, particularly low-to-moderate income minorities, in starting their own businesses. Over the years, BiGAUSTIN has evolved into a leading force in entrepreneurship and workforce development in Central Texas.</p>
            <h3 class="reveal text-xl">Timeline of BiGAUSTIN's history</h3>
            <ul class="reveal list-disc space-y-2 pl-5">
              <li><strong>1992:</strong> Founded as a City of Austin Neighborhood Housing-funded organization.</li>
              <li><strong>1995:</strong> Obtained 501(c)(3) non-profit status and began independent operations.</li>
              <li><strong>1996:</strong> Launched the Start Smart program, providing business training and support to aspiring entrepreneurs.</li>
              <li><strong>2000:</strong> Expanded services to include small business lending and consulting.</li>
              <li><strong>2003:</strong> Became a Certified Community Development Entity (CDE).</li>
              <li><strong>2006:</strong> Became a Certified Community Development Financial Institution (CDFI).</li>
              <li><strong>2011:</strong> Expanded services to include youth entrepreneurship programs and job skills training.</li>
              <li><strong>2015:</strong> Launched the Rise and Thrive program.</li>
              <li><strong>2020:</strong> Opened the BiGAUSTIN EnVision Center.</li>
            </ul>
            <h3 class="reveal text-xl">Today, BiGAUSTIN continues to offer:</h3>
            <ul class="reveal list-disc space-y-2 pl-5">
              <li>Business training and consulting</li>
              <li>Small business lending</li>
              <li>Mentorship and networking opportunities</li>
              <li>Community development initiatives</li>
            </ul>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "vision-mission/index.html": page({
    title: "Vision - Mission",
    description: desc,
    body: `
        ${hero("Our Commitment.", "Creating opportunity. Building economic mobility. Strengthening communities.")}
        <section class="py-16 md:py-20">
          <div class="container-site max-w-4xl space-y-10">
            <p class="reveal text-lg text-muted">For more than 30 years, BiGAUSTIN has worked alongside entrepreneurs, families, and communities to expand access to the resources people need to build businesses, strengthen their financial futures, and create lasting economic opportunity.</p>
            <div class="reveal grid gap-8 md:grid-cols-2">
              <article class="rounded-2xl bg-fog p-6">
                <p class="mb-2 text-sm font-semibold tracking-wider text-brand uppercase">Our Vision Expanded</p>
                <h2 class="mb-3 text-2xl text-brand">The Future We Are Building</h2>
                <p class="text-muted">BiGAUSTIN envisions vibrant, resilient Texas communities where every individual can thrive economically and achieve their aspirations. By expanding fair access to capital, small-business resources, workforce tools, livable-wage opportunities, and affordable-housing support, BiGAUSTIN works to reduce economic disparities, advance social equity, and build shared prosperity.</p>
              </article>
              <article class="rounded-2xl bg-fog p-6">
                <p class="mb-2 text-sm font-semibold tracking-wider text-brand uppercase">Our Mission Expanded</p>
                <h2 class="mb-3 text-2xl text-brand">What We Do. Why It Matters.</h2>
                <p class="text-muted">BiGAUSTIN fosters inclusive economic growth and improves quality of life for entrepreneurs, job seekers, and underserved Texans through financial empowerment, small-business education, individualized consulting, responsible capital, workforce development, and affordable-housing support.</p>
              </article>
            </div>
            <h2 class="reveal section-title">How We Bring Our Mission to Life</h2>
            <div class="grid gap-6 md:grid-cols-2">
              ${[
                ["Capital & Financial Opportunity", "We expand access to responsible capital and financial resources for entrepreneurs who may face barriers to traditional financing."],
                ["Business Education & Consulting", "We provide practical business education, entrepreneurial training, and individualized consulting."],
                ["Workforce & Economic Mobility", "We connect individuals with education, skills, and resources that strengthen career pathways and long-term financial stability."],
                ["Housing & Community Development", "We support initiatives that strengthen neighborhoods, expand access to quality affordable housing, and help families build lasting economic security."],
              ]
                .map(
                  ([t, p]) => `<article class="reveal card p-6"><h3 class="mb-2 text-xl text-brand">${t}</h3><p class="text-muted">${p}</p></article>`
                )
                .join("")}
            </div>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "dream-team/index.html": page({
    title: "Dream Team",
    description: desc,
    body: `
        ${hero("BiGAUSTIN’s Dream Team", "Empowering small business through education and investment, igniting community growth.")}
        <section class="py-16 md:py-20">
          <div class="container-site">
            <p class="reveal mx-auto mb-8 max-w-3xl text-center text-muted">Working at BiGAUSTIN is more than just a job—it’s a privilege and a calling. Our team is united by a shared mission to inspire, empower, and uplift the communities we serve.</p>
            <blockquote class="reveal mx-auto mb-12 max-w-2xl text-center font-display text-xl text-ink">“Individual commitment to a group effort—that is what makes a team work, a company work, a society work, a civilization work.” <cite class="mt-3 block text-base not-italic text-muted">— Vince Lombardi</cite></blockquote>
            <h2 class="reveal mb-8 text-center text-2xl text-brand">Meet the Team</h2>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              ${[
                ["Stacy Rhone, MSCE", "Chief Executive Officer"],
                ["Stephanie Douglass", "Chief Operating Officer"],
                ["Mary Veazie, MBA", "Chief Financial Officer"],
                ["Trellanie Bostic", "Chief of Staff"],
                ["Geovanna Ricaldi", "Business Development"],
                ["Melissa Hepner", "Compliance Officer"],
                ["Raven Rhone", "Special Programs Coordinator"],
                ["Sheridan Bostic", "Strategic Assistance"],
                ["Andronn Hamlett", "Operation Strategist"],
                ["Terrell Hill", "Director of Lending"],
              ]
                .map(
                  ([n, r]) => `<article class="reveal card p-6 text-center"><div class="mx-auto mb-4 grid h-24 w-24 place-items-center rounded-full bg-fog text-2xl font-semibold text-brand">${n.split(" ").map((x)=>x[0]).slice(0,2).join("")}</div><h3 class="text-lg">${n}</h3><p class="text-sm text-muted">${r}</p></article>`
                )
                .join("")}
            </div>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "leadership/index.html": page({
    title: "Leadership",
    description: desc,
    body: `
        ${hero("Leadership Team", "Our leadership team reflects the community we serve and brings extensive expertise in business and finance.")}
        <section class="py-16 md:py-20">
          <div class="container-site">
            <p class="reveal mx-auto mb-10 max-w-3xl text-center text-muted">It includes small business owners, corporate representatives, attorneys, bankers, and community members, all dedicated to supporting entrepreneurship and economic growth.</p>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              ${[
                "Donna Myers — Chair Elect",
                "Linda Young — Secretary",
                "Stacy Rhone",
                "Mark Hodges",
                "Beverly Watts Davis",
                "Pat Wilson",
                "Melvin Wrenn — Emeritus",
              ]
                .map(
                  (n) => `<article class="reveal card p-6 text-center"><h3 class="text-lg text-brand">${n}</h3></article>`
                )
                .join("")}
            </div>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "partners/index.html": page({
    title: "Partners",
    description: desc,
    body: `
        ${hero("Partners", "Working with community-centered organizations, entrepreneurs, small businesses, networks, organizers, funders, and financing partners.")}
        <section class="py-16 md:py-20">
          <div class="container-site">
            <h2 class="reveal mb-8 text-center text-2xl text-brand">BiGAUSTIN Partners</h2>
            <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
              ${[
                ["CDFI Fund", "1730319920624-O7TPTHTQBBVNE3QU7QWX/bigaustin.pdf-image-042.jpg"],
                ["Dell", "1730319920627-PRQTGVBQC0KBFJ0Y6X7M/bigaustin.pdf-image-050.jpg"],
                ["City of Austin", "1730319920632-7OUUPGA1VWI8L3EOPUP2/bigaustin.pdf-image-056.jpg"],
                ["DLA Piper", "1730319920636-PGVG00LOGTD5S4AHKERU/bigaustin.pdf-image-052.jpg"],
                ["Urban Betty", "1730319920640-LVJ5QPVUGJ5M0X8CBRHF/bigaustin.pdf-image-054.jpg"],
                ["Capital One", "1730319920643-67KSLNFYNRHC2RVRX8FS/bigaustin.pdf-image-044.jpg"],
                ["Economic Development", "1730319920646-RFPJK9JLQ21XW1WN6JVE/bigaustin.pdf-image-046.jpg"],
                ["Frost", "1730319920649-MXUY8SWFSWT3S5HHLIYE/bigaustin.pdf-image-048.jpg"],
              ]
                .map(
                  ([alt, img]) =>
                    `<div class="reveal flex items-center justify-center rounded-2xl bg-fog p-6"><img class="max-h-16 object-contain" src="https://images.squarespace-cdn.com/content/v1/67229609a2629e03152ed657/${img}" alt="${alt}" /></div>`
                )
                .join("")}
            </div>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "videos/index.html": page({
    title: "Videos",
    description: desc,
    body: `
        ${hero("Videos", "Stories, highlights, and moments from the BiGAUSTIN community.")}
        <section class="py-16 md:py-20">
          <div class="container-site grid gap-8 md:grid-cols-2">
            <article class="reveal overflow-hidden rounded-2xl bg-black shadow-lg">
              <div class="aspect-video bg-neutral-900">
                <iframe class="h-full w-full" src="https://www.youtube.com/embed/videoseries?list=PL" title="BiGAUSTIN videos" allowfullscreen></iframe>
              </div>
              <div class="p-5 text-white">
                <h3 class="text-lg text-white">BiGAUSTIN Community Stories</h3>
                <p class="text-sm text-white/70">Watch entrepreneur journeys and program highlights on our YouTube channel.</p>
                <a class="link-green mt-3 inline-block" href="https://www.youtube.com" target="_blank" rel="noopener">Visit YouTube →</a>
              </div>
            </article>
            <article class="reveal overflow-hidden rounded-2xl bg-fog p-8">
              <h3 class="mb-3 text-2xl text-brand">The BiG Knight Awards Gala</h3>
              <p class="mb-4 text-muted">Preview the energy of Central Texas’ premier celebration of community heroes.</p>
              <a href="/big-knight/" class="btn btn-primary">Explore The BiG Knight</a>
            </article>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "education/index.html": page({
    title: "Education",
    description: desc,
    body: `
        ${hero("Learn, Grow, Achieve", "The BiGAUSTIN School of Business & Job Skills Development")}
        <section class="py-16 md:py-20">
          <div class="container-site">
            <div class="reveal prose-site mx-auto mb-12">
              <p>At BiGAUSTIN, we empower individuals and strengthen our community. We provide essential resources and training for both job seekers and entrepreneurs, equipping them with the skills and knowledge to succeed in the dynamic Central Texas economy.</p>
              <p>Our charge is to equip and inspire individuals to view entrepreneurship as an employment opportunity, an avenue out of poverty, a path to economic growth in low-income communities, and a resource to help under-served small businesses succeed.</p>
            </div>
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              ${[
                ["Borrowing Basics", "A thorough evaluation of the funding process, credit analysis, and loan sources for small businesses."],
                ["Business Law Basics", "Experienced attorneys equip clients with contract and business law knowledge and a resource packet."],
                ["Business Plan 101", "Understand the strategic process of developing a business plan with a template and counseling support."],
                ["Contract Basics", "Identify contract terms to focus on and learn how to assess and manage contracts for your business."],
                ["Intellectual Property", "Learn patents, trademarks, copyrights, and trade secrets — and how to protect your ideas."],
                ["Start Smart", "A multi-session workshop covering everything you need to know about running a business."],
              ]
                .map(
                  ([t, p]) =>
                    `<article class="reveal card flex flex-col gap-3 p-6"><h3 class="text-xl text-brand">${t}</h3><p class="flex-1 text-muted">${p}</p><a href="/calendar/" class="link-green">See schedule →</a></article>`
                )
                .join("")}
            </div>
            <div class="reveal mt-12 rounded-2xl bg-fog p-8 text-center">
              <h3 class="mb-3 text-2xl text-brand">Is there something you need that we don't have a class on?</h3>
              <a href="/schedule/" class="btn btn-primary">Talk with us</a>
            </div>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "lending/index.html": page({
    title: "Lending & Funding",
    description: desc,
    body: `
        ${hero("Lending–Capital–Funding Solutions", "You bring the dream. We bring the support. Serving entrepreneurs’ financial needs since 1995.")}
        <section class="py-16 md:py-20">
          <div class="container-site space-y-14">
            <div class="reveal grid gap-6 md:grid-cols-2">
              <article class="card p-7">
                <p class="mb-2 text-sm font-semibold text-brand uppercase">New Start Business Launch Fund</p>
                <h3 class="mb-2 text-2xl">Up to $15,000</h3>
                <p class="mb-4 text-muted">For businesses with 3–12 months of operating history. Great for inventory, equipment, working capital, and leasehold improvements.</p>
                <a href="/schedule/" class="btn btn-primary">Apply for New Start</a>
              </article>
              <article class="card p-7">
                <p class="mb-2 text-sm font-semibold text-brand uppercase">Existing Business Growth Fund</p>
                <h3 class="mb-2 text-2xl">Up to $50,000</h3>
                <p class="mb-4 text-muted">For businesses with 12+ months of operating history. Manage growth, overcome challenges, or seize new opportunities.</p>
                <a href="/schedule/" class="btn btn-primary">Apply for Existing Business</a>
              </article>
            </div>
            <div class="reveal grid gap-6 md:grid-cols-4">
              ${[
                ["Fixed rate", "10%"],
                ["Loan terms", "1–6 years"],
                ["Early payoff", "No penalty"],
                ["Timeline", "2–4 weeks"],
              ]
                .map(
                  ([l, v]) =>
                    `<div class="rounded-2xl bg-fog p-5 text-center"><p class="text-sm text-muted">${l}</p><p class="text-xl font-semibold text-brand">${v}</p></div>`
                )
                .join("")}
            </div>
            <div class="reveal">
              <h2 class="mb-6 text-center text-3xl text-brand">How it works</h2>
              <ol class="grid gap-4 md:grid-cols-4">
                ${["Pre-Qualify", "Submit documents", "Review + underwriting", "Closing + funding"]
                  .map(
                    (s, i) =>
                      `<li class="rounded-2xl border border-neutral-200 p-5"><span class="mb-2 block text-sm font-semibold text-brand">Step ${i + 1}</span>${s}</li>`
                  )
                  .join("")}
              </ol>
            </div>
            <div class="reveal rounded-2xl bg-fog p-8">
              <h2 class="mb-4 text-2xl text-brand">Who we serve</h2>
              <ul class="grid gap-2 text-muted md:grid-cols-2">
                <li>21 years or older</li>
                <li>Written business plan</li>
                <li>U.S. citizen, legal resident, or U.S.-based foreign-owned business</li>
                <li>Current on taxes · No active bankruptcy</li>
                <li>For-profit · At least 51% owned by the applicant</li>
                <li>Operating in Texas (CDFI serving statewide)</li>
              </ul>
            </div>
            <div class="reveal text-center">
              <a href="/schedule/" class="btn btn-primary">Start Pre-Qualification</a>
              <a href="/schedule/" class="btn btn-outline ml-3">Schedule a Loan Consult</a>
            </div>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "business-consulting/index.html": page({
    title: "Business Consulting",
    description: desc,
    body: `
        ${hero("Beyond Consulting", "Confidential business consulting tailored to meet your needs — whether you’re just getting started or already in business.")}
        <section class="py-16 md:py-20">
          <div class="container-site">
            <div class="mb-12 grid gap-6 md:grid-cols-3">
              ${[
                ["One-On-One", "Free consultations for startup, business plan development, expansion, marketing, and management assistance."],
                ["Planning", "Get a free business plan template plus expertise and validation through the refinement process."],
                ["Education & Training", "Once plans are complete, we recommend classes that help you achieve success."],
              ]
                .map(
                  ([t, p]) =>
                    `<article class="reveal card p-6"><h3 class="mb-2 text-xl text-brand">${t}</h3><p class="text-muted">${p}</p></article>`
                )
                .join("")}
            </div>
            <div class="reveal rounded-2xl bg-fog p-8 text-center">
              <h3 class="mb-3 text-2xl text-brand">Women's BiZ Inc.</h3>
              <p class="mx-auto mb-5 max-w-2xl text-muted">BiGAUSTIN is home to Central Texas Women’s BiZ Inc (WBI), specializing in meeting the needs of female entrepreneurs through education, consulting, networking, and lending.</p>
              <a href="/womens-biz/" class="btn btn-primary">Explore Women's BiZ Inc</a>
            </div>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "programs/index.html": page({
    title: "Programs",
    description: desc,
    body: `
        ${hero("Explore our Programs", "Your journey starts here.")}
        <section class="py-16 md:py-20">
          <div class="container-site grid gap-7 md:grid-cols-3">
            ${[
              ["Maximize Business Achievement (MBA)", "Industry-specific workshops with information sessions, guest speakers, and Q&A — for home-based, construction, mobile vendors, and 50+ entrepreneurs.", "/education/"],
              ["Survive & Thrive", "Partnered with the CDFI Fund to assist economically distressed Central Texas counties with training, counseling, and micro-loan assistance.", "/community-development/"],
              ["Start Smart", "A 5-week, 10-session course for aspiring and early-stage business owners, offered three times a year.", "/startsmart/"],
            ]
              .map(
                ([t, p, href]) =>
                  `<article class="reveal card flex flex-col p-6"><h3 class="mb-3 text-xl text-brand">${t}</h3><p class="mb-5 flex-1 text-muted">${p}</p><a href="${href}" class="btn btn-primary self-start">Learn more</a></article>`
              )
              .join("")}
          </div>
          <div class="container-site mt-16 max-w-3xl">
            <h2 class="reveal mb-4 text-2xl text-brand">Client Grievance Policy and Procedures</h2>
            <p class="reveal mb-4 text-muted">It is the policy of BiGAUSTIN to provide all clients with a copy of the Client Grievance Policy and an opportunity to file a grievance without adverse repercussions.</p>
            <ol class="reveal list-decimal space-y-3 pl-5 text-muted">
              <li><strong>Step 1:</strong> Contact the CEO/President to discuss your complaint or submit it in writing. A written decision is provided within 30 days.</li>
              <li><strong>Step 2:</strong> Within 15 days, request a review by the Grievance Committee of the Board of Directors. A final written decision follows within 45 days.</li>
            </ol>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "startsmart/index.html": page({
    title: "Start Smart",
    description: desc,
    body: `
        ${hero("There's still time to Start Smart.", "A live, five-week course: ten sessions, one finished business plan, and a cohort of entrepreneurs building alongside you.")}
        <section class="py-16 md:py-20">
          <div class="container-site space-y-14">
            <div class="reveal mx-auto max-w-3xl text-center">
              <p class="mb-4 text-lg text-muted">AI can draft a business plan in minutes. A real expert makes sure it holds up. Tuition reduced from <s>$199</s> to <strong class="text-brand">$138</strong>. Ask about tuition assistance at melissa@bigaustin.org.</p>
              <a href="/schedule/" class="btn btn-primary">Register / Get in touch</a>
            </div>
            <div>
              <h2 class="reveal mb-8 text-center text-3xl text-brand">Why a live expert beats asking AI</h2>
              <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                ${[
                  ["The question you forgot to ask", "AI answers the question you ask. A seasoned consultant tells you the one you forgot."],
                  ["Confidence needs a reality check", "Legal structure, licensing, and cash flow are where confident mistakes get expensive."],
                  ["Feedback on your business", "Ask live questions and get practical feedback on your specific business."],
                  ["Accountability to keep moving", "Two live sessions a week and a cohort keep you moving until the plan is done."],
                  ["Connections that open doors", "Connect to fellow entrepreneurs, free consulting, and small business loans."],
                ]
                  .map(
                    ([t, p]) =>
                      `<article class="reveal card p-6"><h3 class="mb-2 text-lg text-brand">${t}</h3><p class="text-muted">${p}</p></article>`
                  )
                  .join("")}
              </div>
            </div>
            <div>
              <h2 class="reveal mb-8 text-center text-3xl text-brand">Your five weeks</h2>
              <ol class="grid gap-4 md:grid-cols-5">
                ${[
                  ["Does it work?", "Feasibility: who needs this, costs, and whether numbers add up."],
                  ["Who buys, and why?", "Define your customer, competition, and marketing approach."],
                  ["Put real numbers behind it", "Startup costs, pricing, cash flow, credit, and banking."],
                  ["Set it up the right way", "Legal structure, licenses, contracts, and protection."],
                  ["Walk away with your plan", "A written business plan plus next steps for funding."],
                ]
                  .map(
                    ([t, p], i) =>
                      `<li class="reveal rounded-2xl bg-fog p-5"><span class="mb-2 block text-sm font-semibold text-brand">Week ${i + 1}</span><h3 class="mb-2 font-medium">${t}</h3><p class="text-sm text-muted">${p}</p></li>`
                  )
                  .join("")}
              </ol>
            </div>
            <div class="reveal grid gap-6 rounded-2xl bg-fog p-8 md:grid-cols-3">
              <div><p class="text-sm text-muted">Schedule</p><p class="font-medium">Tuesdays &amp; Thursdays · 11:30 a.m.–1:30 p.m. CT</p></div>
              <div><p class="text-sm text-muted">Where</p><p class="font-medium">Live on Microsoft Teams</p></div>
              <div><p class="text-sm text-muted">Instructor</p><p class="font-medium">Daniel Frunza · UT MBA &amp; Master Trainer</p></div>
            </div>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "womens-biz/index.html": page({
    title: "Women's BiZ Inc",
    description: desc,
    body: `
        ${hero("Her business. Our shared future.", "You have the vision. Let’s build the business behind it.")}
        <section class="py-16 md:py-20">
          <div class="container-site space-y-14">
            <p class="reveal mx-auto max-w-3xl text-center text-lg text-muted">As home to Central Texas Women’s BiZ Inc. (WBI), BiGAUSTIN equips women with tools to start and grow through education, one-on-one consulting, round-table discussions, networking, and lending programs.</p>
            <div class="reveal grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
              ${[
                ["15.7M", "Women-owned businesses nationwide"],
                ["12.6M", "People employed"],
                ["$2.8T", "Annual revenue"],
                ["#1", "Austin metro for women entrepreneurs"],
              ]
                .map(
                  ([n, l]) =>
                    `<div class="rounded-2xl bg-fog p-5"><p class="text-3xl font-semibold text-brand">${n}</p><p class="text-sm text-muted">${l}</p></div>`
                )
                .join("")}
            </div>
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              ${[
                ["01 / Learn", "Business classes & Start Smart"],
                ["02 / Get Guidance", "Free one-on-one consulting"],
                ["03 / Connect", "Coffee Talk & community"],
                ["04 / Prepare", "Financial readiness"],
                ["05 / Open Doors", "Contracts & business resources"],
                ["06 / Grow", "Lending & capital guidance"],
              ]
                .map(
                  ([n, t]) =>
                    `<article class="reveal card p-6"><p class="mb-1 text-sm font-semibold text-brand">${n}</p><h3 class="text-xl">${t}</h3></article>`
                )
                .join("")}
            </div>
            <div class="reveal text-center">
              <a href="/schedule/" class="btn btn-primary">Start with a consultation</a>
              <a href="/calendar/" class="btn btn-outline ml-3">View Coffee Talk</a>
            </div>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "community-development/index.html": page({
    title: "Community Development",
    description: desc,
    body: `
        ${hero("Community Development", "Strengthening neighborhoods through entrepreneurship, workforce pathways, and affordable housing support.")}
        <section class="py-16 md:py-20">
          <div class="container-site max-w-3xl space-y-6">
            <p class="reveal text-lg text-muted">BiGAUSTIN supports community-led solutions that expand opportunity across Central Texas — from Survive &amp; Thrive training in economically distressed counties to housing and neighborhood initiatives that help families build lasting economic security.</p>
            <div class="reveal grid gap-4 sm:grid-cols-2">
              <a href="/programs/" class="card block p-6 hover:text-brand"><h3 class="mb-2 text-xl">Survive &amp; Thrive</h3><p class="text-muted">Industry-specific training, counseling, and micro-loan assistance.</p></a>
              <a href="/lending/" class="card block p-6 hover:text-brand"><h3 class="mb-2 text-xl">Capital access</h3><p class="text-muted">CDFI lending that keeps opportunity local.</p></a>
            </div>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "find-your-path/index.html": page({
    title: "Find Your Path",
    description: desc,
    body: `
        ${hero("Find Your Path with BiGAUSTIN", "Answer a few questions to find a starting point for business education, consulting, or lending.")}
        <section class="py-16 md:py-20">
          <div class="container-site max-w-2xl">
            <p class="reveal mb-8 text-center text-sm text-muted">This guide does not collect your answers or determine loan eligibility.</p>
            <div id="pathQuiz" class="reveal space-y-6 rounded-2xl border border-neutral-200 p-8">
              <div data-step>
                <h3 class="mb-4 text-xl text-brand">What do you need most right now?</h3>
                <div class="grid gap-3">
                  <button data-q="need" data-answer="learn" class="btn btn-outline justify-start">I want to learn / take a class</button>
                  <button data-q="need" data-answer="fund" class="btn btn-outline justify-start">I need funding / a loan</button>
                  <button data-q="need" data-answer="coach" class="btn btn-outline justify-start">I want 1:1 consulting</button>
                  <button data-q="need" data-answer="start" class="btn btn-outline justify-start">I’m starting from scratch</button>
                </div>
              </div>
              <div data-step class="hidden">
                <h3 class="mb-4 text-xl text-brand">Where are you in your journey?</h3>
                <div class="grid gap-3">
                  <button data-q="stage" data-answer="idea" class="btn btn-outline justify-start">Just an idea</button>
                  <button data-q="stage" data-answer="early" class="btn btn-outline justify-start">Already selling / early stage</button>
                  <button data-q="stage" data-answer="grow" class="btn btn-outline justify-start">Ready to grow</button>
                </div>
              </div>
              <div data-step class="hidden">
                <h3 class="mb-4 text-xl text-brand">Preferred next step?</h3>
                <div class="grid gap-3">
                  <button data-q="next" data-answer="now" class="btn btn-outline justify-start">Show me my best fit</button>
                  <button data-q="next" data-answer="talk" class="btn btn-outline justify-start">I’d rather talk to someone</button>
                </div>
              </div>
            </div>
            <div id="pathResult" class="reveal mt-8 hidden rounded-2xl bg-fog p-8 text-center"></div>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "calendar/index.html": page({
    title: "Calendar",
    description: desc,
    body: `
        ${hero("Workshops & Events", "Upcoming classes, Coffee Talks, and community gatherings.")}
        <section class="py-16 md:py-20">
          <div class="container-site space-y-6">
            <article class="reveal card grid gap-4 p-6 md:grid-cols-[160px_1fr_auto] md:items-center">
              <div class="rounded-xl bg-brand px-4 py-3 text-center text-white">
                <div class="text-sm uppercase tracking-wide">Dec</div>
                <div class="text-3xl font-semibold">2</div>
                <div class="text-sm">2026</div>
              </div>
              <div>
                <h3 class="text-xl">Buying a Business Instead of Starting One</h3>
                <p class="text-muted">Virtual Workshop · Explore acquisition as a path into entrepreneurship.</p>
              </div>
              <a href="/schedule/" class="btn btn-primary justify-self-start">Register</a>
            </article>
            <article class="reveal card grid gap-4 p-6 md:grid-cols-[160px_1fr_auto] md:items-center">
              <div class="rounded-xl bg-brand px-4 py-3 text-center text-white">
                <div class="text-sm uppercase tracking-wide">Ongoing</div>
                <div class="text-xl font-semibold">Start Smart</div>
              </div>
              <div>
                <h3 class="text-xl">Start Smart Course</h3>
                <p class="text-muted">Live on Microsoft Teams · Tuesdays &amp; Thursdays, 11:30 a.m.–1:30 p.m. CT</p>
              </div>
              <a href="/startsmart/" class="btn btn-primary justify-self-start">Learn more</a>
            </article>
            <article class="reveal card grid gap-4 p-6 md:grid-cols-[160px_1fr_auto] md:items-center">
              <div class="rounded-xl bg-brand px-4 py-3 text-center text-white">
                <div class="text-sm uppercase tracking-wide">Nov</div>
                <div class="text-3xl font-semibold">12</div>
                <div class="text-sm">2026</div>
              </div>
              <div>
                <h3 class="text-xl">The BiG Knight Awards Gala</h3>
                <p class="text-muted">Circuit of The Americas (COTA) · Austin, Texas</p>
              </div>
              <a href="/big-knight/" class="btn btn-primary justify-self-start">Details</a>
            </article>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "blog/index.html": page({
    title: "Blog",
    description: desc,
    body: `
        ${hero("Tips & Resources for Your Business", "Practical guidance for Central Texas entrepreneurs.")}
        <section class="py-16 md:py-20">
          <div class="container-site grid gap-8 md:grid-cols-2">
            ${[
              ["September 5, 2025", "Turning Job Loss into Opportunity: The Rise of Entrepreneurship", "Why entrepreneurship is thriving and how Start Smart can be your launchpad.", "https://images.squarespace-cdn.com/content/v1/67229609a2629e03152ed657/1757103831209-1U7OPP92DG0TF2SYK4FK/Screenshot+2025-09-05+152106.png?format=750w"],
              ["", "How to Prepare for Your First Business Loan Application", "Top tips from business plan to the right documents.", "https://images.squarespace-cdn.com/content/v1/67229609a2629e03152ed657/1730971263309-K66WJZJNXIIZTP14ONG7/134030.jpg?format=750w"],
              ["", "Tips for Navigating Small Business Financing", "Loans, grants, microloans — and which might fit your business.", "https://images.squarespace-cdn.com/content/v1/67229609a2629e03152ed657/1730971284033-H5XEB5YANVNYO6EIXGJI/2147787526.jpg?format=750w"],
              ["", "The Essential Guide to Starting a Small Business in Texas", "Choosing a structure, registering, and understanding legal requirements.", "https://images.squarespace-cdn.com/content/v1/67229609a2629e03152ed657/1730971263309-K66WJZJNXIIZTP14ONG7/134030.jpg?format=750w"],
            ]
              .map(
                ([date, title, blurb, img]) =>
                  `<article class="reveal flex flex-col gap-4">
                    <div class="aspect-[16/10] overflow-hidden rounded-xl"><img class="h-full w-full object-cover" src="${img}" alt="${title}" /></div>
                    ${date ? `<time class="text-sm text-muted">${date}</time>` : ""}
                    <h3 class="text-xl"><a class="hover:text-brand" href="#">${title}</a></h3>
                    <p class="text-muted">${blurb}</p>
                  </article>`
              )
              .join("")}
          </div>
        </section>
        ${ctaBand}`,
  }),

  "resources/index.html": page({
    title: "Small BiZ Resources",
    description: desc,
    body: `
        ${hero("Small Business Resources", "Guides, articles, and tools to help you start and grow.")}
        <section class="py-16 md:py-20">
          <div class="container-site grid gap-6 md:grid-cols-2">
            <a href="/blog/" class="reveal card block p-6"><h3 class="mb-2 text-xl text-brand">Blog</h3><p class="text-muted">Tips for financing, loan prep, and launching in Texas.</p></a>
            <a href="/calendar/" class="reveal card block p-6"><h3 class="mb-2 text-xl text-brand">Workshop Calendar</h3><p class="text-muted">Upcoming education and networking events.</p></a>
            <a href="/find-your-path/" class="reveal card block p-6"><h3 class="mb-2 text-xl text-brand">Find Your Path</h3><p class="text-muted">Three quick questions to match you with the right service.</p></a>
            <a href="/lending/" class="reveal card block p-6"><h3 class="mb-2 text-xl text-brand">Lending Checklist</h3><p class="text-muted">What you’ll typically need for pre-qualification.</p></a>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "donate/index.html": page({
    title: "Donate",
    description: desc,
    body: `
        ${hero("Be Their First Investor", "Fuel Dreams. Fund Futures. Donate Today.")}
        <section class="py-16 md:py-20">
          <div class="container-site grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div class="reveal prose-site">
              <p>Every day, untapped talent and powerful business ideas go unrealized simply because of lack of access — not lack of ambition. At BiGAUSTIN, we change that.</p>
              <p>Your donation ignites transformation — from business education and personalized consulting to startup capital and job skills training.</p>
              <p>BiGAUSTIN is a 501(c)(3) non-profit. Every dollar fuels local growth, strengthens communities, and creates generational change.</p>
              <p class="text-sm">EIN#: 74-2764780 · Registered in Texas. Contributions are tax-deductible to the limit allowed by law. Questions: <a class="link-green" href="mailto:info@bigaustin.org">info@bigaustin.org</a></p>
            </div>
            <form class="reveal card grid gap-4 p-6" data-demo-form>
              <h3 class="text-xl text-brand">Make a gift</h3>
              <label class="grid gap-1 text-sm font-medium">Amount (USD)<input required type="number" min="1" class="rounded-md border border-neutral-300 px-3 py-2.5 focus:border-brand focus:outline-none" name="amount" placeholder="100" /></label>
              <label class="grid gap-1 text-sm font-medium">Full name<input required class="rounded-md border border-neutral-300 px-3 py-2.5 focus:border-brand focus:outline-none" name="name" /></label>
              <label class="grid gap-1 text-sm font-medium">Email<input required type="email" class="rounded-md border border-neutral-300 px-3 py-2.5 focus:border-brand focus:outline-none" name="email" /></label>
              <button class="btn btn-primary" type="submit">Donate</button>
              <p data-form-success class="hidden font-medium text-brand-dark">Thank you for your generosity! (Demo form — no payment processed.)</p>
            </form>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "volunteer/index.html": page({
    title: "Volunteer",
    description: desc,
    body: `
        ${hero("Connect Your Expertise to Real Impact", "Share your knowledge, multiply your impact, and build generational change.")}
        <section class="py-16 md:py-20">
          <div class="container-site">
            <h2 class="reveal mb-8 text-center text-3xl text-brand">Become A Volunteer</h2>
            <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              ${[
                ["Impactful Contribution", "Help aspiring entrepreneurs achieve their goals and foster economic growth."],
                ["Skill Enhancement", "Teaching deepens your own mastery as you explain concepts clearly."],
                ["Networking", "Connect with students, fellow instructors, and business professionals."],
                ["Personal Fulfillment", "Witness the progress and success of the people you support."],
                ["Flexible Commitment", "Choose classes and times that align with your availability."],
                ["Giving Back", "A meaningful way to support community and economic development."],
              ]
                .map(
                  ([t, p]) =>
                    `<article class="reveal card p-6"><h3 class="mb-2 text-lg text-brand">${t}</h3><p class="text-muted">${p}</p></article>`
                )
                .join("")}
            </div>
            <div class="reveal mt-10 text-center">
              <a href="/schedule/" class="btn btn-primary">Get in touch to volunteer</a>
            </div>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "schedule/index.html": page({
    title: "Schedule an Appointment",
    description: desc,
    body: `
        ${hero("Schedule An Appointment", "If you only have a few quick questions, call (512) 928-8010. Hours: Mon–Fri, 8:30 am – 5:30 pm.")}
        <section class="py-16 md:py-20">
          <div class="container-site max-w-xl">
            <form class="reveal grid gap-4" data-demo-form>
              <div class="grid gap-4 sm:grid-cols-2">
                <label class="grid gap-1 text-sm font-medium">First Name<input required class="rounded-md border border-neutral-300 px-3 py-2.5 focus:border-brand focus:outline-none" name="firstName" /></label>
                <label class="grid gap-1 text-sm font-medium">Last Name<input required class="rounded-md border border-neutral-300 px-3 py-2.5 focus:border-brand focus:outline-none" name="lastName" /></label>
              </div>
              <label class="grid gap-1 text-sm font-medium">Email<input required type="email" class="rounded-md border border-neutral-300 px-3 py-2.5 focus:border-brand focus:outline-none" name="email" /></label>
              <label class="grid gap-1 text-sm font-medium">Phone<input type="tel" class="rounded-md border border-neutral-300 px-3 py-2.5 focus:border-brand focus:outline-none" name="phone" /></label>
              <label class="grid gap-1 text-sm font-medium">What do you need help with?
                <select class="rounded-md border border-neutral-300 px-3 py-2.5 focus:border-brand focus:outline-none" name="topic">
                  <option>Education / Workshops</option>
                  <option>Lending / Funding</option>
                  <option>Business Consulting</option>
                  <option>Start Smart</option>
                  <option>Other</option>
                </select>
              </label>
              <label class="grid gap-1 text-sm font-medium">Message<textarea rows="5" class="rounded-md border border-neutral-300 px-3 py-2.5 focus:border-brand focus:outline-none" name="message"></textarea></label>
              <button class="btn btn-primary justify-self-start" type="submit">Request Appointment</button>
              <p data-form-success class="hidden font-medium text-brand-dark">Thanks! We’ll confirm your appointment soon.</p>
            </form>
          </div>
        </section>
        ${ctaBand}`,
  }),

  "big-knight/index.html": page({
    title: "The BiG Knight Awards Gala",
    description: desc,
    body: `
        ${hero("A Knight for Community Heroes", "November 12, 2026 · 6:30 PM · Circuit of The Americas (COTA)")}
        <section class="bg-black py-12 text-white">
          <div class="container-site max-w-3xl space-y-4 text-center">
            <p class="reveal text-lg text-white/90">In a time that asks more of all of us, some people answer — some people <em>Rise to Empower</em>. The BiG Knight Awards Gala is where Central Texas rises to honor them.</p>
            <a href="/donate/" class="btn btn-primary reveal">Stand With the Knights</a>
          </div>
        </section>
        <section class="py-16 md:py-20">
          <div class="container-site space-y-14">
            <div class="reveal max-w-3xl">
              <h2 class="mb-4 text-3xl text-brand">A Time We Need It Most.</h2>
              <p class="text-muted">Families are stretched. Small businesses are fighting to hold on. And yet, in every corner of Central Texas, there are people who refuse to stand down. Mentors. Builders. Lenders of first chances. We call them Knights.</p>
            </div>
            <div>
              <h2 class="reveal mb-8 text-center text-3xl text-brand">Honoring the Community Heroes Among Us</h2>
              <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                ${[
                  ["Community Champions", "Leaders whose service has strengthened Austin and Central Texas."],
                  ["Entrepreneurial Excellence", "Founders who turned first chances into thriving enterprises."],
                  ["Entertainment Community Service", "Artists who open doors and give back to the communities that raised them."],
                  ["Legacy & Lifetime Impact", "Honoring decades of work that made generational change possible."],
                ]
                  .map(
                    ([t, p]) =>
                      `<article class="reveal card p-6"><h3 class="mb-2 text-lg text-brand">${t}</h3><p class="text-muted">${p}</p></article>`
                  )
                  .join("")}
              </div>
            </div>
            <div class="reveal rounded-2xl bg-fog p-8">
              <h2 class="mb-3 text-2xl text-brand">One Stage. One Unforgettable Night.</h2>
              <p class="mb-4 text-muted">VIP Red Carpet reception, silent auction, sit-down dinner, keynote, live entertainment, and the Knighting Ceremony. When the paddles rise during Raise Your Paddles, every hand helps empower small businesses across our community.</p>
              <p class="text-sm text-muted">Contact Geovanna Ricaldi · <a class="link-green" href="mailto:geovanna@bigaustin.org">geovanna@bigaustin.org</a> · 512-928-8010</p>
            </div>
          </div>
        </section>
        ${ctaBand}`,
  }),
};

for (const [rel, html] of Object.entries(pages)) {
  const full = join(root, rel);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, html);
  console.log("wrote", rel);
}

console.log(`Generated ${Object.keys(pages).length} pages`);
