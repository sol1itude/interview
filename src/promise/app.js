const fs = require('fs');

let uid = 1;

fs.readFile('./user.json', 'utf-8', (err, data) => {
    const userData = JSON.parse(data),
          userInfo = userData.filter( item => item.id === uid)[0];

    console.log(userInfo);

    fs.readFile('./userCourse.json', 'utf8', (err, data) => {
        const userCourseData = JSON.parse(data),
              userId = userInfo.id,
              userCourse = userCourseData.filter(item => item.uid === userId)[0];
        console.log(userCourse);
        fs.readFile('./course.json', 'utf8', (err, data) => {
            const courseData = JSON.parse(data);
                  course = userCourse.course;
            let _arr = [];
            course.map(id => {
                courseData.map( item => {
                    if(item.id === id){
                        _arr.push(item)
                    }
                })
            })
            
            const userCourseInfo = {
                username: userInfo.username,
                course: _arr
            };

            fs.writeFileSync(`./${userInfo.username}.json`, JSON.stringify(userCourseInfo))

        })
    })
})
