using Aknur_Back.Models;

namespace Aknur_Back.Extensions
{
    public static class ToHtmlExtensions
    {
        public static string FeedbackToHtml(this Feedback feedback)
        {
            return "<i>Имя:</i> " + "<b>" + feedback.FirstName + "</b> <br>" +
        "<i>Фамилия: </i>" + "<b>" + feedback.LastName + "</b> <br>" +
        "<i>Email: </i>" + "<b>" + feedback.Email + "</b> <br>" +
        "<i>Номер телефона: </i>" + "<b>" + feedback.InternationalCode + " " + feedback.PhoneNumber + "</b> <br>" +
        "<i>Страна: </i>" + "<b>" + feedback.Country + "</b> <br>" +
        "<i>Город: </i>" + "<b>" + feedback.City + "</b> <br>" +
        "<i>Описание: </i>" + "<b>" + feedback.Description + "</b> <br>";
        }

        public static string DealerToHtml(this Dealer dealer)
        {
            return "<i>ФИО:</i> " + "<b>" + dealer.Name + "</b> <br>" +
        "<i>Email: </i>" + "<b>" + dealer.Email + "</b> <br>" +
        "<i>Номер телефона: </i>" + "<b>" + dealer.InternationalCode + " " + dealer.PhoneNumber + "</b> <br>" +
        "<i>Страна: </i>" + "<b>" + dealer.Country + "</b> <br>" +
        "<i>Город: </i>" + "<b>" + dealer.City + "</b> <br>" +
        "<i>Описание: </i>" + "<b>" + dealer.Description + "</b> <br>";
        }
    }
}
