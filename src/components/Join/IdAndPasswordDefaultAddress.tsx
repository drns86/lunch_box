import { useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import "./IdAndPasswordDefaultAddress.css";

interface PropTypes {
  id: string;
  password: string;
  address: string;
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  setAddress: (address: string) => void;
  alrmOn: () => void;
  setGomainFlag: (flag: boolean) => void;
}

const SET_USER = gql`
  mutation createPerson(
    $userId: String!
    $password: String!
    $defaultAddress: String!
  ) {
    createPerson(
      input: {
        person: {
          userId: $userId
          password: $password
          defaultAddress: $defaultAddress
        }
      }
    ) {
      clientMutationId
    }
  }
`;

export default function IdAndPasswordDefaultAddress({
  id,
  setId,
  password,
  setPassword,
  address,
  setAddress,
  alrmOn,
  setGomainFlag,
}: PropTypes) {
  const [setUser, { data }] = useMutation(SET_USER, {
    onError: error => {
      alrmOn();
    },
  });

  const join = () => {
    if (id !== "" && password !== "") {
      setUser({
        variables: {
          userId: id,
          password: password,
          defaultAddress: address,
        },
      });
    } else {
      alrmOn();
    }
  };

  useEffect(() => {
    if (data) {
      setGomainFlag(true);
    }
  });

  return (
    <>
      <div className="idAndPasswordDefaultAddress">
        <div className="id form-floating">
          <input
            type="text"
            className="form-control"
            id="idInJoinInput"
            placeholder="아이디"
            onChange={e => setId(e.target.value)}
          />
          <label htmlFor="idInput">아이디</label>
        </div>

        <div className="password form-floating">
          <input
            type="text"
            className="form-control"
            id="passwordInJoinInput"
            placeholder="비밀번호"
            onChange={e => setPassword(e.target.value)}
          />
          <label htmlFor="passwordInJoinInput">비밀번호</label>
        </div>

        <div className="address form-floating">
          <input
            type="text"
            className="form-control"
            id="addressInJoinInput"
            placeholder="기본 배달주소"
            onChange={e => setAddress(e.target.value)}
          />
          <label htmlFor="addressInJoinInput">기본 배달주소</label>
        </div>

        <div className="buttonContainer">
          <div className="d-grid gap-2">
            <button
              className="joinButton btn btn-info"
              type="button"
              onClick={join}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
