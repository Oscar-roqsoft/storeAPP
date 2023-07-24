<template>
    <!-- <loading v-if="isloading" /> -->
    <div    class="bg-[#1483C2] bg h-screen w-screen main overflow-x-hidden font-san  ">
        <div v-for="(item,index) in items" :key="index" 
          class="w-full block  m-auto h-screen transition-all">
           <!-- index section -->
            <div v-if="index === count">
               <div class="fixed top-4 left-0 w-full">
                    <div class="flex flex-col pt-[15px] justify-start items-center text-center">
                        <img :src="item.img1" alt="" class="relative right-28 opacity-80">
                        <h4 class="font-[900] heading relative bottom-3 text-[30px] sh">
                            {{ item.article1 }} <br> {{ item.article2 }}
                        </h4>
                        <img :src="item.img2" alt="" class="mb-[19px] mt-2 opacity-90">
                    </div>
               </div>
                <div class="flex flex-col justify-center place-items-center">
                    <img :src="item.img3" alt="" class="fixed  animate__animated animate__swing animate__repeat-3	3 left-[50px] top-60 opacity-80">
                    <img :src="item.img4" alt="" class="fixed  top-0 right-0 z-20 opacity-90"  >
                    <img  :src="item.img5" alt="" class="fixed top-[427px] right-[111px]">
                    <img :src="item.img6" alt="" class="good top-80">
                    <img :src="item.img7" alt="" class="fixed top-[24rem] right-0 opacity-80">
                    <img :src="item.img8" alt="" class="fixed top-[28rem] left-2 opacity-80">

                    <!-- next section -->
                    <img :src="item.img10" alt="" class="fixed top-2 left-5 opacity-60">
                    <img :src="item.img11" alt="" class="fixed top-4 left-[19rem] opacity-60">
                    <img :src="item.img12" alt="" class="fixed top-24">
                    <img :src="item.img13" alt="" class="fixed left-11 top-[340px] z-50">
                    <div class="fixed top-[25rem] flex flex-col justify-center left-0 w-full text-center">
                        <h1 class="text-2xl capitalize font-semibold ">{{ item.article3 }}<br> {{ item.article4 }}</h1>
                        <p class="text-sm mt-2 font-light">{{ item.article5 }} <br>{{ item.article6 }}</p>
                    </div>

                    <!-- onboard3 section -->
                    <img :src="item.img14" alt="" class="fixed top-[20px] left-8">
                    <img :src="item.img15" alt="" class="fixed -top-9 ">
                    <img :src="item.img16" alt="" class="fixed top-[80px] left-8 z-30">
                    <img :src="item.img17" alt="" class="good fixed top-80">
                    <div class="fixed top-[22rem] flex flex-col justify-center left-0 w-full text-center">
                        <h1 class="text-2xl capitalize font-semibold ">{{ item.article7 }}<br> {{ item.article8 }}</h1>
                        <p class="text-sm mt-2 font-light">{{ item.article9 }} <br>{{ item.article10 }}</p>
                    </div>
                </div>
            </div>

            <div class="fixed top-[540px] w-full  transition-all" >
                    <div v-for="i in dots" :key="i" 
                     class="flex justify-center place-items-center gap-3">
                        <span   :class="count === 0?'w-10 h-1 bg-white rounded shadow-xl transition-all ease-linear' :'w-7 h-1 bg-[#FFB21A] rounded '"></span>
                        <span  :class="count === 1?'w-10 h-1 bg-white rounded shadow-xl transition-all ease-linear' :'w-7 h-1 bg-[#FFB21A] rounded '"></span>
                        <span  :class="count === 2?'w-10 h-1 bg-white rounded shadow-xl transition-all ease-linear'  :'w-7 h-1 bg-[#FFB21A] rounded '"></span>
                    </div>
                  
            </div>
            <div @click="currentslide" class="fixed w-full top-[38rem] px-4">
                <button v-show= "count === 0"  class="w-full inline-block text-[14px] font-[700]
                 bg-white text-black  outline outline-2 outline-orange-400 outline-offset-1 filter 
                rounded-lg  capitalize">get started</button>
                <button v-show="count == 1"  class="w-full inline-block text-[14px] font-[700]
                 bg-white text-black  border outline outline-2 outline-orange-400 outline-offset-1 filter
                rounded-lg  capitalize">next</button>
                <button v-show="count == 2"  class="w-full inline-block text-[14px] font-[700]
                 bg-white text-black  border outline outline-2 outline-orange-400 outline-offset-1 filter
                rounded-lg  capitalize">next</button>
            </div>
        </div>
    </div>
</template>

<script setup>
// const isloading = ref(true)

const dots =[
 {id:1},
]

// onMounted(() => {
//      setTimeout(() => isloading.value = false, 3000)  //for page loader
//     })


const items = [
    {
        id: 1,
        img1:  "/img/Highlight_05.png",
        article1: " Wellcome To",
        article2: "nike",
        img2:"/img/Vector.png",
        img3: "/img/Misc_04.png",
        img4: "/img/image3.png",
        img5: "/img/blur.png",
        img6: "/img/Vector(1).png",
        img7: "/img/Group.png",
        img8: "/img/Group(1).png",
    },
    {
       id:2,
       img10: "/img/Group(1).png",
       img11: "/img/Misc_04.png",
       img12: "/img/Spring_prev_ui1.png",
       img13: "/img/blur.png",
       img6: "/img/Vector(1).png",
       article3:"let's start journey",
       article4:"with nike",
       article5:"Smart, Gorgeous & Fashionable",
       article6:"Collection Explore Now",
    },
    {
        id:3,
        img14:"/img/Misc_04.png",
        img15:"/img/AireJordanNike.png",
        img16:"/img/Vectorcircle.png",
        img17:"/img/Vector(1).png",
        article7:"You Have the",
        article8:"Power To",
        article9:"There Are Many Beautiful And Attractive",
        article10:"Plants To Your Room",
    }
]
const count = ref(0)

 const currentslide = ()=>{
   count.value++
    if(count.value === (items.length )){
    return navigateTo('/sign-in')
   }
 }


</script>