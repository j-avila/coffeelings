import './styles.css';

const CoffeeSpinner = () => {
  return (
    <>
      <div className="cup">
        <div className="coffee"></div>
      </div>
      <div className="smoke"></div>
      <p className="txt">Please wait...</p>
    </>
  );
};

export default CoffeeSpinner;
