import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const { ind } = useParams();
  console.log(ind);

  let getval = localStorage.getItem("user");
  let passval = JSON.parse(getval);
  let selval = passval[ind];

  const [propsval, setPropsval] = useState(selval);
  console.log(propsval);

  const navigate = useNavigate();

  const [err, setErr] = useState({
    name: { required: false },
    email: { required: false },
    mob: { required: false },
    age: { required: false },
  });

  function changeval(e) {
    setPropsval({ ...propsval, [e.target.name]: e.target.value });
  }

  function submitfun(e) {
    e.preventDefault();
    let errormsg = {
      name: { required: false },
      email: { required: false },
      mob: { required: false },
      age: { required: false },
    };

    if (!propsval.name) {
      errormsg.name.required = true;
    } else if (!propsval.email) {
      errormsg.email.required = true;
    } else if (!propsval.mob) {
      errormsg.mob.required = true;
    } else if (!propsval.age) {
      errormsg.age.required = true;
    } else {
      navigate("/displayvalue");
      let savedval = localStorage.getItem("user");
      let getval = savedval ? JSON.parse(savedval) : [];
      console.log(getval);
      getval[ind]=propsval
      localStorage.setItem("user", JSON.stringify(getval));
    }
    setErr(errormsg);
  }

  return (
    <>
      <div className="container mt-3">
        <div></div>

        <div className="row">
          <div className="col-lg-4"></div>

          <div className="col-lg-4 p-4 border border-4">
            <form onSubmit={submitfun}>
              <h3 className="text-center pb-3">Details</h3>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="name"
                  onChange={changeval}
                  value={propsval.name}
                  className="form-control"
                  placeholder="name@example.com"
                />
                <label htmlFor="Name">Name</label>
                {!err.name.required === false ? (
                  <div style={{ color: "red" }}>
                    !!!Enter your firstname Here...
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  onChange={changeval}
                  value={propsval.email}
                  className="form-control"
                  placeholder="email"
                />
                <label htmlFor="Emailid">EmailId</label>
                {!err.email.required === false ? (
                  <div style={{ color: "red" }}>!!!Enter your Emailid...</div>
                ) : (
                  ""
                )}
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  name="mob"
                  onChange={changeval}
                  className="form-control"
                  placeholder="mobile"
                  value={propsval.mob}
                />
                <label htmlFor="MobileNum">Mobile Number</label>
                {!err.mob.required === false ? (
                  <div style={{ color: "red" }}>!!!Enter your Password...</div>
                ) : (
                  ""
                )}
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  name="age"
                  onChange={changeval}
                  className="form-control"
                  placeholder="Age"
                  value={propsval.age}
                />
                <label htmlFor="Age">Age</label>
                {!err.age.required === false ? (
                  <div style={{ color: "red" }}>!!!Enter your Age...</div>
                ) : (
                  ""
                )}
              </div>

              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary mb-" type="submit">
                  Submit
                </button>
                <button className="btn btn-primary" onClick={()=>navigate("/displayvalue")}>
                  DataPage
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </>
  );
}
