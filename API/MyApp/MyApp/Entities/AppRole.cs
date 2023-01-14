using Microsoft.AspNetCore.Identity;

namespace MyApp.Entities
{
    public class AppRole: IdentityRole<int>
    {
        public ICollection<AppUserRole> UserRoles { get; set; }
    }
}
