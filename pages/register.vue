<script setup>
const show = ref(true)
const showMenu = ()=>{
    show.value = !show.value
}
</script>


<template>
    <div class="w-screen max-h-screen bg-white  mt-[9px] font-san">
        <nuxt-link to="sign-in" class="w-[44px]">
            <arrow class="text-3xl bg-slate-100 p-[14px] ml-4  h-[44px] w-[44px] rounded-full"/>
        </nuxt-link>
        <div class=" text-center mt-[21px] px-4">
           <h1 class="text-[18px] font-[600]">Register Account</h1> 
           <p class="text-[10px] text-gray-500">Fill your details or continue with <br> social media</p>
        </div>

        <div class="mt-[30px]">
            <form class="flex flex-col w-full px-4">
                <label class="mb-1 text-xs" >Your Name</label>
                <input type="text" placeholder="Username" class="text-sm p-[10px]  animate__animated animate__fadeIn  mb-4 bg-gray-200 outline-none border-none rounded-lg">
                <label class="mb-1 text-xs" >Email Address</label>
                <input type="text" placeholder="Enter Email Address" class="text-sm p-[10px]  animate__animated animate__fadeIn  mb-4 bg-gray-200  outline-none border-none rounded-lg">
                <label class="mb-1 text-xs">Password</label>
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
            <div class="flex justify-end my-2 text-[10px] text-gray-600">
                <nuxt-link to="recovery">forgot password</nuxt-link>
            </div>
            <nuxt-link to="home"><button class="bg-[#0D6EFD] animate__animated animate__fadeIn
                 w-full font-[600] text-[10px] inline-block p-[14px] capitalize rounded-xl text-white mb-4">
                sign up</button>
            </nuxt-link>
            <a href="https://www.google.com" target="_blank" class="flex animate__animated animate__fadeIn
            justify-center items-center my-3 bg-slate-100 p-[10px] rounded-xl">
                <img src="/img/google.png" alt="">
                <span class="ps-2 text-[10px] ">sign up with google</span>
            </a>
        </div>

        <div class="absolute bottom-8 place-items-center w-full ">
            <div class="flex justify-center">
                <span class="text-gray-400 capitalize">already have account?</span>
               <nuxt-link to="sign-in" class="px-2 font-[500]">log in</nuxt-link>
            </div>
        </div>

    </div>
</template>