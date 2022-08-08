const tweets = [
  {
    id: "1",
    text: "Привет!",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Иванов Иван",
    comments: [],
  },
  {
    id: "2",
    text: "Как дела?",
    createdAt: new Date("2022-03-09T23:00:01"),
    author: "Петров Петр",
    comments: [
      {
        id: "21",
        text: "Хорошо, а у тебя?",
        createdAt: new Date("2022-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "3",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-03-09T23:10:00"),
    author: "Андреев Давид",
    comments: [],
  },
  {
    id: "4",
    text: "Зачем нужен модуль?",
    createdAt: new Date("2022-03-09T23:10:50"),
    author: "Андреев Давид",
    comments: [
      {
        id: "22",
        text: "Модуль при помощи замыканий – это оборачивание пакета функциональности в единую внешнюю функцию, которая тут же выполняется.",
        createdAt: new Date("2022-03-09T23:15:05"),
        author: "Dolores Sanchez",
      },
    ],
  },
  {
    id: "5",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-03-09T23:20:00"),
    author: "Алексеева Полина",
    comments: [],
  },
  {
    id: "6",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-03-09T23:30:00"),
    author: "Robert Guzman",
    comments: [],
  },
  {
    id: "7",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-03-09T23:31:00"),
    author: "Wayne Martin",
    comments: [
      {
        id: "23",
        text: "Я пыталась заниматься йогой, но в позе лотоса уснула.",
        createdAt: new Date("2022-03-09T23:32:05"),
        author: "Dolores",
      },
    ],
  },
  {
    id: "8",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-03-09T23:35:10"),
    author: "Сергей",
    comments: [],
  },
  {
    id: "9",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-03-09T23:40:44"),
    author: "Женя",
    comments: [],
  },
  {
    id: "10",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-03-09T23:52:00"),
    author: "Михаил Соловьев",
    comments: [],
  },
  {
    id: "11",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-03-10T03:00:50"),
    author: "Ирина Лаптева",
    comments: [
      {
        id: "24",
        text: "Я пыталась заниматься йогой, но в позе лотоса уснула.",
        createdAt: new Date("2022-03-09T23:15:05"),
        author: "Dolores Sanchez",
      },
    ],
  },
  {
    id: "12",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-03-10T03:10:00"),
    author: "Дмитрий Лобанов",
    comments: [],
  },
  {
    id: "13",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-03-10T03:22:53"),
    author: "Даниил Тимофеев",
    comments: [],
  },
  {
    id: "14",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-03-09T23:10:00"),
    author: "Андреев Давид",
    comments: [],
  },
  {
    id: "15",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-03-19T11:10:00"),
    author: "Ян",
    comments: [],
  },
  {
    id: "16",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-03-12T23:10:00"),
    author: "Никита",
    comments: [
      {
        id: "25",
        text: "Я пыталась заниматься йогой, но в позе лотоса уснула.",
        createdAt: new Date("2022-03-09T23:15:05"),
        author: "Dolores Sanchez",
      },
      {
        id: "26",
        text: "Я пыталась заниматься йогой, но в позе лотоса уснула.",
        createdAt: new Date("2022-03-09T23:15:05"),
        author: "Dolores Sanchez",
      },
    ],
  },
  {
    id: "17",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-03-18T13:40:50"),
    author: "Олег",
    comments: [],
  },
  {
    id: "18",
    text: "Python",
    createdAt: new Date("2022-03-091T12:11:00"),
    author: "Mihnosha",
    comments: [
      {
        id: "28",
        text: "Я пыталась заниматься йогой, но в позе лотоса уснула.",
        createdAt: new Date("2022-03-09T23:15:05"),
        author: "Dolores Sanchez",
      },
    ],
  },
  {
    id: "19",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-04-09T23:10:00"),
    author: "Nata",
    comments: [],
  },
  {
    id: "20",
    text: "Если смогу, я сделаю это. Конец истории.",
    createdAt: new Date("2022-04-21T14:11:11"),
    author: "Zhenya",
    comments: [],
  },
];
let user;

// FIXME:hashtags
function getTweets(skip = 0, top = 10, filterConfig) {
  if (typeof skip === "object") {
    filterConfig = skip;
    skip = 0;
  }
  if (filterConfig === undefined) {
    return tweets
      .slice(skip, skip + top)
      .sort((a, b) => a.createdAt - b.createdAt);
  } else {
    let res = [];
    for (let tweet of tweets) {
      let counter = 0;
      for (let i = 0; i < Object.values(filterConfig).length; i++) {
        if (
          tweet[Object.keys(filterConfig)[i]].includes(
            Object.values(filterConfig)[i]
          )
        )
          counter++;
      }
      if (counter == Object.keys(filterConfig).length) res.push(tweet);
    }
    return res
      .slice(skip, skip + top)
      .sort((a, b) => a.createdAt - b.createdAt);
  }
}

function getTweet(id) {
  return tweets.filter((tweet) => tweet.id == id);
}

function validateTweet(tweet) {
  if (
    typeof tweet.id === "string" &&
    typeof tweet.text === "string" &&
    tweet.text.length <= 280 &&
    Object.prototype.toString.call(tweet.createdAt) === "[object Date]" &&
    tweet.createdAt != "Invalid Date" &&
    typeof tweet.author === "string" &&
    Array.isArray(tweet.comments)
  ) {
    return true;
  }
  return false;
}

console.log(
  validateTweet({
    id: "2",
    text: "Как дела?",
    createdAt: new Date("2022-03-09T23:00:01"),
    author: "Петров Петр",
    comments: [
      {
        id: "21",
        text: "Хорошо, а у тебя?",
        createdAt: new Date("2022-03-09T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  })
);
