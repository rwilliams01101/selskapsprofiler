import React, { useState, useEffect } from 'react'

function AllNotes() {

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
 
     if(notes.length === 0 ) {
         return (
             <>
                 <div style={{padding: 1 + "em"}}>
                     <h1>Det er ingen notater.</h1>
                 </div>
             </>
         )
     }

    return(
        <>
        <h1>Se Alle Notater</h1>
        <h6>Administrere på selskapsprofil</h6>
        <br/>
           {notes.map((value, i) => (
                 <div key={i+1}>
                     <div className="card-body">
                        <h5 className="card-title">Org #: {notes[i].company}</h5>
                        <p className="card-text">{notes[i].note}</p>
                    </div>
                 </div>
             ))}
        </>
    )
}

export default AllNotes