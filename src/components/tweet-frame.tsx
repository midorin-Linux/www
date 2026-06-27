import { useEffect, useState } from "react"

interface FxPhoto {
  url: string
  width: number
  height: number
  altText?: string
}

interface FxStatus {
  type: string
  id: string
  url: string
  text: string
  created_at: string
  created_timestamp: number
  likes: number
  reposts: number
  quotes: number
  replies: number
  author: {
    name: string
    screen_name: string
    avatar_url: string
  }
  media?: {
    photos?: FxPhoto[]
  }
  reposted_by?: unknown
}

interface FxStatusesResponse {
  code: number
  results: FxStatus[]
}

interface TweetFrameProps {
  username: string
}

export function TweetFrame({ username }: TweetFrameProps) {
  const [tweet, setTweet] = useState<FxStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    fetch(
      `https://api.fxtwitter.com/2/profile/${encodeURIComponent(username)}/statuses?count=20`
    )
      .then((res) => res.json() as Promise<FxStatusesResponse>)
      .then((data) => {
        if (cancelled) return
        const latest = data.results?.find((status) => !status.reposted_by)
        setTweet(latest ?? null)
        setError(null)
        setLoading(false)
      })
      .catch(() => {
        if (!cancelled) {
          setError("投稿を取得できませんでした")
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [username])

  if (loading) {
    return (
      <div className="rounded-lg border p-4 text-sm text-muted-foreground">
        読み込み中...
      </div>
    )
  }

  if (error || !tweet) {
    return (
      <div className="rounded-lg border p-4 text-sm text-muted-foreground">
        {error ?? "投稿が見つかりませんでした"}
      </div>
    )
  }

  return (
    <a
      href={tweet.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border p-4 transition-colors hover:bg-accent/50"
    >
      <div className="flex items-center gap-2">
        <img
          src={tweet.author.avatar_url}
          alt={tweet.author.name}
          className="h-10 w-10 rounded-full"
        />
        <div className="text-sm">
          <p className="font-medium">{tweet.author.name}</p>
          <p className="text-muted-foreground">@{tweet.author.screen_name}</p>
        </div>
      </div>
      <p className="mt-3 text-sm whitespace-pre-wrap">{tweet.text}</p>
      {tweet.media?.photos && tweet.media.photos.length > 0 && (
        <div
          className={`mt-3 grid gap-1 overflow-hidden rounded-lg ${
            tweet.media.photos.length === 1
              ? "grid-cols-1"
              : tweet.media.photos.length === 2
                ? "grid-cols-2"
                : tweet.media.photos.length === 3
                  ? "grid-cols-2"
                  : "grid-cols-2"
          }`}
        >
          {tweet.media.photos.map((photo, i) => (
            <img
              key={i}
              src={photo.url}
              alt={photo.altText ?? ""}
              className={`max-w-sm object-cover rounded-lg ${
                tweet.media!.photos!.length === 3 && i === 0
                  ? "row-span-2"
                  : ""
              }`}
            />
          ))}
        </div>
      )}
      <p className="mt-3 text-xs text-muted-foreground">{tweet.created_at}</p>
    </a>
  )
}
