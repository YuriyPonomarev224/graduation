<template>
  <header class="header">
        <a href="#" class="header--logo" @click="setAllBooleanZero()">
          <div class="header--logo-icon"
          :class="{'logo-carnivore':isCarnivore, 'logo-fly':isFly, 'logo-water':isWater, 'logo-herb':isHerb}">
            <img v-if="isWhiteDino" src="../assets/icon/CarnoWhite.svg" alt="Dino">
            <img v-else src="../assets/icon/CarnoBlack.svg" alt="Dino">
          </div>
          <div class="header--logo-text"><img src="../assets/icon/NameIcon.png" alt="Dinosaur.Wiki"></div>
        </a>
        <transition name="menu" :class="{ 'nav-show' : isMenu}">
          <nav class="nav">
            <ul class="nav--list">
              <li class="nav--list-item carnivore" @click="isCarnivore=true,isWhiteDino=true"><router-link to="/Carnivore" class="nav--list-item-link">Хищники</router-link></li>
              <li class="nav--list-item herb" @click="isHerb=true,isWhiteDino=true"><router-link to="/Herb" class="nav--list-item-link">Травоядные</router-link></li>
              <li class="nav--list-item fly" @click="isFly=true, isWhiteDino=false"><router-link to="/Fly" class="nav--list-item-link">Летающие</router-link></li>
              <li class="nav--list-item water" @click="isWater=true,isWhiteDino=false"><router-link to="/Water" class="nav--list-item-link">Водные</router-link></li>
            </ul>
          </nav>
        </transition>
        <div class="nav--list-item-menu" @click="showMenu()">
            <img src="../assets/icon/menu_icon.svg" alt="4"/>
          </div>
      </header>
</template>

<script>
export default {
    name:"HeaderComponent",
    data () {
    return {
      emailRegister:'',
      isWhiteDino:true,
      isWater:false,
      isFly: false,
      isCarnivore: false,
      isHerb: false,
      isMenu: false
    }
  },
  methods: {
    setAllBooleanZero () {
      this.isWater = false
      this.isHerb = false
      this.isCarnivore = false
      this.isFly = false
    },
    setColorAndIcon () {
        if (this.$route.name === 'carnivore-page') {
            this.isCarnivore = true 
            this.isWhiteDino = true
        }
        else if (this.$route.name === 'fly-page') {
            this.isFly = true 
            this.isWhiteDino = false
        }
        else if (this.$route.name === 'herb-page') {
            this.isHerb = true 
            this.isWhiteDino = true
        }
        else if (this.$route.name === 'water-page') {
            this.isWhiteDino = false
            this.isWater = true
        }
    },
    showMenu () {
      this.isMenu = ( this.isMenu === true)? false : true
    }
  },
  mounted() {
      this.setColorAndIcon();
  }
}
</script>

<style>
</style>