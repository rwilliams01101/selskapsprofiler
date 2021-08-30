import React from 'react'
import { Link } from "react-router-dom";
import Image from '../image/Image'
import Text from '../text/Text'
import { Company_Preview_Values } from '../../utils/AppConstants'
import StoreLocally from '../../utils/StoreLocally'
import './CompanyPreview.css'

function CompanyPreview(props) {

    return (
        <>
            {Company_Preview_Values.map((value, i) => (
                <div className="preview-wrapper" key={Company_Preview_Values[i].id}>
                    <Image src={Company_Preview_Values[i].src} classes={Company_Preview_Values[i].classes} altText={Company_Preview_Values[i].altText}></Image>
                    <Text classes="tight-caption" content={Company_Preview_Values[i].altText}></Text>
                    <Text classes="company-entry" content={Company_Preview_Values[i].companyNote}></Text>
                    <Link className="read-more" to={"/companyProfile"} value={Company_Preview_Values[i].id} onClick={()=>StoreLocally(value.id)}>View Company Profile</Link>
                </div>
            ))}
        </>
    )
  }

export default CompanyPreview