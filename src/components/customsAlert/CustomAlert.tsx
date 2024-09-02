import { useEffect, useState } from "react";
import { ICustomAlerts } from "./CustomAlert.interface";

const CustomAlert: React.FC<ICustomAlerts> = ({ message, duration }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  if (!visible) {
    return null;
  }
  return <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-lime-400 text-white py-2 px-8 rounded-md">{message}</div>;
};
export default CustomAlert;
