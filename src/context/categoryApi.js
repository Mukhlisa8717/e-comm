import { api } from "./api";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: (params) => ({
        url: `products/categories`,
        method: "GET",
        params,
      }),
      providesTags: [""],
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
