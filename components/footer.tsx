export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold">
              <span className="text-white">Ilyesse</span>
              <span className="text-cyan-400">.dev</span>
            </span>
          </div>

          <div className="text-gray-400 text-sm">&copy; {currentYear} Ilyesse El Adaoui. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
