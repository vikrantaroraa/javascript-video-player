import React from "react";
import DefaultPlayAndPauseComponent from "../reusable/DefaultPlayAndPauseComponent";
import DefaultDurationAndProgressBarComponent from "../reusable/DefaultDurationAndProgressBarComponent";
import DefaultVolumeComponent from "../reusable/DefaultVolumeComponent";
import DefaultPlaybackSpeedComponent from "../reusable/DefaultPlaybackSpeedComponent";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
const CustomVideoPlayer = ({
  videoUrl = "https://blog.addpipe.com/static/short.mp4",

  // controls container props
  controlsVariant = "bottom",
  controlsContainerStyle,

  // play and pause props
  UserPlayIcon,
  UserPauseIcon,
  playAndPauseStyle,
  UserPlayAndPauseComponent,

  // video duration and progress bar props
  progressBarStyle,
  videoDurationStyle,
  progressBarContainerStyle,
  durationAndProgressBarStyle,
  UserDurationAndProgressBarComponent,

  // volume range props
  UserVolumeHighIcon,
  UserVolumeMuteIcon,
  volumeIconStyle,
  volumeRangeStyle,
  volumeIconAndRangeStyle,
  UserVolumeComponent,

  // playback speed select props
  UserPlaybackSpeedComponent,
  userPlaybackSpeedOptions,
  userDefaultSelectedSpeedOption,
  playbackSpeedSelectStyle,
  playbackSpeedSelectOptionsStyle,

  // user custom component prop
  UserCustomComponent,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoVolumeBeforeMute, setVideoVolumeBeforeMute] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoProgressInSeconds, setVideoProgressInSeconds] = useState("0:00");
  const video = useRef();
  const volumeRangeInput = useRef();
  const playbackSpeedOptions = [
    "0.25",
    "0.5",
    "0.75",
    "Normal",
    "1.25",
    "1.5",
    "1.75",
    "2",
  ];

  const controlsVariantArray = {
    // If you change the variant names, remember to update the progress bar code
    // that checks for the variant names for calculating width
    bottom: {
      controlsContainerStyle: {
        width: "100%",
        bottom: 0,
        left: 0,
      },
      playAndPauseVariantStyle: {
        height: "100%",
        width: "6%",
      },
      durationAndProgressBarVariantStyle: {
        height: "100%",
        width: "64%",
      },
      volumeIconAndRangeVariantStyle: {
        height: "100%",
        width: "20%",
      },
      volumeIconVariantStyle: {
        width: "20%",
      },
      volumeRangeInputContainerVariantStyle: {
        width: "80%",
      },
      volumeRangeVariantStyle: {
        appearance: "slider-horizontal",
        width: "100%",
      },
      playbackSelectVariantStyle: {
        padding: "0 5px",
        height: "100%",
        width: "10%",
      },
    },
    top: {
      controlsContainerStyle: {
        width: "100%",
        top: 0,
        left: 0,
      },
      playAndPauseVariantStyle: {
        height: "100%",
        width: "6%",
      },
      durationAndProgressBarVariantStyle: {
        height: "100%",
        width: "64%",
      },
      volumeIconAndRangeVariantStyle: {
        height: "100%",
        width: "20%",
      },
      volumeIconVariantStyle: {
        width: "20%",
      },
      volumeRangeInputContainerVariantStyle: {
        width: "80%",
      },
      volumeRangeVariantStyle: {
        appearance: "slider-horizontal",
        width: "100%",
      },
      playbackSelectVariantStyle: {
        padding: "0 5px",
        height: "100%",
        width: "10%",
      },
    },
    verticalLeft: {
      controlsContainerStyle: {
        flexDirection: "column",
        height: "100%",
        width: "28px",
        left: 0,
      },
      playAndPauseVariantStyle: {
        height: "10%",
        width: "100%",
      },
      durationAndProgressBarVariantStyle: {
        width: "40%",
        height: "55%",
        flexDirection: "column",
      },
      volumeIconAndRangeVariantStyle: {
        width: "100%",
        height: "25%",
        flexDirection: "column-reverse",
      },
      volumeIconVariantStyle: {
        height: "20%",
      },
      volumeRangeInputContainerVariantStyle: {
        height: "80%",
      },
      volumeRangeVariantStyle: {
        appearance: "slider-vertical",
        height: "100%",
      },
      playbackSelectVariantStyle: {
        padding: 0,
        height: "10%",
        width: "100%",
      },
    },
    verticalRight: {
      controlsContainerStyle: {
        flexDirection: "column",
        height: "100%",
        width: "28px",
        right: 0,
      },
      playAndPauseVariantStyle: {
        height: "10%",
        width: "100%",
      },
      durationAndProgressBarVariantStyle: {
        width: "40%",
        height: "55%",
        flexDirection: "column",
      },
      volumeIconAndRangeVariantStyle: {
        width: "100%",
        height: "25%",
        flexDirection: "column-reverse",
      },
      volumeIconVariantStyle: {
        height: "20%",
      },
      volumeRangeInputContainerVariantStyle: {
        height: "80%",
      },
      volumeRangeVariantStyle: {
        appearance: "slider-vertical",
        height: "100%",
      },
      playbackSelectVariantStyle: {
        padding: 0,
        height: "10%",
        width: "100%",
      },
    },
  };

  const toggleVolume = () => {
    if (!isMuted) {
      setVideoVolumeBeforeMute(video.current.volume.toFixed(2));
      video.current.muted = true;
      video.current.volume = 0;
      volumeRangeInput.current.value = 0;
    } else {
      video.current.muted = false;
      video.current.volume = videoVolumeBeforeMute;
      volumeRangeInput.current.value = videoVolumeBeforeMute * 10;
    }
    setIsMuted(!isMuted);
  };

  const changeVolume = (event) => {
    const volume = event.target.value;
    video.current.volume = 0.1 * volume;
    if (volume < 1) {
      setIsMuted(true);
    } else if (volume >= 1) {
      setIsMuted(false);
    }
  };

  const changePlaybackSpeed = (event) => {
    let playbackRate = event.target.value;
    if (playbackRate.includes("x") || playbackRate.includes("X")) {
      playbackRate = playbackRate.slice(0, -1);
      console.log(playbackRate);
    }
    if (playbackRate === "Normal") {
      playbackRate = 1;
    }
    video.current.playbackRate = playbackRate;
  };
  const resetVariables = () => {
    setIsPlaying(false);
  };

  const seekVideo = (event) => {
    const progressBarContainer = event.target.getBoundingClientRect();
    const totalWidth = progressBarContainer.width;
    const width = event.clientX - progressBarContainer.left; //x position within the element.
    const percent_complete = (width / totalWidth) * 100;
    const totalVideoDuration = video.current.duration;
    const seekToTime = (percent_complete * totalVideoDuration) / 100;
    video.current.currentTime = seekToTime;
  };

  const seekVideoOnTabFocus = (event) => {
    if (event.key === "ArrowLeft") {
      video.current.currentTime = video.current.currentTime - Number(5);
      return;
    }

    if (event.key === "ArrowRight") {
      video.current.currentTime = video.current.currentTime + Number(5);
      return;
    }
  };

  const calculateVideoProgress = () => {
    if (!isNaN(video.current.duration)) {
      const videoCurrentTime = video.current.currentTime;
      var percent_complete = videoCurrentTime / video.current.duration;
      const progress = percent_complete * 100;
      setVideoProgress(progress);
      // setVideoProgressInSeconds(videoCurrentTime.toFixed(0));

      // calculate video time
      const minutes = Math.floor(video.current.currentTime / 60);
      const seconds = Math.floor(video.current.currentTime - minutes * 60);
      const minuteValue = minutes < 10 ? `0${minutes}` : minutes;
      const secondValue = seconds < 10 ? `0${seconds}` : seconds;

      const videoProgressInMinutesAndSeconds = `${minuteValue}:${secondValue}`;
      setVideoProgressInSeconds(videoProgressInMinutesAndSeconds);
    }
  };

  const calculateVideoDuration = () => {
    if (!isNaN(video.current.duration)) {
      const minutes = Math.floor(video.current.duration / 60);
      const seconds = Math.floor(video.current.duration - minutes * 60);
      const minuteValue = minutes < 10 ? `0${minutes}` : minutes;
      const secondValue = seconds < 10 ? `0${seconds}` : seconds;

      const videoDurationInMinutesAndSeconds = `${minuteValue}:${secondValue}`;
      setVideoDuration(videoDurationInMinutesAndSeconds);
    }
  };

  useEffect(() => {
    calculateVideoDuration();
  }, []);

  const playAndPauseVideo = () => {
    if (!isPlaying) {
      video.current.play();
    } else {
      video.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      playAndPauseVideo();
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["video-player-and-controls-container"]}>
        <div className={styles["player-container"]} onKeyDown={onKeyDown}>
          <video
            tabIndex={0}
            aria-label="Video Player"
            onLoadedMetadata={calculateVideoDuration}
            onTimeUpdate={calculateVideoProgress}
            onEnded={resetVariables}
            onClick={playAndPauseVideo}
            ref={video}
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
        <div
          className={styles["controls-container"]}
          style={{
            ...controlsContainerStyle,
            ...controlsVariantArray[controlsVariant].controlsContainerStyle,
          }}
        >
          {UserPlayAndPauseComponent ? (
            <UserPlayAndPauseComponent
              UserPlayIcon={UserPlayIcon}
              UserPauseIcon={UserPauseIcon}
              isPlaying={isPlaying}
              playAndPauseVideo={playAndPauseVideo}
              playAndPauseStyle={playAndPauseStyle}
              controlsVariantArray={controlsVariantArray}
              controlsVariant={controlsVariant}
            />
          ) : (
            <DefaultPlayAndPauseComponent
              UserPlayIcon={UserPlayIcon}
              UserPauseIcon={UserPauseIcon}
              isPlaying={isPlaying}
              playAndPauseVideo={playAndPauseVideo}
              playAndPauseStyle={playAndPauseStyle}
              controlsVariantArray={controlsVariantArray}
              controlsVariant={controlsVariant}
            />
          )}
          {UserDurationAndProgressBarComponent ? (
            <UserDurationAndProgressBarComponent
              seekVideo={seekVideo}
              seekVideoOnTabFocus={seekVideoOnTabFocus}
              videoProgressInSeconds={videoProgressInSeconds}
              videoDuration={videoDuration}
              videoProgress={videoProgress}
              progressBarStyle={progressBarStyle}
              videoDurationStyle={videoDurationStyle}
              progressBarContainerStyle={progressBarContainerStyle}
              durationAndProgressBarStyle={durationAndProgressBarStyle}
            />
          ) : (
            <DefaultDurationAndProgressBarComponent
              seekVideo={seekVideo}
              seekVideoOnTabFocus={seekVideoOnTabFocus}
              videoProgressInSeconds={videoProgressInSeconds}
              videoDuration={videoDuration}
              videoProgress={videoProgress}
              progressBarStyle={progressBarStyle}
              videoDurationStyle={videoDurationStyle}
              progressBarContainerStyle={progressBarContainerStyle}
              durationAndProgressBarStyle={durationAndProgressBarStyle}
              controlsVariantArray={controlsVariantArray}
              controlsVariant={controlsVariant}
            />
          )}
          {UserVolumeComponent ? (
            <UserVolumeComponent
              isMuted={isMuted}
              toggleVolume={toggleVolume}
              ref={volumeRangeInput}
              changeVolume={changeVolume}
              controlsVariantArray={controlsVariantArray}
              controlsVariant={controlsVariant}
              UserVolumeHighIcon={UserVolumeHighIcon}
              UserVolumeMuteIcon={UserVolumeMuteIcon}
              volumeIconStyle={volumeIconStyle}
              volumeRangeStyle={volumeRangeStyle}
              volumeIconAndRangeStyle={volumeIconAndRangeStyle}
            />
          ) : (
            <DefaultVolumeComponent
              toggleVolume={toggleVolume}
              isMuted={isMuted}
              ref={volumeRangeInput}
              controlsVariantArray={controlsVariantArray}
              controlsVariant={controlsVariant}
              changeVolume={changeVolume}
              UserVolumeHighIcon={UserVolumeHighIcon}
              UserVolumeMuteIcon={UserVolumeMuteIcon}
              volumeIconStyle={volumeIconStyle}
              volumeRangeStyle={volumeRangeStyle}
              volumeIconAndRangeStyle={volumeIconAndRangeStyle}
            />
          )}
          {UserPlaybackSpeedComponent ? (
            <UserPlaybackSpeedComponent
              userPlaybackSpeedOptions={userPlaybackSpeedOptions}
              userDefaultSelectedSpeedOption={userDefaultSelectedSpeedOption}
              changePlaybackSpeed={changePlaybackSpeed}
              controlsVariantArray={controlsVariantArray}
              controlsVariant={controlsVariant}
              playbackSpeedOptions={playbackSpeedOptions}
              playbackSpeedSelectStyle={playbackSpeedSelectStyle}
              playbackSpeedSelectOptionsStyle={playbackSpeedSelectOptionsStyle}
            />
          ) : (
            <DefaultPlaybackSpeedComponent
              playbackSpeedOptions={playbackSpeedOptions}
              changePlaybackSpeed={changePlaybackSpeed}
              userPlaybackSpeedOptions={userPlaybackSpeedOptions}
              userDefaultSelectedSpeedOption={userDefaultSelectedSpeedOption}
              controlsVariantArray={controlsVariantArray}
              controlsVariant={controlsVariant}
              playbackSpeedSelectStyle={playbackSpeedSelectStyle}
              playbackSpeedSelectOptionsStyle={playbackSpeedSelectOptionsStyle}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export { CustomVideoPlayer };
