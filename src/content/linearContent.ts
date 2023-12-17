// Types

type LinearContent = {
  date: string
  title: string
  subtitle: string
  description?: string
}

// Content

export const studies: LinearContent[] = [
  {
    date: 'sep 2016 - jul 2021',
    title: 'Advertising and PR + Marketing',
    subtitle: 'ESIC Business & Marketing School',
    description:
      'Double degree in Advertising and PR with Marketing. Study of the branding of a company and its positioning in the market. Research, briefing and creation of advertising and marketing plans. Execution of different digital advertising and social media actions.',
  },
  {
    date: 'oct 2019 - nov 2019',
    title: 'Python developer',
    subtitle: 'AEPI Association',
    description:
      'Fundamentals of the Python programming language. OOP-based development. Application of best practices when developing an application. Creation and consumption of APIs. Use of relational and non-relational databases. Unit testing using mocks and fixtures.',
  },
  {
    date: 'sep 2020 - nov 2020',
    title: 'Data Science with Python',
    subtitle: 'AEPI Association',
    description:
      'Fundamentals of Data Science using Python. Preprocessing of tabular data before being treated. Data scaling and encoding. Selection of the most important features for the prediction of a target. Application of Machine Learning models and their optimization.',
  },
  {
    date: 'aug 2021 - oct 2021',
    title: 'Data Analytics with Python',
    subtitle: 'Ironhack',
    description:
      'Data Analytics Bootcamp with Python held in Amsterdam. Exploratory data analysis. Data visualization using graphs and tables. Application of supervised and unsupervised Machine Learning models for better decision making within a business. Web Scraping.',
  },
]

export const career: LinearContent[] = [
  {
    date: 'jan 2020 - mar 2022',
    title: 'Junior Data Analyst',
    subtitle: 'Vectoriam Digital Marketing',
    description:
      'Data Analyst within the Digital Marketing world. Analysis of paid media campaigns. Conducting audits and consulting to companies in the fashion industry. Analysis and prediction of e-commerce sales. Providing insights to improve decision making.',
  },
  {
    date: 'mar 2022 - jul 2022',
    title: 'Junior Data Analyst',
    subtitle: 'Accenture',
    description:
      'Data Analyst within the supply chain industry. Participation in a fraudulent warranty detection project for an automotive group where my role was to manage and implement the reporting part. Generation of ETLs and visualization of the main KPIs of the project.',
  },
  {
    date: 'nov 2022 - jun 2023',
    title: 'Junior Backend Developer',
    subtitle: 'Serquo',
    description:
      'Backend Developer within the world of Advertising and Marketing. Working from Serquo for a remote client called t2ó. Implementation of new functionalities within the internal tools of the company. Generation and maintenance of ETLs. Working with Scrum.',
  },
  {
    date: 'jun 2023 - actuality',
    title: 'Junior Backend Developer',
    subtitle: 't2ó',
    description:
      'After working as an outsourcer at the company from Serquo, hired internally within the company. Everything done above plus: optimizing the performance of our processes in terms of efficiency and resource consumption and developing connectors to advertising platforms.',
  },
]
