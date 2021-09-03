import React, { useState, useEffect } from 'react'
import Text from '../components/text/Text'

function AllNotes() {

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
 
    //  for(let i=0; i<notes.length; i++) {
    //      if(notes[i].company === value) {
    //          companyNotes.push(notes[i]);
    //      }
    //  }
 
     if(notes.length === 0 ) {
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
           {notes.map((value, i) => (
                 <div key={notes[i]._id}>
                     <Text classes="tight-caption" content={notes[i].company}></Text>
                     <Text classes="company-entry" content={notes[i].note}></Text>
                 </div>
             ))}
        </>
    )

}

export default AllNotes