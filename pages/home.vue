<script setup>
//   import 'animate.css'
  const show = ref(false)
  const showMenu = ()=>{
    show.value = !show.value
  }
</script>
<template>
   <div class="">
        <transition name="slide-fade">
                <side-menu v-if="show"  @click="showMenu" class="fixed z-50 " />
        </transition>

        <div  class="min-h-[880px] w-full bg-[#f7f7f9] rounded-[20px] font-serif">
           <div class="min-w-[375px] mx-auto min-h-[812px] p-[20px]">
               <navbar />
                <section class="mt-[10px] h-[44px] flex-shrink-0 
                flex justify-between items-center">
                    <hamburger @click="showMenu" class="text-3xl font-bold" />
                    <div>
                        <img src="/img/Highlight_05.png" class="absolute  top-[19px] left-[30vw]">
                        <h1 class="text-3xl">Explore</h1>
                    </div>
                    <div class="" >
                        <img src="/home-img/Ellipse886.png" class="absolute animate-ping top-[35px] right-[21px]">
                        <img src="/home-img/Frame31.png" >
                    </div>
                </section>

                <section class="my-8 flex justify-between "> 
                    <search-icon  class="absolute search"/>
                    <input type="text" placeholder="looking for shoe" class="input outline-[#0D6EFD] rounded-xl shadow-lg">
                    <div class="bg-[#0D6EFD] w-[52px] text-white text-2xl
                         h-[52px] flex items-center justify-center rounded-full">
                        <slide-icon />
                    </div>
                </section>

                <section class="mb-2">
                    <p>Select Category</p>
                    <div class="py-6 overflow-x-scroll grid grid-flow-col gap-3 capitalize line">
                        <div class="min-w-[108px] min-h-[40px] text-lg inline-flex shadow-sm
                        place-items-center justify-center bg-white text-black rounded-lg">all shoe</div>
                        <div class="min-w-[108px] min-h-[40px] text-lg inline-flex shadow-sm
                        place-items-center justify-center bg-[#0D6EFD] text-white rounded-lg">outdoor</div>
                        <div class="min-w-[108px] min-h-[40px] text-lg inline-flex shadow-sm
                        place-items-center justify-center bg-white text-black rounded-lg">tennis</div>
                       
                    </div>
                </section>

                <section>
                    <div class="flex justify-between font-[Raleway]">
                        <span class="text-xl capitalize">popular Shoes</span>
                        <nuxt-link to="details" class="text-lg text-[#0D6EFD]">see all</nuxt-link>
                    </div>
                    <div class="grid grid-cols-2 gap-3 my-5 ">
                        <div class="card bg-white rounded-xl">
                            <heart-icon />
                            <div>
                                <img src="/home-img/nike1.png" alt=""> 
                            </div>
                            <p class=" text-[#0D6EFD]">Best Seller</p>
                            <span>Nike Jordan</span>
                            <div class="flex justify-between items-center">
                                <span>$302.00</span>
                                <div class="bg-[#0D6EFD] w-[34px] text-white text-xl flex-shrink-0
                                    h-[35.5px] flex items-center justify-center rounded-tl-3xl rounded-br-3xl">
                                    <plus-icon />
                                </div>
                            </div>
                        </div>

                        <div class="card bg-white rounded-xl">
                            <heart-icon-red  />
                            <div>
                                <img src="/home-img/nike2.png" alt=""> 
                            </div>
                            <p class=" text-[#0D6EFD]">Best Seller</p>
                            <span>Nike Air Jordan</span>
                            <div class="flex justify-between items-center">
                                <span>$378.00</span>
                                <div class="bg-[#0D6EFD] w-[34px] text-white text-xl flex-shrink-0
                                    h-[35.5px] flex items-center justify-center rounded-tl-3xl rounded-br-3xl">
                                    <plus-icon />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mt-8 ">
                    <div class="flex justify-between mt-2 mb-5">
                        <span>New Arrivals</span>
                        <nuxt-link to="details" class="text-lg text-[#0D6EFD]">see all</nuxt-link>
                    </div>
                    <div class="min-h-[107px] grid grid-cols-2 bg-white rounded-xl">
                        <div class="flex flex-col justify-center items-center">
                             <div class="m-2">
                                <p>summer sales</p>
                                <span class="text-[#674DC5] summer">15% OFF</span>
                             </div>
                        </div>

                        <div class="flex place-items-center justify-center">
                            <img src="/home-img/Misc_06.png" class="relative top-[-17px] left-[45px]">
                            <img src="/home-img/Nike-Zoom.png"  class="relative top-[-24px] left-[29px]" >
                            <img src="/home-img/Ellipse3.png"  class="relative top-[28px] right-[77px]">
                        </div>
                    </div>
                </section>
           </div>
        </div>
      
   </div>
</template>


<style>
 .input{
    display: flex;
    width: 269px;
    padding: 14px 32px 14px 38px;
    align-items: center;
    gap: 12px;

 }
 .search{
    transform: translateY(70%);
    font-size: 22px;
    color: gray;
    margin: 0px 10px;
 }
 .card{
    display: flex;
    padding: 12px 0px 0px 12px;
    flex-direction: column;
}

.summer{
    font-size: 36px;
    font-family: Futura;
    font-weight: 900;
    line-height: 36.717px;
    letter-spacing: -0.72px;
}

.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0.8;
}
</style>