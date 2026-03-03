import Link from "next/link";

export default async function ShowArticle({ params }) {
    const { title } = await params;

    return (
        <div className="section-padding">
            <div className="container" style={{ maxWidth: '800px' }}>
                <Link href="/articles" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--secondary)', marginBottom: '2rem' }}>
                    <svg style={{ marginRight: '0.5rem', width: '16px', height: '16px', transform: 'rotate(180)deg' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Back to Articles
                </Link>

                <span className="badge">Featured Article</span>
                <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', textTransform: 'capitalize' }}>{title.replace(/-/g, ' ')}</h1>

                <div className="card" style={{ cursor: 'default', padding: '2.5rem' }}>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                        This is a detailed view for the article: <strong>{title}</strong>.
                    </p>
                    <p>
                        In a real application, this content would be fetched from a database or CMS. For this demo, we are showcasing a clean, readable layout optimized for long-form content. The typography is balanced, and the spacing allows the reader to focus on the message without distraction.
                    </p>
                    <div style={{ height: '200px', background: '#f1f5f9', borderRadius: 'var(--radius)', marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#94a3b8' }}>Article Image Placeholder</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
