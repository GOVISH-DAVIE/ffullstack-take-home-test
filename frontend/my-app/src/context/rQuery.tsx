import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const QueryContext = ({ children }: { children: ReactNode }) => {
    return <QueryClientProvider client={queryClient}>
        {
            children
        }

        </QueryClientProvider>
}