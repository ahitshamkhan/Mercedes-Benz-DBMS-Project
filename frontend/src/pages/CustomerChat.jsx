import { useState, useEffect, useRef } from 'react'
import { Send, MessageCircle } from 'lucide-react'
import { getMessages, sendMessage } from '../api/chat'
import { useAuth } from '../context/AuthContext'
import PageLayout from '../components/PageLayout'

export default function CustomerChat() {
  const { user } = useAuth()
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)
  const bottom = useRef(null)

  useEffect(() => {
    getMessages().then(r => setMessages(r.data || [])).catch(() => setMessages([])).finally(() => setLoading(false))
    const interval = setInterval(() => getMessages().then(r => setMessages(r.data || [])).catch(() => {}), 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => { bottom.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  async function send(e) {
    e.preventDefault()
    if (!input.trim()) return
    const text = input; setInput('')
    setMessages(p => [...p, { id: Date.now(), message: text, sender_role: 'customer', created_at: new Date().toISOString() }])
    try { await sendMessage?.({ message: text }) } catch {}
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2"><MessageCircle className="h-4 w-4 text-primary" /><p className="text-primary text-xs font-mono tracking-widest uppercase">Support</p></div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Live Chat Support</h1>
          <p className="text-muted-foreground text-sm mt-1">Chat with a Mercedes-Benz specialist</p>
        </div>
        <div className="bg-card border border-white/8 rounded-xl overflow-hidden flex flex-col" style={{ height: '60vh' }}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {loading ? <div className="flex justify-center pt-10"><div className="h-6 w-6 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>
              : messages.length === 0 ? (
                <div className="text-center pt-10">
                  <MessageCircle className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">No messages yet. Start the conversation!</p>
                </div>
              ) : messages.map((m, i) => {
                const isMe = m.sender_role === 'customer'
                return (
                  <div key={m.id || i} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl text-sm ${isMe ? 'bg-primary text-white rounded-br-sm' : 'bg-zinc-800 text-foreground rounded-bl-sm'}`}>
                      {m.message}
                      <div className={`text-[10px] mt-1 ${isMe ? 'text-white/60' : 'text-muted-foreground'}`}>{m.created_at ? new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</div>
                    </div>
                  </div>
                )
              })}
            <div ref={bottom} />
          </div>
          {/* Input */}
          <div className="border-t border-white/8 p-4">
            <form onSubmit={send} className="flex gap-3">
              <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..."
                className="flex-1 h-10 bg-black border border-white/15 text-foreground placeholder:text-muted-foreground/50 rounded-lg px-3 focus:outline-none focus:border-primary/50 text-sm" />
              <button type="submit" className="bg-primary hover:bg-primary/90 text-white h-10 w-10 rounded-lg flex items-center justify-center transition-colors">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
