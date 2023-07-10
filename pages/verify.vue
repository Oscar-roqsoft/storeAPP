<!-- <script scoped>
  let show = ref(true)
  let showModal = ()=>{
    show.value = !show.value
  }
</script> -->
<template>
    <div  class="w-screen h-screen bg-whit px-6  mt-[32px]">
        <nuxt-link to="recovery" class="w-[44px]">
            <arrow class="text-3xl bg-slate-100 p-[14px]  h-[44px] w-[44px] rounded-full"/>
        </nuxt-link>
        <div class=" text-center mb-[21px]">
           <h1 class="text-[32px] my-1 font-[600]">OTP Verification</h1> 
           <p class="text-[16px] text-gray-500">Please check your email to see the <br> verification code</p>
        </div>
        <div>
            <h1 class="text-[21px] mb-[16px] font-[600]">OTP Code</h1>
            <div class="grid grid-cols-4 gap-[19px]">
                <input type="number"  class="text-center  h-[56px] w-[70px] bg-slate-100  outline-none rounded-xl">
                <input type="number" class="text-center w-[70px] bg-slate-100    outline-none rounded-xl">
                <input type="number" class="text-center  w-[70px] bg-slate-100 outline-none rounded-xl">
                <input type="number" class="text-center w-[70px] bg-slate-100 outline-none rounded-xl">
            </div>
        </div>
        <button class="bg-[#0D6EFD]  w-full mt-[27px] inline-block font-[600] text-[16px] p-[16px] rounded-xl text-white mb-1">verify</button>
        <div class="flex justify-between mt-[10px] text-[14px] text-gray-400">
            <span>resend code</span>
            <div>
                <span>00</span>
                <span>:</span>
                <span>03</span>
            </div>
        </div>
    </div>
</template>