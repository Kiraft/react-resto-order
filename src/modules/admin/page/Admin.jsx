import { Order } from "../../order/page/Order"
import { AdminSidebar } from "../components/AdminSidebar"
import { OrderCard } from "../components/OrderCard"
export function Admin() {
     return (
          <>
               <div className="md:flex">
                    <aside className="md:w-72 md:h-screen bg-[#882323]">
                         <AdminSidebar />
                    </aside>

                    <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-[#FAEADA] p-5">

                         <h1 className="text-2xl my-6">
                              Administrar Ordenes
                         </h1>

                         <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
                              <OrderCard />
                         </div>
                    </main>
               </div>

          </>
     )
}