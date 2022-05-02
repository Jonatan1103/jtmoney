import { GlobalStyle } from "./styles/global"
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { useState } from "react";

export function App() {
  const [isNewTransectionModalOpen, setIsNewTransectionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransectionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransectionModalOpen(false)
  }
  
  return (
    <>
      <Header onOpenNewTransectionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>

      <Modal 
          isOpen={isNewTransectionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
      >
          <h2>Cadastrar transações</h2>
      </Modal>

      <GlobalStyle/>
    </>
  );
}
