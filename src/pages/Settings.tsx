import { useContext } from 'react';
import Header from '@components/Header';
import Button from '@components/Button';
import Footer from '@components/Footer/Footer';
import { useAppContext } from '@/context/AppContext';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '@/services/firebase';

const Settings = () => {
  const navigate = useNavigate();

  const { state, setState } = useAppContext();
  const signin = async () => {
    console.log('🌯', 'burrito!');
  };

  const signout = async () => {
    await signOut(auth);
    setState({ ...state, user: null });
    alert('out !');
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-between w-100 h-[100vh] read-bg">
      <Header title="Settings" back />
      <section>
        <h3 className="font-bold text-center">Font size</h3>
        <div className="flex items-center gap-8">
          <Button
            onClick={() => {
              setState({
                ...state,
                settings: {
                  ...state.settings,
                  fontSize: state.settings.fontSize - 1,
                },
              });
            }}
          >
            <i className="fa-solid fa-minus" />
          </Button>
          <div className="px-4 py-2 bg-white rounded">ABCdef123+=@</div>
          <Button
            onClick={() =>
              setState({
                ...state,
                settings: {
                  ...state.settings,
                  fontSize: state.settings.fontSize + 1,
                },
              })
            }
          >
            <i className="fa-solid fa-plus" />
          </Button>
        </div>
      </section>

      <section className="flex flex-col justify-center align-middle">
        <h3 className="font-bold text-center">Account</h3>
        <Button styles="my-4 px-8" onClick={() => navigate('/signup')}>
          Create account
        </Button>
        <Button styles="my-4 px-8" onClick={() => signin()}>
          Sign in <i className="fa-solid fa-fingerprint" />
        </Button>
        <Button styles="my-4 px-8" onClick={() => signout()}>
          Sign out <i className="fa-solid fa-arrow-right-from-bracket" />
        </Button>
        <h3 className="mt-5 font-bold text-center">Themes</h3>
      </section>
      <Footer />
    </div>
  );
};

export default Settings;
