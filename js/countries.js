const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(reqs => reqs.json() )
    .then (data => displayCountries (data))
}

const displayCountries = countries =>{
    const countriesContainer =document.getElementById('all-countries');

    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML= `
        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital ? country.capital[0]: 'No capital'}</P>
        
        `;

        countriesContainer.appendChild(countryDiv);
    })
}
loadCountries();