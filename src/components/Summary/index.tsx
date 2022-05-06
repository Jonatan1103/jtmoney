import {useContext} from "react";

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { Container } from "./style";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {

  const { transactions } = useContext(TransactionsContext)
  console.log(transactions);

  const totalTransactions = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total:0,
  })
  
  console.log(totalTransactions)
  
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas de valores" />
        </header>
        <strong>R${totalTransactions.deposits}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="saída de valores" />
        </header>
        <strong>- R${totalTransactions.withdraws}</strong>
      </div>

      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="entradas de valores" />
        </header>
        <strong>R${totalTransactions.total}</strong>
      </div>
    </Container>
  )
}