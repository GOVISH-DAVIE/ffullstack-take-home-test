import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ElloApolloSetUp } from './context/apollo';
import { StudentListProvider } from './context/student_list';
import { FilterProvider } from './context/filter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ElloApolloSetUp>
      <StudentListProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </StudentListProvider>
    </ElloApolloSetUp>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
