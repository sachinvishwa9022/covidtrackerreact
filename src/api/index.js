import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  try {
    let finalUrl = url;
    if (country) {
      finalUrl = `${url}/countries/${country}`;
    }
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(finalUrl);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiedData;
  } catch (e) {}
};
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(url + "/daily");

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (e) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(url + "/countries");
    const modifiedData = countries.map((country) => country.name);

    return modifiedData;
  } catch (e) {}
};
