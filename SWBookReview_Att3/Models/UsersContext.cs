using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SWBook.Models;

namespace SWBook.Models
{
    public class UsersContext : DbContext
    {
        public DbSet<AdminUsers> Users { get; set; }

        private const string connectionString =
            "Server=(localdb)\\mssqllocaldb;Database=AllUsers.mdb;Trusted_Connection=False;";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionString);

        }

      

        //Dont know where this came from but was causing an error so commented it out incase it comes up later
        //public DbSet<SWBook.Models.Users> Users_1 { get; set; }

    }
}
