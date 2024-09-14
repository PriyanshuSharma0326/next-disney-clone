import MoviesCarousel from "@/components/MoviesCarousel";
import getImagePath from "@/lib/getImagePath";
import { getMovie, getPopularMovies } from "@/lib/getMovies";
import Image from "next/image";

async function MovieDetails({ params: { id } }) {
    if(!id) {
        return notFound();
    }

    const movie = await getMovie(id);
    const popularMovies = await getPopularMovies();

    return (
        <div className="max-w-7xl mx-auto text-[#121212] dark:text-[#F5F5F5]">
            <div className="flex flex-col space-y-8 mt-32 mb-20 px-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-bold">Movie: {movie.title}</h1>
                
                    <h2 className="italic text-base font-semibold line-clamp-3">{movie.tagline}</h2>
                </div>

                <p className="font-medium text-base"><span className="font-bold">Genres:</span> {movie.genres.map(genre => genre.name).join(', ')}</p>

                <div className="relative">
                    <Image 
                        className="rounded-xl overflow-hidden"
                        src={getImagePath(movie.backdrop_path, true)} 
                        alt='' 
                        width={1920} 
                        height={1080} 
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
                </div>

                <p className="line-clamp-3 text-lg font-medium">{movie.overview}</p>
            </div>

            <MoviesCarousel 
                movies={popularMovies} 
                title={'You may also like'} 
            />
        </div>
    );
}

export default MovieDetails;
