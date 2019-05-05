var dindr = require("./img/dindr.png");
var crowdfunder = require("./img/crowdfunder-logo.png");
var seatyoself = require("./img/seatyoself.png");
var space = require("./img/space.png");


const projects = [
	{
		title: 'Dindr',
		image: dindr,
		github: 'https://github.com/hwong93/Dindr',
		website: 'https://dindrdates.herokuapp.com',
		slogan: 'A webapp that helps you find your cravings and a date.',
		frontend: ['Ajax', 'JS/jQuery', 'Sass', 'Bourbon'],
		backend: ['Ruby/Rails'],
		api: ['Yelp', 'Google Maps APIs'],
		status: 'work in progress'
	},
	{
		title: 'Crowdfunder',
		image: crowdfunder,
		github: 'https://github.com/hwong93/Crowdfunder',
		website: 'https://itsmycrowdfunder.herokuapp.com',
		slogan: 'Giving projects a chance by donating to them and receiving rewards in return. Kickstarter clone.',
		frontend: ['Ajax', 'JS/jQuery', 'CSS/Sass'],
		backend: ['Ruby/Rails'],
		api: [],
		status: 'work in progress'
	},
	{
		title: 'Seat Yo Self',
		image: seatyoself,
		github: 'https://github.com/hwong93/seat-yo-self',
		website: '',
		slogan: 'Find a restaurant and make a reservation if it\'s available. OpenTable clone.',
		frontend: ['Ajax', 'JS/jQuery', 'CSS/Sass'],
		backend: ['Ruby/Rails'],
		api: [],
		status: 'work in progress'
	},
	{
		title: 'Space Tic Tac Toe',
		image: space,
		github: 'https://github.com/hwong93/spaceTTT',
		website: 'https://houtaiwong.com/spaceTTT/',
		slogan: 'Play tic-tac-toe either with a friend or against a computer!',
		frontend: ['JS/jQuery', 'CSS', 'HTML'],
		backend: [],
		api: [],
		status: 'work in progress'
	}
];

module.exports = { projects }