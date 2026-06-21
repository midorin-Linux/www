import { ProfileSidebar } from "@/components/profile-sidebar.tsx"

export function App() {
  return (
    <div className="flex min-h-svh">
      <div className="bg-sidebar sticky top-0 h-screen w-100 shrink-0 overflow-y-auto border-r border-b-0">
        <ProfileSidebar />
      </div>
    </div>
  )
}

export default App
