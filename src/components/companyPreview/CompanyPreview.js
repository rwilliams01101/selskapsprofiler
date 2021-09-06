import React from 'react'
import { Link } from "react-router-dom";
import Text from '../text/Text'
import StoreLocally from '../../utils/StoreLocally'
import './CompanyPreview.css'

function CompanyPreview(props) {

    return (
        <>
                <div className="preview-wrapper">
                    <Text classes="tight-caption" content={props.name}></Text>
                    <Text classes="company-entry" content={props.address}></Text>
                    <Link className="read-more" to={"/companyProfile"} value={props.orgNum} onClick={()=>StoreLocally(props.orgNum)}>Se Selskap</Link>
                </div>
        </>
    )
  }

export default CompanyPreview