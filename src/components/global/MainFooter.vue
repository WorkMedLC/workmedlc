<template>
  <footer class=" bg-grey-600 text-white py-12 text-14">
    <div class="container mx-auto">
      <div class="row md:flex text-grey-400">
        <Column title="Services" class="md-max:mb-8">
          <ul>
            <li class=" mb-4 "
            v-for="(service, i) in services" 
            :key="`footer-service-${i}`">
              <a href="#tab" class="px-3 py-1 border-l-2 border-dotted border-grey-400 text-grey-400 inline-block hover:text-300 hover:bg-grey-700 hover:border-first">{{ service }}</a>
            </li>
          </ul>
        </Column>
        <Column title="Benito Gallardo MD" class="md:ml-16 md-max:mb-8">
          <p class=" leading-relaxed  ">Board-Eligible: American Board of Family Practice Certifications: ECFMG, 1979; FLEX, New Mexico, 1989; MRO Former Medical Director: City of Las Cruces Employee Health Clinic Former Physician: General Medical Duties, United States Army Former Instructor: FPC Preceptorship at Fort Drum, affiliated with SUNY Health Science Center, Syracuse, NY Awards & Honors: Certificate of Achievement for Outstanding Medical Services to Chattahoochic Valley; Army Commendation Medal; Surgeon General Physician Recognition Award</p>
        </Column>
        <Column title="Location" class="md:ml-16" >
          <div itemscope itemtype="http://schema.org/MedicalClinic">
            <span
              style="display:none;"
              itemprop="description"
            >Treatment of on-the-job injuries, Motor vehicle accidents, Physicals, Impairment ratings, Substance abuse/alcohol testing, Physical/occupational therapy, Pulmonary function testing, Pharmaceuticals, Vaccinations, and X-rays.</span>
            <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
              <address class="flex not-italic mb-4">
                <i class="fa fa-thumbtack flex-grow-0 mt-2"></i>
                <div class="pl-3">
                  <span itemprop="streetAddress">2525 S. Telshor, Suite 16-108</span>
                  <br />
                  <span itemprop="addressLocality">Las Cruces</span>,
                  <span itemprop="addressRegion">NM</span>
                  <span itemprop="postalCode">88011</span>
                </div>
              </address>
            </div>
            <address class="not-italic mb-4 flex">
              <i class="fa fa-phone mt-1 flex-grow-0"></i>
              <span class="pl-3  dib" itemprop="faxNumber">fax: 1.575.521.1676</span>
            </address>
            <address class="not-italic flex">
              <i class="fa fa-phone mt-1 flex-grow-0"></i>
              <span class="pl-3 dib" itemprop="telephone">phone: 1.575.521.1919</span>
            </address>
          </div>
        </Column>
      </div>
    </div>
  </footer>
</template>

<script>
import Column from '~/components/footer/Column'
export default {
  components: {
    Column
  },
  data(){
    return {
      services: [
        'PHYSICALS AND MORE',
        'ON-SITE DRUG AND ALCOHOL TESTING',
        'IMPAIRMENT RATINGS/INDEPENDENT MEDICAL EXAMS',
        'ONE-STOP LAB WORK RIGHT IN OUR OFFICE'
      ]
    }
  }
};
</script>

<style>
footer {
  background-image: url('../../assets/images/footer-texture.png');
}
</style>