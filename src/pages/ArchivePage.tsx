import { getPostsByYear } from '../data/posts'
import { PostList } from '../components/PostList'

export function ArchivePage() {
  const byYear = getPostsByYear()

  return (
    <main className="site-shell">
      <div className="page-intro">
        <h1>Archive</h1>
        <p>
          Eighteen posts across three years — from side-panel confessions to Pride
          at the office. Technical tickets and personal ones, filed together.
        </p>
      </div>
      {byYear.map(({ year, posts }) => (
        <section className="year-block" key={year} aria-labelledby={`year-${year}`}>
          <h2 id={`year-${year}`}>{year}</h2>
          <PostList posts={posts} />
        </section>
      ))}
    </main>
  )
}
