import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import IdAndPasswordDefaultAddress from "../components/Join/IdAndPasswordDefaultAddress";
import JoinFailAlert from "../components/Join/JoinFailAlert";
import Footer from "../components/Footer";
import "./Join.css";

export default function Join() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [idAndPasswordDefaultAddress, setIdAndPasswordDefaultAddress] =
    useState(true);
  const [failedAlert, setFailedAlert] = useState(false);
  const [goMainFlag, setGomainFlag] = useState(false);

  const alrmOn = () => {
    setFailedAlert(true);
    setTimeout(() => {
      setFailedAlert(false);
    }, 1000);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (goMainFlag) {
      //clean-up : main으로 가기전, state를 사용하는 컴포넌트를 끄기 위해 존재
      setIdAndPasswordDefaultAddress(false);

      setGomainFlag(false); //useNavigate때문에 안씀
      navigate("/main");
    }
  });
  return (
    <>
      <div className="joinMain fullsize">
        {failedAlert && <JoinFailAlert />}
        {idAndPasswordDefaultAddress && (
          <IdAndPasswordDefaultAddress
            id={id}
            setId={setId}
            password={password}
            setPassword={setPassword}
            address={address}
            setAddress={setAddress}
            alrmOn={alrmOn}
            setGomainFlag={setGomainFlag}
          />
        )}
        <Footer />
      </div>
    </>
  );
}
