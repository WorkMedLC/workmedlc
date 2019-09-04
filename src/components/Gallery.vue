<template>
  <div class="gallery-wrap">
     <transition-group tag="div" class="gallery" name="open">
       
        <div v-for="(slide, index) in slides"  v-bind:key="`img-${index}`" v-on:click="onClick" v-bind:style="{'--circle-x': x, '--circle-y': y}">
          <h2>{{slide.title}}</h2>
          <g-image v-bind:src="slide.img" class="object-cover" />
        </div>
      </transition-group>
  </div>
</template>

<script>
export default {
 props: ['slides'],
 data: () =>({
    x: '50%',
    y: '50%'
 }),
 methods: {
    onClick(event) {
      const x = event.offsetX - event.target.offsetLeft
      const y = event.offsetY - event.target.offsetTop
      const xPercent = `${Math.round(100 * x / event.target.offsetWidth)}%`
      const yPercent = `${Math.round(100 * y / event.target.offsetHeight)}%`
      this.x = xPercent
      this.y = yPercent
      this.$emit('next', {x: xPercent, y: yPercent})
    }
  }
}
</script>

<style>


.gallery-wrap {
  display: flex;
  flex-direction: column;
  width:100%;
  margin: auto;
  overflow: hidden;
}

.main > * {
  margin: auto 0;
}

.gallery {
  display: block;
  position: relative;
  padding-top: calc(2/3 * 100%);
  transform-style: preserve-3d;
  perspective: 100vw;
}

.gallery > div {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  --circle-x: 50%;
  --circle-y: 50%;
}
.gallery img {
  width:100%;
  object-fit: cover;
}

@keyframes openup {
  to {
    clip-path: circle(100vw at var(--circle-x) var(--circle-y));
  }
}

.open-enter-active {
  clip-path: circle(0 at var(--circle-x) var(--circle-y));
}

.open-enter-to {
  animation: openup 500ms ease-in;
}


</style>