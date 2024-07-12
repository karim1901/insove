import { useEffect } from "react";
import ScrollReveal from "scrollreveal";


function Appiontement(){

    useEffect(() => {
        const sr = ScrollReveal({
            origin : "bottom",
            distance : "60px",
            duration : 3000,
            delay : 600
          });
        
        sr.reveal(".appiontemnet_title")
        sr.reveal(".appiontemnet_form")
        

    }, []); 

    return     <section class="section">
    <div class="container mx-auto">
        
        <h2 class="appiontemnet_title h2 text-center mb-5 xl:mb-[50px] xl:text-left ">Book Appointment or call: <span class="text-accent-tertiary">(+212 693 404 93)</span></h2>

      
        
        <form class="appiontemnet_form flex flex-col gap-y-5" >
           
            <div class="flex flex-col xl:flex-row gap-5">
       
                <div class="select relative flex items-center ">
              
                    <div class="absolute right-4 ">
                        <i class="ri-arrow-down-s-line text-[26px] text-primary "></i>
                    </div>
             
                    <select class="appearance-none outline-none h-full w-full bg-transparent z-10 px-4">
                        <option value="1">Select department</option>
                        <option value="2">Department 1</option>
                        <option value="3">Department 2</option>
                        <option value="4">Department 3</option>
                    </select>
                </div>
             
                <div class="select relative flex items-center ">
               
                    <div class="absolute right-4 ">
                        <i class="ri-arrow-down-s-line text-[26px] text-primary "></i>
                    </div>
              
                    <select class="appearance-none outline-none h-full w-full bg-transparent z-10 px-4">
                        <option value="1">Select Doctor</option>
                        <option value="2">Dr. Jane Doe </option>
                        <option value="3">Dr. Jhon Doe</option>
                        <option value="4">Dr. Bob Smith</option>
                    </select>
                </div>
            </div>

         
            <div class="flex flex-col xl:flex-row gap-5">
                <input type="text" class="input" placeholder="Full Name"/>
                <input type="text" class="input" placeholder="Phone Number"/>
            </div>
           
            <div class="flex flex-col xl:flex-row gap-5">
                <input type="date" class="input" />
                <input type="time" class="input" />
            </div>
            
            <button class="btn btn-lg btn-accent self-center xl:self-start ">Book an appointment</button>
        </form>



    </div>

</section>
}



export default Appiontement