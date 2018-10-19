module.exports = (Twitter) => {
  const getMessages = function getMessages() {
    let count = 0;
    const elem = document.querySelector('a[href="/messages"] div div');

    if (elem) {
      count = parseInt(elem.innerText, 10);
    }

    Twitter.setBadge(count);
  };

  Twitter.loop(getMessages);
};
