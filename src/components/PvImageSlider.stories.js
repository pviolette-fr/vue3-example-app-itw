import PvImageSlider from "./PvImageSlider.vue";

export default {
  title: "PvImageSlider",
  component: PvImageSlider,
};

const Template = (args) => ({
  components: { PvImageSlider },
  setup() {
    return { args };
  },
  template: '<PvImageSlider v-bind="args" class="w-full" />',
});

export const Default = Template.bind({});
Default.args = {
  images: [
    {
      url: "https://loremflickr.com/640/480/paris",
    },
    {
      url: "https://loremflickr.com/640/480/london",
    },
    {
      url: "https://loremflickr.com/640/480/berlin",
    },
  ],
};
Default.storyName = "PvImageSlider";
