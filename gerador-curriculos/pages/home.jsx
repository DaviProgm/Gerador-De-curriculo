import { useState } from "react"
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoShieldLock } from "react-icons/go";



export default function Home(){

    const [termoServicos, setTermoServico] = useState ("termoDeSeriços")

    function alterarTermo(){
        setTermoServico("termoDeSeriços")
    }
    
    function alterarPolitica(){
        setTermoServico("politicaDePrivacidade")
    }

    return (
        <div className="w-full h-screen bg-[#e0e0e08f] flex flex-col justify-center items-center">
            
            <div className="flex flex-col justify-center items-center mb-10">
                <h1 className="font-bold text-3xl">Informações Legais</h1>
                <p className="text-gray-600">Temos de Serviço e Política de Privacidade</p>
            </div>

            <div className="flex justify-center items-center 
            gap-4 w-[700px] px-20 py-2 
            bg-white rounded-t-md
            shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)]
            ">
                <button className="flex items-center gap-2
                bg-gray-50 px-10 py-2 rounded-md text-gray-600 font-semibold cursor-pointer 
                hover:bg-blue-500 hover:text-white"
                onClick={() => alterarTermo()}
                >
                    <IoDocumentTextOutline />
                    Termos de Serviço
                </button>
                <button className="flex items-center gap-2
                bg-gray-50 px-10 py-2 rounded-md text-gray-600 font-semibold cursor-pointer 
                hover:bg-blue-500 hover:text-white"
                onClick={() => alterarPolitica()}
                >
                    <GoShieldLock />
                    Politica de Privacidade
                </button>
               
            </div>
    
            <div className="w-[700px] bg-white mt-1 px-4 py-3">
                { termoServicos == "termoDeSeriços" ? (
                <>
                    <h3 className="font-bold text-xl">1. Aceitação do Termos</h3>
                    <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione assumenda, quasi nulla fugit minima possimus voluptas modi distinctio hic! Nulla sit velit voluptatum nemo ipsam ducimus quod eaque ab eveniet.</p>
                    
                    <h3 className="font-bold text-xl">2. Descrição dos Serviços</h3>
                    <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione assumenda, quasi nulla fugit minima possimus voluptas modi distinctio hic! Nulla sit velit voluptatum nemo ipsam ducimus quod eaque ab eveniet.</p>
                    
                    <h3 className="font-bold text-xl">3. Aceitação do Termos</h3>
                    <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione assumenda, quasi nulla fugit minima possimus voluptas modi distinctio hic! Nulla sit velit voluptatum nemo ipsam ducimus quod eaque ab eveniet.</p>
                    
                    <h3 className="font-bold text-xl">4. Aceitação do Termos</h3>
                    <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione assumenda, quasi nulla fugit minima possimus voluptas modi distinctio hic! Nulla sit velit voluptatum nemo ipsam ducimus quod eaque ab eveniet.</p>
                </>
                )
                :
(
                <>
                    <h3 className="font-bold text-xl">1. Politica de Privacidade</h3>
                    <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione assumenda, quasi nulla fugit minima possimus voluptas modi distinctio hic! Nulla sit velit voluptatum nemo ipsam ducimus quod eaque ab eveniet.</p>
                    
                    <h3 className="font-bold text-xl">2. Politica de Privacidade</h3>
                    <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione assumenda, quasi nulla fugit minima possimus voluptas modi distinctio hic! Nulla sit velit voluptatum nemo ipsam ducimus quod eaque ab eveniet.</p>
                    
                    <h3 className="font-bold text-xl">3. Politica de Privacidade</h3>
                    <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione assumenda, quasi nulla fugit minima possimus voluptas modi distinctio hic! Nulla sit velit voluptatum nemo ipsam ducimus quod eaque ab eveniet.</p>
                    
                    <h3 className="font-bold text-xl">4. Politica de Privacidade</h3>
                    <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione assumenda, quasi nulla fugit minima possimus voluptas modi distinctio hic! Nulla sit velit voluptatum nemo ipsam ducimus quod eaque ab eveniet.</p>
                </>
)
                
                }
                
            </div>

        </div>
    )
}