export function OrderSidebar() {
     return (
          <aside className="md:w-72 md:h-screen bg-[#882323]">

               {/* Logo */}
               <div className="flex justify-center mt-5">
                    <div className="relative w-60 h-40 mt-7">
                         <img src='/logo.png' alt="logotipo" />
                    </div>
               </div>

               <nav className="mt-10">

                    {/* Cafeteria */}
                    <div className={`flex items-center gap-4 w-full border-t bg-[#882323] p-3 last-of-type:border-b`}>
                         <div className="w-16 h-16 relative">
                              <img src={`/icon_cafe.svg`} alt="Imagen categoria" />
                         </div>
                         <a className="text-xl font-bold text-white" href={`/order/pizzas`}>
                              Cafeteria
                         </a>
                    </div>

                    {/* Internacional */}
                    <div className={`flex items-center gap-4 w-full border-t bg-[#882323] p-3 last-of-type:border-b`}>
                         <div className="w-16 h-16 relative">
                              <img src={`/icon_hamburguesa.svg`} alt="Imagen categoria" />
                         </div>
                         <a className="text-xl font-bold text-white" href={`/order/pizzas`}>
                              Internacional
                         </a>
                    </div>

                    {/* Asiatica */}
                    <div className={` flex items-center gap-4 w-full border-t bg-[#882323] p-3 last-of-type:border-b`}>
                         <div className="w-16 h-16 relative">
                              <img src={`/icon_pizza.svg`} alt="Imagen categoria" />
                         </div>
                         <a className="text-xl font-bold text-white" href={`/order/pizzas`}>
                              Asiatica
                         </a>
                    </div>


                    {/* Postres */}
                    <div className={` flex items-center gap-4 w-full border-t bg-[#882323] p-3 last-of-type:border-b`}>
                         <div className="w-16 h-16 relative">
                              <img src={`/icon_pastel.svg`} alt="Imagen categoria" />
                         </div>
                         <a className="text-xl font-bold text-white" href={`/order/pizzas`}>
                              Postres
                         </a>
                    </div>

               </nav>
          </aside>
     )
}