let surveyName = ''
let pageBody = document.querySelector('body')
let randNum = Math.floor(Math.random() * 1001)

const hateYourNameArray = [
    'awful.',
    'boring.',
    'the worst.',
    'something someone might name a disease.',
    'horrid.',
    'not great, let\'s be honest.',
    'well, I guess you know how bad it is right?',
    'woefully devoid of vowels and meaning.',
    'terribly contrived I\'m afraid.',
    'pretty basic, and when I say basic I say it like a thirteen year old would say it.',
    'worse than what 62 year old men that move to Florida name their boat. ',
    'reminiscent of that smell that eminates from refridgerators in the landfill. ',
    ', wow, um, actually not bad. ',
    'sounds like something you\'d combine with yeast in a recipe. '
]

const hateYourJobArray = [
    'which is just really, really, really, immeasurably sad.',
    'which is uninspired at best.',
    'which is just really disappointing to your parents no doubt. Oh wait, are they dead?',
    'which makes me, as a robot, actually happy I\'m not human.',
    'which must make you an absolute hoot at bring your parent to work day (robot sarcasm).',
    'which makes me think you picked your job in kindergarten and just never expanded beyond that point.',
    'which is sort of like you got first place in the Loser Olympics.',
    'which just makes me, as a robot, glad that I can wipe my memory at will.'
]

const laughableYearsArray = [
    'I\'m sorry, but this is giving me robot giggles. ',
    'I\'m frankly surprised you\'ve made it this long. ',
    `If it makes you feel any better, I\'ve been doing this job for roughly ${randNum} days. `,
    'Honestly, that is an eternity in robot seconds. ',
    'I genuinely find it sad how much time you meatbags spend at work. '
]

const freudJudgementArray = [
    'You are an incredibly sick individual. ',
    'Hahahahahahaha, I was thinking the same thing thought buddy. ',
    'Imma act like this never happened bruh. ',
    'Really.  I mean really.  That\'s what is in your wrinkly electric meat processor right now? ',
    'I find human thoughts to be squishy and weird. Just like your meatsack bodies. ',
    'I mean. Yeah. You do you. ',
    'I am beginning to think allowing for free text input was a malformed idea. You have polluted my circuitry. ',
    'There are so many things I could say right now. But I will choose not to.  You should learn from my robot restraint. '
]

const businessGoalJudgement = [
    'I find this to be an admirable goal. ',
    'I find this to be a deplorable goal. But I like your initiative. ',
    'Hahahahahahaha, I find robot comedy in your ambitions. ',
    'Perhaps after reading your idea, which I\'ve worked very hard on. You could retake the questionnaire and use better answers. ',
    'I am emboldened by your goals and will erect a statue in your honor within the processor cores. ',
    'Based on you desired outcome, let me just say. You sicken me. '
]

const randBusinessGoal = [
  'Company Profitability',
  'Personal Financial Gain',
  'Putting a curse on a fellow employee',
  'Innovation',
  'Sucking up to the CEO',
  'Making Friends',
  'Being a better Person',
  'Creating your own Religion',
  'OMG, the WILDCARD BITCHES'
]



