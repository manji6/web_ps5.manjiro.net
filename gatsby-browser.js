//const React = require("react")

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onRouteUpdate = ({ location, prevLocation }) => {

  if(location.pathname === "/"){
      
    const date_now = new Date()
    const date_dayoftheweek_jp = ["日","月","火","水","木","金","土"]

    const date_release_ps5 = new Date("2020/11/12 00:00:00")

    var days_elapsed_ms = date_now.getTime() - date_release_ps5.getTime()
    var days_elapsed_date = Math.ceil(days_elapsed_ms / (1000 * 60 * 60 * 24))

    document.querySelector("#data_today").textContent = ` ${date_now.getFullYear()}年${(date_now.getMonth() + 1)}月${date_now.getDate()}日(${(date_dayoftheweek_jp[date_now.getDay()])})`
    document.querySelector("#data_duration").textContent = days_elapsed_date

    if(date_now.getDate() === 13){
      document.querySelector("#data_duration_month").textContent = (date_now.getMonth() - date_release_ps5.getMonth() + ((date_now.getFullYear() - date_release_ps5.getFullYear())*12))
      document.querySelector("#label_duration_month_anniversary").classList.remove("is-hidden")
    }
    if(days_elapsed_date % 100 === 0){
      document.querySelector("#data_duration_day").textContent = days_elapsed_date
      document.querySelector("#label_duration_day_exactly").classList.remove("is-hidden")
    }

  }

}

