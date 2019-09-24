<template>
  <div class="layout">
   <MainNav />
   <!-- <div class="hero w-full py-10">
   </div> -->
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
<style lang="scss">
.layout {
   
  .hero {
    // background: url('../assets/images/intro-image.jpg') no-repeat center;
    // background-size:cover;
  }
  h1 { @apply text-36 }
  h2 { @apply text-30 my-2;}
  // p{@apply my-2}
  @screen md {
    h1 { @apply text-40; }
    
  }
}

.fade-enter-active {
  transition: all .5s ease-in-out;
}

.fade-enter {
    opacity: 0;
   transform :  scale(0.99);
}
</style>