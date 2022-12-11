import VehiculeCard from "./VehiculeCard.vue";

export default {
  title: "VehiculeCard",
  component: VehiculeCard,
};

const Template = (args, { argTypes }) => ({
  components: { VehiculeCard },
  setup() {
    return { args };
  },
  template: '<VehiculeCard v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  title: "Chausson Flash 07 Clim cellule",
  price: {
    amount: 75,
    currency: "EUR",
  },
  locationCity: "Bordeaux",
  seatsCount: 5,
  bedsCounts: 2,
  ratingAverage: 4.7,
  pictureUrl:
    "https://dtngh3spc2o8h.cloudfront.net/picture/ff38c897-1faa-4c27-ab4d-3364cae6a541?w=638&h=426",
};
