import React from "react";
import Logo from "./Icons/Logo";

export default function NavigationBar() {
  return (
    <div className="flex flex-row p-4 px-8 items-center justify-between w-full">
      {/* Logo */}
      <div className="flex flex-row items-center">
        <Logo className={"size-8"} />
        <a href="/" className="text-xl font-bold">
          Ping!
        </a>
      </div>

      <div className="flex flex-row items-center gap-10">
        <a href="/" className="text-lg">
          Chat
        </a>
        <a href="/" className="text-lg">
          Reporting
        </a>
        <a href="/" className="text-lg">
          IDK
        </a>
      </div>

      <div className="flex flex-row items-center">
        <p className="text-xl">
          Hello, <span className="font-bold">A130233</span>
        </p>
      </div>
    </div>
  );
}
