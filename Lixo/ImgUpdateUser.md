import React from 'react';
import FormImgUploadUser from "./FormImgUploadUser";

interface Props {
  id: number; // Adicione a propriedade id ao tipo Props
};

const ImgUpdateUser: React.FC<Props> = ({ id }) => {
  return (
    <div>
      <h1>Carregamento de Imagens</h1>
      <FormImgUploadUser id={id}/>

    </div>
  );
};

export default ImgUpdateUser;
