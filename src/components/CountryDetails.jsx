import React from 'react';
import countries from '../countries';
function CountryDetails(props) {
// console.log(countries)
//     console.log(props);
    let countryClicked = countries.find(country => country.cca3 === props.match.params.potato)
 console.log(countryClicked)
    return (
        <div>
           {/* <h1>{props.match.params.potato}</h1>
           <h1>{countryClicked.name.common}</h1> */}
           <div className="col-7">
          <h1>{countryClicked.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{countryClicked.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                {countryClicked.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    <li><a href="/AND">Andorra</a></li>
                    <li><a href="/BEL">Belgium</a></li>
                    <li><a href="/DEU">Germany</a></li>
                    <li><a href="/ITA">Italy</a></li>
                    <li><a href="/LUX">Luxembourg</a></li>
                    <li><a href="/MCO">Monaco</a></li>
                    <li><a href="/ESP">Spain</a></li>
                    <li><a href="/CHE">Switzerland</a></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
    );
}

export default CountryDetails;