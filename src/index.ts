import { User } from "./User";
import { Company } from "./Company";

const mapRoot = document.getElementById("map");

const user = new User();
const company = new Company();

const map = new google.maps.Map(mapRoot, {
  zoom: 1,
  center: { lat: 0, lng: 0 },
});
console.log({ user, company, map });
