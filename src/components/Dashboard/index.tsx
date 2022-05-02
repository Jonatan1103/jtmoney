import { Summary } from "../Summary"
import { Container } from "./style"
import { TransectionTable } from "../TransectionTable"

export function Dashboard() {
  return(
    <Container>
      <Summary />
      <TransectionTable />
    </Container>
  )
}