import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params: { id }, searchParams }) => {
    const genre = decodeURI(searchParams.genre);

    return {
        title: `#${id} ${genre}`,
        description: `Genre results for ${genre}`,
    };
};

async function Genre({ params: { id }, searchParams }) {
    if(!id) {
        return notFound();
    }

    const genre = decodeURI(searchParams.genre);

    const movies = await getDiscoverMovies(id);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-4 mt-32 lg:mt-44">
                <h1 className="text-5xl font-bold px-10">Results for {genre}</h1>
    
                <MoviesCarousel 
                    movies={movies} 
                    title={'Movies'} 
                    isVertical
                />
            </div>
        </div>
    );
}

export default Genre;
