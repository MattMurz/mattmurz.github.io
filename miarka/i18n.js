/*
 * Miarka EN/PL accessibility layer.
 * Translates the existing Polish copy without touching image, geometry,
 * calibration, user input, or the existing measurements.
 * No network requests, account data, persistent storage, or new dependencies.
 */
(() => {
  'use strict';
  const en = {
    'Wróć na stronę główną Profito Systems': 'Back to the Profito Systems homepage',
    'Wróć do Profito Systems': 'Back to Profito Systems',
    'Pomiar ze zdjęcia · wersja 2': 'Measure from a photo · version 2',
    'Karta, kartka, cegła w ścianie, płytka albo własny przedmiot: wybierz znany wymiar, wskaż wzorzec i zmierz powierzchnię ze zdjęcia. Pomiar ręczny działa także bez modułu automatycznego.': 'Use a card, sheet of paper, brick, tile or your own known-size object. Mark the reference, then estimate dimensions from a photo. Manual measurement works without automatic detection.',
    'Wybierz wzorzec': 'Choose a reference object',
    'przedmiot o znanych wymiarach': 'an object with known dimensions',
    'Zrób zdjęcie': 'Take a photo',
    'wzorzec i mierzona powierzchnia powinny leżeć na tej samej płaszczyźnie': 'the reference and measured area must be on the same plane',
    'Skalibruj i zmierz': 'Calibrate and measure',
    'narożniki prostokąta lub znany odcinek, potem dwa boki powierzchni': 'mark four corners or a known line, then two sides of the area',
    'Krok 1': 'Step 1',
    'Co masz pod ręką?': 'What can you use as a reference?',
    'Nie musisz używać A4. Najlepszy jest płaski prostokąt o dokładnie znanym rozmiarze.': 'You do not need A4 paper. A flat rectangle with accurately known dimensions works best.',
    'Wybór przedmiotu referencyjnego': 'Select a reference object',
    'Kartka A4': 'A4 paper',
    'Karta standardowa ID-1': 'Standard ID-1 card',
    'Kartka A5': 'A5 paper',
    'Cegła': 'Brick',
    'wybierz format i widoczną ścianę': 'choose the size and visible face',
    'Pustak lub płytka': 'Block or tile',
    'wpisz rzeczywiste wymiary widocznej powierzchni': 'enter the actual dimensions of the visible face',
    'Własny prostokąt': 'Custom rectangle',
    'książka, pudełko, telefon bez etui — znane dwa boki': 'book, box or phone without a case — both dimensions must be known',
    'Znany odcinek': 'Known-length line',
    'linijka, moneta albo inny znany wymiar · zdjęcie na wprost': 'ruler, coin or other known length · straight-on photo',
    'Format i widoczna powierzchnia cegły': 'Brick size and visible face',
    'UK — długie lico 215 × 65 mm': 'UK — long face 215 × 65 mm',
    'UK — powierzchnia 215 × 102,5 mm': 'UK — top face 215 × 102.5 mm',
    'UK — krótkie lico 102,5 × 65 mm': 'UK — end face 102.5 × 65 mm',
    'PL format 250 — długie lico 250 × 65 mm': 'PL 250 — long face 250 × 65 mm',
    'PL format 250 — powierzchnia 250 × 120 mm': 'PL 250 — top face 250 × 120 mm',
    'PL format 250 — krótkie lico 120 × 65 mm': 'PL 250 — end face 120 × 65 mm',
    'Pierwszy bok w mm': 'First side in mm',
    'Drugi bok w mm': 'Second side in mm',
    'znany wymiar': 'known dimension',
    'Długość odcinka w mm': 'Known length in mm',
    'np. odcinek linijki': 'e.g. a ruler segment',
    'Użyj pustej karty lojalnościowej, podarunkowej lub dostępowej w formacie ID-1. Wskaż przecięcia prostych krawędzi, pomijając zaokrąglenia. Nie fotografuj danych karty płatniczej ani dokumentu tożsamości.': 'Use a blank loyalty, gift or access card in the ID-1 format. Mark where the straight edges meet, ignoring rounded corners. Never photograph a payment card or identity document.',
    'Krok 2': 'Step 2',
    'Dodaj zdjęcie': 'Add a photo',
    'Cały wzorzec musi być widoczny, a jego cztery narożniki powinny być czytelne. Im bliżej tej samej płaszczyzny znajduje się mierzony fragment, tym sensowniejszy będzie wynik.': 'The entire reference object and its four corners must be visible. Measurements are meaningful only when the reference and target lie on the same physical plane.',
    'Wybierz z galerii': 'Choose from gallery',
    'Nie wybrano zdjęcia': 'No photo selected',
    'Wypróbuj wzorzec A4': 'Try the A4 example',
    'Wykryj wzorzec automatycznie': 'Detect reference automatically',
    'Wskaż 4 narożniki ręcznie': 'Mark 4 corners manually',
    'Wybierz wzorzec i dodaj zdjęcie.': 'Choose a reference and add a photo.',
    'Podgląd kalibracji': 'Calibration preview',
    'Klikalny podgląd': 'Interactive preview',
    'Zdjęcie i punkty pomiarowe': 'Photo and measurement points',
    'Powiększenie zdjęcia': 'Photo zoom controls',
    'Pomniejsz zdjęcie': 'Zoom out',
    'Powiększ zdjęcie': 'Zoom in',
    'Dopasuj': 'Fit image',
    'Cofnij punkt': 'Undo point',
    'Po wykryciu wzorca wybierz pomiar szerokości lub wysokości i wskaż dwa punkty.': 'Once the reference is found, choose width or height and mark two points.',
    'Kontrola perspektywy': 'Perspective check',
    'Wyprostowany wzorzec': 'Rectified reference',
    'Krok 3': 'Step 3',
    'Zmierz powierzchnię': 'Measure the area',
    'Najpierw skalibruj wzorzec.': 'Calibrate the reference first.',
    'Wzorzec i mierzone punkty muszą leżeć na jednej płaszczyźnie. Karta na podłodze nie skaluje ściany. Sprawdź jeden znany wymiar przed użyciem wyniku.': 'The reference and measurement points must be on one plane. A card on the floor cannot calibrate a wall. Check a known dimension before relying on the estimate.',
    'Zmierz szerokość': 'Measure width',
    'Zmierz wysokość': 'Measure height',
    'Wyczyść pomiary': 'Clear measurements',
    'Zamień boki wzorca 1–2 i 2–3': 'Swap reference sides 1–2 and 2–3',
    'Zapisz zdjęcie z pomiarem': 'Save annotated photo',
    'Szerokość': 'Width',
    'Wysokość': 'Height',
    'Powierzchnia prostokąta': 'Rectangular area',
    'Przenieś powierzchnię do kalkulatora Profito Systems': 'Send area to Profito Systems estimator',
    'To wersja testowa. Zauważyłeś błąd lub masz pomysł? Użyj przycisku „Zgłoś błąd lub pomysł”.': 'This is a public beta. Found a bug or have an idea? Use the “Report a bug or suggest an idea” button.',
    'Zdjęcie zostaje na urządzeniu.': 'Your photo stays on your device.',
    'Analiza odbywa się lokalnie w przeglądarce. Wynik jest orientacyjny, nie geodezyjny.': 'Analysis runs locally in your browser. Results are estimates, not surveying measurements.',
    'Zgłoś błąd przez e-mail': 'Report an issue by email',
    'Wymiary cegieł są nominalne i zależą od formatu. Sprawdź swój egzemplarz, popraw wartości poniżej i wskaż tylko wybraną powierzchnię, bez fugi. Cegła w ścianie skaluje tę ścianę; jej górna powierzchnia nad podłogą nie skaluje podłogi.': 'Brick dimensions are nominal and vary by format. Measure your brick, correct the values and mark only the visible face, excluding mortar. A brick in a wall can calibrate that wall; its top surface cannot calibrate the floor.',
    'Pustaki i płytki nie mają jednego wspólnego rozmiaru. Wpisz rzeczywiste wymiary widocznej prostokątnej powierzchni z pomiaru lub specyfikacji produktu.': 'Blocks and tiles have no single standard size. Enter the true dimensions of the visible rectangular face from a measurement or product specification.',
    'Użyj dokładnych wymiarów widocznego prostokąta. Telefon wymaga wymiarów konkretnego modelu bez etui; przypadkowa książka lub pudełko nie ma standardowego rozmiaru.': 'Use the accurate dimensions of the visible rectangle. For a phone, check its exact model without the case; books and boxes do not have standard dimensions.',
    'Znany odcinek działa przy zdjęciu na wprost, w jednej płaszczyźnie. Nie koryguje perspektywy. Dla monet wpisz średnicę konkretnej monety. Do zdjęcia pod kątem wybierz prostokąt i cztery narożniki.': 'A known-length line works only with a straight-on photo on one plane. It cannot correct perspective. For coins, enter the exact coin diameter. For angled photos, use a rectangle with four corners.',
    // Existing app-generated statuses, hints and measurement messages.
    'Wybrane zdjęcie': 'Selected photo',
    'Nie udało się wczytać pliku': 'Could not load the file',
    'Wzorzec zmieniony. Skalibruj zdjęcie ponownie.': 'Reference changed. Please calibrate the photo again.',
    'Obsługiwane są zdjęcia JPG, PNG i WebP. Wybierz zwykłe zdjęcie zamiast SVG, GIF lub dokumentu.': 'Only JPG, PNG and WebP photos are supported. Choose a photo rather than an SVG, GIF or document.',
    'Plik jest pusty albo nie można odczytać jego rozmiaru.': 'The file is empty or its size cannot be read.',
    'Zdjęcie przekracza 30 MB. Wybierz mniejszy plik.': 'Photo exceeds 30 MB. Please choose a smaller file.',
    'Wczytuję zdjęcie…': 'Loading photo…',
    'Nie udało się odczytać wymiarów zdjęcia.': 'Could not read photo dimensions.',
    'Zdjęcie ma zbyt wysoką rozdzielczość do bezpiecznej pracy na telefonie. Użyj zdjęcia do 60 megapikseli albo zmniejsz je przed wczytaniem.': 'The photo resolution is too high for safe mobile processing. Use a photo up to 60 megapixels or resize it first.',
    'Zdjęcie gotowe. Wskaż dwa końce znanego odcinka.': 'Photo ready. Mark both ends of the known-length line.',
    'Zdjęcie gotowe. Spróbuj automatu albo wskaż cztery narożniki ręcznie.': 'Photo ready. Try automatic detection or mark four corners manually.',
    'Nie udało się otworzyć zdjęcia. Spróbuj JPG, PNG lub WebP zamiast HEIC.': 'The photo could not be opened. Try JPG, PNG or WebP instead of HEIC.',
    'Wybierz szerokość albo wysokość i wskaż dwa końce odcinka. Punkty możesz przeciągać.': 'Select width or height and mark the two endpoints. You can drag the points to adjust them.',
    'Wybierz szerokość albo wysokość, następnie kliknij dwa końce mierzonego odcinka na zdjęciu.': 'Select width or height, then tap the two endpoints on the photo.',
    'Ten tryb zakłada zdjęcie na wprost i jednakową skalę. Nie koryguje perspektywy. Sprawdź drugi znany wymiar; jeśli się nie zgadza, użyj czterech narożników.': 'This mode assumes a straight-on photo and a uniform scale. It does not correct perspective. Check another known dimension; otherwise use four corners.',
    'Wzorzec i mierzone punkty muszą leżeć na jednej płaszczyźnie. Karta na podłodze nie skaluje ściany. Sprawdź drugi znany wymiar przed użyciem wyniku.': 'The reference and measured points must be on the same plane. A card on the floor does not calibrate a wall. Check another known dimension before using the result.',
    'Mały wzorzec zwiększa wpływ błędu punktów. Zrób bliższe zdjęcie albo użyj większego przedmiotu.': 'A small reference makes point placement less accurate. Move closer or use a larger reference.',
    'Powiększ zdjęcie, aby dokładnie dopasować punkty. Po kalibracji możesz przeciągać narożniki i końce pomiarów.': 'Zoom in for precise point placement. You can drag corners and measurement endpoints after calibration.',
    'Automat proponuje wzorzec. Sprawdź zaznaczony prostokąt i przypisanie boków przed pomiarem.': 'Automatic detection suggests a reference. Check its corners and side lengths before measuring.',
    'Wzorzec skalibrowany. Możesz mierzyć odcinki na tej samej płaszczyźnie.': 'Reference calibrated. You can measure lines on the same physical plane.',
    'Wczytuję przykładowe zdjęcie A4…': 'Loading the example A4 photo…',
    'Nie udało się wczytać wzorca. Spróbuj ponownie.': 'Could not load the example. Please try again.',
    'Podaj poprawne wymiary prostokątnego wzorca albo wybierz tryb ręczny odcinka.': 'Enter valid dimensions for the rectangle or select manual line mode.',
    'Uruchamiam automat…': 'Starting detection…',
    'Uruchamiam automatyczne wykrywanie. Pomiar ręczny jest dostępny od razu.': 'Starting automatic detection. Manual measurement is available immediately.',
    'Szukam prostokąta. Sprawdź potem, czy zaznaczony wzorzec jest właściwy.': 'Searching for a rectangle. Check that the detected object is correct.',
    'Automat nie znalazł wzorca. Wskaż jego cztery narożniki ręcznie.': 'No reference found automatically. Mark its four corners manually.',
    'Nie udało się uruchomić automatu. Wskaż wzorzec ręcznie — ten tryb nie wymaga OpenCV.': 'Automatic detection could not start. Mark the reference manually; this mode does not require OpenCV.',
    'Najpierw wpisz poprawne wymiary wybranego wzorca.': 'Enter valid reference dimensions first.',
    'Wskaż dwa końce znanego odcinka.': 'Mark both endpoints of the known-length line.',
    'Wskaż cztery narożniki widocznej powierzchni. Kolejność nie ma znaczenia.': 'Mark four corners of the visible rectangle in any order.',
    'Wskaż 2 końce znanego odcinka': 'Mark 2 endpoints',
    'Wskaż 4 narożniki ręcznie': 'Mark 4 corners manually',
    'Odcinek zapisany. Możesz przeciągać punkty lub zmierzyć drugi bok.': 'Line recorded. Drag the points to adjust it or measure the second side.',
    'Odcinek zmierzony. Pole powierzchni wymaga szerokości i wysokości prostokąta.': 'Line measured. Rectangular area requires both a width and a height.',
    'szerokość': 'width',
    'wysokość': 'height',
    'szerokości': 'width',
    'wysokości': 'height',
    'Pozostało': 'Remaining',
    'wybrana powierzchnia cegły': 'selected brick face',
    'pustak lub płytka': 'block or tile',
    'własny prostokąt': 'custom rectangle',
    'znany odcinek': 'known-length line',
    'karta ID-1': 'ID-1 card',
    'Wskaż cztery różne narożniki prostokąta.': 'Mark four distinct rectangle corners.',
    'Narożniki muszą tworzyć wypukły prostokąt. Powiększ zdjęcie i popraw punkty.': 'Corners must form a convex rectangle. Zoom in and correct the points.',
    'Wzorzec jest zbyt mały. Zrób bliższe zdjęcie.': 'The reference is too small. Move closer.',
    'Podaj dwa dodatnie wymiary wzorca.': 'Enter two positive reference dimensions.',
    'Nie można skalibrować tych narożników. Wskaż je ponownie.': 'These corners cannot be calibrated. Mark them again.',
    'Perspektywa wzorca jest zbyt silna. Zrób zdjęcie bardziej na wprost.': 'Perspective distortion is too strong. Take a more straight-on photo.',
    'Punkt jest poza zakresem perspektywy. Wybierz bliższy wzorzec.': 'Point is outside the reliable perspective range. Use a closer reference.',
    'Punkt leży przy granicy perspektywy. Zrób zdjęcie bardziej na wprost.': 'Point is near the perspective limit. Take a straighter photo.',
    'Odcinek skali jest zbyt krótki lub ma nieprawidłowy wymiar.': 'The reference line is too short or its dimension is invalid.',
    'Wskaż dwa różne końce odcinka.': 'Mark two distinct endpoints of the line.',
    'Nie udało się zapisać zdjęcia.': 'Could not save the annotated photo.',
    'Popraw punkty lub wskaż ostatni narożnik ponownie.': 'Correct the points or mark the last corner again.',
    'Profito — pomiar orientacyjny ze zdjęcia': 'Profito — approximate photo measurement',
    'Jedna płaszczyzna; wynik sprawdź miarką.': 'One plane; verify the result with a tape measure.',
    'Szerokość: ': 'Width: ',
    'Wysokość: ': 'Height: ',
    'Pole: ': 'Area: ',
    'Wzorzec: ': 'Reference: ',
    'Brak': 'None'
  };
  const regexes = [
    [/^Tryb ręczny: pozostało (\d+) punktów\. Powiększ zdjęcie dla dokładności\.$/, (_, n) => 'Manual mode: ' + n + ' points remaining. Zoom in for accuracy.'],
    [/^Pozostało (\d+) punktów wzorca\.$/, (_, n) => n + ' reference points remaining.'],
    [/^Wyprostowany wzorzec: (.+)$/, (_, item) => 'Rectified reference: ' + translate(item)],
    [/^Skala odcinka: (.+) mm\. Bez korekcji perspektywy\.$/, (_, size) => 'Line scale: ' + size + ' mm. No perspective correction.'],
    [/^Kalibracja: (.+)\. Bok 1–2: (.+) mm; bok 2–3: (.+) mm\. Sprawdź przypisanie boków na zdjęciu\.$/, (_, item, sideA, sideB) => 'Calibration: ' + translate(item) + '. Side 1–2: ' + sideA + ' mm; side 2–3: ' + sideB + ' mm. Check side assignments on the photo.'],
    [/^Kliknij pierwszy i drugi koniec (szerokości|wysokości)\.$/, (_, item) => 'Tap the first and second endpoints of the ' + translate(item) + '.'],
    [/^Pomiar (szerokości|wysokości): wskaż dwa punkty na zdjęciu\.$/, (_, item) => 'Measure ' + translate(item) + ': mark two points on the photo.'],
    [/^(.+) Popraw punkty lub wskaż ostatni narożnik ponownie\.$/, (_, item) => translate(item) + ' ' + en['Popraw punkty lub wskaż ostatni narożnik ponownie.']],
    [/^Nie znaleziono (.+)\.$/, (_, item) => 'Could not find ' + translate(item) + '.']
  ];

  function translate(raw) {
    if (Object.prototype.hasOwnProperty.call(en, raw)) return en[raw];
    for (const [test, convert] of regexes) {
      const match = raw.match(test);
      if (match) return convert(...match);
    }
    return raw;
  }

  const textState = new WeakMap();
  const attributeState = new WeakMap();
  let language = (navigator.language || 'en').toLowerCase().startsWith('pl') ? 'pl' : 'en';
  const preferred = new URLSearchParams(window.location.search).get('lang');
  if (preferred === 'pl' || preferred === 'en') language = preferred;

  function excluded(node) {
    const parent = node.parentElement;
    return !parent || !!parent.closest('script,style,noscript,textarea,select.miarka-lang-switch,[contenteditable="true"]');
  }

  function translateTextNode(node) {
    if (excluded(node)) return;
    const current = node.nodeValue;
    const prior = textState.get(node);
    const from = prior && current === prior.displayed ? prior.polish : current;
    const leading = from.match(/^\s*/)[0];
    const trailing = from.match(/\s*$/)[0];
    const body = from.trim();
    const target = language === 'en' ? translate(body) : body;
    const displayed = leading + target + trailing;
    textState.set(node, { polish: from, displayed });
    if (current !== displayed) node.nodeValue = displayed;
  }

  function translateAttributes(element) {
    for (const attribute of ['aria-label', 'placeholder', 'title', 'alt']) {
      if (!element.hasAttribute(attribute)) continue;
      const value = element.getAttribute(attribute);
      let saved = attributeState.get(element);
      if (!saved) { saved = new Map(); attributeState.set(element, saved); }
      const old = saved.get(attribute);
      const original = old && value === old.displayed ? old.polish : value;
      const output = language === 'en' ? translate(original) : original;
      saved.set(attribute, { polish: original, displayed: output });
      if (value !== output) element.setAttribute(attribute, output);
    }
  }

  function render() {
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walk.nextNode()) translateTextNode(walk.currentNode);
    document.querySelectorAll('[aria-label],[placeholder],[title],[alt]').forEach(translateAttributes);
    const metadata = document.querySelector('meta[name="description"]');
    if (metadata) metadata.content = language === 'en'
      ? 'Estimate dimensions from a photo using A4 paper, a card, a brick or a known-size object. Runs locally in your browser.'
      : 'Miarka Profito skaluje zdjęcie na podstawie A4, karty ID-1 lub własnego prostokąta o znanym wymiarze i pomaga oszacować wymiary powierzchni lokalnie w przeglądarce.';
  }

  function setLanguage(value) {
    language = value === 'pl' ? 'pl' : 'en';
    document.documentElement.lang = language;
    selector.value = language;
    selector.setAttribute('aria-label', language === 'pl' ? 'Wybierz język Miarki' : 'Select Miarka language');
    render();
  }

  const switcher = document.createElement('div');
  switcher.className = 'miarka-language';
  const label = document.createElement('label');
  label.setAttribute('for', 'miarkaLanguage');
  label.textContent = '🌐';
  const selector = document.createElement('select');
  selector.id = 'miarkaLanguage';
  selector.className = 'miarka-lang-switch';
  const english = document.createElement('option');
  english.value = 'en';
  english.textContent = 'English';
  const polish = document.createElement('option');
  polish.value = 'pl';
  polish.textContent = 'Polski';
  selector.append(english, polish);
  switcher.append(label, selector);
  const header = document.querySelector('.topbar');
  if (header) header.appendChild(switcher);

  selector.addEventListener('change', () => setLanguage(selector.value));
  let pending = false;
  const observer = new MutationObserver(() => {
    if (pending) return;
    pending = true;
    queueMicrotask(() => { pending = false; render(); });
  });
  observer.observe(document.body, { subtree: true, childList: true, characterData: true });
  window.miarkaTranslate = (text) => language === 'en' ? translate(text) : text;
  window.miarkaGetLanguage = () => language;
  setLanguage(language);
})();
