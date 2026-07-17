import type { Path } from '../types';

export const CURRICULUM_DATA: Path[] = [
  {
    id: 'data-science',
    title: 'Data Science & Machine Learning',
    description: 'Master data science and machine learning from first principles, building intuition with interactive simulators at every step.',
    icon: 'BookOpen',
    lessons: [
      {
        id: 'what-is-data-science',
        number: 1,
        title: '1. What is Data Science?',
        subtitle: 'Discover the interdisciplinary field that turns raw data into actionable decisions, and explore the five major areas where it is transforming our world.',
        pathId: 'data-science',
        pathTitle: 'Data Science & Machine Learning',
        readingTime: '8 mins',
        difficulty: 'Beginner',
        objectives: [
          'Define data science as an interdisciplinary problem-solving approach',
          'Explain why the digital age has magnified its importance',
          'Identify five high-impact areas: business, science, personalization, policy, and innovation',
        ],
        concepts: [
          {
            title: 'A working definition',
            paragraphs: [
              'Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It blends tools, algorithms, and machine learning principles with one goal: to discover hidden patterns in raw data.',
              'But data science is more than a bag of techniques. It is a problem-solving approach that leverages data and analytical ability to address complex challenges and make informed decisions.',
            ],
            analogy: {
              concept: 'Interdisciplinary discovery',
              metaphor: 'Modern detective work that combines forensic science with intuition.',
              why: 'A detective does not only collect physical evidence (database logs) or read witness statements (unstructured text). They apply lab analysis (statistics), construct digital search coordinates (programming), and read psychological profiles (domain expertise) to reconstruct the timeline of an event.',
            },
          },
          {
            title: 'Why the digital age made it urgent',
            paragraphs: [
              'The importance of data science has been magnified by the digital age, which has ushered in an era of “big data.” A vast amount of data is generated every second, from every corner of the world.',
              'The ability to harness this data and convert it into actionable intelligence is transforming industries and revolutionizing how we understand and interact with the world.',
            ],
          },
          {
            title: 'Driving business strategies',
            paragraphs: [
              'Data science is pivotal in driving business strategies: it provides insights that enhance customer experiences, improve service delivery, and optimize operations. Companies use it to forecast demand, manage inventory, and mitigate risk.',
              'In finance, analytics tools predict market trends and assist in decision-making processes that align with company goals.',
            ],
          },
          {
            title: 'Advancing scientific research',
            paragraphs: [
              'In scientific domains, data science techniques are crucial for analyzing complex datasets — from genomic sequencing to climate modeling. Scientists use it to uncover patterns and anomalies that would not be apparent through traditional methods.',
              'This ability to extract knowledge from data leads to faster discoveries, more efficient energy use, and a better understanding of diseases.',
            ],
          },
          {
            title: 'Personalization, policy, and innovation',
            paragraphs: [
              'Personalization: data science tailors services to each user — from healthcare plans based on an individual’s genetic makeup to marketing messages that consider customer preferences.',
              'Public policy: governments create more effective policies, predict resource needs, and respond faster to crises by analyzing trends in data.',
              'Innovation: data science is the backbone of AI and machine learning, enabling autonomous vehicles, robotics, and Internet of Things applications.',
            ],
          },
        ],
        keyFormulas: [
          { latex: 'V = \\text{volume} \\times \\text{velocity} \\times \\text{variety}', caption: 'The 3 V’s of big data' },
        ],
        glossary: [
          { term: 'Data science', definition: 'An interdisciplinary field that uses scientific methods and systems to extract knowledge and insights from data.' },
          { term: 'Big data', definition: 'Datasets too large or complex for traditional data-processing software.' },
          { term: 'Structured data', definition: 'Information organized in a defined format, such as tables in a database.' },
          { term: 'Unstructured data', definition: 'Information without a predefined model, such as text, images, and video.' },
          { term: 'Predictive analytics', definition: 'Techniques that use historical data to forecast future outcomes.' },
        ],
        realWorldExample: {
          scenario: 'Tailoring medical treatments with genomics',
          application: 'Machine learning models analyze historical patient diagnostics and genetic profiles to predict how patients respond to different therapies.',
          impact: 'Enables personalized healthcare that maximizes treatment efficacy and minimizes adverse side effects.',
        },
        playground: {
          type: 'intro-impact',
          title: 'Where data science makes an impact',
          instructions: 'Each bar represents a high-impact domain. Hover to see a real-world example, and watch how shifting priorities change the overall mix. Notice how a single field (data science) finds application in very different industries.',
          expectedOutcome: 'See the breadth of domains data science touches.',
        },
        quiz: [
          {
            id: 'intro-q1',
            question: 'Which of the following best describes data science?',
            options: [
              'A purely mathematical discipline focused exclusively on hypothesis testing.',
              'An interdisciplinary field that combines scientific methods, algorithms, and systems to extract insights from structured and unstructured data.',
              'A programming paradigm used to build high-performance relational databases.',
              'The process of backing up and recovering server log files.',
            ],
            answerIndex: 1,
            explanation: 'Data science is uniquely interdisciplinary, blending computer science, statistics, and domain knowledge to extract value from both structured and unstructured data.',
          },
          {
            id: 'intro-q2',
            question: 'Which of these is NOT mentioned as a major area of impact for data science?',
            options: [
              'Driving business strategies',
              'Advancing scientific research',
              'Informing public policy',
              'Replacing human creativity in art',
            ],
            answerIndex: 3,
            explanation: 'The book highlights business, science, personalization, public policy, and innovation — not replacing human creativity.',
          },
        ],
        practiceExercise: {
          task: 'Open the impact simulator. Which area has the largest bar by default, and which one would you invest in if your goal was public-good impact?',
          hint: 'Click the “Public-good priority” preset to reorder the weights.',
          expectedAnswer: 'Healthcare by default; for public good, choose Healthcare or Public Policy.',
        },
        keyTakeaways: [
          'Data science is interdisciplinary — it blends computer science, statistics, and domain expertise.',
          'It is both descriptive (explains what happened) and predictive (forecasts what will happen).',
          'Its biggest impact areas are business, science, personalization, public policy, and innovation.',
        ],
      },
      {
        id: 'history-evolution',
        number: 2,
        title: '2. History & Evolution of Data Science',
        subtitle: 'Trace the journey from 18th-century statistics to the modern AI era, and understand the milestones that shaped the field.',
        pathId: 'data-science',
        pathTitle: 'Data Science & Machine Learning',
        readingTime: '7 mins',
        difficulty: 'Beginner',
        objectives: [
          'Identify the major eras in the evolution of data science',
          'Explain how statistics, computing, and storage each enabled the next leap',
          'Locate today’s AI-driven era in the historical timeline',
        ],
        concepts: [
          {
            title: 'Early foundations in statistics',
            paragraphs: [
              'The roots of data science can be traced back to the early application of statistics and probability theory. In the 18th and 19th centuries, these mathematical theories were primarily used for demographic and economic analysis by governments and businesses.',
            ],
            analogy: {
              concept: 'Statistics as the bedrock',
              metaphor: 'A foundation of stone that supports every later building.',
              why: 'Even modern machine learning models rely on probability, hypothesis testing, and the same descriptive measures (mean, variance) that statisticians developed centuries ago.',
            },
          },
          {
            title: 'The 20th century: computers and databases',
            paragraphs: [
              'The mid-20th century saw the introduction of computers, which significantly impacted data analysis. Data could be processed much faster and on a much larger scale than ever before.',
              'In the 1970s and 1980s, the development of relational databases and the SQL language revolutionized how organizations stored and retrieved large amounts of data.',
            ],
          },
          {
            title: 'Data mining and big data',
            paragraphs: [
              'The term “Data Mining” appeared in the 1990s, referring to the process of discovering patterns and relationships in large datasets. It combined methods from statistics, artificial intelligence, and computer graphics.',
              'The early 21st century introduced the concept of “Big Data,” referring to datasets too large or complex for traditional processing software — and the need to manage them led to innovations in storage, analytics, and processing power.',
            ],
          },
          {
            title: 'The formalization of data science',
            paragraphs: [
              'The term “Data Science” was popularized in the early 2000s by William S. Cleveland and others who advocated for an interdisciplinary approach that unifies statistics, data analysis, machine learning, and their related methods.',
              'Today, data science is recognized as a distinct discipline involving elements of computer science, statistical methods, and domain expertise. AI, machine learning, and deep learning are at the forefront, enabling the automation of predictive models and decision-making.',
            ],
          },
        ],
        glossary: [
          { term: 'Statistics', definition: 'The discipline of collecting, organizing, analyzing, and interpreting numerical data.' },
          { term: 'Relational database', definition: 'A database that stores and provides access to data points that are related to one another, typically queried with SQL.' },
          { term: 'Data mining', definition: 'The process of discovering patterns and relationships in large datasets.' },
          { term: 'Big data', definition: 'Datasets that are too large or complex to be handled by traditional data-processing software.' },
        ],
        realWorldExample: {
          scenario: 'From punch cards to GPUs',
          application: 'Statistical analysis that once took a team of analysts weeks in the 1960s can now be done in seconds on a single GPU.',
          impact: 'This collapse in time-to-insight is the reason modern data science exists as a distinct field.',
        },
        playground: {
          type: 'history-timeline',
          title: 'A timeline of data science',
          instructions: 'Each marker is a milestone. Click a marker to see the key contribution. The slider on the right shifts the entire field forward in time — see how the dominant toolset evolves from quill-and-paper statistics to deep learning.',
          expectedOutcome: 'Build intuition for how each era built on the last.',
        },
        quiz: [
          {
            id: 'hist-q1',
            question: 'Which development in the 1970s–1980s revolutionized how organizations stored data?',
            options: ['Relational databases and SQL', 'The printing press', 'Spreadsheets', 'Cloud computing'],
            answerIndex: 0,
            explanation: 'The development of relational databases and SQL in the 1970s and 1980s revolutionized data storage and retrieval.',
          },
          {
            id: 'hist-q2',
            question: 'Who popularized the term “Data Science” in the early 2000s?',
            options: ['Alan Turing', 'William S. Cleveland', 'Tim Berners-Lee', 'Geoffrey Hinton'],
            answerIndex: 1,
            explanation: 'William S. Cleveland and colleagues advocated for an interdisciplinary approach that unified statistics, analysis, and machine learning.',
          },
        ],
        practiceExercise: {
          task: 'On the timeline, click the marker labeled “1990s — Data Mining.” What two fields, besides statistics, did it combine?',
          hint: 'Read the caption under the marker.',
          expectedAnswer: 'Artificial intelligence and computer graphics.',
        },
        keyTakeaways: [
          'Statistics → computing → databases → data mining → big data → AI. Each era built on the last.',
          'Relational databases and SQL in the 1970s were the storage breakthrough that made modern analytics possible.',
          'Data science was formalized in the 2000s as the union of statistics, analysis, and machine learning.',
        ],
      },
      {
        id: 'applications',
        number: 3,
        title: '3. Applications Across Industries',
        subtitle: 'See how data science powers decisions in healthcare, finance, marketing, e-commerce, supply chain, the public sector, manufacturing, and telecom.',
        pathId: 'data-science',
        pathTitle: 'Data Science & Machine Learning',
        readingTime: '8 mins',
        difficulty: 'Beginner',
        objectives: [
          'Match data science techniques to real industries',
          'Spot the difference between descriptive, predictive, and prescriptive uses',
          'Recognize that the same algorithms appear in very different domains',
        ],
        concepts: [
          {
            title: 'Healthcare: from risk to personalization',
            paragraphs: [
              'In healthcare, data science is used to improve patient outcomes, manage costs, and enhance quality of care. Predictive models forecast disease outbreaks and patient diagnoses. Machine learning algorithms analyze historical health data to predict chronic disease risks, enabling early intervention.',
              'In genomics, data science tailors medical treatments to individual genetic profiles, enhancing the effectiveness of therapies.',
            ],
          },
          {
            title: 'Finance, marketing, and e-commerce',
            paragraphs: [
              'Finance benefits from data science in risk management, fraud detection, customer management, and algorithmic trading. Models predict loan defaults; anomaly-detection algorithms flag fraudulent transactions; trading strategies analyze vast market data to identify opportunities.',
              'Marketing uses deep insights into consumer behavior for personalized campaigns and sentiment analysis of social media. E-commerce deploys recommendation systems, dynamic pricing algorithms, and NLP-powered chatbots.',
            ],
          },
          {
            title: 'Supply chain, public sector, manufacturing, telecom',
            paragraphs: [
              'Supply chain: route optimization reduces delivery time and cost; predictive analytics forecast demand to avoid overstocking or stockouts.',
              'Public sector: predictive policing, public health monitoring, and resource allocation — all driven by data analysis.',
              'Manufacturing: predictive maintenance uses sensor data to predict equipment failures, reducing downtime. Quality control applies machine learning to detect deviations in real time.',
              'Telecom: network optimization, customer churn prediction, and fraud detection improve service quality and retention.',
            ],
          },
        ],
        glossary: [
          { term: 'Recommendation system', definition: 'An algorithm that suggests items to users based on past behavior and similarities with other users.' },
          { term: 'Churn prediction', definition: 'A model that estimates the probability a customer will stop using a service.' },
          { term: 'Predictive maintenance', definition: 'Using sensor data and models to predict equipment failures before they occur.' },
          { term: 'Sentiment analysis', definition: 'A technique that determines the emotional tone behind text, often used on social media data.' },
        ],
        realWorldExample: {
          scenario: 'Fraud detection in a payment network',
          application: 'Algorithms analyze transaction patterns in real time and flag behavior that deviates from a customer’s norm — such as a sudden large purchase in a foreign country.',
          impact: 'Banks block millions of fraudulent transactions per year that would otherwise have gone unnoticed.',
        },
        playground: {
          type: 'industries',
          title: 'Adoption across industries',
          instructions: 'Each tile is an industry. Hover to see a concrete use case; click to “focus” it and reveal the dominant data-science technique used there. The radar chart updates to show the technique mix.',
          expectedOutcome: 'Discover which techniques dominate which industries.',
        },
        quiz: [
          {
            id: 'app-q1',
            question: 'Which technique is most associated with fraud detection in finance?',
            options: ['Clustering', 'Anomaly detection on transaction patterns', 'Histogram plotting', 'Image classification'],
            answerIndex: 1,
            explanation: 'Fraud detection typically relies on algorithms that spot unusual behavior in transaction patterns.',
          },
          {
            id: 'app-q2',
            question: 'In manufacturing, “predictive maintenance” refers to:',
            options: [
              'Scheduling routine maintenance on a fixed calendar',
              'Using sensor data to predict equipment failures before they occur',
              'Manually inspecting machines weekly',
              'Outsourcing maintenance to a third party',
            ],
            answerIndex: 1,
            explanation: 'Predictive maintenance uses sensor data and models to anticipate failures and reduce downtime.',
          },
        ],
        practiceExercise: {
          task: 'Click the “E-commerce” tile. Which technique is dominant, and what user behavior drives it?',
          hint: 'Look at the radar chart after clicking.',
          expectedAnswer: 'Recommendation systems, driven by user purchase and browsing history.',
        },
        keyTakeaways: [
          'The same techniques (classification, clustering, anomaly detection) appear in healthcare, finance, marketing, and more.',
          'Different industries emphasize different techniques based on the questions they need to answer.',
          'The biggest wins come from combining descriptive, predictive, and prescriptive analytics.',
        ],
      },
      {
        id: 'vs-traditional',
        number: 4,
        title: '4. Data Science vs. Traditional Analysis',
        subtitle: 'Understand how data science extends classical statistics with predictive power, larger scope, and modern tooling.',
        pathId: 'data-science',
        pathTitle: 'Data Science & Machine Learning',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Compare scope, methods, and impact of traditional analysis vs. data science',
          'Explain why the difference matters for decision-making',
          'Identify which problems call for which approach',
        ],
        concepts: [
          {
            title: 'Scope and objectives',
            paragraphs: [
              'Traditional Data Analysis primarily focuses on extracting actionable insights from historical data. It tends to address specific, well-defined questions within smaller, structured datasets — often revolving around summarizing past events for reporting.',
              'Data Science encompasses a broader scope, dealing with structured AND unstructured data (text, images, video). It aims not just to explain the past, but to predict future outcomes and provide prescriptive insights using complex algorithms and machine learning.',
            ],
            analogy: {
              concept: 'Rear-view vs. front-view',
              metaphor: 'Traditional analysis is a rear-view mirror; data science is a forward-looking windshield.',
              why: 'Traditional analysis reports on what happened. Data science predicts what is likely to happen next and prescribes the best action.',
            },
          },
          {
            title: 'Methodologies and tools',
            paragraphs: [
              'Traditional analysis uses straightforward statistical methods — correlations, regressions, hypothesis testing — and tools like Excel, SAS, or SPSS, suited for smaller structured data and simpler analyses.',
              'Data Science employs machine learning, deep learning, and statistics, plus programming languages like Python and R and platforms like Hadoop and Spark for big data.',
            ],
          },
          {
            title: 'Applications and impact',
            paragraphs: [
              'Traditional analysis is applied in routine analysis — financial reporting, quality control, operational efficiency. These analyses are generally reactive rather than proactive.',
              'Data science is more transformative due to its predictive capabilities. It is crucial in domains requiring real-time analytics such as dynamic pricing, recommendation systems, and advanced fraud detection.',
            ],
          },
        ],
        keyFormulas: [
          { latex: 'y = \\beta_0 + \\beta_1 x_1 + \\beta_2 x_2 + \\cdots + \\beta_n x_n + \\varepsilon', caption: 'Linear regression (used in both fields)' },
        ],
        glossary: [
          { term: 'Prescriptive analytics', definition: 'Analytics that recommend actions to achieve a desired outcome.' },
          { term: 'Big data platforms', definition: 'Software ecosystems (e.g. Hadoop, Spark) designed to store and process massive datasets across clusters.' },
          { term: 'Hypothesis testing', definition: 'A statistical method for deciding whether there is enough evidence to reject a null hypothesis.' },
        ],
        realWorldExample: {
          scenario: 'Monthly sales report vs. dynamic pricing',
          application: 'Traditional analysis: a monthly Excel report on sales by region. Data science: a real-time pricing engine that adjusts prices hourly based on demand, competitor price, and inventory.',
          impact: 'Dynamic pricing routinely lifts revenue by 5–15% over static pricing.',
        },
        playground: {
          type: 'comparison',
          title: 'Side-by-side comparison',
          instructions: 'Drag the slider to see the trade-off between traditional analysis and data science. Watch how scope, tools, and predictive power shift. Hover each axis to see a concrete example.',
          expectedOutcome: 'Internalize that the difference is not just “more code” — it is a different mindset.',
        },
        quiz: [
          {
            id: 'cmp-q1',
            question: 'Which statement best captures the difference between traditional analysis and data science?',
            options: [
              'Traditional analysis uses Excel; data science uses Python.',
              'Traditional analysis is reactive and describes the past; data science is predictive and prescriptive.',
              'Traditional analysis is for businesses; data science is for scientists.',
              'There is no meaningful difference.',
            ],
            answerIndex: 1,
            explanation: 'The key distinction is the shift from descriptive, reactive analysis to predictive and prescriptive analysis.',
          },
        ],
        practiceExercise: {
          task: 'In the comparison simulator, slide the “Predictive power” bar all the way to the right. Which two new tools become prominent?',
          hint: 'Look at the tools axis in the right panel.',
          expectedAnswer: 'Python and Spark (or Hadoop).',
        },
        keyTakeaways: [
          'Traditional analysis = reactive, descriptive, smaller structured data, classical statistics.',
          'Data science = predictive, prescriptive, structured + unstructured, machine learning, big data.',
          'Both are useful — choose by the question you need to answer.',
        ],
      },
      {
        id: 'lifecycle',
        number: 5,
        title: '5. The Data Science Lifecycle',
        subtitle: 'Walk through the six stages every data science project follows, from collection and cleaning to deployment and monitoring.',
        pathId: 'data-science',
        pathTitle: 'Data Science & Machine Learning',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Name and order the six stages of the data science process',
          'Explain why cleaning and transformation are bottlenecks',
          'Recognize that deployment and maintenance are ongoing, not one-time',
        ],
        concepts: [
          {
            title: 'A six-stage process',
            paragraphs: [
              'The data science process is a sequence of stages: 1) Data Collection, 2) Data Cleaning, 3) Data Transformation, 4) Data Exploration and Visualization, 5) Data Modeling, and 6) Deployment and Maintenance.',
              'Each stage has its own techniques and tools. Skipping a stage — especially cleaning — almost always costs more time later than it saves now.',
            ],
            analogy: {
              concept: 'A pipeline',
              metaphor: 'A water-filtration system where each stage purifies the data a little more.',
              why: 'Raw water (messy data) passes through a filter (cleaning), is treated to balance pH (transformation), analyzed for purity (exploration), bottled (modeling), and shipped to customers (deployment).',
            },
          },
          {
            title: 'Why each stage matters',
            paragraphs: [
              'Collection determines what is even possible to answer. Cleaning fixes missing values, outliers, and inconsistencies. Transformation scales features and encodes categories. Exploration surfaces patterns with statistics and charts. Modeling turns patterns into predictions. Deployment turns predictions into business value, and maintenance keeps the system accurate as the world changes.',
            ],
          },
        ],
        glossary: [
          { term: 'Lifecycle', definition: 'The set of stages a data science project moves through from idea to ongoing operation.' },
          { term: 'Pipeline', definition: 'A connected sequence of data processing steps.' },
          { term: 'Data drift', definition: 'A change in the statistical properties of input data over time, which can degrade model accuracy.' },
        ],
        realWorldExample: {
          scenario: 'Forecasting daily demand at a retail chain',
          application: 'Collect sales + weather + holiday data, clean missing entries, transform to per-store daily series, explore seasonality, fit a model, deploy as a daily batch job, monitor drift and retrain quarterly.',
          impact: 'Reduces stockouts by 20% and overstock by 15% in the first six months.',
        },
        playground: {
          type: 'lifecycle',
          title: 'Walk the lifecycle',
          instructions: 'Click each stage in order. Notice that the time and effort spent in the “inner” stages (cleaning and transformation) is often higher than the modeling stage that gets all the attention.',
          expectedOutcome: 'See the relative effort distribution across the six stages.',
        },
        quiz: [
          {
            id: 'lc-q1',
            question: 'Which stage is often the biggest bottleneck in a real project?',
            options: ['Modeling', 'Cleaning and transformation', 'Deployment', 'Visualization'],
            answerIndex: 1,
            explanation: 'In practice, cleaning and transformation consume 60–80% of a data scientist’s time, far more than modeling.',
          },
        ],
        practiceExercise: {
          task: 'Click through the lifecycle simulator. Which stage do you spend the most time on, and which one is the shortest?',
          hint: 'Watch the bar lengths in the right panel.',
          expectedAnswer: 'Most time: cleaning/transformation. Shortest: deployment (initial).',
        },
        keyTakeaways: [
          'The lifecycle is: Collection → Cleaning → Transformation → Exploration → Modeling → Deployment + Maintenance.',
          'Cleaning and transformation dominate the effort, not modeling.',
          'Deployment and maintenance are ongoing — the lifecycle never truly ends.',
        ],
      },
      {
        id: 'data-collection',
        number: 6,
        title: '6. Data Collection & Formats',
        subtitle: 'Learn the five major sources of data and the four common formats that determine how it is stored and processed.',
        pathId: 'data-science',
        pathTitle: 'Data Science & Machine Learning',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Distinguish internal, external, sensor, user-generated, and syndicated data',
          'Compare CSV, JSON, SQL, and NoSQL for different use cases',
          'Choose the right format for a given problem',
        ],
        concepts: [
          {
            title: 'Five major sources of data',
            paragraphs: [
              'Internal sources: data generated from within the organization — transaction logs, customer databases, employee records, operational data. Often structured and readily accessible.',
              'External sources: public datasets, partner data, social media, purchased data. Useful for benchmarking, demographic studies, and broader market trends.',
              'Sensors and IoT devices: real-time streams from mobile devices, wearables, automotive sensors, industrial equipment, smart home devices.',
              'User-generated content: reviews, comments, blog posts, videos — unstructured, rich in sentiment and preference signals.',
              'Syndicated data: collected and packaged by third-party providers who sell it to organizations needing specialized information.',
            ],
          },
          {
            title: 'Four common data formats',
            paragraphs: [
              'CSV (Comma-Separated Values): a simple plain-text format for tabular data. Easy to generate, but lacks standardization for complex data types.',
              'JSON (JavaScript Object Notation): a lightweight, hierarchical format easy for machines to parse. Common in web applications and APIs.',
              'SQL (Structured Query Language): not a format per se, but a language for managing and querying structured data in relational databases.',
              'NoSQL databases: flexible storage for unstructured and semi-structured data — key-value (Redis), document (MongoDB), wide-column (Cassandra), graph databases.',
            ],
            codeSnippet: {
              language: 'json',
              code: `{
  "customer": {
    "id": 1024,
    "name": "Aya Suzuki",
    "purchases": [
      { "item": "notebook", "price": 12.5 },
      { "item": "pen",      "price": 1.2  }
    ]
  }
}`,
            },
          },
        ],
        glossary: [
          { term: 'CSV', definition: 'Comma-Separated Values — a plain-text tabular format.' },
          { term: 'JSON', definition: 'JavaScript Object Notation — a lightweight hierarchical data format.' },
          { term: 'SQL', definition: 'Structured Query Language — used to query relational databases.' },
          { term: 'NoSQL', definition: 'A class of databases (key-value, document, graph) that does not require a fixed relational schema.' },
        ],
        realWorldExample: {
          scenario: 'A ride-hailing app',
          application: 'Combines internal transaction logs, external weather APIs, sensor/GPS streams from phones, and user reviews — all stored across SQL (for billing) and NoSQL (for trip events).',
          impact: 'Powers real-time ETAs and dynamic pricing with sub-second response times.',
        },
        playground: {
          type: 'data-collection',
          title: 'Pick the right format',
          instructions: 'You have four scenarios. For each, drag the scenario onto the format that fits best. The simulator will tell you when you have it right.',
          expectedOutcome: 'Internalize that format choice depends on data shape and use case.',
        },
        quiz: [
          {
            id: 'dc-q1',
            question: 'Which format is best suited to nested, hierarchical data that changes shape often?',
            options: ['CSV', 'JSON', 'A flat text file', 'Excel only'],
            answerIndex: 1,
            explanation: 'JSON handles nesting and varying fields gracefully and is the standard for web APIs.',
          },
        ],
        practiceExercise: {
          task: 'In the format-picker, place the “GPS sensor stream” scenario onto its best format. What did the simulator tell you?',
          hint: 'Sensor data is time-stamped, semi-structured, and high-volume.',
          expectedAnswer: 'NoSQL (time-series / document store).',
        },
        keyTakeaways: [
          'Sources: internal, external, sensor/IoT, user-generated, syndicated.',
          'Formats: CSV (tabular), JSON (hierarchical), SQL (relational queries), NoSQL (flexible).',
          'Match format to the shape and velocity of your data.',
        ],
      },
      {
        id: 'data-cleaning',
        number: 7,
        title: '7. Data Cleaning & Missing Values',
        subtitle: 'Master the five families of techniques for handling missing data, and see how each one changes a small dataset.',
        pathId: 'data-science',
        pathTitle: 'Data Science & Machine Learning',
        readingTime: '7 mins',
        difficulty: 'Beginner',
        objectives: [
          'List the main strategies for handling missing values',
          'Compare deletion, imputation, and model-based approaches',
          'Pick an appropriate strategy for a given dataset',
        ],
        concepts: [
          {
            title: 'Why cleaning matters',
            paragraphs: [
              'Data cleaning is essential to ensure that the final analysis is accurate and reliable. It involves identifying and correcting inaccuracies and inconsistencies to improve data quality.',
              'Missing data is a common issue that can significantly impact the results if not addressed properly.',
            ],
          },
          {
            title: 'The five families of solutions',
            paragraphs: [
              '1. Deletion: listwise (drop the whole row) or pairwise (use only complete cases per analysis). Simple, but can lose information.',
              '2. Imputation: replace missing values with the mean, median, mode, or a more sophisticated estimate (regression, k-NN, multiple imputation).',
              '3. Algorithm-native handling: decision trees and random forests can handle missing values internally.',
              '4. LOCF / NOCB: for time series, carry the last (or next) observed value forward.',
              '5. Indicator variable: impute with a placeholder AND add a binary flag indicating the value was missing — useful when “missing” is itself informative.',
            ],
            codeSnippet: {
              language: 'python',
              code: `import pandas as pd
import numpy as np

df = pd.DataFrame({"age": [25, np.nan, 35, 40], "income": [50, 60, np.nan, 80]})

# Mean imputation
df["age"] = df["age"].fillna(df["age"].mean())

# Indicator + imputation
df["income_missing"] = df["income"].isna().astype(int)
df["income"] = df["income"].fillna(df["income"].median())

print(df)`,
            },
          },
        ],
        keyFormulas: [
          { latex: '\\bar{x}_{\\text{impute}} = \\frac{1}{n} \\sum_{i=1}^{n} x_i', caption: 'Mean imputation' },
          { latex: '\\tilde{x}_{\\text{impute}} = \\text{median}(x)', caption: 'Median imputation' },
        ],
        glossary: [
          { term: 'Listwise deletion', definition: 'Dropping any row that contains a missing value.' },
          { term: 'Imputation', definition: 'Replacing missing values with substituted estimates.' },
          { term: 'LOCF', definition: 'Last Observation Carried Forward — a time-series imputation method.' },
          { term: 'Indicator variable', definition: 'A binary variable that flags whether a value was missing.' },
        ],
        realWorldExample: {
          scenario: 'Hospital records with sporadic lab results',
          application: 'Some patients miss follow-up labs. Use median imputation for short gaps and KNN imputation when many features are missing simultaneously.',
          impact: 'Avoids biasing downstream risk models while keeping the dataset usable.',
        },
        playground: {
          type: 'missing-values',
          title: 'Try every imputation strategy',
          instructions: 'Start with a dataset that has three missing cells. Click each strategy button and watch the table update. Toggle the “Show variance” chart to see how each method affects the spread of the data.',
          expectedOutcome: 'See that mean imputation shrinks variance; indicator + median preserves it better.',
        },
        quiz: [
          {
            id: 'cl-q1',
            question: 'When is listwise deletion a poor choice?',
            options: [
              'When you have more data than you need.',
              'When missing values are widespread and dropping rows would lose most of the dataset.',
              'When the data is already perfect.',
              'Never — it is always safe.',
            ],
            answerIndex: 1,
            explanation: 'Listwise deletion can shrink your dataset drastically and introduce bias when missingness is non-random.',
          },
        ],
        practiceExercise: {
          task: 'Click the “Mean imputation” strategy. By how much does the variance of column A drop?',
          hint: 'The variance number appears under the chart.',
          expectedAnswer: 'It drops noticeably (mean imputation reduces variance).',
        },
        keyTakeaways: [
          'Deletion is simple but lossy; imputation preserves data at the cost of assumptions.',
          'Decision trees and random forests can handle missingness natively.',
          'An indicator variable lets the model learn from the fact that a value was missing.',
        ],
      },
      {
        id: 'data-transformation',
        number: 8,
        title: '8. Data Transformation: Normalization & Standardization',
        subtitle: 'See why features with different scales can break distance-based algorithms, and how scaling fixes it.',
        pathId: 'data-science',
        pathTitle: 'Data Science & Machine Learning',
        readingTime: '7 mins',
        difficulty: 'Beginner',
        objectives: [
          'Explain why scaling is important for distance-based algorithms',
          'Apply Min-Max normalization and Z-score standardization',
          'Choose between normalization and standardization for a given dataset',
        ],
        concepts: [
          {
            title: 'The scale problem',
            paragraphs: [
              'Data transformation converts raw data into a format that is easier to work with by addressing issues such as skewed distributions, varying scales, and different data types. Critical transformations are normalization and standardization, which adjust the scale of features to a common level.',
              'This matters when dealing with features that vary widely in scale — for example, “age in years” (0–100) vs. “income in dollars” (0–1,000,000) — which can distort the importance of features in distance-based algorithms like k-means or k-nearest neighbors.',
            ],
            analogy: {
              concept: 'A common ruler',
              metaphor: 'Imagine comparing grades across two school systems that score out of 100 and out of 5.',
              why: 'A grade of 85 in the first system is not the same as a grade of 4 in the second. Scaling maps both to a 0–1 range, letting models compare them fairly.',
            },
          },
          {
            title: 'Min-Max normalization',
            paragraphs: [
              'Rescales the feature to a fixed range, usually 0 to 1. The formula is shown on the right. Especially useful when the data does not follow a Gaussian distribution and when you need bounded values.',
            ],
            codeSnippet: {
              language: 'python',
              code: `x_min = x.min()
x_max = x.max()
x_scaled = (x - x_min) / (x_max - x_min)`,
            },
          },
          {
            title: 'Z-score standardization',
            paragraphs: [
              'Centers the data to have mean 0 and standard deviation 1. Does not bound values to a fixed range, so it preserves outlier magnitudes (in standard-deviation units). Preferred when the data follows a Gaussian distribution.',
            ],
            codeSnippet: {
              language: 'python',
              code: `mean = x.mean()
std  = x.std()
x_z = (x - mean) / std`,
            },
          },
          {
            title: 'Choosing between the two',
            paragraphs: [
              'Normalization is generally used when you do not assume any distribution for your data or when you need bounded values.',
              'Standardization is the better option if your data follows a Gaussian distribution, as it enhances the performance of many machine learning algorithms.',
            ],
          },
        ],
        keyFormulas: [
          { latex: 'x_{\\text{norm}} = \\dfrac{x - x_{\\min}}{x_{\\max} - x_{\\min}}', caption: 'Min-Max Normalization' },
          { latex: 'x_{\\text{std}} = \\dfrac{x - \\mu}{\\sigma}', caption: 'Z-score Standardization' },
        ],
        glossary: [
          { term: 'Normalization', definition: 'Rescaling features to a fixed range (typically 0 to 1).' },
          { term: 'Standardization', definition: 'Rescaling features to have mean 0 and standard deviation 1.' },
          { term: 'Outlier', definition: 'A value that is unusually far from the rest of the distribution.' },
          { term: 'Gaussian distribution', definition: 'The bell-shaped normal distribution.' },
        ],
        realWorldExample: {
          scenario: 'Credit-card limit evaluation',
          application: 'Combines annual salary ($50k–$5M) with debt ratio (0.0–1.0). Scaling prevents salary from dominating distance calculations in the classifier.',
          impact: 'Model correctly weighs debt ratio, leading to safer credit limits.',
        },
        playground: {
          type: 'scaling',
          title: 'Interactive scaling simulator',
          instructions: 'Start with a small dataset that includes an outlier. Toggle between Original, Min-Max Normalization, and Z-score Standardization. Drag the outlier value and see how each method responds.',
          expectedOutcome: 'See that normalization compresses the rest of the data, while standardization preserves relative distance.',
        },
        quiz: [
          {
            id: 'sc-q1',
            question: 'When is Z-score standardization preferred over min-max normalization?',
            options: [
              'When you need values strictly between 0 and 1.',
              'When the dataset contains extreme outliers you wish to preserve and the algorithm assumes a normal distribution.',
              'When the data is entirely categorical.',
              'When you want to remove all rows with missing values.',
            ],
            answerIndex: 1,
            explanation: 'Standardization preserves outlier magnitude in standard-deviation units, which is helpful for Gaussian-based algorithms.',
          },
        ],
        practiceExercise: {
          task: 'Switch the scaling mode to “Z-score Standardization.” What does the mean of the rescaled values become?',
          hint: 'Look at the mean line in the chart.',
          expectedAnswer: 'Exactly 0.',
        },
        keyTakeaways: [
          'Scale mismatch distorts distance-based algorithms — fix it before modeling.',
          'Min-Max bounds values to [0, 1] but compresses them when outliers are present.',
          'Z-score centers to mean 0, sd 1 — better for Gaussian-shaped data.',
        ],
      },
      {
        id: 'exploration-viz',
        number: 9,
        title: '9. Data Exploration & Visualization',
        subtitle: 'Use descriptive statistics and a few chart types to understand a new dataset before modeling it.',
        pathId: 'data-science',
        pathTitle: 'Data Science & Machine Learning',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Compute and interpret the three families of descriptive statistics',
          'Pick the right chart for the question you are asking',
          'Use visualization to spot outliers, skew, and trends early',
        ],
        concepts: [
          {
            title: 'Descriptive statistics',
            paragraphs: [
              'Descriptive statistics summarize a dataset’s properties through a few simple measures — the first step in any data analysis.',
              'Measures of central tendency: mean, median, mode.',
              'Measures of variability: range, interquartile range (IQR), variance, standard deviation.',
              'Shape of distribution: skewness (asymmetry) and kurtosis (heavy- vs light-tailed relative to a normal distribution).',
            ],
          },
          {
            title: 'Picking the right chart',
            paragraphs: [
              'Histograms: distribution of a single numeric variable.',
              'Scatter plots: relationship between two numeric variables.',
              'Line graphs: trends over time.',
              'Bar charts: compare quantities across categories.',
              'Box plots: spread and outliers.',
              'Heat maps: cross-variable comparison using color.',
              'Pie / area charts: parts-of-a-whole and cumulative trends.',
              'Interactive dashboards: combine multiple views that the user can manipulate.',
            ],
          },
        ],
        glossary: [
          { term: 'Histogram', definition: 'A bar chart of frequencies over numeric bins.' },
          { term: 'Skewness', definition: 'A measure of asymmetry of a distribution.' },
          { term: 'Kurtosis', definition: 'A measure of the tailedness of a distribution.' },
          { term: 'IQR', definition: 'Interquartile range — the difference between the 75th and 25th percentiles.' },
        ],
        keyFormulas: [
          { latex: '\\bar{x} = \\dfrac{1}{n} \\sum_{i=1}^{n} x_i', caption: 'Mean' },
          { latex: 's^2 = \\dfrac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2', caption: 'Sample variance' },
        ],
        realWorldExample: {
          scenario: 'Quality control in a factory',
          application: 'A box plot of bolt diameters per shift reveals one shift whose distribution has a much higher IQR — pointing to a miscalibrated machine.',
          impact: 'A 10-minute chart inspection prevents days of defective shipments.',
        },
        playground: {
          type: 'visualization',
          title: 'Pick a chart for the question',
          instructions: 'You have one small dataset. For each question below the chart, pick the visualization that answers it best. The simulator will tell you when you have it right.',
          expectedOutcome: 'Match chart type to the question being asked.',
        },
        quiz: [
          {
            id: 'viz-q1',
            question: 'Which chart is best for showing the relationship between two numeric variables?',
            options: ['Pie chart', 'Histogram', 'Scatter plot', 'Box plot'],
            answerIndex: 2,
            explanation: 'Scatter plots place two variables on the x and y axes to reveal their relationship.',
          },
        ],
        practiceExercise: {
          task: 'For the question “Is the age distribution skewed?”, which chart did the simulator mark as correct?',
          hint: 'It is the chart that shows the shape of a single numeric variable.',
          expectedAnswer: 'Histogram.',
        },
        keyTakeaways: [
          'Descriptive statistics give you a one-number summary; visualizations give you shape and structure.',
          'Different chart types answer different questions — pick deliberately.',
          'Exploration before modeling catches issues that would otherwise corrupt the model.',
        ],
      },
      {
        id: 'modeling',
        number: 10,
        title: '10. Data Modeling, Evaluation & Deployment',
        subtitle: 'Choose, train, and evaluate a model, then deploy and monitor it as the world changes around it.',
        pathId: 'data-science',
        pathTitle: 'Data Science & Machine Learning',
        readingTime: '8 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Pick a model type that matches the problem',
          'Split data into training and test sets and evaluate honestly',
          'Use cross-validation for robust evaluation',
          'Plan deployment and ongoing monitoring from day one',
        ],
        concepts: [
          {
            title: 'Selecting the right model',
            paragraphs: [
              'Choosing the appropriate model depends on the nature of the problem (regression vs. classification vs. clustering), data characteristics (size, quality, types), performance metrics, complexity vs. interpretability trade-offs, and computational resources.',
              'Common models include linear and logistic regression, decision trees, support vector machines, neural networks, and ensemble methods like random forests and gradient boosting.',
            ],
          },
          {
            title: 'Training, testing, and evaluation',
            paragraphs: [
              'Training learns from data by optimizing a model’s parameters. Testing uses an independent dataset to assess performance — the test set must not have been seen during training.',
              'Data is usually split 80:20 or 70:30. For classification: accuracy, precision, recall, F1, ROC, AUC. For regression: MAE, MSE, RMSE, R².',
            ],
          },
          {
            title: 'Cross-validation',
            paragraphs: [
              'k-Fold cross-validation partitions the data into k folds. The model is trained on k-1 folds and tested on the held-out fold, repeated until every fold has been the test set once.',
              'LOOCV (Leave-One-Out) is a special case where k equals the number of data points.',
            ],
          },
          {
            title: 'Deployment and maintenance',
            paragraphs: [
              'Deployment options: batch processing (nightly jobs), real-time APIs, web services via Flask/Django, cloud platforms (AWS, GCP, Azure), or edge devices for low latency.',
              'Ongoing monitoring: track performance metrics, watch for data drift (input distribution changes) and concept drift (the relationship between input and output changes), retrain periodically, and use A/B testing when comparing models.',
            ],
          },
        ],
        glossary: [
          { term: 'Training set', definition: 'The portion of data used to fit a model.' },
          { term: 'Test set', definition: 'Held-out data used to evaluate the final model.' },
          { term: 'Cross-validation', definition: 'A technique that rotates which fold serves as the test set to get a robust performance estimate.' },
          { term: 'Data drift', definition: 'A change in the distribution of input data over time.' },
          { term: 'Concept drift', definition: 'A change in the relationship between inputs and the target variable.' },
        ],
        keyFormulas: [
          { latex: '\\text{MSE} = \\dfrac{1}{n} \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2', caption: 'Mean Squared Error' },
          { latex: 'R^2 = 1 - \\dfrac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y})^2}', caption: 'R-squared' },
        ],
        realWorldExample: {
          scenario: 'A loan-default classifier at a bank',
          application: 'Train a gradient-boosted tree on 5 years of historical loans, evaluate with 5-fold CV, deploy as a real-time API, monitor monthly AUC, and retrain when AUC drops more than 3%.',
          impact: 'A 5% lift in AUC translates to tens of millions of dollars in avoided defaults.',
        },
        playground: {
          type: 'model-eval',
          title: 'Train / test split explorer',
          instructions: 'You have 100 labeled points. Drag the slider to choose the train/test split ratio and the model complexity. The simulator shows training accuracy, test accuracy, and the train-test gap (a proxy for overfitting).',
          expectedOutcome: 'See underfitting (low both), good fit (high both, small gap), and overfitting (high train, low test, large gap).',
        },
        quiz: [
          {
            id: 'md-q1',
            question: 'Why do we split data into training and test sets?',
            options: [
              'To double the data available for training.',
              'To evaluate how well the model generalizes to unseen data and prevent overfitting.',
              'To separate categorical from numerical columns.',
              'To remove missing values automatically.',
            ],
            answerIndex: 1,
            explanation: 'The test set is a proxy for the real world and tells us if the model has actually learned the underlying pattern.',
          },
          {
            id: 'md-q2',
            question: 'What is data drift?',
            options: [
              'When the model becomes more accurate over time.',
              'When the distribution of input data changes, making the model less accurate.',
              'When the test set is shuffled.',
              'When the model is retrained too often.',
            ],
            answerIndex: 1,
            explanation: 'Data drift describes a change in the input distribution that can degrade model performance over time.',
          },
        ],
        practiceExercise: {
          task: 'In the model-eval simulator, drag the complexity slider all the way up. Which quantity grows the most — train accuracy, test accuracy, or the train-test gap?',
          hint: 'Overfitting makes train high and test low.',
          expectedAnswer: 'The train-test gap (a sign of overfitting).',
        },
        keyTakeaways: [
          'Pick a model that matches the problem, the data, and the resources.',
          'Always evaluate on a held-out test set, and use cross-validation for robustness.',
          'Deployment is not the end — monitor for data and concept drift, and plan to retrain.',
        ],
      },
    ],
  },
  {
    id: 'data-science-2',
    title: 'Data Science II · Algorithms',
    description: 'Master the core supervised and unsupervised machine learning algorithms — from linear regression and gradient descent to PCA and anomaly detection — with interactive simulators at every step.',
    icon: 'Cpu',
    lessons: [
      {
        id: 'linear-regression',
        number: 11,
        title: '11. Linear Regression',
        subtitle: 'Model a continuous target as a weighted sum of features, fit the line by least squares, and read it off as a story about the data.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '9 mins',
        difficulty: 'Beginner',
        objectives: [
          'State the linear-regression model and its assumptions',
          'Solve for the best-fit slope and intercept with the OLS formulas',
          'Interpret coefficients, R², and residual plots',
        ],
        concepts: [
          {
            title: 'The model',
            paragraphs: [
              'Linear regression predicts a continuous target y from features x as y ≈ β₀ + β₁x. With multiple features, the same idea extends: y ≈ β₀ + β₁x₁ + β₂x₂ + … + βₚxₚ.',
              'Geometrically, the model is a hyperplane in feature space. With one feature, it is a line; with two, a flat plane. The "linear" refers to the parameters β, not the features — we can transform features first and still call the model linear.',
            ],
            analogy: {
              concept: 'Linear fit',
              metaphor: 'A taut clothesline pulled through a cloud of tent pegs in the ground.',
              why: 'Each data point pulls the line toward itself by a force proportional to its squared vertical distance. The line settles where the total pull is balanced.',
            },
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\npred = model.predict(X_test)\nprint(model.coef_, model.intercept_)',
            },
          },
          {
            title: 'The loss function: least squares',
            paragraphs: [
              'We pick the line that minimises the sum of squared residuals: SSE = Σ(yᵢ − ŷᵢ)². Squaring penalises large errors heavily and yields a closed-form solution (the normal equations).',
              'The closed-form solution is β = (XᵀX)⁻¹Xᵀy. In practice we never invert XᵀX — we use Cholesky, QR, or SVD for numerical stability.',
            ],
          },
          {
            title: 'Assumptions and how to read them',
            paragraphs: [
              'Linearity, independence, homoscedasticity (constant variance of errors), and normality of residuals are the four classical assumptions. Violations show up in residual plots: a curved pattern means missing non-linearity, a fan-shape means heteroscedasticity, and clustering means autocorrelation.',
              'The coefficient on x₁ is the change in y per one-unit change in x₁, holding all other features fixed. Magnitudes only become comparable after standardisation.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import numpy as np\n# Closed-form OLS via numpy\nbeta = np.linalg.lstsq(X, y, rcond=None)[0]\nyhat = X @ beta',
            },
          },
        ],
        keyFormulas: [
          { latex: 'y = \\beta_0 + \\beta_1 x + \\varepsilon', caption: 'Simple linear model' },
          { latex: '\\hat{\\beta} = (X^TX)^{-1} X^Ty', caption: 'OLS estimator' },
          { latex: 'MSE = \\frac{1}{n}\\sum (y_i - \\hat{y}_i)^2', caption: 'Mean squared error' },
        ],
        glossary: [
          { term: 'Residual', definition: 'The vertical distance between an observed y and its predicted value ŷ.' },
          { term: 'R²', definition: 'Fraction of variance in y explained by the model. Ranges from 0 (no better than mean) to 1 (perfect fit).' },
          { term: 'OLS', definition: 'Ordinary Least Squares — the estimator that minimises SSE in closed form.' },
        ],
        realWorldExample: {
          scenario: 'Predicting house prices from square footage',
          application: 'Fit y = β₀ + β₁·size on a 10k-home dataset. R² = 0.78. Each extra 100 ft² adds ~$15k to predicted price, holding everything else constant.',
          impact: 'Interpretable coefficients make this the go-to baseline for any continuous-target problem.',
        },
        playground: {
          type: 'linear-regression',
          title: 'Drag the line to fit the data',
          instructions: 'Adjust slope and intercept to minimise SSE. R² updates in real time. Try to get R² above 0.95 and SSE under 50 000.',
          expectedOutcome: 'See how SSE and R² react to a poor vs a good fit, and watch the line snap into the cloud.',
        },
        quiz: [
          {
            id: 'lr-q1',
            question: 'What does OLS minimise?',
            options: [
              'The sum of absolute residuals.',
              'The sum of squared residuals.',
              'The number of misclassifications.',
              'The variance of the features.',
            ],
            answerIndex: 1,
            explanation: 'OLS picks coefficients that minimise Σ(y − ŷ)². The closed-form solution comes from setting the gradient to zero.',
          },
          {
            id: 'lr-q2',
            question: 'A residual plot shows a clear U-shape. What does it mean?',
            options: [
              'The model is overfitting.',
              'There is heteroscedasticity.',
              'The relationship is non-linear and a quadratic term is missing.',
              'The data is perfectly predicted.',
            ],
            answerIndex: 2,
            explanation: 'A curved pattern in residuals means the linear model is missing curvature — try polynomial features or a non-linear model.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, push the slope to 0. How do SSE and R² change?',
          hint: 'A slope of 0 means y = constant — only the mean is being predicted.',
          expectedAnswer: 'SSE grows large and R² drops to 0; the model is no better than predicting the mean of y.',
        },
        keyTakeaways: [
          'Linear regression models a hyperplane through the data cloud.',
          'OLS minimises SSE and has a closed-form solution β = (XᵀX)⁻¹Xᵀy.',
          'Always check residual plots — they reveal violations of the linear assumption.',
        ],
      },
      {
        id: 'gradient-descent',
        number: 12,
        title: '12. Cost Functions & Gradient Descent',
        subtitle: 'See how a model learns: define a cost function, then take iterative steps downhill proportional to the gradient until you reach a minimum.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '10 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Explain what a cost function is and why we minimise it',
          'Derive the gradient-descent update rule',
          'Diagnose divergence, oscillation, and slow convergence from the learning rate',
        ],
        concepts: [
          {
            title: 'The cost landscape',
            paragraphs: [
              'A cost function J(θ) measures how wrong the model is. Linear regression uses mean squared error, logistic regression uses log-loss, and neural networks use cross-entropy. The aim of training is to find the θ that minimises J.',
              'Plotting J as a function of θ is the "loss landscape". The model is at the bottom of a valley; training is rolling a ball down into that valley.',
            ],
            analogy: {
              concept: 'Loss landscape',
              metaphor: 'Hiking in dense fog, feeling the slope under your boots, and stepping downhill.',
              why: 'You cannot see the valley, but the gradient tells you the local steepest direction. Step sizes that are too large make you overshoot; too small and you never arrive.',
            },
            codeSnippet: {
              language: 'python',
              code: 'def gradient_descent(X, y, lr=0.05, steps=100):\n    theta = np.zeros(X.shape[1])\n    for _ in range(steps):\n        grad = X.T @ (X @ theta - y) / len(y)\n        theta -= lr * grad\n    return theta',
            },
          },
          {
            title: 'The update rule',
            paragraphs: [
              'At each step, compute the gradient ∇J(θ), then move θ in the opposite direction by a small step η: θ ← θ − η · ∇J(θ).',
              'The learning rate η is the most important hyperparameter. Too small → glacial progress; too large → oscillation or divergence (J explodes to infinity).',
            ],
          },
          {
            title: 'Variants you will meet',
            paragraphs: [
              'Batch GD uses the full dataset per step — stable but slow. Stochastic GD (SGD) uses one example per step — fast but noisy. Mini-batch GD strikes a balance and is the workhorse of deep learning.',
              'Momentum, RMSProp, and Adam add memory of past gradients to dampen oscillation and accelerate through ravines.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'for xb, yb in dataloader:        # mini-batch\n    pred = model(xb)\n    loss = loss_fn(pred, yb)\n    loss.backward()                    # compute gradients\n    optimizer.step()                   # θ ← θ − η·∇J\n    optimizer.zero_grad()',
            },
          },
        ],
        keyFormulas: [
          { latex: '\\theta := \\theta - \\eta \\nabla J(\\theta)', caption: 'Vanilla GD update' },
          { latex: 'v := \\beta v + \\nabla J(\\theta); \\quad \\theta := \\theta - \\eta v', caption: 'Momentum update' },
        ],
        glossary: [
          { term: 'Learning rate η', definition: 'Step size for gradient descent. The single most important hyperparameter.' },
          { term: 'Stochastic gradient descent (SGD)', definition: 'A variant of GD that estimates the gradient from a single (or mini-batch) example per step.' },
          { term: 'Convergence', definition: 'The point at which further training does not meaningfully reduce the loss.' },
        ],
        realWorldExample: {
          scenario: 'Training a 1-billion-parameter LLM',
          application: 'Mini-batch SGD with Adam, η ≈ 6e-4, warmup over the first 2000 steps, then cosine decay. A single training run may consume 1000 GPU-days.',
          impact: 'Without gradient descent there is no modern AI — every neural network learns by some variant of this update.',
        },
        playground: {
          type: 'gradient-descent',
          title: 'Watch θ roll downhill',
          instructions: 'Adjust the learning rate and number of steps. The blue curve is J(θ) over time, the dots are iterates. Try η = 0.5 to see divergence, η = 0.05 for convergence, and η = 0.005 for slow learning.',
          expectedOutcome: 'See (1) smooth convergence, (2) oscillation around the minimum, and (3) divergence where J explodes.',
        },
        quiz: [
          {
            id: 'gd-q1',
            question: 'Your loss curve zig-zags up and down before slowly falling. What is the most likely cause?',
            options: [
              'The learning rate is too small.',
              'The learning rate is too large.',
              'The model has too few parameters.',
              'The data has no signal.',
            ],
            answerIndex: 1,
            explanation: 'Zig-zag (oscillation) is the signature of a too-large step size. Try lowering η by a factor of 3–10.',
          },
          {
            id: 'gd-q2',
            question: 'What is the advantage of mini-batch SGD over full-batch GD?',
            options: [
              'It always finds the global minimum.',
              'It converges in one step.',
              'It makes faster iterations and escapes shallow local minima via noise.',
              'It eliminates the need for a learning rate.',
            ],
            answerIndex: 2,
            explanation: 'Mini-batches give a noisy but cheap gradient estimate, which also acts as implicit regularisation.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set η = 0.4 and steps = 80. Describe what happens to the loss curve.',
          hint: 'Overshooting the minimum repeatedly can make the loss grow without bound.',
          expectedAnswer: 'The loss diverges — J explodes and θ shoots off to infinity. Lower η to recover convergence.',
        },
        keyTakeaways: [
          'Gradient descent iteratively moves parameters opposite to the gradient of the cost.',
          'The learning rate η controls step size — tune it first if training fails.',
          'Stochastic and mini-batch variants trade stability for speed and act as regularisers.',
        ],
      },
      {
        id: 'polynomial-regression',
        number: 13,
        title: '13. Polynomial & Regularized Regression',
        subtitle: 'Capture curvature with polynomial features, and tame overfitting with Ridge, LASSO, and Elastic Net.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '8 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Extend linear regression to polynomial features',
          'Explain the bias-variance trade-off visually',
          'Apply L2 (Ridge) and L1 (LASSO) regularisation',
        ],
        concepts: [
          {
            title: 'Polynomial features',
            paragraphs: [
              'A line cannot follow a parabola. The fix is simple: add x², x³, … as new features. The model is still linear in its parameters, but it can fit curved shapes in the data.',
              'Each new degree doubles the expressive power — and the risk of overfitting. A degree-8 polynomial will happily wiggle through every training point and fail on new data.',
            ],
            analogy: {
              concept: 'Polynomial features',
              metaphor: 'Giving a tailor more measuring tape.',
              why: 'A single measurement (size) cannot describe a person’s shape. Add waist, inseam, shoulder width, and the tailor can fit almost anyone.',
            },
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.preprocessing import PolynomialFeatures\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.linear_model import LinearRegression\n\nmodel = make_pipeline(PolynomialFeatures(degree=3), LinearRegression())\nmodel.fit(X_train, y_train)',
            },
          },
          {
            title: 'Bias-variance trade-off',
            paragraphs: [
              'Bias is error from oversimplification; variance is error from over-sensitivity to the training set. Total error = bias² + variance + irreducible noise.',
              'A degree-1 model has high bias and low variance. A degree-12 model has near-zero bias and high variance. The sweet spot is the simplest model whose R² is near the maximum.',
            ],
          },
          {
            title: 'Regularisation: Ridge, LASSO, Elastic Net',
            paragraphs: [
              'Regularisation adds a penalty on the size of the coefficients. Ridge (L2) penalises β², shrinking all weights toward zero. LASSO (L1) penalises |β|, which can drive weights exactly to zero — performing feature selection.',
              'Elastic Net mixes both. The strength of the penalty is controlled by λ (or α in scikit-learn).',
            ],
            keyFormulas: [
              { latex: 'J_{Ridge}(\\beta) = MSE + \\lambda \\sum \\beta_j^2', caption: 'Ridge (L2) cost' },
              { latex: 'J_{LASSO}(\\beta) = MSE + \\lambda \\sum |\\beta_j|', caption: 'LASSO (L1) cost' },
            ],
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.linear_model import Ridge, Lasso\nridge = Ridge(alpha=1.0).fit(X_train, y_train)\nlasso = Lasso(alpha=0.1).fit(X_train, y_train)',
            },
          },
        ],
        keyFormulas: [
          { latex: 'y = \\beta_0 + \\beta_1 x + \\beta_2 x^2 + \\dots + \\beta_d x^d', caption: 'Polynomial model of degree d' },
          { latex: 'J_{L2} = \\frac{1}{n}\\sum (y - \\hat y)^2 + \\lambda \\sum \\beta_j^2', caption: 'L2-penalised cost' },
        ],
        glossary: [
          { term: 'Bias', definition: 'Error from the model being too simple to capture the true pattern.' },
          { term: 'Variance', definition: 'Error from the model being too sensitive to the specific training set.' },
          { term: 'Regularisation', definition: 'Adding a penalty to the cost to discourage large coefficients and prevent overfitting.' },
        ],
        realWorldExample: {
          scenario: 'Forecasting electricity demand from temperature',
          application: 'Add temperature² to capture the U-shaped demand curve. Cross-validate λ for Ridge. R² jumps from 0.71 to 0.93.',
          impact: 'Polynomial features + regularisation are the cheap path to non-linearity — no need to switch to a neural network.',
        },
        playground: {
          type: 'polynomial-regression',
          title: 'Trade flexibility against overfitting',
          instructions: 'Move the degree slider. The curve fits the data more tightly as degree grows, but the R² on truly new data will fall past a sweet spot. Then increase λ to see Ridge regularise the curve back toward a smooth parabola.',
          expectedOutcome: 'See overfitting appear at high degree, and watch Ridge shrink the wiggles back.',
        },
        quiz: [
          {
            id: 'pr-q1',
            question: 'You fit a degree-10 polynomial and training R² = 0.99 but test R² = 0.42. What happened?',
            options: [
              'The data has no signal.',
              'The model is overfitting — try a smaller degree or add regularisation.',
              'The features are not scaled.',
              'The model is underfitting.',
            ],
            answerIndex: 1,
            explanation: 'A 38-point gap between train and test R² is the classic overfitting signature.',
          },
          {
            id: 'pr-q2',
            question: 'When is LASSO preferred over Ridge?',
            options: [
              'When you want all features to contribute.',
              'When you suspect only a few features are useful and want automatic feature selection.',
              'When the features are already sparse.',
              'When the learning rate is small.',
            ],
            answerIndex: 1,
            explanation: 'L1 penalty drives small coefficients to exactly zero, performing implicit feature selection.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set degree = 8 and λ = 0. What does the curve look like, and what does that tell you?',
          hint: 'Wiggles through every training point usually mean trouble on new data.',
          expectedAnswer: 'The curve is wild and wiggly, fitting every point — a classic overfit. Test R² will be much lower than train R².',
        },
        keyTakeaways: [
          'Polynomial features add curvature without leaving the linear-model family.',
          'Bias-variance trade-off: simpler models underfit, complex ones overfit.',
          'L2 (Ridge) shrinks weights; L1 (LASSO) zeroes them out — choose by whether you need feature selection.',
        ],
      },
      {
        id: 'logistic-regression',
        number: 14,
        title: '14. Logistic Regression',
        subtitle: 'Use the logistic function to model binary outcomes and turn a linear model into a probability classifier.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '8 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Derive the logistic regression model from the linear model + sigmoid',
          'Fit it by maximising log-likelihood (minimising log-loss)',
          'Choose a decision threshold and interpret predicted probabilities',
        ],
        concepts: [
          {
            title: 'From regression to classification',
            paragraphs: [
              'A linear regression outputs a real number; a probability must lie in [0, 1]. The fix is the sigmoid σ(z) = 1 / (1 + e⁻ᶻ), which squashes any real number into (0, 1). Logistic regression applies σ to a linear score: p = σ(w·x + b).',
              'The output p is interpreted as P(y = 1 | x). A threshold (default 0.5) converts probabilities into class labels.',
            ],
            analogy: {
              concept: 'Logistic function',
              metaphor: 'A dimmer switch for a light bulb.',
              why: 'The bulb is fully on or fully off (binary), but the switch smoothly ramps current up to 100%. σ turns a continuous "score" into a smooth probability.',
            },
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.linear_model import LogisticRegression\nclf = LogisticRegression(C=1.0).fit(X_train, y_train)\nproba = clf.predict_proba(X_test)[:, 1]\nlabel = (proba >= 0.5).astype(int)',
            },
          },
          {
            title: 'The cost: log-loss (cross-entropy)',
            paragraphs: [
              'Squared error does not work here because σ is non-linear. Instead we maximise the log-likelihood, equivalently minimise log-loss: L = −[y log p + (1−y) log(1−p)].',
              'Log-loss heavily penalises confident wrong predictions — predicting p = 0.99 when the true label is 0 is far worse than predicting p = 0.6.',
            ],
            keyFormulas: [
              { latex: '\\sigma(z) = \\frac{1}{1 + e^{-z}}', caption: 'Sigmoid (logistic) function' },
              { latex: 'L = -[y\\log p + (1-y)\\log(1-p)]', caption: 'Log-loss for one example' },
            ],
          },
          {
            title: 'The decision threshold',
            paragraphs: [
              'Logistic regression outputs a probability. Picking the class requires a threshold, and the threshold controls the trade-off between false positives and false negatives.',
              'In a fraud model, predicting 0.1 for a fraud case is more expensive than predicting 0.9 for a non-fraud — so the threshold is tuned for the business cost, not defaulted at 0.5.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.metrics import precision_recall_curve\np, r, t = precision_recall_curve(y_test, proba)\n# Pick threshold that maximises F1, or matches business cost',
            },
          },
        ],
        keyFormulas: [
          { latex: 'p(y=1|x) = \\sigma(w^Tx + b) = \\frac{1}{1 + e^{-(w^Tx + b)}}', caption: 'Logistic regression' },
          { latex: 'J(w) = -\\frac{1}{n}\\sum \\big[ y\\log p + (1-y)\\log(1-p) \\big]', caption: 'Log-loss' },
        ],
        glossary: [
          { term: 'Sigmoid', definition: 'The logistic function σ(z) = 1/(1+e⁻ᶻ) that maps any real number to (0, 1).' },
          { term: 'Log-loss', definition: 'Cross-entropy between predicted probabilities and true labels.' },
          { term: 'Decision threshold', definition: 'The probability above which a sample is classified as positive.' },
        ],
        realWorldExample: {
          scenario: 'Email spam classifier',
          application: 'Train logistic regression on bag-of-words features. AUC-ROC = 0.97. Threshold lowered to 0.3 to catch more spam at the cost of a few false flags.',
          impact: 'Despite the name "regression", logistic regression is a classifier — and the most-used baseline in industry for binary outcomes.',
        },
        playground: {
          type: 'logistic-regression',
          title: 'Shape a probability curve',
          instructions: 'Drag the weight and bias sliders to fit the sigmoid to the data points. Lower the threshold to be more aggressive about predicting class 1.',
          expectedOutcome: 'See the S-curve rotate and shift, and watch accuracy and log-loss update in real time.',
        },
        quiz: [
          {
            id: 'lgr-q1',
            question: 'Why is squared error a poor cost function for logistic regression?',
            options: [
              'It is computationally too expensive.',
              'It is non-convex when combined with the sigmoid, so gradient descent gets stuck.',
              'It cannot be implemented in code.',
              'It always gives 0 loss.',
            ],
            answerIndex: 1,
            explanation: 'Squaring the error of a sigmoid output creates a non-convex surface with many local minima. Log-loss is convex in w.',
          },
          {
            id: 'lgr-q2',
            question: 'Your model predicts p = 0.9 for an example with true label 0. What is the log-loss contribution?',
            options: ['0.1', '0.9', '−log(0.1) ≈ 2.30', '0'],
            answerIndex: 2,
            explanation: 'A confident wrong prediction costs about 2.3 nats — much more than an uncertain one.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set w = 5, b = 0, threshold = 0.3. What does the curve look like and what happens to the class-1 region?',
          hint: 'A steep slope means the model switches predictions over a narrow band of x.',
          expectedAnswer: 'The curve is almost a step function near x = 0, and lowering the threshold widens the predicted class-1 region to include points with x slightly below 0.',
        },
        keyTakeaways: [
          'Logistic regression = linear score + sigmoid + log-loss.',
          'The output is a probability; a threshold turns it into a label.',
          'Log-loss heavily penalises confident wrong predictions.',
        ],
      },
      {
        id: 'confusion-matrix',
        number: 15,
        title: '15. Classification Metrics: Precision, Recall, F1, ROC',
        subtitle: 'Accuracy is misleading on imbalanced data. Learn the metrics that actually tell you whether your classifier is good.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '9 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Read and populate a confusion matrix',
          'Define precision, recall, F1, and specificity',
          'Plot and interpret an ROC curve and the AUC',
        ],
        concepts: [
          {
            title: 'The confusion matrix',
            paragraphs: [
              'A confusion matrix counts four outcomes: TP (correctly predicted positive), FP (falsely predicted positive), FN (falsely predicted negative), TN (correctly predicted negative). Every classification metric is built from these four numbers.',
              'Read the matrix by row = actual, column = predicted. The diagonal is correct; the off-diagonal is error.',
            ],
            analogy: {
              concept: 'Confusion matrix',
              metaphor: 'A receipt from a quality-control inspector.',
              why: 'It tells you not just how many widgets passed, but which kind of failure happened — and that distinction matters when failures cost different amounts.',
            },
          },
          {
            title: 'Precision, recall, F1',
            paragraphs: [
              'Precision = TP / (TP + FP): "of everything I labelled positive, how many really are?" Use when false positives are expensive (spam filters).',
              'Recall = TP / (TP + FN): "of everything that really is positive, how many did I catch?" Use when false negatives are expensive (cancer screening).',
              'F1 = 2 · precision · recall / (precision + recall) is the harmonic mean — a single number that punishes extreme imbalance between precision and recall.',
            ],
            keyFormulas: [
              { latex: 'P = \\frac{TP}{TP+FP}', caption: 'Precision' },
              { latex: 'R = \\frac{TP}{TP+FN}', caption: 'Recall (sensitivity)' },
              { latex: 'F_1 = 2\\frac{PR}{P+R}', caption: 'F1 score' },
            ],
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.metrics import classification_report\nprint(classification_report(y_test, y_pred, target_names=["neg", "pos"]))',
            },
          },
          {
            title: 'ROC curve and AUC',
            paragraphs: [
              'The ROC curve plots True Positive Rate (recall) against False Positive Rate at every possible threshold. A random classifier traces the diagonal; a perfect one jumps to (0, 1) and stays there.',
              'AUC is the area under that curve — the probability that the model ranks a random positive above a random negative. AUC = 0.5 is random; AUC = 1.0 is perfect.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.metrics import roc_curve, roc_auc_score\nfpr, tpr, _ = roc_curve(y_test, proba)\nprint("AUC =", roc_auc_score(y_test, proba))',
            },
          },
        ],
        keyFormulas: [
          { latex: 'P = \\frac{TP}{TP+FP},\\quad R = \\frac{TP}{TP+FN}', caption: 'Precision and recall' },
          { latex: 'AUC = P(\\text{score}(+) > \\text{score}(-))', caption: 'Area under ROC' },
        ],
        glossary: [
          { term: 'False positive', definition: 'A negative example wrongly predicted as positive (Type I error).' },
          { term: 'False negative', definition: 'A positive example wrongly predicted as negative (Type II error).' },
          { term: 'AUC', definition: 'Area under the ROC curve — a threshold-free summary of ranking quality.' },
        ],
        realWorldExample: {
          scenario: 'Cancer screening on 100 000 patients (1% prevalence)',
          application: 'A 99%-accurate model can still be useless if it labels everyone negative. Use precision/recall and AUC to ensure the model catches the 1 000 true cases.',
          impact: 'Picking the right metric often matters more than picking the right model.',
        },
        playground: {
          type: 'confusion-matrix',
          title: 'Tune TP and FP, watch the metrics',
          instructions: 'Adjust the sliders to set the population and the model’s predictions. Watch precision, recall, F1, and accuracy update, and trace the ROC curve as the threshold sweeps from 0 to 1.',
          expectedOutcome: 'See how high accuracy can hide a bad classifier on imbalanced data, and how F1 reacts to extreme thresholds.',
        },
        quiz: [
          {
            id: 'cm-q1',
            question: 'A classifier has 99% accuracy but recall of 0.05. The dataset has 1% positives. What is happening?',
            options: [
              'The model is excellent.',
              'The model is predicting almost everything as negative — accuracy is misleading on imbalanced data.',
              'The model has high precision but the data is balanced.',
              'The model is overfitting.',
            ],
            answerIndex: 1,
            explanation: 'Always look at precision/recall/F1 on the minority class when classes are imbalanced.',
          },
          {
            id: 'cm-q2',
            question: 'AUC = 0.5 means what?',
            options: [
              'Perfect classifier.',
              'The model is no better than random guessing.',
              'The model is overfitting.',
              'The model has high variance.',
            ],
            answerIndex: 1,
            explanation: 'AUC = 0.5 corresponds to the diagonal ROC — a coin flip.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set positives = 100, negatives = 10 000, and try to find a TP/FP combo that gives F1 > 0.8. What does that tell you about class imbalance?',
          hint: 'The minority class is rare, so high precision requires high TP, and high recall is impossible without many TPs.',
          expectedAnswer: 'Even a model that catches 90% of positives (TP = 90) only achieves F1 around 0.18 if FP is also high. The lesson: always evaluate on the right metric for the imbalance.',
        },
        keyTakeaways: [
          'A confusion matrix is the building block of every classification metric.',
          'Precision matters when false positives are expensive; recall when false negatives are.',
          'AUC summarises ranking quality across all thresholds — preferred for imbalanced data.',
        ],
      },
      {
        id: 'knn',
        number: 16,
        title: '16. k-Nearest Neighbors',
        subtitle: 'Predict by analogy: find the k closest training points and let them vote. The simplest non-parametric method — and still powerful.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '7 mins',
        difficulty: 'Beginner',
        objectives: [
          'Describe the k-NN algorithm and its lazy-learning nature',
          'Choose k and explain the bias-variance trade-off',
          'Apply distance weighting and understand the curse of dimensionality',
        ],
        concepts: [
          {
            title: 'The algorithm',
            paragraphs: [
              'k-NN does not learn a model up-front. At prediction time, it computes the distance from the query to every training point, picks the k closest, and returns the majority label (classification) or the average value (regression).',
              'k = 1 picks the closest point — high variance. Large k averages out noise but may cross class boundaries — high bias. Cross-validate to pick k.',
            ],
            analogy: {
              concept: 'k-NN prediction',
              metaphor: 'Asking your k closest neighbours what restaurant to pick.',
              why: 'You trust the people who live near you to know your local options. The "k" controls how broad that trust extends — only next door (k=1) or the whole street (large k).',
            },
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.neighbors import KNeighborsClassifier\nknn = KNeighborsClassifier(n_neighbors=5, weights="distance")\nknn.fit(X_train, y_train)\nknn.predict(X_test)',
            },
          },
          {
            title: 'Distance and weighting',
            paragraphs: [
              'Euclidean distance is the default, but Manhattan, Minkowski, and cosine are common. Always scale features first — a feature in dollars will dominate one in percents.',
              'Distance weighting (1/d) lets closer neighbours count more than far ones, often improving accuracy without changing k.',
            ],
          },
          {
            title: 'The curse of dimensionality',
            paragraphs: [
              'In high dimensions, "nearest" becomes meaningless — every point is roughly equidistant to every other. k-NN accuracy collapses past ~20 features without dimensionality reduction.',
              'Mitigations: PCA, feature selection, or switching to tree-based methods that handle irrelevant features gracefully.',
            ],
          },
        ],
        glossary: [
          { term: 'Lazy learner', definition: 'A model that defers all work to prediction time; no parameters are fit during training.' },
          { term: 'Curse of dimensionality', definition: 'Distance metrics lose contrast as the number of features grows, hurting k-NN badly.' },
        ],
        realWorldExample: {
          scenario: 'Recommending products on an e-commerce site',
          application: 'For each user, find the 50 most similar users (cosine similarity on purchase history) and recommend the items they bought that this user did not.',
          impact: 'k-NN with cosine similarity is the workhorse of small-scale recommender systems.',
        },
        playground: {
          type: 'knn',
          title: 'Click a point to query',
          instructions: 'Click any point in the chart to make it the query (✦). The k closest points highlight. Toggle distance-weighted voting to see neighbours influence the prediction by proximity.',
          expectedOutcome: 'See how the predicted class changes as k grows and as you cross class boundaries.',
        },
        quiz: [
          {
            id: 'knn-q1',
            question: 'Why must you scale features before using k-NN?',
            options: [
              'k-NN only works on small numbers.',
              'Distance is dominated by features with the largest scale.',
              'Scaling reduces the number of features.',
              'Scaling is required by the algorithm.',
            ],
            answerIndex: 1,
            explanation: 'A salary in dollars dwarfs a percentage, so "closest" will mean "closest in salary" no matter what the other features say.',
          },
          {
            id: 'knn-q2',
            question: 'k-NN accuracy collapses in very high dimensions because:',
            options: [
              'The training set becomes too small.',
              'Distances concentrate — every point is almost equally far from every other.',
              'k-NN cannot compute distances in high dimensions.',
              'k-NN does not work with binary features.',
            ],
            answerIndex: 1,
            explanation: 'In high dimensions, the ratio of nearest to farthest distance converges to 1, so "nearest" loses meaning.',
          },
        ],
        practiceExercise: {
          task: 'Click a point that sits between the two classes. Try k = 1, 3, 5, 7. How does the predicted class change?',
          hint: 'Small k is sensitive to the closest point; large k averages across the boundary.',
          expectedAnswer: 'With k = 1 the prediction is the label of whichever single point is closest, which can flip with the slightest move. Larger k produces smoother, more robust decisions.',
        },
        keyTakeaways: [
          'k-NN predicts by majority vote of the k closest training points.',
          'Tune k with cross-validation; large k = high bias, small k = high variance.',
          'Scale features and watch for the curse of dimensionality above ~20 features.',
        ],
      },
      {
        id: 'decision-tree',
        number: 17,
        title: '17. Decision Trees',
        subtitle: 'A hierarchy of if/else questions that splits the data recursively. Interpretable, fast, and the building block of the best off-the-shelf models.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '8 mins',
        difficulty: 'Beginner',
        objectives: [
          'Explain how a decision tree recursively partitions the feature space',
          'Use Gini and entropy to choose the best split',
          'Prune trees to control overfitting',
        ],
        concepts: [
          {
            title: 'Recursive partitioning',
            paragraphs: [
              'A decision tree asks a sequence of yes/no questions (e.g., "is x < 3.2?"). At each node it picks the question that best separates the classes, then recurses on each branch.',
              'The result is a piecewise-constant approximation of the decision boundary — a staircase in 1D, a collection of rectangles in 2D, hyper-rectangles in higher dimensions.',
            ],
            analogy: {
              concept: 'Decision tree',
              metaphor: 'A 20-questions game against the data.',
              why: 'Each question halves the remaining possibilities. A good question — one that splits the classes — is worth more than a precise numeric threshold.',
            },
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.tree import DecisionTreeClassifier\ntree = DecisionTreeClassifier(max_depth=5, min_samples_leaf=10)\ntree.fit(X_train, y_train)',
            },
          },
          {
            title: 'Gini impurity and information gain',
            paragraphs: [
              'Gini impurity = 1 − Σpᵢ². A pure node has Gini = 0; a 50/50 split has Gini = 0.5. Entropy = −Σpᵢ log pᵢ behaves similarly.',
              'A good split is one that maximises the reduction in impurity (information gain) across the children.',
            ],
            keyFormulas: [
              { latex: 'Gini = 1 - \\sum p_i^2', caption: 'Gini impurity' },
              { latex: 'H = -\\sum p_i \\log_2 p_i', caption: 'Entropy' },
            ],
          },
          {
            title: 'Pruning and overfitting',
            paragraphs: [
              'An unrestricted tree will create a leaf for every training point and overfit. Two ways to control size: pre-prune (max_depth, min_samples_leaf) or post-prune (collapse leaves that do not improve validation accuracy).',
              'Pre-pruning is faster and the default in scikit-learn. Post-pruning often yields smaller trees with the same accuracy.',
            ],
          },
        ],
        glossary: [
          { term: 'Gini impurity', definition: 'A measure of class mixing at a node. 0 = pure, 0.5 = max mixed (binary).' },
          { term: 'Information gain', definition: 'The reduction in impurity achieved by a split.' },
          { term: 'Pruning', definition: 'Removing branches that do not improve validation performance.' },
        ],
        realWorldExample: {
          scenario: 'Loan approval at a bank',
          application: 'A 4-level tree with 8 leaves: "income > 50k?" → "debt-to-income < 30%?" → "has mortgage?" — each leaf is an approve / review / reject decision.',
          impact: 'Trees are the only models whose decisions a loan officer can read out loud and defend to a regulator.',
        },
        playground: {
          type: 'decision-tree',
          title: 'Watch the splits appear',
          instructions: 'Increase max_depth. The tree alternates between x-splits and y-splits, partitioning the plane into rectangles. With too much depth, the rectangles become small and overfit.',
          expectedOutcome: 'See orthogonal splits carved out of the feature space, and watch the leaf count explode with depth.',
        },
        quiz: [
          {
            id: 'dt-q1',
            question: 'A node is pure (all one class). What is its Gini impurity?',
            options: ['1', '0.5', '0', '−1'],
            answerIndex: 2,
            explanation: 'Gini = 1 − 1² = 0 for a pure node.',
          },
          {
            id: 'dt-q2',
            question: 'Why limit tree depth?',
            options: [
              'Deeper trees cannot be drawn.',
              'Deeper trees overfit the training set — they create leaves with one or two examples.',
              'Deeper trees are slower at training only.',
              'There is no reason — let it grow.',
            ],
            answerIndex: 1,
            explanation: 'Without limits a tree can memorise the training set. Limiting depth and minimum leaf size is essential.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set max_depth to 6. Look at the resulting split count. What does the chart look like, and what is the risk?',
          hint: 'Many small leaves often mean memorising training points.',
          expectedAnswer: 'The plane is split into dozens of tiny rectangles, each containing one or two points. The risk is overfitting — the tree will fail on new points that fall in the wrong rectangle.',
        },
        keyTakeaways: [
          'Decision trees partition the feature space with axis-aligned splits.',
          'Gini and entropy measure node purity; the best split maximises the gain.',
          'Limit depth or leaf size to prevent overfitting.',
        ],
      },
      {
        id: 'random-forest',
        number: 18,
        title: '18. Ensemble Methods: Random Forest & Boosting',
        subtitle: 'One model is brittle; many models in concert are robust. Bagging, boosting, and stacking turn weak learners into strong predictors.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '10 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Explain why averaging many models reduces variance',
          'Distinguish bagging (Random Forest) from boosting (AdaBoost, Gradient Boosting)',
          'Read feature importance and out-of-bag error',
        ],
        concepts: [
          {
            title: 'The wisdom of crowds',
            paragraphs: [
              'If you have many independent, moderately accurate models, averaging their predictions reduces error — variance cancels out while bias stays put. This is the core idea behind ensembles.',
              'Independence is the catch. To make trees independent, we randomise their training data (bootstrap sampling) and the features they consider at each split.',
            ],
            analogy: {
              concept: 'Bagging',
              metaphor: 'Asking 100 doctors for a second opinion and taking the majority vote.',
              why: 'A single doctor may be biased; the crowd is robust. Randomising which patients each doctor sees decorrelates their mistakes.',
            },
          },
          {
            title: 'Random Forest',
            paragraphs: [
              'A Random Forest grows many decision trees on bootstrap samples of the training data. At each split, only a random subset of features is considered — typically √p for classification, p/3 for regression.',
              'Predictions are averaged (regression) or voted (classification). Out-of-bag (OOB) error uses the ~37% of samples not in each bootstrap to estimate test accuracy for free.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.ensemble import RandomForestClassifier\nrf = RandomForestClassifier(n_estimators=200, max_features="sqrt", oob_score=True)\nrf.fit(X_train, y_train)\nprint(rf.oob_score_)',
            },
          },
          {
            title: 'Boosting: AdaBoost and Gradient Boosting',
            paragraphs: [
              'Boosting trains models sequentially, each one fitting the residuals (or misclassified examples) of the previous. The final prediction is a weighted sum.',
              'AdaBoost reweights examples — misclassified ones get higher weight in the next round. Gradient Boosting fits the next tree to the negative gradient of the loss. XGBoost, LightGBM, and CatBoost are fast, regularised implementations of gradient boosting that dominate tabular ML competitions.',
            ],
            keyFormulas: [
              { latex: 'F_M(x) = \\sum_{m=1}^{M} \\gamma_m h_m(x)', caption: 'Additive ensemble model' },
              { latex: 'h_m = \\arg\\min \\sum L(y_i, F_{m-1}(x_i) + h(x_i))', caption: 'Gradient-boosting step' },
            ],
          },
        ],
        glossary: [
          { term: 'Bootstrap sample', definition: 'A sample drawn with replacement of the same size as the original dataset.' },
          { term: 'OOB error', definition: 'Out-of-bag error — validation accuracy computed on the samples not in each tree’s bootstrap.' },
          { term: 'Boosting', definition: 'Sequentially training weak learners to correct the errors of the previous ensemble.' },
        ],
        realWorldExample: {
          scenario: 'Kaggle Titanic competition',
          application: 'A gradient-boosted trees model with 2000 estimators, learning_rate = 0.05, max_depth = 4 reaches top 5% on the leaderboard — without any deep learning.',
          impact: 'For tabular data, gradient boosting is the default winning recipe. Neural networks rarely beat it.',
        },
        playground: {
          type: 'random-forest',
          title: 'More trees, lower variance',
          instructions: 'Adjust the number of trees and the noise level. Each tree trains on a different bootstrap sample. Watch the per-tree accuracy distribution and the gap to a single tree.',
          expectedOutcome: 'See the average accuracy rise and the variance shrink as more trees are added, especially with noisier data.',
        },
        quiz: [
          {
            id: 'rf-q1',
            question: 'What problem does bagging solve?',
            options: ['Bias', 'Variance', 'Missing data', 'Class imbalance'],
            answerIndex: 1,
            explanation: 'Averaging many high-variance, low-bias models (e.g. deep trees) reduces variance without raising bias.',
          },
          {
            id: 'rf-q2',
            question: 'In boosting, what does each new model fit?',
            options: [
              'A bootstrap sample.',
              'A random subset of features.',
              'The residuals (or negative gradient) of the current ensemble.',
              'The original labels unchanged.',
            ],
            answerIndex: 2,
            explanation: 'Each new learner targets the mistakes of the current ensemble — boosting reduces bias.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, push noise to 0.4 and trees to 50. Compare the average per-tree accuracy with a single tree (the right-side stat). What does the gap tell you?',
          hint: 'A positive gap means the ensemble is doing the heavy lifting.',
          expectedAnswer: 'The average tree accuracy is well above a single tree’s — the ensemble cancels out per-tree noise and recovers the underlying signal.',
        },
        keyTakeaways: [
          'Ensembles combine many weak models to reduce variance (bagging) or bias (boosting).',
          'Random Forest = bagged trees with random feature subsets.',
          'Gradient boosting dominates tabular ML — start with XGBoost, LightGBM, or CatBoost.',
        ],
      },
      {
        id: 'svm',
        number: 19,
        title: '19. Support Vector Machines',
        subtitle: 'Find the widest possible "street" between classes. SVMs turn geometry into a powerful linear (and non-linear) classifier.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '8 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Explain the maximum-margin hyperplane and support vectors',
          'Use the kernel trick to handle non-linear data',
          'Tune C (regularisation) and γ (kernel width)',
        ],
        concepts: [
          {
            title: 'Maximum-margin classifier',
            paragraphs: [
              'Many hyperplanes can separate two classes. SVM picks the one that maximises the margin — the perpendicular distance from the hyperplane to the nearest training point. The points that lie on the margin are the support vectors; the others can be removed without changing the model.',
              'The intuition: a wider "street" between classes is more robust to noise and to new points.',
            ],
            analogy: {
              concept: 'Maximum margin',
              metaphor: 'Building a road between two warring kingdoms as wide as possible.',
              why: 'A wider road leaves more room for the kingdoms to expand without trespassing. SVMs pick the widest "no man’s land" between classes.',
            },
          },
          {
            title: 'The kernel trick',
            paragraphs: [
              'If the data is not linearly separable, lift it into a higher-dimensional space where it is. The kernel trick computes inner products in that space without ever materialising the coordinates — only the kernel function K(x, x′) is needed.',
              'Common kernels: linear, polynomial, RBF (Gaussian). RBF is the default for non-linear problems; it implicitly maps to infinite dimensions.',
            ],
            keyFormulas: [
              { latex: 'K(x, x\\prime) = e^{-\\gamma \\|x - x\\prime\\|^2}', caption: 'RBF (Gaussian) kernel' },
              { latex: '\\min \\frac{1}{2}\\|w\\|^2 + C \\sum \\xi_i', caption: 'Soft-margin objective' },
            ],
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.svm import SVC\nsvm = SVC(kernel="rbf", C=1.0, gamma="scale").fit(X_train, y_train)',
            },
          },
          {
            title: 'Regularisation: the C parameter',
            paragraphs: [
              'C controls the trade-off between margin width and training misclassifications. Large C → fit the training set tightly (low bias, high variance). Small C → wider margin, more slack, smoother decision boundary.',
              'γ controls the RBF kernel width. Small γ → broad neighbourhoods (smooth boundary); large γ → local neighbourhoods (wiggly boundary).',
            ],
          },
        ],
        glossary: [
          { term: 'Support vector', definition: 'A training point that lies on the margin — removing it changes the decision boundary.' },
          { term: 'Kernel trick', definition: 'Computing inner products in a high-dimensional space via a kernel function, without explicitly lifting the data.' },
          { term: 'C', definition: 'Regularisation parameter — inverse of regularisation strength in scikit-learn SVMs.' },
        ],
        realWorldExample: {
          scenario: 'Handwritten digit recognition (MNIST)',
          application: 'A linear SVM on pixel intensities reaches ~92% accuracy; an RBF-kernel SVM reaches ~98%. The kernel makes the decision boundary curved in pixel space.',
          impact: 'Before deep learning, SVMs were the state of the art for image and text classification.',
        },
        playground: {
          type: 'svm',
          title: 'Drag the hyperplane',
          instructions: 'Rotate the hyperplane with the w₁, w₂ sliders and shift it with b. The dashed lines are the margin. Try to maximise the margin while keeping all points correctly classified.',
          expectedOutcome: 'See the margin widen and shrink as the hyperplane rotates — the maximum-margin choice has equal margin on both sides.',
        },
        quiz: [
          {
            id: 'svm-q1',
            question: 'Which points determine the SVM decision boundary?',
            options: ['All training points', 'Only the support vectors', 'Points far from the boundary', 'Random samples'],
            answerIndex: 1,
            explanation: 'Only points on the margin matter; others can be removed without changing the boundary.',
          },
          {
            id: 'svm-q2',
            question: 'The RBF kernel maps data into what kind of space?',
            options: ['1D', '2D', 'Finite but high-D', 'Infinite-dimensional'],
            answerIndex: 3,
            explanation: 'The RBF kernel corresponds to an infinite-dimensional feature space, computed implicitly.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set w₁ = w₂ = 0.5, b = 0. What does the margin look like? Can you make the margin wider?',
          hint: 'A small ‖w‖ means a wide margin.',
          expectedAnswer: 'The margin is very wide but the hyperplane is poorly placed. Shrinking w₁ and w₂ to 0.2, 0.2 and shifting b to ~−1.4 places the boundary right between the two clusters with maximum margin.',
        },
        keyTakeaways: [
          'SVMs find the maximum-margin hyperplane — robust to noise and new points.',
          'Kernels let SVMs handle non-linear boundaries without leaving the linear framework.',
          'Tune C (margin vs error) and γ (kernel width) via cross-validation.',
        ],
      },
      {
        id: 'naive-bayes',
        number: 20,
        title: '20. Naive Bayes',
        subtitle: 'A surprisingly strong text classifier built on a single simplifying assumption: features are independent given the class.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '7 mins',
        difficulty: 'Beginner',
        objectives: [
          'Derive Bayes’ theorem and the naive Bayes assumption',
          'Apply multinomial NB to text classification',
          'Use Laplace smoothing to handle unseen words',
        ],
        concepts: [
          {
            title: 'Bayes’ theorem',
            paragraphs: [
              'Bayes’ theorem inverts a conditional: P(class | data) ∝ P(data | class) · P(class). The prior P(class) is what we believe before seeing the data; the likelihood P(data | class) is how the data looks under each hypothesis.',
              'For classification, we pick the class with the highest posterior. The denominator P(data) is the same for every class, so we ignore it.',
            ],
            keyFormulas: [
              { latex: 'P(C|D) = \\frac{P(D|C) P(C)}{P(D)}', caption: 'Bayes’ theorem' },
              { latex: '\\hat{C} = \\arg\\max_C P(C) \\prod_i P(x_i | C)', caption: 'Naive Bayes decision rule' },
            ],
          },
          {
            title: 'The "naive" assumption',
            paragraphs: [
              'Naive Bayes assumes the features are conditionally independent given the class. In text, this means "the presence of the word "free" is independent of the presence of the word "win" given that the email is spam." Obviously false — but the model still works remarkably well.',
              'Independence lets us factor the joint likelihood into a product of per-feature probabilities, which is trivial to estimate from counts.',
            ],
            analogy: {
              concept: 'Naive Bayes',
              metaphor: 'A jury that votes on each piece of evidence separately and adds up the votes.',
              why: 'Jurors in real life weigh evidence jointly, but adding up independent votes is fast and works well enough.',
            },
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.naive_bayes import MultinomialNB\nnb = MultinomialNB(alpha=1.0).fit(X_train, y_train)\nnb.predict(X_test)',
            },
          },
          {
            title: 'Laplace smoothing',
            paragraphs: [
              'If a word never appears in the spam class, its likelihood is 0, which wipes out the entire product. Laplace (add-α) smoothing adds a small constant to every count: P(w | class) = (count(w, class) + α) / (count(class) + α · |V|).',
              'α = 1 is the standard "add-one" smoothing. Larger α pulls all probabilities toward uniform, regularising the model.',
            ],
          },
        ],
        glossary: [
          { term: 'Prior', definition: 'P(class) — the probability of a class before seeing any data.' },
          { term: 'Likelihood', definition: 'P(data | class) — how probable the observed data is under a given class.' },
          { term: 'Laplace smoothing', definition: 'Adding α to every count to avoid zero probabilities for unseen events.' },
        ],
        realWorldExample: {
          scenario: 'Spam detection',
          application: 'Multinomial NB on bag-of-words features reaches 99% accuracy with millisecond training time. It is often the first model to try for text classification.',
          impact: 'Despite its "naive" assumption, NB is fast, interpretable, and embarrassingly competitive on text.',
        },
        playground: {
          type: 'naive-bayes',
          title: 'Build a document, see the class scores',
          instructions: 'Tap words to add them to the document. The bar chart updates to show the posterior probability of each class. Try documents heavy in "free", "win", "offer" — what gets predicted?',
          expectedOutcome: 'Watch the posterior swing as you add spam-flavoured vs work-flavoured words. Adjust α to see Laplace smoothing flatten the distribution.',
        },
        quiz: [
          {
            id: 'nb-q1',
            question: 'Why is it called "naive"?',
            options: [
              'It was invented by Bayes Jr.',
              'It assumes features are independent given the class, which is rarely true.',
              'It cannot handle numerical features.',
              'It only works on small datasets.',
            ],
            answerIndex: 1,
            explanation: 'The conditional independence assumption is the "naive" part. It is rarely true, but the model is fast and competitive.',
          },
          {
            id: 'nb-q2',
            question: 'Why use Laplace smoothing?',
            options: [
              'To make training faster.',
              'To handle words that never appeared in a class’s training data.',
              'To reduce the number of features.',
              'It is required by the algorithm.',
            ],
            answerIndex: 1,
            explanation: 'Without smoothing, an unseen word gives likelihood 0 and zeroes the entire product.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, build a document with "free", "free", "discount". Which class wins, and what is its probability?',
          hint: 'Words that appear multiple times multiply into the score.',
          expectedAnswer: 'The "spam" or "promo" class wins — and the probability is high because two strongly-spam-flavoured words repeat. The exact numbers depend on α.',
        },
        keyTakeaways: [
          'Naive Bayes applies Bayes’ theorem with a strong independence assumption.',
          'Multinomial NB is the go-to baseline for text classification.',
          'Laplace (add-α) smoothing avoids zero probabilities for unseen words.',
        ],
      },
      {
        id: 'hyperparameter-tuning',
        number: 21,
        title: '21. Model Selection & Hyperparameter Tuning',
        subtitle: 'Cross-validation, grid search, random search, and Bayesian optimisation — the toolset for finding the best model honestly.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '9 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Explain why test-set tuning is cheating and how cross-validation fixes it',
          'Compare grid, random, and Bayesian search strategies',
          'Diagnose overfitting vs underfitting from a validation curve',
        ],
        concepts: [
          {
            title: 'Cross-validation',
            paragraphs: [
              'The test set must never be used for model selection — only for final reporting. Cross-validation rotates the training set through k folds: train on k-1, validate on the held-out fold, repeat. The average validation score estimates test performance.',
              '5- and 10-fold CV are common. For small datasets, leave-one-out CV (k = n) gives low-bias estimates at a higher variance.',
            ],
            analogy: {
              concept: 'Cross-validation',
              metaphor: 'Auditing a chef by sampling every fifth dish, not just tasting the last one.',
              why: 'A single held-out set may be lucky or unlucky. Rotating the audit across the whole menu gives a more honest verdict.',
            },
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.model_selection import cross_val_score\nscores = cross_val_score(model, X, y, cv=5, scoring="accuracy")\nprint(f"Mean = {scores.mean():.3f} ± {scores.std():.3f}")',
            },
          },
          {
            title: 'Search strategies',
            paragraphs: [
              'Grid search evaluates every combination of a discrete grid — exhaustive but expensive. Random search samples combinations uniformly — usually finds a near-optimal setting in a fraction of the time.',
              'Bayesian optimisation (e.g. scikit-optimize, Optuna) builds a surrogate model of the validation surface and picks the next setting by expected improvement. Best when each evaluation is expensive (e.g. training a deep network).',
            ],
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.model_selection import RandomizedSearchCV\nsearch = RandomizedSearchCV(model, param_distributions=param_grid, n_iter=50, cv=5)\nsearch.fit(X_train, y_train)\nprint(search.best_params_, search.best_score_)',
            },
          },
          {
            title: 'The validation curve',
            paragraphs: [
              'A validation curve plots training and validation score against a hyperparameter (model complexity, k, λ). When the two curves diverge, the model is overfitting; when both are low, it is underfitting.',
              'The sweet spot is the smallest complexity that puts validation score near its peak — Occam’s razor applied to hyperparameters.',
            ],
          },
        ],
        glossary: [
          { term: 'Cross-validation', definition: 'A method that estimates test performance by averaging over multiple train/validation splits.' },
          { term: 'Grid search', definition: 'Exhaustive search over a discrete grid of hyperparameter combinations.' },
          { term: 'Bayesian optimisation', definition: 'A sequential search guided by a probabilistic surrogate model of the validation surface.' },
        ],
        realWorldExample: {
          scenario: 'Tuning a gradient-boosted classifier on 100k rows',
          application: '5-fold CV with 50 random search iterations over (n_estimators, max_depth, learning_rate, subsample). Final model selected by mean CV AUC.',
          impact: 'Systematic search is the difference between "a model" and "the best model you can deploy today".',
        },
        playground: {
          type: 'hyperparameter',
          title: 'Sweep k and watch the curve',
          instructions: 'Adjust the k slider. The validation curve traces accuracy across k values. Try different splits to see the curve become more or less noisy.',
          expectedOutcome: 'See accuracy peak at a moderate k and degrade at the extremes (k=1 overfits; large k underfits).',
        },
        quiz: [
          {
            id: 'hp-q1',
            question: 'Why not just tune on the test set?',
            options: [
              'It is too slow.',
              'You would overestimate generalisation and report a number that does not hold up on new data.',
              'It is required by law.',
              'Test sets are not big enough.',
            ],
            answerIndex: 1,
            explanation: 'Tuning on the test set leaks information from the test set into the model selection — your reported number is biased upward.',
          },
          {
            id: 'hp-q2',
            question: 'Random search often beats grid search because:',
            options: [
              'It is faster per iteration.',
              'It explores a wider effective range and avoids wasting compute on unimportant dimensions.',
              'It always finds the global optimum.',
              'It uses Bayesian optimisation internally.',
            ],
            answerIndex: 1,
            explanation: 'When only a few hyperparameters matter, random search samples more values of those and is more efficient than a dense grid.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, find the k that gives the highest validation accuracy. Now lower the train ratio — does your answer change? Why?',
          hint: 'With a smaller training set, the bias-variance trade-off shifts.',
          expectedAnswer: 'The best k tends to be smaller when the training set shrinks, because the model needs to be smoother to avoid overfitting. The curve also becomes noisier.',
        },
        keyTakeaways: [
          'Cross-validation is the honest way to compare models and pick hyperparameters.',
          'Random or Bayesian search beats grid search when evaluations are expensive.',
          'Watch the train-validation gap to diagnose overfitting vs underfitting.',
        ],
      },
      {
        id: 'kmeans',
        number: 22,
        title: '22. K-Means Clustering',
        subtitle: 'Partition data into k groups by alternating between assigning points to centroids and moving centroids to cluster means. Simple, fast, foundational.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '7 mins',
        difficulty: 'Beginner',
        objectives: [
          'Describe the k-means algorithm and its objective (SSE / inertia)',
          'Run k-means by hand on a small dataset',
          'Choose k with the elbow method or silhouette score',
        ],
        concepts: [
          {
            title: 'The algorithm',
            paragraphs: [
              'K-means alternates two steps: (1) assign each point to its nearest centroid; (2) move each centroid to the mean of its assigned points. Repeat until assignments stop changing.',
              'The objective is to minimise SSE (also called inertia): the sum of squared distances from each point to its assigned centroid. K-means converges to a local minimum — not always the global one.',
            ],
            analogy: {
              concept: 'K-means',
              metaphor: 'A roomful of people finding their k favourite hangout spots by repeatedly moving toward the centre of their group.',
              why: 'At first no one knows where the centres are. After a few rounds of "look around, walk to your nearest centre, then the centre moves to you", the hangouts stabilise.',
            },
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.cluster import KMeans\nkm = KMeans(n_clusters=3, n_init=10, random_state=0)\nlabels = km.fit_predict(X)\nprint(km.inertia_, km.cluster_centers_)',
            },
          },
          {
            title: 'Choosing k: elbow and silhouette',
            paragraphs: [
              'The elbow method plots inertia vs k and looks for the "elbow" where adding more clusters barely reduces it. The silhouette score (next lesson) is more rigorous but slower.',
              'There is no single right k — it depends on the business question. Use the smallest k that gives a usable separation.',
            ],
            keyFormulas: [
              { latex: 'SSE = \\sum_{i=1}^{n} \\|x_i - \\mu_{c(i)}\\|^2', caption: 'K-means objective (inertia)' },
              { latex: 's(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}', caption: 'Silhouette of point i' },
            ],
          },
          {
            title: 'Limitations and gotchas',
            paragraphs: [
              'K-means assumes clusters are spherical and equally sized. It struggles with elongated or overlapping clusters. Always standardise features and run multiple restarts (n_init ≥ 10).',
              'K-means is also sensitive to the initial centroid positions — k-means++ picks smarter seeds and is the default in scikit-learn.',
            ],
          },
        ],
        glossary: [
          { term: 'Centroid', definition: 'The mean position of all points assigned to a cluster.' },
          { term: 'Inertia', definition: 'Sum of squared distances from each point to its centroid; k-means minimises this.' },
          { term: 'k-means++', definition: 'A smart initialisation that spaces the first centroids apart for faster, better convergence.' },
        ],
        realWorldExample: {
          scenario: 'Customer segmentation for a retailer',
          application: 'Cluster 200k shoppers by recency, frequency, monetary value (RFM) into 5 groups. Marketing builds a different campaign per group.',
          impact: 'K-means segments drive personalised marketing, which lifts conversion 10–20% over a single campaign.',
        },
        playground: {
          type: 'kmeans',
          title: 'Run k-means step by step',
          instructions: 'Pick k and the number of iterations. Watch the centroids (✦) jump toward the cluster means and watch points recolour as they switch allegiance.',
          expectedOutcome: 'See SSE drop sharply in the first few iterations, then plateau — that plateau is the local minimum k-means has converged to.',
        },
        quiz: [
          {
            id: 'km-q1',
            question: 'K-means is minimising what?',
            options: [
              'The number of clusters.',
              'The sum of squared distances from each point to its assigned centroid.',
              'The number of features.',
              'The between-cluster variance only.',
            ],
            answerIndex: 1,
            explanation: 'Inertia = Σ‖xᵢ − μc(i)‖². K-means is an iterative minimiser of this quantity.',
          },
          {
            id: 'km-q2',
            question: 'Why run k-means multiple times with different seeds?',
            options: [
              'It is faster.',
              'K-means converges to a local minimum — different seeds may find different (and worse) solutions.',
              'The first run always fails.',
              'It is required by law.',
            ],
            answerIndex: 1,
            explanation: 'n_init ≥ 10 with k-means++ is the standard practice. Pick the run with the lowest inertia.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set k = 1, 3, 6 and watch SSE. Where does the elbow appear?',
          hint: 'The elbow is where adding more clusters barely reduces SSE.',
          expectedAnswer: 'The elbow sits around k = 3 — the dataset was generated from 3 centres. Past 3, SSE keeps falling slowly because clusters are splitting noise.',
        },
        keyTakeaways: [
          'K-means alternates between assigning points and moving centroids.',
          'Use the elbow method or silhouette score to pick k.',
          'Always standardise features, set n_init ≥ 10, and use k-means++.',
        ],
      },
      {
        id: 'hierarchical',
        number: 23,
        title: '23. Hierarchical Clustering',
        subtitle: 'Build a tree of clusters bottom-up. No need to pre-specify k — cut the dendrogram where the data tells you to.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '7 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Describe agglomerative clustering and how a dendrogram encodes it',
          'Choose a linkage criterion (single, complete, average)',
          'Cut the dendrogram to obtain flat clusters',
        ],
        concepts: [
          {
            title: 'Agglomerative clustering',
            paragraphs: [
              'Start with every point as its own cluster. At each step, merge the two closest clusters. Stop when there is one cluster (or you have k).',
              'The result is a dendrogram — a tree where the height of each merge is the distance between the two clusters joined. Cutting the tree at a height yields flat clusters.',
            ],
            analogy: {
              concept: 'Hierarchical clustering',
              metaphor: 'Building a family tree of galaxies by repeatedly merging the two closest ones.',
              why: 'You see not just "who belongs together" but "how related every pair is" — useful for biology, taxonomies, and document organisation.',
            },
            codeSnippet: {
              language: 'python',
              code: 'from scipy.cluster.hierarchy import linkage, fcluster\nZ = linkage(X, method="average", metric="euclidean")\nlabels = fcluster(Z, t=3, criterion="maxclust")',
            },
          },
          {
            title: 'Linkage criteria',
            paragraphs: [
              'Single linkage uses the closest pair of points between clusters — produces long, chaining clusters. Complete linkage uses the farthest pair — produces tight, compact clusters. Average linkage balances the two.',
              "Ward's method minimises the increase in within-cluster variance — often the most useful default for numeric data.",
            ],
            keyFormulas: [
              { latex: 'd_{single}(A, B) = \\min_{a \\in A, b \\in B} d(a, b)', caption: 'Single linkage' },
              { latex: 'd_{complete}(A, B) = \\max_{a \\in A, b \\in B} d(a, b)', caption: 'Complete linkage' },
            ],
          },
        ],
        glossary: [
          { term: 'Dendrogram', definition: 'A tree diagram that records the order and distance of cluster merges.' },
          { term: 'Linkage', definition: 'The rule for measuring distance between two clusters (single, complete, average, Ward).' },
        ],
        realWorldExample: {
          scenario: 'Grouping genes by expression profile',
          application: 'Hierarchical clustering on microarray data reveals that co-regulated genes cluster together, helping biologists identify pathways.',
          impact: 'Hierarchical clustering is the original tool of genomics and the default view in heatmaps.',
        },
        playground: {
          type: 'hierarchical',
          title: 'Cut the tree at different heights',
          instructions: 'Switch between single, complete, and average linkage, then slide the k slider to cut the dendrogram. Notice that single linkage chains and complete linkage makes tight balls.',
          expectedOutcome: 'See how the same data produces different cluster shapes depending on linkage, and how cutting lower reveals finer structure.',
        },
        quiz: [
          {
            id: 'hc-q1',
            question: 'Which linkage is most prone to chaining?',
            options: ['Single', 'Complete', 'Average', 'Ward'],
            answerIndex: 0,
            explanation: 'Single linkage only needs one close pair to merge — clusters grow by zipping along the closest path.',
          },
          {
            id: 'hc-q2',
            question: 'Cutting a dendrogram at height h gives you:',
            options: [
              'k = h clusters.',
              'All clusters whose merge distance is greater than h.',
              'Random clusters.',
              'No clusters.',
            ],
            answerIndex: 1,
            explanation: 'The dendrogram is a merge history; horizontal cuts give flat clusterings.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, cut at k = 3, then at k = 1, then k = 4. How does the clustering change as you cut finer?',
          hint: 'Cutting at k = 1 means no merges — every point is its own cluster.',
          expectedAnswer: 'At k = 1 every point is alone; at k = 3 the three natural groups are recovered; at k = 4 one of the natural groups is split in two. Smaller k = coarser clustering.',
        },
        keyTakeaways: [
          'Hierarchical clustering builds a merge tree; cut it to get flat clusters.',
          'Linkage criterion drastically changes the shape of the clusters.',
          'Best for small datasets (O(n²) or O(n³)) and when you need the merge history.',
        ],
      },
      {
        id: 'dbscan',
        number: 24,
        title: '24. DBSCAN: Density-Based Clustering',
        subtitle: 'Cluster by density, not by centroid. DBSCAN finds arbitrarily shaped clusters and labels noise — without ever asking for k.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '7 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Explain core, border, and noise points',
          'Tune ε and minPts to control cluster granularity',
          'Recognise when DBSCAN beats k-means',
        ],
        concepts: [
          {
            title: 'The algorithm',
            paragraphs: [
              'DBSCAN defines a point as a core point if at least minPts points lie within distance ε of it. Core points form clusters; border points within ε of a core point join a cluster; isolated points are labelled noise.',
              'Unlike k-means, DBSCAN does not need k, can find arbitrarily shaped clusters, and is robust to outliers.',
            ],
            analogy: {
              concept: 'DBSCAN',
              metaphor: 'A party: the loud group in the middle is the cluster core, the wallflowers next to them are border points, and the people standing alone in the corner are noise.',
              why: 'You do not pre-pick how many parties there are; the density itself reveals them.',
            },
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.cluster import DBSCAN\ndb = DBSCAN(eps=0.5, min_samples=5).fit(X)\nlabels = db.labels_   # -1 marks noise',
            },
          },
          {
            title: 'Choosing ε and minPts',
            paragraphs: [
              'Plot the k-distance graph: distance to the k-th nearest neighbour for every point, sorted descending. The elbow is a good ε. minPts is often set to dim + 1; smaller values create more, smaller clusters.',
              'DBSCAN struggles with clusters of very different densities — one ε cannot serve all.',
            ],
            keyFormulas: [
              { latex: 'N_\\varepsilon(p) = \\{q : d(p, q) \\le \\varepsilon\\}', caption: 'ε-neighbourhood' },
            ],
          },
        ],
        glossary: [
          { term: 'Core point', definition: 'A point with at least minPts neighbours within ε.' },
          { term: 'Border point', definition: 'A non-core point within ε of a core point; assigned to a cluster but not central to it.' },
          { term: 'Noise', definition: 'A point that is neither core nor border; labelled -1.' },
        ],
        realWorldExample: {
          scenario: 'Detecting fraud rings in transaction data',
          application: 'DBSCAN groups densely connected accounts; isolated accounts and small rings are flagged as noise and reviewed manually.',
          impact: 'Density-based clustering uncovers shapes that centroid-based methods miss, especially in noisy data.',
        },
        playground: {
          type: 'dbscan',
          title: 'Slide ε and watch the clusters change',
          instructions: 'Adjust ε and minPts. Small ε → many tiny clusters + lots of noise. Large ε → fewer, larger clusters. Find the sweet spot for the synthetic dataset.',
          expectedOutcome: 'See how density parameters carve the space into clusters of arbitrary shape, with stray points marked as noise.',
        },
        quiz: [
          {
            id: 'db-q1',
            question: 'DBSCAN does not require:',
            options: [
              'A distance metric.',
              'The number of clusters k.',
              'Two parameters: ε and minPts.',
              'A point to be near a core to be in a cluster.',
            ],
            answerIndex: 1,
            explanation: 'DBSCAN discovers k from the data — a major advantage over k-means.',
          },
          {
            id: 'db-q2',
            question: 'A point labelled -1 by DBSCAN is:',
            options: ['A core point', 'A border point', 'Noise', 'A centroid'],
            answerIndex: 2,
            explanation: 'DBSCAN labels outliers as -1 (noise).',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set ε = 0.6 and minPts = 3. How many clusters do you see, and how many noise points?',
          hint: 'Small ε + small minPts = many small clusters and lots of noise.',
          expectedAnswer: 'You should see the two dense blobs merged into one (or two) clusters and the scattered outliers flagged as noise (-1).',
        },
        keyTakeaways: [
          'DBSCAN clusters by density — no k needed, noise handled natively.',
          'Tune ε with a k-distance plot; pick minPts ≥ dim + 1.',
          'Great for non-spherical clusters and outlier detection.',
        ],
      },
      {
        id: 'cluster-eval',
        number: 25,
        title: '25. Clustering Evaluation: Silhouette & Elbow',
        subtitle: 'How do you score a clustering when there are no labels? Internal metrics turn geometry into a single number.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '7 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Compute and interpret the silhouette score',
          'Read an elbow plot of inertia vs k',
          'Choose k with internal metrics, then validate with domain knowledge',
        ],
        concepts: [
          {
            title: 'Internal vs external metrics',
            paragraphs: [
              'External metrics (ARI, NMI) compare a clustering to ground-truth labels — useful in research, rare in practice. Internal metrics judge the clustering from the data alone: inertia, silhouette, Davies–Bouldin, Calinski–Harabasz.',
              'No single metric is perfect. Use one for picking k, then sanity-check with the business question.',
            ],
          },
          {
            title: 'Silhouette score',
            paragraphs: [
              'For each point, compute a = mean distance to other points in its cluster, and b = mean distance to the nearest other cluster. The silhouette is s = (b − a) / max(a, b). It lies in [−1, 1]: 1 = well clustered, 0 = on the boundary, −1 = probably in the wrong cluster.',
              'Average silhouette across all points is the silhouette score for that k. Pick the k that maximises it.',
            ],
            keyFormulas: [
              { latex: 's(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}', caption: 'Silhouette of point i' },
            ],
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.metrics import silhouette_score\nscore = silhouette_score(X, labels)\nprint(f"Silhouette = {score:.3f}")',
            },
          },
          {
            title: 'The elbow method',
            paragraphs: [
              'Plot inertia (SSE) vs k. The "elbow" — where the curve bends from steep to flat — is a sensible k. There is no mathematical guarantee; you are looking for the biggest improvement-per-cluster.',
              'Elbow is fast (k-means is O(nkd) per iteration) and easy to eyeball. Silhouette is more rigorous but O(n²).',
            ],
          },
        ],
        glossary: [
          { term: 'Silhouette score', definition: 'Internal clustering metric in [-1, 1]; higher means better-separated clusters.' },
          { term: 'Elbow method', definition: 'Heuristic for picking k by finding the inflection point in an inertia-vs-k plot.' },
        ],
        realWorldExample: {
          scenario: 'Picking the number of customer personas',
          application: 'Sweep k from 2 to 10, plot silhouette and elbow. Marketing picks k = 4 because it is the elbow and gives 4 actionable personas.',
          impact: 'A defensible k gives stakeholders a number to argue about, not a guess.',
        },
        playground: {
          type: 'cluster-eval',
          title: 'Find the best k',
          instructions: 'Sweep k from 2 to 6 and watch the silhouette and elbow curves. The data was generated with 4 true clusters — does either metric recover it?',
          expectedOutcome: 'The silhouette score peaks near k = 4, and the elbow curve bends around the same value. Both metrics agree.',
        },
        quiz: [
          {
            id: 'ce-q1',
            question: 'A silhouette of 0.6 means:',
            options: [
              '60% of points are correctly clustered.',
              'The clustering is decent but not great — well-separated clusters are above 0.7.',
              'The model has 60% accuracy.',
              'The clusters are noise.',
            ],
            answerIndex: 1,
            explanation: 'Silhouette is bounded in [-1, 1]; 0.6 is acceptable, 0.7+ is strong.',
          },
          {
            id: 'ce-q2',
            question: 'The elbow method looks for:',
            options: [
              'The k where inertia stops decreasing rapidly.',
              'The k with the highest silhouette.',
              'The k with the most noise points.',
              'The k chosen by k-means++.',
            ],
            answerIndex: 0,
            explanation: 'Inertia always falls as k rises, but the rate of fall drops at the elbow.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, sweep k and find the value that maximises silhouette. Now check the elbow — do they agree?',
          hint: 'Both metrics should point to the same k on a clean dataset.',
          expectedAnswer: 'Both point to k = 4 (or close). When they disagree, prefer the silhouette for a small dataset, elbow for a large one.',
        },
        keyTakeaways: [
          'Internal metrics (silhouette, elbow) judge clustering without ground truth.',
          'Silhouette is the gold-standard internal score; elbow is the fast heuristic.',
          'Always combine quantitative metrics with domain meaning.',
        ],
      },
      {
        id: 'svd',
        number: 26,
        title: '26. Singular Value Decomposition (SVD)',
        subtitle: 'Factorise any matrix into U·Σ·Vᵀ. The single most useful decomposition in linear algebra, and the engine behind PCA and recommender systems.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '8 mins',
        difficulty: 'Advanced',
        objectives: [
          'State the SVD theorem and interpret U, Σ, Vᵀ',
          'Compute a rank-k approximation of a matrix',
          'Apply truncated SVD to denoise and compress data',
        ],
        concepts: [
          {
            title: 'The theorem',
            paragraphs: [
              'Every m×n matrix A can be written A = U · Σ · Vᵀ, where U (m×m) and V (n×n) are orthogonal and Σ (m×n) is diagonal with non-negative entries σ₁ ≥ σ₂ ≥ … ≥ 0, called the singular values.',
              'The columns of U are the left singular vectors (in the row-space of A), the columns of V are the right singular vectors (in the column-space), and the singular values measure how much "energy" each pair of directions carries.',
            ],
            analogy: {
              concept: 'SVD',
              metaphor: 'Decomposing a smoothie into its recipe — each fruit, the order to add them, and how much of each.',
              why: 'A recipe is a weighted sum of ingredients; SVD is the unique decomposition that orders ingredients by importance.',
            },
            codeSnippet: {
              language: 'python',
              code: 'import numpy as np\nU, S, Vt = np.linalg.svd(A, full_matrices=False)\nA_k = U[:, :k] @ np.diag(S[:k]) @ Vt[:k, :]\nprint("Frobenius err:", np.linalg.norm(A - A_k))',
            },
          },
          {
            title: 'Truncated SVD and low-rank approximation',
            paragraphs: [
              'Keep only the top k singular values: A_k = U[:, :k] · diag(σ₁..σ_k) · Vᵀ[:k, :]. By the Eckart–Young–Mirsky theorem, A_k is the best rank-k approximation of A in both Frobenius and spectral norms.',
              'Truncating SVD is the foundation of dimensionality reduction (next lesson), image compression, and latent-factor recommendation systems.',
            ],
            keyFormulas: [
              { latex: 'A = U \\Sigma V^T', caption: 'SVD decomposition' },
              { latex: '\\|A - A_k\\|_F^2 = \\sum_{i=k+1}^{r} \\sigma_i^2', caption: 'Truncation error' },
            ],
          },
          {
            title: 'Connections to other tools',
            paragraphs: [
              'PCA is the SVD of the centred data matrix (or equivalently the eigendecomposition of the covariance matrix). Latent Semantic Analysis (LSA) for text applies SVD to a term-document matrix. Recommender systems compute the SVD of a user-item matrix to discover latent factors.',
              'The truncated SVD is the optimal way to compress a matrix — better than feature selection, often better than PCA when the matrix is sparse.',
            ],
          },
        ],
        glossary: [
          { term: 'Singular value', definition: 'A non-negative number on the diagonal of Σ that measures the "energy" of a direction.' },
          { term: 'Low-rank approximation', definition: 'A matrix of rank ≤ k that is closest to A in Frobenius norm — found by truncating SVD.' },
        ],
        realWorldExample: {
          scenario: 'Image compression',
          application: 'Keep the top 20 singular values of a 1000×1000 grayscale image. Storage drops from 1M numbers to 40 000 with little visual loss.',
          impact: 'SVD is a one-line image compressor with a clean theory of how much information is being thrown away.',
        },
        playground: {
          type: 'svd',
          title: 'Truncate and see the error shrink',
          instructions: 'Increase the rank k. The bar chart shows each singular value as a percentage of the total. The reconstructed matrix A_k becomes closer to the original as k grows.',
          expectedOutcome: 'See the bulk of variance captured by the first 1–2 singular values, and watch the Frobenius error drop toward 0 as k reaches the matrix rank.',
        },
        quiz: [
          {
            id: 'svd-q1',
            question: 'SVD says any matrix A can be written as:',
            options: [
              'A = LU',
              'A = QR',
              'A = U · Σ · Vᵀ',
              'A = LLᵀ',
            ],
            answerIndex: 2,
            explanation: 'U and V are orthogonal; Σ is diagonal with non-negative entries sorted largest to smallest.',
          },
          {
            id: 'svd-q2',
            question: 'The Eckart–Young theorem says:',
            options: [
              'SVD exists for square matrices only.',
              'Truncating to the top k singular values gives the best rank-k approximation.',
              'SVD requires real-valued data.',
              'k-means always beats SVD.',
            ],
            answerIndex: 1,
            explanation: 'No other rank-k matrix is closer to A in Frobenius or spectral norm.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set k = 1. How much of the variance is captured, and what does the reconstructed matrix look like?',
          hint: 'A rank-1 matrix is a single outer product — every row is a scalar multiple of a single vector.',
          expectedAnswer: 'A rank-1 A_k explains most of the structure but flattens the differences between rows. The Frobenius error is non-zero; raise k to shrink it.',
        },
        keyTakeaways: [
          'Every matrix has an SVD A = U · Σ · Vᵀ — unique up to sign conventions.',
          'Truncating to the top k singular values gives the best rank-k approximation.',
          'SVD powers PCA, LSA, image compression, and matrix completion.',
        ],
      },
      {
        id: 'pca',
        number: 27,
        title: '27. Principal Component Analysis (PCA)',
        subtitle: 'Project data onto the directions of maximum variance. The workhorse of linear dimensionality reduction.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '8 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Explain the PCA objective: maximise variance of the projection',
          'Compute principal components from the covariance matrix (or via SVD)',
          'Decide how many components to keep with the explained-variance plot',
        ],
        concepts: [
          {
            title: 'The idea',
            paragraphs: [
              'PCA finds orthogonal directions (principal components) along which the data varies the most. Projecting the data onto the top k components gives a k-D summary that retains the most information.',
              'Geometrically, the first PC is the line that best fits the data in least-squares sense. The second PC is the next-best line, orthogonal to the first. Together they form a new orthonormal basis.',
            ],
            analogy: {
              concept: 'PCA',
              metaphor: 'Photographing a 3D sculpture from the most informative two angles.',
              why: 'The silhouette changes most when you rotate to the most "spread-out" direction — that rotation is the principal component.',
            },
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.decomposition import PCA\npca = PCA(n_components=2)\nX2 = pca.fit_transform(X)\nprint(pca.explained_variance_ratio_)',
            },
          },
          {
            title: 'Computing it',
            paragraphs: [
              'Two equivalent ways: eigendecomposition of the covariance matrix C = XᵀX / (n − 1), or SVD of the centred data matrix X. The eigenvectors are the principal components; the eigenvalues are the variances along each direction.',
              'Always centre (subtract the mean) before PCA. Often also standardise (divide by std) when features have different units.',
            ],
            keyFormulas: [
              { latex: 'C v = \\lambda v', caption: 'Eigenproblem for covariance' },
              { latex: 'X_{PCA} = X \\cdot W_k', caption: 'Project onto top k components' },
            ],
          },
          {
            title: 'Choosing k',
            paragraphs: [
              'Plot the cumulative explained variance. Pick the smallest k that explains, say, 95% of the variance. The Kaiser rule (keep components with eigenvalue > 1) is a quick heuristic for standardised data.',
              'PCA is unsupervised — it ignores the label. Use it for compression, denoising, and visualisation. For classification, prefer LDA, which is supervised.',
            ],
          },
        ],
        glossary: [
          { term: 'Principal component', definition: 'A unit vector that points in the direction of maximum variance of the data.' },
          { term: 'Explained variance', definition: 'The fraction of total variance captured by a principal component.' },
          { term: 'Loading', definition: 'The coefficients of a principal component in the original feature basis.' },
        ],
        realWorldExample: {
          scenario: 'Visualising high-dimensional customer data',
          application: 'Project a 50-feature RFM matrix to 2D with PCA. Marketing sees three clear persona clusters and plans campaigns.',
          impact: 'PCA turns 50 numbers per customer into 2 numbers that fit on a slide.',
        },
        playground: {
          type: 'pca',
          title: 'Project 2D → 1D',
          instructions: 'Watch PC1 align with the diagonal of the data cloud. The 1D projection (bottom chart) shows the spread of points along PC1. Increase the noise slider to see PC1 become less informative.',
          expectedOutcome: 'See PC1 capture the main axis of variation, and the projection preserve the relative ordering of points along that axis.',
        },
        quiz: [
          {
            id: 'pca-q1',
            question: 'PCA is best described as:',
            options: [
              'A supervised classification method.',
              'An unsupervised linear dimensionality-reduction technique.',
              'A clustering algorithm.',
              'A non-linear manifold learner.',
            ],
            answerIndex: 1,
            explanation: 'PCA finds orthogonal directions of maximum variance — linear, unsupervised, deterministic.',
          },
          {
            id: 'pca-q2',
            question: 'Before running PCA, you should:',
            options: [
              'Standardise features so no single feature dominates.',
              'Add more features.',
              'Apply one-hot encoding to all numeric columns.',
              'Drop the labels.',
            ],
            answerIndex: 0,
            explanation: 'PCA is sensitive to scale. With mixed units, always standardise.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, look at the variance explained by PC1. If it is over 0.8, what does that say about the data?',
          hint: 'High variance on one axis means the data is well-approximated as 1D.',
          expectedAnswer: 'The data is essentially a long 1D cloud stretched diagonally. Most of the structure can be captured by a single number — the 1D projection will be informative.',
        },
        keyTakeaways: [
          'PCA finds orthogonal directions of maximum variance.',
          'Equivalently, eigendecomposition of covariance, or SVD of the centred data.',
          'Standardise features; pick k from a cumulative-variance plot.',
        ],
      },
      {
        id: 'tsne',
        number: 28,
        title: '28. t-SNE & UMAP: Non-Linear Manifold Learning',
        subtitle: 'When PCA is too rigid, t-SNE and UMAP preserve the local neighbourhood structure of high-dimensional data in 2D or 3D.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '8 mins',
        difficulty: 'Advanced',
        objectives: [
          'Explain the idea of preserving local neighbourhoods in low dimensions',
          'Tune t-SNE perplexity and learning rate',
          'Compare t-SNE, UMAP, and PCA for visualisation',
        ],
        concepts: [
          {
            title: 'Why not just use PCA?',
            paragraphs: [
              'PCA is linear. Real data — images, words, gene expression — often lies on a curved manifold in high-D space. A linear projection flattens that manifold and mixes clusters that are actually separate.',
              't-SNE and UMAP are non-linear: they keep nearby points nearby, even at the cost of distorting global distances. The result is a 2D map that "folds" the manifold out flat.',
            ],
            analogy: {
              concept: 't-SNE / UMAP',
              metaphor: 'Unfolding a crumpled paper map onto a flat table, keeping neighbouring regions adjacent.',
              why: 'Some pairs of cities that look close on the flat map are actually far apart on the crumpled original. The flat map is great for orientation, not for measuring distance.',
            },
          },
          {
            title: 't-SNE',
            paragraphs: [
              't-SNE converts high-D Euclidean distances into a probability distribution (Gaussian around each point) and finds a low-D distribution (Student-t, with heavy tails) that minimises the KL divergence between the two. It uses gradient descent.',
              'The perplexity parameter controls the effective neighbourhood size: low perplexity focuses on very local structure, high perplexity on broader patterns. Always try several values.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.manifold import TSNE\nX2 = TSNE(n_components=2, perplexity=30, learning_rate=200).fit_transform(X)',
            },
          },
          {
            title: 'UMAP',
            paragraphs: [
              'UMAP uses a similar idea but with a different theoretical foundation (Riemannian geometry and topological data analysis). It is faster, scales to larger datasets, and preserves more global structure than t-SNE.',
              'The two methods often produce similar-looking maps, but UMAP has more useful hyperparameters (n_neighbors, min_dist) and a transform method that can embed new points.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import umap\nX2 = umap.UMAP(n_neighbors=15, min_dist=0.1).fit_transform(X)',
            },
          },
          {
            title: 'Reading the map',
            paragraphs: [
              'Cluster sizes and inter-cluster distances in a t-SNE/UMAP plot are not meaningful. Only local neighbourhoods are preserved. Use the plot to identify clusters, not to claim cluster A is "twice as large" as cluster B.',
              'Always run multiple random seeds and colour points by known labels to validate the structure.',
            ],
          },
        ],
        glossary: [
          { term: 'Perplexity', definition: 't-SNE hyperparameter that controls the effective neighbourhood size — typically 5–50.' },
          { term: 'Manifold', definition: 'A low-dimensional surface embedded in high-dimensional space.' },
          { term: 'UMAP', definition: 'Uniform Manifold Approximation and Projection — a faster alternative to t-SNE with similar goals.' },
        ],
        realWorldExample: {
          scenario: 'Visualising word embeddings (word2vec, BERT)',
          application: 'Project 300-D word vectors to 2D with t-SNE. Words with similar meanings form clear clusters: countries, animals, colours.',
          impact: 't-SNE plots made word2vec famous by giving an intuitive view of semantic structure.',
        },
        playground: {
          type: 'tsne',
          title: 'Watch clusters emerge in 2D',
          instructions: 'Change perplexity and iterations. Low perplexity and few iterations will produce fragmented clusters; high perplexity and many iterations will give a cleaner global map.',
          expectedOutcome: 'See four distinct clusters appear in the 2D embedding — corresponding to the four true clusters in the data.',
        },
        quiz: [
          {
            id: 'tsne-q1',
            question: 't-SNE preserves which of the following?',
            options: [
              'Global distances between every pair of points.',
              'Local neighbourhoods — nearby points in high-D stay nearby in low-D.',
              'Cluster sizes.',
              'Mean values per feature.',
            ],
            answerIndex: 1,
            explanation: 't-SNE is designed for local structure. Do not interpret cluster sizes or distances in the plot.',
          },
          {
            id: 'tsne-q2',
            question: 'UMAP is preferred over t-SNE when:',
            options: [
              'You need faster runtimes or want to embed new points later.',
              'You only have 10 points.',
              'You need exact global distances.',
              'You want a linear projection.',
            ],
            answerIndex: 0,
            explanation: 'UMAP is faster, more scalable, and supports a transform method for new points.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, run with perplexity = 5 vs perplexity = 35. How do the clusters change?',
          hint: 'Low perplexity focuses on tight neighbourhoods; high perplexity on broader context.',
          expectedAnswer: 'At perplexity = 5 the clusters are fragmented and stringy. At perplexity = 35 the four true clusters emerge as compact, well-separated groups.',
        },
        keyTakeaways: [
          't-SNE and UMAP preserve local neighbourhoods — great for visualisation.',
          'Distances and sizes in the 2D map are not meaningful.',
          'UMAP is faster, scales better, and supports embedding new points.',
        ],
      },
      {
        id: 'apriori',
        number: 29,
        title: '29. Association Rules: Market Basket Analysis',
        subtitle: 'Find "if X then Y" rules in transaction data. The classic recipe behind "customers who bought X also bought Y".',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '7 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Define support, confidence, and lift for an association rule',
          'Run the Apriori algorithm and explain its pruning trick',
          'Use FP-Growth for large transaction databases',
        ],
        concepts: [
          {
            title: 'The metric trio',
            paragraphs: [
              'Support = fraction of transactions that contain the itemset. Confidence(X ⇒ Y) = support(X ∪ Y) / support(X). Lift = confidence(X ⇒ Y) / support(Y) — how much more likely is Y given X than by chance?',
              'High support finds common patterns; high confidence finds reliable rules; high lift filters out coincidences.',
            ],
            keyFormulas: [
              { latex: '\\text{support}(X) = \\frac{|\\{t : X \\subseteq t\\}|}{|T|}', caption: 'Support' },
              { latex: '\\text{confidence}(X \\Rightarrow Y) = \\frac{\\text{support}(X \\cup Y)}{\\text{support}(X)}', caption: 'Confidence' },
              { latex: '\\text{lift}(X \\Rightarrow Y) = \\frac{\\text{confidence}(X \\Rightarrow Y)}{\\text{support}(Y)}', caption: 'Lift' },
            ],
            codeSnippet: {
              language: 'python',
              code: 'from mlxtend.frequent_patterns import apriori, association_rules\nfreq = apriori(basket, min_support=0.3, use_colnames=True)\nrules = association_rules(freq, metric="lift", min_threshold=1.2)',
            },
          },
          {
            title: 'The Apriori algorithm',
            paragraphs: [
              'Apriori generates candidate itemsets level by level. The trick: if an itemset is infrequent, none of its supersets can be frequent (the "apriori property"), so we prune the search tree dramatically.',
              'The downside: Apriori makes many passes over the database. FP-Growth compresses the data into an FP-tree and extracts frequent itemsets in two passes — much faster on large datasets.',
            ],
          },
        ],
        glossary: [
          { term: 'Support', definition: 'Fraction of transactions containing the itemset.' },
          { term: 'Confidence', definition: 'P(Y | X) — how often the rule is correct.' },
          { term: 'Lift', definition: 'Confidence divided by the prior P(Y) — measures how surprising the rule is.' },
        ],
        realWorldExample: {
          scenario: 'Cross-selling on a retail website',
          application: 'Apriori on 6 months of transactions surfaces "diapers ⇒ beer". The site places the two near each other and lifts basket size by 8%.',
          impact: 'The "beer and diapers" story launched the entire field of market-basket analysis.',
        },
        playground: {
          type: 'apriori',
          title: 'Try a rule, see the scores',
          instructions: 'Click items to build the left-hand side of a rule. The simulator computes support, confidence, and lift. Try single-item LHSs and see which rules cross the thresholds.',
          expectedOutcome: 'See how the Apriori property lets the simulator skip over a huge search space and only present a handful of strong rules.',
        },
        quiz: [
          {
            id: 'ar-q1',
            question: 'A rule has high confidence but lift ≈ 1. What does that mean?',
            options: [
              'The rule is extremely useful.',
              'Y is just generally common — knowing X adds nothing.',
              'The rule is wrong.',
              'The data is imbalanced.',
            ],
            answerIndex: 1,
            explanation: 'Lift = 1 means X and Y are independent. Always check lift, not just confidence.',
          },
          {
            id: 'ar-q2',
            question: 'The "apriori property" lets the algorithm:',
            options: [
              'Skip supersets of infrequent itemsets.',
              'Use neural networks.',
              'Run in O(1).',
              'Skip the test set.',
            ],
            answerIndex: 0,
            explanation: 'An infrequent itemset cannot have frequent supersets — prune aggressively.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set min support = 30% and min confidence = 60%. How many rules survive? Now lower both — what changes?',
          hint: 'Lower thresholds = more rules, but lower lift on average.',
          expectedAnswer: 'At 30/60% you get a handful of strong, high-lift rules. Lowering thresholds pulls in weaker patterns that may be noise.',
        },
        keyTakeaways: [
          'Support, confidence, and lift characterise an association rule.',
          'Apriori uses the "infrequent ⇒ all supersets infrequent" property to prune.',
          'FP-Growth scales better on large transaction databases.',
        ],
      },
      {
        id: 'anomaly',
        number: 30,
        title: '30. Anomaly Detection',
        subtitle: 'Find the points that do not belong. From fraud and cyber-intrusion to manufacturing defects, anomaly detection is everywhere.',
        pathId: 'data-science-2',
        pathTitle: 'Data Science II · Algorithms',
        readingTime: '8 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Distinguish point, contextual, and collective anomalies',
          'Apply distance-based, density-based, and model-based detectors',
          'Evaluate an anomaly detector with precision@k and PR curves',
        ],
        concepts: [
          {
            title: 'What is an anomaly?',
            paragraphs: [
              'A point anomaly is a single observation that is far from the rest (a fraudulent transaction). A contextual anomaly is normal globally but unusual in a specific context (a 30°C day in December). A collective anomaly is a group of points that is unusual together, even if individually they are fine.',
              'The choice of method depends on which kind you care about.',
            ],
            analogy: {
              concept: 'Anomaly detection',
              metaphor: 'A bouncer who lets in everyone except the people acting differently from the rest of the queue.',
              why: 'You do not need a list of "bad" people; you need a sense of what "normal" looks like and flag deviations.',
            },
          },
          {
            title: 'Three families of methods',
            paragraphs: [
              'Distance-based: k-NN distance or k-th nearest distance — points far from their neighbours are anomalies. Simple, but struggles in high-D.',
              'Density-based: Local Outlier Factor (LOF) compares a point’s local density to its neighbours’ — points in much sparser regions are anomalies. Handles varying density.',
              'Model-based: Isolation Forest isolates points with random splits — anomalies are isolated quickly (short paths). One-class SVM learns a tight boundary around normal data and flags points outside.',
            ],
            keyFormulas: [
              { latex: '\\text{anomaly score} = 2^{-\\mathbb{E}[h(x)]/c(\\psi)}', caption: 'Isolation Forest score' },
            ],
            codeSnippet: {
              language: 'python',
              code: 'from sklearn.ensemble import IsolationForest\niso = IsolationForest(contamination=0.05, random_state=0)\nlabels = iso.fit_predict(X)  # -1 = anomaly, 1 = normal',
            },
          },
          {
            title: 'Evaluating without clean labels',
            paragraphs: [
              'Anomaly detection is usually evaluated by ranking — precision@k, recall@k, or the area under the precision-recall curve. A detector that puts anomalies at the top of the list is good; one that mixes them with normal points is bad.',
              'Set the contamination parameter to your expected anomaly rate. If you do not know, sweep and look at the score distribution.',
            ],
          },
        ],
        glossary: [
          { term: 'Point anomaly', definition: 'A single observation that deviates from the rest.' },
          { term: 'Contamination', definition: 'Expected fraction of anomalies in the dataset — used to set the decision threshold.' },
          { term: 'Isolation Forest', definition: 'A model-based detector that scores anomalies by how few splits it takes to isolate them.' },
        ],
        realWorldExample: {
          scenario: 'Credit card fraud',
          application: 'Train an Isolation Forest on 100M normal transactions. Score new transactions in real time; flag the top 0.1% for review. Catches 70% of fraud at a 5% false-positive rate.',
          impact: 'Anomaly detection is the first line of defence at every major card network.',
        },
        playground: {
          type: 'anomaly',
          title: 'Flag the odd ones out',
          instructions: 'Two detectors run side by side: a k-NN distance detector and an Isolation Forest. Adjust k and the contamination threshold. Red points are flagged as anomalies.',
          expectedOutcome: 'See both detectors light up the injected anomalies (corners, isolated middle point). The detectors disagree in interesting ways — use a vote between them for robustness.',
        },
        quiz: [
          {
            id: 'ad-q1',
            question: 'A 30°C reading is an anomaly in Oslo in December but not in July. This is what kind of anomaly?',
            options: ['Point', 'Contextual', 'Collective', 'Global'],
            answerIndex: 1,
            explanation: 'Contextual anomalies are unusual given the surrounding context (time, location, season).',
          },
          {
            id: 'ad-q2',
            question: 'Isolation Forest scores a point as more anomalous when:',
            options: [
              'It takes many random splits to isolate it.',
              'It takes few random splits to isolate it.',
              'It is in a dense cluster.',
              'It is on the decision boundary.',
            ],
            answerIndex: 1,
            explanation: 'Anomalies are easy to separate — fewer splits means a shorter path length and a higher anomaly score.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, slide k up and down for the k-NN detector. How does the set of flagged points change?',
          hint: 'Large k averages over more neighbours — outliers need to be far from a larger neighbourhood to be flagged.',
          expectedAnswer: 'At k = 2 only the most extreme outliers flag. At k = 15, more borderline points (e.g. the centre anomaly) get caught. Trade off recall vs false positives.',
        },
        keyTakeaways: [
          'Anomaly detection finds observations that deviate from "normal".',
          'Three families: distance-based, density-based (LOF), and model-based (Isolation Forest, One-class SVM).',
          'Evaluate with precision@k or PR AUC since labels are usually imbalanced.',
        ],
      },
    ],
  },
  {
    id: 'data-science-3',
    title: 'Data Science III · Libraries',
    description: 'Master the four essential Python data science libraries covered in the book — NumPy, Pandas, Matplotlib, and Seaborn — with hands-on simulators at every step.',
    icon: 'Library',
    lessons: [
      {
        id: 'lib-purpose',
        number: 31,
        title: '31. Purpose of Data Science Libraries',
        subtitle: 'Why a rich Python library ecosystem is the single biggest reason data science runs on Python — and what those libraries give you.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '5 mins',
        difficulty: 'Beginner',
        objectives: [
          'State what data science libraries provide and why they matter',
          'Match each library to the type of task it solves',
          'Recognise that the libraries are designed to work together',
        ],
        concepts: [
          {
            title: 'Why libraries exist',
            paragraphs: [
              'The power of Python in data science largely stems from its rich ecosystem of libraries that specialize in various segments of data analysis and machine learning. These libraries simplify tasks that would otherwise require extensive coding and expertise, allowing data scientists to focus more on solving problems and less on the intricacies of algorithm implementation.',
              'They let you skip rewriting the wheel — array math, table manipulation, plotting, and ML models are a one-line import away.',
            ],
            analogy: {
              concept: 'Purpose',
              metaphor: 'A specialist hospital with a cardiologist, a radiologist, and a pharmacist instead of one generalist doctor.',
              why: 'Each specialist does one thing very well, and they hand off patients to each other — the same way NumPy hands arrays to Pandas, which hands tables to Matplotlib.',
            },
          },
          {
            title: 'Four benefits the book calls out',
            paragraphs: [
              'Efficiency: Optimized for performance, these libraries can handle large volumes of data with reasonable speed and minimal resource consumption.',
              'Simplicity: They abstract complex algorithms into simple function calls, making it easier for users of all skill levels to implement sophisticated data science techniques.',
              'Flexibility: Users can easily customize models and workflows to fit their specific data needs and constraints.',
              'Interoperability: Many libraries are built to work well together, using consistent data structures and easy data exchange formats.',
            ],
          },
        ],
        glossary: [
          { term: 'Library', definition: 'A reusable collection of code (functions, classes) that you import into your own program.' },
          { term: 'Interoperability', definition: 'The ability of two or more systems to exchange and use each other’s data.' },
        ],
        realWorldExample: {
          scenario: 'A data scientist analyses a CSV of sales data',
          application: 'Pandas reads the CSV, NumPy runs vectorised aggregates, Matplotlib renders the chart, and scikit-learn fits the model — all in one notebook.',
          impact: 'What would take hundreds of lines of pure Python is reduced to a few high-level calls.',
        },
        playground: {
          type: 'lib-purpose',
          title: 'The library ecosystem at a glance',
          instructions: 'Click any library card on the left to highlight its shape on the radar. Notice how each library has its own strengths — there is no single "best" one.',
          expectedOutcome: 'See that the libraries complement each other along the six axes (Speed, Ease, Stats, ML, Viz, BigData).',
        },
        quiz: [
          {
            id: 'lp-q1',
            question: 'Which of the following is NOT a benefit of data science libraries?',
            options: ['Efficiency', 'Simplicity', 'Flexibility', 'Mandatory static typing'],
            answerIndex: 3,
            explanation: 'The book lists Efficiency, Simplicity, Flexibility, and Interoperability — not static typing.',
          },
          {
            id: 'lp-q2',
            question: 'What does "interoperability" mean in this context?',
            options: [
              'Each library runs in its own virtual machine.',
              'Libraries share data structures and can pass data between each other.',
              'You must convert data manually between libraries.',
              'Libraries are written in different languages and cannot talk.',
            ],
            answerIndex: 1,
            explanation: 'Interoperability is the ability to exchange data — Pandas DataFrames, for instance, are built on NumPy arrays.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, click the "Matplotlib" card. On which axis does it score highest?',
          hint: 'Look at the radar chart — the highlighted polygon stretches furthest along one direction.',
          expectedAnswer: 'Viz (9/10) — Matplotlib is the visualisation foundation.',
        },
        keyTakeaways: [
          'Libraries exist so data scientists can focus on problems, not low-level code.',
          'Four benefits: Efficiency, Simplicity, Flexibility, Interoperability.',
          'The libraries share data structures and are designed to work together.',
        ],
      },
      {
        id: 'lib-overview',
        number: 32,
        title: '32. Key Libraries We Will Explore',
        subtitle: 'A guided tour of the six Python libraries named in the book, grouped by the part of the data science workflow they serve.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Name the six key libraries introduced in the book',
          'Group them by the part of the workflow they serve',
          'Pick the right library for a given task',
        ],
        concepts: [
          {
            title: 'The six key libraries',
            paragraphs: [
              '1. NumPy: This library supports high-performance arrays and matrices, along with a large toolkit of mathematical functions to perform operations on these data structures.',
              '2. Pandas: Essential for structured data operations and manipulations, it provides data structures like DataFrames and Series, with extensive capabilities for indexing, subsetting, slicing, and pivoting data.',
              '3. Matplotlib and Seaborn: These libraries offer powerful tools for creating static, animated, and interactive visualizations in Python.',
              '4. Scikit-learn: A comprehensive library for machine learning, providing simple and efficient tools for data mining and data analysis, built on NumPy, SciPy, and matplotlib.',
              '5. TensorFlow and PyTorch: Popular frameworks for building and training complex neural networks to develop sophisticated machine learning models that can scale to large datasets.',
            ],
            analogy: {
              concept: 'The library stack',
              metaphor: 'A layered cake: NumPy is the sponge, Pandas is the filling, Matplotlib / Seaborn are the icing, and scikit-learn / TF / PyTorch are the candles on top.',
              why: 'Each layer depends on the one below — but each adds a distinct capability.',
            },
          },
        ],
        glossary: [
          { term: 'Workflow', definition: 'The end-to-end sequence of steps that turns raw data into a result.' },
        ],
        realWorldExample: {
          scenario: 'A team building a fraud-detection pipeline',
          application: 'Pandas cleans logs, NumPy computes rolling statistics, Scikit-learn trains the model, Matplotlib plots the ROC, and the team ships the model behind a Flask API.',
          impact: 'Each library plays a specific role — switching any one for a different one (e.g. PyTorch instead of scikit-learn) reshapes only the relevant step.',
        },
        playground: {
          type: 'lib-overview',
          title: 'Pick a library to inspect',
          instructions: 'Click any library on the left. Read its summary and key API surface. Switch between them to build a mental map of what each one gives you.',
          expectedOutcome: 'Be able to name the right library for a numerical, tabular, visual, ML, or deep-learning task.',
        },
        quiz: [
          {
            id: 'lo-q1',
            question: 'Which library is foundational for numerical arrays in Python?',
            options: ['Pandas', 'Matplotlib', 'NumPy', 'Seaborn'],
            answerIndex: 2,
            explanation: 'NumPy is the array foundation; everything else builds on it.',
          },
          {
            id: 'lo-q2',
            question: 'TensorFlow and PyTorch are typically used for:',
            options: ['Tabular data analysis', 'Plotting', 'Deep learning at scale', 'DataFrame manipulation'],
            answerIndex: 2,
            explanation: 'The book calls out TF and PyTorch as frameworks for building and training complex neural networks.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, click "Seaborn". What is its key API surface?',
          hint: 'Read the green panel on the right.',
          expectedAnswer: 'histplot, boxplot, violin, pairplot, heatmap, regplot, catplot — high-level statistical graphics.',
        },
        keyTakeaways: [
          'Six libraries: NumPy, Pandas, Matplotlib, Seaborn, scikit-learn, TF/PyTorch.',
          'NumPy and Pandas are the data layer; Matplotlib and Seaborn the viz layer; scikit-learn and TF/PyTorch the ML layer.',
          'Pick the library by the task, not by familiarity.',
        ],
      },
      {
        id: 'numpy-features',
        number: 33,
        title: '33. NumPy: Key Features',
        subtitle: 'The four reasons NumPy is the bedrock of scientific Python — speed, the ndarray interface, broadcasting, and integration.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'List the four key features of NumPy',
          'Explain why the ndarray interface matters for vectorisation',
          'Describe broadcasting and when it saves you from writing loops',
        ],
        concepts: [
          {
            title: 'Efficiency',
            paragraphs: [
              'NumPy is implemented in C and uses optimized libraries like BLAS (Basic Linear Algebra Subprograms) and LAPACK (Linear Algebra Package) to ensure efficient computations.',
              'The result: array operations in NumPy can be 10–100× faster than the equivalent Python loop, because the heavy lifting happens in compiled code.',
            ],
          },
          {
            title: 'Array interface (ndarray)',
            paragraphs: [
              'NumPy arrays (ndarrays) provide a fast and flexible container for large datasets in Python. Arrays enable mathematical operations to be vectorized, which eliminates the need for slow Python loops.',
              'An ndarray is a fixed-type, fixed-size, multidimensional container — think of a typed list-of-lists that supports element-wise arithmetic.',
            ],
            analogy: {
              concept: 'ndarray',
              metaphor: 'A tray of ice-cube moulds — every slot holds the same shape, so you can shake, flip, or freeze the whole tray in one motion.',
              why: 'Because every "slot" is the same type and the same shape, NumPy can operate on the whole tray in a single low-level call.',
            },
            codeSnippet: {
              language: 'python',
              code: 'import numpy as np\na = np.array([1, 2, 3])\nprint(a * 2)   # [2 4 6]   — vectorised, no loop',
            },
          },
          {
            title: 'Broadcasting',
            paragraphs: [
              'NumPy can handle arrays of different shapes during arithmetic operations which makes it flexible and powerful when performing matrix manipulations.',
              'When you add a (3, 1) array to a (1, 4) array, NumPy stretches both to (3, 4) in memory, computes the sum, and returns the result without ever copying data.',
            ],
          },
          {
            title: 'Integration',
            paragraphs: [
              'It is seamlessly integrated into many other Python data science libraries, making it the base for operations in libraries such as Pandas, SciPy, and scikit-learn.',
              'Every column of a Pandas DataFrame is a NumPy array under the hood — and scikit-learn estimators expect NumPy arrays as input.',
            ],
          },
        ],
        glossary: [
          { term: 'ndarray', definition: 'NumPy’s N-dimensional array object — the core data structure.' },
          { term: 'Vectorisation', definition: 'Applying an operation to a whole array at once instead of element-by-element.' },
          { term: 'Broadcasting', definition: 'NumPy’s rules for stretching arrays of compatible shapes during arithmetic.' },
        ],
        realWorldExample: {
          scenario: 'A 10-million-row CSV',
          application: 'Loaded into a Pandas DataFrame, every column is an ndarray. A vectorised operation (e.g. df["price"] * 1.2) runs in milliseconds instead of minutes.',
          impact: 'The "Python is slow" reputation evaporates when you stay inside NumPy/Pandas.',
        },
        playground: {
          type: 'numpy-features',
          title: 'See the four features ranked',
          instructions: 'The bar chart on the left shows an illustrative score for each of the four features. Click a feature on the right to read its description from the book.',
          expectedOutcome: 'Be able to name the four key features and a one-sentence reason each is important.',
        },
        quiz: [
          {
            id: 'nf-q1',
            question: 'Which libraries does NumPy use under the hood for fast linear algebra?',
            options: ['NumPy is pure Python.', 'BLAS and LAPACK (C libraries)', 'TensorFlow', 'Pandas'],
            answerIndex: 1,
            explanation: 'BLAS and LAPACK are the standard low-level linear-algebra libraries that NumPy delegates to.',
          },
          {
            id: 'nf-q2',
            question: 'What does "vectorisation" mean?',
            options: [
              'Drawing a vector graphic.',
              'Performing an operation on a whole array in one call instead of looping.',
              'Adding a bias to a model.',
              'Sorting in vector order.',
            ],
            answerIndex: 1,
            explanation: 'Vectorisation eliminates the need for slow Python loops by pushing the work into C.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, click "Broadcasting" in the list. In your own words, write down what it does.',
          hint: 'Think about how arrays of different shapes can still be combined.',
          expectedAnswer: 'Broadcasting lets NumPy perform arithmetic on arrays of different shapes by virtually stretching the smaller array — without copying data.',
        },
        keyTakeaways: [
          'NumPy is fast because it is implemented in C and uses BLAS / LAPACK.',
          'The ndarray is the universal array interface in scientific Python.',
          'Broadcasting is what lets you write a*b without thinking about shape.',
        ],
      },
      {
        id: 'numpy-create',
        number: 34,
        title: '34. NumPy: Creating Arrays',
        subtitle: 'Six array constructors you will use every day — array, zeros, ones, arange, eye, and linspace.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '7 mins',
        difficulty: 'Beginner',
        objectives: [
          'Create arrays from Python lists, zeros, ones, ranges, identity matrices, and evenly-spaced points',
          'Read the shape, ndim, and size of an array',
          'Pick the right constructor for the job',
        ],
        concepts: [
          {
            title: 'np.array — from a Python list',
            paragraphs: [
              'Create a simple one-dimensional array: a = np.array([1, 2, 3])',
              'Create a two-dimensional array: b = np.array([[1, 2, 3], [4, 5, 6]])',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import numpy as np\na = np.array([1, 2, 3])\nb = np.array([[1, 2, 3], [4, 5, 6]])',
            },
          },
          {
            title: 'zeros, ones, arange',
            paragraphs: [
              'Create an array of zeros: c = np.zeros((2, 3))',
              'Create an array of ones: d = np.ones((2, 3))',
              'Create an array with a range of elements: e = np.arange(10)',
            ],
          },
          {
            title: 'eye, linspace, identity',
            paragraphs: [
              'Create an identity matrix: f = np.eye(3)',
              'A close cousin you will use a lot: np.linspace(0, 1, 5) gives five evenly-spaced points between 0 and 1 — perfect for the x-axis of a plot.',
            ],
          },
        ],
        glossary: [
          { term: 'Constructor', definition: 'A function that builds and returns a new object (here, a new ndarray).' },
          { term: 'Identity matrix', definition: 'A square matrix with 1s on the diagonal and 0s elsewhere — the matrix equivalent of the number 1.' },
          { term: 'linspace', definition: 'Evenly-spaced numbers over a specified interval.' },
        ],
        realWorldExample: {
          scenario: 'Setting up a grid for a simulation',
          application: 'np.linspace(0, 10, 100) gives 100 x-coordinates; np.zeros((100, 100)) initialises a 100×100 grid of zeros for a finite-difference solver.',
          impact: 'These two constructors appear in nearly every numerical recipe in Python.',
        },
        playground: {
          type: 'numpy-create',
          title: 'See each constructor produce an array',
          instructions: 'Click each constructor on the left. The grid on the right shows the resulting array. Notice the shape, ndim and number of elements changing.',
          expectedOutcome: 'Be able to predict, given a constructor, what array it produces.',
        },
        quiz: [
          {
            id: 'nc-q1',
            question: 'Which constructor creates an array of evenly-spaced numbers between two endpoints?',
            options: ['np.arange', 'np.linspace', 'np.zeros', 'np.eye'],
            answerIndex: 1,
            explanation: 'np.linspace(start, stop, num) gives num evenly-spaced points including both endpoints.',
          },
          {
            id: 'nc-q2',
            question: 'np.eye(3) produces:',
            options: [
              'A 1-D array [0, 1, 2].',
              'A 3×3 identity matrix (1s on the diagonal, 0s elsewhere).',
              'A 3×3 array of zeros.',
              'A random 3×3 matrix.',
            ],
            answerIndex: 1,
            explanation: 'np.eye(N) returns an N×N identity matrix.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, click "np.eye(3)". What is the shape and ndim?',
          hint: 'Look at the bottom of the right panel.',
          expectedAnswer: 'shape = (3, 3), ndim = 2.',
        },
        keyTakeaways: [
          'np.array wraps a Python list.',
          'zeros and ones build arrays of a fixed fill value.',
          'arange and linspace build numeric sequences; eye builds an identity matrix.',
        ],
      },
      {
        id: 'numpy-ops',
        number: 35,
        title: '35. NumPy: Array Operations, Math & Aggregations',
        subtitle: 'Vectorised arithmetic, universal functions, and reductions — the operations you will run on every array you touch.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '7 mins',
        difficulty: 'Beginner',
        objectives: [
          'Perform element-wise arithmetic on arrays',
          'Multiply matrices with np.dot',
          'Apply sin / exp / sqrt element-wise',
          'Reduce arrays with sum / max / mean',
        ],
        concepts: [
          {
            title: 'Element-wise arithmetic',
            paragraphs: [
              'Element-wise addition: g = a + np.array([1, 2, 3])',
              'Element-wise multiplication: h = a * 2',
              'No Python loop is needed — NumPy applies the operation to every element in one C-level pass.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'a = np.array([1, 2, 3])\ng = a + np.array([1, 2, 3])\nh = a * 2',
            },
          },
          {
            title: 'Matrix multiplication and transpose',
            paragraphs: [
              'Matrix multiplication: i = np.dot(b, np.array([[1, 2], [3, 4], [5, 6]]))',
              'Transpose: j = b.T',
            ],
          },
          {
            title: 'Universal math functions',
            paragraphs: [
              'Sine: k = np.sin(a)',
              'Exponential: l = np.exp(a)',
              'Square root: m = np.sqrt(a)',
              'All of these are "ufuncs" — they apply element-wise, return a new array, and run in compiled C.',
            ],
          },
          {
            title: 'Aggregations',
            paragraphs: [
              'Sum of all elements: n = np.sum(b)',
              'Max element: o = np.max(b)',
              'Mean: p = np.mean(b)',
              'Reductions collapse an array along one or more axes to a single number (or a smaller array).',
            ],
          },
        ],
        glossary: [
          { term: 'ufunc', definition: 'A universal function in NumPy that operates element-wise on arrays.' },
          { term: 'Reduction', definition: 'An operation that collapses an array along an axis (e.g. sum, mean, max).' },
        ],
        realWorldExample: {
          scenario: 'Normalising a column of sensor readings',
          application: 'mean = np.mean(x); std = np.std(x); z = (x - mean) / std — three NumPy calls, no loop.',
          impact: 'The same operation in pure Python is 50–100× slower on a million-row array.',
        },
        playground: {
          type: 'numpy-ops',
          title: 'Try vectorised ops and reductions',
          instructions: 'Drag the scalar multiplier to scale the array. Watch the four reductions (sum / mean / max / min) update. Compare the three math functions (sin, exp, sqrt) in the lower chart.',
          expectedOutcome: 'See that one call replaces a Python loop and that reductions collapse the array to a single number.',
        },
        quiz: [
          {
            id: 'no-q1',
            question: 'Which function applies the sine element-wise to a NumPy array?',
            options: ['math.sin', 'np.sin', 'a.sin', 'array.sin'],
            answerIndex: 1,
            explanation: 'np.sin is the NumPy ufunc — math.sin would only work on a single Python float.',
          },
          {
            id: 'no-q2',
            question: 'np.dot(A, B) computes:',
            options: ['Element-wise product', 'Matrix multiplication', 'Dot product of two 1-D vectors', 'Either matrix multiplication or dot product, depending on shapes'],
            answerIndex: 3,
            explanation: 'np.dot behaves as dot product on 1-D vectors and matrix multiplication on 2-D arrays.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set the scalar multiplier to 0. What is the sum?',
          hint: 'Every element is 0, so the sum is 0 too.',
          expectedAnswer: '0 — multiplying an array of zeros by anything gives zeros, and the sum of zeros is 0.',
        },
        keyTakeaways: [
          'Arithmetic is element-wise by default — write a * 2, not a * 2 in a loop.',
          'ufuncs (sin, exp, sqrt, …) apply element-wise in compiled code.',
          'Reductions (sum / max / mean) collapse arrays along an axis.',
        ],
      },
      {
        id: 'pandas-features',
        number: 36,
        title: '36. Pandas: Key Features',
        subtitle: 'The five reasons Pandas is the most-used Python data library — DataFrames, missing-data handling, alignment, GroupBy, and time series.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Name the two main Pandas data structures',
          'Describe how Pandas handles missing data, alignment, GroupBy, and time series',
          'Pick the right Pandas tool for a given tabular task',
        ],
        concepts: [
          {
            title: 'Data Structures',
            paragraphs: [
              'Pandas provides two main data structures: DataFrame, which is essentially a tabular, spreadsheet-like structure, and Series, a one-dimensional labeled array capable of holding any data type.',
              'The name "Pandas" is derived from "PANel DAta," an econometrics term for datasets that include observations over multiple time periods for the same individuals.',
            ],
            analogy: {
              concept: 'DataFrame vs Series',
              metaphor: 'A spreadsheet is a DataFrame; a single column of that spreadsheet (with the column header as its name) is a Series.',
              why: 'Most operations you do on a DataFrame are really operations on one of its Series columns.',
            },
          },
          {
            title: 'Handling Missing Data',
            paragraphs: [
              'Pandas is equipped to handle missing data using methods that can ignore, remove, or fill missing values.',
              'NaN is the standard missing-value marker; Pandas treats it as a first-class citizen in every operation.',
            ],
          },
          {
            title: 'Data Alignment, Group By, Time Series',
            paragraphs: [
              'Data Alignment: Automatic and explicit data alignment, which prevents common errors resulting from misaligned data in other data processing tools.',
              'Powerful, Flexible Group By Functionality: For aggregating and transforming data efficiently.',
              'Time Series Functionality: Extensive capabilities for working with date and time data, including date range generation and frequency conversion, moving window statistics, moving window linear regressions, date shifting, and lagging.',
            ],
          },
        ],
        glossary: [
          { term: 'DataFrame', definition: 'A 2-D labelled table with columns of potentially different types.' },
          { term: 'Series', definition: 'A 1-D labelled array that can hold any data type.' },
          { term: 'Group By', definition: 'Split-apply-combine: split data by a key, apply an aggregation, combine the results.' },
        ],
        realWorldExample: {
          scenario: 'Analysing monthly sales',
          application: 'A DataFrame holds one row per (store, month) with columns for revenue, units, returns. GroupBy by store gives per-store totals; time-series indexing lets you resample by quarter.',
          impact: 'The same DataFrame answers dozens of questions without re-shaping data.',
        },
        playground: {
          type: 'pandas-features',
          title: 'See the five features ranked',
          instructions: 'The bar chart shows an illustrative score for each of the five Pandas features. Click a feature on the right to read its description.',
          expectedOutcome: 'Be able to name the five features and give a one-sentence reason each is important.',
        },
        quiz: [
          {
            id: 'paf-q1',
            question: 'Pandas gets its name from:',
            options: ['The animal', '"Panel Data" (an econometrics term)', 'A Python module', 'A library author'],
            answerIndex: 1,
            explanation: 'The name derives from "PANel DAta", referring to multi-period datasets for the same entities.',
          },
          {
            id: 'paf-q2',
            question: 'Which is a 1-D labelled array?',
            options: ['DataFrame', 'Series', 'ndarray', 'ndarray + index'],
            answerIndex: 1,
            explanation: 'A Series is Pandas’s 1-D labelled structure. A DataFrame is 2-D.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, click "Time Series". What three things does the book say it can do?',
          hint: 'Read the green panel on the right.',
          expectedAnswer: 'Date range generation, frequency conversion, moving window statistics (plus date shifting and lagging).',
        },
        keyTakeaways: [
          'DataFrame is the tabular workhorse; Series is one labelled column.',
          'Pandas treats NaN as a first-class value.',
          'GroupBy and time-series support are what make Pandas a true data-analysis library.',
        ],
      },
      {
        id: 'pandas-create-view',
        number: 37,
        title: '37. Pandas: Creating DataFrames & Viewing Data',
        subtitle: 'Build a DataFrame from a Python dict, build a Series, and use head / tail / index / columns / to_numpy to peek inside.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '7 mins',
        difficulty: 'Beginner',
        objectives: [
          'Build a DataFrame from a dict and a Series from a list',
          'Use head, tail, index, columns and to_numpy to inspect a DataFrame',
          'Recognise that every DataFrame column is a Series',
        ],
        concepts: [
          {
            title: 'Creating a DataFrame from a dictionary',
            paragraphs: [
              'df = pd.DataFrame({\n  "A": [1, 2, np.nan],\n  "B": pd.Timestamp("20230101"),\n  "C": pd.Series(1, index=list(range(3)), dtype="float32"),\n  "D": np.array([3] * 3, dtype="int32"),\n  "E": pd.Categorical(["test", "train", "test"]),\n  "F": "foo"\n})',
              'A dict-of-columns is the most common way to build a DataFrame in code; each key becomes a column name.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n  "A": [1, 2, np.nan],\n  "B": pd.Timestamp("20230101"),\n  "C": pd.Series(1, index=list(range(3)), dtype="float32"),\n  "D": np.array([3] * 3, dtype="int32"),\n  "E": pd.Categorical(["test", "train", "test"]),\n  "F": "foo"\n})',
            },
          },
          {
            title: 'Creating a Series',
            paragraphs: [
              's = pd.Series([1, 3, 5, np.nan, 6, 8])',
              'A Series is a single column with an index — the foundation of a DataFrame.',
            ],
          },
          {
            title: 'Viewing the data',
            paragraphs: [
              'Viewing the top and bottom rows of the frame: df.head(), df.tail(3).',
              'Display the index, columns, and the underlying numpy data: df.index, df.columns, df.to_numpy().',
            ],
          },
        ],
        glossary: [
          { term: 'Timestamp', definition: 'A Pandas type representing a single point in time, interoperable with NumPy datetime64.' },
          { term: 'Categorical', definition: 'A Pandas type for variables that take a small, fixed set of values — saves memory and enables ordering.' },
        ],
        realWorldExample: {
          scenario: 'Loading a CSV into a DataFrame',
          application: 'df = pd.read_csv("sales.csv") gives you a DataFrame ready for head, describe, groupby, and plot.',
          impact: 'Most Pandas work in the real world starts with a CSV or SQL table that becomes a DataFrame.',
        },
        playground: {
          type: 'pandas-create-view',
          title: 'See head / tail / meta',
          instructions: 'Click each viewing helper on the left. The right panel shows the resulting slice of the table or the index / columns / numpy dump.',
          expectedOutcome: 'Be comfortable peeking at a new DataFrame with head and tail, and pulling metadata with index / columns / to_numpy.',
        },
        quiz: [
          {
            id: 'pcv-q1',
            question: 'How do you see the last 3 rows of a DataFrame?',
            options: ['df.head(3)', 'df.tail(3)', 'df.last(3)', 'df[-3]'],
            answerIndex: 1,
            explanation: 'df.tail(n) returns the last n rows.',
          },
          {
            id: 'pcv-q2',
            question: 'What does df.to_numpy() return?',
            options: [
              'A list of dicts.',
              'A NumPy ndarray of the underlying data.',
              'A new DataFrame.',
              'A pandas Series.',
            ],
            answerIndex: 1,
            explanation: 'to_numpy() returns the data as a 2-D ndarray — useful for handing the data to scikit-learn or a NumPy function.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, click "df.index / columns / to_numpy()". What shape does to_numpy return for a 3-row DataFrame with 4 columns?',
          hint: 'Rows × columns.',
          expectedAnswer: '(3, 4).',
        },
        keyTakeaways: [
          'Build a DataFrame from a dict of columns or a 2-D ndarray.',
          'Use head / tail for a quick peek, and index / columns / to_numpy for metadata.',
          'Every DataFrame column is a Series.',
        ],
      },
      {
        id: 'pandas-select',
        number: 38,
        title: '38. Pandas: Data Selection & Indexing',
        subtitle: 'Pick columns with [], slice rows, label-select with .loc, position-select with .iloc, and mask with a boolean Series.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '7 mins',
        difficulty: 'Beginner',
        objectives: [
          'Select a single column and slice rows with []',
          'Use .loc for label-based and .iloc for position-based selection',
          'Filter rows with a boolean mask',
        ],
        concepts: [
          {
            title: 'Column, slice, label, position',
            paragraphs: [
              'Selecting a single column, which yields a Series: df["A"]',
              'Selecting via [], which slices the rows: df[0:3]',
              'Selection by label: df.loc[:, ["A", "B"]]',
              'Selection by position: df.iloc[3]',
            ],
            codeSnippet: {
              language: 'python',
              code: 'df["A"]                  # Series\ndf[0:3]                 # first 3 rows\ndf.loc[:, ["A", "B"]]    # by label\ndf.iloc[3]               # by position',
            },
          },
          {
            title: 'Boolean indexing',
            paragraphs: [
              'Boolean indexing: df[df["A"] > 1]',
              'A boolean Series on the right of the brackets keeps only the rows where the condition is True.',
            ],
          },
        ],
        glossary: [
          { term: 'Label', definition: 'The value of the index on a row or column — like a dict key.' },
          { term: 'Position', definition: 'The integer offset from 0 in the underlying NumPy storage.' },
          { term: 'Boolean mask', definition: 'A Series of True/False values used to filter rows.' },
        ],
        realWorldExample: {
          scenario: 'Subsetting a sales table by date',
          application: 'recent = df[df["date"] >= "2023-01-01"] — boolean mask, all in one line.',
          impact: 'Boolean masking is the most common selection pattern in everyday Pandas work.',
        },
        playground: {
          type: 'pandas-select',
          title: 'Switch selection styles',
          instructions: 'Click each selection style on the left. The right panel shows the resulting Series or sub-DataFrame.',
          expectedOutcome: 'Know which style to reach for: column, slice, loc, iloc, or boolean mask.',
        },
        quiz: [
          {
            id: 'ps-q1',
            question: 'df.loc[:, ["A", "B"]] selects:',
            options: [
              'The first two rows.',
              'The columns named A and B, all rows.',
              'The rows where A equals B.',
              'Cells at integer positions 0 and 1.',
            ],
            answerIndex: 1,
            explanation: '.loc[row_labels, column_labels] — the colon means "all rows".',
          },
          {
            id: 'ps-q2',
            question: 'df.iloc[3] returns:',
            options: [
              'The row whose label is 3.',
              'The 4th row by position (index 3).',
              'The first 3 rows.',
              'A boolean Series.',
            ],
            answerIndex: 1,
            explanation: '.iloc is purely positional — iloc[3] is the row at integer position 3.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, click "df[df["A"] > 1]". Which rows remain?',
          hint: 'NaN is not greater than 1, so missing-A rows are dropped.',
          expectedAnswer: 'Only the rows with A = 2 and A = 5.',
        },
        keyTakeaways: [
          'df["col"] returns a Series; df[0:n] slices rows.',
          '.loc is by label, .iloc is by position.',
          'Boolean masks are the most common way to filter rows.',
        ],
      },
      {
        id: 'pandas-missing',
        number: 39,
        title: '39. Pandas: Handling Missing Data',
        subtitle: 'Three ways to deal with NaN — drop the row, fill the value, or add an indicator column and impute.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Drop rows with missing values using dropna',
          'Fill missing values with a constant using fillna',
          'Use isna to build a missing-value indicator',
        ],
        concepts: [
          {
            title: 'Three primitives',
            paragraphs: [
              'Drop any rows with missing data: df.dropna(how="any")',
              'Filling missing data: df.fillna(value=5)',
              'Boolean mask where data is missing: df.isna()',
            ],
            codeSnippet: {
              language: 'python',
              code: 'df.dropna(how="any")      # drop rows with NaN\ndf.fillna(value=5)         # fill NaN with 5\ndf.isna()                  # True/False mask of NaNs',
            },
          },
        ],
        glossary: [
          { term: 'NaN', definition: 'Not-a-Number — Pandas’s standard marker for missing data.' },
          { term: 'Imputation', definition: 'Replacing missing values with substituted estimates.' },
        ],
        realWorldExample: {
          scenario: 'A customer table where some phone numbers are missing',
          application: 'Either drop those rows (losing the customer) or fill with a placeholder like "UNKNOWN" and add a "phone_missing" indicator for downstream filtering.',
          impact: 'The choice between drop, fill, and indicator changes both the dataset shape and what the model can learn.',
        },
        playground: {
          type: 'pandas-missing',
          title: 'Compare drop, fill, indicator',
          instructions: 'Click each strategy on the left. The right panel shows the resulting table. Toggle the fill value with the buttons.',
          expectedOutcome: 'See that dropna reduces row count, fillna replaces values, and the indicator adds a new column that flags imputed cells.',
        },
        quiz: [
          {
            id: 'pm-q1',
            question: 'What does df.fillna(0) do?',
            options: [
              'Drops rows with NaN.',
              'Replaces every NaN in the DataFrame with 0.',
              'Returns a boolean mask of NaNs.',
              'Counts the NaNs.',
            ],
            answerIndex: 1,
            explanation: 'fillna(value) replaces NaN with the given value (or a dict of per-column values).',
          },
          {
            id: 'pm-q2',
            question: 'df.isna() returns:',
            options: ['A count of NaNs', 'A boolean DataFrame the same shape as df', 'A list of column names', 'The first row'],
            answerIndex: 1,
            explanation: 'isna() returns True where the value is NaN, False otherwise — same shape as the input.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, pick "Impute + indicator" with fill = 0. What is the value in the A_was_missing column for the row that had NaN in A?',
          hint: 'Look at the rightmost column.',
          expectedAnswer: '1 (True) for the previously missing rows, 0 (False) for the others.',
        },
        keyTakeaways: [
          'dropna removes rows; fillna replaces values; isna exposes the mask.',
          'An indicator column captures the fact that a value was missing, which can itself be informative.',
          'The choice between strategies changes the data — and the model — in different ways.',
        ],
      },
      {
        id: 'pandas-operations',
        number: 40,
        title: '40. Pandas: Operations, Apply & String Methods',
        subtitle: 'Compute descriptive statistics, apply NumPy functions element-wise, and run string ops on text columns.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Compute descriptive statistics with .mean()',
          'Apply any function row- or column-wise with .apply()',
          'Run string methods on a text column with .str',
        ],
        concepts: [
          {
            title: 'Descriptive statistic',
            paragraphs: [
              'Performing a descriptive statistic: df.mean()',
              'df.mean() (and .sum, .std, .min, .max, .median, …) reduce each numeric column to a single number.',
            ],
          },
          {
            title: 'Apply',
            paragraphs: [
              'Applying functions: df.apply(np.cumsum)',
              'apply takes a function and calls it on each column (or each row if axis=1).',
            ],
          },
          {
            title: 'String methods',
            paragraphs: [
              'String methods: df["E"] = df["E"].str.upper()',
              'The .str accessor on a text column gives you the same methods you would call on a Python string — but vectorised.',
            ],
          },
        ],
        glossary: [
          { term: 'Accessor', definition: 'A Pandas attribute (like .str, .dt, .cat) that exposes typed methods for a Series.' },
        ],
        realWorldExample: {
          scenario: 'Cleaning free-text category names',
          application: 'df["category"] = df["category"].str.strip().str.lower() — trims whitespace and normalises case in one chained call.',
          impact: 'String methods turn messy text columns into clean, comparable categories with a single line.',
        },
        playground: {
          type: 'pandas-operations',
          title: 'See mean, cumsum, and upper() in action',
          instructions: 'Click each operation on the left. The right panel shows the result: a single number (mean), a running sum (cumsum), or uppercased words.',
          expectedOutcome: 'Be able to predict which operation produces which output, and to chain .str methods when cleaning text.',
        },
        quiz: [
          {
            id: 'po-q1',
            question: 'df.apply(np.cumsum) computes:',
            options: [
              'The total of the whole DataFrame.',
              'The cumulative sum, applied per column.',
              'The mean of each column.',
              'A sorted copy of the DataFrame.',
            ],
            answerIndex: 1,
            explanation: 'apply passes each column to np.cumsum, which returns the running total.',
          },
          {
            id: 'po-q2',
            question: 'df["x"].str.upper() does what?',
            options: [
              'Sorts the column.',
              'Replaces each value with its uppercase version.',
              'Removes whitespace.',
              'Converts the column to category dtype.',
            ],
            answerIndex: 1,
            explanation: 'The .str accessor exposes Python string methods, vectorised.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, click "apply(np.cumsum)". What is the last value of the cumsum series for a 3-value input [3, 1, 4]?',
          hint: 'Cumulative sum adds each element to the running total.',
          expectedAnswer: '8 (3 + 1 + 4).',
        },
        keyTakeaways: [
          '.mean() is a reduction; .apply() runs any function; .str runs string methods.',
          'Apply operates per column by default; pass axis=1 to run per row.',
          'The .str accessor is the difference between a Series of strings and a Series of Python str objects.',
        ],
      },
      {
        id: 'pandas-groupby',
        number: 41,
        title: '41. Pandas: GroupBy & Time Series',
        subtitle: 'Split-apply-combine aggregations and Pandas’s first-class date and time support.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '7 mins',
        difficulty: 'Beginner',
        objectives: [
          'Group a DataFrame by a key and aggregate another column',
          'Generate a date range and build a time-indexed Series',
          'Use moving-window statistics on a time series',
        ],
        concepts: [
          {
            title: 'Grouping and then applying a function like sum',
            paragraphs: [
              'Grouping and then applying a function like sum: df.groupby("A").sum()',
              'This splits the rows by the unique values of A, sums the numeric columns in each group, and combines the results back into a small DataFrame.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'df = pd.DataFrame({\n  "A": ["foo", "bar", "foo", "bar", "foo", "bar", "foo", "foo"],\n  "B": ["one", "one", "two", "three", "two", "two", "one", "three"],\n  "C": np.random.randn(8),\n  "D": np.random.randn(8)\n})\ndf.groupby("A").sum()',
            },
          },
          {
            title: 'Time Series',
            paragraphs: [
              'Creating a time series data: ts = pd.date_range("1/1/2023", periods=100); ts = pd.Series(np.random.randn(len(ts)), index=ts)',
              'A DatetimeIndex unlocks resampling, rolling windows, and time-based selection.',
            ],
          },
        ],
        glossary: [
          { term: 'DatetimeIndex', definition: 'A Pandas Index made of timestamps — enables time-based slicing and resampling.' },
          { term: 'Resampling', definition: 'Changing the frequency of a time series (e.g. daily → monthly) and aggregating to fit.' },
        ],
        realWorldExample: {
          scenario: 'Monthly sales by region',
          application: 'df.groupby(["region", pd.Grouper(key="date", freq="M")])["revenue"].sum() — a two-level groupby producing region × month totals.',
          impact: 'GroupBy + time indexing is the bread-and-butter of business analytics.',
        },
        playground: {
          type: 'pandas-groupby',
          title: 'See groupby and time series side by side',
          instructions: 'Switch between the two tabs. The bar chart on the right shows sum of C and D grouped by A; the line chart shows 100 days of synthetic data indexed by date_range.',
          expectedOutcome: 'Be able to write a groupby + aggregation in one chained call, and to build a time-indexed Series from date_range.',
        },
        quiz: [
          {
            id: 'pgb-q1',
            question: 'df.groupby("A").sum() computes:',
            options: [
              'The sum of every column in the whole DataFrame.',
              'The sum of numeric columns within each group defined by A.',
              'The number of unique values in A.',
              'A sorted DataFrame.',
            ],
            answerIndex: 1,
            explanation: 'Split by A, sum the numeric columns within each group, combine.',
          },
          {
            id: 'pgb-q2',
            question: 'pd.date_range("2023-01-01", periods=100) returns:',
            options: [
              'A list of Python datetime objects.',
              'A DatetimeIndex of 100 daily timestamps.',
              'A DataFrame with 100 rows.',
              'A Series of random numbers.',
            ],
            answerIndex: 1,
            explanation: 'date_range with periods=100 gives 100 consecutive daily timestamps by default.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, look at the time-series chart. The data oscillates with a period of roughly how many days?',
          hint: 'Count the number of peaks you can see in the 100-day series.',
          expectedAnswer: 'Around 16–17 days (a sin wave with period ≈ 16 in the simulator).',
        },
        keyTakeaways: [
          'GroupBy is split-apply-combine; chain with .sum, .mean, .agg.',
          'pd.date_range builds a DatetimeIndex; assigning it to a Series unlocks time-series ops.',
          'GroupBy + time indexing is the backbone of business analytics.',
        ],
      },
      {
        id: 'mpl-line',
        number: 42,
        title: '42. Matplotlib: Overview & Line Plots',
        subtitle: 'Matplotlib is the foundation of Python plotting — and the line plot is the most basic, most-used chart.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Describe what Matplotlib is and when to use it',
          'Build a labelled line plot with title, xlabel, ylabel, and grid',
          'Use a line plot for time-series and trend visualisation',
        ],
        concepts: [
          {
            title: 'What Matplotlib is',
            paragraphs: [
              'Matplotlib is a powerful plotting library in Python that offers an extensive range of plotting functions. It is designed for creating static, interactive, and animated visualizations in Python.',
              'Matplotlib makes it easy to produce quality figures in a variety of formats, including full support for alpha blending, a wide range of file formats, and suitable for use in a variety of environments, from Python scripts to web application servers.',
            ],
            analogy: {
              concept: 'Matplotlib',
              metaphor: 'A Swiss Army knife for plotting — every kind of chart is in there, even if some of the more advanced tools take a little folding.',
              why: 'Matplotlib can make almost any 2-D (and some 3-D) figure you can imagine, and it is the foundation beneath Seaborn.',
            },
          },
          {
            title: 'Line plots — the most basic plot',
            paragraphs: [
              'The most basic plot, useful for showing trends over intervals.',
              'Example use: time series analysis, economic data trends.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.linspace(0, 10, 100)\ny = np.sin(x)\nplt.plot(x, y)\nplt.title("Sine Wave")\nplt.xlabel("Time")\nplt.ylabel("Amplitude")\nplt.grid(True)\nplt.show()',
            },
          },
        ],
        glossary: [
          { term: 'Figure', definition: 'The top-level Matplotlib object — the canvas on which one or more Axes are drawn.' },
          { term: 'Axes', definition: 'A single plot within a figure (yes, the spelling is "Axes", not "axis").' },
        ],
        realWorldExample: {
          scenario: 'Plotting daily active users over a year',
          application: 'A single plt.plot() call with a date index and a count column gives a publication-ready line chart with a few extra lines for labels.',
          impact: 'The line plot is the default first visualisation in any exploratory data analysis.',
        },
        playground: {
          type: 'mpl-line',
          title: 'Build your own sine wave',
          instructions: 'Drag the frequency and amplitude sliders. The chart updates to match. The code panel on the left shows the exact Matplotlib call you would write.',
          expectedOutcome: 'Be able to read a Matplotlib line-plot snippet and predict what it draws.',
        },
        quiz: [
          {
            id: 'ml-q1',
            question: 'Which line of code is required to add a title to a Matplotlib plot?',
            options: ['plt.title("Sine Wave")', 'plt.label("Sine Wave")', 'plt.set_title = "Sine Wave"', 'plt.name("Sine Wave")'],
            answerIndex: 0,
            explanation: 'plt.title(text) sets the title of the current Axes.',
          },
          {
            id: 'ml-q2',
            question: 'A line plot is best for:',
            options: [
              'Showing the distribution of one variable.',
              'Comparing categorical counts.',
              'Showing a trend over a continuous interval (usually time).',
              'Showing proportions of categories.',
            ],
            answerIndex: 2,
            explanation: 'Line plots shine when the x-axis is continuous — typically time.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set frequency to 1.0 and amplitude to 1.0. How many full waves do you see between x=0 and x=10?',
          hint: 'sin(2π·x / T) has period T. Here f = 1 / (2π), so T = 2π ≈ 6.28.',
          expectedAnswer: 'About 1.6 full waves — sin(x) has period 2π ≈ 6.28, so 10 / 6.28 ≈ 1.6.',
        },
        keyTakeaways: [
          'Matplotlib is the foundation of Python plotting.',
          'plt.plot(x, y) is the simplest line plot; add title, xlabel, ylabel, and grid for a finished chart.',
          'Line plots are for trends over a continuous (often time) x-axis.',
        ],
      },
      {
        id: 'mpl-basics',
        number: 43,
        title: '43. Matplotlib: Scatter, Histogram & Bar',
        subtitle: 'Three more essential Matplotlib charts — the relationship chart, the distribution chart, and the categorical comparison.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '7 mins',
        difficulty: 'Beginner',
        objectives: [
          'Make a scatter plot to show the relationship between two variables',
          'Make a histogram to visualise a distribution',
          'Make a bar chart to compare quantities across categories',
        ],
        concepts: [
          {
            title: 'Scatter plot',
            paragraphs: [
              'A scatter plot is useful for showing the relationship between two variables — height vs weight, ad spend vs revenue, etc.',
              'x = np.random.rand(50); y = np.random.rand(50); plt.scatter(x, y); plt.title("Random Scatter Plot"); plt.xlabel("X"); plt.ylabel("Y"); plt.show()',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import matplotlib.pyplot as plt\nx = np.random.rand(50)\ny = np.random.rand(50)\nplt.scatter(x, y)\nplt.title("Random Scatter Plot")\nplt.xlabel("X")\nplt.ylabel("Y")\nplt.show()',
            },
          },
          {
            title: 'Histogram',
            paragraphs: [
              'A histogram is useful for visualizing the distribution of a dataset.',
              'Example use: understanding the frequency of variables.',
              'data = np.random.randn(1000); plt.hist(data, bins=30, alpha=0.5, color="g"); plt.title("Histogram"); plt.show()',
            ],
          },
          {
            title: 'Bar chart',
            paragraphs: [
              'A bar chart is ideal for comparisons between discrete groups.',
              'Example use: comparing the size of different groups or categories.',
              'categories = ["Apples", "Bananas", "Cherries"]; values = [15, 30, 7]; plt.bar(categories, values); plt.title("Fruit Comparison"); plt.xlabel("Fruit"); plt.ylabel("Quantity"); plt.show()',
            ],
          },
        ],
        glossary: [
          { term: 'Bin', definition: 'A bucket in a histogram — counts how many values fall into a given interval.' },
          { term: 'alpha', definition: 'A transparency argument in Matplotlib, between 0 (invisible) and 1 (opaque).' },
        ],
        realWorldExample: {
          scenario: 'Sales reporting dashboard',
          application: 'Scatter (price vs units sold) + histogram (distribution of order sizes) + bar (sales by region) in one report.',
          impact: 'These three charts cover ~80% of business-data questions.',
        },
        playground: {
          type: 'mpl-basics',
          title: 'See scatter, hist, and bar in one panel',
          instructions: 'Click each chart type on the left. The right panel renders the same kind of chart the book shows in its examples.',
          expectedOutcome: 'Be able to pick scatter / hist / bar by the question you are asking.',
        },
        quiz: [
          {
            id: 'mb-q1',
            question: 'Which chart is best for showing the distribution of one variable?',
            options: ['Scatter', 'Histogram', 'Line', 'Bar'],
            answerIndex: 1,
            explanation: 'Histograms bin the values and show their frequency.',
          },
          {
            id: 'mb-q2',
            question: 'A bar chart is best for:',
            options: [
              'Showing trends over time.',
              'Comparing discrete categories.',
              'Showing the relationship between two variables.',
              'Showing a distribution.',
            ],
            answerIndex: 1,
            explanation: 'Bar charts compare categories (sales by region, counts by group).',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, click "Bar chart". What does the y-axis represent?',
          hint: 'The book uses the bar chart to compare quantities.',
          expectedAnswer: 'Quantity (the value associated with each category).',
        },
        keyTakeaways: [
          'Scatter shows a relationship between two variables.',
          'Histogram shows a distribution.',
          'Bar compares discrete categories.',
        ],
      },
      {
        id: 'mpl-stats',
        number: 44,
        title: '44. Matplotlib: Pie, Box & Heatmap',
        subtitle: 'The three "summary" charts — proportions, distributions with outliers, and matrix-as-color.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '7 mins',
        difficulty: 'Beginner',
        objectives: [
          'Make a pie chart to show proportions',
          'Make a box plot to compare distributions and spot outliers',
          'Make a heatmap to visualise a matrix as colors',
        ],
        concepts: [
          {
            title: 'Pie chart',
            paragraphs: [
              'A pie chart shows the proportions of categories as slices of a pie; best used when there are few categories.',
              'Example use: displaying market share or survey data.',
              'labels = ["Frogs", "Hogs", "Dogs", "Logs"]; sizes = [15, 30, 45, 10]; plt.pie(sizes, labels=labels, autopct="%1.1f%%"); plt.axis("equal"); plt.show()',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import matplotlib.pyplot as plt\nlabels = ["Frogs", "Hogs", "Dogs", "Logs"]\nsizes  = [15, 30, 45, 10]\nplt.pie(sizes, labels=labels, autopct="%1.1f%%")\nplt.axis("equal")  # equal aspect ensures a circle\nplt.show()',
            },
          },
          {
            title: 'Box plot',
            paragraphs: [
              'A box plot is used for depicting groups of numerical data through their quartiles.',
              'Example use: spotting outliers, examining data spread.',
              'data = [np.random.normal(0, std, 100) for std in range(1, 4)]; plt.boxplot(data, vert=True, patch_artist=True); plt.title("Box Plot"); plt.show()',
            ],
          },
          {
            title: 'Heatmap',
            paragraphs: [
              'A heatmap is a visual representation of data where the individual values contained in a matrix are represented as colors.',
              'Example use: correlation matrices, flight frequency data.',
              'matrix = np.random.rand(10, 10); plt.imshow(matrix, cmap="hot", interpolation="nearest"); plt.title("Heatmap"); plt.colorbar(); plt.show()',
            ],
          },
        ],
        glossary: [
          { term: 'Quartile', definition: 'A value that splits sorted data into four equal parts (Q1, Q2 = median, Q3).' },
          { term: 'cmap', definition: 'Colour map — the gradient that maps a numeric value to a color in plt.imshow.' },
        ],
        realWorldExample: {
          scenario: 'Quarterly financial dashboard',
          application: 'Pie: revenue mix by product line. Box: quarterly returns vs benchmark. Heatmap: correlations between sector returns.',
          impact: 'A single dashboard with these three charts covers the most common executive questions.',
        },
        playground: {
          type: 'mpl-stats',
          title: 'Pie, box, and heatmap side by side',
          instructions: 'Click each tab to switch chart. Notice how each one summarises a different kind of information.',
          expectedOutcome: 'Be able to choose pie / box / heatmap by the structure of the data.',
        },
        quiz: [
          {
            id: 'ms-q1',
            question: 'A pie chart is best for:',
            options: [
              'Showing a trend over time.',
              'Showing proportions when there are few categories.',
              'Showing a relationship between two variables.',
              'Showing a distribution.',
            ],
            answerIndex: 1,
            explanation: 'Pie charts work for 2–5 categories; beyond that, a bar chart is clearer.',
          },
          {
            id: 'ms-q2',
            question: 'plt.imshow is used to draw a:',
            options: ['Histogram', 'Heatmap', 'Scatter', 'Bar'],
            answerIndex: 1,
            explanation: 'imshow treats a 2-D array as an image — the standard way to draw a heatmap.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, switch to the "Heatmap" tab. What does each cell of the grid represent?',
          hint: 'The book uses heatmaps for correlation matrices and flight data.',
          expectedAnswer: 'One entry of a 2-D matrix — the color encodes its numeric value.',
        },
        keyTakeaways: [
          'Pie = proportions; Box = distribution & outliers; Heatmap = matrix as colors.',
          'plt.axis("equal") keeps the pie a circle.',
          'plt.colorbar() adds the legend that decodes the heatmap colors.',
        ],
      },
      {
        id: 'seaborn-dist',
        number: 45,
        title: '45. Seaborn: Overview & Distribution Plots',
        subtitle: 'Seaborn builds on Matplotlib with high-level statistical graphics — starting with the distribution plot.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Describe what Seaborn adds on top of Matplotlib',
          'Draw a histogram with a KDE overlay using sns.histplot',
          'Use sns.kdeplot for a smooth density estimate',
        ],
        concepts: [
          {
            title: 'What Seaborn is',
            paragraphs: [
              'Seaborn is a Python data visualization library based on Matplotlib. It provides a high-level interface for drawing attractive and informative statistical graphics.',
              'Seaborn is designed to work well with pandas data frames, integrating smoothly with the broader PyData ecosystem. Its API is oriented towards intuitive, informative statistical graphics, making complex visualizations more accessible.',
            ],
            analogy: {
              concept: 'Seaborn vs Matplotlib',
              metaphor: 'Seaborn is the restaurant that orders ingredients from the Matplotlib farm and plates them nicely — you eat the same food with less work.',
              why: 'Seaborn handles defaults, legends, and statistical overlays so you write less code and get prettier charts.',
            },
          },
          {
            title: 'Distribution plots',
            paragraphs: [
              'These plots are used to visualize the distribution of data, helping to observe the underlying patterns such as bimodality, skewness, and clustering.',
              'Histogram: Similar to Matplotlib but integrated with kernel density estimation (KDE).',
              'KDE Plot: Visualizes the distribution of a single variable using kernel density estimation.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import seaborn as sns\nimport matplotlib.pyplot as plt\n\ndata = sns.load_dataset("iris")\nsns.histplot(data["sepal_length"], kde=True)\nplt.title("Distribution of Sepal Length")\nplt.show()',
            },
          },
        ],
        glossary: [
          { term: 'KDE', definition: 'Kernel Density Estimate — a smooth curve approximating the probability density of a variable.' },
          { term: 'Bimodality', definition: 'A distribution with two peaks — a strong hint of two sub-populations.' },
        ],
        realWorldExample: {
          scenario: 'Analysing customer purchase amounts',
          application: 'A KDE plot quickly reveals whether spend is concentrated (one peak) or whether two customer segments exist (two peaks).',
          impact: 'Bimodality is often the first hint of an unmet need to segment.',
        },
        playground: {
          type: 'seaborn-dist',
          title: 'Histogram with a KDE overlay',
          instructions: 'Drag the bin slider to change the histogram granularity. Toggle the KDE button to add or hide the smooth density curve.',
          expectedOutcome: 'See how a few bins hide the shape; a KDE reveals it even with few bins.',
        },
        quiz: [
          {
            id: 'sd-q1',
            question: 'What does sns.histplot(data, kde=True) add compared to plt.hist?',
            options: [
              'A line through the bars — a kernel density estimate.',
              'A title by default.',
              'A 3-D effect.',
              'Nothing — they are identical.',
            ],
            answerIndex: 0,
            explanation: 'kde=True overlays a smooth density curve on the histogram.',
          },
          {
            id: 'sd-q2',
            question: 'A bimodal distribution is a hint of:',
            options: [
              'A single homogeneous population.',
              'Two distinct sub-populations.',
              'A linear trend over time.',
              'A missing value.',
            ],
            answerIndex: 1,
            explanation: 'Bimodality — two peaks — typically signals two sub-populations in the data.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set bins = 5 and toggle the KDE on. What does the KDE curve add that the histogram alone misses?',
          hint: 'Look at the shape of the curve vs the height of the bars.',
          expectedAnswer: 'A smooth density estimate that reveals the overall shape (e.g. bimodality or skew) even when the histogram is coarse.',
        },
        keyTakeaways: [
          'Seaborn is a high-level statistical-graphics layer over Matplotlib.',
          'sns.histplot(..., kde=True) is the one-liner for a histogram + KDE.',
          'KDE is the fastest way to spot bimodality and skew.',
        ],
      },
      {
        id: 'seaborn-categorical',
        number: 46,
        title: '46. Seaborn: Categorical, Scatter & Heatmap',
        subtitle: 'Box, violin, pairplot, and correlation heatmap — the four workhorse Seaborn plots.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '7 mins',
        difficulty: 'Beginner',
        objectives: [
          'Use sns.boxplot and sns.violinplot to compare a numeric variable across categories',
          'Use sns.pairplot to visualise pairwise relationships coloured by a category',
          'Use sns.heatmap to draw a correlation matrix',
        ],
        concepts: [
          {
            title: 'Categorical plots',
            paragraphs: [
              'Useful for showing the distribution of a variable among categories.',
              'Box Plot: Shows distributions with quartiles and outliers.',
              'Violin Plot: Combines aspects of box plots and kernel density estimation.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import seaborn as sns\nimport matplotlib.pyplot as plt\n\ndata = sns.load_dataset("iris")\nsns.boxplot(x="species", y="sepal_length", data=data)\nplt.title("Box Plot of Sepal Length by Species")\nplt.show()\n\nsns.violinplot(x="species", y="sepal_length", data=data)\nplt.title("Violin Plot of Sepal Length by Species")\nplt.show()',
            },
          },
          {
            title: 'Scatter plots and Pair Plot',
            paragraphs: [
              'Scatter plots: Ideal for examining the relationship between two numeric variables.',
              'Pair Plot: Visualizes pairwise relationships in a dataset.',
              'sns.pairplot(data, hue="species")',
            ],
          },
          {
            title: 'Heatmaps',
            paragraphs: [
              'Heatmaps are used to visualize matrix-like data and correlations between multiple variables.',
              'numeric_data = data.select_dtypes(include=[np.number]); correlation_matrix = numeric_data.corr(); sns.heatmap(correlation_matrix, annot=True, cmap="coolwarm")',
            ],
          },
        ],
        glossary: [
          { term: 'hue', definition: 'A Seaborn argument that colours each marker by a categorical column.' },
          { term: 'Quartile', definition: 'A value that splits sorted data into four equal parts.' },
        ],
        realWorldExample: {
          scenario: 'Comparing customer spend across regions',
          application: 'A violin plot shows the full distribution per region; a box plot summarises the same data with quartiles; a heatmap shows correlations between spend, frequency, and recency.',
          impact: 'These four plots are the most common outputs of an "exploratory data analysis" notebook.',
        },
        playground: {
          type: 'seaborn-categorical',
          title: 'Box, violin, pairplot, heatmap',
          instructions: 'Switch between the four tabs to see each plot type. The iris-like data has three species — notice how they separate (or don\'t) on each chart.',
          expectedOutcome: 'Match the chart type to the question: spread per category (box), full distribution (violin), all pairs (pairplot), variable-to-variable correlation (heatmap).',
        },
        quiz: [
          {
            id: 'sc-q1',
            question: 'A violin plot combines:',
            options: [
              'A scatter and a histogram.',
              'A box plot and a KDE.',
              'A heatmap and a line plot.',
              'A pie and a bar.',
            ],
            answerIndex: 1,
            explanation: 'A violin plot mirrors a KDE around the box, giving you the full distribution shape plus the quartiles.',
          },
          {
            id: 'sc-q2',
            question: 'sns.pairplot(data, hue="species") does what?',
            options: [
              'Plots one variable.',
              'Plots every numeric pair, coloured by species.',
              'Computes the correlation matrix.',
              'Draws a 3-D scatter.',
            ],
            answerIndex: 1,
            explanation: 'pairplot is a grid of scatter plots, one for every pair of numeric columns, coloured by the hue category.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, switch to "sns.heatmap(corr)". What does a dark red cell mean?',
          hint: 'coolwarm goes from blue (low) to red (high).',
          expectedAnswer: 'A strong positive correlation — close to +1.',
        },
        keyTakeaways: [
          'boxplot: quartiles + outliers per category.',
          'violinplot: full distribution shape per category.',
          'pairplot: every numeric pair at a glance; heatmap: correlation matrix.',
        ],
      },
      {
        id: 'seaborn-regression',
        number: 47,
        title: '47. Seaborn: Regression Plots & Factor (Cat) Plots',
        subtitle: 'Layer a fitted regression line on top of a scatter, and let catplot handle the rest of the categorical plots.',
        pathId: 'data-science-3',
        pathTitle: 'Data Science III · Libraries',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Use sns.regplot to overlay a linear regression fit on a scatter',
          'Use sns.lmplot to fit separate regressions by category',
          'Use sns.catplot for everything else categorical',
        ],
        concepts: [
          {
            title: 'Regression plots',
            paragraphs: [
              'These plots are used to visualize the relationship between two variables and include a regression model fit.',
              'Regplot: Plots data and a linear regression model fit.',
              'sns.regplot(x="sepal_width", y="sepal_length", data=data)',
              'sns.lmplot(x="sepal_width", y="sepal_length", hue="species", data=data)',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import seaborn as sns\ndata = sns.load_dataset("iris")\nsns.regplot(x="sepal_width", y="sepal_length", data=data)\nplt.title("Regression Plot"); plt.show()\n\nsns.lmplot(x="sepal_width", y="sepal_length", hue="species", data=data)\nplt.title("Linear Model Plot"); plt.show()',
            },
          },
          {
            title: 'Factor plots / catplot',
            paragraphs: [
              'Allows you to visualize the interaction of categories with other categorical variables.',
              'sns.catplot(x="species", y="sepal_length", hue="species", kind="bar", data=data)',
              'catplot is a single entry point for many categorical plots — kind can be "bar", "box", "violin", "strip", "swarm", "point", "count".',
            ],
          },
        ],
        glossary: [
          { term: 'regplot', definition: 'A scatter plot with a fitted regression line.' },
          { term: 'lmplot', definition: 'A higher-level regression plot that supports faceting and hue.' },
          { term: 'catplot', definition: 'A catch-all function for categorical plots in Seaborn — kind selects the chart type.' },
        ],
        realWorldExample: {
          scenario: 'Marketing-mix modelling',
          application: 'regplot shows the overall ad-spend-vs-revenue relationship; lmplot with hue shows separate fits for each channel (TV, radio, web).',
          impact: 'Layered regression lines turn a single chart into a comparison of relationships across segments.',
        },
        playground: {
          type: 'seaborn-regression',
          title: 'Regplot and lmplot side by side',
          instructions: 'Switch between the two tabs. The regplot shows one regression line through all points; lmplot shows a separate line for each species. Drag the slope / intercept sliders to see how the simulated data changes.',
          expectedOutcome: 'Be able to read a regression line and explain when to use regplot vs lmplot.',
        },
        quiz: [
          {
            id: 'sr-q1',
            question: 'sns.regplot adds what to a scatter?',
            options: [
              'A title.',
              'A fitted regression line and (optionally) a confidence band.',
              'A KDE curve.',
              'A box plot.',
            ],
            answerIndex: 1,
            explanation: 'regplot fits an OLS line and shows it on top of the scatter.',
          },
          {
            id: 'sr-q2',
            question: 'The hue argument in sns.lmplot does what?',
            options: [
              'Changes the plot type.',
              'Fits and colours a separate regression per category.',
              'Adds error bars.',
              'Sorts the data.',
            ],
            answerIndex: 1,
            explanation: 'hue splits the data by category and draws one line per group.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, switch to the lmplot tab. How many regression lines do you see?',
          hint: 'There are three species in the data.',
          expectedAnswer: 'Three — one per species.',
        },
        keyTakeaways: [
          'regplot overlays a regression line on a single scatter.',
          'lmplot fits separate regressions per category (via hue).',
          'catplot is the catch-all for categorical plots — set kind="box" / "bar" / "violin" etc.',
        ],
      },
    ],
  },
  {
    id: 'data-science-4',
    title: 'Data Science IV · Math & Stats',
    description: 'Master the mathematics and statistics foundations covered in the book — linear algebra, calculus, probability, descriptive and inferential statistics, and Bayesian thinking — with hands-on simulators at every step.',
    icon: 'Sigma',
    lessons: [
      {
        id: 'math-role',
        number: 70,
        title: '70. The Role of Mathematics in Data Science',
        subtitle: 'Why mathematics is the structural framework that every data scientist stands on — modeling, algorithm design, and data transformation.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '5 mins',
        difficulty: 'Beginner',
        objectives: [
          'State the three reasons the book gives for the role of mathematics in data science',
          'Connect each reason to a concrete data-science task',
          'Recognise the topics this part will cover',
        ],
        concepts: [
          {
            title: 'Three reasons mathematics is critical',
            paragraphs: [
              '1. Modeling and Optimization: Many data science techniques involve constructing mathematical models that predict outcomes. These models often require optimization techniques to find the best parameters that fit the data.',
              '2. Algorithm Design: Understanding mathematical principles is essential for designing and improving algorithms that handle data efficiently, especially with large datasets.',
              '3. Data Transformation: Mathematics provides methods for transforming data (e.g., through normalization or principal component analysis) to improve the performance of machine learning algorithms.',
              'This part will cover topics such as linear algebra, calculus, and optimization, which are crucial for understanding machine learning algorithms’ underpinnings.',
            ],
            analogy: {
              concept: 'Mathematics in DS',
              metaphor: 'A foundation poured before a building is raised — the taller the building (model), the deeper the foundation (math) has to be.',
              why: 'The same prediction model behaves very differently depending on whether the engineer understood the math underneath it.',
            },
          },
        ],
        glossary: [
          { term: 'Optimization', definition: 'The process of finding the best parameters of a model according to some objective (e.g. lowest error).' },
          { term: 'Data transformation', definition: 'A mathematical operation applied to data to make it more suitable for modeling — e.g. normalization or PCA.' },
        ],
        realWorldExample: {
          scenario: 'Training a recommendation engine',
          application: 'Matrix factorisation (linear algebra) compresses the user-item matrix, gradient descent (optimisation / calculus) learns the latent factors, and SVD provides the decomposition — all three reasons from the book in one model.',
          impact: 'Without the math, none of these building blocks is explainable — and unexplainable models are unsafe to ship.',
        },
        playground: {
          type: 'math-role',
          title: 'Three reasons at a glance',
          instructions: 'Click each reason on the left. The bar chart shows the reach of each reason across ML workflows.',
          expectedOutcome: 'Recognise that the three reasons are not independent — they reinforce each other in any real model.',
        },
        quiz: [
          {
            id: 'mr-q1',
            question: 'Which of the following is NOT one of the three reasons the book gives for mathematics in data science?',
            options: ['Modeling and Optimization', 'Algorithm Design', 'Data Transformation', 'Catering'],
            answerIndex: 3,
            explanation: 'The book lists exactly three: Modeling and Optimization, Algorithm Design, Data Transformation.',
          },
          {
            id: 'mr-q2',
            question: 'Why is "Data Transformation" a mathematical task?',
            options: [
              'Because it is mostly about typing.',
              'Because methods like normalization and PCA are mathematical operations that change how the data looks to an algorithm.',
              'Because it always requires a database.',
              'Because it is unrelated to the model.',
            ],
            answerIndex: 1,
            explanation: 'Normalization rescales values, PCA rotates the feature space — both are math operations on the data.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, click "Modeling & Optimization". What concrete DS task does the book tie it to?',
          hint: 'Read the green panel on the left.',
          expectedAnswer: 'Constructing mathematical models that predict outcomes and finding the best parameters that fit the data.',
        },
        keyTakeaways: [
          'Mathematics is the structural framework of data science.',
          'The book lists three reasons: Modeling & Optimization, Algorithm Design, Data Transformation.',
          'Linear algebra, calculus, and optimization are the topics this part covers.',
        ],
      },
      {
        id: 'stats-role',
        number: 71,
        title: '71. The Role of Statistics in Data Science',
        subtitle: 'How statistics gives data science its language of uncertainty, inference, and model validation.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '5 mins',
        difficulty: 'Beginner',
        objectives: [
          'Name the three uses of statistics the book highlights',
          'Recognise the four key statistics topics that will follow',
          'Connect each use to a day-to-day DS activity',
        ],
        concepts: [
          {
            title: 'Three uses of statistics',
            paragraphs: [
              '1. Data Analysis: Statistics helps in understanding and interpreting data. It provides tools to describe and summarize data effectively.',
              '2. Inference: Statistical inference allows data scientists to make predictions and decisions from data, accounting for randomness and uncertainty.',
              '3. Model Validation: Through statistical tests, a data scientist can assess the reliability of the models and make informed decisions about which models are best suited for specific tasks.',
            ],
            analogy: {
              concept: 'Statistics in DS',
              metaphor: 'A doctor’s thermometer — the model is the patient, statistics is what tells you whether the patient is actually well.',
              why: 'A model that "looks good" on its training data is not enough; statistics tells you whether the model is reliably well.',
            },
          },
          {
            title: 'Key topics the book will explore',
            paragraphs: [
              'Key topics in statistics that will be explored include probability theory, inferential statistics, hypothesis testing, and Bayesian thinking.',
            ],
          },
        ],
        glossary: [
          { term: 'Statistical inference', definition: 'Drawing conclusions about a population from a sample, with a quantified measure of uncertainty.' },
        ],
        realWorldExample: {
          scenario: 'A/B testing a new product page',
          application: 'Statistics gives the test: p-value for the difference in conversion, confidence interval for the lift, power analysis to know how many visitors you need.',
          impact: 'Without statistics, an A/B test is a coin flip. With it, the test is a defensible business decision.',
        },
        playground: {
          type: 'stats-role',
          title: 'Three uses of statistics',
          instructions: 'Click each use on the left. Read the description and notice the four key topics shown at the bottom of the panel.',
          expectedOutcome: 'Be able to connect "Data Analysis", "Inference" and "Model Validation" to the rest of Part IV.',
        },
        quiz: [
          {
            id: 'sr-q1',
            question: 'Which of these is NOT a use of statistics the book names?',
            options: ['Data Analysis', 'Inference', 'Model Validation', 'Brewing coffee'],
            answerIndex: 3,
            explanation: 'The book lists exactly three: Data Analysis, Inference, Model Validation.',
          },
          {
            id: 'sr-q2',
            question: 'What is "inference" in this context?',
            options: [
              'Making predictions and decisions from data, accounting for randomness and uncertainty.',
              'Choosing colours for a chart.',
              'Saving a file to disk.',
              'Training a neural network directly.',
            ],
            answerIndex: 0,
            explanation: 'Statistical inference is the formal framework for generalising from sample to population, with quantified uncertainty.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, look at the four key topics listed at the bottom of the left panel. Which two are explored in the next several lessons?',
          hint: 'The next lessons are about probability.',
          expectedAnswer: 'Probability theory and hypothesis testing.',
        },
        keyTakeaways: [
          'Statistics is the language of uncertainty in data science.',
          'Three uses: Data Analysis, Inference, Model Validation.',
          'Key topics ahead: probability theory, inferential statistics, hypothesis testing, Bayesian thinking.',
        ],
      },
      {
        id: 'math-stats-integration',
        number: 72,
        title: '72. Integration of Mathematics and Statistics',
        subtitle: 'Every model is both a mathematical object and a statistical object — the two fields meet at estimation, optimisation, and validation.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '4 mins',
        difficulty: 'Beginner',
        objectives: [
          'State why mathematics and statistics are integrated in DS',
          'Give one example of a model that needs both',
          'Locate the next chapter on the key areas of mathematics',
        ],
        concepts: [
          {
            title: 'Why the two fields meet',
            paragraphs: [
              'The integration of mathematics and statistics in data science is seen in nearly every aspect, from the development of complex models that involve both statistical estimation and mathematical optimization to the evaluation of models using statistical methods.',
              'Understanding both fields allows data scientists to approach problems comprehensively, designing solutions that are not only technically sound but also statistically valid.',
            ],
            analogy: {
              concept: 'Integration',
              metaphor: 'A bridge whose two pylons are mathematics and statistics — neither alone holds the road up.',
              why: 'Math gives the algorithm; stats tells you whether the algorithm deserves your trust.',
            },
          },
          {
            title: 'What this section aims to give you',
            paragraphs: [
              'This section aims to equip you with the mathematical and statistical knowledge necessary to excel in data science. Whether you’re a beginner looking to enter the field or a seasoned professional aiming to deepen your understanding, the forthcoming chapters will provide valuable insights and practical applications of mathematics and statistics in data science.',
            ],
          },
        ],
        glossary: [
          { term: 'Statistical estimation', definition: 'Using sample data to estimate an unknown quantity (e.g. a mean, a variance, a probability).' },
        ],
        realWorldExample: {
          scenario: 'A logistic-regression classifier for spam',
          application: 'Mathematics gives the optimisation algorithm (gradient descent); statistics gives the p-values, the likelihood, and the cross-validation that decide whether the classifier actually works.',
          impact: 'Either side alone would leave the model half-built.',
        },
        playground: {
          type: 'math-stats-integration',
          title: 'Math vs Stats intensity per area',
          instructions: 'Click any of the six areas on the left. The radar chart highlights the area\'s shape — note how some areas lean heavily on math (Linear Algebra, Calculus, Optimization) while others lean on stats (Probability, Statistics).',
          expectedOutcome: 'See that the two disciplines cover different aspects of the same work — and reinforce each other.',
        },
        quiz: [
          {
            id: 'msi-q1',
            question: 'The book says the integration of math and stats is seen:',
            options: [
              'Only in theoretical research.',
              'In nearly every aspect of data science.',
              'Only in unsupervised learning.',
              'Only in visualisation.',
            ],
            answerIndex: 1,
            explanation: 'The book says "in nearly every aspect, from the development of complex models to the evaluation of models."',
          },
          {
            id: 'msi-q2',
            question: 'Why do both fields matter?',
            options: [
              'One alone is enough for most problems.',
              'Math is the only one that matters.',
              'Math gives the algorithm; stats tells you whether the algorithm deserves your trust.',
              'Stats is only about plotting.',
            ],
            answerIndex: 2,
            explanation: 'A complete data-science solution is both technically sound (math) and statistically valid (stats).',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, click "Linear Algebra" and "Probability". Which one leans more heavily on statistics?',
          hint: 'Look at the green (Stats) trace of the radar.',
          expectedAnswer: 'Probability leans more on stats; Linear Algebra leans more on math.',
        },
        keyTakeaways: [
          'Mathematics and statistics meet at every data-science task.',
          'Math gives the algorithm; stats tells you whether the algorithm is trustworthy.',
          'The next chapter lists the key mathematical areas you will need.',
        ],
      },
      {
        id: 'math-key-areas',
        number: 73,
        title: '73. Key Areas in Mathematics for Data Science',
        subtitle: 'Six areas of mathematics every data scientist should know — linear algebra, calculus, probability, statistics, discrete math, and optimization.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Name the six key areas of mathematics for DS',
          'Describe the role of each in one sentence',
          'Connect each area to a real-world application',
        ],
        concepts: [
          {
            title: 'The six key areas',
            paragraphs: [
              '1. Linear Algebra: Linear algebra is fundamental to almost all areas of data science, including machine learning, computer vision, and deep learning. It deals with vectors, matrices, and linear transformations, which are critical for operations such as transformations, dimensionality reduction (PCA), and in the training of deep neural networks.',
              '2. Calculus: Calculus, especially multivariable calculus, plays a crucial role in understanding the changes between points in data science algorithms. It helps in optimizing problems, understanding the rate of change of data points, and is integral to the backbone of neural network training (backpropagation).',
              '3. Probability Theory: Probability helps in making inferences about data, modeling uncertainties, and is foundational for statistical modeling and Bayesian inference. Understanding probability is essential for tasks such as classification, hypothesis testing, and results interpretation.',
              '4. Statistics: While technically a separate field, statistical methods are deeply intertwined with mathematics in analyzing data, estimating model parameters, and hypothesis testing. Knowledge of statistics is crucial for data analysis, regression models, and performance evaluation of algorithms.',
              '5. Discrete Mathematics: Important for data science as it applies to data structures and algorithms, including graphs and trees used in decision-making processes within machine learning algorithms and network theory.',
              '6. Optimization Techniques: Optimization is a branch of mathematics that focuses on finding the maxima and minima of functions. In data science, optimization algorithms like gradient descent are used to find the best parameters for models, particularly in machine learning.',
            ],
            analogy: {
              concept: 'Six areas',
              metaphor: 'A toolbox with six compartments — pick the right tool for the job, but you usually need more than one.',
              why: 'No real DS problem lives in just one area — gradient descent uses calculus, optimisation, and linear algebra at the same time.',
            },
          },
          {
            title: 'How the areas meet in practice',
            paragraphs: [
              'Understanding these areas allows data scientists to approach complex problems with effective tools and methodologies, enabling precise modeling, decision-making, and predictions. The practical application of these mathematical principles is seen in various real-world scenarios, such as:',
              'Designing and training machine learning models, Solving classification problems, Conducting time-series analysis, Implementing algorithms for image and speech recognition.',
            ],
          },
        ],
        glossary: [
          { term: 'Discrete mathematics', definition: 'The study of mathematical structures that are countable (graphs, sets, logic) rather than continuous.' },
        ],
        realWorldExample: {
          scenario: 'A speech-recognition system',
          application: 'Linear algebra for the spectrogram representation, calculus + optimisation for backpropagation through the network, probability for the language model, statistics for evaluating the word error rate, discrete math for the search graph through possible word sequences.',
          impact: 'Each of the six areas leaves a fingerprint on the final product.',
        },
        playground: {
          type: 'math-key-areas',
          title: 'The six key areas of mathematics for DS',
          instructions: 'Click any of the six areas on the left. The bar chart shows the relative coverage — clicking an area highlights it in the chart.',
          expectedOutcome: 'Be able to name the six areas and pair each with a concrete data-science example.',
        },
        quiz: [
          {
            id: 'mka-q1',
            question: 'Which area is "fundamental to almost all areas of data science, including ML, computer vision, and deep learning"?',
            options: ['Calculus', 'Linear Algebra', 'Discrete Mathematics', 'Optimization'],
            answerIndex: 1,
            explanation: 'The book calls linear algebra fundamental to almost all areas of DS, including ML, computer vision, and deep learning.',
          },
          {
            id: 'mka-q2',
            question: 'Which area is "integral to the backbone of neural network training (backpropagation)"?',
            options: ['Calculus', 'Statistics', 'Probability', 'Discrete Math'],
            answerIndex: 0,
            explanation: 'Calculus — specifically multivariable calculus — is what powers backpropagation.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, click "Optimization Techniques". What does the book say it does?',
          hint: 'Read the description on the right card.',
          expectedAnswer: 'It focuses on finding the maxima and minima of functions; algorithms like gradient descent find the best parameters for models.',
        },
        keyTakeaways: [
          'Six key areas: Linear Algebra, Calculus, Probability, Statistics, Discrete Math, Optimization.',
          'Each area maps to a concrete DS task — they overlap in practice.',
          'The book ties the six areas to designing models, classification, time-series, and image/speech recognition.',
        ],
      },
      {
        id: 'la-vectors',
        number: 74,
        title: '74. Linear Algebra Essentials: Vectors',
        subtitle: 'Vectors, dot products, norms, and cosine similarity — the building blocks of every data point and similarity score in DS.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Define a vector as the book does',
          'Compute the dot product, the L2 norm, and the cosine similarity of two vectors',
          'Recognise where these operations appear in algorithms',
        ],
        concepts: [
          {
            title: 'Vectors — a definition and key operations',
            paragraphs: [
              'Definition: A vector is an ordered collection of numbers, which can be thought of as a point in a multidimensional space. In data science, vectors often represent data points or features.',
              'Operations: Important operations with vectors include addition, scalar multiplication, dot product, norm, and cosine similarity, which are critical in algorithms for measuring distances and similarities between data points.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import numpy as np\nv1 = np.array([1, 2, 3])\nv2 = np.array([4, 5, 6])\ndot_product = np.dot(v1, v2)   # 1·4 + 2·5 + 3·6 = 32',
            },
            analogy: {
              concept: 'Vector',
              metaphor: 'An arrow in space — its length is the norm, its direction is what makes it similar to (or different from) other arrows.',
              why: 'Most "distance" and "similarity" in ML are just vector operations underneath.',
            },
          },
        ],
        glossary: [
          { term: 'Dot product', definition: 'Sum of the products of corresponding entries: v·w = Σ vᵢ wᵢ.' },
          { term: 'L2 norm', definition: 'The Euclidean length of a vector: ‖v‖ = √(Σ vᵢ²).' },
          { term: 'Cosine similarity', definition: 'cos(θ) between two vectors — +1 same direction, 0 orthogonal, −1 opposite.' },
        ],
        realWorldExample: {
          scenario: 'Document similarity by TF-IDF vectors',
          application: 'Each document is a vector of word frequencies. Cosine similarity scores how similar two documents are, regardless of length.',
          impact: 'Cosine similarity is the workhorse of search engines and recommender systems.',
        },
        playground: {
          type: 'la-vectors',
          title: 'Two vectors, one dot product',
          instructions: 'Drag the sliders to move v1 and v2. The right panel shows the two vectors, their sum, and the computed dot product, norms, and angle.',
          expectedOutcome: 'See that cos(v1, v2) = v1·v2 / (‖v1‖ · ‖v2‖) — and watch the angle approach 0° as the two vectors align.',
        },
        quiz: [
          {
            id: 'lv-q1',
            question: 'How is the dot product of two vectors computed?',
            options: [
              'Sum of corresponding entries.',
              'Sum of the products of corresponding entries.',
              'Product of the norms.',
              'Difference of the angles.',
            ],
            answerIndex: 1,
            explanation: 'v·w = Σ vᵢ wᵢ — sum of the products of corresponding entries.',
          },
          {
            id: 'lv-q2',
            question: 'Cosine similarity of two orthogonal vectors is:',
            options: ['1', '0', '−1', '∞'],
            answerIndex: 1,
            explanation: 'Orthogonal ⟹ angle 90° ⟹ cos(90°) = 0.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set v1 = (3, 2) and v2 = (2, 4). What is the dot product?',
          hint: '3·2 + 2·4 = ?',
          expectedAnswer: '14.',
        },
        keyTakeaways: [
          'A vector is an ordered collection of numbers — a point in N-D space.',
          'Key ops: addition, scalar multiplication, dot product, norm, cosine similarity.',
          'Cosine similarity is the standard "how similar are these two things" in ML.',
        ],
      },
      {
        id: 'la-matrices',
        number: 75,
        title: '75. Linear Algebra Essentials: Matrices',
        subtitle: 'Matrices represent linear transformations and systems of equations — and the operations on them are the verbs of data science.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '7 mins',
        difficulty: 'Beginner',
        objectives: [
          'Define a matrix and its role in DS',
          'Perform matrix multiplication and transposition',
          'See how a matrix turns a vector into another vector',
        ],
        concepts: [
          {
            title: 'Matrices and their operations',
            paragraphs: [
              'Definition: A matrix is a two-dimensional array of numbers with rows and columns. It represents a linear transformation or a system of linear equations.',
              'Operations: Key operations include matrix addition, scalar multiplication, matrix multiplication, transposition, determinant, inverse, and solving linear systems. These operations are fundamental for transformations, manipulating datasets, and more.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import numpy as np\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[2, 0], [1, 2]])\nproduct = np.dot(A, B)      # [[4, 4], [10, 8]]\ninverse = np.linalg.inv(A)  # only for square, invertible matrices',
            },
          },
          {
            title: 'Why matrices matter in DS',
            paragraphs: [
              'A dataset is a matrix (rows = samples, columns = features). A linear model is a matrix multiplied by a coefficient vector. A neural network layer is a matrix multiplication followed by a non-linearity.',
              'Knowing how matrices combine — and what multiplication, transpose, determinant, and inverse do — is the foundation of all the algorithms that follow.',
            ],
            analogy: {
              concept: 'Matrix',
              metaphor: 'A machine with input slots and output slots: you push vectors in one side, transformed vectors come out the other.',
              why: 'Every linear model is just such a machine — and composing machines is matrix multiplication.',
            },
          },
        ],
        glossary: [
          { term: 'Transpose', definition: 'The matrix Aᵀ obtained by swapping rows and columns of A.' },
          { term: 'Matrix multiplication', definition: 'C[i][j] = Σ A[i][k] · B[k][j] — composing two linear transformations.' },
        ],
        realWorldExample: {
          scenario: 'Predicting house prices with linear regression',
          application: 'X is the (n × p) feature matrix, β is the (p × 1) coefficient vector, and y ≈ Xβ is the prediction vector.',
          impact: 'The entire model — fitting and predicting — is a single matrix multiplication once β is known.',
        },
        playground: {
          type: 'la-matrices',
          title: 'Multiply two matrices',
          instructions: 'Drag the four sliders for A and the four for B. The right panel shows A as a parallelogram and the result of A · B.',
          expectedOutcome: 'Be able to read a matrix product C[i][j] = Σ A[i][k] · B[k][j] by hand for a 2×2.',
        },
        quiz: [
          {
            id: 'lm-q1',
            question: 'The result of multiplying an (m × k) matrix by a (k × n) matrix is:',
            options: ['(k × k)', '(m × n)', '(n × m)', 'Undefined'],
            answerIndex: 1,
            explanation: 'Inner dimensions must match (k = k); the result is (m × n).',
          },
          {
            id: 'lm-q2',
            question: 'The transpose of a (2 × 3) matrix is:',
            options: ['(2 × 3)', '(3 × 2)', '(6 × 1)', 'Undefined'],
            answerIndex: 1,
            explanation: 'Transpose swaps rows and columns, so (m × n) becomes (n × m).',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set A = [[1, 2], [3, 4]] and B = [[2, 0], [1, 2]]. What is the [0][0] entry of A · B?',
          hint: 'C[0][0] = 1·2 + 2·1 = ?',
          expectedAnswer: '4.',
        },
        keyTakeaways: [
          'A matrix is a 2-D array — a linear transformation or a tabular dataset.',
          'Key ops: multiplication, transpose, determinant, inverse, solving linear systems.',
          'Datasets and linear models are both matrices — matrix multiplication is everywhere.',
        ],
      },
      {
        id: 'la-det-inv',
        number: 76,
        title: '76. Linear Algebra Essentials: Determinants and Inverse',
        subtitle: 'The determinant tells you whether a matrix can be inverted; the inverse undoes a transformation. Both are cornerstones of linear systems.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Compute the determinant of a 2×2 matrix and interpret it',
          'Decide when a matrix is invertible',
          'Compute and use the inverse of a 2×2 matrix',
        ],
        concepts: [
          {
            title: 'Determinants',
            paragraphs: [
              'Determinants: A scalar that can be computed from the elements of a square matrix. It indicates whether a system of linear equations has a unique solution (if nonzero).',
              'For a 2×2 matrix [[a, b], [c, d]], the determinant is ad − bc.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import numpy as np\nA = np.array([[1, 2], [3, 4]])\ndet_A = np.linalg.det(A)   # 1·4 − 2·3 = −2',
            },
          },
          {
            title: 'Inverse',
            paragraphs: [
              'The inverse of a matrix A is another matrix that, when multiplied with A, results in the identity matrix. The inverse is widely used in solving systems of linear equations and in some machine learning algorithms.',
              'For a 2×2 matrix with nonzero determinant: A⁻¹ = (1/det) · [[d, −b], [−c, a]].',
            ],
            analogy: {
              concept: 'Inverse',
              metaphor: 'The undo button of a linear transformation — pressing it sends every output back to its input.',
              why: 'Solving A·x = b is as easy as x = A⁻¹·b whenever A is invertible.',
            },
          },
        ],
        glossary: [
          { term: 'Singular matrix', definition: 'A square matrix whose determinant is zero — it has no inverse.' },
          { term: 'Identity matrix', definition: 'The matrix I where I · A = A; 1s on the diagonal and 0s elsewhere.' },
        ],
        realWorldExample: {
          scenario: 'Solving a system of linear equations',
          application: 'Three equations in three unknowns can be written as A·x = b. When det(A) ≠ 0, x = A⁻¹·b gives the unique solution.',
          impact: 'A zero determinant means the equations are linearly dependent — the system has no unique solution.',
        },
        playground: {
          type: 'la-det-inv',
          title: 'Determinant and inverse of a 2×2',
          instructions: 'Drag the four sliders a, b, c, d. The right panel shows the matrix A and its inverse A⁻¹. Watch the determinant go to zero — when that happens, the matrix becomes singular and the inverse is undefined.',
          expectedOutcome: 'Recognise that det(A) ≠ 0 is the condition for A to have an inverse.',
        },
        quiz: [
          {
            id: 'ldi-q1',
            question: 'For A = [[a, b], [c, d]], the determinant is:',
            options: ['a + d', 'ad − bc', 'ab − cd', 'ad + bc'],
            answerIndex: 1,
            explanation: 'The 2×2 determinant is ad − bc.',
          },
          {
            id: 'ldi-q2',
            question: 'A matrix with det(A) = 0:',
            options: ['Is always invertible', 'Is singular — no unique inverse', 'Is the identity', 'Cannot exist'],
            answerIndex: 1,
            explanation: 'A zero determinant means the system has no unique solution and the matrix has no inverse.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set a = 1, b = 2, c = 2, d = 4. What is det(A)? Is A invertible?',
          hint: 'ad − bc = 1·4 − 2·2.',
          expectedAnswer: 'det(A) = 0. A is not invertible (its rows are linearly dependent).',
        },
        keyTakeaways: [
          'The determinant is a scalar computed from a square matrix.',
          'det(A) ≠ 0 ⇔ A is invertible.',
          'A⁻¹ undoes the transformation A — and is the basis for solving linear systems.',
        ],
      },
      {
        id: 'la-eigen',
        number: 77,
        title: '77. Linear Algebra Essentials: Eigenvalues & Eigenvectors',
        subtitle: 'The special directions that a matrix only stretches, never twists. They are the foundation of PCA and stability analysis.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '6 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Define eigenvalues and eigenvectors of a matrix',
          'Find them for a small 2×2 matrix',
          'Connect them to PCA and stability analysis',
        ],
        concepts: [
          {
            title: 'Eigenvectors and eigenvalues',
            paragraphs: [
              'Definition: Eigenvectors are vectors that, when transformed by a given square matrix, change only in scale and not direction. Eigenvalues are scalars that indicate how much the eigenvectors are stretched or compressed.',
              'For a square matrix A: A · v = λ · v. The vector v is an eigenvector; the scalar λ is its eigenvalue.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import numpy as np\nA = np.array([[2, 1], [1, 2]])\neigenvalues, eigenvectors = np.linalg.eig(A)',
            },
            analogy: {
              concept: 'Eigenvector',
              metaphor: 'The axis a globe spins on — the rotation does not move the points on that axis, it only spins them in place.',
              why: 'Eigenvectors are the directions a matrix leaves unchanged — the natural axes of the transformation.',
            },
          },
          {
            title: 'Why they matter in DS',
            paragraphs: [
              'Eigenvalues and eigenvectors are crucial in Principal Component Analysis (PCA), which is used for dimensionality reduction in machine learning. They are also important in stability analysis and systems theory.',
              'In PCA, the eigenvectors of the covariance matrix are the principal components, and the eigenvalues tell you how much variance each one captures.',
            ],
          },
        ],
        glossary: [
          { term: 'Eigenvector', definition: 'A non-zero vector v such that A·v = λ·v.' },
          { term: 'Eigenvalue', definition: 'The scalar λ that pairs with an eigenvector v in A·v = λ·v.' },
        ],
        realWorldExample: {
          scenario: 'PCA for image compression',
          application: 'Compute the covariance of pixel intensities, find its eigenvectors, and keep only the top k by eigenvalue — the image is approximated with k components.',
          impact: 'The eigenvalues tell you exactly how much variance each component captures — and how much you can drop safely.',
        },
        playground: {
          type: 'la-eigen',
          title: 'Eigenvectors of a 2×2',
          instructions: 'Drag the four sliders a, b, c, d. The right panel shows the two eigenvectors as arrows through the origin, with their eigenvalues shown in the stats.',
          expectedOutcome: 'Be able to read the eigen-decomposition of a 2×2 matrix and recognise how the eigenvectors align with the principal axes of the data.',
        },
        quiz: [
          {
            id: 'le-q1',
            question: 'An eigenvector of A is a vector v such that:',
            options: ['A · v = 0', 'A · v = λ · v', 'A + v = λ', 'v · A = 0'],
            answerIndex: 1,
            explanation: 'Eigenvectors are stretched (not rotated) by A — that is exactly A·v = λ·v.',
          },
          {
            id: 'le-q2',
            question: 'PCA uses eigenvalues to:',
            options: [
              'Plot data in 2D.',
              'Rank principal components by how much variance they capture.',
              'Standardise features.',
              'Compute means.',
            ],
            answerIndex: 1,
            explanation: 'The eigenvalues of the covariance matrix rank the principal components by variance captured.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set a = 2, b = 0, c = 0, d = 1. What are the eigenvalues?',
          hint: 'For a diagonal matrix, the eigenvalues are the diagonal entries.',
          expectedAnswer: '2 and 1.',
        },
        keyTakeaways: [
          'Eigenvectors are the special directions a matrix only stretches.',
          'PCA uses them to rank principal components by variance.',
          'They are also used in stability analysis and systems theory.',
        ],
      },
      {
        id: 'la-svd',
        number: 78,
        title: '78. Linear Algebra Essentials: Singular Value Decomposition (SVD)',
        subtitle: 'Decompose any matrix into U · Σ · Vᵀ — the workhorse behind LSA, recommender systems, and image compression.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '6 mins',
        difficulty: 'Advanced',
        objectives: [
          'State the SVD theorem and the meaning of U, Σ, Vᵀ',
          'Build a rank-k approximation of a small matrix',
          'Recognise DS use cases: LSA, pseudo-inverse, image compression',
        ],
        concepts: [
          {
            title: 'The SVD theorem',
            paragraphs: [
              'Definition: SVD is a method of decomposing a matrix into three other matrices, where the middle matrix is diagonal (containing singular values) and the other two represent an orthonormal basis for the rows and columns of the original matrix.',
              'For any matrix A: A = U · Σ · Vᵀ. The columns of U and V are orthonormal; the diagonal entries of Σ are the singular values σ₁ ≥ σ₂ ≥ … ≥ 0.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import numpy as np\nA = np.array([[1, 2, 3], [4, 5, 6]])\nU, S, VT = np.linalg.svd(A)',
            },
          },
          {
            title: 'Why SVD matters in DS',
            paragraphs: [
              'Importance: SVD is used in many applications, including solving pseudoinverse of matrices (for systems that do not have a unique solution), least squares fitting, and more complex machine learning algorithms like Latent Semantic Analysis (LSA).',
              'Truncating the top k singular values gives the best rank-k approximation of A — the foundation of dimensionality reduction and lossy compression.',
            ],
          },
        ],
        glossary: [
          { term: 'Singular value', definition: 'A non-negative number on the diagonal of Σ that measures the "energy" of a direction.' },
          { term: 'Latent Semantic Analysis', definition: 'A technique that applies SVD to a term-document matrix to find hidden concepts in text.' },
        ],
        realWorldExample: {
          scenario: 'Recommender systems',
          application: 'The user-item rating matrix is decomposed via SVD; the latent factors are then used to predict missing ratings.',
          impact: 'SVD is at the heart of many production recommenders (the Netflix Prize was largely an SVD competition).',
        },
        playground: {
          type: 'la-svd',
          title: 'Rank-k approximation of a matrix',
          instructions: 'Move the rank-k slider. The bar chart shows each singular value as a percentage of the total; the right panel shows the original and reconstructed matrices.',
          expectedOutcome: 'See the bulk of variance captured by the first 1–2 singular values, and watch the Frobenius error drop as k grows.',
        },
        quiz: [
          {
            id: 'lsvd-q1',
            question: 'SVD writes a matrix A as:',
            options: ['A = LU', 'A = QR', 'A = U · Σ · Vᵀ', 'A = LLᵀ'],
            answerIndex: 2,
            explanation: 'U and V are orthogonal; Σ is diagonal with non-negative entries sorted largest to smallest.',
          },
          {
            id: 'lsvd-q2',
            question: 'The "best" rank-k approximation of A comes from:',
            options: [
              'Keeping any k rows of A.',
              'Truncating SVD to the top k singular values (Eckart–Young).',
              'Averaging rows of A.',
              'Setting k rows to zero.',
            ],
            answerIndex: 1,
            explanation: 'Eckart–Young: the truncated SVD is the closest rank-k matrix to A in Frobenius and spectral norms.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set k = 1. How much of the variance is captured?',
          hint: 'Look at the "Variance kept" stat.',
          expectedAnswer: 'Likely most of the variance — the data was constructed with one dominant direction plus a small secondary component.',
        },
        keyTakeaways: [
          'Every matrix has an SVD A = U · Σ · Vᵀ — unique up to sign conventions.',
          'Truncating Σ to the top k singular values gives the best rank-k approximation.',
          'SVD powers LSA, image compression, and matrix completion in recommenders.',
        ],
      },
      {
        id: 'calc-functions-limits',
        number: 79,
        title: '79. Calculus Basics: Functions, Limits and Continuity',
        subtitle: 'Functions model relationships between variables; limits describe what a function approaches — the foundations of differentiation and integration.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '5 mins',
        difficulty: 'Beginner',
        objectives: [
          'Define a function and explain its role in DS',
          'Define a limit and state why limits matter',
          'Approach a point and read the limiting value from a chart',
        ],
        concepts: [
          {
            title: 'Functions',
            paragraphs: [
              'Definition: In mathematics, a function is a relation that uniquely associates members of one set with members of another set. More formally, a function from A to B assigns each element of A to an element of B.',
              'Importance: Functions model relationships between variables, crucial for framing data science problems where predictions or classifications are made based on input data.',
            ],
            analogy: {
              concept: 'Function',
              metaphor: 'A machine — drop an input in the top, get exactly one output from the bottom.',
              why: 'A model is a function that maps features to predictions; understanding functions is understanding models.',
            },
          },
          {
            title: 'Limits and Continuity',
            paragraphs: [
              'Definition: A limit in mathematics is a value that a function (or sequence) "approaches" as the input (or index) approaches some value. Limits are essential to calculus because they form the basis of differentiation and integration.',
              'Importance: Understanding limits helps in studying algorithm behavior near edge cases in data science and in the formulation of algorithms that must perform well as data scales.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import sympy as sp\nx = sp.Symbol("x")\nsp.limit(sp.sin(x) / x, x, 0)   # 1',
            },
          },
        ],
        glossary: [
          { term: 'Function', definition: 'A mapping from each element of a set A to exactly one element of a set B.' },
          { term: 'Limit', definition: 'The value a function approaches as its input approaches a given point.' },
        ],
        realWorldExample: {
          scenario: 'Convergence of a training algorithm',
          application: 'Treat each iteration\'s loss as a sequence; the limit of that sequence (if it exists) is the loss the algorithm converges to.',
          impact: 'Knowing whether a sequence converges — and to what — is the question of training stability.',
        },
        playground: {
          type: 'calc-functions-limits',
          title: 'Approach a point and read the limit',
          instructions: 'Choose a function on the left. Drag the "x →" slider to slide a vertical reference line across the chart; the stat panel shows the limit at that point.',
          expectedOutcome: 'See that a limit is what a function "settles toward" as you zoom in on a point — independent of whether the function is actually defined there.',
        },
        quiz: [
          {
            id: 'cfl-q1',
            question: 'What is a function, in the book\'s words?',
            options: [
              'A relation that uniquely associates members of one set with members of another set.',
              'A list of numbers.',
              'A random sample.',
              'A plot.',
            ],
            answerIndex: 0,
            explanation: 'A function is a relation that uniquely associates members of one set with members of another set.',
          },
          {
            id: 'cfl-q2',
            question: 'Why do limits matter in calculus?',
            options: [
              'They are only used in geometry.',
              'They form the basis of differentiation and integration.',
              'They have no role in data science.',
              'They are only relevant for large numbers.',
            ],
            answerIndex: 1,
            explanation: 'Limits form the basis of differentiation and integration — every derivative and integral is defined as a limit.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, switch to f(x) = sin(x). As x → π/2, what is the limit?',
          hint: 'sin(π/2) = 1.',
          expectedAnswer: '1.',
        },
        keyTakeaways: [
          'A function maps each input to exactly one output.',
          'A limit is what a function approaches as its input approaches a point.',
          'Limits are the foundation of differentiation and integration.',
        ],
      },
      {
        id: 'calc-derivatives',
        number: 80,
        title: '80. Calculus Basics: Derivatives and Differentiation',
        subtitle: 'The derivative measures how a function changes — the workhorse of gradient descent and the language of "rate of change".',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Define the derivative of a function',
          'Compute the numerical derivative of a small function',
          'Read the slope of the tangent line from a chart',
        ],
        concepts: [
          {
            title: 'Derivatives and Differentiation',
            paragraphs: [
              'Definition: The derivative of a function represents an infinitesimal change in the function with respect to one of its variables. It is the primary tool for measuring how a function changes as its input changes.',
              'Importance: Derivatives are vital in data science for finding the rate of change of any quantity. In machine learning, derivatives are central to optimization algorithms like gradient descent, which find the minimum of a loss function.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import numpy as np\ndef numerical_derivative(f, x, eps=1e-6):\n    return (f(x + eps) - f(x - eps)) / (2 * eps)\n\nf = lambda x: x**2\nprint("Derivative of x^2 at x = 2 is", numerical_derivative(f, 2))  # ~4',
            },
          },
        ],
        glossary: [
          { term: 'Derivative', definition: 'The instantaneous rate of change of a function — the slope of the tangent line at a point.' },
          { term: 'Tangent line', definition: 'The line that touches a curve at a single point and has the same slope as the curve there.' },
        ],
        realWorldExample: {
          scenario: 'Gradient descent for linear regression',
          application: 'The derivative of MSE with respect to each weight gives the direction of steepest ascent — flip the sign to descend. Every weight update is the negative gradient.',
          impact: 'Without derivatives, there is no gradient descent — and no modern deep learning.',
        },
        playground: {
          type: 'calc-derivatives',
          title: 'Derivative as the slope of a tangent',
          instructions: 'Choose a function, then drag the "Evaluate at x" slider. The chart shows f(x) and a tangent line at the chosen point; the stat panel gives f and f′ at that point.',
          expectedOutcome: 'See the tangent line get steeper as the derivative grows, and flatten to horizontal at a minimum where f′(x) = 0.',
        },
        quiz: [
          {
            id: 'cd-q1',
            question: 'The derivative of a function at a point is:',
            options: [
              'The function\'s value at that point.',
              'The instantaneous rate of change — the slope of the tangent.',
              'The area under the curve.',
              'A constant for every function.',
            ],
            answerIndex: 1,
            explanation: 'The derivative is the slope of the tangent line — the instantaneous rate of change.',
          },
          {
            id: 'cd-q2',
            question: 'Why are derivatives central to ML optimisation?',
            options: [
              'They are not — ML uses sampling only.',
              'They tell you the direction of steepest ascent (or descent), enabling gradient descent.',
              'They give the prediction directly.',
              'They compute the data labels.',
            ],
            answerIndex: 1,
            explanation: 'The negative gradient points in the direction of steepest descent — every weight update follows it.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, choose f(x) = x² and evaluate at x = 0. What is f′(0)?',
          hint: 'f(x) = x² has derivative 2x.',
          expectedAnswer: '0 — the derivative is zero at the minimum of the parabola.',
        },
        keyTakeaways: [
          'The derivative measures instantaneous rate of change.',
          'In ML, the negative gradient is the direction of steepest descent.',
          'Every gradient-descent update is just "take a step opposite the derivative".',
        ],
      },
      {
        id: 'calc-integrals',
        number: 81,
        title: '81. Calculus Basics: Integrals and Integration',
        subtitle: 'Integration is the inverse of differentiation — it computes areas, volumes, and total probabilities.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '5 mins',
        difficulty: 'Beginner',
        objectives: [
          'Define integration as the inverse of differentiation',
          'Approximate a definite integral by a Riemann sum',
          'Recognise DS uses — areas, volumes, total probability',
        ],
        concepts: [
          {
            title: 'Integrals and Integration',
            paragraphs: [
              'Definition: Integration is essentially the inverse operation to differentiation. It can be used to find areas, volumes, central points, and many useful things.',
              'Importance: In data science, integration is used for probabilistic models to find the total probability of observing a particular set of data, among other applications.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'def numerical_integration(f, a, b, N=1000):\n    dx = (b - a) / N\n    area = 0\n    x = a\n    for i in range(N):\n        area += f(x) * dx\n        x += dx\n    return area\n\nf = lambda x: x**2\nprint("Integral of x^2 from 0 to 1 is", numerical_integration(f, 0, 1))  # ~0.333',
            },
          },
        ],
        glossary: [
          { term: 'Riemann sum', definition: 'An approximation of a definite integral by a sum of rectangles under the curve.' },
          { term: 'Definite integral', definition: '∫ₐᵇ f(x) dx — the signed area between f and the x-axis from a to b.' },
        ],
        realWorldExample: {
          scenario: 'Normalising a probability density',
          application: 'To turn a density f into a valid probability distribution, integrate f over the whole space — the result must equal 1.',
          impact: 'A model whose density integrates to something other than 1 is not a probability model.',
        },
        playground: {
          type: 'calc-integrals',
          title: 'Area under the curve',
          instructions: 'Pick a function and drag the a and b sliders to bound the shaded area. The stat panel shows the numerical integral (Riemann sum) of f(x) on that interval.',
          expectedOutcome: 'See that the integral is the area under the curve between a and b, and that integrals can be negative when f dips below the x-axis.',
        },
        quiz: [
          {
            id: 'ci-q1',
            question: 'Integration is best thought of as:',
            options: [
              'The derivative of f(x) again.',
              'The inverse of differentiation.',
              'Multiplying f by x.',
              'A different name for addition.',
            ],
            answerIndex: 1,
            explanation: 'The book calls integration "essentially the inverse operation to differentiation."',
          },
          {
            id: 'ci-q2',
            question: 'A common DS use of integration is:',
            options: [
              'Computing total probability in a probabilistic model.',
              'Compressing images.',
              'Plotting bar charts.',
              'Encrypting data.',
            ],
            answerIndex: 0,
            explanation: 'The book calls out "probabilistic models to find the total probability of observing a particular set of data."',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, integrate f(x) = x² from 0 to 1. What is the result (to 3 decimals)?',
          hint: '∫₀¹ x² dx = 1/3 ≈ 0.333.',
          expectedAnswer: '0.333.',
        },
        keyTakeaways: [
          'Integration is the inverse of differentiation.',
          'Definite integrals compute signed areas under a curve.',
          'In DS, they show up in probabilistic models (total probability, expected values).',
        ],
      },
      {
        id: 'calc-partial-optim',
        number: 82,
        title: '82. Calculus Basics: Partial Derivatives & Optimization',
        subtitle: 'Most models depend on many variables — partial derivatives tell you the slope in each direction, and gradient descent uses them to optimise.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '6 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Define partial derivatives and multivariable functions',
          'Run gradient descent on a 2-D loss function',
          'Explain why ML loss landscapes are optimised by gradient methods',
        ],
        concepts: [
          {
            title: 'Partial Derivatives and Multivariable Functions',
            paragraphs: [
              'Definition: When functions depend on more than one variable, partial derivatives become important. They measure the rate of change of a function with respect to one of its variables, holding the others constant.',
              'Importance: Multivariable calculus is critical in machine learning, especially for functions involving multiple inputs. Optimization techniques, such as gradient descent, use partial derivatives to minimize error functions.',
            ],
          },
          {
            title: 'Optimization in calculus',
            paragraphs: [
              'Optimization in calculus seeks to find the maxima and minima of functions. In the context of data science, optimization is critical for fitting models to data.',
              'Techniques such as gradient descent or Newton\'s method are used to find the optimal parameters for best model performance.',
            ],
            codeSnippet: {
              language: 'python',
              code: '# Gradient descent for f(x, y) = (x-2)**2 + (y+1)**2 + 1\nx, y = 5.0, 4.0\nlr = 0.1\nfor _ in range(40):\n    gx, gy = 2*(x-2), 2*(y+1)\n    x -= lr * gx\n    y -= lr * gy\nprint(x, y)  # ~2, ~-1',
            },
          },
        ],
        glossary: [
          { term: 'Partial derivative', definition: 'The derivative of a multivariable function with respect to one variable, holding the others constant.' },
          { term: 'Gradient', definition: 'The vector of all partial derivatives; points in the direction of steepest ascent.' },
        ],
        realWorldExample: {
          scenario: 'Training a neural network',
          application: 'The loss depends on millions of parameters; backpropagation is just the chain rule applied to compute the gradient with respect to every parameter. SGD then takes a small step opposite the gradient.',
          impact: 'Every parameter in a neural network is updated by one partial derivative — partial derivatives are the language of learning.',
        },
        playground: {
          type: 'calc-partial-optim',
          title: 'Gradient descent on a 2-D loss',
          instructions: 'Adjust the learning rate and number of iterations. The trajectory shows the path of (x, y) as the optimiser descends; the loss chart shows J(θ) over time.',
          expectedOutcome: 'See that the trajectory spirals into the minimum and that the loss converges — and watch the path become noisy if the learning rate is too high.',
        },
        quiz: [
          {
            id: 'cpo-q1',
            question: 'A partial derivative ∂f/∂x tells you:',
            options: [
              'How f changes when x changes, holding the other variables constant.',
              'The total change in f.',
              'The probability of x.',
              'The inverse of f.',
            ],
            answerIndex: 0,
            explanation: 'A partial derivative isolates one variable, holding the others fixed.',
          },
          {
            id: 'cpo-q2',
            question: 'Gradient descent uses the gradient to:',
            options: [
              'Maximize the loss function.',
              'Take a step opposite the gradient to minimise the loss.',
              'Plot the data.',
              'Compute a confusion matrix.',
            ],
            answerIndex: 1,
            explanation: 'The negative gradient points downhill; we step in that direction to minimise.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set η = 0.4 and iterations = 30. Does the loss converge?',
          hint: 'A learning rate that is too large makes the loss oscillate or diverge.',
          expectedAnswer: 'No — the loss diverges. Lower η to recover convergence.',
        },
        keyTakeaways: [
          'Partial derivatives are the slope in one direction while the others are held fixed.',
          'The gradient is the vector of all partial derivatives — it points uphill.',
          'Gradient descent takes small steps opposite the gradient to minimise the loss.',
        ],
      },
      {
        id: 'prob-rv-dists',
        number: 83,
        title: '83. Probability: Random Variables & Distributions',
        subtitle: 'A random variable assigns a number to an outcome; a probability distribution tells you how likely each value is.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Define random variables and distinguish discrete from continuous',
          'State what a PMF and a PDF represent',
          'Read and recognise common distributions',
        ],
        concepts: [
          {
            title: 'Random Variables',
            paragraphs: [
              'Definition: A random variable is a numerical description of the outcome of a statistical experiment. Random variables can be discrete (having specific values) or continuous (any value within a range of numbers).',
              'Importance: Random variables are crucial in data science for modeling phenomena and analyzing patterns in data.',
            ],
            analogy: {
              concept: 'Random variable',
              metaphor: 'A spinner that lands on a number — the rule that turns the spin into a number is the random variable.',
              why: 'Real outcomes are messy (a die roll, a click, a temperature); the random variable is the number we model.',
            },
          },
          {
            title: 'Probability Distributions',
            paragraphs: [
              'Definition: A probability distribution describes how probabilities are distributed over the values of the random variable. For discrete variables, this is expressed as a probability mass function (PMF), and for continuous variables, as a probability density function (PDF).',
              'Importance: Knowing the probability distribution of data helps in selecting appropriate models and tools for analysis.',
            ],
          },
        ],
        glossary: [
          { term: 'PMF', definition: 'Probability Mass Function — assigns a probability to each possible value of a discrete random variable.' },
          { term: 'PDF', definition: 'Probability Density Function — describes the relative likelihood of a continuous random variable; integrate to get probability.' },
        ],
        realWorldExample: {
          scenario: 'Modelling website dwell time',
          application: 'Dwell time is continuous; the exponential distribution is a common model. Knowing the PDF tells you the expected time-on-page and the tail probabilities.',
          impact: 'Picking the right distribution turns raw data into a model you can reason about.',
        },
        playground: {
          type: 'prob-rv-dists',
          title: 'Discrete PMF and continuous PDFs',
          instructions: 'Switch between a discrete PMF (die roll) and three continuous PDFs (Normal, Exponential, Uniform).',
          expectedOutcome: 'Be able to tell at a glance whether a chart shows a PMF (bars, specific values) or a PDF (smooth curve, areas matter).',
        },
        quiz: [
          {
            id: 'prd-q1',
            question: 'A random variable can be:',
            options: [
              'Only discrete.',
              'Only continuous.',
              'Discrete or continuous.',
              'Always categorical.',
            ],
            answerIndex: 2,
            explanation: 'A random variable can be discrete (specific values) or continuous (a range).',
          },
          {
            id: 'prd-q2',
            question: 'A continuous random variable\'s distribution is described by a:',
            options: ['PMF', 'PDF', 'Histogram of integers', 'Confusion matrix'],
            answerIndex: 1,
            explanation: 'A continuous distribution is described by a probability density function (PDF).',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, switch to the Normal PDF. What two parameters describe it?',
          hint: 'Mean and standard deviation.',
          expectedAnswer: 'μ (mean) and σ (standard deviation).',
        },
        keyTakeaways: [
          'A random variable is a number-valued outcome of an experiment.',
          'Discrete → PMF; continuous → PDF.',
          'The distribution guides the choice of model and tool.',
        ],
      },
      {
        id: 'prob-ev-variance',
        number: 84,
        title: '84. Probability: Expected Value & Variance',
        subtitle: 'Expected value is the long-run average; variance measures spread. Together they summarise a distribution in two numbers.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '5 mins',
        difficulty: 'Beginner',
        objectives: [
          'Define expected value and variance',
          'Compute them for a small discrete distribution',
          'Recognise them as the standard summary of a distribution',
        ],
        concepts: [
          {
            title: 'Expected Value and Variance',
            paragraphs: [
              'Expected Value (Mean): The long-run average value of repetitions of the same experiment it represents.',
              'Variance: A measure of the spread of a probability distribution, indicating how much the values of a random variable differ from the mean value.',
              'Importance: These metrics are fundamental for summarising and understanding the behavior of data in statistical and machine learning models.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import numpy as np\nxs = np.array([1, 2, 3, 4, 5, 6])\nps = np.ones(6) / 6\nex = (xs * ps).sum()\nvar = ((xs - ex) ** 2 * ps).sum()',
            },
          },
        ],
        glossary: [
          { term: 'Expected value E[X]', definition: 'The long-run average of X — Σ x · P(X = x) for discrete, ∫ x · f(x) dx for continuous.' },
          { term: 'Variance Var(X)', definition: 'E[(X − E[X])²] — the average squared deviation from the mean.' },
        ],
        realWorldExample: {
          scenario: 'A/B test power analysis',
          application: 'Expected lift (mean) and variance of the metric determine how many visitors you need to detect a real effect.',
          impact: 'Without E[X] and Var(X), you cannot size an A/B test honestly.',
        },
        playground: {
          type: 'prob-ev-variance',
          title: 'E[X] and Var(X) of common distributions',
          instructions: 'Switch between the four distributions. The right panel shows the distribution shape and the E[X], Var(X) and σ for each.',
          expectedOutcome: 'Recognise the standard values — die: E=3.5, Var=2.92; normal: E=0, Var=1; exponential (λ=0.5): E=2, Var=4; uniform: E=0.5, Var=1/12.',
        },
        quiz: [
          {
            id: 'pev-q1',
            question: 'Expected value is:',
            options: [
              'The most likely value of the random variable.',
              'The long-run average of the random variable.',
              'The standard deviation.',
              'A random value.',
            ],
            answerIndex: 1,
            explanation: 'Expected value is the long-run average value of repetitions of the experiment.',
          },
          {
            id: 'pev-q2',
            question: 'Variance measures:',
            options: [
              'The mean of the distribution.',
              'The spread — how much values differ from the mean.',
              'The probability of an event.',
              'The sample size.',
            ],
            answerIndex: 1,
            explanation: 'Variance measures the spread of the distribution — the average squared deviation from the mean.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, switch to the fair die. What is E[X] and Var(X)?',
          hint: 'E[X] = 3.5; Var(X) = 35/12 ≈ 2.917.',
          expectedAnswer: 'E[X] = 3.5; Var(X) ≈ 2.917.',
        },
        keyTakeaways: [
          'Expected value is the long-run average.',
          'Variance measures spread — the average squared deviation from the mean.',
          'Together they give a one-line summary of any distribution.',
        ],
      },
      {
        id: 'prob-bayes',
        number: 85,
        title: '85. Probability: Conditional Probability & Bayes\' Theorem',
        subtitle: 'Update your belief in a hypothesis when new evidence arrives — the foundation of Bayesian thinking and many ML algorithms.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '6 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Define conditional probability and Bayes\' theorem',
          'Apply the formula P(A|B) = P(B|A) · P(A) / P(B)',
          'See why this matters for classification and medical testing',
        ],
        concepts: [
          {
            title: 'Conditional Probability',
            paragraphs: [
              'Definition: The probability of an event occurring given the occurrence of another event, denoted as P(A | B).',
              'Importance: Essential for developing probabilistic models and performing Bayesian inference, impacting how models learn and predict.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'def bayes(p_b_given_a, p_a, p_b):\n    return p_b_given_a * p_a / p_b',
            },
          },
          {
            title: 'Bayes\' Theorem',
            paragraphs: [
              'Definition: A principle that describes the probability of an event based on prior knowledge of conditions that might be related to the event. Mathematically: P(A | B) = P(B | A) · P(A) / P(B).',
              'Importance: Bayes\' Theorem is pivotal for updating predictions with new evidence, widely used in spam filtering, medical diagnostics, and machine learning.',
            ],
            analogy: {
              concept: 'Bayes\' theorem',
              metaphor: 'A belief thermometer that adjusts itself each time a new piece of evidence arrives.',
              why: 'Each new observation should move your belief, not snap it to a new value — Bayes formalises that adjustment.',
            },
          },
        ],
        glossary: [
          { term: 'Conditional probability', definition: 'P(A | B) — the probability of A given that B has occurred.' },
          { term: 'Bayes\' theorem', definition: 'P(A | B) = P(B | A) · P(A) / P(B) — updates a prior with new evidence.' },
        ],
        realWorldExample: {
          scenario: 'A positive medical test',
          application: 'Even a 95% specific test on a 1% prevalent disease gives a posterior of only ~15% — a positive result still needs a second test.',
          impact: 'This is why rare diseases need high-specificity tests, and why naive reading of medical results leads to many false alarms.',
        },
        playground: {
          type: 'prob-bayes',
          title: 'Update your belief with new evidence',
          instructions: 'Drag the prior, sensitivity, and specificity sliders. The right panel shows how the posterior changes as the prior does — for fixed sensitivity and specificity.',
          expectedOutcome: 'See that a positive result is not always strong evidence — when the prior is small, even a sensitive and specific test leaves the posterior low.',
        },
        quiz: [
          {
            id: 'pb-q1',
            question: 'Bayes\' theorem states:',
            options: [
              'P(A | B) = P(A) / P(B)',
              'P(A | B) = P(B | A) · P(A) / P(B)',
              'P(A | B) = P(A) + P(B) − P(A) · P(B)',
              'P(A) = P(B)',
            ],
            answerIndex: 1,
            explanation: 'P(A | B) = P(B | A) · P(A) / P(B) — the formula the book gives.',
          },
          {
            id: 'pb-q2',
            question: 'A 95% specific test on a 1% prevalent disease returns positive. Roughly what is P(disease | positive)?',
            options: ['~95%', '~50%', '~15%', '~1%'],
            answerIndex: 2,
            explanation: 'Even with a sensitive and specific test, the low prior keeps the posterior around 15%.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set prior = 0.5, sensitivity = 0.95, specificity = 0.95. What is the posterior?',
          hint: 'P(+) = 0.95·0.5 + 0.05·0.5 = 0.5; posterior = 0.95·0.5 / 0.5 = 0.95.',
          expectedAnswer: '~0.95 — at 50% prevalence, the test is much more informative.',
        },
        keyTakeaways: [
          'Conditional probability: P(A | B) is the probability of A given B.',
          'Bayes\' theorem updates a prior belief with new evidence.',
          'Low priors make even good tests produce modest posteriors.',
        ],
      },
      {
        id: 'prob-lln-clt',
        number: 86,
        title: '86. Probability: Law of Large Numbers & Central Limit Theorem',
        subtitle: 'Two theorems that turn noisy sample data into reliable inference — the LLN says the average converges; the CLT says the average is approximately normal.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '6 mins',
        difficulty: 'Intermediate',
        objectives: [
          'State the Law of Large Numbers and what it justifies',
          'State the Central Limit Theorem and what it justifies',
          'See both in action in the simulator',
        ],
        concepts: [
          {
            title: 'Law of Large Numbers',
            paragraphs: [
              'Definition: States that as more observations are collected, the mean of the observed values gets closer to the expected value (the mean).',
              'Importance: Justifies the use of the sample mean as a good estimator of the population mean.',
            ],
          },
          {
            title: 'Central Limit Theorem',
            paragraphs: [
              'Definition: States that, for a large enough sample size, the distribution of the sample mean will approach a normal distribution, regardless of the shape of the original distribution.',
              'Importance: Fundamental for conducting hypothesis testing and creating confidence intervals in statistics and data science.',
            ],
            analogy: {
              concept: 'CLT',
              metaphor: 'A noisy printer that, given enough pages, gets the average tone exactly right — even if every individual page is smudged.',
              why: 'Many real distributions are skewed or weird; the CLT says the average of many draws is well-behaved.',
            },
          },
        ],
        glossary: [
          { term: 'Law of Large Numbers (LLN)', definition: 'The sample mean converges to the expected value as sample size grows.' },
          { term: 'Central Limit Theorem (CLT)', definition: 'The distribution of the sample mean approaches a normal distribution as sample size grows — for almost any underlying distribution.' },
        ],
        realWorldExample: {
          scenario: 'A/B test with very small conversion rates',
          application: 'Each user\'s outcome is a Bernoulli trial. The count of conversions across N users is normal for large N — that is the CLT, and it is what lets us use a z-test.',
          impact: 'A/B tests, polling, and quality control all rely on the CLT to make inference tractable.',
        },
        playground: {
          type: 'prob-lln-clt',
          title: 'LLN convergence and the CLT bell',
          instructions: 'Increase the sample size slider — the running mean of uniform(0, 1) draws converges to 0.5 (LLN). Increase the "trials per sample" slider to see the sum of uniforms become bell-shaped (CLT).',
          expectedOutcome: 'See LLN as a noisy line stabilising and CLT as a histogram morphing from a uniform to a bell.',
        },
        quiz: [
          {
            id: 'lln-q1',
            question: 'The Law of Large Numbers says:',
            options: [
              'Big samples have higher variance.',
              'As more observations are collected, the sample mean gets closer to the expected value.',
              'The mean is always 0.',
              'Small samples are always better.',
            ],
            answerIndex: 1,
            explanation: 'The LLN: as more observations are collected, the sample mean converges to E[X].',
          },
          {
            id: 'lln-q2',
            question: 'The Central Limit Theorem says:',
            options: [
              'Only normal distributions have a mean.',
              'The sample mean is approximately normal for large n, regardless of the population distribution.',
              'The median equals the mean.',
              'Probability is uniform.',
            ],
            answerIndex: 1,
            explanation: 'The CLT: for large n, the distribution of the sample mean is approximately normal, whatever the original distribution looked like.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set the LLN sample size to 200. Where does the running mean settle?',
          hint: 'The expected value of uniform(0, 1) is 0.5.',
          expectedAnswer: 'Around 0.5 — the LLN says the running mean converges to the expected value.',
        },
        keyTakeaways: [
          'LLN: the sample mean converges to E[X] as n grows.',
          'CLT: the sample mean is approximately normal for large n, regardless of the original distribution.',
          'Together, they justify confidence intervals and hypothesis tests.',
        ],
      },
      {
        id: 'desc-central-dispersion',
        number: 87,
        title: '87. Descriptive Statistics: Central Tendency & Dispersion',
        subtitle: 'Summarise a dataset in a few numbers — the centre, the spread, and how outliers move them.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Define mean, median, mode, range, IQR, variance, and standard deviation',
          'See how an outlier shifts the mean but not the median',
          'Pick the right summary for a given dataset',
        ],
        concepts: [
          {
            title: 'Measures of Central Tendency',
            paragraphs: [
              'These statistics describe the center of a dataset, or where the typical data point lies.',
              'Mean (Average): The sum of all data points divided by the number of points. The mean is useful but can be skewed by outliers.',
              'Median: The middle value in a dataset when it is ordered from smallest to largest. The median is less affected by outliers and skewed data.',
              'Mode: The most frequently occurring value in a dataset. It is particularly useful in analyzing categorical data.',
            ],
          },
          {
            title: 'Measures of Dispersion',
            paragraphs: [
              'These statistics describe the spread or variability of the data set.',
              'Range: The difference between the maximum and minimum values in the dataset.',
              'Interquartile Range (IQR): Measures the middle 50% of the data, which is the difference between the 75th percentile (Q3) and the 25th percentile (Q1).',
              'Variance: The average of the squared differences from the Mean. It shows how widely the values are spread out around the average value.',
              'Standard Deviation: The square root of the variance, providing a gauge of the typical distance between each data point and the mean.',
            ],
            analogy: {
              concept: 'Mean vs median',
              metaphor: 'A town\'s mean income is pulled up by one billionaire; the median income is the salary of the person in the middle.',
              why: 'Whenever the data has a long tail, median is more honest than mean.',
            },
          },
        ],
        glossary: [
          { term: 'Quartile', definition: 'A value that splits sorted data into four equal parts (Q1, Q2, Q3).' },
          { term: 'IQR', definition: 'Interquartile Range — Q3 − Q1, the spread of the middle 50%.' },
        ],
        realWorldExample: {
          scenario: 'Reporting average salary',
          application: 'A CEO joining a 50-person company doubles the mean salary but barely moves the median. The book\'s advice: "The mean is useful but can be skewed by outliers."',
          impact: 'Reporting the median alongside the mean is the standard cure.',
        },
        playground: {
          type: 'desc-central-dispersion',
          title: 'Mean vs median under an outlier',
          instructions: 'Drag the μ, σ and outlier sliders. The chart shows the sample with the outlier; the stat panel gives mean, median, std, IQR, range, and variance.',
          expectedOutcome: 'See the mean being pulled toward the outlier while the median stays put — and the std / variance inflate as the outlier stretches the spread.',
        },
        quiz: [
          {
            id: 'dcd-q1',
            question: 'Which measure of centre is most affected by outliers?',
            options: ['Median', 'Mode', 'Mean', 'Quartile'],
            answerIndex: 2,
            explanation: 'The mean is the sum of all values divided by n — one large outlier pulls it up.',
          },
          {
            id: 'dcd-q2',
            question: 'The IQR is:',
            options: [
              'The difference between the max and the min.',
              'Q3 − Q1, the spread of the middle 50%.',
              'The variance.',
              'The standard deviation.',
            ],
            answerIndex: 1,
            explanation: 'IQR = Q3 − Q1 — the spread of the middle 50% of the data.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set μ = 50, σ = 5, and the outlier to 150. Which changes more: the mean or the median?',
          hint: 'A 150 in a sample of 50 ± 5 will pull the mean but not the median.',
          expectedAnswer: 'The mean jumps up; the median barely moves. That is the whole point of using the median when outliers are present.',
        },
        keyTakeaways: [
          'Mean, median, mode describe the centre.',
          'Range, IQR, variance, std describe the spread.',
          'Mean is sensitive to outliers; median and IQR are robust.',
        ],
      },
      {
        id: 'desc-shape',
        number: 88,
        title: '88. Descriptive Statistics: Shape of the Distribution',
        subtitle: 'Beyond centre and spread, the shape — symmetric, skewed, or heavy-tailed — tells you which models are safe to use.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '5 mins',
        difficulty: 'Beginner',
        objectives: [
          'Define skewness and kurtosis',
          'Recognise a skewed vs symmetric distribution in a chart',
          'Pick tools that are robust to skew and heavy tails',
        ],
        concepts: [
          {
            title: 'Skewness and Kurtosis',
            paragraphs: [
              'Skewness: A measure of the asymmetry of the data around the sample mean. If the distribution is symmetric, the skewness will be around zero.',
              'Kurtosis: Measures the tail-heaviness of the distribution. High kurtosis indicates a distribution with thick tails, while low kurtosis indicates a distribution with thin tails.',
            ],
            analogy: {
              concept: 'Skewness & kurtosis',
              metaphor: 'Skewness is the slope of a hill; kurtosis is how sharp the peak is and how long the slopes are.',
              why: 'A symmetric, light-tailed distribution behaves nicely under classical tests; a skewed, heavy-tailed one does not.',
            },
          },
          {
            title: 'Why they matter in DS',
            paragraphs: [
              'Skewed features break linear-model assumptions and distort gradient updates.',
              'Heavy tails cause outliers in residuals and inflate error metrics — robust statistics (median, IQR, rank-based methods) are the standard cure.',
            ],
          },
        ],
        glossary: [
          { term: 'Skewness', definition: 'A measure of asymmetry around the mean; 0 for a symmetric distribution.' },
          { term: 'Kurtosis', definition: 'A measure of tail-heaviness; 3 for a normal distribution, higher for heavy tails.' },
        ],
        realWorldExample: {
          scenario: 'Income distribution',
          application: 'Household income is right-skewed (long tail of high earners) and heavy-tailed (a few very rich households). Reporting "average income" is misleading; the median and the IQR are honest.',
          impact: 'Choosing robust statistics is what separates a credible report from a click-bait headline.',
        },
        playground: {
          type: 'desc-shape',
          title: 'Skew and kurtosis sliders',
          instructions: 'Drag the Skewness slider — the distribution leans left or right. Drag the Kurtosis slider — the tails get heavier or lighter. The stat panel shows the values.',
          expectedOutcome: 'See the chart morph from a symmetric bell into a skewed or heavy-tailed shape, and read the matching statistics.',
        },
        quiz: [
          {
            id: 'ds-q1',
            question: 'Skewness around zero means:',
            options: ['The distribution is skewed right', 'The distribution is symmetric', 'The mean is zero', 'The variance is zero'],
            answerIndex: 1,
            explanation: 'Skewness ≈ 0 ⇔ the distribution is approximately symmetric.',
          },
          {
            id: 'ds-q2',
            question: 'High kurtosis indicates:',
            options: ['A flat, thin-tailed distribution', 'A distribution with thick tails', 'A perfectly symmetric distribution', 'A uniform distribution'],
            answerIndex: 1,
            explanation: 'High kurtosis = thick tails (more extreme values than a normal distribution would produce).',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set Skewness = 0 and Kurtosis = 5. What does the distribution look like?',
          hint: 'High kurtosis at skew = 0 means a tall, narrow peak with heavy tails.',
          expectedAnswer: 'A tall, narrow bell with fatter-than-normal tails.',
        },
        keyTakeaways: [
          'Skewness measures asymmetry; kurtosis measures tail-heaviness.',
          'Both are critical for choosing the right model and the right loss.',
          'Robust statistics (median, IQR) survive skew and heavy tails.',
        ],
      },
      {
        id: 'inf-sampling-ht',
        number: 89,
        title: '89. Inferential Statistics: Sampling, Estimation & Hypothesis Testing',
        subtitle: 'From a sample, infer about a population. Point estimates, confidence intervals, and the recipe for a hypothesis test.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '7 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Define sampling, point and interval estimation, and hypothesis testing',
          'Walk through the steps of a hypothesis test',
          'Read a sampling distribution of the mean and a confidence interval',
        ],
        concepts: [
          {
            title: 'Sampling',
            paragraphs: [
              'Definition: The process of selecting a subset of individuals from a larger population to estimate characteristics of the whole population.',
              'Importance: Sampling allows for the collection of manageable data sizes when it is impractical or impossible to study an entire population.',
            ],
          },
          {
            title: 'Estimation',
            paragraphs: [
              'Definition: Estimation involves determining the approximate value of a population parameter (e.g. population mean or proportion) based on sample data.',
              'Point Estimation: Provides a single value as an estimate of the population parameter.',
              'Interval Estimation (Confidence Intervals): Provides a range of values within which the parameter is expected to fall, with a certain level of confidence (e.g. 95% confidence interval).',
            ],
          },
          {
            title: 'Hypothesis Testing',
            paragraphs: [
              'Definition: A method of making statistical decisions using experimental data. Hypothesis testing is used to determine whether there is enough evidence in a sample of data to infer that a certain condition is true for the entire population.',
              'Process: Formulate the null hypothesis (H0) and the alternative hypothesis (H1). Choose a significance level (α, often set at 0.05). Calculate the appropriate statistic (e.g. t-test, chi-square). Determine the p-value and compare it with α to accept or reject H0.',
            ],
            analogy: {
              concept: 'Hypothesis test',
              metaphor: 'A court trial — H0 is the defendant is "innocent until proven guilty"; we reject it only if the evidence crosses a threshold (α).',
              why: 'Symmetrising the two errors is the whole point of the test.',
            },
          },
        ],
        glossary: [
          { term: 'H0 / H1', definition: 'The null and alternative hypotheses; H0 is the default that the test tries to reject.' },
          { term: 'p-value', definition: 'The probability, under H0, of observing data as extreme as what was observed.' },
        ],
        realWorldExample: {
          scenario: 'Testing if a new drug works',
          application: 'H0: the drug has no effect. H1: the drug lowers blood pressure. α = 0.05. Compute a t-statistic, look up the p-value — if p < 0.05, reject H0 and ship the drug.',
          impact: 'Hypothesis testing is the standard recipe for any decision based on noisy sample data.',
        },
        playground: {
          type: 'inf-sampling-ht',
          title: 'Sampling distribution and a hypothesis test',
          instructions: 'Drag the sample size, true μ, H0 and α sliders. The left panel shows the sampling distribution of x̄ across 500 reps; the stats show the z, p-value, and the test decision. The right panel marks a 95% confidence interval.',
          expectedOutcome: 'See the sampling distribution narrow as n grows; see the p-value drop as the true mean moves away from H0; see the CI shrink with n.',
        },
        quiz: [
          {
            id: 'ish-q1',
            question: 'A 95% confidence interval means:',
            options: [
              'There is a 95% probability the parameter is in this specific interval.',
              'If we repeated the procedure many times, 95% of the resulting intervals would contain the true parameter.',
              'The estimate is 95% accurate.',
              'The model is 95% correct.',
            ],
            answerIndex: 1,
            explanation: 'A 95% CI is a procedure: in repeated samples, 95% of the intervals contain the true parameter.',
          },
          {
            id: 'ish-q2',
            question: 'A p-value is:',
            options: [
              'The probability that H0 is true.',
              'The probability, under H0, of seeing data as extreme as what was observed.',
              'The probability of rejecting H0 when it is true.',
              'The same as the significance level α.',
            ],
            answerIndex: 1,
            explanation: 'The p-value is the probability (under H0) of observing data as extreme as what was observed.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set H0: μ = 1, true μ = 0, n = 30, α = 0.05. Does the test reject H0?',
          hint: 'A true mean 1 unit away from H0 with n = 30 has z ≈ −5.4.',
          expectedAnswer: 'Yes — p < 0.05, so the test rejects H0. A 1-unit gap is easily detected at n = 30.',
        },
        keyTakeaways: [
          'Sampling lets you study a population via a manageable subset.',
          'Point estimates give one number; confidence intervals give a range.',
          'Hypothesis testing is a four-step recipe: H0/H1, α, statistic, p-value.',
        ],
      },
      {
        id: 'inf-errors-reg-anova',
        number: 90,
        title: '90. Inferential Statistics: Error Types, Regression & ANOVA',
        subtitle: 'Finish the inferential story — the two kinds of mistake you can make, plus regression and ANOVA as the two flagship tests.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '7 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Distinguish Type I and Type II errors',
          'Explain how regression analysis tests a relationship between variables',
          'Explain how ANOVA compares means across groups',
        ],
        concepts: [
          {
            title: 'Error Types',
            paragraphs: [
              'Type I Error (False Positive): Rejecting the null hypothesis when it is actually true.',
              'Type II Error (False Negative): Failing to reject the null hypothesis when it is actually false.',
            ],
            analogy: {
              concept: 'Type I vs Type II',
              metaphor: 'Type I: convicting an innocent person. Type II: letting a guilty person go free.',
              why: 'The cost of each error depends on the domain — in medicine, Type II (missing a disease) is usually worse; in spam, Type I (blocking a real email) is usually worse.',
            },
          },
          {
            title: 'Regression Analysis',
            paragraphs: [
              'Definition: A statistical method for investigating the relationships between variables, typically one dependent variable and one or more independent variables.',
              'Importance: Regression analysis is widely used for prediction and forecasting, where its use has substantial overlap with the field of machine learning.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import numpy as np\nx = np.arange(20); y = 1.5 * x + np.random.randn(20)\nm, b = np.polyfit(x, y, 1)\nprint(f"slope = {m:.2f}, intercept = {b:.2f}")',
            },
          },
          {
            title: 'Analysis of Variance (ANOVA)',
            paragraphs: [
              'Definition: A collection of statistical models used to analyze the differences among group means and their associated procedures (e.g. F-tests).',
              'Importance: ANOVA is used to test hypotheses concerning differences between two or more groups, often used in experiments.',
            ],
          },
        ],
        glossary: [
          { term: 'Type I error', definition: 'Rejecting H0 when it is true (false positive).' },
          { term: 'Type II error', definition: 'Failing to reject H0 when it is false (false negative).' },
          { term: 'ANOVA', definition: 'Analysis of Variance — tests whether group means differ more than chance would predict.' },
          { term: 'F-test', definition: 'The test statistic used in ANOVA: ratio of between-group to within-group variance.' },
        ],
        realWorldExample: {
          scenario: 'A/B/C testing three layouts',
          application: 'ANOVA asks: "Are the three conversion rates really different, or is the variation just noise?" — the F-test answers it in one number.',
          impact: 'Without ANOVA, you would run three pairwise t-tests and inflate the false-positive rate.',
        },
        playground: {
          type: 'inf-errors-reg-anova',
          title: 'Errors, regression and ANOVA',
          instructions: 'Drag the effect-size, group-count, and α sliders. The top chart shows a regression through three coloured groups; the bottom chart shows TP / FP / FN / TN counts. The right panel reports the F-statistic and approximate p-value for ANOVA.',
          expectedOutcome: 'See Type I/II counts shift as α changes; see the F-statistic rise with effect size; see the regression line fit the spread of points.',
        },
        quiz: [
          {
            id: 'iera-q1',
            question: 'A Type I error is:',
            options: [
              'Rejecting H0 when it is actually true.',
              'Failing to reject H0 when it is actually false.',
              'Computing the wrong p-value.',
              'Using the wrong significance level.',
            ],
            answerIndex: 0,
            explanation: 'Type I error: rejecting H0 when it is true — a false positive.',
          },
          {
            id: 'iera-q2',
            question: 'ANOVA tests:',
            options: [
              'Whether two variables are correlated.',
              'Whether several group means differ more than chance.',
              'Whether a single mean equals zero.',
              'Whether a distribution is normal.',
            ],
            answerIndex: 1,
            explanation: 'ANOVA tests whether several group means differ more than chance; the F-test is the test statistic.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set effect-size = 0 and α = 0.05. Roughly what fraction of decisions are Type I errors?',
          hint: 'With no real effect, "reject H0" is always a false positive — about α = 5%.',
          expectedAnswer: 'About 5% — exactly the definition of α.',
        },
        keyTakeaways: [
          'Type I error: rejecting a true H0. Type II error: failing to reject a false H0.',
          'Regression analysis quantifies a relationship between variables.',
          'ANOVA tests whether several group means differ more than chance.',
        ],
      },
      {
        id: 'bayesian',
        number: 91,
        title: '91. Bayesian Statistics: Prior, Likelihood, Posterior & MCMC',
        subtitle: 'Bayesian statistics treats probability as a measure of belief — combine a prior with evidence to get a posterior, and use MCMC when that posterior is hard to compute.',
        pathId: 'data-science-4',
        pathTitle: 'Data Science IV · Math & Stats',
        readingTime: '7 mins',
        difficulty: 'Advanced',
        objectives: [
          'State Bayes\' theorem and the prior / likelihood / posterior trio',
          'Combine a prior with a likelihood to get a posterior',
          'Recognise when MCMC is needed and what it does',
        ],
        concepts: [
          {
            title: 'Bayes\' Theorem (recap)',
            paragraphs: [
              'Bayes\' Theorem is the cornerstone of Bayesian statistics, expressing the probability of an event based on prior knowledge of conditions related to the event. P(A | B) = P(B | A) · P(A) / P(B).',
              'It is used to update the probability as new evidence is integrated, making it a dynamic and adaptable approach to statistical inference.',
            ],
          },
          {
            title: 'Prior, Likelihood, and Posterior',
            paragraphs: [
              'Prior Probability (Prior): The probability distribution that would express one\'s beliefs about a variable before some evidence is taken into account.',
              'Likelihood: A function of the parameters of the statistical model given the data. Likelihood measures the support provided by the data for each possible value of the parameter.',
              'Posterior Probability (Posterior): The probability distribution after taking the evidence into account, derived from the prior probability and the likelihood.',
              'These components are crucial in Bayesian analysis as they sequentially update the belief in the light of new data.',
            ],
          },
          {
            title: 'Bayesian Inference',
            paragraphs: [
              'Definition: The process of deducing properties about a population or probabilistic relationships from data using Bayes\' Theorem.',
              'Process: It involves calculating the posterior distribution and making probabilistic statements about the parameters and predictions.',
              'Importance: Bayesian inference provides a comprehensive probabilistic approach to statistical inference, allowing for more flexible conclusions than classical statistical methods.',
            ],
          },
          {
            title: 'Markov Chain Monte Carlo (MCMC)',
            paragraphs: [
              'Definition: A class of algorithms used to sample from a probability distribution based on constructing a Markov chain that has the desired distribution as its equilibrium distribution.',
              'Importance: MCMC methods are often used in Bayesian statistics to compute the posterior distribution when it is too complex to calculate directly.',
            ],
          },
          {
            title: 'Advantages of Bayesian Statistics',
            paragraphs: [
              'Incorporation of Prior Knowledge: Allows the integration of expert knowledge or historical data before examining current data.',
              'Probabilistic Interpretation: Provides a natural and quantitative way to make probabilistic statements about unknown parameters.',
              'Flexibility in Model Updating: Ability to update the model as new data arrives, making it particularly useful in real-time analytics.',
            ],
          },
        ],
        glossary: [
          { term: 'Prior', definition: 'The probability distribution that encodes beliefs about a parameter before seeing the data.' },
          { term: 'Likelihood', definition: 'The probability of the observed data as a function of the parameter — P(data | θ).' },
          { term: 'Posterior', definition: 'The updated distribution after combining the prior with the data — P(θ | data) ∝ P(data | θ) · P(θ).' },
          { term: 'MCMC', definition: 'Markov Chain Monte Carlo — a class of sampling algorithms for approximating a posterior when it cannot be computed in closed form.' },
        ],
        realWorldExample: {
          scenario: 'A/B testing with a low-volume metric',
          application: 'A frequentist A/B test would need many samples to detect a small lift; a Bayesian test with a reasonable prior detects the same lift with much less data — and gives a posterior distribution of the lift instead of a single p-value.',
          impact: 'Bayesian methods are the standard for low-volume or slowly-accumulating experiments.',
        },
        playground: {
          type: 'bayesian',
          title: 'Combine a prior with a likelihood',
          instructions: 'Drag the prior mean, prior std, sample mean, sample std, and sample-size sliders. The chart overlays the prior, the (rescaled) likelihood, and the resulting posterior. As n grows, the posterior tightens around the data.',
          expectedOutcome: 'See the posterior start as a compromise between the prior and the likelihood, then collapse onto the data as n grows — and become narrower as more data comes in.',
        },
        quiz: [
          {
            id: 'bay-q1',
            question: 'The posterior is proportional to:',
            options: ['Prior only', 'Likelihood only', 'Prior × Likelihood', 'Prior / Likelihood'],
            answerIndex: 2,
            explanation: 'Posterior ∝ Prior × Likelihood (normalised by P(data)).',
          },
          {
            id: 'bay-q2',
            question: 'MCMC is used when:',
            options: [
              'We have a closed-form posterior.',
              'The posterior is too complex to compute directly.',
              'The data is missing.',
              'The prior is uniform.',
            ],
            answerIndex: 1,
            explanation: 'MCMC is used when the posterior is too complex to compute in closed form — it samples from the posterior instead.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set the prior mean to 0, the sample mean to 2, and the sample size to 100. Where does the posterior sit?',
          hint: 'With a lot of data, the posterior is pulled almost entirely to the data.',
          expectedAnswer: 'Very close to 2 — the data dominate the prior when n is large.',
        },
        keyTakeaways: [
          'Bayes\' theorem: posterior ∝ prior × likelihood.',
          'MCMC samples the posterior when it cannot be computed in closed form.',
          'Bayesian methods incorporate prior knowledge and update naturally as new data arrives.',
        ],
      },
    ],
  },
  {
    id: 'data-science-5',
    title: 'Data Science V · Machine Learning',
    description: 'Master every machine learning model and concept covered in the book — from linear regression and SVMs to decision trees, random forests, and gradient boosting — with hands-on simulators at every step.',
    icon: 'Brain',
    lessons: [
      {
        id: 'ml-intro',
        number: 92,
        title: '92. Machine Learning in Data Science',
        subtitle: 'A pivotal branch of AI that focuses on systems that learn from data — definition, purpose, key aspects, and why it matters.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '5 mins',
        difficulty: 'Beginner',
        objectives: [
          'Define machine learning and its purpose',
          'Name the key aspects of ML from the book',
          'Explain why ML is important in data science',
        ],
        concepts: [
          {
            title: 'Definition and Purpose',
            paragraphs: [
              'Definition: Machine learning is a method of data analysis that automates analytical model building. Using algorithms that iteratively learn from data, machine learning allows computers to find hidden insights without being explicitly programmed where to look.',
              'Purpose: The main aim is to allow computers to learn automatically without human intervention or assistance and adjust actions accordingly.',
            ],
            analogy: {
              concept: 'Machine learning',
              metaphor: 'A student who learns by doing thousands of practice problems, not by being told the rules — the rules emerge from the patterns in the data.',
              why: 'ML is most useful when the rule is too complex to write by hand, but lots of examples exist.',
            },
          },
          {
            title: 'Key Aspects of Machine Learning',
            paragraphs: [
              '1. Definition and Purpose: the core definition and aim above.',
              '2. Types of Machine Learning: Supervised, Unsupervised, Reinforcement.',
              '3. Model Training and Evaluation: Training involves selecting an algorithm and fitting parameters. Evaluation uses a separate test dataset; common metrics include accuracy, precision, recall, F1-score, and ROC curves.',
              '4. Challenges in Machine Learning: Overfitting and Underfitting; the Bias-Variance Tradeoff.',
              '5. Applications of Machine Learning: chatbots, recommendation systems, medical diagnosis, predictive analytics, self-driving cars.',
            ],
          },
          {
            title: 'Importance of ML in Data Science',
            paragraphs: [
              'Machine learning enhances data science by providing powerful tools to automate decision-making processes and offer predictions that are based on data patterns.',
              'This not only improves efficiency but also opens new avenues for data analysis and interpretation that are not possible with traditional statistical methods.',
            ],
          },
        ],
        glossary: [
          { term: 'Algorithm', definition: 'A step-by-step procedure for solving a problem or accomplishing a task — the recipe an ML model learns.' },
        ],
        realWorldExample: {
          scenario: 'A streaming service that recommends what to watch next',
          application: 'A supervised learning model predicts engagement from millions of past viewing events; the model retrains nightly on new data.',
          impact: 'Recommenders are the most visible ML product in the consumer economy.',
        },
        playground: {
          type: 'ml-intro',
          title: 'The five key aspects at a glance',
          instructions: 'Click through the cards on the left to see what each of the five key aspects of ML means in practice.',
          expectedOutcome: 'Be able to recall the five aspects and the book\'s definition of ML.',
        },
        quiz: [
          {
            id: 'mli-q1',
            question: 'The book defines machine learning as:',
            options: [
              'A method of data analysis that automates analytical model building.',
              'A type of database.',
              'A programming language.',
              'A statistical test.',
            ],
            answerIndex: 0,
            explanation: 'The book: "Machine learning is a method of data analysis that automates analytical model building."',
          },
          {
            id: 'mli-q2',
            question: 'Which is NOT one of the book\'s five key aspects?',
            options: ['Types of ML', 'Model training and evaluation', 'Challenges', 'Cloud computing'],
            answerIndex: 3,
            explanation: 'The book lists Definition & Purpose, Types, Training & Evaluation, Challenges, Applications — not Cloud computing.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, click "Applications". What does the book say ML is used for?',
          hint: 'The list mixes customer service, recommendation, and high-stakes examples.',
          expectedAnswer: 'Chatbots, recommendation systems, medical diagnosis, predictive analytics, self-driving cars.',
        },
        keyTakeaways: [
          'ML is a method of data analysis that automates model building.',
          'Five key aspects: Definition, Types, Training & Evaluation, Challenges, Applications.',
          'ML enhances data science by automating decision-making based on data patterns.',
        ],
      },
      {
        id: 'ml-types',
        number: 93,
        title: '93. Types of Machine Learning',
        subtitle: 'The three families — Supervised, Unsupervised, and Reinforcement — each learn from a different kind of signal.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '5 mins',
        difficulty: 'Beginner',
        objectives: [
          'Name the three types of ML and the kind of data each uses',
          'Match an example to the right type',
          'Recognise the boundary between types in real problems',
        ],
        concepts: [
          {
            title: 'Supervised Learning',
            paragraphs: [
              'Supervised Learning: Involves training a model on a labeled dataset, where the model learns to predict outcomes from input data. Supervised learning is used for applications such as fraud detection, risk assessment, and customer segmentation.',
            ],
          },
          {
            title: 'Unsupervised Learning',
            paragraphs: [
              'Unsupervised Learning: Involves training on data without labeled responses, where the model learns to identify inherent structures from the input data. It\'s typically used for clustering and association problems, like customer segmentation or market basket analysis.',
            ],
          },
          {
            title: 'Reinforcement Learning',
            paragraphs: [
              'Reinforcement Learning: Models learn to make decisions by trying to maximize some notion of cumulative reward. This type of learning is used in navigation, gaming, and real-time decision-making systems.',
            ],
          },
        ],
        glossary: [
          { term: 'Label', definition: 'The "correct answer" attached to a training example — the supervision in supervised learning.' },
          { term: 'Reward', definition: 'A scalar feedback signal in reinforcement learning that the agent tries to maximise.' },
        ],
        realWorldExample: {
          scenario: 'A self-driving car stack',
          application: 'Perception (lane detection) is supervised; behaviour clustering is unsupervised; motion planning is often reinforcement learning.',
          impact: 'The same product uses all three types of ML — understanding the split is what makes the architecture work.',
        },
        playground: {
          type: 'ml-types',
          title: 'Switch between Supervised, Unsupervised, RL',
          instructions: 'Click each card on the left. The right panel shows the data signal (labeled / unlabeled / reward) and a list of example applications.',
          expectedOutcome: 'Be able to point at a use case and name its ML type.',
        },
        quiz: [
          {
            id: 'mlt-q1',
            question: 'A model trained on a dataset with no labels is doing:',
            options: ['Supervised learning', 'Unsupervised learning', 'Reinforcement learning', 'Semi-supervised learning'],
            answerIndex: 1,
            explanation: 'Unsupervised learning trains on data without labeled responses — it finds structure on its own.',
          },
          {
            id: 'mlt-q2',
            question: 'Reinforcement learning is best suited for:',
            options: ['Predicting house prices', 'Customer segmentation', 'Navigation and gaming', 'Image classification'],
            answerIndex: 2,
            explanation: 'RL maximises a cumulative reward — navigation, gaming, and real-time decisions are the canonical examples.',
          },
        ],
        practiceExercise: {
          task: 'Click "Unsupervised". Which of the listed examples matches customer segmentation?',
          hint: 'Customer segmentation = grouping customers = clustering.',
          expectedAnswer: 'Customer segmentation — a clustering task, which is unsupervised.',
        },
        keyTakeaways: [
          'Supervised: learn from labeled examples.',
          'Unsupervised: learn the structure of unlabeled data.',
          'Reinforcement: learn a policy that maximises a reward signal.',
        ],
      },
      {
        id: 'ml-train-eval',
        number: 94,
        title: '94. Model Training, Evaluation & Challenges',
        subtitle: 'How models are trained and tested, and the overfitting / bias-variance tradeoff that decides whether they will work in production.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '6 mins',
        difficulty: 'Beginner',
        objectives: [
          'Describe the training and evaluation loop',
          'Name common evaluation metrics',
          'Define overfitting, underfitting, and the bias-variance tradeoff',
        ],
        concepts: [
          {
            title: 'Model Training and Evaluation',
            paragraphs: [
              'Training Process: Involves selecting an appropriate algorithm and using a training dataset to fit the model. The model learns by adjusting its parameters to minimize errors.',
              'Evaluation: Once trained, the model is tested against a separate set of data (test dataset) to evaluate its accuracy and effectiveness. Common metrics include accuracy, precision, recall, F1-score, and ROC curves.',
            ],
            analogy: {
              concept: 'Train / test split',
              metaphor: 'Studying for an exam using past papers, then sitting a fresh exam — the test set is the fresh exam.',
              why: 'If you grade yourself on the papers you studied, you cannot tell whether you learned the topic or just memorised the questions.',
            },
          },
          {
            title: 'Challenges in Machine Learning',
            paragraphs: [
              'Overfitting and Underfitting: These are common challenges where a model is either too complex or too simplistic to perform well.',
              'Bias-Variance Tradeoff: Managing the tradeoff between bias (error due to erroneous assumptions) and variance (error due to randomness in the training data) is crucial for building effective models.',
            ],
          },
        ],
        glossary: [
          { term: 'Overfitting', definition: 'A model is too complex and memorises the training set rather than generalising.' },
          { term: 'Underfitting', definition: 'A model is too simple to capture the underlying pattern in the data.' },
          { term: 'Bias-variance tradeoff', definition: 'The tension between error from oversimplification (bias) and error from over-sensitivity to the training set (variance).' },
        ],
        realWorldExample: {
          scenario: 'A churn model that performs well in training but poorly in production',
          application: 'Overfitting to last quarter\'s data. The fix: a held-out test set, cross-validation, and regularisation.',
          impact: 'Bias-variance management is the difference between a model that ships and a model that quietly loses money.',
        },
        playground: {
          type: 'ml-train-eval',
          title: 'Underfit / balanced / overfit',
          instructions: 'Drag the Model-complexity slider. Watch the train vs validation chart and the status badge change from "underfit" to "balanced" to "overfit".',
          expectedOutcome: 'See how the model\'s fit changes as complexity grows, and read the bias-variance status from the chart.',
        },
        quiz: [
          {
            id: 'mte-q1',
            question: 'Which is NOT a common evaluation metric the book names?',
            options: ['Accuracy', 'Precision', 'Recall', 'Cooking time'],
            answerIndex: 3,
            explanation: 'The book lists accuracy, precision, recall, F1-score, and ROC curves — not cooking time.',
          },
          {
            id: 'mte-q2',
            question: 'High bias and high variance together mean the model is:',
            options: ['Well-fit', 'Underfit only', 'Overfit only', 'Both underfit and unstable — a sign something is wrong'],
            answerIndex: 3,
            explanation: 'A well-fit model has low bias AND low variance; both high is a signal of trouble.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set the complexity to 1. What does the status badge say, and why?',
          hint: 'A linear model on a curved cloud cannot follow the curve.',
          expectedAnswer: 'Underfit — the model is too simple to capture the curvature in the data.',
        },
        keyTakeaways: [
          'Train on one set of examples, evaluate on a separate set.',
          'Common metrics: accuracy, precision, recall, F1-score, ROC curves.',
          'Overfit / underfit / bias-variance tradeoff: the central challenge in ML.',
        ],
      },
      {
        id: 'ml-tasks',
        number: 95,
        title: '95. Common Machine Learning Tasks',
        subtitle: 'The three families of tasks — supervised, unsupervised, reinforcement — and the specific sub-tasks that appear inside each.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '5 mins',
        difficulty: 'Beginner',
        objectives: [
          'List the tasks under each ML family',
          'Match a real problem to the right task',
          'See how finance, marketing and healthcare use different tasks',
        ],
        concepts: [
          {
            title: 'Supervised Learning Tasks',
            paragraphs: [
              'Supervised learning involves training a model on a labeled dataset, where the correct answers (targets) are known.',
              'Classification: The goal is to predict the categorical label of new observations. Examples: spam detection, image recognition, patient diagnosis. Popular algorithms: logistic regression, decision trees, support vector machines, and neural networks.',
              'Regression: Used for predicting continuous values. Examples: sales amounts, temperature forecasts, adjustments in stock prices. Linear regression, polynomial regression, and ridge regression are common algorithms.',
            ],
          },
          {
            title: 'Unsupervised Learning Tasks',
            paragraphs: [
              'Unsupervised learning involves training the model using information that is neither classified nor labeled, allowing the algorithm to act on the data without guidance.',
              'Clustering: Divide the dataset into groups. Examples: customer segmentation, organising large databases. Techniques: K-means, hierarchical cluster analysis (HCA), expectation maximisation.',
              'Dimensionality Reduction: Reduce the number of random variables. Techniques: PCA, t-SNE.',
            ],
          },
          {
            title: 'Reinforcement Learning Tasks',
            paragraphs: [
              'Policy Optimization: Learn a policy (strategy) that dictates the action to be taken. Algorithms: Policy Gradient, Actor-Critic.',
              'Value Learning: Estimate how good it is to be in a state or to perform an action. Techniques: Q-Learning, Value Iteration.',
            ],
          },
          {
            title: 'Applications Across Domains',
            paragraphs: [
              'In finance, regression tasks can predict stock prices, while classification helps assess credit risk.',
              'In marketing, clustering assists in customer segmentation, and reinforcement learning can optimize buying strategies.',
              'In healthcare, classification tasks help in diagnosing diseases, and regression tasks can predict patient recovery time.',
            ],
          },
        ],
        glossary: [
          { term: 'Policy', definition: 'In RL, a rule that maps a state to the action the agent will take.' },
          { term: 'Value function', definition: 'In RL, a function that estimates the expected future reward from a state or state-action pair.' },
        ],
        realWorldExample: {
          scenario: 'Netflix recommendation stack',
          application: 'Regression to predict the rating you would give; classification to predict click/no-click; clustering to discover user personas; RL to optimise the page layout in real time.',
          impact: 'Most production systems combine all three task families.',
        },
        playground: {
          type: 'ml-tasks',
          title: 'The three task families',
          instructions: 'Switch between the three buttons on the left. The right panel lists the sub-tasks for each family and the cross-industry applications.',
          expectedOutcome: 'Be able to point at a problem and name both the family and the sub-task.',
        },
        quiz: [
          {
            id: 'mtk-q1',
            question: 'Predicting stock prices is which task?',
            options: ['Classification', 'Regression', 'Clustering', 'Policy optimisation'],
            answerIndex: 1,
            explanation: 'Stock prices are continuous — that is regression.',
          },
          {
            id: 'mtk-q2',
            question: 'Customer segmentation is which task?',
            options: ['Classification', 'Regression', 'Clustering', 'Value learning'],
            answerIndex: 2,
            explanation: 'Segmentation divides customers into groups — clustering, an unsupervised task.',
          },
        ],
        practiceExercise: {
          task: 'Switch to "Reinforcement" in the simulator. Which two sub-tasks does the book list?',
          hint: 'Read the right panel.',
          expectedAnswer: 'Policy Optimization and Value Learning.',
        },
        keyTakeaways: [
          'Supervised: Classification (categorical) and Regression (continuous).',
          'Unsupervised: Clustering and Dimensionality Reduction.',
          'Reinforcement: Policy Optimization and Value Learning.',
        ],
      },
      {
        id: 'supervised-intro',
        number: 96,
        title: '96. Supervised Learning in Machine Learning',
        subtitle: 'The dominant branch of ML — train on labeled data, build a model that maps inputs to outputs, predict on new data.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '4 mins',
        difficulty: 'Beginner',
        objectives: [
          'State what supervised learning is and what "labeled" means',
          'Name the seven supervised models the book lists',
          'Divide them into classification and regression roles',
        ],
        concepts: [
          {
            title: 'What supervised learning is',
            paragraphs: [
              'Supervised learning is a type of machine learning where an algorithm is trained on a labeled dataset. In this context, "labeled" means that each training example is paired with an output label provided by a supervisor or teacher.',
              'The algorithm receives a set of inputs along with the corresponding correct outputs, and its task is to learn a general rule that maps inputs to outputs.',
              'The primary goal of supervised learning is to build a model that can make accurate predictions for new, unseen data based on the learned relationships from the training data.',
              'Supervised learning is typically divided into two main types: classification (categorical outputs) and regression (continuous outputs).',
            ],
          },
          {
            title: 'Examples of Supervised Learning Models (the book\'s list)',
            paragraphs: [
              'The book lists seven supervised models:',
              'Linear Regression · Logistic Regression · Support Vector Machines (SVM) · Decision Trees · Random Forests · Gradient Boosting Machines (GBM) · Neural Networks.',
              'Each of these models has its own strengths and is chosen based on the specific requirements of the data and the problem being solved.',
            ],
          },
        ],
        glossary: [
          { term: 'Supervised learning', definition: 'Training a model on labeled examples to learn a general mapping from inputs to outputs.' },
        ],
        realWorldExample: {
          scenario: 'A credit-scoring model',
          application: 'Each past loan is labeled "defaulted" or "not". The model learns a rule that scores new applications.',
          impact: 'Supervised learning is the workhorse of business ML — most deployed models are supervised.',
        },
        playground: {
          type: 'supervised-intro',
          title: 'The seven supervised models',
          instructions: 'Click any model card. The right panel explains the supervised setting and the input/output mapping.',
          expectedOutcome: 'Be able to name the seven models and tell which is for classification vs. regression vs. both.',
        },
        quiz: [
          {
            id: 'si-q1',
            question: 'In supervised learning, "labeled" means:',
            options: [
              'The data is on a label sticker.',
              'Each training example is paired with an output label.',
              'The model has been printed.',
              'The labels are pre-trained.',
            ],
            answerIndex: 1,
            explanation: 'Labeled = each example comes with the correct answer (the output label).',
          },
          {
            id: 'si-q2',
            question: 'Which of the book\'s seven models is for BOTH classification and regression?',
            options: ['Linear Regression', 'Logistic Regression', 'Decision Trees', 'None of the above'],
            answerIndex: 2,
            explanation: 'Linear and logistic regression are single-purpose; decision trees, random forests, GBM, and neural networks handle both.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, identify the three models that are for BOTH classification and regression.',
          hint: 'Look at the "task" badge on each model card.',
          expectedAnswer: 'Decision Trees, Random Forests, Gradient Boosting Machines (GBM), and Neural Networks — all four handle both.',
        },
        keyTakeaways: [
          'Supervised learning trains on labeled examples to learn an input→output rule.',
          'Two task types: classification (categorical) and regression (continuous).',
          'The book lists seven models — the next lessons cover each one.',
        ],
      },
      {
        id: 'reg-vs-class',
        number: 97,
        title: '97. Regression vs Classification',
        subtitle: 'The two core supervised tasks — same goal (predict from features), different output type (continuous vs discrete).',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '4 mins',
        difficulty: 'Beginner',
        objectives: [
          'Distinguish regression from classification on output type, metrics, and algorithms',
          'Match a real problem to the right task',
          'Recognise why some algorithms are tied to one task',
        ],
        concepts: [
          {
            title: 'Regression',
            paragraphs: [
              'Definition: Regression analysis is used to predict continuous numerical values based on the input variables. It is fundamentally about estimating or forecasting a response.',
              'Characteristics: The output is quantitative — prices, temperatures, quantities. Models are evaluated on how well they minimise the error between predicted and actual values. Common performance metrics: Mean Squared Error (MSE) and Root Mean Squared Error (RMSE).',
              'Common Types of Regression Models: Linear Regression; Polynomial Regression (adds polynomial terms for non-linear relationships); Ridge and Lasso Regression (regularisation to prevent overfitting).',
            ],
          },
          {
            title: 'Classification',
            paragraphs: [
              'Definition: Classification is used to predict categorical outcomes. The algorithm assigns data points to predefined discrete classes or categories.',
              'Characteristics: The output is a category — spam/non-spam, positive/negative, type of species. Evaluation: accuracy, precision, recall, F1-score, and the area under the ROC curve.',
              'Common Types: Logistic Regression (binary classification); Decision Trees; Random Forests; Support Vector Machines (SVM).',
            ],
          },
          {
            title: 'Key Differences',
            paragraphs: [
              'Output Type: Regression outputs are continuous numbers; classification outputs are discrete labels.',
              'Evaluation Metrics: Regression — MSE / RMSE; Classification — accuracy, precision, recall, confusion matrix.',
              'Algorithms: Linear regression cannot be used directly for classification; logistic regression is typically unsuitable for regression tasks.',
            ],
          },
        ],
        glossary: [
          { term: 'MSE', definition: 'Mean Squared Error — the average of (yᵢ − ŷᵢ)². The standard regression loss.' },
          { term: 'RMSE', definition: 'Root Mean Squared Error — √MSE. On the same scale as the target.' },
        ],
        realWorldExample: {
          scenario: 'Loan approval',
          application: 'Score (regression) then threshold → approve / reject (classification). The two tasks live in the same pipeline.',
          impact: 'Most real systems mix regression and classification — knowing which is which is what makes the pipeline work.',
        },
        playground: {
          type: 'reg-vs-class',
          title: 'Side-by-side comparison',
          instructions: 'Read the comparison table. Notice how the metrics and the algorithms change between the two tasks.',
          expectedOutcome: 'Be able to pick the right task and the right evaluation metric for a new problem.',
        },
        quiz: [
          {
            id: 'rvc-q1',
            question: 'Predicting house price is:',
            options: ['Classification', 'Regression', 'Clustering', 'Policy learning'],
            answerIndex: 1,
            explanation: 'Price is continuous — regression.',
          },
          {
            id: 'rvc-q2',
            question: 'The book says linear regression cannot be used directly for classification. Why?',
            options: [
              'It is too slow.',
              'It outputs a real number, not a class label — and no threshold is built in.',
              'It only works on images.',
              'It is supervised.',
            ],
            answerIndex: 1,
            explanation: 'Linear regression outputs a real-valued score; a separate threshold or sigmoid is needed to turn it into a class label.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, find a regression model and a classification model from the book\'s lists and note the metric used for each.',
          hint: 'Look at the "Metrics" row.',
          expectedAnswer: 'Regression → MSE / RMSE; Classification → accuracy / precision / recall / F1 / ROC.',
        },
        keyTakeaways: [
          'Regression: continuous output — metrics MSE, RMSE.',
          'Classification: discrete output — metrics accuracy, precision, recall, F1, ROC.',
          'Algorithms are often tied to one task — linear regression is regression, logistic is classification.',
        ],
      },
      {
        id: 'ml-models-reg',
        number: 98,
        title: '98. Common Regression Models',
        subtitle: 'The four regression models the book names — Linear, Polynomial, Ridge, and Lasso — and the domains where they appear.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '5 mins',
        difficulty: 'Beginner',
        objectives: [
          'Name the four regression models the book lists',
          'Describe each in one sentence',
          'Match a domain (economics, business, biology) to a use case',
        ],
        concepts: [
          {
            title: 'Common Types of Regression Models',
            paragraphs: [
              'Linear Regression: Predicts the dependent variable based on the linear relationship between variables.',
              'Polynomial Regression: Extends linear models by adding polynomial terms, enhancing the capability to capture non-linear relationships.',
              'Ridge and Lasso Regression: These incorporate regularisation techniques to reduce model complexity and prevent overfitting.',
            ],
          },
          {
            title: 'Applications of Linear Regression',
            paragraphs: [
              'Linear regression is widely used in economics, business, social sciences, biology, and many other disciplines where relationships between variables need to be understood and predictions are necessary.',
              'It is particularly useful for forecasting (e.g. sales and finance), evaluating trends, and testing hypotheses. In summary, linear regression is a powerful tool for modeling and predicting continuous outcomes. Its simplicity and interpretability make it an indispensable method in the data scientist\'s toolkit.',
            ],
          },
        ],
        glossary: [
          { term: 'Polynomial features', definition: 'Adding x², x³, … as extra features so a linear model can fit a curve.' },
          { term: 'Regularisation', definition: 'Adding a penalty on the size of the coefficients to control model complexity.' },
        ],
        realWorldExample: {
          scenario: 'Forecasting quarterly sales',
          application: 'A linear regression on price, promotions, and seasonality gives an interpretable forecast that the sales team can reason about.',
          impact: 'Linear regression is the baseline any other forecasting model has to beat.',
        },
        playground: {
          type: 'ml-models-reg',
          title: 'The four regression models',
          instructions: 'Click each model on the left. The right panel lists the domains where linear regression is used.',
          expectedOutcome: 'Be able to name and describe Linear, Polynomial, Ridge, and Lasso regression.',
        },
        quiz: [
          {
            id: 'mr-q1',
            question: 'Polynomial regression adds which kind of terms to a linear model?',
            options: ['Logarithmic', 'Polynomial (x², x³, …)', 'Trigonometric', 'Categorical'],
            answerIndex: 1,
            explanation: 'Polynomial regression adds polynomial terms — x², x³, … — to capture non-linear relationships.',
          },
          {
            id: 'mr-q2',
            question: 'Ridge and Lasso are described as:',
            options: [
              'Two types of regularised linear regression.',
              'Two tree-based models.',
              'Two clustering algorithms.',
              'Two neural networks.',
            ],
            answerIndex: 0,
            explanation: 'The book: "Ridge and Lasso regression are two types of regularised linear regression techniques that are used to prevent overfitting."',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, click the "Linear Regression" card. What does the book say about its interpretability?',
          hint: 'Read the application panel on the right.',
          expectedAnswer: 'Its simplicity and interpretability make it indispensable in the data scientist\'s toolkit.',
        },
        keyTakeaways: [
          'Four regression models: Linear, Polynomial, Ridge, Lasso.',
          'Polynomial regression captures non-linear shapes by adding x², x³, …',
          'Ridge and Lasso add regularisation to control complexity and prevent overfitting.',
        ],
      },
      {
        id: 'ml-models-class',
        number: 99,
        title: '99. Common Classification Models',
        subtitle: 'The four classification models the book names — Logistic Regression, Decision Trees, Random Forests, and SVMs — and their evaluation metrics.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '4 mins',
        difficulty: 'Beginner',
        objectives: [
          'Name the four classification models the book lists',
          'Match an algorithm to its task',
          'Recall the five classification metrics',
        ],
        concepts: [
          {
            title: 'Common Types of Classification Models',
            paragraphs: [
              'Logistic Regression: Despite the name, it\'s used for binary classification problems.',
              'Decision Trees: Models that predict the class by learning simple decision rules inferred from the features.',
              'Random Forests: An ensemble of decision trees, typically used to improve the predictive accuracy and control overfitting.',
              'Support Vector Machines (SVM): Effective in high-dimensional spaces, and particularly suited for binary classification problems.',
            ],
          },
          {
            title: 'Classification Evaluation',
            paragraphs: [
              'Classification models are typically evaluated based on their accuracy, precision, recall, F1-score, and the area under the receiver operating characteristic (ROC) curve.',
            ],
          },
        ],
        glossary: [
          { term: 'ROC AUC', definition: 'Area Under the ROC Curve — a threshold-free summary of ranking quality.' },
        ],
        realWorldExample: {
          scenario: 'Spam detection',
          application: 'Logistic regression on bag-of-words features is the classic baseline. Modern systems use ensembles (Random Forest / GBM) or deep models.',
          impact: 'The metrics — precision, recall, F1 — are what decide whether the spam filter is shipped.',
        },
        playground: {
          type: 'ml-models-class',
          title: 'The four classification models',
          instructions: 'Click each model on the left. The right panel lists the five evaluation metrics the book names.',
          expectedOutcome: 'Be able to name Logistic Regression, Decision Trees, Random Forests, and SVMs as classification models — and to list the five metrics.',
        },
        quiz: [
          {
            id: 'mc-q1',
            question: 'Which of these is for classification?',
            options: ['Linear Regression', 'Ridge Regression', 'Logistic Regression', 'Polynomial Regression'],
            answerIndex: 2,
            explanation: 'Logistic regression is the classification model — despite the name.',
          },
          {
            id: 'mc-q2',
            question: 'Random Forests for classification are:',
            options: [
              'A single decision tree.',
              'An ensemble of decision trees that improves accuracy and controls overfitting.',
              'A kernel method.',
              'A linear model.',
            ],
            answerIndex: 1,
            explanation: 'Random Forests = ensemble of decision trees.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, list the five classification metrics the book names.',
          hint: 'Read the right panel.',
          expectedAnswer: 'Accuracy, Precision, Recall, F1-score, and the area under the ROC curve.',
        },
        keyTakeaways: [
          'Four classification models: Logistic Regression, Decision Trees, Random Forests, SVMs.',
          'Five metrics: Accuracy, Precision, Recall, F1-score, ROC AUC.',
          'The model is a tool — the metrics decide whether the tool is fit for production.',
        ],
      },
      {
        id: 'linear-reg-2',
        number: 100,
        title: '100. Linear Regression',
        subtitle: 'A fundamental statistical and ML method — fit a linear equation to observed data, estimating coefficients via least squares.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '5 mins',
        difficulty: 'Beginner',
        objectives: [
          'State the mathematical form of a linear regression model',
          'Explain the least-squares criterion for estimating coefficients',
          'Recognise where linear regression is used in the real world',
        ],
        concepts: [
          {
            title: 'Mathematical Formulation',
            paragraphs: [
              'Linear regression is a fundamental statistical and machine learning method used to model the relationship between a dependent variable and one or more independent variables by fitting a linear equation to observed data. The parameters of the model are fitted such that they minimize the total error of the model.',
              'The general form of a linear regression model is: y = β₀ + β₁x₁ + β₂x₂ + … + βₚxₚ + ε.',
            ],
            codeSnippet: {
              language: 'python',
              code: 'import numpy as np\nbeta, *_ = np.linalg.lstsq(X, y, rcond=None)\nyhat = X @ beta',
            },
          },
          {
            title: 'Estimation of Coefficients',
            paragraphs: [
              'The coefficients are estimated using the least squares criterion, which involves minimizing the sum of the squared differences between the observed values and the values predicted by the model.',
              'Mathematically, the objective is: minimise Σ(yᵢ − ŷᵢ)².',
            ],
          },
          {
            title: 'Applications',
            paragraphs: [
              'Linear regression is widely used in economics, business, social sciences, biology, and many other disciplines where relationships between variables need to be understood and predictions are necessary.',
              'It is particularly useful for forecasting (e.g. sales and finance), evaluating trends, and testing hypotheses.',
              'In summary, linear regression is a powerful tool for modeling and predicting continuous outcomes. Its simplicity and interpretability make it an indispensable method in the data scientist\'s toolkit.',
            ],
          },
        ],
        glossary: [
          { term: 'Least squares', definition: 'The estimation principle that picks coefficients which minimise Σ(yᵢ − ŷᵢ)².' },
          { term: 'Residual', definition: 'The vertical distance yᵢ − ŷᵢ between an observation and the predicted value.' },
        ],
        realWorldExample: {
          scenario: 'Forecasting daily demand for a retail product',
          application: 'Fit a linear regression on price, day of week, and weather; use the coefficients to predict demand and optimise stock.',
          impact: 'Linear regression is the simplest model that still gives interpretable, defensible coefficients — the right starting point.',
        },
        playground: {
          type: 'linear-reg-2',
          title: 'Fit a line by least squares',
          instructions: 'Drag the Slope, Intercept, and Sample size sliders. Watch SSE and the fit update.',
          expectedOutcome: 'See SSE minimised at the best slope and intercept — and grow when the line drifts away from the data.',
        },
        quiz: [
          {
            id: 'lr-q1',
            question: 'The book says linear regression coefficients are fitted to:',
            options: ['Maximise the absolute residuals.', 'Minimise the sum of squared residuals.', 'Maximise the variance.', 'Minimise the sample size.'],
            answerIndex: 1,
            explanation: 'Least squares: minimise Σ(yᵢ − ŷᵢ)².',
          },
          {
            id: 'lr-q2',
            question: 'Linear regression is the most-used model for:',
            options: ['Image generation', 'Forecasting and trend evaluation', 'Text-to-speech', 'Reinforcement learning'],
            answerIndex: 1,
            explanation: 'The book calls it indispensable for forecasting, evaluating trends, and testing hypotheses.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set the slope to 0. What happens to SSE?',
          hint: 'A flat line cannot follow an upward trend.',
          expectedAnswer: 'SSE becomes large — the line ignores the trend in the data.',
        },
        keyTakeaways: [
          'Linear regression models y as a linear combination of features.',
          'Coefficients are estimated by least squares — minimising SSE.',
          'Indispensable for forecasting, trend evaluation, and hypothesis testing.',
        ],
      },
      {
        id: 'ridge-lasso',
        number: 101,
        title: '101. Ridge and Lasso Regression',
        subtitle: 'Regularised linear regression techniques that prevent overfitting by penalising large coefficients.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '6 mins',
        difficulty: 'Intermediate',
        objectives: [
          'State the difference between Ridge (L2) and Lasso (L1) regularisation',
          'Choose between them based on whether you need feature selection',
          'Explain why both add bias but reduce variance compared to OLS',
        ],
        concepts: [
          {
            title: 'Why Regularised Regression?',
            paragraphs: [
              'Ridge and Lasso regression are two types of regularised linear regression techniques that are used to prevent overfitting by introducing a regularization penalty to the model.',
              'These techniques are particularly useful when dealing with multicollinearity or when the number of predictors (independent variables) in a dataset exceeds the number of observations.',
            ],
          },
          {
            title: 'Ridge Regression (L2)',
            paragraphs: [
              'Mathematical Formulation: Ridge regression modifies the least squares objective function by adding a penalty proportional to the square of the magnitude of the coefficients.',
              'Key Features: The Ridge technique discourages large coefficients by penalising their square values, which effectively controls the complexity of the model. It does not perform variable selection; it only shrinks the size of coefficients. All variables stay in the model.',
            ],
          },
          {
            title: 'Lasso Regression (L1)',
            paragraphs: [
              'Key Features: Lasso regression can lead to sparse models where some coefficient estimates may be exactly zero. This means Lasso can perform variable selection and is useful when we suspect many features are irrelevant or if we want a simpler, interpretable model.',
              'Lasso tends to do well if there are a small number of significant parameters and the others are close to zero (i.e. when only a few predictors actually influence the response).',
            ],
          },
          {
            title: 'Choosing Between Ridge and Lasso',
            paragraphs: [
              'Ridge is a good choice when most variables are useful to the model but their coefficients need to be shrunk to improve stability and interpretation.',
              'Lasso is useful when you need a sparse model, meaning you believe many features are irrelevant to the output.',
              'Both methods add bias but reduce the variance of the estimates compared to ordinary least squares regression. The choice between Ridge and Lasso may depend on the specific dataset and the importance of feature selection. Additionally, tuning the parameter is crucial for both methods, usually done via cross-validation.',
            ],
          },
        ],
        glossary: [
          { term: 'L1 penalty', definition: 'Sum of absolute values of coefficients — used by Lasso. Can drive coefficients to exactly zero.' },
          { term: 'L2 penalty', definition: 'Sum of squared coefficients — used by Ridge. Shrinks coefficients but does not zero them out.' },
          { term: 'Multicollinearity', definition: 'When predictor variables are highly correlated with each other — regularisation helps.' },
        ],
        realWorldExample: {
          scenario: 'House-price prediction with 200 features',
          application: 'Lasso picks a handful of important features (square footage, location) and drops the rest — yielding a parsimonious, interpretable model.',
          impact: 'Regularisation turns an overfit OLS model into a model that generalises.',
        },
        playground: {
          type: 'ridge-lasso',
          title: 'Ridge vs Lasso fits',
          instructions: 'Drag the Ridge and Lasso sliders. Compare the two β₁ values and the fits in the chart on the right.',
          expectedOutcome: 'See Lasso drive β₁ harder toward zero than Ridge does for the same penalty strength.',
        },
        quiz: [
          {
            id: 'rl-q1',
            question: 'Which method can perform feature selection?',
            options: ['Ridge', 'Lasso', 'OLS', 'Both Ridge and Lasso'],
            answerIndex: 1,
            explanation: 'Lasso\'s L1 penalty can drive coefficients to exactly zero — that is feature selection.',
          },
          {
            id: 'rl-q2',
            question: 'Ridge is a good choice when:',
            options: [
              'You believe many features are irrelevant.',
              'Most variables are useful and you need to shrink their coefficients.',
              'You have no features at all.',
              'You want a non-parametric model.',
            ],
            answerIndex: 1,
            explanation: 'Ridge is for "most variables are useful" — it shrinks but does not zero out.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, push Lasso α to 0.3. What does β₁ approach?',
          hint: 'A high L1 penalty pushes weak coefficients to zero.',
          expectedAnswer: 'β₁ approaches 0 — the strong L1 penalty drives the slope toward zero.',
        },
        keyTakeaways: [
          'Ridge (L2) shrinks coefficients; Lasso (L1) can zero them out.',
          'Pick Ridge when most features are useful; pick Lasso for sparse models.',
          'Both add bias but reduce variance compared to OLS; tune λ via cross-validation.',
        ],
      },
      {
        id: 'logistic-reg-2',
        number: 102,
        title: '102. Logistic Regression',
        subtitle: 'A statistical method for predicting binary outcomes — the workhorse classifier, trained with maximum likelihood and evaluated with ROC curves.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '6 mins',
        difficulty: 'Intermediate',
        objectives: [
          'State the logistic regression model and its sigmoid form',
          'Explain how maximum likelihood estimation trains the model',
          'List the model\'s applications, advantages, and limitations',
        ],
        concepts: [
          {
            title: 'Fundamentals of Logistic Regression',
            paragraphs: [
              'Logistic regression is a statistical method for predicting binary outcomes from data. Examples of binary outcomes include win/lose, pass/fail, healthy/sick. This type of regression is used when the dependent variable is categorical and the data are expected to follow a logistic distribution.',
              'Mathematical Model: Logistic regression estimates the probability that a dependent variable (target) is a particular category. For binary classification problems, the formula can be expressed as p = σ(β₀ + β₁x₁ + …).',
            ],
          },
          {
            title: 'Key Characteristics',
            paragraphs: [
              'Output Interpretation: The output of a logistic regression model is a probability that the given input point belongs to a certain class, which is useful for binary classification.',
              'Coefficient Interpretation: Each coefficient value represents the change in the log odds of the dependent variable for a one unit change in the corresponding independent variable, all else being equal. This is useful for understanding the influence of each predictor.',
            ],
          },
          {
            title: 'Model Training and Evaluation',
            paragraphs: [
              'Training: Logistic regression models are usually trained using maximum likelihood estimation (MLE), which tries to find the parameter values (coefficients) that most likely produce the observed outcomes.',
              'Evaluation: Common metrics for evaluating the performance of a logistic regression model include accuracy, precision, recall, F1-score, and the ROC curve. The ROC curve represents a graphical plot of the sensitivity, or true positive rate, versus false positive rate for every possible cut-off for a diagnostic test.',
            ],
          },
          {
            title: 'Applications of Logistic Regression',
            paragraphs: [
              'Medical Fields: Predicting the likelihood of a patient having a disease.',
              'Financial Sectors: Assessing credit risk.',
              'Marketing: Predicting customer retention.',
              'E-commerce: Predicting if a user will purchase a product or not.',
            ],
          },
          {
            title: 'Advantages and Limitations',
            paragraphs: [
              'Advantages: Logistic regression is straightforward to implement and very efficient to train. It can be regularized to avoid overfitting. Logistic models can be updated easily with new data using stochastic gradient descent.',
              'Limitations: Assumes linearity between the dependent variable and the independent variables. It can only be used to predict discrete functions — the dependent variable is bound to the discrete number set. Not flexible enough to naturally capture more complex relationships without transformation of features or adding interaction terms.',
            ],
          },
        ],
        glossary: [
          { term: 'Log odds', definition: 'The logarithm of the odds p / (1 − p) — what the linear combination in logistic regression actually models.' },
          { term: 'MLE', definition: 'Maximum Likelihood Estimation — find parameters that maximise the probability of the observed labels.' },
        ],
        realWorldExample: {
          scenario: 'Credit-card fraud detection',
          application: 'A logistic regression over transaction features outputs a fraud probability; a threshold turns it into approve / decline.',
          impact: 'Logistic regression is the go-to baseline for any binary classification problem.',
        },
        playground: {
          type: 'logistic-reg-2',
          title: 'The sigmoid + a decision threshold',
          instructions: 'Drag the weight, bias, and threshold sliders. Watch the sigmoid, the predicted probability, and the accuracy and log-loss update.',
          expectedOutcome: 'See the decision threshold move the class boundary; see log-loss penalise confident wrong predictions.',
        },
        quiz: [
          {
            id: 'lgr2-q1',
            question: 'A logistic regression coefficient represents the change in:',
            options: [
              'The probability p per unit x.',
              'The log odds of the outcome per unit x, all else equal.',
              'The MSE per unit x.',
              'The variance per unit x.',
            ],
            answerIndex: 1,
            explanation: 'Each coefficient is the change in log odds per unit change in x, all else equal.',
          },
          {
            id: 'lgr2-q2',
            question: 'Logistic regression is trained by:',
            options: ['Least squares', 'Maximum likelihood estimation (MLE)', 'Cross-entropy backprop only', 'Random search'],
            answerIndex: 1,
            explanation: 'The book: trained using maximum likelihood estimation (MLE).',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set the threshold to 0.3. Does the model become more or less aggressive about predicting class 1?',
          hint: 'Lower thresholds classify more samples as positive.',
          expectedAnswer: 'More aggressive — more samples are predicted as class 1.',
        },
        keyTakeaways: [
          'Logistic regression models the log odds of a binary outcome via the sigmoid.',
          'Trained with MLE; the coefficient is the change in log odds per unit x.',
          'Easy and fast — but assumes linearity in the log odds.',
        ],
      },
      {
        id: 'svm-concept',
        number: 103,
        title: '103. Support Vector Machines: Fundamental Concept',
        subtitle: 'Represent data points in space, divided by a clear gap — the wider the gap (margin), the better the generalisation.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '5 mins',
        difficulty: 'Intermediate',
        objectives: [
          'State the SVM definition, the hyperplane, and the margin',
          'Explain why SVM picks the maximum-margin hyperplane',
          'Recognise linear vs non-linear SVMs',
        ],
        concepts: [
          {
            title: 'Definition',
            paragraphs: [
              'SVMs are models that represent data points as points in space, so that the examples of separate categories are divided by a clear gap that is as wide as possible. SVMs perform classification by finding the hyperplane that best separates different target classes.',
            ],
            analogy: {
              concept: 'SVM',
              metaphor: 'A road built as wide as possible between two kingdoms — the wider the road, the harder it is for either side to accidentally cross over.',
              why: 'A wide margin is robust to noise: small changes in the data are unlikely to push points across the boundary.',
            },
          },
          {
            title: 'Hyperplane',
            paragraphs: [
              'In SVM, a hyperplane is a decision boundary that separates different classes. For two-dimensional data, the hyperplane is a line, but in higher dimensions, it can be a plane or a complex surface.',
              'The goal of the SVM algorithm is to find the optimal hyperplane that maximizes the margin between different classes.',
            ],
          },
          {
            title: 'Margin',
            paragraphs: [
              'The margin is defined as the distance between the hyperplane and the nearest data points from each class. Ideally, an SVM model chooses the hyperplane that has the largest margin.',
            ],
          },
          {
            title: 'Types of SVM',
            paragraphs: [
              '1. Linear SVM: Used when the data points are linearly separable, meaning they can be separated by a single line in 2D (or a hyperplane in higher dimensions). The algorithm focuses on finding the hyperplane that maximizes the margin between the classes.',
              '2. Non-linear SVM: When data points are not linearly separable, SVM uses a kernel function to map the input space into a higher-dimensional space where a hyperplane can be used to separate the classes. Common kernels include polynomial, radial basis function (RBF), and sigmoid.',
            ],
          },
        ],
        glossary: [
          { term: 'Hyperplane', definition: 'A generalisation of a line to N dimensions — a flat (N-1)-dimensional decision boundary.' },
          { term: 'Margin', definition: 'The distance between the hyperplane and the nearest training points from any class.' },
        ],
        realWorldExample: {
          scenario: 'Handwritten digit recognition',
          application: 'A non-linear SVM with an RBF kernel reaches ~98% accuracy on MNIST — competitive with the deep models of the late 1990s.',
          impact: 'SVMs are a strong baseline whenever you need a robust, regularised classifier.',
        },
        playground: {
          type: 'svm-concept',
          title: 'Drag the hyperplane to maximise the margin',
          instructions: 'Drag the rotation and offset sliders. The chart shows the hyperplane and the two clusters; the stat panel reports correctness and the margin.',
          expectedOutcome: 'See the margin shrink when the hyperplane is poorly placed — and watch the correct-classification count jump when the hyperplane is centred between the clusters.',
        },
        quiz: [
          {
            id: 'svm-c-q1',
            question: 'SVMs separate classes by:',
            options: [
              'The shortest distance to the centroid.',
              'A hyperplane that maximises the margin between the nearest points of each class.',
              'A random line.',
              'A decision tree.',
            ],
            answerIndex: 1,
            explanation: 'SVMs pick the hyperplane that maximises the margin between the closest points of each class.',
          },
          {
            id: 'svm-c-q2',
            question: 'A non-linear SVM uses:',
            options: ['A linear score', 'A kernel function to map the data into a higher-dimensional space', 'A decision tree', 'A random projection'],
            answerIndex: 1,
            explanation: 'Non-linear SVMs use kernel functions (RBF, polynomial, sigmoid) to map into a higher-dimensional space.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set the offset to 0 and sweep the rotation. At which angle is the margin largest?',
          hint: 'The hyperplane should be perpendicular to the line connecting the two cluster centres.',
          expectedAnswer: 'Around 0° (horizontal hyperplane) — perpendicular to the horizontal axis separating the two clusters.',
        },
        keyTakeaways: [
          'SVM = "find the hyperplane that maximises the margin."',
          'Hyperplane + margin: the wider the margin, the more robust the classifier.',
          'Linear SVM for separable data; non-linear (kernel) SVM for everything else.',
        ],
      },
      {
        id: 'svm-kernel',
        number: 104,
        title: '104. SVM: Kernel Trick & SVM for Regression (SVR)',
        subtitle: 'Lift data into a higher-dimensional space without ever computing the transformation — and extend SVMs to regression.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '5 mins',
        difficulty: 'Advanced',
        objectives: [
          'Explain the kernel trick and why it matters',
          'Use SVM for regression (SVR)',
          'Compare linear, RBF, and polynomial kernels',
        ],
        concepts: [
          {
            title: 'The Kernel Trick',
            paragraphs: [
              'The kernel trick involves transforming data into another dimension that has a clear dividing margin between classes of data. It allows the algorithm to fit the maximum-margin hyperplane in a transformed feature space without having to compute the transformation explicitly.',
              'The choice of kernel and its parameters can have a significant impact on the performance of the SVM classifier.',
            ],
            analogy: {
              concept: 'Kernel trick',
              metaphor: 'A magic elevator — you press "5th floor" but you don\'t need to know how the elevator gets there.',
              why: 'The kernel computes the dot product in the lifted space without ever materialising the lifted coordinates.',
            },
          },
          {
            title: 'SVM for Regression (SVR)',
            paragraphs: [
              'While primarily known for classification, SVM can be extended to support regression. This variant is known as Support Vector Regression (SVR).',
              'Instead of trying to fit the largest possible margin between different classes while minimizing the classification error, SVR tries to fit as many data points as possible within the decision boundary while limiting margin violations (data points outside the boundary).',
            ],
          },
        ],
        glossary: [
          { term: 'Kernel', definition: 'A function K(x, x′) that computes the dot product in a lifted feature space without explicitly lifting x and x′.' },
          { term: 'RBF', definition: 'Radial Basis Function — a Gaussian kernel that produces smooth, curved decision boundaries.' },
        ],
        realWorldExample: {
          scenario: 'Time-series forecasting with non-linear patterns',
          application: 'SVR with an RBF kernel captures curved trends that linear regression would miss — without the expense of a neural network.',
          impact: 'SVR is a good middle ground between linear regression and deep models for medium-sized tabular data.',
        },
        playground: {
          type: 'svm-kernel',
          title: 'Linear vs RBF vs Polynomial',
          instructions: 'Switch between linear, RBF, and polynomial kernels in the simulator. Notice how the decision boundary changes shape on the two-moons dataset.',
          expectedOutcome: 'See that a linear boundary fails on the two-moons data; the RBF kernel draws a curved boundary that separates them.',
        },
        quiz: [
          {
            id: 'svm-k-q1',
            question: 'The kernel trick allows SVM to:',
            options: [
              'Skip computing the lifted coordinates.',
              'Avoid the quadratic programming.',
              'Use cross-validation automatically.',
              'Make a decision tree.',
            ],
            answerIndex: 0,
            explanation: 'The kernel computes the dot product in the lifted space without ever materialising the lifted coordinates.',
          },
          {
            id: 'svm-k-q2',
            question: 'SVR differs from classification SVM by:',
            options: [
              'Fitting as many points as possible within the decision boundary while limiting margin violations.',
              'Using a tree structure.',
              'No longer using a margin.',
              'Being unsupervised.',
            ],
            answerIndex: 0,
            explanation: 'SVR fits as many points as possible within the decision boundary while limiting margin violations.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, switch to the RBF kernel. Why does the boundary now follow the curve of the two moons?',
          hint: 'A Gaussian kernel lifts the data into an infinite-dimensional space where a linear boundary is curved in the original 2D.',
          expectedAnswer: 'Because the RBF kernel effectively maps the points into a higher-dimensional space where a hyperplane separates the classes — that hyperplane looks curved when projected back to 2D.',
        },
        keyTakeaways: [
          'The kernel trick computes dot products in a lifted space without lifting the data.',
          'RBF and polynomial kernels handle non-linear SVMs.',
          'SVR extends SVMs to regression: fit as many points as possible within the boundary.',
        ],
      },
      {
        id: 'svm-pros-cons',
        number: 105,
        title: '105. SVM: Advantages & Limitations',
        subtitle: 'A clear-eyed look at when SVMs shine and when they fall short — high-D effectiveness, kernel choice, and scaling.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '4 mins',
        difficulty: 'Beginner',
        objectives: [
          'Recall the three advantages the book lists for SVM',
          'Recall the three limitations the book lists for SVM',
          'Decide when to reach for an SVM vs. another model',
        ],
        concepts: [
          {
            title: 'Advantages of SVM',
            paragraphs: [
              'Effectiveness in High-Dimensional Spaces: SVM works well in high-dimensional spaces, even in cases where the number of dimensions exceeds the number of samples.',
              'Memory Efficiency: SVMs are memory efficient because they use a subset of training points in the decision function (called support vectors).',
              'Versatility: The effectiveness of SVM can be customized via the kernel trick, making the classifier adaptable to different scenarios.',
            ],
          },
          {
            title: 'Limitations of SVM',
            paragraphs: [
              'Scaling and Kernel Choice: Choosing, and fine-tuning the right kernel type and parameters can be complex and require domain knowledge.',
              'Large Datasets: SVMs can be computationally intensive, making them less effective for larger datasets.',
              'Probability Estimates: SVMs do not directly provide probability estimates, which are desirable in many classification problems. These are calculated using an expensive fivefold cross-validation.',
            ],
          },
          {
            title: 'Conclusion',
            paragraphs: [
              'Support Vector Machines are a robust and versatile classification technique with capabilities extending to regression problems. They are particularly effective for complex small- or medium-sized datasets where the decision boundary is not readily apparent. However, the choice of the kernel and the SVM parameters can greatly affect the performance, making it essential to understand the underlying data and the problem context when using SVMs.',
            ],
          },
        ],
        glossary: [
          { term: 'Support vectors', definition: 'The training points that lie on the margin — the only points the SVM solution depends on.' },
        ],
        realWorldExample: {
          scenario: 'Choosing SVM for a small, high-dimensional biomedical dataset',
          application: 'SVMs handle 10k features and 500 samples well — kernel SVMs are a standard baseline for genomics and text.',
          impact: 'SVM\'s high-D effectiveness makes it a workhorse for problems with more features than samples.',
        },
        playground: {
          type: 'svm-pros-cons',
          title: 'Advantages and limitations side by side',
          instructions: 'Read the two columns. Decide which is heavier for your next project — memory efficiency or scaling pain, kernel versatility or kernel tuning.',
          expectedOutcome: 'Be able to articulate the trade-off: SVMs are precise but require careful tuning; tree-based methods are faster but less precise.',
        },
        quiz: [
          {
            id: 'svm-p-q1',
            question: 'Which of these is an advantage of SVM?',
            options: [
              'Memory efficiency — uses a subset of training points.',
              'Auto-tunes its kernel.',
              'Always gives probability estimates.',
              'Linear-time training on huge datasets.',
            ],
            answerIndex: 0,
            explanation: 'SVMs use only the support vectors in the decision function — memory efficient.',
          },
          {
            id: 'svm-p-q2',
            question: 'A limitation of SVM is:',
            options: [
              'It can only do classification.',
              'It scales poorly to very large datasets.',
              'It cannot use kernels.',
              'It always overfits.',
            ],
            answerIndex: 1,
            explanation: 'The book: SVMs can be computationally intensive for larger datasets.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, list the three advantages and three limitations the book gives for SVM.',
          hint: 'Read both columns.',
          expectedAnswer: 'Advantages: high-D effectiveness, memory efficiency, versatility via kernels. Limitations: kernel choice is hard, scales poorly to large datasets, no direct probability estimates.',
        },
        keyTakeaways: [
          'Advantages: high-D effectiveness, memory efficiency, kernel versatility.',
          'Limitations: kernel and parameter tuning is hard, large datasets are slow, no direct probability estimates.',
          'SVMs are best for small/medium high-D problems where decision boundaries are not obvious.',
        ],
      },
      {
        id: 'dt-structure',
        number: 106,
        title: '106. Decision Trees: Concept and Structure',
        subtitle: 'A flowchart-like tree of if/else questions — the most popular and easiest-to-understand ML algorithm.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '5 mins',
        difficulty: 'Beginner',
        objectives: [
          'Define a decision tree and its parts (root, split, leaf, branch, pruning)',
          'Read a decision tree as a sequence of if/else questions',
          'Trace a path from root to leaf',
        ],
        concepts: [
          {
            title: 'Definition',
            paragraphs: [
              'A Decision Tree is a flowchart-like tree structure where each internal node represents a "test" on an attribute (e.g. whether a customer is older than 50 years), each branch represents the outcome of the test, and each leaf node represents a class label (decision taken after computing all attributes).',
              'The paths from root to leaf represent classification rules or regression paths.',
              'Decision Trees are a non-parametric supervised learning method used for both classification and regression tasks. They are one of the most popular and easy-to-understand machine learning algorithms, providing the foundation for more complex methods like Random Forests and Gradient Boosting Machines.',
            ],
            analogy: {
              concept: 'Decision tree',
              metaphor: 'A 20-questions flowchart — at each box you ask the next yes/no question that best splits what is left.',
              why: 'Every path is a rule, every leaf is a decision — easy to read and explain.',
            },
          },
          {
            title: 'Structure',
            paragraphs: [
              'Root Node: Represents the entire sample, which gets divided into two or more homogeneous sets.',
              'Splitting: It is the process of dividing a node into two or more sub-nodes based on certain conditions.',
              'Decision Node: After splitting, the sub-node that splits into further sub-nodes is called the decision node.',
              'Leaf/Terminal Node: Nodes that do not split are called Leaf or Terminal nodes.',
              'Branch/Sub-Tree: A subsection of the entire tree is called branch or sub-tree.',
              'Pruning: Removing sub-nodes of a decision node is called pruning, which can reduce the complexity of the final classifier.',
            ],
          },
        ],
        glossary: [
          { term: 'Root node', definition: 'The top of the tree — contains the entire training sample.' },
          { term: 'Leaf / terminal node', definition: 'A node that does not split — represents a final prediction.' },
          { term: 'Pruning', definition: 'Removing branches of a decision tree to reduce complexity and overfitting.' },
        ],
        realWorldExample: {
          scenario: 'A loan-approval tree',
          application: 'Income > 50k? → Debt-to-income < 30%? → Has mortgage? — each leaf is an approve / review / reject decision.',
          impact: 'Trees are the only models whose decisions a loan officer can read out loud and defend to a regulator.',
        },
        playground: {
          type: 'dt-structure',
          title: 'The parts of a tree',
          instructions: 'Drag the Max depth slider. The left panel shows the nodes at each depth; the right panel shows the data the tree is partitioning.',
          expectedOutcome: 'See the tree expand — more leaves, more specialised regions in the data.',
        },
        quiz: [
          {
            id: 'dt-s-q1',
            question: 'A leaf / terminal node:',
            options: ['Splits further.', 'Does not split — it represents a final prediction.', 'Is always the root.', 'Is a random sample.'],
            answerIndex: 1,
            explanation: 'Leaf/terminal nodes do not split — they are the final predictions.',
          },
          {
            id: 'dt-s-q2',
            question: 'Pruning:',
            options: [
              'Adds more branches.',
              'Removes sub-nodes to reduce complexity.',
              'Picks a different feature.',
              'Computes the gradient.',
            ],
            answerIndex: 1,
            explanation: 'Pruning removes sub-nodes to reduce the complexity of the final classifier.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, what is the difference between a Decision Node and a Leaf?',
          hint: 'Look at the depth chart and the indicator.',
          expectedAnswer: 'A Decision Node splits further; a Leaf does not — it is the final prediction.',
        },
        keyTakeaways: [
          'A decision tree is a flowchart of if/else questions leading to a leaf.',
          'Structure: root → splits → decision nodes → leaves; branches are sub-trees; pruning removes them.',
          'Non-parametric, interpretable, and the building block of Random Forests and Gradient Boosting.',
        ],
      },
      {
        id: 'dt-how',
        number: 107,
        title: '107. Decision Trees: How They Work',
        subtitle: 'Node splitting and decision making — the Gini index, Chi-square, information gain, and entropy that decide which split to make next.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '5 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Explain how a decision tree decides where to split',
          'Name the metrics used at each split (Gini, Chi-square, information gain, entropy)',
          'Apply this knowledge to a small dataset',
        ],
        concepts: [
          {
            title: 'Node Splitting',
            paragraphs: [
              'Decision trees use multiple algorithms to decide to split a node into two or more sub-nodes. The creation of sub-nodes increases the homogeneity of resultant sub-nodes. In other words, the purity of the node increases with respect to the target variable.',
            ],
          },
          {
            title: 'Decision Making',
            paragraphs: [
              'For classification, the algorithm uses the Gini index, Chi-square, information gain, and entropy to decide which feature and which condition to split upon at each step.',
              'For regression, splits are made based on reducing the sum of squared errors (or another cost metric) in the resulting nodes.',
            ],
          },
        ],
        glossary: [
          { term: 'Gini index', definition: '1 − Σ pᵢ² — a measure of node impurity. 0 = pure, 0.5 = max mixed (binary).' },
          { term: 'Information gain', definition: 'The reduction in entropy achieved by a split — used by ID3.' },
          { term: 'Entropy', definition: '−Σ pᵢ log pᵢ — a measure of impurity. 0 = pure, log k = max uniform.' },
        ],
        realWorldExample: {
          scenario: 'Customer churn tree',
          application: 'At the root, the algorithm picks the feature (e.g. "tenure") whose split maximises information gain. Each subsequent split uses the same logic on the remaining subset.',
          impact: 'The split metric decides which questions the tree asks — getting it right is the difference between a useful and a useless tree.',
        },
        playground: {
          type: 'dt-how',
          title: 'Apply splits with the Gini gain',
          instructions: 'Drag the Splits-applied slider. The left panel shows the splits and the gain; the right panel shows the splits drawn as vertical reference lines on the data.',
          expectedOutcome: 'See the first split land between the two clusters, and subsequent splits refine the boundary.',
        },
        quiz: [
          {
            id: 'dt-h-q1',
            question: 'For classification, the book lists four split metrics. Which is NOT one?',
            options: ['Gini index', 'Chi-square', 'Information gain', 'Sum of squared errors'],
            answerIndex: 3,
            explanation: 'Sum of squared errors is the regression split criterion, not the classification one.',
          },
          {
            id: 'dt-h-q2',
            question: 'A split that makes a node more homogeneous:',
            options: ['Increases Gini.', 'Decreases Gini.', 'Does not change Gini.', 'Randomises the labels.'],
            answerIndex: 1,
            explanation: 'A pure node has Gini = 0; a good split pushes Gini down.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, apply 2 splits. Do they both land between the two clusters?',
          hint: 'The first split is between the clusters; the second refines a sub-region.',
          expectedAnswer: 'The first split lands between the two clusters; the second may fall inside one of them to refine a leaf.',
        },
        keyTakeaways: [
          'Trees split on the feature and condition that best increase node purity.',
          'Classification metrics: Gini, Chi-square, information gain, entropy.',
          'Regression: minimise sum of squared errors in the resulting nodes.',
        ],
      },
      {
        id: 'dt-algos',
        number: 108,
        title: '108. Decision Tree Algorithms: ID3, C4.5, CART, CHAID',
        subtitle: 'The four classic algorithms for building decision trees — each with a different split metric.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '4 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Name the four classic decision-tree algorithms',
          'Match an algorithm to its split metric',
          'Pick an algorithm for a given problem',
        ],
        concepts: [
          {
            title: 'The four algorithms',
            paragraphs: [
              'ID3 (Iterative Dichotomiser 3): Uses Entropy function and Information gain as metrics.',
              'C4.5: Successor of ID3, uses Gain Ratio to handle both continuous and categorical variables.',
              'CART (Classification and Regression Trees): Uses Gini index for classification, and variance reduction for regression.',
              'CHAID (Chi-squared Automatic Interaction Detection): Performs multi-level splits when computing classification trees.',
            ],
          },
        ],
        glossary: [
          { term: 'Gain ratio', definition: 'Information gain normalised by the split information — favours splits that are not too fine-grained.' },
          { term: 'Variance reduction', definition: 'The regression split criterion used by CART — pick the split that minimises the variance of the children.' },
        ],
        realWorldExample: {
          scenario: 'A bank picks an algorithm for its decision tree',
          application: 'CART with Gini index is the default in scikit-learn; C4.5 (via its successor C5.0) is popular when the data has many categorical features.',
          impact: 'The choice of algorithm changes which questions the tree asks — and how big the tree grows.',
        },
        playground: {
          type: 'dt-algos',
          title: 'ID3, C4.5, CART, CHAID',
          instructions: 'Click each algorithm on the left to see its split metric and a one-line description.',
          expectedOutcome: 'Be able to name each algorithm and its metric — and to know which one scikit-learn uses by default (CART + Gini).',
        },
        quiz: [
          {
            id: 'dt-a-q1',
            question: 'CART uses which metric for classification?',
            options: ['Entropy', 'Gini index', 'Gain ratio', 'Chi-square'],
            answerIndex: 1,
            explanation: 'CART uses Gini index for classification; variance reduction for regression.',
          },
          {
            id: 'dt-a-q2',
            question: 'Which algorithm uses the Gain Ratio?',
            options: ['ID3', 'C4.5', 'CART', 'CHAID'],
            answerIndex: 1,
            explanation: 'C4.5 is the successor of ID3 and uses Gain Ratio.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, identify the algorithm that uses Chi-square.',
          hint: 'Look at the metric badge on each card.',
          expectedAnswer: 'CHAID — Chi-squared Automatic Interaction Detection.',
        },
        keyTakeaways: [
          'ID3: entropy + information gain.',
          'C4.5: gain ratio (continuous and categorical).',
          'CART: Gini (classification) or variance reduction (regression).',
          'CHAID: chi-square with multi-level splits.',
        ],
      },
      {
        id: 'dt-pros-cons',
        number: 109,
        title: '109. Decision Trees: Advantages & Limitations',
        subtitle: 'Interpretable, low-prep models — but unstable, prone to overfitting, and biased when classes are imbalanced.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '4 mins',
        difficulty: 'Beginner',
        objectives: [
          'Recall the three advantages the book lists for decision trees',
          'Recall the three limitations the book lists',
          'Decide when a tree (or an ensemble of trees) is the right tool',
        ],
        concepts: [
          {
            title: 'Advantages of Decision Trees',
            paragraphs: [
              'Simple to Understand and Interpret: Trees can be visualised, making them easy to explain to non-technical team members.',
              'Requires Little Data Preparation: No need for normalization, dummy variables, missing values handling, etc.',
              'Flexibility: Can handle both numerical and categorical data.',
            ],
          },
          {
            title: 'Limitations of Decision Trees',
            paragraphs: [
              'Overfitting: Decision trees can create overly complex trees that do not generalize well from the training data. This is mitigated by pruning.',
              'Variance: Decision trees can be unstable because small variations in the data might result in a completely different tree being generated.',
              'Bias: Decision tree learners can create biased trees if some classes dominate.',
            ],
          },
          {
            title: 'Conclusion',
            paragraphs: [
              'Decision Trees are a powerful, intuitive form of machine learning that can be used for both regression and classification tasks. They serve as a fundamental building block for ensemble methods that combine multiple decision trees to create more powerful models, such as Random Forests and Boosted Trees, enhancing predictive performance and accuracy.',
            ],
          },
        ],
        glossary: [
          { term: 'Tree variance', definition: 'The sensitivity of a tree to small changes in the training set.' },
        ],
        realWorldExample: {
          scenario: 'A credit-risk tree for a small business',
          application: 'Trees need almost no data prep and produce rules that auditors can read — but a single tree is unstable. The book\'s answer: build many (Random Forest) and average.',
          impact: 'Trees are the right starting model when interpretability matters and the next step is an ensemble.',
        },
        playground: {
          type: 'dt-pros-cons',
          title: 'Advantages and limitations of decision trees',
          instructions: 'Read the two columns. Note which limitations disappear (or shrink) when you use a tree ensemble (Random Forest, GBM).',
          expectedOutcome: 'Be able to articulate the trade-off: trees are interpretable but unstable; ensembles fix stability at the cost of interpretability.',
        },
        quiz: [
          {
            id: 'dt-pc-q1',
            question: 'Which of these is an advantage of decision trees?',
            options: [
              'Requires little data preparation.',
              'Always gives the best accuracy.',
              'Cannot be interpreted.',
              'No risk of overfitting.',
            ],
            answerIndex: 0,
            explanation: 'No need for normalisation, dummy variables, or missing-value handling.',
          },
          {
            id: 'dt-pc-q2',
            question: 'A tree is unstable because:',
            options: [
              'It is built on random data.',
              'Small variations in the data can result in a completely different tree.',
              'The features are categorical.',
              'It always overfits.',
            ],
            answerIndex: 1,
            explanation: 'Variance: small changes in the data can produce a completely different tree.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, which limitation does the book say is "mitigated by pruning"?',
          hint: 'Pruning removes sub-nodes to control tree size.',
          expectedAnswer: 'Overfitting — pruning reduces tree complexity and improves generalisation.',
        },
        keyTakeaways: [
          'Advantages: interpretable, little data prep, handles both numerical and categorical data.',
          'Limitations: overfitting, variance (instability), bias when classes are imbalanced.',
          'Trees are the building block — Random Forests and GBM extend them to handle stability and bias.',
        ],
      },
      {
        id: 'rf-concept',
        number: 110,
        title: '110. Random Forests: Concept and Mechanism',
        subtitle: 'An ensemble of decision trees built with bagging and feature randomness — averaging many trees reduces variance without raising bias.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '5 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Define a Random Forest and explain how it builds on a single tree',
          'Describe bagging and feature randomness',
          'See why averaging many trees reduces variance and improves generalisation',
        ],
        concepts: [
          {
            title: 'Definition and Mechanism',
            paragraphs: [
              'A Random Forest is an ensemble of decision trees, usually trained with the "bagging" method. The basic idea is to build several decision trees independently and then average their predictions to improve the final accuracy and control over-fitting.',
              'Developed by Leo Breiman and Adele Cutler, Random Forests mitigate the limitations of a single decision tree by integrating the predictions from many trees to provide a more accurate and stable prediction.',
            ],
          },
          {
            title: 'Bagging and Feature Randomness',
            paragraphs: [
              'Bootstrap Aggregating (Bagging): Each tree in a random forest is built from a sample drawn with replacement (i.e. a bootstrap sample) from the training set.',
              'Feature Randomness: When splitting a node during the construction of the tree, the split that is chosen is no longer the best split among all features. Instead, the split that is picked is the best split among a random subset of the features. As a result, the correlation between trees in the same forest is reduced, leading to lower variance and better generalization.',
            ],
          },
        ],
        glossary: [
          { term: 'Bagging', definition: 'Bootstrap Aggregating — train each tree on a bootstrap sample (drawn with replacement) of the training set.' },
          { term: 'Bootstrap sample', definition: 'A sample drawn with replacement from the training set, of the same size.' },
          { term: 'Feature randomness', definition: 'Restricting the candidate features at each split to a random subset — decorrelates the trees.' },
        ],
        realWorldExample: {
          scenario: 'A medical imaging model that classifies skin lesions',
          application: 'A Random Forest of 500 shallow trees, each trained on a bootstrap of patients, each split considering a random subset of features — produces a stable, accurate classifier with no deep learning required.',
          impact: 'Random Forests are the workhorse of medical ML when interpretability and accuracy both matter.',
        },
        playground: {
          type: 'rf-concept',
          title: 'Bagging + feature randomness',
          instructions: 'Drag the number of trees and the noise sliders. The right panel shows the per-tree bootstrap sample size and the average accuracy across the forest.',
          expectedOutcome: 'See the per-tree variance and the average accuracy improve as the forest grows.',
        },
        quiz: [
          {
            id: 'rf-c-q1',
            question: 'In a Random Forest, each tree is built from:',
            options: ['The full training set.', 'A bootstrap sample of the training set.', 'A random subset of features only.', 'A held-out test set.'],
            answerIndex: 1,
            explanation: 'Each tree is trained on a bootstrap sample — drawn with replacement.',
          },
          {
            id: 'rf-c-q2',
            question: 'Feature randomness in Random Forest:',
            options: [
              'Picks the best feature at every split.',
              'Picks the best feature from a random subset at every split.',
              'Drops features randomly.',
              'Is the same as bagging.',
            ],
            answerIndex: 1,
            explanation: 'At each split, the best feature is chosen from a random subset — decorrelating the trees.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, increase the number of trees to 50 with noise = 0.6. Does the average accuracy change much?',
          hint: 'A bigger forest is more stable — the per-tree variance averages out.',
          expectedAnswer: 'The average accuracy improves only a little; the main benefit is stability (smaller standard deviation across trees).',
        },
        keyTakeaways: [
          'Random Forest = ensemble of decision trees trained with bagging and feature randomness.',
          'Bagging reduces variance; feature randomness decorrelates the trees.',
          'Result: higher accuracy, more stability, less overfitting than a single tree.',
        ],
      },
      {
        id: 'rf-build',
        number: 111,
        title: '111. Random Forests: Building, Training, and Prediction',
        subtitle: 'Tree generation, training, and prediction — and the intrinsic variable-importance ranking Random Forests provide.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '5 mins',
        difficulty: 'Intermediate',
        objectives: [
          'Describe how a Random Forest is built and trained',
          'Explain how classification and regression predictions are aggregated',
          'Read a feature-importance chart',
        ],
        concepts: [
          {
            title: 'Building a Random Forest Model',
            paragraphs: [
              '1. Tree Generation: For each tree, randomly sample with replacement from the training dataset (bootstrap sampling). Choose a subset of features at each split decision (random feature selection).',
              '2. Training: Each tree is grown to the largest extent possible without pruning, which means they are fully grown and untrimmed. This strategy relies on the averaging process to reduce overfitting risks.',
              '3. Prediction: Classification: each tree votes for that class, and the forest chooses the classification having the most votes over all the trees in the forest. Regression: predictions of individual trees are averaged to produce the final prediction.',
            ],
          },
        ],
        glossary: [
          { term: 'OOB error', definition: 'Out-of-bag error — the error on the ~37% of training points not in a tree\'s bootstrap sample, used as a free validation score.' },
          { term: 'Variable importance', definition: 'How much each feature reduces impurity on average across the trees — an intrinsic ranking.' },
        ],
        realWorldExample: {
          scenario: 'A churn-prediction model in production',
          application: 'Train 500 trees on bootstrap samples; the per-class vote is the prediction. The OOB error estimates test accuracy without a held-out set; the variable importance tells the product team which features to address first.',
          impact: 'Random Forests give you three artefacts from one training run: a model, a validation score, and a feature ranking.',
        },
        playground: {
          type: 'rf-build',
          title: 'Watch accuracy build with more trees',
          instructions: 'Drag the Trees and Random features-per-split sliders. The right panel shows the cumulative accuracy as more trees are added and the per-feature variable importance.',
          expectedOutcome: 'See accuracy climb as trees are added and the importance ranking highlight the same few features every time.',
        },
        quiz: [
          {
            id: 'rf-b-q1',
            question: 'In a Random Forest, how is the final classification chosen?',
            options: [
              'The first tree\'s prediction is used.',
              'Each tree votes; the class with the most votes wins.',
              'The average of the tree probabilities is taken.',
              'A weighted sum of leaf sizes.',
            ],
            answerIndex: 1,
            explanation: 'Each tree votes for a class; the forest picks the class with the most votes across all trees.',
          },
          {
            id: 'rf-b-q2',
            question: 'A Random Forest\'s variable importance comes from:',
            options: [
              'Manual labelling by an expert.',
              'How much each feature reduces impurity on average across the trees.',
              'A random shuffle test.',
              'A p-value test.',
            ],
            answerIndex: 1,
            explanation: 'Variable importance is the average reduction in impurity each feature contributes across all trees.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, increase the number of trees to 60. Does the final accuracy stop improving?',
          hint: 'The marginal benefit of each extra tree shrinks — adding more trees has diminishing returns.',
          expectedAnswer: 'It keeps improving slightly but the marginal gain shrinks. The book notes that RF "can deliver excellent results without hyper-parameter tuning most of the time."',
        },
        keyTakeaways: [
          'Build: bootstrap sampling + random feature subsets per tree.',
          'Train: grow trees fully without pruning — averaging handles overfitting.',
          'Predict: classification by majority vote, regression by averaging.',
        ],
      },
      {
        id: 'rf-pros-cons',
        number: 112,
        title: '112. Random Forests: Advantages, Limitations & Applications',
        subtitle: 'High accuracy, robustness, and intrinsic feature ranking — at the cost of size and interpretability.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '4 mins',
        difficulty: 'Beginner',
        objectives: [
          'Recall the three advantages of Random Forests',
          'Recall the three limitations of Random Forests',
          'List four industry applications from the book',
        ],
        concepts: [
          {
            title: 'Advantages of Random Forests',
            paragraphs: [
              'Accuracy: Random Forests generally provide high accuracy because they correct for decision trees\' habit of overfitting to their training set.',
              'Robustness: Handles outliers and nonlinear data with high dimensional spaces efficiently.',
              'Variable Importance Estimation: An intrinsic benefit of Random Forests is their ability to rank the importance of variables in a regression or classification problem.',
            ],
          },
          {
            title: 'Limitations of Random Forests',
            paragraphs: [
              'Complexity: More complex and computationally intensive than decision trees.',
              'Model Size: The large number of trees can make the model quite large and cumbersome for real-time predictions.',
              'Interpretability: Unlike decision trees, which are easily interpretable, Random Forests are more like a black box, making it harder to visualize the model\'s reasoning.',
            ],
          },
          {
            title: 'Applications of Random Forests',
            paragraphs: [
              'Biomedical Fields: Used for identifying the disease likelihood based on patient data.',
              'Banking Sector: Useful for credit scoring and predicting loan defaults.',
              'Stock Market: Used to identify stock behavior trends and predict future stock movements.',
              'E-commerce: Recommending products based on customer behavior patterns and preferences.',
            ],
          },
          {
            title: 'Conclusion',
            paragraphs: [
              'Random Forests are among the most widely used machine learning algorithms due to their versatility, ease of use, and robust performance across a wide range of data types and problems. They offer a good balance between simplicity and performance and are often a first choice for classification problems due to their ability to handle large data sets with higher dimensionality. They can deliver excellent results without hyper-parameter tuning most of the time, which makes them very attractive for both academic and practical applications.',
            ],
          },
        ],
        glossary: [
          { term: 'Black box', definition: 'A model whose internal reasoning is hard to inspect — Random Forests are more black-box than a single tree.' },
        ],
        realWorldExample: {
          scenario: 'An e-commerce recommendation service',
          application: 'A Random Forest over purchase history recommends products — robust, accurate, and not too sensitive to outliers.',
          impact: 'Random Forests are the go-to baseline for tabular classification and recommendation.',
        },
        playground: {
          type: 'rf-pros-cons',
          title: 'Random Forest pros, cons, and applications',
          instructions: 'Read the pros and cons. Then scroll the applications panel and pick one industry you know — does the description match your mental model?',
          expectedOutcome: 'Be able to list the three pros, three cons, and four applications from the book.',
        },
        quiz: [
          {
            id: 'rf-pc-q1',
            question: 'Which of these is a limitation of Random Forests?',
            options: [
              'They cannot handle missing values.',
              'They are a black box, hard to interpret.',
              'They cannot do classification.',
              'They are always slow.',
            ],
            answerIndex: 1,
            explanation: 'Unlike a single decision tree, Random Forests are more like a black box.',
          },
          {
            id: 'rf-pc-q2',
            question: 'Which industry does the book list for Random Forest applications?',
            options: ['Astronomy', 'Banking sector — credit scoring', 'Underwater basket weaving', 'Quantum chemistry'],
            answerIndex: 1,
            explanation: 'Banking sector — credit scoring and loan defaults.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, list the four industry applications the book gives.',
          hint: 'Read the right panel.',
          expectedAnswer: 'Biomedical, Banking, Stock Market, E-commerce.',
        },
        keyTakeaways: [
          'Advantages: accuracy, robustness, intrinsic variable importance.',
          'Limitations: complexity, model size, lower interpretability than a single tree.',
          'Applications: biomedical, banking, stock market, e-commerce.',
        ],
      },
      {
        id: 'gbm-concept',
        number: 113,
        title: '113. Gradient Boosting Machines: Concept & Mechanism',
        subtitle: 'Sequentially add weak learners to correct the residuals of the prior model — a powerful ensemble that minimises any differentiable loss via gradient descent.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '5 mins',
        difficulty: 'Advanced',
        objectives: [
          'Explain the three components of gradient boosting (loss, weak learner, additive model)',
          'See why each new tree fits the residuals',
          'Decide when GBM is the right tool',
        ],
        concepts: [
          {
            title: 'Concept of Gradient Boosting',
            paragraphs: [
              'Gradient Boosting is a method of converting weak learners, usually decision trees, into a collective strong learner in the form of an ensemble. The basic idea is to sequentially add predictors to an ensemble, each one correcting its predecessor, thereby improving the ensemble\'s accuracy.',
              'Gradient Boosting involves three main components: a loss function, a weak learner to make predictions, and an additive model to add weak learners to minimize the loss function.',
            ],
          },
          {
            title: 'Mechanism',
            paragraphs: [
              '1. Loss Function: The choice of the loss function is dependent on the type of problem being solved (regression, classification). It is an objective function that every boosting algorithm must optimize.',
              '2. Weak Learner: Decision trees are typically used as the weak learner in gradient boosting. These trees are usually shallow (low depth), providing broad generalizations (weak hypotheses).',
              '3. Additive Model: Trees are added one at a time, and existing trees in the model are not changed. A gradient descent procedure is used to minimize the loss when adding trees.',
            ],
          },
        ],
        glossary: [
          { term: 'Weak learner', definition: 'A model that is only slightly better than random — in GBM, a shallow decision tree.' },
          { term: 'Additive model', definition: 'A model that adds new components without changing the existing ones — the structure of every boosting algorithm.' },
        ],
        realWorldExample: {
          scenario: 'A Kaggle competition on tabular data',
          application: 'XGBoost or LightGBM with shallow trees and a small learning rate almost always lands near the top — the book\'s "predictive power cannot be trumped by other algorithms."',
          impact: 'Gradient boosting is the default recipe for structured-data ML competitions.',
        },
        playground: {
          type: 'gbm-concept',
          title: 'Watch the ensemble fit step by step',
          instructions: 'Drag the Trees slider and the Learning-rate slider. The chart shows the truth and the boosted ensemble after each iteration.',
          expectedOutcome: 'See the ensemble start flat and gradually conform to the truth — and see the fit sharpen as more trees are added.',
        },
        quiz: [
          {
            id: 'gb-c-q1',
            question: 'The three components of gradient boosting are:',
            options: [
              'Loss function, weak learner, additive model.',
              'Features, labels, weights.',
              'Train, validation, test sets.',
              'Bias, variance, noise.',
            ],
            answerIndex: 0,
            explanation: 'Loss function, weak learner (usually a shallow tree), and an additive model — the book\'s three components.',
          },
          {
            id: 'gb-c-q2',
            question: 'In gradient boosting, the weak learner is usually:',
            options: ['A deep neural network', 'A shallow decision tree', 'A linear regression', 'A KNN'],
            answerIndex: 1,
            explanation: 'Shallow decision trees — low depth — provide broad generalisations (weak hypotheses).',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set the number of trees to 1. Why is the fit still far from the truth?',
          hint: 'One shallow tree cannot capture much curvature.',
          expectedAnswer: 'One shallow tree can only fit a step function — it cannot capture the curves in the truth.',
        },
        keyTakeaways: [
          'Gradient boosting = three components: a loss, a weak learner, an additive model.',
          'Each new tree fits the residuals of the prior ensemble.',
          'GBM is the workhorse of structured-data ML competitions.',
        ],
      },
      {
        id: 'gbm-train',
        number: 114,
        title: '114. Gradient Boosting: Training Process',
        subtitle: 'Initialise, iterate, descend, and output the additive sum of trees — the four-step recipe that turns weak learners into a strong ensemble.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '4 mins',
        difficulty: 'Advanced',
        objectives: [
          'Walk through the four steps of GBM training',
          'See the loss decrease with each iteration',
          'Recognise the role of gradient descent in boosting',
        ],
        concepts: [
          {
            title: 'Training Process',
            paragraphs: [
              '1. Initialization: The model is initialized with a simple model, typically a decision tree, built for the labels in the dataset.',
              '2. Iterative Improvement: For each successive iteration, a new tree is built that predicts the residuals or errors of the prior model. After a tree is added, it\'s combined with the earlier trees to minimize the overall model\'s errors. This is typically done using a technique known as gradient descent.',
              '3. Gradient Descent: The intuition behind using gradient descent in GBM is to minimize the loss by tweaking the model parameters (tree weights), aiming to find the best combination that reduces the most loss.',
              '4. Output Model: The output is a model that is the sum of the output of many simple decision trees.',
            ],
          },
        ],
        glossary: [
          { term: 'Residual', definition: 'The difference between the observed label and the current prediction — the next tree fits the residuals.' },
        ],
        realWorldExample: {
          scenario: 'Training a model on a million-row tabular dataset',
          application: 'Start with a constant (the mean). At each round, fit a shallow tree to the residuals; combine with a small learning rate. After a few hundred rounds the model converges.',
          impact: 'The four-step recipe is the same whether you are using scikit-learn\'s GradientBoostingRegressor or XGBoost.',
        },
        playground: {
          type: 'gbm-train',
          title: 'Watch the loss decrease',
          instructions: 'Drag the Trees and Learning-rate sliders. The chart shows the loss over iterations.',
          expectedOutcome: 'See the loss decrease with each tree and that lower learning rates slow the descent but smooth it.',
        },
        quiz: [
          {
            id: 'gb-t-q1',
            question: 'In the GBM training process, what is the first step?',
            options: [
              'Fit a deep tree.',
              'Initialise the model with a simple model built for the labels.',
              'Compute the residuals.',
              'Run gradient descent.',
            ],
            answerIndex: 1,
            explanation: 'Initialise with a simple model, typically a decision tree, built for the labels in the dataset.',
          },
          {
            id: 'gb-t-q2',
            question: 'Each new tree in GBM predicts:',
            options: ['The original labels.', 'The residuals (errors) of the prior model.', 'Random noise.', 'The class probabilities.'],
            answerIndex: 1,
            explanation: 'A new tree is built that predicts the residuals or errors of the prior model.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, set the number of trees to 10 with a high learning rate. Does the loss converge smoothly?',
          hint: 'High learning rates can make the loss oscillate.',
          expectedAnswer: 'Likely not smoothly — the loss drops quickly but may oscillate. A lower learning rate would smooth it.',
        },
        keyTakeaways: [
          'Initialise, iterate (fit residuals), combine via gradient descent, output the sum.',
          'Each tree is a small step in the direction of greatest loss reduction.',
          'Learning rate × number of trees controls the trade-off between speed and stability.',
        ],
      },
      {
        id: 'gbm-pros-cons',
        number: 115,
        title: '115. Gradient Boosting: Advantages, Limitations & Applications',
        subtitle: 'Predictive power that "cannot be trumped" — balanced against sequential scaling, overfitting risk, and tuning complexity.',
        pathId: 'data-science-5',
        pathTitle: 'Data Science V · Machine Learning',
        readingTime: '4 mins',
        difficulty: 'Beginner',
        objectives: [
          'Recall the three advantages of GBM',
          'Recall the three limitations of GBM',
          'List the three industry applications the book names',
        ],
        concepts: [
          {
            title: 'Advantages of Gradient Boosting Machines',
            paragraphs: [
              'Flexibility: Can optimize on different loss functions and provides several hyperparameter tuning options that make the function fit very flexible.',
              'Predictive Power: Often provides predictive accuracy that cannot be trumped by other algorithms.',
              'Handling Different Types of Data: Capable of handling data of mixed types — quantitative, categorical.',
            ],
          },
          {
            title: 'Limitations of Gradient Boosting Machines',
            paragraphs: [
              'Scaling: Due to the sequential nature of boosting it can hardly be parallelised.',
              'Overfitting: If not tuned properly, the model can overfit, which means it performs well on training data but poorly on unseen data.',
              'Complexity: Requires careful tuning of different hyperparameters, such as the number of trees, depth of trees, learning rates, and more.',
            ],
          },
          {
            title: 'Applications of Gradient Boosting Machines',
            paragraphs: [
              'Finance: For credit scoring and risk management.',
              'Medicine: To identify various risk factors in patient management.',
              'E-commerce: For recommendation systems and customer segmentation.',
            ],
          },
          {
            title: 'Conclusion',
            paragraphs: [
              'Gradient Boosting Machines offer a powerful and highly effective ensemble method for both regression and classification problems, well-suited for competitive machine learning and in situations where predictive accuracy is of utmost importance. Despite their complexity and need for careful tuning, their capability in handling various types of data and robustness against different kinds of modeling issues makes them a preferred choice for many data scientists.',
            ],
          },
        ],
        glossary: [
          { term: 'Parallelism', definition: 'Boosting is sequential by design — each tree depends on the previous — which limits how much it can be parallelised.' },
        ],
        realWorldExample: {
          scenario: 'A medical risk model on a million-row dataset',
          application: 'XGBoost with early stopping on a held-out validation set — the standard recipe for "predictive accuracy that cannot be trumped."',
          impact: 'GBM is the right default when accuracy matters most and you have time to tune.',
        },
        playground: {
          type: 'gbm-pros-cons',
          title: 'GBM pros, cons, and applications',
          instructions: 'Read the three pros, three cons, and three applications. Notice how the applications mirror the Random Forest applications — but with GBM you trade interpretability for predictive power.',
          expectedOutcome: 'Be able to articulate when to use GBM (max accuracy, mixed data) vs. when to use Random Forests (interpretability, intrinsic feature importance).',
        },
        quiz: [
          {
            id: 'gb-pc-q1',
            question: 'Which of these is a limitation of GBM?',
            options: [
              'It can hardly be parallelised due to its sequential nature.',
              'It cannot handle categorical features.',
              'It always underfits.',
              'It only does classification.',
            ],
            answerIndex: 0,
            explanation: 'Boosting is sequential — each tree depends on the previous — which limits parallelism.',
          },
          {
            id: 'gb-pc-q2',
            question: 'The book says GBM is "preferred" for which of the following?',
            options: [
              'Real-time control systems.',
              'Competitive machine learning where predictive accuracy is of utmost importance.',
              'Tiny datasets with 10 rows.',
              'Pure visualisation tasks.',
            ],
            answerIndex: 1,
            explanation: 'The book: well-suited for competitive ML and situations where predictive accuracy is of utmost importance.',
          },
        ],
        practiceExercise: {
          task: 'In the simulator, list the three limitations of GBM and the three industry applications.',
          hint: 'Read both the "Limitations" and "Applications" panels.',
          expectedAnswer: 'Limitations: scaling (hard to parallelise), overfitting, complexity (tuning). Applications: finance, medicine, e-commerce.',
        },
        keyTakeaways: [
          'Advantages: flexibility, predictive power, handles mixed data types.',
          'Limitations: poor parallelisation, overfitting risk, tuning complexity.',
          'Applications: finance, medicine, e-commerce.',
        ],
      },
    ],
  },
];