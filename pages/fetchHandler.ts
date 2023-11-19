/**
 * @author: Beka Chkhaidze
 * @summary: used to get data from /getDataList API
 */

import { ref } from "vue";
import { reqAxios } from "@/composables/core/func";
import { SecondaryDataInterface } from "@/types/ContentType";
import { extractFromQuery } from "@/composables/utils/router";
import { useMainStore } from "@/store/main/index";

import type { State, FetchParams } from "./state.interface";
import type { MenuInterface } from "@/store/main/types/StateType";

const blogData = ref<SecondaryDataInterface["data"]>();

export const fetchData = async (
  state: State
): Promise<typeof blogData.value> => {
  const selectedMenuState = useState<MenuInterface | undefined>("selectedMenu");

  const store = useMainStore();

  // chnged from media
  // console.log(selectedMenuState.value);
  const params: FetchParams = {
    id: selectedMenuState.value?.id!,
    componentUnicId: "ui1699366254777",
    searchText: state.searchText,
    pageNumber: 1,
    perPage: state.perPage,
    selectedlan: store.lang,
  };

  state.isLoading = true;
  const { data, status } = await reqAxios("main/getDataList", params);

  if (status == 200) {
    // blogData.value = data;
    blogData.value = data;
  } else {
    blogData.value = {
      list: [],
      listCount: 0,
      page: 1,
    };
  }

  setTimeout(() => {
    state.isLoading = false;
  }, 300);

  return blogData.value;
};
