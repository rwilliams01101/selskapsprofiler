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
        setCompanies(data._embedded.enheter);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <form className="form" onSubmit={search}>
                <label className="label" htmlFor="query"></label>
                <input className="input" type="text" name="query"
                    placeholder="Search by name"
                    autoComplete="off"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="btn btn-success" type="submit">Search</button>
            </form>
            <div className="card-list">
                {companies.map(company => (
                    <CompanyPreview name={company.navn} address={company.forretningsadresse.adresse[0]} orgNum={company.organisasjonsnummer} key={company.organisasjonsnummer}></CompanyPreview>
                ))}
            </div>
        </>
    )
}

export default Search