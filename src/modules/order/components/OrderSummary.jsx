import { XCircleIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline"

export function OrderSummary() {
     return (
          <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5 bg-[#FCE6D0]">
               <h1 className="text-4xl text-center font-black">Mi pedido</h1>

               <div className="mt-5">
                    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
                         <div className="space-y-4">
                              <div className="flex justify-between items-start">
                                   <p className="text-xl font-bold"> Cafe </p>

                                   <button type="button">
                                        <XCircleIcon className="text-red-600 h-8 w-8" />
                                   </button>
                              </div>
                              <p className="text-2xl text-[#9E3333] font-black">$159.99</p>
                              <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
                                   <button type="button">
                                        <MinusIcon className="h-6 w-6" />
                                   </button>

                                   <p className="text-lg font-black ">1</p>

                                   <button type="button">
                                        <PlusIcon className="h-6 w-6" />
                                   </button>
                              </div>
                              <p className="text-xl font-black text-gray-700">
                                   Subtotal: {''}
                                   <span className="font-normal"></span>
                              </p>
                         </div>
                    </div>

                    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
                         <div className="space-y-4">
                              <div className="flex justify-between items-start">
                                   <p className="text-xl font-bold"> Cafe </p>

                                   <button type="button">
                                        <XCircleIcon className="text-red-600 h-8 w-8" />
                                   </button>
                              </div>
                              <p className="text-2xl text-[#9E3333] font-black">159.99</p>
                              <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
                                   <button type="button">
                                        <MinusIcon className="h-6 w-6" />
                                   </button>

                                   <p className="text-lg font-black ">1</p>

                                   <button type="button">
                                        <PlusIcon className="h-6 w-6" />
                                   </button>
                              </div>
                              <p className="text-xl font-black text-gray-700">
                                   Subtotal: {''}
                                   <span className="font-normal"></span>
                              </p>
                         </div>
                    </div>
                    <p className="text-2xl mt-20 text-center">Total a pagar: <span className="font-bold">$0.00</span></p>
                    <form className="w-full mt-10 space-y-5" >
                         <input type="submit" className="py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer font-bold" value="Confirmar pedido" />
                    </form>

               </div>
          </aside>
     )
}