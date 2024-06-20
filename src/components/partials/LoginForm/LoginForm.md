```tsx
import React from 'react';
import { User } from "../../../services/types/mainTypes";

type Props = {
    onLogin: (user: User) => void;
};

// Função para obter o usuário atual do localStorage
function getCurrentUser(): User | null {
    const userStr = localStorage.getItem("user");
    if (userStr) {
        return JSON.parse(userStr);
    }
    return null;
}

// Obter o usuário atual
const user = getCurrentUser();

// Declaração das constantes como null inicialmente
const roles = {
    administrator: null as User | null,
    viewer: null as User | null,
    contributor: null as User | null,
    noRights: null as User | null,
};

// Função para lidar com diferentes roles de usuários
function handleUserRole(user: User | null) {
    if (!user) {
        console.log("O usuário não está logado.");
        return;
    }

    switch (user.role) {
        case "Administrador":
            roles.administrator = user;
            console.log("O administrador é:", roles.administrator);
            break;
        case "Viewer":
            roles.viewer = user;
            console.log("O viewer é:", roles.viewer);
            break;
        case "Contributor":
            roles.contributor = user;
            console.log("O contributor é:", roles.contributor);
            break;
        default:
            roles.noRights = user;
            console.log("O usuário tem um role desconhecido:");
            break;
    }
}

// Chamar a função para lidar com o role do usuário
handleUserRole(user);

const LoginForm: React.FunctionComponent<Props> = ({ onLogin }: Props) => (
    <div className="container">
        <div className="card-deck mb-3 text-center">
            <div className="card mb-3 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Visualizador</h4>
                </div>
                <div className="card-body">
                    Você não terá permissão
                    <button type="button" className="btn btn-lg btn-block btn-primary"
                        onClick={() => onLogin(roles.noRights!)}>
                        Login sem permissões
                    </button>
                </div>
            </div>
            <div className="card mb-3 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Visualizador</h4>
                </div>
                <div className="card-body">
                    Você será capaz de
                    <li>elementos da lista</li>
                    <button type="button" className="btn btn-lg btn-block btn-primary"
                        onClick={() => onLogin(roles.viewer!)}>
                        Iniciar sessão como Visualizador
                    </button>
                </div>
            </div>
            <div className="card mb-3 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Contribuidor</h4>
                </div>
                <div className="card-body">
                    Você será capaz de
                    <ul>
                        <li> Listar elementos</li>
                        <li> Adicionar elementos</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary"
                        onClick={() => onLogin(roles.contributor!)}>
                        Iniciar sessão como Colaborador
                    </button>
                </div>
            </div>
            <div className="card mb-3 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Administrador</h4>
                </div>
                <div className="card-body">
                    Você será capaz de
                    <ul>
                        <li> Listar elementos</li>
                        <li> Adicionar elementos</li>
                        <li> Remover elementos</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary"
                        onClick={() => onLogin(roles.administrator!)}>
                        Iniciar sessão como Administrador
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default LoginForm;
```