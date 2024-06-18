import React from 'react';
import {Permission} from "../../types/mainTypes";

type PermissionContextType = {
    isAllowedTo: (permission: Permission) => Promise<boolean>;
}

const defaultBehaviour: PermissionContextType = {
    isAllowedTo: () => Promise.resolve(false)
}

const PermissionContext = React.createContext<PermissionContextType>( defaultBehaviour);

export default PermissionContext;
