<template>
 <section class="map flex">
    <a href="https://www.google.com/maps/place/Workmed+Occupational+Health/@32.2904805,-106.7361893,17z/data=!3m1!4b1!4m5!3m4!1s0x86de17c1bdbf2a67:0x4f937603e08e421d!8m2!3d32.2904805!4d-106.7340006" target="_blank" class="block w-full">
     <div class="flex flex-col w-full h-full top-0 left-0 text-white  items-center justify-center">
       <i class="fad fa-3x fa-map-marked-alt"></i>
        <p class="text-20 md:text-24">Get Directions</p>
       </div>
    </a>
 </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .map {
    height:250px;
  }
  .map a {
    background-image: url('../../assets/images/map.png');
    background-position: center;
    background-size:cover;
  }
  .map a > div {
    opacity: 0;
    text-shadow: 1px 1px 1px #000;
    background-color: rgba(0, 0, 0, .7);
    transition: .3s ease-in-out;
  }
  .map a:hover > div {
    opacity: 1;
  }
</style>