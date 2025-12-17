'use client';

import { useChat } from 'ai/react';
import { useEffect, useRef } from 'react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#1a1a1a', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* Header */}
      <div style={{ padding: '15px', borderBottom: '1px solid #333', textAlign: 'center', background: '#222', position: 'sticky', top: 0 }}>
        <h2 style={{ margin: 0, fontSize: '18px' }}>Mistral AI Bot</h2>
      </div>

      {/* Chat Area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {messages.length === 0 && (
          <div style={{ textAlign: 'center', color: '#666', marginTop: '50px' }}>
            <p>Kuchh bhi poochho...</p>
          </div>
        )}
        
        {messages.map(m => (
          <div key={m.id} style={{ 
            alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: m.role === 'user' ? '#007aff' : '#333',
            color: 'white',
            padding: '10px 16px',
            borderRadius: '18px',
            borderBottomRightRadius: m.role === 'user' ? '4px' : '18px',
            borderBottomLeftRadius: m.role === 'user' ? '18px' : '4px',
            maxWidth: '85%',
            lineHeight: '1.4'
          }}>
            {m.content}
          </div>
        ))}
        {isLoading && <div style={{ color: '#888', fontSize: '12px', marginLeft: '10px' }}>Thinking...</div>}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} style={{ padding: '15px', background: '#222', borderTop: '1px solid #333', display: 'flex', gap: '10px' }}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Message..."
          style={{ flex: 1, padding: '12px 20px', borderRadius: '25px', border: 'none', background: '#333', color: 'white', fontSize: '16px', outline: 'none' }}
        />
        <button type="submit" disabled={isLoading} style={{ padding: '10px 20px', borderRadius: '25px', border: 'none', background: '#007aff', color: 'white', fontWeight: 'bold' }}>
          Send
        </button>
      </form>
    </div>
  );
}
