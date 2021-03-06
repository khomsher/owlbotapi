
![alt text](https://owlbot.info/static/dictionary/img/owlbot.png "OwlBot")
   


# owlbot-js
[![CircleCI](https://circleci.com/bb/owldroids/owlbot-js.svg?style=svg)](https://circleci.com/bb/owldroids/owlbot-js)
[![Coverage Status](https://coveralls.io/repos/bitbucket/owldroids/owlbot-js/badge.svg?branch=master)](https://coveralls.io/bitbucket/owldroids/owlbot-js?branch=master)

OwlBot is a free English dictionary API available on https://owlbot.info. 
This repository is a simple javascript client to fetch definitions of the words from the Owlbot API.

## Quick start
First install the owlbot-js package.
```
npm install owlbot-js
```

**Example Code:**
```js
var Owlbot = require('owlbot-js');
  
var client = Owlbot(YOUR_TOKEN);

client.define('owl').then(function(result){
   console.log(result);
});
```

In the example code, we've initiated the client object with a token. you can register for a free token on https://owlbot.info.

Then on the client instance we called the define method to fetch the definitions of  the word 'owl'.
In the background, define method sends an ajax request to the API using the [axios](https://github.com/axios/axios) package.
Since it's an asynchronous request, the define methos returns a Promiss.

##### result:
```js
{ definitions:
   [ { type: 'noun',
       definition:
        'a nocturnal bird of prey with large eyes, a facial disc, a hooked beak, and typically a loud hooting call.',
       example:
        'I love reaching out into that absolute silence, when you can hear the owl or the wind.',
       image_url:
        'https://media.owlbot.info/dictionary/images/owl.jpg.400x400_q85_box-403,83,960,640_crop_detail.jpg',
       emoji: '🦉' } ],
  word: 'owl',
  pronunciation: 'oul' }


```
