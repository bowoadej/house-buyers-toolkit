import { createContext } from "react";

export const FeatureFlagsContext = createContext({
    PdfContext: false,
    renderNavigationBar: false,
    renderViewingChecklist: true,
    renderMaximumBorrowingAmount: true,
    renderMonthlyRepaymentCalculator: true,
    otherFeature: true, // Example for another feature flag
})