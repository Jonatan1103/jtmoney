import Modal from 'react-modal'

import { GlobalStyle } from "./styles/global"

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal"
import { TransactionsProvider } from './TransactionsContext';

import react from "react";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransectionModalOpen] = react.useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransectionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransectionModalOpen(false)
  }
  
  return (
    <TransactionsProvider>
      <Header onOpenNewTransectionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle/>
    </TransactionsProvider>
  );
}
