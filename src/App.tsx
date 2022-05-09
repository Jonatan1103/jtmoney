import Modal from 'react-modal'

import { GlobalStyle } from "./styles/global"

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal"
import { TransactionsProvider } from './components/hooks/useTransactions';

import react from "react";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewtransactionModalOpen] = react.useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewtransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewtransactionModalOpen(false)
  }
  
  return (
    <TransactionsProvider>
      <Header onOpenNewtransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle/>
    </TransactionsProvider>
  );
}
