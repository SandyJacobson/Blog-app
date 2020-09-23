const db = require('../db/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts = 
    [
      {
        title: "Bears Win",
        imgURL: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        content:
          "Trubisky suprisingly puts team on his back and leads insane Bears comeback to beat Detroit",
      },
      {
        title: "Trubisky Shines in the 4th",
        imgURL: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        content:
          "After struggling in the first three quarters, Trubisky shines with a 3 TD fourth.",
      },
      {
        title: "Swift Drops winning TD",
        imgURL: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        content:
          "The rookie had a perfectly thrown ball go through his hands in the endzone with 12 seconds remaining in the game. ",
      },
      {
        title: "Fuller has timely interception",
        imgURL: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        content:
          "With their backs against the wall and when they needed it most, Full comes up with huge INT",
      },
      {
        title: "Soldier Field Still Empty",
        imgURL: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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