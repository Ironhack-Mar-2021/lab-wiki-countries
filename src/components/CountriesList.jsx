import React from 'react';
import { Link } from 'react-router-dom';
import countries from "../countries.json";


function CountriesList(props) {


    const newCon = () => {
        return countries.map((country) => {
            return (
                <Link to={`/country/${country.cca3}`}>
                    <li>{country.name.common}</li>
                </Link>

            )
        })
    }

    return (
        <div>

            {newCon()}

        </div>
    );
}

export default CountriesList;