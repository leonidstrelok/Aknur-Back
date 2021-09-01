using Aknur_Back.Interfaces;
using Aknur_Back.Options;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aknur_Back.Services
{
    public class MailKitEmailSender : IEmailSender
    {
        private readonly EmailOptions options;
        public MailKitEmailSender(IOptions<EmailOptions> options)
        {
            this.options = options.Value;
        }

        public async Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            var mimeMessage = MimeMessage(email, subject);

            mimeMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            { Text = htmlMessage };

            await Send(mimeMessage);
        }

        private MimeMessage MimeMessage(string email, string subject)
        {
            var mimeMessage = new MimeMessage();
            mimeMessage.From.Add(MailboxAddress.Parse(options.Sender));
            mimeMessage.To.Add(MailboxAddress.Parse(email));
            mimeMessage.Subject = subject;


            return mimeMessage;
        }

        private async Task Send(MimeMessage mimeMessage)
        {
            using SmtpClient smtpClient = new SmtpClient();
            smtpClient.ServerCertificateValidationCallback += (s, c, h, e) => true;
            await smtpClient.ConnectAsync(options.SmtpServer, options.Port, true);
            await smtpClient.AuthenticateAsync(options.UserName, options.Password);
            await smtpClient.SendAsync(mimeMessage);
            await smtpClient.DisconnectAsync(true);
        }
    }
}
