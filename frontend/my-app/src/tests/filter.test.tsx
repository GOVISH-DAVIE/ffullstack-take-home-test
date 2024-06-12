import { renderHook } from '@testing-library/react-hooks';
import { FilterContextProps, FilterProvider } from '../context/filter';
import useFilter from '../hooks/filter';
import { ReactNode,act } from 'react';
import { Book } from '../interfaces/IBooks';
import React from 'react';

// Mocking the Book interface
const mockBooks: Book[] = [
    {
        author: "Reese Smith",
        coverPhotoURL: "assets/image2.webp",
        readingLevel: "H",
        title: "Curious Princess and the Enchanted Garden"
      },
      {
        author: "Jordan Jones",
        coverPhotoURL: "assets/image10.webp",
        readingLevel: "I",
        title: "Clever Monster on the Wonder Island"
      },
      {
        author: "Quinn Brown",
        coverPhotoURL: "assets/image10.webp",
        readingLevel: "I",
        title: "Happy Knight and the Magic Spell"
      } ];
  
  describe('useFilter Hook', () => {
    let mockSetFilter: jest.Mock;
    let mockSetBooks: jest.Mock;
    let mockContext: FilterContextProps;
  
    beforeEach(() => {
      mockSetFilter = jest.fn();
      mockSetBooks = jest.fn();
      mockContext = {
        filter: [],
        setFilter: mockSetFilter,
        booksList: [],
        setBooks: mockSetBooks,
      };
  
      jest.spyOn(React, 'useContext').mockImplementation(() => mockContext);
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it('should throw an error if useFilter is used outside of FilterProvider', () => {
      jest.spyOn(React, 'useContext').mockImplementation(() => undefined);
      const { result } = renderHook(() => useFilter());
      expect(result.error).toEqual(new Error('useFilter must be used within a FilterProvider'));
    });
  
    it('should add a filter', () => {
      const { result } = renderHook(() => useFilter());
  
      act(() => {
        result.current.addFilter('filter1');
      });
  
      expect(mockSetFilter).toHaveBeenCalledWith(['filter1']);
    });
    it('should remove a filter', () => {
      const { result } = renderHook(() => useFilter());
  
      act(() => {
        result.current.removeFilter('filter1');
      });
  
      expect(mockSetFilter).toHaveBeenCalledWith([]);
    });
  
    it('should filter books correctly based on search term', () => {
      const { result } = renderHook(() => useFilter());
  
      act(() => {
        result.current.search('Clever', mockBooks);
      });
  
      expect(mockSetBooks).toHaveBeenCalledWith([
       
          {
            author: "Jordan Jones",
            coverPhotoURL: "assets/image10.webp",
            readingLevel: "I",
            title: "Clever Monster on the Wonder Island"
          }
      ]);
  
      act(() => {
        result.current.search('Cur', mockBooks);
      });
  
      expect(mockSetBooks).toHaveBeenCalledWith([
        {
            author: "Reese Smith",
            coverPhotoURL: "assets/image2.webp",
            readingLevel: "H",
            title: "Curious Princess and the Enchanted Garden"
          }
      ]);
    });
  
    it('should set books to empty array if search is empty', () => {
      const { result } = renderHook(() => useFilter(), {
        wrapper: ({ children }: { children: ReactNode }) => <FilterProvider>{children}</FilterProvider>,
      });
  
      act(() => {
        result.current.search('', mockBooks);
      });
  
      expect(mockSetBooks).toHaveBeenCalledWith([]);
    });
  });