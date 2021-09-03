import Image from '../components/image/Image'
import underConstruction from '../assets/images/under_construction.png'
import './About.css'

function About() {
    return (
        <>
            <Image src={underConstruction} classes="img img-lg-ctr under-construction" altText="Under Construction, coming Christmas 2002."></Image>
        </>
    ) 
  }

export default About