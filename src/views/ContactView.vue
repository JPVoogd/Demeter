<template>
<div class="flex margin">
  <img src="https://placehold.co/500x300" alt="">
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate in commodi nulla nam reprehenderit eos praesentium, eaque officia soluta minus repudiandae necessitatibus debitis assumenda iure quam, at aliquam corporis iste!</p>
</div>
<Contactform></Contactform>
  </template>

<script>
import Contactform from '@/components/Contactform.vue'

export default {
  name: 'ContactView',
  components: {
    Contactform
  }
}
</script>

<style scoped lang="scss">
</style>