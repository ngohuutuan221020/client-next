// "use client";

import PageAPI from "@/app/api/page";
// import { ModeToggle } from "@/components/mode-toggle";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// import Link from "next/link";
import React from "react";

const Film = () => {
  // const [index, setIndex] = useState(1);
  // const [value, setValue] = useState(1);

  // const handleClickNext = () => {
  //   setIndex(index + 1);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // const handleClickPre = () => {
  //   setIndex(index - 1);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // const isBrowser = () => typeof window !== "undefined";

  // function scrollToTop() {
  //   setIndex(value);
  //   if (!isBrowser()) return;
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }

  // const handleInput = (event) => {
  //   let input = event.target.value;
  //   setValue(+input);
  // };

  return (
    <div className="film">
      {/* <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          top: 0,
          left: 0,
          right: 0,
          gap: "1rem",
          backgroundColor: "transparent",
        }}
      >
        <div
          className="Control"
          style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
        >
          <Button disabled={index <= 1} onClick={handleClickPre}>
            Previous
          </Button>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <Input onChange={(e) => handleInput(e)} />
            <Button onClick={scrollToTop}>Enter {value}</Button>
          </div>
          <Button disabled={index >= 5} onClick={handleClickNext}>
            Next
          </Button>
        </div>
        <div
          className="Action"
          style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
        >
          <Button>Chapter {index}</Button>
          <ModeToggle />
        </div>

        <div
          className="ViewMore"
          style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
        >
          <Button>
            <Link href="/Manga" target="_blank">
              View Manga
            </Link>
          </Button>
          <Button>
            <Link href="https://website-video.vercel.app/" target="_blank">
              View JAV
            </Link>
          </Button>
        </div>
      </div> */}
      <div
        className="container-video"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <PageAPI />
        {/* <video
          src={`/Video/Midareuchi${index}.mp4`}
          controls
          style={{
            height: "85vh",
          }}
        /> */}
      </div>
    </div>
  );
};

export default Film;
