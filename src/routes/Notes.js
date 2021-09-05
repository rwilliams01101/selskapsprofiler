import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Notes.css'

function Notes() {

    const value = localStorage.getItem('CompanyIdNumber');
    const companyNotes = [];
    const [notes, setNotes] = useState([{
        company: '',
        note: ''
    }]);

    function deleteNote(id) {
        axios.delete('/delete/' + id);
        console.log(`Deleted item with id ${id}`)
    }

    useEffect(() => {
        fetch("/notes").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    }, [])
 
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
                 <div key={i+1}>
                 <div className="card-body">
                    <h5 className="card-title">{`Note # ${[i+1]}`}</h5>
                    <p className="card-text">{companyNotes[i].note}</p>
                    <button className="btn btn-outline-danger" onClick={() => deleteNote(companyNotes[i]._id)}>Delete</button>
                    <button className="btn">Update</button>
                </div>
             </div>
             ))}
        </>
    )
}

export default Notes