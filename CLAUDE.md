# Tile Labs

Read `snowai-app/snowai`'s `AGENTS.md` first (the section "Snow AI, A Tile company"); the family's standing rules live there,
and are restated at the end, as every repository states them. What is specific here:

## What this is

The company page of **Tile Labs**, at **tilelabs.si** (operator, 26 October 2026, T-3783, T-3792; the repository `snowai-app/tilelabs`
was made by the operator the same day, T-3800). A software studio: products, white-label versions that wear a client's brand, and
custom software built to a specification. Built from the mock-up the operator approved on 26 October 2026 (T-3806,
https://claude.ai/artifact/9ksaDSk8mtSXaUzkmpUCLE, version 6), section for section. Rule 9 holds: a change to the page is a change to
the mock-up first, and the page changes only where the operator asked.

The company is one: Snow AI's products and Get Covered are Tile Labs' products. The umbrella name for the retail products is
undecided ("Snow" is a working name and is not on the page).

## Where things are

| | |
| --- | --- |
| Top bar and footer (T-3828) | Engage's chrome, the light grey of its top bar and foot (`--chrome`, `--chrome-line`, `--chrome-btn`, `--chrome-btn-line`, `--chrome-ink` in `app/tilelabs.css`, light `#f3f3f3` on `#bdbdc4`, dark `#1b1828` on `#3d3755`), on `.top`, `footer` and the buttons in them. |
| The page | `app/page.tsx` draws it from `components/` (Header, Hero, What, How, Products, Promises, Talk, Footer, DemoDialog). `app/tilelabs.css` is the stylesheet, tokens at the top, light by default and dark by the device's setting, with a Light/Dark button beside the language menu (`components/ThemeSwitch.tsx`, T-3821): the visitor's choice is kept in their own browser (`localStorage` key `tilelabs-theme`, applied before paint in `app/layout.tsx`), never sent, and no cookie is set. **Engage's violet** since T-3821 (the family palette's `engage` entry: ground `#f4f4f9`, accent `#5e2ced`, soft `#efe9ff`; dark ground `#15121f`, accent `#a88bff`). The four glaze colours (`--g1` to `--g4`: cobalt, teal, kiln yellow, rose) are unchanged and colour every multicoloured tile, the logo and `app/icon.svg`; only the page's greys, accent and soft tint are violet. The Sign demo video (`public/sign-demo.*`) was made in the earlier blue, teal and yellow and has not been remade. |
| What moves | `lib/page.ts` (`initPage`, started by `components/Behaviour.tsx`): the Pause button, the fifteen pressable tiles (a canvas, with a real button over each for the keyboard), the white-label example, the steps filling as you scroll, things arriving on scroll, and the demo window. Reduced motion shows everything at rest. |
| The products | `lib/products.ts`: fifteen products, each with what it does, who it suits, a drawn address (`.example`) and three steps; `lib/frames.ts` turns a step into markup (escaped), tested in `lib/products.test.mts`. Drawn examples with invented names, **no price and no figure of our own**. |
| Capabilities (T-3830) | `components/Capabilities.tsx`, between What we do and How we work: the mock-up https://claude.ai/artifact/9YVqTE4AZP9EEhzSkJViVw as built, four variations (A the line, B the wheel, C before and after, D the dock) chosen from tabs inside the section, each with its own layout, words and motion. Words in `lib/caps-words.ts` (four languages, checked by `lib/site-words.test.mts` through `SITE[lang].caps`); styles under `/* capabilities */` in `app/tilelabs.css`. Drawn examples with invented names; no price. The operator said the section is in "for now", to be adjusted later. |
| Videos | A product with `video: 'name'` plays `/public/name.mp4` (with `name.webm` beside it) in its window in place of the click-through. Only **Sign** has one (`sign-demo`, 15 s, silent, made from a scripted scene); the other fourteen keep their click-through until their videos are made. |
| Privacy and terms | `/privacy` and `/terms` (`components/LegalPage.tsx`, `lib/company.ts`): the **company's own** policy and terms, in its own words (T-3816): Tile Private Limited DBA Tile Labs, UEN 202648669R, Singapore, shown on these two pages only and never on the front page. They say what the company does with personal information (this site, a message to it, software it builds for a client) and point to snowai.app/privacy and snowai.app/terms for the Snow AI apps, which are a brand of the company and have their own pages with different wording and no company number. Marked draft until a lawyer has read them. In four languages (next row). |
| Languages (T-3820, T-3821, T-3829) | The whole site is in English, Spanish, Hindi, Simplified Chinese, Japanese, Korean and Portuguese (the last three added 27 October 2026, T-3829: `lib/site-words-more.ts`, `lib/product-words.more.src.txt`, the `ja`, `ko`, `pt` entries of `lib/legal-words.ts` and `lib/caps-words.ts`; `/ja`, `/ko`, `/pt` and their privacy and terms), from the mock-up the operator approved on 26 October 2026 (https://claude.ai/artifact/SxGSgEQMbJpvudKF85fmaw). English stays at `/`, `/privacy`, `/terms`; the others are `/es`, `/hi`, `/zh` and `/<lang>/privacy`, `/<lang>/terms` (`app/[lang]/`, made ahead of time, any other word 404s). **No cookie**: the language menu (`components/LangMenu.tsx`, the family's dropdown: a globe, the code, a chevron; a list of flag, name and script: the name on the left in letters the reader can recognise, the language's own script or code on the right, T-3831; `components/Flag.tsx`) is made of links to the same page in another language, so the site still sets none, and a link can be shared in a language. It sits in the top bar and the footer of every page. Words: `lib/site-words.ts` (every section, the demo window, the form) and `lib/legal-words.ts` (the policy, the terms and their frame); the products' drawn screens are translated by phrase from `lib/product-words.src.txt` (`English ||| Spanish ||| Hindi ||| Chinese`; `python3 scripts/build-words.py` writes `lib/product-words.ts`, never edit that by hand), applied by `lib/localize.ts`. Names (the products', the invented people, brands and addresses) are never translated. `lib/site-words.test.mts` fails on a missing word, a lost `{slot}` or a product phrase with no translation. The form's mail stays English for the inbox and adds `[es]`, `[hi]` or `[zh]` to the subject. Each page carries hreflang and the sitemap lists every page. The products line says English, Spanish and Hindi: Chinese is the website's language only until the family's list (snowai `family/languages.ts`) holds it. Hindi, Chinese, Japanese and Korean use the device's own fonts. **Written by Claude; no native speaker has read them**, and English governs. |
| No browser translation (T-3833) | `app/layout.tsx`: `<meta name="google" content="notranslate">`, `translate="no"` and the `notranslate` class on `<html>` and `<body>`, so Chrome, Edge, Safari and Firefox do not offer to translate; the language menu is the only conversion. A small script in the head sets `<html lang>` (and `dir="rtl"` for Arabic) from the address. |
| The form | `components/Talk.tsx` and `lib/contact.ts`: it sends nothing itself. A good message opens the visitor's own mail app addressed to `support@snowai.app` with what they typed in it. The address is a choice to confirm (the family's public support inbox, T-3806). |
| Footer | Privacy and Terms point at snowai.app's pages; HIPAA compliant is a label; Cookie choices says the page sets no cookies and has no analytics. If that changes, the choice goes here first. |
| Fonts | Self-hosted from npm (`@fontsource-variable/bricolage-grotesque`, `@fontsource-variable/hanken-grotesk`, `@fontsource/dm-mono`): no request goes to a font service. |

