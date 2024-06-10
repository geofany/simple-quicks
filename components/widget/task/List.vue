<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-5 flex-1 w-full">
        <input
          type="checkbox"
          v-model="isDone"
          class="w-5 h-5 accent-primary-gray flex-shrink-0"
        />

        <input
          v-if="props.data.isEdit"
          type="text"
          v-model="props.data.name"
          class="bg-white border border-[#BDBDBD] rounded-[5px] flex gap-2 px-3 py-2.5 items-center justify-between w-full"
          placeholder="Type Task Title"
        />
        <p
          v-else
          class="text-base text-primary-dark font-bold"
          :class="{ 'line-through text-primary-darkGray': isDone }"
        >
          {{ props.data.name }}
        </p>
      </div>

      <div class="flex items-center gap-4 flex-shrink-0">
        <p v-if="props.data.date" class="text-indicator-red">
          {{
            $moment(props.data.date, "DD-MM-YYYY").diff($moment(), "days") + 1
          }}
          Days Left
        </p>

        <p v-if="props.data.date">
          {{ $moment(props.data.date, "DD-MM-YYYY").format("DD/MM/YYYY") }}
        </p>

        <IconsChevronDown
          class="w-5 h-5 fill-primary-dark cursor-pointer transition-all ease-out duration-300"
          :class="{ 'rotate-180': props.data.isExpanded }"
          @click="props.data.isExpanded = !props.data.isExpanded"
        />

        <StDropdown placement="bottom-end">
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

    <div
      class="transition-all ease-out duration-300"
      :class="props.data.isExpanded ? 'h-32' : 'h-0'"
    >
      <template v-if="props.data.isExpanded">
        <div class="flex flex-col gap-3 pl-10">
          <div class="flex items-center gap-4">
            <div class="w-5 h-5">
              <IconsClock
                class="w-5 h-5"
                :class="
                  props.data.date ? 'fill-primary-blue' : 'fill-primary-dark'
                "
              />
            </div>

            <StDropdown placement="bottom-start">
              <template #toggler>
                <div
                  class="bg-white border border-[#BDBDBD] rounded-[5px] flex gap-2 px-3 py-2.5 items-center justify-between w-48"
                >
                  <p class="text-primary-dark flex-1 w-full">
                    {{
                      $moment(props.data.date, "DD-MM-YYYY").format(
                        "DD/MM/YYYY"
                      )
                    }}
                  </p>

                  <IconsCalendar
                    class="w-4 h-4 fill-primary-dark flex-shrink-0"
                  />
                </div>
              </template>

              <template #default="{ close }">
                <div
                  class="bg-white border border-[#BDBDBD] rounded-[5px] flex flex-col"
                >
                  <StDatePicker v-model="props.data.date" />
                </div>
              </template>
            </StDropdown>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-5 h-5">
              <IconsPencil
                class="w-4 h-4"
                :class="
                  props.data.description
                    ? 'fill-primary-blue'
                    : 'fill-primary-dark'
                "
              />
            </div>

            <div class="w-full">
              <textarea
                v-if="props.data.isEdit"
                type="text"
                v-model="props.data.description"
                class="bg-white border border-[#BDBDBD] rounded-[5px] flex gap-2 px-3 py-2.5 items-center justify-between w-full resize-none"
                placeholder="Type Task Description"
              ></textarea>
              <p v-else>
                {{ props.data.description || "No Description" }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  data: Task;
};

const props = defineProps<Props>();
const isDone = ref<boolean>(false);
</script>

<style scoped></style>
