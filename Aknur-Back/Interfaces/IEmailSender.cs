using System.Threading.Tasks;

namespace Aknur_Back.Interfaces
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string htmlMessage);
    }
}
