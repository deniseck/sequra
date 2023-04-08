import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PaymentOptions from '../pages/PaymentOptions';


jest.mock("../pages/api/CreditAgreementApi", () => {
    return {
        getPaymentOptions: jest.fn(() => {
            const response = [{ instalment_count: 3, instalment_total: { string: "30 e" }, instalment_fee: "1" }, { instalment_count: 6, instalment_total: { string: "15 e" }, instalment_fee: "1" }];
            return new Promise((resolve) => {
                resolve(response);
            });
        })
    };
});

describe('Payment options', () => {
    it('Show payment options', async () => {
        render(
            <PaymentOptions totalPrice="900"></PaymentOptions>
        );

        await waitFor(() => {
            expect(screen.getByText(`Fracciona tu pago`)).toBeInTheDocument();
            expect(screen.getByText(`3 cuotas de 30 e/mes`)).toBeInTheDocument();
        })

    });
});