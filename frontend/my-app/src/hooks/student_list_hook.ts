import { useContext } from "react";
import { StudentListContext } from "../context/student_list";

export const useStudentListContext = () => {
    const context = useContext(StudentListContext);
    if (!context) {
        throw new Error('useStudentListContext must be used within a StudentListProvider');
    }
    return context;
};