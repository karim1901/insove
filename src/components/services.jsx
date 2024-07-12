import { useEffect } from "react";
import ScrollReveal from "scrollreveal";


function Services(){

    useEffect(() => {
        const sr = ScrollReveal({
            origin : "bottom",
            distance : "60px",
            duration : 3000,
            delay : 600
          });
        
        sr.reveal(".services")
        sr.reveal(".services__top")
        sr.reveal(".services__item",{
        delay:600,
        distance:"100px",
        interval:100,
        origin:'bottom'
        })

    }, []); 
    

    return     <section class="services" >
    
    <div class="bg-services h-[368px] bg-cover bg-no-repeat max-w-[1600px] mx-4
        xl:mx-auto rounded-[20px] px-6 xl:px-0 xl:pt-[70px] flex items-center xl:items-start -z-10 relative ">
        <div class="container mx-auto">
            <div class="services__top flex items-center flex-col xl:flex-row xl:mb-[60px] ">
                <h2 class="h2 text-white flex-1 text-center xl:text-left  ">Our Best Services For Your Solution</h2>
                <p class="text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Iure repellendus, voluptates sequi corrupti dignissimos alias itaque,
                </p>
            </div>
        </div>
    </div>


    
    <div class="container mx-auto  mt-8 xl:-mt-[144px] ">

        <div class="grid xl:grid-cols-4 gap-5 px-8 xl:px-0 ">

            <div class="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center ">
                
                <div class="mb-[15px]">
                    <img src="assets/icons/services/icon-1.svg" alt=""/>
                </div>
              
                <h3 class="h3 mb-[10px] ">General Practitioners</h3>
       
                <p class="font-light leading-normal max-w-[300px] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
           
            <div class="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center ">
       
                <div class="mb-[15px]">
                    <img src="assets/icons/services/icon-2.svg" alt=""/>
                </div>
        
                <h3 class="h3 mb-[10px] ">Pregnancy Support</h3>
              
                <p class="font-light leading-normal max-w-[300px] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div class="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center ">
           
                <div class="mb-[15px]">
                    <img src="assets/icons/services/icon-3.svg" alt=""/>
                </div>
         
                <h3 class="h3 mb-[10px] ">Nutritional Support</h3>
                
                <p class="font-light leading-normal max-w-[300px] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
       
            <div class="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center ">
               
                <div class="mb-[15px]">
                    <img src="assets/icons/services/icon-4.svg" alt=""/>
                </div>
          
                <h3 class="h3 mb-[10px] ">Pharmaceutical Care</h3>

                <p class="font-light leading-normal max-w-[300px] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

    </div>
</section>
}


export default Services