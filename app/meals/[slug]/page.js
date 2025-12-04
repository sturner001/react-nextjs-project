export default function MealsPostPage({ params }) {
    return (
        <main>
            <h1>
                Meals Post page
                <p>{ params.slug }</p>
            </h1>
        </main>
    );
}