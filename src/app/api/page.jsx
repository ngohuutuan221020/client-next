import React from "react";

export const getServerSideProps = async () => {
  const res = await fetch("https://server-manga-five.vercel.app/api", {
    method: "GET",
  });

  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
};

const PageAPI = ({ data }) => {
  return (
    <>
      {data
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item) => {
          let url = `https://drive.google.com/file/d/${item.id}/preview`;
          return (
            <div
              key={item.id}
              style={{
                height: "100vh",
                width: "100%",
              }}
            >
              <h4
                style={{
                  color: "blue",
                  textAlign: "center",
                }}
              >
                {item.name}
              </h4>
              <iframe
                src={url}
                width="100%"
                height="100%"
                allow="autoplay"
              ></iframe>
            </div>
          );
        })}
    </>
  );
};

export default PageAPI;
