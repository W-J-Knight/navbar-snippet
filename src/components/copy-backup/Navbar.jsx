import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav><div className="logo">Logo</div>
    <ul className="navlinks">
      <li>
      <NavLinK to="home">Home</NavLinK>
    </li>
      <li>
        <NavLinK ></NavLinK>
      </li>
      <li>
        <NavLinK></NavLinK>
      </li>
      </ul>
      </nav>
  )
}
export default Navbar