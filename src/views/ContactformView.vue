<template>
  <form action="" class="contact flex margin">

    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname">

    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname">

    <label for="email">Email:</label><br>
    <input type="text" id="email" name="email">

    <label for="message">Message</label>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>

    <input type="submit" value="submit">
    </form>
</template>

<style>
.contact {
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin: 0 auto;
}

textarea {
        resize: none;
    }
</style>