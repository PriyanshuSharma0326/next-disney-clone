import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params: { term } }) => {
    const termToUse = decodeURI(term);

    return {
        title: `${termToUse}`,
        description: `Search results for ${termToUse}`,
    };
};

async function Search({ params: { term } }) {
    if(!term) {
        return notFound();
    }

    const termToUse = decodeURI(term);

    const movies = await getSearchMovies(termToUse);
    const popularMovies = await getPopularMovies();

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-4 mt-32 lg:mt-44">
                <h1 className="text-5xl font-bold px-10">Results for {termToUse}</h1>

                <MoviesCarousel 
                    movies={movies} 
                    title={'Movies'} 
                    isVertical
                />

                <MoviesCarousel 
                    movies={popularMovies} 
                    title={'You may also like'} 
                />
            </div>
        </div>
    );
}

export default Search;
