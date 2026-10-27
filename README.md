# Finanční controlling — kartičky a příklady

Statická studijní aplikace pro GitHub Pages. Nevyžaduje build, backend ani instalaci balíčků.

- 44 otázek s odpověďmi, filtry témat a oblíbenými kartami uloženými v prohlížeči.
- Pětiminutová simulace pěti náhodných otázek.
- Samostatná sekce **Příklady se vzorci**: 20 zadání, vysvětlení značek, skryté řešení krok za krokem, výsledek a upozornění na typickou chybu.
- Filtry šesti seminářů a hledání bez ohledu na diakritiku.

| Seminář | Počet příkladů |
| --- | ---: |
| 1. Bilance a finanční analýza | 4 |
| 2. Pracovní kapitál | 5 |
| 3. Zdroje financování | 5 |
| 4. Finanční plánování | 2 |
| 5. Oceňování a investice | 2 |
| 6. IPO, fúze a akvizice | 2 |

## Podklady

Každý příklad uvádí název podkladu a pořadí strany PDF. Označení **Ze semináře** vychází z dodaných zadání `Úvod_Příklady.pdf` a `WCM_2026-Moodle.pdf`. **Upravený příklad** používá jednodušší doplněná čísla. **Ilustrační z materiálů** označuje příklady z `FC_3_Financovani_vysvetleni_a_priklady.pdf`, které jsou už v tomto podkladu výslovně ilustrační. **Doplňkový modelový příklad** byl nově sestaven k tématu uvedenému v programu; nepředstavuje původní zadání vyučujícího. Samostatná zadání k plánování, NPV a fúzím nebyla dodána.

Počítá se s předpoklady uvedenými u jednotlivých zadání. Pro denní propočty se používá obchodní rok 360 dní. Výsledky se zaokrouhlují na konci výpočtu. Podkladová PDF nejsou součástí veřejného webu.

## Lokální spuštění

Z kořene repozitáře spusťte:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

`index.html`, `examples.css`, `examples-data.js` a `examples.js` musí zůstat spolu. Fonty Google jsou volitelné; bez nich se použijí systémové fonty. Živé procesy serveru nejsou součástí uloženého prostředí a je nutné je znovu spustit.

## GitHub Pages

V **Settings → Pages** vyberte **Deploy from a branch**, větev `main` a složku `/ (root)`. Po úspěšném nasazení je web na adrese:

https://vpa3kralove-svg.github.io/flashcards-fincon/

## Ověření

Sekce byla ověřena v Chromium ve velikostech 1280 × 900 a 390 × 844: viditelnost všech 20 řešení, počty šesti filtrů, hledání, ovládání klávesnicí, přepínání sekcí, zastavení skrytého časovače, uložené karty a dvě simulace za sebou. Početní výsledky byly nezávisle přepočítány. Kontrola syntaxe JavaScriptu: `node --check examples-data.js` a `node --check examples.js`.

Jde o studijní pomůcku, nikoli oficiální zadání testu.
