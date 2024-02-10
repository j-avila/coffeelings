import { useState } from 'react';
import dayjs from 'dayjs';
import { getNowObj } from '../uitls/date';
import CoffeStatus from '../components/CoffeeStatus';
import Indicator from '../components/Indicator';

function App() {
  const [state, setState] = useState({
    roast: 'ok',
    message: undefined,
    date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    now: getNowObj(),
  });

  const taste = ['amazing', 'ok', 'tired', 'sad', 'stressed'];

  const handleChange = (name: string, value: string) => {
    setState({ ...state, [name]: value });
  };

  const postRoast = () => {
    const date = dayjs().format('YYYY-MM-DD HH:mm:ss');
    setState({ ...state, date });
    console.log('📬', state);
  };

  return (
    <main className="max-w-[320px] mx-[auto]">
      <header className="flex justify-end gap-4 py-4">
        <i className="text-lg fa-solid fa-user" />
        <i className="text-lg fa-solid fa-gear" />
      </header>
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
            <div className="flex">
              {/* input */}
              <div className="relative p-4 bg-[#D9A17E] w-72 min-h-48 h-[120px] rounded-xl">
                <textarea
                  className="bg-transparent h-[100%] rounded-md outline-none focus:ring-0"
                  name="message"
                  placeholder="How are you feeling today?"
                  onChange={(e) => handleChange('message', e.target.value)}
                ></textarea>
                <button
                  className="absolute p-1 bottom-2 right-2"
                  onClick={() => postRoast()}
                >
                  <i className="text-2xl fa-solid text-ok fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex justify-start my-10">
        <a className="flex flex-col cursor-pointer align" href="/calendar">
          <p className="flex items-center gap-1">
            <i className="fa-solid fa-book"></i>
            My journal
          </p>
          <p className="flex items-center gap-2 mt-1 ">
            <strong className="text-3xl font-yesteryear">
              {state.now.month}
            </strong>
            <span>{state.now.day}</span>
            <span>{state.now.year}</span>
          </p>
        </a>
      </footer>
    </main>
  );
}

export default App;
