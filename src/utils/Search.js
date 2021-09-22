import React, { useState } from 'react'
import CompanyPreview from '../components/companyPreview/CompanyPreview'

function Search() {

    // states input query, companies
    const [query, setQuery] = useState('');
    const [companies, setCompanies] = useState([]);

    const search = async (e) => {
        e.preventDefault()

        const url = `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${query}`

        try {
        const res = await fetch(url);
        const data = await res.json();
        console.log("data:", data)
        setCompanies(data._embedded.enheter);
        } catch (err) {
            console.error("No Companies Match Search Criteria: ", err);
            alert("Ingen resultater. Prøv et nytt søk.")
        }
    }

    return (
        <>
            <form className="form" onSubmit={search}>
                <label className="label" htmlFor="query"></label>
                <input className="input" type="text" name="query"
                    placeholder="Søk etter navn"
                    autoComplete="off"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="btn btn-success" type="submit">Søk</button>
            </form>
            <div className="card-list" id="results-list">
                {companies.map(company => (
                     <CompanyPreview name={company.navn} address={company.forretningsadresse ? company.forretningsadresse.adresse[0] : "No Address Provided"} orgNum={company.organisasjonsnummer} key={company.organisasjonsnummer}></CompanyPreview>
                ))}
            </div>
        </>
    )
}

export default Search