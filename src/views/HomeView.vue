<template>
  <div class="container-fuild">
    <NavBarUser></NavBarUser>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBarUser from '@/components/NavBarUser.vue';

export default {
  name: 'HomeView',
  components: {
    NavBarUser,
  }
}
</script>
