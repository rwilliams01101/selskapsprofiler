// I know this isn't good, but building an SPA on gitpages made me cheat a bit

function StoreLocally(companyId) {
    localStorage.setItem('CompanyNoteNumber', companyId.toString())
}

export default StoreLocally