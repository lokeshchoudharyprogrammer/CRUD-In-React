import React from "react";
import { useNavigate,Link } from "react-router-dom";

import axios from "axios";
const Update = () => {
  const [id, setid] = React.useState("");
  const [name, setname] = React.useState("");
  const [email, setpassword] = React.useState("");

  const history = useNavigate();

  React.useEffect(() => {
    setid(localStorage.getItem("id"));
    setname(localStorage.getItem("name"));
    setpassword(localStorage.getItem("email"));
  },[]);

  const handleupdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://63bd51ddd660062388a177cd.mockapi.io/post/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        history("/reader");
      });
  };

  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => setname(e.target.value)}
            value={name}
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
            onChange={(e) => setpassword(e.target.value)}
            value={email}
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
          onClick={handleupdate}
          type="submit"
          className="btn btn-primary"
        >
          Update
        </button>
      </form>
      <div className="d-flex justify-content-between m-2 ">
        
        <Link to="/reader">
          <button onl className="btn btn-secondary">
            Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default Update;
