<script setup>
const props = defineProps({
  name: String,
  id: Number,
});

const DIN_IMG = "https://picsum.photos/300/300";
// const { data, pending, error, refresh } = await useFetch(
//   "https://pixabay.com/api/?key=40274388-22d37f77696e6cc2b21af5c7f",
//   {}
// );
</script>
<template>
  <div class="comp">
    <div class="grid_container">
      <div class="grid_item">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut,
        esse iusto, quia doloremque culpa tempore nemo, repudiandae mollitia
        consequatur suscipit. Natus corrupti similique atque id amet vel velit
        quis? Eos fugit labore praesentium quod repudiandae laudantium rerum.
        Aperiam vero hic dolorem excepturi possimus voluptates quidem in iure
        fugiat? Tenetur voluptates mollitia voluptatem corporis quisquam
        praesentium, enim architecto recusandae quis.
      </div>
      <div class="grid_item">
        <img src="https://picsum.photos/300/500" alt="image" />
      </div>
      <div class="grid_item">
        <img src="https://picsum.photos/300/500" alt="image" />
      </div>
      <div class="grid_item">
        <img src="https://picsum.photos/300/500" alt="image" />
      </div>
      <div class="grid_item">
        <img src="https://picsum.photos/300/150" alt="image" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.comp {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid_container {
  max-width: 700px;
  display: grid;
  gap: 15px;
  //   grid-template-columns: repeat(auto-fit, 1fr 1fr);
  //   grid-auto-rows: minmax(100px, auto);

  //   grid-template-columns: auto auto;
  //   grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "text 1"
    "2 1"
    "2 3"
    "4 3";
}
// .grid_item {
//   //   height: 350px;

// }
.grid_item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.grid_item:nth-child(1) {
  grid-area: text;
}
.grid_item:nth-child(2) {
  grid-area: 1;
  grid-row: span 2;
}
.grid_item:nth-child(3) {
  grid-area: 2;
  grid-row: span 2;
}
.grid_item:nth-child(4) {
  grid-area: 3;
  grid-row: span 2;
}
.grid_item:nth-child(5) {
  grid-area: 4;
}
</style>
