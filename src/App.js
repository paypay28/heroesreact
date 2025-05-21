import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router'
import axios from 'axios'

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import AllHeroes from './components/AllHeroes'
import HeroSingle from './components/HeroSingle'
import Error from './components/Error'

const App =()=> {

    const [ heroes, setHeroes] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3002/api/hero'

        axios.get(url).then(res => setHeroes(res.data))
    }, [])

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Main />} />
                <Route path="/heroes" element={ <AllHeroes heroes={ heroes } />}/>
                <Route path="/heroes/:id" element={ <HeroSingle />} />
                <Route path="*" element={ <Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App