<template>
  <div class="container">
    <div class="container--block">
      <div class="container--block-image">
        <img :src="resolve_img_url(image)" />
      </div>
      <div class="container--block-description">
        <div class="container--block-arrow" :class="{'rotate': isChecked}"></div>
        <div class="container--block-title">
          {{ title }}
        </div>
      </div>
    </div>
    <transition name="dino">
      <div v-if="isChecked" class="container--block-text">
        <div class="container--block-subtitle">
          {{ subTitle }}
        </div>
        <p>
          {{ firstText }}
        </p>
        <p>
          {{ secondText }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BlockDinoComponent",
  props: {
    isVisible: {
      type: Boolean,
      default: true,
    },
    exclusiveText: {
      type: String,
      default: "",
    },
    image: {
      type: String,
    },
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "Lorem",
    },
    firstText: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    secondText: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  },
  mounted() {},
  computed: {
    isChecked() {
      return this.title === this.exclusiveText;
    },
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context("../assets/img/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.container {
  box-sizing: border-box;
  margin: 0 45px 45px 45px;
  font-family: Nunito Sans;
  box-sizing: border-box;
  max-width: 355px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  &--block {
    max-width: 355px;
    background-color: $BlocksBackground;
    border-radius: 5% 5% 0 0;
    padding-top: 8px;
    &-image {
      img {
        width: 95%;
        object-fit: cover;
        border-radius: 5%;
      }
    }
    &-text {
      box-sizing: border-box;
      max-width: 355px;
      background-color: $BlocksBackground;
      padding: 0 5px 5px 5px;
      border-radius: 0 0 15px 15px;
      text-align: left;
    }
    &-title {
        box-sizing: border-box;
        padding-bottom: 10px;
    }
    &-arrow {
        background-image: url(../assets/icon/arrow_2.png);
        background-position: center center;
        background-size: cover;
        width: 30px;
        height: 30px;
        position: absolute;
        top: -5px;
        right: 8px;
        transform: rotate(-90deg);
    }
    &-description {
      position: relative;
    }
  }
}

.rotate {
    transform: rotate(90deg);
}
.dino-enter-active {
  animation: bounce-in .2s ease-in;
}
.dino-leave-active {
  animation: bounce-in .3s reverse;
}
@keyframes bounce-in {
  0% {
    height: 0;
    opacity: 0;
  }
  35% {
    height: 40px;
    opacity: 0;
    
  }
  50% {
    opacity: 0;
  }
  65% {
    height: 80px;
    
    
  }
  100% {
    height: auto;
    opacity: 1;
  }
}
</style>
