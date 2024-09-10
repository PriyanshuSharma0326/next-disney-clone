import { notFound } from "next/navigation";

function Genre({ params: { id }, searchParams }) {
    if(!id) {
        return notFound();
    }

    const genre = decodeURI(searchParams.genre);

    return (
        <div>
            <h1>Welcome to id: {id} and genre: {genre}</h1>
        </div>
    );
}

export default Genre;
