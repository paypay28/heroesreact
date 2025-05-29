import { useState, useEffect } from 'react'
import axios from 'axios'

import AllDataCard from './AllDataCard'

const AllData =( {table, name} )=> {

    const [ dataArr, setDataArr ] = useState([])


    useEffect(()=> {

        const url = `http://localhost:3002/api/${table}`

        axios.get(url).then(res => setDataArr(res.data))
    }, [table])

    const allDataCardComponents = dataArr.map(item => {
        
        return (
            <AllDataCard 
                key={item.franchise_id || item.power_id || item.species_id || item.team_id} 
                table={table} 
                data={item} 
                name={item.franchise || item.power || item.species || item.team}
            />  
        )
    })

    console.log(allDataCardComponents)

    return (
        <main className="main" id="franchiseMain">
            <div className="container">
                <h2 className="franchise-heading">All {name }</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    { allDataCardComponents }
                </div>
            </div>
        </main>
    )
}

export default AllData