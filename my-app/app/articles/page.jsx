import Link from "next/link"
import Card from "../components/card"

export default function ArticlesPage() {
    const articles = [
        { id: 'artic1', title: 'Getting Started with Next.js', description: 'Learn the fundamentals of Next.js, from routing to server-side rendering, and build your first modern web application.', badge: 'Guide' },
        { id: 'artic2', title: 'Advanced Design Systems', description: 'Explore how to create scalable and maintainable design systems that empower teams to build consistent user interfaces.', badge: 'Design' },
        { id: 'artic3', title: 'Optimizing for Performance', description: 'Discover the latest techniques for maximizing your application performance, including image optimization and code splitting.', badge: 'Performance' }
    ];

    return (
        <div className="section-padding">
            <div className="container">
                <div className="section-title">
                    <span className="badge">Knowledge Hub</span>
                    <h1>Our Articles</h1>
                    <p style={{ color: 'var(--secondary)', maxWidth: '600px', margin: '1rem auto' }}>
                        In-depth guides, case studies, and industry insights from our team of experts.
                    </p>
                </div>

                <div className="grid">
                    {articles.map((article) => (
                        <Link key={article.id} href={`/articles/${article.id}`}>
                            <Card
                                title={article.title}
                                description={article.description}
                                badge={article.badge}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}