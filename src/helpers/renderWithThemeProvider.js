import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider} from "styled-components";
import {theme} from "../assets/styles/theme";
import UsersProvider from "../providers/UsersProvider";

export const renderWithThemeProvider = (children) => {
    return render(<ThemeProvider theme={theme}>
        <UsersProvider> {children} </UsersProvider>
    </ThemeProvider>);
};