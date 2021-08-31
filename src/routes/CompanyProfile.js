import { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import './CompanyProfile.css'
import CompanyNote from '../components/companyNote/CompanyNote'


function CompanyProfile() {

    // testing area
    const [companies, setCompanies] = useState([]);

    const search = async () => {

        const query = localStorage.getItem("CompanyNoteNumber")

        const url = `https://data.brreg.no/enhetsregisteret/api/enheter?organisasjonsnummer=${query}`

        try {
        const res = await fetch(url);
        const data = await res.json();
        setCompanies(data._embedded.enheter);
        console.log(data._embedded.enheter)
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        search()
    }, [])

    if(companies.length === 0) {
        return (
            document.readyState
        )
    }

    return (
        
        <>
           <Header companyHeader={companies[0].navn} address={companies[0].forretningsadresse.adresse} about={companies[0].naeringskode1.beskrivelse} postNum={companies[0].forretningsadresse.postnummer} postCity={companies[0].forretningsadresse.poststed} land={companies[0].forretningsadresse.land}></Header>
           <CompanyNote></CompanyNote>
        </>
    )
  }

export default CompanyProfile