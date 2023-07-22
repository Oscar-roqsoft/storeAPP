<template>
    <div class="min-h-screen w-screen bg-[#f7f7f9] font-sans">
        <div class="mx-auto">
            <section class="h-[44px] flex-shrink-0 
                flex justify-between items-center px-[20px] pt-6">
                <nuxt-link to="home" class="">
                    <arrow class="text-xl bg-slate-200 p-2 border rounded-full w-8 h-8"/>
                </nuxt-link>
                <div>
                    <h1 class="text-lg">Profile</h1>
                </div>
                <nuxt-link to="home" class="text-[#0D6EFD] text-lg">Done</nuxt-link>
            </section>

            <section class="px-[20px] text-sm">
                <div class="flex flex-col items-center justify-center mt-[30px] mb-[24px]">
                    <div class="h-[80px] w-[80px] p-1 flex  bg-white rounded-full border-2 border-[#0D6EFD]">
                    <img src="/checkout-img/my-photo.jpg" class="w-full rounded-full">
                </div>
                    <h1 class="capitalize text-sm mt-[8px] mb-1">oscar nnoje</h1>
                    <a href="#" class="text-xs text-[#0D6EFD]">Change Profile Picture</a>
                </div>

                <p class="my-[14px]">First Name</p>
                <div class="flex relative p-icon">
                    <input type="text" placeholder="enter your name " class="p-[10px]  w-full  outline-none rounded-lg">
                    <CheckedIcon class="absolute right-[23px] translate-y-[15px] text-[#0D6EFD]"/>
                </div>

                <p class="my-[14px]">Last Name</p>
                <div class="flex relative p-icon">
                    <input type="text" placeholder="enter your name " class="p-[10px]  w-full  outline-none rounded-lg">
                    <CheckedIcon class="absolute right-[23px] translate-y-[15px] text-[#0D6EFD] "/>
                </div>

                <p class="my-[14px]">Location</p>
                <div class="flex relative p-icon">
                    <input type="text" placeholder="enter your name " class="p-[10px]  w-full  outline-none rounded-lg">
                    <CheckedIcon class="absolute right-[23px] translate-y-[15px] text-[#0D6EFD]"/>
                </div>

                <p class="my-[14px]">Mobile Number</p>
                <div class="  grid grid-cols-5">
                    <select id="countries" class="bg-white border-none border-gray-300 
                     text-gray-900 text-sm rounded-tl-lg rounded-bl-lg
                       block  p-2.5 outline-none
                        dark:placeholder-white dark:text-black">
                        <option selected>+234</option>
                        <option value="US">+233</option>
                        <option value="CA">+1</option>
                        <option value="FR">178</option>
                        <option value="DE">345</option>
                    </select>
                    <input type="text" placeholder="enter your name" class="p-[10px]  col-span-4
                     w-full  outline-none rounded-tr-xl rounded-br-xl">
                    <CheckedIcon class="absolute right-[39px] translate-y-[15px]
                     text-[#0D6EFD]"/>
                </div>
            </section>
        </div>
    </div>
</template>
