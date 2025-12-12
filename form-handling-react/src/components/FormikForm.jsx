/** @jsxImportSource react */

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-10">
          Register with Formik
        </h2>

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            alert("Formik Form Submitted Successfully!");
            console.log(values);
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Username
                </label>
                <Field
                  name="username"
                  type="text"
                  placeholder="johndoe"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                />
                <ErrorMessage name="username" component="p" className="mt-2 text-sm text-red-600" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                />
                <ErrorMessage name="email" component="p" className="mt-2 text-sm text-red-600" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                />
                <ErrorMessage name="password" component="p" className="mt-2 text-sm text-red-600" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition transform hover:scale-105 disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Create Account"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}