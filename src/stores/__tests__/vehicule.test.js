import { describe, it, beforeEach, vi, expect, afterEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { fetchVehicules } from "../../services/api";
import { useVehiculesStore } from "../vehicules";

vi.mock("../../services/api");

fetchVehicules.mockResolvedValue({
  results: [
    {
      id: 6275,
      title: "Chausson Flash 07 Clim cellule",
      starting_price: 75,
      currency_used: "EUR",
      review_average: 4.5,
      review_count: 9,
      vehicle_type: "CoachBuilt",
      vehicle_beds: 6,
      vehicle_seats: 5,
      vehicle_location_city: "Serpaize",
      vehicle_location_zipcode: "38200",
      vehicle_owner_first_name: "Alexandre",
      vehicle_owner_language: "FR",
      vehicle_owner_picture_url:
        "https://dtngh3spc2o8h.cloudfront.net/picture/44ba8fd2-aa28-49b1-8b4c-0c3dc1570986?w=100&h=100&fit=crop",
      url: "https://www.yescapa.fr/camping-cars/6275/",
      pictures: [
        {
          id: "ff38c897-1faa-4c27-ab4d-3364cae6a541",
          url: "https://dtngh3spc2o8h.cloudfront.net/picture/ff38c897-1faa-4c27-ab4d-3364cae6a541?w=638&h=426",
        },
      ],
    },
    {
      id: 27229,
      title: "Volkswagen Combi Bay Window Westfalia",
      starting_price: 90,
      currency_used: "EUR",
      review_average: 4.8,
      review_count: 6,
      vehicle_type: "Van",
      vehicle_beds: 4,
      vehicle_seats: 5,
      vehicle_location_city: "Audresselles",
      vehicle_location_zipcode: "62164",
      vehicle_owner_first_name: "Clément",
      vehicle_owner_language: "FR",
      vehicle_owner_picture_url:
        "https://dtngh3spc2o8h.cloudfront.net/picture/8eafe87d-9009-4350-a03f-dfba80182d5c?w=100&h=100&fit=crop",
      url: "https://www.yescapa.fr/camping-cars/27229/",
      pictures: [
        {
          id: "08d9a500-5a67-4e2e-be29-b683413deb66",
          url: "https://dtngh3spc2o8h.cloudfront.net/picture/08d9a500-5a67-4e2e-be29-b683413deb66?w=638&h=426",
        },
      ],
    },
  ],
});

// Expected vehicules state after deserizalization of the mocked api response
const expectVehiculesState = [
  {
    id: 6275,
    title: "Chausson Flash 07 Clim cellule",
    type: "CoachBuilt",
    bedsCount: 6,
    seatsCount: 5,
    location: {
      city: "Serpaize",
      zipcode: "38200",
    },
    owner: {
      firstName: "Alexandre",
      language: "FR",
      pictureUrl:
        "https://dtngh3spc2o8h.cloudfront.net/picture/44ba8fd2-aa28-49b1-8b4c-0c3dc1570986?w=100&h=100&fit=crop",
    },
    price: {
      amount: 75,
      currency: "EUR",
    },
    review: {
      average: 4.5,
      count: 9,
    },
    url: "https://www.yescapa.fr/camping-cars/6275/",
    pictures: [
      {
        id: "ff38c897-1faa-4c27-ab4d-3364cae6a541",
        url: "https://dtngh3spc2o8h.cloudfront.net/picture/ff38c897-1faa-4c27-ab4d-3364cae6a541?w=638&h=426",
      },
    ],
  },
  {
    id: 27229,
    title: "Volkswagen Combi Bay Window Westfalia",
    type: "Van",
    bedsCount: 4,
    seatsCount: 5,
    location: {
      city: "Audresselles",
      zipcode: "62164",
    },
    owner: {
      firstName: "Clément",
      language: "FR",
      pictureUrl:
        "https://dtngh3spc2o8h.cloudfront.net/picture/8eafe87d-9009-4350-a03f-dfba80182d5c?w=100&h=100&fit=crop",
    },
    price: {
      amount: 90,
      currency: "EUR",
    },
    review: {
      average: 4.8,
      count: 6,
    },
    url: "https://www.yescapa.fr/camping-cars/27229/",
    pictures: [
      {
        id: "08d9a500-5a67-4e2e-be29-b683413deb66",
        url: "https://dtngh3spc2o8h.cloudfront.net/picture/08d9a500-5a67-4e2e-be29-b683413deb66?w=638&h=426",
      },
    ],
  },
];

describe("Vehicule store", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("has an initial state representing not vehicules loaded", () => {
    const store = useVehiculesStore();
    expect(store.vehicules).toEqual([]);
    expect(store.vehiculesLoadingError).toBeNull();
    expect(store.vehiculesLoadingState).toEqual("empty");
  });

  describe("loadVehicules action", () => {
    it("Has action loadVehicules that retrieve vehicules from api", async () => {
      const store = useVehiculesStore();

      expect(store.vehiculesLoadingState).toBe("empty");

      const promise = store.loadVehicules();

      expect(fetchVehicules).toBeCalledTimes(1);
      expect(store.vehiculesLoadingState).toBe("loading");
      await promise;
      expect(store.vehiculesLoadingState).toBe("loaded");

      expect(store.vehicules).toEqual(expectVehiculesState);
    });
  });

  describe("getVehicule action", () => {
    it("retrieve vehicule that load vehicules if not already loaded, then return vehicule with the given id", async () => {
      const store = useVehiculesStore();

      const vehiculeId6275 = await store.getVehicule(6275);

      expect(fetchVehicules).toBeCalledTimes(1);
      expect(vehiculeId6275).toEqual(expectVehiculesState[0]);

      const vehiculeId27229 = await store.getVehicule(27229);
      // Api should not have been called again since vehicule are already loaded
      expect(fetchVehicules).toBeCalledTimes(1);
      expect(vehiculeId27229).toEqual(expectVehiculesState[1]);
    });
    it("return undefined if not vehicule matching the given id exists", async () => {
      const store = useVehiculesStore();

      const result = await store.getVehicule(-1);
      expect(result).toBeUndefined();
    });
  });
});
