import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from 'react-router-dom';

import UserDataService from "../src/services/net/UserDataService";
import IUserData from "../src/services/types/users.type";

interface Props {
  id: number;
  onEdit: (updatedUser: IUserData) => void;
  onDelete: (userId: string) => void;
}

const UserEdit: React.FC<Props> = ({ id, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<IUserData>({
    id: 0,
    name: "",
    description: "",
    images: [], // Adicione a propriedade images ao objeto
  });
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (id) {
      getUser(String(id));
    }
  }, [id]);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setCurrentUser(prevState => ({
      ...prevState,
      name: name,
    }));
  };

  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const description = e.target.value;
    setCurrentUser(prevState => ({
      ...prevState,
      description: description,
    }));
  };

  const getUser = (id: string) => {
    UserDataService.get(id)
      .then((response: any) => {
        setCurrentUser(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  
  const updateUser = () => {
    UserDataService.update(
      currentUser,
      String(currentUser.id)
    )
      .then((response: any) => {
        setMessage("The user was updated successfully!");
        onEdit(currentUser);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const deleteUser = () => {
    UserDataService.delete(String(currentUser.id))
      .then((response: any) => {
        setMessage("The user was deleted successfully!");
        onDelete(String(currentUser.id));
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  
  return (
    <div>
      {id && currentUser ? (
        <div className="edit-form">
          <h4>User</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={currentUser.name}
                onChange={onChangeName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={currentUser.description}
                onChange={onChangeDescription}
              />
            </div>
          </form>
          <button
            className="badge badge-danger mr-2"
            onClick={deleteUser}
          >
            Delete
          </button>
          <button
            type="button"
            className="badge badge-success"
            onClick={updateUser}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>({JSON.stringify(currentUser)}) --- Please click on a User...</p>
        </div>
      )}
    </div>
  );
};

export default UserEdit;
