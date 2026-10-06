// Mofid logo - SVG recreation of the official Mofid Yadegar-e-Imam logo
// Two sections: text block (مفید/یادگار/امام) + teal block with arch graphic

export default function MofidLogo({ className = 'h-12', showHeading = false }) {
  return (
    <div className={`flex flex-col ${showHeading ? 'gap-1' : ''}`}>
      {showHeading && (
        <span className="text-[10px] font-bold text-teal leading-none mb-0.5">
          دبیرستان پسرانه دوره اول
        </span>
      )}
      <div className={`flex ${className}`}>
        {/* Left text block */}
        <div className="flex flex-col items-center justify-center bg-white border-2 border-teal rounded-l-lg px-2 py-1.5 gap-0.5">
          <span className="text-teal font-bold text-sm leading-none">مفید</span>
          <span className="text-teal font-bold text-sm leading-none">یادگار</span>
          <span className="text-teal font-bold text-sm leading-none">امام</span>
        </div>
        {/* Right teal block with arch */}
        <div className="relative bg-teal rounded-r-lg rounded-tr-2xl px-3 py-1.5 flex items-center justify-center min-w-[3rem]">
          <svg viewBox="0 0 60 60" className="h-full w-full" fill="none">
            {/* White arch shape */}
            <path
              d="M12 50 L12 28 Q12 12 30 12 Q48 12 48 28 L48 50"
              stroke="white"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Inner decorative calligraphy emblem (simplified) */}
            <path
              d="M22 40 Q30 32 38 40 M26 36 Q30 33 34 36 M28 44 Q30 42 32 44"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.9"
            />
            <circle cx="30" cy="38" r="1.5" fill="white" opacity="0.8" />
          </svg>
        </div>
      </div>
    </div>
  )
}
