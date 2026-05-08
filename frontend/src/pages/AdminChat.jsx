import { useState, useRef, useEffect } from 'react';
import { Star, Send, Search, MoreVertical, Circle, CheckCheck, ArrowLeft, Phone, Paperclip, LayoutDashboard, MessageSquare, Users, Settings, Bell } from 'lucide-react';

const CONVERSATIONS = [
  { id: 1, name: 'Ahmed Malik', lastMsg: 'Can you send the quote for the S-Class?', time: '2 min ago', unread: 2, online: true, tier: 'Platinum' },
  { id: 2, name: 'Fatima Zaidi', lastMsg: 'Thank you! I will visit on Saturday.', time: '15 min ago', unread: 0, online: true, tier: 'Gold' },
  { id: 3, name: 'Ali Hassan', lastMsg: 'Is the G63 still available in black?', time: '1 hr ago', unread: 1, online: false, tier: 'Platinum' },
  { id: 4, name: 'Sara Qureshi', lastMsg: 'Please schedule my service appointment.', time: '3 hr ago', unread: 0, online: false, tier: 'Silver' },
  { id: 5, name: 'Omar Raza', lastMsg: 'What are the financing options for C-Class?', time: '5 hr ago', unread: 3, online: true, tier: 'Silver' },
  { id: 6, name: 'Hina Shah', lastMsg: 'I need to reschedule my test drive.', time: 'Yesterday', unread: 0, online: false, tier: 'Gold' },
];

const CHAT_DATA = {
  1: [
    { id: 1, from: 'customer', text: 'Hello! I visited your showroom last week and I\'m very interested in the S-Class 500.', time: '9:45 AM' },
    { id: 2, from: 'agent', text: 'Welcome back, Mr. Malik! It was great having you. The S-Class 500 you saw is still available. Shall I prepare a formal quote?', time: '9:47 AM' },
    { id: 3, from: 'customer', text: 'Yes please! Also, can you include the 0% financing details?', time: '9:50 AM' },
    { id: 4, from: 'customer', text: 'Can you send the quote for the S-Class?', time: '9:51 AM' },
  ],
  3: [
    { id: 1, from: 'customer', text: 'Hi, I was looking at the G-Class G63 online.', time: '11:00 AM' },
    { id: 2, from: 'agent', text: 'Hello Mr. Hassan! The G63 is one of our most popular models. Which color were you interested in?', time: '11:02 AM' },
    { id: 3, from: 'customer', text: 'Is the G63 still available in black?', time: '11:05 AM' },
  ],
  5: [
    { id: 1, from: 'customer', text: 'Hi, I\'d like to know the monthly payment for a C-Class 300.', time: '7:30 AM' },
    { id: 2, from: 'customer', text: 'What are the financing options for C-Class?', time: '7:32 AM' },
    { id: 3, from: 'customer', text: 'Also, is there a trade-in program?', time: '7:33 AM' },
  ],
};

const TIER_COLORS = { Platinum: '#C8A97E', Gold: '#f39c12', Silver: '#9a97a5' };

