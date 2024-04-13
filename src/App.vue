<template>
  <main>
    <HeaderComponent></HeaderComponent>
    <div class="container">
      <router-view/>
    </div>
    <FooterComponent></FooterComponent>
  </main>
</template>

<script setup>
import HeaderComponent from "@/components/Header.vue";
import FooterComponent from "@/components/Footer.vue";
</script>

<style>
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
  overflow-x: hidden;
}

h1 {
  text-align: center;
  padding: 2rem 0;
  font-size: 2.75rem;
  background: linear-gradient(90deg, #085889, #089c6d);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.linear-border {
  background: linear-gradient(to right bottom, #ebe9e9, #bbceee) padding-box,
  linear-gradient(90deg, #085889, #089c6d) border-box;
  border-radius: 50px;
  border: 4px solid transparent;
  box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.50);
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
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.50);
}


</style>
