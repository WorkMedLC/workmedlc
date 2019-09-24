<template>
  <div>
    <div class="row tab-header-wrap relative flex justify-between">
      <div class="col tab-header  w-1/4  text-center md:mx-2 xl:mx-4 flex items-center cursor-pointer"  
      :class="{active: i === activeTab.id}"
      v-for="(tab, i) in tabs" 
      :key="`tab-head-${i}`"
      @click="activeTab = tab">
      <span class="w-full py-2 lg:px-4 block">{{tab.title}}</span>
      </div>
    </div>
      <div class="row flex justify-between">
        <div class="col tab-content-wrap w-full border border-dotted md:mx-2 xl:mx-4">
          <transition
          name="tabs"
          @beforeLeave="beforeLeave"
          @enter="enter"
          @afterEnter="afterEnter"
          mode="out-in"
          >
          <div class="tab-content px-4 py-6" :key="activeTab.id">
            <h3 class="text-18 md:text-20 pl-3 border-l-2 border-dotted border-first">{{activeTab.title }}</h3>
            <p class="py-4">{{activeTab.text}}</p>
            <ul class="text-center tab-lists"
            v-if="activeTab.list">
              <li class="p-2"
              v-for="(li, i) in activeTab.list">
              {{li}}
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    prevHeight: '',
    activeTab: '',
    tabs: [
      {
        id: 0,
        title: "Physicals and More",
        text:
          "WorkMed offers a variety of medical and screening services designed to help employers meet government regulations and other legal concerns. Pre-placement screening can reduce workers’ comp costs and improve worker performance. High-risk situations can be identified and recommendations can be made to reduce the potential of sustaining an injury. Physical exam programs include:",
        list: [
          "HAZMAT physicals",
          "Pre-employment and post-offer physicals",
          "DOT physicals",
          "Fitness for duty",
          "Respirator compliance"
        ]
      },
      {
        id: 1,
        title: "On-Site Drug and Alcohol Testing",
        text:
          "We also offer on-site drug and alcohol testing. Because every workplace is different, we can arrange to do substance abuse testing and meet your company's specific requirements. WorkMed provides complete management of all drug testing programs, including:",
        list: [
          "Pre Employment, DOT, Random testing",
          "Post-accident",
          "Reasonable suspicion",
          "Return-to-duty, follow-up drug testing"
        ]
      },
      {
        id: 2,
        title: "Impairment Ratings and Independent Medical Exams",
        text:
          "Dr. Gallardo is a Certified Medical Examiner. His comprehensive training and experience allow him to correctly apply the principles of the American Medical Association (AMA) guides to perform timely and quality impairment ratings with some of the fastest turnaround times in the area."
      },
      {
        id: 3,
        title: "Convenient, One-Stop Lab Work Right in Our Office",
        text:
          "If your employees should require laboratory tests for health screenings, urinalysis or blood work, you can count on WorkMed to provide prompt results. We work with a variety of certified labs and lab results come back in a timely manner, while many test results can be given on the spot."
      }
    ]
  }),
  computed: {
    setActiveTab(tab) {
      return this.activeTab()
    }
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
  mounted() {
    this.activeTab = this.tabs[0]
  }
  
};
</script>

<style scoped>
.tab-header-wrap {
  margin-bottom: -1px;
}
.tab-header.active {
  @apply border-t-4 border-first;
  border-left: 1px dotted;
  border-right: 1px dotted;
  border-bottom:1px solid white;
  z-index: 10;
  position: relative;
}
.tab-content-wrap {
  transition: all .3s ease;
  overflow: hidden;
}
.tab-lists li {
  background: rgba(0,0,0,0.01);
  border-bottom: 1px dotted rgba(0,0,0,0.1);
}
.tab-lists li:nth-child(even) {
    background: #f5f5f5;
}

.tabs-enter {
    opacity: 0;
    transform: translate3d(100px, 0, 0);
  }

  .tabs-enter-active,
  .tabs-leave-active { transition: .5s; }

  .tabs-leave-to {
    opacity: 0;
    transform: translate3d(-100px, 0%, 0);
  }
</style>