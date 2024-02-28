import React from 'react';
import { Link } from 'react-router-dom';

type FooterProps = {
  date?: {
    year: number;
    month: string;
    day: number;
  };
};

const Footer = ({ date }: FooterProps) => {
  return (
    <footer className="flex justify-start px-10 my-10">
      <Link to="/journal">
        <div className="flex flex-col cursor-pointer align">
          <p className="flex items-center gap-1">
            <i className="fa-solid fa-book"></i>
            My journal
          </p>
          {date && (
            <p className="flex items-center gap-2 mt-1 ">
              <strong className="text-3xl font-yesteryear">{date.month}</strong>
              <span>{date.day}</span>
              <span>{date.year}</span>
            </p>
          )}
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
