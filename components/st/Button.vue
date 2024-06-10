<template>
  <button :type="props.type" :class="defineClass">
    <slot />
  </button>
</template>

<script setup lang="ts">
type Props = {
  type?: "button" | "submit" | "reset";
  variant?: "blue" | "purple" | "orange" | "white" | "dark";
  circle?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  variant: "blue",
  circle: false,
});

const defineColor = computed(() => {
  switch (props.variant) {
    case "blue":
      return "bg-primary-blue text-white fill-white";
    case "orange":
      return "bg-indicator-orange text-white fill-white";
    case "purple":
      return "bg-indicator-purple text-white fill-white";
    case "white":
      return "bg-primary-white";
    case "dark":
      return "bg-primary-dark";
  }
});

const defineCircle = computed(() => {
  switch (props.circle) {
    case true:
      return "rounded-full w-[68px] h-[68px] flex items-center justify-center";
    case false:
      return "px-[21px] py-[14px] rounded-[5px]";
  }
});

const defineClass = computed(() => {
  return `${defineCircle.value} ${defineColor.value} transition-all ease-out duration-300`;
});
</script>
