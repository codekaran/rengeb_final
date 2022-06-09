import Service from "../components/Service";

const service = (props) => {
  return <Service text={props.content}></Service>;
};
export async function getStaticProps({ locale }) {
  const lang = locale === "nl" ? "nl" : "en";
  let data = {};
  try {
    let res = await fetch(
      "http://localhost:8000/getData?website=rengeb&page=service&lang=" + lang
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
export default service;
