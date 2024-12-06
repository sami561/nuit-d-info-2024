import { useEffect, useState } from "react";
import Card from "./Card"; // Assuming Card is a separate component
import Choice from "./Choice"; // Assuming Choice is a separate component
import TinderCard from "react-tinder-card";
import { leftArrow, rightArrow } from "../assets";
export default function Question({ img, question, onChoice }) {
  const LEFT_SWIPE = "left";
  const RIGHT_SWIPE = "right";

  const [windowWidth, setWindowWidth] = useState(0);

  // Resize handler to adjust window width
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Swipe handler to process swipe direction
  const onSwipe = (direction) => {
    if (direction === LEFT_SWIPE) onChoice(true);
    else if (direction === RIGHT_SWIPE) onChoice(false);
  };

  useEffect(() => {
    // Initial window size check and adding event listener for resizing
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-12">
      {windowWidth > 768 ? (
        // Render layout for larger screens
        <div className="self-center flex flex-row items-center gap-10">
          <Choice text="Vrai" img={leftArrow} click={() => onChoice(true)} />
          <div>
            <TinderCard
              onSwipe={(direction) => {
                onSwipe(direction);
              }}
              preventSwipe={["up", "down"]}
              swipeRequirementType="position"
              swipeThreshold={window.innerWidth * 0.15}
            >
              <Card img={img} text={question} />
            </TinderCard>
          </div>
          <Choice text="Faux" click={() => onChoice(false)} img={rightArrow} />
        </div>
      ) : (
        // Render layout for smaller screens
        <div className="self-center flex flex-col items-center gap-4">
          <div className="flex justify-around">
            <Choice text="Vrai" click={() => onChoice(true)} img={leftArrow} />
            <Choice
              text="Faux"
              click={() => onChoice(false)}
              img={rightArrow}
            />
          </div>
          <div draggable="true">
            <Card img={img} text={question} />
          </div>
        </div>
      )}

      <p className="text-center font-bold text-base-content/60">
        Swipez ou cliquez pour faire votre choix !
      </p>
    </div>
  );
}
