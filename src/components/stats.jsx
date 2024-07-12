import { useEffect } from "react";
import ScrollReveal from "scrollreveal";


function Stats(){

    useEffect(() => {
        const sr = ScrollReveal({
            origin : "bottom",
            distance : "60px",
            duration : 3000,
            delay : 600
          });
        
        sr.reveal(".stats__item")
    }, []); 

    return <section class="stats section">
        
    <div class="container mx-auto">
    
        <div class="flex flex-col gap-y-6 xl:flex-row justify-between  ">
            
            <div class="stats__item flex-1 xl:border-r flex flex-col items-center ">
                <div class="font-semibold text-4xl xl:text-[64px] text-accent-tertiary xl:mb-2 ">+5120</div>
                <div>Happy Patients</div>
            </div>

            
            <div  class=" stats__item flex-1 xl:border-r flex flex-col items-center ">
                <div class="font-semibold text-4xl xl:text-[64px] text-accent-tertiary xl:mb-2 ">26</div>
                <div>Total Branches</div>
            </div>

            
            <div  class="stats__item flex-1 xl:border-r flex flex-col items-center ">
                <div class="font-semibold text-4xl xl:text-[64px] text-accent-tertiary xl:mb-2 ">+53</div>
                <div>Senior Doctore</div>
            </div>

            
            <div  class="stats__item flex-1 xl:border-r flex flex-col items-center ">
                <div class="font-semibold text-4xl xl:text-[64px] text-accent-tertiary xl:mb-2 ">+10</div>
                <div>Yeart Experience</div>
            </div>
        </div>


    </div>
</section>
}



export default Stats