<script setup>
const show = ref(true)
const showMenu = ()=>{
    show.value = !show.value
}
</script>
<template>
    <div class="min-h-screen w-screen bg-[#f7f7f9] font-sans">
        <div class="mx-auto">
                <section class="px-[20px] pt-6 h-[44px] flex-shrink-0 
                    flex justify-between items-center">
                    <nuxt-link to="cart" class="">
                        <arrow class="text-xl bg-slate-200 p-2 border rounded-full w-8 h-8"/>
                    </nuxt-link>
                    <div>
                        <h1 class="text-lg">My Cart</h1>
                    </div>
                    <div class="" >
                    </div>
                </section>

                <section class="px-[20px] py-6 bg-white rounded-3xl mt-8 text-sm">
                    <div class="flex flex-col ">
                        <p>contact Information</p>
                        <div class="grid grid-cols-6 min-h-[40px] gap-4 my-[16px]">
                            <div class="h-[40px] w-[40px] bg-gray-300 rounded-full flex
                            justify-center items-center"><email-icon/> </div>
                            <div class="flex flex-col justify-between col-span-4">
                                <p>emmanueloyiboke@gmail.com</p>
                                <span>Email</span>
                            </div>
                            <div class="h-[40px] w-[40px] bg-gray-300 rounded-full
                            flex justify-center items-center"><edit-icon/> </div>
                        </div>

                        <div class="grid grid-cols-6 min-h-[40px] gap-4 my-[16px]">
                            <div class="h-[40px] w-[40px] bg-gray-300 rounded-full flex
                            justify-center items-center"><call-icon/> </div>
                            <div class="flex flex-col justify-between col-span-4">
                                <p>+2348084109083</p>
                                <span>Phone</span>
                            </div>
                            <div class="h-[40px] w-[40px] bg-gray-300 rounded-full
                            flex justify-center items-center"><edit-icon/> </div>
                        </div>

                        <p>Address</p>

                        <div class="flex justify-between items-center my-[16px]">
                            <span class="text-gray-500">1082 Airport Road, Nigeria</span>
                            <arrow-down class="text-lg"/>   
                        </div>

                        <div class="h-[101px] w-[295px] flex justify-center items-center map">
                            <div class="flex flex-col justify-center items-center">
                                <p>View Map</p>
                                <div class="h-[36px] w-[36px] bg-[#0D6EFD] rounded-full
                                 flex justify-center items-center text-white"><location-icon /></div>
                            </div>
                        </div>

                        <p class="my-[16px]">Payment Method</p>

                        <div class="flex justify-between ">
                            <div class="flex">
                                <div class="h-[40px] w-[40px] flex justify-center items-center">
                                    <img src="/checkout-img/image55.png" alt="">
                                </div>
                                <div class="flex flex-col justify-between px-2">
                                    <h3>DbL Card</h3>
                                    <span>**** **** 0696 4629 </span>
                                </div>
                            </div>

                            <div class="h-[40px] w-[40px] flex justify-center items-center text-xl">
                                   <arrow-down />
                            </div>
                        </div>
                    </div>
                </section>

                <section class="fixed h-[220px] bottom-0 left-0 bg-white w-full py-4">
                    <div class="px-[20px] text-sm">
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

                        <div v-if="show" class=" flex flex-col justify-center w-full">
                            <button @click="showMenu" class="w-full inline-block  text-[14px]
                            p-2 bg-[#0D6EFD] text-white border 
                            rounded-lg font-medium capitalize">Checkout</button>
                        </div>
                        <checkout-pop-out v-else  />
                     </div>
                </section>
        </div>
    </div>
       

</template>

<!-- <style scoped>
.map{
    /* background: url("/public/favourite-img/rectangle1066.png"); */
    /* background-size: cover; */
}
</style> -->