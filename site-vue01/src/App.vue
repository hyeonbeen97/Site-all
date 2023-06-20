<template>
  <HeaderCont />
  <router-view />
  <FooterCont />
</template>

<style lang="scss">
@import "style.scss";
</style>

<script>
import HeaderCont from "@/components/layout/HeaderCont.vue";
import FooterCont from "@/components/layout/FooterCont.vue";

export default {
  components: {
    HeaderCont,
    FooterCont,
  },
};
</script>
