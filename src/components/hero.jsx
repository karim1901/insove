
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


function Hero(){

    useEffect(() => {
        const sr = ScrollReveal({
            origin : "bottom",
            distance : "60px",
            duration : 3000,
            delay : 600
        });
        
        sr.reveal(".hero__text", { origin: "top" });
        sr.reveal(".hero__img");
    }, []); 
    return     <section class="bg-grey py-12 xl:pt-12 xl:pb-0 w-full overflow-hidden ">
    <div class="container mx-auto h-full">
        
        <div class="flex flex-col xl:flex-row items-center justify-between">
            
            <div class="hero__text text-center xl:text-left ">
               
                <div class="flex items-center gap-x-2 px-[20px] py-[10px] mb-[26px] rounded-full bg-white w-max mx-auto xl:mx-0">
                 
                    <i class="ri-heart-pulse-line text-accent text-2xl"></i>
                    
                    <div class="text-[#9ab4b7] uppercase font-medium tracking-[2.24px] ">
                        Live your live
                    </div>
                </div> 

                <h1 class="h1 mb-6">We care about your headlth</h1>

                <p class="mb-[42px] md:max-w-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptates , placeat vel ex ipsa ratione qui, 
                    quasi reiciendis quidem sit saepe ab quod fuga,
                </p>

                <button class="btn btn-lg btn-accent mx-auto xl:mx-0">Contact us</button>
            </div>


            <div class="hero__img hidden xl:flex max-w-[814px] self-end">
                <img src="assets/img/hero/img.png" alt=""/>
            </div>

        </div>
    </div>


</section>
}


export default Hero