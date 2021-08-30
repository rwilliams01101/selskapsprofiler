import { useEffect } from 'react'
import Image from '../components/image/Image'
import Text from '../components/text/Text'
import Header from '../components/header/Header'
import { Company_Note_Values } from '../utils/AppConstants'
import { Company_Preview_Values } from '../utils/AppConstants'
import './CompanyProfile.css'


function CompanyProfile() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])    
    // I know this isn't good, but building an SPA on gitpages made me cheat a bit
    const value = localStorage.getItem('CompanyNoteNumber');
    const companyNotes = [];

    for(let i=0; i<Company_Note_Values.length; i++) {
        if(Company_Note_Values[i].previewValue === value) {
            companyNotes.push(Company_Note_Values[i]);
        }
    }

    if(companyNotes.length === 0 ) {
        return (
            <>
                <div style={{padding: 1 + "em"}}>
                    <h1>We haven't finished this post yet (but we will soon).</h1>
                </div>
            </>
        )
    }

    return (
        
        <>
        <Header companyHeader={Company_Preview_Values[value-1].altText} publishDate={Company_Preview_Values[value-1].publishDate} writtenBy={Company_Preview_Values[value-1].writtenBy}></Header>
             {companyNotes.map((value, i) => (
                <div key={companyNotes[i].id}>
                    <Image src={companyNotes[i].src} classes="company-image" altText={companyNotes[i].altText}></Image>
                    <Text classes="tight-caption" content={companyNotes[i].altText}></Text>
                    <Text classes="company-detail" content={companyNotes[i].companyNote}></Text>
                </div>
            ))}
        </>
    )
  }

export default CompanyProfile