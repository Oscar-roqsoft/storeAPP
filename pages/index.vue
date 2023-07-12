<script setup>
const props = defineProps({
    loading:{
        type: Boolean,
        required: true
    }
})
</script>
<template>
    
    <div class="bg-[#1483C2] bg h-[screen] w-screen main overflow-x-hidden font-san  ">

       
       <div  class="w-full px-[15px] m-auto h-screen transition-all">
            <div class="flex flex-col pt-[15px] text-center place-items-center h-[30%]">
                <img src="/img/Highlight_05.png" alt="" class="relative top-[20px] left-[-115px]">
                <h4 class="font-[900] heading leading-normal text-[30px]">
                    Wellcome To <br> nike
                </h4>
                <img src="/img/Vector.png" alt="" class="mb-[19px] mt-2" >
            </div>
            <div class=" h-[54%]" >
               <div class="flex flex-col justify-center place-items-center">
                <img src="/img/Misc_04.png" alt="" class="fixed  animate__animated animate__swing animate__repeat-3	3 left-[50px] top-[29%] opacity-80">
                <img src="/img/image3.png" alt="" class="fixed  top-[1vh] right-0 z-20 opacity-90"  >
                <img src="/img/blur.png" alt="" class="fixed top-[427px] right-[111px]">
                <img src="/img/Vector(1).png" alt="" class="good top-[45vh]">
                <img src="/img/Group.png" alt="" class="relative top-[27vh] left-[38%] opacity-50">
                <div class="fixed top-[78%]  transition-all" >
                        <div class="flex justify-center place-items-center gap-3 
                        animate__animated animate__fadeIn">
                            <span class="w-10 h-1 bg-white rounded shadow-lg"></span>
                            <span class="w-7 h-1 bg-[#FFB21A] rounded"></span>
                            <span class="w-7 h-1 bg-[#FFB21A] rounded"></span>
                        </div>
                </div>
                <img src="/img/Group(1).png" alt="" class="relative top-[25vh] right-[40%] opacity-50">
               </div>
            </div>
            <nuxt-link to="next" class="mx-auto relative top-[40px]">
                <button class="w-full inline-block text-[14px] font-[700]
                p-[1px] bg-white text-black  border 
                rounded-xl  capitalize">get started</button>
            </nuxt-link>
       </div>
    </div>


</template>

<style scoped>

.heading{
    filter: drop-shadow(1px 5px 1px #5abff5);
}
</style>
