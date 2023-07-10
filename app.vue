<template>
   <Suspense>
    <template #fallback>
      <Loading />
    </template>
      
      
      <template #default>
        <div >
          <NuxtPage />
        </div>
      </template>
   </Suspense>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all .4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}

</style>