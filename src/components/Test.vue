<template>
  <div class="hello" v-html="message">
    <h1>Fdsgsdfgdfg</h1>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: ['message'],
  data () {
    return {
      msg: 'Test LOLOLO'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #02b903;
}
</style>
