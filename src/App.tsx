import Modal from 'react-modal'

import { GlobalStyle } from "./styles/global"

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { NewTransectionModal } from "./components/NewTransectionModal"

import { useState } from "react";

Modal.setAppElement('#root')

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

      <NewTransectionModal 
        isOpen={isNewTransectionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle/>
    </>
  );
}
