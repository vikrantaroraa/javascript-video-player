import React from "react";
// import styles from "src/components/reusable/DefaultDurationAndProgressBarComponent/index.module.css";
import styles from "./index.module.css";

const DefaultDurationAndProgressBarComponent = ({
  videoDurationStyle,
  videoProgressInSeconds,
  videoDuration,
  progressBarContainerStyle,
  videoProgress,
  progressBarStyle,
  seekVideo,
  seekVideoOnTabFocus,
  durationAndProgressBarStyle,
  controlsVariantArray,
  controlsVariant,
}) => {
  return (
    <div
      className={styles["duration-and-progress-bar"]}
      style={{
        ...durationAndProgressBarStyle,
        ...controlsVariantArray[controlsVariant]
          .durationAndProgressBarVariantStyle,
      }}
    >
      <div className={styles["duration-container"]} style={videoDurationStyle}>
        {videoProgressInSeconds} / {videoDuration}
      </div>

      <div
        role="progressbar"
        tabIndex={"0"}
        onKeyDown={(event) => seekVideoOnTabFocus(event)}
        onClick={(event) => seekVideo(event)}
        className={styles["progress-bar-container"]}
        style={progressBarContainerStyle}
      >
        <div
          className={styles["progress"]}
          style={{
            height: controlsVariant.includes("vertical")
              ? `${videoProgress}%`
              : "100%",
            width:
              controlsVariant.includes("bottom") ||
              controlsVariant.includes("top")
                ? `${videoProgress}%`
                : "100%",
            ...progressBarStyle,
          }}
        ></div>
      </div>
    </div>
  );
};

export default DefaultDurationAndProgressBarComponent;
