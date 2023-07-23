<template>
   <div class="">
        <transition name="slide-fade">
                <side-menu v-if="show"  @click="showMenu" class="fixed z-50 " />
        </transition>

        <div  class="min-h-screen pb-40 w-screen bg-[#f7f7f9] font-sans">
           <div class="w-full mx-auto">
               <navbar />
                <section class="flex-shrink-0 
                flex justify-between items-center px-[20px] pt-[16px]">
                    <hamburger @click="showMenu" class="text-xl font-bold" />
                    <div>
                        <img src="/img/Highlight_05.png" class="absolute  top-[10px] left-[30vw]">
                        <h1 class="text-xl">Explore</h1>
                    </div>
                    <div class="" >
                        <img src="/home-img/Ellipse886.png" class="absolute animate-ping top-[24px] right-[21px]">
                        <img src="/home-img/Frame31.png" >
                    </div>
                </section>

                <section class="my-4 flex justify-between px-4 "> 
                    <search-icon  class="absolute search"/>
                    <input type="text" placeholder="looking for shoe" class="input outline-[#0D6EFD] rounded-xl shadow-lg">
                    <div class="bg-[#0D6EFD] w-[52px] text-white text-2xl
                         h-[52px] flex items-center justify-center rounded-full">
                        <slide-icon />
                    </div>
                </section>

                <section class="mb-2 pl-4">
                    <p class="text-sm">Select Category</p>
                    <div class="py-3 overflow-x-scroll grid grid-flow-col gap-3 text-sm  capitalize line">
                        <div class="min-w-[108px] min-h-[30px] inline-flex shadow-sm
                        place-items-center justify-center bg-white text-black rounded-lg">all shoe</div>
                        <div class="min-w-[108px] min-h-[30px]  inline-flex shadow-sm
                        place-items-center justify-center bg-[#0D6EFD] text-white rounded-lg">outdoor</div>
                        <div class="min-w-[108px] min-h-[30px]  inline-flex shadow-sm
                        place-items-center justify-center bg-white text-black rounded-lg">tennis</div>
                       
                    </div>
                </section>

                <section class="px-4">
                    <div class="flex justify-between font-[Raleway]">
                        <span class="text-md capitalize">popular Shoes</span>
                        <nuxt-link to="details" class="text-sm text-[#0D6EFD]">see all</nuxt-link>
                    </div>
                    <div  class="grid grid-cols-2 gap-3 my-4 " >
                       <div v-for="product in products" :key="product">
                            <div class="card bg-white rounded-xl">
                                <div @click ="showIcon" >
                                    <heart-icon   v-if="isIcon"/>
                                    <heart-icon-red  v-else  /> 
                                </div>
                               
                                <div>
                                    <img :src="product.img" alt="">
                                </div>
                                <p class=" text-[#0D6EFD] text-xs">Best Seller</p>
                                <span class="text-sm">{{ product.desc }}</span>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm">{{ product.price }}</span>
                                    <div class="bg-[#0D6EFD] w-[34px] text-white text-xl flex-shrink-0
                                        h-[35.5px] flex items-center justify-center rounded-tl-3xl rounded-br-3xl">
                                        <plus-icon />
                                    </div>
                                </div>
                            </div>
                       </div>
                       
                    </div>
                </section>

                <section class="mt-4  px-4">
                    <div class="flex justify-between mt-2 mb-4">
                        <span class="text-sm">New Arrivals</span>
                        <nuxt-link to="details" class="text-sm text-[#0D6EFD]">see all</nuxt-link>
                    </div>
                    <div class="min-h-[107px] grid grid-cols-2 bg-white rounded-xl">
                        <div class="flex flex-col justify-center items-center">
                             <div class="m-2">
                                <p class="text-xs">summer sales</p>
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

<script setup>

const show = ref(false)
const isIcon = ref(true)

const showMenu = ()=>{
        show.value = !show.value
  }


 

const products = [
    {
        id: 1,
        img: "/home-img/nike1.png",
        desc: 'Nike Jordan',
        price: 320,
    },
    {
        id: 2,
        img: "/home-img/nike2.png",
        desc: 'Nike Air Jordan ',
        price: 220,
    }
]

const showIcon =()=>{
    products.forEach((prod)=>{
        if (prod.id) {
            isIcon.value = !isIcon.value
        }
    })

}
</script>


<style scoped>
 .input{
    display: flex;
    width: 269px;
    padding: 10px 0px 10px 32px;
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
    padding: 10px 0px 0px 10px;
}

.summer{
    font-size: 20px;
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