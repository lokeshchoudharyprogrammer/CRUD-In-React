import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
export const Reade = () => {
  const [data, setdata] = React.useState([]);
  const [tabledark, settabledark] = React.useState("");
  function getdata() {
    axios
      .get("https://63bd51ddd660062388a177cd.mockapi.io/post")

      .then((res) => setdata(res.data));
  }

  const deleteditem = (id) => {
    axios
      .delete(`https://63bd51ddd660062388a177cd.mockapi.io/post/${id}`)
      .then(() => getdata());
  };

  const editdata = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  React.useEffect(() => {
    getdata();
  }, []);
  console.log(data);
  return (
    <>
      <div className="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          onClick={() => {
            settabledark(tabledark === "table-dark" ? "" : "table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2 ">
        <h2>Read</h2>
        <Link to="/">
          <button onl className="btn btn-secondary">
            Create
          </button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((newdata, index) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{newdata.id} </th>

                <td>{newdata.name}</td>
                <td>{newdata.email}</td>
                <td>
                  <Link to="/update">
                    <button
                      onClick={() =>
                        editdata(newdata.id, newdata.name, newdata.email)
                      }
                      className="btn btn-success"
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => deleteditem(newdata.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};
