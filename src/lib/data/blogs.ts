const Blogs: BlogType[] = [
  {
    id: 1,
    title: "Handling Network Request Error pada Web & Aplikasi Mobile",
    description:
      "Banyak hal yang mungkin menyebabkan terjadinya error pada saat melakukan request API. Dalam proses nya backend biasanya melemparkan response error dengan HTTP response status code beserta content response dalam bentuk JSON. Response code yang digunakan juga beragam yang mungkin sering digunakan seperti 401, 402, 403, 404, 500, dll.",
    date: new Date("2022-05-20 17:27:23"),
    url: "https://medium.com/@wikinotes/error-dari-backend-ke-frontend-mobile-developer-795e9046d7b9",
  },
  {
    id: 2,
    title: "I don't really like Base Class",
    description:
      "Developing an application is hard. Maybe making a base class will make things easier ? That is what I think when making a base class. The good thing about base class is you just need to use function and variable from base class you create because you make base class to provide everything you need. For example you creating a BaseActivity class that provide viewBinding by generic, permission handler, Firebase Utils, overriding BaseActivity lifecycle with custom function, etc.",
    date: new Date("2022-05-20 18:05:08"),
    url: "https://wikinotes.medium.com/i-dont-really-like-base-class-cdb4b37211be",
  },
  {
    id: 3,
    title: "Network Request Error Handling on Web &amp; Mobile Application",
    description:
      "There is no perfect web and mobile application without and error or exception, that's why we need to handle every case of error and show it with nice UI design.\nFrom the API request that backend provide sometimes it return some HTTP response status code with some data in the response. Response status code that backend used like 401 for telling the user they are unauthorized to access the page, or 404 when page that user access is unavailable, and many more response code from 100 to 599.",
    date: new Date("2022-05-31 08:07:45"),
    url: "https://wikinotes.medium.com/network-request-error-handling-on-web-mobile-application-17b56df009a2",
  },
];

export default Blogs;