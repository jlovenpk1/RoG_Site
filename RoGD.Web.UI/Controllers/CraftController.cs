using Microsoft.AspNetCore.Mvc;

namespace RoGD.Web.UI.Controllers
{
    public class CraftController: Controller
    {
        private readonly ILogger<HomeController> _logger;

        public CraftController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View("Ingot/Index");
        }
    }
}
