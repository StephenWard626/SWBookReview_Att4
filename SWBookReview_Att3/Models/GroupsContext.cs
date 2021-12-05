using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SWBook.Models
{
    public class GroupsContext : DbContext
    {
        public DbSet<Groups> Groups { get; set; }

        private const string connectionString =
            "Server=(localdb)\\mssqllocaldb;Database=Groups1.mdb;Trusted_Connection=False;";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionString);

        }

    }
}
