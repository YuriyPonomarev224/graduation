<template>
  <div class="posts">
      <div class="posts--wrapper">
          <img src="../assets/img/Zigzag.png" alt="" class="posts--zigzag">
          <div class="posts--title">
              <h1 v-if="isHomePage">Давайте посмотрим, как менялась наша планета Земля:</h1>
              <h1 v-else>Представители</h1>
          </div>
          <div v-if="!isHomePage" class="posts--content"><slot></slot>
          </div>
          <div v-else>
              <slot></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"PostsComponent",
    computed: {
        isHomePage () {
            return this.$route.name === 'home'
        }
    }
}
</script>

<style>

</style>