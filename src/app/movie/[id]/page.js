import MoviesCarousel from "@/components/MoviesCarousel";
import getImagePath from "@/lib/getImagePath";
import { getMovie, getSearchMovies } from "@/lib/getMovies";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params: { id } }) => {
    const movie = await getMovie(id);

    return {
        title: movie.title,
        description: movie.overview,
    };
};


async function MovieDetails({ params: { id } }) {
    if(!id) {
        return notFound();
    }

    const movie = await getMovie(id);

    if(!movie.id) {
        return notFound();
    }

    const titleWords = movie.title.split(' ');

    const termToUse = titleWords[0].length < 3
    ? titleWords.length > 1
        ? titleWords.slice(0, 2).join(' ')
        : titleWords[0]
    : titleWords[0];

    const movies = await getSearchMovies(termToUse);

    return (
        <div className="max-w-7xl mx-auto text-[#F5F5F5]">
            <div className="flex flex-col space-y-8 mt-32 mb-20 px-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-bold">Movie: {movie.title}</h1>
                
                    <h2 className="italic text-base font-semibold line-clamp-3">"{movie.tagline}"</h2>
                </div>

                <p className="font-medium text-base inline">
                    <span className="font-bold mr-1">Genres:</span>

                    {movie.genres?.map((genre, index) => (
                        <div key={genre.id} className="inline">
                            <Link 
                                href={`/genre/${genre.id}?genre=${genre.name}`}
                                className="hover:underline"
                            >
                            {genre.name}
                            </Link>
                            {index < movie.genres.length - 1 && ', '}
                        </div>
                    ))}
                </p>

                <div className="relative">
                    <Image 
                        className="rounded-xl overflow-hidden"
                        src={getImagePath(movie.backdrop_path, true)} 
                        alt='' 
                        width={1920} 
                        height={1080} 
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#1A1C29]" />
                </div>

                <p className="line-clamp-3 text-lg font-medium">{movie.overview}</p>
            </div>

            <MoviesCarousel 
                movies={movies} 
                title={'You may also like'} 
            />
        </div>
    );
}

export default MovieDetails;
