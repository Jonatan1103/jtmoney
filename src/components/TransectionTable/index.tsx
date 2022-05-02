import { useEffect } from "react"
import { api } from "../../services/api"
import { Container } from "./style"


export function TransectionTable() {
  useEffect(()=> {
    api.get('/transections')
      .then(response => console.log(response.data)) 
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