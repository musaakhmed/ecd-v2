const Video = () => {
  return (
    <div className="w-full overflow-hidden lg:h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" object-contain w-full lg:h-full opacity-75 lg:p-12"
      >
        <source
          src="https://www.espacecultures.be/wp-content/uploads/2023/03/EPNMenimages-new.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video
