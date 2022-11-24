using MyApp.Entities;

namespace MyApp.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
