import React, { useState, useEffect } from "react";

import "./home.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function data() {
      const data = await fetch(
        "https://62bb04cf7bdbe01d529589cd.mockapi.io/users"
      );
      var userList = await data.json();
      setState([...userList]);
      console.log(userList);
    }
    data();
  }, []);
  async function deleteData(id) {
    await fetch(`https://62bb04cf7bdbe01d529589cd.mockapi.io/users/${id}`, {
      method: "DELETE",
      body: null,
      headers: {
        "Content-type": "application/json",
      },
    });
    toast("Record Deleted", { position: "top-center" });
    window.setTimeout(function () {
      // window.location.href = window.location.href;
    }, 5000);
  }

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">STUDENT DATA</h6>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            {state.length > 0 ? (
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>ROLL NUMBER</th>
                    <th>NAME</th>
                    <th>PHOTO</th>
                    <th>FEES</th>
                    <th>CONTACT</th>
                    <th>EMAIL</th>
                  </tr>
                </thead>

                <tbody>
                  {state.map((obj) => {
                    return (
                      <tr key={obj.id}>
                        <td>{obj.obj}</td>
                        <td>{obj.name}</td>
                        <td>{obj.avatar}</td>
                        <td>{obj.fees}</td>
                        <td>${obj.contact}</td>
                        <td>${obj.email}</td>

                        {/* <td>
                          <Link to={`/users/${obj.id}`}>Edit User</Link>
                        </td> */}
                        <td>
                          <button
                            type="button"
                            value="Delete"
                            className="btn btn-danger"
                            onClick={() => {
                              deleteData(obj.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div>
                <h1>Loading..!</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
