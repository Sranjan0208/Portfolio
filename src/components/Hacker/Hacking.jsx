import { useEffect, useState } from "react";
// import Loading from "../Loading/Loading";
import HackLoading from "../HackLoading/HackLoading";
import HelloLoading from "../HelloLoading/HelloLoading";
import Hacker from "./Hacker";

const Hacking = () => {
  const [currentLoadingIndex, setCurrentLoadingIndex] = useState(0);
  const [loadingFinished, setLoadingFinished] = useState(false);

  useEffect(() => {
    const loadingSequence = [
      { component: HackLoading, duration: 2000 },
      { component: HelloLoading, duration: 3000 },
    ];

    const showNextLoadingComponent = (index) => {
      if (index < loadingSequence.length) {
        setCurrentLoadingIndex(index);
        setTimeout(() => {
          showNextLoadingComponent(index + 1);
        }, loadingSequence[index].duration);
      } else {
        setLoadingFinished(true);
      }
    };

    showNextLoadingComponent(0);
  }, []);

  if (!loadingFinished) {
    const loadingSequence = [
      { component: HackLoading, duration: 2000 },
      { component: HelloLoading, duration: 3000 },
    ];

    const CurrentLoadingComponent =
      currentLoadingIndex < loadingSequence.length
        ? loadingSequence[currentLoadingIndex].component
        : null;

    return (
      <div>
        {CurrentLoadingComponent ? (
          <CurrentLoadingComponent />
        ) : (
          <div>Not Loading</div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <Hacker />
      </div>
    );
  }
};

export default Hacking;
