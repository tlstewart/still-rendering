import { Link } from 'react-router-dom'
import type { Post } from '../data/posts'

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link className="post-link" to={`/post/${post.slug}`}>
            <time className="post-date" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <div>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="tag-row">
                {post.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
