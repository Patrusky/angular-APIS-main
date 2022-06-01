export interface User {
  id: string;
  username: string;
  name:  {
    firstname: string,
    lastname: string,
  };
  email: string;
  password: string;
  address:{
    city: string,
    street: string,
    number: number,
    zipcode: string,
    geolocation:{
        lat: string,
        long: string,
      }
  };
  phone: string;
}
export interface CreateUserDTO extends Omit<User, 'id'>  {}
