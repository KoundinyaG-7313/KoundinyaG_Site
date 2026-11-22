import React, { useState, useEffect } from 'react';

interface Entry {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  node: string;
}

export const GuestbookTerminal: React.FC = () => {
  const defaultEntries: Entry[] = [
    {
      id: '1',
      name: 'Julian B.',
      message: 'Time is nothing more than the relation between configurations. Keep pursuing the Barbour-Bertotti framework!',
      timestamp: '2026-11-20 18:42:10',
      node: 'OXFORD_NODE',
    },
    {
      id: '2',
      name: 'Arch-Fanatic',
      message: 'Clean Arasaka Kitty theme btw. Good to see people still caring about zero-bloat systems.',
      timestamp: '2026-11-21 04:15:33',
      node: 'HYPRLAND_PEER',
    },
    {
      id: '3',
      name: 'CosmoExplorer',
      message: 'The 5D ultrahyperbolic bounce equations look very clean. Looking forward to the arXiv publication.',
      timestamp: '2026-11-22 14:02:19',
      node: 'CERES_ORBITAL',
    },
  ];

  const [entries, setEntries] = useState<Entry[]>(defaultEntries);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [nodeId, setNodeId] = useState('ANONYMOUS_RELAY');

  useEffect(() => {
    const saved = localStorage.getItem('max_guestbook_entries');
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        // Fallback
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry: Entry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      node: nodeId.trim() || 'ANONYMOUS_NODE',
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem('max_guestbook_entries', JSON.stringify(updated));
    setMessage('');
  };

  return (
    <div className="space-y-6 font-mono">
      {/* Input Terminal Form */}
      <div className="p-6 rounded-lg bg-[#070c14] border border-[#162334] space-y-4">
        <div className="flex items-center space-x-2 text-xs text-emerald-400 border-b border-[#141e2e] pb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold uppercase tracking-wider">GUESTBOOK PACKET TRANSMITTER</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 block mb-1">CALLSIGN / NAME:</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alice / Explorer"
                className="w-full px-3 py-2 rounded bg-[#03060a] border border-[#162334] text-white focus:outline-none focus:border-emerald-400"
              />
            </div>
            <div>
              <label className="text-gray-400 block mb-1">ORIGIN NODE / LOCATION:</label>
              <input
                type="text"
                value={nodeId}
                onChange={(e) => setNodeId(e.target.value)}
                placeholder="e.g. TOKYO_RELAY // LINUX_HOST"
                className="w-full px-3 py-2 rounded bg-[#03060a] border border-[#162334] text-white focus:outline-none focus:border-emerald-400"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-400 block mb-1">TRANSMISSION PAYLOAD (MESSAGE):</label>
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave a thought, physics note, or greeting..."
              className="w-full px-3 py-2 rounded bg-[#03060a] border border-[#162334] text-white focus:outline-none focus:border-emerald-400"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 rounded bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors cursor-pointer"
          >
            TRANSMIT SIGNAL &rarr;
          </button>
        </form>
      </div>

      {/* Broadcast Log */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          SIGNAL LOG // RECENT TRANSMISSIONS
        </h3>

        <div className="space-y-3">
          {entries.map((item) => (
            <div key={item.id} className="p-4 rounded-lg bg-[#070c14] border border-[#162334] space-y-1.5 text-xs">
              <div className="flex flex-wrap items-center justify-between text-gray-500 border-b border-[#141e2e] pb-1.5 gap-2">
                <span className="text-emerald-400 font-bold">{item.name}</span>
                <div className="flex items-center space-x-2 text-[10px]">
                  <span className="text-cyan-400">{item.node}</span>
                  <span>•</span>
                  <span>{item.timestamp}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed pt-1">
                {item.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
