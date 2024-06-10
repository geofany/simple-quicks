import moment from "moment";
import "moment/dist/locale/id.js";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      moment,
    },
  };
});
