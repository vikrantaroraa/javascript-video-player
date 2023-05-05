# js-video-player

A simple video player made in React.js for the web.

## Installation

Install js-video-player with npm

```bash
npm i js-video-player
```

## Usage

```javascript
import { CustomVideoPlayer } from "js-video-player";

function App() {
  return <CustomVideoPlayer />;
}
```

## Props

> ### :memo: **Note**: All props are optional

- `videoUrl` : string

```
The link of the video that you want to play. By default the video player plays the video hosted at "https://blog.addpipe.com/static/short.mp4"
```

## controls container props

- `controlsVariant` : string
- `controlsContainerStyle` : object

```
The `controlsVariant` prop only takes 2 values `bottom` and `top`. Passing 'top' will place the controls container at the top of video player. Its value is `bottom` by default.

The controls container is the part that you see at the bottom in the <CustomVideoPlayer> component. It contains all the controls i.e. play/pause button, progress bar, volume control and playback speed dropdown.
```

> :memo: **Note:** Please note that passing anything other than `top` or `bottom` to `controlsVariant` prop will result in an error.

## play and pause props

- `UserPlayIcon` : ReactNode
- `UserPauseIcon` : ReactNode
- `playAndPauseStyle` : object

```
The player comes with its own set of play and pause icons. If you want, you can also pass your own play and pause icons using `UserPlayIcon` and `UserPauseIcon` props.
```

> :memo: **Note:** Please note that the props `UserPlayIcon` and `UserPauseIcon` start with capital letter U. This is because you will be passing a react node that can be directly used as a component.

## video duration and progress bar props

- `durationAndProgressBarStyle` : object
- `videoDurationStyle` : object
- `progressBarContainerStyle` : object
- `progressBarStyle` : object

## volume icon and range styles

- `UserVolumeHighIcon`: ReactNode
- `UserVolumeMuteIcon`: ReactNode
- `volumeIconStyle` : object
- `volumeRangeStyle` : object
- `volumeIconAndRangeStyle` : object

```
The player comes with its own set of volume and mute icons. If you want, you can also pass your own volume and mute icons using `UserVolumeHighIcon` and `UserVolumeMuteIcon` props.
```

> :memo: **Note:** Please note that the props `UserVolumeHighIcon` and `UserVolumeMuteIcon` start with capital letter U. This is because you will be passing a react node that can be directly used as a component.

## playback speed select props

- `userPlaybackSpeedOptions`: Array of strings
- `userDefaultSelectedSpeedOption` : string
- `playbackSpeedSelectStyle` : object
- `playbackSpeedSelectOptionsStyle` : object

```
The player comes with its own set of playback speed options. If you want you can also pass your own playback speed options using `userPlaybackSpeedOptions` prop that takes an array of string values where each entry in the array is a playback speed option.

The prop `userDefaultSelectedSpeedOption` is used to determine the default selected option for the playback speed options array that the user provides. Since the video plays at normal speed after loading, the value of this prop should be normal or 1x or 1X or 1 depending on what is the normal speed passed in the options array in `userPlaybackSpeedOptions` prop.

For better understanding, see example below.
```

> :memo: **Note:** As mentioned above the `userDefaultSelectedSpeedOption` prop is used to determine the default selected value for the playback speed options array that the user passes, therefore this becomes a necessary prop when `userPlaybackSpeedOptions` prop is used. If this prop is not passed, then after loading, the video will play at normal speed but the selected speed showing in the dropdown would be the first value in the `userPlaybackSpeedOptions` array.

## passing props to `<CustomVideoPlayer>` component

```javascript
import { CustomVideoPlayer } from "js-video-player";

function App() {
  return (
    <div className="App">
      <CustomVideoPlayer
        videoUrl={
          "https://blog.addpipe.com/static/the-web-is-always-changing.webm"
        }
        controlsVariant={"bottom"}
        controlsContainerStyle={{
          opacity: 0.95,
          height: 25,
          gap: 5,
          border: "1px solid #01da72",
        }}
        playAndPauseStyle={{
          borderRadius: 2,
          color: "#fff",
          fontSize: 16,
          height: "100%",
          width: "6%",
        }}
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
          height: "30%",
          padding: 2,
        }}
        progressBarStyle={{
          backgroundColor: "#fff",
          borderRadius: 5,
        }}
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
```
