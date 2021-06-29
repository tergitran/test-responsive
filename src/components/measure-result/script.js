export default {
  name: "MeasureResult",
  props: {
    result: {
      type: Object,
      default: function() {
        return {
          value: 26.5,
          unit: "kg/m2",
          isWarning: false,
        };
      },
    },
  },
};
