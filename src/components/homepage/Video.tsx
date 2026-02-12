const Video = () => {
  return (
    <div className="w-full overflow-hidden lg:h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" object-contain w-full lg:h-full opacity-90"
      >
        <source src="/assets/video/epnm-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video
