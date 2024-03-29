<template>
<div class="flex about">
<div>
  <img src="https://placehold.co/300x400" alt="">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusamus aut odio numquam consectetur quos accusantium quisquam veritatis perferendis, aperiam facere voluptatem aspernatur, ut amet totam maxime minima quibusdam corporis!</p>
</div>
<div>
  <img src="https://placehold.co/300x400" alt="">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusamus aut odio numquam consectetur quos accusantium quisquam veritatis perferendis, aperiam facere voluptatem aspernatur, ut amet totam maxime minima quibusdam corporis!</p>
</div>
<div>
  <img src="https://placehold.co/300x400" alt="">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusamus aut odio numquam consectetur quos accusantium quisquam veritatis perferendis, aperiam facere voluptatem aspernatur, ut amet totam maxime minima quibusdam corporis!</p>
</div>
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

<style>
.about {
  margin: 2rem 1rem;
}

.about div {
  margin: 0 1rem;
}
</style>