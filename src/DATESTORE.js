// let numDays = [{month: 'August', days: 31}, {month: 'September', days: 30}, {month: 'October', days: 31}]

// function currentDate(dateToday) {
//     let dateToday = new Date()
//     let firstDay = new Date()
//     let newDates = []

//     if(numDays.map((month => month.days) === 31)) {
//         firstDay.setDate((dateToday.getDate()) - (dateToday.getDate() - 1))
        
//         for(day = 1; day < 32; day++) {
//             let newDate = firstDay.setDate(firstDay.getDate() + day).toString()

//             newDates.push(newDate)
            
            
//             //loop through and create dates
//             //extract days (numbers) and push to array to use in calendar
//         }

//         let currentMonthsDates = newDates.splice().map(date => {
//             return {date:}
//         })


//         // let dateArray = dateToday.split(' ')
        
//         // let dayNumber = dateArray[2]
//         // let month = dateArray[1]
//         // let day = dateArray[0]

//         // dayOne = day - (day - 1)

//     }

// }


// returned_array = [{
//     id: '42985372409387'
//     date: 'Thu Jan 26 2019 11:00:00 GMT+1:00'
//     exercise: 'Chest'
//     description: 'This workout is a ...'
//     sets: {'1':'', 2:''}
// },
// {
//     id: '42985372409387'
//     date: 'Thu Jan 26 2019 11:00:00 GMT+1:00'
//     exercise: 'Back'
//     description: 'This workout is a ...'
//     sets: {'1':'', 2:''}
// }]

// for item in returned_array {
// item_date = (new Date(item.date)).getDay(); // 26
// react_component = myCompenents.get_component(item.date);
// react_component.props.exercise = item_exercise
// }

// $('.month_day').click((event) => {
// description = $(event).currentTarget().data().description;
// sets = $(event).currentTarget().data().sets;
// $('#lower_area').append(description);
// $('#lower_area').append(sets);
// });


export const months = 
[
    {
        month: 'August',
        days: [
            {
            day: 'Thursday',
            date: '1'
            },
            {
            day: 'Thursday',
            date: '2'
            },
            {
            day: 'Thursday',
            date: '3'
            },
            {
            day: 'Thursday',
            date: '4'
            },
            {
            day: 'Thursday',
            date: '5'
            },
            {
            day: 'Thursday',
            date: '6'
            },
            {
            day: 'Thursday',
            date: '7'
            },
            {
            day: 'Thursday',
            date: '8'
            },
            {
            day: 'Thursday',
            date: '9'
            },
            {
            day: 'Thursday',
            date: '10'
            },
            {
            day: 'Thursday',
            date: '11'
            },
            {
            day: 'Thursday',
            date: '12'
            },
            {
            day: 'Thursday',
            date: '12'
            },
            {
            day: 'Thursday',
            date: '13'
            },
            {
            day: 'Thursday',
            date: '14'
            },
            {
            day: 'Thursday',
            date: '15'
            },
            {
            day: 'Thursday',
            date: '16'
            },
            {
            day: 'Thursday',
            date: '17'
            },
            {
            day: 'Thursday',
            date: '18'
            },
            {
            day: 'Thursday',
            date: '19'
            },
            {
            day: 'Thursday',
            date: '20'
            },
            {
            day: 'Thursday',
            date: '21'
            },
            {
            day: 'Thursday',
            date: '22'
            },
            {
            day: 'Thursday',
            date: '23'
            },
            {
            day: 'Thursday',
            date: '24'
            },
            {
            day: 'Thursday',
            date: '25'
            },
            {
            day: 'Thursday',
            date: '26'
            },
            {
            day: 'Thursday',
            date: '27'
            },
            {
            day: 'Thursday',
            date: '28',
            }, 
            {
            day: 'Thursday',
            date: '29',
            },
            {
            day: 'Thursday',
            date: '30',
            },
            {
            day: 'Thursday',
            date: '31'
            }
        ]
    }
]


export default {
    months,
}