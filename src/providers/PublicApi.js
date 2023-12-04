"use server"

import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query'
import apiFetch from './apiFetch'


export default async function PublicApi({endpoint, children}) {

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(apiFetch(endpoint))

    return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
    {children}
    </HydrationBoundary>
    )
}