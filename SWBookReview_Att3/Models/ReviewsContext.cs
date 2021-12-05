using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SWBook.Models
{
    public class ReviewsContext : DbContext
    {
        public DbSet<Reviews> Reviews { get; set; }

        private const string connectionString =
            "Server=(localdb)\\mssqllocaldb;Database=Reviews_1.mdb;Trusted_Connection=False;";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionString);

        }

    }
}
