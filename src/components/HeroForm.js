import { useState, useEffect} from 'react'
import axios from 'axios'

const HeroForm =(props)=> {

    const [ franchises, setFranchises ] = useState([])
    const [ species, setSpecies ] = useState([])

    useEffect(()=> {
        const franUrl = 'http://localhost:3004/api/franchise'
        const specUrl = 'http://localhost:3004/api/species'

        axios.get(franUrl).then(res => setFranchises(res.data))
        axios.get(specUrl).then(res => setSpecies(res.data))
    }, [])

    // console.log(franchises)

    const franchiseDivs = franchises.map(franchise => {
        return (
            <div className="form-check form-check-inline" key={franchise.franchise_id}>
                <input
                    className="form-check-input"
                    type="radio"
                    name="franchise_id"
                    defaultValue={franchise.franchise_id}
                    id={franchise.franchise}
                    onChange={props.handleChange}
                />
                <label className="form-check-label" htmlFor={franchise.franchise}>
                    {franchise.franchise}
                </label>
            </div>
        )
    })

    const speciesDivs = species.map(species => {
        return (
            <div className="form-check form-check-inline" key={species.species_id}>
                <input
                    className="form-check-input"
                    type="radio"
                    name="species_id"
                    defaultValue={species.species_id}
                    id={species.species}
                    onChange={props.handleChange}
                />
                <label className="form-check-label" htmlFor={species.species}>
                    {species.species}
                </label>
            </div>
        )
    })

    return(
        <>
            {  props.isPostSuccess.isSuccess ? <Success /> :
            <main className="main" id="heroFormMain">
                <div className="container">
                    <form className="hero-form form" onSubmit={ props.handleSubmit }>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="heroName" className="form-label">Hero Name</label>
                                <input 
                                    id="heroName" 
                                    type="text"
                                    className="form-control" 
                                    name="hero_name"
                                    value={props.formData.hero_name}
                                    onChange={props.handleChange}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input 
                                    id="firstName" 
                                    type="text"
                                    className="form-control" 
                                    name="first_name"
                                    value={props.formData.first_name}
                                    onChange={props.handleChange}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input 
                                    id="lastName" 
                                    type="text"
                                    className="form-control" 
                                    name="last_name"
                                    value={props.formData.last_name}
                                    onChange={props.handleChange}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="alias" className="form-label">Alias</label>
                                <input 
                                    id="alias" 
                                    type="text"
                                    className="form-control" 
                                    name="alias"
                                    value={props.formData.alias}
                                    onChange={props.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="placeOfOrigin" className="form-label">Place of Origin</label>
                                <input 
                                    id="placeOfOrigin" 
                                    type="text"
                                    className="form-control" 
                                    name="place_of_origin"
                                    value={props.formData.place_of_origin}
                                    onChange={props.handleChange}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="firstApp" className="form-label">First Appearance</label>
                                <input 
                                    id="firstApp" 
                                    type="number"
                                    className="form-control" 
                                    name="first_app"
                                    min="1900"
                                    max="2050"
                                    step="1"
                                    value={props.formData.first_app}
                                    onChange={props.handleChange}
                                />
                            </div>
                            <div className="col">
                                <div className="alignment-box">
                                    <p className="form-text">Alignment</p>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="alignment" 
                                            defaultValue="HERO" 
                                            id="heroAlignment" 
                                            onChange={props.handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="heroAlignment">Hero</label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio"
                                            defaultValue="VILLAIN" 
                                            name="alignment" 
                                            id="villainAlignment"
                                            onChange={props.handleChange} 
                                        />
                                        <label className="form-check-label" htmlFor="villainAlignment">Villain</label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="alignment" 
                                            defaultValue="ANTIHERO"
                                            id="antiheroAlignment" 
                                            onChange={props.handleChange}   
                                        />
                                        <label className="form-check-label" htmlFor="antiheroAlignment">Antihero</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="franchise-box">
                                    <p className="form-text">Franchise</p>
                                    { franchiseDivs }
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="species-box">
                                    <p className="form-text">Species</p>
                                    { speciesDivs }
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Image</span>
                                    <input 
                                        className="form-control"
                                        type="file"
                                        name="img_url"
                                        onChange={props.handleChange}
                                        value={props.img_url}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row button-row">
                        <div className="col">
                            <button className="btn btn-dark">Add Hero</button>
                        </div>
                        </div>
                    </form>
                </div>
            </main> 
            }
        </>
    )

}


const Success =()=> {
    return (
        <div className="container">
            <h2>Hero was successfully added.</h2> 
        </div>
    )
}

export default HeroForm