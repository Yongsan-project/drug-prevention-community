import LinkAtom from "../atoms/Link";

const NavBar = () => {
  const links: { content: string; link: string }[] = [
    { content: "커뮤니티", link: "/community" },
    { content: "자가진단", link: "/selftest" },
  ];

  return (
    <>
      {links.map((item, index) => (
        <LinkAtom content={item.content} routerPage={item.link} key={index} />
      ))}
    </>
  );
};

export default NavBar;
