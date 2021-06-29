export default {
  name: "BaseTabBoxContent",
  props: {
    tabList: {
      type: Array,
      default: function() {
        return [];
      },
    },
    type: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {};
  },
};
