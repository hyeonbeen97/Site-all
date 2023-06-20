<template>
  <main>
    <SliderSection />
    <IntroSection />
    <MemberSection />
    <PortSection />
    <YoutubeSection />
    <UnsplashSection />
    <MovieSection />
  </main>
</template>

<script>
import IntroSection from "@/components/section/IntroSection.vue";
import SliderSection from "@/components/section/SliderSection.vue";
import MemberSection from "@/components/section/MemberSection.vue";
import PortSection from "@/components/section/PortSection.vue";
import MovieSection from "@/components/section/MovieSection.vue";
import YoutubeSection from "@/components/section/YoutubeSection.vue";
import UnsplashSection from "@/components/section/UnsplashSection.vue";

export default {
  components: {
    IntroSection,
    SliderSection,
    MemberSection,
    PortSection,
    YoutubeSection,
    UnsplashSection,
    MovieSection,
  },
};
</script>
