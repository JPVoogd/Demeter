<template>
  <h1>Welcome to Demeter the farmers vending machine!</h1>
  <div class="home">
    <p>
      On a remote farm, where the morning mist slowly lifted and the smell of
      freshly cut grass hanging in the air was a small red one farm vending
      machine next to the barn. The machine wasn't just any ordinary one vending
      machine; he was a true miracle machine for the residents of the farm.
    </p>
    <p>
      But the real magic of the farm machine wasn't just its power to make
      products. It was the sense of community it created between humans and
      animals. Working together to feed the machine with what they had, and then
      enjoyed the fruits of their labor together.
    </p>
  </div>
  <div class="content">
    <p class="linear-border">
      With a farm vending machine, consumers have direct access to fresh produce
      products straight from the farm. This eliminates the intervention of
      intermediaries, so the products are often fresher and last longer.
      Consumers can enjoy fresh eggs, milk, vegetables, fruits and...
      other products without having to go to the supermarket.
    </p>

    <iframe width="700" height="330" :src="link"></iframe>
    <p class="linear-border">
      By purchasing products directly from the farm through a vending machine,
      consumers support and encourage local farmers
      economy. The money spent at the machine often remains inside
      the community, which can contribute to the preservation of agricultural land, it
      creating jobs and promoting sustainable agricultural practices.
    </p>
  </div>
</template>

<script setup>
const link = "https://www.youtube.com/embed/GEX37KUltmA?si=gy9KKJFuPsBYR1pl";
</script>

<style scoped>
.home {
  text-align: center;
}

.home > p {
  padding: 2rem;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0.5rem 1rem;
}

.content > p {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 1rem;
  width: 25%;
  padding: 3rem 1rem;
}

iframe {
  border-radius: 20px;
}
</style>
