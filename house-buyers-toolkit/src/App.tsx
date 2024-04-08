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
import Topline from './components/Topline'

function App() {

  const checklist = useContext(FeatureFlagsContext).renderViewingChecklist;
  const calculator = useContext(FeatureFlagsContext).renderMonthlyRepaymentCalculator;
  const maximumborrowingamount = useContext(FeatureFlagsContext).renderMaximumBorrowingAmount;
  const navigation = useContext(FeatureFlagsContext).renderNavigationBar;
  const login = useContext(FeatureFlagsContext).renderLogin;

  return (
    <>
      <div className='body'>
        {login &&
          <Topline />
        }
        <Header />
        {
          navigation &&
          <Navigation />
        }
        <div className='content'>

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
          <div className='footer'>A Toolkit Created By <a href='https://bowoadej.com'>Bowo Adejuyigbe</a></div>
          <br></br>
          <Disclaimer />
        </div>
      </div>
    </>
  )
}

export default App