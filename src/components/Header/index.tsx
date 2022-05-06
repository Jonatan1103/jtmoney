import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewtransactionModal : () => void;
}

export function Header({ onOpenNewtransactionModal } : HeaderProps) {

  return(
    <Container>
      <Content>
        <img src={logo} alt="Jt money" />
        <button type="button" onClick={onOpenNewtransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}