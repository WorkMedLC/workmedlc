<template>
  <div class="layout">
   <BaseNav />
    <slot/>
    <BaseFooter />
    <BaseCopyright />
  </div>
</template>

<script>
import BaseNav from '~/components/BaseNav'
import BaseFooter from '~/components/BaseFooter'
import BaseCopyright from '~/components/BaseCopyright'
export default {
  components: {
    BaseNav,
    BaseFooter,
    BaseCopyright
  }
}
</script>
