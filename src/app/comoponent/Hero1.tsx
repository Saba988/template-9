import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
// app/components/Hero.tsx
export default function Hero1() {
    return (
      <>
      <Navbar/>
    <section className="h-screen bg-black">
    <div className="absolute bg-black w-full "></div>
      <div className="container mx-auto h-full flex items-center justify-between text-white bg-black  px-8">
        {/* Text Content */}
        <div className="w-1/2">
        <h1 className="text-2xl text-yellow-500 font-serif font-semibold"><i>Its Quick And Amazing!</i></h1>
          <h1 className="text-6xl font-bold mb-4 text-white hover:text-yellow-500 mt-12 flex ">The Art of Speedy Food Quality</h1>
          <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quasi eos reprehenderit eligendi aut sed doloremque quaerat recusandae officiis veniam aliquid beatae doloribus, ad ipsa tempore molestias incidunt dolorum velit.</p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg hover:bg-yellow-600">
            See Menu
          </button>
        </div>
       
        {/* Image */}
        <div className=" flex w-15% mt-11 mr-10">
          <img src="/image.png" alt="Food" className="w-[400px]  rounded-lg shadow-lg" />
          
        </div>
        
      </div>
    </section>
  






    <section className="relative  h-screen bg-black" >
      <div className="absolute bg-black "></div>
      <div className="container mx-auto h-full flex items-center justify-between text-white bg-black  px-8">
        {/* Text Content */}
        <div className="w-1/2">
        <h1 className="text-2xl text-yellow-500 font-serif font-semibold"><i>About us</i></h1><br></br>
          <h1 className="text-6xl font-bold mb-4 text-white hover:text-yellow-600">We Create a Best Foody Product</h1>
          <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quasi eos reprehenderit eligendi aut sed doloremque quaerat recusandae officiis veniam aliquid beatae doloribus, ad ipsa tempore molestias incidunt dolorum velit.</p>
          <p>
          ☑ Lacus nisi, et ac dapibus sit eu velit in consequat.</p><br></br><p>
          ☑ Quisque diam pellentesque bibendum non dui volutpat fringilla </p><br></br><p>
          ☑ Lorem ipsum dolor sit amet, consectetur adipiscing elit</p><br></br>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg hover:bg-yellow-600">
            Read More 
          </button>
        </div>
       
        {/* Image */}
        <div className="w-15%">
          <img src="/ab.png" alt="Food" className=" w-[580px] rounded-lg shadow-lg" />
          <div className="flex justify-content">
          <img src="/ab2.png" alt="Food" className=" w-[250px] rounded-lg shadow-lg" />
          <img src="/ab3.png" alt="Food" className=" w-[330px] rounded-lg shadow-lg" />
          </div>
          
        </div>
        
      </div>
    </section>
   
      </>
    );
  }
  