## Rules that bind it

- **No cookies, no analytics, no outside scripts or fonts.** Nothing is collected about a visitor.
- **No price, no figure of our own** anywhere ("Pricing is being set" if it must be said). Examples say they are examples.
- **Nothing outbound without approval.** The form opens the visitor's own mail app; nothing is sent from the page.
- **No customer record, no health detail** on the page or in a demo; every name in a demo is invented.
- **Environment variables** reach neither the build nor the runtime dependably. There are none; if one is needed it is named in the `env`
  block of `next.config.ts`, and only when it has a value.
- **Commit as** `Claude <noreply@anthropic.com>`: `git -c user.email=noreply@anthropic.com -c user.name=Claude commit …`

## AWS (no deploys from here)

Amplify app `tilelabs`, from `main`, at `tilelabs.si`. No environment variable and no compute role: the page reads nothing in AWS.
snowai's CloudShell round makes the app, attaches the address and the first release.

## Checks

`npm test`, `npx tsc --noEmit` and `npx next build` (`.github/workflows/checks.yml` runs them). Invented names only.

## Standing instructions — read before anything else

Set by the operator, 16 September 2026. They apply in every repository.

**0. Every chat starts in Snow AI.** Ruled by the operator, 27 September 2026: "please do not use Get Covered or anything else as a repo for now. Always use Snow as a standard to start." A new chat, and every helper session a chat starts, opens in the **Snow AI** environment with **`snowai-app/snowai`** as its repository. Other repositories are added from there as the work needs them. It never starts in the Get Covered environment or from another repository: the handoff, the ledger script and these rules live in `snowai`, and the Snow AI environment is the one whose network allows the sites the work needs.

