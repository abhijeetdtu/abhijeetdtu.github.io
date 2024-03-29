var events = [{
  title: 'B.Tech Computer Engineering',
  institute: 'DTU (DCE)',
  start: '2011',
  end: '2015',
  img: 'static/img/dtu.png',
  highlights: [{
      text: '79.89 %',
      type: 'h5',
      group: 1
    },
    {
      text: 'Scores in relavent courses :',
      type: 'h6',
      group: 2
    },
    {
      text: 'AI - 81',
      type: 'h7',
      group: 3
    },
    {
      text: 'Data Warehousing and Mining - 87',
      type: 'h7',
      group: 3
    },
    {
      text: 'Web Tech and Java Programming - 89',
      type: 'h7',
      group: 3
    },
    {
      text: 'Computer Graphics - 88',
      type: 'h7',
      group: 3
    },
    {
      text: 'Data Structures - 84',
      type: 'h7',
      group: 3
    },
    {
      text: 'DBMS - 81',
      type: 'h7',
      group: 3
    }
  ]
}, {
  title: 'Software Engineer ',
  institute: 'UHG/OPTUM',
  start: '2015',
  end: '2019',
  img: 'static/img/optum.png',
  highlights: [{
      text: 'Population Health Management Analytics Product ',
      type: 'h6',
      group: 1
    },
    {
      text: 'Reusable and extensible visualization system (MVC/C#/D3/Kendo)',
      type: 'h7',
      group: 2
    },
    {
      text: 'Pre-caching the dashboards - Markov Models',
      type: 'h7',
      group: 2
    },
    {
      text: 'Scenario Planning for care locations - ArcGIS',
      type: 'h7',
      group: 3
    },
    {
      text: 'Microsoft Azure migration - (python/terraform/jenkins)',
      type: 'h7',
      group: 4
    },
  ]
}, {
  title: 'Masters in Data Science',
  institute: 'UNC Charlotte',
  start: '2019',
  end: '2021',
  img: 'static/img/uncc.png',
  highlights: [{
      text: '4.0 GPA',
      type: 'h5',
      group: 1
    },
    {
      text: 'Few relavent courses :',
      type: 'h6',
      group: 2
    },
    {
      text: 'Computer Vision - Dr Steven Welch',
      type: 'h7',
      group: 3
    },
    {
      text: 'Business Intellgence - Dr Monica Johar',
      type: 'h7',
      group: 3
    },
    {
      text: 'Digital Marketing Analytics - Dr Ming Chen',
      type: 'h7',
      group: 3
    },
    {
      text: 'Machine Learning - Dr Samira Shaikh',
      type: 'h7',
      group: 3
    },
    {
      text: 'Big Data for Competitve Advantage - Dr Chandra Subramanium',
      type: 'h7',
      group: 3
    },
  ]
}, {
  title: 'Data Science Intern',
  institute: 'Frontdoor Inc',
  start: '2020/07',
  end: '2020/09',
  img: 'static/img/frontdoor.png',
  highlights: [{
      text: 'Cost Prediction for Work Orders',
      type: 'h5',
      group: 1
    },
    {
      text: 'Key Result Areas :',
      type: 'h6',
      group: 2
    },
    {
      text: 'Reusable SQL-Python interfaces',
      type: 'h7',
      group: 3
    },
    {
      text: 'Shapley Analysis : Model debugging',
      type: 'h7',
      group: 3
    },
    {
      text: 'Quantifying difference/advantage of the new model over the existing system',
      type: 'h7',
      group: 3
    },
    {
      text: 'Evaluating feasibility of converting the model to a static limit based system',
      type: 'h7',
      group: 3
    },
  ]}, {
    title: 'Data Scientist L3',
    institute: 'Frontdoor Inc',
    start: '2021/06',
    end: '2022/09',
    img: 'static/img/frontdoor.png',
    highlights: [
      {
        text: 'Worked with multiple stakeholders across Operations, Marketing and Data Engineering to build scalable predictive solutions',
        type: 'h7',
        group: 1
      },
      {
        text: 'Coverage Prediction',
        type: 'h5',
        group: 2
      },
      {
        text: 'Using historical agent decisions for items and subscription plans, built a model to predict whether work order items should be covered by Frontdoor ',
        type: 'h7',
        group: 2
      },{
        text: 'Increased auto-approval rates by 5% pts allowing ~$60K worth of items per month to bypass agents',
        type: 'h6',
        group: 2
      },{
        text: 'Dashboards were also built for tracking model performance in production in detail along with using MLFlow for performance metrics',
        type: 'h7',
        group: 2
      }
      ,{
        text: 'Renewal Prediction',
        type: 'h5',
        group: 2
      },
      {
        text: 'Combined Experian Real-Estate data along with customer and product features to predict subscription renewals',
        type: 'h7',
        group: 2
      },{
        text: 'Model was used to target customers less likely to renew via outbound calls and emails and provided a lift in renewals for upper quantiles ',
        type: 'h6',
        group: 2
      },{
        text: 'X-Ray Project',
        type: 'h5',
        group: 2
      },
      {
        text: 'Using PySpark and Dash built an app to allow users to get insight into the usage of various Views and Tables in Snowflake  ',
        type: 'h7',
        group: 2
      },{
        text: 'This allowed Data Engineering to better plan scaling of warehouses and allowed cleaning up of littered objects',
        type: 'h6',
        group: 2
      }
    ]
    }
]


