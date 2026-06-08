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
];
