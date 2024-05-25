import React, { Component, ChangeEvent } from "react";
import UserDataService from "../../../../services/net/UserDataService";
import IUserData from "../../../../services/types/user.type";

type State = IUserData & {
  submitted: boolean;
};

// Use an empty object {} if no props are passed to AddUser
export default class AddUser extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state = {
      id: 0, // Assuming id is of type number
      name: "",
      password: "",
      images: [], // Add the images property here
      submitted: false
    };
  }

  onChangeName(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePassword(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      password: e.target.value
    });
  }

  saveUser() {
    const data: IUserData = {
      id: this.state.id,
      name: this.state.name,
      password: this.state.password,
      images: this.state.images // Assuming images is of type array
    };

    UserDataService.postUsers(data)
      .then((response: any) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          password: response.data.password,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newUser() {
    this.setState({
      id: 0, // Assuming id is of type number
      name: "",
      password: "",
      images: [], // Reset the images array
      submitted: false
    });
  }

  render() {
    const { submitted, name, password } = this.state;

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newUser}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={password}
                onChange={this.onChangePassword}
                name="password"
              />
            </div>

            <button onClick={this.saveUser} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
