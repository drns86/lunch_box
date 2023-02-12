import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

interface PropTypes {
  id: string;
  passwd: string;
  setRunLogin: (flag: boolean) => void;
  setFailedAlarm: (flag: boolean) => void;
  //   offFailedAlarm: () => void;
  goMain: () => void;
}

const GET_USER_INFO = gql`
  query personByUserId($userId: String!) {
    personByUserId(userId: $userId) {
      password
    }
  }
`;

export default function RunLogin({
  id,
  passwd,
  setRunLogin,
  setFailedAlarm,
  goMain,
}: //   offFailedAlarm,
PropTypes) {
  const { error, loading, data } = useQuery(GET_USER_INFO, {
    variables: { userId: id },
  });
  useEffect(() => {
    if (!loading) {
      if (data.personByUserId === null) {
        //로그인 실패 알람 띄우고 몇초 뒤에 알람이 꺼지고 Run 로그인을 끈다.
        console.log("아이디 틀림");
        setFailedAlarm(true);
        // offFailedAlarm();
        setRunLogin(false);
      } else if (passwd !== data.personByUserId.password) {
        //로그인 실패 알람 띄우고 몇초 뒤에 알람이 꺼지고 Run 로그인을 끈다.
        console.log("패스워드 틀림");
        setFailedAlarm(true);
        // offFailedAlarm();
        setRunLogin(false);
      } else {
        goMain();
      }
    }
  });

  return <></>;
}
