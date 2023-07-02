class HomeController {
  async index(req, res) {
    res.json("HomeIndex");
  }
}

export default new HomeController();
