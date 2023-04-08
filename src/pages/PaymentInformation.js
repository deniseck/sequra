import styled from 'styled-components';
const Wrapper = styled.div`
    position: fixed;
    top: 30%;
    left: 50%;
    width: 400px;
    height: 500px;
    
    padding: 16px 32px;
    margin: 16px 0px;
    border: 1px solid;
    background-color: white;

    z-index:10;
    transform: translate(-50%,-50%);
    ${({ show }) => show && `
        display: display-block;
  `}
  ${({ show }) => !show && `
        display: none;
  `}
`;
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 32px;
    font-size: 1.5em;
`;
const Close = styled.div`
    cursor: pointer;
`;
const Content = styled.div`
p {
    margin: 32px 0px;
  }
`;
const Footer = styled.div`
margin-top: 64px;

p {
    margin: 16px 0px;
  }
`;

const PaymentInformation = (props) => {
    const { show, fee, handleClose } = props;
    return (
        <Wrapper show={show}>
            <Header>
                <div>
                    Fracciona tu pago
                </div>
                <Close onClick={handleClose}>x</Close>
            </Header>
            <Content>
                <p>1. Eliges "Fraciona tu pago" al realizar tu pedido y pagas sólo la primera cuota.</p>
                <p>2. Recibes tu pedido</p>
                <p>3. El resto de pagos se cargarán automáticamente en tu tarjeta.</p>
            </Content>
            <Footer>
                <strong>¡Así de simple!</strong>
                <div>Además, en el importe mostrado ya se incluye la cuota única mensual de {fee}/mes, por lo que no tendrás ninguna sorpresa.</div>
            </Footer>
        </Wrapper>
    )
}

export default PaymentInformation;