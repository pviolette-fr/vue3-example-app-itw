import PvSpinner from "./PvSpinner.vue";

export default {
  title: "PvSpinner",
  component: PvSpinner,
};

const Template = (args) => ({
  components: { PvSpinner },
  setup() {
    return { args };
  },
  template: '<PvSpinner v-bind="args" />',
});

export const Default = Template.bind({});
Default.storyName = "PvSpinner";
