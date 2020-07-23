<template>
  <div class="dashed-border">
    <h2>{{$t(title)}}</h2>
    <p v-html="$t(text)"></p>
  </div>
</template>
<script>
    export default {
      name: 'AppProyectSpecs',
      props: {
        title: {
          type: String,
          default: null
        },
        text: {
          type: String,
          default: null
        }
      }
    }
</script>
<style scoped>
  .dashed-border{
    padding: 1em;
    border-width: 5px;
    border-style: dashed;
    height: 100%;
  }
</style>
