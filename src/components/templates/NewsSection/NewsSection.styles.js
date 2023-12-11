import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import styled from "styled-components";

export const NewsWrapper = styled.div `
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({theme}) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  overflow-y: scroll;

`;

export const NewsWrapperHeader = styled.h2`
  margin-right: auto;
  color: ${({theme}) => theme.colors.darkGrey};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  color: ${({theme}) => theme.colors.darkGrey};
`;

export const TittleWrapper = styled.div`
  h3 {
    font-size: ${({theme}) => theme.fontSize.xl};
    margin: 0%;
  }

  p {
    margin-top: 3px;
    font-size: ${({theme}) => theme.fontSize.m};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

`;

