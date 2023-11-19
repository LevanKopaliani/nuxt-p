<script lang="ts" setup>
import { extractFromQuery, updateQuery } from "~/composables/utils/router";
import { useMainStore } from "~/store/main";
import { fetchData } from "../ts/fetchHandler";
import PowerOutageCardModal from "./PowerOutageCardModal.vue";

/// STORE
const mainStore = useMainStore();
// console.log(mainStore.lang);
/// Router
const router = useRouter();
const route = useRoute();

// console.log(router);
// console.log(route);

const state = reactive({
  id: extractFromQuery("social"),
});

const openModal = ref(false);

onMounted(() => {
  if (state.id) openModal.value = true;
});

function handleModal(id: any) {
  openModal.value = !openModal.value;
  console.log(id);
  if (!id) {
    /// ????????????
    updateQuery("social", id == "" ? "" : id);
  }
}
const newsData = ref();

watch(
  () => {},
  async (n) => {
    newsData.value = await fetchData(state);
    // store.doTriggerUpdate(500);
  },
  { immediate: true }
);
const currentNews = computed(() => {
  const temp = newsData?.value?.list?.find((item) => item.id == state.id);
  return {
    title: temp[mainStore.lang].title,
    teaser: temp[mainStore.lang].teaser,
    editor: temp[mainStore.lang].editor,
    date: temp.date,
    slug: temp.slug,
  };
});
</script>
<template>
  <Teleport to="body">
    <transition name="fade-out">
      <PowerOutageCardModal
        :data="currentNews"
        v-if="openModal"
        @close-modal="() => handleModal()"
      />
    </transition>
  </Teleport>
</template>
<style lang="scss"></style>
