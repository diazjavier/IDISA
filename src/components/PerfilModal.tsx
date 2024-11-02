"use client"
import { useState } from "react";

export default function PerfilModal(props: any) {
  const [open2, setOpen2] = useState(true);
 
  return (

    <div
      onClick={() => setOpen2(false)}
      className={`fixed inset-0 flex justify-center items-center transition-colors 
        ${open2 ? "visible bg-black/20" : "invisible"}`}
    >
      <div className="bg-white">{props.children}</div>
    </div>
  );
}
