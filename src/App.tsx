import Modal from 'react-modal'

import { GlobalStyle } from "./styles/global"

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal"

import { useState } from "react";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransectionModalOpen] = useState(false)

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

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle/>
    </>
  );
}
