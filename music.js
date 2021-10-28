const music = document.querySelector("audio");
const img = document.getElementById ("biswa");

const title = document.getElementById("title");
const artist = document.getElementById("artist");

const play = document.getElementById("play");
const Next = document.getElementById("next");
const Prev = document.getElementById("prev");


let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");
const progress_div = document.getElementById("progress_div");



// All Songs Data(Default, English, Hindi, Bengali)

        
        const son =[
            {     
                Title : "The-Spectre",
                artist : "Alan-Walker",
                name : "Alan-Walker-The-Spectre",   
                img : "blaz-photo-cZWZjymwI9o-unsplash",
            },
            {     
                Title : "On-My-Way",
                artist : "Alan-Walker",
                name : "Alan-Walker_(webmusic.in)",   
                img : "blaz-photo-cZWZjymwI9o-unsplash",
            },
            {     
                Title : "Faded",
                artist : "Alan-Walker",
                name : "Faded(PaglaSongs)",   
                img : "blaz-photo-cZWZjymwI9o-unsplash",
            },
            {     
                Title : "Friends",
                artist : "Marshmello, Anne Marie",
                name : "Friends - Marshmello, Anne Marie",   
                img : "blaz-photo-cZWZjymwI9o-unsplash",
            },
            {     
                Title : "Hey-Mama",
                artist : "Bebe Rexha",
                name : "Hey-Mama(PagalWorld)",   
                img : "blaz-photo-cZWZjymwI9o-unsplash",
            },
            {     
                Title : "Ignite",
                artist : "Alan Walker",
                name : "K 391 Alan Walker Ignite (englishsongs.wapkiz.com)",   
                img : "blaz-photo-cZWZjymwI9o-unsplash",
            },
            {     
                Title : "rockabye",
                artist : "Clean Bandit",
                name : "rockabye",   
                img : "blaz-photo-cZWZjymwI9o-unsplash",
            },
            {     
                Title : "RANDALL Wahran",
                artist : "Unknown",
                name : "RANDALL Wahran (englishsongs.wapkiz.com)",   
                img : "blaz-photo-cZWZjymwI9o-unsplash",
            },
            {     
                Title : "Alone",
                artist : "Marshmello",
                name : "Marshmello Check This Out (englishsongs.wapkiz.com)",   
                img : "blaz-photo-cZWZjymwI9o-unsplash",
            },
        ]


        const song =[
            {
                Title : "Khuda-Jaane",
                artist : "KK",
                name : "Khuda-Jaane-(Bachna-Ae-Haseeno)_(webmusic.in)",   
                img : "kelly-sikkema-HwU5H9Y6aL8-unsplash",
            },
            {
                Title : "Labon-Ko",
                artist : "KK",
                name : "Labon-Ko-(Bhool-Bhulaiyaa)_(webmusic.in)",   
                img : "kelly-sikkema-HwU5H9Y6aL8-unsplash",
            },
            {
                Title : "Mat-Aazma-Re",
                artist : "KK",
                name : "Mat-Aazma-Re-(Murder-3)_(webmusic.in)",   
                img : "kelly-sikkema-HwU5H9Y6aL8-unsplash",
            },
            {
                Title : "Tu-Hi-Meri-Shab-Hai",
                artist : "KK",
                name : "Tu-Hi-Meri-Shab-Hai-(Gangster)_(webmusic.in)",   
                img : "kelly-sikkema-HwU5H9Y6aL8-unsplash",
            },
            {
                Title : "Tujhe-Sochta-Hoon",
                artist : "KK",
                name : "Tujhe-Sochta-Hoon-(Jannat-2)_(webmusic.in)",   
                img : "kelly-sikkema-HwU5H9Y6aL8-unsplash",
            },
            {
                Title : "Zara-Se",
                artist : "KK",
                name : "Zara-Se-(Jannat)_(webmusic.in)",   
                img : "kelly-sikkema-HwU5H9Y6aL8-unsplash",
            },
            {
                Title : "Tere Bina Zindegi Se",
                artist : "Lata Di",
                name : "Tere Bina Zindegi Se",   
                img : "kelly-sikkema-HwU5H9Y6aL8-unsplash",
            },
            {
                Title : "Mohabbatain",
                artist : "Alka Di",
                name : "Violin (Mohabbatain)",   
                img : "kelly-sikkema-HwU5H9Y6aL8-unsplash",
            },
        ]



        const songs =[
            {
                Title : "আমার মনের কোনের",
                artist : "অন্বেষা",
                name : "আমার মনের কোনের বাইরে ।",
                img : "adrian-korte-5gn2soeAc40-unsplash",
            },
            {
                Title : "সেদিন দুজনে দুলেছিনু বনে",
                artist : "unknown",
                name : "সেদিন দুজনে দুলেছিনু বনে। ",
                img : "adrian-korte-5gn2soeAc40-unsplash",
            },
            {
                Title : "সেই ভালো সেই ভালো।",
                artist : "unknown",
                name : "সেই ভালো সেই ভালো। ",
                img : "adrian-korte-5gn2soeAc40-unsplash",
            },
            {
                Title : "মম চিত্তে নিতি নিত্তে।",
                artist : "unknown",
                name : "মম চিত্তে নিতি নিত্তে। ",
                img : "adrian-korte-5gn2soeAc40-unsplash",
            },
            {
                Title : "জাগরনে যায় বিভাবরী।",
                artist : "শ্রাবনী সেন",
                name : "জাগরনে যায় বিভাবরী। শ্রাবনী সেন ",
                img : "adrian-korte-5gn2soeAc40-unsplash",
            },
            {
                Title : "আমার হিয়ার মাঝে।",
                artist : "অন্বেষা",
                name : "আমার হিয়ার মাঝে।  ",
                img : "adrian-korte-5gn2soeAc40-unsplash",
            },
            {
                Title : "Pa Ma Ga Re Sa",
                artist : "unknown",
                name : "Pa Ma Ga Re Sa ",
                img : "adrian-korte-5gn2soeAc40-unsplash",
            },

        ]

 
      function getOption(event)
   {
    //   var val = event.options[event.selectedIndex].value;
      var val = event.value;
     

      if(val === "empty")
       {
         confirm("Please select song language that you want to listen!")
       }
      else if(val === "English")
       {
        fun10();
       }
       else if(val === "Hindi")
       {
        fun11();
       }
       else
       {
        fun12();
       } 
   }
  


  function fun10 (){

    let isPlay= false;

    const fun1=()=>{
        isPlay = true;
        music.play();
        play.classList.replace("fa-play", "fa-pause");
        img.classList.add("anime");
    }
        
    const fun2=()=>{
        isPlay = false;
        music.pause();
        play.classList.replace("fa-pause", "fa-play");
        img.classList.remove("anime");
    }

    play.addEventListener("click", ()=>{
        // if(isPlay){
        //   fun2();
        // }
        // else
        // fun1();
        isPlay ? fun2() : fun1();
    });

    // song load function

    const load=(son)=>{
        title.textContent = son.Title;
        artist.textContent= son.artist;
        music.src = "music/"+ son.name + ".mp3";
        img.src = "images/"+ son.img + ".jpg";      
    }

    songIndex = 0;

    const nextsongs=()=>{
        // songIndex++;
        songIndex = (songIndex+1)%son.length;
        load(son[songIndex]);
        fun1();
    };

    const prevsongs=()=>{
        // songIndex--;
        songIndex = (songIndex-1 + son.length) % son.length;
        load(son[songIndex]);
        fun1();
    };


    music.addEventListener("timeupdate", (event)=>{
        // console.log(event);
        const {currentTime, duration} = event.srcElement;
            

        let progress_time =(currentTime/duration)*100;
        progress.style.width = `${progress_time}%`;


        // music_duration update
        let min_duration = Math.floor(duration/60);
        let sec_duration = Math.floor(duration%60);
            
    if(duration){
        total_duration.textContent = `${min_duration}:${sec_duration}`; 
    }
           

    // current duration update
    let min_currentTime = Math.floor(currentTime/60);
    let sec_currentTime = Math.floor(currentTime%60);

    if(sec_currentTime < 10)
    {
        sec_currentTime = `0${sec_currentTime}`;
    }
    current_time.textContent  = `${min_currentTime}:${sec_currentTime}`;
            
    });


    // progress seek bar function

    progress_div.addEventListener("click", (event)=>{
        const { duration } = music;
        let move_progress = (event.offsetX / event.srcElement.clientWidth)*duration;

        // music move any position
        music.currentTime = move_progress;
    })

    // if music end play nextone
    music.addEventListener("ended", nextsongs);
        
    Next.addEventListener("click", nextsongs);
    Prev.addEventListener("click", prevsongs);

}

  function fun11 (){

   // (isEnglish != isHindi && isEnglish === isBengali)
    
    let isPlay= false;

    const fun1=()=>{
        isPlay = true;
        music.play();
        play.classList.replace("fa-play", "fa-pause");
        img.classList.add("anime");
    }
        
    const fun2=()=>{
        isPlay = false;
        music.pause();
        play.classList.replace("fa-pause", "fa-play");
        img.classList.remove("anime");
    }

    play.addEventListener("click", ()=>{
        // if(isPlay){
        //   fun2();
        // }
        // else
        // fun1();
        isPlay ? fun2() : fun1();
    });

    // song load function

    const load=(song)=>{
        title.textContent = song.Title;
        artist.textContent= song.artist;
        music.src = "music/"+ song.name + ".mp3";
        img.src = "images/"+ song.img + ".jpg";      
    }
    songInd = 0;

    const nextsongs=()=>{
        // songIndex++;
        songInd = (songInd+1)%song.length;
        load(song[songInd]);
        fun1();
    };

    const prevsongs=()=>{
        // songIndex--;
        songInd = (songInd-1 + song.length) % song.length;
        load(song[songInd]);
        fun1();
    };


    music.addEventListener("timeupdate", (event)=>{
        // console.log(event);
        const {currentTime, duration} = event.srcElement;
            

        let progress_time =(currentTime/duration)*100;
        progress.style.width = `${progress_time}%`;


        // music_duration update
        let min_duration = Math.floor(duration/60);
        let sec_duration = Math.floor(duration%60);
            
        if(duration){
           total_duration.textContent = `${min_duration}:${sec_duration}`; 
        }
           

        // current duration update
        let min_currentTime = Math.floor(currentTime/60);
        let sec_currentTime = Math.floor(currentTime%60);

        if(sec_currentTime < 10)
        {
            sec_currentTime = `0${sec_currentTime}`;
        }
        current_time.textContent  = `${min_currentTime}:${sec_currentTime}`;
            
    });


    // progress seek bar function

    progress_div.addEventListener("click", (event)=>{
        const { duration } = music;
        let move_progress = (event.offsetX / event.srcElement.clientWidth)*duration;

        // music move any position
        music.currentTime = move_progress;
    })

    // if music end play nextone
    music.addEventListener("ended", nextsongs);
        
    Next.addEventListener("click", nextsongs);
    Prev.addEventListener("click", prevsongs);

}

  function fun12 (){
    
    let isPlay= false;

    const fun1=()=>{
        isPlay = true;
        music.play();
        play.classList.replace("fa-play", "fa-pause");
        img.classList.add("anime");
    }
        
    const fun2=()=>{
        isPlay = false;
        music.pause();
        play.classList.replace("fa-pause", "fa-play");
        img.classList.remove("anime");
    }

    play.addEventListener("click", ()=>{
        // if(isPlay){
        //   fun2();
        // }
        // else
        // fun1();
        isPlay ? fun2() : fun1();
    });

    // song load function

    const load=(songs)=>{
        title.textContent = songs.Title;
        artist.textContent= songs.artist;
        music.src = "music/"+ songs.name + ".mp3";
    img.src = "images/"+ songs.img + ".jpg";      
    }

    songId = 0;

    const nextsongs=()=>{
        // songIndex++;
        songId = (songId+1)%songs.length;
        load(songs[songId]);
        fun1();
    };

    const prevsongs=()=>{
        // songIndex--;
        songId = (songId-1 + songs.length) % songs.length;
        load(songs[songId]);
        fun1();
    };


    music.addEventListener("timeupdate", (event)=>{
        // console.log(event);
        const {currentTime, duration} = event.srcElement;
            

        let progress_time =(currentTime/duration)*100;
        progress.style.width = `${progress_time}%`;


            // music_duration update
            let min_duration = Math.floor(duration/60);
            let sec_duration = Math.floor(duration%60);
            
            if(duration){
               total_duration.textContent = `${min_duration}:${sec_duration}`; 
            }
           

            // current duration update
            let min_currentTime = Math.floor(currentTime/60);
            let sec_currentTime = Math.floor(currentTime%60);

            if(sec_currentTime < 10)
            {
                sec_currentTime = `0${sec_currentTime}`;
            }
            current_time.textContent  = `${min_currentTime}:${sec_currentTime}`;
            
        });


    // progress seek bar function

    progress_div.addEventListener("click", (event)=>{
        const { duration } = music;
        let move_progress = (event.offsetX / event.srcElement.clientWidth)*duration;

        // music move any position
        music.currentTime = move_progress;
    })

    // if music end play nextone
    music.addEventListener("ended", nextsongs);
        
    Next.addEventListener("click", nextsongs);
    Prev.addEventListener("click", prevsongs);

}
