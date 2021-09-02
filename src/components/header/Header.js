import React from 'react'
import '../header/Header.css'

function Header(props) {
  return (
    <>
        <header>
          <div className="header-align">
            <h1 className="company-header">
              {props.companyHeader}
            </h1>
            <div className="header-details">
            <div>
                {props.about} 
              </div>
              <div>
                {props.address[0]}
              </div>
              <div>
                {props.fullLocation}
              </div>
              <div>
                {props.postNum}
              </div>
            </div>
          </div>
        </header>
    </>
  )
}

export default Header