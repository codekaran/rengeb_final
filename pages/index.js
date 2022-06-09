import Home from "../components/Home";

export default function index(props) {
  return <Home text={props.content}></Home>;
}
export async function getStaticProps({ locale }) {
  const lang = locale === "nl" ? "nl" : "en";
  let data = {};
  try {
    let res = await fetch(
      "http://localhost:8000/getData?website=rengeb&page=home&lang=" + lang
    );
    res = await res.json();
    // console.log(res);
    data = JSON.parse(res.data);
    data["path"] = "";
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      content: data,
    },
    revalidate: 1,
  };
}
