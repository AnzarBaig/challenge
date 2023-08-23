
import Flag from "react-world-flags";


const useCountryFlag = (countryCode: string) => {

  return (
    <Flag code= {countryCode} height="20" width="20" fallback={ <span>🌍</span> }/>
  );
};

export default useCountryFlag;
