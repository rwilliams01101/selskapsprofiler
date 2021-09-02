import React from 'react'
import Image from '../image/Image'
import Text from '../text/Text'
import { Company_Note_Values } from '../../utils/AppConstants'

function CompanyNote() {

     // I know this isn't good, but building an SPA on gitpages made me cheat a bit
     const value = localStorage.getItem('CompanyIdNumber');
     const companyNotes = [];
 
     for(let i=0; i<Company_Note_Values.length; i++) {
         if(Company_Note_Values[i].previewValue === value) {
             companyNotes.push(Company_Note_Values[i]);
         }
     }
 
     if(companyNotes.length === 0 ) {
         return (
             <>
                 <div style={{padding: 1 + "em"}}>
                     <h1>You haven't added any notes to this company yet.</h1>
                 </div>
             </>
         )
     }
 
     return (
         <>
              {companyNotes.map((value, i) => (
                 <div key={companyNotes[i].id}>
                     <Image src={companyNotes[i].src} classes={companyNotes[i].classes} altText={companyNotes[i].altText}></Image>
                     <Text classes="tight-caption" content={companyNotes[i].altText}></Text>
                     <Text classes="company-entry" content={companyNotes[i].companyNote}></Text>
                 </div>
             ))}
         </>
     )

}

export default CompanyNote