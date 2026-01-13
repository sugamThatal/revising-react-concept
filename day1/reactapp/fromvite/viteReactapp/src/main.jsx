import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 

const reactElement=(
  <a href="https://www.google.com">Go to Google</a>
)


 //createRoot(document.getElementById('root')).render(
   reactElement
//)
ReactDOM.createRoot(document.getElementById('root')).render(
  
   reactElement 
  
)
