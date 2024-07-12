import { useEffect } from "react";
import ScrollReveal from "scrollreveal";


function Brands(){

    useEffect(() => {
        const sr = ScrollReveal({
            origin : "bottom",
            distance : "60px",
            duration : 3000,
            delay : 600
        });
        
        sr.reveal(".brands__logo",{
            delay:600,
            distance:"100px",
            interval:100,
            origin:'bottom'
        })
          
        
        
    }, []); 

    return <section class="brand section">
    <div class="container mx-auto">
        <div class="flex flex-col xl:flex-row gap-y-12 xl:gap-y-0 justify-between items-center">
            <img src="assets/img/brands/brand-1.svg" class="brands__logo" alt=""/>
            <img src="assets/img/brands/brand-2.svg" class="brands__logo" alt=""/>
            <img src="assets/img/brands/brand-3.svg" class="brands__logo" alt=""/>
            <img src="assets/img/brands/brand-4.svg" class="brands__logo" alt=""/>
            <img src="assets/img/brands/brand-5.svg" class="brands__logo" alt=""/>
        </div>
    </div>

</section>
}

export default Brands