<template>
  <Layout>
    <h1 class="absolute">About</h1>
    <Gallery ref="gallery" v-bind:slides="slides" v-on:next="next" />
  </Layout>
</template>

<script>
import Gallery from '~/components/Gallery'
export default {
  components: {
    Gallery
  },
  data: () => ({
     slides: [
      {title: 'Working Together To Get Employees Back To Work.', img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/10488/woods-1.jpeg' },
      {title: 'The Working Choice For Occupational Medical Care.', img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/10488/woods-2.jpeg' },
      {title: 'Work-Related Care That Really Works.', img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/10488/woods-3.jpeg' }
    ]
  }),
   methods: {
    next() {
      const image = this.slides.shift()
      this.$nextTick(() => this.slides.push(image))
    }
  }
}
</script>
