<template>
  <Layout>
    <section class="hero">
      <div class="container text-white text-left">
        <div class="row">
           <div class="col max-w-3xl">
             <h1 class="text-white my-0 leading-none">Benito Gallardo, MD <br/> Occupational Health Services in Las Cruces</h1>
             <p class="my-3">With his extensive history in occupational health, Dr. Benito Gallardo has built a strong foundation for providing your employees with the finest care in occupational medicine. </p>
           </div>
        </div>
      </div>
    </section>
    <section class="section-1 py-12">
      <div class="container">
        <div class="row">
          <div class="col w-full">
            <div class="text-center max-w-3xl mx-auto pb-8">
              <h2 class="">Occupational Medicine Clinic in Las Cruces</h2>
              <p>Whether your company needs screening tests for prospective employees or experienced medical care for existing workers, Dr. Gallardo and the dedicated staff at WorkMed will be available for all your occupational health needs.</p>
            </div>
            <masonry
              :cols="{default: 3, 992: 2, 600: 1}"
              :gutter="{default: '.75rem'}"
              >
              <div class="icon-wrap my-3"v-for="(item, index) in list1" :key="`list1-${index}`">
                
                  <i :class="item.icon" class="text-first"></i>
                  <p v-html="item.text"></p>
                </div>
              
            </masonry>
          </div>

        </div>
        
      </div>
    </section>
    <section class="section-2">
      <div class="container">
         <div class="col w-1/2">
            <h2 class="">What Dr. Benito Gallardo Can Do For You</h2>
            <p>WorkMed specializes in the treatment of work-related injuries/illnesses. We keep you informed of the status of your injured employee at all times and will document and bill workers’ comp claims. Our aggressive return-to-work policy also provides you with additional savings.</p>
            <p>At WorkMed, we waste no effort in making your experience with us as convenient as possible, while still providing expert medical care. Dr. Gallardo’s mission is to provide a practice that takes care of your employees’ medical needs easily and effectively. His extensive training and experience give him a comprehensive background in:</p>
            <ul>
              <li>Treatment of on-the-job injuries</li>
              <li>Motor vehicle accidents</li>
              <li>Impairment ratings /IME</li>
              <li>Drug abuse/alcohol testing</li>
              <li>Physical rehabilitation</li>
              <li>Pulmonary function testing</li>
              <li>Pharmaceuticals and vaccinations</li>
              <li>X-rays</li>
            </ul>
          </div>
      </div>
    </section>
    <section class="section-3">
     <div class="container">
        <h2 class="">Every Employee Deserves Peace of Mind</h2>
        <p>The peace of mind that employers and employees get from knowing somebody’s there to help them is what drives our practice. That peace that comes from quality professional treatments and personal care—from minor injuries to more serious injuries. Regardless of previous diagnoses, Dr. Gallardo and the staff at WorkMed won’t give up on them! We listen to every concern and question. This applies to every patient we see. In other words, we’re working together to keep your employees working at their best.</p>
        <h2 class="">Convenience for You and Your Employees</h2>
        <p>One of the reasons we’re the best choice for occupational medical care for companies, schools, and government agencies is our unique combination of convenient services and superior care. For some, it’s the ability to take care of all their company’s needs with a single proven practice they can trust. For others, it’s the quick turnaround on screening tests and evaluations. Others say it’s our experience and reputation. Our customers enjoy taking advantage of our on-site capabilities that save them (and their employees) effort and time. Whatever the reason, you can be sure that Benito Gallardo, MD and the staff at WorkMed Occupational Health will always put the care of your employees first.</p>
     </div>
    </section>
  </Layout>
</template>

<script>
import Vue from 'vue'
import VueMasonry from 'vue-masonry-css'
Vue.use(VueMasonry)
export default {
  components: {
    
  },
  data: () => ({
     list1: [
       {
        icon: 'fad fa-2x fa-hand-holding-heart ', 
        text: 'Highly Reviewed Occupational Medicine Services'
      },
      {
        icon: 'fad fa-2x fa-user-md ', 
        text: 'Dr. Gallardo is Dedicated to Helping You'
      },
      {
        icon: 'fad fa-2x fa-calendar-check ', 
        text: 'Walk-in Appointments Available'
      },
      {
        icon: 'fad fa-2x fa-clock ', 
        text: '<a href="/contact-us/">Flexible Hours</a>'
      },
      {
        icon: 'fad fa-hospital-user fa-2x ',
        text: 'Highly Qualified Doctor Available to Help You'
      },
      {
        icon: 'fad fa-2x fa-user-nurse ',
        text: 'Our Physician and Nurse Practitioner Have Years of Experience in the Medical Field'
      },
      {
        icon: 'fad fa-stethoscope fa-2x ',
        text: 'Variety of Physicals Available'
      },
      {
        icon: 'fad fa-prescription-bottle fa-2x ',
        text: 'We Offer <a href="/dot-physical-las-cruces/">DOT Testing</a> As Well'
      }
     ]
  }),
   methods: {
    
  }
}
</script>
<style lang="scss" scoped>
.hero {
  background: url('../assets/images/hero-t-lg.jpg');
  padding:3rem 0;
}
 .section-1 {
   .icon-wrap {
         @apply flex items-center border border-grey-200 p-4 rounded-lg shadow ;
         i { @apply pr-3}
       }
   .col {
     &.icons {
      //  @apply  my-2 text-left leading-none;
       
     }
   }
 }
</style>