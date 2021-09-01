using Aknur_Back.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Aknur_Back.Context.Configurations
{
    public class MailingConfiguration : IEntityTypeConfiguration<Mailing>
    {
        public void Configure(EntityTypeBuilder<Mailing> builder)
        {
        }
    }
}
