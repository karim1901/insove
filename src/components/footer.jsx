import { useEffect } from "react";
import ScrollReveal from "scrollreveal";





function Footer(){

    useEffect(() => {
        const sr = ScrollReveal({
            origin : "bottom",
            distance : "60px",
            duration : 3000,
            delay : 600
        });
        
        sr.reveal(".footer__item",{
            delay:600,
            distance:"100px",
            interval:100,
            origin:'bottom'
          })
            
    }, []); 



    return <section class="footer pt-12 xl:pt-[150px] ">
    <div class="container mx-auto pb-12 px-5 xl:pb-[100px] ">
        <div class="flex flex-col xl:flex-row gap-x-5 gap-y-10">
        
            <div class="footer__item flex-1 ">
  
                <a href="">
                    <img class="mb-[30px]" src="assets/img/header/logo.svg" alt=""/>
                </a>
                
                <p class="mb-[20px]">
                    Lorem ipsum dolor sit, adipisicing elit. doloribus exercitationem nobis minus iusto officia ipsam.
                </p>
              
                <div class="flex flex-col gap-y-3 mb-10">
                    <div class="flex items-center gap-x-[6px]">
                        <i class="ri-map-pin-fill text-[24px] text-accent"></i>
                        <div class="">Hay Zaitoune, Tikiouine, Agadir</div>
                    </div>
                    <div class="flex items-center gap-x-[60px]">
                        <i class="ri-mail-fill text-[24px] text-accent"></i>
                        <div class="">inosve@gmail.com</div>
                    </div>
                    <div class="flex items-center gap-x-[60px]">
                        <i class="ri-phone-fill text-[24px] text-accent"></i>
                        <div class="">(+212 689 89 00 00)r</div>
                    </div>
                    
                </div>
        
                <div class="flex gap-[14px] text-[30px]">
                    <div class="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary
                        hover:text-accent cursor-pointer transition-all">
                        <i class="ri-facebook-circle-fill"></i>
                    </div>
                    <div class="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary
                        hover:text-accent cursor-pointer transition-all">
                        <i class="ri-instagram-line"></i>
                    </div>
                    <div class="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary
                        hover:text-accent cursor-pointer transition-all">
                        <i class="ri-twitter-fill"></i>
                    </div>
                    <div class="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary
                        hover:text-accent cursor-pointer transition-all">
                        <i class="ri-linkedin-box-fill"></i>
                    </div>
                </div>
            </div>
           
            <div class="footer__item flex-1 ">
                <h4 class="h4 mb-5">Quick Links</h4>
                <div class="flex gap-x-5">
                
                    <ul class="flex-1 flex flex-col gap-y-5 ">
                        <li><a href="#" class="hover:text-accent transition-all">Home</a></li>
                        <li><a href="#" class="hover:text-accent transition-all">Doctors</a></li>
                        <li><a href="#" class="hover:text-accent transition-all">Deoartement</a></li>
                        <li><a href="#" class="hover:text-accent transition-all">Services</a></li>
                        <li><a href="#" class="hover:text-accent transition-all">Blog</a></li>
                    </ul>
        
                    <ul class="flex-1 flex flex-col gap-y-5 ">
                        <li><a href="#" class="hover:text-accent transition-all">Our Pricing</a></li>
                        <li><a href="#" class="hover:text-accent transition-all">Contact</a></li>
                        <li><a href="#" class="hover:text-accent transition-all">Careers</a></li>
                        <li><a href="#" class="hover:text-accent transition-all">Faqs</a></li>
                        <li><a href="#" class="hover:text-accent transition-all">Privacy Policy</a></li>
                    </ul>

                </div>
            </div>
      
            <div class="footer__item flex-1 ">
                <h4 class="h4 mb-5">Opening Hours</h4>
             
                <div>
                 
                    <div class="flex-1">
             
                        <div class="flex justify-between items-center border-b pb-[10px]">
                            <div>Monday - Thursday </div>
                            <div class="text-accent font-medium">8:00 Am - 6:00 Pm</div>
                        </div>
      
                        <div class="flex justify-between items-center border-b pb-[10px]">
                            <div>Friday - Saturday </div>
                            <div class="text-accent font-medium">10:00 Am - 4:00 Pm</div>
                        </div>
             
                        <div class="flex justify-between items-center border-b pb-[10px]">
                            <div>Sunday </div>
                            <div class="text-accent font-medium">Emergnecy Only</div>
                        </div>
                      
                        <div class="flex justify-between items-center border-b pb-[10px]">
                            <div>Personal</div>
                            <div class="text-accent font-medium">7:00 Am - 9:00 Pm</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
    <div class="py-[30px] border-t">
        <div class="container mx-auto text-center">
            <div>&copy; 2023 Insove - All rights reseved.</div>
        </div>
    </div>
</section>
}


export default Footer