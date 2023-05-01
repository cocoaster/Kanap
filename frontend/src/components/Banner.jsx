
function Banner(props) {
  const { image, alt, className, } = props;

  return (
    <div className={`banner ${className}-banner`}>
      <div
        className={`${className} `} alt={alt}
      ></div>
    </div>
  );
}

export default Banner;
