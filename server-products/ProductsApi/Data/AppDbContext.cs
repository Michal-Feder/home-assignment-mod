using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Category> Categories => Set<Category>();
    public DbSet<Product> Products => Set<Product>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>().HasData(
    new Category { Id = 1, Name = "אלקטרוניקה" },
    new Category { Id = 2, Name = "ספרים" },
    new Category { Id = 3, Name = "מטבח" }
);

        modelBuilder.Entity<Product>().HasData(
            new Product { Id = 1, Name = "מחשב נייד", Price = 4500, CategoryId = 1 },
            new Product { Id = 2, Name = "טלפון חכם", Price = 3200, CategoryId = 1 },
            new Product { Id = 3, Name = "ספר פיתוח", Price = 120, CategoryId = 2 },
            new Product { Id = 4, Name = "מחבת", Price = 90, CategoryId = 3 }
        );

    }
}
