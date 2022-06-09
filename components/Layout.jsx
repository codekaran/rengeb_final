import Header from "./Header";
import Footer from "./Footer";
const Layout = (props) => {
  return (
    <>
      <Header></Header>
      {props.children}
      <Footer props={props}></Footer>
    </>
  );
};

export default Layout;
