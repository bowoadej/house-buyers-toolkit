test('Check if the component expands', () => {
    document.body.innerHTML = `<div className='accordion-title'></div>`;

    require('../src/components/MaximumBorrowingAmount');

    const MaximumBorrowingAmountAccordionTitle = document.getElementById('accordion-title');

    MaximumBorrowingAmountAccordionTitle.click();

    expect(MaximumBorrowingAmountAccordionTitle.innerHTML).toBe(`<div className='maximum - borrowing - amount - calculator'>
    < div className = 'maximum-borrowing-amount' >
        <div id='no-of-buyers'>
            <h3>How Many Buyers Are Involved?</h3>
            <label>1</label>
            <input type='radio' name="number_of_buyers" id='numberOfBuyers' value="1" onClick={() => settingNumberOfBuyers(1)} />
            <br></br>
            <label>2</label>
            <input type='radio' name="number_of_buyers" id='numberOfBuyers' value="2" onClick={() => settingNumberOfBuyers(2)} />
        </div>
</div >
    <div id='person-one-income'>
        <h3>First persons income</h3>
        <input type='number' id="firstPersonIncome" />
    </div>`);




});