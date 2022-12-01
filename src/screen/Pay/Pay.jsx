import React from "react";
import "./Pay.scss";
import Heading from "../../components/Heading/Heading";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Navbar from "../../components/Navbar/Navbar";
const Pay = () => {
  const validation = Yup.object({
    number: Yup.number().required("Required"),
    exp_month: Yup.number().required("Required"),
    exp_year: Yup.number().required("Required"),
    cvc: Yup.number().required("Required"),
  });

  return (
    <>
      <div className="pay">
        <Navbar />
        <div className="payform">
          <center>
            <Heading text="Pay With Card" />
          </center>
          <Formik
            initialValues={{
              number: "",
              exp_month: "",
              exp_year: "",
              cvc: "",
            }}
            validationSchema={validation}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(formik) => (
              <div className="pay-form">
                <Form className="donate-form">
                  <FormInput label="Enter Number" name="number" type="number" />
                  <FormInput
                    label="Enter Expiry Month"
                    name="exp_month"
                    type="number"
                  />
                  <br />
                  <FormInput
                    label="Enter Expiry Year"
                    name="exp_year"
                    type="number"
                  />
                  <br />

                  <FormInput label="Enter CVC" name="cvc" type="number" />
                  <br />
                  <br />

                  <div className="signpage-container-content-signup-btn">
                    <Button text="pay" size="small-btn" type="submit" />
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Pay;
