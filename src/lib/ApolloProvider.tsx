"use client"

import { ApolloProvider } from '@apollo/client';
import { client } from './../app/services/apolloClient';

export const ApolloProviderWrapper = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}