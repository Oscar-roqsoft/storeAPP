<!-- <script setup lang="ts">
  definePageMeta({
    pageTransition:{
        name: 'page'
    }
  })
</script> -->

<template>
    <div class="bg-[#1483C2] ">
        <div class="w-full min-h-[880px] px-3 ">
             <div class="h-[463px]">
                <img src="/img/Group(1).png" alt="" class="relative top-[80px] left-5">
                <img src="/img/Misc_04.png" alt="" class="relative left-[18rem]">
                <img src="/img/Spring_prev_ui1.png" alt="">
                <img src="/img/blur.png" alt="" class="relative left-8 bottom-4">
             </div>
            <div class="h-[230px] flex flex-col  justify-center
             place-items-center text-center text-white  ">
                <img src="/img/Vector(1).png" alt="" class="good">
                <h1 class="text-4xl capitalize ">let's start journey <br> with nike</h1>
                <p class="text-lg mt-5">Smart, Gorgeous & Fashionable <br> Collection Explore Now</p>
                <div class="absolute top-[704px] transition-shadow" >
                        <div class="flex justify-center place-items-center gap-3
                        animate__animated animate__fadeIn">
                            <span class="w-7 h-1 bg-[#FFB21A] rounded"></span>
                            <span class="w-10 h-1 bg-white rounded shadow-lg"></span>
                            <span class="w-7 h-1 bg-[#FFB21A] rounded"></span>
                        </div>
                </div>
            </div>
            <nuxt-link to="onboard3" class="mx-auto relative top-[90px]">
                <button class="w-full inline-block text-[14px]
                p-[14px] bg-white text-black  border 
                rounded-xl font-[600] capitalize">next</button>
            </nuxt-link>
        </div>
    </div>
</template>

<style scoped>
.slide-left{
    animation: slide 2s linear;
}
@keyframes slide{
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(0%);
    }
}
</style>