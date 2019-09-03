import { useEffect, useState } from "react";

function useHttp(refer, discover) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("rendering...");
    fetch(
      `https://api.themoviedb.org/3/${refer}?api_key=ead55bd575a94d055e5af19545cf3da3&language=en-US&${discover}`
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setData(data);
      });
  }, [refer, discover]);

  return [data, loading];
}
export default useHttp;
