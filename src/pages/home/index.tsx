import React, { useState } from "react";
import Button from "../../components/buttons/Button";
import CustomAlert from "../../components/customsAlert/CustomAlert";

const Home: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <div id="home" className="py-8">
      <h2 className="text-2xl font-bold mb-4">Home Page</h2>
      <p>This is the home page content.</p>
      <Button label="Click Me!" onClick={handleClick} />
      {showAlert && <CustomAlert message="Buttom Clicked !" duration={2000} />}
    </div>
  );
};
export default Home;
