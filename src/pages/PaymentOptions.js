import styled from 'styled-components';
import { useState } from 'react';
import PaymentInformation from './PaymentInformation';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 5px;
    padding: 8px 16px;
    margin: 16px 0px;
`;
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const Link = styled.div`
    color: blue;
    text-decoration: underline;
    cursor: pointer;
`;
const Content = styled.div`
    padding: 8px 0px;
`;
const Select = styled.select`
    padding: 4px;
    width: 100%;
`;

const PaymentOptions = () => {
    const [showPaymentInfo, setShowPaymentInfo] = useState(false);

    const handleClose = () => {
        setShowPaymentInfo(false);
    }

    return (
        <Card>
            <Header>
                <div>
                    Págalo en:
                </div>
                <Link onClick={() => { setShowPaymentInfo(true) }}>
                    más info
                </Link>
            </Header>
            <Content>
                <Select>
                    <option>3 cuotas de 3e/mes</option>
                </Select>
            </Content>
            <PaymentInformation show={showPaymentInfo} fee={5} handleClose={() => { handleClose() }}>
            </PaymentInformation>
        </Card>
    );
}

export default PaymentOptions;