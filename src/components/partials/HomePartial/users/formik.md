To integrate Formik for form validation in your existing form without adding or removing any inputs or fields, follow these steps:

1. **Install Formik**: If you haven't already installed Formik, you can do so using npm or yarn.

   ```bash
   npm install formik
   ```

2. **Import Formik**: Add the import statement for Formik at the top of your file.

   ```javascript
   import { Formik, Form, Field } from "formik";
   ```

3. **Wrap Your Form with Formik**: Replace your `<form>` tag with `<Formik>` and move all the form content inside it.

   ```javascript
   <Formik
     initialValues={userData}
     onSubmit={saveUser}
     validate={(values) => {
       const errors: Partial<IUserData> = {};
       // Add validation logic here if needed
       return errors;
     }}
   >
     {({ errors, touched }) => (
       <Form>
         <h2>FORMULÁRIO DE REGISTO</h2>
         <div className="form-group">
           <div className="form-row form-row-1">
             <label htmlFor="first_name">First Name</label>
             <Field
               type="text"
               className={`input-text ${
                 errors.firstName && touched.firstName ? "error" : ""
               }`}
               id="first_name"
               name="firstName"
             />
             {errors.firstName && touched.firstName && (
               <div className="error">{errors.firstName}</div>
             )}
           </div>
           <div className="form-row form-row-1">
             <label htmlFor="last_name">Last Name</label>
             <Field
               type="text"
               className={`input-text ${
                 errors.lastName && touched.lastName ? "error" : ""
               }`}
               id="last_name"
               name="lastName"
             />
             {errors.lastName && touched.lastName && (
               <div className="error">{errors.lastName}</div>
             )}
           </div>
         </div>
         <div className="form-row">
           <label htmlFor="your_email">Email Address</label>
           <Field
             type="text"
             className={`input-text ${
               errors.email && touched.email ? "error" : ""
             }`}
             id="your_email"
             name="email"
           />
           {errors.email && touched.email && (
             <div className="error">{errors.email}</div>
           )}
         </div>
         <div className="form-group">
           <div className="form-row form-row-1">
             <label htmlFor="password">Password</label>
             <Field
               type="password"
               className={`input-text ${
                 errors.password && touched.password ? "error" : ""
               }`}
               id="password"
               name="password"
             />
             {errors.password && touched.password && (
               <div className="error">{errors.password}</div>
             )}
           </div>
           <div className="form-row form-row-1">
             <label htmlFor="comfirm_password">Confirm Password</label>
             <Field
               type="password"
               className={`input-text ${
                 errors.comfirmPassword && touched.comfirmPassword
                   ? "error"
                   : ""
               }`}
               id="comfirm_password"
               name="comfirmPassword"
             />
             {errors.comfirmPassword && touched.comfirmPassword && (
               <div className="error">{errors.comfirmPassword}</div>
             )}
           </div>
         </div>
         <FormCheckbox>
           <label>
             <Field type="checkbox" name="checkbox" />
             <Checkmark />
             <CheckboxText>
               I agree to the <span className="text">Terms and Conditions</span>
             </CheckboxText>
           </label>
         </FormCheckbox>
         <StyledButton type="submit" name="register" value="Register" />
         {message && <Message>{message}</Message>}
       </Form>
     )}
   </Formik>
   ```

4. **Field Component**: Replace `<input>` with `<Field>` from Formik. Formik's `<Field>` handles both the value and onChange internally, so you don't need explicit `onChange` handlers.

5. **Validation**: Implement validation logic inside the `validate` function of Formik's `initialValues` prop. Return an object where each key corresponds to a field and its value is the error message if validation fails.

6. **Submit Handling**: Formik's `onSubmit` prop handles form submission. You can remove the `saveUser` function from the form button's `onClick` and manage form submission within Formik's `onSubmit`.

By following these steps, your form will be integrated with Formik for validation, maintaining your existing structure and styling intact. Adjust the validation logic (`validate` function) as per your specific requirements for each field.
