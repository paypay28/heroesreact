import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const HeroSingle =()=> {

    const [ hero, setHero ] = useState({})
    const [ powers, setPowers ] = useState([])
    const [ rivals, setRivals ] = useState([])

    const params = useParams()

    useEffect(()=> {
        const url = `http://localhost:3002/api/hero/${params.id}`

        axios.get(url).then(res => {
            setHero(res.data)
            setPowers(res.data.powers)
            setRivals(res.data.rivals)
        })

        
    }, [])
    
    const powersListItems = powers.map(power => {
        return <li key={ power }className="list-item power-item">{ power }</li>
    })

    const rivalsListItems = rivals.map(rival => {
        return <li key={ rival }className="list-item rival-item">{ rival }</li>
    })
    
    return (
        <main className="main" id="heroSingleMain">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="hero-single-heading">{ hero.hero_name || `${hero.first_name} ${hero.last_name}`}</h2>
                        { hero.alias && <p className="hero-single-alias fst-italic">{hero.alias}</p>}
                        <img src="https://placehold.co/250x350" alt="placeholder img" className="img-fluid image hero-single-img" />
                    </div>
                    <div className="col">
                        <h3 className="hero-stats text-capitalize">info</h3>
                        <ul className="hero-stat-list list-group list-group-flush">
                            <li className="list-group-item">Full Name: { `${hero.first_name} ${hero.last_name}`}</li>
                            <li className="list-group-item">Place of Origin: {hero.place_of_origin}</li>
                            <li className="list-group-item">Species: {hero.species}</li>
                            <li className="list-group-item">Franchise: {hero.franchise}</li>
                            <li className="list-group-item">First Appearance: {hero.first_app}</li>
                            { powers.length && <li className="list-group-item">
                                Powers:
                                <ul className="powers-list">
                                    { powersListItems }
                                </ul>
                            </li>}
                            { rivals.length && <li className="list-group-item">
                                Rivals:
                                <ul className="powers-list">
                                    { rivalsListItems }
                                </ul>
                            </li>}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HeroSingle