import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mockApi = createApi({
  reducerPath: 'mockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6299936c7b866a90ec3e0000.mockapi.io/movies/',
  }),
  endpoints: (builder) => ({
    getMockData: builder.query({
      query: (type) => `${type}/`,
      }),
      getMockDataById: builder.query({
        query: (id) => `movies/${id}`,
        }),
  }),
});

export const { useGetMockDataQuery } = mockApi;
export const { useGetMockDataByIdQuery } = mockApi
