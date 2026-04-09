# CLAUDE.md

Guidance for Claude Code when working in this repo.

## Project overview

Gatsby-based personal website and blog for Priyanshu Jain (pjay.in). Static React site. Most work here is adding or editing blog posts — see the **Writing blog posts** section below for the full guide, which is the most important part of this file.

## Repo layout

- `src/pages/writings/<slug>.js` — blog posts, one React component per post
- `src/pages/writings/index.js` — manually maintained listing of all posts, newest first
- `src/pages/writings/template.js` — scaffold to copy when starting a new post
- `src/pages/` — other top-level pages
- `src/components/` — `layout/`, `seo.js`, `home.js` (exports `SectionBox`), etc.
- `static/` — images and assets, served at site root (`static/foo.png` → `/foo.png`)
- `public/` — Gatsby build output, ignore when checking git status

No markdown processing. Blog content is written directly as JSX text inside a single `<p>` tag with `<br /><br />` between paragraphs.

## Operating rules

- Do NOT run `npm run develop`, `npm run build`, `npm run serve`, or the deploy script unless explicitly asked. The user runs the dev server themselves.
- Do NOT commit. The user commits.
- There is no test framework; do not try to add one.
- Prettier is used for formatting. Match the style of surrounding files.

## Writing blog posts

**READ THIS SECTION FIRST** any time the user asks to add, write, draft, or edit a blog post. This captures the author's voice and the mechanical setup. Getting the voice wrong wastes many rounds of edits.

### Step 1: internalize the voice before drafting

Before writing a single sentence, read at least two existing recent posts in full. These are the canonical style references:

- `src/pages/writings/writing-tests-with-coding-agents.js` — the primary reference for tone, length, and cadence
- `src/pages/writings/babysitting-coding-agents.js` — another good reference
- `src/pages/writings/ai-coding.js` — for "How I X" framing

Do not skip this step. The voice is specific and not obvious from a generic "write a blog post" prompt.

### Step 2: voice rules

**Length.** Target 400–700 words. Some posts are shorter. Posts over ~1000 words are almost certainly over-written and should be cut. If the draft is 1500+ words, start over, do not trim.

**Sentences.** Plain, direct, short. Each paragraph is 2–5 sentences. One idea per paragraph.

**Structure.** Flowing paragraphs that move from idea to idea. NOT a narrative story. NOT a "journey of discovery". NOT "first I tried X, then I realized Y, then everything clicked". Flow means each paragraph naturally leads to the next because the ideas connect, not because of a timeline.

**No headings or subheadings inside the post body.** The only heading is the post title, rendered by `SectionBox`. The body is a single `<p>` with `<br /><br />` between paragraphs.

**No bullet lists in the post body.** None of the existing posts use bullets. If the draft wants to list things, rewrite as prose.

**No em dashes** (`—`). Use periods, commas, or parentheses. Hyphens in compound words are fine.

**Pronouns.**
- First person "I" is the default voice.
- "you" and "we" are OK in the author's normal voice (see existing posts) BUT the user will sometimes explicitly ask to drop one or both. Always confirm or check recent instructions.
- Never use "we" to imply a team — the author writes as an independent developer, not on behalf of a company or group.

**Tone.** Opinionated but not academic. Conversational but not chatty. Direct claims, not hedged framings. Avoid:
- "The mental model that clicked for me..."
- "One thing I've come to realize..."
- "It turns out that..."
- "The thing is..."
- "Interestingly..."
- "I've been thinking about..."
- Any opening that sounds like a LinkedIn reflection post.

Prefer direct statements of position like: "Testing agents is weird.", "My approach is X.", "Naming is hard.", "Inventing imaginary failures upfront is usually wasted effort."

**No teaching, no lecturing.** The author is sharing opinions and experiences, not instructing anyone. Avoid "You should...", "The key is to...", "Always remember to...". State what the author does and why.

**No summaries at the end.** The existing posts do not wrap up with "In summary..." or "To recap...". They just end, often with a short punchy closing line.

**No implementation-specific noise** when the topic is a general idea. Do not drop in env var names, specific file paths, specific function names, specific frameworks, or codebase identifiers unless the post is explicitly about that specific thing. Ground the ideas in plain language examples ("a retry wrapper", "an email lookup") rather than real symbol names from some private project.

### Step 3: title selection

Titles on this blog follow a few patterns. Match one of them:

- **Punchy declarative**: "Software bugs", "Naming is hard", "Developers Hate JIRA", "Testing agents is weird"
- **Opinion as claim**: "Prediction is not intelligence", "Tokens != intelligence", "Writing tests with coding agents is a bad idea"
- **Personal "How I X"**: "How I Code with AI" (use sparingly)
- **Question**: "Why Chrome?", "Why do we still need to babysit coding agents?"
- **Contrastive**: "Pilot vs Production with LLMs"

