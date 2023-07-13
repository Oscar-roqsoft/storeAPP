<!-- <script setup lang="ts">
  definePageMeta({
    pageTransition:{
        name: 'page'
    }
  })
</script> -->

<template>
    <div class="bg-[#1483C2] w-screen h-screen  font-sans ">
        <div class="w-full">
             <div class="h-[40vh] px-3 ">
                <img src="/img/Group(1).png" alt="" class="relative top-[2vh] left-5 opacity-60">
                <img src="/img/Misc_04.png" alt="" class="relative bottom-[80px] left-[19rem] opacity-60">
                <img src="/img/Spring_prev_ui1.png" alt="" class="fixed top-[10vh]">
                <img src="/img/blur.png" alt="" class="fixed left-11 top-[340px] z-50">
             </div>

            <div class="h-[32vh] flex flex-col  mt-[7rem]
              text-center text-white  px-3 ">
                <img src="/img/Vector(1).png" alt="" class="w-full left-0 fixed top-[43vh]">
                <h1 class="text-2xl capitalize font-semibold ">let's start journey <br> with nike</h1>
                <p class="text-sm mt-2">Smart, Gorgeous & Fashionable <br> Collection Explore Now</p>
                <div class="fixed top-[80%] transition-shadow  w-full" >
                        <div class="flex justify-center place-items-center gap-3
                        animate__animated animate__fadeIn">
                            <span class="w-7 h-1 bg-[#FFB21A] rounded"></span>
                            <span class="w-10 h-1 bg-white rounded shadow-lg"></span>
                            <span class="w-7 h-1 bg-[#FFB21A] rounded"></span>
                        </div>
                </div>
            </div>
            <nuxt-link to="onboard3" class="mx-auto relative px-3  flex justify-center items-center">
                <button class="w-full inline-block text-[14px]
                p-[10px] bg-white text-black  border 
                rounded-md font-[600] capitalize">next</button>
            </nuxt-link>
        </div>
    </div>
</template>

