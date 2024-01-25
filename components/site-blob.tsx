export function SiteBlob() {
  return (
    <>
      {/* <div className="absolute left-0 right-0 top-0 bottom-0 h-screen bg-orange-900 opacity-70 z-30"></div> */}
      <video
        autoPlay
        loop
        playsInline
        className="absolute inset-0 z-10 aspect-video h-full max-h-screen w-full object-cover"
      >
        <source src="/video/bonfire.mp4" type="video/mp4" />
      </video>
    </>
  )
}
