'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
    timestamp: Date;
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            text: "Greetings. I am the A.I. Concierge. How may I assist you with Abinesh's portfolio today?",
            sender: 'ai',
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Simulate AI processing
        setTimeout(() => {
            const aiResponse = generateResponse(userMsg.text);
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                text: aiResponse,
                sender: 'ai',
                timestamp: new Date()
            }]);
        }, 1000);
    };

    const generateResponse = (text: string): string => {
        const lower = text.toLowerCase();
        if (lower.includes('project') || lower.includes('work')) {
            return "Abinesh has worked on several high-impact projects including this portfolio itself. Would you like a specific summary of a project?";
        }
        if (lower.includes('contact') || lower.includes('email') || lower.includes('hire')) {
            return "I can certainly help facilitate a connection. Please provide your email address and a brief description of your requirements.";
        }
        if (lower.includes('tech') || lower.includes('stack')) {
            return "This portfolio is built with Next.js 15, React Three Fiber, Tailwind CSS, and Framer Motion, designed for optimal performance and aesthetics.";
        }
        return "I understand. While I am a simulated entity, I can assure you that Abinesh's skills are quite real. Is there anything specific you'd like to know?";
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-80 md:w-96 bg-black/80 backdrop-blur-xl border border-accent/30 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.1)]"
                    >
                        {/* Header */}
                        <div className="bg-accent/10 p-4 flex items-center justify-between border-b border-accent/20">
                            <div className="flex items-center gap-2">
                                <Bot className="w-5 h-5 text-accent" />
                                <span className="font-semibold text-accent tracking-wide">A.I. CONCIERGE</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-black/50">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                                ? 'bg-accent text-black font-medium rounded-tr-none'
                                                : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-accent/20 bg-black/80 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Type your inquiry..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-accent/50 transition-colors"
                            />
                            <button
                                onClick={handleSend}
                                className="p-2 bg-accent text-black rounded-full hover:bg-cyan-400 transition-colors disabled:opacity-50"
                                disabled={!input.trim()}
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`p-4 rounded-full shadow-lg transition-all duration-300 ${isOpen
                        ? 'bg-gray-800 text-white border border-gray-700'
                        : 'bg-accent text-black shadow-[0_0_20px_rgba(0,255,255,0.4)]'
                    }`}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>
        </div>
    );
}
