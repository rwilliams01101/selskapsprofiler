// Use for development only

import firstPostImage from '../assets/images/pakata-goh.jpg' // Image courtesy of Unsplash - Pakata Goh
import secondPostImage from '../assets/images/s-o-c-i-a-l-c-u-t.jpg' // Image courtesy of Unsplash - s-o-c-i-a-l-c-u-t
import firstImageOne from '../assets/images/james-timothy.jpg' // Image courtesy of Unsplash - James Timothy
import firstImageTwo from '../assets/images/angelo-pantazis.jpg' // Image courtesy of Unsplash - Angelo Pantazis
import secondImageOne from '../assets/images/elijah-g.jpg' // Image courtesy of Unsplash - Elijah G
import secondImageTwo from '../assets/images/tracy-adams.jpg' // Image courtesy of Unsplash - Tracy Adams

// const urlImage = "https://www.google.com/search?q=airplane&source=lnms&tbm=isch&sa=X"

export const Company_Preview_Values = [
  // Sample Company Preview 1
    { src: `${firstPostImage}`, classes: "img img-lg-ctr", publishDate: "Griegs Gate 56, 4200 Sauda", altText: "Company Name One", id: "1", companyNote: "These guys are good.", writtenBy:"999-432-24"},
  // Sample Company Preview 2
    { src: `${secondPostImage}`, classes: "img img-lg-ctr", publishDate: "Griegs Gate 54, 4200 Sauda", altText: "Company Name Two", id: "2", companyNote: "These guys are even better", writtenBy:"999-223-42"},
];

export const Company_Note_Values = [
  // Notes for Preview 1
  { src: `${firstImageOne}`, classes: "img img-lg-ctr", altText: "This person runs it all.", id: "1", companyNote: "This is where the notes will be posted.", previewValue: "1"},
  { src: `${firstImageTwo}`, classes: "img img-lg-ctr", altText: "This is the web developer", id: "2", companyNote: "This is also where the notes will be posted.", previewValue: "1"},

  // Notes for Preview 2
  { src: `${secondImageOne}`, classes: "img img-lg-ctr", altText: "Here is a building - neat.", id: "3", companyNote: "This is where the notes will be posted.", previewValue: "2"},
  { src: `${secondImageTwo}`, classes: "img img-lg-ctr", altText: "They eat donuts sometimes.", id: "4", companyNote: "This is also where the notes will be posted.", previewValue: "2"},
]