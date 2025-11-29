export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1>
                Blog Post
                <p>{ params.slug }</p>
            </h1>
        </main>
    );
}