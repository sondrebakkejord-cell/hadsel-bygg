export default function Home() {
  return (
    <div className="min-h-screen text-stone-900 bg-stone-50">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-40 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <div className="text-stone-50 font-bold text-xl tracking-tight">
              Hadsel Bygg<span className="text-amber-400"> &amp;</span> Vedlikehold
            </div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-stone-300 mt-0.5">Stokmarknes · Vesterålen</div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm text-stone-50">
            <a href="#tjenester" className="hover:text-amber-300 transition-colors uppercase tracking-widest text-xs">Tjenester</a>
            <a href="#team" className="hover:text-amber-300 transition-colors uppercase tracking-widest text-xs">Team</a>
            <a href="#prosjekter" className="hover:text-amber-300 transition-colors uppercase tracking-widest text-xs">Prosjekter</a>
            <a href="#kontakt" className="hover:text-amber-300 transition-colors uppercase tracking-widest text-xs">Kontakt</a>
            <a href="tel:+4791670535" className="px-5 py-2.5 bg-amber-400 text-stone-900 hover:bg-amber-300 transition-colors uppercase tracking-widest text-xs font-bold">
              Ring oss
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen min-h-[680px] flex items-end overflow-hidden bg-stone-900">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2400&q=85"
          alt="Hadsel Bygg og Vedlikehold — byggeplass i Vesterålen"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-950/60" />
        <div className="relative max-w-7xl mx-auto px-6 pb-28 text-stone-50 w-full">
          <p className="text-xs uppercase tracking-[0.5em] text-amber-400 mb-8 font-semibold">— Hadsel Bygg og Vedlikehold AS —</p>
          <h1 className="font-bold mb-8 max-w-4xl" style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)", letterSpacing: "-0.02em", lineHeight: 1 }}>
            Vi bygger for<br />
            <span className="text-amber-400">framtiden.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-xl mb-10 leading-relaxed">
            Entreprenør og snekker i Stokmarknes. Nybygg, rehabilitering, betong, fliser
            og maling — for privat og næring i Nord-Nordland og Sør-Troms.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+4791670535"
              className="inline-block px-8 py-4 bg-amber-400 text-stone-900 hover:bg-amber-300 transition-colors uppercase tracking-[0.25em] text-xs font-bold"
            >
              Ring 91 67 05 35
            </a>
            <a
              href="#kontakt"
              className="inline-block px-8 py-4 border border-stone-50/40 text-stone-50 hover:bg-stone-50 hover:text-stone-900 transition-colors uppercase tracking-[0.25em] text-xs font-semibold"
            >
              Be om tilbud
            </a>
          </div>
        </div>
      </section>

      {/* Velkomst */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-700 mb-6 font-semibold">— Om oss —</p>
          <h2 className="font-bold mb-10 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Solid håndverk, levert på tid.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-lg text-stone-700 leading-relaxed">
            <p>
              Hadsel Bygg og Vedlikehold er en lokal entreprenør basert på Stokmarknes.
              Vi leverer komplette løsninger innen bygg, rehabilitering og vedlikehold —
              for både private og næringskunder.
            </p>
            <p>
              Fra nybygg og tilbygg til betongarbeid, fliser, maling og fasade. Vårt
              arbeidsområde er naturlig Nord-Nordland og Sør-Troms, men prosjekter
              kommer over et større geografisk område når det passer.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-14">
            <div className="border-l-2 border-amber-400 pl-5">
              <p className="text-3xl font-bold text-stone-900">Lærling­bedrift</p>
              <p className="text-sm text-stone-600 mt-1">Godkjent læreplass for fagbrev</p>
            </div>
            <div className="border-l-2 border-amber-400 pl-5">
              <p className="text-3xl font-bold text-stone-900">EHF-faktura</p>
              <p className="text-sm text-stone-600 mt-1">Standard for næringskunder</p>
            </div>
            <div className="border-l-2 border-amber-400 pl-5">
              <p className="text-3xl font-bold text-stone-900">4 ansatte</p>
              <p className="text-sm text-stone-600 mt-1">Hver med spisskompetanse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section id="tjenester" className="py-24 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-400 mb-4 font-semibold">— Tjenester —</p>
            <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              Alt en moderne entreprenør skal kunne.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-700">
            {[
              { title: "Nybygg & tilbygg", desc: "Fra grunnmur til ferdig overlevert hus eller næringsbygg." },
              { title: "Rehabilitering", desc: "Oppussing og modernisering av eksisterende bygg." },
              { title: "Tak", desc: "Tekking, takomlegging og takvedlikehold." },
              { title: "Fasade", desc: "Kledning, etterisolering og fasadeoppgradering." },
              { title: "Snekker­arbeid", desc: "Klassisk tømrerarbeid — alt fra terrasse til innvendig listverk." },
              { title: "Betongarbeid", desc: "Plate på mark, vegger og spesialarbeid i betong." },
              { title: "Betongsaging & kjerneboring", desc: "Presisjonsarbeid i eksisterende konstruksjoner." },
              { title: "Fliser", desc: "Bad, gulv og vegg — i moderne og klassisk design." },
              { title: "Maling", desc: "Innvendig og utvendig overflatebehandling." },
            ].map((s) => (
              <div key={s.title} className="bg-stone-900 p-7 hover:bg-stone-800 transition-colors">
                <h3 className="text-lg font-bold mb-2 text-amber-400">{s.title}</h3>
                <p className="text-sm text-stone-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-14 text-sm text-stone-400 italic max-w-xl mx-auto">
            Vi tar gjerne en titt på prosjektet ditt — ring oss for en uforpliktende prat.
          </p>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-700 mb-4 font-semibold">— Teamet —</p>
            <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              Folkene bak.
            </h2>
            <p className="text-lg text-stone-600 mt-4">Du snakker direkte med oss — ingen mellomledd.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Finn Hokland", role: "Daglig leder", phone: "97 70 24 26", tel: "+4797702426" },
              { name: "Elisabeth Hokland", role: "Regnskap", phone: "47 88 98 64", tel: "+4747889864" },
              { name: "Bjørn Rask", role: "Prosjektleder", phone: "97 54 29 40", tel: "+4797542940" },
              { name: "Christoffer Lockert", role: "Ingeniør", phone: "47 36 76 64", tel: "+4747367664" },
            ].map((p) => (
              <div key={p.name} className="bg-white border border-stone-200 rounded-lg p-6 hover:border-amber-400 transition-colors">
                <div className="w-12 h-12 rounded-full bg-stone-900 text-amber-400 flex items-center justify-center font-bold mb-4">
                  {p.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
                </div>
                <p className="font-bold text-stone-900">{p.name}</p>
                <p className="text-xs uppercase tracking-widest text-stone-500 mt-1 mb-4">{p.role}</p>
                <a href={`tel:${p.tel}`} className="text-sm text-stone-700 hover:text-amber-700 transition-colors">
                  {p.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prosjekter / Galleri */}
      <section id="prosjekter" className="py-24 px-6 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-700 mb-4 font-semibold">— Prosjekter —</p>
            <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              Noe av det vi har bygget.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80", alt: "Byggeprosjekt fra Hadsel Bygg" },
              { src: "https://images.unsplash.com/photo-1574359411659-15573a27bfcb?auto=format&fit=crop&w=900&q=80", alt: "Interiørrehabilitering" },
              { src: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=900&q=80", alt: "Bygg i Vesterålen" },
              { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80", alt: "Snekkerarbeid på byggeplass" },
              { src: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=900&q=80", alt: "Fasadearbeid" },
              { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80", alt: "Håndverker i arbeid" },
            ].map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden bg-stone-200 group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-amber-700 mb-4 font-semibold">— Kontakt —</p>
              <h2 className="font-bold mb-6 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
                Be om en uforpliktende prat.
              </h2>
              <p className="text-lg text-stone-700 mb-10 leading-relaxed">
                Ring oss for en uforpliktende vurdering av prosjektet ditt. Vi tar gjerne
                en befaring så vi vet hva som trengs før vi gir tilbud.
              </p>

              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mb-2 font-semibold">Hovednummer</p>
                  <a href="tel:+4791670535" className="block text-2xl font-bold text-stone-900 hover:text-amber-700 transition-colors">
                    91 67 05 35
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mb-2 font-semibold">E-post</p>
                  <a href="mailto:finn@hbv.as" className="block text-lg text-stone-900 hover:text-amber-700 transition-colors">
                    finn@hbv.as
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mb-2 font-semibold">Adresse</p>
                  <p className="text-lg text-stone-900">Måkeveien 2, 8450 Stokmarknes</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mb-2 font-semibold">Åpningstider</p>
                  <p className="text-stone-700">Man–tor 07:00–15:30</p>
                  <p className="text-stone-700">Fre 07:00–14:00</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-stone-300/60 shadow-sm h-full min-h-[480px]">
              <iframe
                title="Hadsel Bygg og Vedlikehold — Måkeveien 2, Stokmarknes"
                src="https://maps.google.com/maps?q=M%C3%A5keveien%202%2C%208450%20Stokmarknes&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: "480px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-stone-900 text-stone-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            Har du et prosjekt på gang?
          </h2>
          <p className="text-lg text-stone-300 mb-10 leading-relaxed">
            Ring Finn på 91 67 05 35 for å diskutere prosjektet, eller send en e-post.
            Vi gir alltid et tydelig svar på hva som er mulig.
          </p>
          <a
            href="tel:+4791670535"
            className="inline-block px-10 py-4 bg-amber-400 text-stone-900 hover:bg-amber-300 transition-colors uppercase tracking-[0.25em] text-xs font-bold"
          >
            Ring 91 67 05 35
          </a>
        </div>
      </section>

      <footer className="bg-stone-950 text-stone-400 py-10 px-6 text-center text-xs">
        <p className="uppercase tracking-widest mb-2 font-semibold">Hadsel Bygg og Vedlikehold AS</p>
        <p>Måkeveien 2 · 8450 Stokmarknes · 91 67 05 35 · finn@hbv.as</p>
        <p className="mt-3 opacity-60">© {new Date().getFullYear()} Hadsel Bygg og Vedlikehold</p>
      </footer>
    </div>
  );
}
