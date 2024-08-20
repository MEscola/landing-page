import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './pages/Main'

import GlobalStyle from './styles/global'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Main />
  </StrictMode>,
);
