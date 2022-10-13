require("dotenv").config();

module.exports = {
    APP_ID: process.env.APP_ID,     
    APP_KEY: process.env.APP_KEY,    
    BASE_URL: 'https://api.adzuna.com/v1/api/jobs',
    BASE_PARAMS: 'search/1?&results_per_page=20&content-type=application/json',

};

//export APP_ID=:a0cdbfd2
//export API_KEY=:fd9deec0081577f78062042bee16157e
///us/search/1?app_id={APP_ID}&app_key={API_KEY}