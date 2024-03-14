import { createRouter, createWebHashHistory } from 'vue-router';
import HomeComp from '../pages/HomeComp.vue';

export default createRouter({
  //hash 모드 : 특정 페이지에서 새로고침을 했을 때, '페이지 찾을 수 없음'과 같은 멧지 알림을 방지
  history: createWebHashHistory(),

  //page : page를 구분해주는 개념
  routes: [
    {
      path: '/',
      name: HomeComp,
      component: HomeComp,
    },
  ],
});
