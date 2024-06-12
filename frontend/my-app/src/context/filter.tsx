import React, { createContext, ReactNode, useState } from 'react';
import { Book } from '../interfaces/IBooks';

// Define the shape of your filter context
export interface FilterContextProps {
    filter: string[];
    setFilter: React.Dispatch<React.SetStateAction<string[]>>;
    booksList: Book[];
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

// Create the filter context
export const FilterContext = createContext<FilterContextProps>({
    filter: [],
    setFilter: () => { },
    booksList: [],
    setBooks: () => { },
});

// Create a provider component for the filter context
export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [filter, setFilter] = useState<string[]>([]);
    const [booksList, setBooks] = useState<Book[]>([])

    return (
        <FilterContext.Provider value={{ filter, setFilter ,booksList, setBooks}}>
            {children}
        </FilterContext.Provider>
    );
};