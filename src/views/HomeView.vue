<template>
  <div>
    <h2>Lorem</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, incidunt
      quibusdam? Consequuntur, illo itaque quibusdam magni iste culpa neque in
      inventore doloremque consequatur, incidunt repellendus cupiditate et nobis
      ea vel.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, incidunt
      quibusdam? Consequuntur, illo itaque quibusdam magni iste culpa neque in
      inventore doloremque consequatur, incidunt repellendus cupiditate et nobis
      ea vel.
    </p>
    <div class="content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        fugit, eligendi ullam incidunt voluptatum in cum itaque iure quaerat
        perspiciatis ex pariatur quis labore reprehenderit ipsam necessitatibus
        culpa sapiente hic!
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/GEX37KUltmA?si=gy9KKJFuPsBYR1pl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        excepturi alias odio corporis nesciunt! Quae quisquam reiciendis eius
        possimus mollitia vero voluptates, unde vel sunt tempora labore impedit
        numquam optio!
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
div > h2 {
  padding: 1rem;
}

div > p {
  padding: 1rem;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content > p {
  display: flex;
  align-items: center;
  text-align: center;
  border: gray solid 4px;
  border-radius: 20px;
  height: 300px;
  margin: 0 1rem;
  width: 25%;
}
</style>
