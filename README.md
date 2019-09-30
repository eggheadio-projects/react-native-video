<h1 align="center"><a href="https://egghead.io/courses/fundamentals-of-react-native-video">Fundamentals of React Native Video</a></h1>
<p align="center">
    <img src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/133/full/EGH_ReactVideo_Final.png" width="200">
</p>

React Native Video is a community supported video element for React Native. It allows for remote loading of videos and also works with the React Native asset management system to load videos. Having a flexible video component is essential to developing and enhancing your application. Like many React Native elements, the video element is very basic and doesn't ship with anything besides a flexible API. This allows you to develop the exact layout, controls, and custom overlays to match your application.

In this course we'll take a look at a basic setup. Then explore the different ways we can load and show videos. We'll show how to use a few of the custom callbacks to overlay errors and buffering elements. Because there are no controls shipped with react-native-video we'll show how to write custom video controls and animate them when the video has not been interacted with.

Finally we'll cover a few common paradigms found in the wild. Including repeating background cover videos, auto-playing videos when they scroll onto the screen and auto-stopping them when they are scrolled away from.

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Update](#update)
- [React Native Setup](#react-native-setup)
  - [iOS](#ios)
  - [Android](#android)
- [Running the Project](#running-the-project)
  - [iOS](#ios-1)
  - [Android](#android-1)

## Update
Everything being taught in this React Native course is still valid, but there have been architecture changes that have been causing issues for people attempting to learn from it. 

Using the latest version of the react-native-cli I generated a new project. I have created branches for each lesson as I've followed along with them. 

In order for additional react-native packages to work the CocoaPods package manager needs to be installed. 
```
brew install cocoapods
```

In the `/ios` directory run the following
```
pod init
pod install
```

## React Native Setup
Setup instructions taken from React Native's ["getting started" docs.](https://facebook.github.io/react-native/docs/getting-started)

**Install Homebrew if you haven't already**
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

**Run the following commands in a Terminal after installing Homebrew:**
```
brew install yarn
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
```
If you have already installed Node on your system, make sure it is Node 8.3 or newer.

If you have already installed JDK on your system, make sure it is JDK 8 or newer.

**Globally install the React Native CLI** 
```
npm install -g react-native-cli
```

### iOS
**Install Xcode**. The easiest way to do so is to just download it from the Mac App Store

**Make sure to enable the command line tools.** Open Xcode's preferences and navigate to the "Locations" tab. Install the tools by selecting the latest version from the "Command Line Tools" dropdown. 

### Android
**1. Install Android Studio**

[Download and install Android Studio](https://developer.android.com/studio/index.html) and choose a "Custom" setup for an installation type. 

Check the following boxes:
- Android SDK
- Android SDK Platform
- Performance (Intel ® HAXM) [(See here for AMD)](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html)
- Android Virtual Device

Then, click "Next" to install all of these components.


Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

**2. Install the Android SDK**
   
Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 9 (Pie) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:

- Android SDK Platform 28
- Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 28.0.3 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

**3. Configure the ANDROID_HOME environment variable**

The React Native tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` config file:

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Type source `$HOME/.bash_profile` to load the config into your current shell. Verify that ANDROID_HOME has been added to your path by running `echo $PATH`.

**4. Prepare an Android Virtual Device**

Open the "AVD Manager" from within Android Studio. Look for an icon that looks like this:

<p align="center">
    <img width="50" src="https://facebook.github.io/react-native/docs/assets/GettingStartedAndroidStudioAVD.png"/>
</p>

If you have just installed Android Studio, you will likely need to create a new AVD. Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the Pie API Level 28 image.

Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step.

## Running the Project
### iOS
In the root of the project run the following
```
react-native run-ios
```

You can also run the project from directly within Xcode

### Android
In the root of the project run the following
```
react-native run-android
```

You can also run the project from directly within Android Studio