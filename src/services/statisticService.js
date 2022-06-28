const totalJobsDone = (data) => {

    let i = 0
    let j = 0
    let earlyDate = data[0].date
    let statistic = {}
    let date
    data.forEach(element => {
        date = data[i].date
        if( date < earlyDate && !data[i].meta.completed){
            date = earlyDate
        }
        if(data[i].meta.completed) j++

        i++
    });
    statistic.qnty = i
    statistic.completedJob = j
    statistic.earlyDate = earlyDate

    return statistic
  }
  
  export default{
    totalJobsDone
  }