# Moc Venture Fund website (template)

> **Private draft.** This repository is private, and the site stays unpublished until UTC and the UC Foundation approve a public launch. Don't turn on GitHub Pages, make the repository public, or add collaborators without that approval.

A seven-page website template for the Moc Venture Fund, UTC's student-run venture capital fund. It's plain HTML, CSS, and JavaScript, so there's nothing to install and no paid tools to use.

## Preview it

1. Download or clone this repository.
2. Double-click `index.html`. The site opens in your browser. Nothing gets published anywhere.

The fonts and the animation library load from the internet. Offline, the site still works with fallback fonts and no animation.

## Edit the words

All the text on the site lives in **`assets/js/content.js`**. You don't need to touch the HTML to change wording.

| Write this in content.js | Shows on the site as |
|---|---|
| `[square brackets]` | A highlighted placeholder, so you can spot what's left to fill |
| `**double stars**` | Bold |
| `==double equals==` | A gold underline that draws itself as you scroll |
| `\n` | A line break |

- **Add a team member:** copy one `{ name: ..., role: ... }` block in `team.members`, paste it after the last one, and put a comma between blocks. `group` must be `Leadership`, `Analysts`, or `Advisors` so the filter buttons work.
- **Add a portfolio company:** do the same in `portfolio.companies`. `stage` must be `Pre-seed`, `Seed`, or `Series A`. A `status` of `Exited` shows a gold badge.
- **Change a number on the home page:** edit `home.numbers.stats`. A number counts up when it scrolls into view. A placeholder such as `"[##]"` shows as highlighted text instead.
- **Settings** at the top of the file:
  - `highlightPlaceholders`: set to `false` to stop highlighting `[brackets]`.
  - `pageTransitions`: set to `false` to turn off the navy wipe between pages.
  - `formsAreDemos`: keep as `true` until a form service is connected.
  - `privateDraft`: set to `false` after launch to remove the "Private draft" tag in the footer.

Form field labels, such as "First name," are in the HTML of `founders.html` and `contact.html`.

## Files

| File | What it is |
|---|---|
| `index.html` | Home |
| `thesis.html` | Investment thesis |
| `team.html` | Team, advisory board, timeline, and joining |
| `portfolio.html` | Funds and portfolio companies |
| `founders.html` | What we look for, stages, eligibility, process, pitch form, and FAQ |
| `contact.html` | Contact details and form |
| `brand.html` | The logo, colors, type, and logo downloads |
| `assets/js/content.js` | Every word on the site |
| `assets/css/styles.css` | Colors, fonts, and layout. The brand colors are the variables at the top. |
| `assets/js/site.js` | Builds the header and footer, fills each page from content.js, and runs the animations |
| `assets/img/` | Logo files (SVG) and the favicon |

## Where the design comes from

The layout and motion follow the University Venture Fund (Utah) and Dakota Venture Group (North Dakota) most closely. The code is rebuilt from scratch; no code, images, or text were copied from either site.

- **Utah (UVF):**
  - large logo with faint echo lines behind it
  - gold line that runs from one section label to the next
  - step timeline with circles
  - giant one-line statement
  - quote beside a round portrait
  - bordered advisor boxes
  - colored hero block with an overlapping card
  - giant "Connect" on the contact page
  - "Back to top" line
- **North Dakota (DVG):**
  - big serif headlines
  - diagonal section break
  - arch-topped cards
  - photo-and-stats split
  - headshot cards
  - "journey so far" timeline
  - dark role card
  - pitch-deck form
  - fine-print band
  - contact form with interest checkboxes
- **Other examples:**
  - A-Level Capital (Johns Hopkins): numbered process rows
  - Atland Ventures (Minnesota): scrolling logo strip and "Work with us" band
  - Deming Center Venture Fund (CU Boulder): audience tiles
  - Big Red Ventures (Cornell): status badges on portfolio companies

## Animation

Animations use [GSAP](https://gsap.com) 3.15 (free) with its ScrollTrigger and Flip plugins, loaded from jsDelivr. Everything respects the visitor's "reduce motion" setting. If GSAP fails to load, every page still shows all of its content.

## Fonts (required)

Use only UTC's two web fonts, loaded from the same Google Fonts files utc.edu uses:

- **Oswald:** headlines, labels, numbers, and the wordmark
- **Raleway:** body text, buttons, forms, and quotes

Don't add any other font. The font tokens are at the top of `assets/css/styles.css`, and the Google Fonts link is in the `<head>` of every page.

## Colors

From the CSS on utc.edu's home page: UTC Navy `#112E51` and UTC Gold `#FDB736`, plus Deep Navy `#081524`, Light Blue `#E7EAEE`, Medium Blue `#D0D6DC`, and Teal Link `#116484`.

## Before any public launch

- [ ] Approval from UTC's marketing office for the Mocs name, UTC colors, and the logo
- [ ] UC Foundation review of how the fund is described
- [ ] Counsel review of the footer disclaimer
- [ ] Every `[placeholder]` replaced
- [ ] Real photos, with permission from the people in them
- [ ] Forms connected to a form service, with `formsAreDemos` set to `false`
- [ ] The `<meta name="robots" content="noindex, nofollow">` line removed from each page
- [ ] `privateDraft` set to `false`
- [ ] Hosting chosen and approved. GitHub Pages sites are public, so publish only after the steps above.