Avoid titles that sound like LinkedIn headers: "How I think about X", "My approach to X", "A layered approach to X", "Thoughts on X". These are weak and the user will push back.

Propose 3–5 title options and let the user pick before writing the body.

### Step 4: file creation

Blog post files:

- Path: `src/pages/writings/<kebab-case-slug>.js`
- Copy the structure from `src/pages/writings/writing-tests-with-coding-agents.js` or `src/pages/writings/template.js`
- Required pieces: `Layout`, `SEO` (with `title`, `description`, optional `image`), `SectionBox` heading, single `<p>` body with `<br /><br />` paragraph breaks
- The body `<p>` uses `className="ma0 pa0 pl5 pr5 mt4 f4 f3-ns sig-grey"`
- The `SectionBox` heading uses `headingClass="ma0 pa0 f2 f-headline-ns sig-blue fw-600"`

If the post has an inline image (most posts do NOT), put it in a `<div className="tc mt4 pl5 pr5">` wrapper with an `<img>` tag using `style={{ maxWidth: "100%", height: "auto" }}`, placed BEFORE the body `<p>`. Do not put `<img>` inside `<p>`, that's invalid HTML.

### Step 5: index listing

`src/pages/writings/index.js` is a manually maintained listing. After creating a post file, add a new `<a>` entry at the TOP of the recent writings list (it's ordered newest first). Copy the format of the existing entries:

```jsx
<a
  className="primary-text-color ma0 pa0 f5 mr6 fw-bold"
  href="/writings/<slug>"
>
  <h4 className="f3 ma0 flex-l justify-between">
    <p className="left fit-content"><title></p>
    <p className="tertiary-text-color tl"><Month DD, YYYY></p>
  </h4>
</a>
```

The href has NO trailing slash. The date format is `Mon DD, YYYY` (e.g. `Apr 08, 2026`).

### Step 6: images and diagrams

If the post needs a hero/social image or an inline diagram:

- Put the image at `static/<slug>.png` (or `.jpg`)
- Reference as `/<slug>.png` in both `SEO image` and any inline `<img src>`
- For hand-drawn diagrams use `skrawl` (installed at `/Users/pj/.nvm/versions/node/v25.5.0/bin/skrawl`) with an Excalidraw JSON source. Render: `skrawl source.excalidraw -o output.png -s 2 -p 60`
- Excalidraw font families: 1 = Virgil (hand-drawn, default — usually what the user wants), 2 = Helvetica, 3 = Cascadia. Do not silently switch away from Virgil.
- Excalidraw text with `containerId` auto-centers inside a rectangle. Free-floating text (no containerId) is left-aligned at `x` and ignores `textAlign`.
- When rendering, the Read tool previews may crop edges for display — verify the actual file with `sips -g pixelWidth -g pixelHeight <file>.png` before assuming the render is wrong.

### Step 7: verify before handing off

- Run `node -e "require('@babel/parser').parse(require('fs').readFileSync('src/pages/writings/<slug>.js','utf8'),{sourceType:'module',plugins:['jsx']}); console.log('OK')"` to syntax-check the new file.
- Same check for `src/pages/writings/index.js` after editing.
- Do NOT run `npm run develop` or build commands. The user has the dev server running already.
- Do NOT commit. The user commits.

### Anti-patterns that wasted rounds of edits in the past

1. **Writing a long essay instead of a blog post.** The author's posts are tight. A 2000-word "comprehensive overview" is always wrong, even if the topic is complex. Cut.
2. **Narrative framing.** "The habits I had kept letting me down, but then I discovered..." reads like a story. The author writes flat direct claims, not narratives.
3. **Academic framing.** "Inspired by the bounded context pattern from domain driven design, each layer has its own perspective..." is documentation. Shorten and say it plainly: "This is borrowed from domain driven design, specifically the bounded context pattern."
4. **Codebase specifics in a general post.** Dropping `OBK_TEST_PROVIDER`, `spectest/local_fixture.go`, `TestProvider_AgentToolExecution` into a post about "how I test agents" is wrong. Those belong in private engineering docs, not on the author's blog.
5. **Weak LinkedIn-style titles.** "How I think about testing agents" will be rejected. Propose alternatives first.
6. **Headings inside the body.** The post body is prose. No `<h2>`, no bold section breaks, no bullet lists.
7. **Em dashes.** They slip in via autocomplete. Check the draft before handing off.
8. **Over-editing the diagram without checking.** If a diagram already works, minimal targeted edits beat rewrites. The Read tool's image preview crops — trust `sips` dimensions over visual inspection.
