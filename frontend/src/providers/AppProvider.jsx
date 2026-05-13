import { SearchBarProvider } from "../contexts/searchBar/searchContext";
import { MarketProvider } from "../contexts/market/MarketContext";
import { OrderProvider } from "../contexts/order/orderContext";
import { AuthProvider } from "../contexts/authProvider";
import FormProvider from "../contexts/formProvider";
const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <FormProvider>
        <SearchBarProvider>
          <OrderProvider>
            <MarketProvider>{children}</MarketProvider>
          </OrderProvider>
        </SearchBarProvider>
      </FormProvider>
    </AuthProvider>
  );
};

export default AppProvider;
