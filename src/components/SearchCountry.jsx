import React, { useEffect, useState } from "react";
import styles from "./SearchCountry.module.css";
import { fetchCountries } from "../api/Api";

const SearchCountry = ({ handleCountryChange }) => {
  const [countries, countrySetter] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      countrySetter(await fetchCountries());
    };

    fetchCountry();
  }, []);

  return (
    <div className={styles.container}>
      <select
        id="countriesList"
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value="Global">Global</option>
        {countries.map((country, i) => (
          <option value={country} key={i}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchCountry;
