<script setup>
const show = ref(true)
const showMenu = ()=>{
    show.value = !show.value
}
</script>

<template>
    <div class="w-screen max-h-screen bg-white  mt-[9px] font-san">
        <nuxt-link to="/" class="w-[44px]">
            <arrow class="text-3xl bg-slate-100 p-[14px] ml-4  h-[44px] w-[44px] rounded-full"/>
        </nuxt-link>
        <div class=" text-center mt-[21px]">
           <h1 class="text-[18px] font-[600]">Hello Again!</h1> 
           <p class="text-[10px] text-gray-500">Fill your details or continue with <br> social media</p>
        </div>
        <div class="mt-[30px] w-full">
            <form class="flex flex-col w-full px-4">
                <label class="mb-1 text-sm" >Email Address</label>
                <input type="text" class="text-sm p-[10px] mb-4 bg-gray-200  outline-none border-none
                  animate__animated animate__fadeIn rounded-lg">
                <label class="mb-1 text-sm">Password</label>
                <div v-if="show" class="flex relative p-icon animate__animated  animate__fadeIn">
                    <input type="password" placeholder="* * * * * * " class="p-[10px] w-full  bg-gray-200  outline-none rounded-lg">
                    <a @click="showMenu"><hide-icon  class="absolute right-[23px] translate-y-[15px]"/></a>
                </div>
                <div v-else class="flex relative p-icon animate__animated  animate__fadeIn ">
                    <input type="text" placeholder="oscar " class="p-[10px]   w-full  bg-gray-200  outline-none rounded-lg">
                    <a @click="showMenu"><show-icon class="absolute right-[23px] translate-y-[15px] "/></a>
                </div>
               
            </form>
        </div>
        <div class="flex flex-col justify-center px-4">
            <div class="flex justify-end my-2 text-xs text-gray-400">
                <nuxt-link to="recovery">forgot password</nuxt-link>
            </div>
            <nuxt-link to="home"><button class="bg-[#0D6EFD] animate__animated animate__fadeIn
                 w-full font-[600] text-[10px] inline-block p-[14px] capitalize rounded-xl text-white mb-4">
                sign in</button>
            </nuxt-link>
            <a href="https://www.google.com" target="_blank" class="flex animate__animated animate__fadeIn
            justify-center items-center my-3 bg-slate-100 p-[10px] rounded-xl">
                <img src="/img/google.png" alt="">
                <span class="ps-2 text-[10px] ">sign up with google</span>
            </a>
        </div>

        <div class="absolute bottom-12 place-items-center w-full ">
                <div class="flex justify-center">
                    <span class="text-gray-500">new user?</span>
                    <nuxt-link to="register" class="capitalize px-1">create account</nuxt-link>
                </div>
        </div>

    </div>
</template>