
const SolelyCountry = ({ country }) => {  
    return (
      <div>
        <h3>{country.name}</h3>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p>Area: {country.area} km²</p>
      </div>
    );
  };         
export default SolelyCountry;