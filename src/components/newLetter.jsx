import { useEffect } from "react";
import ScrollReveal from "scrollreveal";


function Newsletter(){

    useEffect(() => {
        const sr = ScrollReveal({
            origin : "bottom",
            distance : "60px",
            duration : 3000,
            delay : 600
        });
        
        sr.reveal(".newsletter")
        sr.reveal(".newsletter__container")
        
    }, []); 


    return <section class="newsletter bg-accent px-5 xl:px-0 md:h-[444px] py-12 flex items-center relative overflow-hidden">
    
    <div class="absolute left-0 bottom-0 ">
        <img src="assets/img/newsletter/pattern.svg" alt=""/>
    </div>
   
    <div class="newsletter__container container mx-auto">
       
        <div class="flex flex-col lg:flex-row lg:itmes-center lg:gap-x-[58px]">
            
            <div class="flex-1 z-10 text-center md:text-left">
                <div class="text-base uppercase text-white tracking-[2.24px] font-medium">Out newlletter</div>
                <h1 class="h1 mb-4 text-white">Subscript to get more updaetes</h1>
            </div>
          
            <form class="flex-1 ">
                <div class="flex flex-col md:flex-row  relative gap-y-4 ">
                    <input type="text" placeholder="Your email address" class="rounded-full w-full
                    h-[66px] bg-transparent border-2 border-white outline-none pl-[30px] 
                    placeholder:text-white focus:text-white"/>
                    <button class="btn btn-lg btn-white md:absolute right-0">Subscribe</button>
                </div>
            </form>
        </div>
    </div>

</section>

}


export default Newsletter