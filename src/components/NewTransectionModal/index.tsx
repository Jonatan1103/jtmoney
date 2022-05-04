import { FormEvent, useState } from "react"
import Modal from "react-modal"

import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

import { Container, TransectionTypeContainer, RadioBox } from "./style"

interface NewTransectionProps {
  isOpen: boolean
  onRequestClose: () => void

}

export function NewTransectionModal({ isOpen, onRequestClose }: NewTransectionProps) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [value, setValue] = useState(0)
  const [type, setType] = useState('deposit')

  function handleCreatNewTransection(event: FormEvent) {
    event.preventDefault()

    console.log(title, value, category, type);
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

      <Container onSubmit={handleCreatNewTransection}>
        <h2>Cadastrar transações</h2>

        <input 
          placeholder='Título'
          value={title}
          onChange={ event => setTitle(event.target.value) }
        />

        <input 
          type="number" 
          placeholder='Valor'
          value={value}
          onChange={ event => setValue(event.target.valueAsNumber) }
        />

        <TransectionTypeContainer>
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
        </TransectionTypeContainer>

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