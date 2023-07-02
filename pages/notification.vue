<template>
    <div class="min-h-[880px] w-full bg-[#f7f7f9] rounded-[20px] font-serif">
        <div class="min-w-[375px] mx-auto min-h-[812px] p-[20px]">
            <section class="mt-[20px] h-[44px] flex-shrink-0 
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

            <section class="py-[16px]">
                <p  class="my-[16px] text-[18px]">Recent</p>

                <div class="grid grid-cols-4  px-[13px]  place-items-center min-h-[105px] bg-white rounded-xl">
                    <div class="bg-[#f7f7f9] w-[87px] h-[85px]  rounded-3xl flex justify-center items-center">
                        <img src="/checkout-img/pngaaa 1.png" class="w-full">
                    </div>
                      <div class="col-span-2">
                           <div class="relative left-[160px] text-[#707B81]"><p><span>7</span> mins ago</p></div> 
                            <p class="text-[14px] relative bottom-3 text-[#0D6EFD] leading-tight">
                                We Have New <br> Products With Offers </p>
                            <div class="flex justify-between">
                                <span>$364.95</span>
                                <span class="text-gray-500">$260.00</span>
                            </div>
                      </div>
                </div>

                <div class="grid grid-cols-4 my-[16px]  px-[13px]  place-items-center min-h-[105px] rounded-xl">
                    <div class="bg-white w-[87px] h-[85px]  rounded-3xl flex justify-center items-center">
                        <img src="/checkout-img/epic-nike.png" class="w-full">
                    </div>
                      <div class="col-span-2">
                           <div class="relative left-[160px] text-[#707B81]"><p><span>39</span> mins ago</p></div> 
                            <p class="text-[14px] relative bottom-3  leading-tight">
                                We Have New <br> Products With Offers </p>
                            <div class="flex justify-between">
                                <span>$364.95</span>
                                <span class="text-gray-500">$260.00</span>
                            </div>
                      </div>
                </div>

                <p class="text-[18px]">Yesterday</p>

                <div class="grid grid-cols-4 my-[16px]  px-[13px]  place-items-center min-h-[105px] rounded-xl">
                    <div class="bg-white w-[87px] h-[85px]  rounded-3xl flex justify-center items-center">
                        <img src="/checkout-img/cipo-nike.png" class="w-full">
                    </div>
                      <div class="col-span-2">
                           <div class="relative left-[160px] text-[#707B81]"><p><span>45</span> mins ago</p></div> 
                            <p class="text-[14px] relative bottom-3  leading-tight">
                                We Have New <br> Products With Offers </p>
                            <div class="flex justify-between">
                                <span>$364.95</span>
                                <span class="text-gray-500">$260.00</span>
                            </div>
                      </div>
                </div>

                <div class="grid grid-cols-4 my-[16px]  px-[13px]  place-items-center min-h-[105px] rounded-xl">
                    <div class="bg-white w-[87px] h-[85px]  rounded-3xl flex justify-center items-center">
                        <img src="/checkout-img/cipo-nike.png" class="w-full">
                    </div>
                      <div class="col-span-2">
                           <div class="relative left-[160px] text-[#707B81]"><p><span>55</span> mins ago</p></div> 
                            <p class="text-[14px] relative bottom-3  leading-tight">
                                We Have New <br> Products With Offers </p>
                            <div class="flex justify-between">
                                <span>$364.95</span>
                                <span class="text-gray-500">$260.00</span>
                            </div>
                      </div>
                </div>
            </section>
        </div>
    </div>
</template>