"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type props1 = {
  incrementMoney: () => void;
};

type props2 = {
  decrementMoney: () => void;
};

const Parent = () => {
  const [money, setMoney] = useState<number>(0);

  const incrementMoney = () => setMoney(money + 1000);
  const decrementMoney = () => setMoney(money - 500);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold mb-4">Money: {money}</h1>
      <Child1 incrementMoney={incrementMoney} />
      <Child2 decrementMoney={decrementMoney} />
    </div>
  );
};

const Child1 = ({ incrementMoney }: props1) => (
  <Button onClick={incrementMoney}>Increase Money</Button>
);

const Child2 = ({ decrementMoney }: props2) => (
  <Button onClick={decrementMoney}>Decrease Money</Button>
);

export default Parent;
