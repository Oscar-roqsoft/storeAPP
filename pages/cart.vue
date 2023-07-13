<template>
    <div class="bg-black">
        <div class="min-h-screen w-screen bg-[#f7f7f9] font-sans">
            <div class=" mx-auto ">
                <section class=" h-[44px] flex-shrink-0 
                    flex justify-between items-center px-[20px] pt-6">
                    <nuxt-link to="home" class="">
                        <arrow class="text-xl bg-slate-200 p-2 border rounded-full w-8 h-8"/>
                    </nuxt-link>
                    <div>
                        <h1 class="text-lg">My Cart</h1>
                    </div>
                    <div class="" >
                    </div>
                </section>

                <section class="flex flex-col mt-4  px-[20px]">
                    <p class="py-2">3 Item</p>
                    <div class="grid grid-cols-5 gap-4 ">
                           <div class="flex flex-col justify-center text-xl text-white
                           items-center bg-[#0D6EFD] rounded-lg">
                             <span>+</span>
                             <span>1</span>
                             <span>-</span>
                           </div>

                           <div class="bg-white col-span-4 p-3 gap-6 rounded-xl grid grid-cols-3">
                              <div class="bg-gray-300 pt-2  rounded-lg ">
                                <img class="w-full" src="/favourite-img/nike-zoom.png" alt="">
                              </div>
                              <div class="flex flex-col justify-center col-span-2 ">
                                <span class="text-sm">Nike Club Max</span>
                                <span class="text-sm">$584.95</span>
                              </div>
                           </div>
                    </div>

                    <div class="grid grid-cols-5 gap-4  mt-4">
                          

                        <div class="bg-white col-span-4 p-3 gap-6 rounded-lg grid grid-cols-3">
                            <div class="bg-gray-300 pt-2  rounded-xl ">
                            <img class="w-full" src="/favourite-img/nike-23.png" alt="">
                            </div>
                            <div class="flex flex-col justify-center col-span-2 ">
                            <span class="text-sm">Nike Club Max</span>
                            <span class="text-sm">$584.95</span>
                            </div>
                        </div>
                        
                        <div class="flex flex-col justify-center text-2xl text-white
                        items-center bg-red-500 rounded-lg">
                            <delete-icon />
                        </div>
                    </div>

                   <div class="grid grid-cols-1  gap-5 flex-shrink-0 my-4">
                        <div class="bg-white  p-3 gap-6 rounded-xl grid grid-cols-4 ">
                            <div class="bg-gray-300 pt-2  rounded-lg">
                                <img class="w-full" src="/favourite-img/nike-23.png" alt="">
                            </div>
                            <div class="flex flex-col justify-center col-span-3 ">
                                <span class="text-sm">Nike Club Max</span>
                                <span class="text-sm">$584.95</span>
                            </div>
                        </div>
                   </div>
                </section>

                <total />
               
            </div>
        </div>
    </div>
</template>