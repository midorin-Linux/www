import { useEffect, useRef, useState } from "react";

interface XWidgets {
  ready: (callback: (widgets: XWidgets) => void) => void;
  widgets: {
    createTweet: (
      id: string,
      container: HTMLElement,
      options: { dnt: boolean },
    ) => Promise<HTMLElement | undefined>;
  };
}

let widgetsPromise: Promise<XWidgets> | undefined;

function loadWidgets() {
  if (widgetsPromise) return widgetsPromise;

  const existingWidgets = (window as Window & { twttr?: XWidgets }).twttr;
  let script: HTMLScriptElement | undefined;
  widgetsPromise = new Promise<XWidgets>((resolve, reject) => {
    if (existingWidgets?.widgets?.createTweet) {
      existingWidgets.ready(resolve);
      return;
    }

    script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.onload = () => {
      const widgets = (window as Window & { twttr?: XWidgets }).twttr;
      if (widgets) {
        widgets.ready(resolve);
      } else {
        reject(new Error("X widgets are unavailable"));
      }
    };
    script.onerror = () => reject(new Error("X widgets could not be loaded"));
    document.head.append(script);
  }).catch((error: unknown) => {
    script?.remove();
    widgetsPromise = undefined;
    throw error;
  });
  return widgetsPromise;
}

export function TweetEmbed({ id, username }: { id: string; username: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<
    "loading" | "ready" | "script-error" | "tweet-error"
  >("loading");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Give each effect its own target so a late result cannot replace a newer embed.
    const target = document.createElement("div");
    container.append(target);
    let cancelled = false;

    async function embedTweet() {
      let widgets: XWidgets;
      try {
        widgets = await loadWidgets();
      } catch (error) {
        if (!cancelled) {
          console.error("X widget script initialization failed", error);
          setStatus("script-error");
        }
        return;
      }

      if (cancelled) return;
      try {
        const element = await widgets.widgets.createTweet(id, target, {
          dnt: true,
        });
        if (!cancelled) setStatus(element ? "ready" : "tweet-error");
      } catch (error) {
        if (!cancelled) {
          console.error(`X embed creation failed for post ${id}`, error);
          setStatus("tweet-error");
        }
      }
    }

    void embedTweet();

    return () => {
      cancelled = true;
      target.remove();
    };
  }, [id]);

  return (
    <div>
      {status !== "ready" && (
        <p role="status" className="text-sm text-gray-700">
          {status === "loading"
            ? "埋め込みを読み込み中..."
            : status === "script-error"
              ? "Xの埋め込みスクリプトを読み込めませんでした。ダイアログを開き直すと再読み込みします。"
              : "Xから投稿の埋め込みを取得できませんでした"}
        </p>
      )}
      <div ref={containerRef} />
      <a
        href={`https://x.com/${encodeURIComponent(username)}/status/${encodeURIComponent(id)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 flex h-10 w-full items-center justify-center rounded-lg bg-black text-sm text-white transition-colors hover:bg-gray-800"
      >
        Xで投稿を開く
      </a>
    </div>
  );
}
