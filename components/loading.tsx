export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-cyan-400/20 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-cyan-400 rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-cyan-400 font-medium">Loading...</p>
      </div>
    </div>
  )
}
