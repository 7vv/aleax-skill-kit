
// TestMailServer
const MAIL_SERVER_HOST = 'http://222.109.176.252:4200/api/mailer';

/**
 * App ID for the skill
 */
var APP_ID = "amzn1.ask.skill.43524157-3251-46a2-bb99-23c29834063e"; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * The AlexaSkill prototype and helper functions
 */
 
const Alexa = require('alexa-sdk');
const request = require('request-promise');
let style = '';

requestMailServer = async (many, style) => {
    return await request({
        method:'post',
        url: MAIL_SERVER_HOST,
        body: {
            many: many || 1,
            style: style || 'shortcut'
        },
        transform: (body) => body.status === 200 ? 'Ok, I find :Check your mail' : body.message,    
        json: true,
    })
}

buildHandlers = event => {
    const handlers = {
        //first
       'LaunchRequest': () => {            
            const greetingArr = ['Hello, May I help you?'];
            const greetingIndex = Math.floor(Math.random() * greetingArr.length);
            //음성으로 질문하기
            this.emit(':ask', greetingArr[greetingIndex]);
        },
        
        //show me hairstyle
        'show': () => {
            const showed = event.request.intent.slots.showed.value;
            this.emit(':ask', 'ok, what kind of hairstyle?');
        },

        //i kind shortcut
        'hairStyle': () => {
            style = event.request.intent.slots.style.value;
            this.emit(':ask', 'how :many?');
        },

        //1, 2, 3, 4
        'many': async () => {
            const many = event.request.intent.slots.count.value;                        
            this.emit(':tell', await requestMailServer(many, style));
        },

        "AMAZON.HelpIntent": (intent, session, response) => {
            this.emit(':ask',  'You can ask Space Geek tell me a space fact, or, you can say exit... What can I help you with?", "What can I help you with?');            
        },
    
        "AMAZON.StopIntent": (intent, session, response) => {
            this.emit(':tell', 'STOP')
        },
    
        "AMAZON.CancelIntent": (intent, session, response) => {            
            this.emit(':tell', 'CANCLE');
        }
    }
    
    return handlers;
}

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;    
    alexa.registerHandlers(buildHandlers(event));    
    alexa.execute();
};

