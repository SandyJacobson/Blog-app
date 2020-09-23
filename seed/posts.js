const db = require('../db/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts = 
    [
      {
        title: "Bears Win",
        imgURL: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/1911774_245624122277089_1617403964_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=0enJ96pgh6sAX9mwHmr&_nc_ht=scontent-lga3-2.xx&oh=0c1ea6c25192af07cfab23e890f5044c&oe=5F8E2C95",
        content:
          "Trubisky suprisingly puts team on his back and leads insane Bears comeback to beat Detroit",
      },
      {
        title: "Trubisky Shines in the 4th",
        imgURL: "https://i.postimg.cc/qMCM483T/B1-AECB34-6-A7-D-48-E7-9740-27-BF2-FC671-B5.jpg",
        content:
          "After struggling in the first three quarters, Trubisky shines with a 3 TD fourth.",
      },
      {
        title: "Swift Drops winning TD",
        imgURL: "https://i.postimg.cc/wMh5SD0x/0-F892211-EE2-E-44-E0-AC98-4-A0-C7-B48-F90-C.jpg",
        content:
          "The rookie had a perfectly thrown ball go through his hands in the endzone with 12 seconds remaining in the game. ",
      },
      {
        title: "Fuller has timely interception",
        imgURL: "https://i.ibb.co/dpXGdkH/1-A4-A6-E4-A-4505-4961-8-ADC-1-BD839740-AA1.jpg",
        content:
          "With their backs against the wall and when they needed it most, Full comes up with huge INT",
      },
      {
        title: "Soldier Field Still Empty",
        imgURL: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/1911774_245624122277089_1617403964_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=0enJ96pgh6sAX9mwHmr&_nc_ht=scontent-lga3-2.xx&oh=0c1ea6c25192af07cfab23e890f5044c&oe=5F8E2C95",
        content:
          "Soldier field witll remain closed for this weekends home opener",
      }
    ]

    await Post.insertMany(posts)
    console.log("Created posts!")
}
const run = async () => {
    await main()
    db.close()
}

run()