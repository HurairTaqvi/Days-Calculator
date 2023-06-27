const LiveAPI = "https://api.m-foodz.com";
// const QA = "http://172.16.100.151:8003";
// const Developement = "http://172.16.100.199:8083";
// const UsingApi = QA;

const UsingApi = LiveAPI;

let GetCountries = ` ${UsingApi}/api/MRide/GetCountries`;

export {
  GetCountries,
};