export type SupportedLocale = 'en' | 'it' | 'ko';

export interface Milestone {
  date: string;
  title: string;
  description?: string;
  image?: string;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  location: string;
}

export interface PaletteColor {
  name: string;
  hex: string;
  textDark: boolean;
  description: string;
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
    travel: string;
    dressCode: string;
    gallery: string;
    faq: string;
    wishes: string;
    rsvp: string;
  };
  hero: {
    eyebrow: string;
    date: string;
    location: string;
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
  story: {
    eyebrow: string;
    title: string;
    subtitle: string;
    milestones: Milestone[];
  };
  calendar: {
    saveTheDate: string;
  };
  venueSchedule: {
    eyebrow: string;
    title: string;
    resortName: string;
    resortSubtitle: string;
    address: string;
    viewMap: string;
  };
  schedule: {
    events: ScheduleEvent[];
  };
  travelTips: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tips: { title: string; text: string }[];
    closing: string;
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
