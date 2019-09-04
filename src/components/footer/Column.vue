<template>
  <div class="col w-full md:w-1/3">
    <h2 class="text-white text-20 pl-3 border-l-2 border-dotted border-orange mb-6">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>
