import React, { useEffect } from "react";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
const InsertData = (props) => {
  const { addSuccess } = props;
  const [name, setName] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const SubmitData = (event) => {
    event.preventDefault();
    // const val = {
    //   method: "POST",
    //   name: name,
    // };
    fetch("http://127.0.0.1:8000/api_insertData/", {
      method: "POST",
      body: JSON.stringify(name),
    }).then((res) => {
      console.log("Request complete! response:", res);
      addSuccess();
      setName("");
    });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4 offset-4 mt-5">
          <form onSubmit={SubmitData}>
            <h1 className="text-primary text-center border border-primary p-5 rounded">
              TodoList
            </h1>
            <div className="form-group">
              <label for="exampleInputEmail1 mt-2">Insert List</label>
              <input
                type="text"
                className="form-control mt-2"
                aria-describedby="emailHelp"
                placeholder="Enter Task"
                value={name}
                onChange={changeName}
              />
            </div>
            <button type="submit" className="btn btn-primary form-control mt-2">
              Insert Data
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InsertData;
