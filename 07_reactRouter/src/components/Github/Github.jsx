import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();

  //const [data, setData] = useState([]);
  //
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sumanmodak578")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data.public_repos);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 bg-blue-950 text-white p-4 text-3xl rounded-lg">
      Github public Repository: {data.public_repos}
      <img
        src={data.avatar_url}
        alt="Git Picture"
        width={300}
        className="rounded-full"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sumanmodak578");

  return response.json();
};
