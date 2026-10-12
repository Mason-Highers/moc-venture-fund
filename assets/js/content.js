/* ==========================================================================
   MOC VENTURE FUND · SITE CONTENT
   --------------------------------------------------------------------------
   Every word on the site lives in this file. Edit the text between the quotes.

   Sources:
     thesis.*     The investment thesis, word for word, from
                  "Moc Venture Fund Thesis copy.docx" (Oct 5), with its four
                  Hamilton County phrases replaced by the IPS's geography.
     Everything else follows the Investment Policy Statement (Oct 8 draft).

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
    // Sponsors, from IPS Section 2
    partners: ["The University of Tennessee at Chattanooga", "UC Foundation", "Max Fuller Center for Innovation and Entrepreneurship", "Gary W. Rollins College of Business"],
    disclaimer: "The Moc Venture Fund is a student-run educational program funded through the UC Foundation. Nothing on this site is an offer to sell, or a solicitation of an offer to buy, any security. [Have UTC and UC Foundation counsel review this disclaimer before launch.]"
  },

  /* ---------------------------------------------------------------- HOME */
  home: {
    hero: {
      eyebrow: "Student-run venture capital · UTC",
      title: "From the classroom to the cap table.",
      // The thesis's first paragraph, word for word
      lead: "The Moc Venture Fund is a student-run venture capital fund at the University of Tennessee at Chattanooga that prioritizes student education and experience. We invest from pre-seed through Series A in companies with product-market fit and realized revenue, giving priority to UTC-connected founders and the southeast region.",
      primary: { label: "Pitch your company", href: "founders.html#apply" },
      secondary: { label: "Read our thesis", href: "thesis.html" },
      explore: "Explore the fund"
    },
    about: {
      eyebrow: "What is MVF?",
      // From the thesis, "How the fund works"
      statement: "Students control ==every action== of the fund. Students review every pitch deck, run the full diligence process, and ==decide== whether each investment is made."
    },
    band: {
      title: "Moc Venture Fund",
      subtitle: "The next generation of Chattanooga investors"
    },
    // The thesis's three goals, in priority order, word for word
    pillars: [
      { title: "Educate students through real experience.", text: "Students learn venture capital by doing it: sourcing companies, running diligence, and investing real capital.", photo: "[Photo: students in a diligence meeting]", href: "thesis.html#purpose" },
      { title: "Improve the Chattanooga Metropolitan and Southeast Region.", text: "We put capital and student talent behind companies that build our community.", photo: "[Photo: a local founder at work]", href: "thesis.html#who" },
      { title: "Earn returns that reflect student success.", text: "Our returns measure how well our students learn and perform. Every dollar returned is reinvested in the next class of students and founders.", photo: "[Photo: the team presenting to advisors]", href: "thesis.html#how" }
    ],
    approach: {
      eyebrow: "Our approach",
      title: "Six steps. Students run all of them.",
      // IPS: "sourcing, screening, diligence, voting, and portfolio monitoring"
      steps: [
        { title: "Source", text: "Students find companies through UTC, the Chattanooga Metropolitan Area, the Southeast, and beyond." },
        { title: "Screen", text: "Students review every pitch deck and share what they find with the fund." },
        { title: "Diligence", text: "Members meet founders more than once before any vote and run the full diligence process." },
        { title: "Present", text: "Members write investment memos and present them to the fund and the advisory board." },
        { title: "Vote", text: "Students decide whether each investment is made." },
        { title: "Monitor", text: "Members take part in portfolio monitoring after every investment." }
      ]
    },
    numbers: {
      eyebrow: "MVF in numbers",
      photo: "[Photo: the full team]",
      stats: [
        { value: 100, suffix: "%", label: "Student-run, from the first pitch to the final vote" },
        { value: "$25k–$50k", label: "Typical investment, pre-seed through Series A" },
        { value: 43, label: "University venture programs we studied to build ours" },
        { value: "[##]", label: "Student members from [##] majors" }
      ]
    },
    statement: {
      lines: ["Learn by doing.", "Invest locally ==first.=="]
    },
    divider: "Who we work with",
    audiences: [
      { kicker: "Founders", title: "Pitch the fund", text: "UTC-connected, or building in Chattanooga or the Southeast? We want to see your deck.", href: "founders.html" },
      { kicker: "Students", title: "Join the fund", text: "Members come from many majors. Learn venture capital by doing it.", href: "team.html#join" },
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
      title: "Building something worth backing?",
      // IPS Section 6, geographic priority
      text: "We look first in the Chattanooga Metropolitan Area, then the surrounding metropolitan areas, the greater southeast region, and the rest of the United States. UTC-connected founders get priority wherever they are.",
      button: { label: "Pitch the fund", href: "founders.html#apply" }
    }
  },

  /* -------------------------------------------------------------- THESIS
     Word for word from "Moc Venture Fund Thesis copy.docx" (Oct 5), except
     four Hamilton County phrases, which use the IPS's wording:
       1. "Hamilton County companies"          -> "the southeast region"
       2. "Make the Hamilton County region better." -> "Improve the Chattanooga Metropolitan and Southeast Region."
       3. "a home in Hamilton County"          -> "a home in the Chattanooga Metropolitan Area"
       4. "Companies based in Hamilton County" -> "Companies based in the Chattanooga Metropolitan Area"
     ------------------------------------------------------------------- */
  thesis: {
    hero: {
      title: "Our investment thesis.",
      cardEyebrow: "Our thesis",
      card: "The Moc Venture Fund is a student-run venture capital fund at the University of Tennessee at Chattanooga that prioritizes student education and experience. We invest from pre-seed through Series A in companies with product-market fit and realized revenue, giving priority to UTC-connected founders and the southeast region."
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
        { title: "Improve the Chattanooga Metropolitan and Southeast Region.", text: "We put capital and student talent behind companies that build our community." },
        { title: "Earn returns that reflect student success.", text: "Our returns measure how well our students learn and perform. Every dollar returned is reinvested in the next class of students and founders." }
      ]
    },
    who: {
      title: "Who we invest in",
      intro: "We give priority to companies with a UTC connection or a home in the Chattanooga Metropolitan Area, and we consider strong opportunities anywhere in the United States.",
      first: { label: "First priority", text: "Companies based in the Chattanooga Metropolitan Area, and companies with a UTC connection. A UTC connection means a founder or executive who is a UTC student, alum, faculty, or staff member, or the company is built on UTC research." },
      also: { label: "Also considered", text: "Companies anywhere in the United States that meet the criteria below." }
    },
    look: {
      title: "What we look for",
      intro: "We are industry agnostic. We consider traditional venture-scale companies and companies in industries that venture capital usually overlooks.",
      criteria: [
        { icon: "stairs", title: "Stage", text: "Pre-seed through Series A." },
        { icon: "trend", title: "Traction", text: "We focus on companies that show a product market fit and have realized revenue." },
        { icon: "spark", title: "A unique value proposition", text: "A clear reason customers choose this company over the alternatives." },
        { icon: "handshake", title: "Founder-market fit", text: "Founders whose experience, insight, or ties to the market give them an edge on the problem they are solving." }
      ]
    },
    how: {
      title: "How the fund works",
      students: { label: "Students", text: "Students control every action of the fund. Students review every pitch deck, run the full diligence process, and decide whether each investment is made." },
      utc: { label: "UTC", text: "UTC guides the students through this learning experience. The university provides resources, capital, and deal flow." },
      flow: ["UTC", "Students", "Founders"],
      flowNotes: ["Resources, capital, and deal flow", "Review, diligence, and decisions"]
    },
    // Not part of the thesis: IPS Section 4, Investment Objectives (wording shortened for the web)
    objectives: {
      title: "Our objectives",
      source: "From our investment policy statement",
      conflict: "When objectives conflict, we stick to the thesis: education first, then regional impact, then financial returns.",
      tabs: [
        { label: "Educational", items: [
          "**Run the full venture process on real companies.** Every member takes part in sourcing, screening, diligence, voting, and portfolio monitoring with real capital.",
          "**Write and defend investment analysis.** Members write memos each semester and present them to the fund and the advisory board. New members start with a practice memo.",
          "**Learn early-stage finance.** Valuation, cap tables, term sheets, SAFEs, and convertible notes.",
          "**Judge founders and markets firsthand.** Members meet founders more than once before any vote and learn to assess founder-market fit and value propositions.",
          "**Learn across disciplines.** Members come from mixed majors and work across many industries.",
          "**Build ties to Chattanooga's startup and investor community.** Through deals, events, and internships with local founders, investors, and mentors.",
          "**Launch careers.** In venture capital, private equity, finance, and entrepreneurship."
        ]},
        { label: "Regional impact", items: [
          "**Invest locally first.** A significant share of investments goes to UTC-connected companies and the Chattanooga and surrounding metropolitan areas.",
          "**Bring more capital in behind others.** The fund invests after local angels and venture firms, adding outside money to chosen companies.",
          "**Grow local jobs and revenue.** Portfolio companies add jobs and grow revenue locally.",
          "**Grow talent in Chattanooga.** Founders and firms develop alongside students in skill and funding.",
          "**Strengthen the local startup community.** Events each semester for local entrepreneurs, run with partners."
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
      statement: "We are a student-managed fund of **[##] members from [##] majors**, guided by faculty advisors and backed by the UC Foundation."
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
      // Faculty advisors, from IPS Section 2
      { name: "Dr. Hunter Holzhauer", role: "Faculty Advisor", group: "Advisors", detail: "[Title, Department]", bio: "[Short bio.]", linkedin: "#" },
      { name: "Mike Bradshaw", role: "Faculty Advisor", group: "Advisors", detail: "[Title, Department]", bio: "[Short bio.]", linkedin: "#" }
    ],
    advisors: {
      eyebrow: "Advisory board",
      intro: "Members present their investment memos to the fund and the advisory board. [Advisory board members to be determined.]",
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
        { date: "Aug 2026", title: "The idea", text: "Students propose a fund that would let UTC students invest in real companies." },
        { date: "Sep 2026", title: "The research", text: "The team studies 43 university venture programs across the country." },
        { date: "Oct 2026", title: "The thesis", text: "The team drafts the fund's investment thesis and investment policy statement." },
        { date: "[Date]", title: "Approval", text: "[The UC Foundation approves the fund's investment policy.]" },
        { date: "2027", title: "Founding year", text: "The Moc Venture Fund is founded." },
        { date: "[Date]", title: "First investment", text: "[The fund makes its first investment.]" }
      ]
    },
    join: {
      eyebrow: "Join us",
      title: "Let's work together.",
      text: "Student members come from mixed majors and work with a variety of industries. Every member takes part in sourcing, screening, diligence, voting, and portfolio monitoring, using real capital.",
      role: {
        title: "Member",
        meta: "Open to mixed majors · Chattanooga, TN",
        text: "New members write a practice memo on a past deal or a company the fund passed on, then write and present their own investment memos each semester. [Time commitment per week.]",
        cta: { label: "Apply now", href: "contact.html" }
      }
    }
  },

  /* ----------------------------------------------------------- PORTFOLIO */
  portfolio: {
    hero: {
      title: "Backing founders from Chattanooga and beyond.",
      anchors: [
        { label: "About our portfolio", href: "#about" },
        { label: "Fund I", href: "#fund" },
        { label: "Companies", href: "#companies" }
      ],
      cardEyebrow: "About our portfolio",
      // IPS Section 2, Mission
      card: "We typically invest $25k–$50k in pre-seed through Series A companies with product-market and founder-market fits, giving priority to UTC-connected founders and the southeast region."
    },
    highlights: {
      eyebrow: "Fund I highlights",
      items: ["**[$X]** committed through the UC Foundation", "**[##]** pitch decks reviewed", "**[##]** investments made", "**[##]** local jobs at portfolio companies"]
    },
    funds: [
      { num: "1", name: "Fund I", text: "Held by the UC Foundation. Every dollar returned is reinvested in the next class of students and founders.", link: { label: "Read the thesis", href: "thesis.html" } },
      { num: "2", name: "[Future fund]", text: "[Space for capital from future LPs or donors.]", link: { label: "Contact us", href: "contact.html" } }
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

  /* ------------------------------------------------------------ FOUNDERS
     Follows IPS Section 6 (Investment Eligibility) and Section 2 (Mission).
     "What we look for" reuses the thesis criteria above, word for word.
     ------------------------------------------------------------------- */
  founders: {
    hero: {
      eyebrow: "For founders",
      title: "Get funded.",
      lead: "We give priority to UTC-connected founders and the Chattanooga Metropolitan Area, then the surrounding metropolitan areas, the greater southeast region, and the rest of the United States.",
      cta: { label: "Submit your pitch", href: "#apply" }
    },
    lookTitle: "What we look for",
    check: "We typically invest **$25k–$50k** in pre-seed through Series A companies with product-market and founder-market fits.",
    stages: {
      eyebrow: "Where we invest",
      title: "Pre-seed through Series A",
      rows: ["Product", "Product-market fit", "Revenue", "Team", "Instrument", "What the money is for"],
      tabs: [
        { label: "Pre-seed", values: [
          "A finished blueprint, prototype or first version; may not be launched",
          "A hypothesis; early interest such as pilots, letters of intent, or a waitlist",
          "Usually none, or first sales",
          "Founder(s), few or no employees",
          "SAFE or convertible debt investments",
          "Build the product and test the market"
        ]},
        { label: "Seed", values: [
          "Depending on the industry, the product is launched and in customers' hands; changing quickly, or undergoing approval.",
          "Early signs: paying customers who stay and come back",
          "Early, growing revenue based on industry, can be none depending on product or service",
          "First hires beyond the founders",
          "SAFE, first priced equity round, or convertible debt investments",
          "Prove product-market fit and find a repeatable way to sell, or expedite approval of the product"
        ]},
        { label: "Series A", values: [
          "Core product proven; adding features or product lines. Looking to expand location or staff.",
          "Demonstrated: strong retention and user metrics as compared to industry",
          "Meaningful, fast-growing revenue",
          "Leaders hired for sales, marketing, and operations",
          "Priced preferred equity or convertible debt investments",
          "Scale what already works"
        ]}
      ]
    },
    eligibility: {
      eyebrow: "Eligibility",
      title: "Who can pitch",
      tiers: ["Chattanooga Metropolitan Area", "Surrounding metropolitan areas", "Greater southeast region", "United States"],
      priorityTitle: "Geographic priority",
      priority: [
        "**The Chattanooga Metropolitan Area.** Companies headquartered or founded with operations in the Chattanooga Metropolitan area.",
        "**Surrounding metropolitan areas.**",
        "**The greater southeast region.**",
        "**The rest of the United States.** Out-of-region companies are considered, with favoritism given to surrounding metro areas or UTC-connected firms."
      ],
      utcTitle: "What counts as a UTC connection",
      utc: "Active faculty, researchers, or students. Any member who graduated from UTC or has an immediate family member who graduated from UTC.",
      stagesLine: "**Eligible stages:** Pre-seed, Seed, Series A.",
      ineligibleTitle: "Not eligible",
      ineligible: [
        "**Current fund members.** Students who are active members can't receive an investment from the fund while they're members.",
        "**People who control the fund.** The faculty director, program staff, advisory board members, and UC Foundation officers involved in approving deals are ineligible along with immediate family members.",
        "**Founders who fail a background check.** This covers a fraud or securities conviction, a regulatory ban, registered felons, or a name on a government sanctions list.",
        "**Founders who misrepresent their company.** This applies to anyone who gives false revenue, customer, or ownership information during diligence.",
        "**Founders who won't allow diligence.** This applies to anyone who refuses to share financials, the cap table, or prior funding documents.",
        "**Founders not committed to the company.** This applies when no founder works on the company for a significant amount of time unless an exception is approved."
      ],
      excluded: "**Excluded industries:** any industry restricted by UC Foundation or UTC policy."
    },
    process: {
      eyebrow: "After you apply",
      title: "What happens next",
      steps: [
        { title: "Submit your pitch", text: "Send your deck through the form below." },
        { title: "First look", text: "Students review every pitch deck. [How fast founders hear back.]" },
        { title: "Meet the team", text: "Members meet founders more than once before any vote." },
        { title: "Diligence", text: "Students run the full diligence process." },
        { title: "Decision", text: "Members present an investment memo to the fund and the advisory board, and students decide whether the investment is made." },
        { title: "Support", text: "Members take part in portfolio monitoring after every investment." }
      ]
    },
    form: {
      eyebrow: "Apply",
      title: "Submit a pitch deck",
      intro: "Takes about five minutes. Fields marked * are required.",
      stages: ["Pre-seed", "Seed", "Series A", "Not sure"],
      deckLabel: "Pitch deck",
      deckHint: "PDF or slides, up to [size limit]",
      connectionLabel: "Connection to UTC or the region",
      connections: ["UTC student, faculty member, or researcher", "UTC graduate", "Immediate family member of a UTC graduate", "Based in the Chattanooga Metropolitan Area", "Based elsewhere in the Southeast", "None of these"],
      submit: "Submit pitch",
      demoMessage: "Thanks! This form is a preview and doesn't send anything yet. [Connect it to the fund's form service before launch.]"
    },
    finePrintTitle: "The fine print",
    finePrint: "We review pitches on a rolling basis. Submitting a pitch doesn't guarantee a meeting or an investment. [Add the fund's confidentiality policy for pitch materials.]",
    faq: {
      eyebrow: "FAQ",
      title: "Questions founders ask",
      items: [
        { q: "Do I need revenue?", a: "We focus on companies that show a product market fit and have realized revenue. Depending on the industry, a seed-stage company may have none yet." },
        { q: "Do I have to be in Chattanooga?", a: "No. We look first in the Chattanooga Metropolitan Area, then the surrounding metropolitan areas, the greater southeast region, and the rest of the United States. UTC-connected companies get priority wherever they are." },
        { q: "How much do you invest?", a: "We typically invest $25k–$50k. The fund invests after local angels and venture firms, putting more outside money into chosen companies." },
        { q: "What instruments do you use?", a: "SAFEs, convertible debt, or priced equity, depending on the company's stage." },
        { q: "What industries do you invest in?", a: "We are industry agnostic, including industries that venture capital usually overlooks. We don't invest in any industry restricted by UC Foundation or UTC policy." },
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
      typeTitle: "UTC's two typefaces",
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
      { title: "The gold V", text: "V for venture. It sits in the valley, the way the fund invests locally first." },
      { title: "The seed", text: "A diamond at the bottom of the V. Pre-seed and seed are where the companies we back begin." }
    ],
    strategyTitle: "Why it's built this way",
    strategy: [
      { title: "A shape, not a chart", text: "Finance logos lean on arrows and charts, and the SMILE Fund already owns the rising arrow on campus. A letter built from mountains is ours alone." },
      { title: "A story in one sentence", text: "People remember a logo they can explain. Two peaks, a valley, and a seed: Chattanooga, venture, and the companies we back." },
      { title: "UTC colors and fonts, new form", text: "UTC's navy, gold, Oswald, and Raleway tie the fund to UTC at a glance, while the shape stays the fund's own." },
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
    // The same two Google Fonts families utc.edu loads. Use nothing else.
    type: [
      { name: "Oswald", use: "Headlines, labels, numbers, and the wordmark. UTC's heading font.", sample: "From the classroom to the cap table." },
      { name: "Raleway", use: "Body text, buttons, forms, and quotes. UTC's body font.", sample: "Students control every action of the fund." }
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
