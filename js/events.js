const Calendar = tui.Calendar;
const container = document.getElementById('calendar');

const options = {
  defaultView: 'month',
  useCreationPopup: true,
  useDetailPopup: true,
  isReadOnly: true,
  
  month: {
    visibleWeeksCount: 4,
  },
  timezone: {
    zones: [
      {
        timezoneName: 'PST8PDT',
        displayLabel: 'Pacific-Standard',
      },
    ],
  },
  calendars: [
    {
      id: 'cal1',
      name: 'Tea Explorer Sponsored Event',
      backgroundColor: '#03BD9E',
      dragBackgroundColor: 'C16632',
      borderColor: 'C16632'
    },
  ],
};

const calendar = new Calendar(container, options);
calendar.createEvents([
  {
    id: 'event1',
    title: 'Tea Pouring Ceremony',
    start: '2023-11-14T09:00:00',
    end: '2023-11-14T10:00:00',
    attendees: ['All Tea Enthusiasts'],
    state: 'Free Event',
    location: '123 Sakura Lane, Kyoto, Japan',
    color: '#C16632',
    backgroundColor: '#C16632',
  },
  {
    id: 'event2',
    title: 'Tea Festival',
    start: '2023-11-20T09:00:00',
    end: '2023-11-22T10:00:00',
    attendees: ['All Tea Enthusiasts'],
    state: '$50 Event Fee',
    location: '456 Earl Street, London, England',
    color: 'BLACK',
    backgroundColor: ' #D9A486',
    isAllday:true,
    category: 'allday'
  },
  {
    id: 'event3',
    title: 'Yerba Fest',
    start: '2023-11-25T09:00:00',
    end: '2023-11-26T10:00:00',
    attendees: ['All Tea Enthusiasts'],
    state: 'Free Event',
    location: '101 Mate Avenue, Buenos Aires, Argentina',
    color: 'BLACK',
    backgroundColor: '#D9A486',
  },
  {
    id: 'event4',
    title: 'Rooibos and Chill: Evening Social',
    start: '2023-11-29T11:00:00',
    end: '2023-11-29T12:00:00',
    location: '234 Sunset Rooibos Way, Cape Town, South Africa',
    attendees: ['Member Only Event'],
    state: 'Free Event for Members',
    color: '#C16632',
    backgroundColor: '#C16632',
  },
  {
    id: 'event5',
    title: 'Lemon Scones & Lemon Tea',
    start: '2023-11-23T11:00:00',
    end: '2023-11-23T12:00:00',
    attendees: ['All Tea Enthusiasts'],
    state: 'Free Event',
    location: '345 Eucalyptus Lane, Sydney, Australia',
    color: '#C16632',
    backgroundColor: '#C16632',
  },
]);
calendar.setTheme({
  common: {
    backgroundColor: '#F2EBE1',
    border: '2px solid BLACK',
    gridSelection: {
      backgroundColor: 'none',
      border: 'none',
    },
    holiday:{
      color: 'rgba(193, 102, 50, 1)'
    },
    saturday: {
      color: 'rgba(193, 102, 50, 1)'
    },

    },
  
  });
calendar.setOptions({
  month: {
    startDayofWeek: 0,
    dayNames: ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
});


