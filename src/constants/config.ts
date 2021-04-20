const baseUrl = () => 'http://api.tvmaze.com';

export const allShows = () => baseUrl() + '/shows';

export const showsBasedOnTerm = (searchTerm: string) => baseUrl() + `/search/shows?q=${searchTerm}`;

export const resultsPageUrl = (searchTerm: string, pageIndex: number) => `/search-results?SearchTerm=${searchTerm}&PageIndex=${pageIndex}`;

export const showEpisodes = (showId: string) => baseUrl() + `/shows/${showId}/episodes`;

export const singleShow = (showId: string) => baseUrl() + `/shows/${showId}`;

export const  headers = { accept: 'application/json, text/plain, */*', 'accept-language': 'en-US,en;q=0.9', 'content-type': 'application/json;charset=UTF-8'}