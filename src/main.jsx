import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import * as S from "./GlobalStyle"

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <S.GlobalStyle />
    
    <App />
  </React.StrictMode>,
)
