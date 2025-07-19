export function AboutPartners() {
  const partners = [
    {
      name: "Accenture",
      width: 160
    },
    {
      name: "Adobe",
      width: 120
    },
    {
      name: "Ascent",
      width: 140
    },
    {
      name: "Capital",
      width: 150
    },
    {
      name: "Citi",
      width: 100
    },
    {
      name: "Salesforce",
      width: 140
    },
    {
      name: "Oracle",
      width: 130
    },
    {
      name: "Vanguard",
      width: 150
    }
  ]

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-semibold text-center">Partners</h2>
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <div 
                  className="bg-purple-200 rounded-lg opacity-60 hover:opacity-100 transition-opacity"
                  style={{ 
                    width: partner.width,
                    height: 40
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 