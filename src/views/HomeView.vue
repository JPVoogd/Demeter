<template>
  <h1>Lorem</h1>
  <div class="home">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, incidunt
      quibusdam? Consequuntur, illo itaque quibusdam magni iste culpa neque in
      inventore doloremque consequatur, incidunt repellendus cupiditate et nobis
      ea vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
      incidunt quibusdam? Consequuntur, illo itaque quibusdam magni iste culpa
      neque in inventore doloremque consequatur, incidunt repellendus cupiditate
      et nobis ea vel.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, incidunt
      quibusdam? Consequuntur, illo itaque quibusdam magni iste culpa neque in
      inventore doloremque consequatur, incidunt repellendus cupiditate et nobis
      ea vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
      incidunt quibusdam? Consequuntur, illo itaque quibusdam magni iste culpa
      neque in inventore doloremque consequatur, incidunt repellendus cupiditate
      et nobis ea vel.
    </p>
  </div>
  <div class="content">
    <p class="linear-border">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
      fugit, eligendi ullam incidunt voluptatum in cum itaque iure quaerat
      perspiciatis ex pariatur quis labore reprehenderit ipsam necessitatibus
      culpa sapiente hic!
    </p>

    <iframe width="700" height="330" :src="link"></iframe>
    <p class="linear-border">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
      excepturi alias odio corporis nesciunt! Quae quisquam reiciendis eius
      possimus mollitia vero voluptates, unde vel sunt tempora labore impedit
      numquam optio!
    </p>
  </div>
</template>

<script setup>
const link = "https://www.youtube.com/embed/GEX37KUltmA?si=gy9KKJFuPsBYR1pl";
</script>

<style lang="scss" scoped>
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
  margin: 3rem 0.5rem 1rem;
}

.content > p {
  display: flex;
  align-items: center;
  text-align: center;
  height: 300px;
  margin: 0 1rem;
  width: 25%;
}

iframe {
  border-radius: 20px;
}
</style>
