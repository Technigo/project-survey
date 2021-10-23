# String Quartet Booking App

A simple form to book an imaginary string quartet for your next event. It's made with React JS.

## Features

- Use of React components and states
- Radio buttons
- Drop-down menu
- Date picker
- Responsive
- Follows accessibility standards

## Challenges and Lessons Learned

- The use of props was tricky. Missing them in just one place caused bugs that weren't easy to backtrace. This was the origin of the malfunction of radio buttons. It got fixed as soon as I placed the missing prop in the right place.
- Mapping through both radio button and drop down menu options was also a challenge. I solved it by manually writing the component with all the options, and then "translating" it to its map version.
- The most difficult part was the drop down menu, since JSX doesn't allow for such a broad implementation of logic as I was used to with vanilla Javascript. But I managed to solved it by using switch.

## View it live

Deployed version: https://string-quartet-booking.netlify.app/
