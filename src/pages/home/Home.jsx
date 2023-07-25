import { IoHome } from "react-icons/io5";
// import { IconContext } from "react-icons/lib";

const Home = () => {
  return (
    // <IconContext.Provider value={{ color: "#fff" }}>
    <section className="home">
      <p>Home</p>
      <IoHome className="page-icon " />
    </section>
    // </IconContext.Provider>
  );
}
export default Home