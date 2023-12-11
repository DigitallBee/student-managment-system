import React from "react";
import AddUser from "../../../views/AddUser";
import Dashboard from "../../../views/Dashboard";
import {renderWithThemeProvider} from "../../../helpers/renderWithThemeProvider";
import {screen, fireEvent} from "@testing-library/react";

describe('Form field', () => {
    it('Renders the component', () => {
        renderWithThemeProvider(
            <>
            <AddUser/>
            <Dashboard/>
            </>
    );
        fireEvent.change(screen.getByTestId('Name'), {target: {value: 'Galopikos' } });
        fireEvent.change(screen.getByTestId('Attendance'), {target: {value: '39%' } });
        fireEvent.change(screen.getByTestId('Average'), {target: {value: '2.3' } });
        fireEvent.click(screen.getByText('Add'));
        screen.getByText('Galopikos');
    });
});