import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransectionModal : () => void;
}

export function Header({ onOpenNewTransectionModal } : HeaderProps) {

  return(
    <Container>
      <Content>
        <img src={logo} alt="Jt money" />
        <button type="button" onClick={onOpenNewTransectionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}