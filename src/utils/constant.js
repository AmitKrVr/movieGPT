export const BG_URL =
    "https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const PROFILE_LOGO =
    "https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const TMDB_MOVIE_SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?query=";

// https://api.themoviedb.org/3/movie/787699/credits?language=en-US

const tmdbAPI = process.env.REACT_APP_AUTHORIZATION_TOKEN;

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: tmdbAPI,
    },
};

// personAPI = "https://api.themoviedb.org/3/person/117642?language=en-US"
//https://developer.themoviedb.org/reference/person-details
