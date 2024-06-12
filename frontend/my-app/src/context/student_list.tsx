import React, { createContext, useContext, useState } from 'react';
import { Book } from '../interfaces/IBooks';
import { enqueueSnackbar } from 'notistack';


 interface StudentListContextValue {
    studentBooks: Book[];
    addStudentBook: (student: Book) => void;
    removeStudentBook: (student: Book) => void;
}

const StudentListContext = createContext<StudentListContextValue | undefined>(undefined);

 
 const StudentListProvider = ({ children }: { children: React.ReactNode }) => {
    const [studentBooks, setStudentBooks] = useState<Book[]>([])

   
    const addStudentBook = (student: Book) => {
        // Check if the book already exists in the studentBooks array before adding it
       
        if (!studentBooks.some((book) => book.title === student.title)) {
            setStudentBooks([...studentBooks, student]);
            enqueueSnackbar(`${student.title} has been added to student list`, { variant: 'success' });
        }else{
            enqueueSnackbar(`${student.title} already exist in the student list`, { variant: 'warning' });
        }
    };
    const removeStudentBook = (student: Book) => setStudentBooks(studentBooks.filter((book) => book.title !== student.title));




    return (
        <StudentListContext.Provider value={{
            studentBooks,
            addStudentBook,
            removeStudentBook
        }}>
            {children}
        </StudentListContext.Provider>
    );
};

export { StudentListProvider ,StudentListContext};