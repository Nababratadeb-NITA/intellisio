const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[url('https://pin.it/6OPJ5S3')] flex items-center justify-center h-full w-full mt-12 ">
      {children}
    </div>
  );
};

export default AuthLayout;
