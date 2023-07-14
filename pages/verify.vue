<!-- <script scoped>
  let show = ref(true)
  let showModal = ()=>{
    show.value = !show.value
  }
</script> -->
<template>
    <div  class="w-screen h-screen bg-white font-sans">
        <nuxt-link to="recovery" class=" ">
            <arrow class="text-3xl bg-slate-100 p-[14px] ml-5 mt-6   h-[44px] w-[44px] rounded-full"/>
        </nuxt-link>
        <div class=" text-center mb-[16px] px-5 ">
           <h1 class="text-xl my-1 font-[600]">OTP Verification</h1> 
           <p class="text-sm text-gray-500">Please check your email to see the <br> verification code</p>
        </div>
        <div  class="px-5 ">
            <h1 class="text-lg mb-[14px] font-[600]">OTP Code</h1>
            <div class="grid grid-cols-4 gap-[20px] px-10">
                <input type="number"  class="text-center  h-[50px] w-[50px] bg-slate-100  outline-none rounded-xl">
                <input type="number" class="text-center   bg-slate-100    outline-none rounded-xl">
                <input type="number" class="text-center   bg-slate-100 outline-none rounded-xl">
                <input type="number" class="text-center  bg-slate-100 outline-none rounded-xl">
            </div>
        </div>
        <div class="px-5">
            <button class="bg-[#0D6EFD]  w-full mt-4 inline-block font-[600] text-[16px] p-3 rounded-xl text-white mb-1">verify</button>
        </div>
        <div class="flex justify-between mt-[10px] text-sm text-gray-400 px-5">
            <span>resend code</span>
            <div>
                <span>00</span>
                <span>:</span>
                <span>03</span>
            </div>
        </div>
    </div>
</template>