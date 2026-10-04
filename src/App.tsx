import { useRef, useState } from "react";
import { X } from "lucide-react";
import profileIcon from "./assets/profile_icon.png";
import { useTweetFrame } from "./components/get-fxtwitter.tsx";
import { TweetEmbed } from "./components/tweet-embed.tsx";

function App() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const bubbleClassName =
    "relative rounded-lg border bg-white p-4 before:absolute before:top-6 before:-left-2 before:size-3.5 before:rotate-45 before:border-b before:border-l before:bg-inherit before:content-[' ']";

  const username = "wayokan_beta";
  const { response, loading, error } = useTweetFrame(username);
  const tweet = response?.results?.find((status) => !status.reposted_by);
  return (
    <>
      <main>
        <section className="profile">
          <div className="flex flex-row h-50 items-stretch gap-5">
            <img
              src={profileIcon}
              alt="profile"
              className="h-full w-auto rounded-xl"
            />
            <div className="flex h-full flex-col justify-between gap-4 py-2">
              <div>
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => {
                    dialogRef.current?.showModal();
                    setDialogOpen(true);
                  }}
                  className={`${bubbleClassName} block transition-colors hover:bg-gray-50`}
                >
                  <p className="text-sm whitespace-pre-wrap">
                    {loading
                      ? "Thinking..."
                      : (error ?? tweet?.text ?? "投稿が見つかりませんでした")}
                  </p>
                </button>
              </div>
              <div>
                <p className="text-2xl font-medium tracking-tight">やあさ</p>
                <div className="flex flex-row items-center gap-2">
                  <p className="text-medium text-gray-700">探究型個人開発者</p>
                  <p className="text-sm text-gray-700">he/him</p>
                </div>
                <p className="text-sm text-gray-700">
                  自分でも何ができるかわかりませんが、多分色々できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <dialog
          ref={dialogRef}
          aria-label={`最新のツイート @${username}`}
          onClose={() => setDialogOpen(false)}
          className="m-auto max-h-[90dvh] w-[min(92vw,28rem)] max-w-none overflow-y-auto rounded-xl border border-slate-200 bg-white p-0 text-slate-900 shadow-[0_24px_80px_-16px_rgba(15,23,42,0.28)] backdrop:bg-slate-950/40 backdrop:backdrop-blur-sm"
        >
          <div className="flex min-h-32 flex-col p-2">
            <div className="flex justify-between">
              <p className=" flex text-sm text-gray-700 items-center justify-center ml-1">
                最新のツイート @{username}
              </p>
              <button
                type="button"
                aria-label="ダイアログを閉じる"
                onClick={() => dialogRef.current?.close()}
                className="inline-flex size-7 items-center justify-center rounded-xl text-gray-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>
            <div className="h-px bg-slate-400 mt-2 mb-2" />
            {dialogOpen &&
              (tweet ? (
                <TweetEmbed key={tweet.id} id={tweet.id} username={username} />
              ) : (
                <p role="status" className="text-sm text-gray-700">
                  {loading
                    ? "投稿を読み込み中..."
                    : (error ?? "投稿が見つかりませんでした")}
                </p>
              ))}
          </div>
        </dialog>
      </main>
    </>
  );
}

export default App;
