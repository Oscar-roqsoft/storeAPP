<script setup>
const show = ref(true)
const showMenu = ()=>{
    show.value = !show.value
}
</script>

<template>
    <div class="w-full min-h-[880px] bg-white px-4  mt-[33px] font-[Raleway]">
        <nuxt-link to="onboard3" class="w-[44px]">
            <arrow class="text-3xl bg-slate-100 p-[14px]  h-[44px] w-[44px] rounded-full"/>
        </nuxt-link>
        <div class=" text-center mt-[21px]">
           <h1 class="text-[32px] mb-2 font-[600]">Hello Again!</h1> 
           <p class="text-[16px] text-gray-500">Fill your details or continue with <br> social media</p>
        </div>
        <div class="mt-[30px] w-full">
            <form class="flex flex-col w-full ">
                <label class="mb-2" >Email Address</label>
                <input type="text" class="text-xl p-[16px] mb-4 bg-gray-200 h-14 outline-none border-none
                  animate__animated animate__fadeIn rounded-lg">
                <label class="mb-2 ">Password</label>
                <div v-if="show" class="flex relative p-icon animate__animated  animate__fadeIn">
                    <input type="password" placeholder="* * * * * " class="p-[16px] w-full  bg-gray-200  outline-none rounded-xl">
                    <a @click="showMenu"><hide-icon  class="absolute right-[23px] translate-y-[15px]  text-[26px]"/></a>
                </div>
                <div v-else class="flex relative p-icon animate__animated  animate__fadeIn ">
                    <input type="text" placeholder="oscar " class="p-[16px]   w-full  bg-gray-200  outline-none rounded-xl">
                    <a @click="showMenu"><show-icon class="absolute right-[23px] translate-y-[15px]  text-[26px]"/></a>
                </div>
               
            </form>
        </div>
        <div class="flex flex-col justify-center">
            <div class="flex justify-end mb-4 text-[14px] text-gray-600">
                <nuxt-link to="recovery">forgot password</nuxt-link>
            </div>
            <nuxt-link to="home"><button class="bg-[#0D6EFD] animate__animated animate__fadeIn
                 w-full font-[600] text-[16px] inline-block p-[14px] rounded-xl text-white mb-4">
                sign in</button>
            </nuxt-link>
            <a href="https://www.google.com" target="_blank" class="flex animate__animated animate__fadeIn
            justify-center my-3 bg-slate-100 p-[16px] rounded-xl">
                <img src="/img/google.png" alt="">
                <span class="ps-2">sign up with google</span>
            </a>
        </div>

        <div class="relative top-[176px] text-center ">
            <span class="text-gray-500">new user?</span>
            <nuxt-link to="register" class="capitalize px-1">create account</nuxt-link>
        </div>

    </div>
</template>