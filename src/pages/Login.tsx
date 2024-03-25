import { useContext } from 'react';
import Header from '@components/Header';
import { AppContext } from '@context/appContext';
import SignForm from '@components/SignForm';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '@services/firebase';
import { toast } from 'react-toastify';

const LogIn = () => {
  const { state, setState } = useContext(AppContext);
  const navigate = useNavigate();

  const handlerLogIn = async (form) => {
    const { email, password } = form;
    const notify = (msg: string) => toast(msg);

    try {
      const resp = await signInWithEmailAndPassword(auth, email, password);
      const { user } = resp;
      const newUser = {
        email: user.email,
        uid: user.uid,
        token: user.accessToken,
        displayName: user.displayName,
      };

      if (state && user) {
        const newState = { ...state, user: newUser };
        setState(newState);
        notify(`Welcome back ${newUser.email}!`);
        navigate('/');
      }
    } catch (err) {
      console.log(err);
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-100 h-[100vh] read-bg">
      <Header title="Log in" back />
      <SignForm action={handlerLogIn} />
    </div>
  );
};

export default LogIn;
