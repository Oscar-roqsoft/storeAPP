<template>
    <div class="bg-black">
        <div class="min-h-[880px] w-full bg-[#f7f7f9] rounded-[20px] font-serif">
            <div  class="min-w-[375px] mx-auto min-h-[812px] p-[20px]">
                <section class="mt-[20px] h-[44px] flex-shrink-0 
                flex justify-between items-center">
                    <nuxt-link to="home" class="">
                        <arrow class="text-xl bg-slate-200 p-2 border rounded-full w-8 h-8"/>
                    </nuxt-link>
                    <div>
                        <h1 class="text-xl">Sneaker Shop</h1>
                    </div>
                    <div class="" >
                        <img src="/home-img/Frame31.png" >
                    
                    </div>
                </section>

                <section class="mt-8">
                    <p class="text-[26px] font-[600] leading-snug">Nike Air Max 270 <br> Essential</p>
                    <span class="text-gray-400">Men’s Shoes</span>
                    <p class="text-[26px] font-[600]">$179.39</p>
                </section>
                     
                   


                <section class="relative top-[92px] ">
                    <div class="absolute top-[-271px]">
                        <img src="/favourite-img/HeroImage.png" alt="">
                    </div>
                    <img src="/favourite-img/Ellipse5.png" alt="">
                    <div class=" flex justify-center items-center ">
                       <div class=" relative bottom-3 flex justify-between bg-gray-500 
                       text-white rounded-lg p-1 w-12">
                            <arrow />
                            <arrow-right />
                       </div>
                    </div>
                    <div class="grid grid-cols-5 my-8">
                        <div class="h-[56px] w-[56px] bg-white flex items-center justify-center 
                        flex-shrink-0 rounded-xl">
                            <img src="/favourite-img/HeroImage.png" class="">
                        </div>
                        <div class="h-[56px] w-[56px] bg-white flex items-center justify-center rounded-xl">
                            <img src="/favourite-img/nike-23.png" alt="">
                        </div>
                        <div class="h-[56px] w-[56px] bg-white flex items-center justify-center rounded-xl">
                            <img src="/favourite-img/nike-zoom.png" alt="">
                        </div>
                        <div class="h-[56px] w-[56px] bg-white flex items-center justify-center rounded-xl">
                            <img src="/favourite-img/PngItem_5550642(2)1.png" alt="">
                        </div>
                        <div class="h-[56px] w-[56px] bg-white flex items-center justify-center rounded-xl">
                            <img src="/favourite-img/nike-23.png" alt="">
                        </div>
                    </div>
                </section>

                <section class="mt-[150px]">
                    <p class="text-gray-500">The Max Air 270 unit delivers unrivaled, 
                        all-day comfort. The sleek, running-inspired design roots you to everything Nike........
                    </p>
                    <div class="flex justify-end text-[#0D6EFD] text-lg">
                        <a class="text-[14px]">Read More</a>
                    </div>
                </section>


                <section class="h-[180px] flex justify-center flex-col">
                        <div class="grid grid-cols-3 mt-[20px]">
                            <div class="flex justify-center">
                                <div class="bg-gray-200 w-[52px]  text-2xl
                                    h-[52px] flex items-center justify-center rounded-full">
                                <heart-icon />
                                </div>
                            </div>
                            <button class="flex col-span-2 justify-center items-center
                             text-white bg-[#0D6EFD] text-lg rounded-2xl">
                                <bag-icon class="text-2xl" />
                                <span class=" pl-4 text-[16px] ">Add to Cart</span>
                        </button>
                        </div>
                </section>
            </div>


           
        </div>
    </div>
</template>