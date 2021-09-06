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

    const [isPut, setIsPut] = useState(false)
    const [updatedNote, setUpdatedNote] = useState({
        company: value,
        note: '',
        id: ''
    })

    function openUpdate(id) {
        setIsPut(true);
        setUpdatedNote(prevInput => {
            return (
                {
                    ...prevInput,
                    id: id,
                }
            )
        })
    }

    function updateItem(id) {
        axios.put('/put/' + id, updatedNote)
        console.log(`Item with id ${id} has been updated.`)
        window.location.reload()
    }

    function handleUpdate(event) {
        const {name, value} = event.target;
        setUpdatedNote(prevInput => {
            return (
                {
                    ...prevInput,
                    [name]: value
                }
            )
        })
        console.log(updatedNote)
    }

    function deleteNote(id) {
        axios.delete('/delete/' + id);
        window.location.reload();
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

    // if not being updated returns delete and update buttons
    if(!isPut) {
        return(
            <>
            {companyNotes.map((value, i) => (
                    <div key={companyNotes[i]._id}>
                    <div className="card-body">
                        <h5 className="card-title">{`Note # ${[i+1]}`}</h5>
                        <p className="card-text">{companyNotes[i].note}</p>
                        <button className="btn btn-outline-danger" onClick={() => deleteNote(companyNotes[i]._id)}>Slett</button>
                        <button className="btn" onClick={() => openUpdate(companyNotes[i]._id)}>Redigere</button>
                    </div>
                </div>
                ))}
            </>
        )
        } else {
        // if it is being updated, returns update button
        return(
            <>
            {companyNotes.map((value, i) => (
                    <div key={i+1}>
                    <div className="card-body">
                        <h5 className="card-title">{`Note # ${[i+1]}`}</h5>
                        <input onChange={handleUpdate} name="note" placeholder={companyNotes[i].note} autoComplete="off"></input>
                        <button className="btn update-button" onClick={() => updateItem(companyNotes[i]._id)}>Oppdater</button>
                    </div>
                </div>
                ))}
            </>
        )
    }
}

export default Notes