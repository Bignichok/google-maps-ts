import { faker } from "@faker-js/faker";

class User {
  name: string;
  location: {
    lat: string;
    lng: string;
  };

  constructor(name: string, location: { lat: string; lng: string }) {
    this.name = name;
    this.location = location;
  }
}

const user = new User(faker.name.firstName(), {
  lat: faker.address.latitude(),
  lng: faker.address.longitude(),
});
