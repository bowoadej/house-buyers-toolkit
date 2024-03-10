import { useState } from 'react'
import './App.css'
import ToolKitForm from './components/ToolKitForm'
import ViewingChecklist from './components/ViewingChecklist'
function App() {

  return (
    <>
      <div>
        <h1>House Buyers Toolkit</h1>
        <h3>NOTE:This information is purely for informative purposes only. It does not consitute as financial information and does not consistiute a contract. Please contact a certified financial professional for financial advice.</h3>
      </div>
      <ViewingChecklist />
    </>
  )
}

export default App
