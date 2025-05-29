import { useState, useEffect} from 'react'
import { Link } from "react-router"

const AllDataCard =(props)=> {

    return (
        <div className="col">
            <div className="figure h-100 franchise-figure">
                <img src="https://placehold.co/50x50" alt={`logo for ${props.category}`} className="img-fluid image figure-img franchise-img" />
                <figcaption className="figure-caption fran-fig-cap">
                    <Link to={`/${props.table}/${props.name}`}>
                        { props.name } 
                    </Link>
                </figcaption>
            </div>
        </div>
    )
}

export default AllDataCard