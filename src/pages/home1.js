import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const Home1 = () => {
  const navigate = useNavigate();
  const handleSubmit = async (value) => {
    await axios.post(
      "https://62bb04cf7bdbe01d529589cd.mockapi.io/users",
      value
    );
    navigate("/student");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      roll: "",
      email: "",
      avatar: "",
      fees: "",
      contact: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("* required"),
      email: yup
        .string()
        .required("* required")
        .email("*Enter a Valid Email Address"),
      roll: yup.string().required("* required"),
      avatar: yup.string().required("* required"),
      fees: yup.string().required("* required"),
      contact: yup.string().required("* required"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
      console.log(values);
    },
  });
  return (
    <>
      <div className="container">
        <h1>Fill student details here</h1>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-group col-md-7">
            <label htmlFor="name" className="form-check-label">
              Name
            </label>
            <input
              className="form-control"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="form-group col-md-7">
            <label htmlFor="roll" className="form-check-label">
              Roll
            </label>
            <input
              className="form-control"
              id="roll"
              name="roll"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.roll}
            />
            {formik.touched.roll && formik.errors.roll ? (
              <div style={{ color: "red" }}>{formik.errors.roll}</div>
            ) : null}
          </div>

          <div className="form-group col-md-7">
            <label htmlFor="avatar" className="form-check-label">
              Photo
            </label>
            <input
              className="form-control"
              id="avatar"
              name="avatar"
              type="text"
              placeholder="paste the drive link of image"
              onChange={formik.handleChange}
              value={formik.values.avatar}
            />
            {formik.touched.avatar && formik.errors.avatar ? (
              <div style={{ color: "red" }}>{formik.errors.avatar}</div>
            ) : null}
          </div>

          <div className="form-group col-md-7">
            <label htmlFor="fees" className="form-check-label">
              Fees details
            </label>
            <input
              className="form-control"
              id="fees"
              name="fees"
              type="text"
              placeholder="Enter transaction details"
              onChange={formik.handleChange}
              value={formik.values.fees}
            />
            {formik.touched.fees && formik.errors.fees ? (
              <div style={{ color: "red" }}>{formik.errors.fees}</div>
            ) : null}
          </div>
          <div className="form-group col-md-7">
            <label htmlFor="contact" className="form-check-label">
              Contact Number
            </label>
            <input
              className="form-control"
              id="contact"
              name="contact"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.contact}
            />
            {formik.touched.contact && formik.errors.contact ? (
              <div style={{ color: "red" }}>{formik.errors.contact}</div>
            ) : null}
          </div>

          <div className="form-group col-md-7">
            <label htmlFor="email" className="form-check-label">
              Email
            </label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </div>

          <hr />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default Home1;
