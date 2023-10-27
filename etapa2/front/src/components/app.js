import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./navBar"

import Main from "./main"
import Context from './context'
import Classifier from './classifier'



function App() {
    return(
        <div className='App'>
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='about-us' element={<Context/>}/>
                    <Route path='classifier' element={<Classifier/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App