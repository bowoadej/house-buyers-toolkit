import { useState } from "react";

export default function ToolKitForm() {
    let [isCalcultatedMortgageAmount, setisCalcultateMortgageAmount] = useState(false);
    let calculatedMortgageAmount: number = 0;


    function calculateMortgageAmount(event: { preventDefault: () => void; }) {
        let fullMortgageAmount: number = parseFloat((document.getElementById("full-mortgage-amount") as HTMLInputElement).value);
        let mortgageRate: number = parseFloat((document.getElementById("mortgage-rate") as HTMLInputElement).value) / 100;
        let mortgageTerm: number = parseFloat((document.getElementById("mortgage-term") as HTMLInputElement).value) * 12;

        calculatedMortgageAmount = fullMortgageAmount * ((mortgageRate * (1 + mortgageRate) ** mortgageTerm) / ((1 + mortgageRate) ** mortgageTerm - 1));
        setisCalcultateMortgageAmount(true);
        event.preventDefault();
        console.log("Mortgage Amount:" + fullMortgageAmount);
        console.log("Mortgage rate:" + mortgageRate);
        console.log("Mortgage term:" + mortgageTerm);

        return calculatedMortgageAmount;
    }
    let calculatedMortgageMessage = "Estimated Mortgage Amount Is" + calculatedMortgageAmount.toFixed(2);

    return (
        <>
            <div>
                <div className="toolkitform">
                    <form>
                        <h2>Monthly Mortgage Costs</h2>
                        <label>Enter Your Full Mortgage Amount</label>
                        <input type="number" id="full-mortgage-amount"></input>
                        <label>Enter Your Mortgage Rate</label>
                        <input type="number" id="mortgage-rate"></input>
                        <label>Enter Your Mortgage Term</label>
                        <input type="number" id="mortgage-term"></input>
                        <button onClick={calculateMortgageAmount}>Submit</button>
                    </form>
                    {isCalcultatedMortgageAmount &&
                        <label>{calculatedMortgageMessage}</label>
                    }
                </div>
            </div >
        </>
    )
}