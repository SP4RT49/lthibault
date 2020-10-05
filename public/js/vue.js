const PortfolioV2 = {
  template: "#PortfolioV2",
  name: "PortfolioV2",
  data() {
    return {
      seen: false,
    };
  },
};

const Portfolio = {
  template: "#Portfolio",
  name: "Portfolio",
  data() {
    return {
      seen: false,
    };
  },
};

const Rpg = {
  template: "#Rpg",
  name: "Rpg",
  data() {
    return {
      seen: false,
    };
  },
};

// router
const router = new VueRouter({
  routes: [
    {
      path: "/portfolio-v2",
      component: PortfolioV2,
      name: "PortfolioV2",
      seen: "",
    },
    { path: "/portfolio", component: Portfolio, name: "Portfolio" },
    { path: "/rpg", component: Rpg, name: "Rpg" },
  ],
});

const vue = new Vue({
  router,
}).$mount("#hub");
