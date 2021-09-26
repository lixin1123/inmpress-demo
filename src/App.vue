<template>
  <div class="left"> 
    <button @click="goOn">上一步</button>
    <button @click="goNext">下一步</button>
  </div>
  
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const goOn = () => {
      console.log('4444444444')
    }
    return {
      goOn
    }
  }
}
</script>

<style>
button {
    cursor: pointer;
}
.left{
    width: 200px;
    height: 100%;
    background-color: beige;
    float: left;
    position: fixed;
}
</style>
