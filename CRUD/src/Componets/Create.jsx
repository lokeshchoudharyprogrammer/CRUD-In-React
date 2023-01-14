import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Create = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const history = useNavigate();
  const header = { "Access-Control-Allow-Origin": "*" };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("clickedbtn");

    axios.post("https://63bd51ddd660062388a177cd.mockapi.io/post", {
      name: name,
      email: email,
      header,
    });

    history("/reader");
  };

  return (
    <>
      <div className="d-flex justify-content-between m-2 ">
        <h2>Create Crud</h2>
        <Link to="/reader">
          <button onl className="btn btn-primary">
            Show Data
          </button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => setname(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setemail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button
          onClick={handlesubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
