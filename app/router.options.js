export default {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behaviour: "smooth",
      };
    }

    return {
      left: 0,
      top: 0,
      behaviour: "smooth",
    };
  },
};
