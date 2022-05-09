import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewtransactionModal : () => void;
}

export function Header({ onOpenNewtransactionModal } : HeaderProps) {

  return(
    <Container>
      <Content>
        <h2>JT Finanças</h2>
        <button type="button" onClick={onOpenNewtransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}