var projects = [{
      title: 'Computer Vision on Edge: Drone Control using Gestures',
      institute: 'Academic Project',
      start: 'Jan 2021',
      end: 'May 2021',
      //https://user-images.githubusercontent.com/6872080/108295832-6c268a00-7166-11eb-9d49-31af59486bb4.gif
      img: 'https://user-images.githubusercontent.com/6872080/192601556-5747b8a2-4532-4809-8409-6da4c1edd05e.png',
      link: 'https://github.com/abhijeetdtu/drone_control_gesture',
      highlights: [{
        text: 'Controlling a Drone using Pose Estimation in Python and Tensorflow Lite',
        type: 'h6',
        group: 1
      }, {
        text: 'Built an embedded real-time human action detection and classification system which was deployed on a Nvidia Jetson Nano Microcomputer and subsequently used on a drone',
        type: 'h7',
        group: 2
      }, {
        text: 'Once we had our model ready, to interface with a drone we used dronekit-sitl (Software in the loop) for drone simulation and dronekit-python, for drone vehicle control. ',
        type: 'h7',
        group: 3
      }, {
        text: 'Keras / Python / NVIDIA Jetson Nano / GStreamer / dronekit',
        type: 'h6',
        group: 3
      }]
    }, {
    title: 'Predicting Economic Activity From Satellite Images',
    institute: 'Academic Project',
    start: 'Aug 2020',
    end: 'Dec 2020',
    //https://user-images.githubusercontent.com/6872080/108295832-6c268a00-7166-11eb-9d49-31af59486bb4.gif
    img: 'https://user-images.githubusercontent.com/6872080/108295832-6c268a00-7166-11eb-9d49-31af59486bb4.gif',
    link: 'https://github.com/abhijeetdtu/dsba4152',
    highlights: [{
      text: 'Predicted GDP using Nightlight Satellite Images',
      type: 'h7',
      group: 1
    }, {
      text: 'RMSE $180 Billion on Test Set (10% of Mean GDP in dataset)',
      type: 'h8',
      group: 2
    }, {
      text: 'Multi-Data Model using Images and Image meta data (numerical data)',
      type: 'h8',
      group: 3
    }, {
      text: 'FastAi / Keras / Python / Flask',
      type: 'h8',
      group: 3
    }]
  }, {
    title: 'Visual Analytics - Hotel Cancellations',
    institute: 'Academic Project',
    start: 'Aug 2020',
    end: 'Dec 2020',
    img: 'https://camo.githubusercontent.com/87a3abe0321ad1e6873b0916088367b505806003c4ee1e306731e4badf4826c9/68747470733a2f2f692e696d6775722e636f6d2f6c504b385577692e676966',
    link: 'https://abhijeetdtu.shinyapps.io/dsba5122/',
    highlights: [{
      text: 'Built R Shiny App',
      type: 'h7',
      group: 1
    }, {
      text: 'Identify reasons for cancellations',
      type: 'h8',
      group: 2
    }, {
      text: 'Explore how to increase the Average Daily Rates, thereby increasing the overall revenue for the hotel.',
      type: 'h8',
      group: 2
    }, {
      text: 'Github Url: https://github.com/abhijeetdtu/dsba5122',
      type: 'h8',
      group: 3
    }]
  },
  {
    title: 'Misinformation Analysis',
    institute: 'Personal Project',
    start: 'Ongoing',
    end: '',
    img: 'static/img/indianmedia_short.gif',
    link: 'http://indianmedia.herokuapp.com/',
    highlights: [{
      text: 'Quantifying media outlet similarities',
      type: 'h7',
      group: 1
    }, ]
  }, {
    title: 'Religious Books Exploration',
    institute: 'Personal Project',
    start: '2020-03',
    end: '2020-05',
    img: 'static/img/architecture_svg.svg',
    link: 'https://github.com/abhijeetdtu/dsba6155project',
    highlights: [{
        text: 'Leverage text analytics/ word vectors to search for similar ideas in different books',
        type: 'h7',
        group: 1
      },
      {
        text: 'Google Cloud Technologies:',
        type: 'h6',
        group: 2
      },
      {
        text: 'Functions',
        type: 'h7',
        group: 3
      },
      {
        text: 'Cloud Storage',
        type: 'h7',
        group: 3
      }, {
        text: 'Big Query',
        type: 'h7',
        group: 3
      }, {
        text: 'Data Studio',
        type: 'h7',
        group: 3
      },
      {
        text: 'Data Lab',
        type: 'h7',
        group: 3
      }, {
        text: 'App Engine',
        type: 'h7',
        group: 3
      },
    ]
  }, {
    title: 'Movie Theme Exploration',
    institute: 'Personal Project',
    start: '2019-10',
    end: '2019-12',
    img: 'static/img/sharedwatch.gif',
    link: 'https://sharedwatch.herokuapp.com/',
    highlights: [{
        text: 'Leverage text analytics/ word vectors to explore movies themes and find similar movies',
        type: 'h7',
        group: 1
      },
      {
        text: 'Python/ Scikit-learn / Spacy / pymagnitude',
        type: 'h7',
        group: 2
      },
    ]
  }, {
    title: 'Accent leveling and the urban-rural distinction',
    institute: 'with Dr Rebecca Roeder',
    start: '2019',
    end: 'ongoing',
    img: 'static/img/Rlogo.png',
    highlights: [{
        text: 'Analysis of Variance using Linear and Mixed Effects Models',
        type: 'h7',
        group: 1
      },
      {
        text: 'R^2 (for F1 frequeny) - 0.72',
        type: 'h7',
        group: 1
      },
      {
        text: 'R^2 (for F2 frequeny) - 0.8',
        type: 'h7',
        group: 1
      },
      {
        text: 'Analyze speech and socio-economic data',
        type: 'h7',
        group: 2
      },
      {
        text: 'R / Python / FAVE Extract / Praat / Docker',
        type: 'h7',
        group: 3
      }

    ]
  }, {
    title: 'Cost Prediction for Work Orders',
    institute: 'Frontdoor Inc',
    start: '2020/07',
    end: '2020/09',
    img: 'static/img/frontdoor.png',
    highlights: [{
        text: 'R^2 - 0.89',
        type: 'h7',
        group: 1
      },
      {
        text: 'RMSE ~$40',
        type: 'h7',
        group: 1
      },
      {
        text: 'Reduce call center volume',
        type: 'h7',
        group: 2
      },
      {
        text: 'Automatically approving certain transactions',
        type: 'h7',
        group: 2
      },
      {
        text: 'Python / Scikit-learn / Shapley / Pandas',
        type: 'h7',
        group: 3
      }

    ]
  }
]


