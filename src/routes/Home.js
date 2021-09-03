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
                        <a className="card-link" href="/searchpage">
                            <h5 className="card-title">Finn Selskaper</h5>
                            <p className="card-text">Søk i Brønnøysundregisteret for å se den siste selskapsinformasjonen.</p>
                        </a>
                    </div>
                    <div className="card-body">
                        <a className="card-link" href="/allnotes">
                            <h5 className="card-title">Se Notater</h5>
                            <p className="card-text">Se og rediger notatene dine.</p>
                        </a>
                    </div>
                    <div className="card-body">
                        <a className="card-link" href="mailto:info@selskapsprofiler.no?subject=Selskapsprofiler%20User%20Feedback&amp;body=Let us know what you think! -The Development Team">
                            <h5 className="card-title">Kontakt Oss</h5>
                            <p className="card-text">Gi oss beskjed om hva du synes. Vi leter alltid etter måter å forbedre Selskapsprofiler!</p>                    
                        </a>
                    </div>
            </div>
        </>
    )
  }

export default Home