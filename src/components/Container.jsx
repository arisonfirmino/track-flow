/* eslint-disable react/prop-types */

import Card from "./Card";

const Container = ({ children }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center text-white">
      <Card>{children}</Card>
    </main>
  );
};

export default Container;
