export type SupportedLocale = 'en' | 'it' | 'ko';

export interface Milestone {
  date: string;
  title: string;
  description?: string;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  location: string;
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
    gallery: string;
    travel: string;
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
    intro: string;
    groups: { title: string; items: string[] }[];
    closing: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
  };
;
;
;
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
