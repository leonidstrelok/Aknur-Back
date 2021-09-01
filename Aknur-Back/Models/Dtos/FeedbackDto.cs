using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aknur_Back.Models.Dtos
{
    public class FeedbackDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string InternationalCode { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Description { get; set; }
    }
}
