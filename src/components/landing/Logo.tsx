const LOGO_URL = "https://cdn.poehali.dev/projects/00b48ea9-6036-45e2-b9e8-7b33e17c233f/files/034d6a5c-4b4c-4775-9ac4-ed8f266df33c.jpg"

export default function Logo() {
  return (
    <div className="fixed top-6 left-8 z-40 flex items-center gap-3">
      <img src={LOGO_URL} alt="СтройПроДом" className="w-10 h-10 rounded-sm object-cover" />
      <span className="text-white font-bold text-lg tracking-widest uppercase">СтройПроДом</span>
    </div>
  )
}
