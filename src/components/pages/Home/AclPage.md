```tsx
import { useState } from 'react';
import '../../../App.css';
import { Permission, User } from "../../../services/types/mainTypes";
import LoginForm from "../../partials/LoginForm";
import ElementList from "../../partials/ElementList";
import { removeElement, addElement, getElements } from "../../../services/storage/ElementsStore";
import PermissionProvider from "../../../services/config/PermissionProvider/PermissionProvider";
import Restricted from "../../../services/config/PermissionProvider/Restricted";

const fetchPermission = (user: User) => async (permission: Permission): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return user.permissions.includes(permission);
}


function getCurrentUser(): User | null {
    const userStr = localStorage.getItem("user");
    if (userStr) {
        return JSON.parse(userStr);
    }
    return null;
}


function AclPage() {


    const [currentUser, setCurrentUser] = useState<User | null>(getCurrentUser());

    if (!currentUser) {
        return <LoginForm onLogin={setCurrentUser} />;
    }

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem("user");
    }

    const notAllowed = (<div className="container">
        <div className="row">
            <div className="col">
                <h4>Não permitido</h4>
                Você não tem permissão para acessar esse recurso, entre em contato com o administrador
            </div>
        </div>
    </div>);

    return (
        <PermissionProvider fetchPermission={fetchPermission(currentUser)}>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">Demonstração do provedor de permissão</h5>
                {currentUser.role} {currentUser.username} &nbsp;
                <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
            </div>
            {/* <Restricted to="list.elements" fallback={notAllowed}> */}
            <Restricted to="list.text" fallback={notAllowed}>
                <ElementList getElements={getElements} addElement={addElement} removeElement={removeElement} />
            </Restricted>
        </PermissionProvider>
    );
}

export default AclPage;
```