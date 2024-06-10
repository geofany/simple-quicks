<template>
  <div class="flex gap-4">
    <div class="flex-shrink-0 flex w-[51px] justify-center">
      <template v-if="props.data.isGroup">
        <div
          class="bg-primary-gray w-[34px] h-[34px] rounded-full flex items-center justify-center"
        >
          <IconsPerson class="w-3 h-3 fill-black/50" />
        </div>

        <div
          class="bg-primary-blue w-[34px] h-[34px] rounded-full flex items-center justify-center -ml-[17px]"
        >
          <IconsPerson class="w-3 h-3 fill-white" />
        </div>
      </template>

      <template v-else>
        <div
          class="bg-primary-blue w-[34px] h-[34px] rounded-full flex items-center justify-center"
        >
          <p class="text-white">
            {{ props.data.name.charAt(0) }}
          </p>
        </div>
      </template>
    </div>

    <div class="flex-1 flex flex-col gap-2">
      <div class="flex gap-4">
        <p class="font-bold text-primary-blue">
          {{ props.data.name }}
        </p>

        <p class="flex-shrink-0">
          {{ props.data.chatGroup[props.data.chatGroup.length - 1].date }}
        </p>
      </div>

      <div>
        <p v-if="props.data.isGroup">{{ getLastChat.name }}:</p>

        <div class="w-full flex items-center justify-between">
          <p>
            {{ getLastChat.chat }}
          </p>

          <div
            v-if="props.data.isNewMessage"
            class="w-[10px] h-[10px] rounded-full bg-indicator-red"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  data: Inbox;
};

const props = defineProps<Props>();

const getLastChat = computed(() => {
  const lastDay = props.data.chatGroup.length - 1;
  const lastChat = props.data.chatGroup[lastDay].chats.length - 1;

  return props.data.chatGroup[lastDay].chats[lastChat];
});
</script>

<style scoped></style>
