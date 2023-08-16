import React from "react";
import {createRoot} from 'react-dom/client'
import App from './App'

const root = document.querySelector('#root') || document.body
createRoot(root).render(<App />)