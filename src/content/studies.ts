// Types

type Studie = {
  date: string
  title: string
  school: string
  description?: string
}

// Content

export const studies: Studie[] = [
  {
    date: 'sep 2016 - jul 2021',
    title: 'Advertising and PR + Marketing',
    school: 'ESIC Business & Marketing School',
    description:
      'Double degree in Advertising and PR with Marketing. Study of the branding of a company and its positioning in the market. Research, briefing and creation of advertising and marketing plans. Execution of different digital advertising and social media actions. ',
  },
  {
    date: 'oct 2019 - nov 2019',
    title: 'Python developer',
    school: 'AEPI Association',
    description:
      'Fundamentals of the Python programming language. OOP-based development. Application of best practices when developing an application. Creation and consumption of APIs. Use of relational and non-relational databases. Unit testing using mocks and fixtures.',
  },
  {
    date: 'sep 2020 - nov 2020',
    title: 'Data Science with Python',
    school: 'AEPI Association',
    description:
      'Fundamentals of Data Science using Python. Preprocessing of tabular data before being treated. Data scaling and encoding. Selection of the most important features for the prediction of a target. Application of Machine Learning models and their optimization.',
  },
  {
    date: 'aug 2021 - oct 2021',
    title: 'Data Analytics with Python',
    school: 'Ironhack',
    description:
      'Data Analytics Bootcamp with Python held in Amsterdam. Exploratory data analysis. Data visualization using graphs and tables. Application of supervised and unsupervised Machine Learning models for better decision making within a business. Web Scraping.',
  },
]
