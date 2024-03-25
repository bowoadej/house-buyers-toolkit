import React, { useState } from 'react'
import Disclaimer from './Disclaimer';

export default function MaximumBorrowingAmount() {
    const [NumberofBuyers, setNumberofBuyers] = useState(0);
    const [showBorrowingAmount, setshowBorrowingAmount] = useState(false);
    const [isActive, setIsActive] = useState(false);


    const [calculatedAmountArray, setcalculatedAmountArray] = useState<{ firstAmount: Number; secondAmount: Number; }>({
        firstAmount: 0,
        secondAmount: 0,
    })

    function settingNumberOfBuyers(buyers: number) {
        setNumberofBuyers(buyers)
        console.log(NumberofBuyers)
    }

    function handleClick() {
        const numberOfBuyers: number = NumberofBuyers;

        if (numberOfBuyers == 1) {
            const firstPersonIncome: number = parseFloat((document.getElementById("firstPersonIncome") as HTMLInputElement).value);

            const firstCalculatedAmount = (firstPersonIncome) * 3.5;

            const secondCalculatedAmount = (firstPersonIncome) * 5
            setcalculatedAmountArray({ firstAmount: firstCalculatedAmount, secondAmount: secondCalculatedAmount });
            setshowBorrowingAmount(true);
            return calculatedAmountArray;

        } else {
            const firstPersonIncome: number = parseFloat((document.getElementById("firstPersonIncome") as HTMLInputElement).value);
            const secondPersonIncome: number = parseFloat((document.getElementById("secondPersonIncome") as HTMLInputElement).value) || 0;

            const firstCalculatedAmount = (firstPersonIncome + secondPersonIncome) * 3.5;

            const secondCalculatedAmount = (firstPersonIncome + secondPersonIncome) * 5
            setcalculatedAmountArray({ firstAmount: firstCalculatedAmount, secondAmount: secondCalculatedAmount });
            setshowBorrowingAmount(true);
            return calculatedAmountArray;

        }






    }

    function toggleActive() {
        if (isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };

    return (
        <div className="accordion-maximum-borrowing-amount" >
            <div className="accordion-item-maximum-borrowing-amount" >
                <div data-testid="accordionTitle" className='accordion-title' onClick={() => toggleActive()}><h2>Maximum Borrowing Amount <div className='accordion-icon'>{isActive ? '-' : '+'}</div></h2></div>
                {isActive &&
                    <div className='maximum-borrowing-amount-calculator'>
                        <div className='maximum-borrowing-amount'>
                            <div id='no-of-buyers'>
                                <h3>How Many Buyers Are Involved?</h3>
                                <label>1</label>
                                <input type='radio' name="number_of_buyers" id='numberOfBuyers' value="1" onClick={() => settingNumberOfBuyers(1)} />
                                <br></br>
                                <label>2</label>
                                <input type='radio' name="number_of_buyers" id='numberOfBuyers' value="2" onClick={() => settingNumberOfBuyers(2)} />
                            </div>
                        </div>
                        <div id='person-one-income'>
                            <h3>First persons income</h3>
                            <input type='number' id="firstPersonIncome" />
                        </div>
                        {NumberofBuyers == 2 &&
                            < div id='person-two-income'>
                                <h3>Second Person's Income</h3>
                                <input type='number' id='secondPersonIncome' />
                            </div>
                        }
                        <Disclaimer />
                        <div className='submit'>
                            <button onClick={handleClick}>Submit</button>
                        </div>
                        {showBorrowingAmount &&
                            <div className='maxBorrowingAmountResult'>
                                <p>The Estimated Maximum Borrowing Amount is £{calculatedAmountArray.firstAmount.toString()} - £{calculatedAmountArray.secondAmount.toString()}</p>
                            </div>
                        }
                    </div >
                }
            </div>
        </div>
    )
}