import React from "react";
import { QueryClient } from "react-query";

const client = new QueryClient({
    // defaultOptions: {
    //     queries: {
    //         staleTime: 1000,
    //         cacheTime: 2000
    //     }
    // }
})

export default client 