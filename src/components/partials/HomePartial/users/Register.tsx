import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import UserDataService from "../../../../services/net/UserDataService";
import IUserData from "../../../../services/types/users.type";

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

const FormDetail = styled.form`
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


const StyledButton = styled.input`
  background: blue;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 130px;
  border: none;
  margin: 6px 0 50px 0;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  padding: 20px 40px;

  &:hover {
    background: #2f73a3;
  }

  @media screen and (max-width: 991px) {
    padding: 30px 20px;
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

const FormLeftLast = styled.div`
  margin-top: 20px;
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

const RegisterForm: React.FC = () => {
  const [userData, setUserData] = useState<IUserData>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    comfirmPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, firstName: e.target.value });
  };

  const onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, lastName: e.target.value });
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, email: e.target.value });
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, password: e.target.value });
  };

  const onChangeComfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, comfirmPassword: e.target.value });
  };

  const saveUser = () => {
    UserDataService.postUsers(userData)
      .then((response: any) => {
        setUserData({
          ...userData,
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          password: response.data.password,
          comfirmPassword: response.data.comfirmPassword
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const newUser = () => {
    setUserData({
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      comfirmPassword: "",
    });
    setSubmitted(false);
  };

  return (
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
        <FormDetail action="#" method="post" id="myform">
          <h2>FORMULÁRIO DE REGISTO</h2>
          <div className="form-group">
            <div className="form-row form-row-1">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                className="input-text"
                id="first_name"
                required
                value={userData.firstName}
                onChange={onChangeFirstName}
                name="first_name"
              />
            </div>
            <div className="form-row form-row-1">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                className="input-text"
                id="last_name"
                required
                value={userData.lastName}
                onChange={onChangeLastName}
                name="last_name"
              />
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="your_email">Email Address</label>
            <input
              type="text"
              className="input-text"
              id="your_email"
              required
              value={userData.email}
              onChange={onChangeEmail}
              name="your_email"
            />
          </div>
          <div className="form-group">
            <div className="form-row form-row-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="input-text"
                id="password"
                required
                value={userData.password}
                onChange={onChangePassword}
                name="password"
              />
            </div>
            <div className="form-row form-row-1">
              <label htmlFor="comfirm_password">Confirm Password</label>
              <input
                type="password"
                className="input-text"
                id="comfirm_password"
                required
                value={userData.comfirmPassword}
                onChange={onChangeComfirmPassword}
                name="comfirm_password"
              />
            </div>
          </div>
          <FormCheckbox>
            <label>
              <input type="checkbox" name="checkbox" /> 
              <Checkmark />
              <CheckboxText>
                I agree to the <span className="text">Terms and Conditions</span>
              </CheckboxText>
            </label>
          </FormCheckbox>
          <StyledButton type="submit" name="register" value="Register" onClick={saveUser}/>
        </FormDetail>
      </FormV4Content>
    </PageContent>
  );
};

export default RegisterForm;


const FormTitle = styled.h2`
  color: blue;
`;

const FormGroup = styled.div`
  display: flex;
  margin: 0 -8px;

  @media screen and (max-width: 575px) {
    flex-direction: column;
    margin: 0;
  }
`;

const FormRow = styled.div`
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
`;

const FormLabel = styled.label`
  font-weight: 600;
  font-size: 15px;
  color: #666;
  display: block;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
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
`;

const FormCheckbox = styled.div`
  margin-top: 1px;
  position: relative;
`;

const Checkmark = styled.span`
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
`;

const CheckboxText = styled.p`
  margin-left: 34px;
  color: #333;
  font-size: 14px;
  font-weight: 600;
`;