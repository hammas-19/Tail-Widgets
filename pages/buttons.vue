<template>
  <div class="flex flex-col justify-center items-center max-w-7xl mx-auto py-20 px-5 gap-10">
    <AssetsPageShowCase v-for="(items, index) in apiData" :key="index" :preview="items.component_code" :code="items.component_code" />
    
  </div>
</template>
<script setup>
const apiData = ref([])
useStrapi('button-labs').then((response) => {
  apiData.value = response.data.data;
})
</script>