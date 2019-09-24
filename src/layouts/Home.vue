<template>
  <div class="home-layout">
   <MainNav />
   <transition
        name="fade"
        appear
      >
      <main>
        <slot/>
      </main>
    </transition>
    <MainMap />
    <MainFooter />
    <MainCopyright />
  </div>
</template>

<script>

import MainNav from '~/components/global/MainNav'
import MainFooter from '~/components/global/MainFooter'
import MainCopyright from '~/components/global/MainCopyright'
import MainMap from '~/components/global/MainMap'
export default {
  components: {
    MainNav,
    MainFooter,
    MainCopyright,
    MainMap
  }
}
</script>
<style scoped>
.fade-enter-active {
  transition: all .5s ease-in-out;
}

.fade-enter {
    opacity: 0;
   transform :  scale(0.99);
}
</style>