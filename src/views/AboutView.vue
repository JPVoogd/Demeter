<template>
  <h1>About us</h1>
  <div class="about">
    <div>
      <img
        class="farmer-image"
        src="https://images.unsplash.com/photo-1551649001-7a2482d98d05?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Picture of the farmers"
      />
      <p class="linear-border">
        Bart, a cheerful grain farmer with an endless smile, waves to passersby
        as he tends his golden wheat fields.
      </p>
    </div>
    <div>
      <img
        class="farmer-image"
        src="https://images.unsplash.com/photo-1618775298440-67008a238794?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Picture of the farmers"
      />
      <p class="linear-border">
        Maria, a skilled goat farmer, greets her goats with love caresses and
        sings while collecting milk for her delicious cheese.
      </p>
    </div>
    <div>
      <img
        class="farmer-image"
        src="https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Picture of the farmers"
      />
      <p class="linear-border">
        Johan, a tough vegetable grower, inspects his colorful vegetable patch
        with passion, proud of the healthy crops he cherishes.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
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

.farmer-image {
  height: 450px;
  width: 300px;
}
</style>
