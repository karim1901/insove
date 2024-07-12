import { useEffect } from "react";
import ScrollReveal from "scrollreveal";



function Faq(){

    useEffect(() => {
        const sr = ScrollReveal({
            origin : "bottom",
            distance : "60px",
            duration : 3000,
            delay : 600
        });
        
        sr.reveal(".faq__title")
        sr.reveal(".faq__item",{
          delay:600,
          distance:"100px",
          interval:100,
          origin:'bottom'
        })

        const faqItems = document.querySelectorAll(".faq__item")


        faqItems.forEach((item)=>{
            const faqBtn = item.querySelector(".faq__btn")
    
    
            item.addEventListener("click",()=>{
                const isOpen = item.classList.toggle("open")
                const iconClass = isOpen ? "ri-subtract-fill" : "ri-add-fill"
                const iconElement = faqBtn.querySelector("i")
                iconElement.classList = `${iconClass}`
            })
    
        })
    
        
    
        
    }, []); 




    return     <section>
    <div class="container mx-auto">
        <h2 class="faq__title h2 text-center mb-[50px] ">We've got answers</h2>
        
        <div class="max-w-5xl mx-auto">

          
            <div class="faq__item px-[30px] pt-7 border-b cursor-pointer select-none">
                <div class="flex items-center justify-between mb-[10px]">
                 
                    <h4 class="h4">Why to believe in Insove medical healtcare ?</h4>
                   
                    <div class="faq__btn text-accent">
                        <i class="ri-add-line"></i>
                    </div>
                </div>
        
                <div class="faq__answer h-0 overflow-hidden">
                    <p class="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio a sunt natus aliquid, omnis hic,
                    labore ratione doloremque ipsam eligendi, asperiores aut 
                    explicabo magni deleniti aspernatur corporis nisi neque repellat?
                    </p>
                </div>
            </div>

       
            <div class="faq__item px-[30px] pt-7 border-b cursor-pointer select-none">
                <div class="flex items-center justify-between mb-[10px]">
        
                    <h4 class="h4">Why to believe in Insove medical healtcare ?</h4>
                  
                    <div class="faq__btn text-accent">
                        <i class="ri-add-line"></i>
                    </div>
                </div>
         
                <div class="faq__answer h-0 overflow-hidden">
                    <p class="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio a sunt natus aliquid, omnis hic,
                    labore ratione doloremque ipsam eligendi, asperiores aut 
                    explicabo magni deleniti aspernatur corporis nisi neque repellat?
                    </p>
                </div>
            </div>

            <div class="faq__item px-[30px] pt-7 border-b cursor-pointer select-none">
                <div class="flex items-center justify-between mb-[10px]">
             
                    <h4 class="h4">Why to believe in Insove medical healtcare ?</h4>

                    <div class="faq__btn text-accent">
                        <i class="ri-add-line"></i>
                    </div>
                </div>
        
                <div class="faq__answer h-0 overflow-hidden">
                    <p class="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio a sunt natus aliquid, omnis hic,
                    labore ratione doloremque ipsam eligendi, asperiores aut 
                    explicabo magni deleniti aspernatur corporis nisi neque repellat?
                    </p>
                </div>
            </div>


            <div class="faq__item px-[30px] pt-7 border-b cursor-pointer select-none">
                <div class="flex items-center justify-between mb-[10px]">
             
                    <h4 class="h4">Why to believe in Insove medical healtcare ?</h4>
              
                    <div class="faq__btn text-accent">
                        <i class="ri-add-line"></i>
                    </div>
                </div>

                <div class="faq__answer h-0 overflow-hidden">
                    <p class="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio a sunt natus aliquid, omnis hic,
                    labore ratione doloremque ipsam eligendi, asperiores aut 
                    explicabo magni deleniti aspernatur corporis nisi neque repellat?
                    </p>
                </div>
            </div>
            
        </div>
    </div>
</section>
}



export default Faq