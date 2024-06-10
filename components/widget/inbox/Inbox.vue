<template>
  <div class="h-full">
    <Transition name="fade" mode="out-in">
      <WidgetInboxDetail
        v-if="isDetail"
        :data="detail"
        @hide:details="isDetail = false"
        @close:inbox="emits('close:inbox')"
      />
  
      <div v-else class="py-5 flex flex-col h-full gap-6">
        <div
          class="border border-primary-darkGray rounded-[5px] py-[10px] px-[58px] flex justify-between items-center flex-shrink-0 mx-[34px]"
        >
          <input
            placeholder="Search"
            class="w-full flex-1 focus:outline-none placeholder:text-[#333333]"
          />
  
          <IconsSearch class="w-3 h-3 fill-[#333333]" />
        </div>
  
        <Transition name="fade" mode="out-in">
          <div
            v-if="loading"
            class="w-full h-full flex items-center justify-center flex-1"
          >
            <StLoader>
              <p>Loading Chats...</p>
            </StLoader>
          </div>
  
          <div v-else class="h-full flex-1 overflow-hidden">
            <div class="flex flex-col gap-8 h-full overflow-auto px-[34px]">
              <template v-for="(item, index) in inbox">
                <WidgetInboxList
                  class="cursor-pointer"
                  :data="item"
                  @click="loadChat(item)"
                />
  
                <div
                  v-if="index !== inbox.length - 1"
                  class="w-full h-px border"
                />
              </template>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
type Emits = {
  (e: "close:inbox"): void;
};

const emits = defineEmits<Emits>();
const inboxStore = useInboxStore();
const { inbox } = storeToRefs(inboxStore);
const loading = ref<boolean>(true);
const isDetail = ref<boolean>(false);
const detail = ref<Inbox>();

function setLoading() {
  loading.value = false;
}

function loadChat(item: Inbox) {
  isDetail.value = true;
  detail.value = item;
}

onMounted(() => {
  setTimeout(setLoading, 3000);
});
</script>

<style scoped></style>
