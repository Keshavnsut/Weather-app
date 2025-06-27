// const API_KEY="d1845658f92b31c64bd94f067188c9c";
const API_KEY = "168771779c71f3d64106d8a88376808a";
// async function getWeather(city) {
//   try{
    const city = 'goa'; // Replace with the desired city
    console.log(fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`));
//   if (!response.ok) {
//     throw new Error('City not found');
//   }
//   const data = await response.json();
//   return {
//     temperature: data.main.temp,
//     description: data.weather[0].description,
//     icon: data.weather[0].icon
//   };

//   }catch (error) {
//     console.error('Error fetching weather data:', error);
//     return null;
//   }
// }
// console.log(getWeather('goa'));
function getlocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log(`Latitude: ${lat}, Longitude: ${lon}`);
    }, (error) => {
      console.error('Error getting location:', error);
    });
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}