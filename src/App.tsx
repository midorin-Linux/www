import { ProfileSidebar } from "@/components/profile-sidebar.tsx"

export function App() {
  return (
    <div className="flex min-h-screen">
      <div className="sticky top-0 h-screen w-100 shrink-0 overflow-y-auto border-r border-b-0 bg-sidebar">
        <ProfileSidebar />
      </div>

      <main className="min-w-0 flex-1">
        <div className="mx-auto max-w-3xl space-y-16 px-6 py-16">
          <h1>Hello!</h1>

          <footer className="border-t pt-8">
            <p className="text-center text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} midorin-Linux. All rights
              reserved.
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
