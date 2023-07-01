<script setup>
const show = ref(true)
const showMenu = ()=>{
    show.value = !show.value
}
</script>


<template>
    <div class="w-full min-h-[880px] bg-white px-4  mt-[33px] ">
        <nuxt-link to="sign-in" class="w-[44px]">
            <arrow class="text-3xl bg-slate-100 p-[14px]  h-[44px] w-[44px] rounded-full"/>
        </nuxt-link>
        <div class=" text-center mt-[21px]">
           <h1 class="text-[32px] my-1 font-[600]">Register Account</h1> 
           <p class="text-[16px] text-gray-500">Fill your details or continue with <br> social media</p>
        </div>

        <div class="mt-[30px]">
            <form class="flex flex-col w-full">
                <label class="mb-2" >Your Name</label>
                <input type="text" placeholder="Username" class="text-xl p-[16px]  animate__animated animate__fadeIn  mb-4 bg-gray-200 h-14 outline-none border-none rounded-lg">
                <label class="mb-2" >Email Address</label>
                <input type="text" placeholder="Enter Email Address" class="text-xl p-[16px]  animate__animated animate__fadeIn  mb-4 bg-gray-200 h-14 outline-none border-none rounded-lg">
                <label class="mb-2 ">Password</label>
                <div v-if="show" class="flex relative p-icon">
                    <input type="password" placeholder="* * * * * " class="p-[16px]  animate__animated animate__fadeIn   w-full  bg-gray-200  outline-none rounded-xl">
                    <a @click="showMenu"><hide-icon  class="absolute right-[23px] translate-y-[15px]  text-[26px]"/></a>
                </div>
                <div v-else class="flex relative p-icon">
                    <input type="text" placeholder="oscar " class="p-[16px]   w-full  bg-gray-200  outline-none rounded-xl">
                    <a @click="showMenu"><show-icon class="absolute right-[23px] translate-y-[15px]  text-[26px]"/></a>
                </div>
               
            </form>
        </div>

        <div class="flex flex-col justify-center">
            <div class="flex justify-end mb-4 text-[14px] text-gray-600">
                <nuxt-link to="recovery">forgot password</nuxt-link>
            </div>
            <button class="bg-[#0D6EFD]  animate__animated animate__fadeIn  inline-block p-[16px] rounded-xl text-white mb-4">sign up</button>
            <a href="https://www.google.com" target="_blank" class="flex  animate__animated animate__fadeIn  justify-center my-3 bg-slate-100 p-[16px] rounded-xl">
                <img src="../assets/img/google.png" alt="">
                <span class="ps-2">sign up with google</span>
            </a>
        </div>

        <div class="relative top-[90px] text-center w-full">
            <span class="text-gray-500 capitalize">already have account?</span>
            <nuxt-link to="sign-in" class="px-2">log in</nuxt-link>
        </div>

    </div>
</template>