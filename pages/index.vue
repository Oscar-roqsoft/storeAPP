<script setup>
const props = defineProps({
    loading:{
        type: Boolean,
        required: true
    }
})
</script>
<template>
    
    <div class="bg-[#1483C2] min-h-[880px] main overflow-x-hidden font-[Raleway] ">

       
       <div  class="w-full px-[15px] mx-auto h-screen transition-all">
            <div class="flex flex-col justify-center text-center place-items-center h-[297px]">
                <img src="../assets/img/Highlight_05.png" alt="" class="relative top-[15px] left-[-127px]">
                <h4 class="font-[900] leading-normal text-[30px]">
                    Wellcome To <br> nike
                </h4>
                <img src="../assets/img/Vector.png" alt="" class="mb-[19px]" >
            </div>
            <div class=" h-[440px]" >
               <div class="flex flex-col justify-center place-items-center">
                <img src="../assets/img/Misc_04.png" alt="" class="relative right-[34%] top-[31px] opacity-80">
                <img src="../assets/img/image 3.png" alt="" class="shoe" >
                <img src="../assets/img/blur.png" alt="" class="relative top-[160px] right-[13%]">
                <img src="../assets/img/Vector (1).png" alt="" class="good">
                <img src="../assets/img/Group.png" alt="" class="relative top-36 left-[38%] opacity-80">
                <div class="absolute top-[634px]  transition-all" >
                        <div class="flex justify-center place-items-center gap-3 
                        animate__animated animate__fadeIn">
                            <span class="w-7 h-1 bg-[#FFB21A] rounded"></span>
                            <span class="w-10 h-1 bg-white rounded shadow-lg"></span>
                            <span class="w-7 h-1 bg-[#FFB21A] rounded"></span>
                        </div>
                </div>
                <img src="../assets/img/Group (1).png" alt="" class="relative top-[11rem] right-[34%] opacity-80">
               </div>
            </div>
            <nuxt-link to="next" class="mx-auto relative top-[50px]">
                <button class="w-full inline-block text-[14px] font-[600]
                p-[7px] bg-white text-black  border 
                rounded-xl  capitalize">get started</button>
            </nuxt-link>
       </div>
    </div>


</template>
