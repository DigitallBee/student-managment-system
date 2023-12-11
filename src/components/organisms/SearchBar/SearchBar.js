import React from "react";
import {StatusInfo, SearchBarWrapper} from "./SearchBar.styles";

export const SearchBar = () => (
    <SearchBarWrapper>
        <StatusInfo>
            <p>Logged as:</p>
            <p><strong>Teacher</strong></p>
        </StatusInfo>
        <input/>
    </SearchBarWrapper>
);