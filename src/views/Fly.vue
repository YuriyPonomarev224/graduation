<template>
   <div>
    <div class="firstpage">
      <header-component></header-component>
      <div class="firstpage--content">
        <div class="firstpage--wrapper">
          <div class="firstpage--text">
            <h1>Летающие</h1>
            <p>Птерозавры, или летающие ящеры - самые ранние позвоночные, которые приобрели эволюционнуб способнеость к машущему полету. Ранние формы имели длинные зубастые челюсти и длинные хвосты; поздние формы отличались сильно уменьшенными хвостами, либо их полным отсутствием, а у многих отсутствовали зубы. Тела многих видов птерозавров были покрыты волосоподобными структурами — пикнофибрами. Птерозавры охватывали широкий диапазон размеров: от самых мелких анурогнатид до самых крупных из известных летающих существ всех времён, таких, как кетцалькоатль и хацегоптерикс. </p>
          </div>
        </div>
      </div>
    </div>
    <posts-component>
      <block-dino-component
        v-for="(item, key) in elems"
        :key="key"
        :is-visible="isVisible"
        :subTitle="item.subTitle"
        :image=item.image
        :title="item.title"
        :firstText="item.firstText"
        :secondText="item.secondText"
        @click="setVisible(item.title)"
        :exclusive-text="exclusiveText"
        />
    </posts-component>
  </div>
</template>
<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import PostsComponent from '../components/PostsComponent.vue'
import BlockDinoComponent from '../components/BlockDinoComponent.vue'

