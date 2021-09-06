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
                     <h1>You haven't added any notes to this company yet.</h1>
                 </div>
             </>
         )
     }

    return(
        <>
           {notes.map((value, i) => (
                 <div key={i+1}>
                     <div className="card-body">
                        <h5 className="card-title">{notes[i].company}</h5>
                        <p className="card-text">{notes[i].note}</p>
                    </div>
                 </div>
             ))}
        </>
    )
}

export default AllNotes