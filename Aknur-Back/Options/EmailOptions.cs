using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aknur_Back.Options
{
    public class EmailOptions
    {
        public string Sender { get; set; }
        public string SmtpServer { get; set; }
        public int Port { get; set; }
        public bool UseSsl { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
