import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const HeroSingle =()=> {

    const [ hero, setHero ] = useState({})

    const params = useParams()

    useEffect(()=> {
        const url = `http://localhost:3002/api/hero/${params.id}`

        axios.get(url).then(res => setHero(res.data))
    }, [])

    console.log(hero)

    return (
        <main className="main" id="heroSingleMain">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="hero-single-heading">hero</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HeroSingle