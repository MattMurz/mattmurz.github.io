/* Profito Local: private-on-device search-link builder and opt-in email drafts. */
(() => {
  'use strict';
  const words = {
    en: {
      navHome:'Home',navMeasure:'Contech Measure',navExplore:'Explore local',language:'Language',
      eyebrow:'Community discovery · public beta',headline:'Find what matters near you.',
      lead:'Local tradespeople, makers, independent shops, farm shops and neighbourhood initiatives. Search real places using an established map — and help shape what Profito builds next.',
      badgeFree:'Free to explore',badgeOpen:'No account needed',badgePrivate:'No hidden tracking',
      searchLabel:'Search existing places',searchTitle:'What are you looking for?',
      searchIntro:'Choose a category and area. Your search opens on Google Maps. Profito does not pretend to own or rank the results.',
      categoryLabel:'Category',areaLabel:'Town or neighbourhood',keywordLabel:'Anything specific? (optional)',
      keywordPlaceholder:'e.g. tomatoes, carpenter, bakery',
      catTrades:'Builders & trades',catFarm:'Farm shops & growers',catProduce:'Fresh local produce',
      catShops:'Independent shops & makers',catRepair:'Repairs & reuse',catCommunity:'Community organisations',catMarkets:'Local markets',
      searchButton:'Prepare Google Maps search',mapsButton:'Open results on Google Maps',
      searchHint:'Enter an area; the search stays in your browser until you open Google Maps.',
      searchReady:'Search is ready. Select the link to open Google Maps.',searchInvalid:'Enter a town or neighbourhood (at least two characters).',
      searchPrivacy:"Your area and keywords are not saved or sent to Profito. Google receives the query only after you follow its link, under Google's terms and privacy policy. Results are provided by Google, not verified by Profito.",
      participateLabel:'Build a useful local network',
      joinTitle:'Want your business to be considered for a future directory?',
      joinIntro:'Are you a local craftsperson, farmer, producer, independent shop or community organiser? Tell us what people should be able to find. We are collecting ideas, not operating a live member directory yet.',
      businessLabel:'Public business or group name',businessTypeLabel:'What do you offer?',publicAreaLabel:'Public service area (not your home address)',
      businessPlaceholder:'Business or group',publicAreaPlaceholder:'Brentford / West London',
      permission:'I own this business or have permission to suggest its public details.',
      suggestButton:'Prepare an email suggestion',suggestReady:'Email draft requested. Please review and send it in your mail app; nothing has been submitted by Profito.',
      suggestInvalid:'Complete the name, public area and permission checkbox.',
      suggestPrivacy:'Nothing is sent or stored automatically. Your email app opens a draft that you must send yourself. Do not include private home addresses, passwords or financial details. Sending a suggestion does not create an account or guarantee a listing. We use any email you send to review and respond to your suggestion; request deletion or correction at profito.systems@gmail.com.',
      emailDirect:'Or email Profito directly',aboutTitle:'One local network, built with residents',
      aboutText:'This is a free discovery preview, not a marketplace for purchases, bookings or payments. Business profiles, verified owner submissions and moderated listings are being considered. Tell us what works and what is missing using the feedback button.',
      safety:'Please check businesses independently before buying or hiring. Food sales may require applicable registrations and allergen information; Profito is not taking orders or listing unverified sellers.',
      footerText:'Local people, useful tools, practical ideas.'
    },
    pl: {
      navHome:'Strona główna',navMeasure:'Miarka',navExplore:'Lokalnie',language:'Język',
      eyebrow:'Lokalne wyszukiwanie · wersja testowa',headline:'Znajdź to, czego potrzebujesz w okolicy.',
      lead:'Fachowcy, rękodzielnicy, niezależne sklepy, gospodarstwa, lokalne produkty i inicjatywy. Szukaj istniejących miejsc na sprawdzonej mapie i wpływaj na dalszy rozwój Profito.',
      badgeFree:'Bez opłat',badgeOpen:'Bez zakładania konta',badgePrivate:'Bez ukrytego śledzenia',
      searchLabel:'Wyszukaj istniejące miejsca',searchTitle:'Czego szukasz?',
      searchIntro:'Wybierz kategorię i okolicę. Wyniki otwierają się w Google Maps. Profito nie tworzy własnych ocen ani fikcyjnej listy firm.',
      categoryLabel:'Kategoria',areaLabel:'Miasto lub okolica',keywordLabel:'Czego dokładnie? (opcjonalnie)',
      keywordPlaceholder:'np. pomidory, stolarz, piekarnia',
      catTrades:'Budowlanka i fachowcy',catFarm:'Gospodarstwa i sklepy farmerskie',catProduce:'Świeże lokalne produkty',
      catShops:'Małe sklepy i rękodzieło',catRepair:'Naprawy i ponowne użycie',catCommunity:'Organizacje społeczne',catMarkets:'Lokalne targowiska',
      searchButton:'Przygotuj wyszukiwanie na mapie',mapsButton:'Otwórz wyniki w Google Maps',
      searchHint:'Podaj okolicę. Profito nie wysyła zapytania do Google, dopóki nie otworzysz linku.',
      searchReady:'Wyszukiwanie gotowe. Kliknij link, aby otworzyć Google Maps.',searchInvalid:'Podaj miejscowość lub okolicę (co najmniej dwa znaki).',
      searchPrivacy:'Okolica i słowa kluczowe nie są zapisywane ani wysyłane do Profito. Google otrzyma zapytanie dopiero po otwarciu linku — zgodnie z własnymi zasadami. Wyniki pochodzą z Google, nie są weryfikowane przez Profito.',
      participateLabel:'Budujemy przydatną lokalną społeczność',
      joinTitle:'Chcesz zaproponować swoją firmę do przyszłego katalogu?',
      joinIntro:'Jesteś fachowcem, rolnikiem, wytwórcą, prowadzisz sklep lub lokalną inicjatywę? Powiedz nam, jak ludzie powinni móc Cię znaleźć. Zbieramy pomysły — katalog z kontami użytkowników jeszcze nie działa.',
      businessLabel:'Publiczna nazwa firmy lub grupy',businessTypeLabel:'Co oferujesz?',publicAreaLabel:'Obszar działania (bez adresu domowego)',
      businessPlaceholder:'Firma lub grupa',publicAreaPlaceholder:'Brentford / zachodni Londyn',
      permission:'Jestem właścicielem tej firmy lub mam zgodę na zgłoszenie jej publicznych danych.',
      suggestButton:'Przygotuj e-mail ze zgłoszeniem',suggestReady:'Poproszono o otwarcie szkicu. Sprawdź i wyślij go samodzielnie w poczcie; Profito niczego automatycznie nie przesłało.',
      suggestInvalid:'Podaj nazwę, publiczną okolicę i zaznacz potwierdzenie upoważnienia.',
      suggestPrivacy:'Formularz nie zapisuje ani nie wysyła danych automatycznie. Otwiera szkic wiadomości, który samodzielnie wysyłasz. Nie podawaj prywatnego adresu domu, haseł ani danych finansowych. Zgłoszenie nie zakłada konta ani nie gwarantuje wpisu. Wiadomości używamy do rozpatrzenia zgłoszenia i odpowiedzi; o usunięcie lub poprawienie danych możesz poprosić pod adresem profito.systems@gmail.com.',
      emailDirect:'Lub napisz bezpośrednio do Profito',aboutTitle:'Jedna lokalna społeczność, tworzona z mieszkańcami',
      aboutText:'To bezpłatne wyszukiwanie testowe, nie platforma zakupów, rezerwacji ani płatności. Rozważamy weryfikowane zgłoszenia właścicieli i moderowany katalog. Zgłaszaj pomysły lub błędy przez przycisk opinii.',
      safety:'Samodzielnie sprawdzaj firmy przed zakupem lub zatrudnieniem. Sprzedaż żywności może wymagać rejestracji i informacji o alergenach. Profito nie przyjmuje zamówień ani nie publikuje niezweryfikowanych sprzedawców.',
      footerText:'Ludzie z okolicy, przydatne narzędzia, praktyczne pomysły.'
    }
  };
  const queries = {
    trades:'builders tradespeople',farm:'farm shop local growers',produce:'local fresh produce',
    shops:'independent shops artisans',repair:'repair services reuse',
    community:'community organisations',markets:'local market'
  };
  const $ = (id) => document.getElementById(id);
  let lang = (navigator.language || 'en').toLowerCase().startsWith('pl') ? 'pl' : 'en';
  const requested = new URLSearchParams(location.search).get('lang');
  if (requested === 'en' || requested === 'pl') lang = requested;
  const searchStatus = $('localSearchStatus');
  const suggestStatus = $('localSuggestStatus');
  const mapLink = $('localMapsLink');
  const labels = words[lang];
  function translate() {
    document.documentElement.lang = lang;
    document.title = lang === 'en' ? 'Profito Local — Find people and services near you' : 'Profito Local — Lokalne usługi i produkty';
    $('localLanguage').value = lang;
    for (const element of document.querySelectorAll('[data-t]')) {
      const text = words[lang][element.dataset.t];
      if (typeof text === 'string') element.textContent = text;
    }
    for (const input of document.querySelectorAll('[data-t-placeholder]')) {
      input.placeholder = words[lang][input.dataset.tPlaceholder];
    }
    if (mapLink.hidden) searchStatus.textContent = words[lang].searchHint;
    else searchStatus.textContent = words[lang].searchReady;
    if (suggestStatus.dataset.state === 'ready') suggestStatus.textContent = words[lang].suggestReady;
    $('localLanguage').setAttribute('aria-label', words[lang].language);
    for (const link of document.querySelectorAll('a[href="/"],a[href="/miarka/"]')) {
      if (link.getAttribute('href') === '/miarka/') link.href = '/miarka/?lang=' + lang;
    }
  }
  $('localLanguage').addEventListener('change', (event) => {
    lang = event.target.value === 'pl' ? 'pl' : 'en';
    translate();
  });
  for (const id of ['localArea','localKeyword','localCategory']) {
    $(id).addEventListener('input', () => {
      mapLink.hidden = true;
      mapLink.removeAttribute('href');
      searchStatus.textContent = words[lang].searchHint;
    });
  }
  $('localSearchForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const area = $('localArea').value.trim().replace(/\s+/g,' ');
    const keyword = $('localKeyword').value.trim().replace(/\s+/g,' ');
    const category = $('localCategory').value;
    if (area.length < 2 || area.length > 70 || keyword.length > 70 || !Object.hasOwn(queries,category)) {
      mapLink.hidden = true;
      searchStatus.textContent = words[lang].searchInvalid;
      return;
    }
    const query = [queries[category],keyword,area,'United Kingdom'].filter(Boolean).join(' ');
    mapLink.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query);
    mapLink.hidden = false;
    searchStatus.textContent = words[lang].searchReady;
  });
  $('localSuggestForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = $('localBusinessName').value.trim().replace(/\s+/g,' ');
    const area = $('localBusinessArea').value.trim().replace(/\s+/g,' ');
    const category = $('localBusinessType').value;
    if (name.length < 2 || area.length < 2 || !Object.hasOwn(queries,category) || !$('localAuthorised').checked) {
      suggestStatus.textContent = words[lang].suggestInvalid;
      return;
    }
    const subject = 'Profito Local — suggested future directory listing';
    const body = [
      'Public business/group: '+name,
      'Category: '+words.en['cat'+({trades:'Trades',farm:'Farm',produce:'Produce',shops:'Shops',repair:'Repair',community:'Community',markets:'Markets'})[category]],
      'Public service area: '+area,
      'Owner/authorised representative: yes',
      'Please review this suggestion. No account or listing has been created.',
      'Please reply if any other public details are needed.'
    ].join('\n');
    suggestStatus.dataset.state = 'ready';
    suggestStatus.textContent = words[lang].suggestReady;
    location.href = 'mailto:profito.systems@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
  translate();
})();
