export const createSearchUrl = (search: string) => `/detail/${encodeURIComponent(search.trim())}`;
