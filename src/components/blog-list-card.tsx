import { Link } from "gatsby"
import React from "react"

export class BlogListCard extends React.Component<any> {
    render() {
        let { post } = this.props

        return (
            <div className="blog-post-card">
                <Link to={post.slug}>
                    <div className="blog-post-card-header">
                        <h2>{post.title}</h2>
                        <p className="blog-post-card-date">{post.date}</p>
                    </div>

                    <p className="blog-post-card-excerpt">{post.excerpt}</p>
                </Link>
            </div>
        )
    }
}
