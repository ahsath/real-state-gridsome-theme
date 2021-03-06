// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { BContainer, BRow, BCol, BCard, BCardText, BCardBody, BCardTitle, BCardSubTitle, ListGroupPlugin, BButton, BLink, BCarousel, BCarouselSlide, BForm, BFormGroup, BFormInput, BFormTextarea } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '~/assets/scss/custom.scss';
import '~/assets/css/style.css';

import TheHeader from '~/layouts/TheHeader.vue';
import TheGrid from '~/layouts/TheGrid.vue';
import TheFreakingFooter from '~/layouts/TheFreakingFooter.vue';

export default function (Vue, { router }, head, isClient) {
  // Framework components
  Vue.use(ListGroupPlugin);
  Vue.component('BContainer', BContainer);
  Vue.component('BRow', BRow);
  Vue.component('BCol', BCol);
  Vue.component('BCard', BCard);
  Vue.component('BCardText', BCardText);
  Vue.component('BCardBody', BCardBody);
  Vue.component('BCardTitle', BCardTitle);
  Vue.component('BCardSubTitle', BCardSubTitle);
  Vue.component('BButton', BButton);
  Vue.component('BCarousel', BCarousel);
  Vue.component('BCarouselSlide', BCarouselSlide);
  Vue.component('BForm', BForm);
  Vue.component('BFormInput', BFormInput);
  Vue.component('BFormGroup', BFormGroup);
  Vue.component('BFormTextarea', BFormTextarea);
  Vue.component('BLink', BLink);
  // In house components
  Vue.component('TheHeader', TheHeader);
  Vue.component('TheGrid', TheGrid);
  Vue.component('TheFreakingFooter', TheFreakingFooter);
}
