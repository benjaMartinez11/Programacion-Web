import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">PortFolio
        </h1>


        <div class="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
            <button
                class="h-12 px-8 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none">
                Redes Sociales
            </button>          
          
        </div>

        <section class="mt-8 space-y-8 lg:mt-12">
            <section class="lg:flex lg:items-center">
                <div class="lg:w-1/2 ">       
                    <h2 class="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white"> Benjamin Martinez</h2>
                </div>
         
            </section>
        </section>
    </div>
</section>
    </>
  )
}

export default App
