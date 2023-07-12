<!-- <script setup lang="ts">
  definePageMeta({
    pageTransition:{
        name: 'page'
    }
  })
</script> -->

<template>
    <div class="bg-[#1483C2] font-sans ">
        <div class="w-screen h-screen px-3 ">
             <div class="h-[40vh]">
                <img src="/img/Group(1).png" alt="" class="relative top-[2vh] left-5  opacity-60">
                <img src="/img/Misc_04.png" alt="" class="relative bottom-[80px] left-[19rem] opacity-60">
                <img src="/img/Spring_prev_ui1.png" alt="" class="fixed top-[10vh]">
                <img src="/img/blur.png" alt="" class="fixed left-11 top-[340px] z-50">
             </div>

            <div class="h-[35vh] flex flex-col  mt-[7rem]
              text-center text-white  ">
                <img src="/img/Vector(1).png" alt="" class="good fixed top-[43vh]">
                <h1 class="text-4xl capitalize ">let's start journey <br> with nike</h1>
                <p class="text-lg mt-5">Smart, Gorgeous & Fashionable <br> Collection Explore Now</p>
                <div class="absolute top-[704px] transition-shadow  w-full" >
                        <div class="flex justify-center place-items-center gap-3
                        animate__animated animate__fadeIn">
                            <span class="w-7 h-1 bg-[#FFB21A] rounded"></span>
                            <span class="w-10 h-1 bg-white rounded shadow-lg"></span>
                            <span class="w-7 h-1 bg-[#FFB21A] rounded"></span>
                        </div>
                </div>
            </div>
            <nuxt-link to="onboard3" class="mx-auto relative h-[5vh] flex justify-center items-center">
                <button class="w-full inline-block text-[14px]
                p-[10px] bg-white text-black  border 
                rounded-md font-[600] capitalize">next</button>
            </nuxt-link>
        </div>
    </div>
</template>

