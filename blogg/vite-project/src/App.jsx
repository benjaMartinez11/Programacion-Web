import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main className="main">
      <section id="home">
        <h2>Bienvenidos a mi blog </h2>
      </section>
      <section id="about">
        <h2>benjamin Martinez</h2>
        <p>Estudiante de La Escuela Tecnica de Lugano.</p>
        <main>
      <img src="Escudo-ferro.png" />
    </main>
      </section>
      <section id="contact">
        <h2>Contacto</h2>
        <p>Detalles para ponerte en contacto con nosotros.</p>
      </section>
    </main>
    </>
  )
}

import default App

export default function Header(){
    return
  
}

export defoult function App(){
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const getSession = async () =>{
      const {data, error} = await supabase.auth.getSession();
      if (error){
        console.log(error);
      } else {
        setUser(data?.session?.user):
      }
    };

    getSession();
  },[]);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
}


const handleClick = async () => {
  const { data, error } = supabase, auth.signInWith0Auth({
    provider:"github",
  }),
  if (error) {
    console.log(error);
    }else {
    console.log(data);  
    }
  };
return (
  <>
    
    <header>
      este es el header
      <button >Conectar con Hithub</button>
    </header>
  </>
 );
)