import { useState, useEffect } from "react";
import axios from "axios";

const cachedImages = new Map<string, string>();
export const useCachedImage = (uri: string) => {
  const [cachedBlob, setCachedBlob] = useState<string | undefined>(undefined);
  const [isLoading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    if (!uri) {
      return;
    }

    const result = cachedImages.get(uri);

    if (result) {
      setCachedBlob(result);
      return;
    }

    (async () => {
      let blob: string;
      try {
        const { data } = await axios.get(uri);
        blob = data.image;
      } catch (error) {
        try {
          const { data } = await axios.get(uri);
          blob = data.image;
        } catch (error) {
          if (uri.startsWith("http")) {
            setCachedBlob(uri);
          }
          setIsloading(false);
          return;
        }
      }

      cachedImages.set(uri, blob);
      setCachedBlob(blob);
      setIsloading(false);
    })();
  }, [uri, setCachedBlob, setIsloading]);

  return { cachedBlob, isLoading };
};
