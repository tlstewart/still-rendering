import { Link, useParams } from 'react-router-dom'
import { getPost, getSortedPosts } from '../data/posts'

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}

function renderBody(body: string) {
  return body
    .trim()
    .split(/\n\n+/)
    .map((paragraph) => {
      const html = paragraph
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
      return html
    })
}

export function PostPage() {
  const { slug } = useParams()
  const post = slug ? getPost(slug) : undefined
  const sorted = getSortedPosts()
  const index = post ? sorted.findIndex((p) => p.slug === post.slug) : -1
  const newer = index > 0 ? sorted[index - 1] : undefined
  const older = index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : undefined

  if (!post) {
    return (
      <main className="site-shell page-intro">
        <h1>Post not found</h1>
        <p>
          That entry isn’t in the archive. <Link to="/archive">Browse all posts</Link>.
        </p>
      </main>
    )
  }

  return (
    <main className="site-shell">
      <article className="article">
        <div className="article-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <h1>{post.title}</h1>
        <div className="article-body">
          {renderBody(post.body).map((html, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
          ))}
        </div>
        <nav className="article-nav" aria-label="Adjacent posts">
          <p>
            <Link to="/archive">← Archive</Link>
          </p>
          {newer ? (
            <p>
              Newer: <Link to={`/post/${newer.slug}`}>{newer.title}</Link>
            </p>
          ) : null}
          {older ? (
            <p>
              Older: <Link to={`/post/${older.slug}`}>{older.title}</Link>
            </p>
          ) : null}
        </nav>
      </article>
    </main>
  )
}
