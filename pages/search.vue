<template>
    <div class="min-h-[880px] w-screen bg-[#f7f7f9] rounded-[20px] font-sans">
         <div class="min-w-[375px] mx-auto min-h-[812px] p-[20px]">
            <section class="mt-[20px] h-[44px] flex-shrink-0 
                flex justify-between items-center">
                <nuxt-link to="home" class="">
                    <arrow class="text-xl bg-slate-200 p-2 border rounded-full w-8 h-8"/>
                </nuxt-link>
                <div>
                    <h1 class="text-xl">Search</h1>
                </div>
                <nuxt-link to="home" class="text-[#0D6EFD]">Cancel</nuxt-link>
            </section>
             
            <section class="mt-[38px]">

                <div class="flex relative p-icon mb-[20px]">
                    <SearchIcon  class="absolute left-[23px] translate-y-[15px] text-[#0D6EFD] text-[22px]"/>
                    <input type="text" placeholder="Search Your Shoes " class="p-[14px] pl-[62px]  w-full  outline-none rounded-xl">
                    <div class="absolute right-[23px]  border-s-2 pl-2
                        translate-y-[15px] ">
                        <MicIcon class=" right-[23px]  
                         text-[22px]"/>
                    </div>
                </div>

                <p class="mb-[19px]">Shoes</p>

                <div>
                    <div class="capitalize flex h-[24px] justify-start items-center mb-[19px]">
                        <div class="h-[22px] w-[22px]"><ClockIcon class="text-[22px]"/></div>
                        <p class="px-[15px] text-[14px] font-[Raleway] font-[500]">New Shoes</p>
                    </div>

                    <div class="capitalize flex h-[24px] items-center mb-[19px]">
                        <div class="h-[22px] w-[22px]"><ClockIcon class="text-[22px]"/></div>
                        <p class="px-[15px] text-[14px] font-[Raleway] font-[500]">Nike Top Shoes</p>
                    </div>
                </div>

            </section>
         </div>
    </div>
</template>