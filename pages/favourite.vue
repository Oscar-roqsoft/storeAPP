<template>
    <div class="bg-black">
        <div class="min-h-[880px] w-screen bg-[#f7f7f9] rounded-[20px] font-san">
            <div class="min-w-[375px] mx-auto min-h-[812px] p-[20px]">
                 <navbar />
                <section class="mt-[20px] h-[44px] flex-shrink-0 
                flex justify-between items-center">
                    <nuxt-link to="home" class="">
                        <arrow class="text-xl bg-slate-200 p-2 border rounded-full w-8 h-8"/>
                    </nuxt-link>
                    <div>
                        <h1 class="text-xl">Sneaker Shop</h1>
                    </div>
                    <div class="bg-white w-[42px]  text-2xl
                         h-[42px] flex items-center justify-center rounded-full">
                        <heart-icon />
                    </div>
                </section>

                <section class="mt-10">
                    <div class="flex justify-between font-[Raleway]">
                        <span class="text-xl capitalize">popular Shoes</span>
                        <span class="text-lg text-[#0D6EFD]">see all</span>
                    </div>
                    <div class="grid grid-cols-2 gap-3 my-5 ">
                        <div class="card bg-white rounded-xl">
                            <heart-icon-red />
                            <div>
                                <img src="/home-img/nike1.png" alt=""> 
                            </div>
                            <p class=" text-[#0D6EFD]">Best Seller</p>
                            <span>Nike Jordan</span>
                            <div class="flex justify-between items-center">
                                <span>$32.00</span>
                                <div class="flex ">
                                    <div class=" h-[16px] w-[16px]  bg-[#60ca6b] rounded-full"></div>
                                    <div class=" h-[16px] w-[16px] mx-2 bg-[#cb1d1d] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div class="card bg-white rounded-xl">
                            <heart-icon-red  />
                            <div>
                                <img src="/home-img/nike2.png" alt=""> 
                            </div>
                            <p class=" text-[#0D6EFD]">Best Seller</p>
                            <span>Nike Air Jordan</span>
                            <div class="flex justify-between items-center">
                                <span>$78.00</span>
                                <div class="flex ">
                                    <div class=" h-[16px] w-[16px]  bg-[#0b2f8b] rounded-full"></div>
                                    <div class=" h-[16px] w-[16px] mx-2 bg-[#cb1d1d] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div class="card bg-white rounded-xl">
                            <heart-icon-red  />
                            <div>
                                <img src="/home-img/nike2.png" alt=""> 
                            </div>
                            <p class=" text-[#0D6EFD]">Best Seller</p>
                            <span>Nike Air Jordan</span>
                            <div class="flex justify-between items-center">
                                <span>$38.00</span>
                                <div class="flex ">
                                    <div class=" h-[16px] w-[16px] bg-[#60ca6b] rounded-full"></div>
                                    <div class=" h-[16px] w-[16px] mx-2 bg-[#cb1d1d] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div class="card bg-white rounded-xl">
                            <heart-icon-red  />
                            <div>
                                <img src="/home-img/nike2.png" alt=""> 
                            </div>
                            <p class=" text-[#0D6EFD]">Best Seller</p>
                            <span>Nike Air Jordan</span>
                            <div class="flex justify-between items-center">
                                <span>$22.00</span>
                                <div class="flex ">
                                    <div class=" h-[16px] w-[16px]  bg-[#7ddbda] rounded-full"></div>
                                    <div class=" h-[16px] w-[16px] mx-2 bg-[#60ca6b] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>