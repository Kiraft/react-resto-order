export function AdminSidebar() {
     return (
          <>
               {/* Logo */}
               <div className="flex justify-center mt-5">
                    <div className="relative w-60 h-40 mt-7">
                         <img src='/logo.png' alt="logotipo" />
                    </div>
               </div>
               <div className="space-y-3 ">
                    <p className="mt-10 uppercase font-bold text-sm text-white text-center">Navegación</p>
                    <nav className="flex flex-col">
                         <a  className="text-white  font-bold text-lg border-t border-gray-200 p-3 last-of-type:border-b" href="">Ordenes</a>
                         <a  className="text-white font-bold text-lg border-t border-gray-200 p-3 last-of-type:border-b" href="">Productos</a>
                         <a  className="text-white font-bold text-lg border-t border-gray-200 p-3 last-of-type:border-b" href="">Ir a Quisco</a>
                    </nav>
               </div>
          </>
     )
}