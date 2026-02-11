# ReparaturPass - Projekt Terv

## Kontextus

Ez a dokumentum egy korabbi Claude Code session-bol szarmazik, ahol megterveztuk a punktepass rendszer boviteset egy "Recht auf Reparatur" (Javitashoz valo jog) platformma. Az uj session-ben ezt a tervet kell megvalositani a `punktepass-code` repoban.

---

## 1. Hatter: EU "Recht auf Reparatur" torveny

### Mi ez?
2026. julius 31-tol az EU kotelezo **javitashoz valo jogot** vezet be (EU Richtlinie 2024/1799):

- Gyartoknak a garanciadon **tul is javitast kell biztositaniuk** bizonyos termekeknel (okostelefon, tablet, mosogep, szaritogep, porszivo, mosogatogep stb.)
- Ha a fogyaszto **javitast valaszt csere helyett**, +12 honappal meghosszabbodik a szavatossag
- Uj **EU javithatosagi cimke** erkezik 2026 szeptembertol
- Nemetorszagnak 2026. julius 31-ig kell atultetnie a nemzeti jogba

### Miert relevans?
- Nemetorszagban ~1 millio Handwerk vallalkozas van
- Milliok fogyaszto erintett
- NINCS meg platform ami osszekapcsolja a fogyasztokat a javito mesterekkel EU-konform modon
- A timing TOKELETES - 5 honap van a hataridoig

---

## 2. A meglevo punktepass rendszer

A punktepass egy mar mukodo, komplex rendszer a kovetkezo funkciokkal:

- **Digitalis husegprogram** (pontgyujtes rendszer)
- **Reparaturauftrag** (javitasi megrendeles kezeles) - kulon admin panellel
- **Ably** integracio (realtime push/websocket)
- **Rengeteg API** endpoint
- **Admin panel** a javito mestereknek
- A reparaturauftrag es a pontgyujto rendszer **ossze van kapcsolva**

**FONTOS:** Az uj session-ben eloszor meg kell vizsgalni a punktepass-code repo strukturajat, hogy pontosan lassuk mi van mar megvalositva es mi kell meg.

---

## 3. A cel: ReparaturPass.de platform

A punktepass rendszert kibovitjuk egy teljes "Recht auf Reparatur" platformma, ami 3 felhasznalo tipust szolgal ki.

### 3.1 Fogyaszto oldal (Verbraucher)

**Dashboard - "Meine Gerate":**
- Keszulekek nyilvantartasa (tipus, gyarto, modell, vasarlas datuma, garancia)
- Szamla/bizonylat feltoltes (foto/PDF)
- Garancia-tracker automatikus ertesitesekkel
- EU +12 honap garancia automatikus szamitas javitas eseten

**"Reparatur anfragen" (Javitas kerese):**
- Problema leirasa + foto feltoltes
- Iranyitoszam megadas
- Elerheto javitok listaja terkepen (geo-kereso)
- Tavolsag, ar-becslees, ertekelesek megjelenitese
- Egy kattintasos megkereses kuldes

**"Meine Reparaturen" (Javitasaim):**
- Elo allapot-kovetes (Ably realtime push)
- Allapotok: Eingegangen → Diagnose → Ersatzteil bestellt → In Reparatur → Fertig → Abgeholt
- Push ertesites minden allapotvaltozasnal

**"Meine Punkte" (Pontjaim) - MEGLEVO PUNKTEPASS!**
- Pontgyujtes javitasokert (javittas csere helyett = +50 pont)
- 5. javitas = +100 bonus pont
- Pontok bevalthatok: kedvezmeny, partner-kuponok, ingyenes ellenorzes

**"Garantie-Tracker":**
- Osszes garancia egy helyen
- Automatikus +12 honap szamitas javitas utan
- Ertesites lejarat elott

### 3.2 Javito mester oldal (Reparaturbetrieb)

**Admin Panel (MAR MEGVAN a punktepass-ban!):**

- **Uj megkeresesek:** Realtime push (Ably) uj javitasi kerelmekrol
  - Termek info + problema leiras + foto
  - Tavolsag a fogyasztotol
  - Elfogadas / Elutasitas gomb

- **Auftrage (Megrendelesek) - MAR MEGVAN:**
  - Allapot kezeles (drag & drop vagy gombokkal)
  - Minden allapotvaltozas realtime push a fogyasztonak

- **Profil oldal (UJ):**
  - Uzlet adatai, nyitvatartas, szakteruletek
  - Kepek az uzletrol
  - Elfogadott termek-kategoriak
  - Ar-tartomanyok megadasa (pl. "Waschmaschine ab 45 EUR")
  - Google Reviews integracio

