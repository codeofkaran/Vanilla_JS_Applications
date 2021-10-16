const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: "python",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
        name: 'Kush Singla',
        age: 42,
        city: 'Kurali',
        language: ".Net",
        image: "https://randomuser.me/api/portraits/men/78.jpg",
    },
    {
        name: 'Mona',
        age: 28,
        city: 'Kashmir',
        language: "C++",
        image: "https://randomuser.me/api/portraits/women/75.jpg",
    },
    {
        name: 'Babbu',
        age: 28,
        city: 'Punjab',
        language: "JS++",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    }
]

function cvIterator(profiles){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex<profiles.length?
            {
                value: profiles[nextIndex++], 
                done: false
            }:
            {
                done:true
            }
        }
    };
}

const canditates = cvIterator(data);
nextCV();

const next = document.getElementById("next")
next.addEventListener("click",nextCV);

function nextCV(){
    const currentCandidate = canditates.next().value;
    let image = document.getElementById("image");
    let profile = document.getElementById("tableData");
    if(currentCandidate !=undefined){
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<table>
        <tr>
            <td>${currentCandidate.name}</td>
        </tr>
        <tr>
            <td>${currentCandidate.age} years old</td>
        </tr>
        <tr>
            <td>Lives in ${currentCandidate.city}</td>
        </tr>
        <tr>
            <td>Works on ${currentCandidate.language}</td>
        </tr>
    </table>`
    }
    else{
        alert("End of apllication");
        window.location.reload();
    }
}