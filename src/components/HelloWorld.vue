<template>
    <div>
      <h2>{{$store.state.count}}</h2>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: Number
  }
}
</script>

<style scoped>

</style>
