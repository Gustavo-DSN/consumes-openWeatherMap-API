require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const weatherApiKey = process.env.WEATHER_API_KEY;
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather";

app.get("/weather", async (req, res) => {
	try {
		const { city } = req.query;

		if (!city) {
			return res.status(400).json({ error: "Cidade é obrigatória" });
		}

		const response = await axios.get(weatherApiUrl, {
			params: {
				q: city,
				appid: weatherApiKey,
				units: "metric",
				lang: "pt_br",
			},
		});

		const description = {
			actuallyTime: response.data.weather[0].description,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			windForce: response.data.wind.speed,
		};

		res.json(description);
	} catch (error) {
		res.status(500).json({
			error: "Erro ao buscar o clima",
			details: error.message,
		});
	}
});

app.listen(port, () => {
	console.log(`Rodando na porta ${port}`);
});
