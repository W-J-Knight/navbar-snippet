import { useRouteError, Link } from "react-router-dom";


const Error = () => {
 const error = useRouteError();
 console.error(error);
  
  return (
    <section className="error" id="error-page">
      <p>Error</p>
      <p>{error.data}</p>
      <p>{error.statusText}</p>
      <Link to="/" id="go-home">Home Page</Link>
    </section>
  );
  
};
export default Error;
