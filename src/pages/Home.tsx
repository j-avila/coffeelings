import { useContext, useEffect } from 'react';
import dayjs from 'dayjs';
import CoffeStatus from '../components/CoffeeStatus';
import Indicator from '../components/Indicator';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { AppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

function App() {
  const { state, setState } = useContext(AppContext);
  const navigate = useNavigate();
  const taste = ['amazing', 'ok', 'tired', 'sad', 'stressed'];

  const handleChange = (name: string, value: string) => {
    setState({ ...state, [name]: value });
  };

  const postRoast = () => {
    const date = dayjs().format('YYYY-MM-DD HH:mm:ss');
    setState({ ...state, date });
    console.log('📬', state);
  };

  useEffect(() => {
    if (!state.user?.token) {
      navigate('/login');
    }
  }, [state?.user]);

  return (
    <main className="mx-[auto]">
      <Header settings />
      <section className="flex flex-col justify-center gap-8">
        <div className="flex items-center justify-between gap-4 row">
          <CoffeStatus state={state.roast} />
          {/* roast */}
          <div>
            <>
              {taste.map((roast) => (
                <Indicator
                  key={roast}
                  state={roast}
                  action={handleChange}
                  isSelected={state.roast === roast}
                />
              ))}
            </>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <div className="m-0 text-center title">
              <span className="barcode">joseavila.dev</span>
              <h2 className="p-0 m-0">choose today’s</h2>
              <h1 className="p-0 m-0 text-8xl font-yesteryear">roast</h1>
            </div>
            <div className="flex justify-center">
              {/* input */}
              <div className="relative p-4 bg-[#D9A17E] w-72 min-h-48 h-[120px] rounded-xl">
                <textarea
                  className="bg-transparent h-[100%] rounded-md outline-none focus:ring-0"
                  name="message"
                  placeholder="How are you feeling today?"
                  onChange={(e) => handleChange('message', e.target.value)}
                ></textarea>
                <button
                  className="absolute p-1 cursor-pointer bottom-2 right-2"
                  onClick={() => postRoast()}
                >
                  <i className="text-2xl fa-solid text-ok fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer date={state.now} />
    </main>
  );
}

export default App;
