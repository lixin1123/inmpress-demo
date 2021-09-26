<template>
  <!-- <div id="impress" data-transition-duration="1000" data-width='1024' data-height="960">
    <button @click="goTarget(1)"> 目录一</button>
    <button @click="goTarget(2)"> 目录二</button>
    <button @click="goTarget(3)"> 目录三</button>
    <Demo></Demo>
    <DemoTwo ></DemoTwo>
    <DemoThree></DemoThree> 
  </div> -->
  <div id="impress" data-transition-duration="1000">

    <div class="step" data-scale="4" data-x="0" data-y="0">
        <h1>2D navigation</h1>

        <div>第一张图片</div>
    </div>

    <div id="contents" class="step" data-rel-x="1500" data-rel-y="1500" data-scale="1" data-x="0" data-y="0">
        <h1>Choosing a treat 第二张</h1>

        <ul>
            <li>You can choose your preferred treat from:
                <ul>
                <li>Ice cream</li>
                <li>Crisps</li>
                <li>Apple pie</li>
                </ul>
            </li>
            <li>We will make a structured pro's &amp; con's analysis to arrive at a conclusion</li>
        </ul>
    </div>

    <!-- Ice cream slides (3) -->
    <div id="icecream" class="step" data-x="200" data-y="20"
         data-goto-key-list="ArrowUp ArrowDown ArrowLeft ArrowRight"
         data-goto-next-list="contents icecream-pro contents crisps">
        <h1>Ice cream</h1>

        <ul>
            <li>Cold</li>
            <li>Creamy</li>
            <li>Vanilla or flavored</li>
            <li>Caramel sauce, jams &amp; other toppings</li>
        </ul>
    </div>

    <div id="icecream-pro" class="step" data-rel-x="0" data-rel-y="1000"
         data-goto-key-list="ArrowUp ArrowDown ArrowLeft ArrowRight"
         data-goto-next-list="icecream icecream-con applepie crisps-pro">
        <h1>Ice cream: Pro's</h1>

        <ul>
            <li>Great for dessert or snack</li>
            <li>Great in the Summer</li>
        </ul>
    </div>


    <div id="icecream-con" class="step" data-rel-x="0" data-rel-y="1000"
         data-goto-key-list="ArrowUp ArrowDown ArrowLeft ArrowRight"
         data-goto-next-list="icecream-pro crisps applepie-pro crisps-con">
        <h1>Ice cream: Con's</h1>

        <ul>
            <li>Not so great in the Winter</li>
            <li>If you're allergic to lactose/milk</li>
            <li>Diet alternatives are not real ice cream</li>
        </ul>
    </div>


    <!-- Crisps slides (3) -->
    <div data-rotate="90" id="crisps" class="step" data-x="3500" data-y="2000"
         data-goto-key-list="ArrowUp ArrowDown ArrowLeft ArrowRight"
         data-goto-next-list="icecream-con crisps-pro icecream applepie">
        <h1>Crisps</h1>

        <ul>
            <li>Potatoes fried in oil and salted</li>
            <li>Various flavors</li>
            <li>Dips</li>
            <li>Can be used as ingredient in subs (Cliff Huxtable style)</li>
        </ul>
    </div>

    <div id="crisps-pro" class="step" data-rel-x="0" data-rel-y="1000"
         data-goto-key-list="ArrowUp ArrowDown ArrowLeft ArrowRight"
         data-goto-next-list="crisps crisps-con icecream-pro applepie-pro">
        <h1>Crisps: Pro's</h1>

        <ul>
            <li>Simple yet tasty concept</li>
            <li>Great for snack</li>
            <li>Salty / spicy (not sweet)</li>
            <li>Finger food</li>
            <li>Diet alternatives are often ok</li>
        </ul>
    </div>


    <div id="crisps-con" class="step" data-rel-x="0" data-rel-y="1000"
         data-goto-key-list="ArrowUp ArrowDown ArrowLeft ArrowRight"
         data-goto-next-list="crisps-pro applepie icecream-con applepie-con">
        <h1>Crisps: Con's</h1>

        <ul>
            <li>Commonly not used as dessert</li>
            <li>Not sweet</li>
        </ul>
    </div>


    <!-- Apple pie slides (3) -->
    <div id="applepie" class="step" data-x="5000" data-y="2000"
         data-goto-key-list="ArrowUp ArrowDown ArrowLeft ArrowRight"
         data-goto-next-list="crisps-con applepie-pro crisps icecream-pro">
        <h1>Apple pie</h1>

        <ul>
            <li>Apple's in a pie</li>
            <li>Many recipes exist. (Grandma's is the best.)</li>
            <li>Vanilla sauce or cream on top</li>
        </ul>
    </div>

    <div id="applepie-pro" class="step" data-rel-x="0" data-rel-y="1000"
         data-goto-key-list="ArrowUp ArrowDown ArrowLeft ArrowRight"
         data-goto-next-list="applepie applepie-con crisps-pro icecream-con">
        <h1>Apple pie: Pro's</h1>

        <ul>
            <li>Great for dessert</li>
            <li>Or just with a cup of tea or glass of milk</li>
            <li>Best when warm</li>
        </ul>
    </div>


    <div id="applepie-con" class="step" data-rel-x="0" data-rel-y="1000"
         data-goto-key-list="ArrowUp ArrowDown ArrowLeft ArrowRight"
         data-goto-next-list="applepie-pro conclusion crisps-con conclusion">
        <h1>Apple pie: Con's</h1>

        <ul>
            <li>I'm allergic to apple (but a small slice is worth it)</li>
            <li>Not finger food</li>
        </ul>
    </div>


    <div id="conclusion" class="step" data-rel-x="1000" data-rel-y="1000">
        <h1>Conclusion</h1>

        <p>Can I choose all three ;-)</p>

        <p style="font-size: small; position: absolute; bottom: 30px; left: 300px;" id="image-credits"
        >Image credits: <a href="https://www.flickr.com/photos/reimagingerica/35535918670">reimagingerica@Flickr</a>, 
                        <a href="https://www.flickr.com/photos/mixedmolly/6636957665">mixedmolly@Flickr</a>,
                        <a href="https://www.flickr.com/photos/stevepj2009/6296334551">stevepj2009@Flickr</a> </p>
    </div>

    <div id="overview" class="step" data-x="3000" data-y="2000" data-scale="9" style="pointer-events: none;">
    </div>
</div>
  <div id="impress-toolbar"></div>
</template>


<script>
// import Demo from './demo.vue'
// import DemoTwo from './demo-two.vue'
// import DemoThree from './demo-three.vue'
import "@/assets/css/impress-demo.css"
import { onMounted } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // components:{
  //   Demo,DemoTwo,DemoThree
  // },
  setup() {
    // eslint-disable-next-line no-undef 
    // let api = null
    // const goOn = () => {
    //   console.log('11')
    //   // eslint-disable-next-line no-undef 
    //   api.prev()
    // }
    onMounted(() => {
      // eslint-disable-next-line no-undef 
      impress().init()
    })
    const go = (name, stepName) =>{
      // eslint-disable-next-line no-undef 
      const api = impress(name)
      api.init()
      api.goto(stepName)
    }
    const goTarget = (i) => { 
      switch (i) {
        case 1:
          go('demo', 'step-1')
          break
        case 2:
          go('two', 'step-1')
          break
        case 3: 
          go('three', 'step-1')
          break
      }
    }

    return {
      // goOn,
      // goNext,
      goTarget
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
#impress {
      margin-left: 210px;
}
div{
  cursor: pointer;
}
</style>
