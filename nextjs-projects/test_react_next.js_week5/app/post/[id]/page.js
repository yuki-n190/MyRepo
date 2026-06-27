export default async function PostPage({ params }) {
    const { id } = await params;
    return <h1>記事ID: {id}</h1>;
}