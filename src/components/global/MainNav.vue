<template>
  <header class=" relative z-50">
    <div class="container">
      <nav class="row flex items-center md-max:flex-wrap">
        <div class="left lg:pr-4 md-max:w-full md-max:flex md-max:items-center md-max:justify-between">
          <g-link to="/" class="flex items-center">
            <div>
              <g-image src="~/assets/images/logo-black.svg" alt="WorkMed Inc." class="md-max:p-2" width="63" /> 
            </div>
            <h2 class=" text-24 font-body">WorkMed Inc.</h2>
          </g-link>
         <span class="md:hidden"> 
           <a class="dib menu text-32 " @click="openNav" :class="[navOpen ? 'fad fa-times' : 'fad fa-bars']"></a>
          </span>
        </div>
        <div class="right  md-max:w-full" :style="{height: mobileHeight}">
          <ul class="nav-links md:flex uppercase font-header">
            <li class="relative md-max:border-b md-max:border-grey-300" 
            v-for="(link, i) in navLinks" 
            :key='`nav-${i}`'
            :class="{'has-children': link.subNav}">
              <g-link 
              :class="navLinkClasses"
              :to="link.to">
                {{ link.title }}
              </g-link>
              <ul class="subnav md:absolute z-10  md:w-48 md:opacity-0 -mt-2 z-10"
              v-if="link.subNav">
                <li class="relative"
                v-for="(sublink, i) in link.subNav"
                :key="`sublink-${i}`"
                >
                  <g-link class="block border-l-2 border-trans 
                  hover:text-third
                  md:px-4 md:py-2 
                  md-max:px-2 mb-4"
                  :to="sublink.to">{{ sublink.title }}</g-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data:() => ({ 
    navLinks: [
      { title: 'Home', to: '/'},
      { title: 'About', to: '/about'},
      { title: 'Physicals', to: '/work-physicals-las-cruces', subNav: [
        {title: 'Hazmat', to:'/hazmat-physical-las-cruces'},
        {title: 'DOT/CDL', to:'/dot-physical-las-cruces'}
      ]},
      { title: 'Drug Screening', to: '/drug-screening-las-cruces'},
      { title: 'Impairment Ratings', to: '/impairment-ratings-las-cruces'},
      { title: 'Workers\' Comp', to: '/workers-comp-medical-services'},
      { title: 'Contact', to: '/contact-us', subNav: []}
    ],
    navLinkClasses: 'nav-link py-6 px-4 border-trans block md:border-t-2 hover:text-third md:hover:border-second md-max:py-4 md-max:px-0 ',
    navOpen: false
  }),
  methods: {
    openNav(evt){
      this.navOpen = !this.navOpen; 
    },
    
  },
  computed: {
    mobileHeight() {
      if(process.isClient) {
        const content = document.querySelector('.nav-links');
        return this.navOpen ? `${content.scrollHeight}px` : 0;
      }
    }
  }
}
</script>
<style lang="scss" scoped>

@media screen and (min-width:993px){
  .right{height:auto!important;}
  .subnav {transition: opacity .3s ease}
  .has-children:hover {
    @apply pointer-events-auto;
    .subnav {
      @apply opacity-100 pointer-events-auto z-10;
    }
  }
  .subnav a:hover {
   @apply border-second;
  }
  /* .nav-link:hover{@apply   } */
}
@media screen and (max-width:1010px) and (min-width:993px) {
  .container { width:95%;}
  
}
@media screen and (max-width:992px) {
  .right{
    overflow: hidden;
    transition: height .3s ease;
  }
}
</style>