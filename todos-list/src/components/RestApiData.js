import React, { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const RestApiData = () => {
  const [Data, setData] = useState([]);
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
  return (
    <>
      <row>
        <div className="col-md-4 offset-4 mt-5">
          <h1 className="text-primary text-center border border-primary p-5 rounded">
            TodoList
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">My List</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((sub, index) => {
                return (
                  <tr>
                    <th scope="row">{}</th>
                    <td>{sub.subject}</td>

                    <td>
                      {/* <a
                    href="{% url 'delItem' pk=item.id %}"
                    className="btn btn-danger"
                  >
                    ❌
                  </a> */}
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
