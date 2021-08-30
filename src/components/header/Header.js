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
                Address: {props.publishDate}
              </div>
              <div>
                Telephone: {props.writtenBy}
              </div>
            </div>
          </div>
        </header>
    </>
  )
}

export default Header