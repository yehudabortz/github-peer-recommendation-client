import AnonLogo from "../icons/peer-recommendation-logo.svg";
const Logo = (props) => {
  return (
    <img
      src={AnonLogo}
      className={`icon logo ${props.size}`}
      alt="peer recommendation logo"
    />
  );
};

export default Logo;
