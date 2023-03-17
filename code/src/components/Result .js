/* eslint-disable max-len */
import React from 'react';

export const Result = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <p>According to your submition your best fit mentor is: </p>
      <button onClick={refreshPage} type="submit">Reload</button>
    </>
  );
}

/*
import React from 'react';

export const Interest = ({ area, setArea }) => {
  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  let description;
  if (area === 'Frontend') {
    description = `As a mentor in front-end development, I am highly skilled in HTML, CSS, and JavaScript. My focus is on creating responsive, interactive, and visually appealing interfaces that seamlessly integrate with back-end systems. I have a keen eye for design and am proficient in various front-end frameworks such as React, Angular, and Vue. I specialize in creating intuitive user interfaces that provide an exceptional user experience. My goal is to help my mentees develop a deep understanding of front-end development and create designs that are not only visually appealing but also highly functional and user-friendly.`;
  } else if (area === 'Backend') {
    description = `As a mentor in back-end development, my expertise lies in designing and implementing scalable and efficient server-side architectures. I have a strong foundation in computer science and am proficient in languages such as Java, Python, and Ruby. I specialize in database design, data modeling, and performance optimization, ensuring that systems can handle large volumes of data and traffic. I am also skilled in utilizing various web frameworks such as Flask, Django, and Spring to build robust and secure web applications. My goal is to help my mentees understand the fundamental concepts of back-end development and build systems that are highly scalable, reliable, and secure.`;
  } else if (area === 'UX-UI') {
    description = `As a mentor in UX/UI, I am passionate about creating designs that are both intuitive and visually appealing. My focus is on user experience, and I specialize in conducting user research and analysis to inform design decisions. I have a keen eye for design and am skilled in creating wireframes and prototypes that bring designs to life. I am also proficient in various design tools such as Sketch, Figma, and Adobe Creative Suite. My goal is to help my mentees develop a deep understanding of user-centered design principles and create designs that are not only aesthetically pleasing but also highly functional.`;
  } else if (area === 'Machine Learning') {
    description = `As a mentor in AI, my expertise lies in machine learning, deep learning, and natural language processing. I have a strong foundation in mathematics, statistics, and computer science and am proficient in various programming languages such as Python and R. I specialize in developing and training models, evaluating their performance, and integrating them into real-world applications. I have experience in both supervised and unsupervised learning and have worked on a variety of applications, from chatbots to image recognition systems. My goal is to help my mentees understand the fundamental concepts of AI and develop solutions that can solve real-world problems.`;
  } else {
    description = 'Please select your area of interest.';
  }

  return (
    <>
      <p>What area are you interested in?</p>
      <select value={area} onChange={handleAreaChange}>
        <option value="">Select your area of interest</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="UX-UI">UX-UI</option>
        <option value="Machine Learning">Machine Learning</option>
      </select>
      <p>{description}</p>
    </>
  );
};

*/