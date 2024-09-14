import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";

async function Home() {
    const upcomingMovies = await getUpcomingMovies();
    const topRatedMovies = await getTopRatedMovies();
    const popularMovies = await getPopularMovies();
    const nowPlayingMovies = await getNowPlayingMovies();

    return (
        <div>
            <CarouselBannerWrapper />

            <div className="flex flex-col gap-2 xl:mt-20">
                <MoviesCarousel 
                    movies={nowPlayingMovies} 
                    title={'Now Playing'} 
                />

                <MoviesCarousel 
                    movies={popularMovies} 
                    title={'Popular'} 
                />

                <MoviesCarousel 
                    movies={topRatedMovies} 
                    title={'Top Rated'} 
                />
                
                <MoviesCarousel 
                    movies={upcomingMovies} 
                    title={'Upcoming'} 
                />
            </div>
        </div>
    );
}

export default Home;
