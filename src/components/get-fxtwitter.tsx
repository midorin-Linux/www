import { useEffect, useState } from "react";

interface FxPhoto {
  url: string;
  width: number;
  height: number;
  altText?: string;
}

interface FxStatus {
  type: string;
  id: string;
  url: string;
  text: string;
  created_at: string;
  created_timestamp: number;
  likes: number;
  reposts: number;
  quotes: number;
  replies: number;
  author: {
    name: string;
    screen_name: string;
    avatar_url: string;
  };
  media?: {
    photos?: FxPhoto[];
  };
  reposted_by?: unknown;
}

interface FxStatusesResponse {
  code: number;
  results: FxStatus[];
}

export function useTweetFrame(username: string) {
  const [state, setState] = useState({
    username,
    response: null as FxStatusesResponse | null,
    loading: true,
    error: null as string | null,
  });

  useEffect(() => {
    let cancelled = false;

    fetch(
      `https://api.fxtwitter.com/2/profile/${encodeURIComponent(username)}/statuses?count=20`,
    )
      .then((res) => res.json() as Promise<FxStatusesResponse>)
      .then((response) => {
        if (cancelled) return;
        setState({ username, response, loading: false, error: null });
      })
      .catch(() => {
        if (!cancelled) {
          setState({
            username,
            response: null,
            loading: false,
            error: "投稿を取得できませんでした",
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  if (state.username !== username) {
    return { response: null, loading: true, error: null };
  }

  return state;
}
