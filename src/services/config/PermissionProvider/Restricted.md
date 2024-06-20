```tsx
import React from 'react';
import { Permission } from "../../types/mainTypes";
import usePermission from "./usePermission";

type Props = {
    to: Permission;
    fallback?: JSX.Element | string;
    loadingComponent?: JSX.Element | string;
};

const Restricted: React.FunctionComponent<React.PropsWithChildren<Props>> = ({ to, fallback, loadingComponent, children }) => {

    const [loading, allowed] = usePermission(to);

    if (loading) {
        return <>{loadingComponent}</>;
    }

    if (allowed) {
        return <>{children}</>;
    }

    return <>{fallback}</>;
};

export default Restricted;
```
