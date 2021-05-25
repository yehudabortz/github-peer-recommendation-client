import AnonLogo from "../icons/anon-logo.svg";
const Logo = (props) => {
  return (
    <img
      src={AnonLogo}
      className={`icon logo ${props.size}`}
      alt="AnonHR Logo"
    />
  );
};

export default Logo;
