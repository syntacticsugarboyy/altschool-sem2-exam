import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./counter";
import PageNotFound from "./notfound";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <>
      <h5>
        <Link to="./notfound">404 Test</Link>
      </h5>
      <ErrorBoundary fallback="Error, My bad...">
        <h3>Great's Counter Hook</h3>
      </ErrorBoundary>
      <ErrorBoundary fallback="Error, My bad...">
        <div>
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </ErrorBoundary>
      <h4>Made with React ;)</h4>
    </>
  );
}

export default App;
