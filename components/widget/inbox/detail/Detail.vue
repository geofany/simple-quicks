<template>
  <div class="flex flex-col gap-5 h-full overflow-hidden">
    <div class="flex-shrink-0 px-6 pt-5 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <IconsLeftArrow
          class="fill-[#333333] w-6 h-6 cursor-pointer"
          @click="emits('hide:details')"
        />

        <div>
          <p class="text-primary-blue font-bold">
            {{ props.data?.name }}
          </p>
          <p v-if="props.data?.isGroup" class="text-sm">3 Participant</p>
        </div>
      </div>

      <IconsCross
        class="fill-[#333333] w-3.5 h-3.5 cursor-pointer"
        @click="emits('close:inbox')"
      />
    </div>

    <div class="w-full h-px border flex-shrink-0" />

    <div class="flex-1 h-full overflow-auto px-5 flex flex-col gap-11">
      <div v-for="group in props.data?.chatGroup">
        <div class="flex items-center justify-center gap-7">
          <div class="w-full h-px flex-1 border" />

          <p class="flex-shrink-0">
            {{ isToday(group.date) ? "Today" : "" }}
            {{ $moment(group.date, "DD-MM-YYYY").format("MMMM DD, YYYY") }}
          </p>

          <div class="w-full h-px flex-1 border" />
        </div>

        <div class="flex flex-col gap-4">
          <template v-for="chat in group.chats">
            <div
              v-if="!chat.isRead"
              class="flex items-center justify-center gap-7"
            >
              <div class="w-full h-px flex-1 border border-indicator-red" />

              <p class="flex-shrink-0 text-indicator-red">New Message</p>

              <div class="w-full h-px flex-1 border border-indicator-red" />
            </div>
            <WidgetInboxDetailBubble
              :data="chat"
              :is-group="props.data?.isGroup"
            />
          </template>
        </div>
      </div>
    </div>

    <div class="flex-shrink-0 flex flex-col gap-2.5 p-5 pt-0">
      <div
        v-if="!props.data?.isGroup"
        class="bg-sticker-grey p-2.5 flex items-center gap-3 rounded-[5px]"
      >
        <IconsBlueLoader class="h-8 w-8 animate-spin" />

        <p class="font-bold text-primary-dark">
          Please wait while we connect you with one of our team ...
        </p>
      </div>

      <div class="flex items-center justify-between gap-3">
        <input
          type="text"
          class="border border-primary-darkGray rounded-[5px] px-4 py-3 flex-1 w-full focus:outline-none"
          placeholder="Type a new message"
        />

        <StButton> Send </StButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  data?: Inbox;
};

type Emits = {
  (e: "hide:details"): void;
  (e: "close:inbox"): void;
};

const { $moment } = useNuxtApp();
const props = defineProps<Props>();
const emits = defineEmits<Emits>();

function isToday(date: string) {
  return (
    $moment(date, "DD-MM-YYYY").format("DD-MM-YYYY") ===
    $moment().format("DD-MM-YYYY")
  );
}
</script>

<style scoped></style>
