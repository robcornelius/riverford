import { useContext } from "react";
import { AppDetailsContext } from "../contexts/AppDetailsContext";

const useAppDetails = () => {
  const context = useContext(AppDetailsContext);
  if (context === undefined) {
    throw new Error("this must be used in a context");
  }
  return context;
};
export default useAppDetails;
