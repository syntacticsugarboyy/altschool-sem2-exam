import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div>
      <h3>Error: Page not Found</h3>
      <Link to="/">Back to Counter Page</Link>
    </div>
  );
}

export default PageNotFound;
