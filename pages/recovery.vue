<template>
    <div class="w-full h-screen bg-white px-4 mt-[32px]">
        <nuxt-link to="sign-in" class="w-[44px]">
            <arrow class="text-3xl bg-slate-100 p-[14px]  h-[44px] w-[44px] rounded-full"/>
        </nuxt-link>

        <div class=" text-center mt-[21px] mb-[40px]">
           <h1 class="text-[32px] mt-1 font-[600]">Forgot Password</h1> 
           <p class="text-[16px] text-gray-500">Enter your Email account to reset <br> your password</p>
        </div>

        <div class="mb-[20px]">
            <form class="flex flex-col w-full">
               
                <input type="password" placeholder="@email.com" class="text-[16px] p-[16px] mb-4 bg-gray-200 h-14 outline-none border-none rounded-lg">
               
            </form>
        </div>

        <nuxt-link to="verify" class="flex flex-col justify-center">
          
            <button class="bg-[#0D6EFD] inline-block text-[16px] p-[16px] rounded-xl text-white mb-4 capitalize">reset password</button>
           
        </nuxt-link>

      

    </div>
</template>