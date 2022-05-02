import { useEffect } from "react"
import { Container } from "./style"


export function TransectionTable() {
  useEffect(()=> {
    fetch('http://localhost:3000/api/transections')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1100</td>
            <td>Desenvolvimento</td>
            <td>10/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}