import styled from 'styled-components';

const CardListWrapper = styled.ul`
  margin: 1rem auto;
  max-height: 700px;
  list-style-type: disc;
  padding-left: 1.5rem;
  font-size: 20px;  
`;

export const DetailedProductDesc = () => {
    return (
        <CardListWrapper>
            Каждый «жучок/паучок/ящерка» проходят трех этапный марафон по растворам. А вот рецепт этих растворов и  граммовка у каждого мастера своя.
        </CardListWrapper>
    );
};