"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Film = () => {
  const [index, setIndex] = useState(1);

  const [value, setValue] = useState(1);

  const handleClickNext = () => {
    setIndex(index + 1);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleClickPre = () => {
    setIndex(index - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    setIndex(value);
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleInput = (event: any) => {
    let input = event.target.value;
    setValue(+input);
  };

  return (
    <div
      className="film"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          gap: "1rem",
          backgroundColor: "transparent",
        }}
      >
        <Button disabled={index <= 1 ? true : false} onClick={handleClickPre}>
          Previous
        </Button>

        <Button>Chapter {index}</Button>

        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <Input onChange={(e) => handleInput(e)} />
          <Button onClick={scrollToTop}>Enter {value}</Button>
        </div>

        <Button disabled={index >= 5 ? true : false} onClick={handleClickNext}>
          Next
        </Button>

        <ModeToggle />

        <Button>
          <Link href="/Manga">View Manga</Link>
        </Button>

        <Button>
          <Link href="https://website-video.vercel.app/">View JAV</Link>
        </Button>
      </div>
      <video
        src={`/Midareuchi_${index}.mp4`}
        controls
        style={{
          width: "65%",
          height: "65%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Film;
