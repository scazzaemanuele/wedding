import type { I18nContent } from '../types';

export const enContent: I18nContent = {
  meta: {
    title: 'Yeji & Emanuele — Wedding Invitation | January 3, 2027 | Phuket, Thailand',
    description: 'We joyfully invite you to celebrate the wedding of Yeji and Emanuele in Phuket, Thailand. View itinerary, travel guides, RSVP, and details.',
    ogImageAlt: 'Yeji & Emanuele Wedding Celebration in Phuket'
  },
  nav: {
    story: 'Our Story',
    schedule: 'Schedule',
    venue: 'Venue & Travel',
    dressCode: 'Dress Code',
    gallery: 'Gallery',
    travel: 'Travel Info',
    faq: 'Q & A',
    wishes: 'Guestbook',
    rsvp: 'RSVP'
  },
  hero: {
    eyebrow: 'Save the Date & Wedding Invitation',
    names: 'Yeji & Emanuele',
    and: '&',
    tagline: 'Two Souls, Three Cultures, One Eternal Voyage',
        date: 'Sunday, January 3, 2027',
    location: 'Thavorn Beach Village Resort • Phuket, Thailand',
    ctaRsvp: 'Confirm Attendance',
    ctaDetails: 'Explore Celebration',
    scrollPrompt: 'Scroll to Discover'
  },
  invitation: {
    eyebrow: 'A Message From The Couple',
    title: 'With Joy in Our Hearts',
    greeting: 'Dearest Family & Friends,',
    letterParagraph1:
      'From a chance encounter under the sunset lights of Rome to late-night culinary adventures in Seoul, our journey has crossed continents and oceans. Along the way, your love, laughter, and friendship have been our constant compass.',
    letterParagraph2:
      'To celebrate this milestone, we could think of no better place than the enchanted shores of Phuket, Thailand — a breathtaking sanctuary bridging our worlds where turquoise waters meet lush tropical tranquility.',
    letterParagraph3:
      'We would be honored beyond words to have you stand beside us as we exchange our vows, honor traditional blessings, and dance beneath the starlit Andaman sky.',
    signature: 'With all our love, Yeji & Emanuele',
    ceremonyNotice: 'Please kindly respond by September 30, 2026'
  },
  countdown: {
    title: 'Counting Down To Our Forever',
    subtitle: 'The countdown to January 3, 2027 at Thavorn Beach Village',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    celebrationText: "Today is the day! Let's celebrate!"
  },
  story: {
    eyebrow: 'How We Began',
    title: 'Our Love Story',
    subtitle: 'A serendipitous path across Rome, Seoul, and the Andaman Sea',
    milestones: [
      {
        year: '2021',
        title: 'The Piazza Navona Serendipity',
        location: 'Rome, Italy',
        description:
          'A shared café table during a summer rainstorm in Piazza Navona sparked a five-hour conversation about art, architecture, and spicy food. By evening, we both knew something extraordinary had begun.',
        image: '/images/story-1.jpg'
      },
      {
        year: '2023',
        title: 'Bridging Continents & Seoul Sunsets',
        location: 'Seoul, South Korea',
        description:
          'Countless flights, time-zone arithmetic, and weekend explorations from Bukchon Hanok Village to the Amalfi Coast proved that home is simply wherever we are together.',
        image: '/images/cocktails.jpg'
      },
      {
        year: '2025',
        title: 'The Sunset Cliff Proposal',
        location: 'Phuket, Thailand',
        description:
          'On a cliff overlooking the Andaman Sea, surrounded by flickering lanterns and blooming jasmine, Emanuele asked the question that changed our lives forever. Yeji said yes with happy tears.',
        image: '/images/proposal.jpg'
      },
      {
        year: '2027',
        title: 'Our Next Great Adventure',
        location: 'Nakalay Beach, Phuket',
        description:
          'Now we bring together our families from Italy, Korea, and all over the world to unite our heritage and begin the next chapter of our story.',
        image: '/images/hero.jpg'
      }
    ]
  },
  schedule: {
    eyebrow: 'Weekend Itinerary',
    title: 'Schedule of Events',
    subtitle: 'Three days of festivities, cultural traditions, and seaside celebration',
    addToCalendar: 'Add to Calendar',
    calendarSummary: 'Yeji & Emanuele Wedding Weekend',
    calendarDesc: 'Join Yeji and Emanuele in celebrating their wedding in Phuket, Thailand.',
    days: [
      {
        dayNumber: 'Day 01',
        date: 'Saturday, January 2, 2027',
        dayTitle: 'Welcome Sunset Cocktails & Feast',
        events: [
          {
            time: '18:00 – 21:30',
            title: 'Seaside Welcome Reception & Thai Feast',
            location: 'The Oceanfront Sunset Deck',
            description:
              'Kick off the wedding weekend with handcrafted tropical cocktails, Italian spritzes, fresh seafood BBQ, and live acoustic lounge music as the sun sets over Nakalay Bay.',
            dressCode: 'Resort Chic / Tropical Elegance (Light linens & breezy dresses)',
            icon: 'cocktail'
          }
        ]
      },
      {
        dayNumber: 'Day 02',
    date: 'Sunday, January 3, 2027',
        dayTitle: 'The Wedding Day: Blessings & Celebration',
        events: [
          {
            time: '09:30 – 11:30',
            title: 'Traditional Water Pouring Blessing (Rod Nam Sang)',
            location: 'The Orchid Pavilion',
            description:
              'A sacred Thai ceremony where elders and loved ones pour holy floral water over the couple’s hands from a sacred conch shell to wish them long life, prosperity, and harmony.',
            dressCode: 'Elegant Formal or Traditional Attire',
            icon: 'water'
          },
          {
            time: '15:30 – 16:30',
            title: 'Oceanfront Vow Exchange & Ring Ceremony',
            location: 'The Amor Pier, Thavorn Private Beach',
            description:
              'Witness Yeji and Emanuele exchange personal vows and rings with panoramic ocean views, accompanied by string quartet melodies.',
            dressCode: 'Formal Tropical Black Tie',
            icon: 'ring'
          },
          {
            time: '16:45 – 18:00',
            title: 'Golden Hour Champagne & Canapés',
            location: 'The Palm Terrace',
            description:
              'Toast to the newlyweds with chilled champagne, Italian aperitivi, Korean tapas bites, and photography with the couple against the golden sunset backdrop.',
            icon: 'cocktail'
          },
          {
            time: '18:30 – 21:00',
            title: 'Gala Banquet, Speeches & Cake Cutting',
            location: 'The Grand Starlight Pavilion',
            description:
              'An exquisite 5-course fusion dinner marrying Italian culinary finesse, Korean gourmet delicacies, and rich Thai spices, followed by heartfelt toasts.',
            icon: 'dinner'
          },
          {
            time: '21:00 – 01:30',
            title: 'Floating Lantern Release & Starlight Afterparty',
            location: 'The Beachfront & Pool Club',
            description:
              'Release wish lanterns into the night sky, followed by live DJ sets, signature cocktails, late-night midnight bites, and dancing into the early morning.',
            icon: 'party'
          }
        ]
      },
      {
        dayNumber: 'Day 03',
        date: 'Monday, January 4, 2027',
        dayTitle: 'Farewell Recovery Brunch',
        events: [
          {
            time: '11:00 – 15:00',
            title: 'Poolside Chill & Farewell Brunch',
            location: 'The Infinity Pool Lounge',
            description:
              'Recap memories from the night before with fresh fruit smoothies, iced coconuts, recovery mimosas, artisanal pasta, and a leisurely dip in the infinity pool.',
            dressCode: 'Casual Resort & Swimwear',
            icon: 'brunch'
          }
        ]
      }
    ]
  },
  venue: {
    eyebrow: 'Beachfront Paradise',
    title: 'The Venue & Travel',
    subtitle: 'Where the private sands of Nakalay Bay meet the turquoise waters of the Andaman Sea',
    resortName: 'Thavorn Beach Village Resort',
    resortSubtitle: 'Nakalay Beach • Phuket, Thailand',
    address: '6/2 Moo 6 Kamala, Kathu, Phuket 83150',
    viewMap: 'Open in Google Maps',
    aboutTitle: 'About the Resort',
    aboutDesc:
      'Set on the private shores of Nakalay Bay between Kamala and Patong, our beachfront resort offers its own secluded beach, one of Thailand’s largest tropical lagoon pools, lush botanical gardens, and total serenity away from city hustle.',
    villaHighlightsTitle: 'Resort Amenities',
    highlights: [
      'Private beach on Nakalay Bay',
      'Panoramic sunset views over the Andaman Sea',
      'One of Thailand’s largest tropical lagoon pools',
      'Full-service luxury spa & wellness pavilion',
      'Complimentary shuttle to Kamala & Patong beaches'
    ],
    travelCards: {
      flightTitle: 'Air Travel to Phuket (HKT)',
      flightDesc:
        'Fly into Phuket International Airport (HKT). Non-stop and one-stop flights connect easily from Rome (FCO), Milan (MXP), Seoul (ICN), Bangkok (BKK), and Singapore (SIN).',
      transferTitle: 'Airport Transfers & Shuttle',
      transferDesc:
        'The venue is approximately 40–50 minutes by car from HKT Airport. We are organizing scheduled private shuttle vans for our guests on Jan 2 & Jan 3.',
      visaTitle: 'Passport & Visa Requirements',
      visaDesc:
        'Passports must be valid for at least 6 months from entry date. Italian, Korean, and EU/US passport holders enjoy visa-free tourist entry for up to 60 days.',
      weatherTitle: 'Tropical January Climate',
      weatherDesc:
        'Early January falls in the heart of Phuket’s sunny dry season. Expect pleasant temperatures around 28°C–31°C (82°F–88°F) with balmy sea breezes in the evening.'
    },
    hotelBooking: {
      title: 'Guest Accommodation & Partner Villas',
      desc: 'We have reserved a block of luxury oceanfront suites and pool villas at preferential rates for our wedding guests.',
      codeLabel: 'Group Booking Code:',
      code: 'YEJIEMANUELE2026',
      discountText: '25% discount on 3+ night bookings including daily champagne breakfast & spa credits.',
      bookButton: 'Book With Discount Code'
    }
  },
  dressCode: {
    eyebrow: 'Style Inspiration',
    title: 'Dress Code & Color Palette',
    subtitle: 'Tropical Black Tie / Formal Coastal Elegance',
    attireTitle: 'Attire Guidance',
    attireDesc:
      'For our Saturday celebration, we invite gentlemen to wear lightweight black tie, summer tuxedos, or tailored dark suits in breathable linen or wool blends. Ladies are encouraged to wear floor-length or midi evening gowns, refined silk dresses, or dressy formal jumpsuits.',
    paletteTitle: 'Curated Wedding Palette',
    paletteSubtitle:
      'We welcome you to harmonize with our romantic palette of natural champagne, soft terracotta rose, calming sage green, emerald flora, and ivory silk.',
    palettes: [
      { name: 'Champagne Silk', hex: '#F4EDE4', textDark: true, description: 'Soft luminous ivory & warm champagne' },
      { name: 'Terracotta Rose', hex: '#D48166', textDark: false, description: 'Warm sunset rose & blush clay' },
      { name: 'Sage Botanica', hex: '#8F9E8B', textDark: false, description: 'Muted olive & fragrant sage' },
      { name: 'Deep Emerald', hex: '#234E42', textDark: false, description: 'Lush tropical forest foliage' },
      { name: 'Warm Gold', hex: '#C5A059', textDark: false, description: 'Golden hour twilight shimmer' }
    ],
    tipsTitle: 'Important Style Notes',
    tips: [
      'The ceremony takes place on the Amor Pier by the resort’s private beach. Block heels, elegant wedges, or flat dress shoes are recommended over thin stilettos.',
      'Evenings are warm and breezy; light breathable fabrics like silk, chiffon, linen, and lightweight wool blends will keep you comfortable.',
      'We kindly request guests to avoid stark white, bright neon colors, and casual beachwear for the Saturday main ceremony.'
    ]
  },
  gallery: {
    eyebrow: 'Visual Memories',
    title: 'Moments In Time',
    subtitle: 'A glimpse into our milestones, engagement, and wedding sanctuary',
    filterAll: 'All Photos',
    filterStory: 'Our Story',
    filterVenue: 'The Resort',
    filterCeremony: 'Blessings',
    filterReception: 'Celebration',
    filterDetails: 'Details',
    photos: [
      {
        id: 'hero',
        title: 'Golden Hour Vows',
        category: 'ceremony',
        src: '/images/hero.jpg',
        alt: 'Yeji and Emanuele under floral arch overlooking ocean'
      },
      {
        id: 'venue',
        title: 'The Beachfront Resort',
        category: 'venue',
        src: '/images/venue.jpg',
        alt: 'Beachfront resort with lagoon pool at dusk'
      },
      {
        id: 'water-blessing',
        title: 'Thai Water Pouring Blessing',
        category: 'ceremony',
        src: '/images/ceremony.jpg',
        alt: 'Traditional Thai water blessing ceremony with conch shell'
      },
      {
        id: 'reception',
        title: 'Banquet Under Fairy Lights',
        category: 'reception',
        src: '/images/reception.jpg',
        alt: 'Long wooden dinner tables lit by twinkling fairy lights on beach'
      },
      {
        id: 'story-beach',
        title: 'Sunrise on the Shore',
        category: 'story',
        src: '/images/story-1.jpg',
        alt: 'Couple walking barefoot along white sand tropical beach'
      },
      {
        id: 'proposal',
        title: 'The Sunset Cliff Proposal',
        category: 'story',
        src: '/images/proposal.jpg',
        alt: 'Emanuele proposing to Yeji on cliffside with lanterns'
      },
      {
        id: 'rings',
        title: 'Golden Bands & White Orchids',
        category: 'details',
        src: '/images/rings.jpg',
        alt: 'Macro photograph of gold wedding bands on Thai silk and orchid'
      },
      {
        id: 'cocktails',
        title: 'Welcome Sunset Spritz',
        category: 'reception',
        src: '/images/cocktails.jpg',
        alt: 'Sunset beachfront cocktail party with champagne coupe glasses'
      }
    ]
  },
  faq: {
    eyebrow: 'Common Questions',
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know to prepare for our wedding weekend',
    items: [
      {
        question: 'When is the deadline to RSVP?',
        answer:
          'Please submit your RSVP through this website by September 30, 2026, so we can finalize catering numbers, dietary accommodations, and shuttle schedules with the resort.'
      },
      {
        question: 'Are plus-ones and children invited?',
        answer:
          'Due to intimate beachfront venue capacities, we can only accommodate guests specifically named on your formal invitation. If you have any special family circumstances or nursing infants, please reach out directly to us!'
      },
      {
        question: 'Will transportation be provided to the venue?',
        answer:
          'Yes! We are coordinating private group shuttle vans from Phuket International Airport (HKT) to the partner resort on Friday, as well as roundtrip shuttles between the hotel and villa on Saturday for the wedding.'
      },
      {
        question: 'What is the gift registry / wishing well policy?',
        answer:
          'Having you travel across the globe to celebrate with us is the greatest gift we could ever receive. Should you wish to honor us with a token of love, a contribution toward our honeymoon fund & newlywed home savings in our digital wishing well would be deeply appreciated.'
      },
      {
        question: 'What language will the ceremonies be conducted in?',
        answer:
          'Our ceremonies will be multilingual! The Thai Water Blessing will include English & Korean translations, while our Western vow exchange and speeches will blend English, Italian, and Korean.'
      },
      {
        question: 'What dietary preferences can you cater for?',
        answer:
          'Our resort master chefs can accommodate all dietary needs including Vegetarian, Vegan, Halal, Gluten-Free, Nut Allergies, and Pescatarian. Please indicate your specifics in the RSVP form.'
      }
    ]
  },
  rsvp: {
    eyebrow: 'Celebrate With Us',
    title: 'RSVP & Guest Confirmation',
    subtitle: 'Please let us know if you can join our celebration in Phuket',
    deadlineNotice: 'Kindly confirm your attendance by September 30, 2026',
    form: {
      fullName: 'Full Name(s)',
      fullNamePlaceholder: 'e.g. Matteo Rossi & Guest',
      email: 'Email Address',
      emailPlaceholder: 'you@example.com',
      phone: 'Phone / WhatsApp Number',
      phonePlaceholder: '+39 340 123 4567 or +82 10 1234 5678',
      attending: 'Will you be attending?',
      attendingYes: 'Joyfully Accept (Yes, I will be there!)',
      attendingNo: 'Regretfully Decline (Celebrating in spirit)',
      guestCount: 'Total Number of Attending Guests',
      eventsAttending: 'Which events will you attend?',
      eventWelcome: 'Welcome Sunset Cocktails (Sat, Jan 2)',
      eventMain: 'Main Wedding & Reception Party (Sun, Jan 3)',
      eventBrunch: 'Farewell Recovery Pool Brunch (Mon, Jan 4)',
      dietary: 'Dietary Restrictions & Allergies',
      dietaryPlaceholder: 'e.g. Vegetarian, Gluten-Free, Shellfish Allergy, None',
      dietaryOptions: ['None / No Restrictions', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Halal', 'Nut Allergy', 'Seafood Allergy'],
      shuttleRequired: 'Do you need Airport / Venue Shuttle Service?',
      shuttleYes: 'Yes, please include me in the shuttle schedules',
      shuttleNo: 'No, I will arrange independent transport / rental car',
      songRequest: 'A song that will get you on the dancefloor',
      songRequestPlaceholder: 'Artist & Song Title',
      warmMessage: 'A Warm Message / Blessing for the Couple',
      warmMessagePlaceholder: 'Leave a note for Yeji & Emanuele...',
      submitBtn: 'Send RSVP Confirmation',
      submittingBtn: 'Registering Your Response...',
      successTitle: 'Thank You for Your RSVP!',
      successMessage:
        'Your response has been recorded with love. We cannot wait to celebrate together under the tropical stars in Phuket!',
      successDetails: 'A confirmation summary has been saved to your browser.',
      addCalendarBtn: 'Save Date to Calendar (.ics)',
      closeBtn: 'Close Window',
      errorMessage: 'Please fill in all required fields marked with *'
    }
  },
  wishes: {
    eyebrow: 'Digital Guestbook',
    title: 'Love Letters & Wishes',
    subtitle: 'Leave a heartfelt blessing for Yeji & Emanuele to cherish forever',
    leaveWishTitle: 'Sign the Guestbook',
    namePlaceholder: 'Your Name(s)',
    locationPlaceholder: 'Your City / Country (e.g. Rome, Italy or Seoul, Korea)',
    messagePlaceholder: 'Write your blessings, favorite memories, or words of wisdom...',
    stampLabel: 'Choose a Blessing Stamp:',
    postButton: 'Post Your Blessing',
    recentWishesTitle: 'Heartfelt Wishes From Around The World',
    emptyWishes: 'Be the first to leave a warm blessing in our digital guestbook!',
    sampleWishes: [
      {
        id: '1',
        author: 'Sofia & Marco',
        location: 'Florence, Italy',
        message:
          'Carissimi Yeji e Emanuele, congratulazioni di cuore per questo traguardo straordinario! Non vediamo l’ora di brindare con voi in questo paradiso tropicale. Un abbraccio immenso!',
        stamp: '🥂',
        date: 'August 2026'
      },
      {
        id: '2',
        author: 'Min-Jun & Yu-Jin',
        location: 'Seoul, South Korea',
        message:
          '예지야, 에마누엘레! 두 사람의 아름다운 결혼을 진심으로 축하해. 세상에서 가장 빛나는 신랑 신부의 앞날에 늘 행복과 축복만 가득하길 바란다. 푸켓에서 만나자!',
        stamp: '💐',
        date: 'August 2026'
      },
      {
        id: '3',
        author: 'Elena & Lucas',
        location: 'Bangkok, Thailand',
        message:
          'Sawaddee krub! We are counting down the days until January. Wishing you a lifetime of laughter, incredible food, and endless adventures together!',
        stamp: '✨',
        date: 'August 2026'
      }
    ]
  },
  music: {
    play: 'Play Romantic Melody',
    pause: 'Pause Melody',
    label: 'Ambient Music',
    nowPlaying: 'Now Playing',
    trackTitle: 'Sunset Serenades in Nakalay Bay (Acoustic Melodies)'
  },
  footer: {
    names: 'Yeji & Emanuele',
    date: 'January 3, 2027',
    location: 'Thavorn Beach Village Resort • Phuket, Thailand',
    quote: '“Love does not consist of gazing at each other, but in looking outward together in the same direction.”',
    loveNote: 'Made with endless love & excitement for our beloved guests.',
    backToTop: 'Back to Top',
    copyright: '© 2026 Yeji & Emanuele Wedding Celebration. All Rights Reserved.'
  }
};
