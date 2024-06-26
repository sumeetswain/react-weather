import { useState } from "react";
import "./Card.css";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Weather from "./Weather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Card() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState({});
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const loadData = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=9d5fad9694f1d00483ab148783acee00&units=metric`
      )
      .then((res) => {
        const result = {
          city: res.data.name,
          temperature: Math.floor(res.data.main.temp),
          windSpeed: Math.floor(res.data.wind.speed * 3.6),
          humidity: Math.floor(res.data.main.humidity),
        };
        setData(result);
      })
      .catch((e) => {
        toast(e.response.data.message + " enter city name!");
      });
  };
  return (
    <>
      <div className="Card">
        <h1>Weather</h1>
        <TextField
          id="outlined-basic"
          label="Enter City Name"
          variant="outlined"
          color="success"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button onClick={loadData} variant="text" color="success">
          Submit
        </Button>
        <Weather data={data} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
