import { Summary } from "../Summary"
import { Container } from "./style"
import { TransactionTable } from "../TransactionTable"

export function Dashboard() {
  return(
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  )
}