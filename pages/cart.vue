<template>
    <div class="bg-black">
        <div class="min-h-[880px] w-screen bg-[#f7f7f9] rounded-[20px] font-serif">
            <div class="min-w-[375px] mx-auto min-h-[812px] p-[20px]">
                <section class="mt-[20px] h-[44px] flex-shrink-0 
                    flex justify-between items-center">
                    <nuxt-link to="home" class="">
                        <arrow class="text-xl bg-slate-200 p-2 border rounded-full w-8 h-8"/>
                    </nuxt-link>
                    <div>
                        <h1 class="text-xl">My Cart</h1>
                    </div>
                    <div class="" >
                    </div>
                </section>

                <section class="flex flex-col mt-6 ">
                    <p class="py-2">3 Item</p>
                    <div class="grid grid-cols-5 gap-4 h-[104px]">
                           <div class="flex flex-col justify-center text-xl text-white
                           items-center bg-[#0D6EFD] rounded-xl">
                             <span>+</span>
                             <span>1</span>
                             <span>-</span>
                           </div>

                           <div class="bg-white col-span-4 p-3 gap-6 rounded-xl grid grid-cols-3">
                              <div class="bg-gray-300 pt-2  rounded-xl ">
                                <img class="w-full" src="/favourite-img/nike-zoom.png" alt="">
                              </div>
                              <div class="flex flex-col justify-center col-span-2 ">
                                <span class="text-lg">Nike Club Max</span>
                                <span>$584.95</span>
                              </div>
                           </div>
                    </div>

                    <div class="grid grid-cols-5 gap-4 h-[104px] mt-4">
                          

                        <div class="bg-white col-span-4 p-3 gap-6 rounded-xl grid grid-cols-3">
                            <div class="bg-gray-300 pt-2  rounded-xl ">
                            <img class="w-full" src="/favourite-img/nike-23.png" alt="">
                            </div>
                            <div class="flex flex-col justify-center col-span-2 ">
                            <span class="text-lg">Nike Club Max</span>
                            <span>$584.95</span>
                            </div>
                        </div>
                        
                        <div class="flex flex-col justify-center text-2xl text-white
                        items-center bg-red-500 rounded-xl">
                            <delete-icon />
                        </div>
                    </div>

                   <div class="grid grid-cols-1 h-[104px] gap-5 flex-shrink-0 my-4">
                        <div class="bg-white  p-3 gap-6 rounded-xl grid grid-cols-4 ">
                            <div class="bg-gray-300 pt-2  rounded-xl">
                                <img class="w-full" src="/favourite-img/nike-23.png" alt="">
                            </div>
                            <div class="flex flex-col justify-center col-span-3 ">
                                <span class="text-lg">Nike Club Max</span>
                                <span>$584.95</span>
                            </div>
                        </div>
                   </div>
                </section>

                <total />
               
            </div>
        </div>
    </div>
</template>