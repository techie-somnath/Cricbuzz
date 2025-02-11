const axios = require("../node_modules/axios/index.d.cts");

const getRecentMatchesList = async () => {
    try {
        const response = await axios.get('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', {
            headers: {
                'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data from RapidAPI:', error);
        throw error;
    }
};

export default getRecentMatchesList;