var php = require("./img/php-1.svg");
var ruby = require("./img/ruby.svg");
var rails = require("./img/rails.svg");
var postgresql = require("./img/postgresql.svg");
var mariadb = require("./img/mariadb.svg");

var html = require("./img/HTML5svg.svg");
var css = require("./img/CSS3.svg");
var sass = require("./img/Sass.svg");
var foundation = require("./img/foundation.svg");
var bootstrap = require("./img/bootstrap-4.svg");

var react = require("./img/react.svg");
var javascript = require("./img/javascript.svg");
var node = require("./img/nodejs-1.svg");
var jquery = require("./img/jquery.png");

var wordpress = require("./img/wordpress.svg");
var salesforce = require("./img/salesforce.svg");
var magento = require("./img/magento.svg");

var elasticsearch = require("./img/elasticsearch.svg");
var graphql = require("./img/graphql.svg");
var aws = require("./img/aws-logo.svg");
var jenkins = require("./img/jenkins.svg");


const expertise = [
	{
			title: 'Back End',
			skillSet: [
				{
					name: 'PHP',
					logo: php,
					proficiency: 90,
				},
				{
					name: 'Ruby',
					logo: ruby,
					proficiency: 80,
				},
				{
					name: 'RoR',
					logo: rails,
					proficiency: 80,
				},
				{
					name: 'PostgreSQL',
					logo: postgresql,
					proficiency: 80,
				},
				{
					name: 'MariaDB',
					logo: mariadb,
					proficiency: 70,
				},
			]
		},
		{
			title: 'Front End',
			skillSet: [
				{
					name: 'HTML5',
					logo: html,
					proficiency: 95,
				},
				{
					name: 'CSS3',
					logo: css,
					proficiency: 95,
				},
				{
					name: 'SASS',
					logo: sass,
					proficiency: 95,
				},
				{
					name: 'Foundation',
					logo: foundation,
					proficiency: 95,
				},
				{
					name: 'Bootstrap',
					logo: bootstrap,
					proficiency: 95,
				},
			]
		},
		{
			title: 'Javascript',
			skillSet: [
				{
					name: 'React',
					logo: react,
					proficiency: 90,
				},
				{
					name: 'Javascript',
					logo: javascript,
					proficiency: 95,
				},
				{
					name: 'React Native',
					logo: react,
					proficiency: 50,
				},
				{
					name: 'jQuery',
					logo: jquery,
					proficiency: 90,
				},
				{
					name: 'Node',
					logo: node,
					proficiency: 90,
				},
			]
		},
		{
			title: 'Content Management Systems',
			skillSet: [
				{
					name: 'WordPress',
					logo: wordpress,
					proficiency: 90,
				},
				{
					name: 'Salesforce',
					logo: salesforce,
					proficiency: 70,
				},
				{
					name: 'Magento',
					logo: magento,
					proficiency: 70,
				},
			]
		},
		{
			title: 'Other Tools',
			skillSet: [
				{
					name: 'ElasticSearch',
					logo: elasticsearch,
					proficiency: 80,
				},
				{
					name: 'GraphQL',
					logo: graphql,
					proficiency: 90,
				},
				{
					name: 'Amazon Web Services',
					logo: aws,
					proficiency: 75,
				},
				{
					name: 'Jenkins',
					logo: jenkins,
					proficiency: 85,
				},
			]
		}
	];

module.exports = { expertise }