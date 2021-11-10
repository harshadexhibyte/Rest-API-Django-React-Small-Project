import React, { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Covid = () => {
  const [Data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const data = await res.json();
      // console.log(data.statewise);
      setData(data.statewise[1]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="m-5">
        <h1 className="text-center">LIVE TRAKER</h1>
        <h2 className="text-center">COVIN19 INFO</h2>
        <div className="p-5">
          <table className="table p-5">
            <tr>
              <td>OUR CONTRY</td>
              <td>{Data.state}</td>
            </tr>
            <tr>
              <td>OUR RECOVERD</td>
              <td>{Data.recovered}</td>
            </tr>
            <tr>
              <td>OUR CONFIRMED</td>
              <td>{Data.confirmed}</td>
            </tr>
            <tr>
              <td>OUR DEATHS</td>
              <td>{Data.deaths}</td>
            </tr>
            <tr>
              <td>OUR ACTIVE</td>
              <td>{Data.active}</td>
            </tr>
            <tr>
              <td>OUR UPDATED</td>
              <td>{Data.deltarecovered}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Covid;
