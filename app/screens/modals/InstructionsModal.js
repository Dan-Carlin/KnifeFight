/*
InstructionsModal - Modal that activates when a game is started.
*/

// External libraries
import React from "react";

// Layouts
import InstructionsModalLandscapeLayout from "./layouts/InstructionsModalLandscapeLayout";
import InstructionsModalPortraitLayout from "./layouts/InstructionsModalPortraitLayout";

// Components
import KFHowToModalOneLayout from "./layouts/KFHowToModalOneLayout";
import KFHowToModalTwoLayout from "./layouts/KFHowToModalTwoLayout";
import KFHowToModalThreeLayout from "./layouts/KFHowToModalThreeLayout";

// Resources
import useCounter from "../../hooks/useCounter";
import useOrientation from "../../hooks/useOrientation";

function InstructionsModal({ onConfirm }) {
  const orientation = useOrientation();

  const howToScreens = [
    <KFHowToModalOneLayout />,
    <KFHowToModalTwoLayout />,
    <KFHowToModalThreeLayout />,
  ];

  const { count, decreaseCount, increaseCount } = useCounter(0);

  const pageLabel = count + 1 + "/" + howToScreens.length;

  const actions = {
    pageArrowLeft: decreaseCount,
    pageArrowRight: increaseCount,
    gotItButton: onConfirm,
  };

  const values = {
    pageLayout: howToScreens[count],
    count: count,
    pageLabel: pageLabel,
    howToScreens: howToScreens,
  };

  return (
    <>
      {orientation.isPortrait && (
        <InstructionsModalPortraitLayout actions={actions} values={values} />
      )}
      {orientation.isLandscape && (
        <InstructionsModalLandscapeLayout actions={actions} values={values} />
      )}
    </>
  );
}

export default InstructionsModal;
