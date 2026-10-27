/* Částky a výsledky jsou zaokrouhlené až v posledním kroku. Strany odkazují na pořadí stran PDF. */
const FC_SEMINARS = [
  'Bilance a finanční analýza',
  'Pracovní kapitál',
  'Zdroje financování',
  'Finanční plánování',
  'Oceňování a investice',
  'IPO, fúze a akvizice'
];
const FC_EXAMPLES = [
  {
    id: 'zisk-cf', seminar: 1, title: 'Stejný provoz, jiný zisk', kind: 'Ze semináře',
    task: 'Spočítej zisk podniků A a B a porovnej jejich provozní peněžní tok. Pro jednoduchost jsou tržby inkasované, materiál i mzdy zaplacené a daně neuvažujeme.',
    given: ['Oba podniky: tržby 500, materiál 170, mzdy 180 (stejné peněžní jednotky).', 'A: odpisy 60, tvorba rezerv 80. B: odpisy 40, tvorba rezerv 60.'],
    formulas: ['Zisk = tržby − materiál − mzdy − odpisy − tvorba rezerv', 'CF = zisk + odpisy + tvorba rezerv'],
    legend: 'CF = peněžní tok. Zjednodušení platí bez dalších nepeněžních položek a změn pracovního kapitálu.',
    steps: ['Zisk A = 500 − 170 − 180 − 60 − 80 = 10.', 'Zisk B = 500 − 170 − 180 − 40 − 60 = 50.', 'CF A = 10 + 60 + 80 = 150. CF B = 50 + 40 + 60 = 150.'],
    result: 'Zisk A je 10 a B je 50, ale oba mají CF 150.',
    lesson: 'Odpisy a tvorba rezerv jsou náklady, nikoli aktuální peněžní výdaje. Samotný vyšší zisk zde nedokazuje lepší provoz.',
    source: 'Úvod_Příklady.pdf, str. 1; doplněny předpoklady inkasa a plateb.'
  },
  {
    id: 'rozvaha', seminar: 1, title: 'Nákup materiálu na úvěr', kind: 'Upravený příklad',
    task: 'Urči změnu rozvahy po nákupu materiálu na dodavatelský úvěr. DPH neuvažujeme.',
    given: ['Před nákupem: peníze 100 000 Kč, vlastní kapitál 100 000 Kč, žádné dluhy.', 'Materiál za 30 000 Kč bude zaplacen později.'],
    formulas: ['Aktiva = vlastní kapitál + cizí kapitál', 'Změna zásob = změna závazků vůči dodavateli'],
    legend: 'Aktiva jsou majetek, pasiva vyjadřují zdroje jeho financování.',
    steps: ['Zásoby vzrostou z 0 na 30 000 Kč; peníze zůstávají 100 000 Kč.', 'Závazky vůči dodavateli vzrostou z 0 na 30 000 Kč.', 'Kontrola: aktiva 100 000 + 30 000 = pasiva 100 000 + 30 000.'],
    result: 'Aktiva i pasiva jsou 130 000 Kč. Peníze se při nákupu nezmění.',
    lesson: 'Nákup na fakturu ještě není peněžní výdaj. Zisk se pouhým pořízením zásoby také nemění.',
    source: 'Úvod_Příklady.pdf, str. 2; doplněny jednoduché částky.'
  },
  {
    id: 'marze', seminar: 1, title: 'Od tržeb k hrubému a čistému zisku', kind: 'Ze semináře',
    task: 'Doplň hrubý zisk, náklady na prodané výrobky, provozní náklady a součet daní a úroků. Uvažuj zjednodušený výkaz bez dalších finančních položek.',
    given: ['Tržby 202,46 mil. €, hrubá marže 18 %.', 'Provozní zisk (EBIT) 12,62 mil. €, čistý zisk 10,84 mil. €.'],
    formulas: ['Hrubý zisk = tržby × hrubá marže', 'Náklady prodaných výrobků = tržby − hrubý zisk', 'Provozní náklady = hrubý zisk − EBIT', 'Daně a úroky = EBIT − čistý zisk'],
    legend: 'EBIT = zisk před úroky a zdaněním. Marže 18 % se dosazuje jako 0,18.',
    steps: ['Hrubý zisk = 202,46 × 0,18 = 36,4428 mil. €.', 'Náklady prodaných výrobků = 202,46 − 36,4428 = 166,0172 mil. €.', 'Provozní náklady = 36,4428 − 12,62 = 23,8228 mil. €.', 'Daně a úroky = 12,62 − 10,84 = 1,78 mil. €.'],
    result: 'Po zaokrouhlení: 36,44; 166,02; 23,82 a 1,78 mil. €.',
    lesson: 'Procentní marže není částka zisku. Zde vycházíme přímo ze zadaného EBIT, nikoli ze zaokrouhlené provozní marže.',
    source: 'Úvod_Příklady.pdf, str. 4.'
  },
  {
    id: 'neprime-cf', seminar: 1, title: 'Cash flow od zisku až k účtu', kind: 'Ze semináře',
    task: 'Sestav dílčí CF I–IV a ověř konečný stav účtu. Předpokládej, že nebyly dividendy, prodeje majetku ani jiné změny fondů; změna fondů a zisku tak odpovídá zisku období.',
    given: ['Dlouhodobý majetek netto 180 → 270; odpisy 90.', 'Zásoby 80 → 110; pohledávky 60 → 50; dodavatelé 60 → 90.', 'Základní kapitál 120 → 180; úvěry 110 → 70; fondy a zisk 70 → 100.', 'Bankovní účet 40 → 10; vše ve stejných peněžních jednotkách.'],
    formulas: ['CF I = zisk + odpisy', 'CF II = CF I − Δzásob − Δpohledávek + Δdodavatelů', 'Investice = konečný majetek netto − počáteční majetek netto + odpisy', 'CF III = CF II − investice', 'CF IV = CF III + vklady vlastníků − splátky úvěrů'],
    legend: 'Δ = konečný stav − počáteční stav. CF II je provozní tok, CF IV celková změna peněz.',
    steps: ['Zisk = 100 − 70 = 30. CF I = 30 + 90 = 120.', 'CF II = 120 − 30 − (−10) + 30 = 130.', 'Investice = 270 − 180 + 90 = 180. CF III = 130 − 180 = −50.', 'CF IV = −50 + 60 − 40 = −30.', 'Konečný účet = 40 − 30 = 10; souhlasí s rozvahou.'],
    result: 'CF I = 120; CF II = 130; CF III = −50; CF IV = −30. Na účtu zbude 10.',
    lesson: 'Růst zásob peníze váže, pokles pohledávek je uvolňuje. Samotná změna netto majetku není výše investice.',
    source: 'Úvod_Příklady.pdf, str. 5; členění CF podle Úvod_Bilance_2026_Moodle.pdf, str. 35.'
  },
  {
    id: 'cpk', seminar: 2, title: 'Čistý pracovní kapitál', kind: 'Upravený příklad',
    task: 'Vypočítej, kolik oběžných aktiv je financováno dlouhodobými zdroji.',
    given: ['Oběžná aktiva 800 000 Kč.', 'Krátkodobé závazky 500 000 Kč.'],
    formulas: ['ČPK = OA − krátkodobé závazky'],
    legend: 'ČPK = čistý pracovní kapitál; OA = oběžná aktiva.',
    steps: ['Dosadíme: ČPK = 800 000 − 500 000.', 'Rozdíl je 300 000 Kč.'],
    result: 'ČPK je 300 000 Kč.',
    lesson: 'Kladný ČPK znamená dlouhodobé krytí části oběžných aktiv. Neznamená, že stejná částka leží na účtu.',
    source: 'WCM_2026-Moodle.pdf, str. 3; jednoduché modelové částky.'
  },
  {
    id: 'pohledavky', seminar: 2, title: 'Co udělá delší splatnost faktur?', kind: 'Ze semináře',
    task: 'Spočítej průměrné pohledávky při inkasu za 30 a za 60 dní a dodatečnou potřebu kapitálu. Prodeje jsou rovnoměrné a všechny na úvěr.',
    given: ['Roční prodeje 36 000 000 Kč.', 'Použij obchodní rok 360 dní.'],
    formulas: ['Denní prodeje = roční prodeje / 360', 'Pohledávky = denní prodeje × doba inkasa', 'Dodatečný kapitál = nové pohledávky − původní pohledávky'],
    legend: 'Doba inkasa je průměrná doba od prodeje do zaplacení ve dnech.',
    steps: ['Denní prodeje = 36 000 000 / 360 = 100 000 Kč.', 'Při 30 dnech: 100 000 × 30 = 3 000 000 Kč.', 'Při 60 dnech: 100 000 × 60 = 6 000 000 Kč.', 'Dodatečná potřeba = 6 000 000 − 3 000 000 = 3 000 000 Kč.'],
    result: 'Pohledávky vzrostou ze 3 na 6 mil. Kč. Je potřeba dalších 3 mil. Kč.',
    lesson: 'Dvojnásobná doba inkasa při stejných prodejích znamená dvojnásobné průměrné pohledávky.',
    source: 'WCM_2026-Moodle.pdf, str. 7.'
  },
  {
    id: 'zasoby', seminar: 2, title: 'Kolik peněz váže zásoba materiálu?', kind: 'Ze semináře',
    task: 'Urči průměrnou zásobu a její roční počet obrátek. Nákupy a spotřeba jsou rovnoměrné.',
    given: ['Roční nákupy materiálu 144 000 Kč.', 'Doba vázanosti v zásobách 10 dní; rok má 360 dní.'],
    formulas: ['Zásoba = (roční nákupy / 360) × doba obratu', 'Počet obrátek = roční nákupy / průměrná zásoba'],
    legend: 'Doba obratu je ve dnech. Pro zásoby zde používáme základ „nákupy“ podle materiálů.',
    steps: ['Denní nákupy = 144 000 / 360 = 400 Kč.', 'Průměrná zásoba = 400 × 10 = 4 000 Kč.', 'Počet obrátek = 144 000 / 4 000 = 36 za rok.'],
    result: 'Průměrná zásoba je 4 000 Kč, obrátí se 36× ročně.',
    lesson: 'Použij stejný oceňovací základ pro tok i zásobu. Tržby a nákupní hodnotu zásob nelze bez rozmyslu míchat.',
    source: 'WCM_2026-Moodle.pdf, str. 6–7; doplněn výpočet obrátek.'
  },
  {
    id: 'ppk', seminar: 2, title: 'Potřeba kapitálu pro provoz', kind: 'Upravený příklad',
    task: 'Spočítej požadavky na pracovní kapitál po odečtení provozních závazků.',
    given: ['Zásoby 300 000 Kč, obchodní pohledávky 200 000 Kč.', 'Dodavatelé 180 000 Kč, mzdové a daňové závazky 20 000 Kč.', 'Jiné provozní položky nejsou.'],
    formulas: ['PPK = provozní aktiva − provozní závazky'],
    legend: 'PPK = požadavky na pracovní kapitál. Zde nepočítáme peníze ani bankovní úvěry.',
    steps: ['Provozní aktiva = 300 000 + 200 000 = 500 000 Kč.', 'Provozní závazky = 180 000 + 20 000 = 200 000 Kč.', 'PPK = 500 000 − 200 000 = 300 000 Kč.'],
    result: 'Provoz vyžaduje další finanční krytí 300 000 Kč.',
    lesson: 'PPK a ČPK nejsou totožné ukazatele: zde pracujeme jen s provozními aktivy a závazky.',
    source: 'WCM_2026-Moodle.pdf, str. 16–17; jednoduché modelové částky.'
  },
  {
    id: 'uverova-politika', seminar: 2, title: 'Vyplatí se prodat na delší splatnost?', kind: 'Ze semináře',
    task: 'Vyhodnoť roční přírůstek zisku od nových zákazníků. Podmínky stávajících zákazníků se nemění. Kapitál v pohledávkách oceň v nákladech.',
    given: ['Nové prodeje 60 000 ks za rok, cena 10 €/ks, náklady 8 €/ks.', 'Inkaso za 2 měsíce, ztráty z neinkasa 10 % nových tržeb.', 'Roční náklady kapitálu 20 %, daně neuvažujeme.'],
    formulas: ['Příspěvek z nových prodejů = počet ks × (cena − náklady na ks)', 'Vázaný kapitál = roční nové náklady × měsíce inkasa / 12', 'Δzisku = příspěvek − ztráty z neinkasa − náklady vázaného kapitálu'],
    legend: 'Δzisku = změna zisku. Kapitál oceňujeme nákladovou hodnotou, nikoli prodejní cenou.',
    steps: ['Příspěvek = 60 000 × (10 − 8) = 120 000 €.', 'Ztráty = 60 000 × 10 × 0,10 = 60 000 €.', 'Vázaný kapitál = 60 000 × 8 × 2/12 = 80 000 €.', 'Cena kapitálu = 80 000 × 0,20 = 16 000 €.', 'Změna zisku = 120 000 − 60 000 − 16 000 = 44 000 €.'],
    result: 'Za těchto předpokladů roční zisk vzroste o 44 000 €.',
    lesson: 'Vyšší prodeje nestačí: odečti nedobytné pohledávky i cenu kapitálu. Při ocenění pohledávek prodejní cenou by výsledek byl 40 000 €.',
    source: 'WCM_2026-Moodle.pdf, str. 26–27; nákladové ocenění podle Financni_controlling_shrnuti_a_priprava.pdf, str. 12.'
  },
  {
    id: 'skonto', seminar: 3, title: 'Skonto, nebo bankovní úvěr?', kind: 'Ilustrační z materiálů',
    task: 'Rozhodni, zda využít skonto za pomoci kontokorentu. Použij jednoduchý roční přepočet a rok 360 dní, bez poplatků a daní.',
    given: ['Faktura 500 000 Kč; skonto 2 % při platbě do 10 dní, jinak splatnost 45 dní.', 'Kontokorent stojí 10 % p. a.'],
    formulas: ['Roční cena nevyužitého skonta = s / (1 − s) × 360 / (T − t)', 'Úrok = půjčená částka × roční sazba × počet dní / 360', 'Čistá úspora = skonto v Kč − úrok'],
    legend: 's = skonto desetinně; T = konečná splatnost; t = lhůta skonta; p. a. = za rok.',
    steps: ['Nevyužité skonto = 0,02 / 0,98 × 360 / 35 ≈ 20,99 % p. a.', 'Platba se skontem = 500 000 × 0,98 = 490 000 Kč.', 'Úrok na 35 dní = 490 000 × 0,10 × 35/360 ≈ 4 763,89 Kč.', 'Úspora = 10 000 − 4 763,89 = 5 236,11 Kč.'],
    result: 'Skonto se vyplatí: čistá úspora je přibližně 5 236 Kč.',
    lesson: 'Dodatečný úvěr trvá 35 dní, nikoli celých 45. Roční přepočet není složená efektivní roční sazba.',
    source: 'FC_3_Financovani_vysvetleni_a_priklady.pdf, str. 2, příklad 1 (v PDF označený jako ilustrační).'
  },
  {
    id: 'poplatek', seminar: 3, title: 'Úvěr s poplatkem předem', kind: 'Ilustrační z materiálů',
    task: 'Urči skutečný roční náklad úvěru. Poplatek je sražen při čerpání, jistina a úrok jsou splaceny za rok.',
    given: ['Jistina 1 000 000 Kč, roční úrok 8 %.', 'Poplatek 1,5 % z jistiny.'],
    formulas: ['Čisté čerpání = jistina − poplatek', 'Roční nákladová sazba = (úrok + poplatek) / čisté čerpání'],
    legend: 'Sazby dosaď desetinně: 8 % = 0,08; 1,5 % = 0,015.',
    steps: ['Poplatek = 1 000 000 × 0,015 = 15 000 Kč.', 'Podnik získá 1 000 000 − 15 000 = 985 000 Kč.', 'Úrok = 1 000 000 × 0,08 = 80 000 Kč.', 'Sazba = (80 000 + 15 000) / 985 000 ≈ 9,64 %.'],
    result: 'Skutečný roční náklad je přibližně 9,64 %, nikoli jen 8 %.',
    lesson: 'Do jmenovatele patří skutečně použitelná částka. Tento vzorec platí pro zde zadané načasování plateb.',
    source: 'FC_3_Financovani_vysvetleni_a_priklady.pdf, str. 2, příklad 3 (ilustrační).'
  },
  {
    id: 'anuita', seminar: 3, title: 'Stejná splátka každý rok', kind: 'Ilustrační z materiálů',
    task: 'Vypočítej roční anuitu a rozděl první splátku na úrok a úmor. Platí se na konci roku, bez poplatků.',
    given: ['Úvěr 2 000 000 Kč, úrok 6 % p. a., doba splácení 5 let.'],
    formulas: ['a = D × i / [1 − (1 + i)^(−n)]', 'Úrok = počáteční zůstatek × i', 'Úmor = anuita − úrok'],
    legend: 'a = anuita; D = počáteční dluh; i = sazba za období; n = počet období. Úmor splácí jistinu.',
    steps: ['a = 2 000 000 × 0,06 / [1 − 1,06^(−5)] ≈ 474 792,80 Kč.', 'Úrok v 1. roce = 2 000 000 × 0,06 = 120 000 Kč.', 'Úmor v 1. roce = 474 792,80 − 120 000 = 354 792,80 Kč.', 'Zůstatek po 1. splátce = 2 000 000 − 354 792,80 = 1 645 207,20 Kč.'],
    result: 'Roční anuita je přibližně 474 793 Kč; první úmor přibližně 354 793 Kč.',
    lesson: 'Anuita obsahuje úrok i úmor. Při dalších splátkách se úrok počítá ze zbývajícího dluhu.',
    source: 'FC_3_Financovani_vysvetleni_a_priklady.pdf, str. 4, příklad 7 (ilustrační).'
  },
  {
    id: 'danovy-stit', seminar: 3, title: 'Úrok po zohlednění daně', kind: 'Ilustrační z materiálů',
    task: 'Urči úrokový náklad po daňové úspoře. Předpokládej plnou daňovou uznatelnost úroku a dostatečný zdanitelný zisk.',
    given: ['Roční úrok 120 000 Kč při sazbě 6 %.', 'Daňová sazba použitá v zadání 21 %.'],
    formulas: ['Daňová úspora = úrok × daňová sazba', 'Čistý úrokový náklad = úrok × (1 − daňová sazba)', 'Cena dluhu po dani = sazba dluhu × (1 − daňová sazba)'],
    legend: 'Daňový štít je úspora daně z uznatelného nákladu, nikoli odpuštění úroku bankou.',
    steps: ['Úspora daně = 120 000 × 0,21 = 25 200 Kč.', 'Čistý náklad = 120 000 − 25 200 = 94 800 Kč.', 'Cena dluhu po dani = 0,06 × 0,79 = 4,74 %.'],
    result: 'Čistý náklad je 94 800 Kč; sazba po dani 4,74 % p. a.',
    lesson: 'Jistina úvěru se tímto způsobem do daňových nákladů nezahrnuje.',
    source: 'FC_3_Financovani_vysvetleni_a_priklady.pdf, str. 5, příklad 8 (ilustrační).'
  },
  {
    id: 'wacc', seminar: 3, title: 'Průměrná cena kapitálu (WACC)', kind: 'Ilustrační z materiálů',
    task: 'Spočítej váženou cenu kapitálu s daňovým štítem dluhu. Váhy odpovídají zadané tržní kapitálové struktuře.',
    given: ['Vlastní kapitál 60 %, jeho cena 10 % ročně.', 'Dluh 40 %, jeho cena před daní 8 % ročně.', 'Daň 21 %; daňový štít je plně využitelný.'],
    formulas: ['WACC = wE × rE + wD × rD × (1 − τ)'],
    legend: 'wE, wD = váhy vlastního kapitálu a dluhu (součet 1); rE, rD = jejich ceny; τ = daňová sazba.',
    steps: ['Cena dluhu po dani = 0,08 × 0,79 = 0,0632 = 6,32 %.', 'WACC = 0,60 × 0,10 + 0,40 × 0,0632.', 'WACC = 0,08528 = 8,528 %.'],
    result: 'Průměrná cena kapitálu je přibližně 8,53 % ročně.',
    lesson: 'Daňový štít uplatni jen na dluh. Pro diskontování projektu musí sazba odpovídat jeho riziku i typu cash flow.',
    source: 'FC_3_Financovani_vysvetleni_a_priklady.pdf, str. 7, příklad 11 (ilustrační).'
  },
  {
    id: 'plan-penez', seminar: 4, title: 'Bude na konci měsíce dost peněz?', kind: 'Doplňkový modelový příklad',
    task: 'Sestav jednoduchý peněžní plán a vypočítej dodatečné financování potřebné pro zachování minimálního zůstatku.',
    given: ['Počáteční peníze 80 000 Kč, očekávané inkaso 240 000 Kč.', 'Plánované platby 290 000 Kč, minimální zůstatek 50 000 Kč.'],
    formulas: ['Konečné peníze = počáteční peníze + příjmy − výdaje', 'Potřebné financování = max(0; minimální zůstatek − konečné peníze)'],
    legend: 'Příjmy jsou skutečná inkasa, nikoli vystavené faktury. Jde o souhrn za měsíc.',
    steps: ['Konečné peníze = 80 000 + 240 000 − 290 000 = 30 000 Kč.', 'Chybějící krytí = 50 000 − 30 000 = 20 000 Kč.'],
    result: 'Na konci měsíce zbude 30 000 Kč; pro rezervu je třeba dalších 20 000 Kč.',
    lesson: 'Měsíční součet neodhalí nedostatek peněz uvnitř měsíce. Ten ověří až plán plateb po jednotlivých dnech.',
    source: 'Nově sestavený příklad k tématu 4. týdne podle FC_program přednášek a cvičení_2026_2027.pdf, str. 1; princip bilance podle Bilance cash flow.pdf, str. 2.'
  },
  {
    id: 'odchylka', seminar: 4, title: 'O kolik se skutečnost liší od plánu?', kind: 'Doplňkový modelový příklad',
    task: 'Vyčísli absolutní a relativní odchylku tržeb od plánu.',
    given: ['Plánované tržby 500 000 Kč, skutečné tržby 460 000 Kč.'],
    formulas: ['Absolutní odchylka = skutečnost − plán', 'Relativní odchylka = (skutečnost − plán) / plán × 100 %'],
    legend: 'Znaménko vyjadřuje směr proti plánu; u tržeb je pokles za jinak stejných podmínek nepříznivý.',
    steps: ['Absolutní odchylka = 460 000 − 500 000 = −40 000 Kč.', 'Relativní odchylka = −40 000 / 500 000 × 100 % = −8 %.'],
    result: 'Tržby jsou o 40 000 Kč, tedy o 8 %, pod plánem.',
    lesson: 'Procenta vztahuj k plánu. Klesnou-li náklady, může být záporná odchylka naopak příznivá.',
    source: 'Nově sestavený příklad k tématu 4. týdne podle programu; princip kontroly plánu podle Úvod_Bilance_2026_Moodle.pdf, str. 10.'
  },
  {
    id: 'npv', seminar: 5, title: 'Vyplatí se jednoduchá investice?', kind: 'Doplňkový modelový příklad',
    task: 'Spočítej čistou současnou hodnotu projektu. Všechny budoucí toky přicházejí na konci roku; jiné toky ani zůstatková hodnota nejsou.',
    given: ['Investice dnes 100 000 Kč.', 'Čisté peněžní toky: 60 000 Kč za rok a 60 000 Kč za dva roky.', 'Diskontní sazba odpovídající riziku projektu 10 % ročně.'],
    formulas: ['PVt = CFt / (1 + r)^t', 'NPV = −I₀ + součet současných hodnot budoucích CF'],
    legend: 'PVt = současná hodnota toku v roce t; CFt = čistý peněžní tok; r = diskontní sazba; I₀ = počáteční investice.',
    steps: ['PV prvního toku = 60 000 / 1,10 = 54 545,45 Kč.', 'PV druhého toku = 60 000 / 1,10² = 49 586,78 Kč.', 'NPV = −100 000 + 54 545,45 + 49 586,78 ≈ 4 132,23 Kč.'],
    result: 'NPV je přibližně +4 132 Kč. Při dané sazbě projekt vytváří hodnotu.',
    lesson: 'Diskontuj peněžní toky, nikoli účetní zisk. Kladné NPV je výsledek pro zadané předpoklady.',
    source: 'Nově sestavený příklad k tématu 5. týdne podle FC_program přednášek a cvičení_2026_2027.pdf, str. 1; samostatné zadání 5. semináře nebylo přiloženo.'
  },
  {
    id: 'obligace', seminar: 5, title: 'Cena dluhopisu', kind: 'Ilustrační z materiálů',
    task: 'Oceň dluhopis součtem současných hodnot kupónů a jistiny. Kupóny se platí ročně na konci roku, poslední spolu s jistinou.',
    given: ['Nominál 10 000 Kč, roční kupón 5 %, splatnost 4 roky.', 'Požadovaný výnos 6 % p. a.'],
    formulas: ['C = nominál × kupónová sazba', 'P = součet C / (1 + r)^t pro t = 1 až n + nominál / (1 + r)^n'],
    legend: 'C = roční kupón v Kč; P = cena dluhopisu; r = požadovaný výnos; n = počet let.',
    steps: ['Kupón = 10 000 × 0,05 = 500 Kč za rok.', 'PV kupónů = 500/1,06 + 500/1,06² + 500/1,06³ + 500/1,06⁴ ≈ 1 732,55 Kč.', 'PV jistiny = 10 000 / 1,06⁴ ≈ 7 920,94 Kč.', 'Cena = 1 732,55 + 7 920,94 ≈ 9 653,49 Kč.'],
    result: 'Cena dluhopisu je přibližně 9 653,49 Kč.',
    lesson: 'Požadovaný výnos převyšuje kupónovou sazbu, proto cena vychází pod nominálem.',
    source: 'FC_3_Financovani_vysvetleni_a_priklady.pdf, str. 6, příklad 9 (ilustrační); zařazeno i k oceňování v 5. týdnu.'
  },
  {
    id: 'ipo', seminar: 6, title: 'IPO: výtěžek, ážio a podíl vlastníků', kind: 'Ilustrační z materiálů',
    task: 'Spočítej výtěžek nové emise a ředění podílu. Všechny nové akcie kupují noví investoři; původní vlastníci neprodávají ani nepřikupují.',
    given: ['Původně 800 000 akcií. Nová emise 200 000 akcií za 450 Kč/ks.', 'Nominální hodnota 100 Kč/ks. Náklady emise 6 % hrubého výtěžku.'],
    formulas: ['Hrubý výtěžek = nové akcie × emisní kurz', 'Čistý výtěžek = hrubý výtěžek × (1 − sazba nákladů emise)', 'Ážio = nové akcie × (emisní kurz − nominál)', 'Podíl původních vlastníků = původní akcie / všechny akcie po emisi'],
    legend: 'Ážio je část emisního kurzu nad nominálem. Výpočet ážia je před zohledněním nákladů emise.',
    steps: ['Hrubý výtěžek = 200 000 × 450 = 90 000 000 Kč.', 'Náklady = 90 000 000 × 0,06 = 5 400 000 Kč. Čistý výtěžek = 84 600 000 Kč.', 'Přírůstek základního kapitálu = 200 000 × 100 = 20 000 000 Kč. Ážio = 200 000 × 350 = 70 000 000 Kč.', 'Původní vlastníci drží 800 000 / 1 000 000 = 80 %. Noví mají 20 %.'],
    result: 'Firma získá čistě 84,6 mil. Kč. Původní podíl klesne ze 100 % na 80 %.',
    lesson: 'Nové akcie přinášejí peníze firmě; prodej stávajících akcií by přinesl peníze prodávajícím vlastníkům.',
    source: 'FC_3_Financovani_vysvetleni_a_priklady.pdf, str. 6, příklad 10 (ilustrační); proces IPO: Příprava procesu IPO.pdf, str. 8.'
  },
  {
    id: 'synergie', seminar: 6, title: 'Kolik z akvizice zůstane kupujícímu?', kind: 'Doplňkový modelový příklad',
    task: 'Vyhodnoť hodnotový přínos akvizice pro kupujícího. Všechny hodnoty jsou současné hodnoty vlastního kapitálu ke stejnému datu.',
    given: ['Samostatná hodnota firmy A 100 mil. Kč a firmy B 60 mil. Kč.', 'Synergie v současné hodnotě 20 mil. Kč, integrační náklady v současné hodnotě 5 mil. Kč.', 'Kupní cena za celý vlastní kapitál B 70 mil. Kč. Způsob financování a jiné náklady neuvažujeme.'],
    formulas: ['Hodnota spojení = VA + VB + PV synergií − PV integračních nákladů', 'Přínos kupujícímu = VB + PV synergií − PV integračních nákladů − kupní cena'],
    legend: 'VA, VB = samostatné hodnoty vlastního kapitálu firem; PV = současná hodnota.',
    steps: ['Hodnota spojení = 100 + 60 + 20 − 5 = 175 mil. Kč.', 'Prémie prodávajícímu nad samostatnou hodnotu B = 70 − 60 = 10 mil. Kč.', 'Přínos kupujícímu = 60 + 20 − 5 − 70 = 5 mil. Kč.'],
    result: 'Čistý hodnotový přínos kupujícímu je 5 mil. Kč.',
    lesson: 'Existence synergií sama nestačí: odčítej integrační náklady i prémii v kupní ceně. Roční úsporu nelze přímo přičíst k hodnotě firmy.',
    source: 'Nově sestavený příklad k tématu 6. týdne podle FC_program přednášek a cvičení_2026_2027.pdf, str. 1; samostatné početní zadání k fúzím nebylo přiloženo.'
  }
];
