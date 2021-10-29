import React from 'react'
import FunctionalContextComponent from './FunctionalContext';
import { ThemeProvider } from './ThemeContext';


export default function App() {
  return (
    <ThemeProvider>
      <FunctionalContextComponent/>
    </ThemeProvider>
  );
}