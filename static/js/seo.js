var oes = Vue.component('oes', {
  data: function(){
    return {
      NAME : "Abhijeet Pokhriyal",
      TEXT : `
      •	Currently pursuing MS in Data Science and Business Analytics at University of North Carolina at Charlotte.
      •	Forward-focused professional with 4 years of software development experience with an analytics product for Population Health Management Analytics at UnitedHealth Group
      •	First-hand knowledge of Data Visualization and Analytics in R/Python. Including python packages like pandas, scikit-learn, keras plotnine, plotly etc and with models like Linear and Logistic Regression, Random Forests, K-Means clustering
      •	Experience in Geographical Information Visualization with ArcGIS and python packages like folium, geopy and branca .
      •	Cloud Technologies and DevOps – Microsoft Azure, Terraform, Jenkins, GitHub, Docker , Packer and Ansible.  Some experience with Apache Beam.
      •	Experience working with web technologies like Flask, .Net MVC, AngularJs, HTML5, D3 and Kendo
      •	Responsible for design, development and deployment of a web-based analytics product for population health management following agile methodology.
      •	Partnering with UI/UX and Data team to implement seamless data visualizations by laying foundations for a reusable and extensible visualization system for Guided Analytics supporting different lines of business using Kendo and D3
      •	Implementing statistical models for pre-caching the dashboards by mining the users’ usage data
      •	Pilot Implementation of an embedded Geographical Information System within the product to enable What-If analysis and Scenario Planning for care locations.
      •	Handling migration of on-premises infrastructure including data warehouse and  web application to Microsoft Azure using open source tools such as python, Terraform, Jenkins, Ansible and Packer.
      •	Partnering with product managers to identify causes for high priority production defects and correlation with Rally points/estimates etc
      Focused on a prediction model to estimate cost of a work item which could range from repairing or replacing an appliance to general heating or plumbing work. This model could then be used to auto adjudicate vendor transactions thereby reducing call center volume by reducing the need for manual authorizations.
      - Reusable SQL-Python interfaces
      - Feature Engineering : Handling Categorical and missing data
      - Simplifying analysis presentation and model results for stakeholders
      - Shapley Analysis : Model debugging
      - Quantifying difference/advantage of the new model over the existing system
      - Evaluating feasibility of converting the model to a static limit based system
      `
    }
  },
  template:`
  <div class="oes">
    <h1> {{NAME}} </h1>
    <h4> {{TEXT}} </h4>
  </div>
  `
})
