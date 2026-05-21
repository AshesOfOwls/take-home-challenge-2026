import styled from '@emotion/styled';

// Basic colors
const borderColor = '#D8DEE3';

// Components
export const CardContainer = styled.div`
  width: 300px;
  height: 430px;
  border: 1px solid ${borderColor};
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const Brand = styled.div``;

export const Name = styled.div``;

export const Price = styled.div``;
