import { Link } from "react-router"

const HeroCard =(props)=> {

    return (
        <div className="col">
            <div className="card h-100">
                <img src="https://placehold.co/50x50" alt={props.heroName} className="img-fluid image card-img-top" />
                <section className="card-body">
                    <h3 className="card-title">{props.heroName}</h3>
                    { props.alias && <p className="card-text hero-alias fst-italic">{props.alias}</p>}
                </section>
                <footer className="card-footer">
                    <Link to={`/heroes/${props.id}`}>view more</Link>
                </footer>
            </div>
        </div>
    )
}

export default HeroCard