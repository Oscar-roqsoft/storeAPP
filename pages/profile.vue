<template>
    <div class="min-h-[880px] w-full bg-[#f7f7f9] rounded-[20px] font-serif">
        <div class="min-w-[375px] mx-auto min-h-[812px] p-[20px]">
            <section class="mt-[20px] h-[44px] flex-shrink-0 
                flex justify-between items-center">
                <nuxt-link to="home" class="">
                    <arrow class="text-xl bg-slate-200 p-2 border rounded-full w-8 h-8"/>
                </nuxt-link>
                <div>
                    <h1 class="text-xl">Profile</h1>
                </div>
                <div class="" >
                </div>
            </section>

            <div class="flex justify-center mt-[40px] mb-[24px]">
                <div class="h-[80px] w-[80px] p-1 flex  bg-white rounded-full border-2 border-[#0D6EFD]">
                    <img src="/checkout-img/my-photo.jpg" alt="" class="w-full rounded-full">
                </div>
                <nuxt-link to="EdithProfile" class="h-[19px] w-[19px] bg-[#0D6EFD] relative top-[60px] right-7 rounded-full
                flex justify-center items-center">
                    <EditIcon class="text-sm text-white"/>
                </nuxt-link>
            </div>

            <section>
                <p class="mb-[16px]">Your Name</p>
                 <input type="text" placeholder="enter your name " class="p-[16px] w-full  outline-none rounded-xl">
                 <p class="my-[16px]">Email Address</p>
                 <input type="text" placeholder="enter your name " class="p-[16px] w-full outline-none rounded-xl">
                 <p class="my-[16px]">Password</p>
                 <input type="password" placeholder="* * * * * * " class="p-[16px] w-full  outline-none rounded-xl">

                 <div class="flex justify-end my-[16px]">
                    <span class="text-gray-500 text-sm">Recovery Password</span>
                 </div>

                 <nuxt-link to="">
                    <button class="p-[14px] bg-[#0D6EFD] rounded-xl w-full text-white capitalize">save Now</button>
                 </nuxt-link>
            </section>
        </div>
    </div>
</template>