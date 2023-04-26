import userEvent from "@testing-library/user-event"
import { render } from '@testing-library/react';
import { createReduxStore } from "../../store/store"
import Counter from "./Counter"
import { Provider } from "react-redux";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";

describe('Couter test', () => {
    test('test router', async () => {
        const {getByTestId} = render(renderWithRedux(<Counter/>, {
            counter: {
                value: 10
            }
        }))
        const incrementBtn = getByTestId('increment-btn')
        expect(getByTestId('value-title')).toHaveTextContent('10')
        userEvent.click(incrementBtn) 
        expect(getByTestId('value-title')).toHaveTextContent('11')
    })
})