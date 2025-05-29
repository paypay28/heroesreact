import { NavLink } from "react-router"

const Nav =()=> {

    return (
        <nav className="nav top-nav justify-content-center justify-content-md-between">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/hero">Heroes</NavLink>
            <NavLink to="/franchise">Franchises</NavLink>
            <NavLink to='/power'>Powers</NavLink>
            <NavLink to='/species'>Species</NavLink>
            <NavLink to='/team'>Teams</NavLink>
        </nav>
    )
}

export default Nav