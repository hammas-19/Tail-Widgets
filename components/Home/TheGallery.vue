<template>
  <div class="grid md:grid-cols-4 grid-cols-2 gap-5 justify-items-center max-w-7xl mx-auto">
    <HomeShowCard v-for="(items, index) in assets" :key="index" :count="items.count" :title="items.type" :link-to="items.link" />
  </div>
</template>
<script setup>
const assets = [
  {
    type: "Buttons",
    count: "45",
    link: '/buttons'
  },
  {
    type: "Badges",
    count: "10"
  },
  {
    type: "Loaders",
    count: "20"
  },
  {
    type: "Cards",
    count: "10"
  },
  {
    type: "Headers",
    count: "06"
  },
  {
    type: "Footers",
    count: "12"
  },
  {
    type: "Avatars",
    count: "05"
  },
  {
    type: "Inputs",
    count: "10"
  }    

]
</script>