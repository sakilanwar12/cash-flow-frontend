import {
  createApi,
  fetchBaseQuery,
  type FetchBaseQueryError,
  type FetchBaseQueryMeta,
  type QueryReturnValue,
} from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

import type { TRootState } from "..";
import { clientEnv } from "@/config/clientEnv";

type TFetchBaseQueryReturnType = ReturnType<typeof fetchBaseQuery>;

// const baseQuery: TFetchBaseQueryReturnType = fetchBaseQuery({
//   baseUrl: clientEnv.API_BASE_URL as string,
//   prepareHeaders: async (headers, { getState, endpoint }) => {
//     const state = getState() as TRootState;
//     // const token = state?.authSlice?.authInfo?.accessToken;
//     // if (!token) {
//     //   headers.delete("Authorization");
//     //   return headers;
//     // }

//     // headers.set("Authorization", `Bearer ${token}`);

//     return headers;
//   },
// });

// const baseQueryWithReAuth: TFetchBaseQueryReturnType = async (
//   args,
//   api,
//   extraOptions
// ) => {
//   let result: QueryReturnValue<
//     unknown,
//     FetchBaseQueryError,
//     FetchBaseQueryMeta
//   > = await baseQuery(args, api, extraOptions);
//   const { authSlice } = api.getState() as TRootState;

//   const isRefreshTokenExpired =
//     !!authSlice?.authInfo &&
//     !!authSlice?.authInfo?.refreshToken &&
//     !!authSlice?.authInfo?.refreshExpiresAt &&
//     compareDateTimes({
//       providedDateTime: authSlice?.authInfo?.refreshExpiresAt,
//       comparisonUnit: "seconds",
//     })?.status !== "after";

//   if (authSlice?.authInfo !== null && isRefreshTokenExpired) {
//     api.dispatch(logout());
//     api.dispatch(apiSlice?.util?.resetApiState());
//     Cookies.remove("authTokens");
//     Cookies.remove("userInfo");
//   }

//   const isAccessTokenExpired =
//     !!authSlice?.authInfo &&
//     !!authSlice?.authInfo?.accessToken &&
//     !!authSlice?.authInfo?.accessExpiresAt &&
//     compareDateTimes({
//       providedDateTime: authSlice?.authInfo?.accessExpiresAt,
//       comparisonUnit: "seconds",
//     })?.status !== "after";

//   if (
//     result?.error?.status === 401 &&
//     !isRefreshTokenExpired &&
//     isAccessTokenExpired
//   ) {
//     const refreshTokenApiRes = (await baseQuery(
//       {
//         url: "/api/v1/auth/refresh-token",
//         method: "POST",
//         body: {
//           refreshToken: authSlice?.authInfo?.refreshToken,
//         },
//       },
//       api,
//       extraOptions
//     )) as {
//       data: TRefreshTokenRes;
//     };
//     const refreshTokenApiData = refreshTokenApiRes?.data?.data;

//     api.dispatch(
//       updateToken({
//         accessToken: refreshTokenApiData?.accessToken,
//         accessExpiresAt: refreshTokenApiData?.accessExpiresAt,
//       })
//     );
//     result = await baseQuery(args, api, extraOptions);
//     return result;
//   }

//   return result;
// };

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  //   baseQuery: baseQueryWithReAuth,
  baseQuery: fetchBaseQuery({
    baseUrl: clientEnv.API_BASE_URL as string,
  }),
  endpoints: () => ({}),
  tagTypes: [
    // dashboard
  ],
});

export type TApiSlice = typeof apiSlice;
