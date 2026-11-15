/* Profito Systems public beta: private, opt-in feedback via the visitor's own email client. */
(() => {
  'use strict';

  const translations = {
    en: {
      open: '💬 Report a bug or suggest an idea', title: 'Help shape Profito Systems',
      intro: 'This is a free public test. What should work differently for you?',
      category: 'Type of feedback', bug: 'Something is broken', idea: 'An idea or feature request',
      usability: 'Something is difficult to use', other: 'Other feedback',
      details: 'What happened, or what would you improve?',
      detailsHint: 'Please describe the problem or idea. For a bug, include the steps to reproduce it.',
      contact: 'Your email (optional, if you want a reply)', privacy: 'No account required. Nothing is uploaded or saved by this form. Your email app opens a draft, which you must send yourself. Do not include passwords, private addresses, identity documents or payment details.',
      openMail: 'Open email draft', copy: 'Copy report', cancel: 'Close',
      statusMail: 'Email draft requested. Please press Send in your email app; this page has not submitted anything.',
      statusCopy: 'Report copied. Paste it into an email to profito.systems@gmail.com.',
      statusError: 'Could not copy automatically. Use Open email draft or copy the text manually.',
      direct: 'Email directly'
    },
    pl: {
      open: '💬 Zgłoś błąd lub pomysł', title: 'Pomóż tworzyć Profito Systems',
      intro: 'To bezpłatny test publiczny. Co powinno działać inaczej dla Ciebie?',
      category: 'Rodzaj zgłoszenia', bug: 'Coś nie działa', idea: 'Pomysł lub nowa funkcja',
      usability: 'Coś jest trudne w obsłudze', other: 'Inna uwaga',
      details: 'Co się stało lub co warto poprawić?',
      detailsHint: 'Opisz błąd albo propozycję. Przy błędzie podaj kroki, żeby można go odtworzyć.',
      contact: 'Twój e-mail (opcjonalnie, jeśli chcesz odpowiedzi)', privacy: 'Bez konta. Formularz niczego sam nie wysyła ani nie zapisuje. Otwiera szkic w Twojej poczcie — musisz samodzielnie nacisnąć Wyślij. Nie podawaj haseł, prywatnych adresów, dokumentów ani danych płatniczych.',
      openMail: 'Otwórz wiadomość', copy: 'Kopiuj zgłoszenie', cancel: 'Zamknij',
      statusMail: 'Poproszono o otwarcie szkicu. Naciśnij Wyślij w aplikacji pocztowej; strona niczego sama nie przesłała.',
      statusCopy: 'Skopiowano. Wklej treść do wiadomości na profito.systems@gmail.com.',
      statusError: 'Nie udało się skopiować. Otwórz pocztę lub skopiuj tekst ręcznie.',
      direct: 'Napisz bezpośrednio'
    },
    de: {
      open: '💬 Fehler oder Idee melden', title: 'Profito Systems mitgestalten',
      intro: 'Dies ist ein kostenloser öffentlicher Test. Was sollten wir verbessern?',
      category: 'Art der Rückmeldung', bug: 'Etwas funktioniert nicht', idea: 'Idee oder Funktionswunsch',
      usability: 'Etwas ist schwer zu bedienen', other: 'Sonstige Rückmeldung',
      details: 'Was ist passiert oder was sollte besser werden?',
      detailsHint: 'Beschreibe das Problem oder die Idee. Bei Fehlern bitte die Schritte nennen.',
      contact: 'Deine E-Mail (optional, falls du eine Antwort möchtest)', privacy: 'Kein Konto nötig. Dieses Formular speichert oder sendet nichts automatisch. Es öffnet nur einen E-Mail-Entwurf, den du selbst abschicken musst. Keine Passwörter, Privatadressen oder Ausweisdaten eingeben.',
      openMail: 'E-Mail-Entwurf öffnen', copy: 'Bericht kopieren', cancel: 'Schließen',
      statusMail: 'Ein E-Mail-Entwurf wurde angefordert. Bitte selbst auf Senden klicken.',
      statusCopy: 'Kopiert. Bitte in eine E-Mail an profito.systems@gmail.com einfügen.',
      statusError: 'Kopieren nicht möglich. Bitte E-Mail öffnen oder Text manuell kopieren.',
      direct: 'Direkt per E-Mail'
    },
    fr: {
      open: '💬 Signaler un bug ou proposer une idée', title: 'Améliorons Profito Systems ensemble',
      intro: 'Ceci est un test public gratuit. Que devrions-nous améliorer ?',
      category: 'Type de retour', bug: 'Quelque chose ne fonctionne pas', idea: 'Idée ou fonctionnalité',
      usability: 'Quelque chose est difficile à utiliser', other: 'Autre commentaire',
      details: 'Que s’est-il passé, ou que faudrait-il améliorer ?',
      detailsHint: 'Décrivez votre idée ou les étapes pour reproduire le problème.',
      contact: 'Votre e-mail (facultatif, pour une réponse)', privacy: 'Aucun compte nécessaire. Ce formulaire ne stocke ni n’envoie rien automatiquement. Il ouvre un brouillon dans votre messagerie ; vous devez l’envoyer vous-même. Ne communiquez pas de mots de passe, d’adresse privée ou de documents d’identité.',
      openMail: 'Ouvrir le brouillon', copy: 'Copier le message', cancel: 'Fermer',
      statusMail: 'Un brouillon a été demandé. Appuyez sur Envoyer dans votre messagerie.',
      statusCopy: 'Copié. Collez le texte dans un e-mail à profito.systems@gmail.com.',
      statusError: 'Copie impossible. Ouvrez votre messagerie ou copiez manuellement.',
      direct: 'Écrire directement'
    },
    es: {
      open: '💬 Avisar de un error o sugerir una idea', title: 'Ayúdanos a mejorar Profito Systems',
      intro: 'Esto es una prueba pública gratuita. ¿Qué cambiarías?',
      category: 'Tipo de comentario', bug: 'Algo no funciona', idea: 'Idea o nueva función',
      usability: 'Algo es difícil de usar', other: 'Otro comentario',
      details: '¿Qué pasó o qué deberíamos mejorar?',
      detailsHint: 'Describe el error o tu idea. Si es un error, indica cómo reproducirlo.',
      contact: 'Tu correo (opcional, para recibir respuesta)', privacy: 'No hace falta cuenta. Este formulario no almacena ni envía nada por sí solo. Abre un borrador en tu correo y tú debes enviarlo. No compartas contraseñas, domicilios particulares ni documentos de identidad.',
      openMail: 'Abrir borrador', copy: 'Copiar informe', cancel: 'Cerrar',
      statusMail: 'Se ha solicitado abrir un borrador. Pulsa Enviar en tu aplicación de correo.',
      statusCopy: 'Copiado. Pega el mensaje en un correo a profito.systems@gmail.com.',
      statusError: 'No se pudo copiar. Abre tu correo o copia el texto manualmente.',
      direct: 'Escribir directamente'
    }
  };

  const emailAddress = 'profito.systems@gmail.com';
  const make = (tag, parent, className) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    parent.appendChild(element);
    return element;
  };

  const heroText = document.querySelector('[data-i18n="hero_text"]');
  const betaNotice = heroText ? document.createElement('p') : null;
  if (betaNotice) {
    betaNotice.className = 'pilot-notice';
    heroText.insertAdjacentElement('afterend', betaNotice);
  }
  const root = make('div', document.body, 'pf-feedback');
  const trigger = make('button', root, 'pf-feedback-trigger');
  trigger.type = 'button';
  trigger.id = 'profitoFeedbackOpen';
  trigger.setAttribute('aria-haspopup', 'dialog');

  const dialog = make('dialog', root, 'pf-feedback-dialog');
  dialog.id = 'profitoFeedbackDialog';
  dialog.setAttribute('aria-labelledby', 'profitoFeedbackTitle');

  const form = make('form', dialog, 'pf-feedback-form');
  form.id = 'profitoFeedbackForm';
  form.noValidate = false;

  const heading = make('h2', form);
  heading.id = 'profitoFeedbackTitle';
  const intro = make('p', form, 'pf-feedback-intro');

  const labelType = make('label', form);
  labelType.htmlFor = 'profitoFeedbackType';
  const category = make('select', form);
  category.id = 'profitoFeedbackType';
  category.name = 'type';
  category.required = true;
  const categories = ['bug', 'idea', 'usability', 'other'];
  const options = categories.map((key) => {
    const option = make('option', category);
    option.value = key;
    return option;
  });

  const labelDetails = make('label', form);
  labelDetails.htmlFor = 'profitoFeedbackDetails';
  const details = make('textarea', form);
  details.id = 'profitoFeedbackDetails';
  details.name = 'details';
  details.rows = 5;
  details.maxLength = 1100;
  details.minLength = 10;
  details.required = true;
  const hint = make('p', form, 'pf-feedback-hint');
  hint.id = 'profitoFeedbackHint';
  details.setAttribute('aria-describedby', 'profitoFeedbackHint');

  const labelEmail = make('label', form);
  labelEmail.htmlFor = 'profitoFeedbackEmail';
  const email = make('input', form);
  email.id = 'profitoFeedbackEmail';
  email.type = 'email';
  email.name = 'contact';
  email.autocomplete = 'email';
  email.maxLength = 254;

  const privacy = make('p', form, 'pf-feedback-privacy');
  const actions = make('div', form, 'pf-feedback-actions');
  const send = make('button', actions, 'pf-feedback-primary');
  send.type = 'submit';
  const copy = make('button', actions, 'pf-feedback-secondary');
  copy.type = 'button';
  const close = make('button', actions, 'pf-feedback-secondary');
  close.type = 'button';
  const status = make('p', form, 'pf-feedback-status');
  status.id = 'profitoFeedbackStatus';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  const direct = make('a', form, 'pf-feedback-direct');
  direct.href = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent('Profito Systems feedback');
  direct.rel = 'nofollow';

  const language = () => {
    const code = (document.documentElement.lang || navigator.language || 'en').toLowerCase().split('-')[0];
    return translations[code] ? code : 'en';
  };
  let current = translations.en;

  const localize = () => {
    current = translations[language()];
    trigger.textContent = current.open;
    heading.textContent = current.title;
    intro.textContent = current.intro;
    if (betaNotice) betaNotice.textContent = current.intro;
    labelType.textContent = current.category;
    options.forEach((option, index) => { option.textContent = current[categories[index]]; });
    labelDetails.textContent = current.details;
    hint.textContent = current.detailsHint;
    labelEmail.textContent = current.contact;
    privacy.textContent = current.privacy;
    send.textContent = current.openMail;
    copy.textContent = current.copy;
    close.textContent = current.cancel;
    direct.textContent = current.direct + ': ' + emailAddress;
    trigger.setAttribute('aria-label', current.open);
  };

  const report = () => {
    const route = window.location.pathname; // Deliberately exclude query, fragment, photos and personal data.
    const description = details.value.trim();
    const kind = category.value;
    const subject = 'Profito Systems beta — ' + kind;
    const body = [
      'Feedback type: ' + kind,
      'Page: ' + route,
      'Message:',
      description,
      '',
      'Reply email (optional): ' + (email.value.trim() || 'not provided'),
      '',
      'This message was composed by the visitor in their own email app.'
    ].join('\n');
    return { subject, body };
  };

  trigger.addEventListener('click', () => {
    status.textContent = '';
    localize();
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    details.focus();
  });
  close.addEventListener('click', () => {
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
    trigger.focus();
  });
  dialog.addEventListener('close', () => trigger.focus());
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = report();
    status.textContent = current.statusMail;
    window.location.href = 'mailto:' + emailAddress +
      '?subject=' + encodeURIComponent(data.subject) + '&body=' + encodeURIComponent(data.body);
  });
  copy.addEventListener('click', async () => {
    if (!form.reportValidity()) return;
    const data = report();
    const message = data.subject + '\n\n' + data.body;
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(message);
      status.textContent = current.statusCopy;
    } catch {
      status.textContent = current.statusError;
    }
  });

  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(localize);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }
  localize();
})();
