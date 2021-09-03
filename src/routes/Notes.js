import React, { useState, useEffect } from 'react'
import Text from '../components/text/Text'

function Notes() {

    const value = localStorage.getItem('CompanyIdNumber');
    const companyNotes = [];
    const [notes, setNotes] = useState([{
        company: '',
        note: ''
    }]);

    useEffect(() => {
        fetch("/notes").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    }, [])

    console.log("notes obj", notes[0].company)
    console.log("value ", value)
 
     for(let i=0; i<notes.length; i++) {
         if(notes[i].company === value) {
             companyNotes.push(notes[i]);
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

    return(
        <>
           {companyNotes.map((value, i) => (
                 <div key={companyNotes[i]._id}>
                     <Text classes="tight-caption" content={companyNotes[i].company}></Text>
                     <Text classes="company-entry" content={companyNotes[i].note}></Text>
                 </div>
             ))}
        </>
    )
}

export default Notes