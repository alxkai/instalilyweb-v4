export function ClientLogos() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <p className="text-center text-muted-foreground mb-8 font-mono">Trusted by Industry Leaders</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-75">
        {/* Replace with actual client logos */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-8 w-24 bg-muted rounded" />
        ))}
      </div>
    </div>
  )
}

