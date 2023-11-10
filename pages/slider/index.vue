<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import { isRef } from "vue";
// @swiper="onSwiper"
//     @slideChange="onSlideChange"

const start = (e) => console.log(e);
// const move = () => console.log("move"); @slider-move="move"
// const change = () => console.log("change");
// const translate = (e) => console.log(e);
// const next = () => console.log("next");
// const changed = () => console.log("changed");
// const move = (e) => console.log(e);

const data = [
  { title: "rame1" },
  { title: "rame2" },
  { title: "rame3" },
  { title: "rame4" },
  { title: "rame5" },
  { title: "rame6" },
  { title: "rame7" },
  { title: "rame8" },
];

const state = reactive({
  items: [],
  itemSize: 0,
  swipeDirection: "",
  sapceBtw: 0,
});

const initState = (e) => {
  state.items = e?.slidesGrid;
  state.itemSize = e?.slidesSizesGrid[0];
  state.sapceBtw = e?.params.spaceBetween;
};

const detectDirection = (e) => {
  state.swipeDirection = e.swipeDirection;
  if (state.swipeDirection == "next") {
    Slider.index--;
  } else if (state.swipeDirection == "prev") {
    Slider.index++;
  }
};

const Slider = reactive({ index: 0 });
</script>
<template>
  <div class="container">
    <Swiper
      @slide-next-transition-start="() => console.log('next button pressed')"
      @slide-prev-transition-start="() => console.log('prev button pressed')"
      @init="initState"
      @slide-change-transition-start="detectDirection"
      @touchMove=""
      @touchMoveOpposite=""
      @sliderMove=""
      :slides-per-view="3"
      :space-between="50"
      @navigation-next=""
      @slide-change=""
      class="slider__container"
      :modules="[Navigation]"
      :navigation="{
        prevEl: '.prev',
        nextEl: '.next',
      }"
      :virtualTranslate="true"
      :grabCursor="true"
    >
      <swiper-slide
        class="slider__item"
        v-for="(item, index) in data"
        :style="{
          color: 'red',
          transition: `transform ${100 * index}ms ease ${100 * index}ms`,
          transform: `translateX(${
            Slider.index * (state.itemSize + state.sapceBtw)
          }px)`,
        }"
        >{{ item.title }}, {{ index }}</swiper-slide
      >

      <div class="nav">
        <div
          class="prev"
          @click="
            () => {
              Slider.index += 1;
            }
          "
        >
          prev
        </div>
        <div
          class="next"
          @click="
            () => {
              Slider.index -= 1;
            }
          "
        >
          next
        </div>
      </div>
    </Swiper>
  </div>
</template>
<style>
.nav {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 150px;
  height: 100px;
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider__container {
  width: 100%;
}
.slider__item {
  transition-duration: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-width: 300px;
  min-height: 300px;
  height: 100%;
  background-color: bisque;
}
</style>
