<template>
  <div class="relative items-end gap-[26px]">
    <div
      class="flex flex-col items-center gap-[14px] absolute bottom-0 transition-all ease-out duration-300"
      :class="
        isExpanded && !isTask
          ? isInbox
            ? 'right-[94px]'
            : 'right-[188px]'
          : 'right-0 z-10'
      "
    >
      <p v-if="isExpanded && !isTask && !isInbox" class="text-white">Task</p>
      <StButton
        circle
        :variant="isTask ? 'orange' : 'white'"
        @click="handleTask()"
      >
        <IconsDashboard
          :class="isTask ? 'fill-white' : 'fill-indicator-orange'"
        />
      </StButton>
    </div>

    <div
      class="flex flex-col items-center gap-[14px] absolute bottom-0 transition-all ease-out duration-300"
      :class="isExpanded && !isInbox ? 'right-[94px]' : 'right-0 z-20'"
    >
      <p v-if="isExpanded && !isTask && !isInbox" class="text-white">Inbox</p>
      <StButton
        circle
        :variant="isInbox ? 'purple' : 'white'"
        @click="handleInbox()"
      >
        <IconsChat :class="isInbox ? 'fill-white' : 'fill-indicator-purple'" />
      </StButton>
    </div>

    <div
      class="absolute bottom-0 transition-all ease-out duration-300"
      :class="isInbox || isTask ? 'right-[10px]' : 'right-0 z-20'"
      @click="!isInbox && !isTask ? (isExpanded = !isExpanded) : ''"
    >
      <StButton circle :variant="isInbox || isTask ? 'dark' : 'blue'">
        <IconsThunder class="fill-white" />
      </StButton>
    </div>

    <div class="absolute bottom-[83px] right-0">
      <div
        class="bg-white w-[734px] transition-all ease-out duration-300 border-[#BDBDBD] rounded-[5px]"
        :class="isTask || isInbox ? 'h-[737px] border' : 'h-0'"
      >
        <Transition name="fade" mode="out-in">
          <WidgetInbox v-if="isInbox" @close:inbox="isInbox = false" />

          <WidgetTask v-else-if="isTask" />
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isExpanded = ref<boolean>(false);
const isInbox = ref<boolean>(false);
const isTask = ref<boolean>(false);

function handleInbox() {
  if (isInbox.value) {
    isInbox.value = false;
  } else {
    isInbox.value = true;
    isTask.value = false;
  }
}

function handleTask() {
  if (isTask.value) {
    isTask.value = false;
  } else {
    isTask.value = true;
    isInbox.value = false;
  }
}
</script>

<style scoped></style>
