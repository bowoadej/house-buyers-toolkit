import React, { useState } from 'react'
import Disclaimer from './Disclaimer';

export default function MonthlyRepaymentCalculator() {

    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [showMonthlyAmount, setMonthlyAmount] = useState(false);


    function calculateMonthlyMortgagePayment() {
        const principal: number = parseFloat((document.getElementById("principal") as HTMLInputElement).value);

        const interestRate: number = parseFloat((document.getElementById("interest") as HTMLInputElement).value);

        const loanTermInYears: number = parseFloat((document.getElementById("term") as HTMLInputElement).value);
        // Convert interest rate from a percentage to a decimal
        const monthlyInterestRate = interestRate / 100 / 12;

        // Calculate the number of payments (months)
        const loanTermInMonths = loanTermInYears * 12;

        // Calculate the monthly payment
        const calculatedPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTermInMonths));
        setMonthlyPayment(parseFloat(calculatedPayment.toFixed(2)))
        setMonthlyAmount(true);
        return calculatedPayment.toFixed(2); // Format the result to two decimal places
    }

    function toggleActive() {
        if (isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };

    return (
        <div className="accordion-monthly-repayment-calculator" >
            <div className="monthly-repayment-accordion-title" onClick={() => toggleActive()}><h2>Monthly Repayment Calculator<div className='accordion-icon'>{isActive ? '-' : '+'}</div></h2></div>
            {isActive &&
                <div className="monthly-repayment-calculator" id="monthly-repayment-calculator">
                    <p>Enter your full mortgage amount, mortgage amount intrest rate and mortgage term in years below. </p>
                    <div id="calculator">
                        <div id="mortgage-amount-calculator">
                            <label htmlFor='principal'>Full Mortgage Amount:</label>
                            <input type="number" id='principal' />
                        </div>
                        <br></br>
                        <div id="mortgage-amount-interest">
                            <label htmlFor='intrest'>Mortgage Interest Rate:</label>
                            <input type="number" id='interest' />
                        </div>
                        <br></br>
                        <div id="mortgage-term-year">
                            <label htmlFor='term'>Mortgage Term In Years:</label>
                            <input type="number" id='term' />
                        </div>
                        <br></br>
                        <Disclaimer />
                        <div id="calculator-submit-button">
                            <button onClick={calculateMonthlyMortgagePayment}>Submit</button>
                        </div>
                        {showMonthlyAmount &&
                            <div className="monthly-repayment-result">
                                <label>Your Monthly Repayment Will Be {monthlyPayment}</label>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}