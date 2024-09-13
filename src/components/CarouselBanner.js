'use client'

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import getImagePath from '@/lib/getImagePath';

// Autoplay.globalOptions = {
//     delay: 8000
// }

function CarouselBanner({ movies }) {
    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [Autoplay()]);

    return (
        <div ref={emblaRef} className='overflow-hidden lg:-mt-40 relative cursor-pointer'>
            <div className="">
                {movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            {'hello'}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CarouselBanner;
