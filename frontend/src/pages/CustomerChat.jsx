import { useState, useRef, useEffect } from 'react';
import { Star, Send, Paperclip, Smile, Phone, Video, MoreVertical, ArrowLeft, CheckCheck, Image, Clock } from 'lucide-react';

const INITIAL_MESSAGES = [
  { id: 1, from: 'agent', name: 'Sara Qureshi', text: 'Welcome to Mercedes-Benz Pakistan! How may I assist you today?', time: '10:00 AM', read: true },
  { id: 2, from: 'user', text: 'Hi! I\'m interested in the new S-Class 500. Can you tell me about financing options?', time: '10:02 AM', read: true },
  { id: 3, from: 'agent', name: 'Sara Qureshi', text: 'Absolutely! The S-Class 500 starts at PKR 85M. We currently have a special 0% APR financing offer for up to 60 months. Would you like me to prepare a detailed quote for you?', time: '10:03 AM', read: true },
  { id: 4, from: 'user', text: 'That sounds great. What colors are available?', time: '10:05 AM', read: true },
  { id: 5, from: 'agent', name: 'Sara Qureshi', text: 'We have the following colors in stock:\n• Obsidian Black\n• Selenite Grey\n• Nautic Blue\n• Diamond White\n• Rubellite Red\n\nWould you like to schedule a visit to see them in person?', time: '10:06 AM', read: true },
];

const QUICK_REPLIES = [
  'Schedule a test drive',
  'Get a price quote',
  'Service appointment',
  'Speak to a manager',
];

export default function CustomerChat() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg = { id: Date.now(), from: 'user', text: input, time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }), read: false };
    setMessages((prev) => [...prev, newMsg]);
    setInput('');

    // Simulate agent reply
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, {
        id: Date.now() + 1, from: 'agent', name: 'Sara Qureshi',
        text: 'Thank you for your message! Our team will get back to you shortly. Is there anything else I can help with?',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }), read: true,
      }]);
    }, 2000);
  };

  const handleQuickReply = (reply) => {
    setInput(reply);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        input:focus, textarea:focus { outline:none; }
        textarea::placeholder { color:#3a3748; }
        .msg-in { animation: msgSlide 0.3s ease-out; }
        @keyframes msgSlide { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        @keyframes dotPulse { 0%,60%,100%{opacity:0.3} 30%{opacity:1} }
        a { text-decoration:none; color:inherit; }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-thumb { background:rgba(200,169,126,0.15); border-radius:4px; }
      `}</style>

      {/* CHAT HEADER */}
      <div style={{ background: '#0d0d14', borderBottom: '1px solid rgba(200,169,126,0.1)', padding: '0 28px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}><ArrowLeft size={20} color="#6b6880" /></button>
          <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(200,169,126,0.1)', border: '1.5px solid rgba(200,169,126,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Star size={18} color="#C8A97E" />
          </div>
          <div>
            <h3 style={{ fontSize: 15, fontWeight: 500, color: '#fff' }}>Mercedes-Benz Support</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#2ecc71' }} />
              <span style={{ fontSize: 11, color: '#2ecc71' }}>Sara is online</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Phone size={18} color="#6b6880" /></button>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Video size={18} color="#6b6880" /></button>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}><MoreVertical size={18} color="#6b6880" /></button>
        </div>
      </div>

      {/* MESSAGES AREA */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px' }}>
        {/* Date Separator */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <span style={{ fontSize: 11, color: '#3a3748', background: '#111118', padding: '4px 14px', borderRadius: 12, border: '1px solid rgba(200,169,126,0.06)' }}>Today</span>
        </div>

        {messages.map((msg) => {
          const isUser = msg.from === 'user';
          return (
            <div key={msg.id} className="msg-in" style={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start', marginBottom: 14 }}>
              {!isUser && (
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(200,169,126,0.1)', border: '1px solid rgba(200,169,126,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 10, flexShrink: 0, alignSelf: 'flex-end' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#C8A97E' }}>SQ</span>
                </div>
              )}
              <div style={{ maxWidth: '65%' }}>
                {!isUser && <p style={{ fontSize: 11, color: '#C8A97E', marginBottom: 4, fontWeight: 500 }}>{msg.name}</p>}
                <div style={{
                  background: isUser ? 'rgba(200,169,126,0.12)' : '#111118',
                  border: isUser ? '1px solid rgba(200,169,126,0.2)' : '1px solid rgba(200,169,126,0.06)',
                  borderRadius: isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  padding: '12px 16px',
                }}>
                  <p style={{ fontSize: 14, color: '#e4e1eb', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{msg.text}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4, justifyContent: isUser ? 'flex-end' : 'flex-start' }}>
                  <span style={{ fontSize: 10, color: '#3a3748' }}>{msg.time}</span>
                  {isUser && <CheckCheck size={12} color={msg.read ? '#C8A97E' : '#3a3748'} />}
                </div>
              </div>
            </div>
          );
        })}

        {/* Typing Indicator */}
        {isTyping && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(200,169,126,0.1)', border: '1px solid rgba(200,169,126,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#C8A97E' }}>SQ</span>
            </div>
            <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.06)', borderRadius: '16px 16px 16px 4px', padding: '14px 18px', display: 'flex', gap: 4 }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#C8A97E', animation: `dotPulse 1.4s infinite ${i * 0.2}s` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* QUICK REPLIES */}
      <div style={{ padding: '0 28px 8px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {QUICK_REPLIES.map((qr) => (
          <button key={qr} onClick={() => handleQuickReply(qr)} style={{
            padding: '6px 14px', background: 'rgba(200,169,126,0.06)', border: '1px solid rgba(200,169,126,0.12)',
            borderRadius: 20, fontSize: 12, color: '#C8A97E', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
            transition: 'all 0.3s',
          }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(200,169,126,0.12)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(200,169,126,0.06)'}>
            {qr}
          </button>
        ))}
      </div>

      {/* INPUT BAR */}
      <div style={{ background: '#0d0d14', borderTop: '1px solid rgba(200,169,126,0.08)', padding: '14px 28px', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Paperclip size={18} color="#4e453b" /></button>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Image size={18} color="#4e453b" /></button>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}
          placeholder="Type a message..." rows={1}
          style={{ flex: 1, padding: '10px 16px', background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 24, color: '#e4e1eb', fontSize: 14, fontFamily: "'DM Sans', sans-serif", resize: 'none', lineHeight: 1.5 }} />
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Smile size={18} color="#4e453b" /></button>
        <button onClick={sendMessage} style={{
          width: 42, height: 42, borderRadius: '50%', background: input.trim() ? '#C8A97E' : 'rgba(200,169,126,0.1)',
          border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s',
        }}>
          <Send size={18} color={input.trim() ? '#0a0a0f' : '#4e453b'} />
        </button>
      </div>
    </div>
  );
}
