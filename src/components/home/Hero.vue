<template>
  <div class="slider text-white font-light">
    <div id="slider" class="sl-slider-wrapper w-full overflow-hidden relative">
      <div class="sl-slider">
        <div class="sl-slide  hidden absolute top-0 left-0 w-full h-full" 
        v-for="(slide, i) in slides" 
        :key="`slide-${i}`" 
        :data-orientation="slide.pos" 
        :data-slice1-rotation="slide.rotation1"  
        :data-slice2-rotation="slide.rotation2" 
        :data-slice1-scale="slide.scale1" 
        :data-slice2-scale="slide.scale2">
          <div class="sl-slide-inner flex items-center absolute top-0 left-0 w-full h-full">
            <div class="bg-img bg-no-repeat bg-center absolute w-full h-full"
            :class="`bg-img-${i}`" 
            :style="{ backgroundImage: `url(${slide.bg})` }">
            </div>
            <span class="relative leading-none" v-html="slide.content"></span>
          </div>
        </div>
      </div>
      <!-- /sl-slider -->
      <nav id="nav-dots" class="nav-dots text-center absolute w-full left-0 z-50 bottom-0 py-8 leading-none md-max:hidden">
        <span class=" inline-block relative rounded-full cursor-pointer m-2"
        v-for="(dot, i) in slides"
        :key="`nav-dot-${i}`"
        :class="[i === 0 ? 'nav-dot-current' : '']">
        </span>
      </nav>
    </div>
    <!-- /slider-wrapper -->
  </div>
</template>

<script>
import bg1 from '~/assets/images/slider/slider1.jpg'
import bg2 from '~/assets/images/slider/slider2.jpg'
import bg3 from '~/assets/images/slider/slide-2.jpg'
export default {
  data: () => ({
    slides: [
      {bg:  `${bg1}`, pos: 'horizontal', rotation1: '-25', rotation2: '-25', scale1: '2', scale2: '2', content: 'Working Together To Get Employees Back To&nbsp;Work.' },
      {bg:  `${bg2}`, pos: 'vertical', rotation1: '10', rotation2: '-15', scale1: '1.5', scale2: '1.5', content: 'The Working Choice For Occupational Medical Care.' },
      {bg:  `${bg3}`, pos: 'horizontal', rotation1: '3', rotation2: '3', scale1: '2', scale2: '1', content: 'Work-Related Care That Really&nbsp;Works.' }
    ]
  })
}
</script>
<style >
.slider  {
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);
}
.slider .sl-slider-wrapper {
  height: 500px;
}
.slider .bg-img-2 {
  @apply bg-cover bg-top;
}
.sl-slide-horizontal .sl-slide-inner,
.sl-slide-vertical .sl-slide-inner {
  background-image:url('../../assets/images/slider/bg-pattern-2.png')
}
.slider .sl-slide-inner > span {
    /* top: 26% !important; */
    max-width: 41%;
    left: 7vw;
    font-size: calc(1em + 3.2vw);
}

.slider .nav-dots span {
  width: 16px;
  height: 16px;
  background: rgba(150, 150, 150, 0.1);
  box-shadow: 0 1px 1px rgba(255, 255, 255, 0.4),
    inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(255, 255, 255, 0.5);
}

.slider .nav-dots span.nav-dot-current,
.slider .nav-dots span:hover {
  box-shadow: 0 1px 1px rgba(255, 255, 255, 0.4),
    inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 0 5px rgba(255, 255, 255, 0.5);
}
.slider .nav-dots span.nav-dot-current:after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  top: 3px;
  left: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
}
/* ADDED BY JS */
.slider .sl-content-wrapper {
  position: absolute;
}
.slider .sl-content {
  width: 100%;
  height: 100%;
}

.slider .sl-content-slice {
  @apply overflow-hidden absolute opacity-100;
  backface-visibility: hidden;
  box-sizing: content-box;
}
.slider .sl-slide-horizontal .sl-content-slice {
  width: 100%;
  height: 50%;
  left: -200px;
  transform: translateY(0%) scale(1);
}
.slider .sl-slide-horizontal .sl-content-slice:first-child {
  top: -200px;
  padding: 200px 200px 0px 200px;
}
.slider .sl-slide-horizontal .sl-content-slice:nth-child(2) {
  top: 50%;
  padding: 0px 200px 200px 200px;
}
.slider .sl-slide-vertical .sl-content-slice {
  width: 50%;
  height: 100%;
  top: -200px;
  transform: translateX(0%) scale(1);
}
.slider .sl-slide-vertical .sl-content-slice:first-child {
  left: -200px;
  padding: 200px 0px 200px 200px;
}
.slider .sl-slide-vertical .sl-content-slice:nth-child(2) {
  left: 50%;
  padding: 200px 200px 200px 0px;
}
/* Text animation */

.slider .sl-trans-elems span {
  animation: moveUp 1s ease-in-out both;
}

.slider .sl-trans-back-elems span {
  animation: fadeOut 1s ease-in-out both;
}

/* END ADDED BY JS */

@keyframes moveUp {
  0% {
    transform: translateY(40px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* end added */
@media screen and (max-width: 1550px) {
  .slider .sl-slide-inner > span {
    max-width:44%;
  }
}
@media only screen and (max-width: 992px) {
  .slider .sl-slider-wrapper {
    height: 40vw!important;
    min-height:200px;
}

  .slider .bg-img {
    background-image:url(../../assets/images/slider/4.jpg) !important;
    background-size:cover!important;
  }
  .slider .sl-slide-inner > span {
    left:0;
    max-width: 91.666667%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>