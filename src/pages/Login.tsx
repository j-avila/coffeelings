import { useEffect } from 'react';
import Header from '@components/Header';
import { useAppContext } from '@/context/AppContext';
import SignForm from '@components/SignForm';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '@services/firebase';
import { toast } from 'react-toastify';

interface LoginForm {
  email: string;
  password: string;
}

interface NewUser {
  email: string | null;
  uid: string;
  token: string;
  displayName: string | null;
}

const LogIn = () => {
  const { state, setState } = useAppContext();
  const navigate = useNavigate();

  const handlerLogIn = async (form: LoginForm): Promise<void> => {
    const { email, password } = form;
    const notify = (msg: string, type: 'success' | 'error'): any =>
      toast[type](msg);

    try {
      const resp = await signInWithEmailAndPassword(auth, email, password);
      const { user } = resp;

      const newUser: NewUser = {
        email: user.email,
        uid: user.uid,
        token: user.accessToken,
        displayName: user.email,
      };

      if (newUser.token) {
        const newState = { ...state, user: newUser };
        setState(newState);
        notify(`Welcome back ${newUser.email}!`, 'success');
      }
    } catch (err) {
      console.log(err);
      notify('Invalid credentials', 'error');
    }
  };

  useEffect(() => {
    if (state?.user) {
      console.log('logged', state.user);
      navigate('/');
    }
  }, [state?.user, navigate]);

  return (
    <div className="flex flex-col items-center justify-start w-100 h-[100vh] read-bg">
      <Header title="Log in" back />
      <SignForm action={handlerLogIn} />
    </div>
  );
};

export default LogIn;
