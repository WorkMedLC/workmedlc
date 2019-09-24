<template>
  <div class="py-8">
    <div class="container">
      <div class="row flex">
        <div class="col w-1/2">
         <p>Copyright © WorkMed LC. All Rights Reserved.</p>
      </div>
      <div class="col w-1/2 md:text-right">
        <a class="text-third md:pl-4"
        v-for="link,i in links" 
        :key="`social-${i}`" 
        :href="link.to"
        target="_blank"><i class="fab fa-lg " :class="link.icon"></i></a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
 data: () =>({
   links: [
     { icon: 'fa-facebook-f', to: 'https://www.facebook.com/WorkMed-Occupational-Health-458299477984355/'},
     { icon: 'fa-twitter', to: 'https://twitter.com/WorkMedLC'},
     { icon: 'fa-linkedin-in', to: 'https://www.linkedin.com/company/workmed-occupational-health-lc/'}
   ]
 })
}
</script>

<style>

</style>