import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselBanner from "./CarouselBanner";

async function CarouselBannerWrapper({ id, keywords }) {
    const movies = await getDiscoverMovies(id, keywords);

    return (
        <CarouselBanner 
            movies={movies} 
        />
    );
}

export default CarouselBannerWrapper;
