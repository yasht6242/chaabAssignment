import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Navbar from "./components/Navbar/Navbar.js";
import Dashboard from "./components/Dashboard/Dashboard.js";

function App() {
  return (
    <div className="App ">
      <div className="sidebar_navbar_dashboard ">
        <Sidebar />
        <div className="">
          <div className=" sidebar_navbar_dashboard ">        
              <div className="navbar_dashboard ellipse_two">
              <Navbar />
                <Dashboard />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