- **Rechnung & Garantie (Szamla & Garancia):**
  - Automatikus szamla-generalas
  - EU-kompatibilis javitasi garancia-igazolas
  - +12 honap garancia dokumentum

- **Bewertungen (Ertekellesek):**
  - Fogyasztok ertekelhetik a mestert (1-5 csillag + szoveg)
  - Valaszolasi lehetoseg

- **Statistiken (Statisztikak):**
  - Havi javitasok szama, bevetel
  - Visszatero ugyfelek aranya (pontrendszer hatasa!)
  - Legnepszerubb termek-kategoriak

### 3.3 Gyartoi integracio (Hersteller) - KESOBB, V2

- Gyartok fizethetnek hogy az o hivatalos javitojuk legyen kiemelt helyen
- Alkatresz-ellatasi lánc integracio
- Gyartoi garancia-ellenorzo API

---

## 4. Uzleti modell

### 4.1 Fo beveteli forrasok

**A) Mester elofizetes (SaaS - fo bevetel):**

| Csomag | Ar | Tartalom |
|--------|-----|----------|
| Starter | 29 EUR/ho | 20 megrendeles/ho, alap profil |
| Professional | 59 EUR/ho | Korlátlan megrendeles, kiemelt hely, automatikus szamlakezeles |
| Premium | 99 EUR/ho | Minden + tobb telephely + API + sajat branding |

**B) Tranzakcios dij:**
- Minden kozvetitett javitas utan: 2-5% jutalek

**C) Alkatresz Marketplace (V2):**
- Javitok alkatreszeket rendelhetnek a platformon
- Jutalek minden rendelesbol

**D) Gyartoi integracio (V2):**
- Gyartok fizetnek a kiemelt pozicioert
- Hivatalos szerviz-partner jeloles

### 4.2 Realisztikus bevetel-terv

| Idoszak | Fizeto mesterek | Havi bevetel |
|---------|----------------|-------------|
| 2026 Q3 (launch) | 20-30 | ~1.500 EUR/ho |
| 2026 Q4 | 50-100 | ~4.000 EUR/ho |
| 2027 Q1-Q2 | 100-200 | ~9.000 EUR/ho |
| 2027 Q3-Q4 | 200-500 | ~20.000 EUR/ho |
| 2028 | 500-1000 | ~40.000+ EUR/ho |

### 4.3 Fogyaszto oldal monetizacio

- A fogyasztoi hasznalat **INGYENES** (ez vonzza a tomsget)
- Energieausweis affiliate linkek ahol relevans (~20 EUR/lead)
- Google AdSense a tanacsado tartalom-oldalakon
- Premium funkciok: reszletes garancia-jelentes PDF (4,99 EUR)

---

## 5. Technikai terv

### 5.1 Meglevo infrastruktura (punktepass-code)

Eloszor meg kell vizsgalni a repo-t, de a kovetkezok mar leteznek:
- Husegprogram / pontrendszer
- Reparaturauftrag rendszer
- Admin panel
- Ably realtime integracio
- API-k

### 5.2 Uj komponensek fejlesztese

**Frontend (fogyaszto):**
- Landing page (ReparaturPass.de)
- Regisztracio / Login (ha meg nincs)
- Keszulek-nyilvantarto dashboard
- Javitas-kero wizard (problema leiras + foto + geo-kereso)
- Javito-kereso terkep nezet (iranyitoszam alapu)
- Elo allapot-koveto oldal
- Pont-dashboard (meglevo punktepass bovites)
- Garancia-tracker

**Frontend (mester):**
- Mester regisztracio + onboarding
- Publikus profil oldal (ertekelesek, arak, szakteruletek)
- Megkereses-kezelo (elfogadas/elutasitas Ably push-sal)
- Bovitett statisztikak

**Backend:**
- Geo-kereso API (iranyitoszam → kozeli mesterek)
- Keszulek-nyilvantarto CRUD
- Garancia-tracker logika (+12 honap EU szabaly)
- Ertekeles rendszer
- Szamla/garancia PDF generalas
- Stripe fizetes integracio (mester elofizetesek)
- Push ertesitesek (Ably - mar megvan)

**Adatbazis bovites:**
- `devices` tabla (fogyaszto keszulekei)
- `repair_requests` tabla (javitasi kerelmek)
- `technician_profiles` tabla (mester profilok + geo koordinatak)
- `reviews` tabla (ertekellesek)
- `subscriptions` tabla (mester elofizetesek)
- `warranties` tabla (garancia nyilvantartas)

### 5.3 Kulso szolgaltatasok

