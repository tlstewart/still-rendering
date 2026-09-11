export function AboutPage() {
  return (
    <main className="site-shell">
      <div className="page-intro">
        <h1>About Tony</h1>
        <p>A fictional narrator. A real shape of a story a lot of people recognize.</p>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            Tony is a frontend engineer who started this site in late 2023 to write about
            layout bugs and design tokens. Over three years the posts also became a place
            to practice honesty — questioning his sexuality, coming out in stages, and
            noticing how work metaphors (migrations, budgets, focus states) kept sneaking
            into the personal essays.
          </p>
          <p>
            The archive runs from mid-2023 through September 2026. Some entries are pure
            craft. Some are diary. Most are both, because that’s how his weeks actually
            felt.
          </p>
          <p>
            This project is fiction written for empathy and craft practice — not a
            biography of a real person.
          </p>
        </div>
        <aside className="about-aside">
          <p>status: shipping</p>
          <p>stack: React, CSS, too many open tabs</p>
          <p>location: a city with decent coffee</p>
          <p>currently: still rendering</p>
        </aside>
      </div>
    </main>
  )
}
