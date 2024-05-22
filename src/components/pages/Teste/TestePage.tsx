import React from 'react';
import styled from 'styled-components';

// Styled Components
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

const RegisterForm: React.FC = () => {
  return (
    <PageContent>
      <FormV4Content>
        <FormLeft>
          <FormLeftContent>
            <h2>INFOMATION</h2>
            <p className="text-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo.
            </p>
            <p className="text-2"><span>Eu ultrices:</span> Vitae auctor eu augue ut. Malesuada nunc vel risus commodo viverra. Praesent elementum facilisis leo vel.</p>
            <div className="form-left-last">
              <input type="submit" name="account" className="account" value="Have An Account" />
            </div>
          </FormLeftContent>
        </FormLeft>
        <FormDetail action="#" method="post" id="myform">
          <h2>FORMULÁRIO DE REGISTO</h2>
          <div className="form-group">
            <div className="form-row form-row-1">
              <label htmlFor="first_name">First Name</label>
              <input type="text" name="first_name" id="first_name" className="input-text" />
            </div>
            <div className="form-row form-row-1">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" name="last_name" id="last_name" className="input-text" />
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="your_email">Your Email</label>
            <input type="email" name="your_email" id="your_email" className="input-text" required pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" />
          </div>
          <div className="form-group">
            <div className="form-row form-row-1">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" className="input-text" required />
            </div>
            <div className="form-row form-row-1">
              <label htmlFor="comfirm_password">Confirm Password</label>
              <input type="password" name="comfirm_password" id="comfirm_password" className="input-text" required />
            </div>
          </div>
          <div className="form-checkbox">
            <label className="container">
              <p>I agree to the <a href="#" className="text">Terms and Conditions</a></p>
              <input type="checkbox" name="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="form-row-last">
            <input type="submit" name="register" className="register" value="Register" />
          </div>
        </FormDetail>
      </FormV4Content>
    </PageContent>
  );
};

export default RegisterForm;
