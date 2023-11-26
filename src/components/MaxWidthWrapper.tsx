import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => {
  return (
    <main className="mx-auto w-full max-w-screen-2xl px-2.5 md:px-20">
      {children}
    </main>
  );
};

export default MaxWidthWrapper;
