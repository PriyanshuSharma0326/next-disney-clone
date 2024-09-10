import { notFound } from "next/navigation";

function Search({ params: { term } }) {
    if(!term) {
        return notFound();
    }

    const termToUSe = decodeURI(term);

    return (
        <div>
            <h1>Welcome to the search page: {termToUSe}</h1>
        </div>
    );
}

export default Search;
