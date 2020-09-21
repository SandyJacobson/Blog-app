const db = require('../db/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts = 
    [
      {
        title: "Bears Win",
        imgURL: "https://www.chicagotribune.com/sports/bears/ct-cb-chicago-bears-10-thoughts-brad-biggs-20200914-qdncaufqm5dfdjfdffc7hdbsoy-story.html",
        content:
          "Trubisky suprisingly puts team on his back and leads insane Bears comeback to beat Detroit",
        userId: "Sandy Jacobson",
      },
      {
        title: "Trubisky Shines in the 4th",
        imgURL: "https://www.nbcsports.com/chicago/bears/under-center-podcast-trubisky-shines-big-win-over-cowboys",
        content:
          "After struggling in the first three quarters, Trubisky shines with a 3 TD fourth.",
        userId: "Sandy Jacobson",
      },
      {
        title: "Swift Drops winning TD",
        imgURL: "https://sports.yahoo.com/lions-gonna-lions-d-andre-swift-drops-a-sure-gamewinning-td-for-detroit-as-bears-come-back-to-win-202718928.html",
        content:
          "The rookie had a perfectly thrown ball go through his hands in the endzone with 12 seconds remaining in the game. ",
        userId: "Sandy Jacobson",
      },
      {
        title: "Fuller has timely interception",
        imgURL: "https://bearswire.usatoday.com/lists/chicago-bears-detroit-lions-final-score-recap-highlights-nfl-week-1/",
        content:
          "With their backs against the wall and when they needed it most, Full comes up with huge INT",
        userId: "Sandy Jacobson",
      },
      {
        title: "Soldier Field Still Empty",
        imgURL: "https://www.chicagotribune.com/sports/bears/ct-chicago-bears-pa-announcer-soldier-field-20200917-4zb73wtsarfftozgbmekqos3gq-story.html",
        content:
          "Soldier field witll remain closed for this weekends home opener",
        userId: "Sandy Jacobson",
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