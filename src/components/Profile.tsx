import AuthContext from "context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";
import { useContext } from "react";
import { toast } from "react-toastify";

const onSignOut = async () => {
  const auth = getAuth(app);
  await signOut(auth);
  try {
    toast.success("로그아웃 되었습니다.");
  } catch (error: any) {
    toast.success(error);
    console.log(error);
  }
};

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className='profile__box'>
      <div className='flex__box-lg'>
        <div className='profile__image'></div>
        <div>
          <div className='profile__email'>{user?.email}</div>
          <div className='profile__name'>{user?.displayName || "사용자"}</div>
        </div>
      </div>

      <div role='presentation' className='profile__logout' onClick={onSignOut}>
        로그아웃
      </div>
    </div>
  );
}
