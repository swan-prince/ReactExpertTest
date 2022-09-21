import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

import IndexPage from 'views/IndexPage';

import theme from 'theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
