export type SupportedLocale = 'en' | 'it' | 'ko';

export interface Milestone {
  year: string;
  title: string;
  location: string;
  description: string;
  image: string;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  location: string;
  description: string;
  dressCode?: string;
  icon: 'cocktail' | 'ring' | 'water' | 'dinner' | 'party' | 'brunch' | 'music';
}

export interface ScheduleDay {
  dayNumber: string;
  date: string;
  dayTitle: string;
  events: ScheduleEvent[];
}

export interface PaletteColor {
  name: string;
  hex: string;
  textDark: boolean;
  description: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'story' | 'venue' | 'ceremony' | 'reception' | 'details';
  src: string;
  alt: string;
  aspect?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface WishMessage {
  id: string;
  author: string;
  location: string;
  message: string;
  stamp: string;
  date: string;
}

export interface I18nContent {
  meta: {
    title: string;
    description: string;
    ogImageAlt: string;
  };
  nav: {
    story: string;
    schedule: string;
    venue: string;
    dressCode: string;
    gallery: string;
    travel: string;
    faq: string;
    wishes: string;
    rsvp: string;
  };
  hero: {
    eyebrow: string;
    names: string;
    and: string;
    tagline: string;
    date: string;
    location: string;
    ctaRsvp: string;
    ctaDetails: string;
    scrollPrompt: string;
  };
  invitation: {
    eyebrow: string;
    title: string;
    greeting: string;
    letterParagraph1: string;
    letterParagraph2: string;
    letterParagraph3: string;
    signature: string;
    ceremonyNotice: string;
  };
  countdown: {
    title: string;
    subtitle: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    celebrationText: string;
  };
  story: {
    eyebrow: string;
    title: string;
    subtitle: string;
    milestones: Milestone[];
  };
  schedule: {
    eyebrow: string;
    title: string;
    subtitle: string;
    addToCalendar: string;
    calendarSummary: string;
    calendarDesc: string;
    days: ScheduleDay[];
  };
  venue: {
    eyebrow: string;
    title: string;
    subtitle: string;
    resortName: string;
    resortSubtitle: string;
    address: string;
    viewMap: string;
    aboutTitle: string;
    aboutDesc: string;
    villaHighlightsTitle: string;
    highlights: string[];
    travelCards: {
      flightTitle: string;
      flightDesc: string;
      transferTitle: string;
      transferDesc: string;
      visaTitle: string;
      visaDesc: string;
      weatherTitle: string;
      weatherDesc: string;
    };
    hotelBooking: {
      title: string;
      desc: string;
      codeLabel: string;
      code: string;
      discountText: string;
      bookButton: string;
    };
  };
  dressCode: {
    eyebrow: string;
    title: string;
    subtitle: string;
    attireTitle: string;
    attireDesc: string;
    paletteTitle: string;
    paletteSubtitle: string;
    palettes: PaletteColor[];
    tipsTitle: string;
    tips: string[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterStory: string;
    filterVenue: string;
    filterCeremony: string;
    filterReception: string;
    filterDetails: string;
    photos: GalleryPhoto[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  rsvp: {
    eyebrow: string;
    title: string;
    subtitle: string;
    deadlineNotice: string;
    form: {
      fullName: string;
      fullNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      attending: string;
      attendingYes: string;
      attendingNo: string;
      guestCount: string;
      eventsAttending: string;
      eventWelcome: string;
      eventMain: string;
      eventBrunch: string;
      dietary: string;
      dietaryPlaceholder: string;
      dietaryOptions: string[];
      shuttleRequired: string;
      shuttleYes: string;
      shuttleNo: string;
      songRequest: string;
      songRequestPlaceholder: string;
      warmMessage: string;
      warmMessagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successMessage: string;
      successDetails: string;
      addCalendarBtn: string;
      closeBtn: string;
      errorMessage: string;
    };
  };
  wishes: {
    eyebrow: string;
    title: string;
    subtitle: string;
    leaveWishTitle: string;
    namePlaceholder: string;
    locationPlaceholder: string;
    messagePlaceholder: string;
    stampLabel: string;
    postButton: string;
    recentWishesTitle: string;
    emptyWishes: string;
    sampleWishes: WishMessage[];
  };
  music: {
    play: string;
    pause: string;
    label: string;
    nowPlaying: string;
    trackTitle: string;
  };
  footer: {
    names: string;
    date: string;
    location: string;
    quote: string;
    loveNote: string;
    backToTop: string;
    copyright: string;
  };
}
