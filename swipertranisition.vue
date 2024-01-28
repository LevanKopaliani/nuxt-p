<script setup>
import image from "~/public/32.jpg";
const winWidth = computed(() => {
  return 1920;
});

function transitionStart(e) {
  const slidesVisible = e.slides.filter((slide, index) =>
    slide?.classList?.contains("swiper-slide-visible")
  );
  // disable transition delay on mobile
  if (winWidth.value > 719) {
    if (e.swipeDirection == "next") {
      slidesVisible.forEach((slide, index) => {
        //@ts-ignore
        const child = slide.children[0];

        child.style.transform = `rotateY(-15deg)`;

        // child.style.transitionDelay = `${135 + index * 45}ms`;
        slide.style.transitionDelay = `${135 + index * 45}ms`;
      });
    }
    if (e.swipeDirection == "prev") {
      slidesVisible.forEach((slide, index) => {
        const child = slide.children[0];

        child.style.transform = `rotateY(15deg)`;
        //@ts-ignore
        slide.style.transitionDelay = `${225 - index * 45}ms`;
      });
    }
  }
}
function transitionEnd(e) {
  //@ts-ignore
  e.slides.forEach((slide) => {
    const child = slide.children[0];
    slide.style.transitionDelay = `0ms`;
    child.style.transform = `rotateY(0deg)`;
  });
}
</script>
<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <Swiper
      @transition-start="transitionStart"
      @transition-end="transitionEnd"
      :watchSlidesProgress="true"
      :modules="[SwiperEffectCreative]"
      :slides-per-view="'auto'"
      :loop="false"
      :effect="'creative'"
      :limitProgress="3"
      :creative-effect="{
        perspective: true,
        limitProgress: 15,
        progressMultiplier: 1,
        prev: {
          shadow: false,
          translate: ['-110%', '0%', -1],
          rotate: [0, 0, 0],
        },
        next: {
          translate: ['110%', '0%', 0],
          rotate: [0, 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="(slide, index) in 10" :key="index">
        <div class="rame"><img :src="image" alt="" /></div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style>
.swiper {
  overflow-y: visible !important;
}
.wiper-wrapper {
  /* overflow: visible !important; */
}
.swiper-slide {
  overflow: visible !important;

  perspective: 300px;
  width: 300px;
  /* background-color: red; */
  height: 200px;
  transition-duration: 720ms !important;
  /* transform: rotateY(-45deg) !important; */
}
.rame {
  /* perspective: 300px; */
  width: 100%;
  height: 100%;
  background-color: aqua;
  transition-duration: 720ms;
  /* transform-origin: center center; */
}
</style>
