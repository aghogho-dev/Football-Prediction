# Overview

This is a SPA football prediction website.

Start the Next.js Frontend:

```bash
npm run dev
```

Start the Django Backend:

```bash
python manage.py runserver
```

I was trying out predicting the outcome of football matches using machine learning. I decided it was fun to make a website that performs this task automatically.

# Web Pages

The app currently have two pages for the two leagues: MLS and Brazilian Serie A. I used dynamic routing for scalability. When you click a link on the sidebar, it fetches the information from the database and renders it.

There are several parts to this project. Part of the football data is collected via the [API Football](https://www.api-football.com/). Free usage of the API only allows for collection of past seasons data. Data from the current season is scraped from a fooball website.

The data is preprocessed and parsed through the machine learning algorithm. The predictions are sent to the appropriate collection in the database in MongoDB Atlas.

# Development Environment

Tools: Git, VS Code, Virtual Environment, MongoDB Atlas, Vercel.

Programming Language: Python and JavaScript

Libraries:

- Frontend: React/Next.js,
- Backend: Django, DjangoRestFramework
- Data and Prediction: Scikit-Learn, Numpy, Pandas, Requests, BeautifulSoup, Selenium

# Future Work

The plan is to do the prediction manually by setting up a Cron job using AWS Lambda. Currently the size of the zip build exceed 250 MB. I can zip and send the heaviest packages separately and set up a Lambda function that runs the scripts for predicting the results and updating the database automatically.

This will involve the following tools: AWS SAM, AWS Lambda, AWS Eventbridge, and AWS S3.
