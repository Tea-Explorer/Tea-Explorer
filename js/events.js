const Calendar = tui.Calendar;
const container = document.getElementById('calendar');

const options = {
  defaultView: 'month',
  useCreationPopup: true,
  useDetailPopup: true,
  popupDelete: function () {
    return 'Hello';
  },
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
      name: 'global',
      backgroundColor: '#03BD9E',
    },
  ],
};

const calendar = new Calendar(container, options);
calendar.createEvents([
  {
    id: 'event1',
    calendarId: 'cal1',
    title: 'Tea Pouring Ceremony',
    start: '2023-11-14T09:00:00',
    end: '2023-11-14T10:00:00',
    location: 'Kyoto, Japan',
    raw:"https://github.com/orgs/Team-QUICM/repositories/",
    color: '#3366CC',
    backgroundColor: '#FFD700',
  },
  {
    id: 'event2',
    calendarId: 'cal1',
    title: 'Tea Festival',
    start: '2023-11-20T09:00:00',
    end: '2023-11-22T10:00:00',
    color: '#3366CC',
    backgroundColor: '#FFD700',
  },
  {
    id: 'event3',
    calendarId: 'cal1',
    title: 'New Green Tea Release',
    start: '2023-11-25T09:00:00',
    end: '2023-11-25T10:00:00',
    color: '#5C7474',
    backgroundColor: '5C7474',
  },
  {
    id: 'event4',
    calendarId: 'cal1',
    title: 'Virtual Earl Grey Tea Seminar',
    start: '2023-11-27T11:00:00',
    end: '2023-11-27T12:00:00',
    color: '#3366CC',
    backgroundColor: '#FFD700',
  },
]);

calendar.setTheme({
  common: {
    backgroundColor: '#FAF9F8',
    border: '2px solid #656d4f',
    gridSelection: {
      backgroundColor: 'none',
      border: 'none',
    },
  },
});

function handleVisits() {
  const website = eventDetails.website;
  if (website) {
    // Open the event's website in a new tab
    window.open(website, 'https://github.com/orgs/Team-QUICM/repositories/${eventId}');
  } else {
    console.log('No website link available for this event.');
  }
 console.log('clickSchedule')
  const eventDetails = event.schedule;

  if (confirm('Do you want to go to the event\'s website?')) {
    redirectToEventWebsite(eventDetails);
  }};


// Event listener for 'clickSchedule'
calendar.on('clickSchedule', function (event) {
 
});

//  fetch upcoming events
function getUpcomingEvents() {
  // ... fetch and return upcoming events data
  return [
    {
      id: 'event1',
      calendarId: 'cal1',
      title: 'Weekly Meeting',
      start: '2023-11-14 T09:00:00',
      end: '2023-11-15T10:00:00',
      color: '#0000',
      backgroundColor: '#ff0000',
      customStyle: {
        fontStyle: 'italic',
        fontSize: '15px',
        isVisible:true,
      },
    //   website: '',
    },
    //more events here
  ];
}
const upcomingEvents = getUpcomingEvents();
// calendar.createSchedules(upcomingEvents);

// Function to add to Google Calendar, STRECTCH GOAL
function addToGoogleCalendar(eventDetails) {
  console.log('Added to Google Calendar:', eventDetails);
}

// Function to generate a shareable link
function generateShareableLink(eventDetails) {
  console.log('Shareable link:', formatEventLink(eventDetails));
}

// Function to format an event link
function formatEventLink(eventDetails) {
  // Assuming eventDetails has a property named 'id'
  const eventId = eventDetails.id;

  // Check if 'id' is available
  if (eventId) {
    // Format the link using the event ID
    return `https://github.com/orgs/Team-QUICM/repositories/${eventId}`;
  } else {
    console.log('No event ID available for this event.');
    return ''; // Return an empty string or handle accordingly
  }
}

// // Handle month change
// calendar.on('clickDayname', function (event) {
//   const currentDate = event.date;
//   calendar.setDate(currentDate);
// });
// // Handle event click
// calendar.on('clickSchedule', function (event) {
//   const eventDetails = event.schedule;
//   // Prompt the user to add the event to their Google Calendar
//   if (confirm('Do you want to add this event to your Google Calendar?')) {
//     addToGoogleCalendar(eventDetails);
//   }
//   // Prompt the user to share a link to the event
//   if (confirm('Do you want to share this event?')) {
//     generateShareableLink(eventDetails);
//   }
//   // Prompt the user to be redirected to the event's website
//   if (confirm('Do you want to go to the event\'s website?')) {
//     redirectToEventWebsite(eventDetails);
//   }
// });
//  fetch upcoming events
// function getUpcomingEvents() {
//   // ... fetch and return upcoming events data
//   return [
//     {
//       id: 'event1',
//       calendarId: 'cal1',
//       title: 'Weekly Meeting',
//       start: '2023-11-14 T09:00:00',
//       end: '2023-11-15T10:00:00',
//       color: '#0000',
//       backgroundColor: '#ff0000',
//       customStyle: {
//         fontStyle: 'italic',
//         fontSize: '15px',
//         isVisible:true,
//       },
//     //   website: '',
//     },
//     //more events here
//   ];
// }
// getUpcomingEvents();

// const timedEvent = calendar.getEvent('1', 'cal1'); // EventObject
// calendar.on('clickEvent', ({ event }) => {
//   console.log(event); // EventObject
// });

// // add events to Google Calendar
// function addToGoogleCalendar(eventDetails) {
// }
// // generate a shareable link for the event
// function generateShareableLink(eventDetails) {
// }
// //redirect to the event's website
// function redirectToEventWebsite(eventDetails) {
//   window.open(eventDetails.website, '_blank');
// }

