
  const getData = async (req, res) => {
    const data = {
        title: 'Home Page',
        message: 'Welcome to the home page!'
      }
    res.render('index', { data });

}

const getDataAbout = async (req, res) => {
    const data = {
        title: 'About Page',
        message: 'Learn more about us!'
      }
    res.render('about', { data });

}

const getDataAContact = async (req, res) => {
  const data = {
      title: 'Contact Page',
      message: 'Contact Me!'
    }
  res.render('contact', { data });

}

module.exports = {
    getDataAbout,
    getData,
    getDataAContact
}