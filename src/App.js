import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import axios from 'axios'


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
        first_app: 1960,
        alignment: '',
        img_url: ''
    })

    const [ isPostSuccess, setIsPostSuccess] = useState({
        isSuccess: false,
        id: 0
    })

    const resetData=()=> {
        setIsPostSuccess({
            isSuccess: false,
            id: 0
        })

        setFormData({
            hero_name: '',
            first_name: '',
            last_name: '',
            alias: '',
            franchise_id: 0,
            species_id: 0,
            place_of_origin: '',
            first_app: 1960,
            alignment: '',
            img_url: ''
        })
    }

    const handleSubmit =(e)=> {
        e.preventDefault()

        axios({
            method: 'post',
            url: 'http://localhost:3004/api/hero/post',
            data: formData
        }).then(response => {
            // console.log(response)
            setIsPostSuccess({isSuccess: true, id: response.data.Last_id})
        })
    }

    // console.log(isPostSuccess)

    const handleChange =(event)=> {
        const { name, value } = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Main />} />

                <Route path="/franchise" element={ <AllData table="franchise" name="franchise"/>} />
                <Route path="/franchise/:endpoint" element={ <AllHeroes table="franchise" resetData={resetData} />} />

                <Route path="/hero" element={ <AllHeroes table='hero' resetData={resetData} />}/>
                <Route path="/hero/:id" element={ <HeroSingle />} />
                <Route 
                    path="/heroForm" 
                    element={ <HeroForm 
                        handleSubmit={ handleSubmit } 
                        handleChange={handleChange} 
                        formData={formData}  
                        isPostSuccess={isPostSuccess}
                    />} 
                />

                { isPostSuccess.isSuccess && <Route path={`/hero/${isPostSuccess.id}`} element={ <HeroSingle />} />}
                <Route path='/power' element={ <AllData table="power" name="power"/>} />
                <Route path='/power/:endpoint' element={ <AllHeroes table="power" resetData={resetData}/>} />

                <Route path='/species' element={ <AllData table="species" name="species"/>} />
                <Route path='/species/:endpoint' element={ <AllHeroes table="species" resetData={resetData}/>} />

                <Route path='/team' element={ <AllData table="team" name="team"/>} />
                <Route path='/team/:endpoint' element={ <AllHeroes table="team" resetData={resetData}/>} />
                
                <Route path="*" element={ <Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App