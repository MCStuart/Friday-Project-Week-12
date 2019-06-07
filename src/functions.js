export class conditionSearch() {
    getDoctorsByCondition(condition) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            let url = 'https://api.betterdoctor.com/2016-03-01/conditions?fields=${conditoin}&limit=10&user_key={process.env.apiKEY}';
            request.onload = function () {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            };
            request.open("GET", url, true);
            request.send();
        });
    }
}