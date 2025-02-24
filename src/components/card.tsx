export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-[100px] m-[10px] shadow-lg border border-gray-300 flex justify-center items-center">
      {children}
    </div>
  );
};
