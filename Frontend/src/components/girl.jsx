import { DotLottiePlayer } from "@dotlottie/react-player";

const GirlAnimation = () => {
  return (
    <div>
      <DotLottiePlayer
        src="https://lottie.host/c9843409-59f7-4373-8398-3e27b7b3aa97/pB8QGX51mX.json"
        background="transparent"
        speed="1"
        style={{ width: "650px", height: "650px" }}
        loop
        autoplay
      />
    </div>
  );
};

export default GirlAnimation;
