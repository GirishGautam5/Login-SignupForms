// import { BrowserRouter,Link , Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import LoginComponent from "./LoginComponent/LoginComponent";
import SignupComponent from "./SignupComponent/SignupComponent";
import Dashboard from "./Dashboard.js/Dashboard";
function App(props) {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="side-bar">
            <button>&#9776;</button>
          </div>
          <div className="app-logo">
            <Link to="/">
              <img
                src="http://www.visionias.in/student/images/visionias_logo.png"
                alt="Visionias"
              />
            </Link>
          </div>
          <div className="navigation-links">
            <Link to="/register">
              Sign up
              <i
                className="fa fa fa-user p-3 fa-6x mx-2 btn "
                style={{ color: "white" }}
              ></i>
            </Link>
            <Link to="/signin">
              Sign In
              <i
                className="fa fa-user p-3 fa-6x mx-2 btn "
                style={{ color: "white" }}
              ></i>
            </Link>
          </div>
        </header>
        <main className="main">
          <div className="content">
            <Routes>
              <Route path="/signin" element={<LoginComponent />} />
              <Route path="/register" element={<SignupComponent />} />
              <Route path="/home" element={<Dashboard />} />
            </Routes>
          </div>
        </main>

        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
