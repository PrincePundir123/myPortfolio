import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, MoreHorizontal } from "lucide-react";

const getBotResponse = (input) => {
  const lower = input.toLowerCase();
  if (lower.includes("tech") || lower.includes("stack") || lower.includes("skills"))
    return "Prince is a Front-End Developer proficient in React, Tailwind CSS, JavaScript, and C++.";
  if (lower.includes("mofa") || lower.includes("project"))
    return "He actively contributes to the MoFA (Modular Framework for Agents) open-source project and has built full-stack applications like a Background Remover and an Amazon E-commerce clone.";
  if (lower.includes("education") || lower.includes("college") || lower.includes("nit"))
    return "He is currently a 2nd-year B.Tech CSE student at NIT Hamirpur.";
  return "I'm just a simple bot! Feel free to use the contact form to message Prince directly.";
};

const QuickReplies = ["Tech Stack?", "Tell me about MoFA", "Education?"];

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm Prince's virtual assistant. Ask me anything about his skills, projects, or education!" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => scrollToBottom(), [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const reply = getBotResponse(text);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ transformOrigin: "bottom right" }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 h-[450px] bg-white dark:bg-black rounded-2xl shadow-2xl border border-black dark:border-white flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-blue-600 dark:bg-blue-500 text-white flex justify-between items-center transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-white/10">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Prince's Assistant</h3>
                  <p className="text-xs opacity-80">Usually responds instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="opacity-80 hover:opacity-100 transition-opacity p-1"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-white dark:bg-black flex flex-col gap-4 no-scrollbar">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-sm shadow-md"
                        : "bg-white text-black dark:bg-black dark:text-white border border-black dark:border-white shadow-sm rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                  <div className="bg-white dark:bg-black px-4 py-3 rounded-2xl rounded-bl-sm border border-black dark:border-white flex items-center gap-1 shadow-sm">
                    <MoreHorizontal className="text-blue-500 animate-pulse" size={18} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick-Reply toolbar */}
            <div className="px-4 pb-2 bg-white dark:bg-black flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
              {QuickReplies.map((reply, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(reply)}
                  disabled={isTyping}
                  className="shrink-0 whitespace-nowrap px-3 py-1.5 bg-white dark:bg-black text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50 text-xs font-semibold rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors disabled:opacity-50 shadow-sm"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input area */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 bg-white dark:bg-black border-t border-black dark:border-white flex gap-2 items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isTyping}
                className="flex-1 bg-white dark:bg-black border-none px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white dark:placeholder-white disabled:opacity-50 transition-shadow"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md disabled:bg-white disabled:shadow-none"
                aria-label="Send Message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Entry Node */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1, y: [0, -8, 0] }}
          transition={{
            y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 260, damping: 20 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-blue-500/25 transition-all"
          aria-label="Open AI Assistant"
        >
          <MessageCircle size={26} />
        </motion.button>
      )}
    </div>
  );
};

export default FloatingChatbot;
