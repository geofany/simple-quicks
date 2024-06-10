<template>
  <DatePicker :color="props.color" is-required :locale="locale" />
</template>

<script setup lang="ts">
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";

type Props = {
  color?: string;
  locale?: string;
};

const props = withDefaults(defineProps<Props>(), {
  color: "primary",
  locale: "en",
});
</script>

<style>
.vc-primary {
  --vc-accent-100: #e3fefe;
  --vc-accent-200: #d0f7fe;
  --vc-accent-300: #a2e9fe;
  --vc-accent-400: #74d6fd;
  --vc-accent-500: #51c1fc;
  --vc-accent-600: #18a0fb;
  --vc-accent-700: #117cd7;
  --vc-accent-800: #0c5db4;
  --vc-accent-900: #074191;
}

.vc-secondary {
  --vc-accent-100: #f9eafe;
  --vc-accent-200: #f1dcfd;
  --vc-accent-300: #e0bafc;
  --vc-accent-400: #ca96f8;
  --vc-accent-500: #b47af2;
  --vc-accent-600: #9450ea;
  --vc-accent-700: #733ac9;
  --vc-accent-800: #5528a8;
  --vc-accent-900: #3b1987;
}

.vc-info {
  --vc-accent-100: #ecf0ff;
  --vc-accent-200: #e0e5ff;
  --vc-accent-300: #c2caff;
  --vc-accent-400: #a4afff;
  --vc-accent-500: #8d9aff;
  --vc-accent-600: #6877ff;
  --vc-accent-700: #4c58db;
  --vc-accent-800: #343eb7;
  --vc-accent-900: #212893;
}

.vc-success {
  --vc-accent-100: #e9fde1;
  --vc-accent-200: #d2fbcd;
  --vc-accent-300: #9ef89c;
  --vc-accent-400: #69ea74;
  --vc-accent-500: #42d65d;
  --vc-accent-600: #0fbb3f;
  --vc-accent-700: #0aa043;
  --vc-accent-800: #078643;
  --vc-accent-900: #046c3f;
}

.vc-warning {
  --vc-accent-100: #fffce2;
  --vc-accent-200: #fff9d0;
  --vc-accent-300: #fff0a1;
  --vc-accent-400: #ffe673;
  --vc-accent-500: #ffdc50;
  --vc-accent-600: #ffcc16;
  --vc-accent-700: #dbaa10;
  --vc-accent-800: #b78a0b;
  --vc-accent-900: #936b07;
}

.vc-danger {
  --vc-accent-100: #fff3e5;
  --vc-accent-200: #ffe7d5;
  --vc-accent-300: #ffc9ab;
  --vc-accent-400: #ffa481;
  --vc-accent-500: #ff8061;
  --vc-accent-600: #ff433d;
  --vc-accent-700: #db2820;
  --vc-accent-800: #b7161d;
  --vc-accent-900: #930e1e;
}

.vc-gray {
  --vc-accent-100: #fcfcfc;
  --vc-accent-200: #fafafc;
  --vc-accent-300: #f6f6f8;
  --vc-accent-400: #f1f1f3;
  --vc-accent-500: #ededef;
  --vc-accent-600: #e6e6e6;
  --vc-accent-700: #cdcdcd;
  --vc-accent-800: #c0c0c0;
  --vc-accent-900: #b2b2b2;
}

.vc-dark {
  --vc-accent-100: #929396;
  --vc-accent-200: #858689;
  --vc-accent-300: #797a7d;
  --vc-accent-400: #66676a;
  --vc-accent-500: #4c4d50;
  --vc-accent-600: #393a3d;
  --vc-accent-700: #2c2d30;
  --vc-accent-800: #232427;
  --vc-accent-900: #191a1d;
}
</style>
