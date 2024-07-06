//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';



//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import AppRouter from './appRouter.js'

//
const root = createRoot(document.querySelector("#app"))

//render your react application
root.render(<AppRouter/>)

