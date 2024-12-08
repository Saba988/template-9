import Dessert from "@/components/Dessert/Dessert";
import Drink from "@/components/Drinks/Drink";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Herosection/Hero";
import MainCours from "@/components/MainCourse/Maincourse";
import Navbar from "@/components/Navbar/Navbar";
import PartnersAndClients from "@/components/PartnerClient/partnerclient";
import { Menu } from "lucide-react";
import Image from "next/image";
import FoodItems from "./comoponent/FoodItems";
import Hero1 from "./comoponent/Hero1";
import Hero2 from "./ShopDetail/Hero2";

export default function Home() {
  return (
<>

     
  <Hero1/>
 <FoodItems/>

    


<Hero/>
 <Menu/>
 <MainCours/>
 <Experience/>
 <Dessert/>
 <Drink/>
 <PartnersAndClients/>
 <Hero2/>
     
</>
  );
}

