<template>
  <section class="hero w-full overflow-hidden relative">
    <div class='slider absolute h-full w-full'>
      <svg id='svg2' class='w-full h-full absolute z-10':class="startNavCircle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <circle id='circle1' class='left-circle circle1' cx="-5%" cy="0%" r="11vw"  />
        <circle id='circle2' class='left-circle circle2' cx="-5%" cy="0%" r="23vw"  />
        <circle id='circle3' class='left-circle circle3' cx="-5%" cy="0%" r="34vw"  />
        <circle id='circle4' class='left-circle circle4' cx="-5%" cy="0%" r="45vw"  />
        <circle id='circle5' class='left-circle circle5' cx="-5%" cy="0%" r="56vw"  />
        <circle id='circle6' class='left-circle circle6' cx="-5%" cy="0%" r="67vw"  />
        <circle id='circle7' class='left-circle circle7' cx="-5%" cy="0%" r="78vw"  />
        <circle id='circle8' class='left-circle circle8' cx="-5%" cy="0%" r="89vw"  />
        <circle id='circle9' class='left-circle circle9' cx="-5%" cy="0%" r="100vw"  />
      </svg>
      <div class="slide-content w-full h-full flex items-center" :class="{'tran': sliding}">
        <g-image :src="liveSlide.img" class="object-cover absolute w-full h-full" />
        <transition name="slide" mode="out-in">  
          <div class="hero-content relative" :class="liveSlide.class" :key="liveSlide.id">
              <h2 class="relative text-white leading-none " v-html="liveSlide.title"></h2>
              <a  @click="slideInit('left',$event)"class='next font-light text-20 inline-block align-middle relative text-white z-10 cursor-pointer mt-6 px-8 py-1' name="button">Next <i class="fal fa-long-arrow-right relative pl-1"></i></a>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import bg1 from '~/assets/images/slider/slider1.jpg'
import bg2 from '~/assets/images/slider/slider2.jpg'
import bg3 from '~/assets/images/slider/slide-2.jpg'
export default {
  data: () => ({
    curpage: 1,
    sliding: false,
    tran: false,
    navCircle: false,
    slides: [
      {id: 'slide-1',title: 'Working Together To Get Employees Back To Work.', img: bg1, class:'slide-1 showing' },
      {id: 'slide-2',title: 'The Working Choice For Occupational Medical Care.', img: bg2, class:'slide-2 showing' },
      {id: 'slide-3',title: 'Work-Related Care That Really&nbspWorks.', img: bg3, class:'slide-3 showing' }
    ],
  }),
  methods: {
    changeSlide(direction){
      let slide;
      slide = this.slides.pop()
      this.slides.unshift(slide)
     
    },
    slideInit(direction,event) {

      if(this.sliding) return;
      this.navCircle = true;
      this.isSliding()
      setTimeout(() => {
        this.changeSlide(direction)
        this.isSliding()
        this.navCircle = false
      }, 720);
    },
    isSliding(){
      this.sliding = !this.sliding
    }

  },
  computed: {
    startNavCircle() {
      return this.navCircle  ? 'streak' : 'steap'
    },
    liveSlide(){
      return this.slides[0]
    }
  }
 
}
</script>

<style scoped>
  .hero {
  height:500px;
}
.hero-content {
  max-width: 41%;
  left: 7vw;
  text-shadow: 0 -1px 0 rgba(0,0,0,0.2);
    
}
.hero-content.showing {

  z-index: 50;
}
h2 {
  font-size:100px;
  
}
circle {
  stroke: #fff;
  fill: none;
  transition: stroke-width 0.3s;
}

#svg2 circle {
  transition-timing-function: linear;
}

.slide-content {
  transition: 1s;
}
.slide-3 h2 {
  text-shadow: 1px 1px 8px #000;
}
.next {
  background-color:#c4c2cf;
}
.next i {
  top:2.3px;
  font-size:24px;
}
.slide-3 .next {
  background-color:#000;
}
.tran {
  transform: scale(1.3);
}

.steap circle {
  stroke-width: 0;
}

.streak circle {
  z-index:9999;
  stroke-width: 30%;
}
.circle1 {
  transition-delay: 0.05s;
}

.circle2{
  transition-delay: 0.1s;
}

.circle3 {
  transition-delay: 0.15s;
}

.circle4 {
  transition-delay: 0.2s;
}

.circle5 {
  transition-delay: 0.25s;
}

.circle6 {
  transition-delay: 0.3s;
}

.circle7{
  transition-delay: 0.35s;
}

.circle8 {
  transition-delay: 0.4s;
}

.circle9 {
  transition-delay: 0.45s;
}
.slide-enter-active, .slide-leave-active {
  transform: translateY(0);
  transition: transform 1s ease-in-out, opacity .8s ease;
}

.slide-enter, .slide-leave-to {
  opacity:0;
  transition: none;
  transform: translateY(100px);
}
</style>