<template>
  <div>
    <p
      class="font-bold mb-1.5"
      :class="
        data.isMe
          ? 'text-chat-purple-primary text-end'
          : props.isGroup
          ? data.isRead
            ? 'text-chat-orange-primary'
            : 'text-chat-green-primary'
          : 'text-primary-blue'
      "
    >
      {{ data.name }}
    </p>

    <div class="flex gap-2" :class="data.isMe ? 'flex-row-reverse' : ''">
      <div
        class="rounded-[5px] p-2.5 flex flex-col gap-3"
        :class="
          data.isMe
            ? 'bg-chat-purple-secondary'
            : props.isGroup
            ? data.isRead
              ? 'bg-chat-orange-secondary'
              : 'bg-chat-green-secondary'
            : 'bg-[#F8F8F8]'
        "
      >
        <p class="text-primary-dark">
          {{ data.chat }}
        </p>

        <p class="text-primary-dark text-sm">
          {{ $moment(data.date).format("HH:mm") }}
        </p>
      </div>

      <StDropdown placement="top-center">
        <template #toggler>
          <IconsDots
            class="fill-primary-dark w-4 flex-shrink-0 cursor-pointer"
          />
        </template>

        <template #default="{ close }">
          <div
            class="bg-white border border-[#BDBDBD] rounded-[5px] flex flex-col"
          >
            <button
              v-if="props.data.isMe"
              class="text-primary-blue px-4 py-3 text-left w-32"
              @click="close()"
            >
              Edit
            </button>

            <div
              v-if="props.data.isMe"
              class="w-full h-px flex-1 border border-[#BDBDBD]"
            />

            <button
              class="text-indicator-red px-4 py-3 text-left w-32"
              @click="close()"
            >
              Delete
            </button>
          </div>
        </template>
      </StDropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  data: Chat;
  isGroup?: boolean;
};

const props = defineProps<Props>();
</script>

<style scoped></style>
