// import { useState } from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import "./LoginMain.css";
import { sampleActions } from "../../reducers/sampleReducer";
import { useAppDispatch, useAppSelector } from "../../store";

interface PropTypes {
  id: string;
  passwd: string;
  setId: (id: string) => void;
  setPasswd: (passwd: string) => void;
  login: () => void;
}

export default function LoginMain({
  id,
  passwd,
  setId,
  setPasswd,
  login,
}: PropTypes) {
  const dispatch = useAppDispatch();
  let sample = useAppSelector(state => state.sample.sampleData);

  const test = () => {
    // setRunLogin(true);
    dispatch(sampleActions.changeSampleData("샘플3"));
    // dispatch(sampleActions.setDataSingle());
  };
  console.log("데이터", sample);

  return (
    <>
      <div className="loginMain fullsize">
        <section className="idAndPasswd">
          <div className="id form-floating">
            <input
              type="text"
              className="form-control"
              id="idInput"
              placeholder="아이디"
              onChange={e => setId(e.target.value)}
            />
            <label htmlFor="idInput">아이디</label>
          </div>

          <div className="passwd form-floating">
            <input
              type="password"
              className="form-control"
              id="passwdInput"
              placeholder="비밀번호"
              onChange={e => setPasswd(e.target.value)}
            />
            <label htmlFor="passwdInput">비밀번호</label>
          </div>

          <div className="buttonContainer">
            <div className="d-grid gap-2">
              <button
                onClick={login}
                className="loginButton btn btn-info"
                type="button"
              >
                로그인
              </button>
              <button
                onClick={test}
                className="loginButton btn btn-info"
                type="button"
              >
                테스트{sample}
              </button>
            </div>
          </div>
        </section>

        <section className="wannaJoin">
          <span>혹시 조교도시락이 처음이신가요?</span>
          <Link to="./join">회원가입</Link>
        </section>
        <Footer />
      </div>
    </>
  );
}
