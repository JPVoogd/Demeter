<template>
  <main>
    <div class="container">
    <HeaderComponent></HeaderComponent>
    <router-view />
    <FooterComponent></FooterComponent>
  </div>
  </main>
</template>

<script setup>
import HeaderComponent from "@/components/Header.vue";
import FooterComponent from "@/components/Footer.vue";
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: helvetica, poppins, sans-serif;
  
}

main {
  background: linear-gradient(to right bottom, #ebe9e9, #bbceee);
  min-height: 100vh;
  width: 100%;
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  
}

h1 {
  text-align: center;
  padding: 2rem 0;
  font-size: 3rem;
  background: linear-gradient(90deg, #085889, #089c6d);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

button {
  background: #004757;
  border: none;
  border-radius: 20px;
  width: 120px;
  height: 40px;
  color: aliceblue;
  margin: 1rem;
}

button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}


</style>
