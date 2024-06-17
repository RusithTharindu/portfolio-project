"use client";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="container-styles"
    >
      {children}
    </div>
  );
};

export default Container;
