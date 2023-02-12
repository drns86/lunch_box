import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Loading from "../components/Login/Loading";
import LoginMain from "../components/Login/LoginMain";
import RunLogin from "../backend/RunLogin";
import LoginFailAlert from "../components/Login/LoginFailAlert";
import { sampleActions } from "../reducers/sampleReducer";
import { useAppDispatch, useAppSelector } from "../store";

export default function Login() {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [passwd, setPasswd] = useState("");
  const [runLogin, setRunLogin] = useState(false);
  const [failedAlarm, setFailedAlarm] = useState(false);

  useEffect(() => {
    if (failedAlarm) {
      setTimeout(() => {
        setFailedAlarm(false);
      }, 1000);
    }
  }, [failedAlarm]);

  //clean-up
  useEffect(() => {
    return () => {
      console.log("클린업");
      setRunLogin(false);
    };
  }, []);

  interface PropTypes {
    sampleData: string;
  }

  const dispatch = useAppDispatch();
  const sample = useAppSelector(state => state.sample.sampleData);

  const login = () => {
    // setRunLogin(true);
    dispatch(sampleActions.changeSampleData("샘플11 324"));
    // dispatch(sampleActions.setDataSingle());
    console.log("데이터", sample);
  };

  const navigate = useNavigate();

  const goMain = () => {
    navigate("main");
  };

  // const offFailedAlarm = () => {
  //   setTimeout(() => {
  //     setFailedAlarm(false);
  //   }, 1000);
  // };

  setTimeout(() => {
    setLoading(false);
  }, 500);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LoginMain
          passwd={passwd}
          id={id}
          setId={setId}
          setPasswd={setPasswd}
          login={login}
        />
      )}
      {failedAlarm && <LoginFailAlert />}
      {runLogin && (
        <RunLogin
          id={id}
          passwd={passwd}
          setRunLogin={setRunLogin}
          setFailedAlarm={setFailedAlarm}
          // offFailedAlarm={offFailedAlarm}
          goMain={goMain}
        />
      )}
    </>
  );
}
