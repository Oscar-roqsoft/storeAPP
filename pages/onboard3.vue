<template>
    <div class="bg-[#1483C2] font-san w-screen h-screen ">
        <div class="w-full mx-auto">
             <div class="h-[40vh] ">
                <img src="/img/Misc_04.png" alt="" class="relative top-[20px] left-8">
                <img src="/img/AireJordanNike.png" alt="" class="absolute top-[0px]">
                <img src="/img/Vectorcircle.png" alt="" class="absolute top-[110px] left-8">
             </div>
            <div class="h-[30vh] mt-[5rem] flex flex-col  justify-center
             place-items-center text-center text-white  ">
                <img src="/img/Vector(1).png" alt="" class="good fixed top-[50vh]">
                <h1 class="text-4xl capitalize ">You Have the <br> Power To</h1>
                <p class="text-lg mt-5">There Are Many Beautiful And Attractive <br> Plants To Your Room</p>
                <div class="absolute top-[82vh] slide-left  transition-all" >
                        <div class="flex justify-center place-items-center gap-3">
                            <span class="w-7 h-1 bg-[#FFB21A] rounded"></span>
                            <span class="w-7 h-1 bg-[#FFB21A] rounded"></span>
                            <span class="w-10 h-1 bg-white rounded shadow-lg"></span>
                        </div>
                </div>
            </div>
            <nuxt-link to="sign-in" class="absolute left-0 bottom-8 w-full px-3 mx-auto">
                <button class="w-full inline-block text-[14px]
                p-[10px] bg-white text-black  border 
                rounded-xl font-[600] capitalize">next</button>
            </nuxt-link>
        </div>
    </div>
</template>