import { Link } from 'react-router-dom'
import { getSortedPosts } from '../data/posts'
import { PostList } from '../components/PostList'

export function HomePage() {
  const latest = getSortedPosts().slice(0, 6)

  return (
    <main>
      <section className="hero site-shell" aria-labelledby="hero-brand">
        <div className="hero-visual" aria-hidden="true" />
        <div className="hero-content">
          <h1 className="hero-brand" id="hero-brand">
            Still <em>Rendering</em>
          </h1>
          <p className="hero-lead">
            Tony’s three-year log of frontend work, half-finished feelings, and
            learning to ship the truth in small releases.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#latest">
              Read the latest
            </a>
            <Link className="btn btn-ghost" to="/archive">
              Browse 2023–2026
            </Link>
          </div>
        </div>
      </section>

      <section className="section site-shell" id="latest" aria-labelledby="latest-heading">
        <div className="section-head">
          <div>
            <h2 id="latest-heading">Latest entries</h2>
            <p>CSS bugs, dating apps, a11y reviews, and the slow compile of coming out.</p>
          </div>
          <Link to="/archive">Full archive →</Link>
        </div>
        <PostList posts={latest} />
      </section>
    </main>
  )
}
