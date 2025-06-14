import { AuthContextDetails } from "./AuthContext";
export const userContext = React.createContext<AuthContextDetails | null>(null);

const userProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => 
