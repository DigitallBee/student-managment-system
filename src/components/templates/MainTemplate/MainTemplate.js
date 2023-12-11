import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import {theme} from "../../../assets/styles/theme";
import {SearchBar} from "../../organisms/SearchBar/SearchBar";
import {NewsSection} from "../NewsSection/NewsSection";
const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
        <SearchBar/>
      {children} 4
        <NewsSection/>
    </Wrapper>
  );
};

export default MainTemplate;
