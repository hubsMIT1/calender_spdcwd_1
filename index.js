setInterval(dgt, 1000)

function dgt() {
    let dt = new Date();

    var t = dt.toLocaleTimeString("it-IT");
    document.getElementById("clock").innerHTML = t;
}
dgt();
// let hr = t.getHours();
// let min = t.getMinutes();
// let sec = t.getSeconds();
// let day = t.getDate();
// let mnth = t.getMonth();
// let yr = t.getFullYear();

// if (sec < 10) {
//     sec = "0" + sec;
// }
// if (min < 10) {
//     min = "0" + min;
// }
// if (hr < 10) {
//     hr = "0" + hr;
// }
// let d = day + '/' + (mnth + 1) + '/' + yr;

// let c = hr + ":" + min + ":" + sec;




function calendar() {
    const calendar = document.getElementById('calendar');

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    let head1 = 0;

    function main() {
        const dt = new Date();

        if (head1 !== 0) {
            dt.setMonth(new Date().getMonth() + head1);
        }

        const day = dt.getDate();
        const month = dt.getMonth();
        const year = dt.getFullYear();

        const firstday = new Date(year, month, 1);
        const totalday = new Date(year, month + 1, 0).getDate();

        const dateString = firstday.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        });
        const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

        document.getElementById('mnthyr').innerText =
            `${dt.toLocaleDateString("in", { month: 'long' })} ${year}`;

        calendar.innerHTML = '';

        for (let i = 1; i <= paddingDays + totalday; i++) {
            const daygrid = document.createElement('div');
            daygrid.classList.add('day');

            const dayString = `${month + 1}/${i - paddingDays}/${year}`;

            if (i > paddingDays) {
                daygrid.innerText = i - paddingDays;


                if (i - paddingDays === day && head1 === 0) {
                    daygrid.id = 'currentDay';
                }


                daygrid.addEventListener('click', () => console.log('click'));
            } else {
                daygrid.classList.add('padding');
            }

            calendar.appendChild(daygrid);
        }
    }



    function changemonth() {
        document.getElementById('nxtbtn').addEventListener('click', () => {
            head1++;
            main();
        });

        document.getElementById('bkbtn').addEventListener('click', () => {
            head1--;
            main();
        });


    }

    changemonth();
    main();
}
calendar();





// just cheching for 
// var myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("span");
//     var txt = document.createTextNode("Delete");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }
// var close = document.getElementsByClassName("close");
// for (var i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//         var del = this.parentElement;
//         del.style.display = "none";
//     }
// }


// st

function main2() {
    var btn = document.querySelector('.btn');
    var myInput = document.getElementById('in1');
    // var Add = document.querySelector(".btn")


    let liArr = localStorage.getItem('savelist') ? JSON.parse(localStorage.getItem('savelist')) : [];

    localStorage.setItem('savelist', JSON.stringify(liArr))
    var saver = JSON.parse(localStorage.getItem('savelist'))

    const list2 = (text) => {
        var divs = document.createElement('div');
        var lists = document.createElement('li');
        document.getElementById('UL1').appendChild(divs);
        lists.textContent = text
        divs.appendChild(lists);
        var span = document.createElement('span');
        var cls = document.createTextNode(" Delete");
        span.className = 'close';
        span.appendChild(cls);
        divs.appendChild(span);



        // // for time date    
        // function timed1() {

        // const dt = new Date();

        const datetime1 = document.createElement('div');
        datetime1.id = 'dtime';
        divs.appendChild(datetime1);
        const dt = new Date();
        const d = dt.toLocaleDateString("in");
        const c = dt.toLocaleTimeString("in");
        // document.getElementById("dtime").innerHTML = c;
        const tem = c;
        const dem = d;
        const td4 = document.createTextNode(tem + " , " + dem);
        datetime1.appendChild(td4);
        datetime1.className = 'timecls';





        for (var i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                // localStorage.removeItem();
                localStorage.clear();

                // var del = lists.parentElement;
                var del = this.parentElement;
                // var del = divs.parentElement;
                del.style.display = "none";
                // localStorage.removeItem(del);
                // document.querySelector('li').onclick = '';
            }
        }
        // document.getElementById('dtime').innerText =
        //     dt.toLocaleTimeString("in") + "," + dt.toLocaleDateString("in");
        // document.getElementById('clock').innerText =


        // var hr = t.getHours();
        // var min = t.getMinutes();
        // var sec = t.getSeconds();
        // var day = t.getDate();
        // var mnth = t.getMonth() + 1;
        // var yr = t.getFullYear();

        //     if (sec < 10) {
        //         sec = "0" + sec;
        //     }
        //     if (min < 10) {
        //         min = "0" + min;
        //     }
        //     if (hr < 10) {
        //         hr = "0" + hr;
        //     }
        //     if (mnth < 10) {
        //         mnth = "0" + mnth;
        //     }
        //     if (day < 10) {
        //         day = "0" + day;
        //     }


        // document.getElementById("clock").innerHTML = d;
        //     // document.write(d)
        //     // document.write('<br>')
        //     // document.write(c)



        // var d = document.getElementById('dtime').value;llet 
        // let l = close.length;
        // for (var i = 1; i <= l; i++) {
        //     span[i].onclick = function() {
        //         localStorage.removeItem(lists[l - (l - i)]);
        //     }
        // }





        //     // }

        //     // del();
        // }
        // timed1();

        // function del() {

        // }

        // document.querySelector('li').onclick = '';
        // span.addEventListener('click', function() {
        //     localStorage.removeItem()
        //     divs.parentNode.parentNode.removeChild(divs.parentNode);
        // while (lists.firstChild) {
        // divs.removeChild()
        // datetime1.removeChild(datetime1.firstChild)
        // span.removeChild(span.oneChild)
        // cls.removeChild(cls.AllChild)

        // }
        // })
        span.addEventListener('click', function() {
            divs.removeItem();
            divs.parentNode.parentNode.removeChild(divs.parentNode);
        })


    }
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        if (myInput.value.trim() != 0) {
            liArr.push(myInput.value)
            localStorage.setItem('savelist', JSON.stringify(liArr))
            list2(myInput.value);
            myInput.value = " "


        }
        // + " (" + `${dt.toLocaleDateString("in", { month: 'long' })} ${year}` + ") "


    })
    saver.forEach((savelist) => {
        list2(savelist)

    });
}
main2();

// function dlt2() {
//     var d1 = localStorage.getItem('savelist');
//     let liArr = JSON.parse(d1);
//     d2.splice();
//     localStorage.setItem('savelist', JSON.stringify(liArr))
//     main2();
// }
