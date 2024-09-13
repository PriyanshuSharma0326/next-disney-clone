import { cn } from "@/lib/utils";
import MovieCard from "./MovieCard";

function MoviesCarousel({ movies, title, isVertical }) {
    return (
        <div className="z-50">
            <h2 className="font-bold text-xl px-10 py-2">{title}</h2>

            <div className={cn('flex gap-6 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide', isVertical && 'flex-col space-x-0 space-y-12')}>
                {
                    isVertical ? 
                    (
                        movies?.map(movie => {
                            return (
                                <div 
                                    className={cn(isVertical && 'flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5')} 
                                    key={movie.id} 
                                >
                                    <MovieCard
                                        movie={movie} 
                                    />

                                    <div className="max-w-2xl">
                                        <p className="font-bold">
                                            {movie.title} ({movie.release_date?.split('-')[0]})
                                        </p>

                                        <hr className="mb-3" />

                                        <p>{movie.overview}</p>
                                    </div>
                                </div>
                            )
                        })
                    ) : 
                    (
                        movies?.map(movie => {
                            return (
                                <MovieCard
                                    movie={movie} 
                                    key={movie.id} 
                                />
                            )
                        })
                    )
                }
            </div>
        </div>
    );
}

export default MoviesCarousel;
