import React from 'react';

export default function Cards() {
  return (
    <>
      <section
          className="h-auto border-2 border-blue-400 s    p-3 rounded-xl text-wrap"
          // Set max-width for card
        >
          <div className="text-slate-700 font-semibold italic text-wrap mx-4">
            "This is the excellent product that I had ever used in my life."
          </div>
          <div className="text-bold justify-end  text-gradient italic">By some one</div>
          <div className="text-bold text-slate-700 italic">From New York University</div>
      </section>
    </>
  );
}
