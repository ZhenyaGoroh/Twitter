const tweets = [
  {
    id: "1",
    text: "Привет!",
    createdAt: new Date("2022-03-09T23:00:00"),
    author: "Zhenya",
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
    text: "Если смогу, я сделаю это. Конец истории. #js",
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
    author: "Никита",
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

class Comment {
  constructor(comment) {
    this._id = comment.id;
    this.text = comment.text;
    this._createdAt = new Date(comment.createdAt);
    this._author = comment.author;
  }

  get id() {
    return this._id;
  }

  get author() {
    return this._author;
  }

  get createdAt() {
    return this._createdAt;
  }

  static validate(com) {
    return (
      typeof com.id === "string" &&
      typeof com.text === "string" &&
      com.text.length <= Tweet.maxTextLength &&
      com.createdAt instanceof Date &&
      typeof com.author === "string"
    );
  }
}

class Tweet {
  constructor(tweet) {
    this._id = tweet.id;
    this.text = tweet.text;
    this._createdAt = new Date(tweet.createdAt);
    this._author = tweet.author;
    this.comments = tweet.comments.map((comment) => new Comment(comment));
  }

  get id() {
    return this._id;
  }

  get author() {
    return this._author;
  }

  get createdAt() {
    return this._createdAt;
  }

  static maxTextLength = 280;

  static validate(tweet) {
    return (
      typeof tweet.id === "string" &&
      typeof tweet.text === "string" &&
      tweet.text.length <= Tweet.maxTextLength &&
      tweet.createdAt instanceof Date &&
      typeof tweet.author === "string" &&
      Array.isArray(tweet.comments)
    );
  }
}

class TweetCollection {
  constructor(tweets) {
    this.tweets = tweets;
  }
  //private mothods
  _user = "";

  get user() {
    return this._user;
  }

  set user(user) {
    this._user = user;
  }

  // get tweet by id
  #get(id) {
    return tweets.find((tweet) => tweet.id === id);
  }

  //public methods
  getPage(skip = 0, top = 10, filterConfig = {}) {
    return (
      this.tweets
        // поиск по автору
        .filter(
          (tweet) =>
            !filterConfig.author ||
            tweet.author
              .toLowerCase()
              .includes(filterConfig.author.toLowerCase())
        ) //поиск по тексту
        .filter(
          (tweet) =>
            !filterConfig.text ||
            tweet.text.toLowerCase().includes(filterConfig.text?.toLowerCase())
        ) //поиск по дате "c"
        .filter(
          (tweet) =>
            !filterConfig.dateFrom ||
            new Date(tweet.createdAt) >= new Date(filterConfig.dateFrom)
        ) //поиск по дате "до"
        .filter(
          (tweet) =>
            !filterConfig.dateTo ||
            new Date(tweet.createdAt) <= new Date(filterConfig.dateTo)
        )
        .slice(skip, skip + top)
    );
  }
  add(text) {
    if (typeof text !== "string" || text.length > Tweet.maxTextLength)
      return false;
    const tweet = {
      id: String(
        parseInt(new Date().toString().slice(7, 25).replace(/[^\d]/g, ""))
      ),
      text: text,
      createdAt: new Date(),
      author: this.user,
      comments: [],
    };
    if (Tweet.validate(tweet)) {
      this.tweets.push(tweet);
      return true;
    }

    return false;
  }

  edit(id, text) {
    if (
      typeof text !== "string" ||
      text.length > 280 ||
      this.#get(id).author !== this.user
    )
      return false;

    this.#get(id).text = text;
    return true;
  }

  remove(id) {
    if (this.#get(id).author !== this.user) return false;
    tweets.splice(tweets.indexOf(this.#get(id)), 1);
    return true;
  }

  addComment(id, text) {
    if (typeof text !== "string" && text.length > 280) return false;
    const comment = {
      id: String(
        parseInt(new Date().toString().slice(7, 25).replace(/[^\d]/g, ""))
      ),
      text: text,
      createdAt: new Date(),
      author: this.user,
    };
    if (Comment.validate(comment)) {
      this.#get(id).comments.push(new Comment(comment));
      return true;
    }
    return false;
  }

  addAll(tweets) {
    let invalidTweets = [];
    tweets.map((tweet) => {
      Tweet.validate(tweet)
        ? this.tweets.push(new Tweet(tweet))
        : invalidTweets.push(new Tweet(tweet));
    });
    return invalidTweets;
  }

  clear() {
    return (this.tweets = []);
  }
}

