<template>
  <div class="h-full">
    <Transition name="fade" mode="out-in">
      <div class="py-5 flex flex-col h-full gap-6">
        <div class="px-6 py-4 flex items-center justify-between">
          <StDropdown placement="bottom-center">
            <template #toggler="{ open }">
              <button
                class="bg-white border border-[#BDBDBD] rounded-[5px] flex gap-2 px-3 py-2.5 items-center"
              >
                <p class="font-bold text-primary-dark">My Tasks</p>

                <IconsChevronDown
                  class="w-5 h-5 fill-primary-dark transition-all ease-out duration-300"
                  :class="{ 'rotate-180': open }"
                />
              </button>
            </template>

            <template #default="{ close }">
              <div
                class="bg-white border border-[#BDBDBD] rounded-[5px] flex flex-col"
              >
                <button
                  class="text-primary-dark px-4 py-3 text-left w-72"
                  @click="close()"
                >
                  Personal Errands
                </button>

                <div class="w-full h-px flex-1 border border-[#BDBDBD]" />

                <button
                  class="text-primary-dark px-4 py-3 text-left w-72"
                  @click="close()"
                >
                  Urgent To-Do
                </button>
              </div>
            </template>
          </StDropdown>

          <StButton @click="addNewTask()"> New Task </StButton>
        </div>

        <Transition name="fade" mode="out-in">
          <div
            v-if="loading"
            class="w-full h-full flex items-center justify-center flex-1"
          >
            <StLoader>
              <p>Loading Task List...</p>
            </StLoader>
          </div>

          <div v-else class="h-full flex-1 overflow-hidden">
            <div class="flex flex-col gap-5 h-full overflow-auto px-[34px]">
              <template v-for="(item, index) in task">
                <WidgetTaskList :data="item" />

                <div
                  v-if="index !== task.length - 1"
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
const taskStore = useTaskStore();
const { task } = storeToRefs(taskStore);
const loading = ref<boolean>(true);

function setLoading() {
  loading.value = false;
}

function addNewTask() {
  const newTask: Task = {
    name: "",
    date: null,
    description: null,
    isExpanded: true,
    isEdit: true,
  };

  task.value.push(newTask);
}

onMounted(() => {
  setTimeout(setLoading, 3000);
});
</script>

<style scoped></style>
