<template>
  <VDropdown
    :distance="props.distance"
    :placement="props.placement"
    :skidding="props.skidding"
  >
    <template #default="{ shown }">
      <slot name="toggler" :open="shown">
        <button class="border">Click me</button>
      </slot>
    </template>

    <template #popper="{ hide }">
      <slot :close="hide" />
    </template>
  </VDropdown>
</template>

<script setup lang="ts">
type Props = {
  distance?: number;
  placement?: string;
  skidding?: number;
};

const props = withDefaults(defineProps<Props>(), {
  placement: "bottom-start",
  distance: 5,
  skidding: 0,
});
</script>

<style>
.v-popper__popper--shown {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.v-popper--theme-dropdown .v-popper__inner {
  background: unset !important;
  color: unset !important;
  border-radius: unset !important;
  border: unset !important;
  padding: unset;
  box-shadow: none !important;
}

.v-popper--theme-dropdown .v-popper__arrow-inner,
.v-popper--theme-dropdown .v-popper__arrow-outer {
  display: none;
}
</style>
