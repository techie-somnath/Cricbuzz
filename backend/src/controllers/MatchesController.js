app.get("/api/v1/getMatches", async (req, res) => {
    try {
      const options = {
        method: "GET",
        url: "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent",
        headers: {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
        },
        params: {
          query: req.query.query || "default",
        },
      };
  
      const response = await axios.request(options);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/v1/getScorecard", async (req, res) => {
    try {
      const options = {
        method: "GET",
        url: "https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/scard",
        headers: {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
        },
        params: {
          query: req.query.query || "default",
        },
      };
  
      const response = await axios.request(options);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  async function getMatches(req, res) {

  };

  async function getScorecard(req, res) {

  };