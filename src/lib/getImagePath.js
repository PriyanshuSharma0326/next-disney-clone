const getImagePath = (imagePath, fullSize) =>  {
    if(!imagePath) return '/placeholder.png';

    const size = fullSize ? 'original' : 'w500';

    return `https://image.tmdb.org/t/p/${size}${imagePath}`;
}

export default getImagePath;
