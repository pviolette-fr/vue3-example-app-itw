/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faChair,
  faBed,
  faWeightScale,
  faGlobe,
  faDog,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export function setUpVueFontAwesome(vueApp) {
  library.add(faChair);
  library.add(faBed);
  library.add(faWeightScale);
  library.add(faGlobe);
  library.add(faDog);
  library.add(faChevronLeft);
  library.add(faChevronRight);

  vueApp.component("font-awesome-icon", FontAwesomeIcon);
}
