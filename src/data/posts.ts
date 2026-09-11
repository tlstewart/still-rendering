export type PostTag = 'frontend' | 'personal' | 'mixed'

export type Post = {
  slug: string
  title: string
  date: string
  year: number
  tags: PostTag[]
  excerpt: string
  body: string
}

export const posts: Post[] = [
  {
    slug: 'hello-from-the-side-panel',
    title: 'Hello from the side panel',
    date: '2023-10-08',
    year: 2023,
    tags: ['mixed'],
    excerpt:
      'I started this blog to write about CSS layout bugs. It may also become a place where I say the quieter things out loud.',
    body: `I almost named this site after my component library. That felt too neat, too finished. So: **Still Rendering**.

I'm Tony. I write frontend for a SaaS product that sells "clarity" while shipping features that make the UI denser every sprint. By day I argue about z-index. By night I reopen the same three browser tabs and pretend I'm researching animation libraries.

I keep meaning to write technical posts. How we migrated off Create React App. Why our design tokens disagree with Figma. Why accessibility reviews always land on Friday.

But I also keep meaning to write about the other half — the part where I laugh too hard at a coworker's joke and then spiral for an hour wondering what that means. The part where dating apps feel like staging environments I never promote.

This might be both. If you're here for CSS, stay. If you're here because something in you is also unfinished, stay too.`,
  },
  {
    slug: 'flexbox-and-other-evasions',
    title: 'Flexbox and other evasions',
    date: '2023-11-19',
    year: 2023,
    tags: ['frontend'],
    excerpt:
      'A sprint story about a broken toolbar, justify-content, and how I use hard problems to avoid softer ones.',
    body: `We shipped a new toolbar that looked fine in Chrome and quietly collapsed in Safari. Classic.

The bug was \`min-width: auto\` on a flex child wrapping a long email address. I spent four hours proving it, writing a reduced case, and posting a Slack thread so thorough it could've been a conference talk.

My lead said, "Nice catch." I felt useful. Useful is easy.

What's harder: answering my sister when she asks if I'm bringing anyone to Thanksgiving. I told her work is busy. Technically true. Also: I don't know who "anyone" would even be yet, or which version of me would introduce them.

I fixed the toolbar. I did not fix the RSVP.`,
  },
  {
    slug: 'pride-month-as-a-bystander',
    title: 'Pride month as a bystander',
    date: '2023-06-14',
    year: 2023,
    tags: ['personal'],
    excerpt:
      'Our company Slack filled with rainbows. I reacted to every message and said nothing about myself.',
    body: `This post is backdated because I wrote it in a notes app in June and couldn't publish it then.

HR sent a Pride channel invite. People posted photos from marches. Someone shared a thread about coming out at thirty-two. I read it three times on the train.

I added :rainbow: to messages like a person who belongs in the room. Then I went to standup and talked about skeleton loaders.

I don't think I'm lying exactly. I think I'm buffering. There's a difference between "not yet" and "never," and I keep treating my life like a progressive enhancement: core experience first, identity later if the connection holds.

June ended. The channel went quiet. I still have the draft.`,
  },
  {
    slug: 'design-tokens-at-2am',
    title: 'Design tokens at 2 a.m.',
    date: '2024-01-07',
    year: 2024,
    tags: ['mixed'],
    excerpt:
      'Renaming --color-primary while a dating app notification sits unread on my phone.',
    body: `We finally renamed \`--brand-blue\` to \`--color-action\`. It took three meetings, one RFC, and a migration script that touched 214 files.

I did the script on a Saturday night because quiet hours are when I write the careful code. My phone buzzed: a match from an app I downloaded "just to see." His bio mentioned vinyl and sourdough. Normal. Terrifying.

I stared at the notification until the screen dimmed. Then I went back to tokens. Tokens are honest. You change a name, the system updates, the UI reflects it. People are not design systems. You can rename yourself in private for years and nothing externally recompiles.

I archived the match without opening it. Merged the PR on Monday. Got praise in standup. The dual life continues, neatly versioned.`,
  },
  {
    slug: 'a11y-reviews-and-eye-contact',
    title: 'A11y reviews and eye contact',
    date: '2024-02-22',
    year: 2024,
    tags: ['frontend'],
    excerpt:
      'Keyboard focus rings taught me more about being seen than any self-help thread.',
    body: `I spent a week auditing our modal dialogs. Escape to close. Focus trap. Visible focus styles that design kept wanting to remove because they were "ugly."

I pushed back. If you can't see where you are, you can't move with confidence.

That sentence sat with me longer than the ticket did.

I've been practicing saying "I" sentences in therapy. Short ones. "I am scared." "I am curious." "I might be gay, or bi, or something with a longer loading state." My therapist doesn't flinch. The focus ring stays on me, and I hate it, and also I need it.

Shipped the focus styles. Kept the ugly ring. Some visibility is non-negotiable.`,
  },
  {
    slug: 'the-pride-sticker-on-my-laptop',
    title: 'The pride sticker on my laptop',
    date: '2024-04-03',
    year: 2024,
    tags: ['personal'],
    excerpt:
      'I bought one. I put it on the inside of the lid. That counts as a deploy to staging.',
    body: `There's a sticker shop two blocks from the office. I walked past it for months. Then I went in on a lunch break like I was buying batteries.

I chose a small progress flag. Not huge. Not a proclamation. I stuck it on the inside of my laptop lid so it faces me in cafes and faces the ceiling in meeting rooms.

Coworkers don't see it unless I open the machine toward them. Most of the time it's a private compile flag: \`feature/identity\` enabled for local development only.

I know how cautious that sounds. I also know last year I wouldn't have bought it at all.

Small releases still ship.`,
  },
  {
    slug: 'react-server-components-confusion',
    title: 'React Server Components confusion (the technical kind)',
    date: '2024-05-18',
    year: 2024,
    tags: ['frontend'],
    excerpt:
      'Our team tried to explain RSC in a brown bag. I took notes. Some of them were actually about React.',
    body: `We spent an hour drawing boxes: server tree, client boundary, suspense, serialization. Someone asked whether a component can be "a little bit client." The room laughed. The answer was basically no — you choose a boundary and live with it.

Afterward I kept thinking about boundaries. How much of a person you can keep on the server (private, unshipped) before the client needs the data to render a coherent UI.

Not everything belongs in the initial payload. But if you never send the important bits, the page stays a shell.

Anyway: we're prototyping a docs site with a server-first layout and islands for the interactive bits. I'll write a real deep dive once I stop mixing metaphors.`,
  },
  {
    slug: 'drinks-after-work',
    title: 'Drinks after work',
    date: '2024-07-09',
    year: 2024,
    tags: ['personal'],
    excerpt:
      'Jordan from design asked if I wanted to grab a beer. I said yes before my brain could invent a deploy.',
    body: `Jordan is kind in a way that makes me nervous. Not flirtatious — just present. We talked about type scales and then somehow about hometowns and then about how weird it is to be almost thirty and still editing your about-me paragraph.

I almost said: I've been rewriting mine for years and never publishing.

Instead I asked about their dog. Safe topic. Dogs don't require coming out.

Walking home I replayed the hour like a failed interaction test. Did I stand too close? Did I laugh wrong? Was any of it a signal, or am I pattern-matching ghosts onto neutral UI?

I don't know. I do know I didn't cancel. That used to be my default click handler.`,
  },
  {
    slug: 'css-anchor-positioning',
    title: 'CSS anchor positioning and saying the quiet part',
    date: '2024-09-02',
    year: 2024,
    tags: ['mixed'],
    excerpt:
      'New CSS APIs let tooltips attach to triggers. I told my brother something true for the first time.',
    body: `Anchor positioning is delightful. You declare a relationship instead of measuring the viewport with JavaScript and praying. The tooltip knows where it belongs because you named the connection.

I called my brother on a Sunday. We usually talk sports and mom's garden. I said, "I've been figuring some stuff out. About who I like. It's not only women. I don't have a clean label yet."

Silence. Then: "Okay. Thanks for telling me." Then a joke about how I over-explain everything, including this.

No explosion. No perfect speech from me either. Just a named relationship where there used to be inferred layout.

The tooltip still needs styling. But it's attached.`,
  },
  {
    slug: 'performance-budgets',
    title: 'Performance budgets',
    date: '2024-11-11',
    year: 2024,
    tags: ['frontend'],
    excerpt:
      'We set a 150kb gzipped JS budget. I learned what I overload when nobody is watching.',
    body: `Our Lighthouse scores slipped after we added three analytics scripts and a date library the size of a small novel. I wrote a budget check into CI. PRs that bust the number fail loudly.

Constraints make better interfaces. They also make better weeks. I started applying a softer budget to my evenings: no more than one hour of anxious scrolling about identity forums; at least one hour of something that isn't evaluation — cooking, walking, calling a friend.

I still exceed both budgets. CI doesn't page me for that yet.`,
  },
  {
    slug: 'new-years-without-a-resolution-label',
    title: "New Year's without a resolution label",
    date: '2025-01-01',
    year: 2025,
    tags: ['personal'],
    excerpt:
      'I stopped needing the perfect word before I could live closer to the truth.',
    body: `People love a label. Gay. Bi. Queer. Pan. Questioning. Each one feels like a commit message that might be wrong forever.

This year I'm trying "in progress" as an honest status. Not as avoidance — as accuracy. I date men now, carefully. I still notice women. I came out to my brother. I have not come out to my parents. I have a sticker inside a laptop and a blog that half-admits things.

Frontend taught me that \`null\` and \`undefined\` are different. Not knowing yet isn't the same as empty. It's a value. It deserves a type.

Happy New Year. Still rendering.`,
  },
  {
    slug: 'design-system-breaking-changes',
    title: 'Design system breaking changes',
    date: '2025-02-20',
    year: 2025,
    tags: ['frontend'],
    excerpt:
      'We deprecated Button legacy variants. Migration guides are love letters to future teammates.',
    body: `Deprecations are awkward social work. You mark something \`@deprecated\`, leave it working, and write a guide that says: here's what to use instead, here's why, here's how long you have.

I drafted ours with more empathy than our last one. Old patterns aren't moral failures. They're earlier decisions that got us here.

I've been applying that tone to myself. Old silences got me through college, first jobs, family holidays. They were adaptive. They're also becoming expensive to maintain.

Migration doesn't have to be a big-bang rewrite. Parallel run is allowed.`,
  },
  {
    slug: 'telling-maya',
    title: 'Telling Maya',
    date: '2025-04-16',
    year: 2025,
    tags: ['personal'],
    excerpt:
      'My closest friend already knew, which is both humiliating and the softest landing.',
    body: `Maya and I have been friends since the bootcamp where we both cried over Redux. I told her over dumplings. Full sentence. Eye contact. No joke to soften the landing.

She said, "Tony. I've had a draft reply ready since 2022."

I laughed until I got quiet. Being readable to someone else before you're readable to yourself is a strange gift. She didn't push me. She just kept the door unlocked.

We talked about a guy from a meetup I'd mentioned too casually. She filed that under Exhibit C.

I walked home lighter. Not finished — lighter.`,
  },
  {
    slug: 'typescript-narrowing',
    title: 'TypeScript narrowing',
    date: '2025-06-03',
    year: 2025,
    tags: ['mixed'],
    excerpt:
      'Discriminated unions make illegal states unrepresentable. Coming out is the opposite art.',
    body: `I love when a type forces honesty. If \`status\` is \`"loading" | "ready" | "error"\`, you can't pretend you're ready while holding an error. The compiler is a blunt therapist.

Human identity is not a discriminated union. You can be scared and sure. Curious and grieving. Dating and still explaining yourself to yourself.

I told my parents last month. It was not a clean narrow. Mom cried. Dad asked practical questions like I'd announced a cross-country move. There were follow-ups. There will be more.

I used to think coming out was one function call. It's more like incremental adoption — a flag rolled out to 10%, then 50%, then everyone who needs the new UI.

Parents: shipped. Work: still behind a feature flag. That's okay.`,
  },
  {
    slug: 'the-first-date-that-felt-like-prod',
    title: 'The first date that felt like prod',
    date: '2025-08-21',
    year: 2025,
    tags: ['personal'],
    excerpt:
      'Coffee with Eli. No staging excuses. Just two people and a slightly shaking cup.',
    body: `Eli works adjacent to tech but mercifully not in it. He asked what I build. I said interfaces for people who are tired. He smiled like that was a real answer.

I didn't monologue about sexuality. I didn't apologize for existing. We talked about cities we'd leave and cities we'd return to. When he texted later — "this was easy in a good way" — I sat on my kitchen floor and cried the way you do after a deploy that finally goes green.

Not every date will be easy. This one proved easy is possible.`,
  },
  {
    slug: 'view-transitions-api',
    title: 'View Transitions API',
    date: '2025-10-12',
    year: 2025,
    tags: ['frontend'],
    excerpt:
      'Animating state changes without a JavaScript choreography library. Continuity as a feature.',
    body: `We're experimenting with view transitions on our settings pages. Same DOM story, better continuity when the layout shifts. Users feel less like they teleported.

Continuity is underrated in product and in life. The Tony who couldn't open a dating notification and the Tony who texts Eli good morning are not two apps. They're one session with better transitions.

I still flinch sometimes. The animation doesn't delete the old frame; it carries you through.

Shipped a prototype Friday. Demoed it poorly because I was happy about something else entirely.`,
  },
  {
    slug: 'pride-at-the-office-for-real',
    title: 'Pride at the office, for real',
    date: '2026-06-08',
    year: 2026,
    tags: ['mixed'],
    excerpt:
      "I wore the shirt. I said the sentence in the allies channel. Nobody's UI broke.",
    body: `Three years ago I emoji-reacted from the sidelines. This year I moderated a lunch panel on queer folks in tech and admitted, casually, that I am one of them.

Casually is doing a lot of work in that sentence. My voice shook on the first clause. Then an intern thanked me for saying it. Then we talked about inclusive form fields — preferred name, pronouns optional but respected, no forced binary on gender when it isn't required for the feature.

It felt like the technical and the personal finally shared a branch.

Still scared sometimes. Less alone in the file tree.`,
  },
  {
    slug: 'three-years-of-open-tabs',
    title: 'Three years of open tabs',
    date: '2026-09-10',
    year: 2026,
    tags: ['mixed'],
    excerpt:
      'A look back at the bugs I fixed, the people I told, and the self I stopped treating like a draft PR.',
    body: `I started this blog thinking I'd write about flexbox and accidentally document a coming out. Both happened. The archive is a mess of CI notes and heart notes, which is to say: accurate.

What I know now:

- Labels help, and they aren't homework you fail.
- Frontend work gave me language for boundaries, budgets, migrations, and visibility — not as metaphors to hide behind forever, but as training wheels until I could speak plainly.
- The people who love you would often rather have the unfinished truth than the polished silence.
- You can ship personal truth the way you ship software: iteratively, with rollback plans, without waiting for perfect coverage.

Eli and I are still figuring out our own layout. Work is fine; I'm staff-track curious and tired of heroics. My parents are learning. Maya still says she knew.

If you're reading this in the middle of your own unfinished render: you don't owe the internet a timeline. You don't owe anyone a keynote. You can fix a toolbar and also save a draft about your life and publish it when the build passes enough tests for *you*.

Thanks for being here across three years of noise.

— Tony

P.S. The site is still called Still Rendering. I considered renaming it to something resolved. Then I remembered resolution isn't the same as honesty. Some UIs stay alive because they keep updating.`,
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getPostsByYear(): { year: number; posts: Post[] }[] {
  const years = [...new Set(posts.map((p) => p.year))].sort((a, b) => b - a)
  return years.map((year) => ({
    year,
    posts: posts
      .filter((p) => p.year === year)
      .sort((a, b) => b.date.localeCompare(a.date)),
  }))
}

export function getSortedPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}
