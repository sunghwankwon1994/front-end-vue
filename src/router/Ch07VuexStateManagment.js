const routes = [
  {
    path: "/Ch07VuexStateManagment/Exam01RootState",
    component: () =>
      import(
        /* webpackChunkName: "Ch07VuexStateManagment"*/ "@/views//Ch07VuexStateManagment/Exam01RootState"
      ),
  },
  {
    path: "/Ch07VuexStateManagment/Exam02CounterState",
    component: () =>
      import(
        /* webpackChunkName: "Ch07VuexStateManagment"*/ "@/views//Ch07VuexStateManagment/Exam02CounterState"
      ),
  },
];
export default routes;
