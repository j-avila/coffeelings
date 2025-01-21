// import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { AppContext } from '../../context/appContext';
interface FooterProps {
  title?: string;
  back?: boolean;
  settings?: boolean;
}

const Header = ({ title, back, settings }: FooterProps) => {
  const navigate = useNavigate();
  // const { state } = useContext(AppContext);
  const settingsPos =
    back && title
      ? 'flex items-center justify-between w-[100%] py-2 px-3'
      : 'flex items-center justify-end w-[100%] py-2 px-3';

  return (
    <header className={settingsPos}>
      {back && (
        <i
          className="text-2xl fa-solid fa-chevron-left"
          onClick={() => navigate(-1)}
        />
      )}
      {title && (
        <h1 className="flex justify-center my-4 text-6xl font-yesteryear">
          {title}
        </h1>
      )}
      <div className="flex">
        {settings && (
          <Link to="/settings">
            <i className="text-2xl cursor-pointer fa-solid fa-gear" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
