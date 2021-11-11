import React, { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InsertData from "./InsertData";

const RestApiData = () => {
  const [Data, setData] = useState([]);
  const [updt, isUpdate] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api_allData/");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);

  const DelData = async (id) => {
    await fetch(`http://127.0.0.1:8000/api_delData/${id}`);
    getCovidData();
  };
  const UpdateData = async (id) => {
    const data = await fetch(`http://127.0.0.1:8000/api_updateItem/${id}`)
      .then((response) => response.json())
      .then((data) => console.log(data.subject));

    getCovidData();
  };
  return (
    <>
      <row>
        <InsertData addSuccess={getCovidData} />
        <div className="col-md-4 offset-4 mt-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">My List</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((sub, index) => {
                return (
                  <tr>
                    <th scope="row">{sub.id}</th>
                    <td>{sub.subject}</td>

                    <td>
                      <span
                        onClick={() => {
                          UpdateData(sub.id);
                        }}
                        className="btn btn-warning"
                      >
                        🔁
                      </span>
                    </td>
                    <td>
                      <span
                        onClick={() => {
                          DelData(sub.id);
                        }}
                        className="btn btn-danger"
                      >
                        ❌
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </row>
    </>
  );
};

export default RestApiData;
