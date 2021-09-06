import React, { useState } from 'react'
import './NewNote.css'
import axios from 'axios'

function NewNote (props) {
    const [input, setInput] = useState({
        company: props.companyId,
        note: ''
    })
    
    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        const newNote = {
            company: input.company,
            note: input.note
        }

        axios.post('http://localhost:3001/create', newNote)
        console.log("New note posted to Mongo Database.")
    }


    return(
        <>
            <form className="form">
                <label className="label" htmlFor="note"></label>
                <input className="input" type="text" name="company"
                    defaultValue={input.company} hidden
                    />
                <textarea className="input" type="text" name="note"
                    autoComplete="off"
                    placeholder="Skriv inn et notat"
                    value={input.note} onChange={handleChange}
                    />
                <button onClick={handleClick} className="btn btn-success" type="submit">Legge Til</button>
            </form>
        </>
    )
}

export default NewNote