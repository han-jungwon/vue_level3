import VueRouter from 'vue-router';
import Vue from "vue";
import NewsView from "../views/NewsView"
import AskView from "../views/AskView"
import JobsView from "../views/JobsView"


Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      // path: url 주소
      path: '/news',
      // component: url 주주로 갔을 때 표시될 컴포넌트
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    }
  ]
})
