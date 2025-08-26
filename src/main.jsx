import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Test from './Test.jsx'
import App from "./App.jsx";
import "./index.css"

createRoot(document.getElementById('root')).render(
    // <h1>Hello world!</h1>,
    <App />
)

// <StrictMode>
// </StrictMode>