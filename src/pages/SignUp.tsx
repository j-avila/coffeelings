import { useContext } from 'react';
import Header from '../components/Header';
import { AppContext } from '../context/appContext';
import SignForm from '../components/SignForm';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';

const SignUp = () => {
  const { state, setState } = useContext(AppContext);
  const navigate = useNavigate();

  const signUp = async (form) => {
    const { email, password } = form;
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const newUser = {
      email: user.email,
      uid: user.uid,
      token: user.accessToken,
      displayName: user.displayName,
    };

    console.log('👤', newUser);

    if (state && user) {
      const newState = { ...state, user: newUser };
      setState(newState);
      navigate('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-100 h-[100vh] read-bg">
      <Header title="Sign up" back />
      <SignForm action={signUp} />
    </div>
  );
};

export default SignUp;
