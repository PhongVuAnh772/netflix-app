import React from 'react';
import axios from 'axios';

const apikey = '453a4356643d58f38c56abbf169ccdb6';
const BASE_URL = 'https://api.themoviedb.org/3';
const GENRE_LIST_API_URL = `${BASE_URL}/genre/movie/list?api_key=${apikey}`;
const DISCOVER_API_URL_TEMPLATE = `${BASE_URL}/discover/movie?api_key=${apikey}&with_genres=`;

const apiList = [
  {
    getOnlyOnNetflix: {
      apiUrl: `https://api.themoviedb.org/3/movie/603/watch/providers`,
    },
    getPopular: {
      apiUrl: `https://api.themoviedb.org/3/person/popular`,
    },
    getTrending: {
      apiUrl: `https://api.themoviedb.org/3/trending/all/day`,
    },
    getListByType: {
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=`,
      getData: async function () {
        try {
          const genreResponse = await axios.get(GENRE_LIST_API_URL);
          const genres = genreResponse.data.genres;
          const genreIds = genres.map(genre => genre.id);
          const discoverApiUrls = genreIds.map(
            id => `${DISCOVER_API_URL_TEMPLATE}${id}`,
          );

          for (const url of discoverApiUrls) {
            const response = await axios.get(url);
            const movies = response.data.results;
          }
        } catch (error) {
          console.error(error);
        }
      },
    },
    getTop10: {
      apiUrl: `https://api.themoviedb.org/3/trending/all/day?api_key=${apikey}`,
    },
    //   apiTwo: {
    //     apiUrl: 'https://example.com/api',
    //     postData: function (data) {},
    //   },
  },
];

export default apiList;
