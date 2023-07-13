<template>
    <div class="fixed inset-0 z-50 flex justify-center place-items-center
         animate__animated animate__zoomInDown  ">
        <div class=" bg-white flex flex-col justify-center place-items-center
         min-w-[335px] rounded-lg text-center shadow-xl px-[76px] mx-[20px] py-[40px]">
            <div class="bg-gray-300 p-[24px] rounded-full">
                <img src="/checkout-img/image50.png" alt="">
            </div>
            <h2 class="py-[30px] text-xl text-gray-500">Your Payment Is <br> Successful</h2>
           <nuxt-link to="cart">
            <button class="p-2.5 text-xs  inline-flex bg-[#0D6EFD] text-white rounded-lg">
                Back To Shopping
            </button>
           </nuxt-link>
        </div>
    </div>
    <div class="fixed z-60 bg-gray-300 inset-0 opacity-50 "></div>
</template>