export default function Weather({ data }) {
  return (
    <div>
      <h2 id="city">City:{data?.city}</h2>
      <h3 id="temp">
        Temperature:{data?.temperature ? data.temperature + " °C" : ""}
      </h3>
      <h3 id="wind">
        Wind Speed:{data?.windSpeed ? data.windSpeed + "km/h" : ""}
      </h3>
      <h3 id="humidity">
        Humidity:{data?.humidity ? data.humidity + "g/kg" : ""}
      </h3>
    </div>
  );
}
