<template>
  <Layout>
    <Hero />
    <section class="section-1 py-16">
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
        <div class="row gutter-lg flex">
          <div class="col w-9/12">
            <div class="row gutter-lg flex justify-between ">
              <infoBox class="col w-1/2 "
              v-for="(box,i) in infoBoxes" 
              :key="`info-box-${i}`" 
              :info="box"/>
            </div>
          </div>
          <div class="col w-3/12">
            <div class="paged bg-grey-200 p-8 rounded-sm border-b border-grey-300 relative">
              <h3 class="text-20 pl-3 border-l-2 border-dotted border-orange md:text-24">Occupational Medical Care</h3>
              <p class="md:text-18 font-thin pt-6">Working Together To Get Employees Back To Work.</p>
              <p lang="es" class="md:text-18 font-thin pb-6">Trabajando juntos para que los empleados volver al trabajo.</p>
              <p class="md:text-18 font-thin border-t border-b border-grey-300 py-6">2525 S. Telshor, Suite 16-108, Las Cruces, NM 88011 phone:1.575.521.1919 fax:1.575.521.1676</p>
              <div class="text-center pt-8 pb-2">
                <g-link class="text-white py-2 px-4 bg-orange hover:bg-orange-400" to="/about"> Se habla espanol</g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-3 py-6">
      <div class="container">
        <div class="row">
          <div class="col w-full">
            <h2 class="text-20 md:text-26 text-orange">Who We Are</h2>
            <p>Workmed Occupational Health was founded by Dr. Benito Gallardo in 2008. Dr. Gallardo comes from a military occupational health background. After leaving the military, he worked in various clinics in Las Cruces before deciding to open his own practice in 1999. Dr. Gallardo is a member of the American Board of Independent Medical Examiners (ABIME).</p>
          </div>
        </div>
        <hr class="border-grey-300 my-8 md:my-16">
         <div class="row">
          <div class="col w-full">
            <h2 class="text-20 md:text-26 text-orange">What We Do</h2>
            <p>At WorkMed Occupational Health, we make it our goal to get you back to work. So whether you require a medical examination for your work-related injury or exposure, or need to complete a physical to start a job, we have you covered. We offer same day appointments and walk-ins. Our services include:</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-4">
      <div class="container">
        <div class="row">
          <div class="col">
            
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Hero from '~/components/home/Hero'
import bg1 from '~/assets/images/slider/slider1.jpg'
import bg2 from '~/assets/images/slider/slider2.jpg'
import bg3 from '~/assets/images/slider/slide-2.jpg'
import InfoBox from '~/components/home/InfoBox'
import stock1 from '~/assets/images/stock1.jpg'
import stock2 from '~/assets/images/stock2.jpg'

export default {
  head: {
    script: [
     
    ]
  },
  components: {
    Hero,
    InfoBox
  },
  data: () => ({
    
    infoBoxes: [
      {title: 'BENEFICIAL TO EMPLOYERS AND EMPLOYEES', img: stock1, lists: ['Decrease lost time from work','Expedite return to work','Increase employee morale']},
      {title: 'CONVENIENT, ACCESSIBLE CARE', img: stock2, lists: ['Flexible hours','Walk-ins welcome','Handicapped-accessible']}
    ]
  }),
  methods: {
   
  },
  mounted() {
    
  },
  
}
</script>
<style scoped>
  .paged:before, .paged:after {
    @apply absolute bg-grey-200 border border-grey-300 rounded-sm;
    content: '';
    z-index: -1;
    height: 4px;
  }
  .paged:before {
    left: 2px;
    right: 2px;
    bottom: -6px;
    border-color: #c4c4c4;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  }
  .paged:after {
    left: 0;
    right: 0;
    bottom: -3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
</style>