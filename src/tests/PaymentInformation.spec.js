import PaymentInformation from '../pages/PaymentInformation';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';



it('snapshot test', () => {
    const component = renderer.create(
        <PaymentInformation show={true} fee="5 e" handleClose={() => { }}></PaymentInformation>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('Show the fee correctly', () => {
    render(
        <PaymentInformation show={true} fee="3 e" handleClose={() => { }}></PaymentInformation>
    );
    expect(screen.getByText(`Además, en el importe mostrado ya se incluye la cuota única mensual de 3 e/mes, por lo que no tendrás ninguna sorpresa.`)).toBeInTheDocument()
});