import { createContext } from "react";

export const FeatureFlagsContext = createContext({
    PdfContext: false, //Enables the Comment Boxes on the House Viewing Checklist
    renderNavigationBar: false, // Enables the navigation bar on the front page
    renderViewingChecklist: true, //Enables the House Viewing Checklist component
    renderMaximumBorrowingAmount: true, //Enables the Maximum Borrowing Amount component
    renderMonthlyRepaymentCalculator: true, // Enables the Monthly Repayment Calculator
    renderLogin: true, //Enables the render login component
    otherFeature: true, // Example for another feature flag enables the other feature
    placeHolderAuth: true, //Using a feature flag which provides the placeHolderAuth
})