| Szolgaltatas | Cel | Becsult koltseg |
|---|---|---|
| Ably | Realtime (MAR MEGVAN) | Meglevo |
| Stripe | Fizetes | 1,4% + 0,25 EUR/tranzakcio |
| Mapbox vagy Google Maps | Terkep + geo-kereso | Ingyenes szintig eleg |
| Vercel / meglevo hosting | Hosting | Meglevo |
| Resend / Mailgun | Email ertesitesek | Ingyenes szintig |

---

## 6. Fejlesztesi idovonal

### Fazis 1: Alapok (2026 marcius - aprilis)
- [ ] Repo atnezes, architektura megtertes
- [ ] Fogyasztoi landing page + regisztracio
- [ ] Keszulek-nyilvantarto (CRUD)
- [ ] Javitas-kero wizard (alap verzio)
- [ ] Mester regisztracio + profil

### Fazis 2: Marketplace (2026 aprilis - majus)
- [ ] Geo-kereso (iranyitoszam → kozeli mesterek)
- [ ] Megkereses-kuldes + Ably push
- [ ] Allapot-kovetes (meglevo Reparaturauftrag bovites)
- [ ] Ertekeles rendszer
- [ ] Garancia-tracker (+12 honap EU logika)

### Fazis 3: Monetizacio (2026 majus - junius)
- [ ] Stripe integracio (mester elofizetesek)
- [ ] Szamla/garancia PDF generalas
- [ ] Premium mester funkciok (kiemelt hely, statisztikak)

### Fazis 4: Launch (2026 junius - julius)
- [ ] Beta teszt 20-30 mesterrel (pl. Berlin)
- [ ] SEO tartalom-oldalak ("Recht auf Reparatur", "Was andert sich 2026" stb.)
- [ ] Marketing indilas
- [ ] **2026. julius 31: EU torveny hatalyba lep** → media figyelm, organikus novekedes

### Fazis 5: Skalazas (2026 Q3-Q4)
- [ ] Tobb varos
- [ ] Alkatresz marketplace (V1)
- [ ] Gyartoi integraciok
- [ ] App (PWA)

---

## 7. Elso lepesek az uj session-ben

Amikor megnyitod ezt a tervet egy uj Claude Code session-ben a `punktepass-code` repoval:

1. **Vizsgald meg a repo strukturat** - mappastruktura, package.json, hasznalt technologiak
2. **Terkepezd fel a meglevo funkcionalitast** - pontosan mi van mar kesz (pontrendszer, reparaturauftrag, admin, Ably, API-k)
3. **Tervezd meg az adatbazis boviteset** - milyen uj tablak/mezok kellenek
4. **Kezdj a fogyasztoi landing page-dzsel** - ez a legfontosabb vizualisan
5. **Bovitsd a meglevo Reparaturauftrag rendszert** - fogyasztoi oldali interfesszel

---

## 8. Domain es branding

- **Regisztralt domain:** co2-kosten-rechner.de (ez egy masik projekt, lasd lentebb)
- **Javasolt domain a platformhoz:** ReparaturPass.de vagy MeinReparaturPass.de (ellenorizni kell!)
- **Branding:** "Dein Recht auf Reparatur - einfach gemacht"

---

## 9. Masik projekt: CO2-Kosten-Rechner (kulon oldal)

A co2-kosten-rechner.de domain mar regisztralva van egy masik niche projekhez:
- Egyszeru CO2-koltseg elosztas szamolo (berlado/berlo kozott)
- A CO2KostAufG torveny 10 lepcsofoku modellje alapjan
- Monetizacio: AdSense + Energieausweis affiliate + Premium PDF
- Ez egy KULON, egyszeru projekt - nem kapcsolodik a punktepass-hoz
- Megepitheto 1-3 het alatt Next.js-szel

---

## 10. Kapcsolodo EU/nemet torvenyi valtozasok 2026-ban

Amik meg relevansak lehetnek a platformhoz:

| Torveny | Datum | Relevancia |
|---------|-------|------------|
| Recht auf Reparatur | 2026.07.31 | **FO TEMA** |
| EU Reparatur-Informationsplattform | 2026+ | Integralhato |
| Barrierefreiheitsstarkungsgesetz (BFSG) | 2025.06.28 | Az oldal legyen akadalymentes! |
| E-Rechnungspflicht | 2027.01.01 | Mesterek szamlakezelesenel relevans |
| Greenwashing-tilalom | 2026.09.27 | "Nachhaltig reparieren" marketing figyelni |

---

*Ez a terv a https://claude.ai/code/session_01UKjzzMGvWb9iSWKZQzqiPL session-bol szarmazik (2026.02.11)*
