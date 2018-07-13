/* eslint-disable no-await-in-loop */
const symbols = require('../../symbols');

const delay = async millisec => new Promise((resolve) => {
  setTimeout(() => resolve(), millisec);
});

const frames = {
  hi: (text = '') => `

   {\\__/}
    (●_●)    ${text}
    (> <)

`,
  lastDay: (text1 = '', text2 = '', text3 = '') => `

   {\\__/}   ${text1}
    (●_●)    ${text2}
    (>  )>   ${text3}

`,
  college: (text1 = '', text2 = '') => `

    (__]__
    (●_●)    ${text1}
    (> <)    ${text2}

   `,
  collegeCloseEye: (text1 = '', text2 = '') => `

    (__]__
    ( _ )    ${text1}
    (> <)    ${text2}

   `,
  levelupCollege: () => `
  Basically,
    (__]__     ==== LEVEL UP =====        ~~~
    (●_●)    ~ UNEMPLOYED -> INTERN ~    (●_●)
    (> <)      ===================      <(   )>

   `,
  levelupCollegeBlink: () => `
  Basically,
    (__]__     ==== LEVEL UP =====        ~~~
    (●_●)    ~ UNEMPLOYED to INTERN ~    (●_●)
    (> <)      ===================      <(   )>

   `,
  intern: (text1 = '', text2 = '') => `

   ~~~        ${text1}
  (●_●)       ${text2}
  (> <)

 `,
  internCloseEyes: (text1 = '', text2 = '') => `

   ~~~        ${text1}
  ( _ )       ${text2}
  (> <)

 `,
  levelupIntern: () => `
Finally,
   ~~~       ==== LEVEL UP =====        ___
  (●_●)       ~ INTERN -> FTE ~        (●_●)
  (> <)      ===================      <[ \\/ ]>

 `,
  levelupInternBlink: () => `
Finally,
   ~~~       ==== LEVEL UP =====        ___
  (●_●)       ~ INTERN to FTE ~        (●_●)
  (> <)      ===================      <[ \\/ ]>

 `,
  fte: (text1 = '', text2 = '', header = '') => `
${header}
   ___
  (●_●)       ${text1}
 <[ \\/ ]>    ${text2}

`,
  fteCloseEyes: (text1 = '', text2 = '', header = '') => `
${header}
   ___
  ( _ )       ${text1}
 <[ \\/ ]>    ${text2}

`,
  levelupMck: () => `
And now,
   ___       ==== LEVEL UP =====        ^^^
  (●_●)       ~ MCK -> Ex-MCK ~        (●_●)
 <[ \\/ ]>    ===================       (> <)

`,
  levelupMckBlink: () => `
And now,
   ___       ==== LEVEL UP =====        ^^^
  (●_●)       ~ MCK to Ex-MCK ~        (■_■)
 <[ \\/ ]>    ===================       (> <)

`,
  exmck: (text1 = '', text2 = '', text3 = '', header = '') => `
${header}
   ^^^        ${text1}
  (■_■)       ${text2}
  (> <)       ${text3}

 `,
};


const animHi = async (stream) => {
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.hi('Hi 👋'));
  await delay(1500);
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.lastDay(' Today is my last day here ☹️', 'I wanted to take a moment to', 'let you know how much I’ve enjoyed my time here...'));
  await delay(5000);
};

const animCollege = async (stream) => {
  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.college('I joined as a 🏫 college graduate', 'in 2015'));
    await delay(600);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.collegeCloseEye('I joined as a 🏫 college graduate', 'in 2015'));
    await delay(500);
  }
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.college());

  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.levelupCollegeBlink());
    await delay(500);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.levelupCollege());
    await delay(600);
  }
};

const animIntern = async (stream) => {
  for (let i = 0; i < 4; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.intern('Lots of learnings📚, mistakes🔥 and struggles💀', 'later..'));
    await delay(600);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.internCloseEyes('Lots of learnings📚, mistakes🔥 and struggles💀', 'later...'));
    await delay(500);
  }
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.intern());

  for (let i = 0; i < 4; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.levelupInternBlink());
    await delay(500);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.levelupIntern());
    await delay(600);
  }
};

const animFTE = async (stream) => {
  for (let i = 0; i < 8; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.fte('Things that went well: Memories💐, Friendships😎 & *Values*🌈', ' Things to improve: Bugs🐞, escalations🔪 & nightouts🤤', 'Last 3 years..'));
    await delay(600);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.fteCloseEyes('Things that went well: Memories💐, Friendships😎 & *Values*🌈', ' Things to improve: Bugs🐞, escalations🔪 & nightouts🤤', 'Last 3 years...'));
    await delay(500);
  }

  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.fte('PEOPLE !!! 🎉', '', 'Things I\'ll miss 😞 '));
  await delay(3000);

  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.fte('PEOPLE !!!', ' Also: fancy business class flights, hotels & parties 😜 ', 'Things I\'ll miss 😞 '));
  await delay(5000);

  for (let i = 0; i < 4; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.levelupMckBlink());
    await delay(500);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.levelupMck());
    await delay(600);
  }
  await delay(1000);
};

const animExMck = async (stream) => {
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.exmck(
    'I hope we can keep in touch 🙏',
    'My Email: atulanand94@gmail.com',
    'Website: http://atulr.com',
    'Thank you for everything 🙂 ...',
  ));
};


module.exports = async (stream) => {
  await animHi(stream);
  await animCollege(stream);
  await animIntern(stream);
  await animFTE(stream);
  await animExMck(stream);
  stream.push('\n');
  stream.push(null);
};
