const Card = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full border-solid border-primary bg-background md:h-[600px] md:min-h-0 md:w-[400px] md:overflow-auto md:rounded-3xl md:border [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  );
};

export default Card;
