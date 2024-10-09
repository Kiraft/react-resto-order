export function OrderMain() {
     return (
          <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5 bg-[#FAEADA]">
               <h1 className="text-2xl my-6">
                    Elige y personaliza tu pedido a continuacion
               </h1>

               <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
                    <div className="border bg-white">

                         <img
                              width={400}
                              height={500}
                              src='/products/cafe_01.jpg'
                              alt="Imagen platillo"
                         />


                         <div className="p-5">
                              <h3 className="text-2xl font-bold">
                                   Cafe Americano
                              </h3>
                              <p className="mt-5 font-black text-4xl text-[#9E3333]">
                                   $59.99
                              </p>
                              <button
                                   type="button"
                                   className="bg-[#882323] hover:bg-[#9b3232] text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                              >Agregar</button>
                         </div>
                    </div>

                    <div className="border bg-white">

                         <img
                              width={400}
                              height={500}
                              src='/products/cafe_02.jpg'
                              alt="Imagen platillo"
                         />


                         <div className="p-5">
                              <h3 className="text-2xl font-bold">
                                   Cafe Americano
                              </h3>
                              <p className="mt-5 font-black text-4xl text-[#9E3333]">
                                   $59.99
                              </p>
                              <button
                                   type="button"
                                   className="bg-[#882323] hover:bg-[#9b3232] text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                              >Agregar</button>
                         </div>
                    </div>

                    <div className="border bg-white">
                         <img
                              width={400}
                              height={500}
                              src='/products/cafe_03.jpg'
                              alt="Imagen platillo"
                         />


                         <div className="p-5">
                              <h3 className="text-2xl font-bold">
                                   Cafe Americano
                              </h3>
                              <p className="mt-5 font-black text-4xl text-[#9E3333]">
                                   $59.99
                              </p>
                              <button
                                   type="button"
                                   className="bg-[#882323] hover:bg-[#9b3232] text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                              >Agregar</button>
                         </div>
                    </div>

                    <div className="border bg-white">

                         <img
                              width={400}
                              height={500}
                              src='/products/cafe_04.jpg'
                              alt="Imagen platillo"
                         />


                         <div className="p-5">
                              <h3 className="text-2xl font-bold">
                                   Cafe Americano
                              </h3>
                              <p className="mt-5 font-black text-4xl text-[#9E3333]">
                                   $59.99
                              </p>
                              <button
                                   type="button"
                                   className="bg-[#882323] hover:bg-[#9b3232] text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                              >Agregar</button>
                         </div>
                    </div>
               </div>

          </main>
     )
}