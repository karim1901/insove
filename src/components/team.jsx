import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';



function Team(){

    useEffect(() => {
        const sr = ScrollReveal({
            origin : "bottom",
            distance : "60px",
            duration : 3000,
            delay : 600
        });
        
        sr.reveal(".team__title")
        sr.reveal(".team__slider")
        
    }, []); 


    return     <section class="team section">
    <div class="container mx-auto">

        <h2 class="team__title h2 mb-[50px] text-center md:text-left">Outr Team</h2>
       
        <div class="team__slider swiper main-h-[450px] ">


            <Swiper
                spaceBetween={0}
                slidesPerView={1}

                >
                <SwiperSlide>
                <div class="flex flex-col xl:flex-row gap-9">
                   
                   <div class="flex-1 flex flex-col xl:flex-row">
                       <div class="flex flex-col xl:flex-row items-center gap-[30px]">
                         
                           <div class="flex-1">
                               <img src="assets/img/team/doctor-1.png" alt=""/>
                           </div>

                        

                           <div class="flex-1 flex flex-col">
                          
                               <h4 class="h4 mb-[10px] ">Dr. leslie Taylor</h4>
          
                               <div class="font-medium uppercase tracking-[2.24px] [#9ab4b7] mb-[20px]">Pediatrician</div>
               
                               <p class="font-light mb-[26px] max-w-[320px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, consectetur soluta inventore aliquid numquam, laborum, iure porro modi accusantium ut placeat optio veniam dolore dignissimos! At quis officia quia eius.</p>
                        
                               <div class="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-youtube-fill"></i>
                                   </a>
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-facebook-circle-fill"></i>
                                   </a>
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-instagram-fill"></i>
                                   </a>
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-pinterest-fill"></i>
                                   </a>
                               </div>
                           </div>

                       </div>
                   </div>

                  
                   <div class="flex-1 flex flex-col xl:flex-row">
                       <div class="flex flex-col xl:flex-row items-center gap-[30px]">
                       
                           <div class="flex-1">
                               <img src="assets/img/team/doctor-2.png" alt=""/>
                           </div>

                          

                           <div class="flex-1 flex flex-col">
                           
                               <h4 class="h4 mb-[10px] ">Dr. Zachary Brown</h4>
                              
                               <div class="font-medium uppercase tracking-[2.24px] [#9ab4b7] mb-[20px]">Cardiologist</div>
                            
                               <p class="font-light mb-[26px] max-w-[320px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, consectetur soluta inventore aliquid numquam, laborum, iure porro modi accusantium ut placeat optio veniam dolore dignissimos! At quis officia quia eius.</p>
                            
                               <div class="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-youtube-fill"></i>
                                   </a>
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-facebook-circle-fill"></i>
                                   </a>
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-instagram-fill"></i>
                                   </a>
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-pinterest-fill"></i>
                                   </a>
                               </div>
                           </div>

                       </div>
                   </div>
               </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="flex flex-col xl:flex-row gap-9">
                   
                   <div class="flex-1 flex flex-col xl:flex-row">
                       <div class="flex flex-col xl:flex-row items-center gap-[30px]">
                         
                           <div class="flex-1">
                               <img src="assets/img/team/doctor-1.png" alt=""/>
                           </div>

                        

                           <div class="flex-1 flex flex-col">
                          
                               <h4 class="h4 mb-[10px] ">Dr. leslie Taylor</h4>
          
                               <div class="font-medium uppercase tracking-[2.24px] [#9ab4b7] mb-[20px]">Pediatrician</div>
               
                               <p class="font-light mb-[26px] max-w-[320px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, consectetur soluta inventore aliquid numquam, laborum, iure porro modi accusantium ut placeat optio veniam dolore dignissimos! At quis officia quia eius.</p>
                        
                               <div class="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-youtube-fill"></i>
                                   </a>
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-facebook-circle-fill"></i>
                                   </a>
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-instagram-fill"></i>
                                   </a>
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-pinterest-fill"></i>
                                   </a>
                               </div>
                           </div>

                       </div>
                   </div>

                  
                   <div class="flex-1 flex flex-col xl:flex-row">
                       <div class="flex flex-col xl:flex-row items-center gap-[30px]">
                       
                           <div class="flex-1">
                               <img src="assets/img/team/doctor-2.png" alt=""/>
                           </div>

                          

                           <div class="flex-1 flex flex-col">
                           
                               <h4 class="h4 mb-[10px] ">Dr. Zachary Brown</h4>
                              
                               <div class="font-medium uppercase tracking-[2.24px] [#9ab4b7] mb-[20px]">Cardiologist</div>
                            
                               <p class="font-light mb-[26px] max-w-[320px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, consectetur soluta inventore aliquid numquam, laborum, iure porro modi accusantium ut placeat optio veniam dolore dignissimos! At quis officia quia eius.</p>
                            
                               <div class="flex items-center text-[30px] gap-x-5 text-accent-tertiary">
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-youtube-fill"></i>
                                   </a>
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-facebook-circle-fill"></i>
                                   </a>
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-instagram-fill"></i>
                                   </a>
                                   <a href="#" class="cursor-pointer hover:text-accent transition-all ">
                                       <i class="ri-pinterest-fill"></i>
                                   </a>
                               </div>
                           </div>

                       </div>
                   </div>
               </div>
                </SwiperSlide>

                ...
            </Swiper>
            

        </div>
    </div>

    </section>
}



export default Team