// src/SectionCreateSolicit.tsx
import React from 'react';
import Container from './common/Container';
import styled from 'styled-components';



const Raw = styled.div`
opacity: 1;
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transition: opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
justify-content: space-between;


@media screen and (max-width: 767px) {
  display: block;
}

@media screen and (max-width: 479px) {
  display: block;
}
`;
const Content = styled.div`
margin: 4rem 0 0 0;
display: block;
unicode-bidi: isolate;
`;

const Image = styled.div`
display: block;
unicode-bidi: isolate;
`;


const CardImage = styled.img`
  height: 33rem;
`;

const SectionCreateSolicit: React.FC = () => {
  return (
    <div>
    <Container>
      <Raw>
        <Content>
          <h1>
            Na ponta dos dedos, serviço sem segredos!
          </h1>
          <p>Agora é fácil encontrar varios serviços num clique na primeira plataforma em Angola que oferece serviços pontuais.</p>
        </Content>
        <Image>
          <CardImage src="http://localhost:3000/Layer4.png" alt="Service Image" />
        </Image>
      </Raw>
    </Container>

    </div>
  );
};

export default SectionCreateSolicit;
