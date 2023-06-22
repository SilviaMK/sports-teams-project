<template>
  <div id="app">
    <MyTeamComponent/>
  </div>
</template>

<script>
import MyTeamComponent from './components/MyTeamComponent.vue'

export default {
  name: 'App',
  components: {
    MyTeamComponent
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  background-color: #F5F7F9;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
