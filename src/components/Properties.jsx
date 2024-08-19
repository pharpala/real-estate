import React from 'react'
import cafeteria from '../assets/cafeteria.png';
import cocina from '../assets/cocina.jpg';
import apartamento from '../assets/apartamento.jpg';
import supermercado from '../assets/supermercado.jpg';
import terreno from '../assets/terreno.png';
import ropa from '../assets/ropa.jpg';

const Properties = () => {
  return (
    <section id="properties" className="py-20 pl-[5%] pr-[5%]">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Featured Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                <div className="bg-white shadow-lg rounded-lg overflow-hidden lg:mb-5">
                    <img src={supermercado} alt="Property 1" className="w-full h-45 object-cover" />
                    <div className="p-2">
                        <h3 className="font-bold text-lg">Torviscas, Tenerife</h3>
                        <p className="mt-0 text-gray-600">44,000€</p>
                        <a 
                            href="https://www.idealista.com/inmueble/105644524/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block mt-1 mb-2 py-2 px-4 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                        >
                            View Details
                        </a>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden lg:mb-5">
                    <img src={apartamento} alt="Property 1" className="w-full h-45 object-cover" />
                    <div className="p-2">
                        <h3 className="font-bold text-lg">Las Galletas, Tenerife</h3>
                        <p className="mt-0 text-gray-600">145,000€</p>
                        <a 
                            href="https://www.idealista.com/inmueble/105133039/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block mt-1 mb-2 py-2 px-4 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                        >
                            View Details
                        </a>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden lg:mb-5">
                    <img src={cocina} alt="Property 1" className="w-full h-45 object-cover" />
                    <div className="p-2">
                        <h3 className="font-bold text-lg">Las Galletas, Tenerife</h3>
                        <p className="mt-0 text-gray-600">379,000€</p>
                        <a 
                            href="https://www.idealista.com/inmueble/102408677/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block mt-1 mb-2 py-2 px-4 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                        >
                            View Details
                        </a>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden lg:mb-5">
                    <img src={cafeteria} alt="Property 1" className="w-full h-45 object-cover" />
                    <div className="p-2">
                        <h3 className="font-bold text-lg">Torviscas, Tenerife</h3>
                        <p className="mt-0 text-gray-600">64,000€</p>
                        <a 
                            href="https://www.idealista.com/inmueble/105654388/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block mt-1 mb-2 py-2 px-4 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                        >
                            View Details
                        </a>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden lg:mb-5">
                    <img src={terreno} alt="Property 1" className="w-full h-45 object-cover" />
                    <div className="p-2">
                        <h3 className="font-bold text-lg">La Guancha, El Hierro</h3>
                        <p className="mt-0 text-gray-600">36,900€</p>
                        <a 
                            href="https://www.idealista.com/inmueble/103553439/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block mt-1 mb-2 py-2 px-4 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                        >
                            View Details
                        </a>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden lg:mb-5">
                    <img src={ropa} alt="Property 1" className="w-full h-45 object-cover" />
                    <div className="p-2">
                        <h3 className="font-bold text-lg">Pajara, Fuerteventura</h3>
                        <p className="mt-0 text-gray-600">109,000€</p>
                        <a 
                            href="https://www.idealista.com/inmueble/102679829/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block mt-1 mb-2 py-2 px-4 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                        >
                            View Details
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Properties
