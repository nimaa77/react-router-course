import React from "react"
import { Formik, Form } from "formik"
import useAuthActions from "hooks/useAuthActions"
import useHistory from "hooks/useHistory"

function Login() {
  const setLogin = useAuthActions()
  const history = useHistory()
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, actions) => {
        if (values.email === "nima@arefi.com" && values.password === "admin") {
          setLogin(true)
          history.push("/profile")
        } else {
          actions.setFieldError("email", "نام کاربری یا رمزعبور اشتباه است")
        }
        actions.setSubmitting(false)
      }}
      render={(props) => (
        <Form>
          <div className="form-group">
            <label>ایمیل</label>
            <input
              className="form-control w-25 ltr"
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
              className="form-control w-25 ltr"
              type="password"
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
        </Form>
      )}
    />
  )
}

export default Login
