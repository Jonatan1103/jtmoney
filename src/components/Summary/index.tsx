import {useContext} from "react";

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { Container } from "./style";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {

  const { transactions } = useContext(TransactionsContext)
  console.log(transactions);

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas de valores" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="saída de valores" />
        </header>
        <strong>- R$100,00</strong>
      </div>

      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="entradas de valores" />
        </header>
        <strong>R$900,00</strong>
      </div>
    </Container>
  )
}