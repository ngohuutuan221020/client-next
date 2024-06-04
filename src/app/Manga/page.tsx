"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Manga = () => {
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
  const handleImageError = (event: any) => {
    event.target.style.display = "none";
  };
  const handleInput = (event: any) => {
    let input = event.target.value;
    setValue(+input);
  };

  return (
    <div
      className="manga"
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
          <Link href="https://ihentai.vc/midareuchi-1/" target="_blank">
            View Hentai
          </Link>
        </Button>
        <Button>
          <Link href="https://website-video.vercel.app/" target="_blank">
            View JAV
          </Link>
        </Button>
      </div>
      {(index < 1 || index > 5) && (
        <Image src="/NotFound.png" alt="" width={500} height={500} />
      )}
      {index == 1 &&
        Array.from({ length: 61 }).map((item, idx) => {
          let image = idx;
          if (image === 0) {
            return (
              <Image
                key={idx}
                src={`/Midareuchi1/0.jpg`}
                width={500}
                height={500}
                quality={100}
                style={{
                  height: "auto",
                  paddingBottom: "1rem",
                }}
                alt=""
              />
            );
          }
          return (
            <Image
              onError={handleImageError}
              key={idx}
              src={`/Midareuchi1/${image}.jpg`}
              width={1000}
              height={500}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                paddingBottom: "1rem",
              }}
              alt=""
            />
          );
        })}
      {index == 2 &&
        Array.from({ length: 73 }).map((item, idx) => {
          let image = idx;
          return (
            <Image
              onError={handleImageError}
              key={idx}
              src={`/Midareuchi2/${image}.jpg`}
              width={1000}
              height={500}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                paddingBottom: "1rem",
              }}
              alt=""
            />
          );
        })}
      {index == 3 &&
        Array.from({ length: 84 }).map((item, idx) => {
          let image = idx;
          return (
            <Image
              onError={handleImageError}
              key={idx}
              src={`/Midareuchi3/${image}.jpg`}
              width={1000}
              height={500}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                paddingBottom: "1rem",
              }}
              alt=""
            />
          );
        })}
      {index == 4 &&
        Array.from({ length: 54 }).map((item, idx) => {
          let image = idx + 2;
          return (
            <Image
              onError={handleImageError}
              key={idx}
              src={
                image < 10
                  ? `/Midareuchi4/00${image}.jpg`
                  : `/Midareuchi4/0${image}.jpg`
              }
              width={1000}
              height={500}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                paddingBottom: "1rem",
              }}
              alt=""
            />
          );
        })}
      {index == 5 &&
        Array.from({ length: 79 }).map((item, idx) => {
          let image = idx + 3;
          return (
            <Image
              onError={handleImageError}
              key={idx}
              src={
                image < 10
                  ? `/Midareuchi5/00${image}.jpg`
                  : `/Midareuchi5/0${image}.jpg`
              }
              width={1000}
              height={500}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                paddingBottom: "1rem",
              }}
              alt=""
            />
          );
        })}
    </div>
  );
};

export default Manga;
