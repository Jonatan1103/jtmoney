import { Summary } from "../Summary"
import { Container } from "./style"
import { TransectionTable } from "../TransactionTable"

export function Dashboard() {
  return(
    <Container>
      <Summary />
      <TransectionTable />
    </Container>
  )
}