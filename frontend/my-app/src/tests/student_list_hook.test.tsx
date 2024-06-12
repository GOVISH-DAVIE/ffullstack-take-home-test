import React from 'react';
import { renderHook } from '@testing-library/react-hooks'; 
import { useStudentListContext } from '../hooks/student_list_hook';
import { StudentListProvider } from '../context/student_list';
// import { StudentListProvider, StudentListContext, useStudentListContext } from './path-to-your-context';

describe('useStudentListContext', () => {
  it('should throw an error if used outside of StudentListProvider', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => undefined);

    const { result } = renderHook(() => useStudentListContext());

    expect(result.error).toEqual(new Error('useStudentListContext must be used within a StudentListProvider'));

    jest.spyOn(React, 'useContext').mockRestore();
  });

  it('should return context when used within StudentListProvider', () => {
    const mockSetStudents = jest.fn();
    const mockContext = {
      students: ['Student1', 'Student2'],
      setStudents: mockSetStudents,
    };

    jest.spyOn(React, 'useContext').mockImplementation(() => mockContext);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <StudentListProvider>{children}</StudentListProvider>
    );

    const { result } = renderHook(() => useStudentListContext(), { wrapper });

    expect(result.current).toEqual(mockContext);

    jest.spyOn(React, 'useContext').mockRestore();
  });
});
