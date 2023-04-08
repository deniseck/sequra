import styled from 'styled-components';
import { useState, useEffect } from 'react';
import PaymentInformation from './PaymentInformation';
import CreditAgreementApi from './api/CreditAgreementApi'

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

const PaymentOptions = ({ totalPrice }) => {
    const [showPaymentInfo, setShowPaymentInfo] = useState(false);
    const [creditAgreement, setCreditAgreement] = useState([]);
    const [fee, setFee] = useState();

    const handleClose = () => {
        setShowPaymentInfo(false);
    }

    useEffect(() => {
        CreditAgreementApi.getPaymentOptions(totalPrice.replace(',', '')).then((response) => {
            setCreditAgreement(response);
            setFee(response[0].instalment_fee.string);
        });
    }, [totalPrice])

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
                    {creditAgreement.map((x, index) => (
                        <option key={index} value={x.instalment_count}>{x.instalment_count} cuotas de {x.instalment_total.string}/mes</option>
                    ))}
                </Select>
            </Content>
            <PaymentInformation show={showPaymentInfo} fee={fee} handleClose={() => { handleClose() }}>
            </PaymentInformation>
        </Card>
    );
}

export default PaymentOptions;