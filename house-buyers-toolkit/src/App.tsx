import './App.css'
import ViewingChecklist from './components/ViewingChecklist'
import Navigation from './components/Navigation'
import MonthlyRepaymentCalculator from './components/MonthlyRepaymentCalculator'
import MaximumBorrowingAmount from './components/MaximumBorrowingAmount'
import Disclaimer from './components/Disclaimer'
function App() {

  return (
    <>
      <div className='body'>
        <div className='header'>
          <h1>House Buyers Toolkit</h1>
          <Disclaimer />
        </div>
        <br></br>
        <div className='content'>
          <ViewingChecklist />
          <br></br>
          <MaximumBorrowingAmount />
          <br></br>
          <MonthlyRepaymentCalculator />
          <br></br>
          <div className='footer'>A Toolkit Created By <a href='https://bowoadej.com'>Bowo Adejuyigbe</a></div>
          <br></br>
          <Disclaimer />
        </div>
      </div>
    </>
  )
}

export default App
