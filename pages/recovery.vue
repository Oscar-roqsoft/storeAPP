<template>
    <div class="w-full h-screen bg-white mt-[10px] font-sans">
        <nuxt-link to="sign-in" class="w-[44px]">
            <arrow class="text-3xl bg-slate-100 p-[14px] ml-4  h-[44px] w-[44px] rounded-full"/>
        </nuxt-link>

        <div class=" text-center mt-[21px] mb-[40px] px-4">
           <h1 class="text-[18px]  font-[600]">Forgot Password</h1> 
           <p class="text-[10px] text-gray-500">Enter your Email account to reset <br> your password</p>
        </div>

        <div class="mb-[10px] px-4">
            <form class="flex flex-col w-full">
               
                <input type="password" placeholder="@email.com" class="text-[14px] p-[10px] mb-4 bg-gray-200  outline-none border-none rounded-lg">
               
            </form>
        </div>

        <nuxt-link to="verify" class="flex flex-col justify-center px-4">
          
            <button class="bg-[#0D6EFD] inline-block text-[14px] p-[10px] rounded-lg text-white mb-4 capitalize">reset password</button>
           
        </nuxt-link>

      

    </div>
</template>