export default {
  name: "FlyPage",
  components: {HeaderComponent, PostsComponent, BlockDinoComponent},
  data: () => ({
    isVisible: false,
    title: "Lorem Ipsum",
    elems: [
      { id: 1, image: 'pterozavr.png', title: "Птерозавр", subTitle:"Их крылья представляли собой складки кожи, натянутые между боками тела и очень длинным четвёртым пальцем передних конечностей. Скелет обладал облегченной конструкцией: тонкие полые кости, легкий череп почти что сетчатой структуры, грудина имела киль, как у птиц. Строение скелета крыльев и плечевого пояса указывает на наличие мощной махательной мускулатуры. Вытянутые в клюв челюсти могли нести зубы (преимущественно у ранних форм). Птерозавры имели достаточно хорошо развитый мозг (преимущественно за счет мозжечка, отвечающего за координацию движений) и острое зрение. Тело было покрыто своеобразной «шерстью», что позволяет делать предположения о теплокровности птерозавров. На возможную теплокровность указывает и обильное кровоснабжение костей, подобное тому, что наблюдается у птиц и млекопитающих.", firstText:"Два подотряда: рамфоринхи — имели узкие крылья и длинный хвост; птеродактили имели широкие крылья и очень короткий хвост. Вымирание этой группы совпало с появлением птиц. Некоторые палеонтологи, учитывая ряд уникальных анатомо-физиологических черт птерозавров, предлагают выделить их в отдельный класс позвоночных.", secondText:"" },
      { id: 2, image: 'arheotretix.png', title: "Археоптерикс", subTitle: "Вымершее животное подкласса ящерохвостых, небольшой пернатый динозавр, возможный предок птиц. Жил археоптерикс в юрском периоде. Скелет археоптерикса с хорошо сохранившимися перьями был впервые найден в 1861 году. Известно пять таких скелетов археоптерикса, причем два были обнаружены в музеях (Нидерланды и Германия), где хранились как скелеты птерозавра и динозавра. Длина археоптерикса — 45 см, вес — 300 г (размер сороки). У него имелись зубы и длинный костный хвост, украшенный двумя рядами перьев. На каждом крыле археоптерикса располагалось по три когтистых пальца. Считается, что он пользовался ими для лазания по деревьям, откуда периодически планировал на землю. Он мог взлетать и с земли, используя сильные порывы ветра. Археоптерикс имел клювоподобные зубастые челюсти и питался насекомыми. В строении археоптерикса сочетаются признаки пресмыкающихся (череп с двумя височными дугами, зубы — в альвеолах, небольшой мозг рептильного типа, имеются брюшные ребра, позвонки амфицельные, длинный хвост состоит примерно из 20 позвонков, отсутствует роговой чехол клюва) и птиц (тело покрыто перьями, маховые перья крыльев крупные, асимметричного строения, кости конечностей частично пневматизированы). На основе изучения археоптерикса разрабатывались представления о мозаичной эволюции. Большинство исследователей считает, что археоптерикс — прямой предок птиц, произошедший от тероподных динозавров или от древних бипедальных крокодилов, или от псевдозухий. Однако некоторые исследователи полагают, что археоптерикс — боковая ветвь пресмыкающихся, показывающая возможный путь развития от них к птицам. Берлинский экземпляр археоптерикса описан как особый род и вид — Археорнис (Archaeornis siemensi), однако чаще принято относить все находки археоптерикса к одному виду. Находка археоптерикса была сделана сразу после выхода книги Чарльза Дарвина Происхождение видов и идеально подтверждала ее. Такое совпадение неоднократно вызывало дискуссии о подлинности находок, в частности, экземпляра Британского музея, но тщательная экспертиза 1980—1990-х годов опровергла все сомнения.", firstText: "", secondText: ""},
      { id: 3, image: 'ornix.png', title: "Орнитохейрус", subTitle: "Вероятно, самый крупный птерозавр планеты. Орнитохейр был размером с маленький самолёт, но благодаря лёгким полым костям весил не на много больше человека. Размах крыльев Орнитохейра достигал от 12 до 15 метров. Он жил в меловом периоде, 140—70 млн лет назад. Орнитохейр обитал в Европе (в том числе и России), Африке, Австралии и Южной Америке (Аргентина и Бразилия). Его узкий удлинённый череп плавно переходил в длинный клюв, унизанный острыми зубами. Орнитохейры, по-видимому, населяли побережья морей, берега больших озёр и речные поймы.", firstText: "Используя восходящие потоки воздуха, наиболее крупные орнитохейры вполне могли пролетать сотни километров, едва взмахивая крыльями. Этому способстовал также относительно небольшой вес — не более 100 кг, поскольку в костях рептилии находились так называемые «воздушные мешки». С высоты небесные гиганты опускались к поверхности воды за рыбой. Заметив добычу, птерозавр мгновенно погружал в воду клюв, смыкал челюсти и заглатывал рыбу целиком. Высокий килевидный гребень на клюве, по-видимому, помогал орнитохейру удерживать его в вертикальном положении в воде. На суше орнитохейр, как и большинство других птерозавров, двигался медленно и неуклюже, что делало его лёгкой добычей даже для некрупных хищников. Чтобы обезопасить себя от врагов, птерозавры гнездились многочисленными колониями недалеко от воды. А это значит, что прибрежные скалы, утёсы и другие наиболее безопасные и удобные места для гнездования были перенаселены. Окаменевшие кости орнитохейра впервые были найдены в Южной Англии в 1827 году, но свое название этот птерозавр получил только в 1869 году. Размах крыльев у большинства видов орнитохейра не превышал 2,5 м, однако сравнительно недавно в бразильских горах Сантана были найдены останки настоящего орнитохейра-исполина, размах крыльев которого превышал 13 м. Хотя окаменелости птерозавров известны ученым более 250 лет, одним из первых официального научного названия удостоился орнитохейр.", secondText: "Известно около 30 видов орнитохейров, но скорее всего многие из них представляют собой каких-то других птерозавров."},    
      { id: 4, image: 'ptero.png', title: "Птеродактиль", subTitle: "Крылья, в отличие от многих других птерозавровых, не были покрыты шерстяным покровом, они состояли из голой кожи. Скелет был легкий, т.к. кости полые. У некоторых присутствовал небольшой хвост, но в основном его не было. Размеры В длину, так же как и в высоту мог очень сильно различаться, т.к. были птеродактили с размером в ворону, а были и такие: Длина – 2 – 2,5м В высоту до 1,5м Масса тела не больше 75кг Голова Очень хорошо развита мозговая деятельность. Зрение также было отличным. Череп был удлинен и легок, зубы мелкие и не очень острые, количество зубов не превышало 20 штук, у многих особей они вообще отсутствовали. Конечности Передние и задние конечности были длинными, что вовсе не соответствовало размерам тела. На передних лапах было 4 пальца, один из них был частью крыла. Оставшиеся 3 пальца имели когти. Крылья были большими, их размах мог достигать 8м. ", firstText: "", secondText: ""},
    ],
    exclusiveText: "",
  }),

  methods: {
    setVisible(title) {
      this.exclusiveText = title === this.exclusiveText ? "" : title;
      console.log(this.exclusiveText);
    },

}}
</script>

<style>

</style>