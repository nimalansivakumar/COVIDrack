import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let urlWithCountry = `${url}/countries/${country}`;

  try {
    if (country === "Global") {
      return await axios.get(url);
    } else {
      return await axios.get(urlWithCountry);
    }
  } catch (err) {
    return err;
  }
};

export const fetchCountries = async () => {
  try {
    let {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => {
      return country.name;
    });
  } catch (err) {
    return err;
  }
};

// export const fetchDailyData = async () => {
//   const { data } = await axios.get(`${url}/daily`);

//   return data.map(({ confirmed, deaths, reportDate }) => {
//     return {
//       confirmed: confirmed.total,
//       deaths: deaths.total,
//       date: reportDate,
//     };
//   });
// };
