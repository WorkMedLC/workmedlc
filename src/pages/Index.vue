<template>
  <Layout>
    <Gallery ref="gallery" v-bind:slides="slides" v-on:next="next" />
    <section class="section-1 py-12">
      <div class="container">
        <div class="row">
          <div class="col w-full">
             <h1 class="text-36 md:text-40 font-normal">Finding Great Care</h1>
             <p class="py-4">Finding great occupational medical care isn't difficult. Just look for a staff with experience. A doctor who talks with your employees, not at them. A doctor who listens and consistently researches the latest, proven methods to provide the most effective care. A practice with the latest training and technology. Choosing the right occupational medical care is easy. In fact, the right choice is right on your screen…</p>
             <p class="py-4">Dr. Benito Gallardo and the staff of WorkMed Occupational Health in Las Cruces offers a variety of work medicine services so you can ensure you’re healthy and get back to work as soon as possible. We accept patients who are sent to us through workers’ compensation claims, to receive physicals that meet OSHA requirements, and those looking to find work in an industry that requires pre-employment drug testing and physicals. Our specialist, Dr. Gallardo, and our nurse practitioner Wanda Poncik have extensive backgrounds in occupational medicine and can help you so you can get back to work ASAP. </p>
          </div>
        </div>
      </div>
    </section>
    <section class="cta">
      <div class="container">
        <div class="row">
          <div class="col w-full flex items-center justify-between border-t-2 border-b-2 border-grey-100 py-3">
            <h2 class="text-20 md:text-26">The Working Choice For Occupational Medical Care.</h2>
            <a href="tel:+1-575-521-1919" class="text-white py-2 px-4 bg-orange hover:bg-orange-400">Call (575)521-1919</a>
          </div>
        </div>
      </div>
    </section>
    <section class="section2 py-16">
      <div class="container">
        <div class="row">
          <div class="col w-9/12">
            <div class="row gutter-lg flex justify-between ">
              <infoBox class="col w-1/2 "
              v-for="(box,i) in infoBoxes" 
              :key="`info-box-${i}`" 
              :info="box"/>
            </div>
            <div class="col w-3/12"></div>
            </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Gallery from '~/components/Gallery'
import bg1 from '~/assets/images/slider/slider1.jpg'
import bg2 from '~/assets/images/slider/slider2.jpg'
import bg3 from '~/assets/images/slider/slide-2.jpg'
import InfoBox from '~/components/home/InfoBox'
import stock1 from '~/assets/images/stock1.jpg'
import stock2 from '~/assets/images/stock2.jpg'

export default {
  head: {
    script: [
      {src: '/js/modernizr.custom.js'},
      {src: 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js'},
      {src: '/js/jquery.ba-cond.min.js'},
      {src: '/js/jquery.slitslider.js'},
      // {src: '/js/test.js'}
    ]
  },
  components: {
    Gallery,
    InfoBox
  },
  data: () => ({
    slides: [
      {title: 'Working Together To Get Employees Back To Work.', img: bg1 },
      {title: 'The Working Choice For Occupational Medical Care.', img: bg2 },
      {title: 'Work-Related Care That Really Works.', img: bg3 }
    ],
    infoBoxes: [
      {title: 'BENEFICIAL TO EMPLOYERS AND EMPLOYEES', img: stock1, lists: ['Decrease lost time from work','Expedite return to work','Increase employee morale']},
      {title: 'CONVENIENT, ACCESSIBLE CARE', img: stock2, lists: ['Flexible hours','Walk-ins welcome','Handicapped-accessible']}
    ]
  }),
  methods: {
    next() {
      const image = this.slides.shift()
      console.log(image)
      this.$nextTick(() => this.slides.push(image))
    }
  },
  mounted() {
    
  },
  
}
</script>