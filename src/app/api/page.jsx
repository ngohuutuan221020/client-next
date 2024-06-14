const PageAPI = async () => {
  const res = await fetch(
    "https://server-manga-five.vercel.app/api",
    { method: "GET" },
    { next: { revalidate: 0 } }
  );

  const data = await res.json();

  return (
    <>
      {data.data
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((data) => {
          let url = `https://drive.google.com/file/d/${data.id}/preview`;
          return (
            <>
              <div
                key={data.id}
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
                  {data.name}
                </h4>
                <iframe
                  src={url}
                  width="100%"
                  height="100%"
                  allow="autoplay"
                ></iframe>
              </div>
            </>
          );
        })}
    </>
  );
};

export default PageAPI;
