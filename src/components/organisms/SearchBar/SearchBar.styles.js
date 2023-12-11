import React from "react";
import styled from "styled-components";


export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({theme}) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;

  input {
    width: 100%;
    max-width: 350px;
    margin: 25px;
    height: 35px;
    border-radius: 100px;
    border: 2px solid #c4c1c1;
    font-size: ${({theme}) => theme.fontSize.xl}
  }

`;


export const StatusInfo = styled.div`
  color: ${({theme}) => theme.colors.darkGrey};
  font-size: ${({theme}) => theme.fontSize.l};

  p {
    margin: 1px;

  };
`;