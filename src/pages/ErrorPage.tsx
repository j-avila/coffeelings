import { useRouteError } from 'react-router-dom';
import CoffeeEmpty from '../assets/not_found.svg?react';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex items-center justify-between my-[25%] w-100"
    >
      <section>
        <CoffeeEmpty />
      </section>
      <section>
        <strong className="block mb-5 text-6xl font-yesteryear">Oops!</strong>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText || error?.message}</i>
        </p>
      </section>
    </div>
  );
}
