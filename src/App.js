import { CustomVideoPlayer } from "./components/CustomVideoPlayer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CustomVideoPlayer
        controlsVariant={"bottom"}
        controlsContainerStyle={{
          opacity: 0.95,
          height: 25,
          gap: 5,
          border: "1px solid #01da72",
        }}
        // play and pause component props start (check how to change width from here only)
        playAndPauseStyle={{
          borderRadius: 2,
          color: "#fff",
          fontSize: 16,
          height: "100%",
          width: "6%",
        }}
        // duration and progress bar component props start
        durationAndProgressBarStyle={{
          height: "100%",
          width: "64%",
        }}
        videoDurationStyle={{
          color: "#fff",
          fontSize: 12,
          fontWeight: 600,
        }}
        progressBarContainerStyle={{
          backgroundColor: "#088a49",
          borderRadius: 5,
          height: "45%",
          padding: 2,
        }}
        progressBarStyle={{
          backgroundColor: "#fff",
          borderRadius: 5,
        }}
        // volume icon and range props start
        volumeIconAndRangeStyle={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "20%",
        }}
        volumeIconStyle={{
          color: "white",
          width: "100%",
        }}
        volumeRangeStyle={{
          accentColor: "#fff",
        }}
        // playback select props start
        userPlaybackSpeedOptions={[
          "0.25x",
          "0.5x",
          "0.75x",
          "1x",
          "1.25x",
          "1.5x",
          "1.75x",
          "2x",
        ]}
        userDefaultSelectedSpeedOption={"1x"}
        playbackSpeedSelectStyle={{
          border: "1px solid #fff",
          borderRadius: 3.5,
          color: "#fff",
          fontSize: 13.3,
          fontWeight: 500,
          backgroundColor: "rgba(0,0,0,0.2)",
          height: "auto",
          width: "10%",
        }}
        playbackSpeedSelectOptionsStyle={{
          color: "#000",
          fontWeight: 400,
        }}
      />
    </div>
  );
}

export default App;
