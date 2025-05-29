import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'


import Header from "./components/Header"
import HeroForm from './components/HeroForm'
import Main from "./components/Main"
import Footer from "./components/Footer"
import AllData from './components/AllData'
import AllHeroes from './components/AllHeroes'
import HeroSingle from './components/HeroSingle'
import Error from './components/Error'

const App =()=> {

    const [ formData, setFormData ] = useState({
        hero_name: '',
        first_name: '',
        last_name: '',
        alias: '',
        franchise_id: 0,
        species_id: 0,
        place_of_origin: '',
        first_app: '',
        alignment: '',
        imgUrl: ''
    })

    const handleClick =(e)=> {
        e.preventDefault()
        console.log('clicked')
    }

    const handleChange =(event)=> {
        const { name, value, type, selected } = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "radio" ? selected : value
            }
        })
    }

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Main />} />

                <Route path="/franchise" element={ <AllData table="franchise" name="franchise"/>} />
                <Route path="/franchise/:endpoint" element={ <AllHeroes table="franchise" />} />

                <Route path="/hero" element={ <AllHeroes table='hero' />}/>
                <Route path="/hero/:id" element={ <HeroSingle />} />
                <Route 
                    path="/heroForm" 
                    element={ <HeroForm 
                        handleClick={ handleClick } 
                        handleChange={handleChange} 
                        formData={formData}  
                    />} 
                />

                <Route path='/power' element={ <AllData table="power" name="power"/>} />
                <Route path='/power/:endpoint' element={ <AllHeroes table="power" />} />

                <Route path='/species' element={ <AllData table="species" name="species"/>} />
                <Route path='/species/:endpoint' element={ <AllHeroes table="species" />} />

                <Route path='/team' element={ <AllData table="team" name="team"/>} />
                <Route path='/team/:endpoint' element={ <AllHeroes table="team" />} />
                
                <Route path="*" element={ <Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App