var jupyter_notebooks = [{
    "type": "local",
    "title": "Convolution",
    "link": "./jupyter_notebooks/Understanding kernels.html"
  },
  {
    "type": "local",
    "title": "MultiTask Model",
    "link": "./jupyter_notebooks/multi_task_model.html"
  },
  {
    "type": "binder",
    "title": "Fourier Transform",
    "link": "https://abhijeetdtu.github.io/computervision/Fourier%20Transform.html"
  },
  {
    "type": "binder",
    "title": "Gaussian Filters",
    "link": "https://abhijeetdtu.github.io/computervision/Gaussian%20Filters.html"
  },
  {
    "type": "embedly",
    "title": "Text Analysis of Indian Media",
    "link": "https://medium.com/analytics-vidhya/text-analysis-of-indian-media-d752de376099"
  },
  {
    "type": "embedly",
    "title": "Predicting Media Bias",
    "link": "https://medium.com/analytics-vidhya/mlforsocial-predicting-media-bias-8e94d03befb5"
  },
  {
    "type": "embedly",
    "title": "Text Analytics in Cloud Part 1",
    "link": "https://medium.com/analytics-vidhya/text-analytics-in-cloud-part-1-e0467d5034d"
  },
  {
    "type": "embedly",
    "title": "Feature Engineering Experiment- Weighted KNN",
    "link": "https://medium.com/analytics-vidhya/feature-engineering-experiment-weighted-knn-3f28dfdf30e1"
  },
  {
    "type": "embedly",
    "title": "Productionlize your Machine Learning (Python) Application",
    "link": "https://medium.com/analytics-vidhya/productionlize-your-machine-learning-python-application-e1989dd82f24"
  },
  {
    "type": "header",
    "title": "Machine Learning Basics",
    "children": [
      {"type":"binder"}
    ]
  }

]
