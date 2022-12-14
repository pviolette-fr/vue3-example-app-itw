import PvIconButton from "./PvIconButton.vue";

export default {
  title: "PvIconButton",
  component: PvIconButton,
};

const Template = (args) => ({
  components: { PvIconButton },
  setup() {
    return { args };
  },
  template: '<PvIconButton v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  icon: "fa-solid fa-chevron-right",
};
Default.storyName = "PvIconButton";
