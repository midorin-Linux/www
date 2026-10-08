import { useRef, useState } from "react";
import { X } from "lucide-react";
import profileIcon from "./assets/profile_icon.png";
import { useTweetFrame } from "./components/get-fxtwitter.tsx";
import { TweetEmbed } from "./components/tweet-embed.tsx";

const MAX_TWEET_LENGTH = 100;

function truncateTweetText(text: string): string {
  const characters = Array.from(text);
  return characters.length > MAX_TWEET_LENGTH
    ? `${characters.slice(0, MAX_TWEET_LENGTH - 3).join("")}...`
    : text;
}

function App() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const bubbleClassName =
    "relative rounded-lg border bg-white before:absolute before:top-6 before:-left-2 before:size-3.5 before:rotate-45 before:border-b before:border-l before:bg-inherit before:content-[' ']";

  const username = "midorin_proj";
  const { response, loading, error } = useTweetFrame(username);
  const tweet = response?.results?.find((status) => !status.reposted_by);

  return (
    <>
      <main className="mx-8 mt-8">
        <section className="profile">
          <div className="flex flex-row h-65 items-stretch gap-5">
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
                  className={`${bubbleClassName} flex flex-col transition-colors px-4 py-3 gap-1 hover:bg-gray-50`}
                >
                  <p className="text-sm whitespace-pre-wrap text-start">
                    {loading
                      ? "Thinking..."
                      : (error ??
                        (tweet?.text
                          ? truncateTweetText(tweet.text)
                          : "投稿が見つかりませんでした"))}
                  </p>
                  <p className="flex text-xs font-light text-slate-700 underline underline-offset-4 decoration-slate-400 justify-end">
                    クリックで詳細を表示→
                  </p>
                </button>
              </div>
              <div>
                <div className="flex flex-row items-center gap-2">
                  <p className="text-2xl font-medium tracking-tight">やあさ</p>
                  <nav className="flex gap-1">
                    <a
                      href="https://x.com/midorin_proj"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="Static Badge X"
                        src={`https://img.shields.io/badge/Twitter-%40midorin__proj-white?logo=X`}
                      />
                    </a>
                    <a
                      href="https://github.com/midorin-Linux"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="Static Badge HuggingFace"
                        src="https://img.shields.io/badge/GitHub-midorin--Linux-white?logo=github"
                      />
                    </a>
                    <a
                      href="https://huggingface.co/midorin-Linux"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="Static Badge HuggingFace"
                        src="https://img.shields.io/badge/Hugging%20Face-midorin--Linux-white?labelColor=gold&logo=huggingface&logoColor=white"
                      />
                    </a>
                  </nav>
                </div>
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
