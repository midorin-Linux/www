import { ProfileSidebar } from "@/components/profile-sidebar.tsx"
import { TweetFrame } from "@/components/tweet-frame.tsx"
import { Separator } from "@/components/ui/separator.tsx"

export function App() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="w-full border-r-0 border-b bg-sidebar lg:sticky lg:top-0 lg:h-screen lg:w-100 lg:shrink-0 lg:overflow-y-auto lg:border-r lg:border-b-0">
        <ProfileSidebar />
      </div>

      <main className="flex min-h-screen min-w-0 flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-4 py-10 sm:px-6 sm:py-16">
          <div className="w-full max-w-4xl">
            <TweetFrame username="wayokan_beta" />
          </div>
        </div>

        <footer className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
          <Separator className="my-4" />
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} midorin-Linux. All rights
            reserved.
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
