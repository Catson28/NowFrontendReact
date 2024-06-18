import {User} from "../../../services/types/mainTypes";

type Props = {
    onLogin: (user: User) => void;
}

const noRights: User = {
    firstName: 'No Rights',
    lastName: 'User',
    permissions: [],
}

const viewer: User = {
    firstName: 'Viewer',
    lastName: 'User',
    permissions: ['list.elements'],
}

const contributor: User = {
    firstName: 'Contributor',
    lastName: 'User',
    permissions: ['list.elements', 'add.element'],
}

const administrator: User = {
    firstName: 'Administrator',
    lastName: 'User',
    permissions: ['list.elements', 'add.element', 'delete.element'],
}

const LoginForm: React.FunctionComponent<Props> = ({onLogin}: Props) => (
    <div className="container">
        <div className="card-deck mb-3 text-center">
            <div className="card mb-3 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Visualizador</h4>
                </div>
                <div className="card-body">
                    Você não terá permissão
                    <button type="button" className="btn btn-lg btn-block btn-primary"
                            onClick={() => onLogin(noRights)}>
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
                            onClick={() => onLogin(viewer)}>
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
                            onClick={() => onLogin(contributor)}>
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
                            onClick={() => onLogin(administrator)}>
                        Iniciar sessão como Administrador
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default LoginForm;
