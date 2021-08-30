import React from 'react'
import './Home.css'

function Home(props) {

    return (
        <>
            <div className="home-wrapper">
                <div className="welcome-message">
                    <h1>Velkommen til Selskapsprofiler!</h1>
                    <h4>Hva vil du gjøre?</h4>
                </div>
                    <div className="card-body">
                        <a className="card-link" href="/searchresults">
                            <h5 className="card-title">Find Businesses</h5>
                            <p className="card-text">Search Brønnøysundregisteret to see the latest company information.</p>
                        </a>
                    </div>
                    <div className="card-body">
                        <a className="card-link" href="/notes">
                            <h5 className="card-title">Review Notes</h5>
                            <p className="card-text">See all of your notes.</p>
                        </a>
                    </div>
                    <div className="card-body">
                        <a className="card-link" href="mailto:info@selskapsprofiler.no?subject=Selskapsprofiler%20User%20Feedback&amp;body=Let us know what you think! -The Development Team">
                            <h5 className="card-title">Contact Us</h5>
                            <p className="card-text">Let us know what you think about Selskapsprofiler. We're always looking for ways to make our service better!</p>                    
                        </a>
                    </div>
            </div>
        </>
    )
  }

export default Home