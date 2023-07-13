<template>
        <section class="fixed h-[220px] bottom-0 left-0 bg-white w-full py-4">
                    <div class=" px-[20px] text-sm">
                        <div class="flex justify-between py-3">
                            <span class="text-gray-500">Subtotal</span>
                            <span>$753.95</span>
                        </div>
                        <div class="flex justify-between pb-3">
                            <span class="text-gray-500">Delivery</span>
                            <span >$60.20</span>
                        </div>
                        <div class="grid grid-cols-12 gap-3">
                            <hr class="bg-black"> <hr class="bg-black"><hr class="bg-black"> <hr class="bg-black"><hr class="bg-black"> <hr class="bg-black">
                            <hr class="bg-black"> <hr class="bg-black"><hr class="bg-black"> <hr class="bg-black">
                            <hr class="bg-black"> <hr class="bg-black"> 
                        </div>

                        <div class="flex justify-between py-4">
                            <span class="text-gray-600">Total Cost</span>
                            <span class="text-[#0D6EFD] text-lg">$814.15</span>
                        </div>

                        <nuxt-link to="checkout" class=" flex flex-col justify-center w-full">
                            <button class="w-full inline-block  text-[14px]
                            p-2 bg-[#0D6EFD] text-white border 
                            rounded-lg font-medium capitalize">Checkout</button>
                        </nuxt-link>
                     </div>
                </section>
</template>