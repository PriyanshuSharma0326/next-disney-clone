async function fetchFromTMDB(urlString, cacheTime) {
    const url = new URL(urlString);

    url.searchParams.set('include_adult', 'false');
    url.searchParams.set('include_video', 'false');
    url.searchParams.set('sort_by', 'popularity.desc');
    url.searchParams.set('language', 'en-US');
    url.searchParams.set('page', '1');

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next: {
            revalidate: cacheTime || 60 * 60 * 24,
        }
    }

    const response = await fetch(url.toString(), options);
    const data = await response.json();

    return data;
}

export async function getUpcomingMovies() {
    const url = 'https://api.themoviedb.org/3/movie/upcoming';
    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getTopRatedMovies() {
    const url = 'https://api.themoviedb.org/3/movie/top_rated';
    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getPopularMovies() {
    const url = 'https://api.themoviedb.org/3/movie/popular';
    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getNowPlayingMovies() {
    const url = 'https://api.themoviedb.org/3/movie/now_playing';
    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getDiscoverMovies(id, keywords) {
    const url = new URL('https://api.themoviedb.org/3/discover/movie');

    keywords && url.searchParams.set('with_keywords', keywords);
    id && url.searchParams.set('with_genres', id);

    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getSearchMovies(term) {
    const url = new URL('https://api.themoviedb.org/3/search/movie');
    
    url.searchParams.set('query', term);

    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getMovie(id) {
    const url = new URL(`https://api.themoviedb.org/3/movie/${id}`);

    url.searchParams.set('include_video', 'true');

    const data = await fetchFromTMDB(url);
    return data;
}
