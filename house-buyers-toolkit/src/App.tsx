import './App.css'
import "./fonts/Urbanist-Bold.woff2"
import "./fonts/Urbanist-Regular.woff2"
import "./fonts/Urbanist-SemiBold.woff2"
import ViewingChecklist from './components/ViewingChecklist'
import Navigation from './components/Navigation'
import MonthlyRepaymentCalculator from './components/MonthlyRepaymentCalculator'
import MaximumBorrowingAmount from './components/MaximumBorrowingAmount'
import Disclaimer from './components/Disclaimer'
import { FeatureFlagsContext } from "../src/components/FeatureFlags";
import { useContext } from 'react'
import LoginForm from './components/LoginForm'
import Header from './components/Header'

function App() {

  const checklist = useContext(FeatureFlagsContext).renderViewingChecklist;
  const calculator = useContext(FeatureFlagsContext).renderMonthlyRepaymentCalculator;
  const maximumborrowingamount = useContext(FeatureFlagsContext).renderMaximumBorrowingAmount;
  const navigation = useContext(FeatureFlagsContext).renderNavigationBar;

  return (
    <>
      <div className='body'>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
  {
    login &&
      <Topline />
  }
>>>>>>> Stashed changes
        <Header />
        <div className='content'>
          {
            navigation &&
            <Navigation />
          }
          {checklist &&
            <ViewingChecklist />
          }
          {maximumborrowingamount &&
            <MaximumBorrowingAmount />
          }
          {calculator &&
            <MonthlyRepaymentCalculator />
          }
          <br></br>
          <div className='footer'>A Toolkit Created By <a href='https://bowoadej.com'>Bowo Adejuyigbe.</a>Copyright 2025. All rights reserved</div>
          <br></br>
          <Disclaimer />
        </div>
      </div >
    </>
  )
}

export default App 