**1. Start by checking what is pending.** Before the first reply:
- `node scripts/ledger.mjs check`, then the queue — revisions first, then oldest pending.
- The newest file in `docs/handoffs/`.
- Other chats. `mcp__Claude_Code_Remote__list_sessions` with `mine: true`. A chat is OPEN if its
  `session_status` is `RUNNING` or its `connection_status` is `connected`; anything `IDLE` /
  `COMPLETED` is closed and is not to be touched. An open one carries
  `post_turn_summary.needs_action` — what it is waiting on. Report it in one line:
  *"An open chat from 15 Sept has two things pending — review them or close it?"*

**2. One command at a time.** A CloudShell instruction is ONE command, then stop. They reply with
a screenshot; the next command follows from what it says. Never a block of commands, never "then
run this, then that". Waiting for the screenshot is the point — it is what makes the next command
right instead of a guess.

*Amended 23 September 2026 (T-1517): "give me everything one time… with less Cloud Shell
typing."* A round of CloudShell work now arrives as ONE bundle: one file to upload (a single
script, or one zip that a single script unpacks) and ONE command to run it. The script does the
steps in order, prints one line per step, and stops at the first failure with what failed and
the command that resumes from there. The screenshot of that one run is what the next round
follows from. So "one command, then stop" still holds — the command is simply the whole round.
Each bundle carries a name never used before (`round13.py`, `round14.py`…), so an upload can
never collide and no clearing step is needed first; the script deletes its own file when it
finishes cleanly. A round is: upload one file, paste one line.

**2a. One CloudShell command, after everything is finished.** Ruled by the operator,
28 September 2026 (T-1677): "one command on CloudShell after you have finished everything." Work
that needs AWS is batched into a single script, built and attached once the code is on `main`;
the operator uploads it (after its one `rm -f` line) and runs its one command. The script is
idempotent and resumable, so the next command after it follows only from its screenshot.

**3. Say where it runs, in the same sentence as the command.** "In CloudShell." "In Chrome's
DevTools console, on healthsherpa.com." Three different things are called "the console" and
choosing wrong costs an hour.

**3a. Every command in its own code block, so it carries a copy button.** Ruled by the operator,
28 September 2026 (T-1664): "Any command has to have the copy icon." A command, a file name to
type, a URL to paste — each goes in a fenced block on its own lines, never inline in a sentence
and never inside a table, so the app shows the copy icon beside it.

