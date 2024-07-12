import { useEffect } from "react";
import ScrollReveal from "scrollreveal";



function Departments(){

    useEffect(() => {
        const sr = ScrollReveal({
            origin : "bottom",
            distance : "60px",
            duration : 3000,
            delay : 600
        });
        
        sr.reveal(".departemnts__bg")
        sr.reveal(".departement__container")
        
        
    }, []); 

    return     <section class="departement section">
    <div class="departemnts__bg bg-departemnts bg-cover xl:bg-auto bg-center bg-no-repeat
            max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] px-6 xl:px-0 py-12
            xl:pt-[80px] xl:pb-[90px] relative  min-h-[588px] flex items-center ">
        <div class="departement__container container mx-auto">
            <div class="flex flex-col xl:flex-row gap-x-5">
                <div class="xl:w-[310px] flex flex-col gap-y-[30px] xl:gap-y-[40px] font-medium uppercase
                    text-center xl:text-left text-base text-[#9ab4b7] xl:pt-3 xl:text-[17px] mb-[50px] xl:mb-0">
                    <div class="cursor-pointer hover:text-accent tarnsition-all ">Laboratory Analysis</div>
                    <div class="cursor-pointer hover:text-accent tarnsition-all ">Cardiology Clinic</div>
                    <div class="cursor-pointer hover:text-accent tarnsition-all ">Gynecology Clinic</div>
                    <div class="cursor-pointer hover:text-accent tarnsition-all ">Pathology Clinic</div>
                    <div class="cursor-pointer hover:text-accent tarnsition-all ">Pediatrics Clinic</div>
                    <div class="cursor-pointer hover:text-accent tarnsition-all ">Nourology Clinic</div>
                </div>
                <div class="x:w-[640px]">
                    
                    <h2 class="h2 mb-[20px] text-center xl:text-left">Cardiology Clinic</h2>

                    
                    <p class="mb-[30px] font-light text-center xl:text-left xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Amet ad voluptatum esse sequi magni, sint, 
                        dolor quaerat laudantium voluptate magnam reprehenderit 
                        <br></br>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Tenetur aspernatur veniam, harum, repellendus minus sunt quae odit
                        reiciendis ipsum officia sapiente, ipsa in delectus 
                    </p>

                    <div class="flex flex-col xl:flex-row items-center xl:justify-center
                        max-w-[555px] mb-[50px] mx-auto xl:mx-0">
                        <div class="text-accent xl:border-r border-[#dcdcdc] xl:pr-6">Neurocritial Care</div>
                        <div class="text-accent xl:border-r border-[#dcdcdc] xl:pr-6">Neuro Oncology</div>
                        <div class="text-accent xl:border-r border-[#dcdcdc] xl:pr-6">Geriatric Neurology</div>
                    </div>

                    <button class="btn btn-lg btn-accent mx-auto xl:mx-0">Learn more</button>

                </div>
            </div>
        </div>
    </div>
</section>
}


export default Departments