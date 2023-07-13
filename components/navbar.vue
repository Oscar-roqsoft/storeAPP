<template>
        <nav class="fixed w-full mx-auto left-0 bottom-0  z-[1] ">
            <img src="/img/Vector1789.png" alt="" class="fixed left-0 bottom-0 z-[-1]">
            <div class=" flex justify-between items-center max-w-[375px] py-2 
            px-[20px] mx-auto h-[100px]  text-2xl">
                <nuxt-link to="home">
                    <home-icon />
                </nuxt-link>
                <nuxt-link to="favourite">
                    <heart-icon />
                </nuxt-link>
                <!-- <bag-icon /> -->
                <nuxt-link to="cart" class="bg-[#0D6EFD] relative bottom-7 w-[52px] text-white text-2xl font-bold
                    h-[52px] flex items-center justify-center rounded-full  shadow">
                    <bag-icon />
                </nuxt-link>
                <nuxt-link to="notification">
                    <bell-icon/>
                </nuxt-link>
                
                <nuxt-link to="profile">
                    <person-icon />
                </nuxt-link>
            </div>
        </nav>
</template>

<style scoped>
.shadow{
    box-shadow: 0px 2px 5px 2px #0D6EFD;
}
</style>