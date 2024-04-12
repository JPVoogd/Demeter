<template>
  <h1>About us</h1>
  <div class="about">
    <div>
      <img src="https://placehold.co/300x450" alt="Picture of the farmers" />
      <p class="linear-border">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        molestias quisquam laudantium non saepe? Inventore facilis vel
        blanditiis nulla quasi ipsa eligendi enim consequuntur excepturi, sed
        temporibus magnam dolor velit!
      </p>
    </div>
    <div>
      <img src="https://placehold.co/300x450" alt="Picture of the farmers" />
      <p class="linear-border">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        molestias quisquam laudantium non saepe? Inventore facilis vel
        blanditiis nulla quasi ipsa eligendi enim consequuntur excepturi, sed
        temporibus magnam dolor velit!
      </p>
    </div>
    <div>
      <img src="https://placehold.co/300x450" alt="Picture of the farmers" />
      <p class="linear-border">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        molestias quisquam laudantium non saepe? Inventore facilis vel
        blanditiis nulla quasi ipsa eligendi enim consequuntur excepturi, sed
        temporibus magnam dolor velit!
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>

h2 {
  font-size: 3rem;
  text-align: center;
}

.about {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 1rem;
  margin: 2rem;
  text-align: center;
}

.about > div > p {
  padding: 1rem;
  margin: 1rem;
}

.about > div > img {
  border-radius: 50px;
  padding: 1rem;
}
</style>
