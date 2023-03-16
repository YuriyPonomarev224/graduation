<template>
  <div>
    <div class="firstpage">
      <header-component></header-component>
        <div class="firstpage--content">
          <div class="firstpage--wrapper">
            <div class="firstpage--text">
              <h1>Динозавры</h1>
              <h2>Онлайн – энциклопедия</h2>
              <p>
                Если бы вам довелось отправиться в Мезозойскую эру – эру
                динозавров – Земля показалась бы вам инопланетным миром.
                Континенты имели разную форму, климат был жарче, и странные
                доисторические растения покрывали большую часть суши. Динозавры и
                их доисторические родственники правили этим пиром почти 200
                миллионов лет. Этот огромный промежуток времени разделен на три
                разных периода, каждый со своими особыми животными и растительной
                жизнью: Триасовый, Юрский и Меловой периоды.
              </p>
              <!-- <h3>Умный поиск</h3> -->
              <!-- <button>
                <img src="../assets/icon/search-normal.svg" alt="search-normal" />
                Найти динозавра
              </button> -->
            </div>
          </div>
        </div>
    </div>
    <posts-component>
      <div class="firstpage--other">
        <div class="firstpage--other-text">
          <div class="firstpage--other-img">
            <img src="../assets/img/HomePage/Earth1.png" alt="1" />
          </div>
          <h2>Триасовый период</h2>
          <p>
            В начале триасового периода континенты были объединены на одном
            суперконтиненте под названием Пангея. В основном он был пустынным, но у
            побережья климат был более влажным, что позволяло расти лесам из
            деревьев гинкго и гигантских хвощей. Первый динозавры — маленькие
            двуногие мясоеды — появились в этот период. Они сосуществовали с
            коренастыми, клыкастыми, травоядными животными, такими как Плацериас —
            родственник ранних млекопитающих.
          </p>
          <img src="../assets/img/Placerias.png" alt="Placerias">
          <figcaption>Плацериас</figcaption>
        </div>
        <div class="firstpage--other-text">
          <div class="firstpage--other-img">
            <img src="../assets/img/HomePage/Earth2.png" alt="2" />
          </div>
          <h2>Юрский период</h2>
          <p>
           Гигантский континент Пангея раскололся во время Юрского периода, 
           вулканическая сила из глубины Земли разорвала и образовала два больших континента.
           Влажный морской воздух теперь может нести дождь
           на большую часть земли, позволяя лесам заменить пустыню.
           Динозавры стали доминирующими наземными животными, а некоторые
           превратились в гигантов, таких как Барапазавр, травоядный динозавр с длинной шеей.
           Появились первые пернатые и летающие динозавры.
           включая Археоптерикса, птицеподобного хищника.
          </p>
          <img src="../assets/img/Barapasaurus.png" alt="Barapasaurus">
          <figcaption>Барапазавр</figcaption>
          <img src="../assets/img/Archaeopteryx.png" alt="">
          <figcaption>Археоптерикс</figcaption>
          </div>
        <div class="firstpage--other-text">
          <div class="firstpage--other-img">
            <img src="../assets/img/HomePage/Earth3.png" alt="3" />
          </div>
          <h2>Меловой период</h2>
          <p>
             Во время Мелового периода континенты дрейфовали до тех пор, 
             пока не расположились так, как они расположены сейчас. 
             Двигались они очень быстро, примерно так же, как растут ваши ногти на ногах.
             Цветковые растения, появившиеся в Юрском периоде,
             превратились в деревья и заменили старую растительность. 
             Стало больше видов динозавров, чем когда-либо. В том числе
             Велоцираптор, маленький хищник со смертоносными крючкообразными когтями на
             задних лапах, и Алксазавр, пернатое травоядное 
        </p>
        <img src="../assets/img/Velociraptor.png" alt="Velociraptor">
        <figcaption>Велоцираптор</figcaption>
        <img src="../assets/img/Alxasaurus.png" alt="Alxasaurus">
        <figcaption>Алксазавр</figcaption>
        </div>
      </div>
    </posts-component>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import PostsComponent from "../components/PostsComponent.vue";
// import SliderMain from '../components/Slider.vue'
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { PostsComponent, HeaderComponent },
  data() {
    return {
      emailRegister: "",
      isWhiteDino: true,
      isWater: false,
      isFly: false,
      isCarnivore: false,
      isHerb: false,
    };
  },
  methods: {
    setAllBooleanZero() {
      this.isWater = false;
      this.isHerb = false;
      this.isCarnivore = false;
      this.isFly = false;
    },
  },
};
</script>
<style lang="scss" scoped></style>
