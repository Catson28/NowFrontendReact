import React, { useEffect } from 'react';

import AddUser from '../src/components/partials/HomePartial/users/add-user.component';
import CategoriesList from './UsersList';
import UserEdit from './UserEdit';
import { useUserState } from "../../../../services/utils/userUtils";
import ImgUpdateUser from './ImgUpdateUser';

const WholeUser: React.FC = () => {
  const {
    currentUser,
    showUserForm,
    showUser,
    showImgUser,
    showCategoriesList,
    deletedUserId,

    setShowUserForm, // Adicione as funções de configuração ao objeto de retorno
    setShowUser,
    setShowImgUser,
    setShowCategoriesList,
    handleCategoriesListClick,
    handleAddUserClick,
    handleEditUser,
    handleImageUser,
    handleDeleteUser,
    handleUpdateUser,
    categoriesButtonViewText,
    categoriesButtonAddText
  } = useUserState();

  useEffect(() => {
    if (!currentUser && deletedUserId) {
      setShowUser(false);
      setShowCategoriesList(false);
    }
  }, [currentUser, deletedUserId]);


  return (
      <>
        <div className="btn-toolbar justify-content-between p-2" role="toolbar" aria-label="Toolbar with button groups">
          <h2 id="vertical-variation">Lista de Categorias<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#vertical-variation"></a></h2>
          <button type="button" className="btn btn-primary" onClick={handleCategoriesListClick}>{categoriesButtonViewText}</button>
        </div>
        {showUserForm && (
          <AddUser onClose={() => setShowUserForm(false)} />
        )}
        {showCategoriesList && (
          <CategoriesList onClose={() => setShowCategoriesList(false)}  onEditUser={handleEditUser} onImgUser={handleImageUser}  onCategoriesListClick={handleCategoriesListClick} />
        )}
        {showUser && currentUser && (
          <UserEdit id={currentUser.id} onEdit={handleUpdateUser}  onDelete={handleDeleteUser} />
        )}
        {showImgUser && currentUser && (
          <ImgUpdateUser id={currentUser.id}  />
        )}

      </>
  );
};

export default WholeUser;
