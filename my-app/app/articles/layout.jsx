
export const metadata = {
    title: 'Articles | Blog'
}

export default function ArticlesLayout({ children }) {
    return (
        <section className="section-padding">
            <div className="container">
                {children}
            </div>
        </section>
    );
}