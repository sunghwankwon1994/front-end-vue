//import Exam01View from "@/views/Ch02ComponentRouting/Exam01View.vue";
//import Exam02View from "@/views/Ch02ComponentRouting/Exam02View";
// import Exam03View from "@/views/Ch02ComponentRouting/Exam03View";
// import Exam04View from "@/views/Ch02ComponentRouting/Exam04View";
// import Exam05View from "@/views/Ch02ComponentRouting/Exam05View";
// import Exam06View from "@/views/Ch02ComponentRouting/Exam06View";
// import Exam07View from "@/views/Ch02ComponentRouting/Exam07View";
// import UIComponentA from "@/components/Ch02ComponentRouting/UIComponentA.vue";
// import UIComponentB from "@/components/Ch02ComponentRouting/UIComponentB.vue";
// import UIComponentC from "@/components/Ch02ComponentRouting/UIComponentC.vue";
const routes = [
  {
    path: "/Ch02ComponentRouting/Exam01View",
    name: "Exam01View",
    component: () =>
      import(
        //유저가 요청할 때 import를 함, 그전까지는 초기 번들링에 추가 되지 않음
        /* webpackChunkName: "Ch02ComponentRouting"*/ "@/views/Ch02ComponentRouting/Exam01View"
      ),
  },
  {
    path: "/Ch02ComponentRouting/Exam02View",
    component: () =>
      import(
        //유저가 요청할 때 import를 함, 그전까지는 초기 번들링에 추가 되지 않음
        /* webpackChunkName: "Ch02ComponentRouting"*/ "@/views/Ch02ComponentRouting/Exam02View"
      ),
  },
  {
    path: "/Ch02ComponentRouting/Exam03View",
    component: () =>
      import(
        //유저가 요청할 때 import를 함, 그전까지는 초기 번들링에 추가 되지 않음
        /* webpackChunkName: "Ch02ComponentRouting"*/ "@/views/Ch02ComponentRouting/Exam03View"
      ),
  },
  {
    path: "/Ch02ComponentRouting/Exam04View",
    component: () =>
      import(
        //유저가 요청할 때 import를 함, 그전까지는 초기 번들링에 추가 되지 않음
        /* webpackChunkName: "Ch02ComponentRouting"*/ "@/views/Ch02ComponentRouting/Exam04View"
      ),
  },
  {
    path: "/Ch02ComponentRouting/Exam05View",
    component: () =>
      import(
        //유저가 요청할 때 import를 함, 그전까지는 초기 번들링에 추가 되지 않음
        /* webpackChunkName: "Ch02ComponentRouting"*/ "@/views/Ch02ComponentRouting/Exam05View"
      ),
    redirect: "/Ch02ComponentRouting/Exam05View/UIComponentA",
    children: [
      {
        path: "UIComponentA",
        component: () =>
          import(
            //유저가 요청할 때 import를 함, 그전까지는 초기 번들링에 추가 되지 않음
            /* webpackChunkName: "Ch02ComponentRouting"*/ "@/components/Ch02ComponentRouting/UIComponentA.vue"
          ),
      },
      {
        path: "UIComponentB",
        component: () =>
          import(
            //유저가 요청할 때 import를 함, 그전까지는 초기 번들링에 추가 되지 않음
            /* webpackChunkName: "Ch02ComponentRouting"*/ "@/components/Ch02ComponentRouting/UIComponentB.vue"
          ),
      },
      {
        path: "UIComponentC",
        component: () =>
          import(
            //유저가 요청할 때 import를 함, 그전까지는 초기 번들링에 추가 되지 않음
            /* webpackChunkName: "Ch02ComponentRouting"*/ "@/components/Ch02ComponentRouting/UIComponentC.vue"
          ),
      },
    ],
  },
  {
    path: "/Ch02ComponentRouting/Exam06View",
    component: () =>
      import(
        //유저가 요청할 때 import를 함, 그전까지는 초기 번들링에 추가 되지 않음
        /* webpackChunkName: "Ch02ComponentRouting"*/ "@/views/Ch02ComponentRouting/Exam06View"
      ),
  },
  {
    path: "/Ch02ComponentRouting/Exam07View/:kind?/:color?",
    component: () =>
      import(
        //유저가 요청할 때 import를 함, 그전까지는 초기 번들링에 추가 되지 않음
        /* webpackChunkName: "Ch02ComponentRouting"*/ "@/views/Ch02ComponentRouting/Exam07View"
      ),
  },
];

export default routes;
