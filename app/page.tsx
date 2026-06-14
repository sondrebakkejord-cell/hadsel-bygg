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
            <a href="#godkjenninger" className="hover:text-amber-300 transition-colors uppercase tracking-widest text-xs">Sertifiseringer</a>
            <a href="#kontakt" className="hover:text-amber-300 transition-colors uppercase tracking-widest text-xs">Kontakt</a>
            <a href="tel:+4791670535" className="px-5 py-2.5 bg-amber-400 text-amber-950 hover:bg-amber-300 transition-colors uppercase tracking-widest text-xs font-bold">
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
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-amber-400" />
            <p className="text-[11px] uppercase tracking-[0.4em] text-amber-400 font-semibold">Stokmarknes · siden 2003</p>
          </div>
          <h1 className="font-bold mb-8 max-w-4xl" style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)", letterSpacing: "-0.02em", lineHeight: 1 }}>
            Vi bygger for<br />
            <span className="text-amber-400">framtiden.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-xl mb-10 leading-relaxed">
            Entreprenør med 27 ansatte i Stokmarknes. Vi tar prosjekter fra Fauske
            i sør til Harstad i nord — bygg, betong, snekring, fliser og maling.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+4791670535"
              className="inline-block px-8 py-4 bg-amber-400 text-amber-950 hover:bg-amber-300 transition-colors uppercase tracking-[0.25em] text-xs font-bold"
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

      {/* Industrial stripe band */}
      <div
        className="h-3 w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #0c0a09 0 14px, #fbbf24 14px 28px)",
        }}
        aria-hidden="true"
      />

      {/* Om oss */}
      <section className="py-28 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-700 mb-6 font-semibold">— Om oss —</p>
            <h2 className="font-bold mb-8 leading-[1.02]" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", letterSpacing: "-0.025em" }}>
              22 år, 27 fagfolk og prosjekter langs hele Saltfjellet til Tromsgrensa.
            </h2>
            <div className="space-y-5 text-lg text-stone-700 leading-relaxed">
              <p>
                Hadsel Bygg og Vedlikehold ble etablert i 2003. I dag teller vi 27 ansatte
                med base i Måkeveien på Stokmarknes — tømrere, betongarbeidere, flisleggere
                og ingeniører.
              </p>
              <p>
                Vi tar oppdrag fra Fauske i sør til Harstad og Narvik i nord. Privatkunder
                som skal bygge på, næringsbygg som skal rehabiliteres, og betong- og
                flislegging der det krever fagbrev og presisjon.
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <dl className="divide-y divide-stone-300/70 border-y border-stone-300/70">
              {[
                ["Etablert", "2003"],
                ["Ansatte", "27 fagfolk"],
                ["Arbeidsområde", "Fauske → Harstad"],
                ["Hovedkontor", "Måkeveien 2, Stokmarknes"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between py-4">
                  <dt className="text-xs uppercase tracking-widest text-stone-500 font-semibold">{k}</dt>
                  <dd className="text-base md:text-lg text-stone-900 font-medium text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section id="tjenester" className="py-24 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-400 mb-4 font-semibold">— Vi utfører arbeid innen —</p>
            <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              Tjenester.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Alt innen betong", desc: "Plate på mark, vegger og spesialarbeid i betong.", img: "https://hbv.as/resources/acc7fe47b7c5a21d7c244415325eb9.jpg" },
              { title: "Tømrerarbeid", desc: "Klassisk snekring — fra konstruksjon til innvendig listverk.", img: "https://hbv.as/resources/5ee3b8905a1f8e0ebb140b0a06b2f5.jpg" },
              { title: "Betongsaging & kjerneboring", desc: "Presisjonsarbeid i eksisterende konstruksjoner.", img: "https://hbv.as/resources/dd84bace99512112d4803412d3dd48.jpg" },
              { title: "Flislegging", desc: "Bad, gulv og vegg — i moderne og klassisk design.", img: "https://hbv.as/resources/870452e883f11c378317e951148b4a.jpg" },
            ].map((s) => (
              <article key={s.title} className="group relative overflow-hidden rounded-lg bg-stone-800 aspect-[4/3]">
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-7">
                  <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-2 tracking-tight">{s.title}</h3>
                  <p className="text-sm md:text-base text-stone-200 max-w-md leading-relaxed">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { title: "Rehabilitering", desc: "Oppussing og modernisering av eksisterende bygg." },
              { title: "Tak & fasade", desc: "Tekking, kledning, etterisolering og oppgradering." },
              { title: "Maling", desc: "Innvendig og utvendig overflatebehandling." },
            ].map((s) => (
              <div key={s.title} className="bg-stone-800/60 border border-stone-700 rounded-lg p-6">
                <h3 className="text-base font-bold text-amber-400 mb-2">{s.title}</h3>
                <p className="text-sm text-stone-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-14 text-sm text-stone-400 italic max-w-xl mx-auto">
            Vi tar gjerne en titt på prosjektet ditt — ring oss for en uforpliktende prat.
          </p>
        </div>
      </section>

      {/* Slik jobber vi */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-700 mb-4 font-semibold">— Fra første samtale til ferdig bygg —</p>
            <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              Slik jobber vi.
            </h2>
          </div>

          <ol className="grid md:grid-cols-4 gap-px bg-stone-300/60 border border-stone-300/60">
            {[
              { n: "01", title: "Befaring", desc: "Vi tar oss tid til å se prosjektet og forstå hva du faktisk trenger. Gratis, uforpliktende." },
              { n: "02", title: "Tilbud", desc: "Du får et tydelig tilbud med pris, leveringstid og ansvarsfordeling — ingen overraskelser." },
              { n: "03", title: "Bygging", desc: "Vi bemanner med riktig fag — tømrere, betongarbeidere, flisleggere — og holder framdriften." },
              { n: "04", title: "Overlevering", desc: "Sluttbefaring og dokumentasjon. Vi følger opp etter overtakelse også." },
            ].map((step) => (
              <li key={step.n} className="bg-white p-7 relative">
                <span className="block text-5xl font-bold text-amber-400 mb-3 tracking-tight" style={{ letterSpacing: "-0.04em" }}>{step.n}</span>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Godkjenninger */}
      <section id="godkjenninger" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-700 mb-4 font-semibold">— Sertifiseringer —</p>
            <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              Vi er godkjent som.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-4xl mx-auto">
            {[
              { src: "https://hbv.as/resources/Miljfyrtarn-norsk-farger.png", alt: "Miljøfyrtårn — sertifisert for bærekraftig drift" },
              { src: "https://hbv.as/resources/godkjent_ansvarsrett.png", alt: "Sentralt godkjent — godkjent ansvarsrett" },
              { src: "https://hbv.as/resources/sellihca-supplier-logo-stamp.jpg", alt: "Sellihca Qualified — leverandørsertifisering" },
              { src: "https://hbv.as/resources/neso%20logo.png", alt: "NESO — Nordnorske Entreprenørers Service-Organisasjon" },
            ].map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center h-24 md:h-28 w-full">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center text-center">
            <img
              src="https://hbv.as/resources/merket-bedrifter-med-laerling.png"
              alt="Vi har lærling — godkjent lærebedrift"
              className="w-28 md:w-32 mb-4"
              loading="lazy"
            />
            <p className="text-sm text-stone-600 max-w-md">
              Godkjent lærebedrift — vi tar imot lærlinger og bidrar til opplæring av neste
              generasjon håndverkere.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-28 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-700 mb-4 font-semibold">— Kontaktpersoner —</p>
            <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
              Folk du kan ringe direkte.
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-5">
            {/* Featured: Finn */}
            <article className="md:col-span-6 bg-stone-900 text-stone-50 rounded-lg p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, #0c0a09 0 10px, #fbbf24 10px 20px)",
                }}
                aria-hidden="true"
              />
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-amber-400 mb-5 font-semibold">Daglig leder</p>
                <h3 className="font-bold mb-3" style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
                  Finn Harald Hokland
                </h3>
                <p className="text-stone-300 leading-relaxed mb-8 max-w-md">
                  Har drevet Hadsel Bygg siden 2003. Ring direkte hvis du har et større
                  prosjekt eller vil ha en uforpliktende prat om hva som er mulig.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <a href="tel:+4797702426" className="inline-flex items-center gap-2 px-5 py-3 bg-amber-400 text-amber-950 hover:bg-amber-300 transition-colors font-bold text-sm">
                  Ring 97 70 24 26
                </a>
                <a href="mailto:finn@hbv.as" className="text-sm text-stone-300 hover:text-amber-400 transition-colors underline underline-offset-4">
                  finn@hbv.as
                </a>
              </div>
            </article>

            {/* Sidebar: 3 others stacked */}
            <div className="md:col-span-6 grid gap-4">
              {[
                { name: "Elisabeth Hokland", role: "Regnskap", phone: "47 88 98 64", tel: "+4747889864" },
                { name: "Bjørn Rask", role: "Prosjektleder", phone: "97 54 29 40", tel: "+4797542940" },
                { name: "Christoffer Lockert", role: "Ingeniør", phone: "47 36 76 64", tel: "+4747367664" },
              ].map((p) => (
                <a
                  key={p.name}
                  href={`tel:${p.tel}`}
                  className="group flex items-center gap-5 bg-white border border-stone-200 rounded-lg p-5 hover:border-stone-900 hover:shadow-sm transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-stone-100 text-amber-950 flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:bg-amber-400 transition-colors">
                    {p.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-stone-900">{p.name}</p>
                    <p className="text-xs uppercase tracking-widest text-stone-500 mt-0.5">{p.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm text-stone-700 group-hover:text-amber-700 transition-colors whitespace-nowrap">{p.phone}</p>
                  </div>
                </a>
              ))}
            </div>
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
      <section className="relative py-24 px-6 bg-stone-900 text-stone-50 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-3"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #0c0a09 0 14px, #fbbf24 14px 28px)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-400 mb-4 font-semibold">— Befaring —</p>
            <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", letterSpacing: "-0.025em", lineHeight: 1.05 }}>
              Skal du bygge,<br />
              eller pusse opp?
            </h2>
            <p className="text-lg text-stone-300 leading-relaxed">
              Ring oss for en uforpliktende befaring. Vi kommer ut, ser på prosjektet, og
              gir et ærlig svar på hva som er mulig — uten å selge inn det du ikke trenger.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+4791670535"
              className="inline-flex items-center justify-between px-7 py-5 bg-amber-400 text-amber-950 hover:bg-amber-300 transition-colors font-bold"
            >
              <span className="text-xs uppercase tracking-[0.25em]">Ring hovednummer</span>
              <span className="text-xl">91 67 05 35</span>
            </a>
            <a
              href="mailto:finn@hbv.as"
              className="inline-flex items-center justify-between px-7 py-5 border border-stone-50/20 hover:border-amber-400 transition-colors font-semibold"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-stone-400">Send e-post</span>
              <span className="text-base">finn@hbv.as</span>
            </a>
          </div>
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
