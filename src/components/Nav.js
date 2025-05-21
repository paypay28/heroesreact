import { Link } from "react-router"

const Nav =()=> {

    return (
        <nav className="nav top-nav justify-content-center justify-content-md-between">
            <Link to="/">Home</Link>
            <Link to="/heroes">Heroes</Link>
        </nav>
    )
}

export default Nav