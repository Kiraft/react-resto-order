export function OrderCard() {
     return (
          <section
               aria-labelledby="summary-heading"
               className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6  lg:mt-0 lg:p-8 space-y-4"
          >
               <p className='text-2xl font-medium text-gray-900'>Cliente: Jonathan Osvaldo </p>
               <p className='text-lg font-medium text-gray-900'>Productos Ordenados:</p>
               <dl className="mt-6 space-y-4">

                    <div className="flex items-center gap-2 border-t border-gray-200 pt-4">
                         <dt>
                              <span>2</span>
                         </dt>
                         <dd>Pastel de Zarzamora</dd>
                    </div>

                    
                    <div className="flex items-center gap-2 border-t border-gray-200 pt-4">
                         <dt>
                              <span>1</span>
                         </dt>
                         <dd>Cafe americano</dd>
                    </div>

                    
                    <div className="flex items-center gap-2 border-t border-gray-200 pt-4">
                         <dt>
                              <span>30</span>
                         </dt>
                         <dd>Enchiladas Suizas</dd>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                         <dt className="text-base font-medium text-gray-900">Total a Pagar:</dt>
                         <dd className="text-base font-medium text-gray-900">$2300.00</dd>
                    </div>
               </dl>

               <form>
                    <input
                         type="submit"
                         className="bg-[#882323] hover:bg-[#9b3232] text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                         value='Marcar Orden Completada'
                    />
               </form>
          </section>
     )
}