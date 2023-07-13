<!-- <script setup>

</script> -->


<template>
    <div  class="w-full h-screen text-white bg-[#1483C2] fixed  z-50 ">
        <div class="px-[20px] py-8">
          <div class="h-[80px] w-[80px] p-1 mb-[16px] flex justify-center items-center 
           bg-[#0D6EFD] rounded-full border-2 border-white">
                    <img src="/checkout-img/my-photo.jpg" alt="" class="w-full rounded-full">
                </div>
            <h2 class="text-[20px]">Nnoje Udochukwu</h2>
        </div>

        <section class="mt-[10px] text-[14px] px-[20px] ">
           <nuxt-link to="profile" 
           
           class="capitalize flex min-h-[24px] items-center hover:bg-white
           hover:text-[#1483C2]">
             <PersonIcon class="text-[24px]"/>
             <p class="px-[25px]  hover:bg-white">profile</p>
           </nuxt-link>

           <nuxt-link to="cart" class="capitalize flex my-[40px] h-[24px] items-center">
             <BagIcon class="text-[24px]"/>
             <p class="px-[25px]">my cart</p>
           </nuxt-link>

           <nuxt-link to="favourite" class="capitalize flex h-[24px] items-center">
             <HeartIcon class="text-[24px]"/>
             <p class="px-[25px]">favourite</p>
           </nuxt-link>

           <nuxt-link to="details" class="capitalize flex my-[40px] h-[24px] items-center">
             <MotorIcon class="text-[24px]"/>
             <p class="px-[25px]">order</p>
           </nuxt-link>

           <nuxt-link to="notification" class="capitalize flex my-[40px] h-[24px] items-center">
             <BellIcon class="text-[24px]"/>
             <p class="px-[25px]">notications</p>
           </nuxt-link>

           <nuxt-link to="edithProfile" class="capitalize flex h-[24px] items-center">
             <SettingIcon class="text-[24px]"/>
             <p class="px-[25px]">setting</p>
           </nuxt-link>

           <hr class="mt-[40px] mb-[30px]">

           <nuxt-link to="sign-in" class="capitalize flex h-[24px] items-center">
             <SignoutIcon class="text-[24px]"/>
             <p class="px-[25px]">sign out</p>
           </nuxt-link>
        </section>

        <div class="absolute top-[45px] right-0">
            <img src="/menu-img/Home1.png" alt="">
        </div>
    </div>
</template>
