<template>
    <div class="min-h-screen w-screen bg-[rgb(247,247,249)]  font-sans">
        <div class="">
            <section class="px-[20px] pt-6 h-[44px] flex-shrink-0 
                flex justify-between items-center">
                <nuxt-link to="home" class="">
                    <arrow class="text-xl bg-slate-200 p-2 border rounded-full w-8 h-8"/>
                </nuxt-link>
                <div>
                    <h1 class="text-xl">Notifications</h1>
                </div>
                <div class=" h-[44px] w-[44px] bg-slate-200 text-2xl flex justify-center items-center rounded-full" >
                       <DeleteIcon />
                </div>
            </section>

            <section class="py-[16px] px-[20px] text-xs">
                <p  class="my-[16px] text-[18px]">Recent</p>

                <div class="grid grid-cols-4  p-[11px]  place-items-center  rounded-xl">
                    <div class=" bg-white w-[87px] h-[85px]  rounded-3xl flex justify-center items-center">
                        <img src="/checkout-img/pngaaa1.png" class="w-full">
                    </div>
                      <div class="col-span-2">
                           <div class="fixed right-7 -translate-y-2 text-[#707B81]"><p><span>7</span> mins ago</p></div> 
                            <p class=" relative top-2 bottom-3 text-[#0D6EFD] leading-tight">
                                We Have New <br> Products With Offers </p>
                            <div class="flex justify-between mt-4">
                                <span>$364.95</span>
                                <span class="text-gray-500">$260.00</span>
                            </div>
                      </div>
                </div>

                <div class="grid grid-cols-4 p-[11px] my-2  place-items-center min-h-[105px] rounded-xl">
                    <div class="bg-white w-[87px] h-[85px]  rounded-3xl flex justify-center items-center">
                        <img src="/checkout-img/epic-nike.png" class="w-full">
                    </div>
                      <div class="col-span-2">
                           <div class=" fixed right-7 -translate-y-2 text-[#707B81]"><p><span>39</span> mins ago</p></div> 
                            <p class=" relative top-2 bottom-3  leading-tight">
                                We Have New <br> Products With Offers </p>
                            <div class="flex justify-between mt-4">
                                <span>$364.95</span>
                                <span class="text-gray-500">$260.00</span>
                            </div>
                      </div>
                </div>

                <p class="text-[18px]">Yesterday</p>

                <div class="grid grid-cols-4 py-[16px]  px-[13px]  place-items-center min-h-[105px] rounded-xl">
                    <div class="bg-white w-[87px] h-[85px]  rounded-3xl flex justify-center items-center">
                        <img src="/checkout-img/cipo-nike.png" class="w-full">
                    </div>
                      <div class="col-span-2">
                           <div class="fixed right-7 -translate-y-2 text-[#707B81]"><p><span>45</span> mins ago</p></div> 
                            <p class=" relative top-2 bottom-3  leading-tight">
                                We Have New <br> Products With Offers </p>
                            <div class="flex justify-between mt-4">
                                <span>$364.95</span>
                                <span class="text-gray-500">$260.00</span>
                            </div>
                      </div>
                </div>

                <div class="grid grid-cols-4 py-[16px]  px-[13px]  place-items-center min-h-[105px] rounded-xl">
                    <div class="bg-white w-[87px] h-[85px]  rounded-3xl flex justify-center items-center">
                        <img src="/checkout-img/cipo-nike.png" class="w-full">
                    </div>
                      <div class="col-span-2">
                           <div class=" fixed right-7 -translate-y-2 text-[#707B81]"><p><span>55</span> mins ago</p></div> 
                            <p class=" relative top-2 bottom-3  leading-tight">
                                We Have New <br> Products With Offers </p>
                            <div class="flex justify-between mt-4">
                                <span>$364.95</span>
                                <span class="text-gray-500">$260.00</span>
                            </div>
                      </div>
                </div>
            </section>
        </div>
    </div>
</template>