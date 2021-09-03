import { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import './CompanyProfile.css'
import NewNote from '../components/newNote/NewNote'
import Notes from '../routes/Notes'


function CompanyProfile() {

    const [companies, setCompanies] = useState([]);
    const [city, setCity] = useState("");

    const search = async () => {

        const query = localStorage.getItem("CompanyIdNumber")
        const url = `https://data.brreg.no/enhetsregisteret/api/enheter?organisasjonsnummer=${query}`

        try {
        const res = await fetch(url);
        const data = await res.json();
        setCompanies(data._embedded.enheter)
        localStorage.setItem('CompanyCity', data._embedded.enheter[0].forretningsadresse.poststed.toString())
        citySearch()
        } catch (err) {
            console.error(err);
        }
    }

    const citySearch = async () => {

        const cityName = localStorage.getItem("CompanyCity")
        const cityQuery = `${cityName},%20No`
        const cityUrl = `https://api.teleport.org/api/cities/?search=${cityQuery}`

        try {
            const results = await fetch(cityUrl);
            const cityData = await results.json();
            setCity(cityData._embedded['city:search-results'][0].matching_full_name)
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
            <Header fullLocation={city} 
                    companyHeader={companies[0].navn} 
                    address={companies[0].forretningsadresse.adresse} 
                    about={companies[0].naeringskode1.beskrivelse} 
                    postNum={companies[0].forretningsadresse.postnummer}>
            </Header>
            <NewNote companyId={companies[0].organisasjonsnummer}></NewNote>
            <Notes></Notes>
        </>
    )
  }

export default CompanyProfile