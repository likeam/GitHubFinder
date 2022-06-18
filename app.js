//Intialize github
const github = new Github;


//Search input

const searchUser = document.getElementById('searchUser');

//search input event listener

searchUser.addEventListener('keyup', (e) => {

        //Get input text
        const userText = e.target.value;


        if(userText !== ''){
            //Make Http Call
            github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    //show alert

                } else {
                    //show profile
                }
            })
        }else{
            //clear profile
            
        }
});