const SIDEBAR_NAV = [
  { label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { label: 'Chats', icon: <MessageSquare size={18} />, active: true },
  { label: 'Customers', icon: <Users size={18} /> },
  { label: 'Settings', icon: <Settings size={18} /> },
];

export default function AdminChat() {
  const [activeChat, setActiveChat] = useState(1);
  const [chats, setChats] = useState(CHAT_DATA);
  const [input, setInput] = useState('');
  const [searchConv, setSearchConv] = useState('');
  const bottomRef = useRef(null);

  const activeConv = CONVERSATIONS.find((c) => c.id === activeChat);
  const activeMessages = chats[activeChat] || [];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeMessages.length]);

  const filteredConvs = CONVERSATIONS.filter((c) => c.name.toLowerCase().includes(searchConv.toLowerCase()));

  const sendReply = () => {
    if (!input.trim()) return;
    const newMsg = { id: Date.now(), from: 'agent', text: input, time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) };
    setChats((prev) => ({ ...prev, [activeChat]: [...(prev[activeChat] || []), newMsg] }));
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendReply(); }
  };

  const totalUnread = CONVERSATIONS.reduce((s, c) => s + c.unread, 0);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', height: '100vh', display: 'flex' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        input:focus, textarea:focus { outline:none; }
        textarea::placeholder, input::placeholder { color:#3a3748; }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-thumb { background:rgba(200,169,126,0.15); border-radius:4px; }
        .conv-hover { transition: background 0.2s; }
        .conv-hover:hover { background: rgba(200,169,126,0.04) !important; }
        a { text-decoration:none; color:inherit; }
      `}</style>

      {/* LEFT SIDEBAR NAV */}
      <aside style={{ width: 64, background: '#0d0d14', borderRight: '1px solid rgba(200,169,126,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0', gap: 8, flexShrink: 0 }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
          <Star size={16} color="#C8A97E" />
        </div>
        {SIDEBAR_NAV.map((item) => (
          <div key={item.label} title={item.label} style={{
            width: 42, height: 42, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            background: item.active ? 'rgba(200,169,126,0.1)' : 'transparent', color: item.active ? '#C8A97E' : '#4e453b',
          }}>{item.icon}</div>
        ))}
        <div style={{ marginTop: 'auto', position: 'relative' }}>
          <Bell size={18} color="#4e453b" />
          {totalUnread > 0 && <div style={{ position: 'absolute', top: -4, right: -4, width: 16, height: 16, borderRadius: '50%', background: '#e74c3c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 600, color: '#fff' }}>{totalUnread}</div>}
        </div>
      </aside>

      {/* CONVERSATIONS LIST */}
      <div style={{ width: 320, background: '#0d0d14', borderRight: '1px solid rgba(200,169,126,0.06)', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        <div style={{ padding: '20px 20px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff' }}>Conversations</h2>
            <span style={{ fontSize: 12, color: '#C8A97E', fontWeight: 500 }}>{totalUnread} new</span>
          </div>
          <div style={{ position: 'relative' }}>
            <Search size={14} color="#3a3748" style={{ position: 'absolute', left: 12, top: 10 }} />
            <input value={searchConv} onChange={(e) => setSearchConv(e.target.value)} placeholder="Search conversations..."
              style={{ width: '100%', padding: '9px 12px 9px 34px', background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 6, color: '#e4e1eb', fontSize: 12, fontFamily: "'DM Sans', sans-serif" }} />
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {filteredConvs.map((conv) => (
            <div key={conv.id} className="conv-hover" onClick={() => setActiveChat(conv.id)} style={{
              padding: '14px 20px', cursor: 'pointer',
              background: activeChat === conv.id ? 'rgba(200,169,126,0.06)' : 'transparent',
              borderLeft: activeChat === conv.id ? '2px solid #C8A97E' : '2px solid transparent',
            }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: `${TIER_COLORS[conv.tier]}12`, border: `1.5px solid ${TIER_COLORS[conv.tier]}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: TIER_COLORS[conv.tier] }}>{conv.name[0]}</span>
                  </div>
                  {conv.online && <div style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 10, borderRadius: '50%', background: '#2ecc71', border: '2px solid #0d0d14' }} />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
                    <span style={{ fontSize: 13, fontWeight: 500, color: '#e4e1eb' }}>{conv.name}</span>
                    <span style={{ fontSize: 10, color: '#3a3748' }}>{conv.time}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontSize: 12, color: '#5a5768', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 180 }}>{conv.lastMsg}</p>
                    {conv.unread > 0 && <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 600, color: '#0a0a0f', flexShrink: 0 }}>{conv.unread}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT AREA */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Chat Header */}
        {activeConv && (
          <div style={{ height: 68, borderBottom: '1px solid rgba(200,169,126,0.08)', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: `${TIER_COLORS[activeConv.tier]}12`, border: `1.5px solid ${TIER_COLORS[activeConv.tier]}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: TIER_COLORS[activeConv.tier] }}>{activeConv.name[0]}</span>
              </div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 500, color: '#fff' }}>{activeConv.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ padding: '1px 8px', background: `${TIER_COLORS[activeConv.tier]}15`, borderRadius: 10, fontSize: 10, fontWeight: 500, color: TIER_COLORS[activeConv.tier] }}>{activeConv.tier}</span>
                  {activeConv.online && <span style={{ fontSize: 11, color: '#2ecc71' }}>Online</span>}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 14 }}>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Phone size={17} color="#4e453b" /></button>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}><MoreVertical size={17} color="#4e453b" /></button>
            </div>
          </div>
        )}

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {activeMessages.map((msg) => {
            const isAgent = msg.from === 'agent';
            return (
              <div key={msg.id} style={{ display: 'flex', justifyContent: isAgent ? 'flex-end' : 'flex-start', marginBottom: 12 }}>
                <div style={{ maxWidth: '60%' }}>
                  <div style={{
                    background: isAgent ? 'rgba(200,169,126,0.12)' : '#111118',
                    border: isAgent ? '1px solid rgba(200,169,126,0.2)' : '1px solid rgba(200,169,126,0.06)',
                    borderRadius: isAgent ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                    padding: '10px 14px',
                  }}>
                    <p style={{ fontSize: 13, color: '#e4e1eb', lineHeight: 1.6 }}>{msg.text}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 3, justifyContent: isAgent ? 'flex-end' : 'flex-start' }}>
                    <span style={{ fontSize: 10, color: '#2a2931' }}>{msg.time}</span>
                    {isAgent && <CheckCheck size={11} color="#C8A97E" />}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <div style={{ borderTop: '1px solid rgba(200,169,126,0.06)', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Paperclip size={17} color="#3a3748" /></button>
          <textarea value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}
            placeholder="Type your reply..." rows={1}
            style={{ flex: 1, padding: '10px 16px', background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 24, color: '#e4e1eb', fontSize: 13, fontFamily: "'DM Sans', sans-serif", resize: 'none', lineHeight: 1.5 }} />
          <button onClick={sendReply} style={{
            width: 40, height: 40, borderRadius: '50%', background: input.trim() ? '#C8A97E' : 'rgba(200,169,126,0.08)',
            border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s',
          }}>
            <Send size={16} color={input.trim() ? '#0a0a0f' : '#3a3748'} />
          </button>
        </div>
      </div>
    </div>
  );
}
