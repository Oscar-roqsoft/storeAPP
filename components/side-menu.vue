<template>
    <div  class="w-full min-h-screen text-white bg-[#1483C2]  px-[36px]  pt-[78px] ">
        <div class="">
          <div class="h-[80px] w-[80px] p-1 mb-[16px] flex justify-center items-center 
           bg-[#0D6EFD] rounded-full border-2 border-white">
                    <img src="@/assets/checkout-img/my-photo.jpg"  class="w-full rounded-full">
                </div>
            <h2 class="text-[20px]">Nnoje Udochukwu</h2>
        </div>

        <section class="mt-[57px] text-[16px]">
           <nuxt-link to="profile" class="capitalize flex h-[24px] items-center">
             <PersonIcon class="text-[24px]"/>
             <p class="px-[25px]">profile</p>
           </nuxt-link>

           <nuxt-link to="cart" class="capitalize flex my-[45.5px] h-[24px] items-center">
             <BagIcon class="text-[24px]"/>
             <p class="px-[25px]">my cart</p>
           </nuxt-link>

           <nuxt-link to="favourite" class="capitalize flex h-[24px] items-center">
             <HeartIcon class="text-[24px]"/>
             <p class="px-[25px]">favourite</p>
           </nuxt-link>

           <nuxt-link to="details" class="capitalize flex my-[45.5px] h-[24px] items-center">
             <MotorIcon class="text-[24px]"/>
             <p class="px-[25px]">order</p>
           </nuxt-link>

           <nuxt-link to="notification" class="capitalize flex my-[45.5px] h-[24px] items-center">
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

        <div class="absolute top-[97px] right-0">
            <img src="@/assets/menu-img/Home 1.png" alt="">
        </div>
    </div>
</template>