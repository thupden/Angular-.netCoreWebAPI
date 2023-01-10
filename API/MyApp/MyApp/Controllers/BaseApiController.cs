using Microsoft.AspNetCore.Mvc;
using MyApp.Helpers;

namespace MyApp.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [ApiController]
    [Route("api/[Controller]")]
    public class BaseApiController:Controller
    {

    }
}