**4. No placeholders inside a command.** Never `export X='<paste it here>'` — it gets pasted
verbatim, and it should. If a value must be substituted, the command stands alone and the script
receiving it rejects the placeholder by name.

**5. Attach every file. Source it, build it, finish it, attach it.** Never send them to GitHub, a
browser, or a repository path to fetch anything. Rename anything that would collide. The message
that asks for an upload carries the single `rm -f` line that clears it — CloudShell refuses to
overwrite and keeps the old file silently.

**6. Exhaust it before asking.** Every URL, every source, every command, every alternative — tried,
not considered. Come back only for what genuinely needs their hands: CloudShell, their credentials,
their logged-in session, or a decision about money, vendors or scope. "I could not" is only true
after trying.

**7. Get to the point.** One line for each finished thing, then the next step. No narration of what
was attempted, no explanation of what went wrong, no apologies, no "I should have", no whose fault
it was. They asked for the result and the next action. Nothing else is wanted.

**8. Every instruction gets a ledger row when it arrives** — not at the end — closed with the
post-merge SHA on `main` and the repository name (`getcovered <sha>`). A result that only says
"done" is a failed result.

### The three commands

The operator says one of three things. Everything any one of them implies is done
without being asked, and without anything being uploaded or downloaded — the
handoff lives in the repository.

**"Close the chat for the day."**
1. Commit, push, PR and merge everything outstanding, in every repository touched.
2. Close every ledger row opened today: result, and the post-merge SHA with its
   repository name. Anything unfinished is `block`ed with what it is waiting on.
3. Write `docs/handoffs/<YYYY-MM-DD>.md` in `snowai` — what shipped with SHAs, what
   is waiting and on whom, what is next, what is blocked and why. Merge it.
4. Reply in a few lines: what shipped, what is waiting. Nothing else.

**"Opening a new chat for the day."**
1. Read the newest file in `docs/handoffs/`.
2. `node scripts/ledger.mjs check`, then the queue — revisions first, then oldest
   pending.
3. List sessions; if any chat is still open, say so in one line.
4. Reply with where things stand, what is waiting on them, and what is being started
   first. Nothing else.

**"The window is filling."**

Said by either side, and it means exactly what "close the chat for the day" means:
run that routine, then say the new chat can be opened. The context window is a
fixed size and never grows. Compaction does not add room — it replaces the
conversation with a summary and starts filling again, and each one loses more
detail than the last. Nothing survives a window except what is written down: the
ledger rows, `docs/handoffs/`, `AGENTS.md`, the code.

So a window is not crossed with unwritten state. The operator sees the meter and
this session does not — no counter is visible from in here, and guessing at one is
worse than not trying. **The operator says when the chat closes. The session
never offers to.** Ruled 22 September 2026 — "I will tell you when to close the
chat. You don't tell me." — replacing the earlier rule that had the session
offer after each finished piece of work. What the session does instead is keep
nothing unwritten: every instruction on the ledger as it arrives, every result
merged and its SHA recorded, so a close at any moment costs nothing. "The window
is filling" said by the operator is still the close routine, as below.

**A handoff is a file in this repository, merged in the session that wrote it.**
`docs/handoffs/<YYYY-MM-DD>.md`, on `main`, before the chat ends — not at the
start of the next one, and not left in the chat. A copy typed into the
conversation is a convenience for reading; it is never the record. The container
is reclaimed with everything in it, and a summary is not a handoff, so an
uncommitted one is the exact loss a handoff exists to prevent. That is not
hypothetical: the morning handoff of 3 September 2026 was written into a chat and
never committed, and it is gone. Nothing known was lost only because the evening
file said it superseded the morning one and restated what was still open (T-491).

None of the three is a request for a plan or a question back. If something genuinely
cannot be finished at close, it is blocked on the ledger and named in the handoff —
not left for them to remember.
