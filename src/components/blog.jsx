import { useEffect } from "react";
import ScrollReveal from "scrollreveal";


function Blog(){

    useEffect(() => {
        const sr = ScrollReveal({
            origin : "bottom",
            distance : "60px",
            duration : 3000,
            delay : 600
        });
        
        sr.reveal(".blog__title")
        sr.reveal(".blog__post",{
          delay:600,
          distance:"100px",
          interval:100,
          origin:'bottom'
        })
        
        
    }, []); 

    return     <section class="blog">
    <div class="container mx-auto">
        <h2 class="blog__title h2 mb-[50px] text-center xl:text-left">Our Recents Posts</h2>

        
        
        <div class="flex flex-col lg:flex-row lg:justify-between   gap-y-6 xl:gap-y-0 items-center
            mb-[50px]">
            
            <div class="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden 
                cursor-pointer group">
                
                <div class="relative overflow-hidden">
                    <img class="group-hover:scale-110 transition-all duration-500" src="assets/img/blog/img-1.png" alt=""/>
                   
                    <div class="bg-accent-tertiary absolute  bottom-0 left-0 text-white text-base 
                        tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                        Medical
                    </div>
                </div>

               
                <div class="px-5 py-6">
                 
                    <div class="mb-4">Jan 2,2023</div>
                 
                    <h4 class="h4 mb-[10px]">10 foods to avoid for your heart health</h4>
                    
                    <p class="font-light">It's normal to feel anxiety, worry and grief any time you're diagnosed with a condition that's 
                        certainly true...
                        <a href="" class="italic underline text-[#4c5354]">Read more</a>
                    </p>
                </div>
            </div>
         
            <div class="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden 
                cursor-pointer group">
                
                <div class="relative overflow-hidden">
                    <img class="group-hover:scale-110 transition-all duration-500" src="assets/img/blog/img-2.png" alt=""/>
                  
                    <div class="bg-accent-tertiary absolute  bottom-0 left-0 text-white text-base 
                        tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                        Medical
                    </div>
                </div>

           
                <div class="px-5 py-6">
                 
                    <div class="mb-4">Jan 2,2023</div>
                 
                    <h4 class="h4 mb-[10px]">10 foods to avoid for your heart health</h4>
                  
                    <p class="font-light">It's normal to feel anxiety, worry and grief any time you're diagnosed with a condition that's 
                        certainly true...
                        <a href="" class="italic underline text-[#4c5354]">Read more</a>
                    </p>
                </div>
            </div>
           
            <div class="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden 
            cursor-pointer group">
            
            <div class="relative overflow-hidden">
                <img class="group-hover:scale-110 transition-all duration-500" src="assets/img/blog/img-3.png" alt=""/>
             
                <div class="bg-accent-tertiary absolute  bottom-0 left-0 text-white text-base 
                    tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                    Medical
                </div>
            </div>

           
            <div class="px-5 py-6">
                
                <div class="mb-4">Jan 2,2023</div>
                
                <h4 class="h4 mb-[10px]">10 foods to avoid for your heart health</h4>
                
                <p class="font-light">It's normal to feel anxiety, worry and grief any time you're diagnosed with a condition that's 
                    certainly true...
                    <a href="" class="italic underline text-[#4c5354]">Read more</a>
                </p>
            </div>
        </div>
        </div>

    </div>
</section>

}


export default Blog