export const IconWithShadow = ({ src, alt, className, onClick }) => {
  return (
    <button
      className={`shadow-default p-2 w-fit rounded-xl flex items-center justify-center bg-white ${className}`}
      onClick={onClick}
    >
      <img src={src} alt={alt} />
    </button>
  );
};
