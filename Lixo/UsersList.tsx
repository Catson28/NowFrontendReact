import React, { Component, ChangeEvent } from "react";
import UserDataService from "../src/services/net/UserDataService";
import IUserData from "../src/services/types/users.type";
import UserImageGalleryComplex from "./UserImageGalleryComplex"; // Importe o novo componente

type Props = {
  onClose: () => void;
  onUsersListClick: () => void;
  onImgUser: (user: IUserData) => void;
  onEditUser: (user: IUserData) => void; // Adicionando propriedade para manipular a edição da categoria no pai
};

type State = {
  users: Array<IUserData>,
  currentUser: IUserData | null,
  currentIndex: number,
  searchName: string
};

export default class UsersList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveUsers = this.retrieveUsers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveUser = this.setActiveUser.bind(this);
    this.removeAllUsers = this.removeAllUsers.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      users: [],
      currentUser: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveUsers();
  }

  onChangeSearchName(e: ChangeEvent<HTMLInputElement>) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveUsers() {
    UserDataService.getAll()
      .then((response: any) => {
        this.setState({
          users: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveUsers();
    this.setState({
      currentUser: null,
      currentIndex: -1
    });
  }

  setActiveUser(user: IUserData, index: number) {
    this.setState({
      currentUser: user,
      currentIndex: index
    });
  }

  removeAllUsers() {
    UserDataService.deleteAll()
      .then((response: any) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  searchName() {
    this.setState({
      currentUser: null,
      currentIndex: -1
    });

    UserDataService.findByName(this.state.searchName)
      .then((response: any) => {
        this.setState({
          users: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { searchName, users, currentUser, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Users List</h4>

          <ul className="list-group">
            {users &&
              users.map((user: IUserData, index: number) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveUser(user, index)}
                  key={index}
                >
                  {user.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllUsers}
          >
            Remove All
          </button>

          <button
            className="m-3 btn btn-sm btn-primary"
            onClick={this.props.onUsersListClick}
          >
            Adicionar
          </button>
        </div>
        <div className="col-md-6">
          {currentUser ? (
            <div>
              <h4>User</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentUser.name}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentUser.description}
              </div>
              {/* Nova seção para a galeria de imagens complexa */}
              <div>
                <label>
                  <strong>Images:</strong>
                </label>{" "}
                <UserImageGalleryComplex images={currentUser.images} />
              </div>
              <button
                className="btn btn-sm badge badge-warning btn-warning ml-2"
                onClick={() => this.props.onEditUser(currentUser)}
              >
                Edit
              </button>

              <button
                  className="btn btn-sm badge btn-primary ml-2"
                  onClick={() => this.props.onImgUser(currentUser)}
                >
                  Upload Photo
                </button>
            </div>
          ) : (
            <div>
              <br />
              <p>(Lista) --- Please click on a User...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
