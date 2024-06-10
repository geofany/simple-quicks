<template>
  <div class="h-screen flex">
    <LayoutsSidebar />
    <div class="w-px h-full bg-primary-white flex-shrink-0" />
    <div class="flex-1 flex flex-col w-full">
      <LayoutsHeader />
      <main class="bg-[#333333] flex-1 h-full relative">
        <div class="absolute bottom-[27px] right-[34px]">
          <WidgetButton />
        </div>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
