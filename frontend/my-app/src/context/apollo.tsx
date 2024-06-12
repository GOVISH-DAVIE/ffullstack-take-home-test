import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { ReactNode } from 'react';



const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});



export const ElloApolloSetUp = ({ children }: { children: ReactNode }) => {

    return <ApolloProvider client={client}>
        {
            children
        }
    </ApolloProvider>
}