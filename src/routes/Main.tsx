import Header from "../components/Main/Header";
import Content from "../components/Main/Content";
import OrderComplete from "../components/Main/OrderComplete";
import OrderCanceled from "../components/Main/OrderCanceled";
import Footer from "../components/Footer";

interface PropTypes {
  location?: {
    state: {
      idFromLogin: any;
    };
  };
}

export default function Main(props: PropTypes) {
  console.log(props);
  return (
    <>
      <h1>환영합니다</h1>
    </>
  );
}

const id = "assistant";
