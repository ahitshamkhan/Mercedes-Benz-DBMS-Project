import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getMessages, sendMessage } from '../api/chat'

const CONVERSATIONS = [
  { id: 1, name: 'Alexander Sterling', badge: 'VIP', tag: 'Sales', unread: 0, active: true, lastMsg: 'I would like to inquire about the Maybach S-Class availability for next Tuesday.', time: '2m ago', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjOM58RFMotngOCNSXtgAqtn4vkFsDRNtN4cBu98MekQQGA220bODKypgd7vkYJjSDDjb9DFvQEKVcVHQ9cnL_80rE9IiwLppo5N8BmhN1HibI6db_rvfyUlJNgYqbb_vgYFHB4yfHI5-nf9i4Lovl8A50oGZf9qFv3cyOsWFsO1h7OvbTqmrMPq1mIGUv4vp2ZFaIIMcBNfJkYbbKFqfSnwQfo1K1GhSKf8TGTmsBmP0OFF0O1MX4UsqsOCnx-TWB6EZve5CuNRE' },
  { id: 2, name: 'Elena Rodriguez', badge: null, tag: 'Service', unread: 3, active: false, lastMsg: 'When is the scheduled service for my EQS completed?', time: '14m ago', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuuMtUbym6irXZL9rAwUuwcqv-zkCa6JklMGdcNQppZYdIXqwIV37uJMZfUl4Fy-BKCvZiJ0smmAj7BXNXmE-Q3boBO1i6GIDDp_H78sgKlt8VJ0lI5G3Ze4kmwER2m4IdvQwzVVikFyI1RdQO5uf2BpedJwNTlaOSRJmfkzQ1_xLwKtHLOr9B-V3f1LF-T0Vfh6PyFDcHgC8IC0VdtZpPt2W3pq47zbj4FFpdxdGqkP-D2OzCgw4VHhg8TuOa5yTY-YtEXnlcyps' },
  { id: 3, name: 'Julian Voss', badge: null, tag: null, unread: 0, active: false, lastMsg: 'Thank you for the update. I will confirm the time tomorrow.', time: '1h ago', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvcXYHPbkzbwWFWH38nOyW2UxKhMIiASKLfZhoXQORz3Aq4a4wYmDWHeEXceoIbyyL6n0GszXRIMYBzykAkFoAMxDDDC6MWTFZUaukVgDuYSbuskcvK5dDzLRpzLjcPWhVXzSiOZuYQGJawT6RxT4aoOvzqq1z7ajbohvLgq05aFleEHAei1OsBcnOOCaMoSabhj5wBEIzqx4YMnVWQsbtL2ROZXPfnNaywt9AR6yH_rY5oP889JCdYjXKpoAS5xDloNXkQTZ7NGc' },
]

const THREAD_MESSAGES = [
  { id: 1, sender: 'customer', text: 'Good morning. I am interested in the new Maybach S-Class. Do you have a black/obsidian edition available for a test drive at the downtown showroom next week?', time: '10:42 AM' },
  { id: 2, sender: 'admin', text: 'Good morning Mr. Sterling. It is a pleasure to assist you. We currently have a bespoke Obsidian Black Maybach S 580 in our downtown inventory. I can certainly arrange a private viewing and test drive for you.', time: '10:45 AM' },
  { id: 3, sender: 'customer', text: 'That sounds perfect. Tuesday at 2:00 PM would work best for my schedule. Can you confirm the location?', time: '10:48 AM' },
]

export default function AdminChat() {
  const { logout } = useAuth()
  const [activeConvo, setActiveConvo] = useState(1)
  const [messages, setMessages] = useState(THREAD_MESSAGES)
  const [input, setInput] = useState('')
  const [searchConvo, setSearchConvo] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    const newMsg = { id: Date.now(), sender: 'admin', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    setMessages(prev => [...prev, newMsg])
    setInput('')
    try { sendMessage(input) } catch {}
  }

  const handleKeyDown = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }
  const activeCustomer = CONVERSATIONS.find(c => c.id === activeConvo)
  const filteredConvos = CONVERSATIONS.filter(c => c.name.toLowerCase().includes(searchConvo.toLowerCase()))

  return (
    <div className="bg-zinc-950 text-white text-sm min-h-screen flex flex-col overflow-hidden">
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <Link to="/" className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E] text-xl">star</span>
          <span className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-zinc-400 hover:text-amber-400 text-xs uppercase tracking-widest" to="/admin">Dashboard</Link>
          <Link className="text-zinc-400 hover:text-amber-400 text-xs uppercase tracking-widest" to="/admin/cars">Cars</Link>
          <Link className="text-amber-400 border-b border-amber-400 pb-1 text-xs uppercase tracking-widest" to="/admin/chat">Chat</Link>
        </nav>
        <div className="flex items-center gap-6">
          <span className="text-amber-400 text-xs uppercase tracking-widest">Admin Panel</span>
          <button className="text-zinc-400 hover:text-white text-xs" onClick={logout}>Sign Out</button>
        </div>
      </header>

      <main className="flex-grow pt-20 flex overflow-hidden" style={{ height: 'calc(100vh - 80px)' }}>
        <aside className="w-full md:w-[400px] bg-zinc-950 border-r border-amber-400/10 flex flex-col flex-shrink-0">
          <div className="p-6 border-b border-[#C8A97E]/10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-amber-400 text-xl tracking-wide">Concierge</h2>
              <span className="bg-[#C8A97E]/20 text-[#C8A97E] text-[10px] px-2 py-0.5 rounded-full font-bold tracking-widest">LIVE</span>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">search</span>
              <input className="w-full bg-[#0D0D14] border border-[#C8A97E]/15 py-2 pl-10 pr-4 text-sm text-white focus:ring-0 focus:border-[#C8A97E] placeholder:text-zinc-600" placeholder="Search conversations..." value={searchConvo} onChange={(e) => setSearchConvo(e.target.value)} />
            </div>
          </div>
          <div className="flex-grow overflow-y-auto">
            {filteredConvos.map(c => (
              <div key={c.id} className={`p-6 cursor-pointer transition-all border-b border-[#C8A97E]/5 ${activeConvo === c.id ? 'bg-[#C8A97E]/5 border-l-2 border-l-[#C8A97E]' : 'hover:bg-[#111118]'} ${!c.active && !c.unread ? 'opacity-70' : ''}`} onClick={() => setActiveConvo(c.id)}>
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-sm bg-[#111118] border border-[#C8A97E]/20 overflow-hidden"><img className="w-full h-full object-cover" src={c.img} alt={c.name} /></div>
                    {c.active && <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#050508] rounded-full"></div>}
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className={`font-bold text-sm ${activeConvo === c.id ? 'text-white' : 'text-zinc-300'}`}>{c.name}</h4>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {c.unread > 0 && <div className="w-5 h-5 bg-[#C8A97E] text-black text-[10px] flex items-center justify-center rounded-full font-bold">{c.unread}</div>}
                        <span className="text-[10px] text-zinc-500">{c.time}</span>
                      </div>
                    </div>
                    <p className={`text-xs line-clamp-1 mb-2 ${c.unread ? 'text-[#C8A97E] font-medium' : 'text-zinc-400'}`}>{c.lastMsg}</p>
                    <div className="flex gap-2">
                      {c.badge && <span className="text-[9px] px-1.5 py-0.5 border border-[#C8A97E]/30 text-[#C8A97E] rounded uppercase">{c.badge}</span>}
                      {c.tag && <span className="text-[9px] px-1.5 py-0.5 border border-zinc-700 text-zinc-500 rounded uppercase">{c.tag}</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className="flex-grow flex flex-col bg-[#050508]">
          <div className="h-20 px-8 flex justify-between items-center border-b border-amber-400/10 bg-zinc-950/80 backdrop-blur z-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-sm border border-[#C8A97E]/20 overflow-hidden"><img className="w-full h-full object-cover" src={activeCustomer?.img} alt="" /></div>
              <div><h3 className="font-bold text-white text-sm">{activeCustomer?.name}</h3><p className="text-[10px] text-[#C8A97E] tracking-widest uppercase">Verified Member</p></div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-amber-400/30 text-amber-400 text-xs uppercase tracking-widest hover:bg-amber-400 hover:text-black transition-all">LOGS</button>
            </div>
          </div>

          <div className="flex-grow overflow-y-auto p-12 space-y-8">
            <div className="flex justify-center"><span className="text-[10px] text-zinc-600 uppercase tracking-widest px-4 py-1 border border-zinc-800/50 rounded-full">Today</span></div>
            {messages.map(msg => msg.sender === 'customer' ? (
              <div key={msg.id} className="flex gap-4 max-w-2xl">
                <div className="flex-shrink-0 w-8 h-8 rounded-sm overflow-hidden border border-zinc-800"><img className="w-full h-full object-cover" src={activeCustomer?.img} alt="" /></div>
                <div className="space-y-2"><div className="bg-[#111118] border border-[#C8A97E]/10 p-4 rounded-sm"><p className="text-sm text-zinc-300 leading-relaxed">{msg.text}</p></div><span className="text-[9px] text-zinc-600 uppercase">{msg.time}</span></div>
              </div>
            ) : (
              <div key={msg.id} className="flex gap-4 max-w-2xl ml-auto flex-row-reverse">
                <div className="flex-shrink-0 w-8 h-8 rounded-sm border border-[#C8A97E]/30 bg-[#C8A97E]/10 flex items-center justify-center"><span className="material-symbols-outlined text-[#C8A97E] text-sm">support_agent</span></div>
                <div className="space-y-2 text-right"><div className="bg-[#0D0D14] border border-[#C8A97E]/40 p-4 rounded-sm shadow-[0_0_15px_rgba(200,169,126,0.05)]"><p className="text-sm text-[#C8A97E] leading-relaxed">{msg.text}</p></div><span className="text-[9px] text-zinc-600 uppercase">{msg.time} • Seen</span></div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="p-8 border-t border-amber-400/10 bg-zinc-950/80 backdrop-blur">
            <div className="bg-[#0D0D14] border border-[#C8A97E]/20 overflow-hidden focus-within:border-[#C8A97E] transition-all">
              <div className="flex items-center px-4 py-2 border-b border-[#C8A97E]/10 gap-4">
                <button className="text-zinc-500 hover:text-[#C8A97E]"><span className="material-symbols-outlined text-lg">format_bold</span></button>
                <button className="text-zinc-500 hover:text-[#C8A97E]"><span className="material-symbols-outlined text-lg">attach_file</span></button>
                <button className="text-zinc-500 hover:text-[#C8A97E]"><span className="material-symbols-outlined text-lg">image</span></button>
              </div>
              <textarea className="w-full bg-transparent border-none focus:ring-0 text-sm text-white p-4 min-h-[80px] resize-none placeholder:text-zinc-700" placeholder={`Type your message to ${activeCustomer?.name}...`} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}></textarea>
              <div className="flex justify-between items-center p-4 bg-[#111118]">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-400"></span><span className="text-[10px] text-zinc-500 uppercase tracking-widest">Concierge Mode Active</span></div>
                <button className="bg-amber-400 text-black px-8 py-2 text-xs font-bold uppercase hover:bg-white transition-all" onClick={handleSend}>SEND</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
