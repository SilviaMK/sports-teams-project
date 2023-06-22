<template>
  <div class="container">
    <TeamHeader></TeamHeader>
    <TeamNavigation></TeamNavigation>
  </div>
</template>

<script>
import TeamHeader from './child-components/TeamHeader.vue'
import TeamNavigation from './child-components/TeamNavigation.vue'
export default {
  name: 'HeaderPanel',
  components: {
    TeamHeader,
    TeamNavigation
  },
  props: {
    msg: String
  }
}
</script>
