import { OrderSidebar } from "../components/OrderSidebar";
import { OrderSummary } from "../components/OrderSummary";
import { OrderMain } from "../components/OrderMain";

export function Order() {
     return (
          <>
               <div className="md:flex">
                    <OrderSidebar />
                    <OrderMain />
                    <OrderSummary />
               </div>

          </>
     )
}