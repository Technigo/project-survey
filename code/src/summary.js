import React from 'react'

const feelingResponse = feeling => {
  if (feeling === 'amazing') {
    return 'Happy to hear that you feel amazing! Still it is important to remember to take care of yourself.'
  } else if (feeling === 'good') {
    return 'Today is a good day! Enjoy the day and do something that makes you feel good.'
  } else if (feeling === 'okay') {
    return 'We all have those days when things do not feel completely right. It\'s okay to take a rain check and stay on the couch, but if you have the energy you can do something for yourself.'
  } else {
    return 'I\'m sorry to hear you\'re not having the best day today! Take some extra time to take care of yourself today, you deserve it!'
  }
}

const activityResponse = activity => {
  if (activity === 'walk') {
    return 'Enjoy a nice long walk outside if the weather allows it. If it\'s raining, maybe try some excercise indoors, like yoga.'
  } else if (activity === 'meditate') {
    return 'Meditate for 10-15 minutes today to clear your head and refocus. Always remember that it\'s okay if your mind wanders sometimes, it\'s part of the process!'
  } else if (activity === 'read') {
    return 'Make yourself a cup of tea and sit down with a nice book. Let yourself forget about the real world for a while!'
  } else {
    return 'Give a friend a phone call or meet up with someone for a fika and a chat. Good friends are the best at making us feel better!'
  }
}

const sleepResponse = sleep => {
  if (sleep === 'less than 5 hours') {
    return 'Too little sleep can affect your mood in a negative way. If you have the time today, take a short nap on the couch to catch up on your sleep.'
  } else if (sleep === '5-7 hours') {
    return 'To up the energy for tomorrow, try to go to bed early tonight. It can also be good to stay away from any phone or computer screens for a little while before bedtime.'
  } else if (sleep === '7-9 hours') {
    return 'You seem to be sleeping well. If you don\'t already have a routine for bedtime, perhaps you should try it out in order to get enough sleep every night!'
  } else {
    return 'You probably have a lot of energy from a long night\'s sleep. Your body and mind will thank you for that.'
  }
}

export const Summary = ({ feeling, sleep, activity }) => {
  return (
    <p>
      {feelingResponse(feeling)} {activityResponse(activity)} {sleepResponse(sleep)}
    </p>
  );
};

