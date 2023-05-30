const getWeatherData = () => [
    {
      location: {
        name: 'Portland',
      },
      forecastUrl: 'https://api.weather.gov/gridpoints/PQR/112,103/forecast',
      iconUrl: 'https://api.weather.gov/icons/land/day/tsra,40?size=medium',
      weather: 'Chance Showers And Thunderstorms',
      temp: '59 F',
    },
    {
      location: {
        name: 'Manzanita',
      },
      forecastUrl: 'https://api.weather.gov/gridpoints/PQR/73,120/forecast',
      iconUrl: 'https://api.weather.gov/icons/land/day/tsra,90?size=medium',
      weather: 'Showers And Thunderstorms',
      temp: '55 F',
    },

    {
      location: {
        name: "New York",
      },
      forecastUrl: 'https://api.weather.gov/gridpoints/PQR/112,103/forecast',
      iconUrl: 'https://api.weather.gov/icons/land/day/tsra,40?size=medium', 
      weather: 'Scattered Showers And Thunderstorms', 
      temp: "90 F",
    }





  ]

  const weatherMiddleware = async (req, res, next) => {
    if (!res.locals.partials) res.locals.partials = {};
    res.locals.partials.weatherContext = await getWeatherData();
    next();
}

module.exports = weatherMiddleware;