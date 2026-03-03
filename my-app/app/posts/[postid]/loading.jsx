export default function Loading() {
    return (
        <div className="section-padding">
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="loading-skeleton" style={{ width: '120px', height: '1rem', marginBottom: '2rem' }}></div>
                <div className="loading-skeleton" style={{ width: '400px', height: '3rem', marginBottom: '2rem' }}></div>
                <div className="loading-skeleton" style={{ height: '300px' }}></div>
            </div>
        </div>
    )
}