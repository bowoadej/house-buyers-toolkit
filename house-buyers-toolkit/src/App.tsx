import './App.css'
import ViewingChecklist from './components/ViewingChecklist'
import Navigation from './components/Navigation'
import MonthlyRepaymentCalculator from './components/MonthlyRepaymentCalculator'
import MaximumBorrowingAmount from './components/MaximumBorrowingAmount'
function App() {

  return (
    <>
      <div className='body'>
        <div className='header'>
          <h1>House Buyers Toolkit</h1>
          <h3>NOTE:This information is purely for informative purposes only. It does not consitute as financial information and does not consistiute a contract. Please contact a certified financial professional for financial advice.</h3>
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
        </div>
      </div>
    </>
  )
}

export default App
