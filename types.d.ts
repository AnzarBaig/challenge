type SignupWithin1Hour = {
  datetime: string;
  totalSignups: number;
};

interface UserData {
  email: string;
  friendInvited: number;
  country: {
      name: string;
      code: string;
  };
}

type TrafficData = {
  source: string;
  traffic: number;
  topCity: {
      city: string;
      count: number;
  };
};

type SignUpLocation = {
  country: string;
  country_code: string;
  signupCount: number;
  topCity: {
      city: string;
      signupCount: number;
  };
};