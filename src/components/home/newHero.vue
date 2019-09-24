<template>
  <section class="hero">
    <div class="container">
      <div class="content flex items-center  mx-auto" :key="liveSlide.id">
        <div class="text-content leading-tight w-full md:w-1/2">
          <h2 class="" v-html="liveSlide.title" />
          <p class="subtext opacity-75" v-html="liveSlide.subtext"></p>
          <a class="bg-first text-white px-8 py-3 inline-block mt-4">Next -></a>
       </div>
        <div class="img-wrap text-center w-full md:w-1/2">
          <g-image :src="liveSlide.img" fit="contain" width="540" height="540"  />
        </div>
       
      </div>
    </div>
  </section>
</template>

<script>
import debounce from "lodash.debounce"
import bg1 from '~/assets/images/new/nino-liverani-CKxD_Qh6ULY-unsplash.jpg'
import bg2 from '~/assets/images/new/nino-liverani-EayqAlQiFeQ-unsplash.jpg'
import bg3 from '~/assets/images/new/nino-liverani-Z-lOWIRn2IM-unsplash.jpg'
export default {
  data: () => ({
    slides: [
      {id: 'slide-1',title: 'Working Together', subtext: 'To Get Employees Back To&nbsp;Work.', img: bg1, class:'slide-1 showing' },
      {id: 'slide-2',title: 'The Working Choice', subtext: ' For Occupational Medical Care.', img: bg2, class:'slide-2 showing' },
      {id: 'slide-3',title: 'Work-Related Care', subtext: ' That Really&nbspWorks.', img: bg3, class:'slide-3 showing' }
    ],
  }),
  methods: {
    changeSlide(direction){
      let slide;
      slide = this.slides.pop()
      this.slides.unshift(slide)
    },
   
  },
  computed: {
    liveSlide(){
      return this.slides[0]
    },
    
  },
  mounted() {
  
  }
 
}
</script>

<style lang="scss" scoped>
  .hero {
   
    .img-wrap {
      max-width:540px;
      
      position: relative;
      transform: translate(-20%, 10%) rotate3d(0.342, -0.94, 0, 22deg) rotateZ(7deg);
      box-shadow: 37.2px 62.5px 125px -25px rgba(50,50,93,.5), 22.3px 37.5px 75px -37.5px rgba(0,0,0,.6);
      img {
        
      }
      &:after {
        transform: scale(1.25);
        left: 40%;
        position: absolute;
        width: 100%;
        height: 100%;
        max-width:540px;
        content: "";
        z-index: -1;
        background-color: #f2f3f3;
        background: rgba(66,72,81,0.1);
        overflow:hidden;
        bottom:-60px;
       // animation: blob 10s infinite alternate;
      }
    }
    .img-wrap img, 
    .img-wrap:after {
      //border-radius: 63% 37% 50% 50%/70% 68% 32% 30%;
    }
    h2 {
      font-size: 80px;
      font-weight: 900; 
      
    }
    .subtext {
        display:block;
        font-size: 34px;
      }
  }
  @keyframes blob {
    from {border-radius: 63% 37% 50% 50%/70% 68% 32% 30%;}
    to {border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;}
  }
</style>