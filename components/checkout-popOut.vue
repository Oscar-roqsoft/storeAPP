<template>
    <div class="fixed inset-0 z-50 flex justify-center place-items-center
         animate__animated animate__zoomInDown  ">
        <div class=" bg-white flex flex-col justify-center place-items-center
         min-w-[335px] rounded-lg text-center shadow-xl px-[76px] py-[40px]">
            <div class="bg-gray-300 p-[24px] rounded-full">
                <img src="@/assets/checkout-img/image 50.png" alt="">
            </div>
            <h2 class="py-[30px] text-xl text-gray-500">Your Payment Is <br> Successful</h2>
           <nuxt-link to="cart">
            <button class="px-[32px] text-sm py-[16px] inline-flex bg-[#0D6EFD] text-white rounded-xl">
                Back To Shopping
            </button>
           </nuxt-link>
        </div>
    </div>
    <div class="fixed z-60 bg-gray-300 inset-0 opacity-70 backdrop-blur-3xl"></div>
</template>