const NotFoundPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>User Not Found</h1>
            <p>The profile you are looking for does not exist.</p>
            <a href="/" style={{ color: '#0070f3', textDecoration: 'none', fontSize: '1.2rem' }}>Go Back Home</a>
        </div>
    )
}

export default NotFoundPage
