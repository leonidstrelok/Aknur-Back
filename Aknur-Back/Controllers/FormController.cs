using Aknur_Back.Context;
using Aknur_Back.Extensions;
using Aknur_Back.Interfaces;
using Aknur_Back.Models.Dtos;
using Aknur_Back.Options;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aknur_Back.Controllers
{
    [ApiController]
    [Route("api")]
    public class FormController : ControllerBase
    {
        private readonly IEmailSender emailSender;
        private readonly AppDbContext appDbContext;
        private readonly EmailOptions options;
        public FormController(IEmailSender emailSender, AppDbContext appDbContext, IOptions<EmailOptions> options)
        {
            this.options = options.Value;
            this.emailSender = emailSender;
            this.appDbContext = appDbContext;
        }

        [HttpPost("becomedealer")]
        public async Task<IActionResult> BecomDealer([FromForm] DealerDto dealerDto)
        {
            var dealer = new Models.Dealer
            {
                City = dealerDto.City,
                Country = dealerDto.Country,
                Description = dealerDto.Description,
                Email = dealerDto.Email,
                InternationalCode = dealerDto.InternationalCode,
                Name = dealerDto.Name,
                PhoneNumber = dealerDto.PhoneNumber,
            };
            await appDbContext.Dealers.AddAsync(dealer);
            await appDbContext.SaveChangesAsync();

            await emailSender.SendEmailAsync(options.UserName, "Форма для диллера", dealer.DealerToHtml());

            return Ok("Форма обратной связи успешно отправлена");
        }

        [HttpPost("feedback")]
        public async Task<IActionResult> FeedBack([FromForm] FeedbackDto feedbackDto)
        {
            var feedback = new Models.Feedback
            {
                City = feedbackDto.City,
                Country = feedbackDto.Country,
                Description = feedbackDto.Description,
                Email = feedbackDto.Email,
                FirstName = feedbackDto.FirstName,
                LastName = feedbackDto.LastName,
                InternationalCode = feedbackDto.InternationalCode,
                PhoneNumber = feedbackDto.PhoneNumber,
            };
            await appDbContext.Feedbacks.AddAsync(feedback);
            await appDbContext.SaveChangesAsync();
            await emailSender.SendEmailAsync(options.UserName, "Форма обратной связи", feedback.FeedbackToHtml());

            return NoContent();
        }
        [HttpPost("mailing")]
        public async Task<IActionResult> Mailing([FromForm] MailingDto mailingDto)
        {
            var mailing = new Models.Mailing
            {
                Email = mailingDto.Email
            };
            if (!await appDbContext.Mailings.AnyAsync(p => p.Email == mailingDto.Email))
            {
                await appDbContext.Mailings.AddAsync(mailing);
                await appDbContext.SaveChangesAsync();
                await emailSender.SendEmailAsync(mailingDto.Email, "Рассылка", "Вы успешно подписались на рассылку");
                return Ok("Пользователь успешно подписался на рассылку");
            }

            return Ok("Пользователь уже подписан на рассылку");
        }
    }
}
