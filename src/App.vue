<template>
  <div id="app">
    <hello-world></hello-world>
    <h2>{{$store.state.count}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.mout}}</h2>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import {INCREMENT} from './stact/type'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      this.$store.commit('incrementCount', count)
    }
  }
}
</script>

<style>

</style>
