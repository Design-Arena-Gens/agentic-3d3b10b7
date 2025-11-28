"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WEBHOOK_URL = "https://intelliwaveai.app.n8n.cloud/webhook/c99b5d4e-0dec-4616-b0c0-274f8febddf6/chat";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
}

export function ChatWidget() {
  const [open, setOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: "m-welcome",
    role: "assistant",
    content: "Bonjour, je suis l'assistant Intelliwave. Posez-moi vos questions !",
  }]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  const userId = useMemo(() => {
    if (typeof window === "undefined") return "anon";
    let id = window.localStorage.getItem("iw_uid");
    if (!id) {
      id = Math.random().toString(36).slice(2) + Date.now().toString(36);
      window.localStorage.setItem("iw_uid", id);
    }
    return id;
  }, []);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, open]);

  async function sendMessage() {
    const content = input.trim();
    if (!content || loading) return;
    setInput("");
    const localId = "m-" + Date.now();
    setMessages((prev) => [...prev, { id: localId, role: "user", content }]);
    setLoading(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content, userId }),
      });

      if (!res.ok) throw new Error("Erreur du serveur");

      let replyText = "";
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const data = await res.json();
        replyText = (data.reply || data.message || data.text || JSON.stringify(data));
      } else {
        replyText = await res.text();
      }

      setMessages((prev) => [
        ...prev,
        { id: "m-" + Math.random().toString(36).slice(2), role: "assistant", content: String(replyText) }
      ]);
    } catch (e: any) {
      setMessages((prev) => [
        ...prev,
        { id: "m-error" + Math.random().toString(36).slice(2), role: "assistant", content: "D?sol?, une erreur est survenue. R?essayez." }
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div id="chat" aria-live="polite">
      <style jsx>{`
        .fab {
          position: fixed; right: 20px; bottom: 20px; z-index: 50;
          width: 56px; height: 56px; border-radius: 14px; display: grid; place-items: center; color: #0f141b;
          background: linear-gradient(180deg, #8af4e2, #6ab3ff);
          animation: pulseRing 2.2s infinite ease-out;
        }
        .panel {
          position: fixed; right: 20px; bottom: 90px; z-index: 50; width: min(100vw - 32px, 380px);
        }
        .chatCard { border-radius: 16px; overflow: clip; }
        .header { display: flex; align-items: center; justify-content: space-between; padding: .9rem 1rem; }
        .title { font-weight: 700; }
        .messages { max-height: 50vh; overflow: auto; display: grid; gap: .6rem; padding: 1rem; }
        .bubble { padding: .7rem .9rem; border-radius: 12px; max-width: 80%; line-height: 1.45; }
        .u { justify-self: end; background: #1a2130; border: 1px solid #2a3347; }
        .a { justify-self: start; background: #121825; border: 1px solid rgba(138, 244, 226, .18); }
        .inputRow { display: grid; grid-template-columns: 1fr auto; gap: .5rem; padding: .9rem; border-top: 1px solid rgba(255,255,255,.06); }
        .input { outline: none; border: 1px solid #2a3347; background: #0f131b; border-radius: 12px; padding: .7rem .9rem; }
        .sendBtn { background: linear-gradient(180deg, #6ab3ff, #8af4e2); color: #0f141b; border-radius: 12px; padding: .7rem .95rem; }
      `}</style>

      <button className="fab" aria-label="Ouvrir le chat" onClick={() => setOpen((v) => !v)}>
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" stroke="#0f141b" strokeWidth="2" strokeLinecap="round"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C7.03 3 3 6.58 3 11c0 2.23 1.06 4.23 2.77 5.65-.08.52-.3 1.57-1.09 2.8 0 0 1.37-.4 2.92-1.36.97.3 2 .46 3.08.46 4.97 0 9-3.58 9-8s-4.03-7.55-9-7.55Z" stroke="#0f141b" strokeWidth="2"/></svg>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div className="panel" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} transition={{ duration: .25 }}>
            <div className="glass chatCard">
              <div className="header">
                <div className="title">Assistant Intelliwave</div>
                <button onClick={() => setOpen(false)} aria-label="Fermer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" stroke="#8af4e2" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
              </div>
              <div className="messages">
                {messages.map((m) => (
                  <div key={m.id} className={"bubble " + (m.role === "user" ? "u" : "a")}>{m.content}</div>
                ))}
                {loading && <div className="bubble a">L'assistant r?dige?</div>}
                <div ref={endRef} />
              </div>
              <div className="inputRow">
                <input className="input" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKey} placeholder="?crivez votre message?" />
                <button className="sendBtn" onClick={sendMessage} disabled={loading}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12l14-7-7 14-1.5-5.5L5 12Z" fill="#0f141b"/></svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
