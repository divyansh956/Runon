"use client";
import React, { useState } from "react";

const ColorPalette = () => {
  const [colors, setColors] = useState([
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "pink",
  ]);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggingIndex(index);
  };

  const handleDrop = (index: number) => {
    const newColors = [...colors];
    if (draggingIndex === null) return;
    [newColors[draggingIndex], newColors[index]] = [
      newColors[index],
      newColors[draggingIndex],
    ];
    setColors(newColors);
    setDraggingIndex(null);
  };

  const handleColorChange = (index: number) => {
    const newColor = prompt("Enter a color:");
    if (newColor) {
      const newColors = [...colors];
      newColors[index] = newColor;
      setColors(newColors);
    }
  };

  return (
    <>
      <h1>Color Palette</h1>
      <div className="flex">
        {colors.map((color, index) => (
          <div
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            onClick={() => handleColorChange(index)}
            style={{ backgroundColor: color }}
            className="w-16 h-16 m-2 rounded cursor-move"
          />
        ))}
      </div>
    </>
  );
};

export default ColorPalette;
