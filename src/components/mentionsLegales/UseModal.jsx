import { useState } from "react";

const UseModal = () => {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }
  return {
    show,
    toggle,
  };
};

export default UseModal;
