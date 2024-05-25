import React, { useState } from "react";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from 'styled-components';

import AuthService from "../../../services/net/auth.service";
import NavbarComp from "./NavbarComp";
import Navbar from '../../partials/HomePartial/Navbar'




const PageContent = styled.div`
  width: 100%;
  margin: 0 auto;
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormV4Content = styled.div`
  background: #fff;
  width: 850px;
  border-radius: 10px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  margin: 175px 0;
  display: flex;
  font-family: 'Open Sans', sans-serif;

  @media screen and (max-width: 991px) {
    margin: 180px 20px;
    flex-direction: column;
  }
`;

const FormLeftLast = styled.div`
  margin-top: 20px;
`;

const FormLeft = styled.div`
  background: blue;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 20px 40px;
  width: 100%;
  color: #fff;

  @media screen and (max-width: 991px) {
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0;
  }
`;

const FormLeftContent = styled.div`
  h2 {
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 34px;
  }

  p {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.5;
  }

  .text-2 {
    margin: 20px 0 25px;
  }

  .account {
    background: #fff;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 180px;
    border: none;
    margin: 15px 0 50px 0px;
    cursor: pointer;
    color: #333;
    font-weight: 700;
    font-size: 15px;
    outline: none;

    &:hover {
      background: #e5e5e5;
    }
  }
`;


const FormDetail = styled.div`
  padding: 20px 40px;
  width: 100%;

  @media screen and (max-width: 991px) {
    padding: 30px 20px;
  }

  h2 {
    color: blue;
  }

  .form-group {
    display: flex;
    margin: 0 -8px;

    @media screen and (max-width: 575px) {
      flex-direction: column;
      margin: 0;
    }
  }

  .form-row {
    width: 100%;
    position: relative;
    padding: 0 8px;

    &.form-row-1 {
      width: 50%;

      @media screen and (max-width: 575px) {
        width: 100%;
        padding: 0;
      }
    }

    label {
      font-weight: 600;
      font-size: 15px;
      color: #666;
      display: block;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      padding: 11.5px 15px;
      border: 1px solid #e5e5e5;
      border-top-left-radius: 5px;
      border-bottom-right-radius: 5px;
      outline: none;
      font-family: 'Open Sans', sans-serif;
      font-size: 15px;
      color: #333;
      box-sizing: border-box;

      &:focus {
        border: 1px solid #53c83c;
      }

      &.error {
        border-color: red;
      }
    }
  }

  .form-checkbox {
    margin-top: 1px;
    position: relative;

    input {
      position: absolute;
      opacity: 0;
    }

    .checkmark {
      position: absolute;
      top: 13px;
      left: 0;
      height: 15px;
      width: 15px;
      border: 1px solid #ccc;
      cursor: pointer;

      &::after {
        content: "";
        position: absolute;
        left: 5px;
        top: 1px;
        width: 3px;
        height: 8px;
        border: 1px solid blue;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        display: none;
      }

      input:checked ~ &::after {
        display: block;
      }
    }

    p {
      margin-left: 34px;
      color: #333;
      font-size: 14px;
      font-weight: 600;

      .text {
        font-weight: 700;
        color: blue;
        text-decoration: underline;
      }
    }
  }

  .form-row-last {
    input {
      background: blue;
      border-top-left-radius: 5px;
      border-bottom-right-radius: 5px;
      width: 130px;
      border: none;
      margin: 6px 0 50px 0px;
      cursor: pointer;
      color: #fff;
      font-weight: 700;
      font-size: 15px;

      &:hover {
        background: #2f73a3;
      }
    }
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: yellow;
  margin-bottom: 15px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 10px;

  &.text-1 {
    margin-bottom: 15px;
  }

  &.text-2 {
    span {
      font-weight: bold;
      color: yellow;
    }
  }
`;

const SubmitButton = styled.input`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;




// const CardContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 50px;
//   padding: 20px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//   border-radius: 10px;
//   background-color: #fff;
// `;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 50%;
`;

const StyledForm = styled(Form)`
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const FormField = styled(Field)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;

  &.is-invalid {
    border-color: red;
  }
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: blue;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

const Message = styled.div`
  margin-top: 20px;
  color: red;
  font-size: 14px;
`;

const Login: React.FC = () => {
  const [heightHeader, setHeightHeader]  = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleHeightHeader = (value: number) => {
    setHeightHeader(value);
  };
  
  let navigate: NavigateFunction = useNavigate();

  const initialValues: {
    username: string;
    password: string;
  } = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue: { username: string; password: string }) => {
    const { username, password } = formValue;

    setMessage("");
    setLoading(true);

    AuthService.login(username, password).then(
      () => {
        navigate("/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  return (
    <>
      <Navbar  homeHeader={handleHeightHeader} />




      <PageContent>
        <FormV4Content>
          <FormLeft>
            <FormLeftContent>
              <Title>INFORMAÇÃO PRÉVIA DE CADASTRO</Title>
              <Text className="text-1">
                Bem-vindo ao nosso marketplace! Aqui você encontrará uma ampla variedade de serviços à sua disposição. Antes de prosseguir com o cadastro, leia as informações abaixo com atenção.
              </Text>
              <Text className="text-2">
                <span>Importante:</span> Forneça informações precisas e atualizadas para garantir um processo de cadastro rápido e sem complicações. Estamos aqui para ajudar em caso de dúvidas.
              </Text>
              <FormLeftLast>
                <SubmitButton type="submit" name="register" value="Have An Account" />
              </FormLeftLast>
            </FormLeftContent>
          </FormLeft>
          <FormDetail className="col-md-12">
            <ProfileImg
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
            />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({ errors, touched, isSubmitting }) => (
                <StyledForm>
                  <FormGroup>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <FormField
                      name="username"
                      type="text"
                      className={`form-control ${touched.username && errors.username ? "is-invalid" : ""}`}
                    />
                    <StyledErrorMessage name="username" component="div" />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormField
                      name="password"
                      type="password"
                      className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`}
                    />
                    <StyledErrorMessage name="password" component="div" />
                  </FormGroup>
                  <StyledButton type="submit" disabled={isSubmitting || loading}>
                    {loading ? "Loading..." : "Login"}
                  </StyledButton>
                </StyledForm>
              )}
            </Formik>
            {message && <Message>{message}</Message>}
          </FormDetail>
        </FormV4Content>
      </PageContent>
      <NavbarComp />
    </>
  );
};

export default Login;
