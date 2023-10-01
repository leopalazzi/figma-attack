import '../styles/ui.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function App() {
  // const textbox = useRef<HTMLInputElement>(undefined);
  const [onBoardingDone, setOnBoardingDone] = useState(false);
  const navigate = useNavigate();

  // function handleClick() {
  // }

  // const countRef = useCallback((element: HTMLInputElement) => {
  //   if (element) element.value = '5';
  //   textbox.current = element;
  // }, []);

  // const onCreate = () => {
  //   const count = parseInt(textbox.current.value, 10);
  //   parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*');
  // };

  // const onCancel = () => {
  //   parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  // };

  // useEffect(() => {
  //   parent.postMessage({ pluginMessage: { type: 'check-onboarding' } }, '*');
  // }, []);

  // const onClickAction = () => {
  //   parent.postMessage({ pluginMessage: { type: 'onboarding-done' } }, '*');
  // };

  useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, onBoardingStatus } = event.data.pluginMessage;
      if (type === 'onboarding-status') {
        console.log(`Figma Says: ${onBoardingStatus}`);
        setOnBoardingDone(onBoardingStatus)
      }
    };
  }, []);

  useEffect(()=>{
    if(!onBoardingDone)
    {
      navigate("/onboarding/1");
    }
    else{
      navigate("/home");
    }
  },[onBoardingDone])

  return (
    <>
    
    </>
  );
}

export default App;
