export default function TitleBanner({
  title,
  description,
  timeAnimationIntro,
  mouseOver,
}) {
  return (
    <div
      className="mt-16 text-center w-6/12"
      style={{
        animation: timeAnimationIntro ? "watch 150ms 2.4s 1 linear " : "",
        width: '60%',
      }}
    >
      <h1
        className="font-black"
        style={{ opacity: mouseOver || timeAnimationIntro ? 0 : 1 }}
      >
        {title}
      </h1>
      <h2 style={{ opacity: mouseOver || timeAnimationIntro ? 0 : 1 }}>
        {description}
      </h2>
    </div>
  );
}
