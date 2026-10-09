/* ==========================================================================
   MOC VENTURE FUND · SITE CONTENT
   --------------------------------------------------------------------------
   Every word on the site lives in this file. Edit the text between the quotes.

   Formatting you can use inside any text:
     [square brackets]  A placeholder. It shows highlighted on the site until
                        you replace it, so it's easy to spot what's left to fill.
     **double stars**   Bold.
     ==double equals==  Gold highlight that underlines itself as you scroll.
     \n                 A line break.

   Lists (team members, companies, FAQs, and so on) are arrays: copy one
   { ... } block, paste it after the last one, add a comma between blocks, and
   edit it. Delete a block to remove an item.
   ========================================================================== */

window.MVF = {
  settings: {
    highlightPlaceholders: true,   // false hides the yellow placeholder highlight
    pageTransitions: true,         // navy wipe between pages
    formsAreDemos: true,           // forms show a message instead of sending (keep true until a form service is set up)
    privateDraft: true             // shows the "Private draft" tag in the footer; set false only after launch is approved
  },

  site: {
    name: "Moc Venture Fund",
    short: "MVF",
    tagline: "Student-run venture capital at UTC",
    email: "[fund email address]",
    address: ["[Building and room]", "The University of Tennessee at Chattanooga", "615 McCallie Ave.", "Chattanooga, TN 37403"],
    social: [
      { label: "LinkedIn", icon: "linkedin", url: "#" },
      { label: "Instagram", icon: "instagram", url: "#" }
    ],
    pitchUrl: "founders.html#apply"
  },

  nav: [
    { label: "Thesis", href: "thesis.html" },
    { label: "Team", href: "team.html" },
    { label: "Portfolio", href: "portfolio.html" },
    { label: "For Founders", href: "founders.html" },
    { label: "Contact", href: "contact.html" }
  ],
  navCta: { label: "Pitch us", href: "founders.html#apply" },

  footer: {
    blurb: "A student-run venture capital fund at the University of Tennessee at Chattanooga, investing pre-seed through Series A.",
    columns: [
      { title: "Explore", links: [
        { label: "Our thesis", href: "thesis.html" },
        { label: "Team", href: "team.html" },
        { label: "Portfolio", href: "portfolio.html" },
        { label: "Brand and logo", href: "brand.html" }
      ]},
      { title: "Founders", links: [
        { label: "Pitch the fund", href: "founders.html#apply" },
        { label: "Who's eligible", href: "founders.html#eligibility" },
        { label: "FAQ", href: "founders.html#faq" }
      ]},
      { title: "Connect", links: [
        { label: "Contact us", href: "contact.html" },
        { label: "Join the fund", href: "team.html#join" },
        { label: "LinkedIn", href: "#" }
      ]}
    ],
    partners: ["UC Foundation", "Gary W. Rollins College of Business", "UTC"],
    disclaimer: "The Moc Venture Fund is a student-run educational program funded through the UC Foundation. Nothing on this site is an offer to sell, or a solicitation of an offer to buy, any security. [Have UTC and UC Foundation counsel review this disclaimer before launch.]"
  },

  /* ---------------------------------------------------------------- HOME */
  home: {
    hero: {
      eyebrow: "Student-run venture capital · UTC",
      title: "From the classroom to the cap table.",
      lead: "Moc Venture Fund is a student-run venture capital fund at the University of Tennessee at Chattanooga. We invest from pre-seed through Series A, with priority for UTC-connected founders and Hamilton County companies.",
      primary: { label: "Pitch your company", href: "founders.html#apply" },
      secondary: { label: "Read our thesis", href: "thesis.html" },
      explore: "Explore the fund"
    },
    about: {
      eyebrow: "What is MVF?",
      statement: "Students run ==every step== of a real venture fund. They source companies, run diligence, and decide where ==real capital== goes. UTC backs them with resources, capital, and deal flow."
    },
    band: {
      title: "Moc Venture Fund",
      subtitle: "The next generation of Chattanooga investors"
    },
    pillars: [
      { title: "Educate through real experience", text: "Students learn venture capital by doing it: sourcing companies, running diligence, and investing real capital.", photo: "[Photo: students in a diligence meeting]", href: "thesis.html#purpose" },
      { title: "Build the Hamilton County region", text: "We put capital and student talent behind companies that build the local economy.", photo: "[Photo: a Hamilton County founder at work]", href: "thesis.html#who" },
      { title: "Earn returns that reflect student success", text: "Our returns measure how well our students learn and perform. Every dollar returned is reinvested in the next class of students and founders.", photo: "[Photo: the team presenting to advisors]", href: "thesis.html#how" }
    ],
    approach: {
      eyebrow: "Our approach",
      title: "Six steps. Students run all of them.",
      steps: [
        { title: "Source", text: "Students and partners bring in deals from UTC, Hamilton County, and beyond." },
        { title: "Screen", text: "Students take the first look at every pitch deck and share what they find with the fund." },
        { title: "Diligence", text: "Deal teams meet founders more than once and dig into the market, the product, and the numbers." },
        { title: "Present", text: "Each team writes an investment memo and presents it to the fund and its advisors." },
        { title: "Decide", text: "Students vote on whether the fund invests." },
        { title: "Support", text: "After the check, students help founders with research, introductions, and follow-up." }
      ]
    },
    numbers: {
      eyebrow: "MVF in numbers",
      photo: "[Photo: the full team]",
      stats: [
        { value: 100, suffix: "%", label: "Student-run, from the first pitch to the final vote" },
        { value: 3, label: "Stages we invest in: pre-seed, seed, and Series A" },
        { value: 43, label: "University venture programs we studied to build ours" },
        { value: "[##]", label: "Student members from [##] majors" }
      ]
    },
    statement: {
      lines: ["Learn by doing.", "Invest where ==we live.=="]
    },
    divider: "Who we work with",
    audiences: [
      { kicker: "Founders", title: "Pitch the fund", text: "Building in Hamilton County or connected to UTC? We want to see your deck.", href: "founders.html" },
      { kicker: "Students", title: "Join the fund", text: "Any major can apply. Learn venture capital by doing it.", href: "team.html#join" },
      { kicker: "Supporters", title: "Partner with us", text: "Mentors, investors, and alumni: help train the next class of investors.", href: "contact.html" }
    ],
    voices: {
      eyebrow: "In their words",
      quotes: [
        { quote: "[A quote from a founder about working with the student team.]", name: "[Founder name]", role: "[Title, Company]" },
        { quote: "[A quote from a student member about what they learned in the fund.]", name: "[Student name]", role: "[Major, Class of 20XX]" },
        { quote: "[A quote from a mentor, advisor, or UC Foundation partner.]", name: "[Name]", role: "[Title, Organization]" }
      ]
    },
    marquee: {
      eyebrow: "Portfolio",
      items: ["[Company A]", "[Company B]", "[Company C]", "[Company D]", "[Company E]", "[Company F]"]
    },
    cta: {
      title: "Building something in Hamilton County?",
      text: "We review pitch decks from UTC-connected founders and local companies first, and from strong companies anywhere in the United States.",
      button: { label: "Pitch the fund", href: "founders.html#apply" }
    }
  },

  /* -------------------------------------------------------------- THESIS */
  thesis: {
    hero: {
      title: "Our investment thesis.",
      cardEyebrow: "The thesis",
      card: "**Moc Venture Fund is a student-run venture capital fund at the University of Tennessee at Chattanooga. We invest from pre-seed through Series A in companies with product-market fit and realized revenue, giving priority to UTC-connected founders and Hamilton County companies.**"
    },
    anchors: [
      { label: "Purpose", href: "#purpose" },
      { label: "Who we invest in", href: "#who" },
      { label: "What we look for", href: "#look" },
      { label: "How the fund works", href: "#how" },
      { label: "Objectives", href: "#objectives" }
    ],
    purpose: {
      title: "Our purpose, in priority order",
      intro: "The fund pursues three goals. When they compete, the higher goal wins.",
      items: [
        { title: "Educate students through real experience.", text: "Students learn venture capital by doing it: sourcing companies, running diligence, and investing real capital." },
        { title: "Make the Hamilton County region better.", text: "We put capital and student talent behind companies that build the local economy." },
        { title: "Earn returns that reflect student success.", text: "Our returns measure how well our students learn and perform. Every dollar returned is reinvested in the next class of students and founders." }
      ]
    },
    who: {
      title: "Who we invest in",
      intro: "We give priority to companies with a UTC connection or a home in Hamilton County, and we consider strong opportunities anywhere in the United States.",
      inner: { label: "First priority", text: "Hamilton County companies and UTC-connected companies" },
      outer: { label: "Also considered", text: "Companies anywhere in the United States that meet our criteria" },
      definition: "**A UTC connection** means a founder or executive is a UTC student, alum, faculty member, or staff member, or the company is built on UTC research."
    },
    look: {
      title: "What we look for",
      intro: "We are industry agnostic. We consider traditional venture-scale companies and companies in industries that venture capital usually overlooks.",
      criteria: [
        { icon: "stairs", title: "Stage", text: "Pre-seed through Series A." },
        { icon: "trend", title: "Traction", text: "Companies that show product-market fit and realized revenue." },
        { icon: "spark", title: "A unique value proposition", text: "A clear reason customers choose this company over the alternatives." },
        { icon: "handshake", title: "Founder-market fit", text: "Founders whose experience, insight, or ties to the market give them an edge on the problem they're solving." }
      ],
      check: "Typical check: **[$X to $Y]**. Our investment policy statement sets the limits."
    },
    how: {
      title: "How the fund works",
      students: { label: "Students", text: "Students control every action of the fund. They review every pitch deck, run the full diligence process, and decide whether each investment is made." },
      utc: { label: "UTC", text: "UTC guides the students through this learning experience. The university provides resources, capital, and deal flow." },
      flow: ["UTC and the UC Foundation", "Students", "Founders"],
      flowNotes: ["Resources, capital, deal flow", "Review, diligence, decision"]
    },
    objectives: {
      title: "What we measure ourselves against",
      tabs: [
        { label: "Education", items: [
          "Run the full venture process on real companies.",
          "Write and defend investment memos.",
          "Learn early-stage finance: valuation, cap tables, term sheets, SAFEs, and notes.",
          "Judge founders and markets firsthand.",
          "Learn across disciplines on mixed-major deal teams.",
          "Build ties to Chattanooga's startup and investor community.",
          "Develop leaders who train their successors.",
          "Launch careers in venture capital, finance, and entrepreneurship."
        ]},
        { label: "Regional impact", items: [
          "Invest in Hamilton County first.",
          "Fill the early funding gap for companies too early or too small for institutional investors.",
          "Bring more capital in behind ours.",
          "Grow local jobs and revenue.",
          "Support founders beyond the check, whether or not we invest.",
          "Keep talent in Chattanooga.",
          "Strengthen the local startup community with events and partners.",
          "Back companies that venture capital overlooks."
        ]}
      ]
    }
  },

  /* ---------------------------------------------------------------- TEAM */
  team: {
    hero: {
      title: "We are the ==Moc Venture Fund.==",
      anchors: [
        { label: "Who we are", href: "#who" },
        { label: "Our team", href: "#people" },
        { label: "Advisory board", href: "#advisors" },
        { label: "Our journey", href: "#journey" },
        { label: "Join us", href: "#join" }
      ]
    },
    who: {
      from: "Meet the fund",
      eyebrow: "Who we are",
      statement: "We are a student-run team of **[##] members from [##] majors**, backed by mentors, advisors, and Chattanooga's founders."
    },
    peopleTitle: "Our team",
    filters: ["All", "Leadership", "Analysts", "Advisors"],
    members: [
      { name: "[Name]", role: "President", group: "Leadership", detail: "[Major], Class of [20XX]", bio: "[Short bio: background, interests, and what they focus on in the fund.]", linkedin: "#" },
      { name: "[Name]", role: "Vice President", group: "Leadership", detail: "[Major], Class of [20XX]", bio: "[Short bio.]", linkedin: "#" },
      { name: "[Name]", role: "Director of Research", group: "Leadership", detail: "[Major], Class of [20XX]", bio: "[Short bio.]", linkedin: "#" },
      { name: "[Name]", role: "Director of Operations", group: "Leadership", detail: "[Major], Class of [20XX]", bio: "[Short bio.]", linkedin: "#" },
      { name: "[Name]", role: "Senior Analyst", group: "Analysts", detail: "[Major], Class of [20XX]", bio: "[Short bio.]", linkedin: "#" },
      { name: "[Name]", role: "Analyst", group: "Analysts", detail: "[Major], Class of [20XX]", bio: "[Short bio.]", linkedin: "#" },
      { name: "[Name]", role: "Analyst", group: "Analysts", detail: "[Major], Class of [20XX]", bio: "[Short bio.]", linkedin: "#" },
      { name: "[Name]", role: "Analyst", group: "Analysts", detail: "[Major], Class of [20XX]", bio: "[Short bio.]", linkedin: "#" },
      { name: "[Name]", role: "Faculty Advisor", group: "Advisors", detail: "[Department]", bio: "[Short bio.]", linkedin: "#" },
      { name: "[Name]", role: "Advisor", group: "Advisors", detail: "[Title, Organization]", bio: "[Short bio.]", linkedin: "#" }
    ],
    advisors: {
      eyebrow: "Advisory board",
      intro: "Experienced investors and operators who review student recommendations and coach deal teams.",
      people: [
        { name: "[Advisor name]", org: "[Title, Organization]" },
        { name: "[Advisor name]", org: "[Title, Organization]" },
        { name: "[Advisor name]", org: "[Title, Organization]" },
        { name: "[Advisor name]", org: "[Title, Organization]" },
        { name: "[Advisor name]", org: "[Title, Organization]" },
        { name: "[Advisor name]", org: "[Title, Organization]" }
      ]
    },
    journey: {
      eyebrow: "Our journey so far",
      items: [
        { date: "Aug 2026", title: "The idea", text: "Students propose a fund that would let UTC students invest in local companies." },
        { date: "Sep 2026", title: "The research", text: "The team studies 43 university venture programs across the country." },
        { date: "Oct 2026", title: "The thesis", text: "The team drafts the fund's investment thesis and investment policy statement." },
        { date: "[Date]", title: "Approval", text: "[The UC Foundation approves the fund's investment policy.]" },
        { date: "[Date]", title: "First class", text: "[The first class of analysts joins the fund.]" },
        { date: "[Date]", title: "First investment", text: "[The fund makes its first investment.]" }
      ]
    },
    join: {
      eyebrow: "Join us",
      title: "Let's work together.",
      text: "Any major can apply. Members learn venture capital by doing it: sourcing deals, meeting founders, writing memos, and voting on real investments.",
      role: {
        title: "Analyst",
        meta: "Open to all majors · Chattanooga, TN",
        text: "New analysts train in early-stage finance, join a deal team, and present to the fund in their first semester. [Time commitment per week.]",
        cta: { label: "Apply now", href: "contact.html" }
      }
    }
  },

  /* ----------------------------------------------------------- PORTFOLIO */
  portfolio: {
    hero: {
      title: "Backing the builders of Hamilton County.",
      anchors: [
        { label: "About our portfolio", href: "#about" },
        { label: "Fund I", href: "#fund" },
        { label: "Companies", href: "#companies" }
      ],
      cardEyebrow: "About our portfolio",
      card: "Fund I backs pre-seed through Series A companies with product-market fit and real revenue, starting with UTC-connected founders and Hamilton County companies."
    },
    highlights: {
      eyebrow: "Fund I highlights",
      items: ["**[$X]** committed through the UC Foundation", "**[##]** pitch decks reviewed", "**[##]** investments made", "**[##]** jobs at Hamilton County portfolio companies"]
    },
    funds: [
      { num: "1", name: "Fund I", text: "An evergreen fund seeded through the UC Foundation. Returns are reinvested in the next class of students and founders.", link: { label: "Read the thesis", href: "thesis.html" } },
      { num: "2", name: "[Future fund or sector]", text: "[Space for a second fund, a sector, or a co-investment program.]", link: { label: "Contact us", href: "contact.html" } }
    ],
    companiesTitle: "Companies",
    filters: ["All", "Pre-seed", "Seed", "Series A"],
    companies: [
      { name: "[Company A]", one: "[One-line description]", sector: "Software", stage: "Pre-seed", year: "[20XX]", status: "Active", url: "#", desc: "[What the company does and why the fund invested.]" },
      { name: "[Company B]", one: "[One-line description]", sector: "Health", stage: "Seed", year: "[20XX]", status: "Active", url: "#", desc: "[What the company does and why the fund invested.]" },
      { name: "[Company C]", one: "[One-line description]", sector: "Logistics", stage: "Seed", year: "[20XX]", status: "Active", url: "#", desc: "[What the company does and why the fund invested.]" },
      { name: "[Company D]", one: "[One-line description]", sector: "Consumer", stage: "Pre-seed", year: "[20XX]", status: "Active", url: "#", desc: "[What the company does and why the fund invested.]" },
      { name: "[Company E]", one: "[One-line description]", sector: "Manufacturing", stage: "Series A", year: "[20XX]", status: "Exited", url: "#", desc: "[What the company does and why the fund invested.]" },
      { name: "[Company F]", one: "[One-line description]", sector: "Energy", stage: "Seed", year: "[20XX]", status: "Active", url: "#", desc: "[What the company does and why the fund invested.]" }
    ]
  },

  /* ------------------------------------------------------------ FOUNDERS */
  founders: {
    hero: {
      eyebrow: "For founders",
      title: "Get funded.",
      lead: "We review pitch decks from UTC-connected founders and Hamilton County companies first, and from strong companies anywhere in the United States.",
      cta: { label: "Submit your pitch", href: "#apply" }
    },
    lookTitle: "What we look for",
    stages: {
      eyebrow: "Where we invest",
      title: "Pre-seed through Series A",
      rows: ["Product", "Product-market fit", "Revenue", "Team", "What the money is for", "The question we ask"],
      tabs: [
        { label: "Pre-seed", values: ["A prototype or first version. It may not be launched yet.", "A hypothesis, with early interest such as pilots, letters of intent, or a waitlist.", "Usually none, or first sales.", "Founders, with few or no employees.", "Build the product and test the market.", "Can this team build something people want?"] },
        { label: "Seed", values: ["Launched and in customers' hands, and changing quickly.", "Early signs: paying customers who stay and come back.", "Early, growing revenue.", "First hires beyond the founders.", "Prove product-market fit and find a repeatable way to sell.", "Will customers keep buying?"] },
        { label: "Series A", values: ["The core product is proven, and the company is adding features or product lines.", "Demonstrated: strong retention and a repeatable way to win customers.", "Meaningful, fast-growing revenue.", "Leaders hired for sales, marketing, and operations.", "Scale what already works.", "Can growth repeat at scale?"] }
      ],
      note: "Because we look for realized revenue, most companies we back are late pre-seed or seed. At Series A, we usually invest as a follow-on investor."
    },
    eligibility: {
      eyebrow: "Eligibility",
      title: "Who can pitch",
      eligibleTitle: "Eligible",
      eligible: [
        "Companies based in Hamilton County.",
        "Companies with a UTC connection: a founder or executive who is a UTC student, alum, faculty member, or staff member, or a company built on UTC research.",
        "Strong companies anywhere in the United States."
      ],
      ineligibleTitle: "Not eligible",
      ineligible: [
        "Current fund members, while they're members.",
        "People who direct or approve the fund's investments, and their immediate families.",
        "Founders who fail a background check, such as for a fraud or securities conviction.",
        "Founders who misrepresent their company during diligence.",
        "Founders who won't share financials, the cap table, or prior funding documents.",
        "Companies without at least one committed founder [working full-time]."
      ],
      differentTitle: "Eligible, with extra steps",
      different: [
        "A member's friend, relative, or business contact: the member discloses the tie and sits out the vote.",
        "UTC faculty and staff founders: eligible, subject to UT System conflict-of-interest review.",
        "Former fund members: eligible after [waiting period]."
      ]
    },
    process: {
      eyebrow: "After you apply",
      title: "What happens next",
      steps: [
        { title: "Submit your pitch", text: "Send your deck through the form below." },
        { title: "First look", text: "Students screen every deck within [two weeks]." },
        { title: "Meet the team", text: "We meet founders more than once before any vote." },
        { title: "Diligence", text: "A deal team reviews your product, market, numbers, and documents." },
        { title: "Decision", text: "The deal team presents a memo and the fund votes." },
        { title: "Support", text: "We stay involved with research, introductions, and follow-up." }
      ]
    },
    form: {
      eyebrow: "Apply",
      title: "Submit a pitch deck",
      intro: "Takes about five minutes. Fields marked * are required.",
      stages: ["Pre-seed", "Seed", "Series A", "Not sure"],
      connections: ["Based in Hamilton County", "UTC student or alum founder", "UTC faculty or staff founder", "Built on UTC research", "None of these"],
      deckLabel: "Pitch deck",
      deckHint: "PDF or slides, up to [size limit]",
      connectionLabel: "Connection to UTC or Hamilton County",
      submit: "Submit pitch",
      demoMessage: "Thanks! This form is a preview and doesn't send anything yet. [Connect it to the fund's form service before launch.]"
    },
    finePrintTitle: "The fine print",
    finePrint: "We review pitches on a rolling basis. Submitting a pitch doesn't guarantee a meeting or an investment. [Add the fund's confidentiality policy for pitch materials.]",
    faq: {
      eyebrow: "FAQ",
      title: "Questions founders ask",
      items: [
        { q: "Do I need revenue?", a: "We focus on companies with product-market fit and realized revenue. Pre-seed companies with early sales are welcome to apply." },
        { q: "Do I have to be in Chattanooga?", a: "No. Hamilton County companies and UTC-connected founders get priority, and we consider strong companies anywhere in the United States." },
        { q: "How much do you invest?", a: "Our typical check is [$X to $Y]. We usually join rounds led by other investors." },
        { q: "What industries do you invest in?", a: "We are industry agnostic, including industries that venture capital usually overlooks." },
        { q: "Who sees my pitch deck?", a: "[Who sees pitch materials, and how the fund keeps them confidential.]" },
        { q: "How long does a decision take?", a: "[Typical time from first look to decision.]" }
      ]
    }
  },

  /* ------------------------------------------------------------- CONTACT */
  contact: {
    word: "Connect",
    intro: "Founders, students, mentors, and supporters: we'd like to hear from you.",
    cardTitle: "Moc Venture Fund",
    visitLabel: "Visit us",
    emailLabel: "Email us",
    followLabel: "Follow us",
    interests: ["Pitching my company", "Joining the fund", "Mentoring students", "Supporting the fund", "The newsletter"],
    giving: "Gifts to the fund are made through the UC Foundation. [Link to the giving page once it exists.]",
    demoMessage: "Thanks! This form is a preview and doesn't send anything yet. [Connect it to the fund's form service before launch.]"
  },

  /* --------------------------------------------------------------- BRAND */
  brand: {
    eyebrow: "Brand",
    labels: {
      strategyEyebrow: "Marketing strategy",
      colorEyebrow: "Color",
      colorTitle: "UTC navy and gold",
      typeEyebrow: "Type",
      typeTitle: "Three typefaces",
      filesEyebrow: "Files",
      filesTitle: "Logo files",
      filesLead: "Every file is a vector SVG, so it stays sharp at any size.",
      dos: "Do",
      donts: "Don't"
    },
    title: "The mark.",
    lead: "Two peaks, a valley, and a seed. The logo tells the fund's story in one shape.",
    parts: [
      { title: "The M", text: "M for Mocs, drawn as two peaks. Chattanooga sits between ridges, and so does the fund." },
      { title: "The gold V", text: "V for venture. It sits in the valley, the way the fund invests where we live." },
      { title: "The seed", text: "A diamond at the bottom of the V. Pre-seed and seed are where the companies we back begin." }
    ],
    strategyTitle: "Why it's built this way",
    strategy: [
      { title: "A shape, not a chart", text: "Finance logos lean on arrows and charts, and the SMILE Fund already owns the rising arrow on campus. A letter built from mountains is ours alone." },
      { title: "A story in one sentence", text: "People remember a logo they can explain. Two peaks, a valley, and a seed: Chattanooga, venture, and the companies we back." },
      { title: "UTC colors, new form", text: "Navy and gold tie the fund to UTC at a glance, while the shape stays the fund's own." },
      { title: "Gold where the eye lands", text: "Gold carries only the V and the seed, so the eye goes to venture first." },
      { title: "Holds up at every size", text: "The M still reads as a 16-pixel browser icon, and it scales up to a banner or a sticker." },
      { title: "Built to move", text: "On this site the parts animate: the peaks rise, the V drops in, and the seed lands last." }
    ],
    colors: [
      { name: "UTC Navy", hex: "#112E51", note: "Primary. Text, the peaks, dark sections." },
      { name: "UTC Gold", hex: "#FDB736", note: "Accent. The V, the seed, highlights. Not for text on white." },
      { name: "Deep Navy", hex: "#081524", note: "Footer and deepest backgrounds." },
      { name: "Light Blue", hex: "#E7EAEE", note: "Soft section backgrounds." },
      { name: "Medium Blue", hex: "#D0D6DC", note: "Lines and borders." },
      { name: "Teal Link", hex: "#116484", note: "Links in long text." }
    ],
    colorsNote: "All six colors are defined in the CSS on utc.edu's home page.",
    type: [
      { name: "Fraunces", use: "Headlines and quotes", sample: "From the classroom to the cap table." },
      { name: "Inter", use: "Body text and forms", sample: "Students run every step of a real venture fund." },
      { name: "Oswald", use: "Labels, numbers, and the wordmark. It's also UTC's heading font.", sample: "MOC VENTURE FUND · 2026" }
    ],
    files: [
      { label: "Full logo", file: "assets/img/logo.svg", dark: false },
      { label: "Full logo, reversed", file: "assets/img/logo-reversed.svg", dark: true },
      { label: "Mark", file: "assets/img/mark.svg", dark: false },
      { label: "Mark, reversed", file: "assets/img/mark-reversed.svg", dark: true },
      { label: "App icon and favicon", file: "assets/img/favicon.svg", dark: false }
    ],
    rules: {
      dos: ["Give the logo clear space at least as wide as the seed on every side.", "Use the reversed version on navy or photos.", "Keep the gold for the V and the seed."],
      donts: ["Don't stretch, rotate, or outline the mark.", "Don't recolor the peaks gold or the V navy.", "Don't set the logo on busy photos without a navy panel behind it."]
    },
    approval: "Before any public use, get approval from UTC's marketing office for the Mocs name and UTC colors."
  }
};
