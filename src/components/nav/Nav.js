import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import '../nav/Nav.css'
import navBrand from '../../assets/images/asterisk.png'
import Collapse from "../../utils/Collapse"
import Home from '../../routes/Home'
import About from '../../routes/About'
import CompanyProfile from "../../routes/CompanyProfile"
import SearchPage from "../../routes/SearchPage"
import SearchResults from "../../routes/SearchResults"
import Notes from "../../routes/Notes"
import AllNotes from "../../routes/AllNotes"

function Nav () {

    return(
        <>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" onClick={Collapse} to="/selskapsprofiler"><img src={navBrand} alt="appex logo"></img></Link> 
                        <button className="navbar-toggler" id="hamburger-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" onClick={Collapse} to="/selskapsprofiler">Forside</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={Collapse} to="/about">Om Oss</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/companyprofile">
                        <CompanyProfile />
                    </Route>
                    <Route path="/selskapsprofiler">
                        <Home />
                    </Route>
                    <Route path="/searchpage">
                        <SearchPage />
                    </Route>
                    <Route path="/searchresults">
                        <SearchResults />
                    </Route>
                    <Route path="/notes">
                        <Notes />
                    </Route>
                    <Route path="/allnotes">
                        <AllNotes />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Nav

