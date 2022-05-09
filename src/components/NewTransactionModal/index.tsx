import { FormEvent, useState } from "react"
import { useTransaction } from "../hooks/useTransactions"
import Modal from "react-modal"

import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

import { Container, TransactionTypeContainer, RadioBox } from "./style"

interface NewtransactionProps {
  isOpen: boolean
  onRequestClose: () => void

}

export function NewTransactionModal({ isOpen, onRequestClose }: NewtransactionProps) {

  const { createdTransaction } = useTransaction()
  
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('deposit')

  async function handleCreatNewtransaction(event: FormEvent) {
    event.preventDefault()

    await createdTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }


  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img 
          src={closeImg} 
          alt="Fechar modal"
        />
      </button>

      <Container onSubmit={handleCreatNewtransaction}>
        <h2>Cadastrar transações</h2>

        <input 
          placeholder='Título'
          value={title}
          onChange={ event => setTitle(event.target.value) }
        />

        <input 
          type="number" 
          placeholder='Valor'
          value={amount}
          onChange={ event => setAmount(event.target.valueAsNumber) }
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button" 
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button" 
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='Categoria'
          value={category}
          onChange={ event => setCategory(event.target.value) }
        />

        <button type="submit">Cadastrar</button>
      </Container>

    </Modal>
  )
}