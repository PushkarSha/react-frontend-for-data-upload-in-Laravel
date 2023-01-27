import React from "react";
import Link from "next/link";

export default function Layouts( {children} ){

  return(
    <div>
      <Link href="/">
        <span className="mx-2 font-semibold">Home</span>
      </Link>
      <Link href="/upload">
        <span className="mx-2 font-semibold">Upload</span>
      </Link>

      <div className="flex h-screen">
        <div className="m-auto">
            {children}
        </div>
      </div>
      
    </div>
  )
}