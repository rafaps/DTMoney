import logoImg from '../../assets/Logo.svg'

import {Container, Content} from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="DT Money"/>
                <button type="button">New Transaction</button>
            </Content>
        </Container>
        )
}