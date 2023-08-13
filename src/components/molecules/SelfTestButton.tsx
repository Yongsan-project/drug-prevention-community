import LinkedButton from "../atoms/LinkedButton";

const SelfTestButton = () => {
  const styles = {
    fontSize: 18,
    backgroundColor: "#D71313",
    padding: 20,
    color: "#EEEDED",
    fontWeight: "bold",
    margin: 10,
  };

  return (
    <LinkedButton
      isAbsolute={true}
      content="마약중독 자가진단"
      routerPage="/selftest"
      styles={styles}
    />
  );
};

export default SelfTestButton;
