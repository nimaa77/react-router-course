import React from "react"
import { Formik } from "formik"
import { withRouter } from "react-router-dom"

function Login({ history }) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, actions) => {
        if (values.name === "nima@arefi.com" && values.password === "admin") {
          history.push("/")
        } else {
          actions.setFieldError("email", "نام کاربری یا رمزعبور اشتباه است")
        }
        actions.setSubmitting(false)
      }}
      render={(props) => (
        <form onSubmit={props.handleSubmit}>
          <div className="form-group">
            <label>ایمیل</label>
            <input
              className="form-control w-25"
              type="email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              name="email"
            />
          </div>
          <div className="form-group">
            <label>رمزعبور</label>
            <input
              className="form-control w-25"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
              name="password"
            />
          </div>
          {props.errors.email && (
            <div id="feedback" className="text-danger">
              {props.errors.email}
            </div>
          )}
          <br />
          <button
            className="btn btn-success"
            type="submit"
            disabled={!props.isValid || props.isSubmiting}
          >
            ورود
          </button>
        </form>
      )}
    />
  )
}

export default withRouter(Login)
