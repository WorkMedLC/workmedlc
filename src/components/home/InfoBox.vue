<template>
  <div class="relative">
    <g-link  class="img-wrap block relative overflow-hidden" 
    to="/about">
      <g-image class=" object-cover relative z-10 hover:opacity-25"
      :src="info.img" 
      :alt="info.title"  />
      <p class="absolute right-0 bottom-0 left-0 top-0 opacity-100 border-4 border-orange bg-black">
        <span class="bg-orange pt-1 pr-2 pb-2 pl-2 text-white">Read More About Us</span>
      </p>
    </g-link>
    <h2 class="text-24 md:text-30">
      <g-link class="text-orange" to="/about">{{info.title}}</g-link>
    </h2>
      <ol>
        <li class="relative bg-grey-100 hover:bg-white"
        v-for="(list,i) in info.lists" 
        :key="`list-${i}`">{{list}}</li>
      </ol>
      <g-link to="/about" class="inline-block mt-2 text-12 text-white py-2 px-4 bg-orange hover:bg-orange-400"><i class="fas fa-info-circle"></i> Read More</g-link>
  </div>
</template>

<script>
export default {
 props: ['info']
}
</script>

<style scoped>
  .img-wrap {
    max-height:200px;
  }
  img:hover {
    transition: .2s linear;
  }
  ol {
    text-shadow: 0 1px 0 rgba(255,255,255,.5);
    counter-reset: li;
  }
  li {
    padding:.3em;
    margin: .5em 0 .5em 2.5em;
    transition: all .3s ease-out;
  }
  li:hover {
    /* background-color: #FFFFFF; */
  }
  li:before {
    content: counter(li);
    counter-increment: li;
    position: absolute;
    left: -2.5em;
    top: 50%;
    margin-top: -1em;
    background: #ff6600;
    color: #FFFFFF;
    height: 2em;
    width: 2em;
    line-height: 2em;
    text-align: center;
    font-weight: bold;
  }
  li:after {
    position: absolute;
    content: '';
    border: .5em solid transparent;
    left: -1em;
    top: 50%;
    margin-top: -.5em;
    transition: all .3s ease-out;
  }
  li:hover:after {
    left: -.5em;
    border-left-color: #ff6600;
  }
</style>