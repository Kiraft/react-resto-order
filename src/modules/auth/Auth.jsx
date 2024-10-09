import { useState } from 'react';
import './Auth.css';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';


export function Auth() {

     const [action, setAction] = useState('');
     const registrarLink = () => setAction(' active')
     const loginLink = () => setAction('')

     return (

          <main className='flex h-screen items-center justify-center bg-[#882323] '>
               <div className={`wrapper${action}`}>
                    <div className="form-box login">
                         <form action="">
                              <h1>Login</h1>

                              <div className="input-box">
                                   <FaUser className='icon' />
                                   <input type="text" placeholder="Usuario" required />
                              </div>

                              <div className="input-box">
                                   <MdEmail className='icon' />
                                   <input type="password" placeholder="Contraseña" required />
                              </div>

                              <div className="remember-forgot">
                                   <label ><input type="checkbox" name="" id="" />Visualizar</label>
                                   <a href="#">Olvido la contraseña?</a>
                              </div>

                              <button type="submit">Ingresar</button>

                              <div className="register-link">
                                   <p>Aun no tienes una cuenta? <a href="#" onClick={registrarLink}>Registrar</a></p>
                              </div>
                         </form>

                    </div>

                    <div className="form-box register">
                         <form action="">
                              <h1>Register</h1>

                              <div className="input-box">
                                   <FaUser className='icon' />
                                   <input type="text" placeholder="Mail" required />
                              </div>

                              <div className="input-box">
                                   <RiLockPasswordFill className='icon' />
                                   <input type="password" placeholder="Contraseña" required />
                              </div>

                              <div className="remember-forgot">
                                   <label ><input type="checkbox" name="" id="" />Visualizar</label>
                                   <a href="#">Olvido la contraseña?</a>
                              </div>

                              <button type="submit">Ingresar</button>

                              <div className="register-link">
                                   <p>Tienes una cuenta? <a href="#" onClick={loginLink}>Login</a></p>
                              </div>
                         </form>

                    </div>

               </div>
          </main>
     )
}