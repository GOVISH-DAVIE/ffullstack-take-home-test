import { useContext, useState } from 'react';
import { FilterContext } from '../context/filter';
import { Book } from '../interfaces/IBooks';

const useFilter = () => {
    const context = useContext(FilterContext);
  
    // Add your custom logic here
    if (!context) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    const removeFilter = (filter: string) => {
        context.setFilter(context.filter.filter((f) => f !== filter));
    }
    const addFilter = (filter: string) => {
        context.setFilter([...context.filter, filter]);
    }
    const search = (search: string, books: Book[]) => {
    if(search.trim() === '') return context.setBooks([]);
    context.setBooks(books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase())));   
    }

    return { ...context, removeFilter, addFilter, search};

};

export default useFilter;


