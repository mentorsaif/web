using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyAspMvc.Controllers
{
    public class HomeController : Controller
    {
		// GET: Home
		//public ActionResult Index()
		//{
		//    return View();
		//}

		//public string Index()
		//{
		//	return "Hello World";
		//}

		public ViewResult Index()
		{
			return View();
		}
	}
}