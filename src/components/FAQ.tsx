import React, { useState } from 'react';
import { FAQ_LIST, FAQItem } from '../data/hackathonData';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageSquare } from 'lucide-react';

interface FAQProps {
  onOpenRegister: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenRegister }) => {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = FAQ_LIST.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-t border-neutral-200 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-red-600 font-bold">
            <span className="w-2 h-0.5 bg-red-600"></span>
            <span>GOT QUESTIONS?</span>
            <span className="text-neutral-300">/</span>
            <span className="text-neutral-500 font-normal">EVERYTHING YOU NEED TO KNOW</span>
          </div>
          <h2 className="font-['Anton'] text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight leading-tight mb-4">
            FREQUENTLY ASKED <span className="text-red-600">QUESTIONS</span>
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Clear, transparent answers to prepare your squad for HACKRISE ’26 on 26 January 2027.
          </p>
        </div>

        {/* Search bar & filter controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or keywords..."
              className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-neutral-50 border border-neutral-300 focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          <div className="flex items-center gap-1 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: "all", label: "All Questions" },
              { id: "registration", label: "Registration" },
              { id: "teams", label: "Teams" },
              { id: "event", label: "Event & Domains" },
              { id: "judging", label: "Judging" },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-neutral-900 text-white font-bold'
                    : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Expandable Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-neutral-50 border border-neutral-200 text-neutral-500 font-mono text-xs">
              No matching questions found for "{searchQuery}". Try a different keyword.
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`border transition-all duration-200 ${
                    isOpen 
                      ? 'border-neutral-900 bg-white shadow-sm' 
                      : 'border-neutral-200 bg-neutral-50/70 hover:border-neutral-400'
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                  }}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-red-600 shrink-0">
                        Q{index + 1}
                      </span>
                      <span className="font-['Space_Grotesk'] text-base sm:text-lg font-bold text-neutral-900">
                        {faq.question}
                      </span>
                    </div>

                    <div className={`p-1 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-red-600' : 'text-neutral-400'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 border-t border-neutral-100 animate-in fade-in duration-150">
                      <p className="text-neutral-700 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions footer card */}
        <div className="mt-12 p-6 bg-neutral-100 border border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-red-600 shrink-0" />
            <span className="text-neutral-700">
              Have an unlisted query regarding travel, lodging, or hardware components?
            </span>
          </div>

          <button
            onClick={onOpenRegister}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase transition-colors shrink-0"
          >
            Ask on Devpost / Contact Us
          </button>
        </div>

      </div>
    </section>
  );
};
