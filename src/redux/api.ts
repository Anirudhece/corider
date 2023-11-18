import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface ChatData {
    from: string;
    // Add other properties as needed
  }
export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://qa.corider.in/assignment/" }),
  endpoints: (builder) => ({
    getChats: builder.query<ChatData, void>({
      query: () => "chat?page=0",
    }),
  }),
});
export const { useGetChatsQuery } = chatApi;
// chat?page=0
