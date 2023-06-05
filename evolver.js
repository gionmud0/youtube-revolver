// Assuming we have a video frame element with the ID "video-frame"
const videoFrame = document.getElementById("video-frame");

// Add a mouseover event listener to the video frame element
// This will trigger when the user hovers over the video frame
videoFrame.addEventListener("mouseover", () => {
  // Unmute the video when the user hovers over the video frame
  videoFrame.unmute();
});

// Assuming we have a button element with the ID "fullscreen-button" and a video element with the ID "video"
const fullscreenButton = document.getElementById("fullscreen-button");
const video = document.getElementById("video");

// Add a click event listener to the fullscreen button element
fullscreenButton.addEventListener("click", () => {
  // Check if the video is currently in fullscreen mode
  if (document.fullscreenElement) {
    // If the video is in fullscreen mode, rotate it 180 degrees
    video.style.transform = "rotate(180deg)";
  }
});

// This code enables revolve/rotate functionality on fullscreen mode

// listen for fullscreen change event
document.addEventListener("fullscreenchange", function () {
  // if in fullscreen mode, add event listeners to enable rotation
  if (document.fullscreenElement) {
    // add mousemove event listener to document
    document.addEventListener("mousemove", rotateVideo);
    // add touchmove event listener to document
    document.addEventListener("touchmove", rotateVideo);
  } else {
    // remove event listeners if not in fullscreen mode
    document.removeEventListener("mousemove", rotateVideo);
    document.removeEventListener("touchmove", rotateVideo);
  }
});

// function to rotate video
function rotateVideo(event) {
  const video = document.querySelector("video"); // get current video element
  const width = window.innerWidth; // get window width
  const height = window.innerHeight; // get window height
  const mouseX = event.clientX || event.touches[0].clientX; // get x position of mouse/touch
  const mouseY = event.clientY || event.touches[0].clientY; // get y position of mouse/touch
  const rotateX = ((mouseY / height) - 0.5) * 20; // calculate x-axis rotation angle
  const rotateY = ((mouseX / width) - 0.5) * 20; // calculate y-axis rotation angle
  video.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`; // apply rotation to video
}


// Define a function to check the rotation capabilities of the device
function checkRotationSupport() {
  // Check if the 'orientation' property is supported in the device's screen object
  if ('orientation' in screen) {
    return true; // Rotation is supported
  } else {
    return false; // Rotation is not supported
  }
}

// Define a function to handle rotation changes
function handleRotationChange() {
  // Get the current orientation of the device
  var currentOrientation = window.orientation;
  
  // Check if the current orientation is portrait
  if (currentOrientation === 0 || currentOrientation === 180) {
    // Device is currently in portrait mode
    console.log("Device is in portrait mode");
  } else {
    // Device is currently in landscape mode
    console.log("Device is in landscape mode");
  }
}

// Add an event listener to detect rotation changes
window.addEventListener("orientationchange", handleRotationChange);

// Call the function to check if rotation is supported on this device
var rotationSupported = checkRotationSupport();

// If rotation is supported, log a message to the console
if (rotationSupported) {
  console.log("Rotation is supported on this device");
} else {
  console.log("Rotation is not supported on this device");
}


# // Explanation: The code defines two functions - checkRotationSupport and handleRotationChange. The checkRotationSupport function checks whether the device supports rotation by checking if the 'orientation' property is supported in the screen object. The handleRotationChange function is called when a rotation event occurs, and determines whether the device is currently in portrait or landscape mode by checking the orientation value in the window object.