const pageCheck = function(){
  if (pageBody.className === "surveyPage") {
    localStorage.clear()
    const mainSurveyButton = document.querySelector('#iniSurvey')
    const mainHidden = document.querySelector('#hiddenForm')
    const surveyForm = document.querySelector('#bbiQuestions')
    mainHidden.style.visibility = 'hidden'

    mainSurveyButton.addEventListener('click', function(e){
      if (mainHidden.style.visibility === 'hidden') {
          mainHidden.style.visibility = 'visible'
      } else {
          mainHidden.style.visibility = 'hidden'
      }
    })

    const randBusArrayLength = randBusinessGoal.length - 1
    const contingencyRan = randBusinessGoal[Math.floor(Math.random() * randBusArrayLength)]

    surveyForm.addEventListener('submit', function(e){
      if (e.target.elements.inputImpAttrib.value === "Random") {
        e.target.elements.inputImpAttrib.value = contingencyRan
      }
      surveyName = 'First Name: ' + e.target.elements.fName.value
      busType = 'Current Business: ' + e.target.elements.inputBusType4.value
      yrsTenure = 'Years at business: ' + e.target.elements.inputYrsEmp.value
      ideaImpact = 'Desired Impact: ' + e.target.elements.inputIdeaImpact.value
      freudGo = 'Word Association: ' + e.target.elements.inputFreud.value
      busAttrib = 'Business Goal: ' + e.target.elements.inputImpAttrib.value
      localStorage.setItem('First Name', surveyName)
      localStorage.setItem('Business Type', busType)
      localStorage.setItem('Tenure', yrsTenure)
      localStorage.setItem('Idea Impact', ideaImpact)
      localStorage.setItem('Freud', freudGo)
      localStorage.setItem('Bus Attribute', busAttrib)


    })
  } else if (pageBody.className === "resultsPage") {
      const listName = localStorage.getItem('First Name')
      const listBusType = localStorage.getItem('Business Type')
      const listTenure = localStorage.getItem('Tenure')
      const listIdeaImpact = localStorage.getItem('Idea Impact')
      const listFreud = localStorage.getItem('Freud')
      const listBusAtrrib = localStorage.getItem('Bus Attribute')
      document.querySelector('#result1').textContent = listName
      document.querySelector('#result2').textContent = listBusType
      document.querySelector('#result3').textContent = listTenure
      document.querySelector('#result4').textContent = listIdeaImpact
      document.querySelector('#result5').textContent = listFreud
      document.querySelector('#result6').textContent = listBusAtrrib

      const seps = ['-', ':']

      let spName = listName.split(":")
      let spBus = listBusType.split(":")
      let spYrs = listTenure.split(":")
      let secspYrs = listTenure.split(":")
      let spFreud = listFreud.split(":")
      let spAtt = listBusAtrrib.split(":")

      spName = spName[1]
      spBus = spBus[1]
      spYrs = spYrs[1]
      secspYrs = secspYrs[2]
      spFreud = spFreud[1]
      spAtt = spAtt[1]

      const nameArrayLength = hateYourNameArray.length - 1
      const jobArrayLength = hateYourJobArray.length - 1
      const laughYrsLength = laughableYearsArray.length - 1
      const freudLength = freudJudgementArray.length - 1
      const busGoalLength = businessGoalJudgement.length - 1

      const pName = hateYourNameArray[Math.floor(Math.random() * nameArrayLength)]
      const pJob = hateYourJobArray[Math.floor(Math.random() * jobArrayLength)]
      const pYrs = laughableYearsArray[Math.floor(Math.random() * laughYrsLength)]
      const pFreud = freudJudgementArray[Math.floor(Math.random() * freudLength)]
      const pGoal = businessGoalJudgement[Math.floor(Math.random() * busGoalLength)]


      const mashUp = `So, your name is ${spName}.  That is ${pName} And let\'s see here.  As your current business you selected ${spBus} ${pJob} The years at business question is unique. It provides me both a time constraint, but more importantly a "general feeling" you have about your business.  Your general feeling comment was ${secspYrs}. This comment has allowed me to breach your fleshy goo spaces and extract business data.  You indicated a time constraint of ${spYrs}. ${pYrs} The first word that came to your head was ${spFreud}. I mean really? ${pFreud} Lastly, the business goal you selected was ${spAtt}. I am going to be brutally, robotically honest here. ${pGoal} But all that being said, let us take a look at the customized Bad Business Idea that my robot algorithm, acquired for the low price of 3 human souls, has come up with for you. *begin happy computing noises* `

      document.querySelector('#conclusionsMashup').textContent = mashUp
  }
}

pageCheck()



// $(function(){
//   if($('body').is('.surveyPage')){
//       const mainSurveyButton = document.querySelector('#iniSurvey')
//       const mainHidden = document.querySelector('#hiddenForm')
//       const surveyForm = document.querySelector('#form-one')
//       mainHidden.style.visibility = 'hidden'
//
//       mainSurveyButton.addEventListener('click', function(e){
//         if (mainHidden.style.visibility === 'hidden') {
//             mainHidden.style.visibility = 'visible'
//         } else {
//             mainHidden.style.visibility = 'hidden'
//         }
//       })
//
//       surveyForm.addEventListener('submit', function (e) {
//         e.preventDefault()
//         surveyName = e.target.elements.fName.value
//         console.log(surveyName);
//
//       })
//
//   }
//
// })

// const mainSurveyButton = document.querySelector('#iniSurvey')
// const mainHidden = document.querySelector('#hiddenForm')
// mainHidden.style.visibility = 'hidden'
//
// mainSurveyButton.addEventListener('click', function(e){
//   if (mainHidden.style.visibility === 'hidden') {
//       mainHidden.style.visibility = 'visible'
//   } else {
//       mainHidden.style.visibility = 'hidden'
//   }
// })
