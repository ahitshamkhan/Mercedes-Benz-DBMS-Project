import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getMessages, sendMessage } from '../api/chat'

const FALLBACK_MESSAGES = [
  { id: 1, sender: 'admin', text: 'Good evening. Welcome to the Mercedes-Benz Digital Concierge. How may I assist you today?', time: '18:42' },
  { id: 2, sender: 'user', text: 'I would like to schedule the Premier Service A at the Berlin Flagship center. Do you have availability for Thursday afternoon?', time: '18:44' },
  { id: 3, sender: 'admin', text: 'Certainly. We have an opening at 14:00 and 16:30. During your visit, would you like a replacement vehicle from our latest S-Class collection?', time: '18:45' },
  { id: 4, sender: 'user', text: 'The 16:30 slot works perfectly. Yes, please arrange the S-Class. I\'ll need it for approximately 4 hours.', time: '18:47' },
]

export default function CustomerChat() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)
  const bottomRef = useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      try { const res = await getMessages(); setMessages(res.data) }
      catch { setMessages(FALLBACK_MESSAGES) }
      finally { setLoading(false) }
    }
    fetchData()
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return
    const newMsg = { id: Date.now(), sender: 'user', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    setMessages(prev => [...prev, newMsg])
    setInput('')
    try { await sendMessage(input) } catch {}
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() }
  }

  return (
    <div className="bg-[#050508] min-h-screen font-body-md text-on-surface overflow-hidden relative">
      <div className="fixed inset-0 z-0 blur-sm opacity-30 select-none pointer-events-none p-20">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-display-lg text-primary mb-12">My Account</h1>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 h-96 bg-surface-container-low rounded-lg border border-primary/10"></div>
            <div className="col-span-4 h-96 bg-surface-container-low rounded-lg border border-primary/10"></div>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 md:p-12 glass-overlay">
        <div className="w-full max-w-4xl h-[751px] bg-surface-container-lowest border border-primary/15 flex flex-col relative shadow-2xl">
          <button className="absolute -top-12 right-0 text-primary hover:text-white transition-colors flex items-center gap-2" onClick={() => navigate('/profile')}>
            <span className="font-label-sm uppercase tracking-widest">Close</span>
            <span className="material-symbols-outlined text-lg">close</span>
          </button>

          <header className="h-24 px-8 flex items-center justify-between border-b border-primary/10 bg-surface-container-low">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-surface-container-highest">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-surface-container-low"></span>
              </div>
              <div>
                <h2 className="font-headline-h3 text-primary tracking-tight">Mercedes-Benz Support</h2>
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-[10px] text-emerald-500 uppercase tracking-widest">Live Online</span>
                  <span className="text-zinc-500 text-[10px] uppercase font-label-sm">• Concierge</span>
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
            {loading ? (
              <div className="flex justify-center py-20"><span className="material-symbols-outlined text-primary text-4xl animate-spin">progress_activity</span></div>
            ) : (
              <>
                <div className="flex justify-center">
                  <span className="font-label-sm text-[10px] text-zinc-600 border border-zinc-800 px-4 py-1 rounded-full uppercase tracking-[0.2em]">Today</span>
                </div>
                {messages.map(msg => msg.sender === 'admin' ? (
                  <div key={msg.id} className="flex items-start gap-4 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center bg-surface-container-low mt-1 shrink-0">
                      <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
                    </div>
                    <div className="space-y-2">
                      <div className="message-gradient-admin border border-primary/5 p-5 rounded-lg">
                        <p className="leading-relaxed">{msg.text}</p>
                      </div>
                      <p className="font-label-sm text-[10px] text-zinc-600 uppercase">Concierge • {msg.time}</p>
                    </div>
                  </div>
                ) : (
                  <div key={msg.id} className="flex flex-col items-end gap-2 ml-auto max-w-[80%]">
                    <div className="message-gradient-user border border-primary/40 p-5 rounded-lg">
                      <p className="text-primary leading-relaxed">{msg.text}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-label-sm text-[10px] text-zinc-600 uppercase">{msg.time}</p>
                      <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
                    </div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </>
            )}
          </div>

          <footer className="p-8 bg-surface-container-lowest border-t border-primary/10">
            <div className="flex items-center gap-6">
              <button className="text-zinc-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">attach_file</span>
              </button>
              <div className="flex-1">
                <input className="w-full bg-surface-container-low border border-primary/10 px-6 py-4 text-sm text-on-surface focus:outline-none focus:border-primary/40 transition-all placeholder:text-zinc-600 uppercase tracking-widest" placeholder="TYPE YOUR MESSAGE..." type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} />
              </div>
              <button className="bg-primary hover:bg-white text-background px-8 h-12 flex items-center gap-3 transition-all group" onClick={handleSend}>
                <span className="font-label-sm uppercase font-bold">Send</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-zinc-600 text-sm">keyboard_voice</span>
                <span className="material-symbols-outlined text-zinc-600 text-sm">image</span>
              </div>
              <p className="font-label-sm text-[9px] text-zinc-700 tracking-widest">ENCRYPTED END-TO-END CHANNEL</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
