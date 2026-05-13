import React, { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const targetName = "john doe";
    const targetSymbol = "AAPL";

    console.log("Input Name:", name);
    console.log("Input Symbol:", symbol);

    if (
      name.trim().toLowerCase() === targetName &&
      symbol.trim().toUpperCase() === targetSymbol
    ) {
      console.log("✅ Matched!");
    } else {
      console.log("❌ No match found.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[300px]">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded text-black"
      />
      <input
        type="text"
        placeholder="Enter Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        className="p-2 border rounded text-black"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}

export default SimpleForm;
